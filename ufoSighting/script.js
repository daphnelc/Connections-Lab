console.log('page is working');

//the global variable 
let ufoData = [];
let ufoImgs = [];
let filteredData = [];
let search;

//loading the page
//the javascript code only run when html is finished loading
window.addEventListener("load", () => {
    console.log("page has loaded");

    //load UFO images
    for (let i = 1; i <= 56; i++) {
        let ufo = (`links/ufo${i}.png`);
        ufoImgs.push(ufo);
    }

    //1. user selected the year and month
    //1a. add an event listener
    document.getElementById("go").addEventListener("click", () => {
        console.log('button pressed')

        //get the search year from the textbox
        search = document.querySelector("#year").value
        console.log('year: ' + search);


        //2. fetching the data
        fetch('ufo.json')
            .then((response) => {
                console.log(response);
                let json = response.json()
                return json;
            })
            //2a. get access to the data
            .then((data) => {

                //assign this data to a global variable
                ufoData = data;
                console.log(ufoData);

                //3. displaying the image according to how many ufos was sighted during that year
                //3a. filter data by year
                filteredData = ufoData.filter(item => item.date[0].split('/')[2] == search)
                console.log(filteredData);

                document.getElementById('container').innerHTML = ""; //clear previous images

                //3b.images appear based on filteredData.length
                for (let i = 0; i < filteredData.length; i++) {
                    let img = document.createElement('img');

                    //3c. pick random UFO image
                    let randomIndex = Math.floor(Math.random() * ufoImgs.length);
                    img.src = ufoImgs[randomIndex];

                    //3d. show ufo imgae at random location
                    img.style.position = "absolute";
                    img.style.top = (Math.random() * 70 + 10) + "vh"; 
                    img.style.left = Math.random() * 80 + "vw";
                    img.style.animation = `float ${Math.random() * 2 + 1}s ease-in-out infinite alternate`; //floating animation

                    //4. displaying the information of the ufo
                    const dataInfo = filteredData[i]; // Get the corresponding data for this image

                    //4a. when mouse is on the image
                    img.addEventListener('mouseenter', () => {

                        //get image position
                        const imgPosition = img.getBoundingClientRect();

                        //display info box 
                        display(dataInfo, imgPosition);
                    });

                    //4a. when mouse leave the image
                    img.addEventListener('mouseleave', () => {

                        //clear the info display when mouse leaves
                        let existingInfo = document.querySelector(".ufoInfo");
                        if (existingInfo) {
                            existingInfo.remove();
                        }
                    });

                    document.getElementById('container').appendChild(img);
                }

                //5. display info box 
                function display(dataInfo, imgPosition) {
                    console.log("display");

                    //5b. create info box
                    let infoBox = document.createElement("div");
                    infoBox.className = "ufoInfo";
                    infoBox.innerHTML = `
                     <p><strong>Date:</strong> ${dataInfo.date[0]}</p>
                     <p><strong>Time:</strong> ${dataInfo.date[1]}</p>
                     <p><strong>Location:</strong> ${dataInfo.location}</p>
                     <p><strong>Shape:</strong> ${dataInfo.shape}</p>
                     <p><strong>Duration:</strong> ${dataInfo.duration}</p>
                     <p><strong>Latitude:</strong> ${dataInfo.latitude}</p>
                     <p><strong>Longitude:</strong> ${dataInfo.longitude}</p>
                     `;

                    //5c. style the info box
                    infoBox.style.position = "absolute";
                    infoBox.style.background = "rgba(255, 255, 255, 0.15)";
                    infoBox.style.padding = "1%";
                    infoBox.style.color = "white";
                    infoBox.style.border = "0.03rem solid rgb(180, 200, 255)";
                    infoBox.style.boxShadow = "0 0 0.5rem rgba(180, 200, 255, 0.7)";
                   
                    //5d. position the info box next to the image
                    infoBox.style.left = imgPosition.right + "px"; // 5px to the right of image
                    infoBox.style.top = imgPosition.top + "px"; // Same height as image

                    document.querySelector("#container").appendChild(infoBox);
                }

            })

            .catch(function (error) {
                console.log(error);
            })
    });

});


