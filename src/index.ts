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
                <section>
                <div class="login-container">
                <h1>Login</h1>
                <form>

                <div class="container9">
                <label for="username and email">Username and email</label>
                <input type="text" id="username and email" name="username and email" required>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
                </div>
              
                <button type="submit">Login</button>
                <section>
                <label for="forgot the password">Forgot the password</label> <br>
                <label for="you don't have an account, create one">You don't have an account, create one</label>
                </section>
                
            </form>
        </div>
            </section>
            <section>
            <div class="Register-container">
            <h1>Register</h1>
            <form>
            <div class="container0">
            <label for="fill in the required fields">Fill in the required fields</label> <br>
            </div>

             <div class="container5">
             <label for="first name">First name</label>
             <input type="text" id="first name" name="first name" required>
             </div>

              <div class="container4">
              <label for="last name">Last name</label>
              <input type="text" id="last name" name="last name" required> <br>
              </div>


              <div class="container3">
              <label for="place an email">Place an email</label> <br>
              </div>
              
              <div class="container2">
              <label for="email">Email</label> <br>
              <input type="text" id="email" name="email" required> <br>
              </div>
              <div class="container6">
              <label for="create a username">Create a username</label> <br>
              <label for="it must have a minimum of 6 to 12 characters">It must have a minimum of 6 to 12 characters</label> <br>
              </div>

              <div class="container7">
              <label for="username">Username</label> 
              <input type="text" id="username" name="username" required>
              <label for="digit number">Digit number</label>
              <input type="text" id="digit number" name="digitnumber" required> <br> 
              </div>
              <button type="submit">Safe</button>
            </form>
          </div>
            </section>
            <section>
            <div class="perfil-container">
            <h1>Perfil</h1>
             <img src="https://previews.123rf.com/images/barbyturas/barbyturas1701/barbyturas170100023/69802986-ilustraci%C3%B3n-de-vector-dibujado-a-mano-cupcakes-dulces-d%C3%ADa-de-san-valent%C3%ADn.jpg">
            <form>
            
            <label for="panquesitosMG">PanquesitosMG</label>
            <h4>@PanquesitosMG</h4>
            <label for="plus.google.com/109937510618111444294">plus.google.com/109937510618111444294</label> <br>
            <label for="10 followers o 50 Following">10 Followers o 50 Following </label>

              <button type="submit">share</button>
              <button type="submit">Edit profile</button>
              <section>
              <img src="https://sweettale.co/wp-content/uploads/2022/07/Copy-of-Copy-of-DSC_0073.jpg">
              <img src="https://content-cocina.lecturas.com/medio/2018/07/19/galletas-red-velvet_a9c4cac6_800x800.jpg">
              <img src="https://i.pinimg.com/736x/46/b4/cd/46b4cd63fb8f054b65fc242d01875923.jpg">
              </section>
              <section>
              <img src="https://i.pinimg.com/originals/79/cb/91/79cb9142ceb6a2645a0e55856384f9f0.jpg">
              <img src="https://mercadosilvestre.cl/cdn/shop/articles/IMG_9729_800x.jpg?v=1621262722">
              <img src="https://thebigmansworld.com/wp-content/uploads/2020/11/almond-flour-waffles4.jpg">
              </section>
              <section>
              <img src="https://gatodumas.com.co/bogota/wp-content/uploads/sites/15/2020/10/Galletas-Humedas-de-chocolate.jpg">
              <img src="https://yanubapasteleria.com/wp-content/uploads/2020/11/Pan-Huevo.jpg">
              <img src="https://jumbocolombiaio.vtexassets.com/arquivos/ids/222815-800-800?v=637816529533530000&width=800&height=800&aspect=true">
              </section>
            </form>
          </div>
            </section>

            <section>
            <div class="Edit-profile-container">
            <h1>Edit profile</h1>
            <form>
            <section>
            <label for="keep your personal data private. Any user who can view your profile can see the information you add here.">Keep your personal data private. Any user who can view your profile can see the information you add here.</label>
            <h4>Photos</h4>
            <img src="https://mr-cupcake.com/wp-content/uploads/2021/04/0000_MRCUPCAKE-ENE2021-27.jpg">
            <div class="Buttom">
            <button type="submit">Modify</button>
            </div>
            <div class="section-buttom">
            <label for="name">Name</label> 
            <input type="text" id="name" name="name" required> 
            </div>  
            <div class="section-buttom2">
            <label for="last name">Last name</label> 
            <input type="text" id="last name" name="last name" required>
            </div>
            <div class="section-buttom3">
            <label for="info">Info</label> 
            <input type="text" id="info" name="info"> 
            </div>
            <div class="section-buttom4">
            <label for="website">Website</label> 
            <input type="text" name="website" id="website" required> 
            </div>
            <div class="section-buttom5">
            <label for="username">Username</label> 
            <input type="text" name="username" id="username" required>
            </div>
            </form>         
          </div>
        </section>
          
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