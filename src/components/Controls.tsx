import Tooltip from '@/components/Tooltip';

type TileControlsProps = {
	tilesToggled: boolean;
	hideControls: boolean;
	slowLoad: boolean;
	handleQuoteNext: () => void;
	handleQuotePrevious: () => void;
	toggleControls: () => void;
	toggleBackground: () => void;
	toggleFullScreen: () => void;
};

export default function TileControls({
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
		<>
			<div
				className={`Tiles__footer ${
					tilesToggled && hideControls ? 'Tiles__footer--show' : ''
				}`}
			>
				<div className="Tiles__footer-controls">
					<div className="Tiles__footer-control">
						<Tooltip direction="top" delay={0} content="Show controls">
							<div
								tabIndex={0}
								role="button"
								className="Key Key--show Tiles__key-sc Tiles__key-sc--show"
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') toggleControls();
								}}
								onClick={() => toggleControls()}
							>
								<div className="Key__icon Tiles__key-sc-icon">
									<i className="fa-solid fa-eye"></i>
								</div>

								<span className="Key__info Tiles__key-sc-label">
									show controls
								</span>
							</div>
						</Tooltip>
					</div>
				</div>
			</div>

			<div
				className={`Tiles__footer ${
					tilesToggled && !hideControls ? 'Tiles__footer--show' : ''
				} ${slowLoad ? 'Tiles__footer--slow-load' : ''}`}
			>
				<div className="Tiles__footer-controls">
					<div className="Tiles__footer-control Tiles__footer-control--previous">
						<Tooltip direction="top" delay={0} content="Previous quote">
							<div
								tabIndex={0}
								role="button"
								className="Key Tiles__key-sc"
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') handleQuotePrevious();
								}}
								onClick={() => handleQuotePrevious()}
							>
								<div className="Key__icon Tiles__key-sc-icon">
									<i className="fa-solid fa-caret-left" />
								</div>

								<span className="Key__info Tiles__key-sc-label">previous</span>
							</div>
						</Tooltip>
					</div>

					<div className="Tiles__footer-control Tiles__footer-control--next">
						<Tooltip direction="top" delay={0} content="Next quote">
							<div
								tabIndex={0}
								role="button"
								className="Key Tiles__key-sc"
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') handleQuoteNext();
								}}
								onClick={() => handleQuoteNext()}
							>
								<div className="Key__icon Tiles__key-sc-icon">
									<i className="fa-solid fa-caret-right" />
								</div>

								<span className="Key__info Tiles__key-sc-label">next</span>
							</div>
						</Tooltip>
					</div>

					<div className="Tiles__footer-control Tiles__footer-control--hide">
						<Tooltip direction="top" delay={0} content="Hide controls">
							<div
								tabIndex={0}
								role="button"
								className="Key Tiles__key-sc"
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') toggleControls();
								}}
								onClick={() => toggleControls()}
							>
								<div className="Key__icon Tiles__key-sc-icon">
									<i className="fa-solid fa-eye-slash"></i>
								</div>

								<span className="Key__info Tiles__key-sc-label">
									hide controls
								</span>
							</div>
						</Tooltip>
					</div>

					<div className="Tiles__footer-control Tiles__footer-control--background">
						<Tooltip direction="top" delay={0} content="Toggle background">
							<div
								tabIndex={0}
								role="button"
								className="Key Tiles__key-sc"
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') toggleBackground();
								}}
								onClick={() => toggleBackground()}
							>
								<div className="Key__icon Tiles__key-sc-icon">
									<i className="fa-solid fa-images"></i>
								</div>

								<span className="Key__info Tiles__key-sc-label">
									background
								</span>
							</div>
						</Tooltip>
					</div>

					<div className="Tiles__footer-control Tiles__footer-control--fullscreen">
						<Tooltip direction="top" delay={0} content="Toggle fullscreen">
							<div
								tabIndex={0}
								role="button"
								className="Key Tiles__key-sc"
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') toggleFullScreen();
								}}
								onClick={() => toggleFullScreen()}
							>
								<div className="Key__icon Tiles__key-sc-icon">
									<i className="fa-solid fa-expand"></i>
								</div>

								<span className="Key__info Tiles__key-sc-label">
									fullscreen
								</span>
							</div>
						</Tooltip>
					</div>
				</div>
			</div>
		</>
	);
}
