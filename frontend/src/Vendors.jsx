import React, { useEffect, useState } from "react";
import "./vendors.css";

function Vendors() {

  const [vendors, setVendors] = useState([]);

  // GET VENDORS FROM MONGODB
  useEffect(() => {

    fetch("http://localhost:5000/api/vendors")
      .then((res) => res.json())
      .then((data) => {
        setVendors(data);
      })
      .catch((error) => {
        console.error("Error fetching vendors:", error);
      });

  }, []);

  // DELETE VENDOR
  const deleteVendor = async (id) => {

    try {

      const response = await fetch(
        `http://localhost:5000/api/vendors/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        alert("Failed to delete vendor");
        return;
      }

      setVendors((prevVendors) =>
        prevVendors.filter((vendor) => vendor._id !== id)
      );

    } catch (error) {

      console.error("Error deleting vendor:", error);
      alert("Server error.");

    }

  };

  return (
    <div className="vendors-page">

      <h1>Wedding Vendors</h1>

      <p>
        Find the perfect vendors for your dream wedding.
      </p>

      <div className="vendors-grid">

        {vendors.length === 0 ? (

          <p>No vendors available.</p>

        ) : (

          vendors.map((vendor) => (

            <div
              className="vendor-card"
              key={vendor._id}
            >

              <div className="vendor-icon">
                💍
              </div>

              <h2>
                {vendor.name}
              </h2>

              <p>
                📌 {vendor.type}
              </p>

              <p>
                📍 {vendor.location}
              </p>

              <p>
                💰 Starting from {vendor.price}
              </p>

              <button
                onClick={() =>
                  alert(`${vendor.name} selected!`)
                }
              >
                Select Vendor
              </button>

              <button
                onClick={() =>
                  deleteVendor(vendor._id)
                }
                style={{
                  marginLeft: "10px"
                }}
              >
                🗑️ Delete
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Vendors;