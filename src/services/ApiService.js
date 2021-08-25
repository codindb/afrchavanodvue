import axios from "axios";

const NOCODB_APIKEY = import.meta.env.VITE_NOCODB_APIKEY

// axios instance definition
const instance = axios.create({
   baseURL: 'https://afrchavanodnocodb.herokuapp.com/nc/afrchavanod_fr_i5Eo/api/v1',
   headers: { 'Content-Type': 'application/json; charset=utf-8', 'xc-auth': NOCODB_APIKEY, 'Upgrade-Insecure-Requests': 1}
})

// Get all News
export async function getAllNews () {
   const res = await instance.get('/Actualites')
   return res.data
}