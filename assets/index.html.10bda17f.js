import{_ as e,o as t,c as i,a as r}from"./app.848a0151.js";const d={},a=r(`<h1 id="big-brother-library" tabindex="-1"><a class="header-anchor" href="#big-brother-library" aria-hidden="true">#</a> Big Brother library</h1><p>Here&#39;s a brief introduction.</p><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3><p>$ npm i vue3-big-brother</p><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h3><hr><p>main.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { createApp } from &#39;vue&#39;;
import App from &#39;./App.vue&#39;;
import BigBrother from &quot;vue3-big-brother&quot;;

createApp(App)
    .use(BigBrother)
    .mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><hr><p>Component</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;big-brother
:avatar=&quot;require(&#39;@/assets/brother/animal.png&#39;)&quot;
:width=&quot;150&quot;
:left-eye=&quot;{top: 26, left: 2}&quot;
:right-eye=&quot;{top: 13, right: -1}&quot;
:diameter-left-eye=&quot;15&quot;
:diameter-right-eye=&quot;8&quot;
/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><table><thead><tr><th>Directive</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>width</td><td>number</td><td>Image width in pixels</td></tr><tr><td>avatar</td><td>require</td><td>Url image</td></tr><tr><td>left-eye</td><td>object</td><td>Location of the left eye</td></tr><tr><td>right-eye</td><td>object</td><td>Location of the right eye</td></tr><tr><td>diameter-left-eye</td><td>number</td><td>Eye rotation diameter</td></tr><tr><td>diameter-right-eye</td><td>number</td><td>Eye rotation diameter</td></tr></tbody></table>`,15),n=[a];function o(s,l){return t(),i("div",null,n)}const u=e(d,[["render",o],["__file","index.html.vue"]]);export{u as default};
