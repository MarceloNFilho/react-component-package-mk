import axios from 'axios';

export const api = (key: String, shelter_id: String) => axios.create({
    baseURL: `https://api.adoptapet.com/search/pets_at_shelter?key=${key}output=xml&shelter_id=${shelter_id}`
});