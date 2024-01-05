import axios from "axios";
export const useDeleteCategory = () => {
  const deleteCategory = async (id: string) => {
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        console.error("Token not found");
        return;
      }

      const headers = { authorization: authToken };
      await axios.delete(`https://mock-api.arikmpt.com/api/category/${id}`, {
        headers,
      });
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return deleteCategory;
};
