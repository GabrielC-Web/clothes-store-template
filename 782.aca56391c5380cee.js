"use strict";(self.webpackChunkclothes_store_template=self.webpackChunkclothes_store_template||[]).push([[782],{4782:(j,p,a)=>{a.r(p),a.d(p,{ProductsModule:()=>L});var l=a(6814),m=a(2519),c=a(5854),t=a(5879),f=a(3834),u=a(617);function x(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"mat-icon",4),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.stepBack())}),t._uU(1,"chevron_left"),t.qZA()}}function h(e,r){if(1&e&&(t.TgZ(0,"div",5)(1,"span",6),t._uU(2),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.hij(" ",n," ")}}let v=(()=>{class e{constructor(){this.posts=[],this.slice=[1,2,3,4,5],this.currentPage=1,this.totalPages=10}stepForward(){this.slice.push(this.slice[this.slice.length-1]+1),this.slice.shift()}stepBack(){this.slice.unshift(this.slice[0]-1),this.slice.pop()}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-cmm-paginator"]],inputs:{posts:"posts"},decls:7,vars:4,consts:[[1,"row","justify-content-end","align-items-center","flex-row"],[1,"m-0",2,"width","fit-content"],["class","p-0 cursor-pointer",3,"click",4,"ngIf"],["class","p-2 d-flex justify-content-center align-items-center mx-1 rounded","style","background: #DFDDDE;width: 30px;height: 30px;",4,"ngFor","ngForOf"],[1,"p-0","cursor-pointer",3,"click"],[1,"p-2","d-flex","justify-content-center","align-items-center","mx-1","rounded",2,"background","#DFDDDE","width","30px","height","30px"],[1,"m-0"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2),t.qZA(),t.YNc(3,x,2,0,"mat-icon",2),t.YNc(4,h,3,1,"div",3),t.TgZ(5,"mat-icon",4),t.NdJ("click",function(){return i.stepForward()}),t._uU(6,"chevron_right"),t.qZA()()),2&o&&(t.xp6(2),t.AsE(" ",i.currentPage," DE ",i.totalPages," P\xc1GINAS "),t.xp6(1),t.Q6J("ngIf",i.slice[0]>1),t.xp6(1),t.Q6J("ngForOf",i.slice))},dependencies:[u.Hw,l.sg,l.O5]})}return e})();function Z(e,r){if(1&e&&(t.TgZ(0,"div",7),t._UZ(1,"cmp-core-product-card",8),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Q6J("data",n)}}const A=function(e){return{"border-right":e}};function C(e,r){if(1&e&&(t.TgZ(0,"div",9),t._UZ(1,"img",10),t.TgZ(2,"span",11),t._uU(3),t.qZA(),t.TgZ(4,"p",12),t._uU(5),t.qZA()()),2&e){const n=r.$implicit,o=r.last,i=t.oxw();t.Q6J("ngStyle",t.VKq(4,A,o||i.smallMode?"":"1px solid black")),t.xp6(1),t.Q6J("src",n.icon,t.LSH),t.xp6(2),t.Oqu(n.info),t.xp6(2),t.Oqu(n.text)}}let y=(()=>{class e{constructor(){this.products=[{image:c.Wc.white_shoe,name:"SNEAKERS MARCA",price:"158",variants:["#D7D3D2","#000","#E5B8A3"]},{image:c.Wc.tall_shoe,name:"SANDALIAS MARCA",price:"200",variants:["#E5B8A3","#000"]},{image:c.Wc.t_shirt,name:"CAMISETA MARCA",price:"158",variants:["#fff","#000","#148954","#0C1284","#A46D09"]},{image:c.Wc.jean,name:"JEANS MARCA",price:"158",variants:["#356281","#6F9FC5","#000"]},{image:c.Wc.purse,name:"CARTERA ALTAS",price:"200",variants:["#000"]},{image:c.Wc.cap,name:"GORRA MARCA",price:"200",variants:["#D7D3D2","#000","#074459"]},{image:c.Wc.cap,name:"GORRA MARCA",price:"200",variants:["#D7D3D2","#000","#074459"]},{image:c.Wc.cap,name:"GORRA MARCA",price:"200",variants:["#D7D3D2","#000","#074459"]},{image:c.Wc.cap,name:"GORRA MARCA",price:"200",variants:["#D7D3D2","#000","#074459"]}],this.items=[{icon:c.ci.van,info:"Env\xedo Gratis",text:"Solo dentro la ciudad de Caracas"},{icon:c.ci.return,info:"Devoluciones",text:"Devoluciones gratuitas y cambios"},{icon:c.ci.purse,info:"Empaque exclusivo",text:"Empaque exclusivo por marca"}],this.smallMode=!1}onResize(n){this.smallMode=window.innerWidth<=767}ngOnInit(){this.smallMode=window.innerWidth<=767}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["pag-products-layout"]],hostBindings:function(o,i){1&o&&t.NdJ("resize",function(d){return i.onResize(d)},!1,t.Jf7)},decls:7,vars:3,consts:[[1,"row","mx-auto","w-100","bg-white"],[1,"col-12","my-5"],[1,"row","g-0","w-100","justify-content-center","mt-5"],["class","col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-5",4,"ngFor","ngForOf"],[1,"col-12","px-4",3,"posts"],[1,"w-100","row","mx-auto","py-4",2,"background-color","#E7E7E7"],["class","col-sm-4 d-flex flex-column align-items-center justify-content-center",3,"ngStyle",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-md-4","d-flex","justify-content-center","mb-5"],["routerLink","/products/detail",1,"w-100","d-flex","justify-content-center",3,"data"],[1,"col-sm-4","d-flex","flex-column","align-items-center","justify-content-center",3,"ngStyle"],[1,"w-100",2,"max-width","100px",3,"src"],[1,"text-center","cmm-txt-thin-bold","w-100",2,"max-width","150px"],[1,"text-center",2,"max-width","150px"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"section",1)(2,"div",2),t.YNc(3,Z,2,1,"div",3),t._UZ(4,"cmp-cmm-paginator",4),t.qZA()()(),t.TgZ(5,"div",5),t.YNc(6,C,6,6,"div",6),t.qZA()),2&o&&(t.xp6(3),t.Q6J("ngForOf",i.products),t.xp6(1),t.Q6J("posts",i.products),t.xp6(2),t.Q6J("ngForOf",i.items))},dependencies:[l.sg,l.PC,f.u,v,m.rH]})}return e})();var g=a(6385),_=a(5216);function T(e,r){if(1&e&&(t.TgZ(0,"div",23)(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"span",21),t._uU(4),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.Oqu(n.key+":"),t.xp6(2),t.Oqu(n.value)}}function w(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",10)(1,"div",11)(2,"div",12),t._UZ(3,"img",13),t.TgZ(4,"div",14)(5,"h4",15),t._uU(6),t.qZA(),t.TgZ(7,"span",16),t._uU(8),t.qZA(),t.YNc(9,T,5,2,"div",17),t.ALo(10,"keyvalue"),t.TgZ(11,"span",16),t._uU(12),t.qZA()()(),t.TgZ(13,"div",18)(14,"div",19)(15,"mat-icon",20),t.NdJ("click",function(){const s=t.CHM(n).$implicit,d=t.oxw();return t.KtG(d.removeProductUnit(s))}),t._uU(16,"remove"),t.qZA(),t.TgZ(17,"span",21),t._uU(18),t.qZA(),t.TgZ(19,"mat-icon",20),t.NdJ("click",function(){const s=t.CHM(n).$implicit,d=t.oxw();return t.KtG(d.addProductUnit(s))}),t._uU(20,"add"),t.qZA()(),t.TgZ(21,"div",5),t._uU(22),t.qZA(),t.TgZ(23,"mat-icon",22),t.NdJ("click",function(){const s=t.CHM(n).$implicit,d=t.oxw();return t.KtG(d.removeFromKart(s))}),t._uU(24,"delete"),t.qZA()()()()}if(2&e){const n=r.$implicit;t.xp6(3),t.Q6J("src",n.image,t.LSH),t.xp6(3),t.Oqu(n.name),t.xp6(2),t.Oqu("by "+n.brandName),t.xp6(1),t.Q6J("ngForOf",t.lcZ(10,7,n.aditionalInfo)),t.xp6(3),t.Oqu("sku: "+n.sku),t.xp6(6),t.Oqu(n.quantity),t.xp6(4),t.hij(" ",n.price+" "+n.currency," ")}}let q=(()=>{class e{constructor(n){this.router=n,this.products=[],this.preBill=[]}ngOnInit(){console.log(this.products)}addProductUnit(n){n.quantity+=1}removeProductUnit(n){n.quantity-=1,n.quantity<1&&(n.quantity=1)}removeFromKart(n){this.products.splice(this.products.indexOf(n),1)}navigateBack(){this.router.navigate(["/products"])}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-cmm-products-kart"]],inputs:{products:"products",preBill:"preBill"},decls:34,vars:6,consts:[[1,"row","g-0","flex-column","kartBorder"],[1,"col-12","mb-5","p-3",2,"background-color","#F7F7F7"],[1,"cmm-txt-uppercase","text-center","m-0"],["class","col-12 mb-3",4,"ngFor","ngForOf"],[1,"rounded","border","p-4","col-12"],[1,"cmm-txt-thin-bold","cmm-txt-uppercase"],[1,"d-flex","justify-content-between"],[1,"row","g-0","justify-content-end","mt-5",2,"gap","2rem"],[1,"w-fit",3,"outlined","click"],[1,"w-fit"],[1,"col-12","mb-3"],[1,"border","rounded","w-100","d-flex","flex-column","flex-md-row","justify-content-between","align-items-center","px-4","py-3"],[1,"d-flex","justify-content-between",2,"gap","1rem"],[2,"max-width","100px","max-height","80px",3,"src"],[1,"d-flex","flex-column","cmm-txt-uppercase","justify-content-center"],[1,"cmm-txt-thin-bold","fs-16"],[1,"fs-12"],["class","fs-12 d-flex gap-1",4,"ngFor","ngForOf"],[1,"d-flex","align-items-center","gap-2","mt-3","mt-md-0"],[1,"border","px-3","py-2","rounded","d-flex","justify-content-between","fs-12",2,"min-width","120px"],[1,"fs-16","cursor-pointer",2,"width","16px !important","height","16px !important",3,"click"],[1,"cmm-txt-thin-bold"],[1,"cursor-pointer",3,"click"],[1,"fs-12","d-flex","gap-1"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"agregado al carrito"),t.qZA()(),t.YNc(4,w,25,9,"div",3),t.TgZ(5,"div",4)(6,"h4",5),t._uU(7,"total de la orden"),t.qZA(),t._UZ(8,"mat-divider"),t.TgZ(9,"div",6)(10,"span"),t._uU(11,"Precio"),t.qZA(),t.TgZ(12,"span"),t._uU(13),t.qZA()(),t.TgZ(14,"div",6)(15,"span"),t._uU(16,"Delivery"),t.qZA(),t.TgZ(17,"span"),t._uU(18),t.qZA()(),t.TgZ(19,"div",6)(20,"span"),t._uU(21,"C\xf3digo de DSCTO"),t.qZA(),t.TgZ(22,"span"),t._uU(23),t.qZA()(),t.TgZ(24,"div",6)(25,"span"),t._uU(26,"Total"),t.qZA(),t.TgZ(27,"span"),t._uU(28),t.qZA()()(),t.TgZ(29,"div",7)(30,"cmp-cmm-new-button",8),t.NdJ("click",function(){return i.navigateBack()}),t._uU(31," REGRESAR "),t.qZA(),t.TgZ(32,"cmp-cmm-new-button",9),t._uU(33," PAGAR "),t.qZA()()()),2&o&&(t.xp6(4),t.Q6J("ngForOf",i.products),t.xp6(9),t.Oqu(i.preBill.basePrice+" "+i.preBill.currency),t.xp6(5),t.Oqu(i.preBill.delivery+" "+i.preBill.currency),t.xp6(5),t.Oqu(i.preBill.discount),t.xp6(5),t.Oqu(i.preBill.totalPrice+" "+i.preBill.currency),t.xp6(2),t.Q6J("outlined",!0))},dependencies:[g.d,u.Hw,l.sg,_.O,l.Nd],styles:[".kartBorder[_ngcontent-%COMP%]{padding-bottom:150px!important}"]})}return e})(),U=(()=>{class e{constructor(){this.productsList=[{image:c.Wc.t_shirt,name:"CAMISETA MARCA",brandName:"UNICOLOR",sku:"krogm93746917",aditionalInfo:{Color:"Blanco",Talla:"S"},quantity:1,price:175,currency:"us$"},{image:c.Wc.white_shoe,name:"SNEAKERS",brandName:"Marca",sku:"krogm93746917",aditionalInfo:{Color:"Blanco",Talla:"38"},quantity:1,price:175,currency:"us$"},{image:c.Wc.tall_shoe,name:"SANDALIA",brandName:"UNICOLOR",sku:"krogm93746917",aditionalInfo:{Color:"Beige",Talla:"40"},quantity:1,price:175,currency:"us$"}],this.prebill={basePrice:175,delivery:175,totalPrice:175,discount:"_ US$",currency:"US$"}}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["pag-products-overview-layout"]],decls:2,vars:2,consts:[[1,"row","bg-white","w-100","mx-auto"],[1,"col-12","mt-5",3,"products","preBill"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"cmp-cmm-products-kart",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("products",i.productsList)("preBill",i.prebill))},dependencies:[q]})}return e})();function k(e,r){1&e&&t._UZ(0,"div",29),2&e&&t.Udp("background-image","url("+r.$implicit+")")}function b(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",30),t.NdJ("click",function(){const s=t.CHM(n).index,d=t.oxw();return t.KtG(d.choosenVariant=s)}),t.qZA()}if(2&e){const n=r.$implicit,o=r.index,i=t.oxw();t.Udp("background-color",n),t.Q6J("ngClass",o==i.choosenVariant?"scale-1":"")}}function P(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){const s=t.CHM(n).index,d=t.oxw();return t.KtG(d.choosenSize=s)}),t.TgZ(1,"span",32),t._uU(2),t.qZA()()}if(2&e){const n=r.$implicit,o=r.index,i=t.oxw();t.Q6J("ngClass",o==i.choosenSize?"scale-1 bg-black":""),t.xp6(1),t.Q6J("ngClass",o==i.choosenSize?"text-white":""),t.xp6(1),t.Oqu(n)}}const O=function(){return{customBorderRadius:"10px",customHeight:"48px"}};let F=(()=>{class e{constructor(){this.product={images:[c.Wc.t_shirt,c.Wc.chica3,c.Wc.chica4],mainImage:c.Wc.t_shirt,name:"CAMISETA MARCA",brand:"UNICOLOR",price:"175.00",sku:"KROGGM93746917",partNumber:"93746917",maximunPurchase:1,quantity:1,aditionalInfo:{Color:"Blanco",Talla:"S"},variants:["#fff","#000","#148954","#0C1284","#A46D09"],sizes:["XS","S","M","L","XL","XXL"]},this.mainImageIndex=0,this.choosenVariant=0,this.choosenSize=0}addProductUnit(){this.product.quantity+=1}removeProductUnit(){this.product.quantity-=1,this.product.quantity<1&&(this.product.quantity=1)}changeMainImageIndex(n){n?(this.mainImageIndex+=1,this.mainImageIndex>=this.product.images.length&&(this.mainImageIndex=0)):this.mainImageIndex<=0&&(this.mainImageIndex=this.product.images.length-1)}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["cmp-products-detail"]],inputs:{product:"product"},decls:54,vars:11,consts:[[1,"row","g-0","justify-content-evenly","align-items-start"],[1,"col-lg-7"],[1,"row","g-0","w-100"],[1,"col-2","col-lg-3"],[1,"row","w-100","justify-content-center","px-3"],["class","col-12 product_detail_image my-3","style","aspect-ratio: 1;",3,"background-image",4,"ngFor","ngForOf"],[1,"col-10","col-lg-9","d-flex","align-items-center","position-relative",2,"aspect-ratio","9/10","background-color","#F2F2F2"],[1,"position-absolute","cursor-pointer",2,"top","50%","left","5%","transform","translateX(-50%)",3,"click"],["alt","",1,"w-100",2,"max-width","100%","aspect-ratio","1",3,"src"],[1,"position-absolute","cursor-pointer",2,"top","50%","left","95%","transform","translateX(-50%)",3,"click"],[1,"col-lg-5","d-flex","justify-content-center"],[1,"d-flex","flex-column","w-100","align-items-start","ps-4","ps-sm-5"],[1,"fs-34","cmm-txt-thin-bold"],[1,"fs-32","cmm-txt-thin-bold"],[1,"fs-34","cmm-txt-thin-bold","my-4"],[1,"w-100"],[1,"w-100","py-4"],[1,"d-flex","gap-1"],[1,"cmm-txt-thin-bold"],[1,"d-flex"],["class","color_box me-1 cursor-pointer",3,"background-color","ngClass","click",4,"ngFor","ngForOf"],["class","color_box me-1 cursor-pointer d-flex align-items-center justify-content-center",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"d-flex","mt-4","flex-column"],[1,"mb-3"],[1,"d-flex","align-items-center","justify-content-between"],[1,"border","d-flex","align-items-center",2,"width","fit-content"],[1,"border","p-2","cursor-pointer",3,"click"],[1,"px-5"],[3,"config"],[1,"col-12","product_detail_image","my-3",2,"aspect-ratio","1"],[1,"color_box","me-1","cursor-pointer",3,"ngClass","click"],[1,"color_box","me-1","cursor-pointer","d-flex","align-items-center","justify-content-center",3,"ngClass","click"],[1,"fs-12","cmm-txt-thin-bold",3,"ngClass"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t.YNc(5,k,1,2,"div",5),t.qZA()(),t.TgZ(6,"div",6)(7,"mat-icon",7),t.NdJ("click",function(){return i.changeMainImageIndex(!1)}),t._uU(8,"arrow_back_ios"),t.qZA(),t._UZ(9,"img",8),t.TgZ(10,"mat-icon",9),t.NdJ("click",function(){return i.changeMainImageIndex(!0)}),t._uU(11,"arrow_forward_ios"),t.qZA()()()(),t.TgZ(12,"div",10)(13,"div",11)(14,"span",12),t._uU(15),t.qZA(),t.TgZ(16,"span",13),t._uU(17),t.qZA(),t.TgZ(18,"span",14),t._uU(19),t.qZA(),t._UZ(20,"mat-divider",15),t.TgZ(21,"div",16)(22,"div",17)(23,"span"),t._uU(24,"COLOR:"),t.qZA(),t.TgZ(25,"span",18),t._uU(26),t.qZA()(),t.TgZ(27,"div",19),t.YNc(28,b,1,3,"div",20),t.qZA()(),t._UZ(29,"mat-divider",15),t.TgZ(30,"div",16)(31,"div",17)(32,"span"),t._uU(33,"Tallas:"),t.qZA()(),t.TgZ(34,"div",19),t.YNc(35,P,3,3,"div",21),t.qZA()(),t._UZ(36,"mat-divider",15),t.TgZ(37,"div",15)(38,"div",22)(39,"span",23),t._uU(40,"CANTIDAD:"),t.qZA(),t.TgZ(41,"div",24)(42,"div",25)(43,"div",26),t.NdJ("click",function(){return i.removeProductUnit()}),t.TgZ(44,"mat-icon"),t._uU(45,"expand_more"),t.qZA()(),t.TgZ(46,"span",27),t._uU(47),t.qZA(),t.TgZ(48,"div",26),t.NdJ("click",function(){return i.addProductUnit()}),t.TgZ(49,"mat-icon"),t._uU(50,"expand_less"),t.qZA()()(),t.TgZ(51,"cmp-cmm-new-button",28)(52,"span",18),t._uU(53," AGREGAR AL CARRITO "),t.qZA()()()()()()()()),2&o&&(t.xp6(5),t.Q6J("ngForOf",i.product.images),t.xp6(4),t.Q6J("src",i.product.images[i.mainImageIndex],t.LSH),t.xp6(6),t.Oqu(i.product.name),t.xp6(2),t.Oqu(i.product.brand),t.xp6(2),t.Oqu("REF. "+i.product.price),t.xp6(7),t.Oqu(i.product.aditionalInfo.Color),t.xp6(2),t.Q6J("ngForOf",i.product.variants),t.xp6(7),t.Q6J("ngForOf",i.product.sizes),t.xp6(12),t.Oqu(i.product.quantity),t.xp6(4),t.Q6J("config",t.DdM(10,O)))},dependencies:[l.mk,l.sg,g.d,u.Hw,_.O],styles:[".product_detail_image[_ngcontent-%COMP%]{background-size:contain;background-repeat:no-repeat;background-position:center}"]})}return e})();function D(e,r){if(1&e&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Q6J("src",n,t.LSH)}}function J(e,r){if(1&e&&(t.TgZ(0,"div",12),t._UZ(1,"img",11),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Q6J("src",n,t.LSH)}}const I=function(e){return{"border-right":e}};function N(e,r){if(1&e&&(t.TgZ(0,"div",13),t._UZ(1,"img",14),t.TgZ(2,"span",15),t._uU(3),t.qZA(),t.TgZ(4,"p",16),t._uU(5),t.qZA()()),2&e){const n=r.$implicit,o=r.last,i=t.oxw();t.Q6J("ngStyle",t.VKq(4,I,o||i.smallMode?"":"1px solid black")),t.xp6(1),t.Q6J("src",n.icon,t.LSH),t.xp6(2),t.Oqu(n.info),t.xp6(2),t.Oqu(n.text)}}const S=[{path:"",component:y},{path:"overview",component:U},{path:"detail",component:(()=>{class e{constructor(){this.looks=[c.Wc.chica5,c.Wc.tall_shoe,c.Wc.chica2],this.promos=[c.Wc.purse,c.Wc.cap,c.Wc.purse,c.Wc.cap],this.items=[{icon:c.ci.van,info:"Env\xedo Gratis",text:"Solo dentro la ciudad de Caracas"},{icon:c.ci.return,info:"Devoluciones",text:"Devoluciones gratuitas y cambios"},{icon:c.ci.purse,info:"Empaque exclusivo",text:"Empaque exclusivo por marca"}],this.smallMode=!1}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["pag-products-detail-layout"]],decls:14,vars:3,consts:[[1,"row","mx-auto","bg-white","w-100"],[1,"col-12","my-5"],[1,"d-flex","flex-column","my-5"],[1,"text-center","cmm-txt-thin-bold","mb-5"],[1,"row"],["class","col-4 px-3 d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"text-center","cmm-txt-thin-bold","my-5"],["class","col-3 px-3 d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"w-100","row","mx-auto","py-4",2,"background-color","#E7E7E7"],["class","col-sm-4 d-flex flex-column align-items-center justify-content-center",3,"ngStyle",4,"ngFor","ngForOf"],[1,"col-4","px-3","d-flex","justify-content-center"],["alt","",1,"w-100","cursor-pointer","small-scale",2,"aspect-ratio","9/10","max-width","300px",3,"src"],[1,"col-3","px-3","d-flex","justify-content-center"],[1,"col-sm-4","d-flex","flex-column","align-items-center","justify-content-center",3,"ngStyle"],[1,"w-100",2,"max-width","100px",3,"src"],[1,"text-center","cmm-txt-thin-bold","w-100",2,"max-width","150px"],[1,"text-center",2,"max-width","150px"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"cmp-products-detail",1),t.TgZ(2,"section",2)(3,"h3",3),t._uU(4,"Arma tu look y luce fant\xe1stica"),t.qZA(),t.TgZ(5,"div",4),t.YNc(6,D,2,1,"div",5),t.qZA()(),t.TgZ(7,"section",2)(8,"h3",6),t._uU(9,"Estas prendas est\xe1n en promo"),t.qZA(),t.TgZ(10,"div",4),t.YNc(11,J,2,1,"div",7),t.qZA()()(),t.TgZ(12,"div",8),t.YNc(13,N,6,6,"div",9),t.qZA()),2&o&&(t.xp6(6),t.Q6J("ngForOf",i.looks),t.xp6(5),t.Q6J("ngForOf",i.promos),t.xp6(2),t.Q6J("ngForOf",i.items))},dependencies:[l.sg,l.PC,F]})}return e})()}];let R=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(S),m.Bz]})}return e})();var M=a(4766),E=a(8081);let L=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[l.ez,E.I,M.n,R]})}return e})()}}]);