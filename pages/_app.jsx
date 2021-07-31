//lib
import React from "react";
import { ThemeProvider, ThemeProvidere } from "theme-ui";

// styles
import theme from "../theme";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
};
