const count = {
  subscribe: (parent, args, {pubsub}) => {
    let number = 0

    setInterval(() => {
      number += 1

      pubsub.publish('count', {
        count: number,
      })
    }, 1000)

    return pubsub.asyncIterator('count')
  },
}

const comment = {
  subscribe: (parent, args, ctx) => {
    const {
      input: {
        postId,
      },
    } = args

    const {
      pubsub,
      db,
    } = ctx

    const foundPost = db.posts.find(
      (post) => post.id === postId,
    )

    if (!foundPost) {
      throw new Error('Post not found')
    }

    return pubsub.asyncIterator(`comment ${postId}`)
  },
}

export default {
  count,
  comment,
}
