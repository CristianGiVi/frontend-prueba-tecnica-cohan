export const deleteAddressById = async (id) => {
  try {
    const url = `http://localhost:8080/address/delete-address/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    if (data.status) {
      return { content: data, status: true };
    }
    return { content: data, status: false };
  } catch (error) {
    return { message: error.message, status: 500 };
  }
};
