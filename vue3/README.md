# pages-shared-state-vue3

## Demonstration aim
I am trying to iteratively replace .cshtml razor views with what I wanted to call Vue "mini-apps". Which should be somewhere in between a micro-frontend and a classic SPA. The aim is to share some of the code base, mainly dependencies. Compile a common ```chunk-vendors.js``` and have the "mini-apps" as separate javascript entry files to place on appropriate views. As performance demand would grow, I would progress into splitting ```chunk-vendors.js``` and optimize via lazy-loading.

The problem I am hitting here is trying to make two root Vue instances talk to each other through a shared state. Right now only the app that is imported/mounted first stays reactive. I have considered sessionStorage/localStorage, the problem is that the 'storage' events are only triggered across tabs and not within one document [first |Note](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event). I would have to trigger a custom event or play around with iframes. Feels too hacky, but that might be an axiom here. I imagined that my problem was in the Vue 2 reactivity system/how Vuex binds itself to a concrete Vue instance. When I implemented a primitive store, the situation ended up being exactly the same.

What confuses me about this is that if I were to instantiate two applications in a single main.js entry file, the store sharing would just work. Which suggest that Vue is either creating some kind of hidden root instance or that my Vuex code analysis deduction of it binding to a concrete instance was incorrect.

I am trying to avoid it, but I might have to always run a "coordinator" root instance that will check the presence of certain elements on a page and load/unload the "mini-apps" as components using something like [portal-vue](https://github.com/LinusBorg/portal-vue) when needed. That coordinator would also contain a state with modules, some of which would be marked as "shared" thus operations from multiple "mini-apps" would be allowed (ownership flag check).


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

then open /index.html

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
