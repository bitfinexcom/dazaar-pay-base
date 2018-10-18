class PayBase {
  constructor (conf) {
    this.setConf(conf)
  }

  setConf (conf) {
    this._conf = conf
  }

  getConf () {
    return this_.conf
  }

  async init (opts = {}, cb) {
    new Promise((resolve, reject) => {
      resolve(true)

      if (cb) {
        return cb(null, true)
      }
    })
  }

  async validate (data, cb) {
    new Promise((resolve, reject) => {
      resolve(true)

      if (cb) {
        return cb(null, true)
      }
    })
  }
}

module.exports = PayBase
