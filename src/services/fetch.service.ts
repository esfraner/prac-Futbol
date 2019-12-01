class fetchService {
  fetchData(action: string, url: string, datas?: string) {
    const init = {
      headers: {
        "Content-type": "application/json"
      },
      method: action,
      body: JSON.stringify(datas) || null
    };
    return fetch(url, init).then(result => result.json());
  }
}
