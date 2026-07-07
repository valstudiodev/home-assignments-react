export interface SearchInputProps {
  ref: React.RefObject<HTMLInputElement | null>;
  value: string;
  onChange: (value: string) => void
}

export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

export interface EmployeeListProps {
  items: Employee[]
}