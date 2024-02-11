function playSound(event){
    const audio=document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    const key=document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.add('played');
    
}
function remove(event){
    const key=document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.remove('played');
}
window.addEventListener('keyup',remove);
window.addEventListener('keydown',playSound);