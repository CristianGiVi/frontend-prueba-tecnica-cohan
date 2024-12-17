export const createStudent = async (newStudent) => {
    const URL = `http://localhost:8080/student/new-student`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStudent),
    };

    try {
        const response = await fetch(URL, options);
        const data = await response.json();
        if(data.status){
            return { content: data, status: true }; 
        }
        return { content: data, status: false }; 
    } catch (error) {
        return { content: error.message, status: false }; 
    }
}