/// <reference types="react" />
import { SlideId } from '../components/deck/deck';
export declare const PLACEHOLDER_CLASS_NAME = "spectacle-v7-slide";
export declare function useCollectSlides(): readonly [import("react").Dispatch<import("react").SetStateAction<HTMLElement | null | undefined>>, SlideId[], boolean];
export declare function useSlide(userProvidedId?: SlideId): {
    slideId: SlideId;
    placeholder: JSX.Element;
};
//# sourceMappingURL=use-slides.d.ts.map