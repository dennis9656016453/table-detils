var txt1 = document.getElementById("txt1");
function ajax() {
  console.log("btn clicked");
  //step 1
  var xhttp = new XMLHttpRequest();
  //step 2
  //xhttp.open("GET", "comtent.txt", true);
  xhttp.open("GET","https://jsonplaceholder.typicode.com/users", true);
  //step 3
  xhttp.send();
  //step
  https: xhttp.onreadystatechange = function () {
    if ((this.readyState == 4) & (this.readyState == 200)); {
      console.log(this.response);
      var data = JSON.parse(this.response);
      // txt.innerText=`name:${data[1].name} age:${data[1].age}`
      let output = `<table><tr><th>name</th><th>username</th><th>email</th><th>city</th></tr>`;
      for (let i = 0; i < data.length; i++){
        console.log(data[i]);
        output += `<tr>
             <td>${data[i].name}</td>
             <td>${data[i].username}</td>
             <td>${data[i].email}</td>
             <td>${data[i].address.city}</td>
            </tr>`;
      }
            output += `</table>`
        txt1.innerHTML = output;
      
    }
  };
}
