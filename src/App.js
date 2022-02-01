import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import Create from './pages/Create'
import Layout from './components/Layout'
import { deepOrange,  indigo } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'


const theme = createTheme({
  palette: {
    primary: {
      main: "#10304E"
    },
    secondary: {
      main: "#FFCB05",
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
        <Layout>
          <Switch>
            <Route exact path="/">
              <Posts />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
