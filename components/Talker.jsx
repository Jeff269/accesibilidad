'use client';
import { useState } from 'react';


function Talker({children}) {
  
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();

  const [textToSpeech,setTextToSpeech] = useState()

  console.log(voices)

  function talk(texto){
    const utterThis = new SpeechSynthesisUtterance(texto);
    utterThis.lang = "es-ES";
    synth.speak(utterThis);
  }
  
  return (
    <span
      onMouseEnter={(e)=>{
        e.preventDefault();
        talk(e.target.textContent)
      }}

      onMouseOut={(e)=>{
        e.preventDefault();
        synth.cancel();
      }}


    >
      {children}
    </span>
  );
}

export default Talker;