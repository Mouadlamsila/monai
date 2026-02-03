/**
 * (c) 2022, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { ChakraProvider } from "@chakra-ui/react";
import { polyfill } from "mobile-drag-drop";
import { useEffect } from "react";
import "../modules/micro_bit_python/Microbit.css";
import { DialogProvider } from "../modules/micro_bit_python/common/use-dialogs";
import VisualViewPortCSSVariables from "../modules/micro_bit_python/common/VisualViewportCSSVariables";
import { deployment, useDeployment } from "../modules/micro_bit_python/deployment";
import { createWebUSBConnection } from "@microbit/microbit-connection";
import { DeviceContextProvider } from "../modules/micro_bit_python/device/device-hooks";
import { MockDeviceConnection } from "../modules/micro_bit_python/device/mock";
import DocumentationProvider from "../modules/micro_bit_python/documentation/documentation-hooks";
import SearchProvider from "../modules/micro_bit_python/documentation/search/search-hooks";
import { ActiveEditorProvider } from "../modules/micro_bit_python/editor/active-editor-hooks";
import { FileSystem } from "../modules/micro_bit_python/fs/fs";
import { FileSystemProvider } from "../modules/micro_bit_python/fs/fs-hooks";
import { createHost } from "../modules/micro_bit_python/fs/host";
import { fetchMicroPython } from "../modules/micro_bit_python/micropython/micropython";
import { LanguageServerClientProvider } from "../modules/micro_bit_python/language-server/language-server-hooks";
import { LoggingProvider } from "../modules/micro_bit_python/logging/logging-hooks";
import TranslationProvider from "../modules/micro_bit_python/messages/TranslationProvider";
import ProjectDropTarget from "../modules/micro_bit_python/project/ProjectDropTarget";
import { RouterProvider } from "../modules/micro_bit_python/router-hooks";
import SessionSettingsProvider from "../modules/micro_bit_python/settings/session-settings";
import SettingsProvider from "../modules/micro_bit_python/settings/settings";
import BeforeUnloadDirtyCheck from "../modules/micro_bit_python/workbench/BeforeUnloadDirtyCheck";
import { SelectionProvider } from "../modules/micro_bit_python/workbench/use-selection";
import Workbench from "../modules/micro_bit_python/workbench/Workbench";

const isMockDeviceMode = () =>
  // We use a cookie set from the e2e tests. Avoids having separate test and live builds.
  Boolean(
    document.cookie.split("; ").find((row) => row.startsWith("mockDevice="))
  );

const logging = deployment.logging;
const device = isMockDeviceMode()
  ? new MockDeviceConnection()
  : createWebUSBConnection({ logging });

const host = createHost(logging);
const fs = new FileSystem(logging, host, fetchMicroPython);

// If this fails then we retry on access.
fs.initializeInBackground();

const Microbit = () => {
  useEffect(() => {
    logging.event({ type: "boot" });
    device.initialize();
    return () => {
      device.dispose();
    };
  }, []);

  polyfill({
    forceApply: true,
  });

  const deployment = useDeployment();
  const { ConsentProvider } = deployment.compliance;
  return (
    <>
      <VisualViewPortCSSVariables />
      <ChakraProvider theme={deployment.chakraTheme}>
        <LoggingProvider value={logging}>
          <SettingsProvider>
            <SessionSettingsProvider>
              <TranslationProvider>
                <FileSystemProvider value={fs}>
                  <DeviceContextProvider value={device}>
                    <LanguageServerClientProvider>
                      <BeforeUnloadDirtyCheck />
                      <DocumentationProvider>
                        <SearchProvider>
                          <SelectionProvider>
                            <DialogProvider>
                              <RouterProvider>
                                <ConsentProvider>
                                  <ProjectDropTarget>
                                    <ActiveEditorProvider>
                                      <Workbench />
                                    </ActiveEditorProvider>
                                  </ProjectDropTarget>
                                </ConsentProvider>
                              </RouterProvider>
                            </DialogProvider>
                          </SelectionProvider>
                        </SearchProvider>
                      </DocumentationProvider>
                    </LanguageServerClientProvider>
                  </DeviceContextProvider>
                </FileSystemProvider>
              </TranslationProvider>
            </SessionSettingsProvider>
          </SettingsProvider>
        </LoggingProvider>
      </ChakraProvider>
    </>
  );
};

export default Microbit;
