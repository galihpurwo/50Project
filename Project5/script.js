const  box = document.querySelectorAll('.box')

window.addEventListener ('scroll' , checkBoxes)

checkBoxes()

function checkBoxes(){
    const pemicuBawah = (window.innerHeight / 5 * 4)

    box.forEach(kotak =>{
        const kotakAtas = kotak.getBoundingClientRect().top

        if(kotakAtas < pemicuBawah){
            kotak.classList.add('show')
        }else{
            kotak.classList.remove('show')
        }
    })
}