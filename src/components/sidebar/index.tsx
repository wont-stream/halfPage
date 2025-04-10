const dataset = document.documentElement.dataset;

export default () => {
    return (

        <nav class="sidebar offcanvas-start offcanvas-md" style={(localStorage.getItem("sidebar") === "false" ? "display: none;" : "")}>

            <div class="offcanvas-header border-bottom border-secondary border-opacity-25">

                <span class="sidebar-brand">
                    .
                </span>

                <button type="button" class="btn-close d-md-none" data-bs-dismiss="offcanvas" data-bs-target="#sidebar-example" />

            </div>

            <div class="offcanvas-body">
                <h6>Name</h6>
                <form class="d-flex" id="name" onSubmit={(e) => {
                    e.preventDefault();
                    const form = document.forms.namedItem("name");
                    if (form) {
                        localStorage.setItem("name", form.userName.value);
                    }
                }}>

                    <input name="userName" class="form-control me-2" placeholder="Set Name" />

                    <button class="btn btn-primary" type="submit">Save</button>

                </form>
                <hr class="sidebar-divider" />
                <h6>Search Engine</h6>
                <form id="searchEngine" onSubmit={(e) => {
                    e.preventDefault();
                    const form = document.forms.namedItem("searchEngine");
                    if (form) {
                        localStorage.setItem("searchEngine", form.engine.value);
                        localStorage.setItem("searchEngineName", form.engineName.value);
                    }
                }}>

                    <input name="engine" class="form-control me-2" placeholder="e.g. https://google.com/search" />
                    <br />
                    <input name="engineName" class="form-control me-2" placeholder="e.g. Google" />
                    <br />
                    <button class="btn btn-primary" type="submit">Save</button>

                </form>
                <hr class="sidebar-divider" />
                <h6>Weather Location</h6>
                <form class="d-flex" id="weatherLocation" onSubmit={(e) => {
                    e.preventDefault();
                    const form = document.forms.namedItem("weatherLocation");
                    if (form) {
                        localStorage.setItem("location", form.location.value);
                    }
                }}>

                    <input name="location" class="form-control me-2" placeholder="Leave blank for current location" />

                    <button class="btn btn-primary" type="submit">Save</button>

                </form>

                <hr class="sidebar-divider" />
                <h6>Color Scheme</h6>
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <button class="btn btn-primary" type={"button"} onClick={() => { localStorage.setItem("colorScheme", "auto"); location.reload() }}>Auto</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-primary" type={"button"} onClick={() => { localStorage.setItem("colorScheme", "light"); dataset.bsTheme = "light" }}>Light</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-primary" type={"button"} onClick={() => { localStorage.setItem("colorScheme", "dark"); dataset.bsTheme = "dark" }}>Dark</button>
                    </li>
                </ul>

                <hr class="sidebar-divider" />
                <h6>Theme</h6>
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <button class="btn btn-primary" type={"button"} onClick={() => { localStorage.setItem("theme", "default"); dataset.bsCore = "default" }}>Default</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-primary" type={"button"} onClick={() => { localStorage.setItem("theme", "modern"); dataset.bsCore = "modern" }}>Modern</button>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-primary" type={"button"} onClick={() => { localStorage.setItem("theme", "elegant"); dataset.bsCore = "elegant" }}>Elegant</button>
                    </li>
                </ul>
                <hr class="sidebar-divider" />

                <button class="btn btn-secondary" type={"button"} onClick={() => { localStorage.setItem("sidebar", "false"); location.reload() }}>Save & Close</button>

                <hr class="sidebar-divider" />
                <h6>About</h6>
                <p>halfPage is a minimalistic startpage, built on only open-source software.</p>
                <a href="https://www.gethalfmoon.com/wttr">halfmoon</a>
                <a href="https://github.com/chubin/wttr.in">wttr.in</a>
                <a href="https://git.creations.works/seth/halfPage">Source</a>

            </div>

        </nav>
    )
}