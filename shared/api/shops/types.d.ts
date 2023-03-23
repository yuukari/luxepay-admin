export type ShopsResponse = {
    status: 'ok' | 'error',
    shops: string[],
    error?: string
}