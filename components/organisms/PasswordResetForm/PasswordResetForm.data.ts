import type { FormField } from '@molecules/InputForm/InputForm.types';
import type { Reactive } from 'vue';

export const formFields: Reactive<FormField[]> = reactive([
  {
    model: '',
    data: {
      label: 'Email',
      isRequired: true,
      validator: (value: string) => {
        if (!value) return 'Please enter your email address';
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address in format \'name@domain.tld\'';
        return null;
      },
    },
  },
]);
