const URL = 'https://64a300c7b45881cc0ae5fbf7.mockapi.io/api/todos';

// Create
function saveTask(task) {
  console.log('POST');
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(task),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  // return  fetch(URL, options);
  return axios.post(URL, task);
}

// READ
const loadTask = () => {
  console.log('GET');
  //   const response = await fetch(URL);
  //   const res = await response.json();
  //   return res.data;

  return axios.get(URL).then(res => res.data);
};

// UPDATE;
function updateTask(id, status) {
  console.log('UPDATE');
  //   const options = {
  //     method: 'PUT',
  //     body: JSON.stringify({ isDone: status }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   return fetch(`${URL}/${id}`, options);
  return axios.put(`${URL}/${id}`, { isDone: status });
}

// UPDATE;
function deleteTask(id) {
  console.log('DELETE');
  //   const options = {
  //     method: 'DELETE',
  //   };
  //   fetch(`${URL}/${id}`, options);
  return axios.delete(`${URL}/${id}`);
}

export { saveTask, loadTask, updateTask, deleteTask };
