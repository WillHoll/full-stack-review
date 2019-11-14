const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req,res) => {
    const db = req.app.get('db')
    const {email, password, name} = req.body
    const found = await db.find_user([email])
    console.log(found)
    if (+found[0].count !== 0) {
      return res.status(409).send({message: 'Email already registered'})
    }
    const homie_id = await db.add_user({name, email, profile_img: `https://robohash.org/${name}`})
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    db.add_hash({homie_id: homie_id[0].homie_id, hash})
    req.session.user = {homie_id: homie_id[0].homie_id, email, name, profile_img: `https://robohash.org/${name}`}
    res.status(201).send({message: 'Logged In', user: req.session.user})
  }
}