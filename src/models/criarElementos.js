
export default class CriarElementos {
    static criarHeader() {
        const header            = document.createElement("header");
        const img               = document.createElement("img");
        img.src                 = "/logos/logo.png";
        img.alt                 = "Logo Airbnb";
        img.id                  = "imgLogo";
        const div               = document.createElement("div");
        const button            = document.createElement("button");
        button.innerText        = "Location";
        button.classList.add("buttonHeader");
        button.id               = "buttonLocation";
        const buttonGuests      = document.createElement("button");
        buttonGuests.innerText  = "Add guest";
        buttonGuests.classList.add("buttonHeader");
        buttonGuests.id         = "buttonGuests";
        const search            = document.createElement("button");
        search.classList.add("buttonHeader");
        const imgSearch         = document.createElement("img");
        imgSearch.src           = "/logos/vecteezy_magnifying-glass-icon-vector-on-white-background-simple-logo_.jpg";
        imgSearch.alt           = "Logo search";

        search.appendChild(imgSearch);
        div.append(button,buttonGuests,search);
        header.append(img,div);

        return header


    }
}