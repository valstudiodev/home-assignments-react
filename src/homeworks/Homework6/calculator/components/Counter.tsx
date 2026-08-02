interface CounterProps {
  title: string;
  onClick: () => void;
}

export function Counter({ title, onClick }: CounterProps): React.JSX.Element {

  return (
    <button
      className="bg-bg-card p-2 rounded-2xl"
      onClick={onClick}>
      {title}
    </button>
  )
}