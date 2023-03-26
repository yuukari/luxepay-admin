import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Provider } from 'react-redux';
import { store } from './../app/store';

import Navbar from '../shared/ui/navbar';
import NotificationsList from '../entities/notifications/notificationsList/ui';
import Preloader from '../shared/ui/preloader';

import '../styles/common.css';

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return <Provider store={store}>
		{router.asPath.length > 1 ? 
			<Navbar>
				<Component {...pageProps}/>
			</Navbar>
		:
			<Component {...pageProps}/>
		}
		
		<NotificationsList/>

		<Preloader/>
	</Provider>
}

export default App
