
let btn = document.querySelector('#imperador')
let btn1 = document.querySelector('#rei')
let btn2 = document.querySelector('#real')
let btn3 = document.querySelector('#africano')
let btn4 = document.querySelector('#azul')
let btn5 = document.querySelector('#galapago')

let container = document.querySelector('.container')

btn.addEventListener('click',function(){
    if(container.style.visibility === 'hidden'){
        container.style.visibility = 'visible';
        container.innerHTML = "é a maior espécie de pinguim. É uma espécie marinha e pelágica. Mede até 1,2 m de altura, com peso entre 27 a 41 kg. Alimenta-se principalmente peixe, mas krill e cefalópodes podem ser componentes importantes na dieta. Sua distribuição é circumpolar no continente Antártico. É uma espécie 'Quase ameaçada' na categoria da IUCN."
    }
    else{
        container.style.visibility = 'hidden';
    }
})
btn1.addEventListener('click',function(){
    if(container.style.visibility === 'hidden'){
        container.style.visibility = 'visible';
        container.innerHTML = "é a segunda maior espécie, ficando atrás somente do pinguim-imperador. Mede cerca de 94 cm e pesa entre 13,5 a 16 kg. Sua alimentação é principalmente peixes, mas ocasionalmente podem se alimentar de cefalópodes também. Sua distribuição ocorre em ilhas e penínsulas subantárticas. Sua categoria da IUCN é 'Pouco preocupante'." 
    }
    else{
        container.style.visibility = 'hidden';
    }
})
btn2.addEventListener('click',function(){
    if(container.style.visibility === 'hidden'){
        container.style.visibility = 'visible';
        container.innerHTML = "antes considerado uma subespécie do pinguim-macaroni, esse pinguim mede entre 66 e 76 cm, pode pesar até 5,5 kg e alimenta-se de krill e lulas. Sua distribuição ocorre nas Ilhas Macquarie, Bishop e Clerk no oceano Antártico e está categorizado pela IUCN como 'Quase ameaçada'."
    }
    else{
        container.style.visibility = 'hidden';
    }
})
btn3.addEventListener('click',function(){
    if(container.style.visibility === 'hidden'){
        container.style.visibility = 'visible';
        container.innerHTML = "pode medir entre 61 e 71 cm de altura e pesar até 3 kg. Alimenta-se de peixes, lulas e crustáceos. Essa espécie é restrita ao sul da África e sua categoria pela IUCN é 'Em perigo'"
    }
    else{
        container.style.visibility = 'hidden';
    }
})
btn4.addEventListener('click',function(){
    if(container.style.visibility === 'hidden'){
        container.style.visibility = 'visible';
        container.innerHTML = "é a menor espécie de pinguim, chegando a até 41 cm de altura, com peso de até 1 kg. Sua alimentação consiste principalmente em peixes, mas pode se alimentar de cefalópodes e krill. Distribui-se pelo sul da Austrália e Nova Zelândia. Sua categoria pela IUCN é 'Pouco preocupante'"
    }
    else{
        container.style.visibility = 'hidden';
    }
})
btn5.addEventListener('click',function(){
    if(container.style.visibility === 'hidden'){
        container.style.visibility = 'visible';
        container.innerHTML = "essa espécie é restrita às Ilhas Galápagos, no Equador, o que deu origem ao seu nome comum. Mede até 53 cm de altura, pode pesar até 2,5 kg e alimenta-se de peixes. Sua categoria pela IUCN é 'Em perigo'."
    }
    else{
        container.style.visibility = 'hidden';
    }
})