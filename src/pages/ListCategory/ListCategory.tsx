import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useDeleteCategory } from "../../CustomHook/useDeleteCategory";
import { useEditCategory } from "../../CustomHook/useEditCategory";
import { useFetchCategories } from "../../CustomHook/useFetchCategories";

interface Category {
  id: string;
  name: string;
  is_active: boolean;
}

const ListCategory = () => {
  const [listOfCategory, setListOfCategory] = useState<Category[]>([]);
  const [editCategory, setEditCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        if (authToken) {
          const headers = { authorization: authToken };
          const response = await axios.get(
            "https://mock-api.arikmpt.com/api/category?page=1",
            { headers }
          );
          setListOfCategory(response.data.data);
        } else {
          console.log("Token not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDeleteCategory = async (id: string) => {
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

      setListOfCategory((prevCategories) =>
        prevCategories.filter((category) => category.id !== id)
      );
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleEditCategory = (category: Category) => {
    setEditCategory(category);
  };

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

  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-5">Categories</h1>
        <h1 className="text-xl font-bold mb-5 justify-center items-center">
          Log Out
        </h1>
      </div>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-xl">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Active</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listOfCategory.map((category) => (
            <tr key={category.id} className="border-b border-gray-200">
              <td className="py-3 px-4">{category.id}</td>
              <td className="py-3 px-4">{category.name}</td>
              <td className="py-3 px-4">{category.is_active ? "Yes" : "No"}</td>
              <td className="py-3 px-4">
                <button
                  className="mr-2 text-blue-500"
                  onClick={() => handleEditCategory(category)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editCategory && (
        <div className="mt-5">
          <h2 className="text-xl font-bold mb-2">Edit Category</h2>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
            <input
              type="text"
              value={editCategory.name}
              onChange={(e) =>
                setEditCategory({ ...editCategory, name: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Active:
            <select
              value={editCategory.is_active ? "yes" : "no"}
              onChange={(e) =>
                setEditCategory({
                  ...editCategory,
                  is_active: e.target.value === "yes",
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSaveEdit}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default ListCategory;
