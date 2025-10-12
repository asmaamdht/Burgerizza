import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import ContextProvider from './Features/ContextProvider.tsx'
import { store } from './Store/Store.tsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ContextProvider> */}
    <Provider store={store} >
      <App />
    </Provider>
      
    {/* </ContextProvider> */}
  </StrictMode>,
)
