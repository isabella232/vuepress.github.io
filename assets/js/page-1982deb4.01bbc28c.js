(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{379:function(t,a,s){"use strict";s.r(a);var e=s(15),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-plugin-named-chunks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-named-chunks"}},[t._v("#")]),t._v(" vuepress-plugin-named-chunks "),s("GitHubLink",{attrs:{repo:"vuepress/vuepress-community"}})],1),t._v(" "),s("p",[t._v("为你的 VuePress 站点生成命名 chunks 。")]),t._v(" "),s("p",[t._v("VuePress 使用 "),s("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports",target:"_blank",rel:"noopener noreferrer"}},[t._v("dynamic import"),s("OutboundLink")],1),t._v(" 来加载页面组件和布局组件。每一个组件都会变成一个独立的 chunk ，但它们的名字都是自动生成的，不利于后续追踪。这个插件可以用来生成命名 chunks 。")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D vuepress-plugin-named-chunks\n")])])]),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'named-chunks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("pageChunkName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'page'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("layoutChunkName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("layout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'layout-'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),s("h3",{attrs:{id:"pagechunkname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagechunkname"}},[t._v("#")]),t._v(" pageChunkName")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("((page: Page) => string) | false")])]),t._v(" "),s("li",[s("strong",[t._v("默认值:")]),t._v(" "),s("code",[t._v("({ key }) => 'page' + key.slice(1)")])])]),t._v(" "),s("p",[t._v("用于从 "),s("code",[t._v("Page")]),t._v(" 对象生成模块名称的函数。")]),t._v(" "),s("h3",{attrs:{id:"layoutchunkname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layoutchunkname"}},[t._v("#")]),t._v(" layoutChunkName")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("类型:")]),t._v(" "),s("code",[t._v("((layout: ResolvedComponent) => string) | false")])]),t._v(" "),s("li",[s("strong",[t._v("默认值:")]),t._v(" "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("用于从 "),s("code",[t._v("ResolvedComponent")]),t._v(" 对象生成模块名称的函数。")]),t._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("这个插件将会植入在 "),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/plugin/context-api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("context API"),s("OutboundLink")],1),t._v(" 中注入一些属性。")]),t._v(" "),s("h3",{attrs:{id:"页面组件的模块名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面组件的模块名称"}},[t._v("#")]),t._v(" 页面组件的模块名称")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("context.pages")]),t._v(" 是由 "),s("code",[t._v("Page")]),t._v(" 对象构成的数组。")]),t._v(" "),s("li",[s("code",[t._v("page._chunkName")]),t._v(" 是对应的页面组件的模块名称。")])]),t._v(" "),s("h3",{attrs:{id:"布局组件的模块名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局组件的模块名称"}},[t._v("#")]),t._v(" 布局组件的模块名称")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("context.themeAPI.layoutComponentMap")]),t._v(" 是由 "),s("code",[t._v("ResolvedComponent")]),t._v(" 对象构成的键值对。")]),t._v(" "),s("li",[s("code",[t._v("layout._chunkName")]),t._v(" 是对应的布局组件的模块名称。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);