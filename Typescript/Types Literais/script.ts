function mostrarTexto(texto: string, alinhamento:'right' | 'left' | 'center'){
    return `<div style="text-align: ${alinhamento}">${texto}</div>`;
}

mostrarTexto( "Korvo", "center");

/////////////////////////////////

type VerdadeiroOuFalso = true|false;

function temNome(nome: string): VerdadeiroOuFalso{
    if(nome !== ""){
        return true;
    }else{
        return false;
    }
};

///////////////////////////////////
 /*
    ou type Opcoes = {
        width: number, 
        height: number
    }
 
 */

function configurar (propiedade:{ width: number, height: number} | 'auto'){
                //  (propiedade: Opcoes | 'auto')
};

configurar({width:100 , height: 200});
configurar('auto');
// X configurar ('automatic')
