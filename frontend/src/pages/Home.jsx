import React, { useEffect, useState, useMemo, useRef } from 'react';

// Mock components for demonstration
const Link = React.forwardRef(({ to, children, className, ...props }, ref) => (
  <a href={to} className={className} ref={ref} {...props}>
    {children}
  </a>
));

// Enhanced mock framer-motion components with proper prop handling
const motion = {
  div: React.forwardRef(({ children, className, style, initial, animate, transition, whileInView, whileHover, whileTap, ...props }, ref) => (
    <div className={className} style={style} ref={ref} {...props}>
      {children}
    </div>
  )),
  h2: React.forwardRef(({ children, className, style, initial, whileInView, transition, ...props }, ref) => (
    <h2 className={className} style={style} ref={ref} {...props}>
      {children}
    </h2>
  )),
  h3: React.forwardRef(({ children, className, style, initial, whileInView, transition, ...props }, ref) => (
    <h3 className={className} style={style} ref={ref} {...props}>
      {children}
    </h3>
  )),
  p: React.forwardRef(({ children, className, style, initial, whileInView, transition, ...props }, ref) => (
    <p className={className} style={style} ref={ref} {...props}>
      {children}
    </p>
  )),
  button: React.forwardRef(({ children, className, style, initial, whileInView, whileHover, whileTap, ...props }, ref) => (
    <button className={className} style={style} ref={ref} {...props}>
      {children}
    </button>
  ))
};

// Mock react-intersection-observer
const useInView = (options) => {
  return [React.useRef(), true]; // Always return true for demo
};

// Enhanced mock react-icons with better styling
const FiUpload = ({ className, size }) => <span className={`${className} text-blue-400`}>🔧</span>;
const FiMapPin = ({ className, size }) => <span className={`${className} text-blue-400`}>📍</span>;
const FiFileText = ({ className, size }) => <span className={`${className} text-blue-400`}>📄</span>;
const FiCheckCircle = ({ className, size }) => <span className={`${className} text-green-400`}>✅</span>;
const FiClock = ({ className, size }) => <span className={`${className} text-yellow-400`}>⏱️</span>;
const FiUsers = ({ className, size }) => <span className={`${className} text-purple-400`}>👥</span>;
const FiCamera = ({ className, size }) => <span className={`${className} text-blue-400`}>📷</span>;
const FiBarChart2 = ({ className, size }) => <span className={`${className} text-indigo-400`}>📊</span>;
const FiShield = ({ className, size }) => <span className={`${className} text-teal-400`}>🛡️</span>;
const FiStar = ({ className, size }) => <span className={`${className} text-yellow-400`}>⭐</span>;
const FiMail = ({ className, size }) => <span className={`${className} text-pink-400`}>✉️</span>;
const FiTwitter = ({ className, size }) => <span className={`${className} text-blue-400`}>🐦</span>;
const FiFacebook = ({ className, size }) => <span className={`${className} text-blue-600`}>📘</span>;
const FiInstagram = ({ className, size }) => <span className={`${className} text-pink-500`}>📸</span>;
const FiLinkedin = ({ className, size }) => <span className={`${className} text-blue-700`}>💼</span>;
const FiCheck = ({ className, size }) => <span className={`${className} text-green-500`}>✓</span>;
const FiArrowRight = ({ className, size }) => <span className={`${className} text-blue-400`}>→</span>;
const FiPhone = ({ className, size }) => <span className={`${className} text-green-500`}>📞</span>;
const FiGlobe = ({ className, size }) => <span className={`${className} text-blue-500`}>🌐</span>;

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
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay * 0.2}s`
      }}
    >
      <div className="feature-card group">
        <div className="feature-icon-wrapper">
          {icon}
          <div className="feature-glow"></div>
        </div>
        <h5 className="feature-title group-hover:text-blue-400 transition-colors">{title}</h5>
        <p className="feature-description">{description}</p>
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
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay * 0.2}s`
      }}
    >
      <div className="stat-icon-wrapper">
        {icon}
      </div>
      <h3 className="stat-number">{count}{suffix}</h3>
      <p className="stat-label">{label}</p>
    </motion.div>
  );
}

function AudienceTab({ title, content, isActive, onClick }) {
  return (
    <div 
      className={`audience-tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <h3>{title}</h3>
      {isActive && <p>{content}</p>}
    </div>
  );
}

function PricingCard({ plan, price, audience, audienceSize, minPrice, features, isPrimary }) {
  return (
    <motion.div 
      className={`pricing-card ${isPrimary ? 'primary' : ''}`}
      style={{
        transition: 'all 0.3s ease'
      }}
    >
      <div className="pricing-header">
        <h3>{plan}</h3>
        <p>{audience}</p>
        {audienceSize && <p className="audience-size">{audienceSize}</p>}
      </div>
      <div className="pricing-price">
        {price}
        {minPrice && <span className="min-price"> ({minPrice})</span>}
      </div>
      <ul className="pricing-features">
        {features.map((feature, i) => (
          <li key={i}>
            <FiCheck className="check-icon" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`pricing-button ${isPrimary ? 'primary' : 'secondary'}`}>
        {isPrimary ? 'Get Started' : 'Learn More'}
      </button>
    </motion.div>
  );
}

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState('citizens');
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
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
      width: 10 + Math.random() * 40,
      height: 10 + Math.random() * 40,
      opacity: 0.05 + Math.random() * 0.2,
      animationDelay: Math.random() * 10,
      animationDuration: 10 + Math.random() * 15,
      blur: Math.random() > 0.5 ? 'blur(2px)' : 'none',
      borderRadius: Math.random() > 0.5 ? '50%' : '30%',
    }));
  }, []);
  
  // Audience data
  const audienceData = {
    citizens: {
      title: "Citizens",
      highlight: "Report in < 30 seconds and save about 9 minutes every time versus a phone-based 311 call.",
      learnMore: "A 10,000-run simulation compared SnapFix's 0.5-minute photo report with a typical 5- to 15-minute 311 call (Pew 311 logs). Even in the slowest 10% of trials SnapFix still saved 7+ minutes per report and added live status updates—so residents know when a crew is coming instead of waiting in the dark."
    },
    governments: {
      title: "Governments",
      highlight: "Flat licence delivers ≥ 9 × ROI for small towns and 12 × + ROI for metro cities by slashing call-centre costs.",
      learnMore: "Simulations drew diverted calls/resident (0.05–0.30) and per-call staff cost ($3–$5; Pew & GovTech). Against a $2,000 licence (≤50k pop) or $0.05×population (min $5,000), median savings hit $18k for a 30k city and $75k for a 120k city. Even the 10% worst-case runs still tripled the fee."
    },
    trades: {
      title: "Local Trades",
      highlight: "One $79/mo Pro seat returns a median 23 × payoff—a single $150 job already covers the fee.",
      learnMore: "Monte-Carlo trials sampled 5–40 leads/month, 20–50% close-rates, and $150–$400 job values (ServiceTrade benchmarks). Median extra revenue reached $1,875/mo; 90% of scenarios still beat 7.6× ROI. With no per-lead charge, busy months can exceed 50×."
    }
  };
  
  // Features data
  const features = [
    {
      icon: <FiMapPin className="feature-icon-element" size={32} />,
      title: "Auto Geo Pin",
      description: "GPS tags every report— in most cases you won't need to address entry."
    },
    {
      icon: <FiFileText className="feature-icon-element" size={32} />,
      title: "AI Issue Detection",
      description: "Recognizes hundreds of issue types and created tailored reports."
    },
    {
      icon: <FiCheckCircle className="feature-icon-element" size={32} />,
      title: "One Tap Ticketing",
      description: "Structured reports land in the right inbox/system."
    },
    {
      icon: <FiUsers className="feature-icon-element" size={32} />,
      title: "Lead Marketplace",
      description: "Trades receive matching job alerts, quote in app."
    },
    {
      icon: <FiShield className="feature-icon-element" size={32} />,
      title: "Private Chat",
      description: "Secure messaging between reporter, crew, and (when opted in) contractor."
    }
  ];
  
  // Pricing data
  const pricingData = [
    {
      plan: "Always Free",
      price: "$0",
      audience: "Citizens",
      features: ["Zero cost forever", "One tap report", "Live status updates", "Private chat"]
    },
    {
      plan: "Community",
      price: "$2,000/yr",
      audience: "Governments",
      audienceSize: "≤ 50k pop",
      features: ["Unified dashboard", "GIS heat maps", "SLA timers", "AI triage", ">3× cheaper than phone-based 311"]
    },
    {
      plan: "Metro",
      price: "$0.05 × pop/yr",
      audience: "Governments",
      audienceSize: "> 50k pop",
      minPrice: "min $5,000",
      features: ["Unified dashboard", "GIS heat maps", "SLA timers", "AI triage", ">3× cheaper than phone-based 311"]
    },
    {
      plan: "Pro",
      price: "$79/mo",
      audience: "Local Trades",
      features: ["Unlimited leads", "Dashboard access", "One subscription covers whole company", "Win more local work"],
      isPrimary: true
    },
    {
      plan: "Starter",
      price: "Free",
      audience: "Local Trades",
      features: ["5 matched leads/month", "Respond and quote in one tap", "Optional upgrade to Pro"]
    }
  ];
  
  return (
    <div className={`home-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Floating Action Button */}
      <Link to="/report" className="fab">
        <FiUpload className="fab-icon" />
      </Link>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
      
      {/* Hero Section with Advanced Parallax and Effects */}
      <section className="hero-section" ref={heroRef}>
        <div 
          className="hero-bg" 
          style={{ 
            transform: `translateY(${scrollY * 0.4}px)`,
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #312e81 50%, #1e40af 75%, #1d4ed8 100%)',
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Advanced floating elements */}
          <div className="floating-elements">
            {floatingElements.map((item, i) => (
              <div
                key={i}
                className="floating-element"
                style={{
                  position: 'absolute',
                  left: `${item.left}%`,
                  top: `${item.top}%`,
                  width: `${item.width}px`,
                  height: `${item.height}px`,
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(59, 130, 246, 0.1) 70%, transparent 100%)',
                  borderRadius: item.borderRadius,
                  filter: item.blur,
                  animation: `float ${item.animationDuration}s ease-in-out infinite`,
                  animationDelay: `${item.animationDelay}s`,
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />
            ))}
          </div>
          
          {/* Advanced grid overlay */}
          <div className="grid-overlay"></div>
          
          {/* Advanced particles */}
          <div className="particles">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  position: 'absolute',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${1 + Math.random() * 4}px`,
                  height: `${1 + Math.random() * 4}px`,
                  background: `radial-gradient(circle, rgba(255, 255, 255, ${0.3 + Math.random() * 0.7}) 0%, transparent 70%)`,
                  borderRadius: '50%',
                  animation: `float ${5 + Math.random() * 15}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  pointerEvents: 'none',
                  zIndex: 2
                }}
              />
            ))}
          </div>
          
          {/* Animated geometric shapes */}
          <div className="geometric-shapes">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="geometric-shape"
                style={{
                  position: 'absolute',
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  border: `2px solid rgba(99, 102, 241, ${0.1 + i * 0.05})`,
                  borderRadius: '50%',
                  animation: `rotate ${20 + i * 10}s linear infinite`,
                  animationDelay: `${i * 2}s`,
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />
            ))}
          </div>
          
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-glow">AI-POWERED SOLUTION</span>
              </div>
              
              <h1 className="hero-title">
                <span className="brand-name">SnapFix</span>
              </h1>
              
              <p className="hero-subtitle">
                See it. Snap it. Send it.
              </p>
              
              <p className="hero-description">
                A single photo turns any neighborhood problem—pothole, broken street light, water leak—into a routed, trackable work order in under 30 seconds.
              </p>
              
              <div className="hero-cta">
                <Link to="/app" className="cta-button primary">
                  Get the App <span>→</span>
                </Link>
                <Link to="/demo" className="cta-button secondary">
                  Book a Demo
                </Link>
              </div>
              
              <div className="hero-privacy">
                <FiShield className="privacy-icon" />
                <span>Privacy first: your report is visible only to the crew that fixes it.</span>
              </div>
            </div>
          </div>
          
          {/* Advanced scroll indicator */}
          <div className="scroll-indicator">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>
      
      {/* Why SnapFix Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              WHY SNAPFIX
            </div>
            <h2 className="section-title text-2xl md:text-3xl">
              Quick <span className="brand-highlight">Facts</span>
            </h2>
          </div>
          
          <div className="features-grid">
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <FiClock className="stat-icon" size={32} />
              </div>
              <h3 className="stat-number">&lt; 30 sec</h3>
              <p className="stat-label">From snap to submitted report</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <FiBarChart2 className="stat-icon" size={32} />
              </div>
              <h3 className="stat-number">&gt; 95% Accuracy</h3>
              <p className="stat-label">AI tags & auto routes issues</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <FiUsers className="stat-icon" size={32} />
              </div>
              <h3 className="stat-number">Free</h3>
              <p className="stat-label">Zero cost to report or track</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Pain Today Section */}
      <section className="pain-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              OUR PAIN TODAY
            </div>
            <h2 className="section-title">
              Problems Across <span className="brand-highlight">Community Stakeholders</span>
            </h2>
          </div>
          
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-icon">
                <FiPhone className="pain-icon-element" size={28} />
              </div>
              <h3 className="pain-title">Citizens</h3>
              <ul className="pain-list">
                <li>Don't know who to call</li>
                <li>Reports vanish into voicemail</li>
                <li>Fixes seem to never happen</li>
              </ul>
            </div>
            
            <div className="pain-card">
              <div className="pain-icon">
                <FiFileText className="pain-icon-element" size={28} />
              </div>
              <h3 className="pain-title">Governments & Crews</h3>
              <ul className="pain-list">
                <li>Field mountains of phone-based 311 calls</li>
                <li>Staff retype the same details into multiple systems</li>
                <li>Crews wait instead of fixing issues</li>
              </ul>
            </div>
            
            <div className="pain-card">
              <div className="pain-icon">
                <FiUsers className="pain-icon-element" size={28} />
              </div>
              <h3 className="pain-title">Local Businesses & Trades</h3>
              <ul className="pain-list">
                <li>Never hear about many service needs</li>
                <li>Warm jobs slip through the cracks</li>
                <li>Neighborhoods miss out on fast, professional help</li>
              </ul>
            </div>
          </div>
          
          <div className="pain-solution">
            SnapFix connects all three groups in one swift flow—no hold music, no data re-entry, no lost opportunities.
          </div>
        </div>
      </section>
      
      {/* Audience Value Section */}
      <section className="audience-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              AUDIENCE VALUE
            </div>
            <h2 className="section-title">
              Value at a <span className="brand-highlight">Glance</span>
            </h2>
          </div>
          
          <div className="audience-tabs">
            {Object.keys(audienceData).map((key) => (
              <AudienceTab
                key={key}
                title={audienceData[key].title}
                content={`${audienceData[key].highlight} ${audienceData[key].learnMore}`}
                isActive={activeTab === key}
                onClick={() => setActiveTab(key)}
              />
            ))}
          </div>
          
          <div className="audience-content">
            <h3>{audienceData[activeTab].title}</h3>
            <p>{audienceData[activeTab].highlight}</p>
            <div className="audience-details">
              <p>{audienceData[activeTab].learnMore}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How SnapFix Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              HOW IT WORKS
            </div>
            <h2 className="section-title">
              Simple <span className="brand-highlight">4-Step Process</span>
            </h2>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-icon">
                <FiCamera className="step-icon-element" size={32} />
              </div>
              <h3 className="step-title">Snap</h3>
              <p className="step-description">Take a photo of the problem</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-icon">
                <FiFileText className="step-icon-element" size={32} />
              </div>
              <h3 className="step-title">Detect</h3>
              <p className="step-description">AI labels & geo pins the issue (&gt;95% accuracy)</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-icon">
                <FiMapPin className="step-icon-element" size={32} />
              </div>
              <h3 className="step-title">Route</h3>
              <p className="step-description">Sends a work order to the right city crew or alerts nearby certified trades</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-icon">
                <FiCheckCircle className="step-icon-element" size={32} />
              </div>
              <h3 className="step-title">Track</h3>
              <p className="step-description">All parties see real-time status until the job is closed</p>
            </div>
          </div>
          
          {/* Demo video placeholder */}
          <div className="demo-video">
            <div className="video-placeholder">
              <FiCamera className="video-icon" />
              <p>Flow animation - demo video</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              KEY FEATURES
            </div>
            <h2 className="section-title">
              Everything You Need to <span className="brand-highlight">Report & Track</span>
            </h2>
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
      
      {/* Simple Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              SIMPLE PRICING
            </div>
            <h2 className="section-title">
              Transparent Plans for <span className="brand-highlight">All Stakeholders</span>
            </h2>
          </div>
          
          <div className="pricing-grid">
            {pricingData.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan.plan}
                price={plan.price}
                audience={plan.audience}
                audienceSize={plan.audienceSize}
                minPrice={plan.minPrice}
                features={plan.features}
                isPrimary={plan.isPrimary}
              />
            ))}
          </div>
          
          <div className="pricing-note">
            Example ROI: One $150 repair covers a month of Pro.
          </div>
        </div>
      </section>
      
      {/* Final CTA Banner */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">FINAL CALL TO ACTION</div>
            <h2 className="cta-title">Start fixing your community in 60 seconds.</h2>
            <div className="cta-buttons">
              <Link to="/download" className="cta-button primary">
                Download SnapFix
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="brand-name">SnapFix</span>
            </div>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/features">Features</Link>
              <Link to="/pricing">Pricing</Link>
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
            <div className="footer-copyright">
              © {new Date().getFullYear()} SnapFix. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      
      <style>{`
        /* Advanced animations and styling */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
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
        
        .home-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          opacity: 0;
          transition: opacity 0.8s ease;
          overflow-x: hidden;
        }
        
        .home-page.loaded {
          opacity: 1;
        }
        
        /* Floating Action Button */
        .fab {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
          z-index: 1000;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .fab:hover {
          transform: scale(1.1) rotate(90deg);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.6);
        }
        
        .fab-icon {
          font-size: 28px;
          transition: transform 0.3s ease;
        }
        
        .fab:hover .fab-icon {
          transform: rotate(-90deg);
        }
        
        /* Scroll to Top Button */
        .scroll-top {
          position: fixed;
          bottom: 30px;
          right: 120px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          backdrop-filter: blur(10px);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          border: 1px solid rgba(255, 255, 255, 0.3);
          z-index: 1000;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        
        .scroll-top:hover {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
          transform: translateY(-5px);
        }
        
        /* Hero Section */
        .hero-section {
          position: relative;
          overflow: hidden;
        }
        
        .hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          backdrop-filter: blur(10px);
          color: #e0e7ff;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .badge-glow::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #6366f1, #8b5cf6, #a78bfa, #c4b5fd);
          border-radius: 30px;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
          filter: blur(10px);
        }
        
        .hero-badge:hover .badge-glow::before {
          opacity: 1;
        }
        
        .hero-title {
          font-size: clamp(3rem, 10vw, 6rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          background: linear-gradient(90deg, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
          letter-spacing: -1px;
        }
        
        .brand-name {
          position: relative;
          display: inline-block;
        }
        
        .brand-name::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 12px;
          background: linear-gradient(90deg, rgba(99, 102, 241, 0.4), rgba(139, 92, 246, 0.2));
          border-radius: 6px;
          z-index: -1;
          animation: pulse 3s infinite;
        }
        
        .hero-subtitle {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: #e0e7ff;
          letter-spacing: 1px;
        }
        
        .hero-description {
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          margin-bottom: 2.5rem;
          opacity: 0.9;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 300;
          color: #c7d2fe;
        }
        
        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.2rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .cta-button:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .cta-button.primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
        }
        
        .cta-button.primary:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(99, 102, 241, 0.6);
        }
        
        .cta-button.secondary {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .cta-button span {
          margin-left: 10px;
          transition: transform 0.3s ease;
        }
        
        .cta-button:hover span {
          transform: translateX(5px);
        }
        
        .hero-privacy {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }
        
        .privacy-icon {
          margin-right: 10px;
          font-size: 1.2rem;
        }
        
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
        
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
        }
        
        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 15s ease-in-out infinite;
        }
        
        .geometric-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .geometric-shape {
          animation: rotate 30s linear infinite;
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        
        .scroll-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          animation: pulse 2s infinite;
        }
        
        /* Feature Cards */
        .feature-card-container {
          perspective: 1000px;
        }
        
        .feature-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
        }
        
        .feature-card:hover {
          transform: translateY(-15px) rotateX(5deg);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon-wrapper {
          position: relative;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }
        
        .feature-icon-element {
          font-size: 3rem;
          z-index: 2;
        }
        
        .feature-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 3s infinite;
        }
        
        .feature-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          color: #1e293b;
        }
        
        .feature-description {
          color: #475569;
          line-height: 1.7;
          margin: 0;
          font-size: 1.1rem;
        }
        
        /* Stat Cards */
        .stat-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.05);
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .stat-card:hover {
          transform: translateY(-10px);
        }
        
        .stat-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        
        .stat-icon {
          font-size: 2.5rem;
        }
        
        .stat-number {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .stat-label {
          font-size: 1.2rem;
          color: #475569;
          margin: 0;
          font-weight: 500;
        }
        
        /* Pain Section */
        .pain-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
        }
        
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        
        .pain-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .pain-card:hover {
          transform: translateY(-10px);
        }
        
        .pain-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        
        .pain-icon-element {
          font-size: 1.8rem;
        }
        
        .pain-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1e293b;
        }
        
        .pain-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .pain-list li {
          padding: 0.8rem 0;
          padding-left: 1.8rem;
          position: relative;
          color: #475569;
          font-size: 1.1rem;
        }
        
        .pain-list li:before {
          content: "•";
          color: #6366f1;
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.5rem;
        }
        
        .pain-solution {
          text-align: center;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          padding: 1.8rem 3rem;
          border-radius: 50px;
          display: inline-block;
          font-weight: 600;
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
          transition: all 0.4s ease;
        }
        
        .pain-solution:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(99, 102, 241, 0.6);
        }
        
        /* Audience Section */
        .audience-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1e3a8a, #312e81, #1e40af);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .audience-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==');
          opacity: 0.4;
          z-index: 0;
        }
        
        .section-header.light .section-badge {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
        }
        
        .section-header.light .section-title {
          color: white;
        }
        
        .section-header.light .brand-highlight::after {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .audience-tabs {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .audience-tab {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 1.2rem 2.5rem;
          cursor: pointer;
          transition: all 0.4s ease;
          text-align: center;
          min-width: 180px;
          position: relative;
          overflow: hidden;
        }
        
        .audience-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }
        
        .audience-tab:hover::before {
          left: 100%;
        }
        
        .audience-tab:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-3px);
        }
        
        .audience-tab.active {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .audience-tab h3 {
          margin: 0;
          font-size: 1.3rem;
          font-weight: 600;
        }
        
        .audience-tab p {
          margin: 0.5rem 0 0 0;
          font-size: 0.9rem;
          opacity: 0.9;
        }
        
        .audience-content {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2.5rem;
          max-width: 800px;
          margin: 0 auto;
          transition: all 0.4s ease;
        }
        
        .audience-content:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        
        .audience-content h3 {
          font-size: 2rem;
          margin-bottom: 1.2rem;
          color: #e0e7ff;
        }
        
        .audience-content p {
          font-size: 1.2rem;
          margin-bottom: 1.8rem;
          line-height: 1.7;
          color: #c7d2fe;
        }
        
        .audience-details {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .audience-details p {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #e0e7ff;
        }
        
        /* How It Works Section */
        .how-it-works-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
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
          top: 60px;
          left: 100px;
          right: 100px;
          height: 6px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa);
          z-index: 0;
          border-radius: 3px;
        }
        
        .process-step {
          position: relative;
          z-index: 1;
          text-align: center;
          width: 30%;
          transition: transform 0.4s ease;
        }
        
        .process-step:hover {
          transform: translateY(-10px);
        }
        
        .step-number {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          font-weight: 700;
          margin: 0 auto 1.8rem;
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
          position: relative;
          overflow: hidden;
        }
        
        .step-number::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #6366f1, #8b5cf6, #a78bfa, #c4b5fd);
          border-radius: 50%;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
          filter: blur(5px);
        }
        
        .process-step:hover .step-number::after {
          opacity: 1;
        }
        
        .step-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.8rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .step-icon-element {
          color: #6366f1;
          font-size: 2.2rem;
        }
        
        .step-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          color: #1e293b;
        }
        
        .step-description {
          color: #475569;
          line-height: 1.6;
          font-size: 1.1rem;
        }
        
        .demo-video {
          margin-top: 6rem;
          text-align: center;
        }
        
        .video-placeholder {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          border: 2px dashed #6366f1;
          border-radius: 20px;
          padding: 4rem;
          display: inline-block;
          color: #6366f1;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        
        .video-placeholder::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #6366f1, #8b5cf6, #a78bfa, #c4b5fd);
          border-radius: 20px;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
          filter: blur(5px);
        }
        
        .video-placeholder:hover::before {
          opacity: 1;
        }
        
        .video-placeholder:hover {
          transform: translateY(-5px);
          border-color: #8b5cf6;
        }
        
        .video-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }
        
        /* Pricing Section */
        .pricing-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }
        
        .pricing-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
          backdrop-filter: blur(10px);
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .pricing-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .pricing-card.primary {
          border: 2px solid #6366f1;
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }
        
        .pricing-header {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .pricing-card.primary .pricing-header {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
        }
        
        .pricing-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: pulse 4s infinite;
        }
        
        .pricing-header h3 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 1;
        }
        
        .pricing-header p {
          margin: 0;
          opacity: 0.9;
          position: relative;
          z-index: 1;
        }
        
        .audience-size {
          font-size: 1rem;
          opacity: 0.8;
        }
        
        .pricing-price {
          text-align: center;
          padding: 2.5rem 1.5rem;
          font-size: 3rem;
          font-weight: 800;
          color: #1e293b;
        }
        
        .min-price {
          font-size: 0.5em;
          font-weight: 400;
          color: #64748b;
        }
        
        .pricing-features {
          list-style: none;
          padding: 0 1.5rem 2rem;
          margin: 0;
        }
        
        .pricing-features li {
          padding: 1rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          color: #475569;
          font-size: 1.1rem;
        }
        
        .pricing-features li:last-child {
          border-bottom: none;
        }
        
        .check-icon {
          color: #10b981;
          margin-right: 0.8rem;
          font-size: 1.2rem;
        }
        
        .pricing-button {
          width: 100%;
          padding: 1.2rem;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s ease;
          font-size: 1.1rem;
          border-radius: 0 0 20px 20px;
        }
        
        .pricing-button.primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
        }
        
        .pricing-button.primary:hover {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
        }
        
        .pricing-button.secondary {
          background: transparent;
          color: #6366f1;
          border: 2px solid #6366f1;
        }
        
        .pricing-button.secondary:hover {
          background: rgba(99, 102, 241, 0.1);
        }
        
        .pricing-note {
          text-align: center;
          margin-top: 3rem;
          color: #64748b;
          font-style: italic;
          font-size: 1.1rem;
        }
        
        /* CTA Section */
        .cta-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #0f172a, #1e293b, #334155);
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
          background: radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.3), transparent 50%);
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
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3));
          backdrop-filter: blur(10px);
          color: #e0e7ff;
          padding: 8px 24px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .cta-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: white;
          background: linear-gradient(90deg, #e0e7ff, #c7d2fe, #a5b4fc);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .cta-subtitle {
          font-size: 1.3rem;
          color: #cbd5e1;
          margin-bottom: 3rem;
          line-height: 1.7;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-button.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        /* Footer */
        .footer {
          padding: 4rem 0;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: #94a3b8;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        
        .footer-logo {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .footer-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }
        
        .footer-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #6366f1;
        }
        
        .footer-links a:hover::after {
          width: 100%;
        }
        
        .footer-social {
          display: flex;
          gap: 1.5rem;
          justify-content: flex-end;
        }
        
        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-icon:hover {
          background: rgba(99, 102, 241, 0.2);
          color: #6366f1;
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }
        
        .footer-copyright {
          grid-column: span 3;
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          font-size: 1rem;
          opacity: 0.7;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .pain-grid {
            grid-template-columns: 1fr;
          }
          
          .audience-tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .audience-content {
            padding: 2rem;
          }
          
          .process-steps {
            flex-direction: column;
            align-items: center;
            gap: 4rem;
          }
          
          .process-steps::before {
            display: none;
          }
          
          .process-step {
            width: 100%;
          }
          
          .pricing-grid {
            grid-template-columns: 1fr;
          }
          
          .pricing-card.primary {
            transform: scale(1);
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button {
            width: 100%;
            max-width: 350px;
            text-align: center;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .footer-social {
            justify-content: center;
          }
          
          .footer-copyright {
            grid-column: span 1;
          }
          
          .scroll-top {
            right: 20px;
          }
          
          .fab {
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
          }
        }
        
        @media (max-width: 480px) {
          .feature-card {
            padding: 2rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .cta-button, .cta-button-secondary {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
          
          .pricing-card.primary {
            transform: scale(1);
          }
          
          .stat-card {
            padding: 1.5rem;
          }
          
          .pain-card {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;