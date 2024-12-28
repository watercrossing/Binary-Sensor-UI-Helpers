function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var a;const l=window,h=l.trustedTypes,d=h?h.emptyScript:"",c=l.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u},_="finalized";let y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var f;y[_]=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:y}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.3");const m=window,$=m.trustedTypes,g=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,w="?"+A,E=`<${w}>`,S=document,x=()=>S.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,k="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,H=/>/g,P=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,D=/"/g,O=/^(?:script|style|textarea|title)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),L=new WeakMap,z=S.createTreeWalker(S,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==g?g.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=T;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===T?"!--"===l[1]?r=U:void 0!==l[1]?r=H:void 0!==l[2]?(O.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=P):void 0!==l[3]&&(r=P):r===P?">"===l[0]?(r=null!=n?n:T,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?P:'"'===l[3]?D:R):r===D||r===R?r=P:r===U||r===H?r=T:(r=P,n=void 0);const c=r===P&&t[e+1].startsWith("/>")?" ":"";o+=r===T?i+E:h>=0?(s.push(a),i.slice(0,h)+b+i.slice(h)+A+c):i+A+(-2===h?(s.push(void 0),e):c)}return[B(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class V{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=F(t,e);if(this.el=V.createElement(l,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=z.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(b)||e.startsWith(A)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+b).split(A),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?Z:"@"===e[1]?X:J})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],x()),z.nextNode(),a.push({type:2,index:++n});s.append(t[e],x())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)a.push({type:7,index:n}),t+=A.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var n,o,r,a;if(e===I)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,s)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);z.currentNode=n;let o=z.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Y(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Q(o,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=z.nextNode(),r++)}return z.currentNode=S,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{constructor(t,e,i,s){var n;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),C(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(B(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new q(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new V(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Y(this.k(x()),this.k(x()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,i,s,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=W(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=W(this,s[i+r],e,r),a===I&&(a=this._$AH[r]),o||(o=!C(a)||a!==this._$AH[r]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const G=$?$.emptyScript:"";class Z extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class X extends J{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:j)===I)return;const s=this._$AH,n=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==j&&(s===j||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const tt=m.litHtmlPolyfillSupport;null==tt||tt(V,Y),(null!==(f=m.litHtmlVersions)&&void 0!==f?f:m.litHtmlVersions=[]).push("2.8.0");var et,it;class st extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new Y(e.insertBefore(x(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return I}}st.finalized=!0,st._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:st});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");const ot=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function rt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ot(t,e)}function at(t){return rt({...t,state:!0})}var lt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements;class ht extends HTMLElement{constructor(){super(),this._timeoutId=null,this._config={},this._lastTime=null,this.attachShadow({mode:"open"})}setConfig(t){if(!t.entity||!t.entity.startsWith("input_datetime."))throw new Error("Specify an input_datetime entity");this._config=t}set hass(t){const e=this._config.entity,i=t.states[e];if(!i)throw new Error(`Entity ${e} not found`);i.last_changed!==this._lastTime&&(this._lastTime=i.last_changed,this._updateContent(i,t))}_updateContent(t){const e=this._config.title||t.attributes.friendly_name||"Last Update",i=this._config.icon||t.attributes.icon||"mdi:clock",s=this._config.clickEntity||this._config.entity,n=new Date(t.state);this.shadowRoot.innerHTML=`\n        <ha-card>\n          <style>\n            .container {\n              padding: 8px 16px 8px 16px;\n              display: flex;\n              justify-content: space-between;\n              flex-direction: column;\n              cursor: pointer;\n            }\n\n            .header {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n            }\n\n            .name {\n                color: var(--secondary-text-color);\n                line-height: 40px;\n                font-weight: 500;\n                font-size: 16px;\n                overflow-x: hidden;\n                overflow-y: hidden;\n                text-wrap-mode: nowrap;\n                white-space-collapse: collapse;\n                text-overflow: ellipsis;\n            }\n            \n            .icon {\n                color: var(--paper-item-icon-color,#44739e);\n                --state-inactive-color: var(--paper-item-icon-color, #44739e);\n                line-height: 40px;\n            }\n\n            .relative-time {\n              font-size: 24px;\n              font-weight: 500;\n              color: var(--primary-text-color);\n              margin-bottom: 12px;\n            }\n\n            .absolute-time {\n              font-size: 12px;\n              color: var(--secondary-text-color);\n            }\n          </style>\n          <div class="container">\n            <div class="header">\n              <div class="name">${e}</div>\n              <ha-icon class="icon" icon="${i}"></ha-icon>\n            </div>\n            <div class="relative-time">${this._getRelativeTime(n)}</div>\n            <div class="absolute-time">${n.toLocaleString()}</div>\n          </div>\n        </ha-card>\n      `;this.shadowRoot.querySelector("ha-card").onclick=t=>{const e=new Event("hass-more-info",{bubbles:!0,cancelable:!1,composed:!0});e.detail={entityId:s,moreInfoType:"ha-more-info-occupancy-calendar"},this.dispatchEvent(e)},this._setupUpdateInterval(n)}_setupUpdateInterval(t){this._timeoutId&&clearInterval(this._timeoutId),this._timeoutId=setInterval((()=>{const e=this.shadowRoot.querySelector(".relative-time");e&&(e.textContent=this._getRelativeTime(t))}),6e4)}_getRelativeTime(t){const e=(new Date).getTime(),i=new Date(t).getTime(),s=Math.floor((e-i)/1e3);if(s<60)return"Just now";if(s<3600){return`${Math.floor(s/60)}min ago`}if(s<86400){return`${Math.floor(s/3600)}h ago`}{const t=Math.floor(s/86400);return`${t} day${1===t?"":"s"} ago`}}disconnectedCallback(){this._timeoutId&&(clearInterval(this._timeoutId),this._timeoutId=null)}getCardSize(){return 2}static getLayoutOptions(){return{scale:1}}}customElements.define("time-since-card",ht),window.customCards=window.customCards||[],window.customCards.push({type:"time-since-card",name:"Time Since Card",preview:!1,description:"A card that displays the time since an input_datetime was last changed"}),console.info("%c Binary Sensor Helpers %c 0.1","color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;");const dt=(t,e)=>{if("d"===e)return t.getDate().toString();const i={month:e.includes("MMMM")?"long":"short",year:e.includes("yyyy")?"numeric":void 0,day:e.includes("d")?"numeric":void 0};return new Intl.DateTimeFormat("en-GB",i).format(t)},ct=t=>new Date(t.getFullYear(),t.getMonth(),1),pt=(t,e)=>!!e&&t.getTime()===e.getTime();let ut=class extends st{constructor(){super(...arguments),this._selectedDate=(t=>{const e=new Date(t);return e.setHours(0,0,0,0),e})(new Date),this._currentMonth=new Date,this._dayStats=[],this._maxEvents=0,this._hasRendered=!1,this._isFetching=!1,this._disconnected=!1}connectedCallback(){super.connectedCallback(),this._disconnected=!1}disconnectedCallback(){super.disconnectedCallback(),this._disconnected=!0}shouldUpdate(t){if(t.has("stateObj")||t.has("_selectedDate")||!this._hasRendered)return!this._disconnected}willUpdate(t){!t.has("stateObj")&&this._hasRendered||!this.stateObj.entity_id||this._isFetching||this._fetchHistory()}async _fetchHistory(){if(this._isFetching||this._disconnected)return;this._isFetching=!0;const t=ct(this._currentMonth),e=(i=this._currentMonth,new Date(i.getFullYear(),i.getMonth()+1,0));var i;try{const i=await this.hass.callApi("GET",`history/period/${t.toISOString()}?filter_entity_id=${this.stateObj.entity_id}&end_time=${e.toISOString()}&no_attributes`);if(this._disconnected)return;const s=(({start:t,end:e})=>{const i=[],s=new Date(t);for(;s<=e;)i.push(new Date(s)),s.setDate(s.getDate()+1);return i})({start:t,end:e}),n=[];let o=0;s.forEach((t=>{const e=i.flat().filter((e=>e.entity_id===this.stateObj.entity_id&&new Date(e.last_updated).getDate()===t.getDate()&&"on"===e.state)),s=e.length;s>o&&(o=s),n.push({date:t,eventCount:s,events:e.map((t=>({timestamp:new Date(t.last_updated).toLocaleTimeString(),state:t.state})))})})),this._dayStats=n,this._maxEvents=o,this.requestUpdate()}catch(t){console.error("Error fetching history:",t)}finally{this._isFetching=!1}}_getColorIntensity(t){if(0===t)return"var(--primary-background-color)";return`rgba(var(--rgb-primary-color), ${Math.max(.4,Math.min(1,t/this._maxEvents))})`}_handleDateClick(t){this._selectedDate=t,this.requestUpdate()}_previousMonth(){this._currentMonth=new Date(this._currentMonth.getFullYear(),this._currentMonth.getMonth()-1),this._hasRendered=!1,this._dayStats=[],this._maxEvents=0,this._fetchHistory()}_nextMonth(){this._currentMonth=new Date(this._currentMonth.getFullYear(),this._currentMonth.getMonth()+1),this._hasRendered=!1,this._dayStats=[],this._maxEvents=0,this._fetchHistory()}_renderEventList(t){const e=this._dayStats.find((e=>pt(e.date,t)));return e&&0!==e.events.length?N`
      <div class="event-list">
        <h3>Events on ${dt(t,"MMMM d, yyyy")}</h3>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            ${e.events.map((t=>N`
                <tr>
                  <td>${t.timestamp}</td>
                  <td>${t.state}</td>
                </tr>
              `))}
          </tbody>
        </table>
      </div>
    `:N`<div class="no-events">No events on this day</div>`}render(){if(!this.stateObj||0==this._dayStats.length)return N``;this._hasRendered=!0;const t=this._dayStats,e=ct(this._currentMonth),i=dt(this._currentMonth,"MMMM yyyy"),s=e.getDay(),n=Array((s+6)%7).fill(null);return N`
      <ha-card>
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
            ${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((t=>N`<div class="weekday">${t}</div>`))}
          </div>
          <div class="days">
            ${n.map((()=>N` <div class="day empty"></div> `))}
            ${t.map((({date:t,eventCount:e})=>N`
                <div
                  class="day ${pt(t,this._selectedDate)?"selected":""}"
                  style="background-color: ${this._getColorIntensity(e)}"
                  @click=${()=>this._handleDateClick(t)}
                >
                  ${dt(t,"d")}
                  ${e>0?N`<div class="event-indicator"></div>`:""}
                </div>
              `))}
          </div>
        </div>
        ${this._selectedDate?this._renderEventList(this._selectedDate):""}
      </ha-card>
    `}};ut.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,s)})`
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
  `,t([rt({attribute:!1})],ut.prototype,"hass",void 0),t([rt({attribute:!0})],ut.prototype,"stateObj",void 0),t([rt({attribute:!1})],ut.prototype,"entry",void 0),t([rt({attribute:!1})],ut.prototype,"editMode",void 0),t([at()],ut.prototype,"_selectedDate",void 0),t([at()],ut.prototype,"_currentMonth",void 0),t([at()],ut.prototype,"_dayStats",void 0),t([at()],ut.prototype,"_maxEvents",void 0),t([at()],ut.prototype,"_hasRendered",void 0),t([at()],ut.prototype,"_isFetching",void 0),ut=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e))("ha-more-info-occupancy-calendar")],ut);export{ut as MoreInfoOccupancyCalendar};
