import Endpoints from '../models/endpoints';

const BASE_SWAPI_ENDPOINT: string = 'https://swapi.dev/api';

const SWAPI_ENDPOINTS: Endpoints = {
    GET_CHARACTER: (personId: string) => `${BASE_SWAPI_ENDPOINT}/people/${personId}`
}

export default SWAPI_ENDPOINTS;
