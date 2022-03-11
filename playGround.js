let quantidadeTags = ["CEPEL","Xlibs","UFRJ","fevereiro","março","Catastrofe"]

$(document).ready(function(){
    
    let contador = 0;
    for(let quantidade=0;quantidade<quantidadeTags.length;quantidade++){
        if(quantidade<2){
            $('.card-body').append(criaTag(quantidadeTags[quantidade]));
        }
        else{
            contador++;
        }
    }
    $('.card-body').append(criaTag(contador));
    
})


function criaTag(value){
    let $tag = $("<span>");
    $tag.addClass("badge bg-secondary");
    $tag.addClass("tagStyle");
    if(isNumber(value)){
        $tag.text("+" + value);
    }
    else{
        $tag.text(value);
    }

    return $tag;

}

//Cookbook javaScrpit
function isNumber(value){
    return typeof value === 'number' && isFinite(value);
}


