import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import {Provider} from 'react-redux'
import store from './actions/store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
