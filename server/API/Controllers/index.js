exports.example = async (req, res) => {
    return res.status(200).send("I got your request! Here is your response!");
}

exports.root = async (req, res) => {
    return res.status(200).send("Hello!");
}