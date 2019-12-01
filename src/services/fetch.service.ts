export class FetchService {
  makeFetchRequest(url: string, method: string) {
    return fetch(url, {
      method: method,
      mode: 'cors'
    })
      .then(response => response.text())
      .then(responseText => {
        return JSON.parse(responseText);
      });
  }
}
