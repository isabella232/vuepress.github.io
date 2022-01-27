import{e as a,k as d,l as u,M as n,K as s,N as l,O as m,p as e,P as i}from"./vendor.469fd836.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const _={},h=s("h1",{id:"\u5185\u7F6E\u7EC4\u4EF6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5185\u7F6E\u7EC4\u4EF6","aria-hidden":"true"},"#"),e(" \u5185\u7F6E\u7EC4\u4EF6")],-1),g={id:"badge",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#badge","aria-hidden":"true"},"#",-1),v=e(" Badge "),y=i(`<ul><li><p>Props:</p><ul><li>type <ul><li>\u7C7B\u578B\uFF1A <code>&#39;tip&#39; | &#39;warning&#39; | &#39;danger&#39;</code></li><li>\u9ED8\u8BA4\u503C\uFF1A <code>&#39;tip&#39;</code></li></ul></li><li>text <ul><li>\u7C7B\u578B\uFF1A <code>string</code></li><li>\u9ED8\u8BA4\u503C\uFF1A <code>&#39;&#39;</code></li></ul></li><li>vertical <ul><li>\u7C7B\u578B\uFF1A <code>&#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39; | undefined</code></li><li>\u9ED8\u8BA4\u503C\uFF1A <code>undefined</code></li></ul></li></ul></li><li><p>\u793A\u4F8B\uFF1A</p></li></ul><p><strong>\u8F93\u5165</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - &lt;Badge type=&quot;tip&quot; text=&quot;v2&quot; vertical=&quot;top&quot; /&gt;</span></span>
<span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - &lt;Badge type=&quot;warning&quot; text=&quot;v2&quot; vertical=&quot;middle&quot; /&gt;</span></span>
<span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - &lt;Badge type=&quot;danger&quot; text=&quot;v2&quot; vertical=&quot;bottom&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u8F93\u51FA</strong></p>`,4),f=e("VuePress - "),k=e("VuePress - "),E=e("VuePress - "),q=i(`<h2 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h2><ul><li><p>\u8BE6\u60C5\uFF1A</p><p><a href="#codegroupitem">CodeGroupItem</a> \u7EC4\u4EF6\u7684 Wrapper \u3002</p></li></ul><h2 id="codegroupitem" tabindex="-1"><a class="header-anchor" href="#codegroupitem" aria-hidden="true">#</a> CodeGroupItem</h2><ul><li><p>Props:</p><ul><li>title <ul><li>\u7C7B\u578B\uFF1A <code>string</code></li><li>\u662F\u5426\u5FC5\u9700\uFF1A <code>true</code></li></ul></li><li>active <ul><li>\u7C7B\u578B\uFF1A <code>boolean</code></li><li>\u9ED8\u8BA4\u503C\uFF1A <code>false</code></li></ul></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u8BE5\u7EC4\u4EF6\u5FC5\u987B\u653E\u7F6E\u5728 <a href="#codegroup">CodeGroup</a> \u7EC4\u4EF6\u7684\u5185\u90E8\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7 <code>active</code> Prop \u6765\u8BBE\u7F6E\u521D\u59CB\u6FC0\u6D3B\u7684\u5143\u7D20\u3002\u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u6FC0\u6D3B\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002</p></li><li><p>\u793A\u4F8B\uFF1A</p></li></ul><p><strong>\u8F93\u5165</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;CodeGroup&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;CodeGroupItem title=&quot;YARN&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#D4D4D4;">yarn</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;/CodeGroupItem&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;CodeGroupItem title=&quot;NPM&quot; active&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#D4D4D4;">npm install</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;/CodeGroupItem&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;/CodeGroup&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><strong>\u8F93\u51FA</strong></p>`,7),x=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"yarn")]),e(`
`),s("span",{class:"line"})])])],-1),C=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"npm install")]),e(`
`),s("span",{class:"line"})])])],-1),G={class:"custom-container warning"},B=s("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),w=s("p",null,[e("\u4F60\u5FC5\u987B\u5728 "),s("code",null,"<CodeGroupItem>"),e(" \u7684\u5F00\u59CB\u6807\u7B7E\u548C\u4EE3\u7801\u5757\u4E4B\u95F4\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u884C\uFF0C\u5426\u5219\u4EE3\u7801\u5757\u65E0\u6CD5\u88AB Markdown \u6B63\u786E\u89E3\u6790\u3002")],-1),P=s("p",null,"\u6240\u6709\u5185\u5BB9\u9996\u5148\u90FD\u5FC5\u987B\u662F\u5408\u6CD5\u7684 Markdown \uFF0C\u7136\u540E\u624D\u662F\u4E00\u4E2A Vue SFC \u3002",-1),V=e("\u4E86\u89E3\u66F4\u591A\uFF1A "),N=e("Cookbook > Markdown \u4E0E Vue SFC"),I=e("\u6216\u8005\u4F60\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528 "),A=e("\u81EA\u5B9A\u4E49\u5BB9\u5668"),M=e(" \u3002");function R(F,S){const c=a("NpmBadge"),o=a("Badge"),t=a("CodeGroupItem"),r=a("CodeGroup"),p=a("RouterLink");return d(),u(m,null,[h,n(c,{package:"@vuepress/theme-default"}),s("h2",g,[D,v,n(o,{text:"badge"})]),y,s("ul",null,[s("li",null,[f,n(o,{type:"tip",text:"v2",vertical:"top"})]),s("li",null,[k,n(o,{type:"warning",text:"v2",vertical:"middle"})]),s("li",null,[E,n(o,{type:"danger",text:"v2",vertical:"bottom"})])]),q,n(r,null,{default:l(()=>[n(t,{title:"YARN"},{default:l(()=>[x]),_:1}),n(t,{title:"NPM",active:""},{default:l(()=>[C]),_:1})]),_:1}),s("div",G,[B,w,P,s("p",null,[V,n(p,{to:"/zh/advanced/cookbook/markdown-and-vue-sfc.html"},{default:l(()=>[N]),_:1})]),s("p",null,[I,n(p,{to:"/zh/reference/default-theme/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8"},{default:l(()=>[A]),_:1}),M])])],64)}var L=b(_,[["render",R]]);export{L as default};
