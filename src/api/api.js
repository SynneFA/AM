import axios from 'axios';

export function getAtricles() {
  return axios.get("https://storage.googleapis.com/aller-structure-task/test_data.json");
}
