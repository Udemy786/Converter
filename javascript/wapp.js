const tempForm = document.querySelector("#weiConv");


tempForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    var firstV = parseFloat(tempForm.elements.value1.value);
    var firstUnit = tempForm.elements.funit.value;
    var secondUnit = tempForm.elements.sunit.value;
    console.log(firstV)
    if (typeof firstV === "string" || !firstV) {
        res("Please Enter Number", "red")

    } else {
        switch (firstUnit) {
            case "mg":
                switch (secondUnit) {
                    case "mg":
                        res(firstV)
                        break;
                    case "g":
                        res(firstV * 10 / 10000)
                        break;
                    case "kg":
                        res(firstV * 10 / 10000000)
                        break;
                    default:
                        break;
                }
                break;
            case "g":
                switch (secondUnit) {
                    case "mg":
                        res(firstV * 10000 / 10)
                        break;
                    case "g":
                        res(firstV)
                        break;
                    case "kg":
                        res(firstV * 10 / 10000)
                        break;
                    default:
                        break;
                }
                break;
            case "kg":
                switch (secondUnit) {
                    case "mg":
                        res(firstV * 10000000 / 10)
                        break;
                    case "g":
                        res(firstV * 10000 / 10)
                        break;
                    case "kg":
                        res(firstV)
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
    function res(value, color = "blue") {
        const result = document.querySelector("#result")
        result.innerText = value;
        result.style.color = color
    }
})

// 