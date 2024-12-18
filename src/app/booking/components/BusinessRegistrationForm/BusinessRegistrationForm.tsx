'use client';

import { useState } from 'react';
import { Cell, Button, Input } from '@telegram-apps/telegram-ui';
import type { BusinessRegistrationData } from '@/core/business/types';
import type { BusinessRegistrationFormProps } from './types';

export function BusinessRegistrationForm({ onSubmit, isLoading }: BusinessRegistrationFormProps) {
    const [formData, setFormData] = useState<BusinessRegistrationData>({
        name: '',
        category: '',
        description: ''
    });

    const handleChange = (field: keyof BusinessRegistrationData) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    };

    const handleSubmit = async () => {
        if (!formData.name.trim() || !formData.category.trim() || !formData.description.trim()) {
            return;
        }
        await onSubmit(formData);
    };

    const isValid = formData.name.trim() && formData.category.trim() && formData.description.trim();

    return (
        <>
            <Cell>
                <Input
                    type="text"
                    placeholder="Business Name"
                    value={formData.name}
                    onChange={handleChange('name')}
                    required
                />
            </Cell>
            <Cell>
                <Input
                    type="text"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange('category')}
                    required
                />
            </Cell>
            <Cell>
                <Input
                    type="text"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange('description')}
                    required
                />
            </Cell>
            <Cell>
                <Button
                    onClick={handleSubmit}
                    loading={isLoading}
                    disabled={isLoading || !isValid}
                >
                    Register Business
                </Button>
            </Cell>
        </>
    );
}