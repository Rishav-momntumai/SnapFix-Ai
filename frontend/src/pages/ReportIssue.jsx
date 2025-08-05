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
  FiChevronUp,
  FiEye,
  FiEdit,
  FiUser,
  FiClock,
  FiTag,
  FiMessageSquare,
  FiCheck,
  FiX,
  FiCamera,
  FiMap,
  FiStar,
  FiFilter,
  FiSearch
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
          className={`status-message ${
            status.includes('Error') 
              ? 'status-error' 
              : status.includes('Loading') 
                ? 'status-loading' 
                : 'status-success'
          }`}
          role="alert"
          onClick={() => controls.start('exit').then(() => setIsVisible(false))}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="status-emoji">{getStatusEmoji()}</span>
          <div className="status-content">
            {getStatusIcon()}
            <span>{status}</span>
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
  
  // Get status color based on issue status
  const getStatusColor = () => {
    switch (issue.status?.toLowerCase()) {
      case 'resolved':
        return 'status-resolved';
      case 'in-progress':
        return 'status-in-progress';
      case 'rejected':
        return 'status-rejected';
      default:
        return 'status-pending';
    }
  };
  
  // Get severity color based on issue severity
  const getSeverityColor = () => {
    switch (issue.severity?.toLowerCase()) {
      case 'critical':
        return 'severity-critical';
      case 'high':
        return 'severity-high';
      case 'medium':
        return 'severity-medium';
      case 'low':
        return 'severity-low';
      default:
        return 'severity-unknown';
    }
  };
  
  return (
    <motion.div
      key={uniqueKey}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`issue-card ${expanded ? 'expanded' : ''}`}
      onClick={toggleExpand}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="issue-header">
        <div className="issue-number">
          <span className="number">{index + 1}</span>
        </div>
        <div className="issue-title-container">
          <h5 className="issue-title">{issue.title || 'Untitled Issue'}</h5>
          <div className="issue-meta">
            <span className={`status-badge ${getStatusColor()}`}>
              {issue.status || 'Pending'}
            </span>
            <span className={`severity-badge ${getSeverityColor()}`}>
              {issue.severity || 'Unknown'}
            </span>
          </div>
        </div>
        <div className="expand-icon">
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="issue-details"
          >
            <div className="detail-row">
              <div className="detail-item">
                <FiMapPin className="detail-icon" />
                <span>{issue.location || 'No location provided'}</span>
              </div>
              <div className="detail-item">
                <FiCalendar className="detail-icon" />
                <span>{issue.date ? new Date(issue.date).toLocaleDateString() : 'No date provided'}</span>
              </div>
            </div>
            
            <div className="detail-row">
              <div className="detail-item">
                <FiUser className="detail-icon" />
                <span>Reported by: {issue.reporter || 'Anonymous'}</span>
              </div>
              <div className="detail-item">
                <FiClock className="detail-icon" />
                <span>{issue.timestamp ? new Date(issue.timestamp).toLocaleString() : 'No timestamp'}</span>
              </div>
            </div>
            
            <div className="detail-row">
              <div className="detail-item full-width">
                <FiInfo className="detail-icon" />
                <p>{issue.description || 'No description provided'}</p>
              </div>
            </div>
            
            {issue.category && (
              <div className="detail-row">
                <div className="detail-item">
                  <FiTag className="detail-icon" />
                  <span>Category: {issue.category}</span>
                </div>
              </div>
            )}
            
            {issue.image && (
              <motion.div 
                className="issue-image-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img 
                  src={issue.image} 
                  alt="Issue" 
                  className="issue-image"
                />
              </motion.div>
            )}
            
            <div className="issue-actions">
              <button className="action-btn view-btn">
                <FiEye />
                <span>View Details</span>
              </button>
              <button className="action-btn edit-btn">
                <FiEdit />
                <span>Edit</span>
              </button>
            </div>
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
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
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
        id: issue.id || `issue-${index}`,
        title: issue.title || `Issue #${index + 1}`,
        location: issue.location || 'Unknown location',
        date: issue.date || new Date().toISOString(),
        description: issue.description || 'No description provided',
        reporter: issue.reporter || 'Anonymous',
        timestamp: issue.timestamp || new Date().toISOString(),
        status: issue.status || 'pending',
        severity: issue.severity || 'medium',
        category: issue.category || 'general'
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
  
  // Filter issues based on search term and status filter
  const filteredIssues = issues.filter(issue => {
    const matchesSearch = searchTerm === '' || 
      issue.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.location?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || issue.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });
  
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
  
  const statusOptions = [
    { value: 'all', label: 'All Statuses' },
    { value: 'pending', label: 'Pending' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'resolved', label: 'Resolved' },
    { value: 'rejected', label: 'Rejected' }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="report-issue-container"
      ref={ref}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div 
              className="main-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              whileHover={{ y: -5 }}
            >
              <div className="card-header">
                <motion.h2 
                  className="card-title"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <FiUploadCloud className="title-icon" />
                  Report a Community Issue 🏘️
                </motion.h2>
              </div>
              
              <div className="card-body">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.p 
                    className="lead-text"
                    animate={{
                      color: ['#333', '#333', '#333'] // Static color
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
                    className="issues-section"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                  >
                    <motion.div 
                      className="section-header"
                      variants={itemVariants}
                    >
                      <h3 className="section-title">
                        <FiRefreshCw className="section-icon" />
                        📋 Recent Community Issues
                      </h3>
                      
                      <div className="section-controls">
                        <div className="search-container">
                          <FiSearch className="search-icon" />
                          <input
                            type="text"
                            placeholder="Search issues..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                          />
                        </div>
                        
                        <button 
                          className="filter-toggle"
                          onClick={() => setShowFilters(!showFilters)}
                        >
                          <FiFilter />
                          <span>Filters</span>
                        </button>
                      </div>
                    </motion.div>
                    
                    <AnimatePresence>
                      {showFilters && (
                        <motion.div 
                          className="filters-panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="filter-options">
                            <span className="filter-label">Filter by status:</span>
                            <div className="status-filters">
                              {statusOptions.map(option => (
                                <button
                                  key={option.value}
                                  className={`status-filter ${filterStatus === option.value ? 'active' : ''}`}
                                  onClick={() => setFilterStatus(option.value)}
                                >
                                  {option.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {filteredIssues.length === 0 ? (
                      <motion.div 
                        className="no-issues"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="no-issues-icon">
                          <FiSearch />
                        </div>
                        <h4>No issues found</h4>
                        <p>Try adjusting your search or filter criteria</p>
                      </motion.div>
                    ) : (
                      <motion.div className="issues-list" variants={containerVariants}>
                        {filteredIssues.slice(0, 5).map((issue, index) => (
                          <IssueCard
                            key={issue.id}
                            issue={issue}
                            index={index}
                            expanded={expandedIssue === issue.id}
                            toggleExpand={() => toggleExpandIssue(issue.id)}
                          />
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>
              
              <div className="card-footer">
                <motion.button
                  onClick={fetchIssues}
                  disabled={isLoading}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="refresh-btn"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {isLoading ? (
                    <>
                      <FiLoader className="animate-spin" />
                      <span>Refreshing... ♻️</span>
                    </>
                  ) : (
                    <>
                      <FiRefreshCw />
                      <span>Refresh Issues 🔄</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style>{`
        .report-issue-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
          padding: 2rem 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .main-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .card-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .card-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
          transform: rotate(45deg);
        }
        
        .card-title {
          color: white;
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .title-icon {
          font-size: 1.5rem;
        }
        
        .card-body {
          padding: 2rem;
        }
        
        .lead-text {
          color: #4a5568;
          font-size: 1.125rem;
          text-align: center;
          margin-bottom: 2rem;
          font-weight: 500;
        }
        
        .status-message {
          display: flex;
          align-items: center;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          margin-top: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .status-emoji {
          font-size: 1.5rem;
          margin-right: 0.75rem;
        }
        
        .status-content {
          display: flex;
          align-items: center;
          font-weight: 500;
        }
        
        .status-error {
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
          color: #c53030;
        }
        
        .status-loading {
          background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
          color: #2b6cb0;
        }
        
        .status-success {
          background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
          color: #2f855a;
        }
        
        .issues-section {
          margin-top: 3rem;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .section-title {
          color: #2d3748;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .section-icon {
          color: #667eea;
        }
        
        .section-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .search-container {
          position: relative;
          width: 250px;
        }
        
        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
        }
        
        .search-input {
          width: 100%;
          padding: 0.5rem 0.5rem 0.5rem 2.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .filter-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          font-size: 0.875rem;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .filter-toggle:hover {
          background: #edf2f7;
        }
        
        .filters-panel {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: #f7fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }
        
        .filter-options {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .filter-label {
          font-weight: 500;
          color: #4a5568;
          white-space: nowrap;
        }
        
        .status-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .status-filter {
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
          background: white;
          border: 1px solid #e2e8f0;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .status-filter.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }
        
        .issues-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .issue-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          padding: 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        
        .issue-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }
        
        .issue-card.expanded {
          border-color: #667eea;
        }
        
        .issue-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .issue-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }
        
        .number {
          font-size: 1.125rem;
        }
        
        .issue-title-container {
          flex: 1;
        }
        
        .issue-title {
          margin: 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .issue-meta {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }
        
        .status-badge, .severity-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .status-resolved {
          background: #c6f6d5;
          color: #276749;
        }
        
        .status-in-progress {
          background: #bee3f8;
          color: #2c5282;
        }
        
        .status-rejected {
          background: #fed7d7;
          color: #9b2c2c;
        }
        
        .status-pending {
          background: #faf089;
          color: #744210;
        }
        
        .severity-critical {
          background: #fed7d7;
          color: #9b2c2c;
        }
        
        .severity-high {
          background: #feebc8;
          color: #9c4221;
        }
        
        .severity-medium {
          background: #faf089;
          color: #744210;
        }
        
        .severity-low {
          background: #c6f6d5;
          color: #276749;
        }
        
        .severity-unknown {
          background: #e2e8f0;
          color: #4a5568;
        }
        
        .expand-icon {
          color: #a0aec0;
          flex-shrink: 0;
        }
        
        .issue-details {
          margin-top: 1.25rem;
          padding-top: 1.25rem;
          border-top: 1px solid #e2e8f0;
        }
        
        .detail-row {
          display: flex;
          margin-bottom: 1rem;
          gap: 1rem;
        }
        
        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #4a5568;
          font-size: 0.875rem;
        }
        
        .detail-item.full-width {
          width: 100%;
        }
        
        .detail-icon {
          color: #667eea;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }
        
        .issue-image-container {
          margin-top: 1rem;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .issue-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
        }
        
        .issue-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.25rem;
        }
        
        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        
        .view-btn {
          background: #edf2f7;
          color: #4a5568;
        }
        
        .view-btn:hover {
          background: #e2e8f0;
        }
        
        .edit-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .edit-btn:hover {
          opacity: 0.9;
        }
        
        .card-footer {
          background: #f7fafc;
          padding: 1.5rem;
          text-align: center;
          border-top: 1px solid #e2e8f0;
        }
        
        .refresh-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .refresh-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .refresh-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .no-issues {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          text-align: center;
          color: #a0aec0;
        }
        
        .no-issues-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        
        .no-issues h4 {
          margin: 0 0 0.5rem;
          color: #4a5568;
        }
        
        .no-issues p {
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .report-issue-container {
            padding: 1rem 0;
          }
          
          .card-header {
            padding: 1.5rem;
          }
          
          .card-title {
            font-size: 1.5rem;
          }
          
          .card-body {
            padding: 1.5rem;
          }
          
          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .search-container {
            width: 100%;
          }
          
          .filter-options {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .issue-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          
          .detail-row {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .issue-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default ReportIssue;