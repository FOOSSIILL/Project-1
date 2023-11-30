(()=>{"use strict";var e;!function(e){e.uid="uid",e.name="name",e.username="username",e.email="email",e.img="img"}(e||(e={}));class t extends HTMLElement{static get observedAttributes(){return Object.keys({uid:null,name:null,username:null,email:null,img:null})}attributeChangedCallback(t,s,a){t===e.uid?this.uid=a?Number(a):void 0:this[t]=a,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="style.css">\n             <section class="profile">\n            <h1>${this.name}</h1>\n            <img src="${this.img}"></img>\n            <p>Receta número: ${this.uid}</p>\n            <p>Receta hecha por: ${this.username}</p>\n            <p>Contacto del autor/a: ${this.email}</p>\n        </section>`)}}customElements.define("my-profile",t);const s=[{id:1,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://yanubapasteleria.com/wp-content/uploads/2020/05/Torta-De-Chocolate.jpg",description:{name:"Chocolate cake",ingredients:{step1:"3 cups flour (420 grams)",step2:"3 cups of sugar (600 grams)",step3:"2½ teaspoons baking soda",step4:"1 teaspoon baking powder or Royal yeast",step5:"1 pinch of salt",step6:"1 pinch of cinnamon powder",step7:"1½ cups cocoa or cocoa powder",step8:"1½ cups oil",step9:"2 cups of milk (480 milliliters)",step10:"2 teaspoons white vinegar",step11:"2 teaspoons vanilla essence",step12:"4 eggs"}}},{id:2,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://i.pinimg.com/1200x/c2/03/5f/c2035f79f7a27df3af9f2841bf4285a1.jpg",description:{name:"Vainilla cake",ingredients:{step1:"500 grams of butter",step2:"1 kilogram of sugar",step3:"1 kilogram of prepared flour",step4:"8 eggs",step5:"1 liter of milk",step6:"1 teaspoon vanilla",step7:"1 teaspoon rum or whiskey",step8:"1 cup lemon zest"}}},{id:3,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://static.wixstatic.com/media/de1ac3_1deee754808b416db47629e483506a00~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_auto/de1ac3_1deee754808b416db47629e483506a00~mv2.jpg",description:{name:"Cheesecake of strawbery",ingredients:{step1:"(230 g.) 2 cups of ground Maria cookies",step2:"(112 g.) ½ cup butter at room temperature",step3:"(397 g.) 1 can of La Lechera® Condensed Milk",step4:"(290 g.) 1 can of Nestle® Milk Cream",step5:"(450 g.) 2 cups of cream cheese",step6:"(45 ml.) 3 tablespoons of lemon juice",step7:"(13 ml.) 1 tablespoon vanilla",step8:"(16 g.) 2 envelopes of unflavored gelatin",step9:"(120 ml.) ½ cup of water",step10:"(312 g.) 2 cups of clean strawberries, cut into halves",step11:"(60 ml.) ½ cup of water",step12:"(110 g.) ½ cup of sugar",step13:"(15 ml.) 1 tablespoon lemon juice"}}},{id:4,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coffee-cake-4d37cac.jpg?resize=768,574",description:{name:"Coffe cake",ingredients:{step1:"2 and ½ cups all-purpose flour",step2:"2 teaspoons baking powder",step3:"½ cup whole milk",step4:"8 oz 2 sticks of butter",step5:"3 eggs at room temperature",step6:"1 teaspoon vanilla extract",step7:"2 ¼ cups sugar",step8:"½ teaspoon salt",step9:"1 cup of very strong coffee"}}},{id:5,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://emilyfabulous.com/wp-content/uploads/2020/09/slice-of-banana-cream-cake-on-a-plate-800x800.jpg",description:{name:"Banana cake",ingredients:{step1:"2 eggs (100 g)",step2:"1/2 cup LA LECHERA® CONDENSED MILK Light (140 g)",step3:"4 tablespoons vegetable oil (56 g)",step4:"4 ripe bananas (350 g)",step5:"1 cup oat flour (94 g)",step6:"1 teaspoon baking powder (5 g)",step7:"1 teaspoon ground cinnamon (5 g)",step8:"4 tablespoons NESTLÉ® Light CREAM MILK (60 g)",step9:"1 teaspoon vanilla essence (4 g)",step10:"1 teaspoon turmeric (3 g)"}}},{id:6,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://sudamerglobal.com/wp-content/uploads/2021/06/Mr-Quick-Pandebonos-2.jpg",description:{name:"pandebonos",ingredients:{step1:"1 cup of coastal cheese (250 g)",step2:"½ cup cassava starch (130 g)",step3:"4 tablespoons cornstarch (32 g)",step4:"1 ½ tablespoons sugar (24 g)",step5:"¼ teaspoon baking powder (1 g)",step6:"½ teaspoon of MAGGI® NATURISIMO SAZONER (3 g)",step7:"1 egg (50 g)",step8:"3 tablespoons liquid milk (45 ml)"}}},{id:7,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://beyondfrosting.com/wp-content/uploads/2022/03/Lemon-Ice-Cream-Cake_FI.jpg",description:{name:"Lemon and apple ice cream cake",ingredients:{step1:"6 Hony Bran cookies",step2:"4 cups plain yogurt",step3:"1 Envelope of Clight lemon juice",step4:"2 Envelopes of ROYAL unflavored gelatin",step5:"1/2 cup of cold water",step6:"1 green apple cut in slices",step7:"Maple syrup"}}},{id:8,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://www.jerrys.gr/wp-content/uploads/2021/07/image4-800x800.jpeg",description:{name:"Sweet cake",ingredients:{step1:"400g Chocolate bar",step2:"300g Butter",step3:"6 Eggs",step4:"200g sugar",step5:"200g ground almonds",step6:"Butter, flour and granulated chocolate to taste"}}},{id:9,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://bobthebakerboy.com/img/cakes/869_20230705104456-4367_20210911113343-IMG_0086.webp",description:{name:"Marbled cake",ingredients:{step1:"250 g Butter",step2:"250g sugar",step3:"5 Eggs",step4:"250g whole wheat flour",step5:"1 tablespoon cornstarch",step6:"1 tablespoon of baking powder",step7:"4 tablespoon chocolate powder",step8:"Butter and flour to taste",step9:"(120 ml.) ½ cup of water",step10:"(312 g.) 2 cups of clean strawberries, cut into halves",step11:"(60 ml.) ½ cup of water",step12:"(110 g.) ½ cup of sugar",step13:"(15 ml.) 1 tablespoon lemon juice"}}},{id:10,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://content-cocina.lecturas.com/medio/2020/05/13/brownie_de_chocolate_con_leche_con_nueces_y_cerezas_a6f5f4fe_800x800.jpg",description:{name:"Brownies",ingredients:{step1:"200g of butter",step2:"225g of white sugar or powdered sugar",step3:"180g of chocolate with minimum 70% cocoa content",step4:"2 large eggs",step5:"120g of wheat flour",step6:"30g cocoa powder",step7:"1/2 tablespoon vanilla essence",step8:"A handful of walnuts (optional)"}}},{id:11,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://content-cocina.lecturas.com/medio/2018/07/19/bizcocho-de-platano-y-caramelo_64cd374b_800x800.jpg",description:{name:"Banana cake",ingredients:{step1:"22 sticks of butter",step2:"2 cups Sugar (400 grams)",step3:"3 cups of flour (420 grams)",step4:"4 Eggs",step5:"½ cup Cream",step6:"2 cups of mashed banana",step7:"2 teaspoons vanilla",step8:"2 teaspoons of baking soda",step9:"½ teaspoon salt",step10:"3 Banana slices"}}},{id:12,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april",img:"https://sweetvanessa.com.co/wp-content/uploads/2019/12/torta-negra-2-min.jpg",description:{name:"Wrapped black cake",ingredients:{step1:"500 grams All-purpose wheat flour",step2:"400 grams White sugar",step3:"400 grams Butter",step4:"10 eggs",step5:"Grated zest and juice of one orange",step6:"1/2 teaspoon Salt",step7:"1 teaspoon baking powder",step8:"2 teaspoons of baking soda",step9:"6 tablespoons Caramel color",step10:"1 teaspoon Cinnamon powder",step11:"1/2 teaspoon Grated nutmeg",step12:"1 tablespoon Vanilla essence",step13:"60 grams Walnuts or almonds, chopped in small pieces, for the soaking of the fruits",step14:"1 cup Samson Wine or red wine of your choice",step15:"80 grams Brevas or figs in syrup",step16:"80 grams Raisins",step17:"80 grams Prunes cut in small pieces",step18:"1 teaspoon Cinnamon powder",step19:"3 cloves"}}}];class a extends HTMLElement{constructor(){super(),this.profiles=[],this.attachShadow({mode:"open"}),s.forEach((t=>{const s=this.ownerDocument.createElement("my-profile");s.setAttribute(e.uid,String(t.id)),s.setAttribute(e.name,t.name),s.setAttribute(e.username,t.username),s.setAttribute(e.email,t.email),s.setAttribute(e.img,t.img),this.profiles.push(s)}))}connectedCallback(){this.render()}render(){var e;this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="style.css">\n                <section>\n                <div class="login-container">\n                <h1>Login</h1>\n                <form>\n\n                <div class="container9">\n                <label for="username and email">Username and email</label>\n                <input type="text" id="username and email" name="username and email" required>\n                <label for="password">Password</label>\n                <input type="password" id="password" name="password" required>\n                </div>\n              \n                <button type="submit">Login</button>\n                <section>\n                <label for="forgot the password">Forgot the password</label> <br>\n                <label for="you don\'t have an account, create one">You don\'t have an account, create one</label>\n                </section>\n                \n            </form>\n        </div>\n            </section>\n            <section>\n            <div class="Register-container">\n            <h1>Register</h1>\n            <form>\n            <div class="container0">\n            <label for="fill in the required fields">Fill in the required fields</label> <br>\n            </div>\n\n             <div class="container5">\n             <label for="first name">First name</label>\n             <input type="text" id="first name" name="first name" required>\n             </div>\n\n              <div class="container4">\n              <label for="last name">Last name</label>\n              <input type="text" id="last name" name="last name" required> <br>\n              </div>\n\n\n              <div class="container3">\n              <label for="place an email">Place an email</label> <br>\n              </div>\n              \n              <div class="container2">\n              <label for="email">Email</label> <br>\n              <input type="text" id="email" name="email" required> <br>\n              </div>\n              <div class="container6">\n              <label for="create a username">Create a username</label> <br>\n              <label for="it must have a minimum of 6 to 12 characters">It must have a minimum of 6 to 12 characters</label> <br>\n              </div>\n\n              <div class="container7">\n              <label for="username">Username</label> \n              <input type="text" id="username" name="username" required>\n              <label for="digit number">Digit number</label>\n              <input type="text" id="digit number" name="digitnumber" required> <br> \n              </div>\n              <button type="submit">Safe</button>\n            </form>\n          </div>\n            </section>\n            <section>\n            <div class="perfil-container">\n            <h1>Perfil</h1>\n             <img src="https://previews.123rf.com/images/barbyturas/barbyturas1701/barbyturas170100023/69802986-ilustraci%C3%B3n-de-vector-dibujado-a-mano-cupcakes-dulces-d%C3%ADa-de-san-valent%C3%ADn.jpg">\n            <form>\n            \n            <label for="panquesitosMG">PanquesitosMG</label>\n            <h4>@PanquesitosMG</h4>\n            <label for="plus.google.com/109937510618111444294">plus.google.com/109937510618111444294</label> <br>\n            <label for="10 followers o 50 Following">10 Followers o 50 Following </label>\n\n              <button type="submit">share</button>\n              <button type="submit">Edit profile</button>\n              <section>\n              <img src="https://sweettale.co/wp-content/uploads/2022/07/Copy-of-Copy-of-DSC_0073.jpg">\n              <img src="https://content-cocina.lecturas.com/medio/2018/07/19/galletas-red-velvet_a9c4cac6_800x800.jpg">\n              <img src="https://i.pinimg.com/736x/46/b4/cd/46b4cd63fb8f054b65fc242d01875923.jpg">\n              </section>\n              <section>\n              <img src="https://i.pinimg.com/originals/79/cb/91/79cb9142ceb6a2645a0e55856384f9f0.jpg">\n              <img src="https://mercadosilvestre.cl/cdn/shop/articles/IMG_9729_800x.jpg?v=1621262722">\n              <img src="https://thebigmansworld.com/wp-content/uploads/2020/11/almond-flour-waffles4.jpg">\n              </section>\n              <section>\n              <img src="https://gatodumas.com.co/bogota/wp-content/uploads/sites/15/2020/10/Galletas-Humedas-de-chocolate.jpg">\n              <img src="https://yanubapasteleria.com/wp-content/uploads/2020/11/Pan-Huevo.jpg">\n              <img src="https://jumbocolombiaio.vtexassets.com/arquivos/ids/222815-800-800?v=637816529533530000&width=800&height=800&aspect=true">\n              </section>\n            </form>\n          </div>\n            </section>\n\n            <section>\n            <div class="Edit-profile-container">\n            <h1>Edit profile</h1>\n            <form>\n\n            </section>\n            <label for="keep your personal data private. Any user who can view your profile can see the information you add here.">Keep your personal data private. Any user who can view your profile can see the information you add here.</label>\n            <h4>Photos</h4>\n            <img src="https://mr-cupcake.com/wp-content/uploads/2021/04/0000_MRCUPCAKE-ENE2021-27.jpg">\n            <button type="submit">Modify</button> \n              <div class="container11">\n              <label for="name">Name</label> \n              <input type="text" id="name" name="name" required>\n              </div>\n              <div class="container12">\n              <label for="last name">Last name</label> \n              <input type="text" id="last name" name="last name" required> <br>\n              </div>\n              <div class="container">\n              <label for="info">Info</label> <br>\n              <input type="text" id="info" name="info"> <br>\n              <label for="website">Website</label> <br>\n              <input type="text" name="website" id="website" required> <br>\n              <label for="username">Username</label> <br>\n              <input type="text" name="username" id="username" required>\n              </div>\n            </form>\n           \n          </div>\n            </section>\n          \n            <section>\n            <img src="https://previews.123rf.com/images/barbyturas/barbyturas1701/barbyturas170100023/69802986-ilustraci%C3%B3n-de-vector-dibujado-a-mano-cupcakes-dulces-d%C3%ADa-de-san-valent%C3%ADn.jpg">\n            <img src="https://i.pinimg.com/736x/46/b4/cd/46b4cd63fb8f054b65fc242d01875923.jpg">\n            <img src="https://www.bonella.com.ec/-/media/Project/Upfield/Brands/Rama/Rama-EC/Assets/Recipes/sync-img/3a803509-9488-4073-929f-b0b3e786b88e.jpg?rev=252884417b3344d9ba3bbf6ad510450f&w=900">\n            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrvNcfPpuF_cAbr1B4zEtHfdSLJBBMfmfkvt_CS8i-oT5L6LxUhW5BEWXvcprsxlSVXw&usqp=CAU">\n            <img src="https://sweettale.co/wp-content/uploads/2022/07/Copy-of-Copy-of-DSC_0073.jpg">\n            <img src="https://caracol.com.co/resizer/XbOvV_a8hkaF2dGbV5R85bF9bJ4=/800x800/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/EPNLO5RVFRIPBEK5ETQAVS7QLM.jpg">\n            <img src="https://www.paramarte.co/cdn/shop/products/pie-de-manzana-03_1000x1000.jpg?v=1590787424">\n            <img src="https://content-cocina.lecturas.com/medio/2018/07/19/galletas-red-velvet_a9c4cac6_800x800.jpg">\n            <img src="https://tienda.pasteleriamilhojaldres.com.co/317-large_default/brownie-con-helado.jpg">\n            <img src="https://eatsymarket.com/cdn/shop/products/Heladoartesanal_conos_2a428d96-4f0e-445d-98af-416263afb12f.jpg?v=1665521139">\n            <img src="https://content-cocina.lecturas.com/medio/2018/07/19/tiramisu-del-veneto_f49fa0ca_800x800.jpg">\n            <img src="https://cdn-icons-png.flaticon.com/512/45/45093.png">\n            </section>\n           \n\n            ',this.profiles.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)})));const t=this.ownerDocument.createElement("div");t.classList.add("divElement"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(t),this.profiles.forEach((e=>{t.appendChild(e)}))}}customElements.define("app-container",a)})();