import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Input from '../../../shared/ui/input';
import Button from '../../../shared/ui/button';

import { useAppDispatch } from '../../../shared/hooks';
import { useLoginMutation } from '../../../shared/api/user';

import { addNotification } from '../../../entities/notifications/notificationsList/model';

type LoginFormData = {
    username: string,
    password: string
}

const LoginFormWidget: FC = () => {
    const router = useRouter();

    const dispatch = useAppDispatch();

    const [formError, setFormError] = useState<string | null>(null);
    const [login, { isLoading, data: user }] = useLoginMutation();

    const handleSubmit = (values: LoginFormData) => {
        login({
            username: values.username,
            password: values.password
        });
    }

    useEffect(() => {
        if (!user)
            return;

        if (user.isLoggedIn){
            if (user.ipInfo && user.ipInfo.changed)
                dispatch(addNotification({
                    title: 'Вход с нового IP адреса',
                    message: `В прошлый раз вы входили в панель с IP: ${user.ipInfo.last}. Ваш текущий IP: ${user.ipInfo.current}`,
                    type: 'warning',
                    autoClose: false
                }));

            router.push('/dashboard');
        } else {
            setFormError(user.error!);
        }
    }, [user]);

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

    return <div className="max-w-md w-full bg-base-100 p-8 rounded-lg">
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

                disabled={!form.isValid || isLoading}
            />
        </form>
    </div>;
};

export default LoginFormWidget;