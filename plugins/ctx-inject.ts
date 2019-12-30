import {Context} from '@nuxt/types';

export default ({app}: Context, inject: any) => {
  app.myInjectedFunction = (string: string) => console.log('Okay, another function', string)
}

