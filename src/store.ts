/**
 *  Project: store-ts
 *  File: store.ts
 *  Created: 11:42 SA, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import {configureStore} from "@reduxjs/toolkit";

import cartReducer from './features/cart/cartSlice'
import userReducer from './features/user/userSlice'
import themeReducer from './features/theme/themeSlice'


const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    theme: themeReducer,
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
type ReduxStore = {
  getState: () => RootState
  dispatch: AppDispatch
}

export {store};
export type {RootState, AppDispatch, ReduxStore};
