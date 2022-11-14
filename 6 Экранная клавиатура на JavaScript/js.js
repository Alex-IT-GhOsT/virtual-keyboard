'use strict'

let textarea = document.querySelector('textarea');

let buttons = document.querySelectorAll('button');

let btnShift = document.querySelector('.mainKeyBoard-rowLeft_five .left-num1');

let btnAlt = document.querySelector('.mainKeyBoard-rowLeft_six .left-num3');

let btnCap = document.querySelector('.mainKeyBoard-rowLeft_four .left-num1');

let three = document.querySelector('.mainKeyBoard-rowLeft_three');

let btnThree = three.querySelectorAll('button');

let spans = document.querySelectorAll('span');

let btnRu = document.querySelector('.left-num2-RU');

let btnEn = document.querySelector('.left-num6-EN');

let btnDel = document.querySelector('.left-num14')

let btnEnter = document.querySelector('.left-num13 ENTER');





buttons.forEach(elem => {

    

    elem.addEventListener('click',function(ev){

        buttons.forEach(el => {

            el.classList.remove('active')
            
        })

        elem.classList.add('active')
        
        

        if(elem.classList.contains('active')){

            if(elem.classList.contains('TAB') || elem.classList.contains ('ENTER') 
            || elem.classList.contains('CTRL') || elem.classList.contains('ALT') 
            || elem.classList.contains('SHIFT') || elem.classList.contains('WIN')
            || elem.classList.contains('CAP') || elem.classList.contains('left-num2-RU')
            || elem.classList.contains('left-num6-EN') || elem.classList.contains('PR')) {

                if(ev.target === btnEn){
                    spans.forEach(el => {
                        
                        if(el.classList.contains('ru')){

                           btnEn.setAttribute('disabled','disabled')

                            el.classList.add('ruClose')

                            el.classList.remove('ru')

                            btnRu.removeAttribute('disabled')


                        }else{

                            el.classList.remove('second')

                            el.classList.add('secondActive')
                              
                        }

                        
                    })
                }else if(ev.target === btnRu){

                    spans.forEach(el => {

                        if(el.classList.contains('secondActive')){

                            btnRu.setAttribute('disabled','disabled')

                            el.classList.remove('secondActive')

                            el.classList.add('second')

                            btnEn.removeAttribute('disabled')
                            
                        }else{

                            el.classList.remove('ruClose')

                            el.classList.add('ru')
                            
                        }
                        
                    })
                }

                
                
            }
        
        }

        if(ev.target === btnCap){
            spans.forEach(el => {
                el.classList.toggle('activeCapsLoks') 
               
            })
        }

 

        if(elem.classList.contains('TAB')){

            textarea.value += '    '
        }

        if(elem.classList.contains('SPACE')){

            textarea.value +=' '
        }

        if(elem.classList.contains('DEL')){

            textarea.value = delStr(textarea.value)
        }

        if(elem.classList.contains('ENTER')){
            pressEnter(textarea.value)
        }


        
    })


    

    


})



spans.forEach(el => {
    el.addEventListener('click',function(){

        console.log(el.textContent,el)
        
        if(el.classList.contains('activeCapsLoks')){
            
            textarea.value += this.textContent.toLowerCase()
        }else{
            textarea.value += this.textContent.toUpperCase()
        }
    })
})


function delStr(str){

   return str.replace(/.$/, '')
   
   
}

function pressEnter(btn){
    return textarea.value = textarea.value+'\r\n'
}

