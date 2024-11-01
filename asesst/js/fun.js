function showin(select){

    const Welcome = document.getElementById('Welcome');
    const Que_es= document.getElementById('que_es');
    const C_funciona= document.getElementById('c_funciona');
    const desc = document.getElementById('desc')

    if(select === 'que_es'){
        Que_es.classList.remove('d-none');
        Welcome.classList.add('d-none');
        C_funciona.classList.add('d-none');
        desc.classList.add('d-none');
    }else if(select === 'c_funciona'){
        Que_es.classList.add('d-none');
        Welcome.classList.add('d-none');
        C_funciona.classList.remove('d-none');
        desc.classList.add('d-none');
    }else if(select === 'desc'){
        Que_es.classList.add('d-none');
        Welcome.classList.add('d-none');
        C_funciona.classList.add('d-none');
        desc.classList.remove('d-none');
    }else if(select === 'Welcome'){
        Que_es.classList.add('d-none');
        Welcome.classList.remove('d-none');
        C_funciona.classList.add('d-none');
        desc.classList.add('d-none');
    }

}

function down(){
    const btnd = document.getElementById('down');

    if(btnd === 'down'){
        btnd.href.add('asesst/apk/EcoAlert.apk')
    }

}