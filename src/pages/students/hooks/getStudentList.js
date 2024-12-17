export const getStudentList = async () => {
    const URL = 'http://localhost:8080/student';
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