import { type api } from "@/types/common";
import axios from "axios";

export async function getForm(){
    try {
        const {data} = await axios.get<api>('https://icetite.vit.ac.in/technext/enquiry');
        return data.Records;
    } catch (error) {
        console.log(error);
        return [];
    }
}