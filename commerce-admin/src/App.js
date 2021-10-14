import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';
import store from './store';

const App = () => {
  const content = useRoutes(routes);
  console.log(content);

  // const sample = useRoutes();
  // console.log(sample);

  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {content}
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
