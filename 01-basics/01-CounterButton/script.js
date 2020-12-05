import Vue from './vue.esm.browser.js';

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события

const app = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        addCount () {
            this.count += 1
        }
    }
})
