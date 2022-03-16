import React from "react";
import AppAuth from "./App.auth";
import AppTheme from "./App.theme";
import AppAlert from "./App.alert";
import AppErrorBoundary from "./App.errorBoundry";
import RouterApp from "./router";
import ApolloClient from "./App.gqlclient";
import AppDrawer from "./App.drawer";
import { CssBaseline } from "@material-ui/core";
import AppDialog from "./App.dialog";
import AppBackdrop from "./App.backdrop";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <ApolloClient>
      <AppErrorBoundary>
        <AppAuth>
          <AppTheme>
            <CssBaseline />
            <AppAlert>
              <AppDialog>
                <AppDrawer>
                  <AppBackdrop>
                  <ThemeProvider theme={theme}>
                    <RouterApp />
                    </ThemeProvider>
                  </AppBackdrop>
                </AppDrawer>
              </AppDialog>
            </AppAlert>
          </AppTheme>
        </AppAuth>
      </AppErrorBoundary>
    </ApolloClient>
  );
}
export default App;