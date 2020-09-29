import {renderHook, act} from '@testing-library/react-hooks';
import {useUser} from './user.hooks';
import { User } from './model';

describe('useUser specs', () =>{
  it(`should return user with initial values and setUser method when it calls it`,  async () =>{
    // Arrange
    const initialUser:User = {
      name: `John`,
      surname: `Doe`
    };

    const expectUser = {
      name: 'Jane',
      surname: 'Smith',
    };

    // Act
    const {result, waitForNextUpdate} = renderHook(()=> useUser(initialUser));

    expect(result.current.user).toEqual(initialUser);
    
    await waitForNextUpdate();

    // Assert
    expect(result.current.user).toEqual(expectUser);
    expect(result.current.setUser).toEqual(expect.any(Function));
  });
  it(`should update the user when setUser is called`, () =>{
    // Arrange
    const initalUser:User = {
      name: `John`,
      surname: `Doe`
    };

    const newDataUser: User = {
      name: 'new name',
      surname: 'new surname',
    }
    // Act
    const {result} = renderHook(()=> useUser(initalUser));

    act(()=>{
      result.current.setUser(newDataUser);
    });

    // Assert
    expect(result.current.user).toEqual(newDataUser);
    expect(result.current.setUser).toEqual(expect.any(Function));
  });
});
