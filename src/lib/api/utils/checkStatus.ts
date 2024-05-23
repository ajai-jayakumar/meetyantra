const checkStatus = (response: Response) => {
  if (!response.ok) {
    return response.json().then(error => {
      throw new Error(error.message);
    });
  }
  return response.json();
};

export default checkStatus;
