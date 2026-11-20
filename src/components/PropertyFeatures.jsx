function PropertyFeatures({ bedrooms, bathrooms, area }) {
    return (
        <div className="property-features">
            <span>🛏 {bedrooms} Beds</span>
            <span>🛁 {bathrooms} Baths</span>
            <span>📐 {area} m²</span>
        </div>
    );
}

export default PropertyFeatures;
