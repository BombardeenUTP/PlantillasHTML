const buttonCart$=document.getElementById('buttoncart')
const contanimate$= document.getElementById('contanimate')
const cartHeaderCont$=document.getElementById('cartHeaderCont')
buttonCart$.addEventListener('click',()=>{
    contanimate$.classList.toggle('show')
})
contanimate$.addEventListener('click',(e)=>{
    e.stopPropagation();
    contanimate$.classList.toggle('show')
})
cartHeaderCont$.addEventListener('click',(e)=>{
    contanimate$.classList.toggle('show')
})

