import { Platform } from "react-native";

export default {
  //colors
  dark_brown: "#B06E5F",
  light_brown: "#DEA699",
  black: "#292929",
  red: "#E4405F",
  gray: "#959595",
  white: "#fff",
  sky_blue: "#DAEBE8",
  yellow: "#FF9900",
  blue: "#232F3E",

  android_regular: "montserrat_regular",
  android_medium: "montserrat_medium",
  android_semibold: "sora_medium",
  android_bold: "montserrat_bold",
  ios_regular: "Montserrat-Regular",
  ios_medium: "Montserrat-Medium",
  ios_semibold: "Sora-medium",
  ios_bold: "Montserrat-Bold",



  //fontsize
  font_10: Platform.OS == "android" ? 10 : 12,
  font_12: Platform.OS == "android" ? 12 : 14,
  font_14: Platform.OS == "android" ? 14 : 16,
  font_15: Platform.OS == "android" ? 15 : 17,
  font_16: Platform.OS == "android" ? 16 : 18,
  font_17: Platform.OS == "android" ? 17 : 19,
  font_18: Platform.OS == "android" ? 18 : 20,
  font_20: Platform.OS == "android" ? 20 : 23,
  font_25: Platform.OS == "android" ? 25 : 27
};
