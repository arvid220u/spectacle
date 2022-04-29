/// <reference types="react" />
export declare type CircleProps = {
    size: number;
    color: string;
    active: boolean;
};
export declare const Circle: import("styled-components").StyledComponent<"div", any, CircleProps, never>;
export declare type ProgressProps = {
    color?: string;
    size?: number;
};
declare const Progress: import("react").ForwardRefExoticComponent<ProgressProps & import("react").RefAttributes<HTMLDivElement>>;
export default Progress;
//# sourceMappingURL=progress.d.ts.map