
import axios from "../../utils/axios";

export const getPokemons = async(pageNumber, pageSize, name, type, subtype)=>{
    const response = await axios.get(`/data/db.json/data/?page=${pageNumber}&pageSize=${pageSize}&q=%20name:${name}*${type}${subtype}`)
    return response.data;
}