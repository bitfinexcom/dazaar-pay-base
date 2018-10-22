class PayBase {
  constructor (conf) {
    this._reqs = {}
    this._mem = {}

    this.setConf(conf)
  }

  setConf (conf) {
    this._conf = conf
  }

  getConf () {
    return this._conf
  }

  addReq (k, v) {
    this._reqs[k] = v
  }

  delReq (k) {
    delete this._reqs[k]
  }

  getReq (k) {
    return this._reqs[k]
  }

  async init (opts = {}, cb) {
    new Promise((resolve, reject) => {
      resolve(true)

      if (cb) {
        return cb(null, true)
      }
    })
  }

  async validate (k, cb) {
    new Promise((resolve, reject) => {
      if (!this.getReq(k)) {
        const err = new Error('ERR_PAY_BASE_REQ_INVALID')
        reject(err)

        if (cb) {
          return cb(err)
        }

        return
      }

      resolve(true)

      if (cb) {
        return cb(null, true)
      }
    })
  }
}

module.exports = PayBase
