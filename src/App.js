import Routes from 'navigations';
import { Provider } from 'react-redux';
import configureAppStore from 'Store/store';
import './Styles/main.scss';

const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
