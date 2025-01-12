import { SlideId } from '../components/deck/deck';
export declare const GOTO_FINAL_STEP: number;
export declare type DeckView = {
    slideId?: SlideId;
    slideIndex: number;
    stepIndex: number;
};
export declare type DeckState = {
    initialized: boolean;
    activeView: DeckView;
    pendingView: DeckView;
};
export default function useDeckState(userProvidedInitialState: DeckView): {
    initializeTo: (payload: Partial<DeckView>) => void;
    skipTo: (payload: Partial<DeckView>) => void;
    stepForward: () => void;
    stepBackward: () => void;
    advanceSlide: () => void;
    regressSlide: (payload?: Pick<DeckView, "stepIndex"> | undefined) => void;
    commitTransition: (payload?: DeckView | undefined) => void;
    cancelTransition: () => void;
    initialized: boolean;
    pendingView: DeckView;
    activeView: DeckView;
};
export declare type DeckStateAndActions = ReturnType<typeof useDeckState>;
//# sourceMappingURL=use-deck-state.d.ts.map