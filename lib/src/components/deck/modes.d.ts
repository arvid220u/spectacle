import { SpectacleMode } from '../../utils/constants';
declare type ModeSearchParams = {
    presenterMode?: boolean;
    overviewMode?: boolean;
    printMode?: boolean;
    exportMode?: boolean;
};
export declare function modeSearchParamForKey(key: SpectacleMode): ModeSearchParams;
export declare function modeKeyForSearchParam({ presenterMode, overviewMode, printMode, exportMode }: ModeSearchParams): "DEFAULT_MODE" | "PRESENTER_MODE" | "OVERVIEW_MODE" | "PRINT_MODE" | "EXPORT_MODE";
export {};
//# sourceMappingURL=modes.d.ts.map