import { createContext } from 'react'

import type { DefaultTheme } from 'styled-components'

interface ThemeContextValue {
	theme: DefaultTheme
	setTheme: (theme: DefaultTheme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export default ThemeContext
