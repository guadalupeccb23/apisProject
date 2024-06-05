

$.get("https://api.nasa.gov/planetary/apod?api_key=HEREISYOURKEY").then((data) => {
    console.log("It works!!");
    let imgSrc = data.hdurl;
    document.getElementById("idPicture").src = data.url;

    $( "#sctImage" ).html(" <img src='" + imgSrc + "'>");
});


