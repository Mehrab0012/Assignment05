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

// Coin Counter


