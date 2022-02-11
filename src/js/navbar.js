function insertNavbar(id, page) {
    let element = document.getElementById(id);
    element.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow">\
            <div class="container">\
                <a class="navbar-brand" href="index.html">MangHatma</a>\
                <button\
                    class="navbar-toggler"\
                    type="button"\
                    data-bs-toggle="collapse"\
                    data-bs-target="#navbarNav"\
                    aria-controls="navbarNav"\
                    aria-expanded="false"\
                    aria-label="Toggle navigation"\
                >\
                    <span class="navbar-toggler-icon"></span>\
                </button>\
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">\
                    <ul class="navbar-nav">\
                        <li class="nav-item">\
                            <a class="nav-link ${
                                page == 'home' ? 'active' : ''
                            }" aria-current="page" href="index.html">Home</a>\
                        </li>\
                        <li class="nav-item">\
                            <a class="nav-link ${
                                page == 'about' ? 'active' : ''
                            }" href="about.html">About</a>\
                        </li>\
                        <li class="nav-item">\
                            <a class="nav-link ${
                                page == 'projects' ? 'active' : ''
                            }" href="#">Projects</a>\
                        </li>\
                        <li class="nav-item">\
                            <a class="nav-link ${
                                page == 'contact' ? 'active' : ''
                            }" href="#">Contact Me</a>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
        </nav>`;
}
