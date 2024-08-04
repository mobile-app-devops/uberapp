import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setTravelTime } from '@/constants/slices/navSlide'
import { Image } from 'expo-image';
import MapViewDirections from 'react-native-maps-directions'
const Map = () => {
    const dispath = useDispatch();
    const GOOGLE_MAPS_API_KEY = 'AIzaSyDGjDGOBfE1nZ4JGPkau6IBRo24QoaSGFc'
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination)
    const mapRef = useRef<MapView>(null)
    React.useEffect(() => {
        if (!origin || !destination) return;

        // Zoom to fit markers
        mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
        })
    }, [origin, destination])

    React.useEffect(() => {
        if (!origin || !destination) return;

        const getTravalTime = async () => {
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin?.description}&destinations=${destination?.description}&key=${GOOGLE_MAPS_API_KEY}`
            await fetch(URL).then((response) => response.json())
                .then((data) => {
                    dispath(setTravelTime(data.rows[0].elements[0]))
                })
            // const data = await response.json()
            // console.log(response)
        }
        getTravalTime();
    }, [origin, destination, GOOGLE_MAPS_API_KEY])

    return (
        <MapView
            style={{ flex: 1 }}
            mapType='standard'
            initialRegion={{
                latitude: origin?.location.lat,
                longitude: origin?.location.lng,
                latitudeDelta: 0.00522,
                longitudeDelta: 0.00521,
            }}
            ref={mapRef}
        >

            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin?.location.lat,
                        longitude: origin?.location.lng,
                    }}
                    image={require('@/assets/icons/map-pin.png')}
                    identifier='origin'
                    title={origin?.description}
                />
            )}

            {origin && destination && (
                <Marker
                    coordinate={{
                        latitude: destination?.location.lat,
                        longitude: destination?.location.lng,
                    }}
                    image={require('@/assets/icons/map-pin.png')}
                    identifier='destination'
                    title={destination?.description}
                />
            )}

            {origin && destination && (
                <MapViewDirections
                    apikey="AIzaSyDGjDGOBfE1nZ4JGPkau6IBRo24QoaSGFc"
                    origin={origin?.description}
                    destination={destination?.description}
                    strokeWidth={3}
                    strokeColor="#000"
                    mode='DRIVING'
                />
            )}

        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})