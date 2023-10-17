import { Provider } from 'react-redux';
import store from './redux/store';
import Gallery from "./components/Gallery"
import Count from "./components/Count"
import ReactForm from './components/ReactForm';


function App() {

  return (
    <Provider store={store}>
      {/* <Count /> */}
      <ReactForm />
    </Provider>
  );
}

export default App;
