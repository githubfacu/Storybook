
export interface TitleProps {
    label: string
}

export const Title = ({ label, ...props }: TitleProps) => {
  return (
    <h1 {...props} style={{ fontSize: '2rem', fontWeight: 'bold' }}>{label}</h1>
  )
}
