document.getElementById("LoadButton").onclick = function () {
    console.log("ładuję plik");

    var txtFile = new XMLHttpRequest();
    var allText = "file not found";
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
            allText = txtFile.responseText;
            allText = allText.split("\n").join("<br>");
        }

        document.getElementById('komentarze').innerHTML = allText;
    }
    txtFile.open("GET", 'comments.txt', true);
    txtFile.send(null);
}