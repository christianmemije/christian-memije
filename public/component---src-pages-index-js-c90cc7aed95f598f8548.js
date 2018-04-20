webpackJsonp([35783957827783],{113:function(e,t,n){"use strict";function o(e){return e}function r(e,t,n){function r(e,t){var n=g.hasOwnProperty(t)?g[t]:null;v.hasOwnProperty(t)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function i(e,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,i=o.__reactAutoBindPairs;n.hasOwnProperty(u)&&N.mixins(e,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==u){var s=n[a],c=o.hasOwnProperty(a);if(r(c,a),N.hasOwnProperty(a))N[a](e,s);else{var p=g.hasOwnProperty(a),h="function"==typeof s,d=h&&!p&&!c&&n.autobind!==!1;if(d)i.push(a,s),o[a]=s;else if(c){var y=g[a];l(p&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,a),"DEFINE_MANY_MERGED"===y?o[a]=f(o[a],s):"DEFINE_MANY"===y&&(o[a]=m(o[a],s))}else o[a]=s}}}else;}function c(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in N;l(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in e;if(i){var a=b.hasOwnProperty(n)?b[n]:null;return l("DEFINE_MANY_MERGED"===a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=f(e[n],o))}e[n]=o}}}function p(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(l(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return p(r,n),p(r,o),r}}function m(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function h(e,t){var n=t.bind(e);return n}function d(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=h(e,r)}}function y(e){var t=o(function(e,o,r){this.__reactAutoBindPairs.length&&d(this),this.props=e,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;l("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=i});t.prototype=new I,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],E.forEach(i.bind(null,t)),i(t,_),i(t,e),i(t,D),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in g)t.prototype[r]||(t.prototype[r]=null);return t}var E=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},N={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)i(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=a({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=a({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=a({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},D={componentWillUnmount:function(){this.__isMounted=!1}},v={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},I=function(){};return a(I.prototype,e.prototype,v),y}var i,a=n(2),s=n(40),l=n(1),u="mixins";i={},e.exports=r},119:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,o=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,a=Object.getPrototypeOf,s=a&&a(Object);return function l(u,c,p){if("string"!=typeof c){if(s){var f=a(c);f&&f!==s&&l(u,f,p)}var m=o(c);r&&(m=m.concat(r(c)));for(var h=0;h<m.length;++h){var d=m[h];if(!(e[d]||t[d]||p&&p[d])){var y=i(c,d);try{n(u,d,y)}catch(e){}}}return u}return u}})},2:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,s,l=n(e),u=1;u<arguments.length;u++){o=Object(arguments[u]);for(var c in o)i.call(o,c)&&(l[c]=o[c]);if(r){s=r(o);for(var p=0;p<s.length;p++)a.call(o,s[p])&&(l[s[p]]=o[s[p]])}}return l}},253:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(5),i=o(r),a=n(185),s=(o(a),function(){return i.default.createElement("div",null,i.default.createElement("h1",null,"Christian Memije"),i.default.createElement("h2",null,"Hello world!"),i.default.createElement("p",null,"I am a UX engineer who enjoys designing and implementing great user experiences. I enjoy working closely with designers for rapid iteration. I also enjoy working in fast-paced teams. I am passionate about using software to help make a positive impact on this world."),i.default.createElement("p",null,"I currently work at ",i.default.createElement("a",{href:"https://learningequality.org/"},"Learning Equality")," as a UX Developer. I help design and develop ",i.default.createElement("a",{href:"https://learningequality.org/kolibri/"},"Kolibri"),", an open source offline educational app. You can view my code contributions to the project in the ",i.default.createElement("a",{href:"https://github.com/learningequality/kolibri/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Achristianmemije+"},"repo's pull request history"),". You can also view the end result by clicking through a  ",i.default.createElement("a",{href:"http://kolibribeta.learningequality.org/learn/#/topics/c/4984b1b43e4c580e804779d7ee4f458f"},"demo of Kolibri")," and checking out the ",i.default.createElement("a",{href:"http://kolibribeta.learningequality.org/style_guide#/components/buttons"},"Kolibri style guide"),"."),i.default.createElement("h2",null,"Learn more"),i.default.createElement("ul",null,i.default.createElement("li",null,"View my ",i.default.createElement("a",{href:"/Christian_Memije_Resume.pdf"},"resume"),"."),i.default.createElement("li",null,"View my open source contributions on ",i.default.createElement("a",{href:"https://github.com/christianmemije"},"Github"),"."),i.default.createElement("li",null,"Connect with me on ",i.default.createElement("a",{href:"https://www.linkedin.com/in/christianmemije"},"LinkedIn"),".")))});t.default=s,e.exports=t.default}});