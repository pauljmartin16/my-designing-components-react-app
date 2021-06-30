import { useState } from 'react';

function useTheme (startingTheme="light"){
    const [theme, setTheme] = useState(startingTheme);

    function validateTheme(themeValue){
        if (themeValue == "dark"){
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return {
        theme,
        setTheme: validateTheme // pjm - assigns via a method for defaulting etc
    }
}

export default useTheme;