import { fetchAxios } from './fetchAxios';



export const verifyEmail = async (code) => {

    try{
        const res = await fetchAxios({
            method: 'GET',
            url: `/verify-email/${code}`,
            headers: { 
              'Accept': '*/*',
              'Content-Type': 'application/json',
            },
            responseType: "application/json"
        });

        return res;


    }catch(error){
        return error;
    }

}