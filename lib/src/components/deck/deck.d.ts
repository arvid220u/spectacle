import { ElementType, FC, RefAttributes, ReactNode, CSSProperties } from 'react';
import { CSSObject } from 'styled-components';
import { DeckStateAndActions, DeckView } from '../../hooks/use-deck-state';
import { SpectacleThemeOverrides } from '../../theme/default-theme';
import { SlideTransition } from '../transitions';
import { SwipeEventData } from 'react-swipeable';
import { MarkdownComponentMap } from '../../utils/mdx-component-mapper';
export declare type DeckContextType = {
    deckId: string | number;
    slideCount: number;
    useAnimations: boolean;
    slidePortalNode: HTMLDivElement;
    onSlideClick(e: Event, slideId: SlideId): void;
    onMobileSlide(eventData: SwipeEventData): void;
    theme?: SpectacleThemeOverrides & MarkdownThemeOverrides;
    frameOverrideStyle: CSSProperties;
    wrapperOverrideStyle: CSSProperties;
    backdropNode: HTMLDivElement;
    notePortalNode: HTMLDivElement;
    initialized: boolean;
    passedSlideIds: Set<SlideId>;
    upcomingSlideIds: Set<SlideId>;
    activeView: {
        slideId: SlideId;
        slideIndex: number;
        stepIndex: number;
    };
    pendingView: {
        slideId: SlideId;
        slideIndex: number;
        stepIndex: number;
    };
    skipTo(options: {
        slideIndex: number;
        stepIndex: number;
    }): void;
    stepForward(): void;
    advanceSlide(): void;
    regressSlide(): void;
    commitTransition(newView?: {
        stepIndex: number;
    }): void;
    cancelTransition(): void;
    template: TemplateFn | ReactNode;
    transition: SlideTransition;
    backgroundImage?: string;
};
export declare const DeckContext: import("react").Context<DeckContextType>;
export declare const DeckInternal: import("react").ForwardRefExoticComponent<DeckProps & {
    initialState?: DeckView | undefined;
    printMode?: boolean | undefined;
    exportMode?: boolean | undefined;
    overviewMode?: boolean | undefined;
    onSlideClick?(e: Event, slideId: SlideId): void;
    onMobileSlide?(eventData: SwipeEventData): void;
    disableInteractivity?: boolean | undefined;
    useAnimations?: boolean | undefined;
    notePortalNode?: HTMLDivElement | null | undefined;
    backdropStyle?: Partial<CSSStyleDeclaration> | undefined;
    onActiveStateChange?: ((activeView: DeckView) => void) | undefined;
    backgroundImage?: string | undefined;
} & RefAttributes<DeckRef>>;
export declare const Deck: FC<DeckProps & RefAttributes<DeckRef>>;
export declare type TemplateFn = (options: {
    slideNumber: number;
    numberOfSlides: number;
}) => ReactNode;
export declare type SlideId = string | number;
declare type MarkdownThemeOverrides = {
    markdownComponentMap?: MarkdownComponentMap;
};
declare type BackdropOverrides = {
    Backdrop?: ElementType;
    backdropStyle?: CSSObject;
    suppressBackdropFallback?: boolean;
};
export declare type DeckRef = Omit<DeckStateAndActions, 'pendingView' | 'commitTransition' | 'cancelTransition'> & {
    numberOfSlides: number;
};
export declare type DeckProps = {
    id?: string | number;
    className?: string;
    children: ReactNode;
    autoPlay?: boolean;
    autoPlayLoop?: boolean;
    autoPlayInterval?: number;
    theme?: SpectacleThemeOverrides & MarkdownThemeOverrides & BackdropOverrides;
    template?: TemplateFn | ReactNode;
    printScale?: number;
    overviewScale?: number;
    transition?: SlideTransition;
    suppressBackdropFallback?: boolean;
    backgroundImage?: string;
};
/**
 * These types are only used internally,
 * and are not officially part of the public API
 */
export declare type DeckInternalProps = DeckProps & {
    initialState?: DeckView;
    printMode?: boolean;
    exportMode?: boolean;
    overviewMode?: boolean;
    onSlideClick?(e: Event, slideId: SlideId): void;
    onMobileSlide?(eventData: SwipeEventData): void;
    disableInteractivity?: boolean;
    useAnimations?: boolean;
    notePortalNode?: HTMLDivElement | null;
    backdropStyle?: Partial<CSSStyleDeclaration>;
    onActiveStateChange?: (activeView: DeckView) => void;
    backgroundImage?: string;
};
export default Deck;
//# sourceMappingURL=deck.d.ts.map