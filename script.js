const mouse = document.querySelector('.mouse')
const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove',(e)=>{
    mouse.style.left = e.x-500+'px'
    mouse.style.top = e.y-500+'px'
    cursor.style.left = e.x+'px'
    cursor.style.top = e.y+'px'
})
const exp = document.querySelector('.exp')
const sec2 = document.querySelector('.sec2')
const div7 = document.getElementById('div7')

// exp.addEventListener('click',()=>{
//     for(let i=0; i<100;i++){
//         sec2.scrollTop += 1
//         setTimeout(() => {
//             sec2.scrollTop += 1
//             console.log('edrtyu')
//         },i*1000);
//     }
// })

exp.addEventListener('click',()=>{
    let i=0
    const animate = ()=>{
        i++
        sec2.scrollTop += 1
        if(i<100){
            setInterval(animate,i*100000000)
        }
    }
})

const thing = document.querySelector('.thing')
const a = document.querySelector('.a')
const x = document.querySelector('.x')

thing.addEventListener('click',()=>{
    a.style.display = 'flex'
    cursor.style.zIndex = '20'
    a.style.animation = 'smt 0.3s 1'
})


x.addEventListener('click',()=>{
    cursor.style.zIndex = '-1'
    a.style.animation = 'snt 0.3s 1'
    setTimeout(()=>{
        a.style.display = 'none'
    },300)
})

const pic1 = document.querySelector('.pic1')
const pic2 = document.querySelector('.pic2')
const pic3 = document.querySelector('.pic3')
const pic4 = document.querySelector('.pic4')

const pic1a = document.querySelector('.pic1a')
const pic2a = document.querySelector('.pic2a')
const pic3a = document.querySelector('.pic3a')
const pic4a = document.querySelector('.pic4a')

const pic1b = document.querySelector('.pic1b')
const pic2b = document.querySelector('.pic2b')
const pic3b = document.querySelector('.pic3b')
const pic4b = document.querySelector('.pic4b')

pic1.addEventListener('mouseover',()=>{
    pic1b.style.filter = 'blur(3px)'
    pic1a.style.opacity = '1'
})
pic2.addEventListener('mouseover',()=>{
    pic2b.style.filter = 'blur(3px)'
    pic2a.style.opacity = '1'
})
pic3.addEventListener('mouseover',()=>{
    pic3b.style.filter = 'blur(3px)'
    pic3a.style.opacity = '1'
})
pic4.addEventListener('mouseover',()=>{
    pic4b.style.filter = 'blur(3px)'
    pic4a.style.opacity = '1'
})



pic1.addEventListener('mouseout',()=>{
    pic1b.style.filter = 'blur(0px)'
    pic1a.style.opacity = '0'
})
pic2.addEventListener('mouseout',()=>{
    pic2b.style.filter = 'blur(0px)'
    pic2a.style.opacity = '0'
})
pic3.addEventListener('mouseout',()=>{
    pic3b.style.filter = 'blur(0px)'
    pic3a.style.opacity = '0'
})
pic4.addEventListener('mouseout',()=>{
    pic4b.style.filter = 'blur(0px)'
    pic4a.style.opacity = '0'
})