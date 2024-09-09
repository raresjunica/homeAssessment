import pixabayApi from "./pixabay";

export const getImage = async (preferredFruit: string) => {
  try {
    const response = await pixabayApi.get("/", {
      params: {
        q: preferredFruit,
        image_type: "photo",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
};
