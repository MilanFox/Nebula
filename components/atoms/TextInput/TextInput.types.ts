export interface TextInputProps {
  label: string;
  isRequired?: boolean;
  modelValue?: string;
  placeholder?: string;
  validator?: (value: string) => string | null;
  type?: 'text' | 'password';
}

export interface TextInputInstance extends HTMLDivElement {
  validate: () => void;
  isValid: ComputedRef<boolean>;
  focusInput: () => void;
}
