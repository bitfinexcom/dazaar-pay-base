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

  init (opts = {}, cb) {
    cb()
  }

  async validate (data, cb) {}
}
