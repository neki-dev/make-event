import type { Event } from "./types";
export declare class EventThread {
    /**
     * Create new event
     */
    static create<T = void>(): Event<T>;
}
