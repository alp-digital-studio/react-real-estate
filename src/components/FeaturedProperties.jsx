import PropertyCard from "./PropertyCard.jsx";

function FeaturedProperties({ properties }) {
    const featured = properties.filter(property => property.isFeatured);

    return (
        <section className="featured-section">
            <h2>Popular Homes</h2>
            <div className="property-grid">
                {featured.map(property => (
                    <PropertyCard
                        key={property.id}
                        title={property.title}
                        location={property.location}
                        price={property.price}
                        bedrooms={property.bedrooms}
                        bathrooms={property.bathrooms}
                        area={property.area}
                        image={property.image}
                        type={property.type}
                        isFeatured={property.isFeatured}
                    />
                ))}
            </div>
        </section>
    );
}

export default FeaturedProperties;
