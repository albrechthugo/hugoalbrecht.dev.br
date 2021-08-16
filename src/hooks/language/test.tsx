import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useLanguage from './useLanguage';

describe('useLanguage', () => {
  it('should return selected language on form equals `ptBr` by default and set selected language on form', () => {
    const { result } = renderHook(() => useLanguage());

    expect(result.current.selectedLanguageOnForm).toEqual('ptBr');

    act(() => result.current.setSelectedLanguageOnForm('enUs'));

    expect(result.current.selectedLanguageOnForm).toEqual('enUs');
  });
});
