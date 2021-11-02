const sgMail =  require("@sendgrid/mail");

exports.sendEmail = async (req, res) => {
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        if (req.body.name && req.body.email && req.body.message) {
            const msg = {
                to: "sunsickstudio@gmail.com",
                from: "alex@mezaweblab.com",
                subject: "SunsickStudio.com Contact Form Submission",
                text: "SunsickStudio.com",
                html: `
                    <strong>Someone Submitted Your Contact Form</strong>
                    <br />
                    <p>
                        <span style="color:red;font-weight:bold;">Name: </span><br />
                        ${ req.body.name }
                    </p>
                    <p>
                        <span style="color:red;font-weight:bold;">Email: </span><br />
                        ${ req.body.email }
                    </p>
                    <p>
                        <span style="color:red;font-weight:bold;">Message: </span><br />
                        ${ req.body.message }
                    </p>
                `
            };

            sgMail.send(msg);

            return res.status(200).end();
        } else {
            return res.status(400).send("Missing paramenter");
        }
    } catch(e) {
        console.log(e);
        return res.status(500);
    }
}

exports.example = async (req, res) => {
    return res.status(200).send("I got your request! Here is your response!");
}

exports.root = async (req, res) => {
    return res.status(200).send("Hello!");
}