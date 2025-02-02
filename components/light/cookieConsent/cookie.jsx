'use client';
import React, { useState, useEffect } from 'react';

function CookieConsent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    const consentTimestamp = localStorage.getItem('cookieConsentTimestamp');

    if (!consent || !consentTimestamp) {
      setShowPopup(true);
    } else {
      const now = new Date().getTime();
      const sixMonthsInMs = 6 * 30 * 24 * 60 * 60 * 1000; // 6 months in milliseconds

      if (now - parseInt(consentTimestamp, 10) > sixMonthsInMs) {
        localStorage.removeItem('cookieConsent');
        localStorage.removeItem('cookieConsentTimestamp');
        setShowPopup(true);
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookieConsentTimestamp', new Date().getTime().toString());
    setShowPopup(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    localStorage.setItem('cookieConsentTimestamp', new Date().getTime().toString());
    setShowPopup(false);
  };

  const containerStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    padding: '16px',
    border: '1px solid #e5e7eb',
    zIndex: 50,
    width: '320px',
    maxWidth: '384px',
  };

  const textStyle = {
    color: '#000000',
    fontSize: '14px',
    marginBottom: '16px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
  };

  const rejectButtonStyle = {
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid #007BFF',
    color: '#007BFF',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const acceptButtonStyle = {
    padding: '8px 16px',
    borderRadius: '8px',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    showPopup && (
      <div style={containerStyle}>
        <p style={textStyle}>
          We use cookies to enhance your experience. Do you accept our use of cookies?
        </p>
        <div style={buttonContainerStyle}>
          <button
            onClick={handleReject}
            style={rejectButtonStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#007BFF';
              e.target.style.color = '#ffffff';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#007BFF';
            }}
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            style={acceptButtonStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#0056b3';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#007BFF';
            }}
          >
            Accept
          </button>
        </div>
      </div>
    )
  );
}

export default CookieConsent;
