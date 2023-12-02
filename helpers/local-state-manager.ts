export const localStateManager = {
  theme: {
    get: (): "DARK" | "LIGHT" | null => {
      if (typeof window !== "undefined" && window.localStorage) {
        const theme =
          (localStorage.getItem("theme") as "DARK" | "LIGHT") ?? "LIGHT";
        return theme;
      }
      return null;
    },
    set: (value: "LIGHT" | "DARK") => {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("theme", value);
      }
    },
  },
};
