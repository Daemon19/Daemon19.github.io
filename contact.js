let alert_place_holder = document.getElementById("alert-place-holder");

document
    .getElementById("message-form")
    .addEventListener("submit", async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const url =
            "https://script.google.com/macros/s/AKfycbzd-36tzg0S7NlLLE6JJ_wyuZE2g_Hbck6dgHngYdTYKac3b69HXfCj7mqmrvsWRbUUGA/exec";

        try {
            const resp = await fetch(url, {
                method: "POST",
                body: data,
            });
            const json = await resp.json();

            if (json.result === "success") {
                alert("Thanks—message sent!", "success");
                form.reset();
            } else {
                throw new Error(json.error);
            }
        } catch (err) {
            alert("Oops, something went wrong.", "error");
            console.error(err);
        }
    });

function alert(message, type) {
    alert_place_holder.innerHTML =
        '<div class="alert alert-' +
        type +
        ' alert-dismissible" role="alert">' +
        message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
}
