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
