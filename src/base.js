import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDiqx7-5EBp5Hu4ig-JADndLCdML9qV2s4',
  authDomain: 'reactjs-db237.firebaseapp.com',
  databaseURL: 'https://reactjs-db237.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
