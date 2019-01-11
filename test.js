const wrap = require('./')

const iResolve = async (text) => new Promise((done) => done(text))
const iReject = async (text) => new Promise((_, fail) => fail(text))

async function runner () {
  const [data, err] = await wrap(iResolve('jack'))
  console.log(data, err)

  const [pass, fail] = await wrap(iReject('reject mee'))
  console.log(pass, fail)
}

runner()
