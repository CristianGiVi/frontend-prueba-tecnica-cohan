export const editProfessor = async (updatedProfessor, id) => {
    const URL = `http://localhost:8080/professor/edit-professor/${id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProfessor),
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