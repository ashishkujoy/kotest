(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{147:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=a.a.createContext({}),s=function(t){var e=a.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,b=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,O=d["".concat(b,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(O,i(i({ref:e},l),{},{components:n})):a.a.createElement(O,i({ref:e},l))}));function O(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,b=new Array(o);b[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,b[1]=i;for(var l=2;l<o;l++)b[l]=n[l];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return b})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(147)),b={id:"index",title:"Extensions",slug:"extensions.html",sidebar_label:"Introduction"},i={unversionedId:"extensions/index",id:"extensions/index",isDocsHomePage:!1,title:"Extensions",description:"Kotest integrates with many other libraries and frameworks. Some are provided by the Kotest team, and others are",source:"@site/docs/extensions/index.md",slug:"/extensions/extensions.html",permalink:"/docs/extensions/extensions.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/index.md",version:"current",sidebar_label:"Introduction",sidebar:"extensions",next:{title:"Spring",permalink:"/docs/extensions/spring.html"}},c=[{value:"Kotest Team Extensions",id:"kotest-team-extensions",children:[]},{value:"Third Party Extensions",id:"third-party-extensions",children:[]}],l={rightToc:c};function s(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Kotest integrates with many other libraries and frameworks. Some are provided by the Kotest team, and others are\nmaintained and hosted by third parties."),Object(o.b)("h3",{id:"kotest-team-extensions"},"Kotest Team Extensions"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Project"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/extensions/spring.html"}),"Spring")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Adds support for spring beans in tests and spring test annotations")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/extensions/ktor.html"}),"Ktor")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides matchers for Ktor endpoints")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/extensions/koin.html"}),"Koin")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Kotlin DI framework")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/extensions/mockserver.html"}),"Mockserver")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Integrate mockserver HTTP servers with the test lifecycle")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/extensions/system_extensions.html"}),"System")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides utilities for integrating with System.* functions")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/extensions/instant.html"}),"Instant")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Override the 'now' context in java.time")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/extensions/test_containers.html"}),"Test Containers")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Run docker images as part of a test lifecycle")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/extensions/robolectric.html"}),"Roboelectric")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Integrate roboelectric with the test lifecycle")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/extensions/allure.html"}),"Allure")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides output for the allure framework")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/extensions/junit_xml.html"}),"JUnit XML")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provides output in the JUnit XML format for integration with reporting tools")))),Object(o.b)("h3",{id:"third-party-extensions"},"Third Party Extensions"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Project"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/http4k/http4k/tree/master/http4k-testing-kotest"}),"Http4k")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Functional toolkit for Kotlin HTTP applications")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/micronaut-projects/micronaut-test"}),"Micronaut")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JVM-based, full-stack framework for building modular, easily testable microservice")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"https://github.com/jGleitz/testfiles"}),"TestFiles")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Creates organized files and directories for testing")))))}s.isMDXComponent=!0}}]);