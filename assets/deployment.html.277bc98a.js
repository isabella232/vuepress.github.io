import{e as p,k as t,l as r,K as s,M as a,N as c,O as i,p as n,P as l}from"./vendor.469fd836.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=s("h1",{id:"\u90E8\u7F72",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u90E8\u7F72","aria-hidden":"true"},"#"),n(" \u90E8\u7F72")],-1),b=s("p",null,"\u4E0B\u8FF0\u7684\u6307\u5357\u57FA\u4E8E\u4EE5\u4E0B\u6761\u4EF6\uFF1A",-1),h=s("li",null,[n("Markdown \u6E90\u6587\u4EF6\u653E\u7F6E\u5728\u4F60\u9879\u76EE\u7684 "),s("code",null,"docs"),n(" \u76EE\u5F55\uFF1B")],-1),y=s("li",null,[n("\u4F7F\u7528\u7684\u662F\u9ED8\u8BA4\u7684\u6784\u5EFA\u8F93\u51FA\u76EE\u5F55 ("),s("code",null,".vuepress/dist"),n(") \uFF1B")],-1),_=n("\u4F7F\u7528 "),m={href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},g=n("Yarn classic"),C=n(" \u4F5C\u4E3A\u5305\u7BA1\u7406\u5668\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528 NPM \u3002"),E=s("li",null,[n("VuePress \u4F5C\u4E3A\u9879\u76EE\u4F9D\u8D56\u5B89\u88C5\uFF0C\u5E76\u5728 "),s("code",null,"package.json"),n(" \u4E2D\u914D\u7F6E\u4E86\u5982\u4E0B\u811A\u672C\uFF1A")],-1),f=l(`<div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;scripts&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;docs:build&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress build docs&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>`,2),k=n("\u8BBE\u7F6E\u6B63\u786E\u7684 "),v=n("base"),q=n(" \u9009\u9879\u3002"),x=l("<p>\u5982\u679C\u4F60\u51C6\u5907\u53D1\u5E03\u5230 <code>https://&lt;USERNAME&gt;.github.io/</code> \uFF0C\u4F60\u53EF\u4EE5\u7701\u7565\u8FD9\u4E00\u6B65\uFF0C\u56E0\u4E3A <code>base</code> \u9ED8\u8BA4\u5C31\u662F <code>&quot;/&quot;</code> \u3002</p><p>\u5982\u679C\u4F60\u51C6\u5907\u53D1\u5E03\u5230 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> \uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u7684\u4ED3\u5E93\u5730\u5740\u662F <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> \uFF0C\u5219\u5C06 <code>base</code> \u8BBE\u7F6E\u4E3A <code>&quot;/&lt;REPO&gt;/&quot;</code>\u3002</p>",2),A=n("\u9009\u62E9\u4F60\u60F3\u8981\u4F7F\u7528\u7684 CI \u5DE5\u5177\u3002\u8FD9\u91CC\u6211\u4EEC\u4EE5 "),w={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},P=n("GitHub Actions"),j=n(" \u4E3A\u4F8B\u3002"),B=s("p",null,[n("\u521B\u5EFA "),s("code",null,".github/workflows/docs.yml"),n(" \u6587\u4EF6\u6765\u914D\u7F6E\u5DE5\u4F5C\u6D41\u3002")],-1),N=l(`<details class="custom-container details"><summary>\u70B9\u51FB\u5C55\u5F00\u914D\u7F6E\u6837\u4F8B</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># \u6BCF\u5F53 push \u5230 main \u5206\u652F\u65F6\u89E6\u53D1\u90E8\u7F72</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">push</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">branches</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">main</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># \u624B\u52A8\u89E6\u53D1\u90E8\u7F72</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">workflow_dispatch</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">jobs</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">docs</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">runs-on</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">steps</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/checkout@v2</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># \u201C\u6700\u8FD1\u66F4\u65B0\u65F6\u95F4\u201D \u7B49 git \u65E5\u5FD7\u76F8\u5173\u4FE1\u606F\uFF0C\u9700\u8981\u62C9\u53D6\u5168\u90E8\u63D0\u4EA4\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">fetch-depth</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Setup Node.js</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/setup-node@v1</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># \u9009\u62E9\u8981\u4F7F\u7528\u7684 node \u7248\u672C</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">node-version</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;14&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># \u7F13\u5B58 node_modules</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Cache dependencies</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/cache@v2</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">id</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn-cache</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">path</span><span style="color:#D4D4D4;">: </span><span style="color:#C586C0;">|</span></span>
<span class="line"><span style="color:#CE9178;">            **/node_modules</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">key</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">\${{ runner.os }}-yarn-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">restore-keys</span><span style="color:#D4D4D4;">: </span><span style="color:#C586C0;">|</span></span>
<span class="line"><span style="color:#CE9178;">            \${{ runner.os }}-yarn-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># \u5982\u679C\u7F13\u5B58\u6CA1\u6709\u547D\u4E2D\uFF0C\u5B89\u88C5\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Install dependencies</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">if</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">steps.yarn-cache.outputs.cache-hit != &#39;true&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># \u8FD0\u884C\u6784\u5EFA\u811A\u672C</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Build VuePress site</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># \u67E5\u770B workflow \u7684\u6587\u6863\u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">crazy-max/ghaction-github-pages@v2</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># \u90E8\u7F72\u5230 gh-pages \u5206\u652F</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">target_branch</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">gh-pages</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># \u90E8\u7F72\u76EE\u5F55\u4E3A VuePress \u7684\u9ED8\u8BA4\u8F93\u51FA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">build_dir</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs/.vuepress/dist</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">env</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">GITHUB_TOKEN</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div></details>`,1),R={class:"custom-container tip"},F=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),V=n("\u8BF7\u53C2\u8003 "),G={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},H=n("GitHub Pages \u5B98\u65B9\u6307\u5357"),I=n(" \u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\u3002"),L=s("h2",{id:"gitlab-pages",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),n(" GitLab Pages")],-1),S=n("\u8BBE\u7F6E\u6B63\u786E\u7684 "),O=n("base"),M=n(" \u9009\u9879\u3002"),U=l("<p>\u5982\u679C\u4F60\u51C6\u5907\u53D1\u5E03\u5230 <code>https://&lt;USERNAME&gt;.gitlab.io/</code> \uFF0C\u4F60\u53EF\u4EE5\u7701\u7565\u8FD9\u4E00\u6B65\uFF0C\u56E0\u6B64 <code>base</code> \u9ED8\u8BA4\u5C31\u662F <code>&quot;/&quot;</code> \u3002</p><p>\u5982\u679C\u4F60\u51C6\u5907\u53D1\u5E03\u5230 <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code> \uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u7684\u4ED3\u5E93\u5730\u5740\u662F <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> \uFF0C\u5219\u5C06 <code>base</code> \u8BBE\u7F6E\u4E3A <code>&quot;/&lt;REPO&gt;/&quot;</code>\u3002</p>",2),z=n("\u521B\u5EFA "),T=s("code",null,".gitlab-ci.yml",-1),$=n(" \u6587\u4EF6\u6765\u914D\u7F6E "),K={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},Y=n("GitLab CI"),J=n(" \u5DE5\u4F5C\u6D41\u3002"),Q=l(`<details class="custom-container details"><summary>\u70B9\u51FB\u5C55\u5F00\u914D\u7F6E\u6837\u4F8B</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># \u9009\u62E9\u4F60\u8981\u4F7F\u7528\u7684 docker \u955C\u50CF</span></span>
<span class="line"><span style="color:#569CD6;">image</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">node:14-buster</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">pages</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># \u6BCF\u5F53 push \u5230 main \u5206\u652F\u65F6\u89E6\u53D1\u90E8\u7F72</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">only</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># \u7F13\u5B58 node_modules</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">cache</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">node_modules/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># \u5B89\u88C5\u4F9D\u8D56\u5E76\u8FD0\u884C\u6784\u5EFA\u811A\u672C</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">yarn --frozen-lockfile</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">yarn docs:build --dest public</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">artifacts</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">public</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details>`,1),W={class:"custom-container tip"},X=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),Z=n("\u8BF7\u53C2\u8003 "),ss={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},ns=n("GitLab Pages \u5B98\u65B9\u6307\u5357"),as=n(" \u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\u3002"),es=s("h2",{id:"google-firebase",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),n(" Google Firebase")],-1),ls=n("\u8BF7\u786E\u4FDD\u4F60\u5DF2\u7ECF\u5B89\u88C5\u4E86 "),os={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},ps=n("firebase-tools"),cs=n("\u3002"),ts=s("li",null,[s("p",null,[n("\u5728\u4F60\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA "),s("code",null,"firebase.json"),n(" \u548C "),s("code",null,".firebaserc"),n("\uFF0C\u5E76\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\uFF1A")])],-1),rs=l(`<p><code>firebase.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;hosting&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;public&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;ignore&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>.firebaserc</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;projects&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;default&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>\u5728\u6267\u884C\u4E86 <code>yarn docs:build</code> \u6216 <code>npm run docs:build</code> \u540E, \u4F7F\u7528 <code>firebase deploy</code> \u6307\u4EE4\u6765\u90E8\u7F72\u3002</li></ol>`,5),is={class:"custom-container tip"},Ds=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),ds=n("\u8BF7\u53C2\u8003 "),us={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},bs=n("Firebase CLI \u5B98\u65B9\u6307\u5357"),hs=n(" \u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\u3002"),ys=s("h2",{id:"heroku",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),n(" Heroku")],-1),_s=n("\u9996\u5148\u5B89\u88C5 "),ms={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},gs=n("Heroku CLI"),Cs=n("\uFF1B"),Es={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},fs=n("\u5728\u8FD9\u91CC"),ks=n(" \u6CE8\u518C\u4E00\u4E2A Heroku \u8D26\u53F7\uFF1B"),vs=s("li",null,[s("p",null,[n("\u8FD0\u884C "),s("code",null,"heroku login"),n(" \u5E76\u586B\u5199\u4F60\u7684 Heroku \u8BA4\u8BC1\u4FE1\u606F\uFF1A")])],-1),qs=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">heroku login</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u5728\u4F60\u7684\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\uFF0C\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>static.json</code> \u7684\u6587\u4EF6\uFF0C\u5E76\u5305\u542B\u4E0B\u8FF0\u5185\u5BB9\uFF1A</li></ol><p><code>static.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;root&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,4),xs=n("\u8FD9\u91CC\u662F\u4F60\u9879\u76EE\u7684\u914D\u7F6E\uFF0C\u8BF7\u53C2\u8003 "),As={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},ws=n("heroku-buildpack-static"),Ps=n(" \u6765\u83B7\u53D6\u66F4\u591A\u4FE1\u606F\u3002"),js=s("h2",{id:"layer0",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#layer0","aria-hidden":"true"},"#"),n(" Layer0")],-1),Bs=n("\u8BF7\u67E5\u770B "),Ns={href:"https://docs.layer0.co/guides/vuepress",target:"_blank",rel:"noopener noreferrer"},Rs=n("Layer0 Documentation > Framework Guides > VuePress"),Fs=n(" \u3002"),Vs=s("h2",{id:"netlify",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),n(" Netlify")],-1),Gs=n("\u524D\u5F80 "),Hs={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},Is=n("Netlify"),Ls=n(" \uFF0C\u4ECE GitHub \u521B\u5EFA\u4E00\u4E2A\u65B0\u9879\u76EE\uFF0C\u5E76\u8FDB\u884C\u5982\u4E0B\u914D\u7F6E\uFF1A"),Ss=s("ul",null,[s("li",null,[s("strong",null,"Build Command:"),n(),s("code",null,"yarn docs:build")]),s("li",null,[s("strong",null,"Publish directory:"),n(),s("code",null,"docs/.vuepress/dist")])],-1),Os=n("\u8BBE\u7F6E "),Ms={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},Us=n("Environment variables"),zs=n(" \u6765\u9009\u62E9 Node \u7248\u672C\uFF1A"),Ts=s("ul",null,[s("li",null,[s("code",null,"NODE_VERSION"),n(": 14")])],-1),$s=s("li",null,[s("p",null,"\u70B9\u51FB deploy \u6309\u94AE\u3002")],-1),Ks=s("h2",{id:"vercel",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),n(" Vercel")],-1),Ys=n("\u8BF7\u67E5\u770B "),Js={href:"https://vercel.com/guides/deploying-vuepress-to-vercel",target:"_blank",rel:"noopener noreferrer"},Qs=n("Creating and Deploying a VuePress App with Vercel"),Ws=n("."),Xs=s("h2",{id:"\u4E91\u5F00\u53D1-cloudbase",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E91\u5F00\u53D1-cloudbase","aria-hidden":"true"},"#"),n(" \u4E91\u5F00\u53D1 CloudBase")],-1),Zs={href:"https://cloudbase.net/?site=vuepress",target:"_blank",rel:"noopener noreferrer"},sn=n("\u4E91\u5F00\u53D1 CloudBase"),nn=n(" \u662F\u4E00\u4E2A\u4E91\u539F\u751F\u4E00\u4F53\u5316\u7684 Serverless \u4E91\u5E73\u53F0\uFF0C\u652F\u6301\u9759\u6001\u7F51\u7AD9\u3001\u5BB9\u5668\u7B49\u591A\u79CD\u6258\u7BA1\u80FD\u529B\uFF0C\u5E76\u63D0\u4F9B\u7B80\u4FBF\u7684\u90E8\u7F72\u5DE5\u5177 "),an={href:"https://cloudbase.net/framework.html?site=vuepress",target:"_blank",rel:"noopener noreferrer"},en=n("CloudBase Framework"),ln=n(" \u6765\u4E00\u952E\u90E8\u7F72\u5E94\u7528\u3002"),on=l(`<ol><li>\u5168\u5C40\u5B89\u88C5 CloudBase CLI \uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm install -g @cloudbase/cli</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,2),pn={start:"2"},cn=n("\u5728\u9879\u76EE\u6839\u76EE\u5F55\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E00\u952E\u90E8\u7F72 VuePress \u5E94\u7528\uFF0C\u5728\u90E8\u7F72\u4E4B\u524D\u53EF\u4EE5\u5148 "),tn={href:"https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&tdl_site=vuejs",target:"_blank",rel:"noopener noreferrer"},rn=n("\u5F00\u901A\u73AF\u5883"),Dn=n("\uFF1A"),dn=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">cloudbase init --without-template</span></span>
<span class="line"><span style="color:#D4D4D4;">cloudbase framework:deploy</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>CloudBase CLI \u9996\u5148\u4F1A\u8DF3\u8F6C\u5230\u63A7\u5236\u53F0\u8FDB\u884C\u767B\u5F55\u6388\u6743\uFF0C\u7136\u540E\u5C06\u4F1A\u4EA4\u4E92\u5F0F\u8FDB\u884C\u786E\u8BA4\u3002</p><p>\u786E\u8BA4\u4FE1\u606F\u540E\u4F1A\u7ACB\u5373\u8FDB\u884C\u90E8\u7F72\uFF0C\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u83B7\u5F97\u4E00\u4E2A\u81EA\u52A8 SSL\uFF0CCDN \u52A0\u901F\u7684\u7F51\u7AD9\u5E94\u7528\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u642D\u914D\u4F7F\u7528 GitHub Action \u6765\u6301\u7EED\u90E8\u7F72 GitHub \u4E0A\u7684 VuePress \u5E94\u7528\u3002</p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>cloudbase init --template vuepress</code> \u5FEB\u901F\u521B\u5EFA\u548C\u90E8\u7F72\u4E00\u4E2A\u65B0\u7684 VuePress \u5E94\u7528\u3002</p>`,4),un={class:"custom-container tip"},bn=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),hn=n("\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B CloudBase Framework \u7684"),yn={href:"https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"},_n=n("\u90E8\u7F72\u9879\u76EE\u793A\u4F8B"),mn=s("h2",{id:"_21-\u4E91\u76D2\u5B50",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_21-\u4E91\u76D2\u5B50","aria-hidden":"true"},"#"),n(" 21 \u4E91\u76D2\u5B50")],-1),gn=n("\u8BF7\u67E5\u770B "),Cn={href:"https://www.21yunbox.com/docs/#/deploy-vuepress",target:"_blank",rel:"noopener noreferrer"},En=n("21 \u4E91\u76D2\u5B50 - \u90E8\u7F72\u4E00\u4E2A VuePress \u9759\u6001\u7F51\u9875"),fn=n("\u3002");function kn(vn,qn){const e=p("ExternalLinkIcon"),o=p("RouterLink");return t(),r(i,null,[u,b,s("ul",null,[h,y,s("li",null,[_,s("a",m,[g,a(e)]),C]),E]),f,s("ol",null,[s("li",null,[s("p",null,[k,a(o,{to:"/zh/reference/config.html#base"},{default:c(()=>[v]),_:1}),q]),x]),s("li",null,[s("p",null,[A,s("a",w,[P,a(e)]),j]),B])]),N,s("div",R,[F,s("p",null,[V,s("a",G,[H,a(e)]),I])]),L,s("ol",null,[s("li",null,[s("p",null,[S,a(o,{to:"/zh/reference/config.html#base"},{default:c(()=>[O]),_:1}),M]),U]),s("li",null,[s("p",null,[z,T,$,s("a",K,[Y,a(e)]),J])])]),Q,s("div",W,[X,s("p",null,[Z,s("a",ss,[ns,a(e)]),as])]),es,s("ol",null,[s("li",null,[s("p",null,[ls,s("a",os,[ps,a(e)]),cs])]),ts]),rs,s("div",is,[Ds,s("p",null,[ds,s("a",us,[bs,a(e)]),hs])]),ys,s("ol",null,[s("li",null,[s("p",null,[_s,s("a",ms,[gs,a(e)]),Cs])]),s("li",null,[s("p",null,[s("a",Es,[fs,a(e)]),ks])]),vs]),qs,s("p",null,[xs,s("a",As,[ws,a(e)]),Ps]),js,s("p",null,[Bs,s("a",Ns,[Rs,a(e)]),Fs]),Vs,s("ol",null,[s("li",null,[s("p",null,[Gs,s("a",Hs,[Is,a(e)]),Ls]),Ss]),s("li",null,[s("p",null,[Os,s("a",Ms,[Us,a(e)]),zs]),Ts]),$s]),Ks,s("p",null,[Ys,s("a",Js,[Qs,a(e)]),Ws]),Xs,s("p",null,[s("a",Zs,[sn,a(e)]),nn,s("a",an,[en,a(e)]),ln]),on,s("ol",pn,[s("li",null,[cn,s("a",tn,[rn,a(e)]),Dn])]),dn,s("div",un,[bn,s("p",null,[hn,s("a",yn,[_n,a(e)])])]),mn,s("p",null,[gn,s("a",Cn,[En,a(e)]),fn])],64)}var wn=D(d,[["render",kn]]);export{wn as default};
