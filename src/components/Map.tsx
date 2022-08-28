import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const Map = ({ data }: any) =>
{
    const mapStyle = {
        height: "50vh",
        width: "100%"
    }

    console.log("data: ", data)

    const defaultCenter = {
        lat: data.lat,
        lng: data.lng
    }

    return (
        <LoadScript googleMapsApiKey="AIzaSyAWDPbJbWYxXtQB5TD_SsN_YxylpnUTeOY">
            <GoogleMap 
                mapContainerStyle={mapStyle}
                zoom={10} 
                center={defaultCenter}
            >
                <Marker position={defaultCenter}></Marker>
            </GoogleMap>
        </LoadScript>
    );
}