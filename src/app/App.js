import './App.scss';
import { MantineProvider } from '@mantine/core';
import Layout from '../pages/Layout';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS 
      theme={{ 
        primaryColor: 'blue',
        fontFamily: 'Roboto, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        fontSizes: {
          xs: 10,
          sm: 12,
          md: 14,
          lg: 16,
          xl: 20,
        },
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
        activeStyles: { transform: 'scale(0.95)' }
      }}>
      <div className="App">
        <Layout/>
      </div>
    </MantineProvider>
  );
}

export default App;
