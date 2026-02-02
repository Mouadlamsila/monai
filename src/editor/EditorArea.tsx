/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { Box, BoxProps, Flex, useMediaQuery, useColorMode, IconButton } from "@chakra-ui/react";
import React, { ForwardedRef } from "react";
import { useIntl } from "react-intl";
import { widthXl } from "../common/media-queries";
import HideSplitViewButton from "../common/SplitView/HideSplitViewButton";
import { topBarHeight } from "../deployment/misc";
import ZoomControls from "../editor/ZoomControls";
import ProjectNameEditable from "../project/ProjectNameEditable";
import { WorkbenchSelection } from "../workbench/use-selection";
import ActiveFileInfo from "./ActiveFileInfo";
import EditorContainer from "./EditorContainer";
import UndoRedoControls from "./UndoRedoControls";
import { FiMoon, FiSun } from "react-icons/fi";

interface EditorAreaProps extends BoxProps {
  selection: WorkbenchSelection;
  onSelectedFileChanged: (filename: string) => void;
  simulatorShown: boolean;
  onSimulatorExpand: () => void;
}

/**
 * Wrapper for the editor that integrates it with the app settings
 * and wires it to the currently open file.
 */
const EditorArea = React.forwardRef(
  (
    {
      selection,
      onSelectedFileChanged,
      simulatorShown,
      onSimulatorExpand,
      ...props
    }: EditorAreaProps,
    simulatorButtonRef: ForwardedRef<HTMLButtonElement>
  ) => {
    const intl = useIntl();
    const [isWideScreen] = useMediaQuery(widthXl, { ssr: false });
    const { colorMode, toggleColorMode } = useColorMode();

    return (
      <Flex
        height="100%"
        flexDirection="column"
        {...props}
        backgroundColor="bg.canvas" // Semantic token
      >
        <Flex
          as="section"
          aria-label={intl.formatMessage({ id: "project-header" })}
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          pr={!simulatorShown ? 0 : isWideScreen ? 10 : 5}
          pl={isWideScreen ? "3rem" : "2rem"}
          py={2}
          height={topBarHeight}
          borderBottom="1px solid"
          borderColor="border.subtle"
        >
          <Flex alignItems="center">
            <ProjectNameEditable
              color="text.primary"
              opacity="100%"
              fontSize="xl"
              fontWeight="600"
              data-testid="project-name"
              clickToEdit
            />
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === "dark" ? <FiSun /> : <FiMoon />}
              onClick={toggleColorMode}
              variant="ghost"
              size="sm"
              ml={4}
              borderRadius="full"
            />
          </Flex>

          <ActiveFileInfo
            filename={selection.file}
            onSelectedFileChanged={onSelectedFileChanged}
          />
          <Flex alignItems="center">
            <ZoomControls display={["none", "none", "none", "flex"]} />
            {!simulatorShown && (
              <HideSplitViewButton
                aria-label={intl.formatMessage({ id: "simulator-expand" })}
                onClick={onSimulatorExpand}
                splitViewShown={simulatorShown}
                direction="expandLeft"
                text={intl.formatMessage({ id: "simulator-title" })}
                ml={5}
                boxShadow="none"
                ref={simulatorButtonRef}
              />
            )}
          </Flex>
        </Flex>
        {/* Removed the separate line Box as we used borderBottom on the header */}

        <Box position="relative" flex="1 1 auto" height={0}>
          <UndoRedoControls
            display={["none", "none", "none", "flex"]}
            zIndex="1"
            top={6}
            right={isWideScreen ? 10 : 5}
            position="absolute"
          />
          <EditorContainer selection={selection} />
        </Box>
      </Flex>
    );
  }
);

export default EditorArea;
