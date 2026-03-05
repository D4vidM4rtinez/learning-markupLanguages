/* rotator.js
   Moves the inline rotating-word script into an external file.
*/
(function(){
    const words = ['la teva Boda','la teva Festa','la teva Celebració','la teva Reunió','al teu Festival'];
    let i = 0;
    const word = document.getElementById('rotating-word');
    if(!word) return;
    setInterval(() => {
        word.classList.add('hidden');
        setTimeout(() => {
            i = (i + 1);
            if(i >= words.length) i = 0;
            word.textContent = words[i];
            word.classList.remove('hidden');
        }, 400); // match the CSS transition duration
    }, 3000); // rotate every 3s
})();
