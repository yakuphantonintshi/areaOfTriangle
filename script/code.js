document.querySelector('.calculate').addEventListener('click', () =>{
    let height = +document.querySelector('#height').value
    let breadth = +document.querySelector('#breadth').value
    let output = document.querySelector('.output')


    output.innerHTML = breadth/2 * height
})