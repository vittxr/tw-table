import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import Select from '../Select';
import Input from '../Input/Input';

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
      <label htmlFor={id} className="block text-sm font-medium">
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
          <Input 
            type="text"
            name={id}
            id={id}
            placeholder={placeholder}
            onChange={(e) => setInputValue(e.target.value)}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
}
