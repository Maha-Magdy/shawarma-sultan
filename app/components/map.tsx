'use client'

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useState } from "react";

const Map = ({ address }: { address: string }) => {
    const mapRef = useRef<>(null);
    const [geocoder, setGeocoder] = useState<typeof google.maps.Geocoder>();

    const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
        version: 'weekly',
        libraries: ['places']
    });

    useEffect(() => {
        const initGeocoder = async () => {
            const { Geocoder } = await loader.importLibrary('geocoding');
            setGeocoder(new Geocoder() as unknown as typeof google.maps.Geocoder);
        }
        initGeocoder();
    }, []);

    useEffect(() => {
        if (!geocoder || !address) return;

        console.log("geocoder =>", geocoder);


        const initMap = async () => {
            const { Map } = await loader.importLibrary('maps');
            const { AdvancedMarkerElement } = await loader.importLibrary('marker');

            geocoder.geocode(
                { address: address },
                (result: google.maps.GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
                    if (status === "OK") {
                        const position = {
                            lat: result?.[0].geometry.location.lat()!,
                            lng: result?.[0].geometry.location.lng()!
                        }

                        const mapOptions: google.maps.MapOptions = {
                            center: position,
                            zoom: 15,
                            mapId: 'POP_UP_LOCATION_MAP'
                        }

                        const map = new Map(mapRef.current!, mapOptions);
                        const marker = new AdvancedMarkerElement({
                            map: map,
                            position: position,
                        });

                        console.log("result =>", result);
                        console.log("lat =>", result?.[0].geometry.location.lat());
                        console.log("lng =>", result?.[0].geometry.location.lng());
                    } else {
                        console.error(`Geocode was not successful for the following reason: ${status}`);
                    }
                }
            );
        };

        initMap();

        console.log("We are almost finish!");
    }, [address, geocoder]);

    return <div className="h-[500px]" ref={mapRef} />;
};

export default Map;