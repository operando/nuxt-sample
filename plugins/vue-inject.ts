import Vue from 'vue'

// 全ての Vue コンポーネントで関数を使用することができる
Vue.prototype.$myInjectedFunction = (string: string) => console.log('This is an example', string)
