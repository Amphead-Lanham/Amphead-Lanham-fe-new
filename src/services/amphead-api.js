/* eslint-disable no-throw-literal */
// const url = 'http://localhost:7890/api/v1/announcements';
const url = process.env.API_URL;

export const getAnnouncements = async() => {
  const res = await fetch(url);
  const json = await res.json();

  if(!res.ok) throw 'error, not retrieved';
  
  return json;
};

export const getAnnouncementById = async(id) => {
  const res = await fetch(`${url}/${id}`);
  const json = await res.json();

  if(!res.ok) throw 'error, not retrieved';

  return {
    id: json.id,
    side: json.side,
    title: json.title,
    body: json.body
  };
};

export const deleteAnnouncement = async(id) => {
  const res = await fetch(`${url}/${id}`, {
    method: 'DELETE'
  });
  const json = await res.json();
  if(!res.ok) throw json;

  return json;
};

export const postAnnouncement = async(announcement) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(announcement)
  });

  const json = await res.json();
  if(!res.ok) throw json;

  return json;
};

export const updateAnnouncement = async(id, announcement) => {
  const res = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(announcement)
  });

  const json = await res.json();
  if(!res.ok) throw json;

  return json;
};
