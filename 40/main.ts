/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name 
and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries
 representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter
 to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, 
 add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/

 //make Function make_album and create object 
 function make_album (artistname:string,albumtitle:string,tracks?:number){
    let album: {artist:string,album:string,tracks?:number} = {
        artist: artistname,
        album: albumtitle
    }

 if (tracks !== undefined ){
    album.tracks = tracks;
 }

 return album

}
 // make 3 different variables to store the value of function
 let album1 = make_album("RAyan","Choudhary")
 let album2 = make_album("Shayan","Jatt")
 let album3 = make_album("Touseef","Tanoli",5)

 // print the variables
 console.log(album1)
 console.log(album2)
 console.log(album3)