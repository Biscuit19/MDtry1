(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-045ceb97"],{"202d":function(t,e,i){},"2db4":function(t,e,i){"use strict";var n=i("ade3"),a=(i("a9e3"),i("caad"),i("ca71"),i("8dd9")),s=i("a9ad"),o=i("7560"),r=i("f2e7"),c=i("fe6c"),u=i("58df"),l=i("80d2"),h=i("d9bd");e["a"]=Object(u["a"])(a["a"],s["a"],r["a"],Object(c["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:o["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,n=t.footer,a=t.insetFooter,s=t.left,o=t.right,r=t.top;return{paddingBottom:Object(l["g"])(i+n+a),paddingLeft:this.app?Object(l["g"])(s):void 0,paddingRight:this.app?Object(l["g"])(o):void 0,paddingTop:Object(l["g"])(e+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(h["e"])("auto-height",this),0==this.timeout&&Object(h["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l["s"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(n["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(l["s"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,i=e(this.color,{staticClass:"v-snack__wrapper",class:a["a"].options.computed.classes.call(this),style:a["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",i,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"64e1":function(t,e,i){},"6d6d":function(t,e,i){"use strict";i("202d")},"6db1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("div",[i("div",{staticClass:"bot"},[i("h2",[t._v("Editing File: "+t._s(t.fileName))])]),i("mavon-editor",{ref:"md",staticStyle:{"min-height":"570px","max-height":"570px"},attrs:{toolbars:t.markdownOption,shortCut:!1,id:"editor"},on:{change:t.change,imgAdd:t.$imgAdd,save:t.updateFile},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),i("v-snackbar",{attrs:{top:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[i("v-btn",t._b({attrs:{color:"red",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarData)+" You will jump to FilePage in "+t._s(t.count)+" second! ")])],1)])},a=[],s=(i("b0c0"),i("b2d8")),o=(i("64e1"),{name:"Markdown",components:{mavonEditor:s["mavonEditor"]},data:function(){return{content:"",html:"",toolBg:"rgba(255,255,0)",preBg:"white",snackbar:!1,snackbarData:"",count:5,markdownOption:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!1,htmlcode:!0,help:!0,undo:!0,redo:!0,trash:!0,save:!0,navigation:!1,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0}}},computed:{userName:function(){return this.$store.state.user.username},value:{get:function(){return this.$store.state.editingFile},set:function(t){this.$store.commit("setEditingFile",t)}},fileName:{get:function(){return this.$store.state.editingFileName},set:function(t){this.$store.commit("setEditingFileName",t)}}},methods:{change:function(t,e){this.html=e,console.log(this.html)},$imgAdd:function(t,e){var i=this,n=new FormData;n.append("image",e),this.$ajax({url:"",method:"post",data:n}).then((function(e){1==e.data.success&&(i.$refs.md.$img2Url(t,e.data.url),console.log(e.data.url))}))},updateFile:function(){var t=this;this.axios.post(this.targetIP()+"/filemanage.filemanage/updateContent",{userName:this.userName,fileName:this.fileName,fileType:"FILE",userType:"USER",filePath:this.filePath,newContent:this.value}).then((function(e){console.log(e),0==e.data&&(t.snackbarData="You have to Create the file First!",t.snackbar=!0,t.countdown())})).catch((function(t){console.log(t)}))},targetIP:function(){return this.$store.state.targetIP},open:function(t){this.$route.name!==t&&this.$router.push({name:t})},countdown:function(){var t=this,e=5;this.timer||(this.count=e,this.show=!1,this.timer=setInterval((function(){t.count>0&&t.count<=e?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null,t.$router.push({name:"fileManage"}))}),1e3))}}}),r=o,c=(i("6d6d"),i("2877")),u=i("6544"),l=i.n(u),h=i("8336"),d=i("a523"),m=i("2db4"),v=Object(c["a"])(r,n,a,!1,null,null,null);e["default"]=v.exports;l()(v,{VBtn:h["a"],VContainer:d["a"],VSnackbar:m["a"]})},ca71:function(t,e,i){}}]);
//# sourceMappingURL=chunk-045ceb97.c5859cd6.js.map