import { DeckProps } from './deck';
import { SpectacleMode } from '../../utils/constants';
/**
 * Spectacle DefaultDeck is a wrapper around the Deck component that adds Broadcast channel support
 * for audience and presenter modes. This is intentionally not built into the base Deck component
 * to allow for extensibility outside of core Spectacle functionality.
 */
declare const DefaultDeck: (props: DefaultDeckProps) => JSX.Element;
export default DefaultDeck;
declare type DefaultDeckProps = DeckProps & {
    toggleMode(e: unknown, newMode: SpectacleMode, senderSlideIndex?: number): void;
    overviewMode?: boolean;
    printMode?: boolean;
    exportMode?: boolean;
};
//# sourceMappingURL=default-deck.d.ts.map