import React from 'react';
import { useState, useEffect, useRef, forwardRef, ComponentProps } from 'react';

interface Props extends ComponentProps<'input'> {
  className?: string;
  isLoading?: boolean;
  errorMsg?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      type,
      placeholder,
      defaultValue = '',
      required = false,
      onChange,
      isLoading = false,
      onKeyDown,
      autoFocus = false,
      ...rest
    },
    refProp,
  ) => {
    const localRef = useRef<HTMLInputElement>(null);
    const ref = refProp || localRef;

    const [inputValue, setInputValue] = useState<
      string | number | readonly string[]
    >(defaultValue);

    useEffect(() => {
      setInputValue(defaultValue);
    }, [defaultValue]);

    if (isLoading) {
      return (
        <input
          className='block w-full px-3 py-2 border-2 border-gray-300 rounded-md skeleton'
          disabled
        />
      );
    }

    return (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          autoComplete={id}
          value={inputValue}
          required={required}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange && onChange(e);
          }}
          onKeyDown={(e) => {
            onKeyDown && onKeyDown(e);
          }}
          ref={ref}
          autoFocus={autoFocus}
          {...rest}
          className='bg-gray-200 dark:bg-gray-700 block w-full px-3 py-2 placeholder-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
        />
    );
  },
);

export default Input;
