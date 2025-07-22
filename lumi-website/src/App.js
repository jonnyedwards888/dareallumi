import './App.css';
import './LotsGoingOn.css';

function LotsGoingOnSection() {
  return (
    <section className="lots-going-on-section w-full flex flex-col items-center justify-center py-16" style={{ background: 'none' }}>
      <h2 className="text-white text-center mb-10" >THERE'S LOTS GOING ON</h2>
      <div className="lots-going-on-content rounded-[48px] border border-[#b16fc9] p-10 md:p-16">
        {/* Top Left: LUMI REWARDS - Responsive structure */}
        <div className="lumi-rewards-item">
          <img src={process.env.PUBLIC_URL + '/Lumi-rewards.png'} alt="Luki Rewards" className="lumi-rewards-image" />
          <div className="lumi-rewards-content">
            <div className="lumi-rewards-title">LUKI REWARDS</div>
            <div className="lumi-rewards-text">
              We'll be launching meme games, rewards for hodling, lots of content and ways for those who want to get involved to become part of the community, on a rewarded basis
            </div>
            {/* Add your card images here if needed */}
          </div>
        </div>
        {/* Top Right: LUMI'S NFT COLLECTION */}
        <div className="flex flex-row items-center gap-8">
          <img src={process.env.PUBLIC_URL + '/Lumi-nft-collection.png'} alt="Luki NFT Collection" className="w-40 h-28 rounded shadow-xl" />
          <div>
            <h3 className="text-white mb-2" style={{  fontWeight: 700, fontSize: '2rem', letterSpacing: '0.01em', textAlign: 'left' }}>LUKI'S NFT COLLECTION</h3>
            <p className="text-white" style={{ fontSize: '1.1rem', maxWidth: '420px', textAlign: 'left' }}>Luki's friends from Babazadeh, will bring multiple utility, be tradeable, provide identity verification and establish online trust. The first collection will be minted free for LUKI hodlers.</p>
          </div>
        </div>
        {/* Bottom Left: REMELIFE */}
        <div className="flex flex-row items-center gap-8">
          <img src={process.env.PUBLIC_URL + '/remelife-icon.png'} alt="ReMeLife" className="w-40 h-40 rounded-full shadow-xl" />
          <div>
            <h3 className="text-white mb-2" style={{  fontWeight: 700, fontSize: '2rem', letterSpacing: '0.01em', textAlign: 'left' }}>REMELIFE</h3>
            <p className="text-white" style={{ fontSize: '1.1rem', maxWidth: '370px', textAlign: 'left' }}>Sign up, get your wallet and start collecting REME tokens. Build your community, earn referral REMEs and support those engaged in care by bringing crypto to those that need it most.</p>
          </div>
        </div>
        {/* Bottom Right: LUMI VIP CLUB */}
        <div className="flex flex-row items-center gap-8">
          <img src={process.env.PUBLIC_URL + '/lumi-vip-club.png'} alt="Luki VIP Club" className="w-40 h-40 rounded-full shadow-xl" />
          <div>
            <h3 className="text-white mb-2" style={{  fontWeight: 700, fontSize: '2rem', letterSpacing: '0.01em', textAlign: 'left' }}>LUKI VIP CLUB</h3>
            <p className="text-white" style={{ fontSize: '1.1rem', maxWidth: '420px', textAlign: 'left' }}>LUKI token holders get VIP Club Membership and privileged access to many benefits, from airdrops to pre-launch discounts, merch to special events.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 