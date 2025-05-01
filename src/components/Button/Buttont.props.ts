export type VariantProps = 'primary' | 'secondary' | 'success'

export interface Props {
    variant?: VariantProps;
    textColor?: string;
    children: JSX.Element
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}