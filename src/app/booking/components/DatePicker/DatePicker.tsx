'use client';

import { useState } from 'react';
import { Cell } from '@telegram-apps/telegram-ui';

interface DatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
  minDate?: Date;
}

export function DatePicker({ value, onChange, minDate = new Date() }: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1);
    return {
      date,
      disabled: date < minDate
    };
  });

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
          className="p-2"
        >
          ←
        </button>
        <span className="font-semibold">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </span>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
          className="p-2"
        >
          →
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-center text-sm font-medium p-2">
            {day}
          </div>
        ))}
        {days.map(({ date, disabled }) => (
          <button
            key={date.toISOString()}
            onClick={() => !disabled && onChange(date)}
            disabled={disabled}
            className={`
              p-2 rounded-full
              ${disabled ? 'text-gray-300' : 'hover:bg-gray-100'}
              ${date.toDateString() === value.toDateString() ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
            `}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
}