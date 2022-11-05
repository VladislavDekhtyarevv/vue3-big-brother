import { ref, onMounted, openBlock, createElementBlock, createElementVNode } from 'vue';

const _hoisted_1 = { class: "container-brother" };
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  class: "container-brother__pupil",
  ref: "leftEyePupil"
};
const _hoisted_4 = {
  class: "container-brother__pupil",
  ref: "RightEyePupil"
};

var script = {
  __name: 'BigBrother',
  props: {
  avatar: String,
  width: Number,
  leftEye: Object,
  rightEye: Object,
  diameterLeftEye: Number,
  diameterRightEye: Number
},
  setup(__props) {

const props = __props;





ref('avatar.png');

let mousePositionX = ref();
let mousePositionY = ref();
const anchor = ref({});
let rect = ref({});
let anchorX = ref(0);
let anchorY = ref(0);
let dy = ref(0);
let dx = ref(0);
let rad = ref(0);
let deg = ref(0);
let angleDeg = ref(0);
let leftEye = ref({});
let rightEye = ref({});


function getParams() {
  rect.value = anchor.value.getBoundingClientRect();
  anchorX.value = rect.value.left + rect.value.width / 2;
  anchorY.value = rect.value.top + rect.value.height / 2;
}

function move(event) {
  mousePositionX.value = event.clientX;
  mousePositionY.value = event.clientY;

  angle(mousePositionX.value, mousePositionY.value,anchorX.value, anchorY.value);

  leftEye.value.style.transform = `rotate(${90 + angleDeg.value}deg)`;
  rightEye.value.style.transform = `rotate(${90 + angleDeg.value}deg)`;
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

  leftEye.value.style.top = `${props.leftEye.top}%`;
  leftEye.value.style.left = `${props.leftEye.left}%`;
  leftEye.value.style.width = `${props.diameterLeftEye}px`;
  leftEye.value.style.height = `${props.diameterLeftEye}px`;

  rightEye.value.style.top = `${props.rightEye.top}%`;
  rightEye.value.style.right = `${props.rightEye.right}%`;
  rightEye.value.style.width = `${props.diameteRightEye}px`;
  rightEye.value.style.height = `${props.diameteRightEye}px`;
}

onMounted(() => {
  setStyles();
  getParams();
  window.addEventListener('mousemove', move);
});



return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("img", {
      class: "container-brother__image",
      ref_key: "anchor",
      ref: anchor,
      src: __props.avatar ? __props.avatar : `../assets/brother/animal.png`,
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_2),
    createElementVNode("div", {
      class: "container-brother__eye left",
      ref_key: "leftEye",
      ref: leftEye
    }, [
      createElementVNode("div", _hoisted_3, null, 512 /* NEED_PATCH */)
    ], 512 /* NEED_PATCH */),
    createElementVNode("div", {
      class: "container-brother__eye right",
      ref_key: "rightEye",
      ref: rightEye
    }, [
      createElementVNode("div", _hoisted_4, null, 512 /* NEED_PATCH */)
    ], 512 /* NEED_PATCH */)
  ]))
}
}

};

script.__file = "src/BigBrother.vue";

// import components from'./components'

const plugin = {
    install (Vue) {
        // for (const prop in components) {
        //     if (components.hasOwnProperty(prop)) {
        //         const component = components[prop]
        //         Vue.component(component.name, component)
        //     }
        // }
        Vue.component('BigBrother', script);
    }
};

export { plugin as default };
