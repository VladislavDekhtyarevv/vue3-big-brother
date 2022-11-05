<template>
  <div class="container-brother">
    <img class="container-brother__image" ref="anchor" :src="avatar ? avatar : `../assets/brother/animal.png`" alt="">
    <div class="container-brother__eye left" ref="leftEye">
      <div class="container-brother__pupil" ref="leftEyePupil"></div>
    </div>
    <div class="container-brother__eye right" ref="rightEye">
      <div class="container-brother__pupil" ref="RightEyePupil"></div>
    </div>
  </div>
</template>



<script setup>
import {ref, onMounted, defineProps} from "vue";
import './styles/index.css'
const props = defineProps({
  avatar: String,
  width: Number,
  leftEye: Object,
  rightEye: Object,
  diameterLeftEye: Number,
  diameterRightEye: Number
})



let avatarDefault = ref('avatar.png');
function getAvatarPath() {
  return require('@/assets/brother/'+ (props.avatar ? props.avatar : avatarDefault.value))
}

let mousePositionX = ref();
let mousePositionY = ref();
const anchor = ref({})
let rect = ref({})
let anchorX = ref(0)
let anchorY = ref(0)
let dy = ref(0)
let dx = ref(0)
let rad = ref(0)
let deg = ref(0)
let angleDeg = ref(0)
let leftEye = ref({})
let rightEye = ref({})


function getParams() {
  rect.value = anchor.value.getBoundingClientRect();
  anchorX.value = rect.value.left + rect.value.width / 2;
  anchorY.value = rect.value.top + rect.value.height / 2;
}

function move(event) {
  mousePositionX.value = event.clientX;
  mousePositionY.value = event.clientY;

  angle(mousePositionX.value, mousePositionY.value,anchorX.value, anchorY.value);

  leftEye.value.style.transform = `rotate(${90 + angleDeg.value}deg)`
  rightEye.value.style.transform = `rotate(${90 + angleDeg.value}deg)`
}

function angle(cx, cy, ex, ey) {
  dy.value = ey - cy;
  dx.value = ex - cx;
  rad.value = Math.atan2(dy.value , dx.value);
  deg.value = rad.value * 180 / Math.PI;

  angleDeg.value = deg.value;
}

function setStyles() {
  anchor.value.style.width = `${props.width}px`;

  leftEye.value.style.top = `${props.leftEye.top}%`
  leftEye.value.style.left = `${props.leftEye.left}%`
  leftEye.value.style.width = `${props.diameterLeftEye}px`
  leftEye.value.style.height = `${props.diameterLeftEye}px`

  rightEye.value.style.top = `${props.rightEye.top}%`
  rightEye.value.style.right = `${props.rightEye.right}%`
  rightEye.value.style.width = `${props.diameteRightEye}px`
  rightEye.value.style.height = `${props.diameteRightEye}px`
}

onMounted(() => {
  setStyles();
  getParams();
  window.addEventListener('mousemove', move);
})


</script>

<style>
.container-brother {
  margin: auto;
  display: flex;
  position: relative;
  width: max-content;
}

.container-brother__image {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
}
.container-brother__eye {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: transparent;
  z-index: 2;
  top: 24%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.container-brother__pupil {
  width: 5px;
  height: 5px;
  background-color: black;
  border-radius: 50%;
}
.container-brother__eye.left {
  left: 35%;
}
.container-brother__eye.left {
  right: 35%;
}
</style>

