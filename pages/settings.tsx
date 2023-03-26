import { NextPage } from 'next';
import Head from 'next/head';

import SessionsTableWidget from '../widgets/settings/sessionsTableWidget';

import withAuthProtection from '../shared/hoc/withAuthProtection';

const SettingsPage: NextPage = () => {
    return <>
        <Head>
            <title>Настройки - LuxePay Admin Panel</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="container mx-auto my-16 px-4">
            <h1 className="text-3xl font-semibold">Настройки</h1>

            <SessionsTableWidget/>
        </div>
    </>
}

export default withAuthProtection(SettingsPage);