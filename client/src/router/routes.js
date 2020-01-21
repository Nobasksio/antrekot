const routes = [
    {
        path: '/',
        component: () => import('layouts/MyLayout.vue'),
        children: [
            {path: '/', component: () => import('pages/Index.vue')},

            {path: 'menu', component: () => import('pages/menu.vue')},
            {path: 'promotions', component: () => import('pages/promotions.vue')},
            {path: 'contact', component: () => import('pages/contact.vue')},
            {path: 'bonus', component: () => import('pages/bonus.vue')},
            {path: 'feedback', component: () => import('pages/feedback.vue')},
            {path: 'interior', component: () => import('pages/interior.vue')},
            { path: '*', component: () => import('pages/Error404.vue')}
        ]

    },
    {path: '/check', component: () => import('pages/check-page.vue')},
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/Error404.vue')
    })
}

export default routes
