import axios from 'axios';
const baseURL = 'https://64455e9f914c816083cd410d.mockapi.io/tweets';

export async function fetchData(page) {
  const response = await axios.get(`${baseURL}?page=${page}&limit=3`);
  return response.data;
}

export async function fetchFollowing(page) {
  const response = await axios.get(
    `${baseURL}?clickFollowers=${false}&page=${page}&limit=3`
  );
  return response.data;
}
export async function fetchFollow(page) {
  const response = await axios.get(
    `${baseURL}?clickFollowers=${true}&page=${page}&limit=3`
  );
  return response.data;
}

export async function folowUser({ id, follow, value }) {
  const response = await axios.put(`${baseURL}/${id}`, {
    followers: follow,
    clickFollowers: value,
  });

  return response.data;
}

// COUNT PAGES
export async function fetchAllpage() {
  try {
    const response = await axios.get(`${baseURL}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFollowingPagges() {
  try {
    const response = await axios.get(`${baseURL}?clickFollowers=${false}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFollowPagges() {
  try {
    const response = await axios.get(`${baseURL}?clickFollowers=${true}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
