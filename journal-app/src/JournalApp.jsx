import { Provider } from "react-redux"
import { AppRouter } from "./router/AppRouter"
import { store } from "./store"
import { AppTheme } from "./theme/"

function JournalApp() {

  return (
    <>
    <Provider store={store}>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </Provider>
    </>
  )
}

export default JournalApp
