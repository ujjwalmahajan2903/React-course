import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './Componennts/ThemeBtn'
import Card from './Componennts/Card'
import { ThemeProvider } from './Context/Theme'

function App() {
    const [themeMode,setThemeMode] = useState("light")

    const lightTheme = () => {
      setThemeMode("light")
    }

    const darkTheme = () => {
      setThemeMode("dark")
    }

    //Actual change in theme
    useEffect(() => {
      const html = document.querySelector('html')
      html.classList.remove("light","dark")
      html.classList.add(themeMode)
    }, [themeMode])


    
  
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
