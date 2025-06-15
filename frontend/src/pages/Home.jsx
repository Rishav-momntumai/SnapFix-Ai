import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useMemo } from 'react';
import { FiUpload, FiMapPin, FiFileText } from 'react-icons/fi';

function FeatureCard({ icon, title, description, delay }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className="col-md-4 mb-4"
    >
      <div className="feature-card shadow-lg rounded-lg p-4 h-100 hover-effect">
        <div className="feature-icon mb-3">
          {icon}
        </div>
        <h5 className="font-weight-bold">{title}</h5>
        <p className="text-muted">{description}</p>
      </div>
    </motion.div>
  );
}

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prepare stable random values for floating elements to avoid jitter
  const floatingElements = useMemo(() => {
    return [...Array(5)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: 10 + Math.random() * 20,
      height: 10 + Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.3,
      xStart: Math.random() * 100,
      xEnd: Math.random() * 100 + 50,
      duration: 10 + Math.random() * 10,
    }));
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Parallax Effect */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="hero-bg" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="container position-relative z-index-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center py-5"
          >
            <h1 className="display-4 mb-4 font-weight-bold text-white">
              Welcome to <span className="text-primary">SnapFix</span> AI
            </h1>
            <p className="lead mb-4 text-light">
              Report local issues like potholes, garbage, or business damages with ease using AI-powered analysis.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/report" className="btn btn-primary btn-lg px-4 py-3 rounded-pill shadow">
                Report an Issue <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated floating elements */}
        <div className="floating-elements" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {floatingElements.map((item, i) => (
            <motion.div
              key={i}
              className="floating-element"
              initial={{ y: 0, x: item.xStart }}
              animate={{
                y: [0, 50, 0],
                x: [item.xStart, item.xEnd],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                position: 'absolute',
                left: `${item.left}%`,
                top: `${item.top}%`,
                width: `${item.width}px`,
                height: `${item.height}px`,
                opacity: item.opacity,
              }}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5 font-weight-bold"
          >
            Why Choose <span className="text-primary">SnapFix AI</span>?
          </motion.h2>
          <div className="row">
            <FeatureCard
              icon={<FiUpload className="text-primary" size={32} />}
              title="AI-Powered Analysis"
              description="Our advanced AI classifies issues as public or business-related with high accuracy."
              delay={0}
            />
            <FeatureCard
              icon={<FiMapPin className="text-primary" size={32} />}
              title="Live Location Tracking"
              description="Capture your location instantly to ensure precise reporting."
              delay={1}
            />
            <FeatureCard
              icon={<FiFileText className="text-primary" size={32} />}
              title="Automated Reports"
              description="Receive detailed, human-like reports sent directly to the right authorities."
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center">
            <motion.div 
              className="col-md-4 mb-4"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="display-4 font-weight-bold">10K+</h3>
              <p className="lead">Issues Reported</p>
            </motion.div>
            <motion.div 
              className="col-md-4 mb-4"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="display-4 font-weight-bold">95%</h3>
              <p className="lead">Accuracy Rate</p>
            </motion.div>
            <motion.div 
              className="col-md-4 mb-4"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="display-4 font-weight-bold">24h</h3>
              <p className="lead">Average Response Time</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 font-weight-bold">Ready to make a difference?</h2>
            <p className="lead mb-4">Join thousands of users improving their communities</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/report" className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill shadow-sm">
                Get Started Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
