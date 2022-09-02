function submitData(userName, userEmail) {
  const data = {
      name: userName,
      email: userEmail
  }

  const configurationObject = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify(data),
  };
  return fetch('http://localhost:3000/users', configurationObject)
      .then(res => res.json())
      .then(data => {
          const paragraph = document.createElement('p')
          paragraph.innerHTML = `New ID: ${data.id}`
          document.querySelector('script').insertBefore(paragraph, document.querySelector('script').childNodes[0])
      })
      .catch(function(error){
          document.querySelector('body').innerHTML = `<p> error: ${error.message} </p>`
      })
  }

  submitData('Marwa','@gmail')