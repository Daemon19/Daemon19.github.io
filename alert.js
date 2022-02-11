let alert_place_holder = document.getElementById('alert-place-holder');

function alert(message, type) {
    alert_place_holder.innerHTML =
        '<div class="alert alert-' +
        type +
        ' alert-dismissible" role="alert">' +
        message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
}

let alert_btn = document.getElementById('alert-btn');

if (alert_btn) {
    alert_btn.addEventListener('click', () =>
        alert('The Contact Me form does not work yet!', 'danger')
    );
}
