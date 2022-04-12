const tempForm = document.querySelector("#tempConv");


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
            case "C":
                switch (secondUnit) {
                    case "C":
                        res(firstV)
                        break;
                    case "F":
                        res((firstV * 1.8) + 32)
                        break;
                    case "K":
                        res(firstV + 273.15)
                        break;
                    default:
                        break;
                }
                break;
            case "F":
                switch (secondUnit) {
                    case "C":
                        res((firstV - 32) * 0.556)
                        break;
                    case "F":
                        res(firstV)
                        break;
                    case "K":
                        res(((firstV - 32) * 0.556) + 273.15)
                        break;
                    default:
                        break;
                }
                break;
            case "K":
                switch (secondUnit) {
                    case "C":
                        res(firstV - 273.15)
                        break;
                    case "F":
                        res((firstV * 1.8) - 459.67)
                        break;
                    case "K":
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