/**
 * A CoreMirror view extension that dumps the syntax tree to the
 * console. For debug use only.
 *
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

// CodeMirror maps grammar nodes to a set of predefined tags so that themes
// can be written in a language independent way. Tags can extend others so it
// is sufficient to address just the base tags in a theme but you can be more
// specific if you need to.
// This file defines all the tags and has useful documentation:
// https://github.com/codemirror/highlight/blob/main/src/highlight.ts#L480
// This file shows the mapping of grammar nodes to tags for Python
// https://github.com/codemirror/lang-python/blob/main/src/python.ts#L17
import { HighlightStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";

export const highlightStyle = () => {
  return HighlightStyle.define([
    {
      tag: tags.comment,
      color: "var(--chakra-colors-code-comment)",
    },
    { tag: tags.literal, color: "var(--chakra-colors-code-literal)" },
    { tag: tags.string, color: "var(--chakra-colors-code-string)" },
    { tag: tags.keyword, color: "var(--chakra-colors-code-keyword)" },
    { tag: tags.name, color: "var(--chakra-colors-code-default)" },
    { tag: tags.meta, color: "var(--chakra-colors-code-default)" },
    { tag: tags.operator, color: "var(--chakra-colors-code-default)" },
    { tag: tags.punctuation, color: "var(--chakra-colors-code-default)" },
    // Bracket matching
    { tag: tags.bracket, color: "var(--chakra-colors-code-default)" },
  ]);
};

export default highlightStyle;
