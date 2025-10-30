const { Router } = require("express");
const User = require("../models/user");
const { apiCall: brevoApiCall } = require("../services/brevoService");
const { env } = require("../utils");

const router = Router()

function waitlistRouter() {
    router.get("/", async (req, res) => {
        res.render("waitlist")
    });

    router.post("/", async (req, res, next) => {
        try {
            const { email } = req.body
            if (email?.trim().length !== 0) {
                await User.create({ email })
                res.json({ ok: true })
                
                const brevoContactsResponse = await brevoApiCall('https://api.brevo.com/v3/contacts', {
                    email: email,
                    listIds: [parseInt(env("BREVO_WAITLIST_LIST_ID", 9))],
                    attributes: {
                        SIGNUP_SOURCE: 'NoteRoom Waitlist'
                    }
                })
                const brevoEmailResponse = await brevoApiCall('https://api.brevo.com/v3/smtp/email', {
                    templateId: parseInt(env("BREVO_WAITLIST_WELCOME_EMAIL_TEMPLATE_ID", 1)),
                    to: [{ email: email }]
                })
                console.log(brevoContactsResponse, brevoEmailResponse)
            } else {
                res.json({ ok: false, message: 'Please provide your valid email' })
            }
        } catch (error) {
            console.error(error)
            let message = null
            if (error.name && error.name === "SequelizeUniqueConstraintError") {
                const code = error.original.code
                if (code === "ER_DUP_ENTRY") {
                    message = "The email you provided is already in the waitlist!"
                }
            }
            res.json({ ok: false, message: message || "Unexpected error occured. Please try again a bit later!" })
        }
    });

    return router
}

module.exports = waitlistRouter
