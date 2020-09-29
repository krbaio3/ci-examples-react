import {renderHook, act} from '@testing-library/react-hooks';
import * as api from './api';
import {useFilterUsers} from './useFilterUser.hook';

describe('useFilterUsers specs', () => {
  it('should call getUsersByFilter and update users when it feeds filter equals "doe"', async () => {
    // Arrange
    const filter = 'doe';
    const getUserByFilterStub = jest
      .spyOn(api, 'getUsersByFilter')
      .mockResolvedValue(['John Doe', 'Jane Doe']);

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useFilterUsers(filter));


    // Assert
    expect(result.current.users).toEqual([]);
    await waitForNextUpdate();
    expect(getUserByFilterStub).toHaveBeenCalledWith(filter);
  });
  it('should call getUsersByFilter only one time when it calls filterUsers with same filter two times', async () => {
    // Arrange
    const filter = 'doe';
    const getUserByFilterStub = jest
      .spyOn(api, 'getUsersByFilter')
      .mockResolvedValue(['John Doe', 'Jane Doe']);

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useFilterUsers(filter));


    // Assert
    act(() => {
      result.current.setFilter(`doe`);
    });
    await waitForNextUpdate();

    expect(getUserByFilterStub).toHaveBeenCalledWith(`doe`);
    expect(getUserByFilterStub).toHaveBeenCalledTimes(1);
  });
  it('should call getUsersByFilter two times WHEN it calls with other value', async () => {
    // Arrange
    const filter = 'doe';
    const getUserByFilterStub = jest
      .spyOn(api, 'getUsersByFilter')
      .mockResolvedValue(['John Doe', 'Jane Doe']);

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useFilterUsers(filter));


    // Assert
    act(() => {
      result.current.setFilter(`smith`);
    });
    await waitForNextUpdate();

    expect(getUserByFilterStub).toHaveBeenCalledWith(`smith`);
    expect(getUserByFilterStub).toHaveBeenCalledWith(`doe`);
    expect(getUserByFilterStub).toHaveBeenCalledTimes(2);
  });
});
