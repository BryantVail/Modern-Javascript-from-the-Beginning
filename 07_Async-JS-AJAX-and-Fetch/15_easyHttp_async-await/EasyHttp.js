//EasyHttp.js

/**
 *
 * @version 3.0.0
 * @author Bryant Vail
 * @license MIT
 *
 * **/

class EasyHttp {
  //async keyword generates a return of promise
  async get(url) {
    //fetch returns a promise
    const response = await fetch(url);
    // response variable is the promise that was returned by fetch
    const data = await response.json();
    //return the promise
    return data;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const dataPosted = await response.json();
    return dataPosted;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    });

    const dataPut = await response.json(data);
    return dataPut; //a promise: wich has a resolve & reject case
  }

  async delete(url, id) {
    const response = await fetch(`${url}/${id}`, {
      method: "delete",
      //no body on delete
      headers: {
        "content-type": "application/json"
      }
    });
    const deletedString = await `Resource with id: ${id} deleted.`;
    return deletedString;
  }
}

//
