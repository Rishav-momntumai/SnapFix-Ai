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
      
      // Auto-dismiss after 5 seconds unless it's a loading message
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
            {status}
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

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`list-group-item list-group-item-action rounded-3 mb-2 overflow-hidden ${expanded ? 'active' : ''}`}
      style={{ cursor: 'pointer' }}
      onClick={toggleExpand}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className={`me-3 p-2 rounded-circle ${expanded ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
            {index + 1}
          </div>
          <h5 className="mb-0">{issue.title}</h5>
        </div>
        {expanded ? <FiChevronUp /> : <FiChevronDown />}
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
              <FiMapPin className="me-2" />
              <small>📍 {issue.location}</small>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FiCalendar className="me-2" />
              <small>📅 {new Date(issue.date).toLocaleDateString()}</small>
            </div>
            <div className="d-flex align-items-start">
              <FiInfo className="me-2 mt-1" />
              <p className="mb-0">{issue.description}</p>
            </div>
            {issue.image && (
              <motion.img 
                src={issue.image} 
                alt="Issue" 
                className="img-fluid rounded mt-3 shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
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
      // Simulate network delay for demo purposes
      await new Promise(resolve => setTimeout(resolve, 800));
      const response = await fetch('http://localhost:8000/api/issues');
      const data = await response.json();
      setIssues(data);
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
    >
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <motion.div 
            className="card shadow-lg border-0 rounded-4 overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            whileHover={{ y: -5 }}
          >
            <div className="card-header bg-gradient-primary text-white py-4 position-relative">
              <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden opacity-25">
                <motion.div 
                  className="position-absolute rounded-circle bg-white"
                  style={{
                    width: '300px',
                    height: '300px',
                    top: '-50px',
                    right: '-50px'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="position-absolute rounded-circle bg-white"
                  style={{
                    width: '200px',
                    height: '200px',
                    bottom: '-30px',
                    left: '-30px'
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
              <motion.h2 
                className="h4 mb-0 text-center position-relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <FiUploadCloud className="me-2" />
                Report a Community Issue 🏘️
              </motion.h2>
            </div>
            
            <div className="card-body p-4 p-md-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.p 
                  className="lead text-muted mb-4"
                  animate={{
                    color: ['#6c757d', '#0d6efd', '#6c757d']
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
                >
                  <motion.h3 
                    className="h5 mb-3 d-flex align-items-center"
                    variants={itemVariants}
                  >
                    <FiRefreshCw className="me-2" />
                    📋 Recent Community Issues
                  </motion.h3>
                  
                  <motion.div className="list-group" variants={containerVariants}>
                    {issues.slice(0, 5).map((issue, index) => (
                      <IssueCard
                        key={issue.id}
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
            
            <div className="card-footer bg-light text-center py-3">
              <motion.button
                onClick={fetchIssues}
                disabled={isLoading}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="btn btn-primary rounded-pill px-4 shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
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