import { Provider } from "react-redux";
import { MenuApp } from "./components/MenuApp";
import store from "./Redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MenuApp />
      </Provider>
    </>
  );
};

export default App;
