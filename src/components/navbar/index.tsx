import { useState } from 'preact/hooks';
import { ChevronLeft, ChevronRight } from 'lucide-preact';

import desc from "./desc.json";

const fetchWeather = async (lat: number, long: number) => {
    const req = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,is_day,weather_code&timezone=${Intl.DateTimeFormat().resolvedOptions().timeZone}`)
    const res = await req.json();

    return res as {
        current: {
            temperature_2m: number,
            is_day: number;
            weather_code: number;
        }
    }
}

export default () => {
    const [weather, setWeather] = useState<string>("Loading...");
    const [imgSrc, setSrc] = useState<string>("favicon.svg");
    const [wttrDesc, setWttrDesc] = useState<string>("Loading...");

    const getWeather = async (coords: GeolocationCoordinates) => {
        const weather = await fetchWeather(coords.latitude, coords.longitude);

        const weatherCode = weather.current.weather_code;
        const isDay = weather.current.is_day === 1;
        const dayOrNight = isDay ? "Day" : "Night";
        const weatherDesc = desc[weatherCode.toString() as keyof typeof desc][dayOrNight.toLowerCase() as "day" | "night"];

        setWeather(`${weather.current.temperature_2m}°C`);
        setSrc(weatherDesc.image);
        setWttrDesc(`${weatherDesc.description} & ${dayOrNight}`);
    }

    (async () => {
        const req = await fetch("https://cf.ipv4-army.workers.dev/")
        const res = await req.json();
        return await getWeather(res);
    })()

    return (
        <>
            <nav class="navbar shadow fixed-top" style="background-color: var(--bs-content-bg); border-bottom: var(--bs-border-width) solid var(--bs-content-border-color);">
                <div class="container-fluid">
                    <div class="navbar-brand">
                        <img src={imgSrc} alt="Logo" width="24" height="24" class="d-inline-block align-text-top" />
                        {wttrDesc}
                    </div>
                    <span class="navbar-text">
                        {weather}
                    </span>
                    <div class="d-flex hstack gap-2" role="search">
                        <button type="button" class="btn btn-outline-light btn-sm" onClick={history.back}><ChevronLeft size={20} /></button>
                        <button type="button" class="btn btn-outline-light btn-sm" onClick={history.forward}><ChevronRight size={20} /></button>
                    </div>
                </div>
            </nav>
        </>
    )
}