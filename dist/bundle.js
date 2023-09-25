(()=>{"use strict";var e;!function(e){e.uid="uid",e.name="name",e.username="username",e.email="email",e.img="img"}(e||(e={}));class s extends HTMLElement{static get observedAttributes(){return Object.keys({uid:null,name:null,username:null,email:null,img:null})}attributeChangedCallback(s,t,a){s===e.uid?this.uid=a?Number(a):void 0:this[s]=a,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="style.css">\n        <section>\n            <div class="divMother>\n            <div class="divSecond">\n            <h1>${this.name}</h1>\n            <img src="${this.img}"></img>\n            <p>Receta número: ${this.uid}</p>\n            <p>Receta hecha por: ${this.username}</p>\n            <p>Contacto del autor/a: ${this.email}</p>\n            </div>\n            </div>     \n        </section>`)}}customElements.define("my-profile",s);const t=[{id:1,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april.biz",img:"https://yanubapasteleria.com/wp-content/uploads/2020/05/Torta-De-Chocolate.jpg",description:{name:"Chocolate cake",ingredients:{step1:"3 cups flour (420 grams)",step2:"3 cups of sugar (600 grams)",step3:"2½ teaspoons baking soda",step4:"1 teaspoon baking powder or Royal yeast",step5:"1 pinch of salt",step6:"1 pinch of cinnamon powder",step7:"1½ cups cocoa or cocoa powder",step8:"1½ cups oil",step9:"2 cups of milk (480 milliliters)",step10:"2 teaspoons white vinegar",step11:"2 teaspoons vanilla essence",step12:"4 eggs"}}},{id:2,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april.biz",img:"https://i.pinimg.com/1200x/c2/03/5f/c2035f79f7a27df3af9f2841bf4285a1.jpg",description:{name:"Vainilla cake",ingredients:{step1:"500 grams of butter",step2:"1 kilogram of sugar",step3:"1 kilogram of prepared flour",step4:"8 eggs",step5:"1 liter of milk",step6:"1 teaspoon vanilla",step7:"1 teaspoon rum or whiskey",step8:"1 cup lemon zest"}}},{id:3,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april.biz",img:"https://static.wixstatic.com/media/de1ac3_1deee754808b416db47629e483506a00~mv2.jpg/v1/fill/w_800,h_800,al_c,q_85,enc_auto/de1ac3_1deee754808b416db47629e483506a00~mv2.jpg",description:{name:"Cheesecake of strawbery",ingredients:{step1:"(230 g.) 2 cups of ground Maria cookies",step2:"(112 g.) ½ cup butter at room temperature",step3:"(397 g.) 1 can of La Lechera® Condensed Milk",step4:"(290 g.) 1 can of Nestle® Milk Cream",step5:"(450 g.) 2 cups of cream cheese",step6:"(45 ml.) 3 tablespoons of lemon juice",step7:"(13 ml.) 1 tablespoon vanilla",step8:"(16 g.) 2 envelopes of unflavored gelatin",step9:"(120 ml.) ½ cup of water",step10:"(312 g.) 2 cups of clean strawberries, cut into halves",step11:"(60 ml.) ½ cup of water",step12:"(110 g.) ½ cup of sugar",step13:"(15 ml.) 1 tablespoon lemon juice"}}},{id:4,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april.biz",img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/coffee-cake-4d37cac.jpg?resize=768,574",description:{name:"Coffe cake",ingredients:{step1:"2 and ½ cups all-purpose flour",step2:"2 teaspoons baking powder",step3:"½ cup whole milk",step4:"8 oz 2 sticks of butter",step5:"3 eggs at room temperature",step6:"1 teaspoon vanilla extract",step7:"2 ¼ cups sugar",step8:"½ teaspoon salt",step9:"1 cup of very strong coffee"}}},{id:5,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april.biz",img:"https://emilyfabulous.com/wp-content/uploads/2020/09/slice-of-banana-cream-cake-on-a-plate-800x800.jpg",description:{name:"Banana cake",ingredients:{step1:"2 eggs (100 g)",step2:"1/2 cup LA LECHERA® CONDENSED MILK Light (140 g)",step3:"4 tablespoons vegetable oil (56 g)",step4:"4 ripe bananas (350 g)",step5:"1 cup oat flour (94 g)",step6:"1 teaspoon baking powder (5 g)",step7:"1 teaspoon ground cinnamon (5 g)",step8:"4 tablespoons NESTLÉ® Light CREAM MILK (60 g)",step9:"1 teaspoon vanilla essence (4 g)",step10:"1 teaspoon turmeric (3 g)"}}},{id:6,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april.biz",img:"https://sudamerglobal.com/wp-content/uploads/2021/06/Mr-Quick-Pandebonos-2.jpg",description:{name:"pandebonos",ingredients:{step1:"1 cup of coastal cheese (250 g)",step2:"½ cup cassava starch (130 g)",step3:"4 tablespoons cornstarch (32 g)",step4:"1 ½ tablespoons sugar (24 g)",step5:"¼ teaspoon baking powder (1 g)",step6:"½ teaspoon of MAGGI® NATURISIMO SAZONER (3 g)",step7:"1 egg (50 g)",step8:"3 tablespoons liquid milk (45 ml)"}}},{id:7,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april.biz",img:"https://beyondfrosting.com/wp-content/uploads/2022/03/Lemon-Ice-Cream-Cake_FI.jpg",description:{name:"Lemon and apple ice cream cake",ingredients:{step1:"6 Hony Bran cookies",step2:"4 cups plain yogurt",step3:"1 Envelope of Clight lemon juice",step4:"  2 Envelopes of ROYAL unflavored gelatin",step5:"1/2 cup of cold water",step6:"1 green apple cut in slices ",step7:"Maple syrup"}}},{id:8,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april.biz",img:"https://www.jerrys.gr/wp-content/uploads/2021/07/image4-800x800.jpeg",description:{name:"Sweet cake",ingredients:{step1:"400g Chocolate bar",step2:"300g Butter",step3:"6 Eggs",step4:"200g sugar",step5:"200g ground almonds",step6:"Butter, flour and granulated chocolate to taste"}}},{id:9,name:"Panquesitos MG",username:"panquesitosMG",email:"Panquesitos@april.biz",img:"https://bobthebakerboy.com/img/cakes/869_20230705104456-4367_20210911113343-IMG_0086.webp",description:{name:"Marbled cake",ingredients:{step1:"250 g Butter",step2:"250g sugar",step3:"5 Eggs",step4:"250g whole wheat flour",step5:"1 tablespoon cornstarch",step6:"1 tablespoon of baking powder",step7:"4 tablespoon chocolate powder",step8:"Butter and flour to taste",step9:"(120 ml.) ½ cup of water",step10:"(312 g.) 2 cups of clean strawberries, cut into halves",step11:"(60 ml.) ½ cup of water",step12:"(110 g.) ½ cup of sugar",step13:"(15 ml.) 1 tablespoon lemon juice"}}}];class a extends HTMLElement{constructor(){super(),this.profiles=[],this.attachShadow({mode:"open"}),t.forEach((s=>{const t=this.ownerDocument.createElement("my-profile");t.setAttribute(e.uid,String(s.id)),t.setAttribute(e.name,s.name),t.setAttribute(e.username,s.username),t.setAttribute(e.email,s.email),t.setAttribute(e.img,s.img),this.profiles.push(t)}))}connectedCallback(){this.render()}render(){var e;this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="style.css">\n            <section>\n            <img src="https://previews.123rf.com/images/barbyturas/barbyturas1701/barbyturas170100023/69802986-ilustraci%C3%B3n-de-vector-dibujado-a-mano-cupcakes-dulces-d%C3%ADa-de-san-valent%C3%ADn.jpg">\n            <img src="https://i.pinimg.com/736x/46/b4/cd/46b4cd63fb8f054b65fc242d01875923.jpg">\n            <img src="https://www.bonella.com.ec/-/media/Project/Upfield/Brands/Rama/Rama-EC/Assets/Recipes/sync-img/3a803509-9488-4073-929f-b0b3e786b88e.jpg?rev=252884417b3344d9ba3bbf6ad510450f&w=900">\n            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrvNcfPpuF_cAbr1B4zEtHfdSLJBBMfmfkvt_CS8i-oT5L6LxUhW5BEWXvcprsxlSVXw&usqp=CAU">\n            <img src="https://sweettale.co/wp-content/uploads/2022/07/Copy-of-Copy-of-DSC_0073.jpg">\n            <img src="https://caracol.com.co/resizer/XbOvV_a8hkaF2dGbV5R85bF9bJ4=/800x800/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/EPNLO5RVFRIPBEK5ETQAVS7QLM.jpg">\n            <img src="https://www.paramarte.co/cdn/shop/products/pie-de-manzana-03_1000x1000.jpg?v=1590787424">\n            <img src="https://content-cocina.lecturas.com/medio/2018/07/19/galletas-red-velvet_a9c4cac6_800x800.jpg">\n            <img src="https://content-cocina.lecturas.com/medio/2021/02/26/tiramisu_3a4234c0_800x800.jpg">\n            <img src="https://content-cocina.lecturas.com/medio/2021/01/04/chocovasitos_de_frutos_secos_y_bombones_rellenos_de_caramelo_06101458_800x800.jpg">\n            <img src="https://tienda.pasteleriamilhojaldres.com.co/317-large_default/brownie-con-helado.jpg">\n            <img src="https://cdn-icons-png.flaticon.com/512/45/45093.png">\n            </section>\n            \n\n            ',this.profiles.forEach((e=>{var s;null===(s=this.shadowRoot)||void 0===s||s.appendChild(e)})));const s=this.ownerDocument.createElement("div");s.classList.add("divElement"),null===(e=this.shadowRoot)||void 0===e||e.appendChild(s),this.profiles.forEach((e=>{s.appendChild(e)}))}}customElements.define("app-container",a)})();