import React from 'react'
import DefaultPage from './components/defaultPage'
import { Provider } from 'react-redux'
import store from './store';

const App = () =>
//Setting Provider at the root of the application
    <Provider store={store}>
        <section className="container mt-5">
          <hr />
          <DefaultPage />
        </section>
    </Provider>

export default App;
