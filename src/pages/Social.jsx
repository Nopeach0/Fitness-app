import React from 'react'

const shareProgress = (platform) => {
  const message = `Check out my fitness progress on FitGenius! 🏋️♂️ Current plan: "The Big Lad Lifting Plan"`;
  switch(platform) {
    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`);
      break;
    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`);
      break;
    case 'instagram':
      alert('Save your progress photo and share it directly on Instagram!');
      break;
  }
}

function Social() {
  return (
    <div className="social-share">
      <button className="cta-button" onClick={() => shareProgress('twitter')}>
        🐦 Share on Twitter
      </button>
      <button className="cta-button" onClick={() => shareProgress('instagram')}>
        📸 Share on Instagram
      </button>
      <button className="cta-button" onClick={() => shareProgress('facebook')}>
        👍 Share on Facebook
      </button>
    </div>
  )
}

export default Social
