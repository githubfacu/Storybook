import { render } from '@testing-library/react'
import React from 'react'

export function createRender<TProps>(Component: React.ComponentType<TProps>){
    return (props: JSX.IntrinsicAttributes & TProps) => ({
        ...render(<Component {...props}/>, {})
    })
}