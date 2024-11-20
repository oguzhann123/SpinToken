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
        </div>
      </nav>
      <ul className="circle">
        <li><div className='text'>?</div></li>
        <li><div className='text'>??</div></li>
        <li><div className='text'>???</div></li>
        <li><div className='text'>????</div></li>
        <li><div className='text'>?</div></li>
        <li><div className='text'>??</div></li>
        <li><div className='text'>???</div></li>
        <li><div className='text'>????</div></li>
        <li><div className='text'>?</div></li>
        <li><div className='text'>??</div></li>
        <li><div className='text'>???</div></li>
        <li><div className='text'>????</div></li>
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
      {/* Social media icons */}
      <div className="social-icons">
        <a href="https://x.com/SpinCoinSPN" target="_blank" rel="noopener noreferrer">
          <img src="/logo/x.png" alt="Twitter" className="social-logo" />
        </a>
        <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer">
          <img src="/logo/dex.png" alt="DexScanner" className="social-logo" />
        </a>
      </div>
    </div>
  );
}
export default App;
