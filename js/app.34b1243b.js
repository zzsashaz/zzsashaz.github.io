(function(){var t={1792:function(t,e,r){"use strict";var a=r(6369),n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("button",{staticClass:"base-btn",attrs:{type:t.btnType,disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)},s=[],i=a["default"].extend({name:"BaseButton",props:{disabled:{type:Boolean,default:!1},btnType:{type:String,default:"button"}}}),o=i,l=r(1001),c=(0,l.Z)(o,n,s,!1,null,"a03ac136",null),u=c.exports,d=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"base-select",attrs:{tabindex:0,disabled:t.disabled},on:{blur:function(e){t.isOpen=!1}}},[e("button",{staticClass:"base-select__selected",class:{"base-select__selected_active":t.isOpen},attrs:{disabled:t.disabled},on:{click:t.toggle}},[[t._v(" "+t._s(t.value.title)+" ")]],2),e("input",{staticStyle:{display:"none"},domProps:{value:t.value}}),e("transition",{attrs:{name:"fade"}},[t.isOpen?e("div",{staticClass:"base-select__items"},[t._l(t.options,(function(r){return e("button",{key:r.value,staticClass:"base-select__item base-select__item_single",on:{click:function(e){return t.selectItem(r)}}},[t._v(" "+t._s(r.title)+" ")])}))],2):t._e()])],1)},h=[],p=a["default"].extend({name:"base-select",props:{options:{type:Array,required:!0},value:{type:[Object,String],required:!0},disabled:{type:Boolean,default:!1}},data(){return{isOpen:!1}},computed:{selectHide(){return this.isOpen?"":"base-select_selectHide"}},methods:{selectItem(t){this.isOpen=!1,this.$emit("input",t)},toggle(){this.isOpen=!this.isOpen}}}),f=p,m=(0,l.Z)(f,d,h,!1,null,"72568ea8",null),b=m.exports,x=()=>{a["default"].component("base-button",u),a["default"].component("base-select",b)},_=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e("base-button",{attrs:{disabled:t.isShowModal},on:{click:function(e){t.isShowModal=!0}}},[t._v(t._s(t.$t("buttons.create")))]),t._l(t.chartsList,(function(t){return e("chart-module",{key:`chart-${t.id}`,attrs:{chart:t}})})),t.isShowModal?e("div",{staticClass:"modal"},[e("div",{staticClass:"modal__settings"},[e("div",{staticClass:"modal__chart-type"},[e("h3",[t._v(t._s(t.$t("chart.title")))]),e("base-select",{attrs:{options:t.chartTypeOptions},model:{value:t.chartTypeValue,callback:function(e){t.chartTypeValue=e},expression:"chartTypeValue"}})],1),e("div",{staticClass:"modal__chart-url"},[e("h3",[t._v(t._s(t.$t("chart.url")))]),e("base-select",{attrs:{options:t.chartUrlOptions,disabled:""},model:{value:t.chartUrlValue,callback:function(e){t.chartUrlValue=e},expression:"chartUrlValue"}})],1)]),e("div",{staticClass:"modal__button"},[e("base-button",{on:{click:t.createChart}},[t._v(t._s(t.$t("buttons.accept")))])],1)]):t._e()],2)},v=[];const y={LINE:"https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2",PIE:"https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047"},g={LINE:"line",PIE:"pie"},D={MOCKY_IO:"https://run.mocky.io/v3/"},C={ADD_CHART:"add_chart",DELETE_CHART:"delete_chart"};var O=r(3822),S=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"chart"},[e("base-button",{on:{click:t.deleteChart}},[t._v(t._s(t.$t("buttons.delete")))]),e(t.chartType,{tag:"component",attrs:{chart:t.chart}})],1)},k=[],E=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"chart-demo"}},[e("DxChart",{attrs:{id:"chart","data-source":t.chart.data,palette:"Violet"}},[e("DxCommonSeriesSettings",{attrs:{type:t.type,"argument-field":"Дата"}}),e("DxSeries",{attrs:{"value-field":"Процент",name:"Процент"}}),e("DxMargin",{attrs:{bottom:20}}),e("DxArgumentAxis",{attrs:{"value-margins-enabled":!1,"discrete-axis-division-mode":"crossLabels"}},[e("DxGrid",{attrs:{visible:!0}})],1),e("DxLegend",{attrs:{"vertical-alignment":"bottom","horizontal-alignment":"center","item-text-position":"bottom"}}),e("DxExport",{attrs:{enabled:!0}}),e("DxTooltip",{attrs:{enabled:!0}})],1)],1)},L=[],T=r(5699),I=a["default"].extend({name:"LineChart",components:{DxChart:T.DxChart,DxCommonSeriesSettings:T.DxCommonSeriesSettings,DxSeries:T.DxSeries,DxArgumentAxis:T.DxArgumentAxis,DxExport:T.DxExport,DxGrid:T.DxGrid,DxMargin:T.DxMargin,DxLegend:T.DxLegend,DxTooltip:T.DxTooltip},props:{chart:{type:Object,required:!0}},data(){return{type:"line"}}}),w=I,P=(0,l.Z)(w,E,L,!1,null,"99f4b870",null),A=P.exports,$=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("DxPieChart",{attrs:{id:"pie","data-source":t.chart.data,palette:"Bright"},on:{"point-click":function(e){return t.pointClickHandler(e)},"legend-click":function(e){return t.legendClickHandler(e)}}},[e("DxSeries",{attrs:{"argument-field":"Группа","value-field":"Доля"}},[e("DxLabel",{attrs:{visible:!0}},[e("DxConnector",{attrs:{visible:!0,width:1}})],1)],1),e("DxSize",{attrs:{width:500}}),e("DxExport",{attrs:{enabled:!0}})],1)},M=[],N=r(7081),j=r.n(N),V=a["default"].extend({components:{DxPieChart:j(),DxSize:N.DxSize,DxSeries:N.DxSeries,DxLabel:N.DxLabel,DxConnector:N.DxConnector,DxExport:N.DxExport},name:"PieChart",props:{chart:{type:Object,required:!0}},methods:{pointClickHandler(t){this.toggleVisibility(t.target)},legendClickHandler(t){const e=t.target,r=t.component.getAllSeries()[0].getPointsByArg(e)[0];this.toggleVisibility(r)},toggleVisibility(t){t.isVisible()?t.hide():t.show()}}}),H=V,Z=(0,l.Z)(H,$,M,!1,null,"0d7c2dc0",null),U=Z.exports,B=a["default"].extend({name:"chart-module",components:{"line-chart":A,"pie-chart":U},props:{chart:{type:Object,required:!0}},computed:{chartType(){const t={[g.PIE]:"pie-chart",[g.LINE]:"line-chart"};return t[this.chart.type]}},methods:{deleteChart(){this.$store.commit(C.DELETE_CHART,this.chart.id)}}}),R=B,q=(0,l.Z)(R,S,k,!1,null,"fd509bd8",null),z=q.exports,J=a["default"].extend({name:"App",components:{ChartModule:z},data(){return{chartTypeOptions:[{title:this.$tc("chart.pie"),value:g.PIE},{title:this.$tc("chart.line"),value:g.LINE}],chartTypeValue:{title:this.$t("chart.pie"),value:g.PIE},chartUrlOptions:[{title:this.$tc("chart.mockyIo"),value:D.MOCKY_IO}],chartUrlValue:{title:this.$tc("chart.mockyIo"),value:D.MOCKY_IO},isShowModal:!1}},computed:{...(0,O.Se)({chartsList:"getChartsList"})},methods:{async createChart(){try{await this.$store.dispatch("fetchChartData",this.chartTypeValue.value),this.isShowModal=!1}catch(t){console.log(t)}}}}),F=J,G=(0,l.Z)(F,_,v,!1,null,null,null),K=G.exports,Y=(r(541),r(70));const Q=(t,e)=>Y.ZP.get(t,e);var W={$get:Q};const X=async()=>{const{data:t}=await W.$get(y.LINE);return console.log(t),t},tt=async()=>{const{data:t}=await W.$get(y.PIE);return console.log(t),t};var et={state:()=>({chartsList:[],nextChartId:0}),actions:{async fetchChartData(t,e){const r={};return e===g.PIE?(r.data=await tt(),r.type=g.PIE):e===g.LINE&&(r.data=await X(),r.type=g.LINE),r.id=t.getters.getNextChartId,t.commit(C.ADD_CHART,r),r}},mutations:{[C.ADD_CHART](t,e){const r=JSON.parse(JSON.stringify(t.chartsList));r.unshift(e),t.chartsList=r,t.nextChartId+=1},[C.DELETE_CHART](t,e){const r=t.chartsList.findIndex((t=>t.id===e)),a=JSON.parse(JSON.stringify(t.chartsList));a.splice(r,1),t.chartsList=a}},getters:{getNextChartId(t){return t.nextChartId},getChartsList(t){return t.chartsList}}};a["default"].use(O.ZP);var rt=new O.ZP.Store({modules:{chart:et}}),at=r(6018);const nt={ru:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"long",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric"}}};function st(){const t=r(8973),e={};return t.keys().forEach((r=>{const a=r.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){const n=a[1];e[n]=t(r)}})),e}a["default"].use(at.Z);var it=new at.Z({dateTimeFormats:nt,locale:"ru",fallbackLocale:"ru",messages:st()});a["default"].config.productionTip=!1,x(),new a["default"]({store:rt,i18n:it,render:t=>t(K)}).$mount("#app")},8973:function(t,e,r){var a={"./ru.json":9672};function n(t){var e=s(t);return r(e)}function s(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id=8973},9672:function(t){"use strict";t.exports=JSON.parse('{"chart":{"pie":"Радиальный график","line":"Линейный график","title":"Тип графика","url":"Источник данных","mockyIo":"mocky.io"},"buttons":{"accept":"Принять","create":"Создать график","delete":"Удалить график"}}')}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,s){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],s=t[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[l])}))?a.splice(l--,1):(o=!1,s<i&&(i=s));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,n,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,i=a[0],o=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var u=l(r)}for(e&&e(a);c<i.length;c++)s=i[c],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},a=self["webpackChunkelastoo_test"]=self["webpackChunkelastoo_test"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(1792)}));a=r.O(a)})();
//# sourceMappingURL=app.34b1243b.js.map