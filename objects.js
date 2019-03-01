var playlist = {
  semisonic: "Closing Time"
}

function updatePlaylist(playlist, artist, song){
   playlist =  Object.assign({}, playlist, { [artist]: song});
   return playlist;
}