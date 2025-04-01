import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
<<<<<<< HEAD
import "../App.css";        
import React from "react";
import { Button } from "../components/Button.tsx";
import { PlusIcon } from "../components/Icons/PlusIcon.tsx";  
import { ShareIcon } from "../components/Icons/ShareIcon.tsx";
import { Card } from "../components/Card.tsx";        
import { CreateContentModal } from "../components/ContentModal.tsx";     
=======
import "../App.css";
import React from "react";
import { Button } from "../components/Button.tsx";
import { PlusIcon } from "../components/Icons/PlusIcon.tsx";
import { ShareIcon } from "../components/Icons/ShareIcon.tsx";
import { Card } from "../components/Card.tsx";
import { CreateContentModal } from "../components/ContentModal.tsx";
>>>>>>> 98e90df30015edac02beaadb164bcf50275a864d
import { ShareContentModel } from "../components/ShareModel.tsx";
import { Sidebar } from "../components/SideBar.tsx";       
import { useContent } from "../hooks/useContent.tsx";
import {Tweet } from 'react-tweet';
<<<<<<< HEAD
import axios from "axios";
export  function Dashboard() {
const [modalOpen, setModalOpen] = useState(false);
const [sharemodalOpen, setShareBrainModalOpen] = useState(false);
 const [shareUrl, setShareUrl] = useState("");

    const {contents,refresh} = useContent();

    
  useEffect(() => { 
refresh();

  }, [modalOpen]);     

  // console.log({contents});                                          
=======
export  function Dashboard() {
const [modalOpen, setModalOpen] = useState(false);
const [sharemodalOpen, setShareBrainModalOpen] = useState(false);
  const {contents,refresh} = useContent();
    
  useEffect(() => { 
refresh();
  }, [modalOpen]);     

  // console.log({contents});
>>>>>>> 98e90df30015edac02beaadb164bcf50275a864d
// res.json({
//   contents
// })

  return (      
    <>
      <div>               
        <Sidebar />            
        <div className="p-4 ml-72 min-h-screen bg-gray-100 border-green-500">
          <CreateContentModal     
            open={modalOpen}      
            onclose = {() => {     
              setModalOpen(false);   
            // just re-render all the components here, so that the new tweet comes nicely in the first try only
             console.log("Button clicked");      
            }}   
<<<<<<< HEAD
          ></CreateContentModal>                                       
                                                                     
          <ShareContentModel shareUrl = {shareUrl} open =  {sharemodalOpen} 
          onclose={() => {
            setShareBrainModalOpen(false);                            
          }}        
      />

<div className="flex justify-end gap-4">   

=======
          ></CreateContentModal> 

          <ShareContentModel open = {sharemodalOpen} 
          onclose={() => {
            setShareBrainModalOpen(false);
          }}        
      />

<div className="flex justify-end gap-4">    
>>>>>>> 98e90df30015edac02beaadb164bcf50275a864d
          <Button    
            onClick={() => {        
              setModalOpen(true);   
            }} 
            size="lg"     
            variant="primary"    
            text="Add content"  
            startIcon={<PlusIcon></PlusIcon>}   
          ></Button>

          <Button
          onClick = { 
<<<<<<< HEAD
          async  () => { 
              setShareBrainModalOpen(true);
                                                                                      //  onclose()      
                              const response = await axios.post('http://localhost:3000/api/v1/brain/share', {
                                        share: true,
                                        userId: "ObjectId('67cc525aaa297042d30644eb')"
                                     },{
                                        headers: {  
                                            "Authorization": localStorage.getItem("token")
                                        }
                                     });             
                                     if(response.data){
                                        const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                                        setShareUrl(shareUrl);
                                        console.log("Below is the shareurl");
                                        console.log(shareUrl);
                                        // alert(`your share url is ${shareUrl}`);
                                     } else{
                                       alert("Response is empty");
                                     }
=======
            () => { 
              setShareBrainModalOpen(true);
>>>>>>> 98e90df30015edac02beaadb164bcf50275a864d
            }
          }
            size="lg"
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon size="md"></ShareIcon>}  
          ></Button>                     
        </div>                    
          <div className="flex p-2 gap-4 flex-wrap display-flex">   
                 
<<<<<<< HEAD
              <div className="gap-4 flex flex-wrap">       
          {                                                         
           contents.map(({type, link, title}) => 
                <Card   
                title={title}     
                link={link}        
                type={type}                
              ></Card>   
            ) 
            // printing the contents here if it is tweet
          }   
              </div>

              {/* <Card title = "Arvind sir" link = "https://youtu.be/LwzGyFM28SI?si=4DM7pu8k2DHKuWta" type = "youtube"/>
              <Card title = "Arvind sir TEDx talk" link = "https://youtu.be/MD4W_e3dJPs?si=f3QF3G9cvb48TDNK" type = "youtube"/> */}
            </div>
=======
              <div className="gap-4 flex flex-wrap">   
                      {      
                        contents.map(({type, link, title, userId}) => 

                             <Card    
                             title={title}     
                             link={link}        
                             type={type} 
                             userId = {userId} 
                           ></Card>   
                         ) 
                         // printing the contents here if it is tweet
                       } 
            
          {/* <Card title = "Arvind sir" link = "https://youtu.be/LwzGyFM28SI?si=4DM7pu8k2DHKuWta" type = "youtube"/>
              <Card title = "Arvind sir TEDx talk" link = "https://youtu.be/MD4W_e3dJPs?si=f3QF3G9cvb48TDNK" type = "youtube"/>  */}

              </div>

                       </div>
>>>>>>> 98e90df30015edac02beaadb164bcf50275a864d
          </div>
        </div>
    </>
  );
}
<<<<<<< HEAD
                                               
export default Dashboard;

=======

export default Dashboard;
>>>>>>> 98e90df30015edac02beaadb164bcf50275a864d
