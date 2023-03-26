import { NextPage } from 'next';
import Head from 'next/head';

import withAuthRedirect from '../shared/hoc/withAuthRedirect';

import LoginFormWidget from '../widgets/loginFormWidget/ui';

const Login: NextPage = () => {
	return (
		<>
			<Head>
				<title>LuxePay Admin Panel</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="bg-base-300">
				<div className="container mx-auto px-4">
					<div className="h-screen flex justify-center items-center">
						<LoginFormWidget/>
					</div>
				</div>
			</div>
		</>
	)
}

export default withAuthRedirect(Login);
