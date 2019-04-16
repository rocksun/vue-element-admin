import Layout from '@/layout'

const collectionsRouter = {
  path: '/collections',
  component: Layout,
  redirect: 'noredirect',
  name: 'Collections',
  meta: {
    title: 'collections',
    icon: 'star'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/collections/list'),
      name: 'CollectionsList',
      meta: { title: 'collectionsList', icon: 'list', noCache: true }
    },
    {
      path: 'create',
      component: () => import('@/views/example/create'),
      name: 'CreateCollection',
      meta: { title: 'createCollection', icon: 'edit' }
    }
  ]
}

export default collectionsRouter
