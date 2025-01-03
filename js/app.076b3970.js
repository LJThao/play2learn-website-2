(function(){"use strict";var e={5180:function(e,t,a){var s=a(5130),r=a(6768);const n={id:"app"};function i(e,t,a,s,i,o){const l=(0,r.g2)("GlobalHeader"),c=(0,r.g2)("router-view"),u=(0,r.g2)("GlobalFooter");return(0,r.uX)(),(0,r.CE)("div",n,[(0,r.bF)(l),(0,r.bF)(c),(0,r.bF)(u)])}const o={class:"bg-dark text-white py-3 w-100 fixed-top"},l={class:"navbar navbar-dark"},c={class:"container-fluid"},u={class:"nav ms-auto"},d={class:"nav-item"},m={class:"nav-item dropdown"},h={class:"dropdown-menu","aria-labelledby":"navbarDropdown"};function g(e,t,a,s,n,i){const g=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("header",o,[(0,r.Lk)("nav",l,[(0,r.Lk)("div",c,[t[6]||(t[6]=(0,r.Lk)("a",{class:"navbar-brand",href:"#"},"Play2Learn",-1)),(0,r.Lk)("ul",u,[(0,r.Lk)("li",d,[(0,r.bF)(g,{class:"nav-link text-white",to:"/"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Home")]))),_:1})]),t[4]||(t[4]=(0,r.Lk)("li",{class:"nav-item"},[(0,r.Lk)("span",{class:"text-white my-2 mx-2 d-block"},"|")],-1)),(0,r.Lk)("li",m,[t[3]||(t[3]=(0,r.Lk)("a",{class:"nav-link dropdown-toggle text-white",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Games",-1)),(0,r.Lk)("ul",h,[(0,r.Lk)("li",null,[(0,r.bF)(g,{class:"dropdown-item",to:"/anagram-hunt"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("Anagram Hunt")]))),_:1})]),t[2]||(t[2]=(0,r.Lk)("li",null,[(0,r.Lk)("a",{class:"dropdown-item",href:"games/math-facts.html"},"Math Facts Practice")],-1))])]),t[5]||(t[5]=(0,r.Fv)('<li class="nav-item"><span class="text-white my-2 mx-2 d-block">|</span></li><li class="nav-item"><a class="nav-link text-white" href="/play2learn-website-2/about.html">About</a></li><li class="nav-item"><span class="text-white my-2 mx-2 d-block">|</span></li><li class="nav-item"><a class="nav-link text-white" href="/play2learn-website-2/login.html">Login</a></li>',4))])])])])}var p={name:"GlobalHeader"},v=a(1241);const b=(0,v.A)(p,[["render",g]]);var f=b,k=a(4232);const L={class:"bg-dark text-white py-3 mt-auto"},y={class:"container-fluid d-flex justify-content-between align-items-center"},w={class:"mb-0"};function G(e,t,a,s,n,i){return(0,r.uX)(),(0,r.CE)("footer",L,[(0,r.Lk)("div",y,[(0,r.Lk)("p",w,"© "+(0,k.v_)((new Date).getFullYear())+" Play2Learn",1),t[0]||(t[0]=(0,r.Fv)('<div class="d-flex justify-content-end align-items-center"><a href="/play2learn-website-2/contact-us.html" class="mx-2"><img src="/play2learn-website-2/images/icon-contact-us.png" alt="Contact Us"></a><a href="https://instagram.com" class="mx-2"><img src="/play2learn-website-2/images/icon-instagram.png" alt="Instagram"></a><a href="https://twitter.com" class="mx-2"><img src="/play2learn-website-2/images/icon-twitter.png" alt="Twitter"></a><a href="https://facebook.com" class="mx-2"><img src="/play2learn-website-2/images/icon-facebook.png" alt="Facebook"></a></div>',1))])])}var x={name:"GlobalFooter"};const W=(0,v.A)(x,[["render",G]]);var A=W,P={name:"App",components:{GlobalHeader:f,GlobalFooter:A}};const F=(0,v.A)(P,[["render",i]]);var O=F,C=a(1387);const I={class:"container mt-5 pt-5 pb-5"},H={class:"quote-section text-center mb-5"},_={id:"quote",class:"blockquote"},E={class:"games-list row"},U={class:"game col-md-6 mb-4"},q={class:"card h-100"},j={class:"card-body"};function M(e,t,a,s,n,i){const o=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("main",I,[t[4]||(t[4]=(0,r.Lk)("section",{class:"text-left mb-4 mx-auto mt-5"},[(0,r.Lk)("h2",null,"Happy Clients Say...")],-1)),(0,r.Lk)("section",H,[(0,r.Lk)("blockquote",_,(0,k.v_)(n.currentQuote),1)]),(0,r.Lk)("section",E,[(0,r.Lk)("div",U,[(0,r.Lk)("div",q,[(0,r.Lk)("div",j,[t[1]||(t[1]=(0,r.Lk)("h2",{class:"card-title"},"Anagram Hunt",-1)),t[2]||(t[2]=(0,r.Lk)("p",{class:"card-text"},"Words are just puzzles waiting to be solved. Dive into Anagram Hunt and discover the magic hidden in every letter!",-1)),(0,r.bF)(o,{to:"/anagram-hunt",class:"btn btn-primary"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Play")]))),_:1})])])]),t[3]||(t[3]=(0,r.Fv)('<div class="game col-md-6 mb-4"><div class="card h-100"><div class="card-body"><h2 class="card-title">Math Facts Practice</h2><p class="card-text">Math is the language of the universe. Sharpen your skills and unlock endless possibilities with Math Facts Practice!</p><a href="games/math-facts.html" class="btn btn-primary">Play</a></div></div></div>',1))])])])}var X={name:"HomePage",data(){return{quotes:['"I\'ve never had more fun than I do playing Anagram Hunt. It is the best game ever invented!" - Justin Jest','"Math Facts Practice! Let\'s go!" - Jack Johnson','"Anagram Hunt or Math Facts Practice!!? Math it is!!" - Jones Jefferson'],currentQuote:"",quoteIndex:0,intervalId:null}},mounted(){this.currentQuote=this.quotes[this.quoteIndex],this.intervalId=setInterval((()=>{this.quoteIndex=(this.quoteIndex+1)%this.quotes.length,this.currentQuote=this.quotes[this.quoteIndex]}),1e4)},beforeUnmount(){this.intervalId&&clearInterval(this.intervalId)}};const S=(0,v.A)(X,[["render",M]]);var J=S;const Q={id:"anagram-app",class:"anagram-hunt d-flex flex-column min-vh-100"};function T(e,t,a,s,n,i){const o=(0,r.g2)("AnagramMain");return(0,r.uX)(),(0,r.CE)("div",Q,[(0,r.bF)(o,{wordLength:n.wordLength,isPlaying:n.isPlaying,isGameOver:n.isGameOver,timeLeft:n.timeLeft,score:n.score,currentWord:n.currentWord,remainingAnagrams:n.remainingAnagrams,correctWords:n.correctWords,userGuess:n.userGuess,onStartGame:i.startGame,onSubmitGuess:i.submitGuess,onResetGame:i.resetGame,"onUpdate:wordLength":i.updateWordLength,"onUpdate:userGuess":i.updateUserGuess},null,8,["wordLength","isPlaying","isGameOver","timeLeft","score","currentWord","remainingAnagrams","correctWords","userGuess","onStartGame","onSubmitGuess","onResetGame","onUpdate:wordLength","onUpdate:userGuess"])])}a(4114);const D={class:"container mt-5 pt-5"},R={key:0,class:"text-center"},$={key:1,class:"game-panel text-center mt-4"},z={class:"text-uppercase"},B={class:"correct-words mt-4"},K={class:"list-unstyled"},V={key:2,class:"text-center mt-5"},Y={class:"button-container d-flex justify-content-center gap-3 mt-4"};function N(e,t,a,n,i,o){return(0,r.uX)(),(0,r.CE)("main",D,[t[18]||(t[18]=(0,r.Lk)("h1",{class:"text-center mb-3"},"Anagram Hunt",-1)),a.isPlaying||a.isGameOver?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("div",R,[t[8]||(t[8]=(0,r.Lk)("label",{for:"word-length",class:"form-label fw-bold mb-3"},"Word Length",-1)),(0,r.bo)((0,r.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.localWordLength=e),id:"word-length",class:"form-select mx-auto mb-3 mt-2",style:{width:"400px"},required:""},t[7]||(t[7]=[(0,r.Fv)('<option value="Any" data-v-0281a8f5>Any</option><option value="5" data-v-0281a8f5>5</option><option value="6" data-v-0281a8f5>6</option><option value="7" data-v-0281a8f5>7</option><option value="8" data-v-0281a8f5>8</option><option value="9" data-v-0281a8f5>9+</option>',6)]),512),[[s.u1,i.localWordLength]]),t[9]||(t[9]=(0,r.Lk)("ol",{class:"text-start mx-auto mt-3 mb-3",style:{"max-width":"400px"}},[(0,r.Lk)("li",null,"Choose Word Length."),(0,r.Lk)("li",null,[(0,r.eW)("Press "),(0,r.Lk)("strong",null,"Play!")]),(0,r.Lk)("li",null,"How many anagrams can you find in a minute?")],-1)),(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>o.startGame&&o.startGame(...e)),class:"btn btn-primary mt-3"},"Play")])),a.isPlaying?((0,r.uX)(),(0,r.CE)("div",$,[(0,r.Lk)("h2",null,[t[10]||(t[10]=(0,r.eW)("Find Anagrams for: ")),(0,r.Lk)("span",z,(0,k.v_)(a.currentWord),1)]),(0,r.Lk)("p",null,[t[11]||(t[11]=(0,r.Lk)("strong",null,"Time Left:",-1)),(0,r.eW)(" "+(0,k.v_)(a.timeLeft)+" seconds",1)]),(0,r.Lk)("p",null,[t[12]||(t[12]=(0,r.Lk)("strong",null,"Score:",-1)),(0,r.eW)(" "+(0,k.v_)(a.score),1)]),(0,r.Lk)("p",null,[t[13]||(t[13]=(0,r.Lk)("strong",null,"Remaining Anagrams:",-1)),(0,r.eW)(" "+(0,k.v_)(a.remainingAnagrams),1)]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>i.localUserGuess=e),onKeyup:t[3]||(t[3]=(0,s.jR)(((...e)=>o.submitGuess&&o.submitGuess(...e)),["enter"])),placeholder:"Enter an anagram",class:"form-control w-70 mx-auto mb-2",style:{width:"200px"}},null,544),[[s.Jo,i.localUserGuess]]),(0,r.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>o.submitGuess&&o.submitGuess(...e)),class:"btn btn-primary mt-2"},"Submit"),(0,r.Lk)("div",B,[t[14]||(t[14]=(0,r.Lk)("h4",null,"Correct Guesses:",-1)),(0,r.Lk)("ul",K,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.correctWords,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e},(0,k.v_)(e),1)))),128))])])])):(0,r.Q3)("",!0),a.isGameOver?((0,r.uX)(),(0,r.CE)("div",V,[t[15]||(t[15]=(0,r.Lk)("h2",null,"Time's Up!",-1)),t[16]||(t[16]=(0,r.Lk)("p",null,"You Got",-1)),(0,r.Lk)("h1",null,(0,k.v_)(a.score),1),t[17]||(t[17]=(0,r.Lk)("p",null,"Anagrams",-1)),(0,r.Lk)("div",Y,[(0,r.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>o.startGame&&o.startGame(...e)),class:"btn btn-primary w-50"},"Play Again"),(0,r.Lk)("button",{onClick:t[6]||(t[6]=(...e)=>o.goHome&&o.goHome(...e)),class:"btn btn-secondary w-50"},"Back to Start Screen")])])):(0,r.Q3)("",!0)])}var Z={name:"AnagramMain",props:["wordLength","isPlaying","isGameOver","timeLeft","score","currentWord","remainingAnagrams","correctWords","userGuess"],data(){return{localWordLength:this.wordLength,localUserGuess:this.userGuess}},watch:{localWordLength(e){this.$emit("update:wordLength",e)},localUserGuess(e){this.$emit("update:userGuess",e)}},methods:{startGame(){this.$emit("start-game")},submitGuess(){this.$emit("submit-guess")},goHome(){window.location.href="/"}}};const ee=(0,v.A)(Z,[["render",N],["__scopeId","data-v-0281a8f5"]]);var te=ee;const ae={5:[["abets","baste","betas","beast","beats"],["acres","cares","races","scare"],["alert","alter","later"],["angel","angle","glean"],["baker","brake","break"],["bared","beard","bread","debar"],["dater","rated","trade","tread"],["below","bowel","elbow"],["caret","cater","crate","trace","react"]],6:[["arrest","rarest","raster","raters","starer"],["carets","caters","caster","crates","reacts","recast","traces"],["canter","nectar","recant","trance"],["danger","gander","garden","ranged"],["daters","trades","treads","stared"]],7:[["allergy","gallery","largely","regally"],["aspired","despair","diapers","praised"],["claimed","decimal","declaim","medical"],["dearths","hardest","hatreds","threads","trashed"],["detains","instead","sainted","stained"]],8:[["parroted","predator","prorated","teardrop"],["repaints","painters","pantries","pertains"],["restrain","retrains","strainer","terrains","trainers"],["construe","counters","recounts","trounces"]]};var se=ae,re={name:"AnagramHunt",components:{AnagramMain:te},data(){return{wordLength:"Any",isPlaying:!1,isGameOver:!1,score:0,timeLeft:60,userGuess:"",correctWords:[],currentWord:"",remainingAnagrams:0,timer:null,anagrams:se}},methods:{startGame(){this.isPlaying=!0,this.isGameOver=!1,this.correctWords=[],this.score=0,this.timeLeft=60,this.selectWord(),this.timer=setInterval((()=>{this.timeLeft>0?this.timeLeft--:this.endGame()}),1e3)},selectWord(){let e;if("Any"===this.wordLength){const t=Object.values(this.anagrams).flat();e=t}else e=this.anagrams[this.wordLength]||[];const t=e[Math.floor(Math.random()*e.length)];this.currentWord=t[0],this.remainingAnagrams=t.length-1,this.correctWords=[]},submitGuess(){const e=this.userGuess.trim().toLowerCase();if(e&&!this.correctWords.includes(e)&&this.currentWord!==e){const t=Object.values(this.anagrams).flat().find((e=>e.includes(this.currentWord)));t&&t.includes(e)&&(this.correctWords.push(e),this.score++,this.remainingAnagrams--,0===this.remainingAnagrams&&this.selectWord())}this.userGuess=""},endGame(){this.isPlaying=!1,this.isGameOver=!0,clearInterval(this.timer)},resetGame(){this.isPlaying=!1,this.isGameOver=!1,this.wordLength="Any",this.userGuess=""},updateWordLength(e){this.wordLength=e},updateUserGuess(e){this.userGuess=e}}};const ne=(0,v.A)(re,[["render",T],["__scopeId","data-v-42cb5148"]]);var ie=ne;const oe=[{path:"/",name:"HomePage",component:J},{path:"/anagram-hunt",component:ie}],le=(0,C.aE)({history:(0,C.Bt)(),routes:oe});var ce=le;(0,s.Ef)(O).use(ce).mount("#app")}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,n){if(!s){var i=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],n=e[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(o=!1,n<i&&(i=n));if(o){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,i=s[0],o=s[1],l=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(l)var u=l(a)}for(t&&t(s);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},s=self["webpackChunkanagram"]=self["webpackChunkanagram"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(5180)}));s=a.O(s)})();
//# sourceMappingURL=app.076b3970.js.map