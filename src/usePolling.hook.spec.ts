import { renderHook } from '@testing-library/react-hooks';
import { usePolling } from './usePolling.hook';

describe('usePolling.hook specs', () => {
  it('should return count equials 0 WHEN initialize the hook', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => usePolling());
    // Assert
    expect(result.current.count).toEqual(0);
  });

  it('should return count equals 1 WHEN it waits for next update', async () => {
    // Arrange

    // Act
    const { result, waitForNextUpdate } = renderHook(() => usePolling());

    await waitForNextUpdate();

    // Assert
    expect(result.current.count).toEqual(1);
  });
  it('should return count equals 3 WHEN it waits 3 times for next update', async () => {
    // Arrange

    // Act
    const { result, waitForValueToChange } = renderHook(() => usePolling());

    await waitForValueToChange(() => result.current.count === 3);

    // Assert
    expect(result.current.count).toEqual(3);
  });
  it('should return count equals 3 WHEN unmounts the components', async () => {
    // Arrange
    const clearIntervalStub = jest.spyOn(window, 'clearInterval');

    // Act
    const { unmount } = renderHook(() => usePolling());

    // Assert
    expect(clearIntervalStub).not.toHaveBeenCalled();

    unmount();
    expect(clearIntervalStub).toHaveBeenCalled();
  });
});
