import React from 'react';

// import {default as ChevronLeftIcon} from "./chevron-left-icon.svg";
// import {default as ChevronRightIcon} from "./chevron-right-icon.svg";
// import {default as ChevronUpIcon} from "./chevron-up-icon.svg";
// import {default as ChevronDownIcon} from "./chevron-down-icon.svg";
// import {default as MagnifyingGlassIcon} from "./magnifying-glass-icon.svg";
import { default as ChevronLeftIcon } from './ChevronLeft';
import { default as ChevronRightIcon } from './ChevronRight';
import { default as ChevronUpIcon } from './ChevronUp';
import { default as ChevronDownIcon } from './ChevronDown';
import { default as MagnifyingGlassIcon } from './MagnifyingGlass';
import Dash from './Dash';

type IconProps = {
  name:
    | 'chevron-right'
    | 'chevron-left'
    | 'chevron-up'
    | 'chevron-down'
    | 'magnifying-glass'
    | 'dash';
  className?: string;
};

const Icon = (props: IconProps) => {
  const { name, ...svgProps } = props;

  const icons: Record<IconProps['name'], any> = {
    'chevron-left': <ChevronLeftIcon {...svgProps} />,
    'chevron-right': <ChevronRightIcon {...svgProps} />,
    'chevron-up': <ChevronUpIcon {...svgProps} />,
    'chevron-down': <ChevronDownIcon {...svgProps} />,
    'magnifying-glass': <MagnifyingGlassIcon {...svgProps} />,
    'dash': <Dash {...svgProps} />,
  };

  return icons[name];
};

export default Icon;
