import "@/styles/globals.css";
import { pokemonReducer } from "@/src/reducers/pokemons";

import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { promiseMiddleware } from '@adobe/redux-saga-promise';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import devToolsEnhancer from 'remote-redux-devtools';

import { NextUIProvider } from "@nextui-org/react";
import { upperCaseFirstLetterName, logger } from "@/src/middlewares";

export default function App({ Component, pageProps }) {
  let composeWithDevTools;
  composeWithDevTools = require('redux-devtools-extension').composeWithDevTools;
  
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(pokemonReducer, composeWithDevTools(applyMiddleware(promiseMiddleware, thunk, sagaMiddleware, logger, upperCaseFirstLetterName)));

  
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <NextUIProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </NextUIProvider>
  );
}
