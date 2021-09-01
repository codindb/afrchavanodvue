import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL  } from "firebase/storage";

import axios from "axios";

const APIKEY = import.meta.env.VITE_APIKEY
const AUTHDOMAIN = import.meta.env.VITE_AUTHDOMAIN
const PROJECTID = import.meta.env.VITE_PROJECTID
const STORAGEBUCKET = import.meta.env.VITE_STORAGEBUCKET
const SENDERID = import.meta.env.VITE_SENDERID
const APPID = import.meta.env.VITE_APPID

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: SENDERID,
  appId: APPID
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
