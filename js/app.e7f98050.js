(function(t){function e(e){for(var a,n,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)n=r[d],o[n]&&p.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/toma-todo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},3556:function(t,e,s){t.exports=s.p+"img/edit.acef7b73.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n={name:"app"},r=n,c=(s("5c0b"),s("2877")),l=Object(c["a"])(r,o,i,!1,null,null,null),u=l.exports,d=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainWrap"},[s("div",{staticClass:"timerPage"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-md-7"},[s("p",{staticClass:"currentTime mb-0"},[t._v(t._s(t._f("formatTime")(t.now)))]),s("p",{staticClass:"completeCount mb-0 text-right"},[t._v(t._s(t.lenthData.completedLength)+"/"+t._s(t.lenthData.totalLength)+" completed")])])]),s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-md-8"},[s("tomato-clock"),s("timer")],1),s("div",{staticClass:"col-md-4 d-none d-md-block pt-md-5"},[s("task-list")],1)])])]),s("div",{staticClass:"sideBox d-flex bg-white"},[t._m(0),s("div",{staticClass:"sideTable"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-10"},[s("todo-list")],1)])])])])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"controlBox bg-tomaRed"},[s("div",{staticClass:"list-group mt-5",attrs:{id:"list-tab",role:"tablist"}},[s("button",{staticClass:"functionBtn closeBox btn btn-block mt-4 rounded-0",attrs:{type:"button","data-toggle":"list",role:"tab"}},[s("i",{staticClass:"far fa-clock iconSize"})]),s("button",{staticClass:"functionBtn openBox btn btn-block mt-4 rounded-0",attrs:{type:"button","data-toggle":"list",role:"tab","data-set":"todolist"}},[s("i",{staticClass:"far fa-list-alt iconSize"})]),s("button",{staticClass:"functionBtn openBox btn btn-block mt-4 rounded-0",attrs:{type:"button","data-toggle":"list",role:"tab"}},[s("i",{staticClass:"far fa-chart-bar iconSize"})])])])}],m=(s("ac6a"),s("456d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"timer display-3 roboMono text-center wordSpacing"},[t._v("\n        "+t._s(t._f("timer")(t.currentTime))+"\n    ")]),t.statusSwitch?s("div",{staticClass:"todoStatus container mt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("button",{staticClass:"btn btn-block btn-tomaRed roboMono",attrs:{type:"button",disabled:t.tomaEvent},on:{click:t.todoContinue}},[t._v("continue")])]),s("div",{staticClass:"col-6"},[s("button",{staticClass:"btn btn-block btn-tomaRed roboMono",attrs:{type:"button",disabled:t.tomaEvent},on:{click:t.todoFinish}},[t._v("finish")])])])]):s("div",{staticClass:"timerControll d-flex justify-content-center align-items-center mt-5"},[s("div",{staticClass:"w-50"},[t.running?s("button",{staticClass:"btn btn-block btn-tomaRed roboMono rounded-pill",on:{click:t.pause}},[s("span",{staticClass:"wordSpacing text-center"},[t._v("pause")])]):s("button",{staticClass:"btn btn-block btn-tomaRed roboMono rounded-pill",on:{click:t.countDown}},[s("span",{staticClass:"wordSpacing text-center"},[t._v("start")])])]),s("div",{staticClass:"refresh"},[s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.timerReset}},[s("i",{staticClass:"fas fa-redo fa-2x text-tomaRed"})])])])])}),v=[],b=(s("8e6e"),s("bd86")),h=s("2f62");function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(s,!0).forEach(function(e){Object(b["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var T={methods:C({},Object(h["b"])(["countDown","pause","todoFinish","todoContinue"]),{timerReset:function(){this.$store.dispatch("timerReset")}}),computed:C({},Object(h["c"])(["workTime","restTime","currentTime","running","statusSwitch","tomaEvent"])),filters:{timer:function(t){var e=Math.floor(t/60),s=t%60;e<10&&(e="0"+e),s<10&&(s="0"+s);var a=e+":"+s;return a}}},y=T,_=Object(c["a"])(y,m,v,!1,null,null,null),w=_.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-4"},[s("h3",{staticClass:"text-center"},[t._v("MY FIRST TASK")]),s("div",{staticClass:"card waitingWrap mt-3"},[s("div",{staticClass:"card-body"},[s("ul",{staticClass:"waitingList pl-2"},[t.taskList.firstTask[0]?s("li",{staticClass:"first mb-3"},[s("i",{staticClass:"fas fa-play-circle"}),t._v(t._s(t.taskList.firstTask[0].work))]):t._e(),t._l(t.taskList.otherTask,function(e){return[s("li",{staticClass:"others mb-3"},[t._v(t._s(e.work))])]})],2)])]),s("todo-input",{staticClass:"mt-4"})],1)},O=[],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todoGroup input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"todoInput box-size-cancel form-control roboMono bg-secondary border-0",attrs:{type:"text",disabled:Boolean(t.cacheKey),placeholder:"Add new tasks"},domProps:{value:t.input},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.input=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"todoInputBtn btn btn-secondary",on:{click:t.addTodo}},[s("i",{staticClass:"fas fa-plus text-deepRed"})])])])},L=[],S={props:["cacheKey"],data:function(){return{input:""}},methods:{addTodo:function(){this.$store.dispatch("addTodo",this.input),this.input=""}},watch:{input:function(){var t=/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g;t.test(this.input)?this.$store.commit("VALID",{inValid:!0,message:"格式不符"}):this.$store.commit("VALID",{inValid:!1,message:""})}}},E=S,x=Object(c["a"])(E,I,L,!1,null,null,null),j=x.exports;function D(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function P(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?D(s,!0).forEach(function(e){Object(b["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):D(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var A={data:function(){return{}},components:{todoInput:j},computed:P({},Object(h["c"])(["taskList"]))},R=A,$=Object(c["a"])(R,k,O,!1,null,null,null),V=$.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"mt-2"},[a("div",{staticClass:"todoTitle"},[a("div",{staticClass:"row justify-content-between mb-3"},[t._m(0),a("div",{staticClass:"col-6"},[a("div",{staticClass:"input-group justify-content-end mb-0"},[a("p",{staticClass:"mb-0 mr-1 font-weight-bold"},[t._v(t._s(t._f("dateTime")(t.todoDate)))]),a("div",{staticClass:"input-group-append"},[a("v-date-picker",{staticClass:"Vcalendar",attrs:{color:"red",locale:"en",popover:{placement:"bottom",visibility:"click"}},model:{value:t.todoDate,callback:function(e){t.todoDate=e},expression:"todoDate"}},[a("button",{staticClass:"bg-white",attrs:{type:"button"}},[a("img",{attrs:{src:s("3556"),width:"20",height:"20"}})])])],1)])])])]),a("todo-input",{attrs:{cacheKey:t.cacheKey}}),t.Valid.inValid?a("p",{staticClass:"text-danger mb-0"},[t._v(t._s(t.Valid.message))]):t._e(),a("div",{staticClass:"card border-0 my-4"},[t._m(1),a("div",{staticClass:"card-body bg-lightRed p-0"},[a("table",{staticClass:"table mt-2"},t._l(t.todoList,function(e){return a("tr",{key:e.id},[a("td",{staticClass:"todo border-0",attrs:{width:"250"}},[a("span",{staticClass:"font-weight-bold text-primary",class:{"d-none":e.id==t.cacheKey}},[t._v(t._s(e.work))]),e.id==t.cacheKey?a("input",{directives:[{name:"model",rawName:"v-model",value:t.editInput,expression:"editInput"}],attrs:{type:"text"},domProps:{value:t.editInput},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.updateTodo(e.id)},input:function(e){e.target.composing||(t.editInput=e.target.value)}}}):t._e()]),a("td",{staticClass:"text-nowrap border-0"},[a("div",[a("button",{staticClass:"btn p-0 mr-3",attrs:{type:"button"},on:{click:function(s){return t.startTodo(e)}}},[a("i",{staticClass:"far fa-play-circle text-primary"})]),a("button",{staticClass:"btn p-0 mr-3",attrs:{type:"button"},on:{click:function(s){return t.removeTodo(e.id)}}},[a("i",{staticClass:"fas fa-trash-alt text-primary"})]),a("button",{staticClass:"btn p-0 mr-3",attrs:{type:"button"},on:{click:function(s){return t.editTodo(e.id)}}},[a("i",{staticClass:"fas fa-edit text-primary"})])])])])}),0)])]),a("complete-todo",{attrs:{completeList:t.completeList}})],1)],1)},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4"},[s("p",{staticClass:"font-weight-bold mb-0"},[t._v("To do List")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-head p-3 bg-info"},[s("h5",{staticClass:"card-title text-white font-md mb-0"},[t._v("To do")])])}],K=(s("28a5"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card border-0"},[t._m(0),s("div",{staticClass:"completeTodo card-body bg-lightRed p-0"},[s("table",{staticClass:"table mt-2"},t._l(t.completeList,function(e){return s("tr",{staticClass:"text-nowrap"},[s("td",{staticClass:"todo font-weight-bold text-primary border-0",attrs:{width:"250"}},[t._v(t._s(e.work))]),s("td",{staticClass:"todo font-weight-bold text-primary border-0"},[t._v(t._s(25*e.tomato)+" min")])])}),0)])])}),U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-head p-3 bg-info"},[s("h5",{staticClass:"card-title text-white font-md mb-0"},[t._v("Done")])])}],B={props:["completeList"]},W=B,F=Object(c["a"])(W,K,U,!1,null,null,null),G=F.exports;function H(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function z(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?H(s,!0).forEach(function(e){Object(b["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):H(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var J={data:function(){return{editInput:"",todoDate:new Date}},components:{todoInput:j,completeTodo:G},methods:{getTodo:function(){this.$store.dispatch("getTodo")},editTodo:function(t){this.$store.dispatch("editTodo",t)},updateTodo:function(t){var e=this,s=e.editInput;e.$store.dispatch("updateTodo",{key:t,userInput:s}).then(function(){e.editInput=""})},removeTodo:function(t){this.$store.dispatch("removeTodo",t)},startTodo:function(t){this.$store.dispatch("startTodo",t)}},computed:z({},Object(h["c"])(["isLoading","todoList","completeList","Valid","cacheKey"])),watch:{editInput:function(){var t=/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g;t.test(this.editInput)?this.$store.commit("VALID",{inValid:!0,message:"格式不符"}):this.$store.commit("VALID",{inValid:!1,message:""})}},filters:{ISOtime:function(t){t*=1e3;var e=new Date(t);return e=e.toISOString().split("T")[0],e},dateTime:function(t){var e=t.toDateString(),s=e.split(" "),a=s[1]+" "+s[3];return a}}},Y=J,q=Object(c["a"])(Y,N,M,!1,null,null,null),Z=q.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"outer"},[t._m(0),t._m(1),s("div",{staticClass:"tomatoWrap"},[s("div",{staticClass:"spinBorder",class:{animation:t.active}}),s("div",{staticClass:"tomatoClock"}),s("div",{staticClass:"minuteHand"}),s("div",{staticClass:"hourHand"})])]),t._m(2)])},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sloganWrap"},[s("div",{staticClass:"tomaSlogan slogan1 font-weight-bold"},[s("p",[t._v("Never Give Up")])]),s("div",{staticClass:"tomaSlogan slogan2 font-weight-bold"},[s("p",[t._v("Just do it !")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tomatoLeaf"},[s("div",{staticClass:"ovalWrap oval1"},[s("div",{staticClass:"halfOval"})]),s("div",{staticClass:"ovalWrap oval2"},[s("div",{staticClass:"halfOval"})]),s("div",{staticClass:"ovalWrap oval3"},[s("div",{staticClass:"halfOval"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container d-none"},[s("div",{staticClass:"spinBorderX"},[s("div",{staticClass:"spinnerWrap"},[s("div",{staticClass:"spinner"})])])])}],tt={data:function(){return{active:!1}},computed:{spinActive:function(){this.$store.state.tomaTimer.running?this.active=!0:this.active=!1}}},et=tt,st=Object(c["a"])(et,X,Q,!1,null,null,null),at=st.exports,ot=s("1157"),it=s.n(ot),nt={data:function(){return{now:new Date}},methods:{clockTime:function(){var t=this;setInterval(e,6e4);function e(){t.now=new Date,console.log("update")}}},mounted:function(){it()(".openBox").on("click",function(){it()(".sideBox").toggleClass("active")}),it()(".closeBox").on("click",function(){it()(".sideBox").removeClass("active")})},components:{timer:w,taskList:V,todoList:Z,tomatoClock:at},computed:{lenthData:function(){var t=Object.keys(this.$store.getters.todoList).length,e=Object.keys(this.$store.getters.completeList).length,s=t+e;return{completedLength:e,totalLength:s}}},filters:{formatTime:function(t){var e,s=t.toLocaleDateString(),a=t.getHours(),o=t.getMinutes();return o<10&&(o="0".concat(o)),e=a<12?"Am":"Pm","".concat(s," ").concat(e," ").concat(a,":").concat(o)}},created:function(){var t=JSON.parse(localStorage.getItem("user"));this.clockTime(),this.$store.commit("USER",t),this.$store.dispatch("getTodo")}},rt=nt,ct=(s("d012"),Object(c["a"])(rt,p,f,!1,null,null,null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container text-center"},[s("h1",[t._v("Firebase Auth Test")]),s("div",{staticClass:"row justify-content-center mt-5"},[s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-primary d-none d-md-block",attrs:{type:"button"},on:{click:t.ISOlogin}},[t._v("使用google註冊(Popup)")]),s("button",{staticClass:"btn btn-primary d-md-none",attrs:{type:"button"},on:{click:t.ISOlogin}},[t._v("使用google註冊(redirect)")])]),s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){}}},[t._v("disabled")])])]),s("div",{staticClass:"row justify-content-center mt-5"},[s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.getCurrentUser}},[t._v("查詢當前使用者")])]),s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.signOut}},[t._v("登出")])])]),s("div",{staticClass:"row justify-content-center mt-5"},[s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.toIndex}},[t._v("前往首頁")])])]),s("div",{attrs:{id:"firebaseui-auth-container"}})])])},dt=[],pt={data:function(){return{window:"",data:{}}},methods:{authPop:function(t){this.$store.dispatch("authPop",t)},ISOlogin:function(){this.$store.dispatch("ISOlogin")},getCurrentUser:function(){this.$store.dispatch("getCurrentUser")},signOut:function(){firebase.auth().signOut().then(function(){this.localStorage.clear(),console.log("User signOut")}).catch(function(t){return t})},toIndex:function(){this.$router.push("/index")}},created:function(){var t=this;window.addEventListener("load",function(){t.ISOlogin()})}},ft=pt,mt=Object(c["a"])(ft,ut,dt,!1,null,null,null),vt=mt.exports,bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"text-center"},[t._v("RWD Test")]),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"list-group d-none d-md-block"},[s("a",{staticClass:"list-group-item list-group-item-action active",attrs:{href:"#"}},[t._v("\n                        Cras justo odio\n                    ")]),s("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"#"}},[t._v("Dapibus ac facilisis in")]),s("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"#"}},[t._v("Morbi leo risus")]),s("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"#"}},[t._v("Porta ac consectetur ac")]),s("a",{staticClass:"list-group-item list-group-item-action disabled",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Vestibulum at eros")])]),s("div",{staticClass:"form-group d-md-none"},[s("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Example select")]),s("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},[s("option",[t._v("1")]),s("option",[t._v("2")]),s("option",[t._v("3")]),s("option",[t._v("4")]),s("option",[t._v("5")])])])]),s("div",{staticClass:"col-md-8"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("星期一")]),s("th",[t._v("星期二")]),s("th",[t._v("星期三")]),s("th",[t._v("星期四")])])]),s("tbody",[s("tr",[s("td",[t._v("吃飯")]),s("td",[t._v("睡覺")]),s("td",[t._v("洗澡")]),s("td",[t._v("打東東")])])])])])])])])}],gt=(s("ffbc"),{}),Ct=Object(c["a"])(gt,bt,ht,!1,null,null,null),Tt=Ct.exports;a["a"].use(d["a"]);var yt=new d["a"]({routes:[{path:"*",redirect:"/auth"},{path:"/auth",name:"auth",component:vt},{path:"/rwd",name:"rwd",component:Tt},{path:"/index",name:"index",component:lt,meta:{requiresAuth:!0},children:[{path:"/todolist",name:"todolist",component:Z}]}]}),_t=(s("8615"),new firebase.auth.GoogleAuthProvider,{state:{},actions:{ISOlogin:function(t){var e=t.dispatch,s={callbacks:{signInSuccessWithAuthResult:function(t,s){return e("authPop",t.user),!1},signInFailure:function(t){alert(t)}},signInFlow:"redirect",signInOptions:[{provider:firebase.auth.GoogleAuthProvider.PROVIDER_ID,authMethod:"https://accounts.google.com",clientId:CLIENT_ID}],queryParameterForWidgetMode:"mode"},a=new firebaseui.auth.AuthUI(firebase.auth());a.disableAutoSignIn(),a.start("#firebaseui-auth-container",s)},testAuth:function(){alert("testAuth")},authPop:function(t,e){var s=t.commit,a=e.displayName,o=e.uid;s("USER",{userName:a,userID:o}),localStorage.setItem("user",JSON.stringify({userName:a,userID:o}));var i=firebase.database().ref("/identity/");i.child(a).once("value").then(function(t){var e=firebase.database().ref("".concat(o));if(!t.val()){i.child(a).set({name:a,userID:o}).catch(function(t){return t});var s=new Date,n=s.getTime();e.push({id:n,work:"新建一個 Todo",tomato:0,isComplete:!1}),firebase.database().ref("".concat(o,"/complete List")).push({id:n,work:"歡迎使用 Tomado",tomato:0,isComplete:!1}),console.log("hello new User")}})},getCurrentUser:function(t){t.commit;var e=firebase.auth().currentUser;e?alert(e.displayName):(e="null",alert(e))}},mutations:{},getters:{}}),wt={state:{workTime:1500,restTime:300,currentTime:1500,running:!1,statusSwitch:!1,tomaEvent:!1,todoRef:firebase.database()},actions:{countDown:function(t){var e=t.state,s=t.commit,a=t.dispatch;function o(){e.currentTime-=1,0===e.currentTime&&(s("TOMAEVENT",!1),clearInterval(e.running),s("RUNNING",!1),a("timerReset"),s("STATUSSWITCH",!e.statusSwitch))}e.running=setInterval(o,1e3)},pause:function(t){var e=t.state,s=t.commit;clearInterval(e.running),s("RUNNING",!1)},timerReset:function(t){var e=t.state,s=t.commit;e.statusSwitch?s("CURRENTTIME",e.workTime):s("CURRENTTIME",e.restTime)},todoFinish:function(t){var e=t.rootState,s=t.dispatch,a=t.commit;a("TOMAEVENT",!0);var o=e.taskList.firstTask[0].tomato||0,i=e.taskList.firstTask[0].id,n={tomaNum:o,id:i};s("completeTodo",n),s("countDown")},todoContinue:function(t){var e=t.rootState,s=t.dispatch,a=t.commit;a("TOMAEVENT",!0),e.taskList.firstTask[0].tomato?e.taskList.firstTask[0].tomato+=1:e.taskList.firstTask[0].tomato=1,s("countDown")}},mutations:{WORKTIME:function(t,e){t.workTime=e},RESTTIME:function(t,e){t.restTime=e},CURRENTTIME:function(t,e){t.currentTime=e},RUNNING:function(t,e){t.running=e},STATUSSWITCH:function(t,e){t.statusSwitch=e},TOMAEVENT:function(t,e){t.tomaEvent=e}},getters:{workTime:function(t){return t.workTime},restTime:function(t){return t.restTime},currentTime:function(t){return t.currentTime},running:function(t){return t.running},statusSwitch:function(t){return t.statusSwitch},tomaEvent:function(t){return t.tomaEvent}}};a["a"].use(h["a"]);var kt=new h["a"].Store({state:{user:{userName:"",userID:""},todoList:[],taskList:{firstTask:[],otherTask:[]},completeList:[],isLoading:!1,Valid:{inValid:!1,message:""},cacheKey:"",todoRef:firebase.database()},actions:{getTodo:function(t){var e=t.state,s=t.commit;s("ISLOADING",!0),console.log(e.user),e.todoRef.ref("".concat(e.user.userID)).once("value").then(function(t){var e=t.val();s("COMPLETELIST",Object.values(e["complete List"])),delete e["complete List"],s("TODOLIST",Object.values(e));var a=new Array(Object.values(e)[0]),o=Object.values(e).slice(1);s("TASKLIST",{firstTask:a,otherTask:o})}).then(function(){return s("ISLOADING",!1)})},addTodo:function(t,e){var s=t.state,a=t.commit,o=t.dispatch;if(!s.Valid.inValid){var i=e;if(""!=i){var n=new Date,r=n.getTime();s.todoRef.ref("".concat(s.user.userID)).child("".concat(r)).set({id:r,work:i,tomato:0,isComplete:!1}).then(function(){o("getTodo")}).catch(function(t){alert(t)})}else a("VALID",{inValid:!0,message:"內容不得為空"})}},editTodo:function(t,e){var s=t.state,a=t.commit;s.cacheKey==e?a("CACHEKEY",""):a("CACHEKEY",e)},updateTodo:function(t,e){var s=t.state,a=t.commit,o=t.dispatch,i=e.key,n=e.userInput;a("CACHEKEY",""),s.Valid.inValid||s.todoRef.ref("".concat(s.user.userID)).child(i).update({work:n}).then(function(){return o("getTodo")})},removeTodo:function(t,e){var s=t.state,a=t.dispatch;s.todoRef.ref("".concat(s.user.userID)).child("".concat(e)).remove(),a("getTodo")},startTodo:function(t,e){var s=t.state,a=t.commit,o=t.dispatch;if(e!=s.taskList.firstTask[0]){var i={},n=s.taskList.otherTask.slice(0),r=s.taskList.otherTask.indexOf(e);n.splice(r,1,s.taskList.firstTask[0]),i.firstTask=new Array(e),i.otherTask=n,a("TASKLIST",i)}o("countDown")},completeTodo:function(t,e){var s=t.state,a=t.dispatch,o=e.tomaNum,i=e.id,n=s.todoRef.ref("".concat(s.user.userID));n.child("".concat(i)).update({tomato:o,isComplete:!0}).then(function(){return a("getTodo")}),n.child("".concat(i)).once("value").then(function(t){var e=t.val();n.child("complete List").push(e)}).then(function(){a("removeTodo",i)})}},mutations:{ISLOADING:function(t,e){t.isLoading=e},TODOLIST:function(t,e){t.todoList=e},TASKLIST:function(t,e){var s=e.firstTask,a=e.otherTask;t.taskList.firstTask=s,t.taskList.otherTask=a},COMPLETELIST:function(t,e){t.completeList=e},VALID:function(t,e){var s=e.inValid,a=e.message;t.Valid.inValid=s,t.Valid.message=a},USER:function(t,e){t.user=e},CACHEKEY:function(t,e){t.cacheKey=e}},getters:{isLoading:function(t){return t.isLoading},todoList:function(t){return t.todoList},taskList:function(t){return t.taskList},completeList:function(t){return t.completeList},Valid:function(t){return t.Valid},user:function(t){return t.user},cacheKey:function(t){return t.cacheKey}},modules:{googleAuth:_t,tomaTimer:wt}}),Ot=s("9062"),It=s.n(Ot),Lt=(s("e40d"),s("5887")),St=s.n(Lt);s("4989");a["a"].use(St.a,{componentPrefix:"v"}),a["a"].config.productionTip=!1,a["a"].component("loading",It.a),new a["a"]({router:yt,store:kt,render:function(t){return t(u)}}).$mount("#app"),yt.beforeEach(function(t,e,s){if(t.meta.requiresAuth){var a=firebase.auth().currentUser;a?s():(console.log("尚未登入"),s({path:"auth"}))}else s()})},"5c0b":function(t,e,s){"use strict";var a=s("5e27"),o=s.n(a);o.a},"5e27":function(t,e,s){},d012:function(t,e,s){"use strict";var a=s("d0f1"),o=s.n(a);o.a},d0f1:function(t,e,s){},f052:function(t,e,s){},ffbc:function(t,e,s){"use strict";var a=s("f052"),o=s.n(a);o.a}});
//# sourceMappingURL=app.e7f98050.js.map