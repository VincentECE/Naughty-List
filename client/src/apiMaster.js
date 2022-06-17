import axios from 'axios';

const serverURL = 'http://localhost:3001/';

export function getNaughtyList() {
  return axios({
    method: 'get',
    url: ''.concat(serverURL, 'naughtyList'),
  });
};

export function addToNaughtyList(name, description, naughtyLevel) {
  return axios({
    method: 'post',
    url: ''.concat(serverURL, 'addToNaughtyList'),
    data: {
      name: name,
      description: description,
      naughtyLevel: naughtyLevel,
    },
  });
};

export function deleteFromNaughtyList(name) {
  return axios({
    method: 'delete',
    url: ''.concat(serverURL, 'delete'),
    data: {
      name: name,
    },
  });
};