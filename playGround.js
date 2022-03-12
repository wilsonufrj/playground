$(document).ready(function(){
    
    let tags = new Tag()
     $('.card-body').append(tags.builder())
    
})

class Tag{
    constructor(){
        this._quantidadeTags = ["CEPEL","Xlibs","UFRJ","fevereiro","março"];
    }

    builder(){
        let $divTag = $('<div>')
        let contador = 0;
        for(let quantidade=0;quantidade<this._quantidadeTags.length;quantidade++){
            if(quantidade<2){
                $divTag.append(this._criaTag(this._quantidadeTags[quantidade]));
            }
            else{
                contador++;

            }
        }
        $divTag.append(this._criaTag(contador))

        return $divTag;
    }

     _criaTag(value){
        let $tag = $("<span>");
        $tag.addClass("badge bg-secondary");
        $tag.addClass("tagStyle");
        if(this._isNumber(value)){
            $tag.text("+" + value);
        }
        else{
            $tag.text(value);
        }

        return $tag;
    }

    _isNumber(value){
        return typeof value === 'number' && isFinite(value);

    }
}




