import * as components from "./components/index"
import Profile, { Attribute } from "./components/profile/profile";
import { data } from "./Data";

class AppContainer extends HTMLElement {
    profiles: Profile[] = [];

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile") as Profile;
            profileCard.setAttribute(Attribute.name,user.name);
            profileCard.setAttribute(Attribute.uid,user.uid);
            profileCard.setAttribute(Attribute.city,user.city);
            this.profiles.push(profileCard);
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <h1>Holisss</h1>`;

            this.profiles.forEach((profile) => {
                this.shadowRoot?.appendChild(profile);
            })
        }
    }
}

customElements.define("app-container",AppContainer);