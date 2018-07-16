module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/inkswellDB"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};