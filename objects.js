var playlist = {
  semisonic: "Closing Time"
}

function updatePlaylist(playlist, artist, song){
  return Object.assign({}, playlist, {
    [artist]: song})

}