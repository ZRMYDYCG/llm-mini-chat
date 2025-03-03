const Sequelize = require('sequelize')
const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
} = require('../config/db')

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  timezone: '+08:00',
  define: {
    schema: 'gc',
    schemaDelimiter: '_'
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch(err => {
    console.log('数据库连接失败', err)
  })


module.exports = sequelize
