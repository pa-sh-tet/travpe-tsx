import React, { useEffect, useState } from "react";
import { PostData, UserData } from "../../utils/types";

export default function AddPostPopup({
  isOpen,
  currentUser,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  currentUser: UserData;
  onClose: () => void;
  onSubmit: (data: PostData) => void;
}) {
  const [image, setImage] = useState<File | null | string>(null);
  const [description, setDescription] = useState<string>("");
  const [placeLocation, setPlaceLocation] = useState<string>("");
  const date = new Date();
  // Для версии на русском
  // const month = date.toLocaleString("default", { month: "long" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPost: PostData = {
      image,
      description,
      author: currentUser.name,
      date: formattedDate,
      likes: [],
      placeLocation,
    };
    onSubmit(newPost);
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handlePlaceLocationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlaceLocation(event.target.value);
  };

  useEffect(() => {
    setImage(null);
    setDescription("");
    setPlaceLocation("");
  }, [isOpen]);

  return (
    <section className={`popup ${isOpen ? `popup_active` : ""}`}>
      <div className="popup__container block-style">
        <h2 className="popup__title">Add Post</h2>
        <form action="" className="popup__form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Share your travel experience..."
            className="popup__form-text-input"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
          <div className="popup__form-container">
            <div className="popup__form-inputs">
              <input
                type="file"
                className="popup__form-image-input"
                placeholder="Upload image"
                name="image"
                onChange={handleImageChange}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Enter location"
              className="popup__form-location-input"
              name="placeLocation"
              value={placeLocation}
              onChange={handlePlaceLocationChange}
              required
            />
            <button className="popup__form-button">POST</button>
          </div>
        </form>
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}
