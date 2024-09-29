import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import Select from '../Select';

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  onChange: (selectedId: string, inputValue: string) => void;
}

export default function InputWithSelect({
  id,
  label,
  options,
  placeholder,
  onChange,
  ...rest
}: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const isOptionsEmpty = options.length === 0

  useEffect(() => {
    if (!selectedId) return;
    onChange(selectedId, inputValue);
  }, [inputValue, setSelectedId]);

  useEffect(() => {
    if(isOptionsEmpty) return;
    setSelectedId(options[0].value);
  }, [options]);

  if (isOptionsEmpty) {
    return 
  }

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm grid grid-cols-12 gap-2">
        <div className="col-span-4">
          <Select
            id={id}
            options={options}
            onChange={(e) => {
              setSelectedId(e.target.value);
            }}
          />
        </div>

        <div className="col-span-8">
          <input
            type="text"
            name={id}
            id={id}
            className="focus:ring-sky-500 focus:border-sky-500 block w-full px-2 py-2 sm:text-sm border border-gray-300 rounded-md outline-none"
            placeholder={placeholder}
            onChange={(e) => setInputValue(e.target.value)}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
}
