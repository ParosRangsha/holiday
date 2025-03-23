import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductsApi } from './mydata/ProductsApi.jsx'
import { Menudata } from './mydata/Menudata.jsx'

createRoot(document.getElementById('root')).render(
  <ProductsApi>
    <Menudata>
    <App />
    </Menudata>
  </ProductsApi>
)
