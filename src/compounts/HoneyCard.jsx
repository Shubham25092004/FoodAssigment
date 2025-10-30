import React from "react";

const HoneyCard = ({ item }) => {
  if (!item) return null; // Prevent crash

  return (
    <div className="card mb-3 shadow-sm border-0 rounded-4" style={{ maxWidth: "450px" }}>
      <div className="row g-0 d-flex align-items-center">
        
        {/* Image Section */}
        <div className="col-4">
          <img 
            src={item.img} 
            className="img-fluid rounded-start" 
            alt={item.title}
            style={{ height: "120px", width: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-8">
          <div className="card-body">
            <h6 className="text-muted">{item.title}</h6>
            <h5 className="card-title fw-semibold">{item.desc}</h5>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HoneyCard;

