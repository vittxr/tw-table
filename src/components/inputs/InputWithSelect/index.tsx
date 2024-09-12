import React from 'react';
import Select from '../Select';

interface Props {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export default function InputWithSelect({
  id,
  label,
  options,
  placeholder,
}: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm flex flex-row space-x-2">
        <Select id={id} options={options} />

        <input
          type="text"
          name={id}
          id={id}
          className="focus:ring-sky-500 focus:border-sky-500 block w-full px-2 py-2 sm:text-sm border border-gray-300 rounded-md outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
