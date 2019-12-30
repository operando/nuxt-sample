# nuxt-sample

## installation

https://nuxtjs.org/guide/installation


## nuxt.config.js

### srcDir

```
srcDir: 'src/',
```


### router

Nuxt.js のデフォルトの Vue Router 設定を上書きする


## Nuxt TypeScript

https://typescript.nuxtjs.org/


## How to use CSS pre-processors?

https://nuxtjs.org/faq/pre-processors/


## Nuxtのデフォルトのwebpackの設定ファイル

https://github.com/nuxt/nuxt.js/blob/dev/packages/webpack/src/config/base.js


## url-loader

https://github.com/webpack-contrib/url-loader

> 指定した閾値よりも小さい場合に、Base64 データ URL として条件付きでファイルに埋め込むことができます。
> これにより、小さなファイル取得のための HTTP リクエスト数を減らすことができます。
> もし閾値よりも大きい場合は、file-loader に自動的にフォールバックします。

つまり、設定いじれば、サイズの閾値を変えられるってこと
デフォルトの閾値は1KBみたい
以下のファイル参照すれば設定がわかる
https://github.com/nuxt/nuxt.js/blob/dev/packages/webpack/src/config/base.js

設定を変えたかったら、build.extendで変える
https://nuxtjs.org/api/configuration-build#extend

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
