


    function escrevendoLetra(){

        function ativaletra(elemento){
    
            const arrText = elemento.innerHTML.split('')
            elemento.innerHTML = '';
        
            arrText.forEach((Letra , i ) => {
             setTimeout(()=>{
                elemento.innerHTML += Letra; 
             }, 75* i)
            })
        }
        
        
        const titulo = document.querySelector('.digitando');
        
        ativaletra(titulo);
    
    }

    escrevendoLetra()

   


    function menuMobile(){

        const ativaMenu =document.querySelector('.fa-bars');
        const navMenu = document.querySelector('header .nav-primaria');
        
        ativaMenu.addEventListener('click', ()=>{
            ativaMenu.classList.toggle('fa-x');
            navMenu.classList.toggle('ativado');
        });

    }
    menuMobile()

    function sobreMin(){


        const divExperiencia = document.querySelectorAll('.experince_content div')
        const liExperiencia = document.querySelectorAll('.experince_content ul li')


        const divEducation = document.querySelectorAll('.education_content div')
        const liEducation = document.querySelectorAll('.education_content ul li')


        divExperiencia[0].classList.add('ativo')
        divEducation[0].classList.add('ativo')
        liExperiencia[0].classList.add('ativo')
        liEducation[0].classList.add('ativo')


        function slideShow(index){
            divExperiencia.forEach((div)=>{
                div.classList.remove('ativo');
            })

            liExperiencia.forEach((botao)=>{
                botao.classList.remove('ativo')

            })

            divExperiencia[index].classList.add('ativo')
            liExperiencia[index].classList.add('ativo')

        }

        function slideShow2(index){
            divEducation.forEach((div)=>{
                div.classList.remove('ativo');
            });

            liEducation.forEach((botao)=>{
                botao.classList.remove('ativo')

            });

            divEducation[index].classList.add('ativo')
            liEducation[index].classList.add('ativo')

        }

            liExperiencia.forEach((event,index)=>{

                event.addEventListener('click',()=>{
                    slideShow(index)
                });

            });

            liEducation.forEach((event,index)=>{

                event.addEventListener('click',()=>{
                    slideShow2(index)
                });

            });

    }
    
    sobreMin();


  

    
   
    



















