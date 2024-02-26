import "./style.scss";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const MapLutherie = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_KEY"
  });

  const position = {
    lat: -23.391527202381265,
    lng: -46.7108296335793
  }

  return(
    <article className="MapLutherie">
      <h1 className="categoryTitle">
        Mapa

        <span className="detail">
          Endereço
        </span>
      </h1>

      <div className="map">
        {
          isLoaded ? (
              <GoogleMap
                mapContainerStyle={{width: "100%", height: "100%", borderRadius: "14px"}}
                center={position}
                zoom={15}
              >
                <Marker 
                    position={position}
                    options={{
                      label: {
                          text: "Roger Silva Lutheria",
                          className: "-mt-11 font-medium tracking-wider"
                      }
                    }} 
                />
              </GoogleMap>
          ) : null
        }
      </div>
    </article>
  )
}

export default MapLutherie;
