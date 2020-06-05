


document.querySelector("#get-customer").addEventListener('click', loadCustomer);
document.querySelector("#get-customers").addEventListener('click', loadCustomers);

function loadCustomer(e) {

  const xhr = new XMLHttpRequest();

  xhr.open('get', 'customer.json', true);

  xhr.onload = function () {
    if (this.status == 200) {

      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
          <li>Id: ${customer.id}</li>
          <li>Name: ${customer.name} </li>
          <li>Company: ${customer.company} </li>
          <li>Phone: ${customer.phone} </li>
        </ul>
      `;

      document.querySelector("#customer").innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}//end loadCustomer

function loadCustomers(e) {

  const xhr = new XMLHttpRequest();

  xhr.open('get', 'customers.json', true);

  xhr.onload = function () {

    if (this.status == 200) {
      console.log("status == 200");

      const customers = JSON.parse(this.responseText);

      let list = document.createElement("ul");
      let output = "";

      customers.forEach((customer) => {
        output += `
          <li>Id: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        `;
      });

      list.innerHTML = output;
      document.querySelector("#customers").appendChild(list);
    }//end if(status == 200)
  }//end onload

  xhr.send();

  e.preventDefault();
}// end loadCustomers



