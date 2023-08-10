//import { darken, lighten } from './colorManipulator';
import { spacing } from './utils';

export const BREAKPOINTS = {
  extraSmall: 320,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

export const ZINDEX = {
  base: 100,
  modal: 200,
  spinner: 300,
};

const PALETTE_COLOR_LIGHT = {
  mainColor: '#fff',
  accent: '#25d366',
  terceary: '#292f40',
  fourth: '#000',
  // textColor: "#75809a",
  textColor: 'white',
  textBtnColor: '#ffffff',
  warning: '#f7bc0c',
  //error: "#f70c0c",
  error: '#000000',
  border: 'blue',
  prueba: 'red',
  pruebaColor: 'black',
  transparent: 'transparent',
};

const PALETTE_COLOR_DARK = {
  mainColor: '#111B21',
  accent: '#fff',
  terceary: '#f4f5f6',
  fourth: '#fff',
  // textColor: "#75809a",
  textColor: 'black',
  textBtnColor: '#000',
  warning: '#f7bc0c',
  error: '#f70c0c',
  prueba: 'yellow',
  pruebaColor: 'white',
  transparent: 'transparent',
};

export const themeLight = {
  palette: {
    background: {
      main: PALETTE_COLOR_LIGHT.mainColor,
    },
    color: {
      main: PALETTE_COLOR_LIGHT.mainColor,
      accent: PALETTE_COLOR_LIGHT.accent,
      terceary: PALETTE_COLOR_LIGHT.terceary,
      fourth: PALETTE_COLOR_LIGHT.fourth,
      textColor: PALETTE_COLOR_LIGHT.textColor,
    },
    button: {
      background: {
        light: PALETTE_COLOR_LIGHT.mainColor,
        accent: PALETTE_COLOR_LIGHT.accent,
        pruebaColor: PALETTE_COLOR_LIGHT.pruebaColor,
        warning: PALETTE_COLOR_LIGHT.warning,
        error: PALETTE_COLOR_LIGHT.error,
      },
      text: {
        color: PALETTE_COLOR_LIGHT.textBtnColor,
        light: PALETTE_COLOR_LIGHT.textColor,
        accent: PALETTE_COLOR_LIGHT.mainColor,
        warning: PALETTE_COLOR_LIGHT.fourth,
        error: PALETTE_COLOR_LIGHT.fourth,
      },
      border: {
        transparent: PALETTE_COLOR_LIGHT.transparent,
      },
    },
    border: {
      main: PALETTE_COLOR_LIGHT.border,
      light: PALETTE_COLOR_LIGHT.border,

      dark: PALETTE_COLOR_LIGHT.border,
    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: '/assets/fonts/Rubik-Bold.ttf',
      italic: '/assets/fonts/Rubik-Italic.ttf',
      regular: '/assets/fonts/Rubik-Regular.ttf',
      semibold: '/assets/fonts/Rubik-SemiBold.ttf',
    },
  },
  spacing,
};

export const themeDark = {
  palette: {
    background: {
      main: PALETTE_COLOR_DARK.mainColor,
    },
    color: {
      main: PALETTE_COLOR_DARK.mainColor,
      accent: PALETTE_COLOR_DARK.accent,
      terceary: PALETTE_COLOR_DARK.terceary,
      fourth: PALETTE_COLOR_DARK.fourth,
      textColor: PALETTE_COLOR_DARK.textColor,
    },
    button: {
      background: {
        light: PALETTE_COLOR_DARK.mainColor,
        accent: PALETTE_COLOR_DARK.accent,
        pruebaColor: PALETTE_COLOR_DARK.pruebaColor,
        warning: PALETTE_COLOR_DARK.warning,
        error: PALETTE_COLOR_DARK.error,
      },
      text: {
        color: PALETTE_COLOR_DARK.textBtnColor,
        light: PALETTE_COLOR_DARK.textColor,
        accent: PALETTE_COLOR_DARK.mainColor,
        warning: PALETTE_COLOR_DARK.fourth,
        error: PALETTE_COLOR_DARK.fourth,
      },
      border: {
        transparent: PALETTE_COLOR_DARK.transparent,
      },
    },
    border: {
      main: PALETTE_COLOR_DARK.border,
      light: PALETTE_COLOR_DARK.border,
      dark: PALETTE_COLOR_DARK.border,
    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: '/assets/fonts/Rubik-Bold.ttf',
      italic: '/assets/fonts/Rubik-Italic.ttf',
      regular: '/assets/fonts/Rubik-Regular.ttf',
      semibold: '/assets/fonts/Rubik-SemiBold.ttf',
    },
  },
  spacing,
};
