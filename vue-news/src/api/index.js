import axios from "axios";

// 1. HTTP Request & Reponse 와 관련된 기분 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItem(itemid) {
  return axios.get(`${config.baseUrl}item/${itemid}.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItem };
