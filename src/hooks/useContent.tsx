import axios from "axios";
import { useEffect, useState } from 'react';

export function useContent() {
    const [contents, setContents] = useState([]);   
    const token = localStorage.getItem("token");
    console.log("The token is " , token);
        if (!token) {
            console.error("No token found. Please sign in.");
            return Promise.reject("No token"); // Early return if no token
        }

        function refresh() {   
                                
         axios.get('http://localhost:3000/api/v1/content', {
                headers: {
                    'Authorization':  token,
                }
            }) .then((response) => {
                setContents(response.data.content);
                console.log(response.data.content);
            })
            // .then((response) => {
                // console.log(response);
                // console.log(response.data);
        // console.log(response.data.content);
                //@ts-ignore

                    

            // })  
    } 

    useEffect(() => {      
      // console.log(response);
        // console.log(response.data);  
        // console.log(response.data.content);
        // let interval = setInterval(() => {
        //     refresh()  
        // }, 10 * 1000)

        // return () => { 
        //     clearInterval(interval);
        // }  
        refresh() 
    }, []);    

    return {contents, refresh};
}