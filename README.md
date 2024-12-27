# Nuxt Server Query Params Error Reproduction

The following is a reproduction of the following Nuxt issue https://github.com/nuxt/nuxt/issues/30368

# Description of reproduction
To see the bug go to the route `/example-2?foo=bar` and to see the solution go the route `/example-1?foo=bar`

It turns out that when have the following route rule:

```
'/example-2': {
      ssr: true,
      experimentalNoScripts: true,
      prerender: true
}
```
The query search parameters dont show but if you remove the `experimetalNoScript` property or change the `prerender` to `false` then the query search parameters work.

