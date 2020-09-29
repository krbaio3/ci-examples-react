import { act, renderHook } from '@testing-library/react-hooks';
import { useLanguage } from './useLanguage.hook';
import { LanguageProvider } from './language.context';


describe('useLanguage.hook specs', () => {
  it('should return a message with language equals "es" WHEN it renders the hook', () => {
    // Arrange

    // Act
    const { result } =
      renderHook(() => useLanguage(), { wrapper: LanguageProvider });

    act(() => {
      result.current.setLanguage('es');
    });
    // Assert
    expect(result.current.message).toEqual('The current language is: es');
  });
  it('should return a message with language equals "es" WHEN it renders the hook', () => {
    // Arrange

    // Act
    const { result } =
      renderHook(() => useLanguage(), { wrapper: LanguageProvider });

    act(() => {
      result.current.setLanguage('english');
    });
    // Assert
    expect(result.current.message).toEqual('The current language is: english');
  });
});
