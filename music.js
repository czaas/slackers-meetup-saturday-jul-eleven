var songs = [];

// my object constructor
function Song(songName, artistName, albumName){
	this.title = songName;
	this.artist = artistName;
	this.album = albumName;

	// This is the method that adds the song in reference to the 
	// songs array
	this.addToPlaylist = function(){
		songs.push(this);
	}; 
}

// This is a function that takes and array and shuffles the contents of it in a random order. 

// I found this on stackoverflow, here's a link more about it
// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// http://bost.ocks.org/mike/shuffle/ 
function shuffle(arr){
	var counter = arr.length, 
		temp, // creating empty variables
		index; // that I will use in this function

	// the counter is the array length of my songs array
	while(counter > 0){
		// creating an index in which Math.random generates a floating point number between 0 and 1;
		// then multiply it by my counter
		index = Math.floor(Math.random() * counter);

		// short hand for writing: counter = counter - 1;
		counter--;

		temp = arr[counter];
		arr[counter] = arr[index];
		arr[index] = temp;
	}

	return arr;
}

// this function takes the array of song objects and console.logs them by title, artist, album.
function playSong(playList, shufflePlaylist){

	// This is a boolean option so we can have a shuffled playlist or leave it in the same order songs were added. Not what was asked for, just something I wanted in my program.
	if(shufflePlaylist == true){

		// because I know that my shuffle function will return the array just in a different order I just reasign my playList variable to the shuffled version of it.
		playList = shuffle(playList);
	}

	// The for loop that goes through the songs array
	for(var i = 0; i < playList.length; i++){

		// the for in loop that goes through each song object in the songs array
		for(key in playList[i]){
		
			// this is the "gotcha" thing Matt was talking about.
			// He asked that it spits out each item of the song object EXCEPT for methods: addToPlaylist()
			if(typeof playList[i][key] !== 'function'){

				// if the value of the key value pair of the object is not a function/method it will log it
				console.log('Now playing: ' + playList[i][key]);
			}

		}
		// just a seperator between song objects so I can more easily read the console.
		console.log('******* Next song *******');
	}
}


// make my songs
var crazyTrain = new Song('Crazy Train', 'Ozzy', 'blank');
var newSong = new Song('New song', 'Train', 'blanked');
var whatever = new Song('name', 'artist', 'slbum');

// add songs to song array by calling the addToPlaylist method
whatever.addToPlaylist();
crazyTrain.addToPlaylist();
newSong.addToPlaylist();

// my optional shuffle parameter
var shouldWeShuffe = true;

// logs them to the console.
playSong(songs, shouldWeShuffe);