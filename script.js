
const mySpeech = document.querySelector('.mySpeech');


const speechRec = window.speechRecognition ||  window.webkitSpeechRecognition;

const recognition = new speechRec();
console.log(recognition);

recognition.onstart = ()=> {
    console.log("recording...");
    
};

recognition.onresult = (event)=>{
    console.log(event);
    let transcript = event.results[0][0]. transcript;

    if(transcript.includes("erase")){
       return mySpeech.innerHTML = "";
    };
    if(transcript.includes("How are you") ){
        const responsesToHowAreYou = [
            "I'm doing well, thank you!",
            "I'm great, thanks for asking!",
            "I'm feeling good today, how about you?",
            "I'm doing fine, how about yourself?",
            "I'm doing alright, thanks!",
            "I'm not too bad, thanks for checking in!",
            "I'm doing good, how about you?",
            "I'm feeling pretty good today, thanks!",
            "I'm doing well, and you?",
            "I'm doing okay, thanks for asking!"
          ];
          
        readOutLoud(responsesToHowAreYou[Math.floor(Math.random() * responsesToHowAreYou.length)]);
    };
    
    if(transcript.includes("background")){
        const list = ["red","blue","green","yellow","pink"]
        const color = list[Math.floor(Math.random() * list.length)];
        if(transcript.includes("pink") ){
            document.body.style.backgroundColor = "pink";
        }else if(transcript.includes("background") && transcript.includes("purple") ){
            document.body.style.backgroundColor = "purple";
        }else{

            document.body.style.backgroundColor = color;
        };
    };
    mySpeech.innerHTML += transcript + " <br/>";
   
};

recognition.onend = ()=>{
    recognition.start();
};

recognition.start();
 
// function day(){
//     recognition.onend = ()=>{
//         console.log("recognition ended");
//         recognition.start();
//     };
// };

// day();

const readOutLoud = (message)=>{
    try {
        const speech = new SpeechSynthesisUtterance();
        speech.text = message;
        speech.pitch = 1;
        speech.volume = 1;
        speech.rate = 1;
        if (mySpeech.innerHTML === 'hello') {
            speech.text = 'Hi buddy';
        }
        speechSynthesis.speak(speech);
        speech.onend = ()=>{
            // day();
            console.log("object.speak");
        }
    } catch (error) {
        console.log(error);
    }
    
}   ;



// if ('speechSynthesis' in window) {
//     console.log('Speech Synthesis API is supported in this browser');
//   } else {
//     console.log('Speech Synthesis API is not supported in this browser');
//   }