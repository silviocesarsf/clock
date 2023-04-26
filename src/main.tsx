import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/global.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes.tsx";

ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
