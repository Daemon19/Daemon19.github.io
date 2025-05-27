const alertPlaceHolder = document.getElementById("alert-place-holder");
const sendButton = document.getElementById("send-button");

document
    .getElementById("message-form")
    .addEventListener("submit", async (e) => {
        e.preventDefault();
        sendButton.disabled = true;
        sendButton.innerHTML =
            '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';

        const form = e.target;
        const data = new FormData(form);
        const { name, email, message } = Object.fromEntries(data.entries());
        try {
            await sendMessage(name, email, message);
            alert("Thanks—message sent!", "success");
            form.reset();
        } catch (err) {
            alert("Oops, something went wrong.", "error");
            console.error(err);
        }

        sendButton.disabled = false;
        sendButton.innerHTML = "Send";
        form.scrollIntoView({ behavior: "smooth" });
    });

async function sendMessage(name, email, message) {
    const url =
        "https://script.google.com/macros/s/AKfycbzd-36tzg0S7NlLLE6JJ_wyuZE2g_Hbck6dgHngYdTYKac3b69HXfCj7mqmrvsWRbUUGA/exec";

    const resp = await fetch(url, {
        method: "POST",
        body: { name, email, message },
    });

    const json = await resp.json();
    if (json.result !== "success") {
        throw new Error(json.error);
    }
}

function alert(message, type) {
    alertPlaceHolder.innerHTML =
        '<div class="alert alert-' +
        type +
        ' alert-dismissible" role="alert">' +
        message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
}
