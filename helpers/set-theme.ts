import { localStateManager } from "./local-state-manager";

export const setTheme = (theme: "LIGHT" | "DARK") => {
  if (typeof window !== "undefined" && window.localStorage) {
    switch (theme) {
      case "LIGHT":
        document.querySelector("html")?.setAttribute("data-theme", "winter");
        localStateManager.theme.set("LIGHT");
        break;
      default:
        document.querySelector("html")?.setAttribute("data-theme", "night");
        localStateManager.theme.set("DARK");
        break;
    }
  }
};
