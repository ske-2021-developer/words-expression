import { useState } from 'react'

import AppRoot from '@components/AppRoot'
import ThemeContext from '@stores/theme-store'
import GlobalStyle from '@styles/globals'
import { lightTheme } from '@styles/theme'

import type { DefaultTheme } from 'styled-components'

import '@styles/globalStyle.css'

const MyApp = ({ Component, pageProps }): JSX.Element => {
	const [theme, setTheme] = useState<DefaultTheme>(lightTheme)

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<AppRoot>
				<GlobalStyle />
				<Component {...pageProps} />
			</AppRoot>
		</ThemeContext.Provider>
	)
}

export default MyApp
