import type { TextInputProps } from '@atoms/TextInput/TextInput.types';
import type { Reactive } from 'vue';

export interface FormField {
  model: any;
  data: TextInputProps;
}

export interface InputFormProps {
  formFields: Reactive<FormField[]>;
  onSubmit: () => any;
  submitLabel?: string;
  isBusy?: boolean;
}
