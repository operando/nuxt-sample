import {Context} from '@nuxt/types'

export default ({app}: Context, inject: any) => {
  inject('myInjectedFunction', (s: string) => console.log('That was easy!', s))
}
