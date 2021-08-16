import { renderHook, act } from '@testing-library/react-hooks';
import useModal from './useModal';

describe('useModal', () => {
  it('should open modal', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isOpen).toBeFalsy();

    act(() => result.current.toggleModal());

    expect(result.current.isOpen).toBeTruthy();
  });

  it('should close modal', () => {
    const { result } = renderHook(() => useModal(true));

    expect(result.current.isOpen).toBeTruthy();

    act(() => result.current.toggleModal());

    expect(result.current.isOpen).toBeFalsy();
  });
});
