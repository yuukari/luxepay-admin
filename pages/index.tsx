import type { NextPage } from 'next'
import Head from 'next/head'
import LoginFormWidget from '../widgets/loginFormWidget/ui'

const Login: NextPage = () => {
	return (
		<div>
			<Head>
				<title>LuxePay Admin Panel</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="container mx-auto px-4">
				<div className="h-screen flex justify-center items-center">
					<LoginFormWidget/>
				</div>
			</div>
		</div>
	)
}

export default Login
