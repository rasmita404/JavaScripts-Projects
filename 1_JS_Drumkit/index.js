function clicked(num){
    const audio = this.document.querySelector(`audio[data-key="${num}"]`);
    const key = this.document.querySelector(`.key[data-key="${num}"]`);
    console.log(key);
    if(!audio) return; //stops the function
    
    audio.currentTime =0;//rewind to the start
    audio.play();
    key.classList.add('playing');
    const tout = setTimeout(highlight, 70);

}
function removeTransition()
{
    console.log(this);
    this.classList.remove('playing');
}
