import { FC } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Input from '../../../shared/ui/input';
import Button from '../../../shared/ui/button';

type LoginFormData = {
    username: string,
    password: string
}

const LoginFormWidget: FC = () => {
    const handleSubmit = (form: LoginFormData) => {
        
    }
    
    const form = useFormik<LoginFormData>({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: yup.object({
            username: yup
                .string()
                .required('Введите имя пользователя'),

            password: yup
                .string()
                .required('Введите пароль')
        }),

        onSubmit: handleSubmit 
    });

    return <div className="max-w-md w-full bg-base-300 p-8 rounded-lg">
        <h1 className="text-center text-lg">Авторизация</h1>
        
        <form className="mt-8" onSubmit={form.handleSubmit}>
            <Input
                label="Имя пользователя"
                name="username"

                value={form.values.username}
                error={form.errors.username}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
            />

            <Input
                className="mt-2"
                label="Пароль"
                name="password"
                type="password"

                value={form.values.password}
                error={form.errors.password}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
            />

            <Button
                className="mt-8 w-full"
                text="Войти"
                variant="primary"
                type="submit"

                disabled={!form.isValid}
            />
        </form>
    </div>;
};

export default LoginFormWidget;