export default () => {
    return (
        <>
            <div class="container bg-body-tertiary shadow text-center position-absolute top-50 start-50 translate-middle mx-auto py-4">
                <h6 class="display-4">Hello, Seth.</h6>
                <br />
                <br />
                <form role="search" action={"https://www.google.com/search"} method="get">
                    <input class="form-control me-2" autoFocus type="search" placeholder="Search with Google" aria-label="Search with Google" name="q" />
                </form>
            </div>
        </>
    )
}