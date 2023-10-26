"use server";

import { API_URL } from "@/lib/constants";
import axios from "axios";

export type CityData = {
    name: string,
    description: string,
    image: string
}

export const getAllCities = async () => (await axios.get<CityData[]>(`${API_URL}`)).data;

export const getCityData = async ({name}: {name: string}) => (await axios.get<CityData>(`${API_URL}/${name}`)).data;

//export const createCity = async (cityData: CityData) => await axios.post(`${API_URL}`, cityData);
