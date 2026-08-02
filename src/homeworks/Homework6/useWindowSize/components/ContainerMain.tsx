interface ContainerMain {
  children: React.ReactNode
}

export function ContainerMain({ children }: ContainerMain): React.JSX.Element {
  return (
    <div className="inline-flex flex-col gap-3 items-center mb-20">
      {children}
    </div>
  )
}