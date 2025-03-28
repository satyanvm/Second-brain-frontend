import { Button } from "../components/Button.tsx";
import { Input } from "../components/Input.tsx";
import "../App.css";
import React from "react";
import axios from "axios";
import { BACKEND_URL } from "../components/Config.ts";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export function Signin(ref:any){

    
    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const navigate = useNavigate();

    async function signin() {
 
        try{
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        console.log(usernameRef.current.value);
        const response = await axios.post('http://localhost:3000/api/v1/signin', {   
                    username,
                    password       
            })   

        const jwt = response.data.token;
        console.log("Below is response.json.token");
        console.log(response.data.token);
        //@ts-ignore
        const id = response.data.userId;
        localStorage.setItem("token", jwt);
        localStorage.setItem("theuserid", id);

        // redirect user to the dashboard
       navigate('/dashboard');
        } catch(e){
            console.error(e);
        }
    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className=" p-8 bg-white rounded-2xl">
        <Input ref = {usernameRef} placeholder="Username" ></Input>
        <Input ref = {passwordRef} placeholder="Password"  ></Input> 
        <div className="flex justify-center">
        <Button onClick = {signin} fullWidth = {true} variant =  "primary" text = "Signin" size = "md" loading={false}/>              
        </div>  
        </div>   
    </div>
}
      
          

