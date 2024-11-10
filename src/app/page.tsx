'use client';
import ImageComp from "@/components/ImageComp";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Home() { 
  // console.log("Home page");  
  return (
  <>
<div className='bg-transparent w-full' id='container'>
    <div id="bottomDiv">
        <div id="bottomInnerDiv">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 '>Hello, I m{" "}</span>
        <br />
        <TypeAnimation
      sequence={[
        ' Nazia Imran',
        1000,
        'Web Developer',
        1000,
        'Mobile Developer',
        1000,
        'UX/UI Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />       
        </h1>          
              
             <p>I am a web Designer with extensive experience for over 7 months. My expertise is to create and design website, completely and fully functionally.</p><br/>
             <div id="logoDiv">
                <Link href="https://www.facebook.com/">
                    <button className="logobtn" id="f" >
                        <Image className="rounded-lg" src={"/images/facebook.png"} alt="image" width={40} height={40}/>
                    </button>
                </Link>
                
                <Link href="https://www.linkedin.com/">
                    <button className="logobtn" id="in">
                    <Image className="rounded-lg" src={"/images/linkedin.png"} alt="image" width={40} height={40}/>
                    </button>
                </Link>
                
                <Link href="https://www.youtube.com">
                    <button className="logobtn" id="you">
                    <Image className="rounded-lg" src={"/images/youtube.png"} alt="image" width={40} height={40}/>
                    </button>
                </Link>

                <Link href="https://www.instagram.com/">
                    <button className="logobtn" id="insta">
                        <Image className="rounded-lg" src={"/images/instagram.png"} alt="image" width={40} height={40}/>
                    </button>
                </Link>
             </div>

             <div id="cvDiv">
                <Link href="C:\Users\LENOVO\OneDrive\Desktop\myfirstportfolio\milestone1-static-resume\index.html" target="_blank">
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3" id="cvbtn">
                        Download CV
                    </button>
                </Link>
             </div>                     
        </div>

        <div id="bottomInnerSecDiv">
          <div id="photoDiv"> 
            <ImageComp/> 
          </div>                   
        </div>
    </div>  
 </div>   
  </>
  )
};
