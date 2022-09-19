import{_ as s,o as n,c as a,a as l}from"./app.382bac91.js";const F=JSON.parse('{"title":"\u524D\u7AEF\u6587\u6863doc","description":"","frontmatter":{"title":"\u524D\u7AEF\u6587\u6863doc","editLink":true},"headers":[{"level":2,"title":"GIT\u8FDE\u63A5\u8FDC\u7A0B\u5E93","slug":"git\u8FDE\u63A5\u8FDC\u7A0B\u5E93","link":"#git\u8FDE\u63A5\u8FDC\u7A0B\u5E93","children":[]},{"level":2,"title":"GIT\u64A4\u9500commit","slug":"git\u64A4\u9500commit","link":"#git\u64A4\u9500commit","children":[]},{"level":2,"title":"GIT\u4FEE\u6539commit\u4FE1\u606F","slug":"git\u4FEE\u6539commit\u4FE1\u606F","link":"#git\u4FEE\u6539commit\u4FE1\u606F","children":[]},{"level":2,"title":"GIT\u5207\u6362\u5206\u652F \u4E0D\u751F\u6210commit\u8BB0\u5F55","slug":"git\u5207\u6362\u5206\u652F-\u4E0D\u751F\u6210commit\u8BB0\u5F55","link":"#git\u5207\u6362\u5206\u652F-\u4E0D\u751F\u6210commit\u8BB0\u5F55","children":[]},{"level":2,"title":"\u6E05\u9664\u8FDC\u7A0B\u5206\u652F","slug":"\u6E05\u9664\u8FDC\u7A0B\u5206\u652F","link":"#\u6E05\u9664\u8FDC\u7A0B\u5206\u652F","children":[]},{"level":2,"title":"\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730","slug":"\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730","link":"#\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730","children":[]},{"level":2,"title":"\u67E5\u770B\u6587\u4EF6\u4FEE\u6539\u8BB0\u5F55","slug":"\u67E5\u770B\u6587\u4EF6\u4FEE\u6539\u8BB0\u5F55","link":"#\u67E5\u770B\u6587\u4EF6\u4FEE\u6539\u8BB0\u5F55","children":[]},{"level":2,"title":"GIT\u63D0\u4EA4\u89C4\u8303","slug":"git\u63D0\u4EA4\u89C4\u8303","link":"#git\u63D0\u4EA4\u89C4\u8303","children":[]}],"relativePath":"leadDoc/\u6280\u5DE7Git.md"}'),p={name:"leadDoc/\u6280\u5DE7Git.md"},o=l(`<h1 id="git\u6280\u5DE7" tabindex="-1">GIT\u6280\u5DE7 <a class="header-anchor" href="#git\u6280\u5DE7" aria-hidden="true">#</a></h1><h2 id="git\u8FDE\u63A5\u8FDC\u7A0B\u5E93" tabindex="-1">GIT\u8FDE\u63A5\u8FDC\u7A0B\u5E93 <a class="header-anchor" href="#git\u8FDE\u63A5\u8FDC\u7A0B\u5E93" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5173\u8054\u4E00\u4E2A\u8FDC\u7A0B\u5E93\uFF0C\u4F7F\u7528\u547D\u4EE4git remote add origin git@server</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">repo</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">git</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5173\u8054\u540E\uFF0C\u4F7F\u7528\u547D\u4EE4git push </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">u origin master\u7B2C\u4E00\u6B21\u63A8\u9001master\u5206\u652F\u7684\u6240\u6709\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679Cpush\u5931\u8D25\uFF0C\u8BF7\u5148pull\u4E00\u4E0B\u8FDC\u7A0B\u5E93</span></span>
<span class="line"><span style="color:#FFCB6B;">\u5982\u679Cpull\u51FA\u73B0fatal</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> refusing to merge unrelated histories\uFF0C\u4F7F\u7528\u547D\u4EE4git pull origin master </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">allow</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">unrelated</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">histories</span></span>
<span class="line"></span></code></pre></div><h2 id="git\u64A4\u9500commit" tabindex="-1">GIT\u64A4\u9500commit <a class="header-anchor" href="#git\u64A4\u9500commit" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5DF2\u63D0\u4EA4commit\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F7F\u7528\u547D\u4EE4 git reset </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">soft HEAD</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;"> \u64A4\u56DE\u5230commit\u4E4B\u524D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u81F3\u4E8E\u8FD9\u51E0\u4E2A\u53C2\u6570\uFF1A</span></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">mixed </span></span>
<span class="line"><span style="color:#A6ACCD;">\u610F\u601D\u662F\uFF1A\u4E0D\u5220\u9664\u5DE5\u4F5C\u7A7A\u95F4\u6539\u52A8\u4EE3\u7801\uFF0C\u64A4\u9500commit\uFF0C\u5E76\u4E14\u64A4\u9500git add </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> \u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FD9\u4E2A\u4E3A\u9ED8\u8BA4\u53C2\u6570</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">git reset </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">mixed HEAD</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;"> \u548C git reset HEAD</span><span style="color:#89DDFF;">^</span><span style="color:#A6ACCD;"> \u6548\u679C\u662F\u4E00\u6837\u7684\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">soft  </span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E0D\u5220\u9664\u5DE5\u4F5C\u7A7A\u95F4\u6539\u52A8\u4EE3\u7801\uFF0C\u64A4\u9500commit\uFF0C\u4E0D\u64A4\u9500git add </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">hard</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5220\u9664\u5DE5\u4F5C\u7A7A\u95F4\u6539\u52A8\u4EE3\u7801\uFF0C\u64A4\u9500commit\uFF0C\u64A4\u9500git add </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u610F\u5B8C\u6210\u8FD9\u4E2A\u64CD\u4F5C\u540E\uFF0C\u5C31\u6062\u590D\u5230\u4E86\u4E0A\u4E00\u6B21\u7684commit\u72B6\u6001\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u4F7F\u7528\u547D\u4EE4 git reset HEAD </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> to unstage</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F7F\u7528\u547D\u4EE4 git checkout </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u64A4\u56DE</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6587\u4EF6\u5230\u672A\u6539\u52A8\u4E4B\u524D\uFF08git checkout </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> \u64A4\u56DE\u6240\u6709\u6539\u52A8\u7684\u6587\u4EF6\uFF09</span></span>
<span class="line"></span></code></pre></div><h2 id="git\u4FEE\u6539commit\u4FE1\u606F" tabindex="-1">GIT\u4FEE\u6539commit\u4FE1\u606F <a class="header-anchor" href="#git\u4FEE\u6539commit\u4FE1\u606F" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u547D\u4EE4\uFF1Agit commit </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">amend</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u573A\u666F\u4E00\uFF1Agit commit </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m \u63D0\u4EA4\u4E4B\u540E\uFF0C\u53D1\u73B0</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m\u7684\u8BF4\u660E\u6587\u5B57\u5199\u7684\u6709\u95EE\u9898\uFF0C\u60F3\u8981\u91CD\u65B0\u5199\u4E00\u6B21\uFF0C\u4E5F\u5C31\u662F\u60F3\u64A4\u9500\u4E0A\u6B21\u7684\u63D0\u4EA4\u52A8\u4F5C\uFF0C\u91CD\u65B0\u63D0\u4EA4\u4E00\u6B21\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u573A\u666F\u4E8C\uFF1A\u63D0\u4EA4\u4EE3\u7801\u65F6\uFF0C\u53D1\u73B0\u63D0\u4EA4\u7684\u6587\u4EF6\u4E2D\u9700\u8981\u4FEE\u6539\u6216\u8005\u8FD8\u6709\u6587\u4EF6\u672A\u4FEE\u6539\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">amend \u91CD\u65B0\u63D0\u4EA4\u662F\u5728\u65E5\u5FD7\u770B\u4E0D\u5230\u64CD\u4F5C\u8BB0\u5F55\u7684\u3002</span></span>
<span class="line"></span></code></pre></div><h2 id="git\u5207\u6362\u5206\u652F-\u4E0D\u751F\u6210commit\u8BB0\u5F55" tabindex="-1">GIT\u5207\u6362\u5206\u652F \u4E0D\u751F\u6210commit\u8BB0\u5F55 <a class="header-anchor" href="#git\u5207\u6362\u5206\u652F-\u4E0D\u751F\u6210commit\u8BB0\u5F55" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">stash\u547D\u4EE4\u53EF\u7528\u4E8E\u4E34\u65F6\u4FDD\u5B58\u548C\u56DE\u590D\u4FEE\u6539\uFF0C\u53EF\u8DE8\u5206\u652F\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u610F\uFF1A\uFF1A\u5728add\u4E4B\u524D\u624D\u80FD\u6267\u884Cstash\uFF01\uFF01\uFF01\uFF01</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> git stash save </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">message \u662F\u672C\u6B21\u6682\u5B58\u4FE1\u606F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> git stash list</span></span>
<span class="line"><span style="color:#A6ACCD;">\u67E5\u770B\u6240\u6709\u4FDD\u5B58\u7684\u8BB0\u5F55\u5217\u8868</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> git stash pop stash@</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6062\u590D\uFF0Cnum\u662F\u53EF\u9009\u9879\uFF0C\u901A\u8FC7git stash list\u53EF\u67E5\u770B\u5177\u4F53\u503C\u3002\u53EA\u80FD\u6062\u590D\u4E00\u6B21</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> git stash apply stash@</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6062\u590D\uFF0Cnum\u662F\u53EF\u9009\u9879\uFF0C\u901A\u8FC7git stash list\u53EF\u67E5\u770B\u5177\u4F53\u503C\u3002\u53EF\u56DE\u590D\u591A\u6B21</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> git stash drop stash@</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5220\u9664\u67D0\u4E2A\u4FDD\u5B58\uFF0Cnum\u662F\u53EF\u9009\u9879\uFF0C\u901A\u8FC7git stash list\u53EF\u67E5\u770B\u5177\u4F53\u503C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> git stash clear</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5220\u9664\u6240\u6709\u4FDD\u5B58</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6E05\u9664\u8FDC\u7A0B\u5206\u652F" tabindex="-1">\u6E05\u9664\u8FDC\u7A0B\u5206\u652F <a class="header-anchor" href="#\u6E05\u9664\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">git remote prune origin</span></span>
<span class="line"></span></code></pre></div><h2 id="\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730" tabindex="-1">\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730 <a class="header-anchor" href="#\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5230\u672C\u5730" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">git fetch origin dev\uFF08dev\u4E3A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u5206\u652F\u540D\uFF09</span></span>
<span class="line"></span></code></pre></div><h2 id="\u67E5\u770B\u6587\u4EF6\u4FEE\u6539\u8BB0\u5F55" tabindex="-1">\u67E5\u770B\u6587\u4EF6\u4FEE\u6539\u8BB0\u5F55 <a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6\u4FEE\u6539\u8BB0\u5F55" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u53EA\u67E5\u6587\u4EF6\u4E2D\u67D0\u4E00\u90E8\u5206\u7531\u8C01\u6240\u5199\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">git blame \u6587\u4EF6\u540D </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u67E5\u627E\u8BCD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216 </span></span>
<span class="line"><span style="color:#A6ACCD;"> git blame \u6587\u4EF6\u540D </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">L a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">L </span><span style="color:#82AAFF;">\u53C2\u6570\u8868\u793A\u540E\u9762\u63A5\u7684\u662F\u884C\u53F7</span><span style="color:#A6ACCD;">(Line)\uFF0C a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b\u4EE3\u8868\u67E5\u8BE2\u6587\u4EF6\u7684\u7B2Ca\u884C\u5230\u7B2Cb\u884C\u4E4B\u95F4\u7684\u6587\u4EF6\u5185\u5BB9\u60C5\u51B5\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> \u5219\u4EE3\u8868\u4ECE\u7B2Ca\u884C\u5230\u6587\u4EF6\u7ED3\u5C3E</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b\u5219\u4EE3\u8868\u4ECE\u6587\u4EF6\u5F00\u5934\u5230\u7B2Cb\u884C\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u4F8B\u5B50\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">git blame webpack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mix</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mix Asset</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216</span></span>
<span class="line"><span style="color:#A6ACCD;">git blame webpack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mix</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">L </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u7528\u6CD5\uFF1Agit blame [</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">\u9009\u9879</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">] [</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">\u7248\u672C\u9009\u9879</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">] [</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">\u7248\u672C</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">] [--] </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">\u7248\u672C\u9009\u9879</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u7684\u6587\u6863\u8BB0\u5F55\u5728 git-rev-list(1) \u4E2D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    --incremental         \u589E\u91CF\u5F0F\u5730\u663E\u793A\u53D1\u73B0\u7684 blame \u6761\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">    -b                    \u8FB9\u754C\u63D0\u4EA4\u663E\u793A\u7A7A\u7684 SHA-1\uFF08\u9ED8\u8BA4\uFF1A\u5173\u95ED\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    --root                \u4E0D\u628A\u6839\u63D0\u4EA4\u4F5C\u4E3A\u8FB9\u754C\uFF08\u9ED8\u8BA4\uFF1A\u5173\u95ED\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    --show-stats          \u663E\u793A\u547D\u4EE4\u6D88\u8017\u7EDF\u8BA1</span></span>
<span class="line"><span style="color:#A6ACCD;">    --progress            \u5F3A\u5236\u8FDB\u5EA6\u663E\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">    --score-debug         \u663E\u793A\u5224\u65AD blame \u6761\u76EE\u4F4D\u79FB\u7684\u5F97\u5206\u8BCA\u65AD\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">    -f, --show-name       \u663E\u793A\u539F\u59CB\u6587\u4EF6\u540D\uFF08\u9ED8\u8BA4\uFF1A\u81EA\u52A8\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    -n, --show-number     \u663E\u793A\u539F\u59CB\u7684\u884C\u53F7\uFF08\u9ED8\u8BA4\uFF1A\u5173\u95ED\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    -p, --porcelain       \u663E\u793A\u4E3A\u4E00\u4E2A\u9002\u5408\u673A\u5668\u8BFB\u53D6\u7684\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    --line-porcelain      \u4E3A\u6BCF\u4E00\u884C\u663E\u793A\u673A\u5668\u9002\u7528\u7684\u63D0\u4EA4\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">    -c                    \u4F7F\u7528\u548C git-annotate \u76F8\u540C\u7684\u8F93\u51FA\u6A21\u5F0F\uFF08\u9ED8\u8BA4\uFF1A\u5173\u95ED\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    -t                    \u663E\u793A\u539F\u59CB\u65F6\u95F4\u6233\uFF08\u9ED8\u8BA4\uFF1A\u5173\u95ED\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    -l                    \u663E\u793A\u957F\u7684 SHA1 \u63D0\u4EA4\u53F7\uFF08\u9ED8\u8BA4\uFF1A\u5173\u95ED\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    -s                    \u9690\u85CF\u4F5C\u8005\u540D\u5B57\u548C\u65F6\u95F4\u6233\uFF08\u9ED8\u8BA4\uFF1A\u5173\u95ED\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e, --show-email      \u663E\u793A\u4F5C\u8005\u7684\u90AE\u7BB1\u800C\u4E0D\u662F\u540D\u5B57\uFF08\u9ED8\u8BA4\uFF1A\u5173\u95ED\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    -w                    \u5FFD\u7565\u7A7A\u767D\u5DEE\u5F02</span></span>
<span class="line"><span style="color:#A6ACCD;">    --indent-heuristic    \u4F7F\u7528\u4E00\u4E2A\u8BD5\u9A8C\u6027\u7684\u542F\u53D1\u5F0F\u7B97\u6CD5\u6539\u8FDB\u5DEE\u5F02\u663E\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">    --minimal             \u82B1\u8D39\u989D\u5916\u7684\u5FAA\u73AF\u6765\u627E\u5230\u66F4\u597D\u7684\u5339\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">    -S </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">             \u4F7F\u7528\u6765\u81EA </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u7684\u4FEE\u8BA2\u96C6\u800C\u4E0D\u662F\u8C03\u7528 git-rev-list</span></span>
<span class="line"><span style="color:#A6ACCD;">    --contents </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">     \u4F7F\u7528 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">\u6587\u4EF6</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u7684\u5185\u5BB9\u4F5C\u4E3A\u6700\u7EC8\u7684\u56FE\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">    -C[</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">\u5F97\u5206</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">]            \u627E\u5230\u6587\u4EF6\u5185\u53CA\u8DE8\u6587\u4EF6\u7684\u884C\u62F7\u8D1D</span></span>
<span class="line"><span style="color:#A6ACCD;">    -M[</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">\u5F97\u5206</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">]            \u627E\u5230\u6587\u4EF6\u5185\u53CA\u8DE8\u6587\u4EF6\u7684\u884C\u79FB\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">    -L &lt;n,m&gt;              \u53EA\u5904\u7406\u884C\u8303\u56F4\u5728 n \u548C m \u4E4B\u95F4\u7684\uFF0C\u4ECE 1 \u5F00\u59CB</span></span>
<span class="line"><span style="color:#A6ACCD;">    --abbrev[=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">]        \u7528 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u4F4D\u6570\u5B57\u663E\u793A SHA-1 \u54C8\u5E0C\u503C</span></span>
<span class="line"></span></code></pre></div><h2 id="git\u63D0\u4EA4\u89C4\u8303" tabindex="-1">GIT\u63D0\u4EA4\u89C4\u8303 <a class="header-anchor" href="#git\u63D0\u4EA4\u89C4\u8303" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">feat \u589E\u52A0\u65B0\u529F\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;">fix \u4FEE\u590D\u95EE\u9898</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">BUG</span></span>
<span class="line"><span style="color:#A6ACCD;">style \u4EE3\u7801\u98CE\u683C\u76F8\u5173\u65E0\u5F71\u54CD\u8FD0\u884C\u7ED3\u679C\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">perf \u4F18\u5316</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\u6027\u80FD\u63D0\u5347</span></span>
<span class="line"><span style="color:#A6ACCD;">refactor \u91CD\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">revert \u64A4\u9500\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">test \u6D4B\u8BD5\u76F8\u5173</span></span>
<span class="line"><span style="color:#A6ACCD;">docs \u6587\u6863</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\u6CE8\u91CA</span></span>
<span class="line"><span style="color:#A6ACCD;">chore \u4F9D\u8D56\u66F4\u65B0</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\u811A\u624B\u67B6\u914D\u7F6E\u4FEE\u6539\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;">workflow \u5DE5\u4F5C\u6D41\u6539\u8FDB</span></span>
<span class="line"><span style="color:#A6ACCD;">ci \u6301\u7EED\u96C6\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">mod \u4E0D\u786E\u5B9A\u5206\u7C7B\u7684\u4FEE\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">wip \u5F00\u53D1\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">types \u7C7B\u578B\u4FEE\u6539</span></span>
<span class="line"></span></code></pre></div>`,17),e=[o];function t(c,r,D,i,C,A){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
