(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(3),r=t.n(o),i=(t(9),t(1)),l="330216f9e3042b8a57a7865c3de67865",s="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(null),u=Object(i.a)(r,2),m=u[0],d=u[1];return c.a.createElement("div",{className:"undefined"!==typeof(null===m||void 0===m?void 0:m.main)&&m.main.temp>16?"app warm":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return o(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key?fetch("".concat(s,"weather?q=").concat(t,"&units=metric&appid=").concat(l)).then((function(e){return e.json()})).then((function(e){d(e),o(""),console.log(e)})):console.log("".concat(s,"weather?q=").concat(t,"&appid=").concat(l))}})),"undefined"!==typeof(null===m||void 0===m?void 0:m.main)&&c.a.createElement("section",null,c.a.createElement("div",{className:"location-box"},m&&c.a.createElement("div",{className:"location"},m.name,", ",m.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(m.main.temp),"\xb0C"),c.a.createElement("div",{className:"weather"},m.weather[0].main)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.362411db.chunk.js.map