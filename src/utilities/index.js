import { useEffect } from 'react'
import { ACTIONS } from '../components/reducer'

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

export function getTrackDuration(millis) {
  return millsToMinAndSec(millis, clockFormat);
}

export function getArtists(artistsArr) {
  const artist_names = [];
  artistsArr.forEach(artist => artist_names.push(artist.name));
  return artist_names.join(', ');
}

export function getTimeDifference(added_date) {
  const now = new Date();
  const added_at = new Date(added_date);
  
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = now - added_at;

  let timeDiff = 0;

  if(elapsed <= 0) {
    return 'just now';
  }

  else if (elapsed < msPerMinute) {
    timeDiff = Math.round(elapsed/1000);   
    return `${timeDiff} ${timeDiff === 1 ? 'second ago' : 'seconds ago'}`
  }

  else if (elapsed < msPerHour) {
    timeDiff = Math.round(elapsed/msPerMinute);   
    return `${timeDiff} ${timeDiff === 1 ? 'minute ago' : 'minutes ago'}` 
  }

  else if (elapsed < msPerDay ) {
    timeDiff = Math.round(elapsed/msPerHour);   
    return `${timeDiff} ${timeDiff === 1 ? 'hour ago' : 'hours ago'}`   
  }

  else if (elapsed < msPerMonth) {
    timeDiff = Math.round(elapsed/msPerDay);   
    return `${timeDiff} ${timeDiff === 1 ? 'day ago' : 'days ago'}`  
  }

  else if (elapsed < msPerYear) {
    timeDiff = Math.round(elapsed/msPerMonth);   
    return `${timeDiff} ${timeDiff === 1 ? 'month ago' : 'months ago'}`  
  }

  else {
    timeDiff = Math.round(elapsed/msPerYear);   
    return `${timeDiff} ${timeDiff === 1 ? 'year ago' : 'years ago'}`   
  }
}

export function handleTrackClick(event, {preventClass, dispatch, url, index, field}) {
  if(event.target.matches(preventClass) || event.target.parentNode.matches(preventClass)) return;
  dispatch({type: ACTIONS.SET_SELECTED_TRACK_URL, url});
  dispatch({type: ACTIONS.SET_SELECTED_TRACK_INDEX, index});
  dispatch({type: ACTIONS.SET_SELECTED_TRACK_FIELD, field});
}

export function useOutsideHandler(ref, dispatch, optionalTarget) {
  useEffect(() => {
    function handleClickOutside(event) {
        if(ref.current && !ref.current.contains(event.target) && (optionalTarget ? !event.target.matches(optionalTarget) : true)) {
          dispatch({type: ACTIONS.SET_UNSELECT_TRACK});
        }
      }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, dispatch, optionalTarget]);
}

export function getSelectedClass(trackField, trackIndex, field, index) {
  return trackField === field && trackIndex === index ? 'selected' : '';
}