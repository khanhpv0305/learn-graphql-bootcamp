import uuid from 'uuid/v4'

const createComment = (parent, args, ctx) => {
  const {
    input,
  } = args

  const {
    db,
    pubsub,
  } = ctx

  const comment = {
    id: uuid(),
    ...input,
  }

  db.comments.push(comment)
  console.log(comment)

  pubsub.publish(`comment ${input.on}`, {
    comment: {
      mutationType: 'CREATE',
      payload: comment,
    },
  })

  return comment
}

export default {
  createComment,
}
