import React from "react";

import {default as ChevronLeftIcon} from "./chevron-left-icon.svg";
import {default as ChevronRightIcon} from "./chevron-right-icon.svg";
import {default as ChevronUpIcon} from "./chevron-up-icon.svg";
import {default as ChevronDownIcon} from "./chevron-down-icon.svg";
import {default as MagnifyingGlassIcon} from "./magnifying-glass-icon.svg";

type IconProps = {
  name: "chevron-right" | "chevron-left" | "chevron-up" | 'chevron-down' | 'magnifying-glass';
  className?: string;
};

const Icon = (props: IconProps) => {
  const { name, ...svgProps } = props;

  const icons: Record<IconProps["name"], any> = {
    "chevron-left": <ChevronLeftIcon {...svgProps} />,
    'chevron-right': <ChevronRightIcon {...svgProps} />,
    'chevron-up': <ChevronUpIcon {...svgProps} />,
    'chevron-down': <ChevronDownIcon {...svgProps} />,
    'magnifying-glass': <MagnifyingGlassIcon {...svgProps} />,
  };

  return icons[name];
};

export default Icon;