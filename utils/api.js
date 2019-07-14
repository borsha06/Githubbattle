import axios from 'axios';

const id = '84578f19a9a926634249';
const sec = '502dc7203598a42426d1e277384404091c24d88c';
const params = `?client_id=${id}&client_secret=${sec}`;
const latest = `${params}&order=asc&sort=updated`;

export function getTrendingRepos (since = 'daily')
{
  return axios
    .get(`https://github-trending-api.now.sh/?since=${since}`)
    .then(repo => repo.data);

}


export function getUserRepos (username = 'h-sumon')
{
  return axios
    .get(`http://api.github.com/users/${username}/repos${latest}`)
    .then(user => user.data);
}

export function getProfile (username)
{
  return axios
    .get(`http://api.github.com/users/${username}${params}`)
    .then(user => user.data);
}

function getRepos (username, quantity = 10)
{
  return axios.get(
    `http://api.github.com/users/${username}/repos${params}&per_page=${quantity}`
  );
}

export function getStarCount (repos)
{
  return repos.data.reduce((count, repo) =>
  {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore (profile, repos)
{
  let followers = profile.followers;
  let totalStars = getStarCount(repos);

  return followers * 3 + totalStars;
}

function handleError (error)
{
  console.warn(error);
  return null;
}

function getUserData (player)
{
  return axios.all([getProfile(player), getRepos(player)]).then(function (data)
  {
    let profile = data[0];
    let repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    };
  });
}

function sortPlayers (players)
{
  return players.sort((a, b) =>
  {
    return b.score - a.score;
  });
}

export function battle (players)
{
  return axios
    .all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
}
