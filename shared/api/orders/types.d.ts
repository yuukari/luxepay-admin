export type OrderType = 'created' | 'paid';

export type Order = {
    order: string,
    type: OrderType,
    amount: number,
    email: string,
    promocode: string | null,
    item: string,
    project: string,
    label: string,
    success_url: string
}

export type OrdersResponse = {
    status: 'ok' | 'error',
    orders: Order[],
    error?: string
}