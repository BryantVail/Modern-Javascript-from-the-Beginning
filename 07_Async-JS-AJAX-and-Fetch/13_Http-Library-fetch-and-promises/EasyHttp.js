/** 
  EasyHttp Library
  library for http requests

  @version 2.0.0
  @author Bryant Vail
  @license MIT

**/

class EasyHttp {
  //make get req
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        //because the fetch function parsed the response to json,
        //-> we just have to return the data
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        //complete the promise within post by 'resolving' with data
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "put",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  delete(url, id) {
    return new Promise((resolve, reject) => {
      fetch(`${url}/${id}`, {
        method: "delete",
        headers: {
          "content-type": "application-json"
        }
      })
        .then(resp => resp.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  } //end delete
}

//
