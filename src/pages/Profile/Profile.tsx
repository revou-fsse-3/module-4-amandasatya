import { useEffect, useState } from "react";
import axios from "axios";
const ProfileUser: React.FC = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("authToken");

        if (authToken) {
          const headers = { Authorization: authToken };

          const response = await axios.get(
            "https://mock-api.arikmpt.com/api/user/profile",
            { headers }
          );

          console.log(response.data);
          setData(response.data);
        } else {
          console.log("Token not found");
        }
      } catch (error) {
        console.log("Error fetching:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Received Data:</h2>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
};

export default ProfileUser;
