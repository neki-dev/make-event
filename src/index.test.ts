import { EventThread } from '../src';

describe('event thread', () => {
  it('should invoke event', () => {
    const handleTest = jest.fn();
    const onTest = EventThread.create();

    onTest(handleTest);

    onTest.invoke();

    expect(handleTest).toHaveBeenCalledTimes(1);
  });

  it('should invoke event with payload', () => {
    const handleTest = jest.fn();
    const onTest = EventThread.create<number>();

    onTest(handleTest);

    onTest.invoke(10);

    expect(handleTest).toHaveBeenCalledWith(10);
  });

  it('should call all handlers on invoke', () => {
    const handleTest1 = jest.fn();
    const handleTest2 = jest.fn();
    const onTest = EventThread.create();

    onTest(handleTest1);
    onTest(handleTest2);

    onTest.invoke();

    expect(handleTest1).toHaveBeenCalledTimes(1);
    expect(handleTest2).toHaveBeenCalledTimes(1);
  });

  it('should use unique handlers', () => {
    const handleTest = jest.fn();
    const onTest = EventThread.create();

    onTest(handleTest);
    onTest(handleTest);

    onTest.invoke();

    expect(handleTest).toHaveBeenCalledTimes(1);
  });

  it('should unsubscribe', () => {
    const handleTest1 = jest.fn();
    const handleTest2 = jest.fn();
    const onTest = EventThread.create();

    onTest(handleTest1);

    const off = onTest(handleTest2);
    off();
    
    onTest.invoke();

    expect(handleTest1).toHaveBeenCalled();
    expect(handleTest2).not.toHaveBeenCalled();
  });

  it('should clear handlers', () => {
    const handleTest1 = jest.fn();
    const handleTest2 = jest.fn();
    const onTest = EventThread.create();

    onTest(handleTest1);
    onTest(handleTest2);
    
    onTest.clear();
    onTest.invoke();

    expect(handleTest1).not.toHaveBeenCalled();
    expect(handleTest2).not.toHaveBeenCalled();
  });
});
