(function(){"use strict";var a={5742:function(a,t,e){e(7658);var s=e(9242),o=e(7139),n=e(70),r=e(6423),i=e(3396);const l={class:"bg-image"},c={key:0},d={key:1};function u(a,t,e,s,o,n){const r=(0,i.up)("NavigationComponent"),u=(0,i.up)("router-view"),m=(0,i.up)("LoginPage");return(0,i.wg)(),(0,i.iD)("div",l,[n.auth?((0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(r),(0,i.Wm)(u)])):((0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(m)]))])}const m=a=>((0,i.dD)("data-v-7eca6c7a"),a=a(),(0,i.Cn)(),a),g={class:"navbar navbar-dark side_nav_bg_color"},p={class:"container-fluid"},h=(0,i.uE)('<a class="navbar-brand" href="/" data-v-7eca6c7a><span class="logo logo_ti" data-v-7eca6c7a>TI</span><span class="logo logo_to" data-v-7eca6c7a>TO</span><span class="logo logo_bu" data-v-7eca6c7a>BU</span></a><button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" data-v-7eca6c7a><span class="navbar-toggler-icon" data-v-7eca6c7a></span></button>',2),v={class:"offcanvas offcanvas-end text-bg-dark",tabindex:"-1",id:"offcanvasDarkNavbar","aria-labelledby":"offcanvasDarkNavbarLabel"},f=(0,i.uE)('<div class="offcanvas-header" data-v-7eca6c7a><h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel" data-v-7eca6c7a><a class="navbar-brand" href="/" data-v-7eca6c7a><span class="logo logo_ti" data-v-7eca6c7a>TI</span><span class="logo logo_to" data-v-7eca6c7a>TO</span><span class="logo logo_bu" data-v-7eca6c7a>BU</span></a></h5><button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" data-v-7eca6c7a></button></div>',1),_={class:"offcanvas-body"},b={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},y={class:"nav-item"},w={class:"nav-item"},x=m((()=>(0,i._)("hr",{class:"hr"},null,-1))),k={class:"nav-item cursor-pointer"};function C(a,t,e,s,o,n){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("nav",g,[(0,i._)("div",p,[h,(0,i._)("div",v,[f,(0,i._)("div",_,[(0,i._)("ul",b,[(0,i._)("li",y,[(0,i.Wm)(r,{class:"router-link",to:"/categories"},{default:(0,i.w5)((()=>[(0,i.Uk)("Kategorijos")])),_:1})]),(0,i._)("li",w,[(0,i.Wm)(r,{class:"router-link",to:"/accounts"},{default:(0,i.w5)((()=>[(0,i.Uk)("Sąskaitos")])),_:1})]),x,(0,i._)("li",k,[(0,i.Wm)(r,{onClick:t[0]||(t[0]=a=>n.logout()),class:"router-link-log-out",to:"#"},{default:(0,i.w5)((()=>[(0,i.Uk)("Atsijungti")])),_:1})])])])])])])])}var D={name:"NavigationComponent",methods:{logout(){localStorage.removeItem("bearer_token"),window.location.href="/"}}},j=e(89);const L=(0,j.Z)(D,[["render",C],["__scopeId","data-v-7eca6c7a"]]);var A=L,B=e(2268);const S=a=>((0,i.dD)("data-v-355633e2"),a=a(),(0,i.Cn)(),a),$={class:"vh-100 vw-100 d-flex justify-content-center align-items-center"},I={class:"card custom_card"},O=S((()=>(0,i._)("h5",{class:"card-header"},"Prisijungimas",-1))),T={class:"card-body"},U={class:"mb-3"},P=S((()=>(0,i._)("label",{for:"email",class:"form-label"},"El. paštas",-1))),E={key:0,class:"font-italic error"},z={class:"mb-3"},N=S((()=>(0,i._)("label",{for:"password",class:"form-label"},"Slaptažodis",-1))),Z={key:0,class:"font-italic error"},K=["disabled"],M={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"};function q(a,t,e,o,n,r){return(0,i.wg)(),(0,i.iD)("div",$,[(0,i._)("div",I,[O,(0,i._)("div",T,[(0,i._)("div",U,[P,(0,i.wy)((0,i._)("input",{type:"email",class:(0,B.C_)(r.inputClass),id:"email",placeholder:"admin@gmail.com","onUpdate:modelValue":t[0]||(t[0]=a=>n.credentials.email=a)},null,2),[[s.nr,n.credentials.email]]),n.errors.length?((0,i.wg)(),(0,i.iD)("small",E,"Blogas el. paštas.")):(0,i.kq)("",!0)]),(0,i._)("div",z,[N,(0,i.wy)((0,i._)("input",{type:"password",class:(0,B.C_)(r.inputClass),id:"password",placeholder:"*****","onUpdate:modelValue":t[1]||(t[1]=a=>n.credentials.password=a)},null,2),[[s.nr,n.credentials.password]]),n.errors.length?((0,i.wg)(),(0,i.iD)("small",Z,"Blogas slaptažodis.")):(0,i.kq)("",!0)]),(0,i._)("button",{onClick:t[2]||(t[2]=a=>r.submit()),class:"btn btn-primary",type:"button",disabled:r.isLoading("submit")},[r.isLoading("submit")?((0,i.wg)(),(0,i.iD)("span",M)):(0,i.kq)("",!0),(0,i.Uk)(" Prisijungti ")],8,K)])])])}var G={name:"LoginPage",data(){return{credentials:{email:"admin@gmail.com",password:"password"},errors:[],loading:[]}},computed:{inputClass(){return["form-control",this.errors.length?"error":null].join(" ")}},methods:{submit(){this.setLoading(["submit"]),this.axios.post(this.baseUrl+"/api/tokens/create",this.credentials).catch((a=>{401===a.response.status&&(this.errors=["errors"])})).then((a=>{200===a.status&&(localStorage.setItem("bearer_token",a.data.token),window.location.href="/")})).finally((()=>{this.removeLoading(["submit"])}))},isLoading(a){return this.loading.includes(a)},setLoading(a){return console.log(a),a.forEach((a=>{this.loading.push(a)})),this.loading},removeLoading(a){return a.forEach((a=>{for(var t=0;t<this.loading.length;t++)this.loading[t]===a&&this.loading.splice(t,1)})),this.loading}}};const W=(0,j.Z)(G,[["render",q],["__scopeId","data-v-355633e2"]]);var H=W,Y={components:{LoginPage:H,NavigationComponent:A},data(){return{}},computed:{auth(){return!!localStorage.getItem("bearer_token")}}};const V=(0,j.Z)(Y,[["render",u],["__scopeId","data-v-4abadcfe"]]);var F=V,R=e(678);const J={class:"container"},Q={class:"row mt-4 position-relative",style:{"min-height":"150px"}},X={class:"row mt-4 position-relative",style:{"min-height":"150px"}};function aa(a,t,e,s,o,n){const r=(0,i.up)("LoadingComponent"),l=(0,i.up)("CategoryBalanceAnalyticsCard"),c=(0,i.up)("base-grid");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",J,[(0,i._)("div",Q,[n.isLoading("categoryBalanceAnalyticsData")?((0,i.wg)(),(0,i.j4)(r,{key:0})):((0,i.wg)(!0),(0,i.iD)(i.HY,{key:1},(0,i.Ko)(o.categoryBalanceAnalyticsData,(a=>((0,i.wg)(),(0,i.iD)("div",{key:a,class:"col-12 col-sm-6 col-md-4 col-xl-3"},[(0,i.Wm)(l,{item:a},null,8,["item"])])))),128))]),(0,i._)("div",X,[n.isLoading("transfer")?((0,i.wg)(),(0,i.j4)(r,{key:0})):((0,i.wg)(),(0,i.j4)(c,{key:1,items:o.transfers,headers:["Nr.","Pavadinimas","Kaina","Kategorija","Sąskaita","Data"],columns:["id","name","amount","category_name","account_name","created_at"]},null,8,["items","headers"]))])])])}const ta=a=>((0,i.dD)("data-v-63247ab2"),a=a(),(0,i.Cn)(),a),ea={class:"my-2"},sa={class:"card custom_card"},oa={class:"card-body overflow-hidden"},na={class:"container"},ra={class:"row mb-2"},ia={class:"col-8 px-0 mh-100 d-flex"},la={class:"container-fluid overflow-hidden px-0"},ca={class:"row h-100 d-flex flex-column justify-content-center"},da={class:"col-12"},ua={class:"mb-1 title text-uppercase"},ma={class:"text-nowrap"},ga={class:"col-12"},pa={class:"balance text-uppercase"},ha={class:"text-nowrap"},va={class:"col-4 mh-100 d-flex align-items-center justify-content-end px-0"},fa={class:"progress",style:{height:"2px"}},_a={class:"row mt-2"},ba={class:"col-4 px-0"},ya={class:"container-fluid overflow-hidden"},wa={class:"row"},xa={class:"col-12 px-0"},ka={class:"balance_details text-nowrap"},Ca=ta((()=>(0,i._)("small",{class:"balance_month_small text-nowrap px-0"},"Mėnuo",-1))),Da={class:"col-4 px-sm-1"},ja={class:"container-fluid"},La={class:"row text-center"},Aa={class:"col-12 px-sm-1"},Ba={class:"balance_details text-nowrap"},Sa=ta((()=>(0,i._)("small",{class:"balance_month_small text-nowrap"},"Diena",-1))),$a={class:"col-4 px-0"},Ia={class:"container-fluid"},Oa={class:"row text-end"},Ta={class:"col-12 px-0"},Ua=ta((()=>(0,i._)("small",{class:"balance_month_small text-nowrap text-end px-0"},"Šiandien",-1)));function Pa(a,t,e,s,o,n){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",ea,[(0,i._)("div",sa,[(0,i._)("div",oa,[(0,i._)("div",na,[(0,i._)("div",ra,[(0,i._)("div",ia,[(0,i._)("div",la,[(0,i._)("div",ca,[(0,i._)("div",da,[(0,i._)("div",ua,[(0,i._)("span",ma,(0,B.zw)(this.item.name),1)])]),(0,i._)("div",ga,[(0,i._)("div",pa,[(0,i._)("span",ha,(0,B.zw)(this.item.balance),1)])])])])]),(0,i._)("div",va,[(0,i._)("i",{onClick:t[0]||(t[0]=t=>a.$router.push(`/transfer/create-by-category/${this.item.id}`)),class:"bi bi-arrow-right-circle icon"})])]),(0,i._)("div",fa,[(0,i._)("div",{class:"progress-bar",role:"progressbar",style:(0,B.j5)({width:this.item.balance/this.item.balance_month*100+"%"}),"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},null,4)]),(0,i._)("div",_a,[(0,i._)("div",ba,[(0,i._)("div",ya,[(0,i._)("div",wa,[(0,i._)("div",xa,[(0,i._)("span",ka,(0,B.zw)(this.item.balance_month),1)]),Ca])])]),(0,i._)("div",Da,[(0,i._)("div",ja,[(0,i._)("div",La,[(0,i._)("div",Aa,[(0,i._)("span",Ba,(0,B.zw)(this.item.balance_day),1)]),Sa])])]),(0,i._)("div",$a,[(0,i._)("div",Ia,[(0,i._)("div",Oa,[(0,i._)("div",Ta,[(0,i._)("span",{class:(0,B.C_)(n.balanceErrorClass)},(0,B.zw)(this.item.balance_today),3)]),Ua])])])])])])])])])}var Ea={name:"CategoryBalanceAnalyticsCard",props:{item:Object},computed:{balanceErrorClass(){return["balance_details","text-nowrap","overflow-hidden",parseFloat(this.item.balance_today)<0?"error":null].join(" ")}}};const za=(0,j.Z)(Ea,[["render",Pa],["__scopeId","data-v-63247ab2"]]);var Na=za;const Za={class:"my-2"},Ka={class:"card custom_card"},Ma={class:"card-body overflow-hidden"},qa={class:"container-fluid overflow-hidden"},Ga={class:"row"},Wa={class:"table-responsive"},Ha={class:"table table-sm"};function Ya(a,t,e,s,o,n){return(0,i.wg)(),(0,i.iD)("div",Za,[(0,i._)("div",Ka,[(0,i._)("div",Ma,[(0,i._)("div",qa,[(0,i._)("div",Ga,[(0,i._)("div",Wa,[(0,i._)("table",Ha,[(0,i._)("thead",null,[(0,i._)("tr",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.headers,(a=>((0,i.wg)(),(0,i.iD)("th",{scope:"col",class:"title text-uppercase",key:a},(0,B.zw)(a),1)))),128))])]),(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.items,(a=>((0,i.wg)(),(0,i.iD)("tr",{key:a.id},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.columns,(t=>((0,i.wg)(),(0,i.iD)("td",{class:"grid_details",key:t},(0,B.zw)(a[t]),1)))),128))])))),128))])])])])])])])])}var Va={name:"BaseGrid.vue",props:{items:Object,headers:Array,columns:Array}};const Fa=(0,j.Z)(Va,[["render",Ya],["__scopeId","data-v-5a5be7dc"]]);var Ra=Fa;const Ja=a=>((0,i.dD)("data-v-8439d898"),a=a(),(0,i.Cn)(),a),Qa={class:"loading-layer"},Xa=Ja((()=>(0,i._)("div",{class:"spinner-border",role:"status"},[(0,i._)("span",{class:"visually-hidden"})],-1))),at=[Xa];function tt(a,t,e,s,o,n){return(0,i.wg)(),(0,i.iD)("div",Qa,at)}var et={name:"LoadingComponent"};const st=(0,j.Z)(et,[["render",tt],["__scopeId","data-v-8439d898"]]);var ot=st,nt={name:"HomePage",components:{BaseGrid:Ra,CategoryBalanceAnalyticsCard:Na,LoadingComponent:ot},computed:{loading(){return this.$store.state.loading}},data(){return{errors:[],categoryBalanceAnalyticsData:null,transfers:null}},methods:{getCategoryBalanceAnalyticsData(){this.$store.commit("setLoading",["categoryBalanceAnalyticsData"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+"/api/analytics/out-category-balance").catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.categoryBalanceAnalyticsData=a.data.data)})).finally((()=>{this.$store.commit("unsetLoading",["categoryBalanceAnalyticsData"])}))},getTransfers(){this.$store.commit("setLoading",["transfer"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+"/api/transfers").catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.transfers=a.data.data)})).finally((()=>{this.$store.commit("unsetLoading",["transfer"])}))},isLoading(a){return this.loading.includes(a)}},created(){this.getCategoryBalanceAnalyticsData(),this.getTransfers()}};const rt=(0,j.Z)(nt,[["render",aa],["__scopeId","data-v-2e31be6e"]]);var it=rt;function lt(a,t,e,s,o,n){return(0,i.wg)(),(0,i.iD)("div",null,"ACCOUNT PAGE")}var ct={name:"AccountPage"};const dt=(0,j.Z)(ct,[["render",lt]]);var ut=dt;function mt(a,t,e,s,o,n){return(0,i.wg)(),(0,i.iD)("div",null,"CATEGORY PAGE")}var gt={name:"CategoryPage"};const pt=(0,j.Z)(gt,[["render",mt]]);var ht=pt;function vt(a,t,e,s,o,n){return(0,i.wg)(),(0,i.iD)("div",null,"NOT FOUND PAGE")}var ft={name:"NotFoundPage"};const _t=(0,j.Z)(ft,[["render",vt]]);var bt=_t;function yt(a,t,e,s,o,n){return(0,i.wg)(),(0,i.iD)("div",null," Transfer Index ")}var wt={name:"TransferIndex"};const xt=(0,j.Z)(wt,[["render",yt]]);var kt=xt;const Ct=a=>((0,i.dD)("data-v-0c0e9d48"),a=a(),(0,i.Cn)(),a),Dt={class:"container mt-4"},jt={class:"row position-relative"},Lt={class:"col-12 col-sm-6 col col-md-3"},At={class:"mb-3"},Bt=Ct((()=>(0,i._)("label",{for:"name",class:"form-label"},"Pavadinimas",-1))),St={key:0,class:"font-italic error"},$t={class:"col-12 col-sm-6 col col-md-3"},It={class:"mb-3"},Ot=Ct((()=>(0,i._)("label",{for:"amount",class:"form-label"},"Suma",-1))),Tt={key:0,class:"font-italic error"},Ut=Ct((()=>(0,i._)("div",{class:"col-12 col-sm-6 col col-md-3"},null,-1))),Pt={class:"col-12 col-sm-6 col col-md-3"},Et={class:"mb-3"},zt=Ct((()=>(0,i._)("label",{for:"account_id",id:"account_id",class:"form-label"},"Sąskaita",-1))),Nt=["value"],Zt={key:0,class:"font-italic error"},Kt={class:"col-12 d-flex align-items-end justify-content-end"},Mt=["disabled"],qt={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Gt={class:"row mt-4 position-relative"};function Wt(a,t,e,o,n,r){const l=(0,i.up)("LoadingComponent"),c=(0,i.up)("base-grid");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",Dt,[(0,i._)("div",jt,[(0,i._)("div",Lt,[(0,i._)("div",At,[Bt,(0,i.wy)((0,i._)("input",{type:"text",class:(0,B.C_)(r.inputClass),id:"name","onUpdate:modelValue":t[0]||(t[0]=a=>n.model.name=a)},null,2),[[s.nr,n.model.name]]),n.errors["name"]?((0,i.wg)(),(0,i.iD)("small",St,"Blogas pavadinimas.")):(0,i.kq)("",!0)])]),(0,i._)("div",$t,[(0,i._)("div",It,[Ot,(0,i.wy)((0,i._)("input",{type:"number",class:(0,B.C_)(r.inputClass),id:"amount","onUpdate:modelValue":t[1]||(t[1]=a=>n.model.amount=a)},null,2),[[s.nr,n.model.amount]]),n.errors["amount"]?((0,i.wg)(),(0,i.iD)("small",Tt,"Bloga suma")):(0,i.kq)("",!0)])]),Ut,(0,i._)("div",Pt,[(0,i._)("div",Et,[zt,(0,i.wy)((0,i._)("select",{id:"account_id",class:(0,B.C_)(r.selectClass),"aria-label":"account_id","onUpdate:modelValue":t[2]||(t[2]=a=>n.model.account_id=a)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.accounts,(a=>((0,i.wg)(),(0,i.iD)("option",{key:a.id,value:a.id},(0,B.zw)(a.name),9,Nt)))),128))],2),[[s.bM,n.model.account_id]]),n.errors["account_id"]?((0,i.wg)(),(0,i.iD)("small",Zt,"Bloga sąskaita")):(0,i.kq)("",!0)])]),(0,i._)("div",Kt,[(0,i._)("button",{onClick:t[3]||(t[3]=a=>r.submit()),class:"btn btn-primary",type:"button",disabled:r.isLoading("category")||r.isLoading("account")||r.isLoading("submit")},[r.isLoading("category")||r.isLoading("account")||r.isLoading("submit")?((0,i.wg)(),(0,i.iD)("span",qt)):(0,i.kq)("",!0),(0,i.Uk)(" Saugoti ")],8,Mt)])]),(0,i._)("div",Gt,[r.isLoading("transfer")?((0,i.wg)(),(0,i.j4)(l,{key:0})):((0,i.wg)(),(0,i.j4)(c,{key:1,items:n.transfers,headers:["Nr.","Pavadinimas","Kaina","Kategorija","Sąskaita","Data"],columns:["id","name","amount","category_name","account_name","created_at"]},null,8,["items","headers"]))])])])}var Ht={name:"TransferCreate",components:{BaseGrid:Ra,LoadingComponent:ot},data(){return{errors:[],model:{category_id:this.$route.params.category_id?this.$route.params.category_id:2},transfers:null,category:[],accounts:[]}},computed:{inputClass(){return["form-control",this.errors.length?"error":null].join(" ")},selectClass(){return["form-control","form-select",this.errors.length?"error":null].join(" ")},loading(){return this.$store.state.loading}},methods:{getCategoryBalanceAnalyticsData(){this.$store.commit("setLoading",["categoryBalanceAnalyticsData"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+"/api/analytics/out-category-balance").catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.categoryBalanceAnalyticsData=a.data.data)})).finally((()=>{this.$store.commit("unsetLoading",["categoryBalanceAnalyticsData"])}))},getTransfers(){this.$store.commit("setLoading",["transfer"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+`/api/transfers/get-by-category/${this.$route.params.category_id}`).catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.transfers=a.data.data)})).finally((()=>{this.$store.commit("unsetLoading",["transfer"])}))},getCategory(){this.$store.commit("setLoading",["category"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+"/api/categories/"+this.$route.params.category_id).catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.category=a.data,this.model.account_id=this.category.account_id)})).finally((()=>{this.$store.commit("unsetLoading",["category"])}))},getAccounts(){this.$store.commit("setLoading",["account"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.get(this.baseUrl+"/api/accounts").catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/")})).then((a=>{200===a.status&&(this.accounts=a.data.data)})).finally((()=>{this.$store.commit("unsetLoading",["account"])}))},isLoading(a){return this.loading.includes(a)},submit(){this.$store.commit("setLoading",["submit"]),this.axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("bearer_token")}`,this.axios.defaults.headers.common["Content-Type"]="application/json",this.axios.defaults.headers.common["Accept"]="application/json",this.axios.post(this.baseUrl+"/api/transfers",this.model).catch((a=>{401===a.response.status&&(localStorage.removeItem("bearer_token"),window.location.href="/"),422===a.response.status&&(this.errors=a.response.data.errors)})).then((a=>{a&&201===a.status&&this.$router.push("/")})).finally((()=>{this.$store.commit("unsetLoading",["submit"])}))}},created(){this.getCategoryBalanceAnalyticsData(),this.getTransfers(),this.getCategory(),this.getAccounts(),console.log(this.baseUrl)}};const Yt=(0,j.Z)(Ht,[["render",Wt],["__scopeId","data-v-0c0e9d48"]]);var Vt=Yt;const Ft=[{path:"/",component:it},{path:"/accounts",component:ut},{path:"/categories",component:ht},{path:"/transfers",component:kt},{path:"/transfers/create",component:Vt},{path:"/transfer/create-by-category/:category_id",component:Vt},{path:"/login",component:H},{path:"/:pathMach(.*)*",component:bt}],Rt=(0,R.p7)({history:(0,R.PO)(),routes:Ft});var Jt=Rt;e(5654);const Qt=(0,o.MT)({state(){return{count:0,loading:[]}},mutations:{increment(a){a.count++},setLoading(a,t){let e=a.loading;t.forEach((a=>{e.push(a)})),a.loading=[...new Set(e)]},unsetLoading(a,t){let e=a.loading;t.forEach((a=>{let t=e.indexOf(a);-1!==t&&e.splice(t,1)})),a.loading=[...new Set(e)]}}});let Xt=(0,s.ri)(F);Xt.config.globalProperties.baseUrl="http://back.titobu.eu",Xt.use(r.Z,n.ZP).use(Jt).use(Qt).mount("#app")}},t={};function e(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={id:s,loaded:!1,exports:{}};return a[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}e.m=a,function(){e.amdO={}}(),function(){var a=[];e.O=function(t,s,o,n){if(!s){var r=1/0;for(d=0;d<a.length;d++){s=a[d][0],o=a[d][1],n=a[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&n||r>=n)&&Object.keys(e.O).every((function(a){return e.O[a](s[l])}))?s.splice(l--,1):(i=!1,n<r&&(r=n));if(i){a.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=a.length;d>0&&a[d-1][2]>n;d--)a[d]=a[d-1];a[d]=[s,o,n]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var s in t)e.o(t,s)&&!e.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:t[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.hmd=function(a){return a=Object.create(a),a.children||(a.children=[]),Object.defineProperty(a,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+a.id)}}),a}}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){var a={143:0};e.O.j=function(t){return 0===a[t]};var t=function(t,s){var o,n,r=s[0],i=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==a[t]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(l)var d=l(e)}for(t&&t(s);c<r.length;c++)n=r[c],e.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return e.O(d)},s=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(5742)}));s=e.O(s)})();
//# sourceMappingURL=app.57310c5b.js.map