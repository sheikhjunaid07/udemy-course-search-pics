import axios from "axios";

const searchImages = async (image) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Rnthh9ro-hgRQrgcDeBqHJLF43clajQJltlagaARrWI",
    },
    params: {
      query: image,
    },
  });
  return response.data.results;
};

export default searchImages;
