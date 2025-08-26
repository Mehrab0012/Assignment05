// For caching classes and Id
function classesCatcher(classes){
    const catcher =document.querySelectorAll(classes);
    return catcher;
}
function idCatcher(id){
    const catcher =document.getElementById(id);
    return catcher;
}

// Heart Counter

const heartsButton = classesCatcher(".heart-btn");
const heartsCount = idCatcher("hearts");


heartsButton.forEach(heart=>{
    heart.addEventListener('click', ()=> {
    const heartsCountNumber = parseInt(heartsCount.innerText);
    idCatcher("hearts").innerText=heartsCountNumber+1;
    alert("clicked")

})
});

// Copy Button
const copyButton = classesCatcher(".copy-button");
const copies = idCatcher("copies");

copyButton.forEach(copy=>{
    copy.addEventListener('click', ()=>{
        const copyCountNumber =parseInt(copies.innerText);
        idCatcher("copies").innerText=copyCountNumber+1;
        navigator.clipboard.writeText(copy.value);

    })
})

//Coin counter
const callButton = classesCatcher(".call-button");
const coins = idCatcher("coins");

callButton.forEach(call=>{
    call.addEventListener('click', ()=>{
        const coinNumbers= parseInt(coins.innerText);
        if(coinNumbers<20){
            alert("INSUFFICIENT COINS");
            return "";
        }
        idCatcher("coins").innerText = coinNumbers-20;

        callButton.forEach(button => {
        const div = document.createElement("div");

        //Fatching time
        const now = new Date();
        const time = now.toLocaleTimeString('en-US'); 
        //Inserting elements
        div.innerHTML = `
                <div class="flex flex-row justify-center items-center bg-[#F9FAFB] mt-4">
                    <div class=" p-4 rounded-[16px]" >
                        <h4 id="emergency-name" class=" inter font-semibold text-[1.125rem] ">${button.dataset.value1}</h4>
                        <span id="emergency-number hind text-[1.125rem]">${button.dataset.value2}</span>
                    </div>
                    <div><span id="time">${time}</span></div>
                </div>
            `
        const container =document.getElementById("history");
        container.appendChild(div);
        });
             
    })
})

//Clear functionality
const clear = idCatcher("clear-button");
clear.addEventListener('click', ()=>{

        const container =document.getElementById("history");
        container.innerHTML=``;
        console.log("clicked");
});