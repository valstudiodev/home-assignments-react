export interface ButtonCountProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface InputFieldCounterProps {
  value: string | number;
  placeholder: string;
}

export interface ButtonResetProps {
  title: string;
  onClick: () => void;
}