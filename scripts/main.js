import businesses from "./data.js";



// big spenders exercise

const bigSpendersToDOM = document.getElementById("big_spenders_container");

const bigSpenders = businesses.filter(business => business.orders.find(num => num >= 9000));

bigSpenders.forEach(
    business =>
      (bigSpendersToDOM.innerHTML += `<h2>${business.companyName}</h2>
      <p>${business.addressFullStreet}
      <br>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
      <hr>`)
  );


// forEach exercise

const businessName = document.getElementById("business_list_container");

businesses.forEach(
  business =>
    (businessName.innerHTML += `<h2>${business.companyName}</h2>
    <p>${business.addressFullStreet}
    <br>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
    <hr>`)
);
