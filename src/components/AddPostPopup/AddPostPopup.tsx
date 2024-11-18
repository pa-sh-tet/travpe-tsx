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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPost: PostData = {
      // id: Date.now(),
      image,
      description,
      author: currentUser.name,
      date: "22-11-10",
      likes: [],
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

  useEffect(() => {
    setImage(null);
    setDescription("");
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
          />
          <div className="popup__form-container">
            <div className="popup__form-inputs">
              <input
                type="file"
                className="popup__form-image-input"
                name="image"
                // value={image}
                onChange={handleImageChange}
                required
              />
              {/* <input type="text" className="popup__form-location-input" /> */}
            </div>
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
