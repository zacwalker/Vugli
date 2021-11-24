import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import Create from './pages/Create'
import { deepOrange,  indigo, green } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[500]
    },
    secondary: {
      main: indigo[500],
    },
    light: {
      // color: indigo[300]
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
