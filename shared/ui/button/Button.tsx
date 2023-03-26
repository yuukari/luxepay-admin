import { FC, MouseEvent } from 'react';
import cn from 'classnames';

import { useButtonVariant } from './hooks';

import { ButtonVariant } from './types';

type ButtonProps = {
    className?: string,

    text: string,
    type?: 'button' | 'submit' | 'reset',
    variant?: ButtonVariant,
    outline?: boolean,
    disabled?: boolean,

    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        text, type, variant, outline, disabled,

        onClick
    } = props;

    const buttonVariant = useButtonVariant(variant);
  
    return <button 
        className={cn([
            className,
            "btn",
            buttonVariant,
            {"btn-outline": outline}
        ])}
        type={type ?? 'button'}
        disabled={disabled}

        onClick={onClick}
    >{text}</button>;
};

export default Button;