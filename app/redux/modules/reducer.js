// @flow

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import type { RouterHistory } from 'react-router-dom';

import app from './app';
import wallet from './wallet';
import transactions from './transactions';
import masternodes from './masternodes';
import send from './send';
import receive from './receive';

// $FlowFixMe
export const createRootReducer = (history: RouterHistory) => combineReducers({
  app,
  walletSummary: wallet,
  transactions,
  masternodes,
  sendStatus: send,
  receive,
  router: connectRouter(history),
});
