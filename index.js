const _ = require('lodash')

class PayBase {
  constructor (conf) {
    this._reqs = {}

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

  refresh () {
    if (this._refreshing) {
      return
    }

    this._refreshing = true

    _.each(this._reqs, async (v, k) => {
      await this.refreshTransactions(v)
    })

    this._refreshing = false
  }

  refreshTransactions (req) {}
}

module.exports = PayBase
