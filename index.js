window.addEventListener('keydown',(e)=>{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`)
   
    if(!audio){
        return;
    }
    audio.currentTime=0; //rewind to the start
    audio.play();
    key.classList.add('playing')
    
})
window.addEventListener('keydown',()=>{
    function removeTransition(e){
        //if(e.propertyName!=='transform') return;
         console.log(e)
    }
    const keys=document.querySelectorAll('.key')
    console.log(keys)

    keys.forEach(key=> key.addEventListener('transitionend',removeTransition))
})




