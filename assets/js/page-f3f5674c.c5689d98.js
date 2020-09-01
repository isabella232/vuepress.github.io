(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{366:function(t,s,e){"use strict";e.r(s);var a=e(15),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress-plugin-table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-table-of-contents"}},[t._v("#")]),t._v(" vuepress-plugin-table-of-contents "),e("GitHubLink",{attrs:{repo:"vuepress/vuepress-community"}})],1),t._v(" "),e("p",[t._v("Add table-of-contents component for your VuePress site.")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D vuepress-plugin-table-of-contents\n")])])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-table-of-contents'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This plugin will register a "),e("code",[t._v("<TOC />")]),t._v(" component for you, which will render the table-of-contents of current page. You can use it in your markdown and vue files.")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- README.md / Component.vue --\x3e")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TOC")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("h2",{attrs:{id:"configs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configs"}},[t._v("#")]),t._v(" Configs")]),t._v(" "),e("h3",{attrs:{id:"componentname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentname"}},[t._v("#")]),t._v(" componentName")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type:")]),t._v(" "),e("code",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("default:")]),t._v(" "),e("code",[t._v("'TOC'")])])]),t._v(" "),e("p",[t._v("Name of the table-of-contents component.")]),t._v(" "),e("h2",{attrs:{id:"component-props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-props"}},[t._v("#")]),t._v(" Component Props")]),t._v(" "),e("h3",{attrs:{id:"includelevel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#includelevel"}},[t._v("#")]),t._v(" includeLevel")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("type:")]),t._v(" "),e("code",[t._v("[number, number]")])]),t._v(" "),e("li",[e("strong",[t._v("default:")]),t._v(" "),e("code",[t._v("[2, 3]")])])]),t._v(" "),e("p",[t._v("The level of title to be included in "),e("code",[t._v("<TOC />")]),t._v(" component.")]),t._v(" "),e("p",[t._v("For example, "),e("code",[t._v("[2, 4]")]),t._v(" means 2 <= x <= 4.")]),t._v(" "),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TOC")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("TOC"),t._v(" "),e("p",[e("strong",[t._v("Input")])]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TOC")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":include-level")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[2, 2]"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[e("strong",[t._v("Output")])]),t._v(" "),e("TOC",{attrs:{"include-level":[2,2]}}),t._v(" "),e("h2",{attrs:{id:"differences-from-vuepress-markdown-toc-syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#differences-from-vuepress-markdown-toc-syntax"}},[t._v("#")]),t._v(" Differences from VuePress markdown toc syntax")]),t._v(" "),e("p",[t._v("You may notice that VuePress also provides a "),e("a",{attrs:{href:"https://vuepress.vuejs.org/guide/markdown.html#table-of-contents",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown syntax "),e("code",[t._v("[[toc]]")]),e("OutboundLink")],1),t._v(" for table-of-contents.")]),t._v(" "),e("p",[t._v("However, "),e("code",[t._v("[[toc]]")]),t._v(" can only be used in "),e("code",[t._v(".md")]),t._v(" files as it's a markdown syntax. But "),e("code",[t._v("<TOC />")]),t._v(" can be used in both "),e("code",[t._v(".md")]),t._v(" files and "),e("code",[t._v(".vue")]),t._v(" files, as it's a Vue component.")]),t._v(" "),e("p",[t._v("Thus, "),e("code",[t._v("<TOC />")]),t._v(" is more convenient if you need table-of-contents in other part of your VuePress site (e.g. build your own theme with a table-of-contents component).")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);