import axios from "axios";
const baseURL = 'https://64455e9f914c816083cd410d.mockapi.io/tweets';

export  async function fetchData (){
const response= await axios.get(`${baseURL}`)
console.log('resp', response.data)
return response.data
}