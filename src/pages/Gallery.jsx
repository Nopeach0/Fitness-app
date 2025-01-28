import React from 'react'

function Gallery() {
  const uploadPhoto = () => {
    alert('Photo upload functionality coming soon!');
  }

  return (
    <div className="gallery-grid">
      <div className="gallery-item">
        <img src="https://via.placeholder.com/400x200" alt="Progress Photo" />
        <div className="photo-date">Jan 2024</div>
      </div>
      <div className="gallery-item">
        <img src="https://via.placeholder.com/400x200" alt="Progress Photo" />
        <div className="photo-date">Mar 2024</div>
      </div>
      <button className="cta-button" onClick={uploadPhoto}>
        Add Progress Photo
      </button>
    </div>
  )
}

export default Gallery
