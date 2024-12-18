'use client';

import { useState } from 'react';
import { Cell, Button } from '@telegram-apps/telegram-ui';
import { DatePicker } from './DatePicker/DatePicker';
import { TimeSlots } from './TimeSlots/TimeSlots';
import type { Business } from '@/core/business/types';

interface BookingWizardProps {
    business: Business;
    onSubmit: (data: BookingFormData) => Promise<void>;
    onCancel: () => void;
}

interface BookingFormData {
    date: Date;
    time: string;
    service: string;
}

export function BookingWizard({ business, onSubmit, onCancel }: BookingWizardProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<BookingFormData>({
        date: new Date(),
        time: '',
        service: ''
    });

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            onSubmit(formData);
        }
    };

    const renderStep = () => {
        switch(step) {
            case 1:
                return (
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Select Date</h3>
                        <DatePicker
                            value={formData.date}
                            onChange={(date) => setFormData({ ...formData, date })}
                            minDate={new Date()}
                        />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Select Time</h3>
                        <TimeSlots
                            value={formData.time}
                            onChange={(time) => setFormData({ ...formData, time })}
                        />
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Confirm Booking</h3>
                        <div className="space-y-2">
                            <p>Business: {business.name}</p>
                            <p>Date: {formData.date.toLocaleDateString()}</p>
                            <p>Time: {formData.time}</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <div className="flex justify-between mb-6">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                i <= step ? 'bg-blue-500 text-white' : 'bg-gray-200'
                            }`}
                        >
                            {i}
                        </div>
                    ))}
                </div>
                {renderStep()}
            </div>
            <div className="flex justify-between mt-6">
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={handleNext}>
                    {step === 3 ? 'Confirm Booking' : 'Next'}
                </Button>
            </div>
        </div>
    );
}