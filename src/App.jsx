import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import AppRouter from "./config/router";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
