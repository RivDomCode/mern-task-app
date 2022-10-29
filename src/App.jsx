import { Provider } from "react-redux";
import { TaskRouterApp } from "./router/TaskRouterApp";
import store from "./store/store";

function App() {

  return (
    <Provider store={store}>
      <TaskRouterApp/>
    </Provider>
  )
}

export default App
