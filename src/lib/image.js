export const getImageUrl = async (query) => {
    const apiKey = "134TXEUBqjS54YE3Tez5hgjc67W2cArJv9Zxypl1ZazNIZGlA5KxfC7E"; 
    
    const fetchImage = async (query) => {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
        headers: {
          Authorization: apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      return response.json();
    };
  
    try {
      const data = await fetchImage(query);
  
      if (data.photos && data.photos.length > 0) {
      
        const image = data.photos[0];
        return image;
      } else {
        throw new Error("No se encontraron imágenes");
      }
    } catch (e) {
      console.error("Error fetching image:", e.message);
      return null;
    }
  };
  