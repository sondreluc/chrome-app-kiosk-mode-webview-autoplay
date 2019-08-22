setTimeout(function () {
    const output = document.getElementById('output')
    const audio = document.getElementById('soundTest')
    audio.play().then(function () {
        output.innerHTML = 'Sound plays!'
    }).catch(function (e) {
        output.innerHTML = e
    })
}, 3000)