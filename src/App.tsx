import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthRouter from "./authRouter";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/styles";
import client, { isLoggedInVar, themeVar } from "./apollo/apollo";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import Login from "./pages/Login/login";
import SignUp from "./pages/Login/sign-up";
function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const currentTheme = useReactiveVar(themeVar);
  return (
    <ThemeProvider theme={currentTheme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Routes>
            <Route path="/" element={<AuthRouter />}>
              {!isLoggedIn && (
                <>
                  <Route path="/" element={<Login />} />
                  <Route path="/sign-up" element={<SignUp />} />
                </>
              )}
            </Route>
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="not-found" />} />
          </Routes>
        </div>
      </ApolloProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
