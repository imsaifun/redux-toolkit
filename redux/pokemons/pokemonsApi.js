
import axios from "../../utils/axios";

export const getPokemons = async()=>{
    const response = await axios.get(`/data/db.json`)
    return response.data;
}