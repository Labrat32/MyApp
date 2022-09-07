const doFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      console.log('doFetch response not OK', data);
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export {doFetch}
