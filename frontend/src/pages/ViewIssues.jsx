import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { 
  FiAlertCircle, 
  FiCheckCircle, 
  FiRefreshCw,
  FiFilter,
  FiSearch,
  FiChevronDown,
  FiChevronUp,
  FiMapPin,
  FiCalendar,
  FiClock,
  FiTrendingUp
} from 'react-icons/fi';
import StatusDisplay from '../components/StatusDisplay';
import ReportDisplay from '../components/ReportDisplay';

const IssueCard = ({ issue, index, expanded, toggleExpand }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
      className={`card mb-3 shadow-sm ${expanded ? 'border-primary' : ''}`}
      onClick={toggleExpand}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className={`badge bg-${getPriorityColor(issue.priority)} me-3`}>
              {issue.priority}
            </div>
            <h5 className="mb-0">{issue.title}</h5>
          </div>
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        
        <div className="d-flex mt-2">
          <small className="text-muted me-3">
            <FiMapPin className="me-1" /> {issue.location}
          </small>
          <small className="text-muted">
            <FiCalendar className="me-1" /> {new Date(issue.date).toLocaleDateString()}
          </small>
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
              <hr />
              <p>{issue.description}</p>
              {issue.image && (
                <img 
                  src={issue.image} 
                  alt="Issue" 
                  className="img-fluid rounded mt-2"
                />
              )}
              <div className="mt-3 d-flex justify-content-between">
                <span className="badge bg-light text-dark">
                  <FiClock className="me-1" /> Reported {formatTimeAgo(issue.date)}
                </span>
                <span className={`badge bg-${issue.status === 'resolved' ? 'success' : 'warning'}`}>
                  {issue.status}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

function ViewIssues() {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    sort: 'newest'
  });
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
    setLoading(true);
    try {
      // Simulate network delay for demo
      await new Promise(resolve => setTimeout(resolve, 800));
      const response = await fetch('http://localhost:8000/api/issues');
      const data = await response.json();
      setIssues(data);
      setFilteredIssues(data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  useEffect(() => {
    let results = [...issues];
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(issue =>
        issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply status filter
    if (filters.status !== 'all') {
      results = results.filter(issue => issue.status === filters.status);
    }
    
    // Apply priority filter
    if (filters.priority !== 'all') {
      results = results.filter(issue => issue.priority === filters.priority);
    }
    
    // Apply sorting
    if (filters.sort === 'newest') {
      results.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filters.sort === 'oldest') {
      results.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (filters.sort === 'priority') {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      results.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
    }
    
    setFilteredIssues(results);
  }, [issues, searchTerm, filters]);

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

  const statsVariants = {
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
      exit={{ opacity: 0 }}
      className="container py-5"
      ref={ref}
    >
      <motion.div
        className="row justify-content-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="col-lg-10">
          <motion.div 
            className="text-center mb-5"
            variants={statsVariants}
          >
            <h2 className="display-5 fw-bold mb-3">Community Issues Dashboard</h2>
            <p className="lead text-muted">
              Track and manage all reported community issues in one place
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div 
            className="row mb-4 g-4"
            variants={containerVariants}
          >
            <motion.div className="col-md-3" variants={statsVariants}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center">
                  <FiAlertCircle size={24} className="text-danger mb-2" />
                  <h3 className="mb-0">
                    {issues.filter(i => i.status === 'open').length}
                  </h3>
                  <p className="text-muted mb-0">Open Issues</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="col-md-3" variants={statsVariants}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center">
                  <FiCheckCircle size={24} className="text-success mb-2" />
                  <h3 className="mb-0">
                    {issues.filter(i => i.status === 'resolved').length}
                  </h3>
                  <p className="text-muted mb-0">Resolved</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="col-md-3" variants={statsVariants}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center">
                  <FiTrendingUp size={24} className="text-primary mb-2" />
                  <h3 className="mb-0">
                    {issues.filter(i => i.priority === 'high').length}
                  </h3>
                  <p className="text-muted mb-0">High Priority</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="col-md-3" variants={statsVariants}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center">
                  <FiClock size={24} className="text-warning mb-2" />
                  <h3 className="mb-0">
                    {issues.length > 0 ? 
                      formatTimeAgo(issues.reduce((a, b) => 
                        new Date(a.date) > new Date(b.date) ? a : b
                      ).date) : 'N/A'}
                  </h3>
                  <p className="text-muted mb-0">Last Reported</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Filters and Search */}
          <motion.div 
            className="card shadow-sm mb-4"
            variants={statsVariants}
          >
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-6 mb-3 mb-md-0">
                  <div className="input-group">
                    <span className="input-group-text">
                      <FiSearch />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search issues..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-wrap gap-2">
                    <select
                      className="form-select flex-grow-1"
                      value={filters.status}
                      onChange={(e) => setFilters({...filters, status: e.target.value})}
                    >
                      <option value="all">All Statuses</option>
                      <option value="open">Open</option>
                      <option value="in-progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                    
                    <select
                      className="form-select flex-grow-1"
                      value={filters.priority}
                      onChange={(e) => setFilters({...filters, priority: e.target.value})}
                    >
                      <option value="all">All Priorities</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                    
                    <select
                      className="form-select flex-grow-1"
                      value={filters.sort}
                      onChange={(e) => setFilters({...filters, sort: e.target.value})}
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="priority">By Priority</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Loading State */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-5"
              >
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading community issues...</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Issues List */}
          {!loading && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">
                  Showing {filteredIssues.length} {filteredIssues.length === 1 ? 'issue' : 'issues'}
                </h5>
                <button
                  onClick={fetchIssues}
                  className="btn btn-outline-primary btn-sm"
                  disabled={loading}
                >
                  <FiRefreshCw className={`me-1 ${loading ? 'spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {filteredIssues.length > 0 ? (
                <div className="list-group">
                  {filteredIssues.map((issue, index) => (
                    <IssueCard
                      key={issue.id}
                      issue={issue}
                      index={index}
                      expanded={expandedIssue === issue.id}
                      toggleExpand={() => toggleExpandIssue(issue.id)}
                    />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="card shadow-sm text-center py-5"
                >
                  <FiFilter size={48} className="text-muted mb-3" />
                  <h5>No issues found</h5>
                  <p className="text-muted">
                    Try adjusting your search or filters
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setFilters({
                        status: 'all',
                        priority: 'all',
                        sort: 'newest'
                      });
                    }}
                    className="btn btn-primary mt-3"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Helper functions
function getPriorityColor(priority) {
  switch (priority) {
    case 'high': return 'danger';
    case 'medium': return 'warning';
    case 'low': return 'success';
    default: return 'secondary';
  }
}

function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  return `${Math.floor(diffInSeconds / 86400)} days ago`;
}

export default ViewIssues;