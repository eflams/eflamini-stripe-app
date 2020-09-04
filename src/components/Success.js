import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const sessionId = location.search.replace('?session_id=', '');

  return (
    <div className="sr-root">
      <div className="sr-main">
        <div className="sr-payment-summary completed-view">
          <h1>Your payment succeeded</h1>
          <h4>Checkout Session ID:</h4>
        </div>
        <div className="sr-section completed-view">
          <div className="sr-callout">
            <pre>{sessionId}</pre>
          </div>
          <Link to="/">Restart demo</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;