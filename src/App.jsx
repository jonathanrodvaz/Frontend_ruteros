import './App.css';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeContextProvider } from './contexts/themeContext';

const App = () => {
  return (
    <ThemeContextProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeContextProvider>
  );
};

export default App;
