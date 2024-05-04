type TileControlsProps = {
  tilesToggled: boolean;
  hideControls: boolean;
  slowLoad: boolean;
  handleQuoteNext: () => void;
  handleQuotePrevious: () => void;
  toggleControls: () => void;
  toggleBackground: () => void;
  toggleFullScreen: () => void;
}

export default function TileControls ({
  tilesToggled,
  hideControls,
  slowLoad,
  handleQuoteNext,
  handleQuotePrevious,
  toggleControls,
  toggleBackground,
  toggleFullScreen,
}: TileControlsProps) {
  return (
    <div className={`Tiles__footer ${tilesToggled && !hideControls ? 'Tiles__footer--show' : ''} ${slowLoad ? 'Tiles__footer--slow-load' : ''}`}>
      <div className="Tiles__footer-info">Keyboard shortcuts</div>

      <div className="Tiles__footer-controls">
        <div
          tabIndex={0}
          role="button"
          className="Key Tiles__key-sc Tiles__key-sc--previous"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleQuotePrevious()
          }}
          onClick={() => handleQuotePrevious()}
        >
          <div className="Key__icon Tiles__key-sc-icon"><i className="fa-solid fa-caret-left" /></div>
          
          <span className="Key__info Tiles__key-sc-label">previous</span>
        </div>

        <div
          tabIndex={0}
          role="button"
          className="Key Tiles__key-sc Tiles__key-sc--next"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleQuoteNext()
          }}
          onClick={() => handleQuoteNext()}
        >
          <div className="Key__icon Tiles__key-sc-icon"><i className="fa-solid fa-caret-right" /></div>
          
          <span className="Key__info Tiles__key-sc-label">next</span>
        </div>

        <div
          tabIndex={0}
          role="button"
          className="Key Tiles__key-sc Tiles__key-sc--background"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleBackground()
          }}
          onClick={() => toggleBackground()}
        >
          <div className="Key__icon Tiles__key-sc-icon"><i className="fa-solid fa-b"></i></div>
          
          <span className="Key__info Tiles__key-sc-label">background</span>
        </div>

        <div
          tabIndex={0}
          role="button"
          className="Key Tiles__key-sc Tiles__key-sc--fullscreen"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleFullScreen()
          }}
          onClick={() => toggleFullScreen()}
        >
          <div className="Key__icon Tiles__key-sc-icon"><i className="fa-solid fa-f"></i></div>
          
          <span className="Key__info Tiles__key-sc-label">fullscreen</span>
        </div>

        <div
          tabIndex={0}
          role="button"
          className="Key Tiles__key-sc Tiles__key-sc--hide"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleControls()
          }}
          onClick={() => toggleControls()}
        >
          <div className="Key__icon Tiles__key-sc-icon"><i className="fa-solid fa-h"></i></div>
          
          <span className="Key__info Tiles__key-sc-label">hide</span>
        </div>
      </div>
    </div>
  );
}