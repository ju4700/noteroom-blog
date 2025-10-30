function showStatus(type, message="Unexpected error occured. Please try again a bit later!") {
    const status = document.querySelector('#status-message')
    status.className = `waitlist-${type}-msg`
    status.textContent = message
}

async function joinWaitlist() {    
    try {
        const email = document.querySelector("#email").value
        if (email.trim().length !== 0) {
            const response = await fetch("/waitlist", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })

            if (!response || !response.ok) {
                return showStatus('error')
            }

            const data = await response.json()
            if (!data) {
                return showStatus('error')
            }
            
            showStatus(data.ok ? 'success' : 'error', data.ok ? "You've been added to the waitlist!" : data.message)
        } else {
            showStatus('error', "Please provide your valid email")
        }
    } catch (error) {
        showStatus('error')
    }
}
