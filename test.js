const wrap = require('./')

const iResolve = async (text) => new Promise((done) => done(text))
const iReject = async (text) => new Promise((_, fail) => fail(text))

async function runner () {
  const { data } = await wrap(iResolve('jack'))
  console.log({ data })

  const { err } = await wrap(iReject('reject mee'))
  console.log({ err })
}

runner()
