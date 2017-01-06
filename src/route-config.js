export function configRouter (router) {
  // normal routes
  router.map({
    // basic example
    '/home': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/home.vue')
    },
    '/borrow': {
      component: require('./components/borrow.vue')
    },
    '/return': {
      component: require('./components/return.vue')
    },
    '/class/:id': {
      name: 'class',
      component: require('./components/classsearch.vue')
    },
    '/userdetail/:id': {
      name: 'userdetail',
      component: require('./components/userdetail.vue')
    },
    '/record/:id': {
      name: 'record',
      component: require('./components/userrecord.vue')
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