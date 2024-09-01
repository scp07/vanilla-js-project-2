// const random = Math.floor(Math.random()*16777215).toString(16);
// console.log(random)



 const button = document.querySelector('.button')
 const demo = document.querySelector('.demo')

 const color = ()=>{
    const math = Math.random()*10001125;
    const random=Math.floor(math).toString(16)
    document.body.style.backgroundColor='#'+random
    demo.innerHTML="#"+random
 }

 button.addEventListener('click',color)


