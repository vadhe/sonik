import type { Route } from 'sonik'

export default {
  GET: (c, head) => {
    const name = c.req.param('name')
    head.set({
      title: `It's ${c.req.param('name')}`,
    })
    return <h2>It's {name}!</h2>
  },
} satisfies Route
