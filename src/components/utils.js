
export const generateRandomImageURL = () => {
    const imageId = Math.floor(Math.random() * 1000); // Generate a random image ID between 0 and 999
    return `https://picsum.photos/250/250?image=${imageId}`;
  };