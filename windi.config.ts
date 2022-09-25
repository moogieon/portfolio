import { defineConfig } from "windicss/helpers";

export default defineConfig({
  attributify: {
    prefix: "w-",
  },
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      fontFamily: {
        game: "game",
        sans: "SLEIGothicTTF",
      },
      colors: {
        myellow: "#f8ae16",
        mred: "#f90057",
        mblue: "#686eff",
      },
    },
  },
});
