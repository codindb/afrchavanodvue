import axios from "axios";

// const NOCODB_APIKEY = import.meta.env.VITE_NOCODB_APIKEY

// axios instance definition
const instance = axios.create({
   baseURL: 'https://afrchavanod74.herokuapp.com/',
   headers: { 'Content-Type': 'application/json; charset=utf-8'}
})

// Get all News
export async function getAllNews () {
   const res = await instance.get('/actualites')
   return res.data
}

// Get one News
export async function getSingleNews (id) {
   const res = await instance.get('/actualites/' + id)
   return res.data
}

// Get all Activities
export async function getAllActivities () {
   const res = await instance.get('/activites')
   return res.data
}

// Get one Activity
export async function getSingleActivity (id) {
   const res = await instance.get('/activites/' + id)
   return res.data
}