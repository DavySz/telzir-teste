import { ButtonHTMLAttributes } from 'react'

import './styles.css'

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ ...props }: buttonProps) {
    return (
        <button
            className="button"
            {...props}
        />
    )
}