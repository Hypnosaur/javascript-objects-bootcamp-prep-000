var playlist = {
  semisonic: "Closing Time"
}

function updatePlaylist(playlist, artistName, songTitle){
   playlist =  Object.assign({}, playlist, { [artistName]: songTitle});
   return playlist;
}