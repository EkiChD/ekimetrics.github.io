(window.webpackJsonp=window.webpackJsonp||[]).push([[159,20,21],{237:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(234),l=n.n(c),o=n(231),s=n(21),i=n(233);a.a=function(e){var a=Object(t.useRef)(!1),c=Object(t.useRef)(null),u=Object(t.useState)(!1),h=u[0],d=u[1],f=Object(o.useHistory)(),m=Object(s.default)(),b=m.siteConfig,p=void 0===b?{}:b,E=m.isClient,g=void 0!==E&&E,v=p.baseUrl,w=Object(i.usePluginData)("docusaurus-lunr-search"),x=function(){a.current||(Promise.all([fetch(""+v+w.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+v+w.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(155),n.e(160)]).then(n.bind(null,238)),n.e(0).then(n.t.bind(null,54,7))]).then((function(e){var a=e[0],n=e[1],t=e[2].default;0!==a.length&&(!function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var t=v+n.url;document.createElement("a").href=t,f.push(t)}})}(a,n,t),d(!0))})),a.current=!0)},S=Object(t.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return g&&x(),r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:S,onKeyDown:S,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:h?"Search":"Loading...","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:x,onMouseOver:x,onFocus:S,onBlur:S,ref:c,disabled:!h}))}},256:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(236);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);