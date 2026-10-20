import React, { useState } from 'react';
import { FALLBACK_CAT_IMAGE, FALLBACK_CAT_SVG, getAssetUrl } from '../utils/catUtils';

interface CatImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  catName?: string;
}

export const CatImage: React.FC<CatImageProps> = ({
  src,
  alt = 'Ảnh mèo FelisCare',
  className = '',
  fallbackSrc = getAssetUrl('/images/cat_hero_banner.jpg'),
  catName,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src || fallbackSrc);
  const [errorCount, setErrorCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    setLoaded(true); // Always reveal image on error so UI does not stay stuck in grey pulsing state
    if (errorCount === 0) {
      setErrorCount(1);
      setCurrentSrc(fallbackSrc);
    } else if (errorCount === 1) {
      setErrorCount(2);
      setCurrentSrc(FALLBACK_CAT_IMAGE);
    } else {
      setErrorCount(3);
      setCurrentSrc(FALLBACK_CAT_SVG);
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
        src={currentSrc}
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
