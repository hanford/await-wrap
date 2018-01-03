module.exports = Wrap

function Wrap (promise) {
  return promise
    .then(data => ({ data }))
    .catch(err => ({ err }))
}
