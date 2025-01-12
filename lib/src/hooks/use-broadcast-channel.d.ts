import { DeckView } from './use-deck-state';
declare type MessageCallback = (message: MessageTypes) => void;
declare type MessageTypes = {
    type: 'SYNC';
    payload: Partial<DeckView>;
} | {
    type: 'SYNC_REQUEST';
    payload?: never;
};
export default function useBroadcastChannel(channelName: string, onMessage?: MessageCallback, deps?: never[]): readonly [<TType extends "SYNC" | "SYNC_REQUEST">(type: TType, payload?: MessageTypes['payload']) => void, string];
export {};
//# sourceMappingURL=use-broadcast-channel.d.ts.map