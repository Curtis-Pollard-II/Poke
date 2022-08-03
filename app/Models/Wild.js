


export class Wild {
    constructor({name, url}) {
        this.name = name
        this.url = url
    }

    get Template(){
        return`
        <div class="selectable no-select bg-light p-2 pb-0 shadow mb-3 rounded" onclick="app.wildController.setActive('${this.url}')">
            <p class="fs-3 text-center">${this.name}</p>
        </div>
        `
    }
}
