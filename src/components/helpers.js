export function getPlaylistDuration (playlistItems) {
  let total = 0;
  playlistItems.forEach(item => {
    total += item.track.duration_ms;
  });
  return total;
}

export function clockFormat(min, sec) {
  return `${min}:${sec < 10 ? '0' : ''}${sec}`
}

export function minSecFormat(min, sec) {
  return `${min} min ${sec} sec`
}

export function millsToMinAndSec(millis, format) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return format(minutes, seconds);
}

export function getDayDiff(str_date) {
  const initial = new Date(str_date);
  const current = new Date(); 
  const timeDiff = current.getTime() - initial.getTime(); 
  const diffInDays = Math.round(timeDiff / (1000 * 3600 * 24)); 
  return diffInDays;
}

export function getArtists(artistsArr) {
  const artist_names = [];
  artistsArr.forEach(artist => artist_names.push(artist.name));
  return artist_names.join(', ');
}