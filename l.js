const qouteText = document.querySelector(".quote");
const authorName=document.querySelector(".Author .name");
const qouteBtn = document.querySelector("button");
const soundBtn=document.querySelector(".sound");
const copyBtn=document.querySelector(".copy");

function RandomQoute() {
    qouteBtn.classList.add("loading");
    qouteBtn.innerText="Loading Qoute...";

  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      qouteText.innerHTML=result.content;
      authorName.innerText=result.author;
      qouteBtn.innerHTML="New Qoute";
      qouteBtn.classList.remove("loading");
    });
}
soundBtn.addEventListener("click",()=>{
    let utterance=new SpeechSynthesisUtterance(`${qouteText.innerHTML} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
})
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(qouteText.innerHTML);
    alert("Copied clipboard!!");
})

qouteBtn.addEventListener("click", RandomQoute);
