const load = document.querySelector('.loading-text')
const bg    = document.querySelector('.bg')

let umpama  = 0
//menentukan kecepatan blurnya dalam 30 detik
let kecepatanblur = setInterval(ngeblur,30)

//fungsi scale sebagai opacitynya
const scale =(num, in_min, in_max, out_min, out_max) =>{
    return ((num - in_min)*(out_max-out_min)) / (in_max -in_min) + out_min
}

//fungsi untuk nilai blurnya dengan min dan max persentasenya
 function ngeblur(){
    umpama++

        if(umpama > 99){
            clearInterval(kecepatanblur)
        }

    //menerjemahkan nilai persennya menjadi string    
    load.innerText = `${umpama}%`
    //menerjemahkan ke bluran string dengan mengambil fungsi scale
    load.style.opacity = scale(umpama, 0, 100, 1, 0)
    //menerjemahkan kebluran background dengan mengambil fungsi scale
    bg.style.filter = `blur(${scale(umpama, 0, 100, 30, 0)}px)`
}
