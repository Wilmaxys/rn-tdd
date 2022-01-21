import { useSelector } from 'react-redux';
import { defaultColors, defaultTheme } from '../constants';

/**
 * Hook that returns the current theme colors
 */
const useColors = () => {
  const colors = useSelector((state) => state.user.theme?.colors);

  return colors || defaultTheme.colors;
};

export default useColors;
