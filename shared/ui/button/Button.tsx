import { FC, MouseEvent } from 'react';
import cn from 'classnames';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
    className?: string,

    text: string,
    type?: 'button' | 'submit' | 'reset',
    variant?: ButtonVariant,
    disabled?: boolean,

    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        text, type, variant, disabled,

        onClick
    } = props;
  
    return <button 
        className={cn([
            className,
            "btn",
            {['btn-primary']: variant == 'primary'}
        ])}
        type={type ?? 'button'}
        disabled={disabled}

        onClick={onClick}
    >{text}</button>;
};

export default Button;