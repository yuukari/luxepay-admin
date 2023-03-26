export type AuthBody = {
    username: string,
    password: string
}

export type AuthResponse = {
    status: 'ok' | 'error',
    ipInfo?: {
        changed: boolean,
        current: string
        last: string
    },

    message?: string
}

export type User = {
    isLoggedIn: boolean,
    ipInfo?: {
        changed: boolean,
        current: string
        last: string
    },

    error?: string
}