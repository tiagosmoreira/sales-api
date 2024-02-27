const SELECT_ALL_USERS = "SELECT u.name, u.email, u.phone_number FROm users u"
const INSERT_USER = "INSERT INTO users(name, email, phone_number) VALUES ($1,$2,$3)"

module.exports = {
    SELECT_ALL_USERS,
    INSERT_USER,
}