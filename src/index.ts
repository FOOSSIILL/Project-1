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
            profileCard.setAttribute(Attribute.uid,String(user.id));
            profileCard.setAttribute(Attribute.name,user.name);
            profileCard.setAttribute(Attribute.username,user.username);
            profileCard.setAttribute(Attribute.email,user.email);
            profileCard.setAttribute(Attribute.img,user.img);
            // profileCard.setAttribute(Attribute.description,user.description);
            this.profiles.push(profileCard);
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="style.css">
            .perfil-container{
                border-radius: 100%;
                height: 100%;
            }
            <section>
            <img src="https://previews.123rf.com/images/barbyturas/barbyturas1701/barbyturas170100023/69802986-ilustraci%C3%B3n-de-vector-dibujado-a-mano-cupcakes-dulces-d%C3%ADa-de-san-valent%C3%ADn.jpg">
            <img src="https://i.pinimg.com/736x/46/b4/cd/46b4cd63fb8f054b65fc242d01875923.jpg">
            <img src="https://www.bonella.com.ec/-/media/Project/Upfield/Brands/Rama/Rama-EC/Assets/Recipes/sync-img/3a803509-9488-4073-929f-b0b3e786b88e.jpg?rev=252884417b3344d9ba3bbf6ad510450f&w=900">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrvNcfPpuF_cAbr1B4zEtHfdSLJBBMfmfkvt_CS8i-oT5L6LxUhW5BEWXvcprsxlSVXw&usqp=CAU">
            <img src="https://sweettale.co/wp-content/uploads/2022/07/Copy-of-Copy-of-DSC_0073.jpg">
            <img src="https://caracol.com.co/resizer/XbOvV_a8hkaF2dGbV5R85bF9bJ4=/800x800/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/EPNLO5RVFRIPBEK5ETQAVS7QLM.jpg">
            <img src="https://www.paramarte.co/cdn/shop/products/pie-de-manzana-03_1000x1000.jpg?v=1590787424">
            <img src="https://content-cocina.lecturas.com/medio/2018/07/19/galletas-red-velvet_a9c4cac6_800x800.jpg">
            <img src="https://tienda.pasteleriamilhojaldres.com.co/317-large_default/brownie-con-helado.jpg">
            <img src="https://eatsymarket.com/cdn/shop/products/Heladoartesanal_conos_2a428d96-4f0e-445d-98af-416263afb12f.jpg?v=1665521139">
            <img src="https://content-cocina.lecturas.com/medio/2018/07/19/tiramisu-del-veneto_f49fa0ca_800x800.jpg">
            <img src="https://cdn-icons-png.flaticon.com/512/45/45093.png">
            </section>
            

            `;

            this.profiles.forEach((profile) => {
                this.shadowRoot?.appendChild(profile);
            })
        }

        const divElement = this.ownerDocument.createElement('div'); 
            divElement.classList.add('divElement') 
            this.shadowRoot?.appendChild(divElement)
            this.profiles.forEach(profiles => {
                divElement.appendChild(profiles)
            })
        

    }        
}

customElements.define("app-container",AppContainer);