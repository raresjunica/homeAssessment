import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../styles/ContactForm.css";
import Button from "./button";
import { getImage } from "../services/home-services";

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  preferredFruit: z.string().min(1, { message: "Preferred fruit is required" }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long" }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await getImage(data.preferredFruit);
      if (response.hits && response.hits.length > 0) {
        setImageUrl(response.hits[0].webformatURL);
        setErrorMessage(null);
      } else {
        setImageUrl(null);
        setErrorMessage("No images found for the preferred fruit.");
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      setImageUrl(null);
      setErrorMessage("Failed to fetch image. Please try again.");
    }
  };

  const resetForm = () => {
    reset();
    setImageUrl(null);
    setErrorMessage(null);
  };

  return (
    <div className="form-container">
      {imageUrl === null ? (
        <h2>What about you?</h2>
      ) : (
        <h2>Here is your image</h2>
      )}
      {!imageUrl && (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              type="text"
              {...register("fullName")}
              className={`form-input ${errors.fullName ? "input-error" : ""}`}
            />
            {errors.fullName && (
              <span className="error-message">{errors.fullName.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="preferredFruit">Preferred fruit</label>
            <input
              id="preferredFruit"
              type="text"
              {...register("preferredFruit")}
              className={`form-input ${
                errors.preferredFruit ? "input-error" : ""
              }`}
            />
            {errors.preferredFruit && (
              <span className="error-message">
                {errors.preferredFruit.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">How can we help you?</label>
            <textarea
              id="message"
              {...register("message")}
              className={`form-input ${errors.message ? "input-error" : ""}`}
            ></textarea>
            {errors.message && (
              <span className="error-message">{errors.message.message}</span>
            )}
          </div>

          {errorMessage && (
            <div className="error-container">
              <span className="error-message">{errorMessage}</span>
            </div>
          )}

          <div className="button-container">
            <Button
              label="SUBMIT"
              onClick={handleSubmit(onSubmit)}
              variant="neutral"
              style={{ fontSize: "0.6rem" }}
            />
          </div>
        </form>
      )}

      {imageUrl && (
        <>
          <div className="image-container">
            <img
              src={imageUrl}
              alt="Fetched from Pixabay"
              className="fetched-image"
            />
          </div>
          <div className="button-container">
            <Button
              label="Try again!"
              onClick={() => resetForm()}
              variant="neutral"
              style={{ fontSize: "0.6rem" }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ContactForm;
