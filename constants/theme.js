import {Dimensions, Platform} from 'react-native';

const colors = {
  accent: '#c31c27',
  primary: '#c31c27',
  red: '#f6685e',
  gray: '#464646',
  gray2: '#9e9e9e',
  headingLight: '#F6F7F8',
  secondary: '#c3232e',
  black: '#111111',
  warmblack: '#060606',
  primarydark: '#5b6498',
  tertiary: '#FFE358',
  white: '#FFFFFF',
  lightGrey: '#77869E',
  coolblack: '#021323',
  pureblack: '#231f20',
};
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
var tabHeight = deviceHeight * 0.08;
var screenHeight = deviceHeight - deviceHeight * 0.13;
var isIos = Platform.OS == 'ios' ? true : false;

const sizes = {
  // global sizes
  base: isIos ? 18 : 16,
  font: isIos ? 16 : 14,
  radius: isIos ? 8 : 6,
  padding: isIos ? 27 : 25,
  heading: isIos ? 17 : 15,
  inputHeight: isIos ? 32 : 30,
  // font sizes
  h1: isIos ? 28 : 26,
  h2: isIos ? 22 : 20,
  h3: isIos ? 20 : 18,
  xs: isIos ? 10 : 8,
  title: isIos ? 20 : 18,
  header: isIos ? 18 : 16,
  body: isIos ? 16 : 14,
  caption: isIos ? 14 : 12,
  small: isIos ? 12 : 10,
  xl: isIos ? 34 : 32,
};

var font = {
  roboto_light: 'Raleway-Light',
  roboto_regular: 'Raleway-Regular',
  roboto_bold: 'Raleway-Bold',
  roboto_medium: 'Raleway-SemiBold',
  intro_medium: 'Raleway-Medium',
  intro_bold: 'Raleway-Black',
  intro_regular: 'Raleway-Thin',
  lato_bold: 'Roboto-Bold',
};

var mediumIcon = deviceWidth * 0.05;

var smallIcon = deviceWidth * 0.04;

var largeIcon = deviceWidth * 0.1;
const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  header: {
    fontSize: sizes.header,
  },
  heading: {
    fontSize: sizes.heading,
  },
  title: {
    fontSize: sizes.title,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
  small: {
    fontSize: sizes.small,
  },
};

export {
  colors,
  sizes,
  fonts,
  font,
  deviceWidth,
  deviceHeight,
  isIos,
  screenHeight,
  tabHeight,
  mediumIcon,
  smallIcon,
  largeIcon,
};
