const authMiddleWare = () => {
  const data = {
    message: 'Hello world'
  }
  return data
}
const postAuthMiddleWare = data => {
  return data
}

module.exports = {
  authMiddleWare,
  postAuthMiddleWare
}
