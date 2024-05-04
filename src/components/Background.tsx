import { createRef, useRef } from 'react';

type TilesBackgroundProps = {
  urls: string[];
  imageIdx: number;
  imagePosition: { x: number, y: number };
  backgroundToggled: boolean;
}

const useRefsFromArray = <T extends string>(array: T[]) => {
  // Create a single useRef to hold the array of refs
  const refs = useRef<(React.MutableRefObject<HTMLDivElement | null>)[]>([]);

  // Populate the array of refs using createRef
  if (refs.current.length !== array.length) {
    refs.current = Array.from({ length: array.length }, () => createRef<HTMLDivElement | null>());
  }

  return refs;
};

export default function TilesBackground ({
  urls,
  imageIdx,
  imagePosition,
  backgroundToggled
}: TilesBackgroundProps) {
  const imageRefs = useRefsFromArray(urls);
  
  return (
    <div className="Tiles__background" style={{
      opacity: backgroundToggled ? 1 : 0
    }}>
      {urls.map((url, idx) => {
        const imageRef = imageRefs?.current[idx];

        if (imageRef != null) {
          imageRef.current?.animate({
            backgroundPosition: `${imagePosition.x}% ${imagePosition.y}%`,
          }, { duration: 5000, fill: 'forwards' });
        }

        return (
          <div ref={imageRef} key={url} className="Tiles__background-image" style={{
            backgroundImage: `url(${urls[idx]})`,
            opacity: idx === imageIdx ? 1 : 0,
          }}></div>
        );
      })}

      <div className="Tiles__background-overlay" />
    </div>
  );
}