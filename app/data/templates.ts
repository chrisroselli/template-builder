import {TemplateSection} from '../types/types';

export const templates: TemplateSection = {
  headers: [
    {
      id: 'modern-nav-hero',
      name: 'Modern Nav with Hero',
      code: `<header class="hero-header">
  <nav class="nav-container">
    <div class="nav-logo">
      <h1>Brand</h1>
    </div>
    <div class="nav-links">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#about">About</a>
      <button class="nav-cta">Get Started</button>
    </div>
  </nav>
  <div class="hero-content">
    <h1>Transform Your Workflow</h1>
    <p>Build better products faster with our innovative platform</p>
    <button class="hero-button">Start Free Trial</button>
  </div>
</header>`,
      css: `.hero-header {
  background: linear-gradient(135deg, #1a365d 0%, #2563eb 100%);
  color: white;
  min-height: 80vh;
  padding: 1rem 2rem;
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}
.nav-logo h1 {
  font-size: 1.5rem;
  font-weight: bold;
}
.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}
.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.nav-cta {
  background: white;
  color: #2563eb;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
}
.hero-content {
  max-width: 1200px;
  margin: 8rem auto;
  text-align: center;
}
.hero-content h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}
.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}
.hero-button {
  background: white;
  color: #2563eb;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
}`
    },
    {
      id: 'minimal-dark-header',
      name: 'Minimal Dark Header',
      code: `<header class="minimal-header">
  <div class="header-container">
    <div class="logo">
      <span class="logo-dot"></span>
      <span class="logo-text">Minimal</span>
    </div>
    <nav class="nav-menu">
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>`,
      css: `.minimal-header {
  background: #111827;
  padding: 1.5rem;
}
.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.logo-dot {
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
}
.logo-text {
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
}
.nav-menu {
  display: flex;
  gap: 2rem;
}
.nav-menu a {
  color: #9ca3af;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-menu a:hover {
  color: white;
}`
    },
    {
      id: 'enterprise-header',
      name: 'Enterprise Header',
      code: `<header class="enterprise-header">
  <div class="top-bar">
    <div class="top-content">
      <span>🎉 New: Enterprise features now available</span>
      <a href="#learn-more">Learn more →</a>
    </div>
  </div>
  <nav class="main-nav">
    <div class="nav-content">
      <div class="brand">Enterprise</div>
      <div class="nav-items">
        <a href="#solutions">Solutions</a>
        <a href="#products">Products</a>
        <a href="#resources">Resources</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div class="auth-buttons">
        <button class="login">Log in</button>
        <button class="signup">Start Free Trial</button>
      </div>
    </div>
  </nav>
</header>`,
      css: `.enterprise-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
}
.top-bar {
  background: #4f46e5;
  color: white;
  padding: 0.75rem 0;
}
.top-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 0.875rem;
}
.top-content a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.main-nav {
  padding: 1rem 2rem;
}
.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
}
.nav-items {
  display: flex;
  gap: 2rem;
}
.nav-items a {
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
}
.auth-buttons {
  display: flex;
  gap: 1rem;
}
.login {
  padding: 0.5rem 1rem;
  color: #4b5563;
  font-weight: 500;
}
.signup {
  background: #4f46e5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
}`
    }
  ],
  features: [
    {
      id: 'grid-features',
      name: 'Grid Features',
      code: `<section class="features-grid">
  <div class="features-container">
    <h2>Why Choose Us</h2>
    <p class="subtitle">Everything you need to succeed</p>
    <div class="grid">
      <div class="feature-card">
        <div class="icon">⚡</div>
        <h3>Lightning Fast</h3>
        <p>Optimized for speed and performance</p>
      </div>
      <div class="feature-card">
        <div class="icon">🛡️</div>
        <h3>Secure</h3>
        <p>Enterprise-grade security built-in</p>
      </div>
      <div class="feature-card">
        <div class="icon">🔄</div>
        <h3>Scalable</h3>
        <p>Grows with your business needs</p>
      </div>
      <div class="feature-card">
        <div class="icon">📱</div>
        <h3>Responsive</h3>
        <p>Works on all devices</p>
      </div>
    </div>
  </div>
</section>`,
      css: `.features-grid {
  padding: 5rem 2rem;
  background: #f9fafb;
}
.features-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.features-container h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
}
.subtitle {
  color: #6b7280;
  font-size: 1.25rem;
  margin-bottom: 3rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}
.feature-card p {
  color: #6b7280;
}`
    },
    {
      id: 'stats-section',
      name: 'Stats Section',
      code: `<section class="stats-section">
  <div class="stats-container">
    <div class="stats-header">
      <h2>Trusted by thousands</h2>
      <p>Join the companies already using our platform</p>
    </div>
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-number">99.9%</span>
        <span class="stat-label">Uptime</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">2M+</span>
        <span class="stat-label">Users</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">500+</span>
        <span class="stat-label">Enterprise Clients</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">24/7</span>
        <span class="stat-label">Support</span>
      </div>
    </div>
  </div>
</section>`,
      css: `.stats-section {
  background: #1e293b;
  color: white;
  padding: 5rem 2rem;
}
.stats-container {
  max-width: 1200px;
  margin: 0 auto;
}
.stats-header {
  text-align: center;
  margin-bottom: 4rem;
}
.stats-header h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.stats-header p {
  color: #94a3b8;
  font-size: 1.25rem;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
}
.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: #60a5fa;
}
.stat-label {
  color: #94a3b8;
  font-size: 1.125rem;
}`
    },
    {
      id: 'image-features',
      name: 'Image Features',
      code: `<section class="image-features">
  <div class="features-wrapper">
    <div class="text-content">
      <h2>Features that matter</h2>
      <div class="feature-list">
        <div class="feature-item">
          <div class="feature-icon">✨</div>
          <div>
            <h3>Beautiful Design</h3>
            <p>Crafted with attention to detail</p>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🚀</div>
          <div>
            <h3>Performance First</h3>
            <p>Optimized for speed and efficiency</p>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🛠️</div>
          <div>
            <h3>Easy Integration</h3>
            <p>Works with your existing tools</p>
          </div>
        </div>
      </div>
    </div>
    <div class="image-container">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Features illustration" />
    </div>
  </div>
</section>`,
      css: `.image-features {
  padding: 5rem 2rem;
  background: white;
}
.features-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.text-content h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 2rem;
}
.feature-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.feature-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.feature-icon {
  font-size: 1.5rem;
  padding: 0.75rem;
  background: #f3f4f6;
  border-radius: 0.5rem;
}
.feature-item h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}
.feature-item p {
  color: #6b7280;
}
.image-container img {
  width: 100%;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}`
    }
  ],
  footers: [
    {
      id: 'modern-footer',
      name: 'Modern Footer',
      code: `<footer class="modern-footer">
  <div class="footer-content">
    <div class="footer-main">
      <div class="footer-brand">
        <h2>Brand</h2>
        <p>Building the future of web development</p>
      </div>
      <div class="footer-links">
        <div class="link-group">
          <h3>Product</h3>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Documentation</a>
        </div>
        <div class="link-group">
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#blog">Blog</a>
        </div>
        <div class="link-group">
          <h3>Resources</h3>
          <a href="#community">Community</a>
          <a href="#contact">Contact</a>
          <a href="#support">Support</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 Brand. All rights reserved.</p>
      <div class="legal-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>`,
      css: `.modern-footer {
  background: #1f2937;
  color: white;
  padding: 4rem 2rem 2rem;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}
.footer-main {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #374151;
}
.footer-brand h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.footer-brand p {
  color: #9ca3af;
}
.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.link-group h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.link-group a {
  display: block;
  color: #9ca3af;
  text-decoration: none;
  margin-bottom: 0.75rem;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  color: #9ca3af;
  font-size: 0.875rem;
}
.legal-links {
  display: flex;
  gap: 1.5rem;
}
.legal-links a {
  color: #9ca3af;
  text-decoration: none;
}`
    },
    {
      id: 'simple-footer',
      name: 'Simple Footer',
      code: `<footer class="simple-footer">
  <div class="footer-wrapper">
    <div class="footer-top">
      <div class="footer-logo">
        <span class="dot"></span>
        <span class="logo-text">Simple</span>
      </div>
      <div class="social-links">
        <a href="#twitter">Twitter</a>
        <a href="#github">GitHub</a>
        <a href="#linkedin">LinkedIn</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 Simple. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      css: `.simple-footer {
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 2rem;
}
.footer-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.dot {
  width: 8px;
  height: 8px;
  background: #4f46e5;
  border-radius: 50%;
}
.logo-text {
  font-weight: 600;
  font-size: 1.25rem;
}
.social-links {
  display: flex;
  gap: 1.5rem;
}
.social-links a {
  color: #6b7280;
  text-decoration: none;
  font-size: 0.875rem;
}
.footer-bottom {
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
}`
    },
    {
      id: 'newsletter-footer',
      name: 'Newsletter Footer',
      code: `<footer class="newsletter-footer">
  <div class="footer-container">
    <div class="newsletter-section">
      <h2>Subscribe to our newsletter</h2>
      <p>Get the latest updates and news delivered to your inbox.</p>
      <form class="subscribe-form">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
    <div class="footer-info">
      <div class="company-info">
        <h3>About Us</h3>
        <p>We're building the future of web development, one component at a time.</p>
      </div>
      <div class="quick-links">
        <h3>Quick Links</h3>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="contact-info">
        <h3>Contact</h3>
        <p>hello@company.com</p>
        <p>+1 (555) 123-4567</p>
      </div>
    </div>
  </div>
</footer>`,
      css: `.newsletter-footer {
  background: #f8fafc;
  padding: 4rem 2rem;
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}
.newsletter-section {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
}
.newsletter-section h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 1rem;
}
.newsletter-section p {
  color: #64748b;
  margin-bottom: 2rem;
}
.subscribe-form {
  display: flex;
  gap: 1rem;
}
.subscribe-form input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
}
.subscribe-form button {
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
}
.footer-info {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  padding-top: 3rem;
  border-top: 1px solid #e2e8f0;
}
.footer-info h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}
.company-info p {
  color: #64748b;
  line-height: 1.6;
}
.quick-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.quick-links a {
  color: #64748b;
  text-decoration: none;
}
.contact-info p {
  color: #64748b;
  margin-bottom: 0.5rem;
}`
    }
  ],
  ctas: [
    {
      id: 'gradient-cta',
      name: 'Gradient CTA',
      code: `<section class="gradient-cta">
  <div class="cta-container">
    <h2>Ready to Get Started?</h2>
    <p>Join thousands of users who are already using our platform</p>
    <div class="cta-buttons">
      <button class="primary-button">Get Started</button>
      <button class="secondary-button">Learn More</button>
    </div>
  </div>
</section>`,
      css: `.gradient-cta {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  padding: 4rem 0;
}
.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
}
.cta-container h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.cta-container p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}
.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.primary-button {
  background: white;
  color: #4f46e5;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s;
}
.secondary-button {
  background: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: 2px solid white;
  transition: opacity 0.2s;
}
.primary-button:hover,
.secondary-button:hover {
  opacity: 0.9;
}`
    },
    {
      id: 'simple-banner',
      name: 'Simple Banner',
      code: `<div class="banner-cta">
  <div class="banner-content">
    <p>Special offer: Get 20% off when you sign up today!</p>
    <button class="banner-button">Sign Up Now</button>
  </div>
</div>`,
      css: `.banner-cta {
  background: #1e293b;
  color: white;
  padding: 1rem 0;
}
.banner-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.banner-content p {
  font-size: 1.125rem;
}
.banner-button {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;
}
.banner-button:hover {
  background: #2563eb;
}`
    },
    {
      id: 'feature-cta',
      name: 'Feature CTA',
      code: `<section class="feature-cta">
  <div class="cta-grid">
    <div class="cta-content">
      <span class="badge">New Feature</span>
      <h2>Transform Your Workflow</h2>
      <p>Experience the next generation of productivity tools with our latest features.</p>
      <ul class="feature-list">
        <li>✓ Advanced Analytics</li>
        <li>✓ Team Collaboration</li>
        <li>✓ Real-time Updates</li>
      </ul>
      <button class="cta-button">Try it Free</button>
    </div>
    <div class="cta-image">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80" alt="Feature illustration" />
    </div>
  </div>
</section>`,
      css: `.feature-cta {
  background: #f8fafc;
  padding: 5rem 2rem;
}
.cta-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.badge {
  display: inline-block;
  background: #818cf8;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
.cta-content h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 1rem;
}
.cta-content p {
  color: #64748b;
  font-size: 1.125rem;
  margin-bottom: 2rem;
}
.feature-list {
  list-style: none;
  margin-bottom: 2rem;
}
.feature-list li {
  color: #334155;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
}
.cta-button {
  background: #4f46e5;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 0.2s;
}
.cta-button:hover {
  background: #4338ca;
}
.cta-image img {
  width: 100%;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}`
    }
  ]
};