//MODULES
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-css-themr'
// import * as OfflinePluginRuntime from 'offline-plugin/runtime'
// OfflinePluginRuntime.install()

//CSS
import theme from './assets/css/theme.scss'

//ROUTER
import AppRouter from './AppRouter'

//SERVICES
import store from './services/store'

const contextTheme = {
  RTInput: theme
}

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={contextTheme}>
          <AppRouter />
        </ThemeProvider>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)