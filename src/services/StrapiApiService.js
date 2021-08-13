import axios from "axios";

// axios instance definition
const instance = axios.create({
   baseURL: 'https://afrchavanod74.herokuapp.com',
   headers: { 'Content-Type': 'application/json; charset=utf-8'}
})

// Get all News
export async function getAllNews () {
   const res = await instance.get('/actualites')
   return res.data
}