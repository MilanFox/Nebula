import type { Reactive } from 'vue';
import type { FormField } from '@molecules/InputForm/InputForm.types';

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
  {
    model: '',
    data: {
      label: 'Password',
      isRequired: true,
      type: 'password',
      validator: (value: string) => {
        if (!value) return 'Please enter a password';
        if (value.length < 6) return 'Please enter a password with at least 6 characters.';
        return null;
      },
    },
  },
  {
    model: '',
    data: {
      label: 'Repeat Password',
      isRequired: true,
      type: 'password',
      validator: (value: string) => {
        if (!value) return 'Please enter a password';
        if (value.length < 6) return 'Please enter a password with at least 6 characters.';
        if (value !== formFields[1].model) return 'Your passwords don\'t match, please check for typos.';
        return null;
      },
    },
  },
]);
