const displayData = async () => {
    try {
        const response = await fetch("http://localhost:4000/userdata");
        if (response.status === 200) {
            const result = await response.json();
            console.log(result);
        } else {
        }
    } catch (error) {
        console.log(error);
    }
};

displayData();
