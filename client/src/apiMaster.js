import axios from 'axios';

const serverURL = 'http://localhost:3001/';

export function getNaughtyList() {
  return axios({
    method: 'get',
    url: ''.concat(serverURL, 'naughtyList'),
  });
};

export function addPerson(name, description, naughtyLevel) {
  return axios({
    method: 'post',
    url: ''.concat(serverURL, 'addPerson'),
    data: {
      name: name,
      description: description,
      naughtyLevel: naughtyLevel,
    },
  });
};