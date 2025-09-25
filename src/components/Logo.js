import React from 'react';

const Logo = ({ 
  imageSrc = null, 
  altText = "Reviews Maps Pro", 
  className = "w-10 h-10",
  textFallback = "R",
  showText = true 
}) => {
  return (
    <div className={`${className} bg-secondary-orange rounded-lg flex items-center justify-center`}>
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={altText}
          className="w-full h-full object-contain rounded-lg"
        />
      ) : (
        <span className="text-white font-bold text-xl">
          {textFallback}
        </span>
      )}
    </div>
  );
};

export default Logo;
