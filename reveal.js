


function mostrarBox(element) {
    const section = element.closest('.ver-mais');
    const esconder = section.querySelector('.esconder');
    const allSections = document.querySelectorAll('.ver-mais');
    document.querySelectorAll('.ver-mais')
    const prevScrollY = window.scrollY

    // Fecha todas as outras seções
    allSections.forEach(sec => {
        if (sec !== section) {
            sec.querySelector('.esconder').classList.remove('mostrar');
            sec.querySelector('.text-verMais').innerHTML = 'Ver mais &dArr;';
            sec.querySelector('.text-verMais').style.marginTop = '10px';
        }
    });

    if (esconder.classList.contains('mostrar')) {
        esconder.classList.remove('mostrar');
        element.innerHTML = 'Ver mais &dArr;';
        element.style.marginTop = '10px';
    } else {
        esconder.classList.add('mostrar');
        element.innerHTML = 'Ver menos &uArr;';
        element.style.marginTop = '30px';
    }

    //Manter a posição da tela
    window.scrollY({top:prevScrollY})
}

function animar(){
    const btn = document.getElementById('btn-menu')
    const menu = document.getElementById('menu-mobile')
   menu.classList.toggle('abrir')
    btn.classList.toggle('ativando')
}

function mudarModo(){
    let corpo = document.querySelector('.dark')
    let cab = document.querySelector('.cabecalho')
    
   
    cab.classList.toggle('dark')
    corpo.classList.toggle('light')
    
  
  }



















    // let mostrar = document.querySelector('.esconder')
    // mostrar.classList.toggle('exibir')





// scrollReveal({reset:true})

// //Topo do site

// scrollReveal().reveal('.texto-topo',
//     {
//         duration: 2000,
//         distance: '90px'
//     }
// )
// revelar.reveal('.box',
//     {
//         duration: 2000,
//         distance: '90px'
//     }
// )
