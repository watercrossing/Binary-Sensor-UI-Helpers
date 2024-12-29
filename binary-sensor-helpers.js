function t(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new o(i,t,n)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var l;const d=window,c=d.trustedTypes,h=c?c.emptyScript:"",p=d.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:v},m="finalized";let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),s=e.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_){var n;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=n.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=s,this[s]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var y;g[m]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(l=d.reactiveElementVersions)&&void 0!==l?l:d.reactiveElementVersions=[]).push("1.6.3");const f=window,$=f.trustedTypes,b=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,x="?"+w,E=`<${x}>`,S=document,C=()=>S.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,O="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,U=/>/g,H=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,R=/"/g,L=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),N=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),z=new WeakMap,B=S.createTreeWalker(S,129,null,!1);function F(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}const V=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",r=T;for(let e=0;e<i;e++){const i=t[e];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===T?"!--"===l[1]?r=D:void 0!==l[1]?r=U:void 0!==l[2]?(L.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=null!=s?s:T,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?H:'"'===l[3]?R:P):r===R||r===P?r=H:r===D||r===U?r=T:(r=H,s=void 0);const h=r===H&&t[e+1].startsWith("/>")?" ":"";o+=r===T?i+E:d>=0?(n.push(a),i.slice(0,d)+A+i.slice(d)+w+h):i+w+(-2===d?(n.push(void 0),e):h)}return[F(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class W{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[l,d]=V(t,e);if(this.el=W.createElement(l,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=B.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(A)||e.startsWith(w)){const i=d[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+A).split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?X:"@"===e[1]?Q:K})}else a.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(L.test(n.tagName)){const t=n.textContent.split(w),e=t.length-1;if(e>0){n.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],C()),B.nextNode(),a.push({type:2,index:++s});n.append(t[e],C())}}}else if(8===n.nodeType)if(n.data===x)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(w,t+1));)a.push({type:7,index:s}),t+=w.length-1}s++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,n){var s,o,r,a;if(e===N)return e;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const d=M(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,n)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);B.currentNode=s;let o=B.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new J(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new tt(o,this,t)),this._$AV.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(o=B.nextNode(),r++)}return B.currentNode=S,s}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,n){var s;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),M(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==N&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==I&&M(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=W.createElement(F(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(i);else{const t=new Y(s,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new W(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new J(this.k(C()),this.k(C()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,n,s){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=q(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=q(this,n[i+r],e,r),a===N&&(a=this._$AH[r]),o||(o=!M(a)||a!==this._$AH[r]),a===I?t=I:t!==I&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}const G=$?$.emptyScript:"";class X extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==I?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class Q extends K{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:I)===N)return;const n=this._$AH,s=t===I&&n!==I||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==I&&(n===I||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const et=f.litHtmlPolyfillSupport;null==et||et(W,J),(null!==(y=f.litHtmlVersions)&&void 0!==y?y:f.litHtmlVersions=[]).push("2.8.0");var it,nt;class st extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=o._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new J(e.insertBefore(C(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return N}}st.finalized=!0,st._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:st});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:st}),(null!==(nt=globalThis.litElementVersions)&&void 0!==nt?nt:globalThis.litElementVersions=[]).push("3.3.3");const rt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e),at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function lt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):at(t,e)}function dt(t){return lt({...t,state:!0})}var ct;null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements;class ht extends HTMLElement{constructor(){super(),this._timeoutId=null,this._config={},this._lastTime=null,this.attachShadow({mode:"open"})}setConfig(t){if(!t.entity||!t.entity.startsWith("input_datetime."))throw new Error("Specify an input_datetime entity");this._config=t}set hass(t){const e=this._config.entity,i=t.states[e];if(!i)throw new Error(`Entity ${e} not found`);i.last_changed!==this._lastTime&&(this._lastTime=i.last_changed,this._updateContent(i,t))}_updateContent(t){const e=this._config.title||t.attributes.friendly_name||"Last Update",i=this._config.icon||t.attributes.icon||"mdi:clock";this._config.clickEntity||this._config.entity;const n=new Date(t.state);this.shadowRoot.innerHTML=`\n        <ha-card>\n          <style>\n            .container {\n              padding: 8px 16px 8px 16px;\n              display: flex;\n              justify-content: space-between;\n              flex-direction: column;\n              cursor: pointer;\n            }\n\n            .header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n            }\n\n            .name {\n                color: var(--secondary-text-color);\n                line-height: 40px;\n                font-weight: 500;\n                font-size: 16px;\n                overflow-x: hidden;\n                overflow-y: hidden;\n                text-wrap-mode: nowrap;\n                white-space-collapse: collapse;\n                text-overflow: ellipsis;\n            }\n            \n            .icon {\n                color: var(--paper-item-icon-color,#44739e);\n                --state-inactive-color: var(--paper-item-icon-color, #44739e);\n                line-height: 40px;\n            }\n\n            .relative-time {\n              font-size: 24px;\n              font-weight: 500;\n              color: var(--primary-text-color);\n              margin-bottom: 12px;\n            }\n\n            .absolute-time {\n              font-size: 12px;\n              color: var(--secondary-text-color);\n            }\n          </style>\n          <div class="container">\n            <div class="header">\n              <div class="name">${e}</div>\n              <ha-icon class="icon" icon="${i}"></ha-icon>\n            </div>\n            <div class="relative-time">${this._getRelativeTime(n)}</div>\n            <div class="absolute-time">${n.toLocaleString()}</div>\n          </div>\n        </ha-card>\n      `;this.shadowRoot.querySelector("ha-card").onclick=t=>{const i=new Event("show-dialog",{bubbles:!0,cancelable:!1,composed:!0});i.detail={dialogTag:"hui-dialog-occupancy-calendar",dialogImport:()=>Promise.resolve().then((function(){return bt})),dialogParams:{entity_id:this._config.clickEntity,title:e}},this.dispatchEvent(i)},this._setupUpdateInterval(n)}_setupUpdateInterval(t){this._timeoutId&&clearInterval(this._timeoutId),this._timeoutId=setInterval((()=>{const e=this.shadowRoot.querySelector(".relative-time");e&&(e.textContent=this._getRelativeTime(t))}),6e4)}_getRelativeTime(t){const e=(new Date).getTime(),i=new Date(t).getTime(),n=Math.floor((e-i)/1e3);if(n<60)return"Just now";if(n<3600){return`${Math.floor(n/60)}min ago`}if(n<86400){return`${Math.floor(n/3600)}h ago`}{const t=Math.floor(n/86400);return`${t} day${1===t?"":"s"} ago`}}disconnectedCallback(){this._timeoutId&&(clearInterval(this._timeoutId),this._timeoutId=null)}getCardSize(){return 2}static getLayoutOptions(){return{scale:1}}}customElements.define("time-since-card",ht),window.customCards=window.customCards||[],window.customCards.push({type:"time-since-card",name:"Time Since Card",preview:!1,description:"A card that displays the time since an input_datetime was last changed"}),console.info("%c Binary Sensor Helpers %c 0.2 ","color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;");class pt extends st{constructor(){super(...arguments),this._selectedDate=yt(new Date),this._currentMonth=new Date,this._dayStats=[],this._maxEvents=0,this._hasRendered=!1,this._isFetching=!1,this._disconnected=!1}connectedCallback(){super.connectedCallback(),this._disconnected=!1}disconnectedCallback(){super.disconnectedCallback(),this._disconnected=!0}shouldUpdate(t){return!(!t.has("stateObj")&&!t.has("_selectedDate")&&this._hasRendered)&&!this._disconnected}willUpdate(t){var e;!t.has("stateObj")&&this._hasRendered||!(null===(e=this.stateObj)||void 0===e?void 0:e.entity_id)||this._isFetching||this._fetchHistory()}async _fetchHistory(){if(this._isFetching||this._disconnected)return;this._isFetching=!0;const t=mt(this._currentMonth),e=gt(this._currentMonth);try{const i=await this.hass.callApi("GET",`history/period/${t.toISOString()}?filter_entity_id=${this.stateObj.entity_id}&end_time=${e.toISOString()}&no_attributes`);if(this._disconnected)return;const n=ft({start:t,end:e}),s=[];let o=0;n.forEach((t=>{const e=i.flat().filter((e=>e.entity_id===this.stateObj.entity_id&&new Date(e.last_updated).getDate()===t.getDate()&&"on"===e.state)),n=e.length;n>o&&(o=n),s.push({date:t,eventCount:n,events:e.map((t=>({timestamp:new Date(t.last_updated).toLocaleTimeString(),state:t.state})))})})),this._dayStats=s,this._maxEvents=o,this.requestUpdate()}catch(t){console.error("Error fetching history:",t)}finally{this._isFetching=!1}}_getColorIntensity(t){if(0===t)return"var(--primary-background-color)";return`rgba(var(--rgb-primary-color), ${Math.max(.4,Math.min(1,t/this._maxEvents))})`}_handleDateClick(t){this._selectedDate=t,this.requestUpdate()}_previousMonth(){this._currentMonth=new Date(this._currentMonth.getFullYear(),this._currentMonth.getMonth()-1),this._hasRendered=!1,this._dayStats=[],this._maxEvents=0,this._fetchHistory()}_nextMonth(){this._currentMonth=new Date(this._currentMonth.getFullYear(),this._currentMonth.getMonth()+1),this._hasRendered=!1,this._dayStats=[],this._maxEvents=0,this._fetchHistory()}_renderEventList(t){const e=this._dayStats.find((e=>$t(e.date,t)));return e&&0!==e.events.length?j`
      <div class="event-list">
        <h3>Events on ${_t(t,"MMMM d, yyyy")}</h3>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            ${e.events.map((t=>j`
                <tr>
                  <td>${t.timestamp}</td>
                  <td>${t.state}</td>
                </tr>
              `))}
          </tbody>
        </table>
      </div>
    `:j`<div class="no-events">No events on this day</div>`}_renderCalendar(){if(!this.stateObj||0===this._dayStats.length)return j``;this._hasRendered=!0;const t=this._dayStats,e=mt(this._currentMonth),i=_t(this._currentMonth,"MMMM yyyy"),n=e.getDay(),s=Array((n+6)%7).fill(null);return j`
      <div class="calendar-header">
        <md-filled-button @click=${this._previousMonth}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </md-filled-button>
        <span>${i}</span>
        <md-filled-button @click=${this._nextMonth}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </md-filled-button>
      </div>
      <div class="calendar">
        <div class="weekday-header">
          ${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((t=>j`<div class="weekday">${t}</div>`))}
        </div>
        <div class="days">
          ${s.map((()=>j` <div class="day empty"></div> `))}
          ${t.map((({date:t,eventCount:e})=>j`
              <div
                class="day ${$t(t,this._selectedDate)?"selected":""}"
                style="background-color: ${this._getColorIntensity(e)}"
                @click=${()=>this._handleDateClick(t)}
              >
                ${_t(t,"d")}
                ${e>0?j`<div class="event-indicator"></div>`:""}
              </div>
            `))}
        </div>
      </div>
      ${this._selectedDate?this._renderEventList(this._selectedDate):""}
    `}}pt.styles=[r`
      ha-dialog {
        --mdc-dialog-min-width: 300px;
        --mdc-dialog-max-width: 500px;
        --mdc-dialog-heading-ink-color: var(--primary-text-color);
        --mdc-dialog-content-ink-color: var(--primary-text-color);
        --justify-action-buttons: space-between;
        --dialog-content-padding: 8px;
      }
      ha-dialog .form {
        color: var(--primary-text-color);
      }
      a {
        color: var(--primary-color);
      }
      /* make dialog fullscreen on small screens */
      @media all and (max-width: 450px), all and (max-height: 500px) {
        ha-dialog {
          --mdc-dialog-min-width: calc(
            100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
          );
          --mdc-dialog-max-width: calc(
            100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
          );
          --mdc-dialog-min-height: 100%;
          --mdc-dialog-max-height: 100%;
          --vertical-align-dialog: flex-end;
          --ha-dialog-border-radius: 0px;
        }
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
      .error {
        color: var(--error-color);
      }
      ha-dialog {
        --dialog-surface-position: static;
        --dialog-content-position: static;
        --vertical-align-dialog: flex-start;
      }
      .content {
        outline: none;
      }
      .heading {
        border-bottom: 1px solid
          var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
      }
      :host([tab="time"]) ha-dialog {
        --dialog-content-padding: 0px;
      }
      @media all and (min-width: 600px) and (min-height: 501px) {
        ha-dialog {
          --mdc-dialog-min-width: 560px;
          --mdc-dialog-max-width: 580px;
          --dialog-surface-margin-top: 40px;
          --mdc-dialog-max-height: calc(100% - 72px);
        }
        :host([large]) ha-dialog {
          --mdc-dialog-min-width: 90vw;
          --mdc-dialog-max-width: 90vw;
        }
      }
      mwc-tab[disabled] {
        --mdc-tab-text-label-color-default: var(--material-disabled-text-color);
        pointer-events: none;
      }
    `,r`
      :host {
        display: block;
      }

      ha-card {
        padding: 16px;
      }

      .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }

      .calendar-header md-filled-button {
        min-width: 48px;
        height: 48px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 24px;
        transition: background-color 0.2s;
      }

      .calendar-header md-filled-button:hover {
        background-color: var(--primary-color);
      }

      .calendar-header md-filled-button ha-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .weekday-header {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        text-align: center;
        font-weight: bold;
        margin-bottom: 8px;
      }

      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
      }

      .day {
        position: relative;
        padding: 8px;
        text-align: center;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.2s;
      }

      .day:hover {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
      }

      .day.selected {
        border: 2px solid var(--primary-color);
      }

      .day.empty {
        background-color: transparent;
        cursor: default;
      }

      .day.empty:hover {
        background-color: transparent;
      }

      .event-indicator {
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: var(--primary-color);
      }

      .event-list {
        margin-top: 16px;
        border-top: 1px solid var(--divider-color);
        padding-top: 16px;
      }

      .event-list table {
        width: 100%;
        border-collapse: collapse;
      }

      .event-list th,
      .event-list td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid var(--divider-color);
      }

      .no-events {
        margin-top: 16px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .header_title {
        display: flex;
        align-items: center;
      }

      .header_title span {
        margin-left: 8px;
      }
    `],t([lt({attribute:!1})],pt.prototype,"hass",void 0),t([lt({attribute:!0})],pt.prototype,"stateObj",void 0),t([lt({attribute:!1})],pt.prototype,"entry",void 0),t([lt({attribute:!1})],pt.prototype,"editMode",void 0),t([dt()],pt.prototype,"_selectedDate",void 0),t([dt()],pt.prototype,"_currentMonth",void 0),t([dt()],pt.prototype,"_dayStats",void 0),t([dt()],pt.prototype,"_maxEvents",void 0),t([dt()],pt.prototype,"_hasRendered",void 0),t([dt()],pt.prototype,"_isFetching",void 0);let ut=class extends pt{render(){return j` <ha-card> ${this._renderCalendar()} </ha-card> `}};ut=t([rt("ha-more-info-occupancy-calendar")],ut);let vt=class extends pt{showDialog(t){this.stateObj=t}closeDialog(){this.stateObj=void 0,((t,e,i,n)=>{n=n||{},i=null==i?{}:i;const s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});s.detail=i,t.dispatchEvent(s)})(this,"dialog-closed",{dialog:this.localName})}render(){var t,e;return this.stateObj?j`
      <ha-dialog open @closed=${this.closeDialog} .heading=${!0} hideActions>
        <ha-dialog-header slot="heading">
          <ha-icon-button
            slot="navigationIcon"
            dialogAction="cancel"
            .label=${null!==(e=null===(t=this.hass)||void 0===t?void 0:t.localize("ui.dialogs.more_info_control.dismiss"))&&void 0!==e?e:"Dismiss"}
            .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
          ></ha-icon-button>
          <span slot="title">
            ${this.stateObj.title||"Occupancy Calendar"}
          </span>
        </ha-dialog-header>
        ${this._renderCalendar()}
      </ha-dialog>
    `:I}};vt=t([rt("hui-dialog-occupancy-calendar")],vt);const _t=(t,e)=>{if("d"===e)return t.getDate().toString();const i={month:e.includes("MMMM")?"long":"short",year:e.includes("yyyy")?"numeric":void 0,day:e.includes("d")?"numeric":void 0};return new Intl.DateTimeFormat("en-GB",i).format(t)},mt=t=>new Date(t.getFullYear(),t.getMonth(),1),gt=t=>new Date(t.getFullYear(),t.getMonth()+1,0),yt=t=>{const e=new Date(t);return e.setHours(0,0,0,0),e},ft=({start:t,end:e})=>{const i=[],n=new Date(t);for(;n<=e;)i.push(new Date(n)),n.setDate(n.getDate()+1);return i},$t=(t,e)=>!!e&&t.getTime()===e.getTime();var bt=Object.freeze({__proto__:null,get HuiDialogOccupancyCalendar(){return vt},get MoreInfoOccupancyCalendar(){return ut}});export{vt as HuiDialogOccupancyCalendar,ut as MoreInfoOccupancyCalendar};
