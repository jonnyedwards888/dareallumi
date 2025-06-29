import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "./index.css";
import './App.css';
import './LotsGoingOn.css';
import './NavbarMobile.css';
import './DataSection.css';

import './Responsive.css';


function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  React.useEffect(() => {
    const select = document.getElementById("custom-google-translate");
    if (!select) return;
    select.addEventListener("change", function () {
      const lang = select.value;
      const frame = document.querySelector("iframe.goog-te-menu-frame");
      if (frame) {
        const innerDoc = frame.contentDocument || frame.contentWindow.document;
        const langButtons = innerDoc.querySelectorAll(".goog-te-menu2-item span.text");
        for (let i = 0; i < langButtons.length; i++) {
          if (langButtons[i].innerHTML.indexOf(lang) > -1) {
            langButtons[i].click();
            break;
          }
        }
      }
    });
  }, []);

  const scrollToDataSection = (e) => {
    e.preventDefault();
    const el = document.getElementById('data-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ fontFamily: 'Michroma, sans-serif' }}>
      <div className="hero-topbar">
        <Link to="/" className="hero-button">
          <img src={process.env.PUBLIC_URL + "/Lumi-main-logo.png"} alt="LUMI Icon" className="lumi-navbar-icon" />
          LUMI
        </Link>
        <div className="hero-nav-right">
          <Link to="/solutions" className="hero-button">Solutions</Link>
          <Link to="/faqs" className="hero-button">FAQs</Link>
          <Link to="/about" className="hero-button">About</Link>
          <a href="https://x.com/mylumi_ai" className="hero-button" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/X-logo-navbar.jpg"} alt="X (Twitter)" style={{ height: '1.6em', width: 'auto', verticalAlign: 'middle', marginRight: '0.2em', display: 'inline-block' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/lumi-darker-background.png"})`,
        backgroundPosition: '40% center',
      }}
    >
      <Navbar />
      <div className="hero-content">
        <div className="lumi-hero-text">
          <h1 className="lumi-heading" style={{ fontFamily: 'Michroma, sans-serif' }}>LUMI</h1>
          <div className="lumi-avatar-wrapper">
            <img
              src={process.env.PUBLIC_URL + "/Lumi-Line-Main.png"}
              alt="Lumi Full Body"
              className="lumi-fullbody-img"
            />
          </div>
          <div className="lumi-hero-buttons">
            <a href={process.env.PUBLIC_URL + "/Lumi-Lite-Paper.pdf"} className="lumi-hero-btn" target="_blank" rel="noopener noreferrer">Lite Paper</a>
            <a href="#" className="lumi-hero-btn">Register</a>
            <a href="#" className="lumi-hero-btn">Buy $LUMI</a>
          </div>
          <div className="lumi-subtitle" style={{ fontFamily: 'Michroma, sans-serif', marginTop: '0.5rem' }}>
            The first AI person-centred care agent on chain.
          </div>
        </div>
      </div>
    </div>
  );
}

function LumiTokenSection() {
  return (
    <section className="lumi-token-section" style={{ background: '#18153a', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 0 2rem 0' }}>
      <h2 className="lumi-token-heading" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.5rem', color: '#fff', marginBottom: '2.5rem', letterSpacing: '0.01em', textAlign: 'center' }}>What is the $LUMI token?</h2>
      <div className="max-w-3xl w-full px-4" style={{ color: '#fff', fontSize: '1.2rem' }}>
        <div style={{ marginBottom: '1.2rem' }}>
          <a href="https://remelife.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <img src={process.env.PUBLIC_URL + '/ReMeLife-top-icon.png'} alt="ReMeLife" style={{ display: 'inline', width: '5.2em', height: 'auto', verticalAlign: 'middle', marginRight: '0.4em', cursor: 'pointer' }} />
          </a>
          <span>is a tokenised Care2Earn care platform that rewards its users for their digital care actions using our proprietary apps.</span>
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <a href="https://remindmecare.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <img src={process.env.PUBLIC_URL + '/RemineMecare-icon.png'} alt="RemindMeCare" style={{ display: 'inline', width: '10em', height: 'auto', verticalAlign: 'middle', marginRight: '0.4em', cursor: 'pointer' }} />
          </a>
          <span>is the app at the heart of the ReMeLife ecosystem, that enhances person-centred care for those with cognitive difficulties.</span>
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <span className="lumi-token-lumiai" style={{ background: 'linear-gradient(90deg, #ff7ee7 0%, #b16fc9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, fontSize: '1.1em', letterSpacing: '0.04em' }}>LUMI </span>
          <span> is the AI avatar in ReMeLife's health care ecosystem that manages the apps and data, and supports and guides users. LUMI is a utility token.</span>
        </div>
        <div style={{ marginBottom: '2.2rem' }}>
          We're building an agentic LLM based AI suite, that's layered into the existing ReMeLife platform and apps, and using our proprietary Electronic Life Records (ELR) dataset, so as to optimise the process of personal profile creation for those being cared for with cognitive conditions, enhance supportive care interactivity, fully bespoke entertainment, and tailor community engagement, whilst managing security and monetising personal data for the ReMeLife community.
        </div>
        <div>
          Decentralisation is the key driver for social change, AI and blockchain are the engines of progress, and tokenization is the fuel that empowers us. Whether 80 and learning to use a tablet, or 18 and harvesting the native token through community building and app usage, Lumi is there to help.
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '2.5rem' }}>
        <video
          src={process.env.PUBLIC_URL + '/Lumi-spaceship-video.mp4'}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '820px', maxWidth: '99vw', borderRadius: '2rem', boxShadow: '0 4px 32px #0008', background: '#222' }}
        />
      </div>

      
    </section>
  );
}

function FounderWordsSection() {
  return (
    <section className="founder-words-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'none', padding: '3.5rem 0 1.5rem 0', maxWidth: '1500px', margin: '0 auto' }}>
      <h2 className="founder-words-heading founder-words-heading-mobile" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.4rem', letterSpacing: '0.04em', marginBottom: '2.2rem', color: '#fff', textShadow: '2px 2px 0 #23234a', textAlign: 'center', width: '100%' }}>A few words from the Founder</h2>
      <div className="founder-words-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', gap: '3.5rem', width: '100%' }}>
        <div className="founder-words-left" style={{ flex: '0 0 420px', maxWidth: '420px', minWidth: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
          <video
            src={process.env.PUBLIC_URL + '/Lumi-founder-video.mp4'}
            controls
            className="founder-words-video-mobile"
            poster={process.env.PUBLIC_URL + '/about-page-images/simon-hooper-about-page.jpg'}
            style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 4px 32px #0008', background: 'red', maxWidth: 420, margin: '0 auto', marginTop: '2rem' }}
          />
        </div>
        <div className="founder-words-text founder-words-text-mobile" style={{ flex: '1 1 0', color: '#fff', fontFamily: 'Inter, sans-serif', maxWidth: '800px', minWidth: '260px', fontSize: '1.35rem', lineHeight: 1.5, marginTop: '1.5rem', textAlign: 'left' }}>
          Do you have a family member with dementia, living alone, with autism or learning difficulties? 62% of the world does, so you probably do. I did. And that's how I came from the music business into the world of care. It's been a long journey, from building my first app 11 years ago, to crypto, memes and to now, the launch of Lumi.<br /><br />
          The ReMeLife community platform and apps have launched (in beta) and our blockchain (Convex Lattice) and AI builds are underway. Lumi has landed!
        </div>
      </div>
    </section>
  );
}

function DataSection() {
  // Responsive: detect mobile
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 700);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="data-section" id="data-section">
      <h2 className="data-section-heading" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.5rem', letterSpacing: '0.04em', color: '#fff', textAlign: 'center', marginTop: '3.5rem', marginBottom: '1.5rem' }}>DATA</h2>
      <div className="data-section-card">
        {/* Left column: larger image only */}
        {!isMobile && (
          <div className="data-section-col left">
            <img
              src={process.env.PUBLIC_URL + '/lumiai-project-analysis.jpg'}
              alt="Lumi AI Project Analysis"
              className="data-section-img" style={{ width: '360px', height: '360px', cursor: 'pointer' }}
              onClick={() => window.open(process.env.PUBLIC_URL + '/AI-Viability-Analysis.pdf', '_blank', 'noopener,noreferrer')}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.open(process.env.PUBLIC_URL + '/AI-Viability-Analysis.pdf', '_blank', 'noopener,noreferrer'); }}
              tabIndex={0}
              role="button"
            />
          </div>
        )}
        {/* Center column: links */}
        <div className="data-section-col center" style={isMobile ? { alignItems: 'center', textAlign: 'center', width: '100%' } : {}}>
          <div className="data-section-row"><a href={process.env.PUBLIC_URL + '/RemeLife-Lite-Paper.pdf'} className="data-section-link" target="_blank" rel="noopener noreferrer">Lite Paper</a></div>
          <div className="data-section-row"><a href="#" className="data-section-link">AI Report</a></div>
          <div className="data-section-row"><a href="https://remelife.io/project_data/" className="data-section-link" target="_blank" rel="noopener noreferrer">ReMeLife Data</a></div>
          <div className="data-section-row"><a href="https://github.com/ReMe-life" className="data-section-link" target="_blank" rel="noopener noreferrer">GitHub</a></div>
        </div>
        {/* Right column: icons and app links, all vertically aligned */}
        {!isMobile ? (
          <div className="data-section-col right">
            <div className="data-section-row">
              <img src={process.env.PUBLIC_URL + '/remelife-icon.png'} alt="ReMeLife" className="data-section-icon" />
              <a href="https://remelife.com/" className="data-section-link" target="_blank" rel="noopener noreferrer">REMELIFE</a>
            </div>
            <div className="data-section-row">
              <img src={process.env.PUBLIC_URL + '/remindmecare-icon.png'} alt="RemindMeCare" className="data-section-icon" />
              <a href="https://remindmecare.com/" className="data-section-link" target="_blank" rel="noopener noreferrer">REMINDMECARE</a>
            </div>
            <div className="data-section-row">
              <img src={process.env.PUBLIC_URL + '/better-google-icon.png'} alt="Google Play" className="data-section-icon" />
              <a href="https://play.google.com/store/apps/developer?id=ReMeLife" className="data-section-link" target="_blank" rel="noopener noreferrer">APPS</a>
            </div>
          </div>
        ) : (
          <div className="data-section-col right" style={{ width: '100%', alignItems: 'center', marginTop: '0.7rem', gap: '0.7rem' }}>
            <div className="data-section-row" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.7rem', width: '100%' }}>
              <img src={process.env.PUBLIC_URL + '/remelife-icon.png'} alt="ReMeLife" className="data-section-icon" style={{ width: 38, height: 38 }} />
              <a href="https://remelife.com/" className="data-section-link" target="_blank" rel="noopener noreferrer" style={{ margin: 0 }}>REMELIFE</a>
            </div>
            <div className="data-section-row" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.7rem', width: '100%' }}>
              <img src={process.env.PUBLIC_URL + '/remindmecare-icon.png'} alt="RemindMeCare" className="data-section-icon" style={{ width: 38, height: 38 }} />
              <a href="https://remindmecare.com/" className="data-section-link" target="_blank" rel="noopener noreferrer" style={{ margin: 0 }}>REMINDMECARE</a>
            </div>
            <div className="data-section-row" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '0.7rem', width: '100%' }}>
              <img src={process.env.PUBLIC_URL + '/better-google-icon.png'} alt="Google Play" className="data-section-icon" style={{ width: 38, height: 38 }} />
              <a href="https://play.google.com/store/apps/developer?id=ReMeLife" className="data-section-link" target="_blank" rel="noopener noreferrer" style={{ margin: 0 }}>APPS</a>
            </div>
          </div>
        )}
      </div>
      {/* Animated Lumi Spaceship */}
      <div className="lumi-spaceship-fly-wrapper">
        <img src={process.env.PUBLIC_URL + '/Lumi-spaceship.png'} alt="Lumi Spaceship" className="lumi-spaceship-fly" />
      </div>
    </section>
  );
}

function PhasesSection() {
  return (
    <section className="phases-section">
      <h2 className="phases-title" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.5rem', letterSpacing: '0.04em', color: '#fff', textAlign: 'center' }}>PHASES</h2>
      <div className="phases-grid">
        {/* PHASE 1 */}
        <div className="phases-card" style={{
          background: 'linear-gradient(180deg, #3a2352 0%, #23234a 100%)',
          borderRadius: '1.5rem',
          border: '2px solid rgba(177, 111, 201, 0.15)', // subtle purple
          boxShadow: '0 0 20px 4px rgba(177, 111, 201, 0.13), 0 4px 16px #0008 inset',
          padding: '2rem 1.5rem',
          margin: '0.5rem',
          minHeight: '320px',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div className="phases-heading" style={{
            textAlign: 'center',
            fontFamily: 'Michroma, sans-serif',
            fontWeight: 500,
            fontSize: '1.05rem',
            color: '#c7b3e6',
            marginBottom: '1rem',
            letterSpacing: '0.03em',
          }}>PHASE 1 2024/5</div>
          <div className="phases-content">
            <ul>
              <li>Complete RemindMecare</li>
              <li>Complete ReMeLife (Beta)</li>
              <li>Complete RAPP</li>
              <li>Finalise tokenomics modelling</li>
              <li>AI project design</li>
            </ul>
          </div>
        </div>
        {/* PHASE 2 */}
        <div className="phases-card" style={{
          background: 'linear-gradient(180deg, #2d355c 0%, #23234a 100%)',
          borderRadius: '1.5rem',
          border: '2px solid rgba(63, 142, 252, 0.13)', // subtle blue
          boxShadow: '0 0 20px 4px rgba(63, 142, 252, 0.11), 0 4px 16px #0008 inset',
          padding: '2rem 1.5rem',
          margin: '0.5rem',
          minHeight: '320px',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div className="phases-heading" style={{
            textAlign: 'center',
            fontFamily: 'Michroma, sans-serif',
            fontWeight: 500,
            fontSize: '1.05rem',
            color: '#b3d1fa',
            marginBottom: '1rem',
            letterSpacing: '0.03em',
          }}>PHASE 2 2025</div>
          <div className="phases-content">
            <ul>
              <li>Complete project audits</li>
              <li>Start ReMeGrid Convex build</li>
              <li>Activate wallet & REME</li>
              <li>Launch RemindMecare & ReMeLife</li>
              <li>Launch LUMI token</li>
            </ul>
          </div>
        </div>
        {/* PHASE 3 */}
        <div className="phases-card" style={{
          background: 'linear-gradient(180deg, #233a52 0%, #23234a 100%)',
          borderRadius: '1.5rem',
          border: '2px solid rgba(45, 212, 191, 0.12)', // subtle indigo/teal
          boxShadow: '0 0 20px 4px rgba(45, 212, 191, 0.10), 0 4px 16px #0008 inset',
          padding: '2rem 1.5rem',
          margin: '0.5rem',
          minHeight: '320px',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div className="phases-heading" style={{
            textAlign: 'center',
            fontFamily: 'Michroma, sans-serif',
            fontWeight: 500,
            fontSize: '1.05rem',
            color: '#b3fff6',
            marginBottom: '1rem',
            letterSpacing: '0.03em',
          }}>PHASE 3 2025/6</div>
          <div className="phases-content">
            <ul>
              <li>Build ReMeLife Foundation</li>
              <li>Launch LUMI VIP Club</li>
              <li>Launch NFT collection</li>
              <li>Launch ReMeGrid</li>
              <li>Launch tokens on exchanges</li>
            </ul>
          </div>
        </div>
        {/* PHASE 4 */}
        <div className="phases-card" style={{
          background: 'linear-gradient(180deg, #232a4a 0%, #23234a 100%)',
          borderRadius: '1.5rem',
          border: '2px solid rgba(80, 90, 200, 0.13)', // subtle indigo
          boxShadow: '0 0 20px 4px rgba(80, 90, 200, 0.13), 0 4px 16px #0008 inset',
          padding: '2rem 1.5rem',
          margin: '0.5rem',
          minHeight: '320px',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div className="phases-heading" style={{
            textAlign: 'center',
            fontFamily: 'Michroma, sans-serif',
            fontWeight: 500,
            fontSize: '1.05rem',
            color: '#7e8ee6',
            marginBottom: '1rem',
            letterSpacing: '0.03em',
          }}>PHASE 4 2025/6</div>
          <div className="phases-content">
            <ul>
              <li>Complete AI integrations</li>
              <li>Launch ReMeLife Foundation</li>
              <li>Launch RUBI to Members</li>
              <li>Launch RAgency DeFi</li>
              <li>Launch Community NFT Market</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComingSoonSection() {
  return (
    <section className="coming-soon-section">
      <h2 className="coming-soon-title" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '0.04em', color: '#fff', textAlign: 'center' }}>COMING SOON ...</h2>
      <div className="coming-soon-grid">
        {/* Top Left: LUMI REWARDS */}
        <div className="coming-soon-item coming-soon-row">
          <img src={process.env.PUBLIC_URL + '/Lumi-rewards.png'} alt="LUMI REWARDS" className="coming-soon-img" />
          <div className="coming-soon-text">
            <div className="coming-soon-item-title" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 700, fontSize: '1.55rem', color: '#fff', textAlign: 'center', width: '100%' }}>LUMI REWARDS</div>
            <div className="coming-soon-item-desc" style={{ fontFamily: 'Inter, sans-serif' }}>
              We'll be launching meme games, rewards for hodling, lots of content and ways for those who want to get involved to become part of the community, on a rewarded basis
            </div>
          </div>
        </div>
        {/* Top Right: LUMI VIP CLUB */}
        <div className="coming-soon-item coming-soon-row">
          <img src={process.env.PUBLIC_URL + '/lumi-vip-club.png'} alt="LUMI VIP CLUB" className="coming-soon-img" />
          <div className="coming-soon-text">
            <div className="coming-soon-item-title" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 700, fontSize: '1.55rem', color: '#fff', textAlign: 'center', width: '100%' }}>LUMI VIP CLUB</div>
            <div className="coming-soon-item-desc" style={{ fontFamily: 'Inter, sans-serif' }}>
              LUMI token holders will get VIP Club Membership and privileged access to many benefits, from airdrops to pre-launch discounts, merch to special events.
            </div>
          </div>
        </div>
        {/* Bottom Left: LUMI'S NFT COLLECTION */}
        <div className="coming-soon-item coming-soon-row">
          <img src={process.env.PUBLIC_URL + '/Lumi-nft-collection.png'} alt="LUMI'S NFT COLLECTION" className="coming-soon-img" />
          <div className="coming-soon-text">
            <div className="coming-soon-item-title" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 700, fontSize: '1.55rem', color: '#fff', textAlign: 'center', width: '100%' }}>LUMI'S NFT COLLECTION</div>
            <div className="coming-soon-item-desc" style={{ fontFamily: 'Inter, sans-serif' }}>
              Yes we love NFT's. Lumi's friends will bring multiple utility, be tradeable, provide identity verification and establish online trust. The first collection will be minted free for LUMI hodlers.
            </div>
          </div>
        </div>
        {/* Bottom Right: REMELIFE */}
        <div className="coming-soon-item coming-soon-row">
          <img src={process.env.PUBLIC_URL + '/remelife-icon.png'} alt="REMELIFE" className="coming-soon-img" />
          <div className="coming-soon-text">
            <div className="coming-soon-item-title" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 700, fontSize: '1.55rem', color: '#fff', textAlign: 'center', width: '100%' }}>REMELIFE</div>
            <div className="coming-soon-item-desc" style={{ fontFamily: 'Inter, sans-serif' }}>
              Sign up <a href="https://remelife.com/join-now/" target="_blank" rel="noopener noreferrer" style={{ color: '#3fdcff', textDecoration: 'underline' }}>here</a>, get your wallet and start collecting REME tokens. Build your community, earn referral REMEs and support those engaged in care by bringing crypto to those that need it most.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="footer-section w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="footer-content">
        {/* Left: Logo, Copyright, Disclaimer */}
        <div className="footer-left">
          <img src={process.env.PUBLIC_URL + '/Lumi-rewards.png'} alt="Lumi Logo" className="footer-logo" />
          <div className="footer-meta">
            <span className="footer-copyright">Copyrights 2024 ReMeLife. All rights reserved</span>
            <span className="footer-disclaimer">
              DISCLAIMER Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
            </span>
          </div>
        </div>
        {/* Right: Resources, Socials, Up Arrow */}
        <div className="footer-right">
          <div className="footer-resources">
            <span className="footer-resources-title">RESOURCES</span>
            <a href="#" style={{ color: '#fff', fontSize: '1rem', textDecoration: 'none' }}>Contact Us</a>
            <a href="https://x.com/mylumi_ai" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1rem', textDecoration: 'none', display: 'block', marginTop: '0.3rem' }}>Twitter</a>
          </div>
          <div className="footer-socials">
            <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 30V10M20 10L10 20M20 10L30 20" stroke="#b16fc9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0 0 8px #b16fc9)" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SolutionsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const handleOpenModal = (imgSrc) => {
    setModalImg(imgSrc);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };
  return (
    <>
      <Navbar />
      <div className="solutions-section bg-[#18153a] min-h-screen text-white py-16 px-4 flex flex-col items-center">
        <h2 className="solutions-main-heading mb-12 text-[#b16fc9] text-center" style={{ fontWeight: 700, fontSize: '2rem' }}>
          Harnessing the value of digital care for those who need it most
        </h2>
        {/* What's Remelife Section */}
        <div className="solutions-feature-row flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16">
          <div className="flex-1 solutions-feature-text">
            <h3 className="solutions-feature-title" style={{ fontFamily: 'Michroma, sans-serif' }}>
              WHAT'S REMELIFE?
            </h3>
            <p className="mb-4">
              ReMeLife is the world's first Care2Earn web3 health and social care platform, that monetises digital care work by rewarding care givers for their daily Care Actions, and that democratises data ownership.
            </p>
            <p className="mb-4">
              ReMeLife is a social impact, decentralised  Member governed community Foundation (DAO), that's being built unfunded; created 'by the people, for the people'.
            </p>
            <p className="mb-4">
              In these difficult and inequitable times, ReMeLife captures the value in digital care and brings it back to its community and to those that need it most.
            </p>
            <a href="https://remelife.com/" className="text-sky-400 hover:underline mt-4 block" target="_blank" rel="noopener noreferrer">Visit ReMeLife</a>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="solutions-feature-label mb-2 text-center" style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em' }}>APP ECOSYSTEM</span>
            <img
              src={process.env.PUBLIC_URL + "/data-images/app-ecosystem-img.png"}
              alt="App Ecosystem"
              className="solutions-feature-img rounded-lg shadow-lg app-ecosystem-img-hover"
              style={{ maxWidth: '100%', width: '420px', background: '#222', cursor: 'pointer' }}
              onClick={() => handleOpenModal(process.env.PUBLIC_URL + "/data-images/app-ecosystem-img.png")}
            />
            <div style={{ color: '#b16fc9', fontWeight: 700, fontSize: '2rem', marginTop: '1.1rem', textAlign: 'center', letterSpacing: '0.01em', fontFamily: 'Michroma, sans-serif' }}>
              Care 2 Earn
            </div>
          </div>
        </div>
        {/* Modal for all images */}
        {modalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={handleCloseModal}>&times;</button>
              <img
                src={modalImg}
                alt="Full View"
                className="modal-img"
              />
            </div>
          </div>
        )}
        {/* Stats Headings */}
        <div className="solutions-stats-row w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mb-8 gap-8 md:gap-0">
          <div className="solutions-stat text-center flex-1">
            <div className="solutions-stat-label">Persons caring for someone</div>
            <div className="solutions-stat-value">62%</div>
          </div>
          <div className="solutions-stat text-center flex-1">
            <div className="solutions-stat-label">Persons over 60 years of age</div>
            <div className="solutions-stat-value">20%</div>
          </div>
          <div className="solutions-stat text-center flex-1">
            <div className="solutions-stat-label">Persons in poverty</div>
            <div className="solutions-stat-value">44%</div>
          </div>
        </div>
        {/* Gradient Boxes */}
        <div className="solutions-boxes-grid w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="solutions-box">
            <div className="solutions-box-title"><span className="solutions-box-sub">CARE2EARN</span></div>
            <div className="solutions-box-desc">
              Using RemindMecare and partner apps, posting in the Forum, sharing news with family and viewing products in ReMe Market, all earn REME reward tokens for your daily care actions.<br /><br />
              Members build up a passive income from daily digital care actions, that's managed in the ReMe Wallet.
            </div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title"><span className="solutions-box-sub">DATA2EARN</span></div>
            <div className="solutions-box-desc">
              Our data is harvested. In return, we're programmed with what to watch, believe and buy.<br /><br />
              ReMeLife captures personal data during, and for use in, the care process. This data can be monetised by the Member, whether for their own benefit or to donate to family, friends or charities.
            </div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title"><span className="solutions-box-sub">REFERRAL PLAN</span></div>
            <div className="solutions-box-desc">
              We all build personal social networks. But most earn little from them, other than social connectivity.<br /><br />
              ReMeLife Community Builder enables you to monetise your personal networks. A three level deep referral system generates passive rewards earned through the network effect and viral growth.
            </div>
          </div>
        </div>
        <div className="solutions-boxes-grid w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="solutions-box">
            <div className="solutions-box-title"><span className="solutions-box-sub">ONLINE RETAIL</span></div>
            <div className="solutions-box-desc">
              Passively earned REMEs and LUMIs are used to redeem discounts available with products purchased in ReMe Market.<br /><br />
              Members can introduce vendors to ReMe Market and earn monthly passive commissions on sales made by the vendor.<br />
              Members can launch their own stores and promote products as influencers.
            </div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title"><span className="solutions-box-sub">TOKENOMICS, DAO DEFI</span></div>
            <div className="solutions-box-desc">
              LUMI and REME are minted in ReMeGrid (built on Convex), via the Foundation (DAO) treasury. Passively earned for Care Actions, they are used either in the <a href="https://remelife.com/rememarket/" target="_blank" rel="noopener noreferrer" style={{ color: '#b16fc9', textDecoration: 'underline' }}>ReMe Market</a> or swapped for fiat or other tokens.<br /><br />
              Members can hodle LUMI and stake to earn high yields in the RAgency DeFi module..
            </div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title"><span className="solutions-box-sub">NFTS & CHARITY</span></div>
            <div className="solutions-box-desc">
              ReMeLife is for everyone. Charities can monetise their communities and gain yields from node management and apps can gain enhanced adoption and retention through usage rewards. Care providers can reward staff.<br /><br />
              Lumi's NFT collection stimulates and rewards creativity within the community and provides a means to promote talent, whether young or old.
            </div>
          </div>
        </div>
        
        
       
        {/* Callout Box */}
        <div className="solutions-callout-box w-full max-w-3xl mx-auto mt-8 mb-8 p-6 rounded-2xl text-white text-center" style={{ background: 'linear-gradient(135deg, #23234a 60%, #5ee7df 120%)', border: '1.5px solid #b16fc9', boxShadow: '0 4px 32px #0006' }}>
          Register as a ReMeLife member <a href="https://remelife.com/join-now/" className="text-sky-200 underline hover:text-sky-400" target="_blank" rel="noopener noreferrer">here</a>, and get your ReMeLife wallet.<br />
          Then collect free REMEs as you build your community, using the ReMeLife Community Builder Referral Program.
        </div>

        
        {/* What's RemindMecare Section */}
        <div className="solutions-feature-row ">
          <div className="flex-1 solutions-feature-text">
            <h3 className="solutions-feature-title" style={{ fontFamily: 'Michroma, sans-serif' }}>
              WHAT'S REMINDMECARE?
            </h3>
            <p className="mb-4">
              At the heart of the ReMeLife ecosystem is the RemindMecare app (aka Reme). Used by those cared for at home and by formal care providers, such as care home, ReMe provides a suite of person-centred care functions that improves care, communication and connectivity.
            </p>
            <a href="https://reme.care/users/login" className="text-sky-400 hover:underline block mb-1" target="_blank" rel="noopener noreferrer">Visit RemindMecare b2c</a>
            <a href="https://remindmecare.com/" className="text-sky-400 hover:underline block" target="_blank" rel="noopener noreferrer">Visit RemindMecare b2b</a>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <video
              className="solutions-phone-video"
              controls
              style={{ width: '350px' }}
            >
              <source src={process.env.PUBLIC_URL + "/data-images/remecare-video.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* AI Section Heading */}
        <h2 className="solutions-main-heading" style={{ fontWeight: 700, fontSize: '2rem' }}>
          Integrating AI for the benefit of the care sector
        </h2>
        {/* AI Implementation Section */}
        <div className="solutions-feature-row ai-implementation-section flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16">
          <div className="flex-1 solutions-feature-text">
            <h3 className="solutions-feature-title" style={{ fontFamily: 'Michroma, sans-serif' }}>
              AI IMPLEMENTATION
            </h3>
            <p className="mb-4">
              ELR® (recent activities, preferences, habits, life story, family, music, images, work history, etc.) is our proprietary data set that captures, collates and deploys personal data captured from digital activities, and that is used to enhance multiple care processes.
            </p>
            <p className="mb-4">
              The AI system (AI4U) that is being layered into ReMeLife and its modules and for which Blui is the user-friendly AI primary agent that guides the user, will use existing AI technologies predominantly based on the LLM agentic models that are best suited to each of the planned and multiple purposes.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              src={process.env.PUBLIC_URL + "/data-images/ai-architecture.png"}
              alt="AI Architecture"
              className="solutions-feature-img app-ecosystem-img-hover"
              style={{ maxWidth: '100%', width: '420px', background: '#222', cursor: 'pointer' }}
              onClick={() => handleOpenModal(process.env.PUBLIC_URL + "/data-images/ai-architecture.png")}
            />
          </div>
        </div>
        {/* AI Enhancements Section */}
        <div className="solutions-feature-row ai-enhancements-section flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16">
          <div className="flex-1 solutions-feature-text">
            <div className="mb-4" style={{ fontWeight: 500 }}>
              The AI enhancements currently being developed are as follows.
            </div>
            <ul className="solutions-list mb-4">
              <li>AI System for ELR® personal health data management</li>
              <li>Activity Creation & Cognitive Stimulation</li>
              <li>ReMeComm Community Engagement</li>
              <li>Personal AI Agents/Virtual Companions (AI4U)</li>
              <li>Automated Reporting</li>
              <li>Enhanced Data Security</li>
              <li>Data Management & Monetisation</li>
            </ul>
            <a href={process.env.PUBLIC_URL + '/AI-Viability-Analysis.pdf'} className="text-sky-400 hover:underline block mb-1" target="_blank" rel="noopener noreferrer">AI Viability Analysis</a>
            <a href={process.env.PUBLIC_URL + '/Lumi-Ai-Report.pdf'} className="text-sky-400 hover:underline block" target="_blank" rel="noopener noreferrer">AI Implementation strategy</a>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              src={process.env.PUBLIC_URL + "/data-images/enhanced-care.png"}
              alt="Enhanced Care"
              className="solutions-feature-img app-ecosystem-img-hover"
              style={{ maxWidth: '100%', width: '420px', background: '#222', cursor: 'pointer' }}
              onClick={() => handleOpenModal(process.env.PUBLIC_URL + "/data-images/enhanced-care.png")}
            />
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

const newsData = [
  {
    id: 'convex-remegrid',
    title: 'Community Update – The Convex ReMeGrid',
    detail: `ReMeLife is excited to announce our integration with Convex, a next-generation blockchain platform. This collaboration marks a significant step forward in our mission to revolutionize the care sector through blockchain technology.`
  },
  {
    id: 'project-update-1',
    title: 'Project Update #1 Community Q&A',
    detail: `Join us for our first community Q&A session where we discuss the latest developments and answer questions from our community members about the ReMeLife ecosystem.`
  },
  {
    id: 'human-error',
    img: 'news-images/human-error.png',
    title: 'ReMeLife joins the Human Error project',
    detail: `We live in historical times, when every detail of our lives is a data point used by AI systems and algorithms to profile us, judge us and make decisions about us. This data that defines us is commercialised in a multiplicity of ways. Health and education practitioners 'track risk factors' or find 'personalized solutions'. Employers, banks and insurers judge clients or potential candidates. Governments, the police and immigration officials use this tech to decide issues about individual lives, from one's right to asylum to one's likelihood to commit a crime.<br/><br/>Courtesy of ReMeLife's focus on such data being used for positive social benefit and on establishing crypto based algorithms that share the value in digital care for the benefit of the community, we've been invited to collaborate in this important project.<br/><br/>More <a href='#'>here</a>.`
  },
  {
    id: 'coin-bureau',
    img: 'news-images/coin-bureau.jpg',
    title: 'ReMeLife  at the Coin Bureau Crypto Conference, London',
    detail: `Although it was their first ever crypto conference, it felt like they'd been doing it for years. An excellent event (<a href='#'>here</a>).<br/><br/>ReMeLife was invited backstage to share in their post event shenanigans. Who says the crypto sector is depressed?<br/><br/>PS. If you don't know Coin Bureau then you don't know crypto. Find them <a href='#'>here</a>.`
  }
];

function NewsCardsSection() {
  return (
    <div className="w-full flex flex-col items-center mt-12 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4">
        {newsData.map((card, idx) => (
          <div key={card.id} className="news-card rounded-xl overflow-hidden flex flex-col" style={{ minHeight: '320px' }}>
            {(card.id === 'convex-remegrid' || card.id === 'project-update-1') ? (
              <img 
                src={`https://img.youtube.com/vi/${card.id === 'convex-remegrid' ? 'O9P1Fr_v4JQ' : 'IB89b-N-TgA'}/hqdefault.jpg`}
                alt={card.title} 
                style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
              />
            ) : (
              <img src={process.env.PUBLIC_URL + '/' + card.img} alt={card.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            )}
            <div className="flex-1 flex flex-col justify-between p-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="text-white font-semibold mb-1" style={{ fontSize: '1.18rem', fontWeight: 600 }}>{card.title}</div>
              <Link to={`/news/${card.id}`} className="text-sky-300 font-semibold text-sm hover:underline mt-auto" style={{ alignSelf: 'flex-start' }}>READ MORE »</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsData.find(n => n.id === id);
  
  if (!news) return <div className="text-white p-8">News not found.</div>;
  
  const getVideoId = (newsId) => {
    switch(newsId) {
      case 'convex-remegrid':
        return 'O9P1Fr_v4JQ';
      case 'project-update-1':
        return 'IB89b-N-TgA';
      default:
        return null;
    }
  };

  const videoId = getVideoId(news.id);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-start" style={{ background: '#120f2c', color: '#fff' }}>
      <Navbar />
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 px-6 py-2 rounded-lg bg-gradient-to-r from-[#00838f] to-[#006064] text-white font-semibold shadow-lg hover:from-[#26c6da] hover:to-[#00838f] hover:text-[#18153a] transition-all duration-200 border-none outline-none self-end"
        >
          Back
        </button>
        {videoId ? (
          <div className="video-container mb-8 w-full" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src={`https://www.youtube.com/embed/${videoId}`}
              title={news.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <img src={process.env.PUBLIC_URL + '/' + news.img} alt={news.title} className="mb-8 rounded-lg shadow-lg mx-auto" style={{ maxWidth: '600px', width: '100%' }} />
        )}
        <h1 style={{ fontFamily: 'Michroma, sans-serif', fontSize: '2.1rem', fontWeight: 600, marginBottom: '2.2rem', color: '#fff' }}>{news.title}</h1>
        <div className="w-full text-lg mb-8" style={{ fontFamily: 'Inter, sans-serif', color: '#fff' }}>
          {news.id === 'coin-bureau' ? (
            <p>{news.detail.replace(/<br\/?><br\/?/g, ' ').replace(/<[^>]+>/g, '')}</p>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: news.detail }} />
          )}
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const partners = [
    'about-page-images/singularities.png',
    'about-page-images/ucl.png',
    'about-page-images/athena.png',
    'about-page-images/antier.png',
    'about-page-images/limechain.png',
    'about-page-images/mongoDB.png',
    'about-page-images/worcester.png',
  ];
  // Show 4 at a time
  const visible = 4;
  const maxIndex = partners.length - visible;
  const handlePrev = () => setCarouselIndex(i => (i - 1 + partners.length) % partners.length);
  const handleNext = () => setCarouselIndex(i => (i + 1) % partners.length);

  // Calculate the actual visible items for seamless looping
  const getVisiblePartners = () => {
    let items = [];
    for (let j = 0; j < visible; j++) {
      items.push(partners[(carouselIndex + j) % partners.length]);
    }
    return items;
  };

  return (
    <>
      <Navbar />
      <div className="about-section min-h-screen flex flex-col items-center justify-start bg-[#18153a] text-white py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Michroma, sans-serif', fontSize: '2.5rem', letterSpacing: '0.04em' }}>THE TEAM & COMMUNITY</h2>
        <div className="max-w-2xl w-full mx-auto flex flex-col items-center">
          <p className="mb-4 text-lg text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            As the founder of ReMeLife, I'm privileged and fortunate to work with a core team of creative long-term diehards, a community of talented individuals that have been focused on bringing Lumi and ReMeLife to its launchpad.
          </p>
          <p className="mb-6 text-lg text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            Working from locations globally, predominantly rewarded in vested tokens, and with a social impact soul, the team and an associated Advisory Board, are committed to complete the build of this self-supporting AI and rewards-based community.<br /><br />
            Unfunded by traditional formal investment and ultimately being DAO managed, Lumi and ReMeLife are being built 'for the people, by the people'. And, after many years, Lumi is now on the launchpad and ReMeLife is close behind".
          </p>
          <img src={process.env.PUBLIC_URL + '/about-page-images/simon-hooper-about-page.jpg'} alt="Simon Hooper About" className="my-8 rounded-lg shadow-lg mx-auto" style={{ maxWidth: '600px', width: '100%' }} />
          <p className="mt-2 text-lg text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            "I conceived ReMeLife as a response to my own family experiences, of my time spent developing apps in the care sector, and of the obvious potential of AI, blockchain and crypto to be able to support the financial needs of those that are simply not benefitting from the fiat value inherent in their own digital daily care. Lumi is the all critical element that is integrating the power of AI into the ecosystem, and that will manage scale and data, and drive consumer engagement through his meme character.
          </p>
          <p className="mt-8 text-lg text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            As a decentralised, tech-based community ecosystem, Lumi assists combat today's unfair harvesting of our daily care actions. As the rich get richer and the rest of us lose our rights and opportunities, Lumi is very much needed, as we enter a new era. We hope you will join us in this mission".
          </p>
          <img src={process.env.PUBLIC_URL + '/about-page-images/pepe-banner.jpg'} alt="Pepe Banner" className="my-10 rounded-lg shadow-lg mx-auto" style={{ maxWidth: '800px', width: '100%' }} />
          <p className="mt-2 text-lg text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            We love design, creativity, social interactivity, and bringing financial opportunity to our community. So naturally, we've been in crypto for years. And of course we <span style={{ fontStyle: 'italic' }}>LOVE</span> memes. That's why Lumi chose us, he says, as his platform to change the world!
          </p>
        </div>

        {/* PARTNERS & ASSOCIATES SECTION */}
        <div className="w-full flex flex-col items-center mt-24">
          <h2 className="text-white text-center mb-6" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '0.04em' }}>PARTNERS & ASSOCIATES</h2>
          <p className="text-lg text-center mb-10 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Over the years of the development of ReMeLife and more recently with Lumi, we have worked with many illustrious partners, advisory board members and consultants. Here's a few of them.
          </p>
          <div className="carousel-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '1200px', minHeight: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4rem' }}>
            <button
              onClick={handlePrev}
              className="carousel-arrow carousel-arrow-left"
              style={{
                position: 'absolute',
                left: '-48px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                fontSize: '2.5rem',
                color: '#fff',
                background: 'rgba(24,21,58,0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px #0006',
                cursor: 'pointer',
                outline: 'none',
                transition: 'background 0.2s, color 0.2s',
              }}
              aria-label="Previous partners"
            >
              &lt;
            </button>
            <div className="carousel-items" style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1.5rem',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '1000px',
              margin: '0 auto',
              minHeight: '110px',
              transition: 'width 0.3s',
            }}>
              {getVisiblePartners().map((img, idx) => (
                <img
                  key={img + idx}
                  src={process.env.PUBLIC_URL + '/' + img}
                  alt={img.replace('.png', '')}
                  style={{ height: '90px', width: 'auto', background: '#fff', borderRadius: '8px', objectFit: 'contain', padding: '8px', boxShadow: '0 2px 12px #0004' }}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="carousel-arrow carousel-arrow-right"
              style={{
                position: 'absolute',
                right: '-48px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                fontSize: '2.5rem',
                color: '#fff',
                background: 'rgba(24,21,58,0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px #0006',
                cursor: 'pointer',
                outline: 'none',
                transition: 'background 0.2s, color 0.2s',
              }}
              aria-label="Next partners"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* NEWS & UPDATES SECTION */}
        <div className="w-full flex flex-col items-center mt-12">
          <h2 className="text-white text-center mb-6" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '0.04em' }}>NEWS & UPDATES</h2>
          <div className="max-w-2xl text-lg text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="mb-4">Lumi, ReMeLife and RemindMecare have been a long time in the making. Here are some highlights  and those we've worked with in previous years.</p>
            <p>We will keep you updated here with our progress and on key industry developments.</p>
          </div>
        </div>
        <NewsCardsSection />
        <div className="w-full flex justify-center mt-8 mb-16">
          <a 
            href="https://remelife.io/news/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sky-400 hover:text-sky-300 text-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            See more news here
          </a>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

function FaqsPage() {
  const faqs = [
    {
      question: "I HAVE NEVER BOUGHT A CRYPTO TOKEN BEFORE. WHY SHOULD I DO SO NOW?",
      answer: `<p>The world is changing and crypto, CBDC's, digital currency, the metaverse, etc., are coming, so you will need to learn the ropes anyway, when it comes to digital wallets, payment transfers, digital money interfaces, etc. So, it makes sense to be ahead of the game.</p><p>And there are opportunities to be had along the way that others are profiting from, not to mention some fun and means to support those social impact projects that you support, which in our case is carers and those being cared for.</p>`
    },
    {
      question: "IS BUYING CRYPTO AND LUMI RISKY?",
      answer: `<p>Yes, absolutely. Just as betting on the horses, or the stock market, carry their own level of risk, so does buying a token, meme or otherwise on an exchange.</p><p>Indeed, meme tokens are highly volatile and should be considered risky, even true utility, actual project based tokens such as $LUMI.</p>`
    },
    {
      question: "DESCRIBE REMELIFE IN ONE PARAGRAPH",
      answer: `<p>We get asked this a lot, for ReMeLife, which is the world's first Web3 healthcare platform, has a lot to offer and can seem complicated at first inspection.</p><p>But just like a car, that has a lot going on under the bonnet, however it's simple on the outside. And when you've learnt to use it, it becomes easy and fun. It's the same with ReMeLife.</p><p>For 65% of the world is caring for someone, and they use apps to support their care needs. But they get no financial benefit from the care work they perform with these apps, from the purchases they make online or from the data they generate daily. By using ReMeLife's apps, Members gain REME tokens for their care actions, for posting in the forum, purchasing products, sharing content with their care circle and for sharing their data.</p><p>ReMeLife is the world's first rewards-based healthcare platform. Simple.</p>`
    },
  ];
  const [openIndex, setOpenIndex] = React.useState(null);
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="faqs-page-bg min-h-screen flex flex-col text-white">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-start py-16 px-4">
        <h2 className="text-white text-center mb-2" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.5rem', letterSpacing: '0.04em' }}>FAQ's</h2>
        <div className="text-center mb-10 text-gray-200" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
          Frequently asked questions. We will add to these as we get asked for answers on new questions.
        </div>
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-transparent border-b border-gray-600">
              <button
                className="w-full text-left flex justify-between items-center py-6 px-4 focus:outline-none"
                style={{ color: '#b16fc9', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'Inter, sans-serif' }}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <span style={{ color: '#ffe44d', fontWeight: 700, fontSize: '1.5rem', marginLeft: '1rem' }}>{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-8 text-white text-left" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.08rem', lineHeight: 1.7 }}>
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

function MerchPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#18153a] text-white py-16 px-4">
      <Navbar />
      <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontSize: '2.5rem', letterSpacing: '0.04em' }}>LUMI MERCH</h2>
      <div className="flex flex-row gap-12 justify-center items-center w-full max-w-4xl">
        <div style={{ width: 220, height: 220, background: '#23234a', borderRadius: '1.5rem', border: '2px solid #b16fc9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b16fc9', fontSize: '1.2rem' }}>Image 1</div>
        <div style={{ width: 220, height: 220, background: '#23234a', borderRadius: '1.5rem', border: '2px solid #b16fc9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b16fc9', fontSize: '1.2rem' }}>Image 2</div>
        <div style={{ width: 220, height: 220, background: '#23234a', borderRadius: '1.5rem', border: '2px solid #b16fc9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b16fc9', fontSize: '1.2rem' }}>Image 3</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <LumiTokenSection />
              <FounderWordsSection />
              <DataSection />
              <PhasesSection />
              <ComingSoonSection />
              <FooterSection />
            </>
          } />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
