export const deleteStudentById = async (id) => {
    try {
      const url = `http://localhost:8080/student/delete-student/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      };
  
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      return { message: error.message, status: 500 };
    }
  };