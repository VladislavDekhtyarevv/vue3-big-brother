<template><div><h1 id="big-brother-library" tabindex="-1"><a class="header-anchor" href="#big-brother-library" aria-hidden="true">#</a> Big Brother library</h1>
<p>Here's a brief introduction.</p>
<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3>
<p>$ npm i vue3-big-brother</p>
<h3 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h3>
<hr>
<p>main.js</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import { createApp } from 'vue';
import App from './App.vue';
import BigBrother from "vue3-big-brother";

createApp(App)
    .use(BigBrother)
    .mount('#app')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<hr>
<p>Component</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;big-brother
:avatar="require('@/assets/brother/animal.png')"
:width="150"
:left-eye="{top: 26, left: 2}"
:right-eye="{top: 13, right: -1}"
:diameter-left-eye="15"
:diameter-right-eye="8"
/>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3>
<table>
<thead>
<tr>
<th>Directive</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>number</td>
<td>Image width in pixels</td>
</tr>
<tr>
<td>avatar</td>
<td>require</td>
<td>Url image</td>
</tr>
<tr>
<td>left-eye</td>
<td>object</td>
<td>Location of the left eye</td>
</tr>
<tr>
<td>right-eye</td>
<td>object</td>
<td>Location of the right eye</td>
</tr>
<tr>
<td>diameter-left-eye</td>
<td>number</td>
<td>Eye rotation diameter</td>
</tr>
<tr>
<td>diameter-right-eye</td>
<td>number</td>
<td>Eye rotation diameter</td>
</tr>
</tbody>
</table>
</div></template>


