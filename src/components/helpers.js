export const getPlaylistDuration = (playlistItems) => {
  let total = 0;
  playlistItems.forEach(item => {
    total += item.track.duration_ms;
  });
  return total;
}