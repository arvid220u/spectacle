import { GOTO_FINAL_STEP } from '../hooks/use-deck-state';
import { ParsedQuery } from 'query-string';
declare type SlideState = {
    slideIndex?: number;
    stepIndex?: number | typeof GOTO_FINAL_STEP;
};
export declare function mapLocationToState(location: Pick<Location, 'search'>): SlideState;
export declare function mapStateToLocation(state: SlideState): ParsedQuery<string>;
export {};
//# sourceMappingURL=query-string.d.ts.map