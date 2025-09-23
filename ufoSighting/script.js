console.log('file is working');

//ufo image list
let ufoImg = ["links/ufo1.png", "links/ufo2.png"];


//Load the page first
//the javascript code only run when html is finished loading
window.addEventListener("load", () => {
    console.log("page has loaded");


    //1. user selected the year and month
    //1a. add an event listener
    //thank you chatgpt for generating this
    document.getElementById("go").addEventListener("click", () => {
        console.log('button pressed')
        let search = document.querySelector("#year").value

        //2. fetching the data
        fetch('ufo.json').then((response) => {
            let json = response.json()
            return json;
        }).then((data) => {
            display(data);
        })

        document.querySelector("#year").value = "";

        //3. displying the img
        //3a. selecting a random image
        let randomUfo = Math.floor(Math.random() * ufoImg.length);
        let randomUfo = ufoImg[randomUfo];
        console.log(randomUfo);


        //3b. disply the image based on the data
        function display(ufoData) {
            console.log("display")
            let container = document.querySelector("#desciption");
            //   container.innerHTML = ""; //clear out anything in the poke wrapper
            //   //make a p tag, add poke name to that
            let name = document.createElement("p");
            name.innerHTML = ufoData.datetime;
            container.append(datetime); //add that p to the container
        }

        //4. displying the information
        //4a. listen for mouse hover over the ufo img



        //example with ufo.json
        // for(let i = 0; i < ufoData.length; i++){
        //   console.log(ufoData[i].city);//print the city name 
        // }

    });
});