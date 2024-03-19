import COLORS from '../common/colors';
import FIXED_VALUES from '../common/fixedValues';
import FONT_SIZE from '../common/fontSize';

const colors = {
  ...COLORS,
  primary: COLORS.blazingOrange,
  secondary: COLORS.bermuda,
  tertiary: COLORS.pristine,
  quaternary: COLORS.honeyPeach,
};

const lightTheme = {
  colors,
  fontSize: FONT_SIZE,
  fixedValues: FIXED_VALUES,
};

export default lightTheme;
