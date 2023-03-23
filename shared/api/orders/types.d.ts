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
    success_url: string,
    ts: number, 
    datetime: string
}

export type Pagination = {
    currentPage: number,
    pagesCount: number
}

export type ListOrdersBody = {
    page?: number,
    search?: string,
    shop?: string
}

export type ListOrdersResponse = {
    status: 'ok' | 'error',
    orders?: {
        pagination: Pagination,
        data: Order[]
    },
    message?: string
}

export type OrdersData = {
    pagination?: Pagination,
    orders?: Order[],
    error?: string
}