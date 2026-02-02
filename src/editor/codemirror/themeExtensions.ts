/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { EditorView } from "@codemirror/view";

export const themeExtensions = (fontSize: string) => {
  const fontFamily = "var(--chakra-fonts-code)";
  return EditorView.theme({
    ".cm-content": {
      fontSize,
      fontFamily,
      padding: 0,
      backgroundColor: "var(--chakra-colors-code-bg)",
      color: "var(--chakra-colors-code-default)",
      caretColor: "var(--chakra-colors-code-default)",
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "var(--chakra-colors-code-default)",
    },
    ".cm-gutters": {
      // Make it easier to copy code dragging from the left without line numbers.
      userSelect: "none",
      // Must be opaque for horizontal scrolling to work.
      backgroundColor: "var(--chakra-colors-code-bg)", // Match editor bg
      fontSize,
      fontFamily,
      paddingRight: "1rem",
      border: "unset",
      color: "var(--chakra-colors-gray-500)",
    },
    // Widths to accomodate two gutters (lint and line numbers).
    ".cm-gutter.cm-gutter-lint": {
      width: "1.35em", // Needs to scale with the markers which are sized in em.
      minWidth: "unset",
    },
    ".cm-gutter": {
      minWidth: "2.2rem",
    },
    // Don't show markers for diagnostics at info level.
    ".cm-lint-marker-info": {
      display: "none",
    },
    ".cm-activeLine": {
      backgroundColor: "var(--chakra-colors-code-activeLine)",
      outline: "none",
    },
    ".cm-activeLineGutter": {
      backgroundColor: "var(--chakra-colors-code-activeLine)",
      color: "var(--chakra-colors-code-default)",
    },
    // $wrap can't be styled here, see App.css.

    // This block restyles autocomplete and aims for a rectangular arrangement
    // rather than the default where the docs are positioned just offset from
    // the item in the completion list.
    ".cm-completionIcon": {
      // Seems broken by default
      width: "auto",
      // But they're also cryptic, so hide until we can improve.
      display: "none",
    },
    ".cm-completionLabel": {
      fontSize,
      fontFamily,
    },
    ".cm-tooltip": {
      backgroundColor: "var(--chakra-colors-bg-surface) !important",
      border: "1px solid var(--chakra-colors-border-subtle)",
      color: "var(--chakra-colors-text-primary)", // Need check if this token exists, fallback to body text
    },
    ".cm-tooltip-autocomplete.cm-tooltip": {
      border: "none",
    },
    ".cm-tooltip-autocomplete.cm-tooltip > *": {
      border: "1px solid var(--chakra-colors-border-subtle)",
    },
    ".cm-tooltip.cm-completionInfo": {
      width: "20rem",
      height: "10.5rem",
      top: "0 !important",
      overflowY: "auto",
      backgroundColor: "var(--chakra-colors-bg-surface)",
      color: "var(--chakra-colors-gray-800)", // TODO: Semantic token for text
    },
    // ... rest unchanged implies I should cover it or use replace carefully.
    // I am replacing the whole block.
    ".cm-tooltip.cm-tooltip-autocomplete > ul": {
      height: "10.5rem",
      maxHeight: "10.5rem",
    },
    ".cm-tooltip.cm-tooltip-autocomplete > ul > li[aria-selected]": {
      background: "var(--chakra-colors-brand-100)",
      color: "var(--chakra-colors-brand-900)",
    },
    ".cm-tooltip.cm-completionInfo.cm-completionInfo-right": {
      borderLeft: "none",
    },
    ".cm-tooltip.cm-completionInfo.cm-completionInfo-right-narrow": {
      position: "relative",
      left: 0,
      maxWidth: "unset !important",
    },
    ".cm-tooltip.cm-completionInfo.cm-completionInfo-left": {
      borderRight: "none",
    },
    ".cm-tooltip.cm-completionInfo.cm-completionInfo-left-narrow": {
      position: "relative",
      left: 0,
      maxWidth: "unset !important",
    },
    ".cm-widgetBuffer": {
      display: "inline",
    },
    ".cm-line": {
      transition: "none",
      padding: "0 2px 0 4px",
    },
    ".cm-diagnosticAction": {
      marginLeft: 0,
      display: "block",
      backgroundColor: "unset",
      color: "var(--chakra-colors-brand-500)",
      fontSize: "0.9em",
      marginTop: "0.2em",
    },
    ".cm-diagnosticAction:hover": {
      textDecoration: "underline",
    },
    "ul:focus [aria-selected] .cm-diagnosticAction": {
      color: "var(--chakra-colors-brand-700)",
    },
  });
};

export default themeExtensions;
