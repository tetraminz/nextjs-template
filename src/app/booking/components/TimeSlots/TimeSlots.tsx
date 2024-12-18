'use client';

import { useState } from 'react';
import { Cell } from '@telegram-apps/telegram-ui';

interface TimeSlotsProps {
  value: string;
  onChange: (time: string) => void;
  interval?: number;
  startTime?: string;
  endTime?: string;
}

export function TimeSlots({
  value,
  onChange,
  interval = 30,
  startTime = '09:00',
  endTime = '18:00'
}: TimeSlotsProps) {
  const generateTimeSlots = () => {
    const slots = [];
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    
    let currentHour = startHour;
    let currentMinute = startMinute;
    
    while (currentHour < endHour || (currentHour === endHour && currentMinute <= endMinute)) {
      const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
      slots.push(timeString);
      
      currentMinute += interval;
      if (currentMinute >= 60) {
        currentHour += Math.floor(currentMinute / 60);
        currentMinute = currentMinute % 60;
      }
    }
    
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {timeSlots.map((time) => (
        <button
          key={time}
          onClick={() => onChange(time)}
          className={`
            p-2 rounded-md text-center
            ${time === value ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}
          `}
        >
          {time}
        </button>
      ))}
    </div>
  );
}