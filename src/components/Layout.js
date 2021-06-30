import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';

function Layout({ startingTheme, children}) {
  // Note - layered this way so ThemeContext is created before accessing it with usecontext
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeProvider>
  );
}

// pjm - children is a receiving prop in all components
function LayoutNoThemeProvider({ children }) {

  const { theme } = useContext(ThemeContext);
  return (
   <div className={
     theme=="light" ? "container-fluid light" : "container-fluid dark"
   }
  >
    {children}
  </div>
  );
}

export default Layout;