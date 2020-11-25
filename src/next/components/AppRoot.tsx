import { useContext, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import firebaseClient from '@firebase/firebaseClient'
import ThemeContext from '@stores/theme-store'

interface Props {
	children: ReactNode
}

const AppRoot = ({ children }: Props): JSX.Element => {
	const { theme } = useContext(ThemeContext)

	firebaseClient()

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppRoot
