setTimeout(() => {
    document.getElementById('soundTest')
        .play()
        .then(() => {
            console.log('sound played outside webview')
        })
        .catch(error => {
            console.log('error playing sound outside webview')
            console.log(error);
        });
}, 500);

window.addEventListener('message', (e) => {
    log("[???] messagereceived: " + e.data);
    console.log("received message", e);
});