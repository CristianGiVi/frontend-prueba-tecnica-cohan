export const editAddress = async (updatedAddress, id) => {
    const URL = `http://localhost:8080/address/edit-address/${id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedAddress),
    };

    try {
        const response = await fetch(URL, options);
        const data = await response.json();
        return { content: data, status: true }; 
    } catch (error) {
        return { content: error.message, status: false }; 
    }
}