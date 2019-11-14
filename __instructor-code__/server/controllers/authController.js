const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const {email, password, name} = req.body
    const found = await db.find_user([email])[0]
    if (found) {
      return res.status(409).send({message: 'Email already registered'})
    }
    const user_id = db.add_user({name, email, profile_img: `https://robohash.org/${name}`})[0]
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    db.add_hash({user_id, hash})
    req.session.user = {user_id, email, name, profile_img}
    res.status(201).send({message: 'Logged In', user: req.session.user})
  }
}