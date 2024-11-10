import React from "react";
import Image from "next/image";

function About() {
  return (
  <>
   <div className="aboutbottomDiv" id="ac">
     <div id="aboutpicturediv">
      <Image className="rounded-lg" src={"/images/lap.jpg"} alt="labtop" width={500} height={500}/>
     </div>
      <div id="aboutbottomInnerDiv">
        <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600'>Acadmic Qualification:</h2>
        <ul>
          <li>Matriculation - Khan Children Academy</li>
          <li>Intermediate - Abbdullah Goverment Girl college, Karachi</li>
          <li>BA - karachi University</li>
        </ul>
        <br />

        <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 '>Certifcation:</h2>
          <ul>
            <li>CIT : from Anus Academy</li>
            <li>
              Software Engineering : From Governor Sindh IT Initiative <br />
               of Web 3.0Metavarse and Artificial Intelligence.
            </li>
          </ul>

      </div>
    </div>
    
    </>
  );
}

export default About;
