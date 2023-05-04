import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../../constants";
import { PopupForm } from "./PopupForm";
import { UploadAndViewImage } from "./UploadAndDisplayImage";

export const ImageForm = ({ id, onSuccess, onError, visible }) => {
  const [image_url, setImage_url] = useState();

  const handleFormSubmit = async () => {
    if (image_url) {
      const formData = new FormData();
      formData.append("image_url", image_url);

      if (id) {
        await axios({
          url: `${API_URL}/images/${id}`,
          data: formData,
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then(onSuccess)
          .catch(onError);
      } else {
        await axios({
          url: `${API_URL}/images`,
          data: formData,
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then(onSuccess)
          .catch(onError);
      }
    }
  };

  return (
    <PopupForm
      onSubmit={handleFormSubmit}
      header="Image"
      visible={visible}
      formAction={id ? "Edit" : "Add"}
    >
      <UploadAndViewImage
        image={image_url}
        onChange={(image) => setImage_url(image)}
      />
    </PopupForm>
  );
};
