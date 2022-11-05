// import components from'./components'
import BigBrother from "./BigBrother.vue";

const plugin = {
    install (Vue) {
        // for (const prop in components) {
        //     if (components.hasOwnProperty(prop)) {
        //         const component = components[prop]
        //         Vue.component(component.name, component)
        //     }
        // }
        Vue.component('BigBrother', BigBrother)
    }
}

export default plugin
