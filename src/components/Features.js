import { useState } from 'react';
import UrlCheckModal from './UrlCheckModal';


export default function Features() {
  const [showModal, setShowModal] = useState(false);

const handleClick = () => {
    setShowModal(true);
  };  
const handleClose = () => {
    setShowModal(false);
  };
  


  const featureItems = [
    {
      title: "Lightning Fast",
      description:
        "Our servers are optimized to deliver your shortened links instantly, ensuring a seamless experience.",
      icon: (
        <svg
          className="feature-icon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 10h7l-10 10v-7l-4-4v-12l7 7z" />
        </svg>
      ),
    },
    {
      title: "Custom Aliases",
      description:
        "Create memorable shortened links with custom names that reflect your brand or content.",
      icon: (
        <svg
          className="feature-icon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 20h4v-1h-4v1zm3-20c-4.971 0-9 6.266-9 14 0 1.8.336 3.512.959 5.078.171.428.369.822.593 1.178-.965.964-2.341 1.74-2.215 1.744 3.064.02 5.208-.811 6.621-2.216.932-.931 1.514-1.923 1.811-2.814.459.184.938.309 1.431.37v-2.04c-3.021-.678-5-3.41-5-6.3 0-3.711 3.471-8 8-8 4.529 0 8 4.289 8 8 0 2.89-1.979 5.622-5 6.3v2.04c3.29-.424 6-2.863 6-5.34 0-.978-.232-1.879-.626-2.687.22 0 .438-.018.653-.057v-.006c.24-.034.478-.087.71-.159.013-.004.023-.012.036-.015.255-.064.498-.147.729-.25.009-.004.018-.007.027-.011.228-.104.437-.227.637-.363.015-.01.03-.02.044-.03.05-.035.098-.072.144-.11.016-.013.03-.026.045-.04.19-.162.354-.343.505-.535l.012-.015zm-3-11c1.38 0 2.5 1.489 2.5 3.5s-1.12 3.5-2.5 3.5-2.5-1.489-2.5-3.5 1.12-3.5 2.5-3.5z" />
        </svg>
      ),
    },
    {
      title: "Analytics",
      description:
        "Track click-through rates to understand how many clicks you got!.",
      icon: (
        <div >
          <div>
            <svg
              className="feature-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3zm15.293 3.293l1.414 1.414L16 13.414l-3-3-4 4-3.707-3.707 1.414-1.414L9 10.586l4-4 4.293 4.293z" />
            </svg>
          </div>
          <div>
            <button onClick={handleClick} className="copy-btn">
               Analyse
            </button>
            {showModal && <UrlCheckModal onClose={handleClose}/>}
             
          </div>
        </div>
      ),
    },
  ];
 
  

  return (
    <div className="features-section" id="features">
      <h2 className="section-title">Why Choose ShortU?</h2>
      <div className="features-grid">
        {featureItems.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
}
