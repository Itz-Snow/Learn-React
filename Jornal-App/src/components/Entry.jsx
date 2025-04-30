import LocationMarker from "../assets/marker.png"

export default function Entry(props){
    return(
        <article className="main-article">
            <div className="article">
               <img alt={props.img.alt} src={props.img.src} className="japan-image"/>
               <div className="event-info">
                <p className="location-link">
                    <img alt="location marker" src={LocationMarker} className="marker"/>
                    <span> {props.country} </span>
                    <a href={props.googleMapsLink}>
                    view on Google Maps
                    </a>
                </p>
                <h2 className="location-name"> {props.title} </h2>
                <p className="date">{props.dates}</p>
                <p className="description">
                   {props.text}
                </p>
               </div>
            </div>
        </article>
    )
}