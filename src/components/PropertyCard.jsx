import PropertyFeatures from "./PropertyFeatures.jsx";
import StatusBadge from "./StatusBadge.jsx";

function PropertyCard({
    title,
    location,
    price,
    bedrooms,
    bathrooms,
    area,
    image,
    type,
    isFeatured
}) {
    return (
        <article className="property-card">
            <div className="property-image">
                <img src={image} alt={title} />
                <StatusBadge type={type} isFeatured={isFeatured} />
            </div>

            <div className="property-info">
                <div className="price-row">
                    <h3>{title}</h3>
                    <strong>${price.toLocaleString("en-US")}</strong>
                </div>

                <p className="location">📍 {location}</p>

                <PropertyFeatures
                    bedrooms={bedrooms}
                    bathrooms={bathrooms}
                    area={area}
                />

                <button className="contact-button">Contact Agent</button>
            </div>
        </article>
    );
}

export default PropertyCard;
