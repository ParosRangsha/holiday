import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductsApi } from './mydata/ProductsApi.jsx'
import { Menudata } from './mydata/Menudata.jsx';
import firebaseConfig from './Firebase.config.js';
import { store } from './store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ProductsApi>
      <Menudata>
      <App />
      </Menudata>
    </ProductsApi>
  </Provider>
)
