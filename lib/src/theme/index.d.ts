import { SpectacleThemeOverrides } from './default-theme';
declare type MergeOptions = {
    theme: SpectacleThemeOverrides;
    printMode?: boolean;
};
export declare function mergeTheme({ theme, printMode }: MergeOptions): {
    size: {
        width: number;
        height: number;
        maxCodePaneHeight: number;
    };
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        quinary: string;
    };
    fonts: {
        header: string;
        text: string;
        monospace: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        text: string;
        monospace: string;
    };
    space: number[];
};
export {};
//# sourceMappingURL=index.d.ts.map