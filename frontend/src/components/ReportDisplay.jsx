import { useState } from 'react';
import './ReportDisplay.css'; // Create this CSS file for custom styles

function ReportDisplay({ issues }) {
  const [expandedReports, setExpandedReports] = useState({});

  const toggleReport = (id) => {
    setExpandedReports(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'No date available';
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="report-display-container">
      <h3 className="report-display-header">
        <span className="header-icon">📋</span>
        Issue Reports
        <span className="badge">{issues.length} {issues.length === 1 ? 'Report' : 'Reports'}</span>
      </h3>
      
      {issues.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <h4>No reports available</h4>
          <p>Submit your first issue report to see it appear here</p>
        </div>
      ) : (
        <div className="report-cards-container">
          {issues.map((issue) => (
            <div 
              key={issue.id} 
              className={`report-card ${expandedReports[issue.id] ? 'expanded' : ''}`}
              onClick={() => toggleReport(issue.id)}
            >
              <div className="card-header">
                <div className="header-content">
                  <span className="issue-id">Issue #{issue.id}</span>
                  <span className="issue-date">{formatDate(issue.timestamp)}</span>
                </div>
                <span className="expand-icon">
                  {expandedReports[issue.id] ? '−' : '+'}
                </span>
              </div>
              
              <div className="card-content">
                <div className="content-section">
                  <label>Status:</label>
                  <span className={`status-badge ${issue.status || 'pending'}`}>
                    {issue.status || 'Pending'}
                  </span>
                </div>
                
                {issue.category && (
                  <div className="content-section">
                    <label>Category:</label>
                    <span className="category-tag">{issue.category}</span>
                  </div>
                )}
                
                <div className="content-section full-width">
                  <label>Report:</label>
                  <pre className="report-content">{issue.report}</pre>
                </div>
                
                {expandedReports[issue.id] && issue.screenshot && (
                  <div className="screenshot-preview">
                    <label>Screenshot:</label>
                    <img 
                      src={issue.screenshot} 
                      alt={`Screenshot for issue ${issue.id}`} 
                      className="screenshot-image"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReportDisplay;