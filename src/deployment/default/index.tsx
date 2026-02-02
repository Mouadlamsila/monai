/**
 * (c) 2021, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { ReactNode, createContext } from "react";
import { Box } from "@chakra-ui/react";
import { CookieConsent, DeploymentConfigFactory } from "..";
import { NullLogging } from "./logging";
import theme from "./theme";

const stubConsentValue: CookieConsent = {
  analytics: false,
  functional: true,
};
const stubConsentContext = createContext<CookieConsent | undefined>(
  stubConsentValue
);

const squareLogo: ReactNode = (
  <Box
    as="img"
    src="/logo micro bit/monia (4).png"
    alt="Monia Logo"
    width="100%"
    height="100%"
    objectFit="contain"
  />
);

const horizontalLogo: ReactNode = (
  <Box
    as="img"
    src="/logo micro bit/monia (4).png"
    alt="Monia Logo"
    width="100%"
    height="100%"
    objectFit="contain"
  />
);

const defaultDeploymentFactory: DeploymentConfigFactory = () => ({
  squareLogo,
  horizontalLogo,
  chakraTheme: theme,
  // This isn't ideal as it's the branded version. You can just remove the field to remove the welcome dialog.
  welcomeVideoYouTubeId: "mREwMW69qKc",
  logging: new NullLogging(),
  compliance: {
    ConsentProvider: ({ children }: { children: ReactNode }) => (
      <stubConsentContext.Provider value={stubConsentValue}>
        {children}
      </stubConsentContext.Provider>
    ),
    consentContext: stubConsentContext,
    manageCookies: undefined,
  },
});

export default defaultDeploymentFactory;
