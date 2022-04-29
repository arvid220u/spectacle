/// <reference types="react" />
declare type Ranges = Array<number | number[]>;
declare const CodePane: import("react").ForwardRefExoticComponent<CodePaneProps & import("react").RefAttributes<HTMLDivElement>>;
export declare type CodePaneProps = {
    children: string;
    language: string | undefined;
    theme?: Record<string, unknown>;
    stepIndex?: number;
    highlightRanges?: Ranges;
    showLineNumbers?: boolean;
};
export default CodePane;
//# sourceMappingURL=code-pane.d.ts.map