const logout = async () => {
  const response = await fetch("http://localhost:5000/user/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  console.log("Logged out successfully");
  return await response.json();
};

export default logout;
