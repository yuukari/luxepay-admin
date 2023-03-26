export type Session = {
    id: string,
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

/* Terminate session */

export type TerminateSessionBody = {
    id: string
}

export type TerminateSessionResponse = {
    status: 'ok' | 'error',
    message?: string
}

export type TerminateSessionData = {
    error?: string
}