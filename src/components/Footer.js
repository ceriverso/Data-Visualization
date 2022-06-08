import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import style from '../css/footer.module.css';


function Footer() {
    const [pic, setPic] = useState([]);
    
    useEffect(() => {
        const params = 
                  {
                        // model: "https://d1a370nemizbjq.cloudfront.net/246b3438-80b3-47eb-9d53-39134c3991b1.glb",
                        model: "https://d1a370nemizbjq.cloudfront.net/092d843b-f7a8-44b7-9f2e-e100abd56305.glb",
                        scene: "fullbody-portrait-v1",
                        armature: "ArmatureTargetMale",
                        blendShapes: {}
                  }            
                  const http = new XMLHttpRequest()
                  http.open("POST", "https://render.readyplayer.me/render")
                  http.setRequestHeader("Content-type", "application/json")
                  http.send(JSON.stringify(params))
                  http.onload = function(){
                        let result = JSON.parse(http.responseText)
                       setPic(result.renders[0])
                  }
    }, [])

    return (
        <div className={style.footer}>  
                <Image src="/images/fullpic.png" alt="Avatar" width={100} height={100}/>  
                <Image src="/images/black-logo.png" alt="logo" width={100} height={100}/>
                
                {/* <Image src="/https://d1a370nemizbjq.cloudfront.net/092d843b-f7a8-44b7-9f2e-e100abd56305.glb" alt="github-logo" width={25} height={10}/> */}
                <p>&copy;2022 Brandon Taft</p>
        </div>
    )
}

export default Footer