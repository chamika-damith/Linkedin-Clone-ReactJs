import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAbpzfZSmOQy41NRXUP8oM_MaH5KRvxCBw",
    authDomain: "linkedin-clone-55f6b.firebaseapp.com",
    projectId: "linkedin-clone-55f6b",
    storageBucket: "linkedin-clone-55f6b.appspot.com",
    messagingSenderId: "202981601959",
    appId: "1:202981601959:web:06344d75b6cacd90656182"
  };

  const firebase=firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth}