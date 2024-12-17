import { useRef } from 'react';
import { Cell, Button, Input } from '@telegram-apps/telegram-ui';

export function BusinessRegistrationForm({ onSubmit, isLoading }: BusinessRegistrationFormProps) {
    const businessInfo = useRef<BusinessRegistrationData>({
        name: '',
        category: '',
        description: '',
    });

    const forceUpdate = useState()[1]; // Обновить компонент вручную

    const handleChange = (field: keyof BusinessRegistrationData) => (e: ChangeEvent<HTMLInputElement>) => {
        businessInfo.current[field] = e.target.value;
        forceUpdate({});
    };

    const handleSubmit = async () => {
        const { name, category, description } = businessInfo.current;

        if (!name.trim() || !category.trim() || !description.trim()) {
            return;
        }
        await onSubmit(businessInfo.current);
    };

    return (
        <>
            <Cell>
                <Input
                    type="text"
                    placeholder="Business Name"
                    defaultValue={businessInfo.current.name}
                    onChange={handleChange('name')}
                    required
                />
            </Cell>
            <Cell>
                <Input
                    type="text"
                    placeholder="Category"
                    defaultValue={businessInfo.current.category}
                    onChange={handleChange('category')}
                    required
                />
            </Cell>
            <Cell>
                <Input
                    type="text"
                    placeholder="Description"
                    defaultValue={businessInfo.current.description}
                    onChange={handleChange('description')}
                    required
                />
            </Cell>
            <Cell>
                <Button
                    onClick={handleSubmit}
                    loading={isLoading}
                    disabled={isLoading || !businessInfo.current.name.trim() || !businessInfo.current.category.trim() || !businessInfo.current.description.trim()}
                >
                    Register Business
                </Button>
            </Cell>
        </>
    );
}