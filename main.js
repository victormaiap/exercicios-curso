const form = document.getElementById('form-style')
const campoA = document.getElementById('campo-a')
const campoB = document.getElementById('campo-b')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a').value;
    const campoB = document.getElementById('campo-b').value;

    const valorA = Number(campoA)
    const valorB = Number(campoB)

    if (valorB > valorA) {
        document.querySelector('.success-msg').style.display = 'block';
    } else {
        document.querySelector('.fail-msg').style.display = 'block';
    }
});

campoA.addEventListener('click', function (e){
    document.querySelector('.success-msg').style.display = 'none';
    document.querySelector('.fail-msg').style.display = 'none';
})

campoB.addEventListener('click', function (e){
    document.querySelector('.success-msg').style.display = 'none';
    document.querySelector('.fail-msg').style.display = 'none';
})