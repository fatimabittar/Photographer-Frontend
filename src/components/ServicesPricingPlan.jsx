// import React from "react";

// export const ServicesPricingPlan = ({
//   title,
//   price,
//   description,
//   imageSrc,
//   editable,
// }) => {
//   return (
//     <div className="services-pricing-plan">
//       <div className="services-pricing-plan-content">
//         <div className="pricing-background">
//           <img
//             src={`data:image/jpeg;base64,${imageSrc}`}
//             alt="imgSrc"
//             className="img-pricing"
//           />
//         </div>
//         <div className="pricing-body">
//           <h2>{title}</h2>
//           <h1>{price}</h1>
//           <p>{description}</p>
//         </div>
//       </div>
//       {editable && <button className="button-edit">Edit</button>}
//     </div>
//   );
// };

import React, { useState } from "react";
import Popup from "reactjs-popup";

export const ServicesPricingPlan = ({
  id,
  title,
  price,
  description,
  imageSrc,
  onEdit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title,
    price,
    description,
    imageSrc,
  });

  const handleFormSubmit = async () => {
    try {
      // Call backend API to update the data
      await onEdit(id, formData);
      // Update the UI with the new data
      // ...
      // Close the popup
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="services-pricing-plan">
      <div className="services-pricing-plan-content">
        <div className="pricing-background">
          <img
            src={`data:image/jpeg;base64,${imageSrc}`}
            alt="imgSrc"
            className="img-pricing"
          />
        </div>
        <div className="pricing-body">
          <h2>{title}</h2>
          <h1>{price}</h1>
          <p>{description}</p>
        </div>
      </div>

      {onEdit && (
        <>
          <button className="button-edit" onClick={() => setIsOpen(true)}>
            Edit
          </button>
          <Popup open={isOpen} onClose={() => setIsOpen(false)} modal >
            <div >
              <h2>Edit Form</h2>
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={(event) =>
                    setFormData({ ...formData, title: event.target.value })
                  }
                />
                <label htmlFor="price">Price:</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={(event) =>
                    setFormData({ ...formData, price: event.target.value })
                  }
                />

                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      description: event.target.value,
                    })
                  }
                />

                <label htmlFor="image">Image:</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.imageSrc}
                  onChange={(event) =>
                    setFormData({ ...formData, imageSrc: event.target.value })
                  }
                />

                <button type="submit">Submit</button>
                <button type="button" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
              </form>
            </div>
          </Popup>
        </>
      )}
    </div>
  );
};
