import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL  } from "firebase/storage";

import axios from "axios";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgn7dLXWlpIrdsL-lIuUM2aHUjCkYGsog",
  authDomain: "afrchavanod74.firebaseapp.com",
  projectId: "afrchavanod74",
  storageBucket: "afrchavanod74.appspot.com",
  messagingSenderId: "469038692770",
  appId: "1:469038692770:web:97fe381128d5bd5396dafb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const firebaseStorage = getStorage(firebaseApp);

// Method to dowload file by passing the url from firebase as parameter
export async function downloadFile (url, fileName) {
  getDownloadURL(ref(firebaseStorage, url))
  .then((url) => {
    axios({
      url: url,
      method: 'GET',
      responseType: 'blob',
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', fileName);
        document.body.appendChild(fileLink);

        fileLink.click();
      });
  })
  .catch((error) => {
    console.log(error);
  })
}
