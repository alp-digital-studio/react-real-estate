import PropertyCard from "./PropertyCard.jsx";

function PropertyList({ properties }) {
    return (
        <section className="list-section" id="properties">
            <div className="section-top">
                <div>
                    <p className="section-small">EXPLORE OUR LISTINGS</p>
                    <h2>Featured Properties</h2>
                </div>
                <p className="section-note">Find the right place for your lifestyle.</p>
            </div>

            <div className="property-grid">
                {properties.map(property => (
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

export default PropertyList;
