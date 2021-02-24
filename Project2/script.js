const   progress = document.getElementById('progress')
const   prev = document.getElementById('prev')
const   next = document.getElementById('next')
const   circles = document.querySelectorAll('.circle')

let currentActive = 1
 //fungsi next sebagai button untuk diklik akan bertambah sampai panjang circle
next.addEventListener('click', ()=> {
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})
 //fungsi prev sebagai button untuk diklik akan berkurang sampai circle ke 1
prev.addEventListener('click',  ()=>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
   update()
})

//fungsi untuk ketika diklik next/prev,circlenya akan bergerak 
function update(){
    circles.forEach((circle, idx) =>{
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    //kondisi untuk menyempurnakan gerakan widthnya
    const actives = document.querySelectorAll('.active')
    //kondisi ketika tombol next dan prev disable ketika kondisi tertentu
    progress.style.width = (actives.length -1) / (circles.length -1 )* 100 + '%'
if(currentActive === 1){
    prev.disabled= true
}else if(currentActive === circles.length){
    next.disabled = true
}else{
    next.disabled = false
    prev.disabled = false
}


}