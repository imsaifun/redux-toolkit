
import axios from "../../utils/axios";
const data = require('../../public/data/db.json')

export const getPokemons = async()=>{
    const response = await axios.get(`/data/db.json`)
    // console.log(response.data);
    return response.data;
}