import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { setUser, clearUser } from './features/authSlice';
import { store } from './app/store';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

onAuthStateChanged(auth, user => {
  if (user) {
    store.dispatch(setUser({
      uid:user.uid,
      email:user.email
    }));  
  } else {
    store.dispatch(clearUser());
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);