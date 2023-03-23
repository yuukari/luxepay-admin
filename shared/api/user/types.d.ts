export type AuthBody = {
    username: string,
    password: string
}

export type AuthResponse = {
    status: 'ok' | 'error',
    message?: string
}

export type User = {
    isLoggedIn: boolean,
    error?: string
}