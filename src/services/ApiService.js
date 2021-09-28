import axios from "axios";

// axios instance definition
const instance = axios.create({
   baseURL: 'https://afrchavanod74.herokuapp.com/',
   headers: { 'Content-Type': 'application/json; charset=utf-8'}
})

// Get all News
export async function getAllNews () {
   const res = await instance.get('/actualites?_sort=updated_at:DESC')
   return res.data
}

// Get all Activities
export async function getAllActivities () {
   const res = await instance.get('/activites?_sort=titre:ASC')
   return res.data
}

// Get one Activity
export async function getSingleActivity (id) {
   const res = await instance.get('/activites/' + id)
   return res.data
}

// Get all Workshops
export async function getAllWorkshops () {
   const res = await instance.get('/ateliers?_sort=titre:ASC')
   return res.data
}

// Get one Workshop
export async function getSingleWorkshop (id) {
   const res = await instance.get('/ateliers/' + id)
   return res.data
}

// Get all Kids Activities
export async function getAllKidsActivities () {
   const res = await instance.get('/enfants?_sort=titre:ASC')
   return res.data
}

// Get one Kids activity
export async function getSingleKidsActivity (id) {
   const res = await instance.get('/enfants/' + id)
   return res.data
}

// Get all members
export async function getAllMembers () {
   const res = await instance.get('/membres')
   return res.data
}

// Get office members
export async function getOffice () {
   const res = await instance.get('/membres?bureau=true')
   return res.data
}

// Get activities' managers
export async function getManagers () {
   const res = await instance.get('/membres?responsable_activite=true')
   return res.data
}

// Get one member
export async function getSingleMember (id) {
   const res = await instance.get('/membres/' + id)
   return res.data
}

// Get subheader info
export async function getSubheaderInfo () {
   const res = await instance.get('/bandeau-info')
   return res.data
}

// Get mission data
export async function getMission () {
   const res = await instance.get('/mission')
   return res.data
}

// Get Kids camp data
export async function getKidsCamp () {
   const res = await instance.get('/centre-loisirs')
   return res.data
}