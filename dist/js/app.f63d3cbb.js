(function(){"use strict";var a={3858:function(a,e,t){t(7658);var s=t(9242),o=t(7139),n=t(70),i=t(6423),r=t(3396);const c={class:"vh-100 vw-100"},l={key:0},d={key:1};function u(a,e,t,s,o,n){const i=(0,r.up)("NavigationComponent"),u=(0,r.up)("router-view"),m=(0,r.up)("LoginPage");return(0,r.wg)(),(0,r.iD)("div",c,[n.auth?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(i),(0,r.Wm)(u)])):((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(m)]))])}const m=a=>((0,r.dD)("data-v-7eca6c7a"),a=a(),(0,r.Cn)(),a),g={class:"navbar navbar-dark side_nav_bg_color"},p={class:"container-fluid"},h=(0,r.uE)('<a class="navbar-brand" href="/" data-v-7eca6c7a><span class="logo logo_ti" data-v-7eca6c7a>TI</span><span class="logo logo_to" data-v-7eca6c7a>TO</span><span class="logo logo_bu" data-v-7eca6c7a>BU</span></a><button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" data-v-7eca6c7a><span class="navbar-toggler-icon" data-v-7eca6c7a></span></button>',2),v={class:"offcanvas offcanvas-end text-bg-dark",tabindex:"-1",id:"offcanvasDarkNavbar","aria-labelledby":"offcanvasDarkNavbarLabel"},f=(0,r.uE)('<div class="offcanvas-header" data-v-7eca6c7a><h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel" data-v-7eca6c7a><a class="navbar-brand" href="/" data-v-7eca6c7a><span class="logo logo_ti" data-v-7eca6c7a>TI</span><span class="logo logo_to" data-v-7eca6c7a>TO</span><span class="logo logo_bu" data-v-7eca6c7a>BU</span></a></h5><button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" data-v-7eca6c7a></button></div>',1),_={class:"offcanvas-body"},b={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},y={class:"nav-item"},w={class:"nav-item"},C=m((()=>(0,r._)("hr",{class:"hr"},null,-1))),x={class:"nav-item cursor-pointer"};function k(a,e,t,s,o,n){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("nav",g,[(0,r._)("div",p,[h,(0,r._)("div",v,[f,(0,r._)("div",_,[(0,r._)("ul",b,[(0,r._)("li",y,[(0,r.Wm)(i,{class:"router-link",to:"/categories"},{default:(0,r.w5)((()=>[(0,r.Uk)("Kategorijos")])),_:1})]),(0,r._)("li",w,[(0,r.Wm)(i,{class:"router-link",to:"/accounts"},{default:(0,r.w5)((()=>[(0,r.Uk)("Sąskaitos")])),_:1})]),C,(0,r._)("li",x,[(0,r.Wm)(i,{onClick:e[0]||(e[0]=a=>n.logout()),class:"router-link-log-out",to:"#"},{default:(0,r.w5)((()=>[(0,r.Uk)("Atsijungti")])),_:1})])])])])])])])}var D={name:"NavigationComponent",methods:{logout(){localStorage.removeItem("bearer_token"),window.location.href="/"}}},A=t(89);const j=(0,A.Z)(D,[["render",k],["__scopeId","data-v-7eca6c7a"]]);var L=j,B=t(2268);const $=a=>((0,r.dD)("data-v-27b2968d"),a=a(),(0,r.Cn)(),a),S={class:"vh-100 vw-100 d-flex justify-content-center align-items-center bg-image"},I={class:"card custom_card"},O=$((()=>(0,r._)("h5",{class:"card-header"},"Prisijungimas",-1))),T={class:"card-body"},U={class:"mb-3"},P=$((()=>(0,r._)("label",{for:"email",class:"form-label"},"El. paštas",-1))),E={key:0,class:"font-italic error"},z={class:"mb-3"},Z=$((()=>(0,r._)("label",{for:"password",class:"form-label"},"Slaptažodis",-1))),N={key:0,class:"font-italic error"},K=["disabled"],G={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function H(a,e,t,o,n,i){return(0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("div",I,[O,(0,r._)("div",T,[(0,r._)("div",U,[P,(0,r.wy)((0,r._)("input",{type:"email",class:(0,B.C_)(i.inputClass),id:"email",placeholder:"admin@gmail.com","onUpdate:modelValue":e[0]||(e[0]=a=>n.credentials.email=a)},null,2),[[s.nr,n.credentials.email]]),n.errors.length?((0,r.wg)(),(0,r.iD)("small",E,"Blogas el. paštas.")):(0,r.kq)("",!0)]),(0,r._)("div",z,[Z,(0,r.wy)((0,r._)("input",{type:"password",class:(0,B.C_)(i.inputClass),id:"password",placeholder:"*****","onUpdate:modelValue":e[1]||(e[1]=a=>n.credentials.password=a)},null,2),[[s.nr,n.credentials.password]]),n.errors.length?((0,r.wg)(),(0,r.iD)("small",N,"Blogas slaptažodis.")):(0,r.kq)("",!0)]),(0,r._)("button",{onClick:e[2]||(e[2]=a=>i.submit()),class:"btn btn-primary",type:"button",disabled:i.isLoading("submit")},[i.isLoading("submit")?((0,r.wg)(),(0,r.iD)("span",G)):(0,r.kq)("",!0),(0,r.Uk)(" Prisijungti ")],8,K)])])])}var W={name:"LoginPage",data(){return{credentials:{email:"admin@gmail.com",password:"password"},errors:[],loading:[]}},computed:{inputClass(){return["form-control",this.errors.length?"error":null].join(" ")}},methods:{submit(){this.setLoading(["submit"]),this.axios.post(this.baseUrl+"/api/tokens/create",this.credentials).catch((a=>{401===a.response.status&&(this.errors=["errors"])})).then((a=>{200===a.status&&(localStorage.setItem("bearer_token",a.data.token),window.location.href="/")})).finally((()=>{this.removeLoading(["submit"])}))},isLoading(a){return this.loading.includes(a)},setLoading(a){return console.log(a),a.forEach((a=>{this.loading.push(a)})),this.loading},removeLoading(a){return a.forEach((a=>{for(var e=0;e<this.loading.length;e++)this.loading[e]===a&&this.loading.splice(e,1)})),this.loading}}};const q=(0,A.Z)(W,[["render",H],["__scopeId","data-v-27b2968d"]]);var F=q,M={components:{LoginPage:F,NavigationComponent:L},data(){return{}},computed:{auth(){return!!localStorage.getItem("bearer_token")}}};const Y=(0,A.Z)(M,[["render",u]]);var V=Y,Q=t(678);const R={key:1,class:"container"},J={class:"row mt-4 position-relative"},X={class:"card custom_card d-flex justify-content-center align-items-center px-1"},aa={class:"title"},ea={class:"row mt-4 position-relative overflow-hidden"},ta={class:"d-flex overflow-scroll hide-scrollbar"},sa={class:"row mt-4 position-relative d-flex"},oa={class:"row mt-4 position-relative"};function na(a,e,t,o,n,i){const c=(0,r.up)("LoadingComponent"),l=(0,r.up)("CategoryBalanceAnalyticsCard3"),d=(0,r.up)("CategoryBalanceAnalyticsCard1"),u=(0,r.up)("base-grid");return(0,r.wg)(),(0,r.iD)("div",null,[i.isLoading("transfer")||i.isLoading("categoryBalanceAnalyticsData")?((0,r.wg)(),(0,r.j4)(c,{key:0})):((0,r.wg)(),(0,r.iD)("div",R,[(0,r._)("div",J,[(0,r._)("div",X,[(0,r._)("h1",aa,(0,B.zw)(n.categoryBalanceAnalyticsData.total_balance),1)])]),(0,r._)("div",ea,[(0,r._)("div",ta,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.categoryBalanceAnalyticsData.data,(a=>((0,r.wg)(),(0,r.j4)(l,{key:a,item:a},null,8,["item"])))),128))])]),(0,r._)("div",sa,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.categoryBalanceAnalyticsData.data,(a=>((0,r.wg)(),(0,r.j4)(d,{key:a,item:a},null,8,["item"])))),128))]),(0,r._)("div",oa,[(0,r.wy)((0,r.Wm)(u,{items:n.transfers,headers:["Nr.","Pavadinimas","Kaina","Kategorija","Sąskaita","Data"],columns:["id","name","amount","category_name","account_name","created_at"]},null,8,["items","headers"]),[[s.F8,!1]])])]))])}const ia=a=>((0,r.dD)("data-v-84e290f0"),a=a(),(0,r.Cn)(),a),ra={class:"col-12 col-sm-6 col-md-4 col-xl-3"},ca={class:"my-2"},la={class:"card custom_card"},da={class:"card-body overflow-hidden"},ua={class:"container"},ma={class:"row mb-2"},ga={class:"col-8 px-0 mh-100 d-flex"},pa={class:"container-fluid overflow-hidden px-0"},ha={class:"row h-100 d-flex flex-column justify-content-center"},va={class:"col-12"},fa={class:"mb-1 title text-uppercase"},_a={class:"text-nowrap"},ba={class:"col-12"},ya={class:"balance text-uppercase"},wa={class:"text-nowrap"},Ca={class:"col-4 mh-100 d-flex align-items-center justify-content-end px-0"},xa={class:"progress",style:{height:"2px"}},ka={class:"row mt-2"},Da={class:"col-4 px-0"},Aa={class:"container-fluid overflow-hidden"},ja={class:"row"},La={class:"col-12 px-0"},Ba={class:"balance_details text-nowrap"},$a=ia((()=>(0,r._)("small",{class:"balance_month_small text-nowrap px-0"},"Mėnuo",-1))),Sa={class:"col-4 px-sm-1"},Ia={class:"container-fluid"},Oa={class:"row text-center"},Ta={class:"col-12 px-sm-1"},Ua={class:"balance_details text-nowrap"},Pa=ia((()=>(0,r._)("small",{class:"balance_month_small text-nowrap"},"Diena",-1))),Ea={class:"col-4 px-0"},za={class:"container-fluid"},Za={class:"row text-end"},Na={class:"col-12 px-0"},Ka=ia((()=>(0,r._)("small",{class:"balance_month_small text-nowrap text-end px-0"},"Šiandien",-1)));function Ga(a,e,t,o,n,i){return(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",ra,[(0,r._)("div",ca,[(0,r._)("div",la,[(0,r._)("div",da,[(0,r._)("div",ua,[(0,r._)("div",ma,[(0,r._)("div",ga,[(0,r._)("div",pa,[(0,r._)("div",ha,[(0,r._)("div",va,[(0,r._)("div",fa,[(0,r._)("span",_a,(0,B.zw)(this.item.name),1)])]),(0,r._)("div",ba,[(0,r._)("div",ya,[(0,r._)("span",wa,(0,B.zw)(this.item.balance),1)])])])])]),(0,r._)("div",Ca,[(0,r._)("i",{onClick:e[0]||(e[0]=e=>a.$router.push(`/transfer/create-by-category/${this.item.id}`)),class:"bi bi-arrow-right-circle icon"})])]),(0,r._)("div",xa,[(0,r._)("div",{class:"progress-bar",role:"progressbar",style:(0,B.j5)({width:this.item.balance/this.item.balance_month*100+"%"}),"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},null,4)]),(0,r._)("div",ka,[(0,r._)("div",Da,[(0,r._)("div",Aa,[(0,r._)("div",ja,[(0,r._)("div",La,[(0,r._)("span",Ba,(0,B.zw)(this.item.balance_month),1)]),$a])])]),(0,r._)("div",Sa,[(0,r._)("div",Ia,[(0,r._)("div",Oa,[(0,r._)("div",Ta,[(0,r._)("span",Ua,(0,B.zw)(this.item.balance_day),1)]),Pa])])]),(0,r._)("div",Ea,[(0,r._)("div",za,[(0,r._)("div",Za,[(0,r._)("div",Na,[(0,r._)("span",{class:(0,B.C_)(i.balanceErrorClass)},(0,B.zw)(this.item.balance_today),3)]),Ka])])])])])])])])],512)),[[s.F8,i.isActiveCategories(t.item.id)]])}var Ha={name:"CategoryBalanceAnalyticsCard",props:{item:Object},computed:{balanceErrorClass(){return["balance_details","text-nowrap","overflow-hidden",parseFloat(this.item.balance_today)<0?"error":null].join(" ")},activeCategories(){return this.$store.state.activeCategories}},methods:{isActiveCategories(a){return this.activeCategories.includes(a)}}};const Wa=(0,A.Z)(Ha,[["render",Ga],["__scopeId","data-v-84e290f0"]]);var qa=Wa;const Fa={class:"my-2 me-3"},Ma={class:"card custom_card p-0"},Ya={key:1,class:"balance_details d-flex justify-content-around align-items-center flex-column icon"};function Va(a,e,t,s,o,n){const i=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",Fa,[(0,r._)("div",Ma,[(0,r._)("div",{onClick:e[0]||(e[0]=e=>n.isActiveCategories(t.item.id)?a.$store.commit("unsetActiveCategories",[t.item.id]):a.$store.commit("setActiveCategories",[t.item.id])),class:"card-body overflow-hidden p-0 m-0 d-flex align-items-center justify-content-center icon"},[n.isActiveCategories(t.item.id)?((0,r.wg)(),(0,r.iD)("div",Ya,[(0,r.Wm)(i,{class:"icon-small",icon:t.item.icon},null,8,["icon"]),(0,r._)("div",{class:(0,B.C_)(t.item.account_balance<0?"title text-danger":"title")},(0,B.zw)(t.item.account_balance),3),(0,r._)("div",{class:(0,B.C_)(t.item.balance_month===t.item.balance?"title text-success":"title text-danger")},(0,B.zw)(t.item.balance_month),3)])):((0,r.wg)(),(0,r.j4)(i,{key:0,icon:t.item.icon},null,8,["icon"]))])])])])}var Qa={name:"CategoryBalanceAnalyticsCard",props:{item:Object},data(){return{iconActive:!1}},computed:{balanceErrorClass(){return["balance_details","text-nowrap","overflow-hidden",parseFloat(this.item.balance_today)<0?"error":null].join(" ")},activeCategories(){return this.$store.state.activeCategories}},methods:{clicked(a){this.$store.commit("setActiveCategories",[a]),console.log("hit "+a)},isActiveCategories(a){return this.activeCategories.includes(a)}}};const Ra=(0,A.Z)(Qa,[["render",Va],["__scopeId","data-v-33a0d763"]]);var Ja=Ra;const Xa={class:"my-2"},ae={class:"card custom_card"},ee={class:"card-body overflow-hidden"},te={class:"container-fluid overflow-hidden"},se={class:"row"},oe={class:"table-responsive"},ne={class:"table table-sm"};function ie(a,e,t,s,o,n){return(0,r.wg)(),(0,r.iD)("div",Xa,[(0,r._)("div",ae,[(0,r._)("div",ee,[(0,r._)("div",te,[(0,r._)("div",se,[(0,r._)("div",oe,[(0,r._)("table",ne,[(0,r._)("thead",null,[(0,r._)("tr",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.headers,(a=>((0,r.wg)(),(0,r.iD)("th",{scope:"col",class:"title text-uppercase",key:a},(0,B.zw)(a),1)))),128))])]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.items,(a=>((0,r.wg)(),(0,r.iD)("tr",{key:a.id},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.columns,(e=>((0,r.wg)(),(0,r.iD)("td",{class:"grid_details",key:e},(0,B.zw)(a[e]),1)))),128))])))),128))])])])])])])])])}var re={name:"BaseGrid.vue",props:{items:Object,headers:Array,columns:Array}};const ce=(0,A.Z)(re,[["render",ie],["__scopeId","data-v-5a5be7dc"]]);var le=ce;const de=a=>((0,r.dD)("data-v-8439d898"),a=a(),(0,r.Cn)(),a),ue={class:"loading-layer"},me=de((()=>(0,r._)("div",{class:"spinner-border",role:"status"},[(0,r._)("span",{class:"visually-hidden"})],-1))),ge=[me];function pe(a,e,t,s,o,n){return(0,r.wg)(),(0,r.iD)("div",ue,ge)}var he={name:"LoadingComponent"};const ve=(0,A.Z)(he,[["render",pe],["__scopeId","data-v-8439d898"]]);var fe=ve,_e={name:"HomePage",components:{BaseGrid:le,CategoryBalanceAnalyticsCard1:qa,CategoryBalanceAnalyticsCard3:Ja,LoadingComponent:fe},computed:{loading(){return this.$store.state.loading}},data(){return{errors:[],categoryBalanceAnalyticsData:null,transfers:null}},methods:{getCategoryBalanceAnalyticsData(){this.$store.commit("setLoading",["categoryBalanceAnalyticsData"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+"/api/analytics/out-category-balance").catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.categoryBalanceAnalyticsData=a.data)})).finally((()=>{this.$store.commit("unsetLoading",["categoryBalanceAnalyticsData"])}))},getTransfers(){this.$store.commit("setLoading",["transfer"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+"/api/transfers").catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.transfers=a.data.data)})).finally((()=>{this.$store.commit("unsetLoading",["transfer"])}))},isLoading(a){return this.loading.includes(a)}},created(){this.getCategoryBalanceAnalyticsData(),this.getTransfers()}};const be=(0,A.Z)(_e,[["render",na],["__scopeId","data-v-435023ea"]]);var ye=be;function we(a,e,t,s,o,n){return(0,r.wg)(),(0,r.iD)("div",null,"ACCOUNT PAGE")}var Ce={name:"AccountPage"};const xe=(0,A.Z)(Ce,[["render",we]]);var ke=xe;function De(a,e,t,s,o,n){return(0,r.wg)(),(0,r.iD)("div",null,"CATEGORY PAGE")}var Ae={name:"CategoryPage"};const je=(0,A.Z)(Ae,[["render",De]]);var Le=je;function Be(a,e,t,s,o,n){return(0,r.wg)(),(0,r.iD)("div",null,"NOT FOUND PAGE")}var $e={name:"NotFoundPage"};const Se=(0,A.Z)($e,[["render",Be]]);var Ie=Se;function Oe(a,e,t,s,o,n){return(0,r.wg)(),(0,r.iD)("div",null," Transfer Index ")}var Te={name:"TransferIndex"};const Ue=(0,A.Z)(Te,[["render",Oe]]);var Pe=Ue;const Ee=a=>((0,r.dD)("data-v-0c0e9d48"),a=a(),(0,r.Cn)(),a),ze={class:"container mt-4"},Ze={class:"row position-relative"},Ne={class:"col-12 col-sm-6 col col-md-3"},Ke={class:"mb-3"},Ge=Ee((()=>(0,r._)("label",{for:"name",class:"form-label"},"Pavadinimas",-1))),He={key:0,class:"font-italic error"},We={class:"col-12 col-sm-6 col col-md-3"},qe={class:"mb-3"},Fe=Ee((()=>(0,r._)("label",{for:"amount",class:"form-label"},"Suma",-1))),Me={key:0,class:"font-italic error"},Ye=Ee((()=>(0,r._)("div",{class:"col-12 col-sm-6 col col-md-3"},null,-1))),Ve={class:"col-12 col-sm-6 col col-md-3"},Qe={class:"mb-3"},Re=Ee((()=>(0,r._)("label",{for:"account_id",id:"account_id",class:"form-label"},"Sąskaita",-1))),Je=["value"],Xe={key:0,class:"font-italic error"},at={class:"col-12 d-flex align-items-end justify-content-end"},et=["disabled"],tt={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},st={class:"row mt-4 position-relative"};function ot(a,e,t,o,n,i){const c=(0,r.up)("LoadingComponent"),l=(0,r.up)("base-grid");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",ze,[(0,r._)("div",Ze,[(0,r._)("div",Ne,[(0,r._)("div",Ke,[Ge,(0,r.wy)((0,r._)("input",{type:"text",class:(0,B.C_)(i.inputClass),id:"name","onUpdate:modelValue":e[0]||(e[0]=a=>n.model.name=a)},null,2),[[s.nr,n.model.name]]),n.errors["name"]?((0,r.wg)(),(0,r.iD)("small",He,"Blogas pavadinimas.")):(0,r.kq)("",!0)])]),(0,r._)("div",We,[(0,r._)("div",qe,[Fe,(0,r.wy)((0,r._)("input",{type:"number",class:(0,B.C_)(i.inputClass),id:"amount","onUpdate:modelValue":e[1]||(e[1]=a=>n.model.amount=a)},null,2),[[s.nr,n.model.amount]]),n.errors["amount"]?((0,r.wg)(),(0,r.iD)("small",Me,"Bloga suma")):(0,r.kq)("",!0)])]),Ye,(0,r._)("div",Ve,[(0,r._)("div",Qe,[Re,(0,r.wy)((0,r._)("select",{id:"account_id",class:(0,B.C_)(i.selectClass),"aria-label":"account_id","onUpdate:modelValue":e[2]||(e[2]=a=>n.model.account_id=a)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(this.accounts,(a=>((0,r.wg)(),(0,r.iD)("option",{key:a.id,value:a.id},(0,B.zw)(a.name),9,Je)))),128))],2),[[s.bM,n.model.account_id]]),n.errors["account_id"]?((0,r.wg)(),(0,r.iD)("small",Xe,"Bloga sąskaita")):(0,r.kq)("",!0)])]),(0,r._)("div",at,[(0,r._)("button",{onClick:e[3]||(e[3]=a=>i.submit()),class:"btn btn-primary",type:"button",disabled:i.isLoading("category")||i.isLoading("account")||i.isLoading("submit")},[i.isLoading("category")||i.isLoading("account")||i.isLoading("submit")?((0,r.wg)(),(0,r.iD)("span",tt)):(0,r.kq)("",!0),(0,r.Uk)(" Saugoti ")],8,et)])]),(0,r._)("div",st,[i.isLoading("transfer")?((0,r.wg)(),(0,r.j4)(c,{key:0})):((0,r.wg)(),(0,r.j4)(l,{key:1,items:n.transfers,headers:["Nr.","Pavadinimas","Kaina","Kategorija","Sąskaita","Data"],columns:["id","name","amount","category_name","account_name","created_at"]},null,8,["items","headers"]))])])])}var nt={name:"TransferCreate",components:{BaseGrid:le,LoadingComponent:fe},data(){return{errors:[],model:{category_id:this.$route.params.category_id?this.$route.params.category_id:2},transfers:null,category:[],accounts:[]}},computed:{inputClass(){return["form-control",this.errors.length?"error":null].join(" ")},selectClass(){return["form-control","form-select",this.errors.length?"error":null].join(" ")},loading(){return this.$store.state.loading}},methods:{getCategoryBalanceAnalyticsData(){this.$store.commit("setLoading",["categoryBalanceAnalyticsData"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+"/api/analytics/out-category-balance").catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.categoryBalanceAnalyticsData=a.data.data)})).finally((()=>{this.$store.commit("unsetLoading",["categoryBalanceAnalyticsData"])}))},getTransfers(){this.$store.commit("setLoading",["transfer"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+`/api/transfers/get-by-category/${this.$route.params.category_id}`).catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.transfers=a.data.data)})).finally((()=>{this.$store.commit("unsetLoading",["transfer"])}))},getCategory(){this.$store.commit("setLoading",["category"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+"/api/categories/"+this.$route.params.category_id).catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.category=a.data,this.model.account_id=this.category.account_id)})).finally((()=>{this.$store.commit("unsetLoading",["category"])}))},getAccounts(){this.$store.commit("setLoading",["account"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+"/api/accounts").catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.accounts=a.data.data)})).finally((()=>{this.$store.commit("unsetLoading",["account"])}))},isLoading(a){return this.loading.includes(a)},submit(){this.$store.commit("setLoading",["submit"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.post(this.baseUrl+"/api/transfers",this.model).catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/"),422===a.response.status&&(this.errors=a.response.data.errors)})).then((a=>{a&&201===a.status&&this.$router.push("/")})).finally((()=>{this.$store.commit("unsetLoading",["submit"])}))}},created(){this.getCategoryBalanceAnalyticsData(),this.getTransfers(),this.getCategory(),this.getAccounts(),console.log(this.baseUrl)}};const it=(0,A.Z)(nt,[["render",ot],["__scopeId","data-v-0c0e9d48"]]);var rt=it;const ct=[{path:"/",component:ye},{path:"/accounts",component:ke},{path:"/categories",component:Le},{path:"/transfers",component:Pe},{path:"/transfers/create",component:rt},{path:"/transfer/create-by-category/:category_id",component:rt},{path:"/login",component:F},{path:"/:pathMach(.*)*",component:Ie}],lt=(0,Q.p7)({history:(0,Q.PO)(),routes:ct});var dt=lt,ut=t(3494),mt=t(7749),gt=t(8539);const pt=(0,o.MT)({state(){return{count:0,loading:[],activeCategories:[]}},mutations:{increment(a){a.count++},setLoading(a,e){let t=a.loading;e.forEach((a=>{t.push(a)})),a.loading=[...new Set(t)]},unsetLoading(a,e){let t=a.loading;e.forEach((a=>{let e=t.indexOf(a);-1!==e&&t.splice(e,1)})),a.loading=[...new Set(t)]},setActiveCategories(a,e){let t=a.activeCategories;e.forEach((a=>{t.push(a)})),a.activeCategories=[...new Set(t)]},unsetActiveCategories(a,e){let t=a.activeCategories;e.forEach((a=>{let e=t.indexOf(a);-1!==e&&t.splice(e,1)})),a.activeCategories=[...new Set(t)]}}});ut.vI.add(gt.BC0,gt.dLy,gt.ZSk,gt.ZOx,gt.P88,gt.yn$,gt.fkH,gt.LEG,gt.vTx,gt.Cly,gt.CSz,gt.Quw);let ht=(0,s.ri)(V);ht.config.globalProperties.baseUrl="http://back.titobu.eu",ht.component("font-awesome-icon",mt.GN).use(i.Z,n.ZP).use(dt).use(pt).mount("#app")}},e={};function t(s){var o=e[s];if(void 0!==o)return o.exports;var n=e[s]={id:s,loaded:!1,exports:{}};return a[s](n,n.exports,t),n.loaded=!0,n.exports}t.m=a,function(){t.amdO={}}(),function(){var a=[];t.O=function(e,s,o,n){if(!s){var i=1/0;for(d=0;d<a.length;d++){s=a[d][0],o=a[d][1],n=a[d][2];for(var r=!0,c=0;c<s.length;c++)(!1&n||i>=n)&&Object.keys(t.O).every((function(a){return t.O[a](s[c])}))?s.splice(c--,1):(r=!1,n<i&&(i=n));if(r){a.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[s,o,n]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var s in e)t.o(e,s)&&!t.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(a){return a=Object.create(a),a.children||(a.children=[]),Object.defineProperty(a,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+a.id)}}),a}}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,s){var o,n,i=s[0],r=s[1],c=s[2],l=0;if(i.some((function(e){return 0!==a[e]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(c)var d=c(t)}for(e&&e(s);l<i.length;l++)n=i[l],t.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return t.O(d)},s=self["webpackChunktitobu"]=self["webpackChunktitobu"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(3858)}));s=t.O(s)})();
//# sourceMappingURL=app.f63d3cbb.js.map