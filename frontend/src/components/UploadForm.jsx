import { useState, useRef } from 'react';
import './UploadForm.css';

function UploadForm({ setStatus, fetchIssues }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [issueType, setIssueType] = useState('public');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('medium');
  const [reportPreview, setReportPreview] = useState(null);
  const [issueId, setIssueId] = useState(null);
  const [declineReason, setDeclineReason] = useState('');
  const [showDeclineForm, setShowDeclineForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedReport, setEditedReport] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const fileInputRef = useRef(null);

  const categories = {
    public: [
      'Pothole', 'Broken Streetlight', 'Graffiti', 'Garbage', 'Fire Hazard',
      'Road Damage', 'Vandalism', 'Flood', 'Other'
    ],
    business: [
      'Furniture Damage', 'Home Repair', 'Property Damage', 'Other'
    ]
  };

  const severities = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'critical', label: 'Critical' }
  ];

  const priorities = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' }
  ];

  const issueTypes = [
    { value: 'public', label: 'Public Issue (e.g., potholes, garbage)' },
    { value: 'business', label: 'Business/Private Issue (e.g., home repairs)' }
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setStatus('Image size exceeds 5MB limit');
        return;
      }
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const getLocation = () => {
    setIsLoading(true);
    setStatus('Getting your location...');
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setStatus('Location captured successfully');
          setIsLoading(false);
        },
        (error) => {
          setStatus(`Error: ${error.message}`);
          setIsLoading(false);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setStatus('Geolocation is not supported by your browser');
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!image) {
      setStatus('Please upload an image');
      return;
    }
    if (!description || description.length > 500) {
      setStatus('Please provide a description (max 500 characters)');
      return;
    }
    if (!address && !coordinates) {
      setStatus('Please provide an address or use current location');
      return;
    }
    if (!selectedCategory) {
      setStatus('Please select a category');
      return;
    }

    setIsLoading(true);
    setStatus('Generating report...');

    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('category', issueType); // Use issueType for category
    formData.append('severity', selectedSeverity);
    formData.append('issue_type', selectedCategory.toLowerCase().replace(/\s/g, '_'));
    
    if (coordinates) {
      formData.append('latitude', coordinates.latitude);
      formData.append('longitude', coordinates.longitude);
    }

    try {
      const response = await fetch('https://snapfix-ai.onrender.com/api/issues', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setStatus('Report generated! Please review.');
        setReportPreview(result.report);
        setEditedReport(result.report.report);
        setIssueId(result.id);
        setImage(null);
        setPreview(null);
        setDescription('');
        setAddress('');
        setCoordinates(null);
        setIssueType('public');
        setSelectedCategory('');
        setSelectedSeverity('medium');
      } else {
        setStatus(`Error: ${result.detail || 'Failed to generate report'}`);
      }
    } catch (error) {
      setStatus('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditChange = (section, field, value, index = null) => {
    setEditedReport((prev) => {
      const updated = { ...prev };
      if (section) {
        updated[section][field] = value;
      } else if (index !== null) {
        updated[field][index] = value;
      }
      return updated;
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setStatus(isEditing ? 'Report preview updated.' : 'Editing report...');
  };

  const handleAccept = async () => {
    setIsLoading(true);
    setStatus('Submitting report...');
  
    try {
      const response = await fetch(`https://snapfix-ai.onrender.com/api/issues/${issueId}/accept`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ edited_report: editedReport }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSuccessMessage('Thank you for using SnapFix!');
        setStatus(`Issue submitted successfully! ID: ${result.id}`);
        fetchIssues();
        setReportPreview(null);
        setEditedReport(null);
        setIssueId(null);
        setShowDeclineForm(false);
        setDeclineReason('');
        setIsEditing(false);
      } else {
        setStatus(`Error: ${result.detail || 'Failed to submit issue'}`);
      }
    } catch (error) {
      setStatus('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDecline = () => {
    setShowDeclineForm(true);
    setStatus('Please provide a reason for rejecting the report.');
  };

  const handleDeclineSubmit = async (e) => {
    e.preventDefault();
    
    if (!declineReason) {
      setStatus('Please provide a decline reason.');
      return;
    }

    setIsLoading(true);
    setStatus('Generating updated report...');

    try {
      const response = await fetch(`https://snapfix-ai.onrender.com/api/issues/${issueId}/decline`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ decline_reason: declineReason, edited_report: editedReport }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setStatus('Updated report generated! Please review.');
        setReportPreview(result.report);
        setEditedReport(result.report.report);
        setShowDeclineForm(false);
        setDeclineReason('');
      } else {
        setStatus(`Error: ${result.detail || 'Failed to generate updated report'}`);
      }
    } catch (error) {
      setStatus('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="upload-form-container">
      <div className="form-header">
        <h4>
          <i className="fas fa-bullhorn header-icon"></i>
          Report an Issue
        </h4>
        <p className="subtitle">Help improve your community by reporting issues</p>
      </div>

      {!reportPreview ? (
        <form onSubmit={handleSubmit} className="issue-form">
          <div className="form-section">
            <label className="section-label">Type of Issue</label>
            <div className="issue-type-selector">
              {issueTypes.map((type) => (
                <label key={type.value} className="issue-type-option">
                  <input
                    type="radio"
                    name="issueType"
                    value={type.value}
                    checked={issueType === type.value}
                    onChange={() => {
                      setIssueType(type.value);
                      setSelectedCategory('');
                    }}
                  />
                  <span className={`issue-type-label ${type.value}`}>
                    {type.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <label className="section-label">Visual Evidence</label>
            <div 
              className={`image-upload-area ${preview ? 'has-image' : ''}`}
              onClick={triggerFileInput}
            >
              {preview ? (
                <div className="image-preview-container">
                  <img src={preview} alt="Preview" className="image-preview" />
                  <button 
                    type="button" 
                    className="change-image-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerFileInput();
                    }}
                  >
                    <i className="fas fa-camera"></i> Change Image
                  </button>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <i className="fas fa-camera upload-icon"></i>
                  <p>Click to upload an image</p>
                  <p className="hint">Max 5MB • JPEG</p>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="file-input"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <label htmlFor="description" className="section-label">Description</label>
            <textarea
              id="description"
              className="description-input"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the issue in detail (max 500 characters)..."
              maxLength={500}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-section">
              <label className="section-label">Category</label>
              <div className="category-buttons">
                {categories[issueType].map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`category-btn ${selectedCategory === category ? 'selected' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-section">
              <label className="section-label">Severity</label>
              <div className="severity-selector">
                {severities.map((severity) => (
                  <div key={severity.value} className="severity-option">
                    <label>
                      <input
                        type="radio"
                        name="severity"
                        value={severity.value}
                        checked={selectedSeverity === severity.value}
                        onChange={() => setSelectedSeverity(severity.value)}
                      />
                      <span className={`severity-label ${severity.value}`}>
                        {severity.label}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="form-section">
            <label className="section-label">Location</label>
            <div className="location-inputs">
              <input
                type="text"
                className="address-input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street address or landmark"
              />
              <div className="location-or">OR</div>
              <div className="gps-section">
                <div className="coordinates-display">
                  {coordinates ? (
                    <>
                      <i className="fas fa-check-circle success-icon"></i>
                      <span>Location captured</span>
                    </>
                  ) : (
                    <span className="no-coordinates">No GPS coordinates available</span>
                  )}
                </div>
                <button
                  type="button"
                  className={`gps-btn ${isLoading ? 'loading' : ''}`}
                  onClick={getLocation}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Locating...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-arrow-circle-up"></i> Use Current Location
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading || !image || !description || !selectedCategory}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Submitting...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Generate Report
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="report-preview-container">
          <h3 className="report-preview-header">
            <i className="fas fa-file-alt header-icon"></i>
            Review Generated Report
          </h3>
          
          <button 
            className="edit-btn"
            onClick={toggleEdit}
            disabled={isLoading}
          >
            <i className="fas fa-edit"></i> {isEditing ? 'Save Draft' : 'Edit Report'}
          </button>

          <div className="report-content">
            <div className="report-section">
              <h4>Issue Overview</h4>
              <p><strong>Type:</strong> {editedReport.issue_overview.issue_type}</p>
              <p><strong>Severity:</strong> 
                {isEditing ? (
                  <select
                    value={editedReport.issue_overview.severity}
                    onChange={(e) => handleEditChange('issue_overview', 'severity', e.target.value)}
                    className="edit-input"
                  >
                    {severities.map((severity) => (
                      <option key={severity.value} value={severity.value}>{severity.label}</option>
                    ))}
                  </select>
                ) : (
                  editedReport.issue_overview.severity
                )}
              </p>
              <p><strong>Confidence:</strong> {editedReport.issue_overview.confidence}%</p>
              <p><strong>Category:</strong> {editedReport.issue_overview.category}</p>
              <p><strong>Summary:</strong> 
                {isEditing ? (
                  <textarea
                    value={editedReport.issue_overview.summary_explanation}
                    onChange={(e) => handleEditChange('issue_overview', 'summary_explanation', e.target.value)}
                    className="edit-textarea"
                    rows="4"
                    maxLength={200}
                  />
                ) : (
                  editedReport.issue_overview.summary_explanation
                )}
              </p>
            </div>
            
            <div className="report-section">
              <h4>Location Details</h4>
              <p><strong>Address:</strong> {reportPreview.report.template_fields.address || 'Not specified'}</p>
              <p><strong>Map Link:</strong> 
                <a href={reportPreview.report.template_fields.map_link} target="_blank">
                  {reportPreview.report.template_fields.map_link || 'No map link available'}
                </a>
              </p>
            </div>
            
            <div className="report-section">
              <h4>Priority</h4>
              {isEditing ? (
                <select
                  value={editedReport.template_fields.priority}
                  onChange={(e) => handleEditChange('template_fields', 'priority', e.target.value)}
                  className="edit-input"
                >
                  {priorities.map((priority) => (
                    <option key={priority.value} value={priority.value}>{priority.label}</option>
                  ))}
                </select>
              ) : (
                <p>{editedReport.template_fields.priority}</p>
              )}
            </div>
            
            <div className="report-section">
              <h4>Photo Evidence</h4>
              <img src={`data:image/jpeg;base64,${reportPreview.image_content}`} alt="Issue" className="report-image" />
              <p><small>File: {reportPreview.report.template_fields.image_filename}</small></p>
            </div>
            
            <div className="report-section">
              <h4>Recommended Actions</h4>
              {isEditing ? (
                editedReport.recommended_actions.map((action, index) => (
                  <input
                    key={index}
                    type="text"
                    value={action}
                    onChange={(e) => handleEditChange(null, 'recommended_actions', e.target.value, index)}
                    className="edit-input"
                  />
                ))
              ) : (
                <ul>
                  {editedReport.recommended_actions.map((action, index) => (
                    <li key={index}>{action}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="report-section">
              <h4>AI Analysis</h4>
              <p><strong>Potential Impact:</strong> {editedReport.detailed_analysis.potential_consequences_if_ignored}</p>
              <p><strong>Urgency Reason:</strong> {editedReport.detailed_analysis.public_safety_risk}</p>
            </div>

            <div className="report-section">
              <h4>Responsible Authorities</h4>
              <ul>
                {editedReport.responsible_authorities_or_parties.map((authority, index) => (
                  <li key={index}>{authority.name} ({authority.type})</li>
                ))}
              </ul>
            </div>
          </div>
          
          {!showDeclineForm ? (
            <div className="report-actions">
              <button 
                className="accept-btn"
                onClick={handleAccept}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Accepting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-check"></i> Accept Report
                  </>
                )}
              </button>
              <button 
                className="decline-btn"
                onClick={handleDecline}
                disabled={isLoading}
              >
                <i className="fas fa-times"></i> Decline Report
              </button>
            </div>
          ) : (
            <form onSubmit={handleDeclineSubmit} className="decline-form">
              <div className="form-section">
                <label htmlFor="declineReason" className="section-label">Reason for Declining</label>
                <textarea
                  id="declineReason"
                  className="description-input"
                  rows="4"
                  value={declineReason}
                  onChange={(e) => setDeclineReason(e.target.value)}
                  placeholder="Please explain why you are declining this report..."
                  required
                />
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading || !declineReason}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Submitting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Submit Feedback
                  </>
                )}
              </button>
            </form>
          )}

          {successMessage && (
            <div className="success-message">
              <i className="fas fa-check-circle success-icon"></i>
              {successMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UploadForm;