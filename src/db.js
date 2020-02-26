export const users = [
  {
    id: '112',
    createdAt: '20.02.26',
    email: 'vankhanhpf96@gmail.com',
    firstName: 'Khanh',
    lastName: 'Pham',
  },
]

export const comments = [
  {
    id: '321',
    postId: '999',
    createdAt: '19.08.22',
    updatedAt: '19.09.01',
    content: 'comment cua Khanh',
    by: '112',
  },
]

export const posts = [
  {
    id: '999',
    createdAt: '20.01.23',
    title: 'bai viet dau tien',
    slug: 'bai-viet-dau-tien',
    content: 'hello may cung',
    comments: ['321'],
    by: '112',
  },
]
