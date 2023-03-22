import { ChangeEvent, FocusEvent, FC } from 'react';
import cn from 'classnames';


type InputProps = {
    className?: string,

    name: string,
    type?: string,
    value?: any
    
    label?: string,
    placeholder?: string,
    autocomplete?: boolean,
    error?: string

    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = (props) => {
    const { 
        className, name, type, value, 
        
        label, placeholder, error, autocomplete,

        onChange
    } = props;
    
    return <div className={cn([className, "form-control w-full"])}>
        {label && <label className="label">
            <span className="label-text">{label}</span>
        </label>}
        
        <input
            className={cn([
                "input input-bordered w-full",
                {["input-error"]: error}
            ])}
            name={name}
            type={type ?? "text"} 
            value={value}

            placeholder={placeholder}
            autoComplete={autocomplete == false ? "false" : "true"}

            onChange={onChange}
        />

        {error && <label className="label">
            <span className="label-text-alt text-red-400">{error}</span>
        </label>}
    </div>
};

export default Input;