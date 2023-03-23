export type ShopsResponse = {
    status: 'ok' | 'error',
    shops: string[],
    message?: string
}

export type ShopsData = {
    shops?: string[],
    error?: string
}