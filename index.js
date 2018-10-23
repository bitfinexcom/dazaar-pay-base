const _ = require('lodash')

class PayBase {
  constructor (conf) {
    this._subs = {}

    this.setConf(conf)
  }

  setConf (conf) {
    this._conf = conf
  }

  getConf () {
    return this._conf
  }

  addSub (k, v) {
    this._subs[k] = v
  }

  delSub (k) {
    delete this._subs[k]
  }

  getSub (k) {
    return this._subs[k]
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
      const sub = this.getSub(k)

      if (!sub || sub.dir !== 'sub') {
        const err = new Error('HM_PAY_BASE_SUB_INVALID')
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

    _.each(this._subs, async (v, k) => {
      await this.refreshTransactions(v)
    })

    this._refreshing = false
  }

  refreshTransactions (sub) {}
}

module.exports = PayBase
