(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/logo.3a68088f.svg"},21:function(e,a,t){e.exports=t.p+"static/media/load.a21746f5.gif"},22:function(e,a,t){e.exports=t.p+"static/media/instashot.b6dd97bd.png"},24:function(e,a,t){e.exports=t(39)},29:function(e,a,t){},30:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),o=(t(29),t(4)),s=t(5),i=t(7),m=t(6),u=(t(30),t(31),t(19)),d=t.n(u),p=t(3),h=t.n(p),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"handleLogout",value:function(){h.a.auth().signOut().then(function(e){console.log("Desconectamos guacho"),window.location.href="/"}).catch(function(e){return console.log("Error ".concat(e.code,": ").concat(e.message))})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav valign-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row  margin0"},r.a.createElement("div",{className:"col s2 l1  right-align flex"},r.a.createElement("img",{src:d.a,alt:"",className:"logo"})),r.a.createElement("div",{className:"col s3 l1 flex"},r.a.createElement("p",null,"Truchigram")),r.a.createElement("div",{className:"col s2 l1 offset-s5 offset-l7 right-align flex"},r.a.createElement("ul",{id:"dropdown2",className:"dropdown-content"},r.a.createElement("li",null,r.a.createElement("a",{onClick:this.handleLogout},"logout"))),r.a.createElement("a",{className:"dropdown-trigger",href:"#!","data-target":"dropdown2"},r.a.createElement("img",{src:this.props.avatar,alt:this.props.nombre,className:"circle cardPic inline"})))))))}}]),t}(r.a.Component),v=t(20),g=t.n(v),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={uploadValue:0},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("progress",{value:this.props.uploadValue,max:"100"},this.state.uploadValue," %"),r.a.createElement("br",null),r.a.createElement("input",{type:"file",onChange:this.props.onUpload}),r.a.createElement("br",null),r.a.createElement("img",{width:"320",src:this.state.picture,alt:""}))}}]),t}(n.Component),b=(t(10),t(18),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={uploadValue:"0",user:{photoURL:"",displayName:""}},e.handleChange=function(a){a.preventDefault(),e.setState({txt:a.target.value})},e.handleUpload=function(a){a.preventDefault();var t=a.target.files[0],n=h.a.storage().ref("fotos/".concat(t.name)).put(t);n.on("state_changed",function(a){var t=a.bytesTransferred/a.totalBytes*100;e.setState({uploadValue:t})},function(e){console.log(e.message)},function(){var a={avatar:e.state.user.photoURL,nombre:e.state.user.displayName,txt:e.state.txt,pic:n.snapshot.metadata.fullPath};h.a.database().ref("pictures").push().set(a)})},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.AutoInit(),h.a.auth().onAuthStateChanged(function(a){e.setState({user:a})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"#modal1",className:"btn-floating btn-large waves-effect waves-light modal-trigger red FAB",id:"fab"},r.a.createElement("i",{className:"material-icons"},"add")),r.a.createElement("div",{id:"modal1",className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",null,"Poste\xe1 en Truchigram"),r.a.createElement("div",{className:"chip"},r.a.createElement("img",{src:this.state.user.photoURL}),this.state.user.displayName),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col l12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s9 l4"},r.a.createElement("i",{className:"material-icons prefix"},"mode_edit"),r.a.createElement("textarea",{id:"icon_prefix2",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"icon_prefix2"},"Mensaje"),r.a.createElement(E,{onUpload:this.handleUpload,uploadValue:this.state.uploadValue}),r.a.createElement("button",{onClick:this.handleUpload},"Subir")))))),r.a.createElement("div",{className:"modal-footer"})))}}]),t}(r.a.Component)),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={url:null},e}return Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this,a=this.props.pic;h.a.storage().ref(a).getDownloadURL().then(function(a){e.setState(a)}).cath(function(e){console.log(e.message)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"row margin0"},r.a.createElement("div",{className:"col s2 l1 valign-wrapper"},r.a.createElement("img",{src:this.props.avatar,alt:this.props.nombre,className:"circle cardPic inline"})),r.a.createElement("div",{className:"col s10 l6 valign-wrapper fix-nombre"},r.a.createElement("p",{className:"inline cardName"},this.props.nombre)))),r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:this.state.url,alt:""})),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,this.props.txt)))," ",r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(r.a.Component),y=t(21),w=t.n(y);var j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"upp"},r.a.createElement("div",{className:"col-md-12 centrar"},r.a.createElement("img",{src:w.a,alt:"",className:"lo"}))))},O=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={data:[],loading:null},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({data:[],loading:null}),h.a.database().ref("pictures").on("child_added",function(a){e.setState({data:e.state.data.concat(a.val()),loading:!1})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.loading&&r.a.createElement(j,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),this.state.data.map(function(e,a){return r.a.createElement(N,{key:a,txt:e.txt,nombre:e.nombre,avatar:e.avatar,pic:e.pic})}).reverse())}}]),t}(r.a.Component),k=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={user:{photoURL:"",displayName:""}},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.auth().onAuthStateChanged(function(a){e.setState({user:a})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{nombre:this.state.user.displayName,avatar:this.state.user.photoURL}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col l6 offset-l3"},r.a.createElement(O,null),c.a.createPortal(r.a.createElement(b,null),document.getElementById("teleport"))))))}}]),t}(r.a.Component),x=t(22),C=t.n(x),A=(t(34),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={user:null},e}return Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;h.a.auth().onAuthStateChanged(function(a){e.setState({user:a}),e.state.user&&e.props.history.push("/feed")})}},{key:"handleAuth",value:function(){var e=new h.a.auth.GoogleAuthProvider;h.a.auth().signInWithPopup(e).then(function(e){return console.log("entro: ",e.user.email)}).catch(function(e){return console.log(e.code)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container vh100"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col m4 l5 offset-l1 off"},r.a.createElement("img",{alt:"",src:C.a})),r.a.createElement("div",{className:"col m3 l3 top120"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("span",{className:"card-title"},"Card Title")),r.a.createElement("div",{className:"card-content center"},r.a.createElement("img",{alt:"",className:"circle homePic",src:"https://image.freepik.com/vector-gratis/concepto-diseno-redes-sociales_1284-5151.jpg"}),r.a.createElement("p",null,"Bienvenidos a ",r.a.createElement("strong",null,"Truchigram"),", esta app# esta creada para el curso de Firebase de escuela devRock para mostrar un primer ejemplo del poder de esta base de datos y lo f\xe1cil que resulta para arrancar a crear.")),r.a.createElement("div",{className:"card-action right-align"},r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:this.handleAuth},"Logear con Google")))))))}}]),t}(r.a.Component)),S=t(42),U=t(44),F=t(43),L=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,null,r.a.createElement(U.a,null,r.a.createElement(F.a,{exact:!0,path:"/feed",component:k}),r.a.createElement(F.a,{path:"/",component:A})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.initializeApp({apiKey:"AIzaSyAyXxQijG4eoHvsHEPyPCJTi26roSRXupc",authDomain:"truchigram.firebaseapp.com",databaseURL:"https://truchigram.firebaseio.com",projectId:"truchigram",storageBucket:"truchigram.appspot.com",messagingSenderId:"887923179137",appId:"1:887923179137:web:b8ddab7c7f929486"}),c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.44543987.chunk.js.map