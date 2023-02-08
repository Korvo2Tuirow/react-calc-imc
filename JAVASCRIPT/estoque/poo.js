export class Produto{
    constructor(descricao, quantidade, valor, valorTotal){
      this._descricao = descricao;
      this._quantidade = quantidade;
      this._valor = valor;
      this._valorTotal = this._quantidade * this._valor;
    };

    get descricao(){
      return this._descricao;
    }
    get quantidade(){
      return this._quantidade;
    }
    get valor(){
      return this._valor;
    }
    get valorTotal(){
      return this._valorTotal;
    }
    
    set descricao(descricao){
      return this._descricao = descricao;
    }
    set quantidade(quantidade){
      return this._quantidade = quantidade;
    }
    set valor(valor){
      return this._valor = valor;
    }
    set valorTotal(valorTotal){
      return this._valorTotal = valorTotal;
    }

  };

