import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	:root {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 14px;
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	html, body {
		margin: 0;
		padding: 0;
	}

	body {
		background-color: ${props => props.theme.backgroundColor}
	}
`

export default GlobalStyle
