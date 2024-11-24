import type { Event, EventHandler } from "./types";

export class EventThread {
  /**
   * Create new event
   */
  public static create<T = void>(): Event<T> {
    const handlers = new Set<EventHandler<T>>();

    const wrapper = function on(handler: EventHandler<T>) {
      handlers.add(handler);

      return function unsubscribe() {
        wrapper.unsubscribe(handler);
      };
    };

    wrapper.unsubscribe = function unsubscribe(handler: EventHandler<T>): void {
      handlers.delete(handler);
    };

    wrapper.invoke = function invoke(payload: T): void {
      handlers.forEach((handler) => {
        handler(payload);
      });
    };

    wrapper.clear = function clear(): void {
      handlers.clear();
    };

    return wrapper;
  }
}
