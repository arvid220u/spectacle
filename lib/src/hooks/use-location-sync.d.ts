import { createBrowserHistory, Location } from 'history';
import { DeckView } from './use-deck-state';
import { mapLocationToState, mapStateToLocation } from '../location-map-fns/query-string';
declare function defaultMergeLocation(object: Partial<Location>, ...sources: Partial<Location>[]): Partial<Location>;
declare type LocationStateOptions = {
    setState(state: Partial<DeckView>): void;
    mapStateToLocation: typeof mapStateToLocation;
    mapLocationToState: typeof mapLocationToState;
    mergeLocation?: typeof defaultMergeLocation;
    historyFactory?: typeof createBrowserHistory;
    disableInteractivity?: boolean;
};
export default function useLocationSync({ setState, mapStateToLocation, mapLocationToState, disableInteractivity, mergeLocation, historyFactory }: LocationStateOptions): readonly [(defaultState: DeckView) => DeckView, (state: any) => void];
export {};
//# sourceMappingURL=use-location-sync.d.ts.map