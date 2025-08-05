import React, { useEffect, useState, useMemo, useRef } from 'react';
// Mock components for demonstration
const Link = React.forwardRef(({ to, children, className, ...props }, ref) => (
  <a href={to} className={className} ref={ref} {...props}>
    {children}
  </a>
));
// Enhanced mock framer-motion components with forwardRef
const motion = {
  div: React.forwardRef(({ children, className, initial, animate, transition, whileInView, whileHover, whileTap, style, ...props }, ref) => (
    <div className={className} style={style} ref={ref} {...props}>
      {children}
    </div>
  )),
  h2: React.forwardRef(({ children, className, initial, whileInView, transition, ...props }, ref) => (
    <h2 className={className} ref={ref} {...props}>
      {children}
    </h2>
  ))
};
// Mock react-intersection-observer
const useInView = (options) => {
  return [React.useRef(), true]; // Always return true for demo
};
// Enhanced mock react-icons with futuristic styling
const FiUpload = ({ className, size }) => <span className={`${className} futuristic-icon`}>🔧</span>;
const FiMapPin = ({ className, size }) => <span className={`${className} futuristic-icon`}>📍</span>;
const FiFileText = ({ className, size }) => <span className={`${className} futuristic-icon`}>📄</span>;
const FiCheckCircle = ({ className, size }) => <span className={`${className} futuristic-icon`}>✅</span>;
const FiClock = ({ className, size }) => <span className={`${className} futuristic-icon`}>⏱️</span>;
const FiUsers = ({ className, size }) => <span className={`${className} futuristic-icon`}>👥</span>;
const FiCamera = ({ className, size }) => <span className={`${className} futuristic-icon`}>📷</span>;
const FiBarChart2 = ({ className, size }) => <span className={`${className} futuristic-icon`}>📊</span>;
const FiShield = ({ className, size }) => <span className={`${className} futuristic-icon`}>🛡️</span>;
const FiStar = ({ className, size }) => <span className={`${className} futuristic-icon`}>⭐</span>;
const FiMail = ({ className, size }) => <span className={`${className} futuristic-icon`}>✉️</span>;
const FiTwitter = ({ className, size }) => <span className={`${className} futuristic-icon`}>🐦</span>;
const FiFacebook = ({ className, size }) => <span className={`${className} futuristic-icon`}>📘</span>;
const FiInstagram = ({ className, size }) => <span className={`${className} futuristic-icon`}>📸</span>;
const FiLinkedin = ({ className, size }) => <span className={`${className} futuristic-icon`}>💼</span>;
const FiZap = ({ className, size }) => <span className={`${className} futuristic-icon`}>⚡</span>;
const FiCpu = ({ className, size }) => <span className={`${className} futuristic-icon`}>🖥️</span>;
const FiLayers = ({ className, size }) => <span className={`${className} futuristic-icon`}>🗂️</span>;
const FiActivity = ({ className, size }) => <span className={`${className} futuristic-icon`}>📈</span>;

function FeatureCard({ icon, title, description, delay }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      className="feature-card-container"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay * 0.2}s`
      }}
    >
      <div className="feature-card">
        <div className="feature-icon-wrapper">
          <div className="feature-icon-bg"></div>
          <div className="feature-icon">
            {icon}
          </div>
        </div>
        <h5 className="feature-title">{title}</h5>
        <p className="feature-description">{description}</p>
        <div className="feature-card-glow"></div>
      </div>
    </motion.div>
  );
}

function StatCard({ icon, number, label, suffix = '', delay }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (inView) {
      const target = parseInt(number.replace(/\D/g, ''));
      const increment = target / 50;
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev < target) {
            return Math.ceil(prev + increment);
          } else {
            clearInterval(timer);
            return target;
          }
        });
      }, 30);
      
      return () => clearInterval(timer);
    }
  }, [inView, number]);
  
  return (
    <motion.div
      ref={ref}
      className="stat-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay * 0.2}s`
      }}
    >
      <div className="stat-icon-wrapper">
        <div className="stat-icon-bg"></div>
        <div className="stat-icon">{icon}</div>
      </div>
      <h3 className="stat-number">{count}{suffix}</h3>
      <p className="stat-label">{label}</p>
      <div className="stat-card-glow"></div>
    </motion.div>
  );
}

function TestimonialCard({ name, role, content, avatar, rating, delay }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      className="testimonial-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay * 0.2}s`
      }}
    >
      <div className="testimonial-content">
        <div className="testimonial-rating">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className={i < rating ? 'filled' : ''} />
          ))}
        </div>
        <p className="testimonial-text">"{content}"</p>
        <div className="testimonial-author">
          <div className="testimonial-avatar">{avatar}</div>
          <div>
            <h4 className="testimonial-name">{name}</h4>
            <p className="testimonial-role">{role}</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card-glow"></div>
    </motion.div>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }, 1000);
  };
  
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-info">
            <div className="newsletter-badge">STAY UPDATED</div>
            <h2 className="newsletter-title">Join Our Community</h2>
            <p className="newsletter-subtitle">
              Subscribe to our newsletter for the latest updates on SnapFix AI features and community impact stories.
            </p>
          </div>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="newsletter-input"
              />
              <button 
                type="submit" 
                className="newsletter-button"
                disabled={loading || subscribed}
              >
                {loading ? 'Subscribing...' : subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
            <p className="newsletter-privacy">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
      <div className="newsletter-particles"></div>
    </section>
  );
}

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 4);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearInterval(testimonialInterval);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Prepare stable random values for floating elements
  const floatingElements = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: 10 + Math.random() * 30,
      height: 10 + Math.random() * 30,
      opacity: 0.05 + Math.random() * 0.15,
      animationDelay: Math.random() * 5,
      animationDuration: 8 + Math.random() * 6,
      blur: Math.random() > 0.5 ? 'blur(1px)' : 'none',
      shape: Math.random() > 0.5 ? 'circle' : 'square',
      rotation: Math.random() * 360,
    }));
  }, []);
  
  // Prepare particles for hero section
  const heroParticles = useMemo(() => {
    return [...Array(50)].map((_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1 + Math.random() * 3,
      opacity: 0.2 + Math.random() * 0.6,
      animationDelay: Math.random() * 5,
      animationDuration: 10 + Math.random() * 20,
      speed: 0.5 + Math.random() * 2,
    }));
  }, []);
  
  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "City Council Member",
      content: "SnapFix AI has revolutionized how we handle citizen reports. The AI classification saves us countless hours of manual sorting.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      content: "When my storefront was damaged, SnapFix AI helped me report it instantly. The issue was resolved within 24 hours!",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Community Volunteer",
      content: "I love how easy it is to report issues in my neighborhood. SnapFix AI makes community engagement effortless.",
      avatar: "👩‍🦱",
      rating: 4
    },
    {
      name: "David Wilson",
      role: "Public Works Director",
      content: "The automated routing system has reduced our response time by 60%. SnapFix AI is a game-changer for municipal services.",
      avatar: "👨‍💼",
      rating: 5
    }
  ];
  
  // Features data
  const features = [
    {
      icon: <FiCpu className="feature-icon-element" size={32} />,
      title: "Neural Network Analysis",
      description: "Our advanced neural networks instantly classify issues with 95% accuracy using deep learning algorithms."
    },
    {
      icon: <FiMapPin className="feature-icon-element" size={32} />,
      title: "Precision Location",
      description: "GPS and visual data pinpoint exact locations for faster response times with satellite precision."
    },
    {
      icon: <FiFileText className="feature-icon-element" size={32} />,
      title: "Automated Reporting",
      description: "Generate professional reports automatically sent to the appropriate authorities in real-time."
    },
    {
      icon: <FiCamera className="feature-icon-element" size={32} />,
      title: "Visual Recognition",
      description: "Advanced computer vision identifies issues from photos with remarkable accuracy using CNN models."
    },
    {
      icon: <FiActivity className="feature-icon-element" size={32} />,
      title: "Predictive Analytics",
      description: "Our AI predicts potential issues before they escalate, enabling proactive community management."
    },
    {
      icon: <FiLayers className="feature-icon-element" size={32} />,
      title: "Multi-Layer Security",
      description: "Your reports are protected with end-to-end encryption and blockchain verification."
    }
  ];
  
  return (
    <div className={`home-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Floating Action Button */}
      <Link to="/report" className="fab">
        <div className="fab-pulse"></div>
        <FiUpload className="fab-icon" />
      </Link>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
      
      {/* Hero Section with Parallax Effect */}
      <section className="hero-section" ref={heroRef}>
        <div 
          className="hero-bg" 
          style={{ 
            transform: `translateY(${scrollY * 0.4}px)`,
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Animated floating elements */}
          <div className="floating-elements">
            {floatingElements.map((item, i) => (
              <div
                key={i}
                className={`floating-element ${item.shape}`}
                style={{
                  position: 'absolute',
                  left: `${item.left}%`,
                  top: `${item.top}%`,
                  width: `${item.width}px`,
                  height: `${item.height}px`,
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  borderRadius: item.shape === 'circle' ? '50%' : '4px',
                  filter: item.blur,
                  animation: `float ${item.animationDuration}s ease-in-out infinite`,
                  animationDelay: `${item.animationDelay}s`,
                  transform: `rotate(${item.rotation}deg)`,
                  pointerEvents: 'none'
                }}
              />
            ))}
          </div>
          
          {/* Animated particles */}
          <div className="particles">
            {heroParticles.map((particle, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  position: 'absolute',
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: 'rgba(165, 180, 252, 0.7)',
                  borderRadius: '50%',
                  animation: `float-particle ${particle.animationDuration}s linear infinite`,
                  animationDelay: `${particle.animationDelay}s`,
                  pointerEvents: 'none',
                  opacity: particle.opacity
                }}
              />
            ))}
          </div>
          
          {/* Animated grid overlay */}
          <div className="grid-overlay"></div>
          
          {/* Holographic elements */}
          <div className="holographic-elements">
            <div className="holographic-circle"></div>
            <div className="holographic-ring"></div>
            <div className="holographic-triangle"></div>
          </div>
          
          {/* Neural network visualization */}
          <div className="neural-network">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="neural-node"></div>
            ))}
          </div>
          
          <div className="hero-content">
            <motion.div
              className="hero-text"
              style={{
                textAlign: 'center',
                color: 'white',
                zIndex: 10,
                position: 'relative',
                maxWidth: '900px',
                padding: '0 20px'
              }}
            >
              <div className="hero-badge">AI-POWERED SOLUTION</div>
              <h1 className="hero-title">
                <span className="brand-name">SnapFix</span> AI
              </h1>
              <p className="hero-subtitle">
                Transform your community with intelligent issue reporting. Our AI analyzes and categorizes problems in real-time for faster resolution.
              </p>
              <div className="hero-cta">
                <Link to="/report" className="cta-button primary">
                  Report an Issue <span>→</span>
                </Link>
                <Link to="/demo" className="cta-button secondary">
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <motion.div className="section-badge">CORE FEATURES</motion.div>
            <motion.h2 className="section-title">
              Why <span className="brand-highlight">SnapFix AI</span> Stands Apart
            </motion.h2>
            <p className="section-subtitle">
              Our advanced AI technology streamlines the entire issue resolution process
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header light">
            <motion.div className="section-badge">IMPACT METRICS</motion.div>
            <motion.h2 className="section-title">
              Making a <span className="brand-highlight">Measurable Difference</span>
            </motion.h2>
          </div>
          
          <div className="stats-grid">
            <StatCard
              icon={<FiCheckCircle className="stat-icon-element" size={28} />}
              number="12K+"
              label="Issues Resolved"
              delay={0}
            />
            <StatCard
              icon={<FiClock className="stat-icon-element" size={28} />}
              number="18"
              label="Avg. Resolution (hours)"
              delay={1}
            />
            <StatCard
              icon={<FiUsers className="stat-icon-element" size={28} />}
              number="95%"
              label="User Satisfaction"
              suffix="%"
              delay={2}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <motion.div className="section-badge">HOW IT WORKS</motion.div>
            <motion.h2 className="section-title">
              Simple <span className="brand-highlight">3-Step Process</span>
            </motion.h2>
            <p className="section-subtitle">
              Report issues in seconds with our intuitive AI-powered system
            </p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-icon">
                <FiCamera className="step-icon-element" size={32} />
              </div>
              <h3 className="step-title">Snap a Photo</h3>
              <p className="step-description">
                Take a picture of the issue with your smartphone
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-icon">
                <FiZap className="step-icon-element" size={32} />
              </div>
              <h3 className="step-title">AI Analysis</h3>
              <p className="step-description">
                Our AI analyzes and categorizes the issue automatically
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-icon">
                <FiCheckCircle className="step-icon-element" size={32} />
              </div>
              <h3 className="step-title">Get Resolution</h3>
              <p className="step-description">
                The issue is routed to the appropriate team for resolution
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <motion.div className="section-badge">SUCCESS STORIES</motion.div>
            <motion.h2 className="section-title">
              What Our <span className="brand-highlight">Users Say</span>
            </motion.h2>
          </div>
          
          <div className="testimonials-container">
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  avatar={testimonial.avatar}
                  rating={testimonial.rating}
                  delay={index}
                />
              ))}
            </div>
            
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`indicator ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSection />
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div className="cta-content">
            <div className="cta-badge">JOIN THE MOVEMENT</div>
            <h2 className="cta-title">Ready to Improve Your Community?</h2>
            <p className="cta-subtitle">
              Join thousands of users making a difference with AI-powered issue reporting
            </p>
            <div className="cta-buttons">
              <Link to="/report" className="cta-button primary">
                Get Started Now
              </Link>
              <Link to="/features" className="cta-button secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="brand-name">SnapFix</span> AI
            </div>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/features">Features</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FiTwitter className="social-icon" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FiFacebook className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FiInstagram className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="social-icon" />
              </a>
            </div>
            <div className="footer-newsletter">
              <p>Subscribe to our newsletter for updates</p>
              <form className="footer-newsletter-form">
                <input type="email" placeholder="Your email" className="footer-newsletter-input" />
                <button type="submit" className="footer-newsletter-button">
                  <FiMail />
                </button>
              </form>
            </div>
            <div className="footer-copyright">
              © {new Date().getFullYear()} SnapFix AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      
      <style>{`
        .home-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          opacity: 0;
          transition: opacity 0.5s ease;
          background: #0f172a;
          color: #e2e8f0;
          overflow-x: hidden;
        }
        
        .home-page.loaded {
          opacity: 1;
        }
        
        /* Futuristic Icon Styling */
        .futuristic-icon {
          filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.6));
          transition: all 0.3s ease;
        }
        
        .futuristic-icon:hover {
          filter: drop-shadow(0 0 12px rgba(99, 102, 241, 0.8));
          transform: scale(1.1);
        }
        
        /* Floating Action Button */
        .fab {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
          z-index: 1000;
          text-decoration: none;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .fab-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(99, 102, 241, 0.3);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .fab:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(99, 102, 241, 0.6);
        }
        
        .fab-icon {
          font-size: 28px;
          position: relative;
          z-index: 1;
        }
        
        /* Scroll to Top Button */
        .scroll-top {
          position: fixed;
          bottom: 30px;
          right: 110px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(30, 41, 59, 0.8);
          backdrop-filter: blur(10px);
          color: #a5b4fc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          border: 1px solid rgba(165, 180, 252, 0.3);
          z-index: 1000;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .scroll-top:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(165, 180, 252, 0.5);
        }
        
        /* Hero Section */
        .hero-section {
          position: relative;
          overflow: hidden;
        }
        
        .hero-badge {
          display: inline-block;
          background: rgba(99, 102, 241, 0.15);
          backdrop-filter: blur(10px);
          color: #a5b4fc;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(165, 180, 252, 0.2);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
        }
        
        .hero-title {
          font-size: clamp(3.5rem, 10vw, 7rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          text-shadow: 0 4px 12px rgba(0,0,0,0.3);
          letter-spacing: -1px;
          background: linear-gradient(90deg, #ffffff, #e2e8f0, #cbd5e1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .brand-name {
          position: relative;
          display: inline-block;
        }
        
        .brand-name::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 12px;
          background: rgba(99, 102, 241, 0.3);
          border-radius: 6px;
          z-index: -1;
          filter: blur(8px);
        }
        
        .hero-subtitle {
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          margin-bottom: 2.5rem;
          opacity: 0.9;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 300;
          color: #cbd5e1;
        }
        
        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .cta-button.primary {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
        }
        
        .cta-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.6);
        }
        
        .cta-button.secondary {
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(10px);
          color: #a5b4fc;
          border: 1px solid rgba(165, 180, 252, 0.3);
        }
        
        .cta-button.secondary:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(165, 180, 252, 0.5);
          transform: translateY(-3px);
        }
        
        .cta-button span {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }
        
        .cta-button:hover span {
          transform: translateX(3px);
        }
        
        /* Grid Overlay */
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1;
        }
        
        /* Particles */
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .particle {
          position: absolute;
          background: #a5b4fc;
          border-radius: 50%;
        }
        
        /* Holographic Elements */
        .holographic-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: none;
        }
        
        .holographic-circle {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 2px solid rgba(99, 102, 241, 0.3);
          top: 20%;
          left: 10%;
          animation: rotate 20s linear infinite;
        }
        
        .holographic-ring {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 2px solid rgba(165, 180, 252, 0.4);
          top: 60%;
          right: 15%;
          animation: rotate 15s linear infinite reverse;
        }
        
        .holographic-triangle {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-bottom: 173px solid rgba(99, 102, 241, 0.2);
          top: 30%;
          right: 20%;
          animation: float 8s ease-in-out infinite;
        }
        
        /* Neural Network */
        .neural-network {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: none;
        }
        
        .neural-node {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(165, 180, 252, 0.6);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(165, 180, 252, 0.8);
        }
        
        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        
        .scroll-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(165, 180, 252, 0.7);
          animation: pulse 2s infinite;
        }
        
        /* Features Section */
        .features-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          position: relative;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        
        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        
        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: #f1f5f9;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .brand-highlight {
          color: #a5b4fc;
          position: relative;
        }
        
        .brand-highlight::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(99, 102, 241, 0.3);
          border-radius: 4px;
          z-index: -1;
          filter: blur(6px);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }
        
        .feature-card {
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(10px);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 1px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #6366f1, #4f46e5);
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2), 0 1px 10px rgba(0, 0, 0, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
        }
        
        .feature-icon-wrapper {
          position: relative;
          margin-bottom: 1.8rem;
        }
        
        .feature-icon-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(79, 70, 229, 0.1));
          border-radius: 20px;
          filter: blur(20px);
          z-index: -1;
        }
        
        .feature-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 100px;
          background: rgba(30, 41, 59, 0.8);
          border-radius: 20px;
          margin: 0 auto;
          color: #a5b4fc;
          font-size: 2.5rem;
          position: relative;
          z-index: 1;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .feature-icon-element {
          color: #a5b4fc;
          font-size: 2.5rem;
        }
        
        .feature-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #f1f5f9;
        }
        
        .feature-description {
          color: #94a3b8;
          line-height: 1.7;
          margin: 0;
          font-size: 1.1rem;
        }
        
        .feature-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .feature-card:hover .feature-card-glow {
          opacity: 1;
        }
        
        /* Stats Section */
        .stats-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .stats-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSg5OSwgMTAyLCAyNDEsIDAuMDMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+');
          opacity: 0.4;
          z-index: 0;
        }
        
        .section-header.light .section-badge {
          background: rgba(99, 102, 241, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .section-header.light .section-title {
          color: white;
        }
        
        .section-header.light .brand-highlight::after {
          background: rgba(165, 180, 252, 0.3);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
          position: relative;
          z-index: 1;
        }
        
        .stat-card {
          text-align: center;
          transition: transform 0.3s ease;
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }
        
        .stat-card:hover {
          transform: translateY(-10px);
        }
        
        .stat-icon-wrapper {
          position: relative;
          margin: 0 auto 1.5rem;
          width: 80px;
          height: 80px;
        }
        
        .stat-icon-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(79, 70, 229, 0.1));
          border-radius: 50%;
          filter: blur(15px);
          z-index: -1;
        }
        
        .stat-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: rgba(30, 41, 59, 0.8);
          border-radius: 50%;
          color: #a5b4fc;
          font-size: 2rem;
          position: relative;
          z-index: 1;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .stat-number {
          font-size: clamp(3.5rem, 6vw, 5rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
          line-height: 1;
          background: linear-gradient(90deg, #ffffff, #e2e8f0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .stat-label {
          font-size: 1.3rem;
          opacity: 0.9;
          margin: 0;
          font-weight: 300;
          color: #cbd5e1;
        }
        
        .stat-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: 20px;
        }
        
        .stat-card:hover .stat-card-glow {
          opacity: 1;
        }
        
        /* How It Works Section */
        .how-it-works-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
        }
        
        .process-steps {
          display: flex;
          justify-content: space-between;
          margin-top: 5rem;
          position: relative;
        }
        
        .process-steps::before {
          content: '';
          position: absolute;
          top: 50px;
          left: 100px;
          right: 100px;
          height: 4px;
          background: linear-gradient(90deg, #6366f1, #4f46e5);
          z-index: 0;
        }
        
        .process-step {
          position: relative;
          z-index: 1;
          text-align: center;
          width: 30%;
        }
        
        .step-number {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }
        
        .step-icon {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(30, 41, 59, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .step-icon-element {
          color: #a5b4fc;
          font-size: 2.5rem;
        }
        
        .step-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #f1f5f9;
        }
        
        .step-description {
          color: #94a3b8;
          line-height: 1.6;
          font-size: 1.1rem;
        }
        
        /* Testimonials Section */
        .testimonials-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
        }
        
        .testimonials-container {
          position: relative;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }
        
        .testimonial-card {
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 1px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
          overflow: hidden;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }
        
        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2), 0 1px 10px rgba(0, 0, 0, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
        }
        
        .testimonial-content {
          padding: 2.5rem;
        }
        
        .testimonial-rating {
          display: flex;
          margin-bottom: 1.5rem;
        }
        
        .testimonial-rating .fi-star {
          color: #fbbf24;
          margin-right: 0.25rem;
        }
        
        .testimonial-text {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #e2e8f0;
          margin-bottom: 2rem;
          font-style: italic;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
        }
        
        .testimonial-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          margin-right: 1.2rem;
        }
        
        .testimonial-name {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
          color: #f1f5f9;
        }
        
        .testimonial-role {
          font-size: 1rem;
          color: #94a3b8;
          margin: 0;
        }
        
        .testimonial-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: 20px;
        }
        
        .testimonial-card:hover .testimonial-card-glow {
          opacity: 1;
        }
        
        .testimonial-indicators {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        
        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(165, 180, 252, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          background: #a5b4fc;
          transform: scale(1.2);
        }
        
        /* Newsletter Section */
        .newsletter-section {
          padding: 7rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          position: relative;
          overflow: hidden;
        }
        
        .newsletter-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.2), transparent 50%);
          z-index: 0;
        }
        
        .newsletter-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .newsletter-info {
          flex: 1;
          padding-right: 2rem;
        }
        
        .newsletter-badge {
          display: inline-block;
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }
        
        .newsletter-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }
        
        .newsletter-subtitle {
          font-size: 1.2rem;
          color: #cbd5e1;
          line-height: 1.6;
        }
        
        .newsletter-form {
          flex: 1;
          max-width: 500px;
        }
        
        .input-group {
          display: flex;
          background: rgba(30, 41, 59, 0.8);
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .newsletter-input {
          flex: 1;
          border: none;
          padding: 1.2rem 1.5rem;
          font-size: 1.1rem;
          outline: none;
          background: transparent;
          color: #e2e8f0;
        }
        
        .newsletter-input::placeholder {
          color: #94a3b8;
        }
        
        .newsletter-button {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          border: none;
          padding: 1.2rem 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .newsletter-button:hover {
          background: linear-gradient(135deg, #4f46e5, #4338ca);
        }
        
        .newsletter-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .newsletter-privacy {
          font-size: 0.9rem;
          color: #94a3b8;
          margin-top: 0.8rem;
        }
        
        .newsletter-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          pointer-events: none;
        }
        
        .newsletter-particles::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSg5OSwgMTAyLCAyNDEsIDAuMDMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+');
          opacity: 0.4;
        }
        
        /* CTA Section */
        .cta-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          position: relative;
          overflow: hidden;
        }
        
        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.2), transparent 50%);
          z-index: 0;
        }
        
        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .cta-badge {
          display: inline-block;
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }
        
        .cta-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .cta-subtitle {
          font-size: 1.3rem;
          color: #cbd5e1;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-button.secondary {
          background: rgba(30, 41, 59, 0.6);
          color: #a5b4fc;
          border: 1px solid rgba(165, 180, 252, 0.3);
          backdrop-filter: blur(10px);
        }
        
        .cta-button.secondary:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(165, 180, 252, 0.5);
        }
        
        /* Footer */
        .footer {
          padding: 4rem 0;
          background: #0f172a;
          color: #94a3b8;
          position: relative;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 2rem;
          align-items: center;
        }
        
        .footer-logo {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #a5b4fc, #818cf8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .footer-links {
          display: flex;
          gap: 1.8rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }
        
        .footer-links a:hover {
          color: #a5b4fc;
          transform: translateY(-2px);
        }
        
        .footer-social {
          display: flex;
          gap: 1.2rem;
          justify-content: flex-end;
        }
        
        .social-icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(30, 41, 59, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          transition: all 0.3s ease;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }
        
        .social-icon:hover {
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          transform: translateY(-3px);
          border-color: rgba(99, 102, 241, 0.3);
        }
        
        .footer-newsletter {
          grid-column: span 3;
          margin-top: 2.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(99, 102, 241, 0.1);
          text-align: center;
        }
        
        .footer-newsletter p {
          margin-bottom: 1.2rem;
          font-size: 1.1rem;
        }
        
        .footer-newsletter-form {
          display: flex;
          max-width: 400px;
          margin: 0 auto;
          background: rgba(30, 41, 59, 0.6);
          border-radius: 50px;
          overflow: hidden;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .footer-newsletter-input {
          flex: 1;
          border: none;
          background: transparent;
          color: #e2e8f0;
          padding: 0.9rem 1.2rem;
          outline: none;
        }
        
        .footer-newsletter-input::placeholder {
          color: #94a3b8;
        }
        
        .footer-newsletter-button {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          border: none;
          padding: 0.9rem 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .footer-newsletter-button:hover {
          background: linear-gradient(135deg, #4f46e5, #4338ca);
        }
        
        .footer-copyright {
          grid-column: span 3;
          margin-top: 2.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(99, 102, 241, 0.1);
          text-align: center;
          font-size: 1rem;
          opacity: 0.7;
        }
        
        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.3;
          }
        }
        
        .floating-element {
          animation: float 8s ease-in-out infinite;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          
          .testimonials-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
          
          .hero-content {
            padding: 2rem 1rem;
          }
          
          .container {
            padding: 0 1.5rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
          
          .process-steps {
            flex-direction: column;
            align-items: center;
            gap: 3rem;
          }
          
          .process-steps::before {
            display: none;
          }
          
          .process-step {
            width: 100%;
          }
          
          .newsletter-content {
            flex-direction: column;
            text-align: center;
          }
          
          .newsletter-info {
            padding-right: 0;
            margin-bottom: 2rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .footer-social {
            justify-content: center;
          }
          
          .footer-newsletter {
            grid-column: span 1;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .cta-button, .cta-button-secondary {
            padding: 1rem 1.8rem;
            font-size: 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .features-grid, .stats-grid, .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 0.8rem;
          }
          
          .scroll-top {
            right: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .feature-card {
            padding: 1.8rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .cta-button, .cta-button-secondary {
            padding: 0.9rem 1.5rem;
            font-size: 0.95rem;
          }
          
          .fab {
            width: 60px;
            height: 60px;
            bottom: 20px;
            right: 20px;
          }
          
          .fab-icon {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;