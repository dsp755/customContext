import { globalState } from "./state";
import { eventEmitter } from "../events";

const updateState = () => eventEmitter.emit("updateState");

export const toggleTheme = () => {
  if (globalState.theme.currentTheme === "light") {
    globalState.theme.currentTheme = "dark";
  } else {
    globalState.theme.currentTheme = "light";
  }
  updateState();
};
