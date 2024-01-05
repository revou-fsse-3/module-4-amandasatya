import { useEffect, useState } from "react";
import axios from "axios";

interface Category {
  id: string;
  name: string;
  is_active: boolean;
}

export const useFetchCategories = () => {
  const [listOfCategory, setListOfCategory] = useState<Category[]>([]);

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

  return listOfCategory;
};
