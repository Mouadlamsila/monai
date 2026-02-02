/**
 * (c) 2022, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { Icon, Tab, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Pane } from "./SideBar";

interface SideBarTabProps extends Pane {
  color: string;
  mb?: string;
  handleTabClick: () => void;
  active: boolean;
  tabIndex: number;
}

const SideBarTab = ({
  id,
  icon,
  title,
  mb,
  handleTabClick,
  active,
}: SideBarTabProps) => {
  const width = "5rem";
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    // Override tabindex.
    // Has no dependencies as it needs to run for every re-render.
    ref.current!.setAttribute("tabindex", "0");
  });
  return (
    <Tab
      ref={ref}
      key={id}
      color="gray.400"
      _selected={{ color: "brand.500", bg: "whiteAlpha.200", boxShadow: "inset 3px 0px 0px 0px var(--chakra-colors-brand-500)" }}
      height={width}
      width={width}
      p={0}
      position="relative"
      className="sidebar-tab" // Used for custom outline below
      onClick={handleTabClick}
      mb={mb ? mb : 0}
      aria-expanded={active ? "true" : "false"}
    >
      <VStack spacing={0} height="100%" justifyContent="center">
        <VStack spacing={1}>
          <Icon boxSize={6} as={icon} mt="3px" />
          <Text
            m={0}
            fontSize={13}
            fontWeight="500"
          >
            {title}
          </Text>
        </VStack>
      </VStack>
    </Tab>
  );
};

export default SideBarTab;
