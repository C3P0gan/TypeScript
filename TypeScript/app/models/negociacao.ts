export class Negociacao {
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._valor = valor;
        this._quantidade = quantidade;
    }

    get data() {
        return this._data;
    }

    get valor() {
        return this._valor;
    }

    get quantidade() {
        return this._quantidade;
    }
}
