import{e as o,k as i,l as u,K as s,M as e,N as l,O as d,p as n,P as p}from"./vendor.469fd836.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";const h={},b=s("h1",{id:"writing-a-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#writing-a-plugin","aria-hidden":"true"},"#"),n(" Writing a Plugin")],-1),y={class:"custom-container tip"},_=s("p",{class:"custom-container-title"},"TIP",-1),m=n("Before reading this guide, you'd better learn the VuePress "),g=n("architecture"),f=n(" first."),C=s("h2",{id:"create-a-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-plugin","aria-hidden":"true"},"#"),n(" Create a Plugin")],-1),E=n("A VuePress plugin is a plain JavaScript object that satisfies the "),v=n("Plugin API"),k=n(", which is called a "),x=s("em",null,"Plugin Object",-1),j=n("."),P=s("p",null,[n("If a plugin wants to receive user options, it could be a function that returns a "),s("em",null,"Plugin Object"),n(", which is called a "),s("em",null,"Plugin Function"),n(".")],-1),q=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"fooPlugin"),s("span",{style:{color:"#D4D4D4"}}," = {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#9CDCFE"}},"name:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'vuepress-plugin-foo'"),s("span",{style:{color:"#D4D4D4"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#6A9955"}},"// ...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br")])],-1),F=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#DCDCAA"}},"fooPlugin"),s("span",{style:{color:"#D4D4D4"}}," = ("),s("span",{style:{color:"#9CDCFE"}},"options"),s("span",{style:{color:"#D4D4D4"}},", "),s("span",{style:{color:"#9CDCFE"}},"app"),s("span",{style:{color:"#D4D4D4"}},") "),s("span",{style:{color:"#569CD6"}},"=>"),s("span",{style:{color:"#D4D4D4"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  "),s("span",{style:{color:"#C586C0"}},"return"),s("span",{style:{color:"#D4D4D4"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#9CDCFE"}},"name:"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"'vuepress-plugin-foo'"),s("span",{style:{color:"#D4D4D4"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"    "),s("span",{style:{color:"#6A9955"}},"// ...")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"}")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br")])],-1),w=p(`<h2 id="publish-to-npm" tabindex="-1"><a class="header-anchor" href="#publish-to-npm" aria-hidden="true">#</a> Publish to NPM</h2><p>The typical structure of a plugin package is as follow:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">vuepress-plugin-foo</span></span>
<span class="line"><span style="color:#D4D4D4;">\u251C\u2500 lib</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2502  \u2514\u2500 index.js</span></span>
<span class="line"><span style="color:#D4D4D4;">\u2514\u2500 package.json</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="plugin-entry" tabindex="-1"><a class="header-anchor" href="#plugin-entry" aria-hidden="true">#</a> Plugin Entry</h3><p>The <code>lib/index.js</code> file is the plugin entry, which should export the plugin directly:</p>`,5),S=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4EC9B0"}},"module"),s("span",{style:{color:"#D4D4D4"}},"."),s("span",{style:{color:"#4EC9B0"}},"exports"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#9CDCFE"}},"fooPlugin")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br")])],-1),N=s("div",{class:"language-javascript ext-js line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C586C0"}},"export"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#C586C0"}},"default"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#9CDCFE"}},"fooPlugin")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers"},[s("span",{class:"line-number"},"1"),s("br")])],-1),I={class:"custom-container tip"},A=s("p",{class:"custom-container-title"},"TIP",-1),B=s("p",null,"Notice that the plugin entry will be loaded in Node, so it should be in CommonJS format.",-1),M=n("If you are using ESM format, you'll need to use "),T={href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"},V=n("babel"),G=n(" or "),J={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},L=n("typescript"),O=n(" to transpile it into CommonJS."),R=s("h3",{id:"package-json",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#package-json","aria-hidden":"true"},"#"),n(" package.json")],-1),K=n("The "),W={href:"https://docs.npmjs.com/cli/v6/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"},z=n("package.json"),H=n(" file is required to publish a package to NPM:"),Q=p(`<div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress-plugin-foo&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;version&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1.0.0&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;keywords&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;vuepress-plugin&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;main&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;lib/index.js&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;files&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;lib&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>Set <code>name</code> to follow the naming convention: <code>vuepress-plugin-xxx</code> or <code>@org/vuepress-plugin-xxx</code>.</li><li>Set <code>keywords</code> to include <code>vuepress-plugin</code>, so that users can search your plugin on NPM.</li><li>Set <code>main</code> to the plugin entry file.</li><li>Set <code>files</code> to only publish those files inside <code>lib</code> directory.</li></ul>`,2);function U(X,Y){const c=o("RouterLink"),a=o("CodeGroupItem"),r=o("CodeGroup"),t=o("ExternalLinkIcon");return i(),u(d,null,[b,s("div",y,[_,s("p",null,[m,e(c,{to:"/advanced/architecture.html"},{default:l(()=>[g]),_:1}),f])]),C,s("p",null,[E,e(c,{to:"/reference/plugin-api.html"},{default:l(()=>[v]),_:1}),k,x,j]),P,e(r,null,{default:l(()=>[e(a,{title:"Plugin Object",active:""},{default:l(()=>[q]),_:1}),e(a,{title:"Plugin Function"},{default:l(()=>[F]),_:1})]),_:1}),w,e(r,null,{default:l(()=>[e(a,{title:"CJS",active:""},{default:l(()=>[S]),_:1}),e(a,{title:"ESM"},{default:l(()=>[N]),_:1})]),_:1}),s("div",I,[A,B,s("p",null,[M,s("a",T,[V,e(t)]),G,s("a",J,[L,e(t)]),O])]),R,s("p",null,[K,s("a",W,[z,e(t)]),H]),Q],64)}var ss=D(h,[["render",U]]);export{ss as default};
