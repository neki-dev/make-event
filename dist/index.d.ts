import type { Event, EventHandler } from "./types";
export declare class Events {
    /**
     * Create new event
     */
    static make<T = void>(): Event<T>;
}
export type { Event, EventHandler, };
