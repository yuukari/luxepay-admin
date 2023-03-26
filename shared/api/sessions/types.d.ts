export type Session = {
    username: string,
    ip: string,
    userAgent: string,
    ts: number,
    datetime: string,
    current: boolean
}

export type SessionsResponse = {
    status: 'ok' | 'error',
    sessions: Session[],
    message?: string
}

export type SessionsData = {
    sessions?: Session[],
    error?: string
}