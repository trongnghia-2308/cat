import React, { useState } from 'react';

interface CatImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  catName?: string;
}

export const CatImage: React.FC<CatImageProps> = ({
  src,
  alt = 'Ảnh mèo FelisCare',
  className = '',
  fallbackSrc = '/images/cat_hero_banner.jpg',
  catName,
  ...props
}) => {
  const [errorCount, setErrorCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Default backup feline photography from reliable public CDN if local /images doesn't load
  const backupFallback = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80';

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (errorCount === 0 && fallbackSrc && src !== fallbackSrc) {
      setErrorCount(1);
      (e.target as HTMLImageElement).src = fallbackSrc;
    } else if (errorCount === 1) {
      setErrorCount(2);
      (e.target as HTMLImageElement).src = backupFallback;
    }
  };

  return (
    <div className="relative w-full h-full bg-stone-100 overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center">
          <svg className="w-8 h-8 text-stone-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.5 2 5.5 4 4.5 7.5L2 6l1 5c-1 1.5-1 3.5 0 5 1.5 2.5 5 4 9 4s7.5-1.5 9-4c1-1.5 1-3.5 0-5l1-5-2.5 1.5C18.5 4 15.5 2 12 2zm-3.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-3.5 3c1 0 2 .5 2 1s-1 1.5-2 1.5-2-1-2-1.5 1-1 2-1z" />
          </svg>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        {...props}
      />
    </div>
  );
};
