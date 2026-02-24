import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeModes: "light",
    lightTheme: () => {},
    darkTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}