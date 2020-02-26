const users = (parent, args, {db}) => db.users

const comments = (parent, args, {db}) => db.comments

const posts = (parent, args, {db}) => db.posts

export default {
  users,
  comments,
  posts,
}
