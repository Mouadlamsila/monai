/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { extendTheme, withDefaultVariant } from "@chakra-ui/react";

import colors from "./colors";
import Alert from "./components/alert";
import Button from "./components/button";
import Container from "./components/container";
import Tabs from "./components/tabs";
import Text from "./components/text";
import fontSizes from "./font-sizes";
import fonts from "./fonts";
import radii from "./radii";
import sizes from "./sizes";
import space from "./space";

// See https://chakra-ui.com/docs/theming/customize-theme
const overrides = {
  fonts,
  fontSizes,
  sizes,
  space,
  radii,
  colors,
  semanticTokens: {
    colors: {
      "bg.canvas": {
        default: "#FFFFFF",
        _dark: "#121212",
      },
      "bg.surface": {
        default: "#F0F2F5",
        _dark: "#1e1e1e",
      },
      "border.subtle": {
        default: "#E2E8F0",
        _dark: "#2D2D2D",
      },
      "code.bg": {
        default: "#FFFFFF",
        _dark: "#121212",
      },
      "text.primary": {
        default: "#1A202C", // gray.800
        _dark: "#EDF2F7", // gray.100
      },
      "code.comment": {
        default: "#008000", // VSCode Light Green
        _dark: "#6A9955", // VSCode Dark Green
      },
      "code.default": {
        default: "#000000",
        _dark: "#D4D4D4", // VSCode Dark Default Text
      },
      "code.keyword": {
        default: "#AF00DB", // VSCode Light Purple
        _dark: "#C586C0", // VSCode Dark Pink/Purple
      },
      "code.literal": {
        default: "#098658", // VSCode Light Green (Numbers)
        _dark: "#B5CEA8", // VSCode Dark Light Green
      },
      "code.string": {
        default: "#A31515", // VSCode Light Red
        _dark: "#CE9178", // VSCode Dark Orange
      },
      "code.selection": {
        default: "#ADD6FF", // VSCode Light Selection
        _dark: "#264F78", // VSCode Dark Selection
      },
      "code.activeLine": {
        default: "#EDF2F7", // gray.100
        _dark: "#2D2D2D",
      },
      // Error is usually red.500, we can define a token if needed, but highlightStyle usually uses a specific color or just error.
      // For now, these cover the highlightStyle.ts usage.
    }
  },
  components: {
    Alert,
    Button,
    Container,
    Tabs,
    Text,
  },
};

export default extendTheme(
  overrides,
  withDefaultVariant({
    variant: "outline",
    components: ["Button", "IconButton"],
  })
);
