const body=document.querySelector("body");
  const submitData =(username,email)=>{
    const data={
    name : "Steve",
    email : "steve@steve.com",
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    body.append(json.id)
  })
  .catch(function (error) {
    alert('Unauthorized Access')
    body.append(error)
  })

}