webpackJsonp([35783957827783],{236:function(e,t,n){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=n(5),d=a(i),c=n(70),f=a(c),s=n(6),m=l(s),p=n(44),h=n(69),y=a(h),g={data:m.object.isRequired},E=function(e){var t=e.node;return d.default.createElement("div",null,d.default.createElement(f.default,{style:{color:"inherit",textDecoration:"none"},to:"/products/"+t.id+"/"},d.default.createElement("div",{style:{display:"flex",alignItems:"center",borderBottom:"1px solid lightgray",paddingBottom:(0,p.rhythm)(.5),marginBottom:(0,p.rhythm)(.5)}},d.default.createElement("div",{style:{marginRight:(0,p.rhythm)(.5)}},t.image[0].resolutions.src&&d.default.createElement(y.default,{style:{margin:0},resolutions:t.image[0].resolutions})),d.default.createElement("div",{style:{flex:1}},t.productName.productName))))},b=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props.data.us.edges,t=this.props.data.german.edges;return d.default.createElement("div",{style:{marginBottom:(0,p.rhythm)(2)}},d.default.createElement("h2",null,"Gatsby's integration with the Contentful Image API"),d.default.createElement(f.default,{to:"/image-api/"},"See examples"),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("h2",null,"Localization"),d.default.createElement("p",null,"The ",d.default.createElement("code",null,"gatsby-source-contentful")," plugin offers full support for Contentful's localization features. Our sample space includes products localized into both English and German."),d.default.createElement("p",null,"An entry and asset node are created for each locale following fallback rules for missing localization. In addition, each node has an additional field added, ",d.default.createElement("code",null,"node_locale")," so you can select for nodes from a single locale"),d.default.createElement("h3",null,"en-US"),e.map(function(e,t){var n=e.node;return d.default.createElement(E,{node:n,key:n.id})}),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("h3",null,"de"),t.map(function(e,t){var n=e.node;return d.default.createElement(E,{node:n,key:n.id})}))},t}(d.default.Component);b.propTypes=g,t.default=b;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-5ccd08c293fbdceeb60e.js.map