import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function LaunchDetails() {
    const { flight_number } = useParams();
    const [launchDetails, setLaunchDetails] = useState([]);
    const [rocketDetails, setRocketDetails] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/"+flight_number)
            .then(data => data.json())
            .then(json => {
                setLaunchDetails(json);
                setRocketDetails(json.rocket);
            });
    }, []);

    return(
        <>
            <section class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img src={launchDetails.mission_patch} alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
                <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
                </div>
                <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{launchDetails.mission_name}</h2>
                    </div>
                </div>
            </section>

            <section class="bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-600">Rocket Name</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{rocketDetails.rocket_name}</dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-600">Launch Year</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{launchDetails.launch_year}</dd>
                        </div>
                        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt class="text-base leading-7 text-gray-600">Flight ID</dt>
                            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{launchDetails.flight_number}</dd>
                        </div>
                    </dl>
                </div>
            </section>

            <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                <div class="mx-auto max-w-2xl lg:max-w-4xl">
                    <h3 class="text-center text-xl font-bold">ABOUT THIS LUNCH</h3>
                    <figure class="mt-10">
                        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-600 sm:text-2xl sm:leading-9">
                            <p>{launchDetails.details}</p>
                        </blockquote>
                    </figure>
                </div>
            </section>
        </>
    );
}