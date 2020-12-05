// const getLaterEmail = (firstName, callback) => {
//   setTimeout(() => {
//     if (!firstName) {
//       return callback(new Error('firstName parameter required'))
//     }
//     const email = `${firstName}@later.com`
//     return callback(email)
//   }, 2000)
// }

// getLaterEmail('Ian', console.log)
// getLaterEmail(null, console.log)

const getLaterEmailWithPromise = async (firstName, callback) => {
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  // if (!firstName) {
  //   delay(2000).then(()=>

  //     callback(new Error('firstName parameter required')
  //     )
  // }
  const email = `${firstName}@later.com`
  delay(2000).then(() => {
    callback(email)
  })
}

getLaterEmailWithPromise('Ian', console.log)
getLaterEmailWithPromise(null, console.log)
