function PropertyStats({ properties }) {
    const total = properties.length;
    const apartments = properties.filter(property => property.type === "Apartment").length;
    const villas = properties.filter(property => property.type === "Villa").length;

    return (
        <section className="stats">
            <div className="stat-box">
                <strong>{total}</strong>
                <span>Total Properties</span>
            </div>
            <div className="stat-box">
                <strong>{apartments}</strong>
                <span>Apartments</span>
            </div>
            <div className="stat-box">
                <strong>{villas}</strong>
                <span>Villas</span>
            </div>
        </section>
    );
}

export default PropertyStats;
