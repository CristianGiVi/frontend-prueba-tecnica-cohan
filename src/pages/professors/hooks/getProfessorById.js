export const getProfessorById = async (id) => {
    const URL = `http://localhost:8080/professor/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(URL, options);
        const data = await response.json();
        return { content: data, status: true }; 
    } catch (error) {
        return { content: error.message, status: false }; 
    }
}