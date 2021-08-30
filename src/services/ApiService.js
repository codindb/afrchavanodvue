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

// Get all Workshops
export async function getAllWorkshops () {
   const res = await instance.get('/ateliers')
   return res.data
}

// Get one Workshop
export async function getSingleWorkshop (id) {
   const res = await instance.get('/ateliers/' + id)
   return res.data
}

// Get all Kids Activities
export async function getAllKidsActivities () {
   const res = await instance.get('/enfants')
   return res.data
}

// Get one Kids activity
export async function getSingleKidsActivity (id) {
   const res = await instance.get('/enfants/' + id)
   return res.data
}

// Get bottomheader info
export async function getBottomHeaderInfo () {
   const res = await instance.get('/bandeau-info')
   return res.data
}