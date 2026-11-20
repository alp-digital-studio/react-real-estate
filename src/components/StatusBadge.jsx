function StatusBadge({ type, isFeatured }) {
    return (
        <div className="badge-list">
            <span className="type-badge">{type}</span>
            {isFeatured && <span className="featured-badge">Featured</span>}
        </div>
    );
}

export default StatusBadge;
