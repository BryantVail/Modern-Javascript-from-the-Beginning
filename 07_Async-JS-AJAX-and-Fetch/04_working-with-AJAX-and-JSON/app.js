// 04_Working-with-Ajax-and-JSON

document
  .querySelector("#btnGetCustomers")
  .addEventListener("click", loadCustomers);

document
  .querySelector("#btnGetCustomer")
  .addEventListener("click", loadCustomer);

// loadCustomers, plural
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();
  console.log("loadCustomers");

  xhr.open("GET", "./course-files/customers.json", true);

  xhr.onprogress = function() {
    console.log(this.status);
  };

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      const customers = JSON.parse(this.responseText);
      // iterate over list if needed, add to innerHTML of ul element
      UIBuildCustomerList(customers, "customers");
    }
  };

  xhr.send();

  e.preventDefault();
}

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./course-files/customer.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      const customers = JSON.parse(this.responseText);
      UIBuildCustomerList(customers, "customer");
    }
  };
  xhr.send();
  e.preventDefault();
}

function UIBuildCustomerList(customersJSON, containerId) {
  // const UIlist = (document.createElement("ul").className = "customers-list");
  const container = document.querySelector(`#${containerId}`);
  console.log();
  let output = "";
  if (Array.isArray(customersJSON)) {
    //loop the array for all customers
    customersJSON.forEach(function(customer, index) {
      output += UIBuildOutputHTMLObject(customer);
    });
    container.innerHTML += output;
  } else if (customersJSON == null) {
    return false;
  } else {
    output = UIBuildOutputHTMLObject(customersJSON);
    container.innerHTML += output;
  }
}

function UIBuildOutputHTMLObject(customer) {
  const output = `
        <ul >
          <li>ID:\t${customer.id} </li>
          <li>Name:\t ${customer.name} </li>
          <li>Company:\t${customer.company}</li>
          <li>Phone:\t${customer.phone.slice(0, 3)}-${customer.phone.slice(
    3,
    6
  )}-${customer.phone.slice(6)}
        </ul>
  `;
  return output;
}
