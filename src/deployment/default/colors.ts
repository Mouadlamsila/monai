/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { theme } from "@chakra-ui/theme";

const colors = {
  brand: {
    50: "#E3FAE9",
    100: "#B9F2C7",
    200: "#8CE9A3",
    300: "#60E080",
    400: "#32D85D",
    500: "#25D366", // WhatsApp Green
    600: "#1DA951",
    700: "#16803D",
    800: "#0E5629",
    900: "#072D15",
  },
  gray: {
    ...theme.colors.gray,
    10: "#FAFAFA",
    25: "#F0F2F5",
    50: "#DFE2E8",
  },
  code: {
    blockBorder: {
      default: theme.colors.gray[200],
      _dark: "#2D2D2D",
    },
    blockBackground: {
      default: "rgba(185, 185, 185, 0.1)",
      _dark: "rgba(255, 255, 255, 0.05)",
    },
    blockBackgroundActive: {
      default: "rgba(37, 211, 102, 0.1)",
      _dark: "rgba(37, 211, 102, 0.1)",
    },
    blockBorderActive: {
      default: "#25D366",
      _dark: "#25D366",
    },

    comment: {
      default: "gray",
      _dark: "#75715E",
    },
    default: {
      default: "black",
      _dark: "#F8F8F2",
    },
    keyword: {
      default: "#D73A49", // GitHub Red/Pink
      _dark: "#F92672", // Monokai Pink
    },
    literal: {
      default: "#005CC5", // GitHub Blue
      _dark: "#AE81FF", // Monokai Purple
    },
    string: {
      default: "#22863A", // GitHub Green
      _dark: "#25D366", // WhatsApp Green (Emerald-ish)
    },
    activeLine: {
      default: theme.colors.gray[100],
      _dark: "#2D2D2D",
    },

    error: theme.colors.red[500],
  },
};

export default colors;
