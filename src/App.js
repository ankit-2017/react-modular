import Routes from 'navigations/routes';
import { Provider } from 'react-redux';
import configureAppStore from 'Store/store'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const store = configureAppStore()

function App() {
  toast.configure()
	return (
  <Provider store={store}>
    <Routes />
  </Provider>
)
}

export default App;
