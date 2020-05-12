(this["webpackJsonpkeluarberapa-react"]=this["webpackJsonpkeluarberapa-react"]||[]).push([[0],{55:function(e,a,t){e.exports=t(85)},60:function(e,a,t){},61:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),o=t.n(l),c=t(17),u=(t(60),t(32)),i=t(24),s=t(38),p=t(28),m=t(22),h=(t(40),t(61),t(20)),E=t(11),b=t(12),d=t(7),g=t(14),v=t(13),k=t(5),f=t(23),C=t(16),x=t.n(C),j=function(e){Object(g.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(E.a)(this,t),(n=a.call(this,e)).onChangeExpenseName=n.onChangeExpenseName.bind(Object(d.a)(n)),n.onChangeExpenseAmount=n.onChangeExpenseAmount.bind(Object(d.a)(n)),n.onChangeExpenseDescription=n.onChangeExpenseDescription.bind(Object(d.a)(n)),n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n.state={name:"",amount:"",description:""},n}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://keluarberapa.herokuapp.com/api/pengeluaran/"+this.props.match.params.id).then((function(a){e.setState({name:a.data.name,amount:a.data.amount,description:a.data.description})})).catch((function(e){console.log(e)}))}},{key:"onChangeExpenseName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeExpenseAmount",value:function(e){this.setState({amount:e.target.value})}},{key:"onChangeExpenseDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var a={name:this.state.name,amount:this.state.amount,description:this.state.description};x.a.put("https://keluarberapa.herokuapp.com/api/pengeluaran/"+this.props.match.params.id,a).then((function(e){console.log(e.data),console.log("Pengeluaran berhasil diperbarui!")})).catch((function(e){console.log(e)})),this.props.history.push("/keluarrBerapa/daftar-pengeluaran")}},{key:"render",value:function(){return r.a.createElement("div",{className:"form-wrapper"},r.a.createElement(k.a,{onSubmit:this.onSubmit},r.a.createElement(k.a.Group,{controlId:"Name"},r.a.createElement(k.a.Label,null,"Buat Apa"),r.a.createElement(k.a.Control,{type:"text",value:this.state.name,onChange:this.onChangeExpenseName})),r.a.createElement(k.a.Group,{controlId:"Amount"},r.a.createElement(k.a.Label,null,"Harga"),r.a.createElement(k.a.Control,{type:"number",value:this.state.amount,onChange:this.onChangeExpenseAmount})),r.a.createElement(k.a.Group,{controlId:"Description"},r.a.createElement(k.a.Label,null,"Deskripsi"),r.a.createElement(k.a.Control,{type:"text",value:this.state.description,onChange:this.onChangeExpenseDescription})),r.a.createElement(f.a,{variant:"danger",size:"lg",block:"block",type:"submit"},"Update")))}}]),t}(n.Component),y=t(53),O=function(e){Object(g.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(E.a)(this,t),(n=a.call(this,e)).deleteExpense=n.deleteExpense.bind(Object(d.a)(n)),n}return Object(b.a)(t,[{key:"deleteExpense",value:function(){x.a.delete("https://keluarberapa.herokuapp.com/api/pengeluaran/"+this.props.obj.id).then((function(e){console.log("Pengeluaran dihapus!")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.obj.name),r.a.createElement("td",null,this.props.obj.amount),r.a.createElement("td",null,this.props.obj.description),r.a.createElement("td",null,r.a.createElement(c.b,{className:"edit-link",to:"/keluarrBerapa/edit-pengeluaran/"+this.props.obj.id},r.a.createElement(f.a,{size:"sm",variant:"info"},"Edit")),r.a.createElement(f.a,{onClick:this.deleteExpense,size:"sm",variant:"danger"},"Delete")))}}]),t}(n.Component),D=function(e){Object(g.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(E.a)(this,t),(n=a.call(this,e)).state={expenses:[]},n}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://keluarberapa.herokuapp.com/api/pengeluaran").then((function(a){e.setState({expenses:a.data})})).catch((function(e){console.log(e)}))}},{key:"DataTable",value:function(){return this.state.expenses.map((function(e,a){return r.a.createElement(O,{obj:e,key:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(y.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Buat Apa"),r.a.createElement("th",null,"Harga"),r.a.createElement("th",null,"Deskripsi"),r.a.createElement("th",null,"Opsi"))),r.a.createElement("tbody",null,this.DataTable())))}}]),t}(n.Component),N=t(54),S=t.n(N),B=function(e){Object(g.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(E.a)(this,t),(n=a.call(this,e)).onChangeExpenseName=n.onChangeExpenseName.bind(Object(d.a)(n)),n.onChangeExpenseAmount=n.onChangeExpenseAmount.bind(Object(d.a)(n)),n.onChangeExpenseDescription=n.onChangeExpenseDescription.bind(Object(d.a)(n)),n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n.state={name:"",description:"",amount:""},n}return Object(b.a)(t,[{key:"onChangeExpenseName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeExpenseAmount",value:function(e){this.setState({amount:e.target.value})}},{key:"onChangeExpenseDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var a={name:this.state.name,amount:this.state.amount,description:this.state.description};x.a.post("https://keluarberapa.herokuapp.com/api/pengeluaran",a).then((function(e){return console.log(e.data)})),S.a.fire("Wow!","Pengeluaranmu berhasil ditambahkan!","berhasil"),this.setState({name:"",amount:"",description:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"form-wrapper"},r.a.createElement(k.a,{onSubmit:this.onSubmit},r.a.createElement(p.a,null,r.a.createElement(m.a,null,r.a.createElement(k.a.Group,{controlId:"Name"},r.a.createElement(k.a.Label,null,"Buat Apa"),r.a.createElement(k.a.Control,{type:"text",value:this.state.name,onChange:this.onChangeExpenseName}))),r.a.createElement(m.a,null,r.a.createElement(k.a.Group,{controlId:"Amount"},r.a.createElement(k.a.Label,null,"Harga"),r.a.createElement(k.a.Control,{type:"number",value:this.state.amount,onChange:this.onChangeExpenseAmount})))),r.a.createElement(k.a.Group,{controlId:"description"},r.a.createElement(k.a.Label,null,"Deskripsi"),r.a.createElement(k.a.Control,{as:"textarea",type:"textarea",value:this.state.description,onChange:this.onChangeExpenseDescription})),r.a.createElement(f.a,{variant:"outline-secondary",size:"lg",block:"block",type:"submit"},"Tambahkan")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(D,null," "))}}]),t}(n.Component),w=function(e){Object(g.a)(t,e);var a=Object(v.a)(t);function t(){return Object(E.a)(this,t),a.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"Welcome to keluarBerapa!"),r.a.createElement("p",null,"It's not about how much money you make. It's how you save it :)"))}}]),t}(n.Component);var A=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(i.a.Brand,null,r.a.createElement(c.b,{to:"/keluarrBerapa",className:"nav-link"},"keluarberapa")),r.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(s.a,null,r.a.createElement(i.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end"},r.a.createElement(u.a.Link,{href:"https://keluarberapa.herokuapp.com/docs"},"apiDocs"),r.a.createElement(u.a,null,r.a.createElement(c.b,{to:"/keluarrBerapa/buat-pengeluaran",className:"nav-link"},"Buat Pengeluaran")),r.a.createElement(u.a,null,r.a.createElement(c.b,{to:"/keluarrBerapa/daftar-pengeluaran",className:"nav-link"},"Daftar Pegeluaran"))))),r.a.createElement(s.a,null,r.a.createElement("br",null),r.a.createElement(p.a,null,r.a.createElement(m.a,{md:12},r.a.createElement("div",{className:"wrapper"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/keluarrBerapa",component:w}),r.a.createElement(h.a,{path:"/keluarrBerapa/buat-pengeluaran",component:B}),r.a.createElement(h.a,{path:"/keluarrBerapa/edit-pengeluaran/:id",component:j}),r.a.createElement(h.a,{path:"/keluarrBerapa/daftar-pengeluaran",component:D}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.6ea88f71.chunk.js.map