## 🧩 Event train
[![Version](https://badgen.net/npm/v/event-train)](https://npmjs.com/package/event-train)
[![Size](https://img.badgesize.io/neki-dev/event-train/master/dist/index.js)](https://github.com/neki-dev/event-train/blob/master/dist/index.js)
[![Test](https://github.com/neki-dev/event-train/actions/workflows/test.yml/badge.svg)](https://github.com/neki-dev/event-train/actions/workflows/test.yml)
[![Build](https://github.com/neki-dev/event-train/actions/workflows/build.yml/badge.svg)](https://github.com/neki-dev/event-train/actions/workflows/build.yml)

Easy implementation of event bus pattern

.

## Install

```sh
npm i event-train
```

.

## Usage
  
### Subscribe to event
```ts
const onUpdate = EventTrain.create<number>();

onUpdate((value) => {
  console.log(value);
});
```

### Unsubcsribe from event
```ts
const onUpdate = EventTrain.create();

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
const onUpdate = EventTrain.create<number>();

onUpdate.invoke(10);
```

### Remove all handlers
```ts
const onUpdate = EventTrain.create();

onUpdate.clear();
```

.

## Example
```ts
class Player {
  public readonly onJump = EventTrain.create<humber>();

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