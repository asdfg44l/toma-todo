(function(t){function e(e){for(var o,i,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)i=r[d],n[i]&&p.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=s[0]))}return t}var o={},n={app:0},a=[];function i(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=o,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/toma-todo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},3556:function(t,e,s){t.exports=s.p+"img/edit.acef7b73.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var o=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],i={name:"app"},r=i,c=(s("5c0b"),s("2877")),l=Object(c["a"])(r,n,a,!1,null,null,null),u=l.exports,d=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainWrap"},[s("div",{staticClass:"timerPage"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-md-7"},[s("p",{staticClass:"currentTime mb-0"},[t._v(t._s(t._f("formatTime")(t.now)))]),s("p",{staticClass:"completeCount mb-0 text-right"},[t._v(t._s(t.lenthData.completedLength)+"/"+t._s(t.lenthData.totalLength)+" completed")])])]),s("div",{staticClass:"row mt-2"},[s("div",{staticClass:"col-md-8"},[s("tomato-clock"),s("timer")],1),s("div",{staticClass:"col-md-4 d-none d-md-block pt-md-5"},[s("task-list")],1)])])]),s("div",{staticClass:"sideBox d-flex bg-white"},[t._m(0),s("div",{staticClass:"sideTable"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-10"},[s("todo-list")],1)])])])])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"controlBox bg-tomaRed"},[s("div",{staticClass:"list-group mt-5",attrs:{id:"list-tab",role:"tablist"}},[s("button",{staticClass:"functionBtn closeBox btn btn-block mt-4 rounded-0",attrs:{type:"button","data-toggle":"list",role:"tab"}},[s("i",{staticClass:"far fa-clock iconSize"})]),s("button",{staticClass:"functionBtn openBox btn btn-block mt-4 rounded-0",attrs:{type:"button","data-toggle":"list",role:"tab","data-set":"todolist"}},[s("i",{staticClass:"far fa-list-alt iconSize"})]),s("button",{staticClass:"functionBtn openBox btn btn-block mt-4 rounded-0",attrs:{type:"button","data-toggle":"list",role:"tab"}},[s("i",{staticClass:"far fa-chart-bar iconSize"})])])])}],m=(s("ac6a"),s("456d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"timer display-3 roboMono text-center wordSpacing"},[t._v("\n        "+t._s(t._f("timer")(t.currentTime))+"\n    ")]),t.statusSwitch?s("div",{staticClass:"todoStatus container mt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("button",{staticClass:"btn btn-block btn-tomaRed roboMono",attrs:{type:"button",disabled:t.tomaEvent},on:{click:t.todoContinue}},[t._v("continue")])]),s("div",{staticClass:"col-6"},[s("button",{staticClass:"btn btn-block btn-tomaRed roboMono",attrs:{type:"button",disabled:t.tomaEvent},on:{click:t.todoFinish}},[t._v("finish")])])])]):s("div",{staticClass:"timerControll d-flex justify-content-center align-items-center mt-5"},[s("div",{staticClass:"w-50"},[t.running?s("button",{staticClass:"btn btn-block btn-tomaRed roboMono rounded-pill",on:{click:t.pause}},[s("span",{staticClass:"wordSpacing text-center"},[t._v("pause")])]):s("button",{staticClass:"btn btn-block btn-tomaRed roboMono rounded-pill",on:{click:t.countDown}},[s("span",{staticClass:"wordSpacing text-center"},[t._v("start")])])]),s("div",{staticClass:"refresh"},[s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.timerReset}},[s("i",{staticClass:"fas fa-redo fa-2x text-tomaRed"})])])])])}),v=[],b=(s("8e6e"),s("bd86")),h=s("2f62");function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,o)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(s,!0).forEach(function(e){Object(b["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var T={methods:C({},Object(h["b"])(["countDown","pause","todoFinish","todoContinue"]),{timerReset:function(){this.$store.dispatch("timerReset")}}),computed:C({},Object(h["c"])(["workTime","restTime","currentTime","running","statusSwitch","tomaEvent"])),filters:{timer:function(t){var e=Math.floor(t/60),s=t%60;e<10&&(e="0"+e),s<10&&(s="0"+s);var o=e+":"+s;return o}}},y=T,_=Object(c["a"])(y,m,v,!1,null,null,null),k=_.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-4"},[s("h3",{staticClass:"text-center"},[t._v("MY FIRST TASK")]),s("div",{staticClass:"card waitingWrap mt-3"},[s("div",{staticClass:"card-body"},[s("ul",{staticClass:"waitingList pl-2"},[t.taskList.firstTask[0]?s("li",{staticClass:"first mb-3"},[s("i",{staticClass:"fas fa-play-circle"}),t._v(t._s(t.taskList.firstTask[0].work))]):t._e(),t._l(t.taskList.otherTask,function(e){return[s("li",{staticClass:"others mb-3"},[t._v(t._s(e.work))])]})],2)])]),s("todo-input",{staticClass:"mt-4"})],1)},O=[],L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todoGroup input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"todoInput box-size-cancel form-control roboMono bg-secondary border-0",attrs:{type:"text",disabled:Boolean(t.cacheKey),placeholder:"Add new tasks"},domProps:{value:t.input},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.input=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"todoInputBtn btn btn-secondary",on:{click:t.addTodo}},[s("i",{staticClass:"fas fa-plus text-deepRed"})])])])},E=[],x={props:["cacheKey"],data:function(){return{input:""}},methods:{addTodo:function(){this.$store.dispatch("addTodo",this.input),this.input=""}},watch:{input:function(){var t=/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g;t.test(this.input)?this.$store.commit("VALID",{inValid:!0,message:"格式不符"}):this.$store.commit("VALID",{inValid:!1,message:""})}}},S=x,j=Object(c["a"])(S,L,E,!1,null,null,null),I=j.exports;function D(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,o)}return s}function P(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?D(s,!0).forEach(function(e){Object(b["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):D(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var A={data:function(){return{}},components:{todoInput:I},computed:P({},Object(h["c"])(["taskList"]))},R=A,$=Object(c["a"])(R,w,O,!1,null,null,null),V=$.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),o("div",{staticClass:"mt-2"},[o("div",{staticClass:"todoTitle"},[o("div",{staticClass:"row justify-content-between mb-3"},[t._m(0),o("div",{staticClass:"col-6"},[o("div",{staticClass:"input-group justify-content-end mb-0"},[o("p",{staticClass:"mb-0 mr-1 font-weight-bold"},[t._v(t._s(t._f("dateTime")(t.todoDate)))]),o("div",{staticClass:"input-group-append"},[o("v-date-picker",{staticClass:"Vcalendar",attrs:{color:"red",locale:"en",popover:{placement:"bottom",visibility:"click"}},model:{value:t.todoDate,callback:function(e){t.todoDate=e},expression:"todoDate"}},[o("button",{staticClass:"bg-white",attrs:{type:"button"}},[o("img",{attrs:{src:s("3556"),width:"20",height:"20"}})])])],1)])])])]),o("todo-input",{attrs:{cacheKey:t.cacheKey}}),t.Valid.inValid?o("p",{staticClass:"text-danger mb-0"},[t._v(t._s(t.Valid.message))]):t._e(),o("div",{staticClass:"card border-0 my-4"},[t._m(1),o("div",{staticClass:"card-body bg-lightRed p-0"},[o("table",{staticClass:"table mt-2"},t._l(t.todoList,function(e){return o("tr",{key:e.id},[o("td",{staticClass:"todo border-0",attrs:{width:"250"}},[o("span",{staticClass:"font-weight-bold text-primary",class:{"d-none":e.id==t.cacheKey}},[t._v(t._s(e.work))]),e.id==t.cacheKey?o("input",{directives:[{name:"model",rawName:"v-model",value:t.editInput,expression:"editInput"}],attrs:{type:"text"},domProps:{value:t.editInput},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.updateTodo(e.id)},input:function(e){e.target.composing||(t.editInput=e.target.value)}}}):t._e()]),o("td",{staticClass:"text-nowrap border-0"},[o("div",[o("button",{staticClass:"btn p-0 mr-3",attrs:{type:"button"},on:{click:function(s){return t.startTodo(e)}}},[o("i",{staticClass:"far fa-play-circle text-primary"})]),o("button",{staticClass:"btn p-0 mr-3",attrs:{type:"button"},on:{click:function(s){return t.removeTodo(e.id)}}},[o("i",{staticClass:"fas fa-trash-alt text-primary"})]),o("button",{staticClass:"btn p-0 mr-3",attrs:{type:"button"},on:{click:function(s){return t.editTodo(e.id)}}},[o("i",{staticClass:"fas fa-edit text-primary"})])])])])}),0)])]),o("complete-todo",{attrs:{completeList:t.completeList}})],1)],1)},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4"},[s("p",{staticClass:"font-weight-bold mb-0"},[t._v("To do List")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-head p-3 bg-info"},[s("h5",{staticClass:"card-title text-white font-md mb-0"},[t._v("To do")])])}],K=(s("28a5"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card border-0"},[t._m(0),s("div",{staticClass:"completeTodo card-body bg-lightRed p-0"},[s("table",{staticClass:"table mt-2"},t._l(t.completeList,function(e){return s("tr",{staticClass:"text-nowrap"},[s("td",{staticClass:"todo font-weight-bold text-primary border-0",attrs:{width:"250"}},[t._v(t._s(e.work))]),s("td",{staticClass:"todo font-weight-bold text-primary border-0"},[t._v(t._s(25*e.tomato)+" min")])])}),0)])])}),U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-head p-3 bg-info"},[s("h5",{staticClass:"card-title text-white font-md mb-0"},[t._v("Done")])])}],B={props:["completeList"]},W=B,F=Object(c["a"])(W,K,U,!1,null,null,null),G=F.exports;function H(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,o)}return s}function z(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?H(s,!0).forEach(function(e){Object(b["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):H(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var J={data:function(){return{editInput:"",todoDate:new Date}},components:{todoInput:I,completeTodo:G},methods:{getTodo:function(){this.$store.dispatch("getTodo")},editTodo:function(t){this.$store.dispatch("editTodo",t)},updateTodo:function(t){var e=this,s=e.editInput;e.$store.dispatch("updateTodo",{key:t,userInput:s}).then(function(){e.editInput=""})},removeTodo:function(t){this.$store.dispatch("removeTodo",t)},startTodo:function(t){this.$store.dispatch("startTodo",t)}},computed:z({},Object(h["c"])(["isLoading","todoList","completeList","Valid","cacheKey"])),watch:{editInput:function(){var t=/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g;t.test(this.editInput)?this.$store.commit("VALID",{inValid:!0,message:"格式不符"}):this.$store.commit("VALID",{inValid:!1,message:""})}},filters:{ISOtime:function(t){t*=1e3;var e=new Date(t);return e=e.toISOString().split("T")[0],e},dateTime:function(t){var e=t.toDateString(),s=e.split(" "),o=s[1]+" "+s[3];return o}}},Y=J,q=Object(c["a"])(Y,N,M,!1,null,null,null),Z=q.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"outer"},[t._m(0),t._m(1),s("div",{staticClass:"tomatoWrap"},[s("div",{staticClass:"spinBorder",class:{animation:t.active}}),s("div",{staticClass:"tomatoClock"}),s("div",{staticClass:"minuteHand"}),s("div",{staticClass:"hourHand"})])]),t._m(2)])},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sloganWrap"},[s("div",{staticClass:"tomaSlogan slogan1 font-weight-bold"},[s("p",[t._v("Never Give Up")])]),s("div",{staticClass:"tomaSlogan slogan2 font-weight-bold"},[s("p",[t._v("Just do it !")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tomatoLeaf"},[s("div",{staticClass:"ovalWrap oval1"},[s("div",{staticClass:"halfOval"})]),s("div",{staticClass:"ovalWrap oval2"},[s("div",{staticClass:"halfOval"})]),s("div",{staticClass:"ovalWrap oval3"},[s("div",{staticClass:"halfOval"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container d-none"},[s("div",{staticClass:"spinBorderX"},[s("div",{staticClass:"spinnerWrap"},[s("div",{staticClass:"spinner"})])])])}],tt={data:function(){return{active:!1}},computed:{spinActive:function(){this.$store.state.tomaTimer.running?this.active=!0:this.active=!1}}},et=tt,st=Object(c["a"])(et,X,Q,!1,null,null,null),ot=st.exports,nt=s("1157"),at=s.n(nt),it={data:function(){return{now:new Date}},methods:{clockTime:function(){var t=this;setInterval(e,6e4);function e(){t.now=new Date,console.log("update")}}},mounted:function(){at()(".openBox").on("click",function(){at()(".sideBox").toggleClass("active")}),at()(".closeBox").on("click",function(){at()(".sideBox").removeClass("active")})},components:{timer:k,taskList:V,todoList:Z,tomatoClock:ot},computed:{lenthData:function(){var t=Object.keys(this.$store.getters.todoList).length,e=Object.keys(this.$store.getters.completeList).length,s=t+e;return{completedLength:e,totalLength:s}}},filters:{formatTime:function(t){var e,s=t.toLocaleDateString(),o=t.getHours(),n=t.getMinutes();return n<10&&(n="0".concat(n)),e=o<12?"Am":"Pm","".concat(s," ").concat(e," ").concat(o,":").concat(n)}},created:function(){var t=JSON.parse(localStorage.getItem("user"));this.clockTime(),this.$store.commit("USER",t),this.$store.dispatch("getTodo")}},rt=it,ct=(s("d012"),Object(c["a"])(rt,p,f,!1,null,null,null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container text-center"},[s("h1",[t._v("Firebase Auth Test")]),s("div",{staticClass:"row justify-content-center mt-5"},[s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-primary d-none d-md-block",attrs:{type:"button"},on:{click:t.authPop}},[t._v("使用google註冊(Popup)")]),s("button",{staticClass:"btn btn-primary d-md-none",attrs:{type:"button"},on:{click:function(e){return t.authPop("phone")}}},[t._v("使用google註冊(redirect)")])]),s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){}}},[t._v("disabled")])])]),s("div",{staticClass:"row justify-content-center mt-5"},[s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.getCurrentUser}},[t._v("查詢當前使用者")])]),s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.signOut}},[t._v("登出")])])]),s("div",{staticClass:"row justify-content-center mt-5"},[s("div",{staticClass:"col-4"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.toIndex}},[t._v("前往首頁")])])])])])},dt=[],pt={data:function(){return{window:""}},methods:{authPop:function(){this.$store.dispatch("authPop")},getCurrentUser:function(){this.$store.dispatch("getCurrentUser")},signOut:function(){firebase.auth().signOut().then(function(){sessionStorage.clear(),console.log("User signOut")}).catch(function(t){return t})},toIndex:function(){this.$router.push("/index")}}},ft=pt,mt=Object(c["a"])(ft,ut,dt,!1,null,null,null),vt=mt.exports,bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"text-center"},[t._v("RWD Test")]),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"list-group d-none d-md-block"},[s("a",{staticClass:"list-group-item list-group-item-action active",attrs:{href:"#"}},[t._v("\n                        Cras justo odio\n                    ")]),s("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"#"}},[t._v("Dapibus ac facilisis in")]),s("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"#"}},[t._v("Morbi leo risus")]),s("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"#"}},[t._v("Porta ac consectetur ac")]),s("a",{staticClass:"list-group-item list-group-item-action disabled",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Vestibulum at eros")])]),s("div",{staticClass:"form-group d-md-none"},[s("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Example select")]),s("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},[s("option",[t._v("1")]),s("option",[t._v("2")]),s("option",[t._v("3")]),s("option",[t._v("4")]),s("option",[t._v("5")])])])]),s("div",{staticClass:"col-md-8"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("星期一")]),s("th",[t._v("星期二")]),s("th",[t._v("星期三")]),s("th",[t._v("星期四")])])]),s("tbody",[s("tr",[s("td",[t._v("吃飯")]),s("td",[t._v("睡覺")]),s("td",[t._v("洗澡")]),s("td",[t._v("打東東")])])])])])])])])}],gt=(s("ffbc"),{}),Ct=Object(c["a"])(gt,bt,ht,!1,null,null,null),Tt=Ct.exports;o["a"].use(d["a"]);var yt=new d["a"]({routes:[{path:"*",redirect:"/auth"},{path:"/auth",name:"auth",component:vt},{path:"/rwd",name:"rwd",component:Tt},{path:"/index",name:"index",component:lt,meta:{requiresAuth:!0},children:[{path:"/todolist",name:"todolist",component:Z}]}]}),_t=(s("8615"),s("619d")),kt=new firebase.auth.GoogleAuthProvider,wt={state:{},actions:{authPop:function(t,e){var s=t.commit,o="signInWithPopup";"phone"==e&&(Object(_t["a"])("AuthWay"),o="signInWithRedirect"),firebase.auth()[o](kt).then(function(t){return t.user}).then(function(t){var e=t.displayName,o=t.uid;s("USER",{userName:e,userID:o}),localStorage.setItem("user",JSON.stringify({userName:e,userID:o}));var n=firebase.database().ref("/identity/");n.child(e).once("value").then(function(t){var s=firebase.database().ref("".concat(o));if(!t.val()){n.child(e).set({name:e,userID:o}).catch(function(t){return t});var a=new Date,i=a.getTime();s.push({id:i,work:"新建一個 Todo",tomato:0,isComplete:!1}),firebase.database().ref("".concat(o,"/complete List")).push({id:i,work:"歡迎使用 Tomado",tomato:0,isComplete:!1}),console.log("hello new User")}})}).catch(function(t){return t})}},mutations:{},getters:{}},Ot={state:{workTime:1500,restTime:300,currentTime:1500,running:!1,statusSwitch:!1,tomaEvent:!1,todoRef:firebase.database()},actions:{countDown:function(t){var e=t.state,s=t.commit,o=t.dispatch;function n(){e.currentTime-=1,0===e.currentTime&&(s("TOMAEVENT",!1),clearInterval(e.running),s("RUNNING",!1),o("timerReset"),s("STATUSSWITCH",!e.statusSwitch))}e.running=setInterval(n,1e3)},pause:function(t){var e=t.state,s=t.commit;clearInterval(e.running),s("RUNNING",!1)},timerReset:function(t){var e=t.state,s=t.commit;e.statusSwitch?s("CURRENTTIME",e.workTime):s("CURRENTTIME",e.restTime)},todoFinish:function(t){var e=t.rootState,s=t.dispatch,o=t.commit;o("TOMAEVENT",!0);var n=e.taskList.firstTask[0].tomato||0,a=e.taskList.firstTask[0].id,i={tomaNum:n,id:a};s("completeTodo",i),s("countDown")},todoContinue:function(t){var e=t.rootState,s=t.dispatch,o=t.commit;o("TOMAEVENT",!0),e.taskList.firstTask[0].tomato?e.taskList.firstTask[0].tomato+=1:e.taskList.firstTask[0].tomato=1,s("countDown")}},mutations:{WORKTIME:function(t,e){t.workTime=e},RESTTIME:function(t,e){t.restTime=e},CURRENTTIME:function(t,e){t.currentTime=e},RUNNING:function(t,e){t.running=e},STATUSSWITCH:function(t,e){t.statusSwitch=e},TOMAEVENT:function(t,e){t.tomaEvent=e}},getters:{workTime:function(t){return t.workTime},restTime:function(t){return t.restTime},currentTime:function(t){return t.currentTime},running:function(t){return t.running},statusSwitch:function(t){return t.statusSwitch},tomaEvent:function(t){return t.tomaEvent}}};o["a"].use(h["a"]);var Lt=new h["a"].Store({state:{user:{userName:"",userID:""},todoList:[],taskList:{firstTask:[],otherTask:[]},completeList:[],isLoading:!1,Valid:{inValid:!1,message:""},cacheKey:"",todoRef:firebase.database()},actions:{getTodo:function(t){var e=t.state,s=t.commit;s("ISLOADING",!0),e.todoRef.ref("".concat(e.user.userID)).once("value").then(function(t){var e=t.val();s("COMPLETELIST",Object.values(e["complete List"])),delete e["complete List"],s("TODOLIST",Object.values(e));var o=new Array(Object.values(e)[0]),n=Object.values(e).slice(1);s("TASKLIST",{firstTask:o,otherTask:n})}).then(function(){return s("ISLOADING",!1)})},addTodo:function(t,e){var s=t.state,o=t.commit,n=t.dispatch;if(!s.Valid.inValid){var a=e;if(""!=a){var i=new Date,r=i.getTime();s.todoRef.ref("".concat(s.user.userID)).child("".concat(r)).set({id:r,work:a,tomato:0,isComplete:!1}).then(function(){n("getTodo")}).catch(function(t){alert(t)})}else o("VALID",{inValid:!0,message:"內容不得為空"})}},editTodo:function(t,e){var s=t.state,o=t.commit;s.cacheKey==e?o("CACHEKEY",""):o("CACHEKEY",e)},updateTodo:function(t,e){var s=t.state,o=t.commit,n=t.dispatch,a=e.key,i=e.userInput;o("CACHEKEY",""),s.Valid.inValid||s.todoRef.ref("".concat(s.user.userID)).child(a).update({work:i}).then(function(){return n("getTodo")})},removeTodo:function(t,e){var s=t.state,o=t.dispatch;s.todoRef.ref("".concat(s.user.userID)).child("".concat(e)).remove(),o("getTodo")},startTodo:function(t,e){var s=t.state,o=t.commit,n=t.dispatch;if(e!=s.taskList.firstTask[0]){var a={},i=s.taskList.otherTask.slice(0),r=s.taskList.otherTask.indexOf(e);i.splice(r,1,s.taskList.firstTask[0]),a.firstTask=new Array(e),a.otherTask=i,o("TASKLIST",a)}n("countDown")},completeTodo:function(t,e){var s=t.state,o=t.dispatch,n=e.tomaNum,a=e.id,i=s.todoRef.ref("".concat(s.user.userID));i.child("".concat(a)).update({tomato:n,isComplete:!0}).then(function(){return o("getTodo")}),i.child("".concat(a)).once("value").then(function(t){var e=t.val();i.child("complete List").push(e)}).then(function(){o("removeTodo",a)})}},mutations:{ISLOADING:function(t,e){t.isLoading=e},TODOLIST:function(t,e){t.todoList=e},TASKLIST:function(t,e){var s=e.firstTask,o=e.otherTask;t.taskList.firstTask=s,t.taskList.otherTask=o},COMPLETELIST:function(t,e){t.completeList=e},VALID:function(t,e){var s=e.inValid,o=e.message;t.Valid.inValid=s,t.Valid.message=o},USER:function(t,e){t.user=e},CACHEKEY:function(t,e){t.cacheKey=e}},getters:{isLoading:function(t){return t.isLoading},todoList:function(t){return t.todoList},taskList:function(t){return t.taskList},completeList:function(t){return t.completeList},Valid:function(t){return t.Valid},user:function(t){return t.user},cacheKey:function(t){return t.cacheKey}},modules:{googleAuth:wt,tomaTimer:Ot}}),Et=s("9062"),xt=s.n(Et),St=(s("e40d"),s("5887")),jt=s.n(St);s("4989");o["a"].use(jt.a,{componentPrefix:"v"}),o["a"].config.productionTip=!1,o["a"].component("loading",xt.a),new o["a"]({router:yt,store:Lt,render:function(t){return t(u)}}).$mount("#app"),yt.beforeEach(function(t,e,s){if(t.meta.requiresAuth){var o=firebase.auth().currentUser;o?s():(console.log("尚未登入"),s({path:"auth"}))}else s()})},"5c0b":function(t,e,s){"use strict";var o=s("5e27"),n=s.n(o);n.a},"5e27":function(t,e,s){},d012:function(t,e,s){"use strict";var o=s("d0f1"),n=s.n(o);n.a},d0f1:function(t,e,s){},f052:function(t,e,s){},ffbc:function(t,e,s){"use strict";var o=s("f052"),n=s.n(o);n.a}});
//# sourceMappingURL=app.0caadf2c.js.map