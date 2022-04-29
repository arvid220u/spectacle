export declare const DEFAULT_SLIDE_ELEMENT_INDEX = -1;
export declare const DEFAULT_SLIDE_INDEX = 0;
export declare const SYSTEM_FONT = "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Helvetica Neue\", Helvetica, sans-serif";
export declare const KEYBOARD_SHORTCUTS: {
    PRESENTER_MODE: string;
    OVERVIEW_MODE: string;
    PRINT_MODE: string;
    EXPORT_MODE: string;
    TAB_FORWARD_OVERVIEW_MODE: string;
    TAB_BACKWARD_OVERVIEW_MODE: string;
    SELECT_SLIDE_OVERVIEW_MODE: string;
};
export declare const SPECTACLE_MODES: {
    readonly DEFAULT_MODE: "DEFAULT_MODE";
    readonly PRESENTER_MODE: "PRESENTER_MODE";
    readonly OVERVIEW_MODE: "OVERVIEW_MODE";
    readonly PRINT_MODE: "PRINT_MODE";
    readonly EXPORT_MODE: "EXPORT_MODE";
};
declare type ValuesOf<T> = T[keyof T];
export declare type SpectacleMode = ValuesOf<typeof SPECTACLE_MODES>;
export {};
//# sourceMappingURL=constants.d.ts.map