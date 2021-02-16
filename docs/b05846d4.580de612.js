(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(147)),s={id:"ktor",title:"Ktor",sidebar_label:"Ktor",slug:"ktor.html"},i={unversionedId:"extensions/ktor",id:"extensions/ktor",isDocsHomePage:!1,title:"Ktor",description:"The `kotest-assertions-ktor` module provides response matchers for a Ktor application. There are matchers",source:"@site/docs/extensions/ktor.md",slug:"/extensions/ktor.html",permalink:"/docs/extensions/ktor.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/ktor.md",version:"current",sidebar_label:"Ktor",sidebar:"extensions",previous:{title:"Spring",permalink:"/docs/extensions/spring.html"},next:{title:"System Extensions",permalink:"/docs/extensions/system_extensions.html"}},c=[],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"kotest-assertions-ktor")," module provides response matchers for a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://ktor.io"}),"Ktor")," application. There are matchers\nfor both ",Object(a.b)("inlineCode",{parentName:"p"},"TestApplicationResponse")," if you are using the server side test support, and for ",Object(a.b)("inlineCode",{parentName:"p"},"HttpResponse")," if you are using the ktor\nclient classes."),Object(a.b)("p",null,"To add Ktor matchers, add the following dependency to your project"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-groovy"}),'testImplementation("io.kotest:kotest-assertions-ktor:${version}")\n')),Object(a.b)("p",null,"An example of using the matchers with the server side test support:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'withTestApplication({ module(testing = true) }) {\n   handleRequest(HttpMethod.Get, "/").apply {\n      response shouldHaveStatus HttpStatusCode.OK\n      response shouldNotHaveContent "failure"\n      response.shouldHaveHeader(name = "Authorization", value = "Bearer")\n      response.shouldNotHaveCookie(name = "Set-Cookie", cookieValue = "id=1234")\n   }\n}\n')),Object(a.b)("p",null,"And an example of using the client support:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'val client = HttpClient(CIO)\nval resp = client.post("http://mydomain.com/foo")\nresponse.shouldHaveStatus(HttpStatusCode.OK)\nresponse.shouldHaveHeader(name = "Authorization", value = "Bearer")\n\n')))}l.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,i(i({ref:t},p),{},{components:n})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);