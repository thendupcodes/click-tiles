import { useRef } from 'react';

import imageUrls from '@/constants/images.json';

type TilesBackgroundProps = {
  imageIdx: number;
  imagePosition: number;
  backgroundToggled: boolean;
}

export default function TilesBackground ({
  imageIdx,
  imagePosition,
  backgroundToggled
}: TilesBackgroundProps) {
  return (
    <div className="Tiles__background" style={{
      opacity: backgroundToggled ? 1 : 0
    }}>
      {imageUrls.map((url, idx) => {
        const imageRef = useRef(null);

        if (imageRef?.current != null) {
          imageRef.current.animate({
            backgroundPosition: `${imagePosition.x}% ${imagePosition.y}%`,
          }, { duration: 5000, fill: 'forwards' });
        }

        return (
          <div ref={imageRef} key={url} className="Tiles__background-image" style={{
            backgroundImage: `url(${imageUrls[idx]})`,
            opacity: idx === imageIdx ? 1 : 0,
          }}></div>
        );
      })}

      <div className="Tiles__background-overlay" />
    </div>
  );
}