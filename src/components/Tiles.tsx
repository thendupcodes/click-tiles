import anime from "animejs";
import { CSSProperties, useEffect, useMemo, useState } from "react";

import TilesBackground from "@/components/Background";
import TileControls from "@/components/Controls";
import TileQuotes from "@/components/Quote";

import { useResizer } from "@/hooks/useResizer";

import imageUrls from '@/constants/images.json';
import quotes from '@/constants/quotes.json';

import mod from '@/helpers/mod';
import toggleFullScreen from '@/helpers/toggleFullScreen';
import useThrottle from '@/hooks/useThrottle';

interface ModifiedCSSProperties extends CSSProperties {
  '--columns': string | number,
  '--rows': string | number,
} 

export default function Tiles () {
  const [tilesToggled, setTilesToggled] = useState(false);
  const [backgroundToggled, setBackgroundToggled] = useState(false);
  const [slowLoad, setSlowLoad] = useState(false);
  const [hideControls, setHideControls] = useState(false);
  const [fade, setFade] = useState(false);
  const [quoteIdx, setQuoteIdx] = useState(Math.floor(Math.random() * quotes.length));
  const [imageIdx, setImageIdx] = useState(Math.floor(Math.random() * imageUrls.length));
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 });

  const { windowWidth, windowHeight } = useResizer();

  const currentQuote = useMemo(() => quotes[quoteIdx], [quoteIdx]);

  const [cols, rows] = useMemo(() => {
    return [Math.floor(windowWidth / 30), Math.floor(windowHeight / 30)];
  }, [windowWidth, windowHeight])

  const style: ModifiedCSSProperties= useMemo(() => {
    return {
      '--columns': cols,
      '--rows': rows
    };
  }, [cols, rows])

  const handleQuoteNext = useThrottle(() => {
    setFade(true);

    setTimeout(() => {
      setFade(false);
      setQuoteIdx((prev) => mod((prev + 1), quotes.length));
      setImageIdx((prev) => mod((prev + 1), imageUrls.length));
    }, 600);
  }, 1000, false);

  const handleQuotePrevious = useThrottle(() => {
    setFade(true);

    setTimeout(() => {
      setFade(false);
      setQuoteIdx((prev) => mod((prev - 1), quotes.length));
      setImageIdx((prev) => mod((prev - 1), imageUrls.length));
    }, 600);
  }, 1000, false);

  const toggleControls = () => {
    setHideControls((prev) => !prev);
  }

  const toggleBackground = () => {
    setBackgroundToggled((prev) => !prev);
  }

  const handleOnClick = (idx: number) => {
    setTilesToggled((prev) => !prev);

    if (!tilesToggled) {
      setSlowLoad(true);
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
      setTimeout(() => {
        setSlowLoad(false)
      }, 2000);
    } else {
      setHideControls(false);
    }

    anime({
      targets: ".Tile",
      opacity: tilesToggled ? 1 : 0,
      delay: anime.stagger(25, {
        grid: [cols, rows],
        from: idx,
      })
    })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handleQuotePrevious();
    } else if (e.key === 'ArrowRight') {
      handleQuoteNext();
    } else if (e.key === 'b') {
      toggleBackground();
    } else if (e.key === 'f') {
      toggleFullScreen();
    } else if (e.key === 'h') {
      toggleControls();
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    const imageX = ((e.clientX / windowWidth) - 0.5) * 20;
    const imageY = ((e.clientY / windowHeight) - 0.5) * 20;

    setImagePosition({
      x: 50 + imageX,
      y: 50 + imageY
    })
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="Tiles" style={style}>
      <TilesBackground
        imageIdx={imageIdx}
        imagePosition={imagePosition}
        backgroundToggled={backgroundToggled}
      />

      <div className={`Tiles__main ${tilesToggled ? 'Tiles__main--toggled' : ''} ${!backgroundToggled ? 'Tiles__main--gradient' : ''}`}>
        {
          Array.from(Array(cols * rows)).map((_, i) => {
            return <div key={`tile_${i}`} className="Tile" onClick={() => handleOnClick(i)}></div>
          })
        }
      </div>

      <TileQuotes
        tilesToggled={tilesToggled}
        fade={fade}
        currentQuote={currentQuote}
      />

      <TileControls
        tilesToggled={tilesToggled}
        hideControls={hideControls}
        slowLoad={slowLoad}
        handleQuoteNext={handleQuoteNext}
        handleQuotePrevious={handleQuotePrevious}
        toggleControls={toggleControls}
        toggleBackground={toggleBackground}
        toggleFullScreen={toggleFullScreen}
      />
    </div>
  );
}