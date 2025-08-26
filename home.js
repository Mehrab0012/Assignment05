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
        alert(`The number has been copied ${copy.value}`)

    })
})

//Coin counter and calling
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
       

        const div = document.createElement("div");

        //Fatching time
        const now = new Date();
        const time = now.toLocaleTimeString('en-US'); 
        //Inserting elements
        div.innerHTML = `
                <div class="inserted"></div>
                <div  class="history-items flex p-5 flex-row justify-between items-center bg-[#e8e8e8] mt-4">
                    <div class="  rounded-[16px]" >
                        <h4 id="emergency-name" class=" inter font-semibold text-[1.125rem] ">${call.dataset.value1}</h4>
                        <span id="emergency-number hind text-[1.125rem]">${call.dataset.value2}</span>
                    </div>
                    <div><span id="time">${time}</span></div>
                </div>
            `
        const container =document.getElementById("history");
        container.prepend(div);
        alert(`📞 Calling ${call.dataset.value1} ${call.dataset.value2}...`);
             
    })
})

//Clear functionality
const clear = idCatcher("clear-button");
clear.addEventListener('click', ()=>{
        const container =document.getElementById("history");
        container.innerHTML=``;
});