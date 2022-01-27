import{e,k as t,l as i,M as a,K as s,N as o,O as D,p as n,P as l}from"./vendor.469fd836.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const h={},u=s("h1",{id:"search",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#search","aria-hidden":"true"},"#"),n(" search")],-1),y=l(`<p>Provide local search to your documentation site.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Default theme will add search box to the navbar once you configure this plugin correctly.</p><p>This plugin may not be used directly in other themes, so you&#39;d better refer to the documentation of your theme for more details.</p></div><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-search@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="local-search-index" tabindex="-1"><a class="header-anchor" href="#local-search-index" aria-hidden="true">#</a> Local Search Index</h2><p>This plugin will generate search index from your pages locally, and load the search index file when users enter your site. In other words, this is a lightweight built-in search which does not require any external requests.</p>`,6),b=n("However, when your site has a large number of pages, the size of search index file would be very large, which could slow down the page loading speed. In this case, we recommend you to use a more professional solution - "),m=n("docsearch"),g=n("."),C=l(`<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>Record&lt;string, { placeholder: string }&gt;</code></p></li><li><p>Details:</p><p>The text of the search box in different locales.</p><p>If this option is not specified, it will fallback to default text.</p></li><li><p>Example:</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;@vuepress/plugin-search&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">placeholder:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Search&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">placeholder:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;\u641C\u7D22&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">          },</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,4),f=n("Also see: "),E=n("Guide > I18n"),x=s("h3",{id:"hotkeys",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#hotkeys","aria-hidden":"true"},"#"),n(" hotKeys")],-1),_=s("li",null,[s("p",null,[n("Type: "),s("code",null,"string[]")])],-1),v=s("li",null,[s("p",null,[n("Default: "),s("code",null,"['s', '/']")])],-1),F=s("p",null,"Details:",-1),k=n("Specify the "),w={href:"http://keycode.info/",target:"_blank",rel:"noopener noreferrer"},B=n("event.key"),S=n(" of the hotkeys."),T=s("p",null,"When hotkeys are pressed, the search box input will be focused.",-1),A=s("p",null,"Set to an empty array to disable hotkeys.",-1),I=l(`<h3 id="maxsuggestions" tabindex="-1"><a class="header-anchor" href="#maxsuggestions" aria-hidden="true">#</a> maxSuggestions</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>5</code></p></li><li><p>Details:</p><p>Specify the maximum number of search results.</p></li></ul><h3 id="issearchable" tabindex="-1"><a class="header-anchor" href="#issearchable" aria-hidden="true">#</a> isSearchable</h3><ul><li><p>Type: <code>(page: Page) =&gt; boolean</code></p></li><li><p>Default: <code>() =&gt; true</code></p></li><li><p>Details:</p><p>A function to determine whether a page should be included in the search index.</p><ul><li>Return <code>true</code> to include the page.</li><li>Return <code>false</code> to exclude the page.</li></ul></li><li><p>Example:</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"></span>
<span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;@vuepress/plugin-search&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">// exclude the homepage</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#DCDCAA;">isSearchable</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> !== </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="getextrafields" tabindex="-1"><a class="header-anchor" href="#getextrafields" aria-hidden="true">#</a> getExtraFields</h3><ul><li><p>Type: <code>(page: Page) =&gt; string[]</code></p></li><li><p>Default: <code>() =&gt; []</code></p></li><li><p>Details:</p><p>A function to add extra fields to the search index of a page.</p><p>By default, this plugin will use page title and headers as the search index. This option could help you to add more searchable fields.</p></li><li><p>Example:</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"></span>
<span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;@vuepress/plugin-search&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">// allow searching the \`tags\` frontmatter</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#DCDCAA;">getExtraFields</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">tags</span><span style="color:#D4D4D4;"> ?? [],</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize the style of the search box via CSS variables:</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--search-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ffffff</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--search-accent-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#3eaf7c</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--search-text-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#2c3e50</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--search-border-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#eaecef</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--search-item-text-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#5d81a5</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--search-item-focus-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#f3f4f5</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--search-input-width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">8rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--search-result-width</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">20rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h2><h3 id="searchbox" tabindex="-1"><a class="header-anchor" href="#searchbox" aria-hidden="true">#</a> SearchBox</h3><ul><li><p>Details:</p><p>This plugin will register a <code>&lt;SearchBox /&gt;</code> component globally, and you can use it without any props.</p><p>Put this component to where you want to place the search box. For example, default theme puts this component to the end of the navbar.</p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This component is mainly used for theme development. You don&#39;t need to use it directly in most cases.</p></div>`,15);function j(N,P){const r=e("NpmBadge"),p=e("RouterLink"),c=e("ExternalLinkIcon");return t(),i(D,null,[u,a(r,{package:"@vuepress/plugin-search"}),y,s("p",null,[b,a(p,{to:"/reference/plugin/docsearch.html"},{default:o(()=>[m]),_:1}),g]),C,s("ul",null,[s("li",null,[f,s("ul",null,[s("li",null,[a(p,{to:"/guide/i18n.html"},{default:o(()=>[E]),_:1})])])])]),x,s("ul",null,[_,v,s("li",null,[F,s("p",null,[k,s("a",w,[B,a(c)]),S]),T,A])]),I],64)}var V=d(h,[["render",j]]);export{V as default};
