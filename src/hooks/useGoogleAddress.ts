import { useEffect, useState } from "react";
import axios from 'axios';

export const useGoogleAddress = (address: string) => {
    const [map, setMap] = useState({});
    const APIKey = 'AIzaSyAWDPbJbWYxXtQB5TD_SsN_YxylpnUTeOY';
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${APIKey}`;

    useEffect( () => {
        axios(API).then((response: any) => {
            console.log(response)
            setMap(response.data.results[0].geometry.location);
        });
        
    }, [])

    return map;
}