/**
 *  Project: store-ts
 *  File: themeSlice.ts
 *  Created: 11:37 SA, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { applyTheme } from "@/utils";

export type Theme = "light" | "dark" | "system";

type ThemeState = {
  theme: Theme;
};

const initializeTheme = (): Theme => {
  const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
  applyTheme(savedTheme);
  return savedTheme;
};

const initialState: ThemeState = {
  theme: initializeTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>): void {
      state.theme = action.payload;
      applyTheme(action.payload);
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
