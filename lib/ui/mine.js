/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function mine() {
  const inputVal = document.getElementById("address").value;
  console.log(inputVal);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.send(
    JSON.stringify({
      jsonrpc: "2.0",
      id: 0,
      method: "evm_mine",
      params: []
    })
  );
}
