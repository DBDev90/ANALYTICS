import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  COLORS: {
    /* Application */
    primary: "#0051A2",
    primaryHover: "#6696c7",
    primaryBackgroundExtraLight: "#003061",
    background: "#002040",
    textColor400: "#c2c2c2",
    textColor500: "#cfcfcf",
    borderColor: "#2b374a",
    danger: "#D1493D",
    success: "#2B825C",
    warning: "#eba800",
    white: "#FFFFFF",

    /* Application Components */
    buttonBackground: "#0051A2",
    buttonColor: "#FFFFFF",
    buttonHover: "#3373b4",
    inputBackground: "transparent",
    inputBackgroundHover: "transparent",
    inputColor: "#cfcfcf",
    inputBorderColor: "#3373b4",
    inputBorderColorFocus: "#3373b4",
    inputPlaceholderColor: "#a3a3a3",
    tableHeaderBackground: "#003061",
    tableHeaderBorderColor: "#2b374a",
    tableRowHover: "#335980",

    /* Layout */
    sidebarBackground: "#002040",
    sidebarColor: "#E2E8F0",
    sidebarBackgroundHover: "#003061",
    sidebarBorderColor: "#2b374a",
    navbarBackground: "#002040",
    navbarColor: "#cfcfcf",
    navbarBackgroundHover: "#003061",

    /* Pages - Auth */
    authCardTitleColor: "#c9cbcf",
    authCardSubTitleColor: "#7d848c",
    authErrorAlertBackground: "#961408ed",
    authErrorAlertColor: "#FFFFFF",
  },
  FONT_SIZES: {
    sm: ".9rem",
    md: "1rem",
    lg: "1.3rem",
    xl: "1.6rem",
    xxl: "2rem",
  },
};
