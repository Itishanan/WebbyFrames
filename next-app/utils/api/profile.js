const Profile = async () => {
  try {
    const response = await fetch("http://localhost:5000/profile", {
      method: "GET",
      credentials: "include", // Include credentials like cookies if needed
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch profile:", error.message);
    return error.message;
  }
};

export default Profile;
