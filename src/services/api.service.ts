const BASE_URL = "https://rickandmortyapi.com/api"
import type { Character, UseApiCall } from "../models";
import axios from "axios"
import { loadAbort } from "../utilities";

export const getCharacter = (id: number): UseApiCall<Character> => {
    const controller = loadAbort();
    
    return { 
        call: axios.get(`${BASE_URL}/character/${id}`, { signal: controller.signal }), 
        controller
     }
}

export const newCharacter = (character: Character) => {
    const controller = loadAbort();
    return {
        call: axios.post<null>(`${BASE_URL}/characters`, character, { signal: controller.signal }), 
        controller
    }
}