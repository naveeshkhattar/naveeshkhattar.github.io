(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2AnN":function(e,t,n){},"2dMJ":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a);n("2AnN");t.a=function(e){var t=e.style,n=e.children;return o.a.createElement("p",{className:t.className},n)}},"61uB":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("q1tI"),l=(a=r)&&a.__esModule?a:{default:a};var s={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var a=void 0;return a=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||2,n.state={columnCount:a},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":i(t))&&(t={default:parseInt(t)||2});var n=1/0,a=t.default||2;for(var o in t){var c=parseInt(o);c>0&&e<=c&&c<n&&(n=c,a=t[o])}a=Math.max(1,parseInt(a)||1),this.state.columnCount!==a&&this.setState({columnCount:a})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=[].concat(this.props.children||[]),a=0;a<n.length;a++){var o=a%e;t[o]||(t[o]=[]),t[o].push(n[a])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,a=void 0===n?{}:n,i=e.columnClassName,c=this.itemsInColumns(),r=100/c.length+"%",s=i;"string"!=typeof s&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===s&&(s="my-masonry-grid_column"));var u=o({},t,a,{style:o({},a.style,{width:r}),className:s});return c.map((function(e,t){return l.default.createElement("div",o({},u,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),a=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(a="my-masonry-grid")),l.default.createElement("div",o({},n,{className:a}),this.renderColumns())}}]),t}(l.default.Component);u.defaultProps=s,t.default=u},C9Ma:function(e,t,n){"use strict";t.a={BODY_WHITE:{className:"body-white"},BODY_BLACK:{className:"body-black"},HEADING1:{className:"heading1"},HEADING2_WHITE:{className:"heading2-white"},HEADING2_BLACK:{className:"heading2-black"},HEADING3:{className:"heading3"}}},CbSA:function(e,t,n){e.exports=n.p+"static/steps-1838729e5767e65020d2ad8ce7df2c61.jpg"},JwsL:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("2dMJ"),c=n("C9Ma"),r=(n("goLZ"),n("UwSJ")),l=n.n(r),s=n("OKPW"),u=n.n(s);t.a=function(){return o.a.createElement("div",{className:"footer-component"},o.a.createElement("div",{className:"social-media-wrapper"},o.a.createElement("div",{className:"social-media"},o.a.createElement("a",{href:"https://twitter.com/naveeshkhattar",target:"_blank"},o.a.createElement("img",{src:l.a,height:"20",width:"20"})),o.a.createElement("a",{href:"https://www.instagram.com/naveeshkhattar/",target:"_blank"},o.a.createElement("img",{src:u.a,height:"20",width:"20"})))),o.a.createElement(i.a,{style:c.a.BODY_BLACK},"Designed and developed with ❤️ by Naveesh Khattar. Special thanks to Aakash Khatter."))}},KGbF:function(e,t,n){},KTvG:function(e,t,n){e.exports=n.p+"static/dome-d2e9c6c83fbcdc3a1382e1226a517aa8.jpg"},OKPW:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNjMuMjczLDBIMTQ4LjcyOEM2Ni43MTksMCwwLDY2LjcxOSwwLDE0OC43Mjh2MjE0LjU0NEMwLDQ0NS4yODEsNjYuNzE5LDUxMiwxNDguNzI4LDUxMmgyMTQuNTQ0DQoJCQlDNDQ1LjI4MSw1MTIsNTEyLDQ0NS4yODEsNTEyLDM2My4yNzNWMTQ4LjcyOEM1MTIsNjYuNzE5LDQ0NS4yODEsMCwzNjMuMjczLDB6IE00NzIsMzYzLjI3MkM0NzIsNDIzLjIyNSw0MjMuMjI1LDQ3MiwzNjMuMjczLDQ3Mg0KCQkJSDE0OC43MjhDODguNzc1LDQ3Miw0MCw0MjMuMjI1LDQwLDM2My4yNzNWMTQ4LjcyOEM0MCw4OC43NzUsODguNzc1LDQwLDE0OC43MjgsNDBoMjE0LjU0NEM0MjMuMjI1LDQwLDQ3Miw4OC43NzUsNDcyLDE0OC43MjgNCgkJCVYzNjMuMjcyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDExOGMtNzYuMDk0LDAtMTM4LDYxLjkwNi0xMzgsMTM4czYxLjkwNiwxMzgsMTM4LDEzOHMxMzgtNjEuOTA2LDEzOC0xMzhTMzMyLjA5NCwxMTgsMjU2LDExOHogTTI1NiwzNTQNCgkJCWMtNTQuMDM3LDAtOTgtNDMuOTYzLTk4LTk4czQzLjk2My05OCw5OC05OHM5OCw0My45NjMsOTgsOThTMzEwLjAzNywzNTQsMjU2LDM1NHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBjeD0iMzk2IiBjeT0iMTE2IiByPSIyMCIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},PGGC:function(e,t,n){},PpMB:function(e,t,n){"use strict";t.a={WORK:"Work",SKETCHBOOK:"Sketchbook",ABOUT:"About",CONTACT:"Contact"}},ResL:function(e,t,n){e.exports=n.p+"static/third-eye-0f53601f08fc3f3319a13536d8aee773.gif"},UwSJ:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMCAyNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMCAyNC40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGQ9Ik0zMCwyLjljLTEuMSwwLjUtMi4zLDAuOC0zLjUsMWMxLjMtMC44LDIuMi0yLDIuNy0zLjRDMjgsMS4yLDI2LjcsMS43LDI1LjMsMmMtMS4yLTEuMy0yLjgtMi00LjUtMmMtMy40LDAtNi4yLDIuOC02LjIsNi4yCgljMCwwLjUsMC4xLDEsMC4yLDEuNEM5LjcsNy4zLDUuMSw0LjksMi4xLDEuMUMxLjYsMiwxLjMsMy4xLDEuMyw0LjJjMCwyLjEsMS4xLDQsMi43LDUuMUMzLDkuMywyLDksMS4yLDguNnYwLjFjMCwzLDIuMSw1LjUsNC45LDYKCWMtMC41LDAuMS0xLjEsMC4yLTEuNiwwLjJjLTAuNCwwLTAuOCwwLTEuMi0wLjFDNC4xLDE3LjIsNi40LDE5LDksMTkuMWMtMi4xLDEuNy00LjgsMi42LTcuNiwyLjZjLTAuNSwwLTEsMC0xLjUtMC4xCgljMi43LDEuNyw2LDIuOCw5LjQsMi44YzExLjMsMCwxNy41LTkuNCwxNy41LTE3LjVjMC0wLjMsMC0wLjUsMC0wLjhDMjguMSw1LjIsMjkuMiw0LjEsMzAsMi45eiIvPgo8L3N2Zz4K"},"VNL/":function(e,t,n){},fwgR:function(e,t,n){e.exports=n.p+"static/fluid-dfc41b03f3d926f916f8203b880543af.gif"},goLZ:function(e,t,n){},idYn:function(e,t,n){e.exports=n.p+"static/asphalt web-9e74f74446202edb4bbd9bf9fd9e0b3a.png"},pUwt:function(e,t,n){e.exports=n.p+"static/clouds-a6d632f1d91798ac0093354a41315036.jpg"},pfZt:function(e,t,n){},rY4l:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("Wbzz");n("KGbF");var c=function(e){var t=e.name,n=e.linkTo;return o.a.createElement("div",{className:"nav-logo"},o.a.createElement(i.Link,{to:n},t))};n("VNL/");var r=function(e){var t=e.name,n=e.linkTo,a=e.isAction,c=e.isSelected;return a?o.a.createElement("div",{className:"nav-action"},o.a.createElement("a",{href:n,target:"_blank"},t)):o.a.createElement("div",{className:"nav-link "+(c?"selected":"")},o.a.createElement(i.Link,{to:n},t))},l=n("PpMB"),s=(n("pfZt"),n("UwSJ")),u=n.n(s),m=n("OKPW"),M=n.n(m);t.a=function(e){var t=e.selectedItem;return o.a.createElement("div",{className:"header-component"},o.a.createElement("div",{className:"header-logo"},o.a.createElement(c,{name:"Naveesh",linkTo:"/"})),o.a.createElement("div",{className:"header-nav"},o.a.createElement(r,{name:"Work",linkTo:"/work",isSelected:t===l.a.WORK}),o.a.createElement(r,{name:"Sketchbook",linkTo:"/sketchbook",isSelected:t===l.a.SKETCHBOOK}),o.a.createElement(r,{name:"About",linkTo:"/about",isSelected:t===l.a.ABOUT}),o.a.createElement(r,{name:"Contact",linkTo:"mailto:naveeshkhattar@gmail.com",isAction:!0}),o.a.createElement("div",null,o.a.createElement("div",{className:"social-media"},o.a.createElement("a",{href:"https://twitter.com/naveeshkhattar",target:"_blank"},o.a.createElement("img",{src:u.a,height:"20",width:"20"})),o.a.createElement("a",{href:"https://www.instagram.com/naveeshkhattar/",target:"_blank"},o.a.createElement("img",{src:M.a,height:"20",width:"20"}))))))}},wMwj:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),i=n("61uB"),c=n.n(i),r=n("JwsL"),l=n("rY4l"),s=n("2dMJ"),u=n("PpMB"),m=n("C9Ma"),M=n("idYn"),C=n.n(M),d=n("pUwt"),L=n.n(d),w=n("KTvG"),N=n.n(w),g=n("fwgR"),y=n.n(g),p=n("CbSA"),f=n.n(p),j=n("ResL"),E=n.n(j);n("zThG"),n("PGGC");t.default=function(){return o.a.createElement("div",null,o.a.createElement(l.a,{selectedItem:u.a.SKETCHBOOK}),o.a.createElement("div",{className:"persistent-text"},o.a.createElement(s.a,{style:m.a.HEADING1},"A showcase of my art and my fart.")),o.a.createElement(c.a,{breakpointCols:2,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},o.a.createElement("div",null,o.a.createElement("img",{src:f.a})),o.a.createElement("div",null,o.a.createElement("img",{src:y.a})),o.a.createElement("div",null,o.a.createElement("img",{src:E.a})),o.a.createElement("div",null,o.a.createElement("img",{src:L.a})),o.a.createElement("div",null,o.a.createElement("img",{src:N.a})),o.a.createElement("div",null,o.a.createElement("img",{src:C.a}))),o.a.createElement(r.a,null))}},zThG:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-sketchbook-js-ee738b8315f30ea21a02.js.map