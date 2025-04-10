import { useState } from 'preact/hooks';
import { ChevronLeft, ChevronRight } from 'lucide-preact';

export default () => {
    const [wttrDesc, setWttrDesc] = useState<string>("Loading...");

    fetch(`https://wttr.in/${localStorage.getItem("location") || ""}?format=%t%20with%20%C%c&m`)
        .then(res => res.text())
        .then(desc => {
            setWttrDesc(desc.trim());
        })

    return (
        <>
            <nav class="navbar shadow fixed-top" style="background-color: var(--bs-content-bg); border-bottom: var(--bs-border-width) solid var(--bs-content-border-color);">
                <div class="container-fluid">
                    <div class="navbar-brand">
                        {wttrDesc}
                    </div>
                    <div class="d-flex hstack gap-2">
                        <button type="button" class="btn btn-outline-light btn-sm" onClick={history.back}><ChevronLeft size={20} /></button>
                        <button type="button" class="btn btn-outline-light btn-sm" onClick={history.forward}><ChevronRight size={20} /></button>
                    </div>
                </div>
            </nav>
        </>
    )
}