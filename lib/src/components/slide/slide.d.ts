import { ReactNode } from 'react';
import { SlideId, TemplateFn } from '../deck/deck';
import { ActivationThresholds } from '../../hooks/use-steps';
import { SlideTransition } from '../transitions';
export declare type SlideContextType = {
    immediate: boolean;
    slideId: SlideId;
    isSlideActive: boolean;
    activationThresholds: ActivationThresholds;
    activeStepIndex: number;
};
export declare const SlideContext: import("react").Context<SlideContextType>;
export declare const AnimatedDiv: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, any, {}, never>;
declare const Slide: (props: SlideProps) => JSX.Element;
export default Slide;
declare type SlideProps = {
    id?: SlideId;
    className?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundOpacity?: number;
    backgroundPosition?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
    children: ReactNode;
    padding?: string | number;
    textColor?: string;
    template?: TemplateFn | ReactNode;
    transition?: SlideTransition;
};
//# sourceMappingURL=slide.d.ts.map