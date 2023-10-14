import { Provider } from 'react-redux';
import store from './redux/store';
import Gallery from "./components/Gallery"
import Count from "./components/Count"


function App() {

  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;
