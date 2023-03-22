import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Input from '../../../shared/ui/input';
import Button from '../../../shared/ui/button';

type LoginFormData = {
    username: string,
    password: string
}

const LoginFormWidget: FC = () => {
    const router = useRouter();

    const [formError, setFormError] = useState<string | null>(null);

    const handleSubmit = (values: LoginFormData) => {
        if (values.username == 'admin' && values.password == '12345678')
            return router.push('/dashboard');

        setFormError('Неверное имя пользователя или пароль');
    }

    const handleFormTouched = () => {
        setFormError(null);
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
        isInitialValid: false,

        onSubmit: handleSubmit,
    });

    return <div className="max-w-md w-full bg-base-300 p-8 rounded-lg">
        <h1 className="text-center text-lg">Авторизация</h1>
        

        <form className="mt-8" onSubmit={form.handleSubmit}>    
            {formError && <p className="text-red-400 mb-2 text-center text-sm">{formError}</p>}
            
            <Input
                label="Имя пользователя"
                name="username"

                value={form.values.username}
                error={form.errors.username}
                onChange={(e) => {form.handleChange(e); handleFormTouched()}}
                onBlur={form.handleBlur}
            />

            <Input
                className="mt-2"
                label="Пароль"
                name="password"
                type="password"

                value={form.values.password}
                error={form.errors.password}
                onChange={(e) => {form.handleChange(e); handleFormTouched()}}
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