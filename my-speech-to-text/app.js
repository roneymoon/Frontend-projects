const boxContainer = document.querySelector(".box-container")
const voicesSelect = document.getElementById("voices_")
const textArea = document.getElementById("text")
const toggleBtn = document.getElementById("toggle")
const closeBtn = document.getElementById("close")
const readBtn = document.querySelector(".read-btn")

// toggle Text-box 
toggleBtn.addEventListener("click", () => {
    document.querySelector(".text-box").classList.toggle('show');
});

// close button functionality
closeBtn.addEventListener("click", () => {
    document.querySelector(".text-box").classList.remove("show")
});

// read-button functionality
readBtn.addEventListener("click", ()=>{
    setTextMessage(textArea.value)
    speakText();
})

const data = [
    {
        image: './img/drink.jpg',
        text: "I'm Thirsty"
    },
    {
        image: './img/food.jpg',
        text: "I'm Hungry"
    },
    {
        image: './img/tired.jpg',
        text: "I'm Tired"
    },
    {
        image: './img/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: './img/happy.jpg',
        text: "I'm Happy"
    },
    {
        image: './img/angry.jpg',
        text: "I'm Angry"
    },
    {
        image: './img/sad.jpg',
        text: "I'm Sad"
    },
    {
        image: './img/scared.jpg',
        text: "I'm Scared"
    },
    {
        image: './img/outside.jpg',
        text: 'I Want To Go Outside'
    },
    {
        image: './img/home.jpg',
        text: 'I Want To Go Home'
    },
    {
        image: './img/school.jpg',
        text: 'I Want To Go To School'
    },
    {
        image: './img/grandma.jpg',
        text: 'I Want To Go To Grandmas'
    }

]

data.forEach(createBox);

// creating voice cards
function createBox(item) {
    const box = document.createElement("div");

    const { image, text } = item;

    box.classList.add("box");
    box.innerHTML = `
    <div class="box rounded-lg border ml-[2rem] cursor-pointer border-black bg-yellow-100 flex flex-col w-[300px]">
        <img class="object-cover h-[200px] w-[100%] rounded-t-lg" src="${image}" alt="${text}">
        <p class="p-2 text-center text-xl capitalize ">${text}</p>
    </div>
    `;
    
    box.addEventListener("click", ()=>{
        setTextMessage(text)
        speakText()
        box.classList.add("active")
        setTimeout(() => {
            box.classList.remove("active")
        }, 800);
    });

    boxContainer.appendChild(box)
}

const message = new SpeechSynthesisUtterance();

let voices = [];

function setTextMessage(text){
    message.text = text;
}

// speak text functionality
function speakText(){
    speechSynthesis.speak(message);
}

// gets voices from speech-synthesis API
function getVoices(){
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        const option = document.createElement("option");
        option.classList.add("text-black")
        option.name = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        
        voicesSelect.appendChild(option);
    });
}

// sets the voice from the select pane
function setVoice(e){
    message.voice = voices.find(voice => voice.name === e.target.value);
}

// triggers the set-voice function when we select from list of voices
voicesSelect.addEventListener("click", setVoice);

// "voiceschanged" event when triggered it gets-voices into list of voices
speechSynthesis.addEventListener("voiceschanged", getVoices);

getVoices();

