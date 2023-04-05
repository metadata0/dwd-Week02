
//var songListHTML = document.getElementById("songName").getElementByClassName("content")

function song(name, duration){
    this.name = name;
    this.duration = duration;
}

let songList = [new song("Protolanguage", "03:45"), 
                new song("Beacon", "05:14"), 
                new song("Shoreline", "04:47"), 
                new song("Tesseract Unfolds", "04:35"),
                new song("Granular Synthesis", "06:46"),
                new song("Nightcrawler", "04:23")]


function createSongListStructure(songList, targetId) {
    let targetDiv = document.getElementById(targetId);
    console.log(targetDiv)
    for (let i = 0; i < songList.length; i++) {
        //retrieve song object
        let song = songList[i];

        //create empty element node for name
        let nameNode = document.createElement("p");
        //add class name to nameNode
        nameNode.classList.add("songTitle")
        //create textnode to store
        let nameTextNode = document.createTextNode(i + " - " + song.name);
        //add text content "nameTextNode" to element node
        nameNode.appendChild(nameTextNode);
        
        console.log(nameNode);

        //create empty element for track duration
        let durationNode = document.createElement("p");
        //add class name to textNode
        durationNode.classList.add("songDuration")
        //create textnode to store
        let durationTextNode = document.createTextNode(song.duration);
        //add text content "durationTextNode" to element node
        durationNode.appendChild(durationTextNode);

        let trackNode = document.createElement("div");
        trackNode.appendChild(nameNode);
        trackNode.appendChild(durationNode);
        trackNode.classList.add("trackInfo");

        targetDiv.appendChild(trackNode);
    }
}

createSongListStructure(songList, "songs");
