import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import Create from './pages/Create'
import Saved from './pages/Saved'
import Layout from './components/Layout'
import { deepOrange, indigo } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import store from './store'


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
    <Provider store={store}>
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
              <Route path="/saved">
                <Saved />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
