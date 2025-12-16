const select = document.getElementById("statusSelect");
const container = document.getElementById("container");

select.addEventListener("change", function () {
    switch (this.value) {

        case "saala-ye-dukh":
            container.style.backgroundImage = "url('images/saala-ye-dukh.jpg')";
            break;

        case "seh-lenge":
            container.style.backgroundImage = "url('images/Seh-Lenge-Thoda.jpg')";
            break;

        case "abba-nahi":
            container.style.backgroundImage = "url('images/abba-nahi-manenge.jpg')";
            break;
        
        case "mai-sirf-dil":
            container.style.backgroundImage = "url('images/dil-behla.jpg')";
            break;

        case "main-toh-bhaag":
            container.style.backgroundImage = "url('images/mai-toh-bhagne.jpg')";
            break;

        case "main-toh-bhaag":
            container.style.backgroundImage = "url('images/mai-toh-bhagne.jpg')";
            break;

         case "maan-andar-se":
            container.style.backgroundImage = "url('images/maan-andar-se.jpg')";
            break;



        default:
            container.style.backgroundImage = "url('images/default.jpg')";
    }
});
