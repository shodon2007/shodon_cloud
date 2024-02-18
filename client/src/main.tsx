import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import router from './router/router.tsx'
import store from './redux';

import './index.scss'
import FileProvider from './providers/FileProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <FileProvider>
      <RouterProvider router={router} />
    </FileProvider>
  </Provider>,
)
