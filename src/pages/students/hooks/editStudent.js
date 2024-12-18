export const editStudent = async (updatedStudent, id) => {
    const URL = `http://localhost:8080/student/edit-student/${id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedStudent),
    };

    try {
        const response = await fetch(URL, options);
        const data = await response.json();
        if (data.status) {
            return { content: data, status: true };
          }
          return { content: data, status: false };
    } catch (error) {
        return { content: error.message, status: false }; 
    }
}