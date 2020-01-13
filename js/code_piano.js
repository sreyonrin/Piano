const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => onPlaySound(key));
       
    
});

document.addEventListener('keydown',event => {
    const keyboard = event.key;
    document.querySelector('button').innerHTML = keyboard;
});

function onPlaySound(key) {
    const audioKey = document.getElementById(key.dataset.note);
    audioKey.play();

}