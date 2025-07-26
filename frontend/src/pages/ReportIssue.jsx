import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { 
  FiUploadCloud, 
  FiAlertCircle, 
  FiCheckCircle, 
  FiLoader, 
  FiRefreshCw,
  FiMapPin,
  FiCalendar,
  FiInfo,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';
import UploadForm from '../components/UploadForm';

const StatusMessage = ({ status }) => {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    if (status) {
      setIsVisible(true);
      controls.start('animate');
      
      if (!status.includes('Loading')) {
        const timer = setTimeout(() => {
          controls.start('exit').then(() => setIsVisible(false));
        }, 5000);
        return () => clearTimeout(timer);
      }
    } else {
      controls.start('exit').then(() => setIsVisible(false));
    }
  }, [status, controls]);

  const variants = {
    initial: { opacity: 0, y: -20, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 20 
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const getStatusIcon = () => {
    if (status.includes('Error')) return <FiAlertCircle className="me-2" />;
    if (status.includes('Loading')) return <FiLoader className="me-2 animate-spin" />;
    return <FiCheckCircle className="me-2" />;
  };

  const getStatusEmoji = () => {
    if (status.includes('Error')) return '🚨';
    if (status.includes('Loading')) return '⏳';
    if (status.includes('Success')) return '🎉';
    return 'ℹ️';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={variants}
          initial="initial"
          animate={controls}
          exit="exit"
          className={`alert d-flex align-items-center ${
            status.includes('Error') 
              ? 'alert-danger' 
              : status.includes('Loading') 
                ? 'alert-info' 
                : 'alert-success'
          } mt-3 rounded-pill shadow-sm`}
          role="alert"
          style={{ cursor: 'pointer' }}
          onClick={() => controls.start('exit').then(() => setIsVisible(false))}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="fs-4 me-2">{getStatusEmoji()}</span>
          <div className="d-flex align-items-center">
            {getStatusIcon()}
            <span style={{ color: 'black' }}>{status}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const IssueCard = ({ issue, index, expanded, toggleExpand }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Ensure issue.id exists, fallback to index if not available
  const uniqueKey = issue.id || `issue-${index}`;

  return (
    <motion.div
      key={uniqueKey} // Ensure unique key
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`list-group-item list-group-item-action rounded-3 mb-2 overflow-hidden ${expanded ? 'active' : ''}`}
      style={{ cursor: 'pointer', backgroundColor: '#fff', color: '#000' }}
      onClick={toggleExpand}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className={`me-3 p-2 rounded-circle ${expanded ? 'bg-white text-black' : 'bg-black text-white'}`}>
            {index + 1}
          </div>
          <h5 className="mb-0" style={{ color: '#000' }}>{issue.title}</h5>
        </div>
        {expanded ? <FiChevronUp style={{ color: '#000' }} /> : <FiChevronDown style={{ color: '#000' }} />}
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3"
          >
            <div className="d-flex align-items-center mb-2">
              <FiMapPin className="me-2" style={{ color: '#000' }} />
              <small style={{ color: '#000' }}>📍 {issue.location}</small>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FiCalendar className="me-2" style={{ color: '#000' }} />
              <small style={{ color: '#000' }}>📅 {new Date(issue.date).toLocaleDateString()}</small>
            </div>
            <div className="d-flex align-items-start">
              <FiInfo className="me-2 mt-1" style={{ color: '#000' }} />
              <p className="mb-0" style={{ color: '#000' }}>{issue.description}</p>
            </div>
            {issue.image && (
              <motion.img 
                src={issue.image} 
                alt="Issue" 
                className="img-fluid rounded mt-3 shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ color: '#000' }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function ReportIssue() {
  const [status, setStatus] = useState('');
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedIssue, setExpandedIssue] = useState(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const fetchIssues = async () => {
    setIsLoading(true);
    setStatus('🔍 Loading issues... Please wait');
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const response = await fetch('http://localhost:8000/api/issues');
      const data = await response.json();
      // Ensure each issue has a unique id, fallback to index if missing
      const issuesWithIds = data.map((issue, index) => ({
        ...issue,
        id: issue.id || `issue-${index}`
      }));
      setIssues(issuesWithIds);
      setStatus('✅ Successfully loaded issues!');
    } catch (error) {
      setStatus('🚨 Error fetching issues. Please try again later.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleExpandIssue = (id) => {
    setExpandedIssue(expandedIssue === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container my-5"
      ref={ref}
      style={{ backgroundColor: '#fff', color: '#000' }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <motion.div 
            className="card shadow-lg border-0 rounded-4 overflow-hidden"
            style={{ backgroundColor: '#fff', color: '#000' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            whileHover={{ y: -5 }}
          >
            <div className="card-header bg-white py-4 position-relative" style={{ color: '#000' }}>
              <motion.h2 
                className="h4 mb-0 text-center position-relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ color: '#000' }}
              >
                <FiUploadCloud className="me-2" style={{ color: '#000' }} />
                Report a Community Issue 🏘️
              </motion.h2>
            </div>
            
            <div className="card-body p-4 p-md-5" style={{ backgroundColor: '#fff', color: '#000' }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.p 
                  className="lead mb-4"
                  animate={{
                    color: ['#000', '#000', '#000'] // Static black color
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity
                  }}
                >
                  Snap a photo 📸 of the problem and our AI will analyze it automatically!
                </motion.p>
                
                <UploadForm setStatus={setStatus} fetchIssues={fetchIssues} />
                
                <StatusMessage status={status} />
              </motion.div>

              {issues.length > 0 && (
                <motion.div
                  className="mt-5"
                  variants={containerVariants}
                  initial="hidden"
                  animate={controls}
                  style={{ backgroundColor: '#fff', color: '#000' }}
                >
                  <motion.h3 
                    className="h5 mb-3 d-flex align-items-center"
                    variants={itemVariants}
                    style={{ color: '#000' }}
                  >
                    <FiRefreshCw className="me-2" style={{ color: '#000' }} />
                    📋 Recent Community Issues
                  </motion.h3>
                  
                  <motion.div className="list-group" variants={containerVariants}>
                    {issues.slice(0, 5).map((issue, index) => (
                      <IssueCard
                        key={issue.id} // Use issue.id as key
                        issue={issue}
                        index={index}
                        expanded={expandedIssue === issue.id}
                        toggleExpand={() => toggleExpandIssue(issue.id)}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </div>
            
            <div className="card-footer bg-light text-center py-3" style={{ backgroundColor: '#f8f9fa', color: '#000' }}>
              <motion.button
                onClick={fetchIssues}
                disabled={isLoading}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="btn btn-primary rounded-pill px-4 shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ backgroundColor: '#000', color: '#fff' }}
              >
                {isLoading ? (
                  <>
                    <FiLoader className="animate-spin me-2" />
                    Refreshing... ♻️
                  </>
                ) : (
                  <>
                    <FiRefreshCw className="me-2" />
                    Refresh Issues 🔄
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ReportIssue;