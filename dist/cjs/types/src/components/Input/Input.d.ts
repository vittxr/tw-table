import React from 'react';
import { ComponentProps } from 'react';
interface Props extends ComponentProps<'input'> {
    className?: string;
    isLoading?: boolean;
    errorMsg?: string;
}
declare const Input: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default Input;
