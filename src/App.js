import './App.css';

// Spin wheel function
const spinWheel = () => {
  alert("Coming Soon! This feature is currently disabled.");
};
// Open modal function
const openModal = () => {
  const modal = document.getElementById("aboutModal");
  modal.style.display = "block"; // Show modal
};
// Close modal function
const closeModal = () => {
  const modal = document.getElementById("aboutModal");
  modal.style.display = "none"; // Hide modal
};

const openTokenModel = () => {
  const modal = document.getElementById("Tokenomicsabout");
  modal.style.display = "block"; // Show modal
};
// Close modal function
const closecloseModal = () => {
  const modal = document.getElementById("Tokenomicsabout");
  modal.style.display = "none"; // Hide modal
};



const openRewardsModel = () => {
  const modal = document.getElementById("Rewardsabout");
  modal.style.display = "block"; // Show modal
};
// Close modal function
const closeRewardsModal = () => {
  const modal = document.getElementById("Rewardsabout");
  modal.style.display = "none"; // Hide modal
};





// Generate random falling pixels
const createPixels = (numPixels) => {
  const colors = [
    'rgba(255, 0, 0, 0.8)', // Red
    'rgba(0, 255, 0, 0.8)', // Green
    'rgba(0, 0, 255, 0.8)', // Blue
    'rgba(255, 255, 0, 0.8)', // Yellow
    'rgba(255, 165, 0, 0.8)', // Orange
    'rgba(128, 0, 128, 0.8)', // Purple
  ];
  for (let i = 0; i < numPixels; i++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Random color
    pixel.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 seconds random duration
    pixel.style.animationDelay = `${Math.random() * 5}s`; // Random delay
    document.body.appendChild(pixel);
  }
};
// Generate 50 falling pixels
createPixels(50);
// React component
function App() {
  return (
    <div>
      <nav className='Navbar'>
        <div className="nav-left">
          <img src="/logo/bug.png" alt="Logo" />
          <span className='span'>$SpinCoin</span>
        </div>
        <div className="nav-right">
          <button className="buy-button" onClick={() => window.location.href = 'https://pump.fun/board'}>
            Buy
          </button>
          <span className='about' onClick={openModal}>Community</span>
          <span className='about' onClick={openTokenModel}>Tokenomics </span>
          <span className='about' onClick={openRewardsModel}>Rewards </span>


        </div>
      </nav>
      <ul className="circle">
        <li><div className='text'> 🪙 🪙</div></li>
        <li><div className='text'>🔥🔥</div></li>
        <li><div className='text'>  💩 </div></li>
        <li><div className='text'>🚀🚀</div></li>
        <li><div className='text'>💎</div></li>
        <li><div className='text'>🪙</div></li>
        <li><div className='text'> 🪙 🪙 🪙</div></li>
        <li><div className='text'>💵💵</div></li>
        <li><div className='text'> 🍀 </div></li>
        <li><div className='text'>??</div></li>
        <li><div className='text'>💵</div></li>
        <li><div className='text'>☠️ ☠️ ☠️ </div></li>
      </ul>
      <button className="spin-button" onClick={spinWheel}>Coming Soon</button>
      <div className="arrow"></div>
      {/* Modal structure */}
      <div className="modal" id="aboutModal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Community</h2>
          <p>At SpinCoin, we’re not just launching a memecoin — we’re building a movement. A movement fueled by fun, innovation, and a shared vision for a brighter, more rewarding future. Memecoins have taken the crypto world by storm, and SpinCoin is here to take things to the next level!
Why settle for the same old when you can be part of something fresh and bold? With SpinCoin, you’re not just investing in a token; you’re investing in a community that values creativity, opportunity, and the thrill of being ahead of the curve.
</p>
<p>This is more than a coin; it’s a ticket to a future where laughs, luck, and limitless potential collide. Whether you're here for the fun, the games, or the gains, SpinCoin is your partner in the journey. Together, we’re spinning up a revolution in crypto culture — and you’re invited.
Don’t just watch the future happen. Be part of it. Let’s make SpinCoin a name that echoes in the hall of crypto legends. 🚀</p>
        </div>
      </div>



      <div className="modal" id="Rewardsabout">
  <div className="modal-reward">
    <span className="close" onClick={() => closeRewardsModal('Rewardsabout')}>&times;</span>
    <h2>Rewards</h2>
    <p>
    <p><b>🪙:</b> Represents coins or currency, often symbolizing cryptocurrencies like SpinCoin.</p>
<p><b>🔥:</b> Token burn, a mechanism to reduce supply.</p>
<p><b>💩:</b> Indicates a funny or unpleasant surprise.</p>
<p><b>🚀:</b> Represents a price surge, "to the moon" growth.</p>
<p><b>💎:</b> Diamond hands, holding onto assets without selling.</p>
<p><b>💵:</b> Represents profit or monetary gain.</p>
<p><b>🍀:</b> Symbolizes luck and success.</p>
<p><b>☠️:</b> Indicates loss, risk, or a fatal mistake.</p>
<p><b>??:</b> Represents the unknown or a surprise element.</p>

    </p>
    <p>
      <b>Big Clover:</b> 1000$
    </p>
  </div>
</div>


<div className="modal" id="Tokenomicsabout">
  <div className="modal-content">
    <span className="close" onClick={() => closecloseModal('Tokenomicsabout')}>&times;</span>
    <h2>Tokenomics</h2>
    <p>
      Transparency and fairness are at the heart of SpinCoin’s tokenomics. Here’s how we’re setting the stage for long-term success:
    </p>
    <p><b>Total Supply:</b> 17590163.934426 SPN</p>
    <p><b>Liquidity:</b>Will be allocated to ensure market stability and support the growth of the SpinCoin ecosystem.</p>
    <p><b>Development Fund:</b> 5% of the total supply is reserved to support continuous innovation, future features, and improvements to enhance the SpinCoin ecosystem.</p>
    <p><b>Rewards:</b> Engaging community rewards are in the pipeline, designed to incentivize long-term participation and loyalty.</p>
    <p><b>Contract Address:</b></p>
    <div className="contract-address-container">
      <span id="contractAddress">3oW..</span>
      <button 
        className="copy-button" 
        onClick={() => navigator.clipboard.writeText('3oW237FZF4RMcU1VqvVXCWdZVjDmwM8PFAgRdDPBpump')}
      >
        Copy
      </button>
    </div>
  </div>
</div>

<div class="announcement-bar">
  <div class="scroll-text">
  🍀 value is 1000 USD! Are you lucky? We’ll see! Let’s grow together and add new games! Coming Soon
  </div>
 
</div>



      
      {/* Social media icons */}
      <div className="social-icons">
        <a href="https://x.com/SpinCoinSPN" target="_blank" rel="noopener noreferrer">
          <img src="/logo/x.png" alt="Twitter" className="social-logo" />
        </a>
        <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer">
          <img src="/logo/dex.png" alt="DexScanner" className="social-logo" />
        </a>
        <a href="https://t.me/SpinCoinSPN" target="_blank" rel="noopener noreferrer">
          <img src="/logo/telegram.png" alt="Telegram" className="social-logo" />
        </a>
      </div>
    </div>
  );
}
export default App;
