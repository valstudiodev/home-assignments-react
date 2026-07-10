export interface PasswordButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

export interface PasswordInputProps {
  label: string;
  value: string;
  type: 'text' | 'password';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}