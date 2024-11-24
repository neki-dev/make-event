import type { Event } from "./types";
export declare class Events {
    /**
     * Create new event
     */
    static make<T = void>(): Event<T>;
}
