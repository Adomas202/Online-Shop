import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase, reduxFirebase } from 'react-redux-firebase';
import fbConfig from './Config/config';

const store = createStore(rootReducer,
    compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirebase(fbConfig),
        reactReduxFirebase(fbConfig)
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
