import axios from "axios";

export const getAllCategories = async () => {
  const data = await axios.get("http://localhost:3000/categories");
  console.log(data);
};
