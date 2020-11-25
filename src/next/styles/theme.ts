import type { DefaultTheme } from 'styled-components'
import type { CommonTheme } from './styled'

const commonTheme: CommonTheme = {
	colorBlack: 'rgb(0, 0, 0)',
	colorRed: 'rgb(198, 40, 40)',
	colorWhite: 'rgb(255, 255, 255)',
	fontSize: '1rem'
}

const darkTheme: DefaultTheme = {
	...commonTheme,
	backgroundColor: 'rgb(0, 0, 0)',
	color: 'rgb(255, 255, 255)',
	colorPrimary: 'rgb(55, 158, 255)',
	colorMedium: 'rgb(136, 136, 136)'
}

const lightTheme: DefaultTheme = {
	...commonTheme,
	backgroundColor: 'rgb(255, 255, 255)',
	color: 'rgb(0, 0, 0)',
	colorPrimary: 'rgb(55, 158, 255)',
	colorMedium: 'rgb(102, 102, 102)'
}

export { darkTheme, lightTheme }
