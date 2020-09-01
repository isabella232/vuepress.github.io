(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{364:function(t,s,e){"use strict";e.r(s);var a=e(15),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress-plugin-serve"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-serve"}},[t._v("#")]),t._v(" vuepress-plugin-serve "),e("GitHubLink",{attrs:{repo:"vuepress/vuepress-community"}})],1),t._v(" "),e("p",[t._v("Serve generated files of your VuePress site locally.")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D vuepress-plugin-serve\n")])])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-serve'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        post"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        staticOptions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          dotfiles"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'allow'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeServer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path/to/my/custom'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" custom"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'response'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"configs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configs"}},[t._v("#")]),t._v(" Configs")]),t._v(" "),e("h3",{attrs:{id:"commandname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commandname"}},[t._v("#")]),t._v(" commandName")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type:")]),t._v(" "),e("code",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("default:")]),t._v(" "),e("code",[t._v("'serve'")])])]),t._v(" "),e("p",[t._v("vuepress-plugin-serve will add a vuepress command. This option can be used to specify the command name.")]),t._v(" "),e("h3",{attrs:{id:"host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" host")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type:")]),t._v(" "),e("code",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("default:")]),t._v(" "),e("code",[t._v("siteConfig.host || 'localhost'")])])]),t._v(" "),e("p",[t._v("Specify the host to use for the server.")]),t._v(" "),e("h3",{attrs:{id:"port"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" port")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type:")]),t._v(" "),e("code",[t._v("number")])]),t._v(" "),e("li",[e("strong",[t._v("default:")]),t._v(" "),e("code",[t._v("siteConfig.port || 8080")])])]),t._v(" "),e("p",[t._v("Specify the port to use for the server.")]),t._v(" "),e("h3",{attrs:{id:"notfoundpath"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notfoundpath"}},[t._v("#")]),t._v(" notFoundPath")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type:")]),t._v(" "),e("code",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("default:")]),t._v(" "),e("code",[t._v("'404.html'")])])]),t._v(" "),e("p",[t._v('Path for "404 not found" page (relative to '),e("code",[t._v("dest")]),t._v(" path).")]),t._v(" "),e("h3",{attrs:{id:"staticoptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#staticoptions"}},[t._v("#")]),t._v(" staticOptions")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type:")]),t._v(" "),e("code",[t._v("object")])]),t._v(" "),e("li",[e("strong",[t._v("default:")]),t._v(" "),e("code",[t._v("{}")])])]),t._v(" "),e("p",[t._v("Options for "),e("a",{attrs:{href:"https://github.com/expressjs/serve-static#servestaticroot-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("serve-static"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"beforeserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beforeserver"}},[t._v("#")]),t._v(" beforeServer")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type:")]),t._v(" "),e("code",[t._v("(app, server) => void | Promise<void>")])]),t._v(" "),e("li",[e("strong",[t._v("default:")]),t._v(" "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("Executed before the server accepts client information. Similar to VuePress's "),e("a",{attrs:{href:"https://vuepress.vuejs.org/en/plugin/option-api.html#beforedevserver",target:"_blank",rel:"noopener noreferrer"}},[t._v("beforeDevServer"),e("OutboundLink")],1),t._v(" option.")]),t._v(" "),e("h3",{attrs:{id:"afterserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#afterserver"}},[t._v("#")]),t._v(" afterServer")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type:")]),t._v(" "),e("code",[t._v("async (app, server) => void | Promise<void>")])]),t._v(" "),e("li",[e("strong",[t._v("default:")]),t._v(" "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("Executed after the server accepts client information. Similar to VuePress's "),e("a",{attrs:{href:"https://vuepress.vuejs.org/en/plugin/option-api.html#afterdevserver",target:"_blank",rel:"noopener noreferrer"}},[t._v("afterDevServer"),e("OutboundLink")],1),t._v(" option.")]),t._v(" "),e("h2",{attrs:{id:"cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),e("p",[t._v("After using this plugin, VuePress will add a "),e("code",[t._v("serve")]),t._v(" command. This command will created a server based on the generated files. It has the following options:")]),t._v(" "),e("h3",{attrs:{id:"build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" --build")]),t._v(" "),e("p",[t._v("Execute "),e("code",[t._v("vuepress build")]),t._v(" before creating the server.")]),t._v(" "),e("h3",{attrs:{id:"open"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open"}},[t._v("#")]),t._v(" --open")]),t._v(" "),e("p",[t._v("Open the browser when the server is ready.")]),t._v(" "),e("h3",{attrs:{id:"host-host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#host-host"}},[t._v("#")]),t._v(" --host "),e("code",[t._v("<host>")])]),t._v(" "),e("p",[t._v("See "),e("a",{attrs:{href:"#host"}},[t._v("host")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"port-port"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#port-port"}},[t._v("#")]),t._v(" --port "),e("code",[t._v("<port>")])]),t._v(" "),e("p",[t._v("See "),e("a",{attrs:{href:"#port"}},[t._v("port")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("VuePress built-in command line options (such as "),e("code",[t._v("--dest <dest>")]),t._v(", "),e("code",[t._v("--cache [cache]")]),t._v(", "),e("code",[t._v("--no-cache")]),t._v(") are also supported.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);