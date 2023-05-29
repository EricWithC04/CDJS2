let container = document.getElementById("cardContainer");
let info = [{img: "https://animalia-bio.us-east-1.linodeobjects.com/animals/photos/full/1x1/1200px-buffalo-kruger-national-park-14792640747jpg.webp", title: "Bufalo", description: "Bubalus es un género de mamíferos artiodáctilos pertenecientes a la subfamilia Bovinae; son conocidos vulgarmente como búfalos."}, 
            {img: "https://img.freepik.com/foto-gratis/tigre-mirando-boca-abierta_1150-18083.jpg?w=2000", title: "Tigre", description: "El tigre es una de las especies​ de la subfamilia de los panterinos pertenecientes al género Panthera."}, 
            {img: "https://www.nationalgeographic.com.es/medio/2021/12/29/cobra-real-ophiophagus-hannah-considerada-la-serpiente-mas-venenosa-del-mundo_851eef1d_800x800.jpg", title: "Serpiente", description: "Las serpientes u ofidios son un suborden de saurópsidos diápsidos pertenecientes al orden Squamata, del superorden Lepidosauria, caracterizado por la ausencia de patas ​ y el cuerpo muy alargado."}, 
            {img: "https://static01.nyt.com/images/2018/05/15/science/08TB-ELEPHANTS/merlin_137679708_9394f6de-8660-45d3-9318-adbf8997164f-superJumbo.jpg", title: "Elefante", description: "Los elefantes o elefántidos son una familia de mamíferos placentarios del orden Proboscidea. Antiguamente se clasificaban, junto con otros mamíferos de piel gruesa, en el orden, ahora inválido, de los paquidermos."}, 
            {img: "https://www.clarin.com/img/2023/03/15/1M6Odkl2V_720x0__1.jpg", title: "León", description: "El león es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera."}, 
            {img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Giraffa_camelopardalis_reticulata_01.JPG", title: "Jirafa", description: "La jirafa es una especie de mamífero artiodáctilo, de la familia Giraffidae propio de África."}];

info.forEach(animal => {
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let newImg = document.createElement("img");
    newImg.src = animal.img;
    newImg.alt = "imagen";

    let newText = document.createElement("div");
    newText.classList.add("cardText");
    let newTitle = document.createElement("h1");
    newTitle.textContent = animal.title;
    let newDescription = document.createElement("p");
    newDescription.textContent = animal.description;
    newText.appendChild(newTitle)
    newText.appendChild(newDescription)

    newCard.appendChild(newImg)
    newCard.appendChild(newText)
    container.appendChild(newCard)
})