import axios from "axios";
require("dotenv").config();

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Get all animals
export const getAllAnimals = async () => {
  const res = await axios.get(`${BASE_URL}/animals`);
  const data = res.data.data.Items;

  return data;
};

// Get animal by Id
export const getAnimalById = async ({ animalId }) => {
  const res = await axios.get(`${BASE_URL}/animals/${animalId}`);
  const data = res.data;

  return data;
};

// Add animal
export const createAnimal = async ({
  animalId,
  animalDesc,
  imageUrl,
  animalName,
  residence,
  sanctuary,
  animalType,
}) => {
  const res = await axios.post(`${BASE_URL}/animals`,{
    animal: {
      animalId,
      animalDesc,
      imageUrl,
      animalName,
      residence,
      sanctuary,
      animalType,
    }
  })

  return res.data
}


// Update animal by Id
export const updateAnimal = async ({
  animalId,
  animalDesc,
  imageUrl,
  animalName,
  residence,
  sanctuary,
  animalType,
}) => {
  const res = await axios({
    method: "put",
    url: `${BASE_URL}/animals/${animalId}`,
    data: {
      animal: {
        animalId,
        animalDesc,
        imageUrl,
        animalName,
        residence,
        sanctuary,
        animalType,
      }
    },
  });

  return res.data
};

// Delete animal
export const deleteAnimal = async (animalId) => {
  const res = await axios({
    method: "delete",
    url: `${BASE_URL}/animals/${animalId}`,
  });

  return res;
};
