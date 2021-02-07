import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyBuNvtKspOWlKRNyNZ1pcug8rlkbLSa_I0",
    authDomain: "projectmanger-fbb9f.firebaseapp.com",
    projectId: "projectmanger-fbb9f",
    storageBucket: "projectmanger-fbb9f.appspot.com",
    messagingSenderId: "993940725083",
    appId: "1:993940725083:web:7f6b8132a8b54ed7ce0e7e",
    measurementId: "G-WE74PT4HPR"
};

const fire = firebase.initializeApp(config);
export default fire;
