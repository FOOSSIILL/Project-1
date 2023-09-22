export enum Attribute {
    "uid" = "uid",
    "name" = "name",
    "username" = "username",
    "email"= "email",
    "description" = "description",
}

class Profile extends HTMLElement{
    
    name?: string;
    uid?: number;
    username?: string;
    email?: string;
    description?: {
        name1: string,
        ingredients: {
            step1: string,
            step2: string,
            step3: string,
            step4: string,
            step5: string,
            step6: string,
            step7: string,
            step8: string,
            step9: string,
            step10: string,
            step11: string,
            step12: string,
        
            name2: string,
            ingredients2: {
                step1: string,
                step2: string,
                step3: string,
                step4: string,
                step5: string,
                step6: string,
                step7: string,
                step8: string,
            },

            name3: string,
            ingredients3: {
                step1: string,
                step2: string,
                step3: string,
                step4: string,
                step5: string,
                step6: string,
                step7: string,
                step8: string,
                step9: string,
                step10: string,
                step11: string,
                step12: string,
                step13: string,
            },

            name4: string,
            ingredients4: {
                step1: string,
                step2: string,
                step3: string,
                step4: string,
                step5: string,
                step6: string,
                step7: string,
                step8: string,
                step9: string,
            },

            name5: string,
            ingredients5: {
                step1: string,
                step2: string,
                step3: string,
                step4: string,
                step5: string,
                step6: string,
                step7: string,
                step8: string,
                step9: string,
                step10: string,
            },

            name6: string,
            ingredients6: {
                step1: string,
                step2: string,
                step3: string,
                step4: string,
                step5: string,
                step6: string,
                step7: string,
                step8: string,
            },

            name7: string,
            ingredients7: {
                step1: string,
                step2: string,
                step3: string,
                step4: string,
                step5: string,
                step6: string,
                step7: string,
            },

            name8: string,
            ingredients8: {
                step1: string,
                step2: string,
                step3: string,
                step4: string,
                step5: string,
                step6: string,
                step7: string,
            },

            name9: string,
            ingredients9: {
                step1: string,
                step2: string,
                step3: string,
                step4: string,
                step5: string,
                step6: string,
                step7: string,
                step8: string,
                step9: string,
                step10: string,
                step11: string,
                step12: string,
                step13: string,
            },
        },
    };
    
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            uid: null,
            name: null,
            username: null,
            email: null,
            description: null,
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
            <section>
            <h1>${this.name}</h1>
            <p>ID for one our users: ${this.uid}</p>
            <p>From: ${this.username}</p>
            <p>From: ${this.email}</p>
            <p>From: ${this.description}</p>
            </section>
            `
        }
    }
}

customElements.define("my-profile",Profile);
export default Profile;