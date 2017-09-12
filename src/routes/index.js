/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */


/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: require('@/pages/home/index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Home
  {
    path: '/buyside',
    name: 'home.buyside',
    component: require('@/pages/buyside/index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // Account
  {
    path: '/account',
    name: 'account.index',
    component: require('@/pages/account/index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: require('@/pages/login/index.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: require('@/pages/register/index.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true,
    },
  },
  // Forgot password
  {
    path: '/forgot',
    name: 'login.forgot',
    component: require('@/pages/register/forgot.vue'),

    // If the user needs to be a guest to view this page
    meta: {
      guest: true,
    },
  },

  // Project main
  {
    path: '/project/:projectId',
    name: 'project.index',
    component: require('@/pages/project/index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // Project recent updates
  {
    path: '/project/:projectId/todos',
    name: 'project.todos',
    component: require('@/pages/project/todos.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // Project user access
  {
    path: '/project/:projectId/access',
    name: 'project.access',
    component: require('@/pages/project/access.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // client notifications
  {
    path: '/project/:projectId/questions',
    name: 'project.questions',
    component: require('@/pages/project/questions.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // target information
  {
    path: '/project/:projectId/information',
    name: 'project.information',
    component: require('@/pages/project/information.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // target valuation
  {
    path: '/project/:projectId/valuation',
    name: 'project.valuation',
    component: require('@/pages/project/valuation.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // List of parties
  {
    path: '/project/:projectId/party',
    name: 'project.party',
    component: require('@/pages/project/party.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // Teaser
  {
    path: '/project/:projectId/teaser',
    name: 'project.teaser',
    component: require('@/pages/project/teaser.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // Teaser wizard
  {
    path: '/project/:projectId/wizard',
    name: 'project.wizard',
    component: require('@/pages/project/wizard.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // Teaser distribution
  {
    path: '/project/:projectId/distribution',
    name: 'project.distribution',
    component: require('@/pages/project/distribution.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // Teaser tracking
  {
    path: '/project/:projectId/tracking',
    name: 'project.tracking',
    component: require('@/pages/project/tracking.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // NDA
  {
    path: '/project/:projectId/nda',
    name: 'project.ndas',
    component: require('@/pages/project/nda.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // Offers tracking
  {
    path: '/project/:projectId/offers',
    name: 'project.offers',
    component: require('@/pages/project/offers.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  // Buyer detail
  {
    path: '/project/:projectId/:contactId',
    name: 'buyer.index',
    component: require('@/pages/project/buyer/index.vue'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    redirect: '/home',
  },
];
