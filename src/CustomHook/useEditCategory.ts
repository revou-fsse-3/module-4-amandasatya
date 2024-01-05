import { useState } from "react";
import axios from "axios";

interface Category {
  id: string;
  name: string;
  is_active: boolean;
}
const [listOfCategory, setListOfCategory] = useState<Category[]>([]);
const [editCategory, setEditCategory] = useState<Category | null>(null);

export const handleEditCategory = (category: Category) => {
  setEditCategory(category);
};
export const useEditCategory = () => {
  const handleSaveEdit = async () => {
    if (!editCategory) {
      console.error("No category selected for edit");
      return;
    }
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        console.log("Token not found");
        return;
      }

      const headers = { authorization: authToken };
      const { id, name, is_active } = editCategory;

      const updatedData = {
        id,
        name,
        is_active,
      };

      await axios.put(
        "https://mock-api.arikmpt.com/api/category/update",
        updatedData,
        { headers }
      );

      const fetchResponse = await axios.get(
        "https://mock-api.arikmpt.com/api/category?page=1",
        { headers }
      );

      setListOfCategory(fetchResponse.data.data);
      setEditCategory(null);
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };
  return handleSaveEdit;
};
