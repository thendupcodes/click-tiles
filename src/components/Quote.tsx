type TileQuotesProps = {
  tilesToggled: boolean;
  fade: boolean;
  currentQuote: 
}

export default function TileQuotes ({
  tilesToggled,
  fade,
  currentQuote,
}) {
  return (
    <div className={`Tiles__body ${tilesToggled ? 'Tiles__body--show' : ''}`}>
      <div className={`Tiles__body-quote ${fade ? 'Tiles__body-quote--fade' : ''}`}>
        <div className="Tiles__body-quote-text">
          &quot;{currentQuote.quote}&quot;
        </div>

        <div className="Tiles__body-quote-author">
          - {currentQuote.author}
        </div>
      </div>
    </div>
  );
}