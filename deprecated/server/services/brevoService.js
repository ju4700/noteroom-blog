const { env } = require("../utils");

async function apiCall(url, body) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'api-key': env("BREVO_API_KEY")
            },
            body: JSON.stringify(body)
        })
        if (response) {
            const data = await response.json()
            if (response.ok) {
                return { ok: true, data }
            } else {
                return { ok: false, data }
            }
        } else {
            return { ok: false, response }
        }
    } catch (error) {
        return { ok: false }
    }
}

module.exports = { apiCall }
