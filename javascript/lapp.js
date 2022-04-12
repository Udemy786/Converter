const tempForm = document.querySelector("#lenConv");


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
            case "mm":
                switch (secondUnit) {
                    case "mm":
                        res(firstV)
                        break;
                    case "cm":
                        res(firstV * 10 / 100)
                        break;
                    case "m":
                        res(firstV * 10 / 10000)
                        break;
                    case "km":
                        res(firstV * 10 / 10000000)
                        break;
                    default:
                        break;
                }
                break;
            case "cm":
                switch (secondUnit) {
                    case "mm":
                        res(firstV * 100 / 10)
                        break;
                    case "cm":
                        res(firstV)
                        break;
                    case "m":
                        res(firstV * 10 / 1000)
                        break;
                    case "km":
                        res(firstV * 10 / 1000000)
                        break;
                    default:
                        break;
                }
                break;
            case "m":
                switch (secondUnit) {
                    case "mm":
                        res(firstV * 10000 / 10)
                        break;
                    case "cm":
                        res(firstV * 1000 / 10)
                        break;
                    case "m":
                        res(firstV)
                        break;
                    case "km":
                        res(firstV * 10 / 10000)
                        break;
                    default:
                        break;
                }
                break;
            case "km":
                switch (secondUnit) {
                    case "mm":
                        res(firstV * 10000000 / 10)
                    case "cm":
                        res(Math.floor(firstV * 1000000 / 10))
                        break;
                    case "m":
                        res(firstV * 10000 / 10)
                        break;
                    case "km":
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





