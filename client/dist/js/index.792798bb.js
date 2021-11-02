(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={index:0},i=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/autograder_site/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-card",{attrs:{elevation:"2",flat:""}},[a("v-app-bar",{attrs:{color:"teal",dark:""}},[a("v-container",[a("v-app-bar-title",[e._v("Autograding Bundler")])],1),a("v-tabs",{staticClass:"m9-nl",attrs:{right:"","background-color":"teal",dark:""}},[a("v-tab",{attrs:{color:"white",to:"/"}},[e._v("Home")]),a("v-tab",{attrs:{color:"white",to:"/grading"}},[e._v("Grading in R")])],1)],1)],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{attrs:{app:""}})],1)},i=[],r={name:"App",data:function(){return{}}},o=r,l=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),m=a("40dc"),v=a("bb78"),f=a("b0af"),p=a("a523"),b=a("553a"),g=a("f6c4"),h=a("71a3"),x=a("fe57"),_=Object(l["a"])(o,n,i,!1,null,null,null),w=_.exports;d()(_,{VApp:u["a"],VAppBar:m["a"],VAppBarTitle:v["a"],VCard:f["a"],VContainer:p["a"],VFooter:b["a"],VMain:g["a"],VTab:h["a"],VTabs:x["a"]});var N=a("8c4f"),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-col",[a("v-card",{attrs:{elevation:"2"}},[a("v-card-title",[e._v(" Autograding Bundler")]),a("v-card-text",[a("p",[e._v(' This site helps you make "bundles" for autograding. Currently, we support the following: ')]),a("ul",[a("li",[e._v("Autograding in Gradescope with R")])]),a("br"),a("p",[e._v("These are some more features we have planned:")]),a("ul",[a("li",[e._v("Autograding in Gradescope with Python")]),a("li",[e._v("Autograding in Gradescope with Python via OtterGrader")]),a("li",[e._v("Autograding Locally with R")])])])],1)],1)],1)},T=[],y={name:"HomeView"},k=y,G=a("99d9"),R=a("62ad"),V=Object(l["a"])(k,O,T,!1,null,null,null),C=V.exports;d()(V,{VCard:f["a"],VCardText:G["a"],VCardTitle:G["b"],VCol:R["a"],VContainer:p["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-h6 font-weight-bold"},[e._v(" Instructions ")]),a("v-expansion-panel-content",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[e._v("This page is for Autograding with Gradescope for R with gradeR. After filling out the required fields, the website produces a "),a("code",[e._v("data.zip")]),e._v(", which can then be uploaded to Gradescope.")]),a("v-card-title",[e._v("Assignment Name")]),a("v-card-text",[e._v("Assignment name is required. It is the name of the assignment that students submit to Gradescope. Every submission has to have this title, or the autograder will not work properly. In addition, the file names are case-sensitive.")]),a("v-card-title",[e._v(" Additional Packages ")]),a("v-card-text",[e._v(" If there are any additional packages needed, list them here with a comma in between. Currently, there is not support for a set-up section (for calling "),a("code",[e._v("library()")]),e._v("), so code involving libraries need to prefaced for each function, e.g. "),a("code",[e._v("stringr::str_count()")]),e._v(". This feature will be added in future updates. ")]),a("v-card-title",[e._v(" Datasets ")]),a("v-card-text",[e._v(" As many datasets can be added as desired, but the total size must be less than 10 MB (This will change in future updates). Students must reference the dataset from the same directory as the submission file, i.e. "),a("code",[e._v('read.csv("dataset.csv")')]),e._v(". The following will not work "),a("code",[e._v('read.csv("data/dataset.csv")')]),e._v(". The working directory should not be changed either, so students must comment out "),a("code",[e._v("setwd()")]),e._v(" if used. ")]),a("v-card-title",[e._v(" Tests ")]),a("v-card-text",[e._v(" At least one test is required to create the bundle. The code section for each test expects a "),a("code",[e._v("TRUE")]),e._v(" if the answer is correct. ")])],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{elevation:"3"}},[a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{flat:"",color:"teal lighten-5"}},[a("v-card-text",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{outlined:"",dense:"",color:"teal",value:"Untitled01",label:"Bundle Name"},model:{value:e.bundleName,callback:function(t){e.bundleName=t},expression:"bundleName"}})],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-form",{ref:"form",attrs:{id:"gradingForm"},on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-card",{attrs:{elevation:"2"}},[a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{rules:e.assignmentNameRules,label:"Assignment Name",placeholder:"Ex: assignment01.R",required:""},model:{value:e.assignmentName,callback:function(t){e.assignmentName=t},expression:"assignmentName"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Additional Packages (optional)",placeholder:"Ex: survival, data.table, caret"},model:{value:e.packageNames,callback:function(t){e.packageNames=t},expression:"packageNames"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-file-input",{attrs:{label:"Datasets (optional)",rules:e.filesRule,multiple:"","show-size":"",counter:""},model:{value:e.datasets,callback:function(t){e.datasets=t},expression:"datasets"}})],1)],1)],1),a("v-divider"),a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{indeterminate:"",color:"teal"}}),a("v-card-text",[a("v-row",{staticClass:"mb-2"},[a("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[a("v-btn",{attrs:{color:"indigo",dark:""},on:{click:e.incrementNumberOfTests}},[e._v(" Add a Test ")])],1),a("v-col",{attrs:{cols:"6"}},[a("v-btn",{attrs:{disabled:1===e.numberOfTests,dark:1!==e.numberOfTests,color:"red"},on:{click:e.decrementNumberOfTests}},[e._v(" Remove a Test ")])],1)],1),e._l(e.numberOfTests,(function(t){return a("v-row",{key:t,attrs:{"no-gutters":""}},[a("v-col",{staticClass:"px-3",attrs:{cols:"12",md:"3"}},[a("v-text-field",{attrs:{label:"Question Label",rules:e.existsRule,color:"teal",required:"",outlined:"",dense:""},model:{value:e.labels[t-1],callback:function(a){e.$set(e.labels,t-1,a)},expression:"labels[n - 1]"}})],1),a("v-col",{staticClass:"px-3",attrs:{cols:"12",md:"3"}},[a("v-select",{attrs:{items:e.visiblilitySelector,label:"Visibility",rules:e.existsRule,required:"",outlined:"",dense:""},model:{value:e.visibilities[t-1],callback:function(a){e.$set(e.visibilities,t-1,a)},expression:"visibilities[n - 1]"}})],1),a("v-col",{staticClass:"px-3",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Code",rules:e.existsRule,placeholder:"Ex: length(lm.mod$coefficients) == 4",required:"",outlined:"",dense:""},model:{value:e.codes[t-1],callback:function(a){e.$set(e.codes,t-1,a)},expression:"codes[n - 1]"}})],1)],1)}))],2)],1)],1)],1),a("v-col",[a("v-btn",{attrs:{elevation:"2",type:"submit",form:"gradingForm",loading:e.loading,disabled:e.loading,block:"",color:"teal",dark:""}},[e._v(" Download Bundle ")])],1)],1)],1)],1)],1)],1)],1)},$=[],j=a("b85c"),P=a("5530"),S=(a("d81d"),a("b0c0"),a("ac1f"),a("1276"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("bc3a")),B=a.n(S),E=a("2f62"),D={components:{},data:function(){return{loading:!1,response:"",valid:!1,visiblilitySelector:[{text:"Visible",value:"visible"},{text:"After Due Date",value:"after_due_date"},{text:"After Published",value:"after_published"},{text:"Hidden",value:"hidden"}],assignmentNameRules:[function(e){return!!e||"Assignment name is required"},function(e){return".R"===e.substring(e.length-2)||"Must have valid file ending (.R or .r)"}],existsRule:[function(e){return!!e||"This field is required"}],filesRule:[function(e){return!e.length||e.map((function(e){return e.size})).reduce((function(e,t){return e+t}))<1e7||"Must not exceed 10 MB"}]}},computed:Object(P["a"])(Object(P["a"])({numberOfTestsText:function(){return this.numberOfTests>1?"Tests":"Test"}},Object(E["c"])("RGradingGradescope",["numberOfTests"])),{},{bundleName:{get:function(){return this.$store.state["RGradingGradescope"].bundleName},set:function(e){this.$store.dispatch("RGradingGradescope/setBundleName",e)}},assignmentName:{get:function(){return this.$store.state["RGradingGradescope"].assignmentName},set:function(e){this.$store.dispatch("RGradingGradescope/setAssignmentName",e)}},packageNames:{get:function(){return this.$store.state["RGradingGradescope"].packageNames},set:function(e){this.$store.dispatch("RGradingGradescope/setPackageNames",e)}},datasets:{get:function(){return this.$store.state["RGradingGradescope"].datasets},set:function(e){this.$store.dispatch("RGradingGradescope/setDatasets",e)}},labels:{get:function(){return this.$store.state["RGradingGradescope"].labels},set:function(e){this.$store.dispatch("RGradingGradescope/setLabels",e)}},visibilities:{get:function(){return this.$store.state["RGradingGradescope"].visibilities},set:function(e){this.$store.dispatch("RGradingGradescope/setVisibilities",e)}},codes:{get:function(){return this.$store.state["RGradingGradescope"].codes},set:function(e){this.$store.dispatch("RGradingGradescope/setCodes",e)}}}),methods:Object(P["a"])(Object(P["a"])({},Object(E["b"])("RGradingGradescope",["incrementNumberOfTests","decrementNumberOfTests"])),{},{submitForm:function(){var e=this;if(this.valid){this.loading=!0;var t=new FormData;if(this.datasets){var a,s=Object(j["a"])(this.datasets);try{for(s.s();!(a=s.n()).done;){var n=a.value;t.append("datasets",n,n.name)}}catch(i){s.e(i)}finally{s.f()}}t.append("assignment_name",this.assignmentName),this.packageNames&&t.append("package_names",JSON.stringify(this.packageNames.split(","))),t.append("labels",JSON.stringify(this.labels)),t.append("visibilities",JSON.stringify(this.visibilities)),t.append("codes",JSON.stringify(this.codes)),B.a.post("https://autograder-site.herokuapp.com/uploadfile",t,{responseType:"blob"}).then((function(e){console.log("Success!"),console.log(e);var t=new Blob([e.data],{type:"application/zip"}),a=document.createElement("a");a.href=URL.createObjectURL(t),a.download="data",a.click(),URL.revokeObjectURL(a.href)})).catch((function(e){console.log({error:e})})).finally((function(){e.loading=!1}))}else this.$refs.form.validate()}})},L=D,q=a("8336"),F=a("ce7e"),M=a("cd55"),J=a("49e2"),U=a("c865"),z=a("0393"),H=a("23a7"),I=a("4bd4"),Q=a("8e36"),K=a("0fd9"),W=a("b974"),X=a("8654"),Y=Object(l["a"])(L,A,$,!1,null,null,null),Z=Y.exports;d()(Y,{VBtn:q["a"],VCard:f["a"],VCardText:G["a"],VCardTitle:G["b"],VCol:R["a"],VContainer:p["a"],VDivider:F["a"],VExpansionPanel:M["a"],VExpansionPanelContent:J["a"],VExpansionPanelHeader:U["a"],VExpansionPanels:z["a"],VFileInput:H["a"],VForm:I["a"],VProgressLinear:Q["a"],VRow:K["a"],VSelect:W["a"],VTextField:X["a"]}),s["a"].use(N["a"]);var ee=[{path:"/",name:"Home",component:C},{path:"/grading",name:"Grading",component:Z}],te=new N["a"]({mode:"history",base:"/autograder_site/",routes:ee}),ae=te,se=(a("fb6a"),function(){return{bundleName:"",assignmentName:"",packageNames:"",numberOfTests:1,datasets:[],labels:[],visibilities:[],codes:[]}}),ne={},ie={setBundleName:function(e,t){var a=e.commit;a("setBundleName",t)},setAssignmentName:function(e,t){var a=e.commit;a("setAssignmentName",t)},setPackageNames:function(e,t){var a=e.commit;a("setPackageNames",t)},setDatasets:function(e,t){var a=e.commit;a("setDatasets",t)},setLabels:function(e,t){var a=e.commit;a("setLabels",t)},setVisibilities:function(e,t){var a=e.commit;a("setVisibilities",t)},setCodes:function(e,t){var a=e.commit;a("setCodes",t)},incrementNumberOfTests:function(e){var t=e.commit,a=e.state;t("setNumberOfTests",a.numberOfTests+1)},decrementNumberOfTests:function(e){var t=e.commit,a=e.state;t("setNumberOfTests",a.numberOfTests-1),t("setLabels",a.labels.slice(0,a.numberOfTests)),t("setVisibilities",a.visibilities.slice(0,a.numberOfTests)),t("setCodes",a.codes.slice(0,a.numberOfTests))},setComments:function(e){var t=e.commit;B.a.get("https://autograder-site.herokuapp.com/comments").then((function(e){return t("setComments",e.data)}))}},re={setBundleName:function(e,t){e.bundleName=t},setAssignmentName:function(e,t){e.assignmentName=t},setPackageNames:function(e,t){e.packageNames=t},setDatasets:function(e,t){e.datasets=t},setLabels:function(e,t){e.labels=t},setVisibilities:function(e,t){e.visibilities=t},setCodes:function(e,t){e.codes=t},setNumberOfTests:function(e,t){e.numberOfTests=t}},oe={namespaced:!0,state:se,getters:ne,actions:ie,mutations:re};s["a"].use(E["a"]);var le=new E["a"].Store({state:{},mutations:{},actions:{},modules:{RGradingGradescope:oe}}),ce=a("f309");s["a"].use(ce["a"]);var de=new ce["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:ae,store:le,vuetify:de,render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=index.792798bb.js.map