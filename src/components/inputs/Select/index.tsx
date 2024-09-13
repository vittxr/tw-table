import React, { SelectHTMLAttributes } from 'react';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: string;
  options: { value: string; label: string }[];
}

const Select = ({ label, id, options, ...rest }: Props) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={id}
        name={id}
        autoComplete={id}
        className="w-full focus:ring-sky-500 focus:border-sky-500 h-full px-2 py-2 border border-gray-300 text-gray-500 sm:text-sm rounded-md outline-none appearance-none"
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
