import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		day_theme: {
			colors: {
				background_color: string;
				primary: string;
				secundary: string;
				text: string;
			};
		};

		night_theme: {
			colors: {
				background_color: string;
				primary: string;
				secundary: string;
				text: string;
			};
		};
	}
}
