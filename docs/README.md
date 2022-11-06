# Big Brother library

Here's a brief introduction.

### Installation

$ npm i vue3-big-brother

### Use

--------
main.js
```
import { createApp } from 'vue';
import App from './App.vue';
import BigBrother from "vue3-big-brother";

createApp(App)
    .use(BigBrother)
    .mount('#app')
```

-----

------
Component
```
<big-brother
:avatar="require('@/assets/brother/animal.png')"
:width="150"
:left-eye="{top: 26, left: 2}"
:right-eye="{top: 13, right: -1}"
:diameter-left-eye="15"
:diameter-right-eye="8"
/>
```
------

### Options
Directive | Type | Description
--- | --- | ---
width | number | Image width in pixels
avatar | require | Url image
left-eye | object | Location of the left eye
right-eye | object | Location of the right eye
diameter-left-eye | number | Eye rotation diameter
diameter-right-eye | number | Eye rotation diameter
