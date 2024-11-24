## 🧩 Event thread
[![Version](https://badgen.net/npm/v/event-thread)](https://npmjs.com/package/event-thread)
[![Size](https://img.badgesize.io/neki-dev/event-thread/master/dist/index.js)](https://github.com/neki-dev/event-thread/blob/master/dist/index.js)
[![Test](https://github.com/neki-dev/event-thread/actions/workflows/test.yml/badge.svg)](https://github.com/neki-dev/event-thread/actions/workflows/test.yml)
[![Build](https://github.com/neki-dev/event-thread/actions/workflows/build.yml/badge.svg)](https://github.com/neki-dev/event-thread/actions/workflows/build.yml)

Easy pattern for subscription to events

.

## Install

```sh
npm i event-thread
```

.

## Usage
  
### Subscribe to event
```ts
const onUpdate = EventThread.create<number>();

onUpdate((value) => {
  console.log(value);
});
```

### Unsubcsribe from event
```ts
const onUpdate = EventThread.create();

// method 1

const unsubscribe = onUpdate(() => {
});

unsubscribe();

// method 2

const handler = () => {
  console.log(true);
}

onUpdate(handler);

onUpdate.unsubscribe(handler);
```

### Invoke event
```ts
const onUpdate = EventThread.create<number>();

onUpdate.invoke(10);
```

### Remove all handlers
```ts
const onUpdate = EventThread.create();

onUpdate.clear();
```

.

## Example
```ts
class Player {
  public readonly onJump = EventThread.create<humber>();

  public jump(height: number) {
    this.onJump.invoke(height);
  }
}

// ...

const player = new Player();

player.onJump((height) => {
  console.log('onJump1', height);
});

const unsubscribe = player.onJump((height) => {
  console.log('onJump2', height);
});

unsubscribe();

player.jump(10);
```