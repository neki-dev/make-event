import type { Event } from "./types";
export declare class EventTrain {
    /**
     * Create new event
     */
    static create<T = void>(): Event<T>;
}
