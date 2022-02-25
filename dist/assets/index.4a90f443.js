var A=Object.defineProperty,I=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var B=(e,n,a)=>n in e?A(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,S=(e,n)=>{for(var a in n||(n={}))D.call(n,a)&&B(e,a,n[a]);if($)for(var a of $(n))O.call(n,a)&&B(e,a,n[a]);return e},_=(e,n)=>I(e,R(n));import{r as c,R as t,u as L,a as U,s as W,L as q,B as Y,b as F,c as b,N as M,d as H}from"./vendor.cbd5f8f9.js";const T=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}};T();const x=c.exports.createContext({username:"",setUsername:()=>{},points:0,setPoints:()=>{}});const P=({text:e,onClick:n})=>t.createElement("button",{className:"btnContainer",onClick:n},e);const G=c.exports.createRef(),X=()=>{const e=L(),{username:n,setUsername:a}=c.exports.useContext(x),l=r=>{r.preventDefault(),!!n.length&&e("/game")};return c.exports.useEffect(()=>{var r;(r=G.current)==null||r.focus()},[]),t.createElement("div",{className:"startContainer"},t.createElement("div",{className:"start"},t.createElement("div",{className:"start__title"},t.createElement("h1",null,"Wordcloud game")),t.createElement("form",null,t.createElement("div",{className:"start__searchbox"},t.createElement("input",{ref:G,type:"text",placeholder:"Enter your nickname here...",onChange:r=>a(r.target.value)})),t.createElement("div",{className:"start__buttons"},t.createElement(P,{text:"play",onClick:r=>l(r)})))))};const j=()=>t.createElement("div",{className:"spinner","data-testid":"spinner"},t.createElement("span",{className:"spinner-inner-1"}),t.createElement("span",{className:"spinner-inner-2"}),t.createElement("span",{className:"spinner-inner-3"})),z="/mockApi.json",K=U.create({baseURL:z}),J=e=>K.get(e),Q=async()=>await J("/"),V={getGameData:Q},Z=(e,n)=>(e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e),ee=e=>{const[n,a]=c.exports.useState(!0),[l,r]=c.exports.useState(null),[s,o]=c.exports.useState(null);return c.exports.useEffect(()=>{e().then(({data:f})=>{r(f),o(null),a(!1)}).catch(()=>{o("Something went wrong"),a(!1)})},[e]),[n,l,s]},te=W("div")`
	--animationTime: ${e=>`${e.animationTime}ms`};

	@keyframes animate-in-with-bounce {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(0);
		}
		90% {
			transform: scale(110%);
		}
		100% {
			transform: scale(100%);
		}
	}
	position: absolute;
	top: ${e=>`${e.top}px`};
	left: ${e=>`${e.left}px`};
	padding: 0.5rem;
	animation: animate-in-with-bounce var(--animationTime) forwards;

	cursor: pointer;
	color: ${e=>e.isChecked?"#1875d7":"grey"};
	font-weight: 700;
	font-weight: ${e=>e.isChecked?900:700};

	&:after {
		position: relative;
		inset: 0;
		top: -0.5rem;
		right: -0.5rem;
	}

	&.good {
		color: green;
		&:after {
			content: '✔';
		}
	}
	&.bad {
		color: red;

		&:after {
			content: '✖';
		}
	}
`,ne=({top:e,left:n,animationTime:a,tooltipState:l,children:r,disabeld:s})=>{const[o,f]=c.exports.useState(!1),d=u=>u===k.Good?"good":u===k.Bad?"bad":"hidden";return t.createElement("div",null,t.createElement(te,{top:e,left:n,animationTime:a,isChecked:o,onClick:s?void 0:()=>f(u=>!u),className:d(l)},r))},re=e=>e.reduce((n,a)=>a.marked&&a.shouldBeMarked?n+=2:!a.marked&&a.shouldBeMarked||a.marked&&!a.shouldBeMarked?n-=1:n,0),ae=e=>{if(e){const{top:n,left:a,right:l,bottom:r}=e.getBoundingClientRect();return{top:n,left:a,right:l,bottom:r}}return{top:0,left:0,right:0,bottom:0}},se=(e,n)=>{const{top:a,left:l,right:r,bottom:s}=ae(n),o={Y:(a+s)*.33,X:(l+r)*.4};let f=[],d=Math.random()*Math.PI*2,u=0,g=3;for(let h=0;h<e;h++){d+=(1/g<.22?.22:1/g)*Math.PI*2,h%g===0&&(u+=70,g+=h);const E=Math.cos(d)*u,N=Math.sin(d)*u+o.Y,y=E+o.X;f.push({top:N,left:y})}return f};var k=(e=>(e[e.Hidden=0]="Hidden",e[e.Good=1]="Good",e[e.Bad=2]="Bad",e))(k||{});const oe=()=>{const e=L(),{getGameData:n}=V,{setPoints:a}=c.exports.useContext(x),[l,r,s]=ee(n),[o,f]=c.exports.useState(null),[d,u]=c.exports.useState([]),[g,h]=c.exports.useState([]),[E,C]=c.exports.useState(!1);c.exports.useEffect(()=>{if(!r)return;const i=r[Z(0,r.length-1)];f(i)},[r]),c.exports.useEffect(()=>{if(!o)return;const i=o.all_words.map(m=>({word:m,marked:!1,shouldBeMarked:o.good_words.includes(m)}));u(i);const p=document.getElementById("gbx"),v=se(o.all_words.length,p);h(v)},[o]);const N=i=>{i.preventDefault();const p=re(d);if(a(p),E)return e("/end");C(!0)},y=i=>{if(E)return;const p=i.currentTarget.innerText,v=d.map(m=>m.word===p?_(S({},m),{marked:!m.marked}):m);u(v)},w=(i,p)=>!E||!i?0:i===p?1:2;return o?t.createElement("div",{className:"gameContainer"},t.createElement("div",{className:"game"},t.createElement("div",{className:"game__question"},o.question),t.createElement("div",{className:"game__box",id:"gbx"},d.map(({word:i,marked:p,shouldBeMarked:v},m)=>t.createElement("span",{onClick:y,key:`${m}-${i}`,"data-testid":`item-${m}`},t.createElement(ne,{top:g[m].top,left:g[m].left,animationTime:1e3+m*300,tooltipState:w(p,v),disabeld:E},i)))),t.createElement("div",{className:"game__button"},t.createElement(P,{text:E?"finish game":"check answers",onClick:i=>N(i)})))):t.createElement(j,null)};const ce=()=>{const{username:e,points:n}=c.exports.useContext(x);return t.createElement("div",{className:"endGameContainer"},t.createElement("div",{className:"result"},t.createElement("p",null,`Congratulations, ${e}!`),t.createElement("p",null,"Your score:"),t.createElement("p",null,`${n} points`)),t.createElement("div",{className:"tryAgain"},t.createElement("p",null,"Wanna ",t.createElement(q,{to:"/game"},"try again"),"?")))},le=[{path:"/",exact:!0,component:t.createElement(X,null)},{path:"/game",exact:!0,component:t.createElement(oe,null)},{path:"/end",exact:!0,component:t.createElement(ce,null)}];const ie=()=>{const[e,n]=c.exports.useState(""),[a,l]=c.exports.useState(0);return t.createElement("div",{className:"appContainer"},t.createElement("div",{className:"app__body"},t.createElement(x.Provider,{value:{username:e,setUsername:n,points:a,setPoints:l}},t.createElement(Y,null,t.createElement(F,null,le.map(({path:r,component:s})=>e===""&&r!=="/"?t.createElement(b,{key:r,element:t.createElement(M,{to:"/"})}):t.createElement(b,{path:r,element:s,key:r})),t.createElement(b,{path:"*",element:t.createElement(M,{to:"/"})}))))))};H.render(t.createElement(t.StrictMode,null,t.createElement(ie,null)),document.getElementById("root"));
