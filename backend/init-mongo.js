db.auth('root', 'password')

db.createUser(
  {
    user: 'ib-user',
    pwd: 'password',
    roles: [
      {
        role: 'readWrite',
        db: 'ideazboard'
      }
    ]
  }
)

db.ideazboard.insert({
  name: "ib-user"
})
