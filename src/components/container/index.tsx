export default () => {
    return (
        <>
            <div class="container bg-body-tertiary shadow text-center position-absolute top-50 start-50 translate-middle mx-auto py-4">
                <h6 class="display-4">Hello, {localStorage.getItem("name")}.</h6>
                <br />
                <br />
                <form action={localStorage.getItem("searchEngine") || ""} method="get">
                    <input class="form-control me-2" type="search" placeholder={`Search with ${localStorage.getItem("searchEngineName")}`} aria-label="Search with Google" name="q" />
                </form>
            </div>
        </>
    )
}