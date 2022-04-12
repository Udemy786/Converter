const tempForm = document.querySelector("#seeConv");


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

            case "mps":
                switch (secondUnit) {
                    case "mps":
                        res(firstV)
                        break;
                    case "kmph":
                        res(firstV * 3.6)
                        break;
                    default:
                        break;
                }
                break;
            case "kmph":
                switch (secondUnit) {
                    case "mps":
                        res((firstV * 278 / 1000))
                        break;
                    case "kmph":
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




