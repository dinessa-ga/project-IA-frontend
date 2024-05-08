import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './index.css'
import HomePage from './pages/HomePage';
import TechPage from './pages/TechPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LinkPage from './pages/LinkPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="LinkPage" element={<LinkPage />} />
          <Route path="TechPage" element={<TechPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

