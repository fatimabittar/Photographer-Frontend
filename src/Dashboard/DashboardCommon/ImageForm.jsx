import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../../constants.js";
import { PopupForm } from "./PopupForm";
import { UploadAndViewImage } from "./UploadAndDisplayImage";

export const ImageForm = ({
  imageSource = {},
  onSuccess,
  onError,
  visible,
}) => {
  const { id, height, width, section, page } = imageSource;
  const [data, setData] = useState({
    image: null,
    width,
    height,
    section,
    page,
  });

  console.log(data)
  const handleFormSubmit = async () => {
    if (data && width && height) {
      const formData = new FormData();
      formData.append("height", data.height);
      formData.append("title", data.title);
      formData.append("width", data.width);
      formData.append("section", data.section);
      formData.append("page", data.page);
      if (data.image) formData.append("image_url", data.image);
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
        image={data.image}
        onChange={(image) => setData(...data, image)}
      />
      {/* <div>
        <label htmlFor="width">width:</label>
        <input
          type="text"
          id="width"
          name="width"
          value={data.width}
          onChange={(event) =>
            setData({ ...data, width: event?.target?.value })
          }
        />
        <label htmlFor="width">height:</label>
        <input
          type="text"
          id="height"
          name="height"
          value={data.height}
          onChange={(event) =>
            setData({ ...data, height: event?.target?.value })
          }
        />
      </div> */}
    </PopupForm>
  );
};
