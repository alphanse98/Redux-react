import { Home } from "./Home";
import { store } from "./store";
import { Provider } from "react-redux";
import Free from "./Free";


 
function App() {
  return (
    <Provider store={store}>
      <Home/>
      {/* <Free/> */}
     
    </Provider>
    
  );
}

export default App;
