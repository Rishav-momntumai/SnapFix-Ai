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
  FiTrendingUp,
  FiUser,
  FiTag,
  FiMessageSquare,
  FiEye,
  FiEdit,
  FiWifi,
  FiWifiOff,
  FiSettings,
  FiDownload,
  FiGrid,
  FiList,
  FiBarChart2,
  FiActivity,
  FiCheck,
  FiX,
  FiPlus,
  FiBell
} from 'react-icons/fi';
import StatusDisplay from '../components/StatusDisplay';
import ReportDisplay from '../components/ReportDisplay';

const IssueCard = ({ issue, index, expanded, toggleExpand }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'resolved': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'resolved': return <FiCheckCircle className="text-green-500" />;
      case 'in-progress': return <FiClock className="text-blue-500" />;
      case 'rejected': return <FiX className="text-red-500" />;
      default: return <FiAlertCircle className="text-yellow-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
      className={`issue-card ${expanded ? 'expanded' : ''}`}
      onClick={toggleExpand}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="issue-header">
        <div className="issue-meta">
          <span className={`priority-badge ${getPriorityColor(issue.priority)}`}>
            {issue.priority}
          </span>
          <h5 className="issue-title">{issue.title}</h5>
        </div>
        <div className="expand-icon">
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
      
      <div className="issue-info">
        <div className="info-item">
          <FiMapPin className="info-icon" />
          <span>{issue.location}</span>
        </div>
        <div className="info-item">
          <FiCalendar className="info-icon" />
          <span>{new Date(issue.date).toLocaleDateString()}</span>
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
            <div className="detail-section">
              <div className="detail-header">
                <h6>Description</h6>
                <span className={`status-badge ${getStatusColor(issue.status)}`}>
                  {getStatusIcon(issue.status)}
                  {issue.status}
                </span>
              </div>
              <p>{issue.description}</p>
            </div>
            
            {issue.image && (
              <div className="detail-section">
                <h6>Image</h6>
                <img 
                  src={issue.image} 
                  alt="Issue" 
                  className="issue-image"
                />
              </div>
            )}
            
            <div className="detail-footer">
              <span className="reported-time">
                <FiClock className="me-1" /> Reported {formatTimeAgo(issue.date)}
              </span>
              <div className="issue-actions">
                <button className="action-btn">
                  <FiEye />
                  <span>View</span>
                </button>
                <button className="action-btn">
                  <FiEdit />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function ViewIssues() {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [realTimeEnabled, setRealTimeEnabled] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    sort: 'newest'
  });
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'
  const [expandedIssue, setExpandedIssue] = useState(null);
  const [notificationCount, setNotificationCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const wsRef = useRef(null);
  
  // Initialize WebSocket connection for real-time updates
  useEffect(() => {
    if (realTimeEnabled) {
      try {
        // For demo purposes, we'll simulate WebSocket with setInterval
        // In a real app, you would connect to your WebSocket server
        const interval = setInterval(() => {
          fetchIssues(false); // Silent refresh
        }, 10000); // Update every 10 seconds
        
        return () => clearInterval(interval);
      } catch (error) {
        console.error('WebSocket connection failed:', error);
        setRealTimeEnabled(false);
      }
    }
  }, [realTimeEnabled]);
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  const fetchIssues = async (showLoading = true) => {
    if (showLoading) setLoading(true);
    try {
      // Simulate network delay for demo
      await new Promise(resolve => setTimeout(resolve, 800));
      const response = await fetch('http://localhost:8000/api/issues');
      const data = await response.json();
      
      // Check if there are new issues
      if (issues.length > 0 && data.length > issues.length) {
        const newIssuesCount = data.length - issues.length;
        setNotificationCount(prev => prev + newIssuesCount);
      }
      
      setIssues(data);
      setFilteredIssues(data);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching issues:', error);
    } finally {
      if (showLoading) setLoading(false);
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
      results.sort((a, b) => new Date(a.date) - new Date(a.date));
    } else if (filters.sort === 'priority') {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      results.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
    }
    
    setFilteredIssues(results);
  }, [issues, searchTerm, filters]);
  
  const toggleExpandIssue = (id) => {
    setExpandedIssue(expandedIssue === id ? null : id);
  };
  
  const toggleRealTime = () => {
    setRealTimeEnabled(!realTimeEnabled);
    if (!realTimeEnabled) {
      setNotificationCount(0);
    }
  };
  
  const clearNotifications = () => {
    setNotificationCount(0);
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
      className="view-issues-container"
      ref={ref}
    >
      <div className="container">
        <motion.div
          className="dashboard-header"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="header-content">
            <div className="header-title">
              <h1>Community Issues Dashboard</h1>
              <p>Track and manage all reported community issues in real-time</p>
            </div>
            
            <div className="header-actions">
              <div className="real-time-indicator">
                <button 
                  className={`real-time-toggle ${realTimeEnabled ? 'active' : ''}`}
                  onClick={toggleRealTime}
                >
                  {realTimeEnabled ? <FiWifi /> : <FiWifiOff />}
                  <span>Real-time {realTimeEnabled ? 'On' : 'Off'}</span>
                </button>
                {realTimeEnabled && (
                  <div className="last-updated">
                    <FiClock />
                    <span>Updated: {formatTimeAgo(lastUpdated)}</span>
                  </div>
                )}
              </div>
              
              <div className="notification-container">
                <button className="notification-btn" onClick={clearNotifications}>
                  <FiBell />
                  {notificationCount > 0 && (
                    <span className="notification-badge">{notificationCount}</span>
                  )}
                </button>
              </div>
              
              <button className="refresh-btn" onClick={() => fetchIssues()}>
                <FiRefreshCw className={loading ? 'spin' : ''} />
              </button>
              
              <button className="settings-btn">
                <FiSettings />
              </button>
            </div>
          </div>
          
          {/* Stats Overview */}
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
          >
            <motion.div className="stat-card" variants={statsVariants}>
              <div className="stat-icon danger">
                <FiAlertCircle />
              </div>
              <div className="stat-content">
                <h3>{issues.filter(i => i.status === 'open').length}</h3>
                <p>Open Issues</p>
              </div>
            </motion.div>
            
            <motion.div className="stat-card" variants={statsVariants}>
              <div className="stat-icon success">
                <FiCheckCircle />
              </div>
              <div className="stat-content">
                <h3>{issues.filter(i => i.status === 'resolved').length}</h3>
                <p>Resolved</p>
              </div>
            </motion.div>
            
            <motion.div className="stat-card" variants={statsVariants}>
              <div className="stat-icon warning">
                <FiTrendingUp />
              </div>
              <div className="stat-content">
                <h3>{issues.filter(i => i.priority === 'high').length}</h3>
                <p>High Priority</p>
              </div>
            </motion.div>
            
            <motion.div className="stat-card" variants={statsVariants}>
              <div className="stat-icon info">
                <FiActivity />
              </div>
              <div className="stat-content">
                <h3>
                  {issues.length > 0 ? 
                    formatTimeAgo(issues.reduce((a, b) => 
                      new Date(a.date) > new Date(b.date) ? a : b
                    ).date) : 'N/A'}
                </h3>
                <p>Last Reported</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Filters and Search */}
          <motion.div 
            className="filters-section"
            variants={statsVariants}
          >
            <div className="filters-header">
              <h3>Filters & Search</h3>
              <div className="view-mode-toggle">
                <button 
                  className={`view-mode-btn ${viewMode === 'cards' ? 'active' : ''}`}
                  onClick={() => setViewMode('cards')}
                >
                  <FiGrid />
                </button>
                <button 
                  className={`view-mode-btn ${viewMode === 'table' ? 'active' : ''}`}
                  onClick={() => setViewMode('table')}
                >
                  <FiList />
                </button>
              </div>
            </div>
            
            <div className="filters-content">
              <div className="search-container">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search issues by title, description, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              
              <div className="filter-options">
                <select
                  className="filter-select"
                  value={filters.status}
                  onChange={(e) => setFilters({...filters, status: e.target.value})}
                >
                  <option value="all">All Statuses</option>
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
                
                <select
                  className="filter-select"
                  value={filters.priority}
                  onChange={(e) => setFilters({...filters, priority: e.target.value})}
                >
                  <option value="all">All Priorities</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                
                <select
                  className="filter-select"
                  value={filters.sort}
                  onChange={(e) => setFilters({...filters, sort: e.target.value})}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="priority">By Priority</option>
                </select>
                
                <button className="export-btn">
                  <FiDownload />
                  <span>Export</span>
                </button>
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
                className="loading-container"
              >
                <div className="loading-spinner"></div>
                <p>Loading community issues...</p>
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
              <div className="issues-header">
                <div className="issues-count">
                  <h3>Community Issues</h3>
                  <p>Showing {filteredIssues.length} of {issues.length} issues</p>
                </div>
                
                <button className="add-issue-btn">
                  <FiPlus />
                  <span>Add New Issue</span>
                </button>
              </div>
              
              {filteredIssues.length > 0 ? (
                viewMode === 'cards' ? (
                  <div className="issues-grid">
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
                  <div className="issues-table">
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Title</th>
                          <th>Priority</th>
                          <th>Status</th>
                          <th>Location</th>
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredIssues.map((issue) => (
                          <tr key={issue.id}>
                            <td>#{issue.id}</td>
                            <td>{issue.title}</td>
                            <td>
                              <span className={`priority-badge ${getPriorityColor(issue.priority)}`}>
                                {issue.priority}
                              </span>
                            </td>
                            <td>
                              <span className={`status-badge ${getStatusColor(issue.status)}`}>
                                {getStatusIcon(issue.status)}
                                {issue.status}
                              </span>
                            </td>
                            <td>{issue.location}</td>
                            <td>{new Date(issue.date).toLocaleDateString()}</td>
                            <td>
                              <div className="table-actions">
                                <button className="action-btn-icon">
                                  <FiEye />
                                </button>
                                <button className="action-btn-icon">
                                  <FiEdit />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="empty-state"
                >
                  <div className="empty-icon">
                    <FiFilter />
                  </div>
                  <h5>No issues found</h5>
                  <p>Try adjusting your search or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setFilters({
                        status: 'all',
                        priority: 'all',
                        sort: 'newest'
                      });
                    }}
                    className="reset-filters-btn"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
      
      <style>{`
        .view-issues-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
          padding: 2rem 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .dashboard-header {
          margin-bottom: 2rem;
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }
        
        .header-title h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 0.5rem;
        }
        
        .header-title p {
          color: #718096;
          margin: 0;
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .real-time-indicator {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        
        .real-time-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .real-time-toggle.active {
          background: #e6fffa;
          border-color: #81e6d9;
          color: #234e52;
        }
        
        .last-updated {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #718096;
          margin-top: 0.25rem;
        }
        
        .notification-container {
          position: relative;
        }
        
        .notification-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .notification-btn:hover {
          background: #f7fafc;
        }
        
        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #e53e3e;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .refresh-btn, .settings-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .refresh-btn:hover, .settings-btn:hover {
          background: #f7fafc;
        }
        
        .refresh-btn.spin svg {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .stat-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        
        .stat-icon.danger {
          background: #fed7d7;
          color: #e53e3e;
        }
        
        .stat-icon.success {
          background: #c6f6d5;
          color: #38a169;
        }
        
        .stat-icon.warning {
          background: #feebc8;
          color: #dd6b20;
        }
        
        .stat-icon.info {
          background: #bee3f8;
          color: #3182ce;
        }
        
        .stat-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }
        
        .stat-content p {
          color: #718096;
          margin: 0;
        }
        
        .filters-section {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .filters-header h3 {
          margin: 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .view-mode-toggle {
          display: flex;
          background: #f7fafc;
          border-radius: 8px;
          padding: 4px;
        }
        
        .view-mode-btn {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #718096;
          transition: all 0.3s ease;
        }
        
        .view-mode-btn.active {
          background: white;
          color: #4a5568;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .filters-content {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .search-container {
          position: relative;
          flex: 1;
          min-width: 300px;
        }
        
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
        }
        
        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .filter-options {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .filter-select {
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.875rem;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .export-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .export-btn:hover {
          background: #5a67d8;
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #f3f4f6;
          border-top: 5px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }
        
        .issues-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .issues-count h3 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .issues-count p {
          margin: 0;
          color: #718096;
        }
        
        .add-issue-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .add-issue-btn:hover {
          background: #5a67d8;
        }
        
        .issues-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }
        
        .issue-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .issue-card:hover {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .issue-card.expanded {
          border: 1px solid #667eea;
        }
        
        .issue-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1.25rem;
        }
        
        .issue-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .priority-badge {
          align-self: flex-start;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .issue-title {
          margin: 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .expand-icon {
          color: #a0aec0;
        }
        
        .issue-info {
          display: flex;
          gap: 1rem;
          padding: 0 1.25rem 1.25rem;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4a5568;
          font-size: 0.875rem;
        }
        
        .info-icon {
          color: #667eea;
        }
        
        .issue-details {
          padding: 0 1.25rem 1.25rem;
          border-top: 1px solid #e2e8f0;
        }
        
        .detail-section {
          margin-bottom: 1rem;
        }
        
        .detail-section:last-child {
          margin-bottom: 0;
        }
        
        .detail-section h6 {
          margin: 0 0 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #4a5568;
        }
        
        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .detail-section p {
          margin: 0;
          color: #4a5568;
          line-height: 1.5;
        }
        
        .issue-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-top: 0.5rem;
        }
        
        .detail-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }
        
        .reported-time {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #718096;
          font-size: 0.75rem;
        }
        
        .issue-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .action-btn:hover {
          background: #edf2f7;
        }
        
        .issues-table {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        
        .issues-table table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .issues-table th {
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #4a5568;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .issues-table td {
          padding: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .issues-table tr:last-child td {
          border-bottom: none;
        }
        
        .table-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .action-btn-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .action-btn-icon:hover {
          background: #edf2f7;
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          text-align: center;
        }
        
        .empty-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #edf2f7;
          color: #a0aec0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .empty-state h5 {
          margin: 0 0 0.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .empty-state p {
          margin: 0 0 1.5rem;
          color: #718096;
        }
        
        .reset-filters-btn {
          padding: 0.75rem 1.5rem;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .reset-filters-btn:hover {
          background: #5a67d8;
        }
        
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .filters-content {
            flex-direction: column;
          }
          
          .search-container {
            min-width: 100%;
          }
          
          .filter-options {
            width: 100%;
          }
          
          .issues-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .issues-grid {
            grid-template-columns: 1fr;
          }
          
          .issues-table {
            overflow-x: auto;
          }
        }
      `}</style>
    </motion.div>
  );
}

// Helper functions
function getPriorityColor(priority) {
  switch (priority?.toLowerCase()) {
    case 'high': return 'bg-red-100 text-red-800 border-red-200';
    case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'low': return 'bg-green-100 text-green-800 border-green-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}

function getStatusColor(status) {
  switch (status?.toLowerCase()) {
    case 'resolved': return 'bg-green-100 text-green-800 border-green-200';
    case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
    default: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
  }
}

function getStatusIcon(status) {
  switch (status?.toLowerCase()) {
    case 'resolved': return <FiCheckCircle className="text-green-500" />;
    case 'in-progress': return <FiClock className="text-blue-500" />;
    case 'rejected': return <FiX className="text-red-500" />;
    default: return <FiAlertCircle className="text-yellow-500" />;
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