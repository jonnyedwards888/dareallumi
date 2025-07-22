import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "./index.css";
import './App.css';
import './LotsGoingOn.css';
import './NavbarMobile.css';
import './DataSection.css';
import './AboutPage.css';

import './Responsive.css';

// Add TeamCardAnimated component at the top level
function TeamCardAnimated({ image, name, title, details }) {
  return (
    <div className="team-card-animated" tabIndex={0}>
      <div className="team-card-image-wrapper" style={{ position: 'relative', width: '100%', height: '260px' }}>
        <img src={image} alt={name} className="team-card-image" />
        <div className="team-card-details">
          {details}
        </div>
      </div>
      <div className="team-card-info">
        <h3 className="team-card-name">{name}</h3>
        <p className="team-card-title">{title}</p>
      </div>
    </div>
  );
}

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navigate = useNavigate();

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

  // Scroll to Data section, navigating home if needed
  const handleDataClick = (e) => {
    e.preventDefault();
    if (isHome) {
      const el = document.getElementById('data-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/', { state: { scrollToData: true } });
    }
  };

  return (
    <div style={{ fontFamily: 'Michroma, sans-serif' }}>
      <div className="hero-topbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" className="hero-button" style={{ display: 'flex', alignItems: 'center' }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src={process.env.PUBLIC_URL + "/THEONE.gif"} alt="LUKI Icon" className="lumi-navbar-icon" style={{ height: '28px', width: 'auto', display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem' }} />
          LUKI
        </Link>
        <div className="hero-nav-right" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link to="/solutions" className="hero-button">Solutions</Link>
          <Link to="#data-section" className="hero-button" onClick={handleDataClick}>Data</Link>
          <Link to="/about" className="hero-button">About</Link>
          <a href="https://x.com/mylumi_ai" className="hero-button" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginLeft: '0.5rem' }}>
            <img
              src={process.env.PUBLIC_URL + "/X-logo-navbar.jpg"}
              alt="X (Twitter)"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                boxShadow: '0 2px 8px #0004',
                border: '2px solid #fff',
                objectFit: 'cover',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s'
              }}
            />
          </a>
          {/* Linktree logo in navbar */}
          <a href="https://linktr.ee/lumiai" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginLeft: '0.5rem' }}>
            <img
              src={process.env.PUBLIC_URL + '/Linktree-logo.png'}
              alt="Linktree"
              style={{ width: 36, height: 36, borderRadius: '50%', boxShadow: '0 2px 8px #0004', border: '2px solid #fff', objectFit: 'cover', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
            />
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
          <h1 className="lumi-heading" style={{ fontFamily: 'Michroma, sans-serif' }}>LUKI</h1>
          <div className="lumi-avatar-wrapper">
            <img
              src={process.env.PUBLIC_URL + "/THEONE.gif"}
              alt="Luki Full Body"
              className="lumi-fullbody-img"
            />
          </div>
          <div className="lumi-hero-buttons">
            <a href="https://remelife.gitbook.io/lumi-and-remelife" className="lumi-hero-btn" target="_blank" rel="noopener noreferrer">Docs</a>
            <button className="lumi-hero-btn" type="button">Buy $LUKI</button>
            <button
              className="lumi-hero-btn"
              type="button"
              onClick={() => window.open('https://healthconnected.agilecrm.com/forms/6144359311015936', '_blank', 'noopener,noreferrer')}
            >
              Register
            </button>
          </div>
          <div className="lumi-subtitle" style={{ fontFamily: 'Michroma, sans-serif', marginTop: '0.5rem' }}>
            The first AI healthcare agent on chain.
          </div>
        </div>
      </div>
    </div>
  );
}

function LumiTokenSection() {
  return (
    <section className="lumi-token-section" style={{ background: '#18153a', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 0 2rem 0' }}>
      <h2 className="lumi-token-heading" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.5rem', color: '#fff', marginBottom: '2.5rem', letterSpacing: '0.01em', textAlign: 'center' }}>What is the $LUKI token?</h2>
      <div className="max-w-3xl w-full px-4" style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ marginBottom: '1.2rem', fontFamily: 'Inter, sans-serif' }}>
          <a href="https://remelife.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <img src={process.env.PUBLIC_URL + '/ReMeLife-top-icon.png'} alt="ReMeLife" style={{ display: 'inline', width: '5.2em', height: 'auto', verticalAlign: 'middle', marginRight: '0.4em', cursor: 'pointer' }} />
          </a>
          <span style={{ fontFamily: 'Inter, sans-serif' }}>
            is a tokenised Care2Earn care platform that rewards its users for their digital daily care and support. Sharing content, monetising personal data, posting in the forum and many other digital care actions, earn redeemable tokens.
          </span>
        </div>
        <div style={{ marginBottom: '1.2rem', fontFamily: 'Inter, sans-serif' }}>
          <a href="https://remindmecare.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <img src={process.env.PUBLIC_URL + '/RemineMecare-icon.png'} alt="RemindMeCare" style={{ display: 'inline', width: '10em', height: 'auto', verticalAlign: 'middle', marginRight: '0.4em', cursor: 'pointer' }} />
          </a>
          <span style={{ fontFamily: 'Inter, sans-serif' }}>
            is the care app at the heart of the ReMeLife ecosystem, enhances person-centred care for those with cognitive difficulties.
          </span>
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <span className="lumi-token-lumiai" style={{ background: 'linear-gradient(90deg, #ff7ee7 0%, #b16fc9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, fontSize: '1.1em', letterSpacing: '0.04em', fontFamily: 'Michroma, sans-serif' }}>LUKI </span>
          <span style={{ fontFamily: 'Inter, sans-serif' }}>
            is an AI avatar that's layered into the ReMeLife's health care ecosystem, that manages apps and data and supports its users. Its utility token engages, rewards and provides governance.
          </span>
        </div>
        <div style={{ marginBottom: '1.2rem', fontFamily: 'Inter, sans-serif' }}>
          Most utility tokens today are b2b Web3 infrastructure projects. ReMeLife is the world's first Web3 care2earn AI powered b2c community ecosystem.
        </div>
        <div style={{ marginBottom: '1.2rem', fontFamily: 'Inter, sans-serif' }}>
          ReMeLife and Lumi enable millions to share in the care potential of AI, the financial value of data and digital care, and the integrity of DAO based tokenomics.
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif' }}>
          Decentralisation is the driver for social change, AI and blockchain are the engines of progress, and tokenization is the fuel that empowers us. Whether 18 or 80, Lumi is here to help.
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

function LumiWordsSection() {
  return (
    <section className="founder-words-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'none', padding: '3.5rem 0 1.5rem 0', maxWidth: '1500px', margin: '0 auto' }}>
      <h2 className="founder-words-heading founder-words-heading-mobile" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.4rem', letterSpacing: '0.04em', marginBottom: '2.2rem', color: '#fff', textShadow: '2px 2px 0 #23234a', textAlign: 'center', width: '100%' }}>A few words from Luki</h2>
      <div className="founder-words-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', gap: '3.5rem', width: '100%' }}>
        <div className="founder-words-left" style={{ flex: '0 0 420px', maxWidth: '420px', minWidth: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
          <div
            className="lumi-yt-embed-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              marginTop: '2rem',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 32px #0008',
              maxWidth: 420,
              margin: '0 auto',
              marginTop: '2rem',
              marginBottom: window.innerWidth <= 700 ? '1.1rem' : 0
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/jt6vmzWGQAY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <div className="founder-words-text founder-words-text-mobile" style={{ flex: '1 1 0', color: '#fff', fontFamily: 'Inter, sans-serif', maxWidth: '800px', minWidth: '260px', fontSize: '1.35rem', lineHeight: 1.5, marginTop: '1.5rem', textAlign: 'left' }}>
          LUKI is an AI utility token with a social impact mission. My main mission is to bring AI into person-centred care, into the ReMeLife ecosystem, and to you and your family. Along the way, we're going to build a decentralised community, have some fun and reclaim the value of our digital care.<br /><br />
          But I'm also 'memeish' cos I've got a lot to say about todays unfair world. So you'll see a lot of me in 2025!
        </div>
      </div>
    </section>
  );
}

function FounderWordsSection() {
  return (
    <section className="founder-words-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'none', padding: '3.5rem 0 1.5rem 0', maxWidth: '1500px', margin: '0 auto' }}>
      <h2 className="founder-words-heading founder-words-heading-mobile" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.4rem', letterSpacing: '0.04em', marginBottom: window.innerWidth <= 700 ? '1.1rem' : '2.2rem', color: '#fff', textShadow: '2px 2px 0 #23234a', textAlign: 'center', width: '100%' }}>A few words from the Founder</h2>
      <div className="founder-words-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', gap: '3.5rem', width: '100%' }}>
        <div className="founder-words-left" style={{ flex: '0 0 420px', maxWidth: '420px', minWidth: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
          <div style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 4px 32px #0008', maxWidth: 420, margin: '0 auto', marginTop: window.innerWidth <= 700 ? 0 : '2rem', marginBottom: window.innerWidth <= 700 ? '1.1rem' : 0, overflow: 'hidden', aspectRatio: '16/9', background: '#000' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xqg-KaGKbo0?si=3-sUG63HaZjaskRF&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ display: 'block', width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <div className="founder-words-text founder-words-text-mobile" style={{ flex: '1 1 0', color: '#fff', fontFamily: 'Inter, sans-serif', maxWidth: '800px', minWidth: '260px', fontSize: '1.35rem', lineHeight: 1.5, marginTop: '1.5rem', textAlign: 'left' }}>
          Do you have a family member with dementia, living alone, with autism or learning difficulties? 62% of the world does, so you probably do. I did. And that's how I came from the music business into the world of care. It's been a long journey, from building my first app 11 years ago, to crypto, memes and to now, the launch of Luki.<br /><br />
          The ReMeLife community platform and apps have launched (in beta) and our blockchain (Convex Lattice) and AI builds are underway. Luki has landed!
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
              onClick={() => window.open(process.env.PUBLIC_URL + '/Luki-Docs/Luki-Viability-Analysis.pdf', '_blank', 'noopener,noreferrer')}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.open(process.env.PUBLIC_URL + '/Luki-Docs/Luki-Viability-Analysis.pdf', '_blank', 'noopener,noreferrer'); }}
              tabIndex={0}
              role="button"
            />
          </div>
        )}
        {/* Center column: links */}
        <div className="data-section-col center" style={isMobile ? { alignItems: 'center', textAlign: 'center', width: '100%' } : {}}>
          <div className="data-section-row"><a href={process.env.PUBLIC_URL + '/Luki-Docs/Luki-Lite-Paper.pdf'} className="data-section-link" target="_blank" rel="noopener noreferrer">Lite Paper</a></div>
          <div className="data-section-row"><a href={process.env.PUBLIC_URL + '/Luki-Docs/Luki-Viability-Analysis.pdf'} className="data-section-link" target="_blank" rel="noopener noreferrer">AI Report</a></div>
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
          <div className="data-section-col right" style={{ width: '100%', alignItems: 'center', marginTop: '0.7rem', gap: '0.7rem', display: 'flex', flexDirection: 'column' }}>
            <div className="data-section-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1rem', width: '90%', paddingLeft: '0.7rem' }}>
              <img src={process.env.PUBLIC_URL + '/remelife-icon.png'} alt="ReMeLife" className="data-section-icon" style={{ width: 38, height: 38, flexShrink: 0 }} />
              <a href="https://remelife.com/" className="data-section-link" target="_blank" rel="noopener noreferrer" style={{ margin: 0, flex: 1, textAlign: 'left', fontSize: '1.1rem' }}>REMELIFE</a>
            </div>
            <div className="data-section-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1rem', width: '90%', paddingLeft: '0.7rem' }}>
              <img src={process.env.PUBLIC_URL + '/remindmecare-icon.png'} alt="RemindMeCare" className="data-section-icon" style={{ width: 38, height: 38, flexShrink: 0 }} />
              <a href="https://remindmecare.com/" className="data-section-link" target="_blank" rel="noopener noreferrer" style={{ margin: 0, flex: 1, textAlign: 'left', fontSize: '1.1rem' }}>REMINDMECARE</a>
            </div>
            <div className="data-section-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1rem', width: '90%', paddingLeft: '0.7rem' }}>
              <img src={process.env.PUBLIC_URL + '/better-google-icon.png'} alt="Google Play" className="data-section-icon" style={{ width: 38, height: 38, flexShrink: 0 }} />
              <a href="https://play.google.com/store/apps/developer?id=ReMeLife" className="data-section-link" target="_blank" rel="noopener noreferrer" style={{ margin: 0, flex: 1, textAlign: 'left', fontSize: '1.1rem' }}>APPS</a>
            </div>
          </div>
        )}
      </div>
      {/* Animated Lumi Spaceship */}
      <div className="lumi-spaceship-fly-wrapper">
        <img src={process.env.PUBLIC_URL + '/Lumi-spaceship.png'} alt="Luki Spaceship" className="lumi-spaceship-fly" />
      </div>
      {/* Tokenomics Section */}
      <div style={{ margin: '3rem auto 2rem auto', maxWidth: 1000, width: '100%' }}>
        <h2 style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 900, fontSize: '2.2rem', color: '#fff', textAlign: 'center', marginBottom: '1.5rem', letterSpacing: '0.04em' }}>Tokenomics</h2>
        <div style={{
          background: 'linear-gradient(135deg, #18153a 80%, #23234a 100%)',
          borderRadius: '24px',
          boxShadow: '0 0 32px 0 #2e2b5f',
          padding: '2.5rem 2rem 2rem 2rem',
          color: '#fff',
          border: '1.5px solid #b16fc9',
          margin: '0 auto',
        }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', marginBottom: '1.2rem' }}>
            <b>Total Supply:</b> 1,000,000,000 $LUKI<br />
            <b>Dev Wallet:</b> 10% (5% locked & 5% for marketing, developer costs)
          </div>
          <div className="responsive-table" style={{ width: '100%', overflowX: 'auto' }}>
            <table style={{ minWidth: '540px', width: '100%', borderCollapse: 'collapse', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', marginBottom: '0.7rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #b16fc9' }}>
                <th style={{ padding: '0.5rem', fontWeight: 700, textAlign: 'left' }}>Status</th>
                <th style={{ padding: '0.5rem', fontWeight: 700, textAlign: 'left' }}>Wallet %</th>
                <th style={{ padding: '0.5rem', fontWeight: 700, textAlign: 'left' }}>Unlock</th>
                <th style={{ padding: '0.5rem', fontWeight: 700, textAlign: 'left' }}>Explanation</th>
              </tr>
            </thead>
            {window.innerWidth <= 700 && (
              <tbody>
                <tr>
                  <td colSpan="4">
                    <div style={{ borderBottom: '2px solid #b16fc9', width: '100%', margin: '0.1rem 0 0.5rem 0' }} />
                  </td>
                </tr>
              </tbody>
            )}
            <tbody>
              <tr style={{ borderBottom: '1px solid #b16fc9' }}>
                <td style={{ padding: '0.5rem' }}>Unlocked</td>
                <td style={{ padding: '0.5rem' }}>5%</td>
                <td style={{ padding: '0.5rem' }}>Immediately</td>
                <td style={{ padding: '0.5rem' }}>Marketing and developer costs</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #b16fc9' }}>
                <td style={{ padding: '0.5rem' }}>Unlocked</td>
                <td style={{ padding: '0.5rem' }}>2%</td>
                <td style={{ padding: '0.5rem' }}>Locked for 1 week</td>
                <td style={{ padding: '0.5rem' }}>Exchange listings and marketing</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem' }}>Locked</td>
                <td style={{ padding: '0.5rem' }}>3%</td>
                <td style={{ padding: '0.5rem' }}>Linearly unlocked over 6 months</td>
                <td style={{ padding: '0.5rem' }}>Project costs, development and DAO treasury</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
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
          <img src={process.env.PUBLIC_URL + '/Lumi-rewards.png'} alt="LUKI REWARDS" className="coming-soon-img" />
          <div className="coming-soon-text">
            <div className="coming-soon-item-title" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 700, fontSize: '1.55rem', color: '#fff', textAlign: 'center', width: '100%' }}>LUKI REWARDS</div>
            <div className="coming-soon-item-desc" style={{ fontFamily: 'Inter, sans-serif' }}>
              We'll be launching meme games, rewards for hodling, lots of content and ways for those who want to get involved to become part of the community, on a rewarded basis
            </div>
          </div>
        </div>
        {/* Top Right: LUMI VIP CLUB */}
        <div className="coming-soon-item coming-soon-row">
          <img src={process.env.PUBLIC_URL + '/lumi-vip-club.png'} alt="LUKI VIP CLUB" className="coming-soon-img" />
          <div className="coming-soon-text">
            <div className="coming-soon-item-title" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 700, fontSize: '1.55rem', color: '#fff', textAlign: 'center', width: '100%' }}>LUKI VIP CLUB</div>
            <div className="coming-soon-item-desc" style={{ fontFamily: 'Inter, sans-serif' }}>
              LUKI token holders will get VIP Club Membership and privileged access to many benefits, from airdrops to pre-launch discounts, merch to special events.
            </div>
          </div>
        </div>
        {/* Bottom Left: LUMI'S NFT COLLECTION */}
        <div className="coming-soon-item coming-soon-row">
          <img src={process.env.PUBLIC_URL + '/Lumi-nft-collection.png'} alt="LUKI'S NFT COLLECTION" className="coming-soon-img" />
          <div className="coming-soon-text">
            <div className="coming-soon-item-title" style={{ fontFamily: 'Michroma, sans-serif', fontWeight: 700, fontSize: '1.55rem', color: '#fff', textAlign: 'center', width: '100%' }}>LUKI'S NFT COLLECTION</div>
            <div className="coming-soon-item-desc" style={{ fontFamily: 'Inter, sans-serif' }}>
              Yes we love NFT's. Luki's friends will bring multiple utility, be tradeable, provide identity verification and establish online trust. The first collection will be minted free for LUKI hodlers.
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
            <span style={{ color: '#fff', fontSize: '1rem', display: 'block', marginBottom: '0.3rem' }}>
              Contact <a href="mailto:simon@remelife.com?subject=Hi%20Lumi%2C%20can%20you%20help%20me%3F" style={{ color: '#b16fc9', textDecoration: 'underline' }}>simon@remelife.com</a>
            </span>
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
        {/* Wallet section above removed, next section is What's Remelife */}
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
              Passively earned REMEs and LUKIs are used to redeem discounts available with products purchased in ReMe Market.<br /><br />
              Members can introduce vendors to ReMe Market and earn monthly passive commissions on sales made by the vendor.<br />
              Members can launch their own stores and promote products as influencers.
            </div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title"><span className="solutions-box-sub">TOKENOMICS, DAO DEFI</span></div>
            <div className="solutions-box-desc">
              LUKI and REME are minted in ReMeGrid (built on Convex), via the Foundation (DAO) treasury. Passively earned for Care Actions, they are used either in the <a href="https://remelife.com/rememarket/" target="_blank" rel="noopener noreferrer" style={{ color: '#b16fc9', textDecoration: 'underline' }}>ReMe Market</a> or swapped for fiat or other tokens.<br /><br />
              Members can hodle LUKI and stake to earn high yields in the RAgency DeFi module..
            </div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title"><span className="solutions-box-sub">NFTS & CHARITY</span></div>
            <div className="solutions-box-desc">
              ReMeLife is for everyone. Charities can monetise their communities and gain yields from node management and apps can gain enhanced adoption and retention through usage rewards. Care providers can reward staff.<br /><br />
              Luki's NFT collection stimulates and rewards creativity within the community and provides a means to promote talent, whether young or old.
            </div>
          </div>
        </div>
        
        
       
        {/* Callout Box */}
        <div className="solutions-callout-box w-full max-w-3xl mx-auto mt-8 mb-8 p-6 rounded-2xl text-white text-center" style={{ background: 'linear-gradient(135deg, #23234a 60%, #5ee7df 120%)', border: '1.5px solid #b16fc9', boxShadow: '0 4px 32px #0006' }}>
          Register as a ReMeLife member <a href="https://remelife.com/join-now/" className="text-sky-200 underline hover:text-sky-400" target="_blank" rel="noopener noreferrer">here</a>, and get your ReMeLife wallet.<br />
          Then collect free REMEs as you build your community, using the ReMeLife Community Builder Referral Program.
        </div>

       

        
        {/* What's RemindMecare Section */}
        <div className={`solutions-feature-row ${window.innerWidth <= 700 ? 'remindmecare-mobile' : ''}`} style={{ marginTop: '3rem', marginBottom: '3.5rem' }}> 
          <div className="flex-1 solutions-feature-text" style={window.innerWidth <= 700 ? { marginTop: '1.5rem' } : {}}>
            <h3 className="solutions-feature-title" style={{ fontFamily: 'Michroma, sans-serif', marginBottom: window.innerWidth <= 700 ? '1rem' : undefined }}>
              WHAT'S REMINDMECARE?
            </h3>
            <div style={window.innerWidth <= 700 ? { margin: '0 auto', maxWidth: '95vw', textAlign: 'center', fontSize: '1.08rem', lineHeight: 1.5, marginBottom: '0.7rem' } : {}}>
              At the heart of the ReMeLife ecosystem is the RemindMecare app (aka Reme).<br />
              Used by those cared for at home and by formal care providers, such as care home, ReMe provides a suite of person-centred care functions that improves care, communication and connectivity.
            </div>
            <div style={window.innerWidth <= 700 ? { margin: '0.3rem auto 0 auto', textAlign: 'center' } : {}}>
              <a href="https://reme.care/users/login" className="text-sky-400 hover:underline block mb-1" target="_blank" rel="noopener noreferrer">Visit RemindMecare b2c</a>
              <a href="https://remindmecare.com/" className="text-sky-400 hover:underline block" target="_blank" rel="noopener noreferrer">Visit RemindMecare b2b</a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <video
              className="solutions-phone-video"
              controls
              style={{ width: '350px', borderRadius: '1.2rem', boxShadow: '0 4px 32px #0008', background: '#222' }}
              poster={process.env.PUBLIC_URL + "/What's-Remindmecare-Thumbnail.png"}
            >
              <source src={process.env.PUBLIC_URL + "/data-images/remecare-video.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

         
      
        {/* Convex Info Section */}
        <div className="solutions-feature-row flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16 mt-8" style={window.innerWidth <= 700 ? { alignItems: 'center', marginBottom: 0 } : { alignItems: 'center', marginBottom: '3.5rem' }}>
          <div className="flex-1 flex flex-col items-center justify-center" style={{ minWidth: 180, maxWidth: 320 }}>
            <img
              src={process.env.PUBLIC_URL + '/Convex-Solutions-Logo.png'}
              alt="Convex Solutions Logo"
              style={{ width: '100%', maxWidth: 220, borderRadius: '1.2rem', background: '#23234a', boxShadow: '0 4px 32px #0008', marginBottom: '1.2rem' }}
            />
          </div>
          <div className="flex-1 solutions-feature-text">
            <h3 className="solutions-feature-title" style={{ fontFamily: 'Michroma, sans-serif', textTransform: 'uppercase', marginBottom: window.innerWidth <= 700 ? '1rem' : undefined }}>
              WHAT'S THE REMEGRID?
            </h3>
            <div style={window.innerWidth <= 700 ? { margin: '0 auto', maxWidth: '95vw', textAlign: 'center', lineHeight: 1.5, marginBottom: '0.7rem', fontFamily: 'Inter, sans-serif', fontWeight: 400 } : { fontFamily: 'Inter, sans-serif', fontWeight: 400, margin: '0 auto', maxWidth: '95vw', textAlign: 'left', lineHeight: 1.5, marginBottom: '0.7rem' }}>
              Convex's lattice technology is a next-generation infrastructure that enables data and transactions to be shared securely and instantly across a decentralized network. Unlike traditional blockchains, it updates in real time without delays or conflicts, making it ideal for fast, scalable systems.<br /><br />
              For platforms like ReMeLife and Luki-AI, which reward users for engaging in health and social care, Convex ensures all activity, rewards, and personal data are securely recorded and instantly updated. It supports smooth collaboration between individuals, caregivers, and services. And, with 1 million+TPS it will enable POS payment transactions that are as fast as credit cards. Ideal for ReMeLife.<br /><br />
              Convex delivers the speed, trust, and transparency needed to scale to manage all elements of the ReMeLife ecosystem, from care to DeFI and the DAO.
            </div>
          </div>
        </div>

          {/* Reme Wallet Section */}
          <div className={`solutions-feature-row reme-wallet-row flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16`} style={{ marginTop: '4rem', marginBottom: '3.5rem' }}>
            <div className="flex-1 solutions-feature-text" style={window.innerWidth <= 700 ? { marginTop: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' } : { marginTop: '2.5rem' }}>
              <h3
                className="solutions-feature-title"
                style={window.innerWidth <= 700
                  ? {
                      fontFamily: 'Michroma, sans-serif',
                      marginBottom: '1.1rem',
                      marginTop: '0.2rem',
                      fontSize: '1.18rem',
                      letterSpacing: '0.01em',
                      textAlign: 'center',
                    }
                  : undefined}
              >
                THE REME WALLET
              </h3>
              <div style={window.innerWidth <= 700 ? { maxWidth: '95vw', textAlign: 'center', fontSize: '1.13rem', lineHeight: 1.7, marginBottom: 0, color: '#e0e0e0', padding: '0 0.2rem', marginTop: '0.2rem', fontWeight: 400 } : { margin: '0 auto', maxWidth: '95vw', textAlign: 'left', fontSize: '1.08rem', lineHeight: 1.5, marginBottom: '0.7rem' }}>
                An easy-to-use Member interface for managing Care2Earn rewards, building a community of value and accessing ReMeLife's CareFi services, including purchasing and swapping tokens.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <video
                className="solutions-phone-video"
                controls
                style={{ width: '350px', borderRadius: '1.2rem', boxShadow: '0 4px 32px #0008', background: '#222' }}
              >
                <source src={process.env.PUBLIC_URL + "/Wallet-Video.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        {/* AI Section Heading */}
        <h2 className={`solutions-main-heading ${window.innerWidth <= 700 ? 'remindmecare-mobile' : ''}`} style={{ fontWeight: 700, fontSize: '2rem' }}>
          Integrating AI for the benefit of the care sector
        </h2>
        {/* AI Implementation Section */}
        <div className={`solutions-feature-row ai-implementation-section ${window.innerWidth <= 700 ? 'remindmecare-mobile' : ''} flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16`}>
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
        <div className={`solutions-feature-row ai-enhancements-section flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16`} style={{ margin: '0 auto', marginTop: '2.5rem', marginBottom: '2.5rem' }}>
          <div className="flex-1" style={{ minWidth: 220 }}>
            <div style={{ textAlign: 'center', fontWeight: 500, marginBottom: '1.2rem', fontSize: '1.35rem' }}>
              The AI enhancements currently being developed are as follows:
            </div>
            <ul style={window.innerWidth <= 700 ? { textAlign: 'center', marginBottom: 0, listStyleType: 'none', paddingLeft: 0 } : { textAlign: 'left', marginBottom: 0, listStyleType: 'disc', paddingLeft: '2rem' }}>
              <li style={window.innerWidth > 700 ? { marginBottom: '0.7rem' } : { textAlign: 'center' }}>AI System for ELR® personal health data management</li>
              <li style={window.innerWidth > 700 ? { marginBottom: '0.7rem' } : { textAlign: 'center' }}>Activity Creation & Cognitive Stimulation</li>
              <li style={window.innerWidth > 700 ? { marginBottom: '0.7rem' } : { textAlign: 'center' }}>ReMeComm Community Engagement</li>
              <li style={window.innerWidth > 700 ? { marginBottom: '0.7rem' } : { textAlign: 'center' }}>Personal AI Agents/Virtual Companions (AI4U)</li>
              <li style={window.innerWidth > 700 ? { marginBottom: '0.7rem' } : { textAlign: 'center' }}>Automated Reporting</li>
              <li style={window.innerWidth > 700 ? { marginBottom: '0.7rem' } : { textAlign: 'center' }}>Enhanced Data Security</li>
              <li style={window.innerWidth > 700 ? {} : { textAlign: 'center' }}>Data Management & Monetisation</li>
            </ul>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.7rem' }}>
              <a href="/Luki-Docs/Luki-Viability-Analysis.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#4ec3fa', textDecoration: 'underline' }}>
                AI Viability Analysis
              </a>
              <a href="/AI-Implementation-Strategy.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#4ec3fa', textDecoration: 'underline' }}>
                AI Implementation strategy
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center" style={window.innerWidth <= 700 ? { marginTop: '0.8rem' } : {}}>
            <img
              src={process.env.PUBLIC_URL + "/data-images/enhanced-care.png"}
              alt="Enhanced Care"
              style={{ width: '100%', maxWidth: 400, borderRadius: 24, boxShadow: '0 4px 32px 0 #0002', cursor: 'pointer' }}
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
            {card.id === 'convex-remegrid' || card.id === 'project-update-1' ? (
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
              src={`https://www.youtube.com/embed/${videoId}?start=${news.id === 'simon-hooper-convex' ? '1047' : ''}`}
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
  const navigate = useNavigate();

  // Partner carousel logic
  const partnerImages = [
    'ucl.png',
    'antier.png',
    'limechain.png',
    'mongoDB.png',
    'Tesseract-Logo.png',
    'Convex-Logo-Better.svg',
  ];
  const visibleCount = 4;
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Team carousel logic
  const teamCards = [
    <TeamCardAnimated
      key="simon"
      image={process.env.PUBLIC_URL + '/team-images/Simon-Hooper.JPG'}
      name="Simon Hooper"
      title="FOUNDER AND CEO"
      details={
        <>
          Simon is a petroleum geologist turned care-tech entrepreneur, leading ReMeLife with years of experience in sales, marketing, and digital transformation for care facilities.<br />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <a href="https://www.linkedin.com/in/simonghooper/" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/linkedin.png'} alt="LinkedIn" style={{ width: '36px', height: '36px' }} />
            </a>
          </div>
        </>
      }
    />,
    <TeamCardAnimated
      key="asif"
      image={process.env.PUBLIC_URL + '/team-images/Asif-Team.jpg'}
      name="Asif"
      title="BACKEND ENGINEER"
      details={
        <>
          Asif is a full-stack developer passionate about building secure, high-performance web applications and long-term client partnerships.<br />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <a href="https://www.linkedin.com/in/raoasifraza/" target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + '/linkedin.png'} alt="LinkedIn" style={{ width: '36px', height: '36px' }} />
            </a>
          </div>
        </>
      }
    />,
    <TeamCardAnimated
      key="orbit"
      image={process.env.PUBLIC_URL + '/team-images/L-Team-Icon.jpg'}
      name="Orbit"
      title="SOFTWARE ENGINEER"
      details={
        <>
          A dedicated software engineer, Orbit has been instrumental in building the core infrastructure of Remindmecare, Luki, and Remelife for over two years, turning complex concepts into functional reality.
        </>
      }
    />,
    <TeamCardAnimated
      key="oliver"
      image={process.env.PUBLIC_URL + '/team-images/Orbit.jpg'}
      name="Oliver"
      title="SEO & COMMUNITY LEAD"
      details={
        <>
          Oliver is an expert in SEO and community growth, elevating Luki and Remindmecare's digital presence and discoverability.<br />
        </>
      }
    />,
    <TeamCardAnimated
      key="johnny"
      image={process.env.PUBLIC_URL + '/team-images/Johnny-PFP.png'}
      name="Johnny"
      title="MARKETING & CONTENT"
      details={
        <>
          Johnny leads our content strategy and marketing initiatives, shaping the Luki narrative with his expertise in digital media. He is dedicated to communicating our vision and growing our community through creative and engaging campaigns.
        </>
      }
    />,
  ];

  // --- REACTIVE isMobile STATE ---
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // --- END REACTIVE isMobile STATE ---

  const cardsPerPage = isMobile ? 1 : 3;
  const [teamPage, setTeamPage] = useState(0);
  const numPages = Math.ceil(teamCards.length / cardsPerPage);
  const teamScrollRef = React.useRef(null);
  const manualScrollRef = React.useRef(false);

  // Scroll to page when arrow or dot is clicked
  const scrollToPage = (page) => {
    const el = teamScrollRef.current;
    let clampedPage = Math.max(0, Math.min(isMobile ? teamCards.length - 1 : numPages - 1, page));
    if (el) {
      const cardWidth = isMobile ? el.offsetWidth : 320 + 40;
      el.scrollTo({ left: clampedPage * cardWidth * cardsPerPage, behavior: 'smooth' });
    }
    manualScrollRef.current = true;
    setTeamPage(clampedPage);
  };

  // Programmatically scroll to the correct position on desktop when teamPage changes
  React.useEffect(() => {
    if (!isMobile && teamScrollRef.current) {
      const el = teamScrollRef.current;
      const cardWidth = 320 + 40;
      el.scrollTo({ left: teamPage * cardWidth * cardsPerPage, behavior: 'smooth' });
    }
  }, [teamPage, isMobile, cardsPerPage]);

  // Update dot when user scrolls manually (only for mobile)
  React.useEffect(() => {
    const el = teamScrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      if (!isMobile) return; // Only allow scroll sync on mobile
      if (manualScrollRef.current) {
        manualScrollRef.current = false;
        return;
      }
      const cardWidth = el.offsetWidth;
      let page = Math.round(el.scrollLeft / cardWidth);
      page = Math.max(0, Math.min(teamCards.length - 1, page));
      setTeamPage(page);
    };
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isMobile, cardsPerPage, numPages, teamCards.length]);

  // Ensure scrollToPage(0) is called on mount and when isMobile changes
  React.useEffect(() => {
    if (teamScrollRef.current) {
      scrollToPage(0);
    }
    // eslint-disable-next-line
  }, [isMobile]);

  const getVisiblePartners = () => {
    let items = [];
    for (let j = 0; j < visibleCount; j++) {
      items.push(partnerImages[(carouselIndex + j) % partnerImages.length]);
    }
    return items;
  };

  return (
    <>
      <Navbar />
      <div className="about-section">
        <h2 className="about-header">THE TEAM & COMMUNITY</h2>
        <div className="about-intro">
          As the founder of ReMeLife, I'm privileged and fortunate to work with a core team of creative long-term diehards, a community of talented individuals that have been focused on bringing Luki and ReMeLife to its launchpad.<br /><br />
          Working from locations globally, predominantly rewarded in vested tokens, and with a social impact soul, the team and an associated Advisory Board, are committed to complete the build of this self-supporting AI and rewards-based community.<br /><br />
          Unfunded by traditional formal investment and ultimately being DAO managed, Luki and ReMeLife are being built 'for the people, by the people'. And, after many years, Luki is now on the launchpad and ReMeLife is close behind".
        </div>
        <img src={process.env.PUBLIC_URL + '/about-page-images/simon-hooper-about-page.jpg'} alt="Simon Hooper About" className="about-img" />
        <div className="about-intro">
          I conceived ReMeLife as a response to my own family experiences, of my time spent developing apps in the care sector, and of the obvious potential of AI, blockchain and crypto to be able to support the financial needs of those that are simply not benefitting from the fiat value inherent in their own digital daily care. Luki is the all critical element that is integrating the power of AI into the ecosystem, and that will manage scale and data, and drive consumer engagement through his meme character.<br /><br />
          As a decentralised, tech-based community ecosystem, Luki assists combat today's unfair harvesting of our daily care actions. As the rich get richer and the rest of us lose our rights and opportunities, Luki is very much needed, as we enter a new era. We hope you will join us in this mission".
        </div>
        <img src={process.env.PUBLIC_URL + '/about-page-images/pepe-banner.jpg'} alt="Pepe Banner" className="about-img" />
        <div className="about-intro">
          We love design, creativity, social interactivity, and bringing financial opportunity to our community. So naturally, we've been in crypto for years. And of course we <span style={{ fontStyle: 'italic' }}>LOVE</span> memes. That's why Luki chose us, he says, as his platform to change the world!
        </div>
        {/* MEET THE TEAM SECTION */}
        <h2 className="about-header" style={{ marginTop: '3rem' }}>Meet the Team</h2>
        <div style={{ position: 'relative', width: '100%' }}>
          <button
            className="team-scroll-arrow left"
            onClick={() => scrollToPage(Math.max(0, teamPage - 1))}
            aria-label="Scroll left"
            disabled={teamPage === 0}
            style={{ opacity: teamPage === 0 ? 0.4 : 1, pointerEvents: teamPage === 0 ? 'none' : 'auto', border: 'none', background: 'none' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.18" />
              <path d="M14.5 17L10 12.5L14.5 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div id="team-scroll" className="team-scroll-container" ref={teamScrollRef}>
            {teamCards}
          </div>
          <button
            className="team-scroll-arrow right"
            onClick={() => scrollToPage(Math.min(isMobile ? teamCards.length - 1 : numPages - 1, teamPage + 1))}
            aria-label="Scroll right"
            disabled={isMobile ? teamPage === teamCards.length - 1 : teamPage === numPages - 1}
            style={{ opacity: (isMobile ? teamPage === teamCards.length - 1 : teamPage === numPages - 1) ? 0.4 : 1, pointerEvents: (isMobile ? teamPage === teamCards.length - 1 : teamPage === numPages - 1) ? 'none' : 'auto', border: 'none', background: 'none' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.18" />
              <path d="M10 17L14.5 12.5L10 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="team-scroll-dots">
            {(isMobile
              ? Array.from({ length: teamCards.length })
              : Array.from({ length: numPages })
            ).map((_, idx) => (
              <span
                key={idx}
                className={`team-scroll-dot${teamPage === idx ? ' active' : ''}`}
                onClick={() => scrollToPage(idx)}
                aria-label={`Go to team page ${idx + 1}`}
                tabIndex={0}
                role="button"
                style={{ outline: 'none' }}
              />
            ))}
          </div>
        </div>
        {/* Link below removed */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem', marginBottom: '3.5rem' }}>
          <a
            href="https://remelife.io/about-us/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'Inter, sans-serif', color: '#b16fc9', fontSize: '1.18rem', textDecoration: 'underline', letterSpacing: '0.01em', display: 'inline-block' }}
          >
            See all the people working on Remindmecare and Remelife
          </a>
        </div>
        {/* PARTNERS & ASSOCIATES SECTION */}
        <h2 className="about-header" style={{ marginTop: '3rem' }}>PARTNERS & ASSOCIATES</h2>
        <div className="about-intro" style={{ marginBottom: '2.5rem' }}>
          Over the years of the development of ReMeLife and more recently with Luki, we have worked with many illustrious partners, advisory board members and consultants. Here's a few of them.
        </div>
        <div className="partners-carousel" style={{ overflow: 'hidden', position: 'relative', maxWidth: '1100px', margin: '0 auto' }}>
          <div
            className="partners-carousel-inner"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2rem',
              transition: 'transform 0.7s cubic-bezier(0.4,0.2,0.2,1)',
              transform: `translateX(0)`
            }}
          >
            {getVisiblePartners().map((img, idx) => (
              <div className="partner-logo-box" key={img + idx}>
                <img
                  src={process.env.PUBLIC_URL + '/about-page-images/' + img}
                  alt={img.replace('.png', '')}
                  className="partner-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
        <h2 className="about-header" style={{ marginTop: '8rem' }}>NEWS & UPDATES</h2>
        <div className="about-intro" style={{ marginBottom: '2.5rem' }}>
          Luki, ReMeLife and RemindMecare have been a long time in the making. Here are some highlights and those we've worked with in previous years.<br /><br />
          We will keep you updated here with our progress and on key industry developments.
        </div>
        <div className="news-cards-row">
          {/* Card 1 */}
          <div className="news-card" onClick={() => navigate('/news/community-update')} style={{ cursor: 'pointer' }}>
            <img src={`https://img.youtube.com/vi/O9P1Fr_v4JQ/maxresdefault.jpg`} alt="Community Update" className="news-card-img" />
            <div className="news-card-content">
              <div className="news-card-title">Community Update – The Convex ReMeGrid</div>
              <span className="news-card-link">READ MORE &raquo;</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="news-card" onClick={() => navigate('/news/project-update')} style={{ cursor: 'pointer' }}>
            <img src={`https://img.youtube.com/vi/IB89b-N-TgA/maxresdefault.jpg`} alt="Project Update" className="news-card-img" />
            <div className="news-card-content">
              <div className="news-card-title">Project Update #1 Community Q&amp;A</div>
              <span className="news-card-link">READ MORE &raquo;</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="news-card" onClick={() => navigate('/news/human-error')} style={{ cursor: 'pointer' }}>
            <img src={process.env.PUBLIC_URL + '/news-images/human-error.png'} alt="Human Error" className="news-card-img" />
            <div className="news-card-content">
              <div className="news-card-title">ReMeLife joins the Human Error project</div>
              <span className="news-card-link">READ MORE &raquo;</span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="news-card" onClick={() => navigate('/news/coin-bureau')} style={{ cursor: 'pointer' }}>
            <img src={process.env.PUBLIC_URL + '/news-images/coin-bureau.jpg'} alt="Coin Bureau" className="news-card-img" />
            <div className="news-card-content">
              <div className="news-card-title">ReMeLife at the Coin Bureau Crypto Conference, London</div>
              <a href="#" className="news-card-link" onClick={e => e.preventDefault()}>READ MORE &raquo;</a>
            </div>
          </div>
        </div>
        {/* See more news link and extra margin */}
        <div style={{ marginTop: '2.5rem', marginBottom: '3.5rem', textAlign: 'center' }}>
          <a
            href="https://remelife.io/news/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#b16fc9',
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.18rem',
              textDecoration: 'underline',
              letterSpacing: '0.01em',
              display: 'inline-block',
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            }}
          >
            See more news here
          </a>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

function CoinBureauNewsPage() {
  return (
    <>
      <Navbar />
      <div className="about-section" style={{ paddingTop: '2rem' }}>
        <img
          src={process.env.PUBLIC_URL + '/news-images/coin-bureau.jpg'}
          alt="Coin Bureau Conference"
          style={{ display: 'block', margin: '0 auto 2.5rem auto', maxWidth: '700px', width: '100%', borderRadius: '1rem' }}
        />
        <h1 style={{ fontFamily: 'Michroma, sans-serif', fontSize: '2.7rem', color: '#fff', textAlign: 'left', maxWidth: '900px', margin: '0 auto 2rem auto' }}>
          ReMeLife at the Coin Bureau Crypto Conference, London
        </h1>
        <div style={{ fontFamily: 'Inter, sans-serif', color: '#fff', fontSize: '1.15rem', maxWidth: '900px', margin: '0 auto', textAlign: 'left', lineHeight: 1.7 }}>
          Although it was their first ever crypto conference, it felt like they'd been doing it for years. An excellent event (here). &gt;ReMeLife was invited backstage to share in their post event shenanigans. Who says the crypto sector is depressed? &gt;PS. If you don't know Coin Bureau then you don't know crypto. Find them here.
        </div>
      </div>
    </>
  );
}

function HumanErrorNewsPage() {
  return (
    <>
      <Navbar />
      <div className="about-section" style={{ paddingTop: '2rem' }}>
        <img
          src={process.env.PUBLIC_URL + '/news-images/human-error.png'}
          alt="Human Error Project"
          style={{ display: 'block', margin: '0 auto 2.5rem auto', maxWidth: '700px', width: '100%', borderRadius: '1rem' }}
        />
        <h1 style={{ fontFamily: 'Michroma, sans-serif', fontSize: '2.7rem', color: '#fff', textAlign: 'center', maxWidth: '900px', margin: '0 auto 2rem auto' }}>
          ReMeLife joins the Human Error project
        </h1>
        <div style={{ fontFamily: 'Inter, sans-serif', color: '#fff', fontSize: '1.15rem', maxWidth: '900px', margin: '0 auto', textAlign: 'left', lineHeight: 1.7 }}>
          We live in historical times, when every detail of our lives is a data point used by AI systems and algorithms to profile us, judge us and make decisions about us. This data that defines us is commercialised in a multiplicity of ways. Health and education practitioners 'track risk factors' or find 'personalized solutions'. Employers, banks and insurers judge clients or potential candidates. Governments, the police and immigration officials use this tech to decide issues about individual lives, from one's right to asylum to one's likelihood to commit a crime.<br /><br />
          Courtesy of ReMeLife's focus on such data being used for positive social benefit and on establishing crypto based algorithms that share the value in digital care for the benefit of the community, we've been invited to collaborate in this important project.<br /><br />
          More here.
        </div>
      </div>
    </>
  );
}

function CommunityUpdateNewsPage() {
  return (
    <>
      <Navbar />
      <div className="about-section" style={{ paddingTop: '2rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2.5rem 0' }}>
          <iframe
            width="900"
            height="400"
            src="https://www.youtube.com/embed/O9P1Fr_v4JQ"
            title="Community Update – The Convex ReMeGrid"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '1rem', maxWidth: '100%', margin: '0 auto' }}
          />
        </div>
        <h1 style={{ fontFamily: 'Michroma, sans-serif', fontSize: '2.7rem', color: '#fff', textAlign: 'left', maxWidth: '900px', margin: '0 auto 2rem auto' }}>
          Community Update - The Convex ReMeGrid
        </h1>
        <div style={{ fontFamily: 'Inter, sans-serif', color: '#fff', fontSize: '1.15rem', maxWidth: '900px', margin: '0 auto', textAlign: 'left', lineHeight: 1.7 }}>
          ReMeLife is excited to announce our integration with Convex, a next-generation blockchain platform. This collaboration marks a significant step forward in our mission to revolutionize the care sector through blockchain technology.
        </div>
      </div>
    </>
  );
}

function ProjectUpdateNewsPage() {
  return (
    <>
      <Navbar />
      <div className="about-section" style={{ paddingTop: '2rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2.5rem 0' }}>
          <iframe
            width="900"
            height="400"
            src="https://www.youtube.com/embed/IB89b-N-TgA"
            title="Project Update #1 Community Q&A"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '1rem', maxWidth: '100%', margin: '0 auto' }}
          />
        </div>
        <h1 style={{ fontFamily: 'Michroma, sans-serif', fontSize: '2.7rem', color: '#fff', textAlign: 'left', maxWidth: '900px', margin: '0 auto 2rem auto' }}>
          Project Update #1 Community Q&amp;A
        </h1>
        <div style={{ fontFamily: 'Inter, sans-serif', color: '#fff', fontSize: '1.15rem', maxWidth: '900px', margin: '0 auto', textAlign: 'left', lineHeight: 1.7 }}>
          Join us for our first community Q&amp;A session where we discuss the latest developments and answer questions from our community members about the ReMeLife ecosystem.
        </div>
      </div>
    </>
  );
}

// Add a wrapper for routes and scroll logic
function AppRoutes() {
  const location = useLocation();
  React.useEffect(() => {
    if (location && location.state && location.state.scrollToData) {
      setTimeout(() => {
        const el = document.getElementById('data-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <LumiTokenSection />
          <LumiWordsSection />
              <FounderWordsSection />
              <DataSection />
              <PhasesSection />
              <ComingSoonSection />
              <FooterSection />
            </>
          } />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/news/coin-bureau" element={<CoinBureauNewsPage />} />
          <Route path="/news/human-error" element={<HumanErrorNewsPage />} />
          <Route path="/news/community-update" element={<CommunityUpdateNewsPage />} />
          <Route path="/news/project-update" element={<ProjectUpdateNewsPage />} />
        </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
      </Router>
  );
}

export default App;
