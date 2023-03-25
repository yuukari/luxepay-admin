import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { store } from './../app/store'

import NotificationsList from '../entities/notifications/notificationsList/ui'
import Preloader from '../shared/ui/preloader'

import '../styles/common.css'

function App({ Component, pageProps }: AppProps) {
	return <Provider store={store}>
		<Component {...pageProps}/>

		<NotificationsList/>

		<Preloader/>
	</Provider>
}

export default App
