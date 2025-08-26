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
    })
})