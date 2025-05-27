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
        try {
            await sendMessage(data);
            alert("Thanks—message sent!", "success");
            form.reset();
        } catch (err) {
            alert("Oops, something went wrong.", "danger");
            console.error(err);
        }

        sendButton.disabled = false;
        sendButton.innerHTML = "Send";
        form.scrollIntoView({ behavior: "smooth" });
    });

async function sendMessage(formData) {
    const url =
        "https://script.google.com/macros/s/AKfycby2HwwZ67SZehn6hFiiTQm-DOLKKnKIhUwlDfsedcck22KPdK0PSX9a1sfQl6HIh-8R8w/exec";

    const resp = await fetch(url, {
        method: "POST",
        body: formData,
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
