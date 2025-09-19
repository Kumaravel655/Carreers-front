import React from 'react';
import './ImageGrid.css';

const ImageGrid = () => {
  return (
    <section className="image-grid-section">
      <div className="image-grid-container">
        <div className="grid-item grid-item-large">
          <img src="mc.jpg" alt="A man working on a laptop" />
        </div>
        <div className="grid-item grid-item-small-top">
          <img src="wr.jpg" alt="A woman in a red shirt at a desk" />
        </div>
        <div className="grid-item grid-item-small-bottom">
          <img src="wt.jpg" alt="A woman working with a tablet" />
        </div>
        <div className="grid-item grid-item-wide">
          <img src="gop.jpg" alt="A team of people in a meeting" />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;