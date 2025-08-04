
export interface SubtitleProps {
    label: string
}

export const Subtitle = ({ label, ...props }: SubtitleProps) => {
  return (
    <h2 {...props} style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{label}</h2>
  )
}
