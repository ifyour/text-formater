(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{17:function(t,e,i){var n=i(22);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(16).default)("3a3f2857",n,!1,{})},22:function(t,e,i){(t.exports=i(19)(!1)).push([t.i,".container[data-v-1b011d9c]{padding:1rem .5rem}",""])},23:function(t,e,i){"use strict";var n=i(17);i.n(n).a},33:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container grid-lg"},[i("GithubBadge",{attrs:{slug:"ifyour/text-formatter"}}),t._v(" "),i("h1",[t._v(t._s(t.title))]),t._v(" "),i("p",[t._v(t._s(t.description))]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.input,expression:"input",modifiers:{trim:!0}}],staticClass:"form-input",attrs:{rows:"10",placeholder:"Type your text here..."},domProps:{value:t.input},on:{click:t.select,input:function(e){e.target.composing||(t.input=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),t.output?i("div",{staticClass:"text-center my-2"},[i("button",{staticClass:"btn",on:{click:t.formatCopy}},[t._v("Format & Copy")])]):t._e()],1)};n._withStripped=!0;var r=i(32),o=i(31),a=i.n(o),s=i(29),c=i.n(s),u=i(28),p={head:function(){return{title:this.title,meta:[{name:"description",content:this.description}]}},data:function(){return{title:"Text-formatter",description:"Another text formatting tool.",input:""}},computed:{output:function(){return this.format(this.input)}},methods:{select:function(t){this.input&&t.target.select()},format:function(t){return t=t.replace(/[，][ ]+/g,", ").replace(/[。][ ]+/g,". ").replace(/；/g,"; ").replace(/：/g,": ").replace(/。/g,". ").replace(/，/g,", "),t=c.a.spacing(t)},formatCopy:function(){this.input=this.output,Object(r.a)(this.output),a()({message:"Copied!"})}},components:{GithubBadge:i.n(u).a}},l=(i(27),i(25),i(23),i(21)),d=Object(l.a)(p,n,[],!1,null,"1b011d9c",null);d.options.__file="pages\\index.vue";e.default=d.exports}}]);