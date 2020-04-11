import * as firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyDuDJrfzhuhSZn5CU_qAoNwRP4j_QTYOrQ",
    authDomain: "expense-manager-54e8b.firebaseapp.com",
    databaseURL: "https://expense-manager-54e8b.firebaseio.com",
    projectId: "expense-manager-54e8b",
    storageBucket: "expense-manager-54e8b.appspot.com",
    messagingSenderId: "662341107564",
    appId: "1:662341107564:web:72c7aa4051b2dbd1b27d49"
};

firebase.initializeApp(firebaseConfig); 
const database = firebase.database(); 

export { firebase, database as default}; 
