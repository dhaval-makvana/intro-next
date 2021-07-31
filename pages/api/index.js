
// serves all request PUT, POST, DELETE, GET
export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'hello' }))
}