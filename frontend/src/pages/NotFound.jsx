import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

function NotFound() {
  return (
    <div className="not-found-container">
      <motion.div 
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="error-code"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          4<motion.span 
            animate={{ 
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 1
            }}
          >0</motion.span>4
        </motion.div>
        
        <motion.div 
          className="error-illustration"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="astronaut">
            <div className="astronaut-body">
              <div className="helmet">
                <div className="helmet-glass"></div>
              </div>
              <div className="astronaut-backpack"></div>
            </div>
            <div className="astronaut-arm left-arm"></div>
            <div className="astronaut-arm right-arm"></div>
            <div className="astronaut-leg left-leg"></div>
            <div className="astronaut-leg right-leg"></div>
          </div>
          
          <div className="planet"></div>
          <div className="stars">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="star" style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}></div>
            ))}
          </div>
          <div className="meteors">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="meteor" style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}></div>
            ))}
          </div>
        </motion.div>
        
        <motion.h1 
          className="error-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Oops! Page Not Found
        </motion.h1>
        
        <motion.p 
          className="error-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </motion.p>
        
        <motion.div 
          className="error-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link to="/" className="btn primary-btn">
            <Home className="btn-icon" />
            Back to Home
          </Link>
          <button className="btn secondary-btn" onClick={() => window.history.back()}>
            <ArrowLeft className="btn-icon" />
            Go Back
          </button>
        </motion.div>
        
        <motion.div 
          className="search-suggestion"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p>Or try searching for what you need:</p>
          <div className="search-box">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Search our site..." 
              className="search-input"
            />
          </div>
        </motion.div>
      </motion.div>
      
      <style>{`
        .not-found-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1c3d 0%, #2d3561 50%, #3a4175 100%);
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .not-found-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, rgba(120, 119, 198, 0) 50%),
                      radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, rgba(255, 119, 198, 0) 50%),
                      radial-gradient(circle at 40% 20%, rgba(255, 219, 112, 0.1) 0%, rgba(255, 219, 112, 0) 50%);
          z-index: 1;
        }
        
        .not-found-content {
          max-width: 800px;
          text-align: center;
          z-index: 2;
          position: relative;
        }
        
        .error-code {
          font-size: 12rem;
          font-weight: 900;
          line-height: 1;
          color: rgba(255, 255, 255, 0.1);
          margin-bottom: 1rem;
          letter-spacing: -0.05em;
          user-select: none;
        }
        
        .error-illustration {
          position: relative;
          height: 300px;
          margin: 2rem 0;
        }
        
        .astronaut {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
        }
        
        .astronaut-body {
          width: 100px;
          height: 120px;
          background: linear-gradient(135deg, #e6e6e6, #ffffff);
          border-radius: 50px 50px 30px 30px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .helmet {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #e6e6e6, #ffffff);
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }
        
        .helmet-glass {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(100, 200, 255, 0.3), rgba(150, 220, 255, 0.1));
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }
        
        .astronaut-backpack {
          position: absolute;
          top: 20px;
          right: -20px;
          width: 40px;
          height: 60px;
          background: linear-gradient(135deg, #d0d0d0, #f0f0f0);
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .astronaut-arm {
          position: absolute;
          width: 25px;
          height: 70px;
          background: linear-gradient(135deg, #e6e6e6, #ffffff);
          border-radius: 12px;
          top: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .left-arm {
          left: -20px;
          transform: rotate(-20deg);
          transform-origin: top center;
        }
        
        .right-arm {
          right: -20px;
          transform: rotate(20deg);
          transform-origin: top center;
        }
        
        .astronaut-leg {
          position: absolute;
          width: 30px;
          height: 60px;
          background: linear-gradient(135deg, #e6e6e6, #ffffff);
          border-radius: 15px;
          bottom: -50px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .left-leg {
          left: 20px;
          transform: rotate(-10deg);
          transform-origin: top center;
        }
        
        .right-leg {
          right: 20px;
          transform: rotate(10deg);
          transform-origin: top center;
        }
        
        .planet {
          position: absolute;
          bottom: 20px;
          right: 100px;
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          border-radius: 50%;
          box-shadow: 0 0 30px rgba(255, 107, 107, 0.5);
          z-index: 2;
        }
        
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        .meteors {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .meteor {
          position: absolute;
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));
          transform: rotate(-45deg);
          animation: meteor 3s infinite;
        }
        
        @keyframes meteor {
          0% { 
            transform: translateX(-100px) translateY(-100px) rotate(-45deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          20%, 100% { 
            transform: translateX(300px) translateY(300px) rotate(-45deg);
            opacity: 0;
          }
        }
        
        .error-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }
        
        .error-message {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        
        .error-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        
        .primary-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }
        
        .secondary-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .btn-icon {
          width: 20px;
          height: 20px;
        }
        
        .search-suggestion {
          max-width: 500px;
          margin: 0 auto;
        }
        
        .search-suggestion p {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
        }
        
        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 0.5rem 1rem;
          backdrop-filter: blur(10px);
        }
        
        .search-icon {
          color: rgba(255, 255, 255, 0.7);
          margin-right: 0.5rem;
        }
        
        .search-input {
          background: none;
          border: none;
          color: white;
          font-size: 1rem;
          width: 100%;
          outline: none;
        }
        
        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        @media (max-width: 768px) {
          .error-code {
            font-size: 8rem;
          }
          
          .error-title {
            font-size: 2rem;
          }
          
          .error-message {
            font-size: 1rem;
          }
          
          .error-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 200px;
            justify-content: center;
          }
          
          .planet {
            width: 100px;
            height: 100px;
            right: 50px;
          }
        }
      `}</style>
    </div>
  );
}

export default NotFound;