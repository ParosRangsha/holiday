import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductsApi } from './mydata/ProductsApi.jsx'

createRoot(document.getElementById('root')).render(
  <ProductsApi>
    <App />
  </ProductsApi>
)
