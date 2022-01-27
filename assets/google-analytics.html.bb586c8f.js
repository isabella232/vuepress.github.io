import{e as a,k as r,l as c,M as n,K as s,O as i,p as e,P as t}from"./vendor.469fd836.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const d={},_=s("h1",{id:"google-analytics",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#google-analytics","aria-hidden":"true"},"#"),e(" google-analytics")],-1),h=e("Integrate "),u={href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"},g=e("Google Analytics"),D=e(" into VuePress."),y=e("This plugin will import "),m={href:"https://developers.google.com/analytics/devguides/collection/gtagjs",target:"_blank",rel:"noopener noreferrer"},b=e("gtag.js"),f=e(" for "),v={href:"https://support.google.com/analytics/answer/10089681",target:"_blank",rel:"noopener noreferrer"},x=e("Google Analytics 4"),k=e("."),E=t(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-google-analytics@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="reporting-events" tabindex="-1"><a class="header-anchor" href="#reporting-events" aria-hidden="true">#</a> Reporting Events</h2>`,3),w=e("Google Analytics will "),I={href:"https://support.google.com/analytics/answer/9234069",target:"_blank",rel:"noopener noreferrer"},X=e("automatically collect some events"),A=e(", such as "),C=s("code",null,"page_view",-1),G=e(", "),j=s("code",null,"first_visit",-1),B=e(", etc."),N=s("p",null,[e("So if you only want to collect some basic data of your site, you don't need to do anything else except setting the "),s("a",{href:"#id"},"Measurement ID"),e(" correctly.")],-1),M=e("After using this plugin, the global "),T=s("code",null,"gtag()",-1),V=e(" function is available on the "),F=s("code",null,"window",-1),L=e(" object, and you can use it for "),O={href:"https://developers.google.com/analytics/devguides/collection/ga4/events",target:"_blank",rel:"noopener noreferrer"},P=e("custom events reporting"),S=e("."),U=s("h2",{id:"options",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),e(" Options")],-1),K=s("h3",{id:"id",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#id","aria-hidden":"true"},"#"),e(" id")],-1),R=s("li",null,[s("p",null,[e("Type: "),s("code",null,"string")])],-1),Y=s("p",null,"Details:",-1),q=s("p",null,[e("The Measurement ID of Google Analytics 4, which should start with "),s("code",null,"'G-'"),e(".")],-1),z=e("You can follow the instructions "),H={href:"https://support.google.com/analytics/answer/9539598",target:"_blank",rel:"noopener noreferrer"},J=e("here"),Q=e(' to find your Measurement ID. Notice the difference between Google Analytics 4 Measurement ID (i.e. "G-" ID) and Universal Analytics Tracking ID (i.e. "UA-" ID).'),W=s("li",null,[s("p",null,"Example:")],-1),Z=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;@vuepress/plugin-google-analytics&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;G-XXXXXXXXXX&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,1);function $(ss,es){const l=a("NpmBadge"),o=a("ExternalLinkIcon");return r(),c(i,null,[_,n(l,{package:"@vuepress/plugin-google-analytics"}),s("p",null,[h,s("a",u,[g,n(o)]),D]),s("p",null,[y,s("a",m,[b,n(o)]),f,s("a",v,[x,n(o)]),k]),E,s("p",null,[w,s("a",I,[X,n(o)]),A,C,G,j,B]),N,s("p",null,[M,T,V,F,L,s("a",O,[P,n(o)]),S]),U,K,s("ul",null,[R,s("li",null,[Y,q,s("p",null,[z,s("a",H,[J,n(o)]),Q])]),W]),Z],64)}var as=p(d,[["render",$]]);export{as as default};
