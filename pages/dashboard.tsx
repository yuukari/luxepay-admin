import { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../widgets/navbar/ui';
import OrdersTableWidget from '../widgets/orders/ordersTableWidget';

import withAuthProtection from '../shared/hoc/withAuthProtection';

const DashboardPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Главная - LuxePay Admin Panel</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <Navbar/>

            <div className="container mx-auto my-16 px-4">
                <h1 className="text-3xl font-semibold">Покупки</h1>

                <OrdersTableWidget/>
            </div>
		</>
	)
}

export default withAuthProtection(DashboardPage);