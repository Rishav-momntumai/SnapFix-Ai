import { useState } from 'react';
import './StatusDisplay.css'; // Create this CSS file for custom styles

function StatusDisplay({ issues }) {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIssues = issues.filter(issue => {
    const matchesFilter = filter === 'all' || issue.status === filter;
    const matchesSearch = issue.id.toString().includes(searchTerm) || 
                         (issue.address && issue.address.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (issue.issue_type && issue.issue_type.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const statusCounts = issues.reduce((acc, issue) => {
    acc[issue.status] = (acc[issue.status] || 0) + 1;
    return acc;
  }, {});

  const statusColors = {
    'pending': '#FFC107',
    'in-progress': '#17A2B8',
    'resolved': '#28A745',
    'rejected': '#DC3545',
    'new': '#6C757D'
  };

  const severityColors = {
    'low': '#28A745',
    'medium': '#FFC107',
    'high': '#FD7E14',
    'critical': '#DC3545'
  };

  return (
    <div className="status-display-container">
      <div className="status-header">
        <h3>
          <i className="fas fa-tasks header-icon"></i>
          Submitted Issues
          <span className="badge-count">{issues.length}</span>
        </h3>
        
        <div className="controls">
          <div className="search-box">
            <i className="fas fa-search search-icon"></i>
            <input 
              type="text" 
              placeholder="Search issues..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All <span className="count-badge">{issues.length}</span>
            </button>
            
            {Object.entries(statusCounts).map(([status, count]) => (
              <button
                key={status}
                className={`filter-btn ${filter === status ? 'active' : ''}`}
                onClick={() => setFilter(status)}
                style={{ '--status-color': statusColors[status] || '#6C757D' }}
              >
                {status.replace('-', ' ')} <span className="count-badge">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredIssues.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-inbox empty-icon"></i>
          <h4>No issues found</h4>
          <p>{searchTerm ? 'Try a different search term' : 'No issues match the current filter'}</p>
        </div>
      ) : (
        <div className="issues-grid">
          {filteredIssues.map((issue) => (
            <div key={issue.id} className="issue-card">
              <div className="card-header">
                <span className="issue-id">#{issue.id}</span>
                <span 
                  className="status-badge"
                  style={{ backgroundColor: statusColors[issue.status] || '#6C757D' }}
                >
                  {issue.status}
                </span>
              </div>
              
              <div className="card-body">
                <div className="issue-property">
                  <label>Type:</label>
                  <span className="issue-type">{issue.issue_type || 'Not specified'}</span>
                </div>
                
                <div className="issue-property">
                  <label>Severity:</label>
                  <span 
                    className="severity-badge"
                    style={{ backgroundColor: severityColors[issue.severity?.toLowerCase()] || '#6C757D' }}
                  >
                    {issue.severity || 'Not specified'}
                  </span>
                </div>
                
                <div className="issue-property">
                  <label>Location:</label>
                  <span className="issue-address">
                    <i className="fas fa-map-marker-alt location-icon"></i>
                    {issue.address || 'No address provided'}
                  </span>
                </div>
                
                {issue.timestamp && (
                  <div className="issue-property">
                    <label>Reported:</label>
                    <span className="issue-date">
                      {new Date(issue.timestamp).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="card-footer">
                <button className="action-btn view-btn">
                  <i className="fas fa-eye"></i> View
                </button>
                <button className="action-btn update-btn">
                  <i className="fas fa-edit"></i> Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StatusDisplay;