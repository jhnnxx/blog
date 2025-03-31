type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto max-w-6xl py-4">{children}</div>
}

export default Container
