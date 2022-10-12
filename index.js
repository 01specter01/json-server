const displayData = async () => {
    try {
        const response = await fetch("http://localhost:4000/userdata");
        if (response.status === 200) {
            const result = await response.json();
            peoplesData(result);
        } else {
            throw new Error("Something whent wrong");
        }
    } catch (error) {
        console.log(error);
    }
};
const idElem = document.querySelectorAll(".id");

const firstNameElem = document.querySelectorAll(".firstName");

displayData();
function peoplesData(result) {
    idElem.forEach((element, index) => {
        element.classList.add("idResult");

        element.innerText = result[index].id;
    });
    console.log(result);
    const dataInputElem = document.querySelectorAll("td");
    console.log(dataInputElem);
    dataInputElem.forEach((element, index) => {
        element.classList.add("card");

        idElem.innerText = result[index].idElem;
        firstNameElem.innerText = result[index].firstNameElem;
    });

    // firstNameElem.forEach((element, index) => {
    //     element.classList.add("firstNameResult");
    // });
}
