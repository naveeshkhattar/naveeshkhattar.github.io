(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2AnN":function(e,t,a){},"2dMJ":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n);a("2AnN");t.a=function(e){var t=e.style,a=e.children;return i.a.createElement("p",{className:t.className},a)}},"61uB":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a("q1tI"),s=(n=o)&&n.__esModule?n:{default:n};var l={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.reCalculateColumnCount=a.reCalculateColumnCount.bind(a),a.reCalculateColumnCountDebounce=a.reCalculateColumnCountDebounce.bind(a);var n=void 0;return n=a.props.breakpointCols&&a.props.breakpointCols.default?a.props.breakpointCols.default:parseInt(a.props.breakpointCols)||2,a.state={columnCount:n},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":M(t))&&(t={default:parseInt(t)||2});var a=1/0,n=t.default||2;for(var i in t){var c=parseInt(i);c>0&&e<=c&&c<a&&(a=c,n=t[i])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),a=[].concat(this.props.children||[]),n=0;n<a.length;n++){var i=n%e;t[i]||(t[i]=[]),t[i].push(a[n])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,a=e.columnAttrs,n=void 0===a?{}:a,M=e.columnClassName,c=this.itemsInColumns(),o=100/c.length+"%",l=M;"string"!=typeof l&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===l&&(l="my-masonry-grid_column"));var u=i({},t,n,{style:i({},n.style,{width:o}),className:l});return c.map((function(e,t){return s.default.createElement("div",i({},u,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),n=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(n="my-masonry-grid")),s.default.createElement("div",i({},a,{className:n}),this.renderColumns())}}]),t}(s.default.Component);u.defaultProps=l,t.default=u},"9a7k":function(e,t,a){"use strict";t.a={WHITE:{className:"primary-button-white"},BLACK:{className:"primary-button-black"}}},BUx0:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxOCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTJIMThWMTBIMFYxMlpNMCA3SDE4VjVIMFY3Wk0wIDBWMkgxOFYwSDBaIiBmaWxsPSIjMTUxNTE1Ii8+Cjwvc3ZnPgo="},C9Ma:function(e,t,a){"use strict";t.a={BODY_WHITE:{className:"body-white"},BODY_BLACK:{className:"body-black"},HEADING1:{className:"heading1"},HEADING2_WHITE:{className:"heading2-white"},HEADING2_BLACK:{className:"heading2-black"},HEADING3:{className:"heading3"}}},CbSA:function(e,t,a){e.exports=a.p+"static/steps-1838729e5767e65020d2ad8ce7df2c61.jpg"},GcsM:function(e,t,a){},JwsL:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),M=a("2dMJ"),c=a("C9Ma"),o=(a("goLZ"),a("kFIQ")),s=a.n(o),l=a("nIfH"),u=a.n(l);t.a=function(){return i.a.createElement("div",{className:"footer-component"},i.a.createElement("div",{className:"social-media-wrapper"},i.a.createElement("div",{className:"social-media"},i.a.createElement("a",{href:"https://twitter.com/naveeshkhattar",target:"_blank"},i.a.createElement("img",{src:s.a,height:"20",width:"20"})),i.a.createElement("a",{href:"https://www.instagram.com/naveeshkhattar/",target:"_blank"},i.a.createElement("img",{src:u.a,height:"20",width:"20"})))),i.a.createElement(M.a,{style:c.a.BODY_WHITE},"Designed and developed with ❤️ by Naveesh Khattar. Special thanks to Aakash Khatter."))}},KGbF:function(e,t,a){},KTvG:function(e,t,a){e.exports=a.p+"static/dome-d2e9c6c83fbcdc3a1382e1226a517aa8.jpg"},LawY:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNjMuMjczLDBIMTQ4LjcyOEM2Ni43MTksMCwwLDY2LjcxOSwwLDE0OC43Mjh2MjE0LjU0NEMwLDQ0NS4yODEsNjYuNzE5LDUxMiwxNDguNzI4LDUxMmgyMTQuNTQ0DQoJCQlDNDQ1LjI4MSw1MTIsNTEyLDQ0NS4yODEsNTEyLDM2My4yNzNWMTQ4LjcyOEM1MTIsNjYuNzE5LDQ0NS4yODEsMCwzNjMuMjczLDB6IE00NzIsMzYzLjI3MkM0NzIsNDIzLjIyNSw0MjMuMjI1LDQ3MiwzNjMuMjczLDQ3Mg0KCQkJSDE0OC43MjhDODguNzc1LDQ3Miw0MCw0MjMuMjI1LDQwLDM2My4yNzNWMTQ4LjcyOEM0MCw4OC43NzUsODguNzc1LDQwLDE0OC43MjgsNDBoMjE0LjU0NEM0MjMuMjI1LDQwLDQ3Miw4OC43NzUsNDcyLDE0OC43MjgNCgkJCVYzNjMuMjcyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDExOGMtNzYuMDk0LDAtMTM4LDYxLjkwNi0xMzgsMTM4czYxLjkwNiwxMzgsMTM4LDEzOHMxMzgtNjEuOTA2LDEzOC0xMzhTMzMyLjA5NCwxMTgsMjU2LDExOHogTTI1NiwzNTQNCgkJCWMtNTQuMDM3LDAtOTgtNDMuOTYzLTk4LTk4czQzLjk2My05OCw5OC05OHM5OCw0My45NjMsOTgsOThTMzEwLjAzNywzNTQsMjU2LDM1NHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBjeD0iMzk2IiBjeT0iMTE2IiByPSIyMCIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},OuqM:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),M=a("Wbzz");a("GcsM");t.a=function(e){var t=e.style,a=e.buttonText,n=e.linkTo;return i.a.createElement("div",{className:t.className},i.a.createElement(M.Link,{to:n},a))}},PGGC:function(e,t,a){},PpMB:function(e,t,a){"use strict";t.a={WORK:"Work",SKETCHBOOK:"Sketchbook",ABOUT:"About",CONTACT:"Contact"}},ResL:function(e,t,a){e.exports=a.p+"static/third-eye-0f53601f08fc3f3319a13536d8aee773.gif"},VBJu:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDEuNDFMMTIuNTkgMEw3IDUuNTlMMS40MSAwTDAgMS40MUw1LjU5IDdMMCAxMi41OUwxLjQxIDE0TDcgOC40MUwxMi41OSAxNEwxNCAxMi41OUw4LjQxIDdMMTQgMS40MVoiIGZpbGw9IiMxNTE1MTUiLz4KPC9zdmc+Cg=="},"VNL/":function(e,t,a){},dFxr:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMCAyNC40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMCAyNC40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGQ9Ik0zMCwyLjljLTEuMSwwLjUtMi4zLDAuOC0zLjUsMWMxLjMtMC44LDIuMi0yLDIuNy0zLjRDMjgsMS4yLDI2LjcsMS43LDI1LjMsMmMtMS4yLTEuMy0yLjgtMi00LjUtMmMtMy40LDAtNi4yLDIuOC02LjIsNi4yCgljMCwwLjUsMC4xLDEsMC4yLDEuNEM5LjcsNy4zLDUuMSw0LjksMi4xLDEuMUMxLjYsMiwxLjMsMy4xLDEuMyw0LjJjMCwyLjEsMS4xLDQsMi43LDUuMUMzLDkuMywyLDksMS4yLDguNnYwLjFjMCwzLDIuMSw1LjUsNC45LDYKCWMtMC41LDAuMS0xLjEsMC4yLTEuNiwwLjJjLTAuNCwwLTAuOCwwLTEuMi0wLjFDNC4xLDE3LjIsNi40LDE5LDksMTkuMWMtMi4xLDEuNy00LjgsMi42LTcuNiwyLjZjLTAuNSwwLTEsMC0xLjUtMC4xCgljMi43LDEuNyw2LDIuOCw5LjQsMi44YzExLjMsMCwxNy41LTkuNCwxNy41LTE3LjVjMC0wLjMsMC0wLjUsMC0wLjhDMjguMSw1LjIsMjkuMiw0LjEsMzAsMi45eiIvPgo8L3N2Zz4K"},fwgR:function(e,t,a){e.exports=a.p+"static/fluid-dfc41b03f3d926f916f8203b880543af.gif"},goLZ:function(e,t,a){},idYn:function(e,t,a){e.exports=a.p+"static/asphalt web-9e74f74446202edb4bbd9bf9fd9e0b3a.png"},kFIQ:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzFweCIgaGVpZ2h0PSIyNXB4IiB2aWV3Qm94PSIwIDAgMzEgMjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbi10d2l0dGVyX2JsYWNrPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uLXR3aXR0ZXJfYmxhY2siIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMSwyLjkgQzI5LjksMy40IDI4LjcsMy43IDI3LjUsMy45IEMyOC44LDMuMSAyOS43LDEuOSAzMC4yLDAuNSBDMjksMS4yIDI3LjcsMS43IDI2LjMsMiBDMjUuMSwwLjcgMjMuNSwwIDIxLjgsMCBDMTguNCwwIDE1LjYsMi44IDE1LjYsNi4yIEMxNS42LDYuNyAxNS43LDcuMiAxNS44LDcuNiBDMTAuNyw3LjMgNi4xLDQuOSAzLjEsMS4xIEMyLjYsMiAyLjMsMy4xIDIuMyw0LjIgQzIuMyw2LjMgMy40LDguMiA1LDkuMyBDNCw5LjMgMyw5IDIuMiw4LjYgTDIuMiw4LjcgQzIuMiwxMS43IDQuMywxNC4yIDcuMSwxNC43IEM2LjYsMTQuOCA2LDE0LjkgNS41LDE0LjkgQzUuMSwxNC45IDQuNywxNC45IDQuMywxNC44IEM1LjEsMTcuMiA3LjQsMTkgMTAsMTkuMSBDNy45LDIwLjggNS4yLDIxLjcgMi40LDIxLjcgQzEuOSwyMS43IDEuNCwyMS43IDAuOSwyMS42IEMzLjYsMjMuMyA2LjksMjQuNCAxMC4zLDI0LjQgQzIxLjYsMjQuNCAyNy44LDE1IDI3LjgsNi45IEMyNy44LDYuNiAyNy44LDYuNCAyNy44LDYuMSBDMjkuMSw1LjIgMzAuMiw0LjEgMzEsMi45IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},nIfH:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmljb24taW5zdGFncmFtPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uLWluc3RhZ3JhbSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTM2My4yNzMsMCBMMTQ4LjcyOCwwIEM2Ni43MTksMCAwLDY2LjcxOSAwLDE0OC43MjggTDAsMzYzLjI3MiBDMCw0NDUuMjgxIDY2LjcxOSw1MTIgMTQ4LjcyOCw1MTIgTDM2My4yNzIsNTEyIEM0NDUuMjgxLDUxMiA1MTIsNDQ1LjI4MSA1MTIsMzYzLjI3MyBMNTEyLDE0OC43MjggQzUxMiw2Ni43MTkgNDQ1LjI4MSwwIDM2My4yNzMsMCBaIE00NzIsMzYzLjI3MiBDNDcyLDQyMy4yMjUgNDIzLjIyNSw0NzIgMzYzLjI3Myw0NzIgTDE0OC43MjgsNDcyIEM4OC43NzUsNDcyIDQwLDQyMy4yMjUgNDAsMzYzLjI3MyBMNDAsMTQ4LjcyOCBDNDAsODguNzc1IDg4Ljc3NSw0MCAxNDguNzI4LDQwIEwzNjMuMjcyLDQwIEM0MjMuMjI1LDQwIDQ3Miw4OC43NzUgNDcyLDE0OC43MjggTDQ3MiwzNjMuMjcyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjU2LDExOCBDMTc5LjkwNiwxMTggMTE4LDE3OS45MDYgMTE4LDI1NiBDMTE4LDMzMi4wOTQgMTc5LjkwNiwzOTQgMjU2LDM5NCBDMzMyLjA5NCwzOTQgMzk0LDMzMi4wOTQgMzk0LDI1NiBDMzk0LDE3OS45MDYgMzMyLjA5NCwxMTggMjU2LDExOCBaIE0yNTYsMzU0IEMyMDEuOTYzLDM1NCAxNTgsMzEwLjAzNyAxNTgsMjU2IEMxNTgsMjAxLjk2MyAyMDEuOTYzLDE1OCAyNTYsMTU4IEMzMTAuMDM3LDE1OCAzNTQsMjAxLjk2MyAzNTQsMjU2IEMzNTQsMzEwLjAzNyAzMTAuMDM3LDM1NCAyNTYsMzU0IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBjeD0iMzk2IiBjeT0iMTE2IiByPSIyMCI+PC9jaXJjbGU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},pUwt:function(e,t,a){e.exports=a.p+"static/clouds-a6d632f1d91798ac0093354a41315036.jpg"},pfZt:function(e,t,a){},rY4l:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),M=a("Wbzz");a("KGbF");var c=function(e){var t=e.name,a=e.linkTo;return i.a.createElement("div",{className:"nav-logo"},i.a.createElement(M.Link,{to:a},t))};a("VNL/");var o=function(e){var t=e.name,a=e.linkTo,n=e.isSelected;return i.a.createElement("div",{className:"nav-link "+(n?"selected":"")},i.a.createElement(M.Link,{to:a},t))},s=a("PpMB"),l=(a("pfZt"),a("dFxr")),u=a.n(l),r=a("LawY"),I=a.n(r),g=a("BUx0"),m=a.n(g),L=a("VBJu"),C=a.n(L);t.a=function(e){var t=e.selectedItem,a=Object(n.useState)(!1),M=a[0],l=a[1];return i.a.createElement("div",{className:"header-component"},i.a.createElement("div",{className:"header-logo"},i.a.createElement(c,{name:"Naveesh",linkTo:"/"})),i.a.createElement("div",{className:"header-menu-button"},i.a.createElement("button",{onClick:function(){l(!M)}},i.a.createElement("img",{src:M?C.a:m.a,height:"20",width:"20"}))),i.a.createElement("div",{className:M?"header-menu-nav":"header-nav"},i.a.createElement(o,{name:"Work",linkTo:"/work",isSelected:t===s.a.WORK}),i.a.createElement(o,{name:"Sketchbook",linkTo:"/sketchbook",isSelected:t===s.a.SKETCHBOOK}),i.a.createElement(o,{name:"About",linkTo:"/about",isSelected:t===s.a.ABOUT}),i.a.createElement(o,{name:"Contact",linkTo:"/contact",isSelected:t===s.a.CONTACT}),i.a.createElement("div",null,i.a.createElement("div",{className:"social-media"},i.a.createElement("a",{href:"https://twitter.com/naveeshkhattar",target:"_blank"},i.a.createElement("img",{src:u.a,height:"20",width:"20"})),i.a.createElement("a",{href:"https://www.instagram.com/naveeshkhattar/",target:"_blank"},i.a.createElement("img",{src:I.a,height:"20",width:"20"}))))))}},wMwj:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),M=a("61uB"),c=a.n(M),o=a("JwsL"),s=a("rY4l"),l=a("OuqM"),u=a("2dMJ"),r=a("9a7k"),I=a("PpMB"),g=a("C9Ma"),m=a("idYn"),L=a.n(m),C=a("pUwt"),N=a.n(C),D=a("KTvG"),y=a.n(D),w=a("fwgR"),j=a.n(w),d=a("CbSA"),E=a.n(d),T=a("ResL"),b=a.n(T);a("zThG"),a("PGGC");t.default=function(){return i.a.createElement("div",null,i.a.createElement(s.a,{selectedItem:I.a.SKETCHBOOK}),i.a.createElement("div",{className:"banner-title"},i.a.createElement(u.a,{style:g.a.HEADING1},"A showcase of my art and my fart.")),i.a.createElement(c.a,{breakpointCols:2,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},i.a.createElement("div",null,i.a.createElement("img",{src:E.a})),i.a.createElement("div",null,i.a.createElement("img",{src:j.a})),i.a.createElement("div",null,i.a.createElement("img",{src:b.a})),i.a.createElement("div",null,i.a.createElement("img",{src:N.a})),i.a.createElement("div",null,i.a.createElement("img",{src:y.a})),i.a.createElement("div",null,i.a.createElement("img",{src:L.a}))),i.a.createElement("div",{className:"contact-section"},i.a.createElement("div",{className:"contact-heading"},i.a.createElement(u.a,{style:g.a.HEADING2_WHITE},"Let's work together")),i.a.createElement("div",{className:"contact-body"},i.a.createElement(u.a,{style:g.a.BODY_WHITE},"We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process.")),i.a.createElement("div",{className:"contact-button"},i.a.createElement(l.a,{style:r.a.WHITE,buttonText:"Get in touch",linkTo:"/contact"}))),i.a.createElement(o.a,null))}},zThG:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-sketchbook-js-d2fcd09437f5ed3bd927.js.map