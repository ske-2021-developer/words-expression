import 'styled-components'

declare interface CommonTheme {
	colorBlack: string
	colorRed: string
	colorWhite: string
	fontSize: string
}

declare module 'styled-components' {
	export interface DefaultTheme extends CommonTheme {
		backgroundColor: string
		color: string
		colorPrimary: string
		colorMedium: string
	}
}
