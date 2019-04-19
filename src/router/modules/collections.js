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
      path: 'repos',
      component: () => import('@/views/repos/list'),
      name: 'ReposList',
      meta: { title: 'reposList', icon: 'list', noCache: true }
    },
    {
      path: 'list',
      component: () => import('@/views/collections/list'),
      name: 'CollectionsList',
      meta: { title: 'collectionsList', icon: 'list', noCache: true }
    },
    {
      path: 'cardlist',
      component: () => import('@/views/collections/cardlist'),
      name: 'CollectionsCardList',
      meta: { title: 'collectionsCardList', icon: 'list', noCache: true }
    },
    {
      path: 'create',
      component: () => import('@/views/collections/create'),
      name: 'CreateCollection',
      meta: { title: 'createCollection', icon: 'edit' }
    }
  ]
}

export default collectionsRouter
