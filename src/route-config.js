export function configRouter (router) {
  // normal routes
  router.map({
    // basic example
    '/': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/home.vue'),
      subRoutes: {
        '': {
          name: 'booklist',
          component: require('./components/booklist.vue')
        },
        '/return': {
          name: 'return',
          component: require('./components/return.vue')
        },
        '/register': {
          name: 'register',
          component: require('./components/register.vue')
        },
        '/class/:id': {
          name: 'class',
          component: require('./components/classsearch.vue')
        },
        '/userdetail/:id': {
          name: 'detail',
          component: require('./components/userdetail.vue')
        },
        '/record/:id': {
          name: 'record',
          component: require('./components/userrecord.vue')
        },
      }
    },
    
    // not found handler
    '*': {
      component: require('./components/home.vue')
    }
  })

  // redirect
  router.redirect({
  })

  // global beforen
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()

}