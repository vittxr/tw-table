import React from 'react';
import { useState, useEffect, useRef, forwardRef, ComponentProps } from 'react';

interface Props extends ComponentProps<'input'> {
  // id: string;
  // type: HTMLInputTypeAttribute;
  // placeholder: string;
  // defaultValue?: string;
  // required?: boolean;
  className?: string;
  // onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  errorMsg?: string;
  // onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      type,
      placeholder,
      defaultValue = '',
      required = false,
      className = '',
      onChange,
      isLoading = false,
      errorMsg,
      onKeyDown,
      autoFocus = false,
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
          className='block w-full px-3 py-2 placeholder-gray-400 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange && onChange(e);
          }}
          onKeyDown={(e) => {
            onKeyDown && onKeyDown(e);
          }}
          ref={ref}
          autoFocus={autoFocus}
        />
    );
  },
);

export default Input;
