

export class Active{
    constructor(data){
        this.abilities = data.abilities
        this.height = data.height
        this.moves = data.moves

    }

    get ActiveTemplate(){
        return `
        <div class="row p-2">
            <h2>${this.name}</h2><h5>Height: ${this.height}</h5>
            <div class="col-6 p-2"><b>Abilities:</b> ${this.abilities}</div>
            <div class="col-6 p-2"><b>Moves:</b> ${this.moves}</div>
        </div>
        `
    }
}