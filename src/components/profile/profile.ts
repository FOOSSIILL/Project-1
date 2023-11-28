export enum Attribute {
    "uid" = "uid",
    "name" = "name",
    "username" = "username",
    "email"= "email",
    "img" = "img",
    // "description" = "description",

}

class Profile extends HTMLElement{
    
    name?: string;
    uid?: number;
    username?: string;
    email?: string;
    img?: string;
    // description?: {
    //     name: string,
    //     ingredients: {
    //         step1: string,
    //         step2: string,
    //         step3: string,
    //         step4: string,
    //         step5: string,
    //         step6: string,
    //         step7: string,
    //         step8: string,
    //         step9: string,
    //         step10: string,
    //         step11: string,
    //         step12: string,
    //     },
    // };
    
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            uid: null,
            name: null,
            username: null,
            email: null,
            img: null,
            // description: null,
            
        }
        return Object.keys(attrs); //  return ["name","uid","city"]
    }
    
    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case Attribute.uid:
                // if(newValue) {
                //     this.uid = Number(newValue)
                // }else{
                //     this.uid = undefined
                // }
                this.uid = newValue ? Number(newValue) : undefined;
            break;

            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="style.css">
             <section class="profile">
            <h1>${this.name}</h1>
            <img src="${this.img}"></img>
            <p>Receta número: ${this.uid}</p>
            <p>Receta hecha por: ${this.username}</p>
            <p>Contacto del autor/a: ${this.email}</p>
        </section>`

        }
    }
}

customElements.define("my-profile",Profile);
export default Profile;