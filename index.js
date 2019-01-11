module.exports = Wrap

function Wrap (promise) {
  return promise
    .then(data => ([data, null]))
    .catch(err => ([null, err]))
}
