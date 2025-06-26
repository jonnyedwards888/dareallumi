import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "./index.css";
import './App.css';
import './LotsGoingOn.css';
import './NavbarMobile.css';

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

  return (
    <div>
      <div className="hero-topbar">
        <Link to="/" className="hero-button">
          <img src={process.env.PUBLIC_URL + "/Lumi-main-logo.png"} alt="LUMI Icon" className="lumi-navbar-icon" />
          LUMI
        </Link>
        <div className="hero-nav-right">
          <Link to="/solutions" className="hero-button">Solutions</Link>
          <Link to="/faqs" className="hero-button">FAQs</Link>
          <Link to="/about" className="hero-button">About</Link>
          <a href="https://x.com/mylumi_ai" target="_blank" rel="noopener noreferrer" className="hero-button">X</a>
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
        backgroundImage: `url(${process.env.PUBLIC_URL + "/Lum-universe-img.png"})`,
      }}
    >
      <Navbar />
      <div className="hero-content">
        <div className="lumi-avatar-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/Lumi-main image.png"}
            alt="Lumi Full Body"
            className="lumi-fullbody-img"
          />
        </div>
        <div className="lumi-hero-text">
          <h1 className="lumi-heading">LUMI  </h1>
          <div className="lumi-subtitle">
            the first AI person-centred care agent on chain.
          </div>
          <div className="lumi-hero-buttons">
            <a href={process.env.PUBLIC_URL + "/Lumi-Lite-Paper.pdf"} className="lumi-hero-btn" target="_blank" rel="noopener noreferrer">Lite Paper</a>
            <a href="#" className="lumi-hero-btn">Register</a>
            <a href="#" className="lumi-hero-btn">Buy $LUMI</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function LumiTokenSection() {
  return (
    <section className="lumi-token-section" style={{ background: '#18153a', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 0 2rem 0' }}>
      <h2 className="lumi-token-heading" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2.5rem', color: '#fff', marginBottom: '2.5rem', letterSpacing: '0.01em', textAlign: 'center' }}>What is the $LUMI token?</h2>
      <div className="max-w-3xl w-full px-4" style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
        <div style={{ marginBottom: '1.2rem' }}>
          <img src={process.env.PUBLIC_URL + '/ReMeLife-top-icon.png'} alt="ReMeLife" style={{ display: 'inline', width: '5.2em', height: 'auto', verticalAlign: 'middle', marginRight: '0.4em' }} />
          <span>is a tokenised Care2Earn care platform that rewards its users for their digital care actions using our proprietary apps.</span>
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <img src={process.env.PUBLIC_URL + '/RemineMecare-icon.png'} alt="RemindMeCare" style={{ display: 'inline', width: '10em', height: 'auto', verticalAlign: 'middle', marginRight: '0.4em' }} />
          <span>is the app at the heart of the ReMeLife ecosystem, that enhances person-centred care for those with cognitive difficulties.</span>
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <span className="lumi-token-lumiai" style={{ background: 'linear-gradient(90deg, #ff7ee7 0%, #b16fc9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, fontSize: '1.1em', letterSpacing: '0.04em', fontFamily: 'Orbitron, Space Grotesk, sans-serif' }}>LUMI </span>
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

function PhasesSection() {
  return (
    <section className="phases-section">
      <h2 className="phases-title">PHASES</h2>
      <div className="phases-grid">
        <div className="phases-card">
          <div className="phases-heading">PHASE 1 2024/5</div>
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
        <div className="phases-card">
          <div className="phases-heading">PHASE 2 2025</div>
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
        <div className="phases-card">
          <div className="phases-heading">PHASE 3 2025/6</div>
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
        <div className="phases-card">
          <div className="phases-heading">PHASE 4 2025/6</div>
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
      <h2 className="coming-soon-title">COMING SOON ...</h2>
      <div className="coming-soon-grid">
        {/* Top Left: LUMI REWARDS */}
        <div className="coming-soon-item coming-soon-row">
          <img src={process.env.PUBLIC_URL + '/Lumi-rewards.png'} alt="LUMI REWARDS" className="coming-soon-img" />
          <div className="coming-soon-text">
            <div className="coming-soon-item-title">LUMI REWARDS</div>
            <div className="coming-soon-item-desc">
              We'll be launching meme games, rewards for hodling, lots of content and ways for those who want to get involved to become part of the community, on a rewarded basis
            </div>
          </div>
        </div>
        {/* Top Right: LUMI VIP CLUB */}
        <div className="coming-soon-item coming-soon-row">
          <img src={process.env.PUBLIC_URL + '/lumi-vip-club.png'} alt="LUMI VIP CLUB" className="coming-soon-img" />
          <div className="coming-soon-text">
            <div className="coming-soon-item-title">LUMI VIP CLUB</div>
            <div className="coming-soon-item-desc">
              LUMI token holders get VIP Club Membership and privileged access to many benefits, from airdrops to pre-launch discounts, merch to special events.
            </div>
          </div>
        </div>
        {/* Bottom Left: LUMI'S NFT COLLECTION */}
        <div className="coming-soon-item coming-soon-row">
          <img src={process.env.PUBLIC_URL + '/Lumi-nft-collection.png'} alt="LUMI'S NFT COLLECTION" className="coming-soon-img" />
          <div className="coming-soon-text">
            <div className="coming-soon-item-title">LUMI'S NFT COLLECTION</div>
            <div className="coming-soon-item-desc">
              Yes we love NFT's. Lumi's friends will bring multiple utility, be tradeable, provide identity verification and establish online trust. The first collection will be minted free for LUMI hodlers.
            </div>
          </div>
        </div>
        {/* Bottom Right: REMELIFE */}
        <div className="coming-soon-item coming-soon-row">
          <img src={process.env.PUBLIC_URL + '/remelife-icon.png'} alt="REMELIFE" className="coming-soon-img" />
          <div className="coming-soon-text">
            <div className="coming-soon-item-title">REMELIFE</div>
            <div className="coming-soon-item-desc">
              Sign up, get your wallet and start collecting REME tokens. Build your community, earn referral REMEs and support those engaged in care by bringing crypto to those that need it most.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <div className="founder-section w-full flex flex-col items-center justify-center bg-[#18153a] py-16 px-4">
      <h2 className="founder-heading-main text-white text-center mb-12" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif' }}>
        A few words from the Founder...
      </h2>
      <div className="founder-content flex flex-col md:flex-row items-center max-w-4xl w-full gap-8">
        <video
          className="founder-video w-full max-w-md rounded-lg shadow-lg"
          controls
        >
          <source src={process.env.PUBLIC_URL + "/Lumi-founder-video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="founder-text flex-1 text-white" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontSize: '1.2rem' }}>
          <p className="mt-4">
            Do you have a family member with dementia, living alone, with autism or learning difficulties? 62% of the world does, so you probably do. I did. And that's how I came from the music business into the world of care. It's been a long journey, from building my first app 11 years ago, to crypto, memes and to now, the launch of Lumi.
          </p>
        </div>
      </div>
    </div>
  );
}

function DataSection() {
  return (
    <div className="data-section w-full flex flex-col justify-center items-center py-16">
      <h2 className="data-heading mb-8 text-white text-center" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2.5rem', letterSpacing: '0.04em' }}>DATA</h2>
      <div className="data-content flex flex-col md:flex-row items-center rounded-[48px] border border-[#b16fc9] p-10 md:p-16 gap-10 md:gap-20" style={{ background: 'linear-gradient(135deg, #23234a 60%, #3a5e7d 120%)', boxShadow: '0 4px 32px #0006', maxWidth: '1200px', width: '100%' }}>
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-6 min-w-[260px]">
          <img src={process.env.PUBLIC_URL + "/lumiai-project-analysis.jpg"} alt="LUMI AI Project Analysis" className="w-48 h-48 object-cover rounded-lg mb-2" />
          <a href="#" className="bg-white text-black flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-lg shadow hover:bg-gray-200 transition"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" /> GitHub</a>
        </div>
        {/* Middle Links */}
        <div className="flex-1 flex flex-col gap-4 text-white text-lg min-w-[220px]">
          <div><span className="text-[#b16fc9] font-bold">LUMI's</span> <a href={process.env.PUBLIC_URL + "/Lumi-Lite-Paper.pdf"} className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">LITE PAPER</a></div>
          <div><span className="text-[#b16fc9] font-bold">LUMI's</span> <a href={process.env.PUBLIC_URL + "/Lumi-Ai-Report.pdf"} className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">AI REPORT</a></div>
          <div><span className="text-[#b16fc9] font-bold">ReMeLife</span> <a href={process.env.PUBLIC_URL + "/RemeLife-White-Paper.pdf"} className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">WHITE PAPER</a></div>
          <div className="mt-6"><span className="text-white">Visit</span> <a href="https://github.com/ReMe-life" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">GITHUB</a></div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col gap-8 min-w-[220px]">
          <div className="flex items-center gap-4">
            <img src={process.env.PUBLIC_URL + "/remelife-icon.png"} alt="ReMeLife" className="w-20 h-20 rounded-full" />
            <div className="flex flex-col">
              <span className="text-white">Visit</span>
              <a href="https://remelife.com/" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">REMELIFE</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={process.env.PUBLIC_URL + "/remindmecare-icon.png"} alt="RemindMeCare" className="w-20 h-20 rounded-full" />
            <div className="flex flex-col">
              <span className="text-white">Visit</span>
              <a href="https://remindmecare.com/" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">REMINDMECARE</a>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <img src={process.env.PUBLIC_URL + "/googleplay-icon.png"} alt="Google Play" className="w-32 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="text-white">View</span>
              <a href="https://play.google.com/store/apps/developer?id=ReMeLife" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">APPS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="footer-section w-full">
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
            <Link to="/privacy" style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.2rem', textDecoration: 'none' }}>Privacy & Cookie Policy</Link>
            <Link to="/disclaimer" style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.2rem', textDecoration: 'none' }}>Disclaimer</Link>
            <a href="#" style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.2rem', textDecoration: 'none' }}>Careers</a>
            <a href="#" style={{ color: '#fff', fontSize: '1rem', textDecoration: 'none' }}>Contact Us</a>
          </div>
          <div className="footer-socials">
            <a href="https://x.com/mylumi_ai" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" style={{ width: '32px', height: '32px', background: '#1da1f2', borderRadius: '50%', padding: '4px' }} /></a>
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
  return (
    <>
      <Navbar />
      <div className="solutions-section bg-[#18153a] min-h-screen text-white py-16 px-4 flex flex-col items-center">
        <h2 className="solutions-main-heading mb-12 text-[#b16fc9] text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontWeight: 700, fontSize: '2rem' }}>
          Harnessing the value of digital care for those who need it most
        </h2>
        {/* What's Remelife Section */}
        <div className="solutions-feature-row flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16">
          <div className="flex-1 solutions-feature-text">
            <h3 className="solutions-feature-title" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2rem', marginBottom: '1rem' }}>
              WHAT'S REMELIFE?
            </h3>
            <p className="mb-4">
              ReMeLife is the world's first web3 healthcare platform, that rewards its care givers for their daily Care Actions, and that democratises data ownership.
            </p>
            <p className="mb-4">
              Community-funded, ReMeLife is a social impact, decentralised health and care platform, that's been created 'by the people, for the people'.
            </p>
            <p className="mb-4">
              In these difficult and uncertain times, ReMeLife's bringing the digital value in care back to its community.
            </p>
            <a href="#" className="text-sky-400 hover:underline">Visit ReMeLife</a>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="solutions-feature-label mb-2 text-center" style={{ color: '#fff', fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em' }}>APP ECOSYSTEM</span>
            <img
              src={process.env.PUBLIC_URL + "/data-images/app-ecosystem-img.png"}
              alt="App Ecosystem"
              className="solutions-feature-img rounded-lg shadow-lg app-ecosystem-img-hover"
              style={{ maxWidth: '100%', width: '420px', background: '#222', cursor: 'pointer' }}
              onClick={() => setModalOpen(true)}
            />
          </div>
        </div>
        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setModalOpen(false)}>&times;</button>
              <img
                src={process.env.PUBLIC_URL + "/data-images/app-ecosystem-img.png"}
                alt="App Ecosystem Full"
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
            <div className="solutions-box-title">Passive Income<br /><span className="solutions-box-sub">CARE2EARN</span></div>
            <div className="solutions-box-desc">Using RemindMecare, posting in the Forum, sharing news with your family care circle and viewing products in the Market, all earn reward tokens for your daily care actions.<br /><br />Within time you'll build up an income earned passively from your daily digital care actions.</div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title">Passive Income<br /><span className="solutions-box-sub">DATA2EARN</span></div>
            <div className="solutions-box-desc">Personal data is captured through use of ReMeLife apps and other services, and is used to define the profile of the person cared for, their family and their networks.<br /><br />This data can be monetised by the Member, whether for their own benefit or to donate to family, friends or charities.</div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title">Passive Income<br /><span className="solutions-box-sub">REFERRAL PLAN</span></div>
            <div className="solutions-box-desc">We all build personal social networks, but most earn little from them. Our data is harvested and in return, we get 'free' software, told what to buy, read and watch. And increasingly, what to believe.<br /><br />ReMeLife enables you to monetise your personal network.</div>
          </div>
        </div>
        <div className="solutions-boxes-grid w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="solutions-box">
            <div className="solutions-box-title">Savings & Income<br /><span className="solutions-box-sub">ONLINE RETAIL</span></div>
            <div className="solutions-box-desc">REMEs and LUMIs are used to gain discounts on products purchased in ReMe Market.<br /><br />Members can introduce vendors to ReMe Market and earn commissions on sales made by the vendor.</div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title">Passive Income<br /><span className="solutions-box-sub">TOKENOMICS</span></div>
            <div className="solutions-box-desc">ReMeLife is a three token ecosystem. Care actions using ReMeLife's apps earn Care Action Points (CAPs). These are converted to REMEs which can be used to make purchases in the ecosystem or traded as ERC20 tokens. LUMI, the AI token, is convertible to REMEs.</div>
          </div>
          <div className="solutions-box">
            <div className="solutions-box-title">Revenue Distribution<br /><span className="solutions-box-sub">NFTS, CHARITY & DAO</span></div>
            <div className="solutions-box-desc">ReMeLife enables everyone to gain from crypto's potential.<br /><br />Charities can monetise memberships, apps can reward for their usage.<br /><br />The ReMeLife DAO treasury will share its revenues with the community.</div>
          </div>
        </div>
        
        
       
        {/* Callout Box */}
        <div className="solutions-callout-box w-full max-w-3xl mx-auto mt-8 mb-8 p-6 rounded-2xl text-white text-center" style={{ background: 'linear-gradient(135deg, #23234a 60%, #5ee7df 120%)', border: '1.5px solid #b16fc9', boxShadow: '0 4px 32px #0006' }}>
          Register as a ReMeLife member <a href="#" className="text-sky-200 underline hover:text-sky-400">here</a>, and get your ReMeLife wallet.<br />
          Then collect free REMEs as you build your community, using the ReMeLife Community Builder Referral Program.
        </div>

        
        {/* What's RemindMecare Section */}
        <div className="solutions-feature-row ">
          <div className="flex-1 solutions-feature-text">
            <h3 className="solutions-feature-title" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2rem', marginBottom: '1rem' }}>
              WHAT'S REMINDMECARE?
            </h3>
            <p className="mb-4">
              At the heart of the ReMeLife ecosystem is the RemindMecare app (aka Reme). Used by those cared for at home and by formal care providers, such as care home, ReMe provides a suite of person-centred care functions that improves care, communication and connectivity.
            </p>
            <a href="#" className="text-sky-400 hover:underline block mb-1">Visit RemindMecare b2c</a>
            <a href="#" className="text-sky-400 hover:underline block">Visit RemindMecare b2b</a>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <video
              className="solutions-phone-video"
              controls
              poster={process.env.PUBLIC_URL + "/data-images/app-ecosystem-img.png"}
              style={{ width: '350px', borderRadius: '2rem', boxShadow: '0 4px 32px #0008', background: '#222' }}
            >
              <source src={process.env.PUBLIC_URL + "/data-images/remecare-video.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* AI Section Heading */}
        <h2 className="solutions-main-heading" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontWeight: 700, fontSize: '2rem' }}>
          Integrating AI for the benefit of the care sector
        </h2>
        {/* AI Implementation Section */}
        <div className="solutions-feature-row ai-implementation-section flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 mb-16">
          <div className="flex-1 solutions-feature-text">
            <h3 className="solutions-feature-title" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2rem', marginBottom: '1rem' }}>
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
              className="solutions-feature-img"
              style={{ maxWidth: '100%', width: '420px', background: '#222' }}
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
            <a href="#" className="text-sky-400 hover:underline block mb-1">AI Viability Analysis</a>
            <a href="#" className="text-sky-400 hover:underline block">AI Implementation strategy</a>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              src={process.env.PUBLIC_URL + "/data-images/enhanced-care.png"}
              alt="Enhanced Care"
              className="solutions-feature-img"
              style={{ maxWidth: '100%', width: '420px', background: '#222' }}
            />
          </div>
        </div>
      </div>
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
    detail: `<b>The Human Error Project</b><br/><br/>We live in historical times, when every detail of our lives is a data point used by AI systems and algorithms to profile us, judge us and make decisions about us. This data that defines us is commercialised in a multiplicity of ways. Health and education practitioners 'track risk factors' or find 'personalized solutions'. Employers, banks and insurers judge clients or potential candidates. Governments, the police and immigration officials use this tech to decide issues about individual lives, from one's right to asylum to one's likelihood to commit a crime.<br/><br/>Courtesy of ReMeLife's focus on such data being used for positive social benefit and on establishing crypto based algorithms that share the value in digital care for the benefit of the community, we've been invited to collaborate in this important project.<br/><br/>More <a href='#'>here</a>.`
  },
  {
    id: 'coin-bureau',
    img: 'news-images/coin-bureau.jpg',
    title: 'ReMeLife  at the Coin Bureau Crypto Conference, London',
    detail: `Although it was their first ever crypto conference, it felt like they'd been doing it for years. An excellent event (<a href='#'>here</a>).<br/><br/>ReMeLife was invited backstage to share in their post event shenanigans. Who says the crypto sector is depressed?<br/><br/>PS. If you don't know Coin Bureau then you don't know crypto. Find them <a href='#'>here</a>.`
  },
  {
    id: 'florida-blockchain',
    img: 'news-images/florida-blockchain-summit.jpg',
    title: 'ReMeLife at the Florida Blockchain Summit',
    detail: 'Details about the Florida Blockchain Summit.'
  }
];

function NewsCardsSection() {
  return (
    <div className="w-full flex flex-col items-center mt-12 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4">
        {newsData.map((card, idx) => (
          <div key={card.id} className="rounded-xl overflow-hidden flex flex-col bg-[#a23bb9]" style={{ minHeight: '260px', boxShadow: '0 2px 16px #0003' }}>
            {card.id === 'convex-remegrid' || card.id === 'project-update-1' ? (
              <img 
                src={`https://img.youtube.com/vi/${card.id === 'convex-remegrid' ? 'O9P1Fr_v4JQ' : 'IB89b-N-TgA'}/hqdefault.jpg`}
                alt={card.title} 
                style={{ width: '100%', height: '110px', objectFit: 'cover' }} 
              />
            ) : (
              <img src={process.env.PUBLIC_URL + '/' + card.img} alt={card.title} style={{ width: '100%', height: '110px', objectFit: 'cover' }} />
            )}
            <div className="flex-1 flex flex-col justify-between p-4">
              <div className="text-white font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontSize: '1.1rem' }}>{card.title}</div>
              <Link to={`/news/${card.id}`} className="text-sky-300 font-semibold text-sm hover:underline mt-auto">READ MORE »</Link>
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
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#18153a] text-white py-16 px-4">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <button onClick={() => navigate(-1)} className="mb-6 px-6 py-2 bg-white text-black rounded shadow hover:bg-gray-200 transition self-end">Back</button>
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
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif' }}>{news.title}</h1>
        <div className="w-full text-lg mb-8" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
          <div dangerouslySetInnerHTML={{ __html: news.detail }} />
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
    'about-page-images/equideum.png',
    'about-page-images/limechain.png',
    'about-page-images/mongoDB.png',
    'about-page-images/worcester.png',
  ];
  // Show 4 at a time
  const visible = 4;
  const maxIndex = partners.length - visible;
  const handlePrev = () => setCarouselIndex(i => Math.max(0, i - 1));
  const handleNext = () => setCarouselIndex(i => Math.min(maxIndex, i + 1));

  return (
    <>
      <Navbar />
      <div className="about-section min-h-screen flex flex-col items-center justify-start bg-[#18153a] text-white py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontSize: '2.5rem', letterSpacing: '0.04em' }}>THE TEAM & COMMUNITY</h2>
        <div className="max-w-2xl w-full mx-auto flex flex-col items-center">
          <p className="mb-4 text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
            As the founder of ReMeLife, I'm privileged and fortunate to work with a core team of creative long-term diehards, a community of talented individuals that have been focused on bringing Lumi and ReMeLife to its launchpad.
          </p>
          <p className="mb-6 text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
            Working from locations globally, predominantly rewarded in vested tokens, and with a social impact soul, the team and an associated Advisory Board, are committed to complete the build of this self-supporting AI and rewards-based community.<br /><br />
            Unfunded by traditional formal investment and ultimately being DAO managed, Lumi and ReMeLife are being built 'for the people, by the people'. And, after many years, Lumi is now on the launchpad and ReMeLife is close behind".
          </p>
          <img src={process.env.PUBLIC_URL + '/about-page-images/simon-hooper-about-page.jpg'} alt="Simon Hooper About" className="my-8 rounded-lg shadow-lg mx-auto" style={{ maxWidth: '600px', width: '100%' }} />
          <p className="mt-2 text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
            "I conceived ReMeLife as a response to my own family experiences, of my time spent developing apps in the care sector, and of the obvious potential of AI, blockchain and crypto to be able to support the financial needs of those that are simply not benefitting from the fiat value inherent in their own digital daily care. Lumi is the all critical element that is integrating the power of AI into the ecosystem, and that will manage scale and data, and drive consumer engagement through his meme character.
          </p>
          <p className="mt-8 text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
            As a decentralised, tech-based community ecosystem, Lumi assists combat today's unfair harvesting of our daily care actions. As the rich get richer and the rest of us lose our rights and opportunities, Lumi is very much needed, as we enter a new era. We hope you will join us in this mission".
          </p>
          <img src={process.env.PUBLIC_URL + '/about-page-images/pepe-banner.jpg'} alt="Pepe Banner" className="my-10 rounded-lg shadow-lg mx-auto" style={{ maxWidth: '800px', width: '100%' }} />
          <p className="mt-2 text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
            We love design, creativity, social interactivity, and bringing financial opportunity to our community. So naturally, we've been in crypto for years. And of course we <span style={{ fontStyle: 'italic' }}>LOVE</span> memes. That's why Lumi chose us, he says, as his platform to change the world!
          </p>
        </div>

        {/* PARTNERS & ASSOCIATES SECTION */}
        <div className="w-full flex flex-col items-center mt-24">
          <h2 className="text-white text-center mb-6" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '0.04em' }}>PARTNERS & ASSOCIATES</h2>
          <p className="text-lg text-center mb-10 max-w-3xl" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
            Over the years of the development of ReMeLife and more recently with Lumi, we have worked with many illustrious partners, advisory board members and consultants. Here's a few of them.
          </p>
          <div className="flex flex-row items-center justify-center w-full mb-16" style={{ maxWidth: '1100px' }}>
            <button onClick={handlePrev} className="mr-2 text-2xl text-white bg-transparent border-none cursor-pointer" disabled={carouselIndex === 0} style={{ opacity: carouselIndex === 0 ? 0.3 : 1 }}>&lt;</button>
            <div className="flex flex-row gap-6 items-center justify-center w-full" style={{ minHeight: '110px' }}>
              {partners.slice(carouselIndex, carouselIndex + visible).map((img, idx) => (
                <img
                  key={img}
                  src={process.env.PUBLIC_URL + '/' + img}
                  alt={img.replace('.png', '')}
                  style={{ height: '90px', width: 'auto', background: '#fff', borderRadius: '8px', objectFit: 'contain', padding: '8px', boxShadow: '0 2px 12px #0004' }}
                />
              ))}
            </div>
            <button onClick={handleNext} className="ml-2 text-2xl text-white bg-transparent border-none cursor-pointer" disabled={carouselIndex === maxIndex} style={{ opacity: carouselIndex === maxIndex ? 0.3 : 1 }}>&gt;</button>
          </div>
        </div>

        {/* NEWS & UPDATES SECTION */}
        <div className="w-full flex flex-col items-center mt-12">
          <h2 className="text-white text-center mb-6" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2.2rem', letterSpacing: '0.04em' }}>NEWS & UPDATES</h2>
          <div className="max-w-2xl text-lg text-center" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}>
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
            style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}
          >
            See more news here
          </a>
        </div>
      </div>
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
        <h2 className="text-white text-center mb-2" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontWeight: 900, fontSize: '2.5rem', letterSpacing: '0.04em' }}>FAQ's</h2>
        <div className="text-center mb-10 text-gray-200" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontSize: '1rem' }}>
          Frequently asked questions. We will add to these as we get asked for answers on new questions.
        </div>
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-transparent border-b border-gray-600">
              <button
                className="w-full text-left flex justify-between items-center py-6 px-4 focus:outline-none"
                style={{ color: '#b16fc9', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'Space Grotesk, Orbitron, sans-serif' }}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <span style={{ color: '#ffe44d', fontWeight: 700, fontSize: '1.5rem', marginLeft: '1rem' }}>{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-8 text-white text-left" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontSize: '1.08rem', lineHeight: 1.7 }}>
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

function PrivacyPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#18153a] text-white py-16 px-4">
      <Navbar />
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif' }}>PRIVACY & COOKIES POLICY</h1>
        <div className="text-left text-white" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontSize: '1.08rem', lineHeight: 1.7, background: '#23234a', padding: '2rem', borderRadius: '1.5rem', boxShadow: '0 4px 32px #0006' }}>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', background: 'none', color: 'inherit', fontFamily: 'inherit', fontSize: 'inherit', border: 'none', margin: 0, padding: 0 }}>
{`
PRIVACY & COOKIES POLICY

INTRODUCTION

This privacy policy ("Policy") informs you of your choices and our practices in relation the information contained within this website.

Children

Our services are not available for use by children and are intended for persons over the age of 18 years old and 21 years old in some jurisdictions. Please refer to your country laws in accordance with age-appropriate guidance.  https://ico.org.uk/for-organisations/childrens-code-hub/

This policy will explain areas of our app or website that may affect your privacy and personal details, how we process, collect, manage and store those details and how your rights under the UK GDPR (General Data Protection Regulation).

We are the data controller under the applicable privacy laws.

For the purpose of this Policy, "Information" means any information relating to an identified or identifiable individual. This includes Information relating to your use of: (a) our mobile apps ("Mobile App" the "Service"); (b) www.blui.io and any other dedicated websites which link to this policy ("Website"). When you use the App or website you accept our rules and policies which set out how we handle your Information, and you understand we may collect, process, use and store your Information as described in this Policy. "Payment" refers to deposits made using tokens via your virtual wallet. If you do not agree with this Policy, you must not use our app or website. If you change your mind in the future, you must stop using our app or website, and you may exercise your rights in relation to your Information as set out in this Policy.r

PERSONAL INFORMATION WE COLLECT
We may collect and use the following Information about you:

Information you provide to us:

Registration information: We collect personal information so you can login to our website and app. When you login you provide a player name, and you may provide an email address. You can login to our website and app using Web3 Auth. Web3 Auth do not share your login information with other parties.

Information collected via our customer support channels, for example, when you contact us via email, you may provide us with (a) your full name, email and (b) any information you choose to provide to allow us to assist you. This information is not used or shared for any purpose other than to assist with your reason for contact.

Information you provide when using the app or website: You are only required to submit personal information, should you choose to opt into marketing emails, such as newsletters and updates.

Information provided: It is the responsibility of the you, the 'user' to ensure your details are accurate and up to date and, where possible, to only provide such information as is necessary when you contact us.

Information we automatically collect or is generated about you when you, register for newsletters or updates or connect to our app or website:

Identifiers, such as your name, email address, IP address, device and app ID, unique ID, location data and device information (such as model, brand and operating system).

Cookies: we use cookies and other similar technologies (e.g., web beacons, log files, and scripts) ("Cookies") to enhance your experience when using our services. Cookies are small files which, when placed on your device, enable us to provide certain features and functionality. You have the option to permit installation of such Cookies or subsequently disable them. You may accept all cookies or instruct the device or web browser to provide notice at the time of installation of cookies or refuse to accept all cookies by adjusting the relevant cookie retention function in your device. However, in the event of your refusal to install cookies, the Game may be unable to operate as designed. For more information about our Cookies policy, click here.

Information regarding your use of the website or app, such as date and time stamps of events, interactions with our teams.

Location based data, is collected within the app and can only be collected if you, the 'user' has your location services activated. When the app is installed, it will ask for permission to allow the app to access your location service, you can accept or deny. You can also go into your settings on your phone and disable this at any time.

Information received from third parties:

Information we receive from third party platforms when you register: when you register through a third-party account (Apple or Google Play), we may receive your third- party ID.

Partner Exchanges: when you make payments in the form of tokens via your wallet connection, we do not get a notification of the unique wallet number. This information is publicly held on the block chain.

Analytics information: We integrate certain analytic software, Google analytics, a third-party analytics provider. They provide reports that help us optimise our features. This information may include user activity but is not identifiable information.

Information from mobile measurement partners: we receive information from third parties to allow us to track performance and to detect fraud. This includes, IP address, location and in some circumstance's transaction information.

Third-Party Terms and Policies. When connecting your virtual wallet to our app or website to login, third-party terms or policies may apply. It remains the responsibility of the user to ensure you have read and agree to their terms.

We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.

HOW WE USE YOUR PERSONAL INFORMATION
We will only use your personal data (such as name, email address or telephone number if provided to us) when the law allows us to. Most commonly, we will use your personal data in the following circumstances:

Where we need to perform the contract, we are about to enter into or have entered into with you.

Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.

Or, where you have opted in to receive any marketing material.

Or, where you have opted in to receive any marketing material.

The UK GDPR highlights certain purposes that either 'constitute' a legitimate interest or 'should be regarded as' a legitimate interest. These are: fraud prevention; network and information security; and indicating possible criminal acts or threats to public security.

Some processing is necessary because it is in our or a third party's legitimate interests, such as those of visitors, members or partners.

We may collect information in a way that does not directly identify you; we may collect information you have shared with us, and we may use and share such information as necessary for our business purposes and as permitted by applicable law.

The Lawful Bases we rely on and our legitimate interests.

We process your information on the following lawful bases and in furtherance of the following legitimate interests:

Provide you with the service. More in particular, we will use Information to perform our contractual obligation towards you to allow you to connect to our services via your virtual wallet. The Information we process when doing so may include a unique identify which does not identify your personally.

Improve and monitor use. To improve our service for our customers. When doing so, we may collect information such as a unique identify which will allow us to analyse information about your device such as battery, Wi-Fi strength, device manufacturer, model and operating system.

Provide you with support and to respond to your requests or complaints. If you reach out to us for support, we will use your Information to respond and resolve your queries and complaints, facilitate support. When doing so, we perform our contractual obligation towards you.

Conduct analytics. To analyse interaction and to (a) create anonymised and aggregated data; (b) create segments of users who show particular characteristics or interests; and (c) conduct predictive analytics about your interests.

Provide you with advertising. We will present you with newsletters advertising updates and / or offers. Where it is required, we will only do so where we have your consent. In situations where your consent is not required, or where we provide contextual advertising, we do so on the basis of our legitimate interests. If you no longer want to receive targeted advertising, please see our Cookie Policy which explains how you can opt out and change your browser and device settings.

Prevent fraud, defend ReMeLife against legal claims or disputes, enforce our terms and to comply with our legal obligations. To detect fraud or any other user behaviour which prejudices the integrity of our services, (2) taking steps to remedy aforementioned fraud and behaviour, (3) defending ourselves against legal claims or disputes, and (4) enforcing our terms and policies. When doing so, we will process the Information relevant in such a case, including information you provide us, information we automatically collect about you, and information which is provided to us by third parties.

 

DATA PROCESSING

LEGAL BASIS

Providing services. We need to provide services via the Website

Contract

Providing newsletters/offers/updates which may be interesting to you

Consent for newsletters; Legitimate Interests for offers and updates.

Registering you as a user

Contract

Compliance with applicable anti-money laundering and know your client rules

Legal obligation

Keeping the Website running (managing your requests, remembering your settings, hosting, and back-end infrastructure)

Legitimate Interests

Preventing frauds, illegal activity, or any violation of the terms or Privacy Policy. We may disable access to the Website, erase or correct personal data in some cases

Legitimate Interests

Improving the Website (testing features, interacting with feedback platforms, managing landing pages, heat mapping the Website, traffic optimization, and data analysis and research, including profiling and the use of machine learning and other techniques over your data and in some cases using third parties to do this)

Legitimate Interests

Customer support (notifying you of any changes to the Website, services, solving issues, any bug fixing)

Legitimate Interests

 

We share your Information with selected third parties, including:  Vendors and service providers, we rely on for the provision of the service, for example:

Cloud service providers who rely on for data storage, being AWS (Amazon Web Server)

Analytics providers. We work with a number of analytics, segmentation and mobile measurement service providers who help us understand our userbase. This includes Apple, Google, AWS (Amazon Web Server).

Advertising partners. We may include an ad-supported service. Subject to your settings, we provide certain Information to advertisers who will use them to serve you with ads within the app or website, and we measure who sees and clicks on their ads. We also share advertising identifiers, along with the interests or other characteristics of a device or the person using it, to help partners decide whether to serve an ad to that device or to enable them to conduct marketing, brand analysis, personalise advertising, or similar activities. For more information on how to limit or opt- out from personalized advertisement, please see our Cookie Policy

Partner Exchanges: Your payments are in the form of tokens, connected directly to your wallet, being either Trust Wallet or MetaMask. These processors are responsible for the processing of your Information, and may use your Information for their own purposes in accordance with their privacy policies as below:

MetaMask: https://consensys.net/privacy-policy/

Trust Wallet: https://trustwallet.com/privacy-policy

Law enforcement agencies, public authorities or other judicial bodies and organisations. We disclose Information if we are legally required to do so, or if we have a good faith belief that such use is reasonably necessary to comply with a legal obligation, process or request; enforce our terms of service and other agreements, policies, and standards, including investigation of any potential violation thereof; detect, prevent or otherwise address security, fraud or technical issues; or protect the rights, property or safety of us, our users, a third party or the public as required or permitted by law (including exchanging information with other companies and organisations for the purposes of fraud protection).

Change of corporate ownership. If we are involved in a merger, acquisition, bankruptcy, re- organisation, partnership, asset sale or other transaction, we may disclose your Information as part of that transaction.

Third Party Privacy Practices

If you access any service through a third-party platform such as Apple or Google ("Third Party Services"), you must understand that those Third Party Services may collect other information about you (including information you share with them directly or about your use of the app or website) in accordance with their own terms and privacy policies. The privacy practices described in this Policy do not apply to Third Party Services. Any links to Third Party Services do not imply that we endorse or have reviewed the Third-Party Services.

Security

Although we have in place security measures to maintain the privacy and integrity of your Information, unfortunately, the transmission of Information via the internet is not completely secure. We may also take extra steps to protect your Information and minimise the Information we process.

 

WHERE WE PROCESS YOUR PERSONAL INFORMATION
Your Information will be processed by our employees and service providers, Apple, Google, AWS (Amazon Web Services) and Mailchimp. We take steps to ensure all transfers are protected by adequate safeguards. When you download the app via Google Play or Apple, you will need to read their Terms and Policies which are independent of Block Media Ltd.'s Terms and Policies. We may share with Google, Apple, AWS (Amazon Web Services) data we have collected from your device in order to track user experience, such as app or website crashes. This information does not include identifiable or personal information.

It is unlikely, however, should we need to transfer your personal data out of the UK, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:

We will only transfer your data to countries that have been deemed to provide an adequate level of protection for personal data.

Where we use certain service providers, we may use specific contracts approved for use in the UK which give personal data the same protection it has in the UK.

HOW LONG WE STORE YOUR INFORMATION
Your Information, provided to us, by you, will be stored for up to 6 years. When deleting Information, we will take measures to make the Information irrecoverable or irreproducible, and electronic files which contain Information will be deleted permanently.

YOUR RIGHTS
Under certain circumstances, you have rights under data protection laws in relation to your personal data. These rights are:

The right to request access to your personal data.

The right to request correction of your personal data.

The right to request erasure of your personal data.

The right to request erasure of your personal data.

The right to request restriction of processing your personal data.

The right to request transfer of your personal data.

The right to withdraw consent.

You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.

We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it.

We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.

Access. You have the right to access Information, and to receive an explanation of how we use it and who we share it with. This right is not absolute. For example, we cannot reveal trade secrets, or give you Information about other individuals.

Erasure. You have the right to request deletion of your Information. We may need to retain some of your Information where there are valid grounds for us to do so under data protection laws. For example, for the defence of legal claims, respect freedom of expression, or where we have an overriding legitimate interest to do so, but we will let you know when this is case.

Note that where the Information is held by a third party data controller, such as an advertising partner or a payment processor, we will use reasonable steps to inform them of your request, but we recommend you contact them directly in accordance with their own privacy policies to ensure your personal data is erased.

Objection and withdrawal of consent: You have the right to (i) withdraw your consent where you previously provided such consent; or (ii) object to our processing of your Information where we process such Information on the basis of our legitimate interests (see How we use your personal information). You may exercise this right as follows:

To stop receiving marketing emails: please follow the unsubscribe mechanism at the bottom of each email communication.

To stop our cookies being placed: please refer to our Cookie Policy.

To stop receiving push notifications: please change your device or browser settings.

Portability. You have the right to receive a copy of Information we process on the basis of consent or contract in a structured, commonly used and machine-readable format, or to request that such Information is transferred to a third party.

Correction. You have the right to correct any Information held about you that is inaccurate.

Restriction. You have a right in certain circumstances to stop us processing Information other than for storage purposes.

CONTACT & COMPLAINTS
Questions, comments and requests regarding this Policy. These should be addressed to team@bluo.io.

If you wish to make a complaint about how we process your Information, please contact us at tam.io and we will endeavour to deal with your complaint as soon as possible. This is without prejudice to your right to launch a claim with a data protection authority.

We may need further information from them to verify you and will contact you to request further information if needed. We aim to respond to complaints within 30 days; however, this may be delayed if you have not provided us with all relevant information.

If you are a UK user and feel that we have not handled your compliant within a reasonable timeframe or have not satisfied your complaint, you can seek advice from ICO. https://ico.org.uk/make-a-complaint/

CHANGES
Any updates or changes to this Policy will be published here.
`}
          </pre>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

function DisclaimerPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#18153a] text-white py-16 px-4">
      <Navbar />
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif' }}>DISCLAIMER</h1>
        <div className="text-left text-white" style={{ fontFamily: 'Space Grotesk, Orbitron, sans-serif', fontSize: '1.08rem', lineHeight: 1.7, background: '#23234a', padding: '2rem', borderRadius: '1.5rem', boxShadow: '0 4px 32px #0006' }}>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', background: 'none', color: 'inherit', fontFamily: 'inherit', fontSize: 'inherit', border: 'none', margin: 0, padding: 0 }}>
{`
DISCLAIMER
Purchasing BLUI tokens involves an degree of risk that may lead to the loss of a significant part or the entirety of any monies used in purchasing BLUIS. Before purchasing BLUI tokens, thoroughly evaluate and take into account the risks represented in all BLUI related documentation, and consider also other risks not included or anticipated in this document and the associated websites.
You should only purchase BLUI tokens if you fully understand the tokenomics as defined and the nature and intent of the BLUI meme token. Crypto assets can be subject to expropriation and theft. Computer hackers or other malicious groups or organisations may seek to interfere with the BLUI issuance in a number of different ways. These may include malware, tax, distributed denial of service attacks and consensus-based exploits, such as a 51% attack that could result in the loss of BLUI tokens or the loss of the ability to access BLUI tokens.
Because of the immutable nature of the blockchain transactions there may be no remedy if a successful attack by malicious actors was to take place against the ethereum chain that the BLUI smart contract is built on.
Crypto assets are not regulated as financial instruments and there is no refund or compensation available from regulatory bodies such as the UK's financial services compensation scheme and similar bodies in other jurisdictions. The regulatory status of crypto assets remains uncertain and varies from jurisdiction to jurisdiction, presenting owners of crypto assets with legal uncertainty. It is possible that in the future certain laws, regulations, policies, or rules relating to crypto assets, blockchain technology or decentralised applications may be implemented that affect or restrict token holders' acquisition, ownership rights, and their ability to buy, sell, convert, or use crypto assets such as the BLUI token.
Uncertainties regarding tax legislation relating to crypto assets could leave token holders exposed to unforeseen consequences such as taxable events retrospectively applied or to be applied in the future.
Each perspective BLUI purchaser should weigh up their own individual appetite for risk and consider consulting an independent financial adviser before making any decisions. Readers of this whitepaper may also need to consult a tax professional, accountant, lawyer, or other professionals in order to satisfy themselves regarding any outstanding matters related to how BLUIs are designed before deciding whether a purchase of BLUI tokens will be in line with their risk profile.
Crypto currencies may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
`}
          </pre>
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
      <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Orbitron, Space Grotesk, sans-serif', fontSize: '2.5rem', letterSpacing: '0.04em' }}>LUMI MERCH</h2>
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
              <div style={{ background: '#120f2c', width: '100vw' }}>
                <FounderSection />
                <DataSection />
                <PhasesSection />
                <ComingSoonSection />
                <FooterSection />
              </div>
            </>
          } />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
