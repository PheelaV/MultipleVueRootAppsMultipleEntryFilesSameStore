# pages-shared-state

## Demonstration aim
I am trying to iteratively replace .cshtml razor views with what I wanted to call Vue "mini-apps". Which should be somewhere in between a micro-frontend and a classic SPA. The aim is to share some of the code base, mainly dependencies. Compile a common ```chunk-vendors.js``` and have the "mini-apps" as separate javascript entry files to place on appropriate views. As performance demand would grow, I would progress into splitting ```chunk-vendors.js``` and optimize via lazy-loading.

The problem I am hitting here is trying to make two root Vue instances talk to each other through a shared state. Right now only the app that is imported/mounted first stays reactive. I thought that my problem was in the Vue 2 reactivity system/how Vuex binds itself to a concrete Vue instance [here](https://github.com/vuejs/vuex/blob/80b77429ff8a581a0f41aaea5c9574d7c5500efe/src/store.js#L548). When I implemented a primitive store, the situation ended up being exactly the same.

What confuses me about this is that if I were to instantiate two applications in a single main.js entry file, the store sharing would just work. Which suggest that Vue is either creating some kind of hidden root instance or that my Vuex code analysis deduction of it binding to a concrete instance was incorrect.

I would highly appreciate it if someone could tell me why this can't work, optionally suggest a workaround?

I have created a **reproduction** both in Vue 2 with Vuex and in Vue 3 with composition API/primitiveStoreImplementation [here](https://github.com/PheelaV/MultipleVueRootAppsMultipleEntryFilesSameStore). Vue-cli is building the app in an MPA mode with pages specified in vue.config.json, then imported in the root index.html file. The store is initialised once and saved for later check/loading on the ```window``` object. In context of asp/razor I would have webpack set up as to remove the reduntant files, only leaving javascript bunldes. Also dev proxy that would proxy everything except path to the script bundles. All of this is removed for the same of the demonstration.

*(once I find a solution I hope to replace the source link with specific code snippets)*

**Options considered:**

I am trying to avoid it, but I might have to always run a "coordinator" root instance that will check the presence of certain elements on a page and load/unload the "mini-apps" as components using something like [portal-vue](https://github.com/LinusBorg/portal-vue) when needed. That coordinator would also contain a state with modules, some of which would be marked as "shared" thus operations from multiple "mini-apps" would be allowed (ownership flag check).

I have considered sessionStorage/localStorage, the problem is that the 'storage' events are only triggered across tabs and not within one document [first |Note](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event). I would have to trigger a custom event or play around with iframes. Feels too hacky, but that might be an axiom here. It would also duplicate the same state across many store instances.

**These are some relevant articles I have found on this topic:**

Probably closest to what I am trying to achieve:
[Using Vuex with multiple Vue instances](https://forum.vuejs.org/t/using-vuex-with-multiple-vue-instances/39456)

Same but different:
[Build Vue microfrontend app (with routing and vuex store)](https://stackoverflow.com/questions/59580079/build-vue-microfrontend-app-with-routing-and-vuex-store)

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
