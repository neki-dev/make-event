## 🧩 Make Event
[![Version](https://badgen.net/npm/v/make-event)](https://npmjs.com/package/make-event)
[![Size](https://img.badgesize.io/neki-dev/make-event/master/dist/index.js)](https://github.com/neki-dev/make-event/blob/master/dist/index.js)
[![Test](https://github.com/neki-dev/make-event/actions/workflows/test.yml/badge.svg)](https://github.com/neki-dev/make-event/actions/workflows/test.yml)
[![Build](https://github.com/neki-dev/make-event/actions/workflows/build.yml/badge.svg)](https://github.com/neki-dev/make-event/actions/workflows/build.yml)

Easy implementation of event bus pattern

.

## Install

```sh
npm i make-event
```

.

## Usage
  
### Subscribe to event
```ts
const onUpdate = Events.make<number>();

onUpdate((value) => {
  console.log(value);
});
```

### Unsubcsribe from event
```ts
const onUpdate = Events.make();

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
const onUpdate = Events.make<number>();

onUpdate.invoke(10);
```

### Remove all handlers
```ts
const onUpdate = Events.make();

onUpdate.clear();
```

.

## Example
```ts
import { Events } from 'make-event';

class Player {
  public readonly onJump = Events.make<humber>();

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