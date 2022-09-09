import React, {createContext, useState} from 'react';

const DarkModeContext = createContext()

const DarkModeProvider = (props) => {

const [darkMode, setdarkMode] = useState(false);

const toggleDarkMode = () => {
    setdarkMode(!darkMode)
}

    return (
        <>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </>
    );
}

export {DarkModeContext, DarkModeProvider};
