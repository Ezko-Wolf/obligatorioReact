const login = userData => {

    let data = {
        "usuario": userData.userName,
        "password": userData.pass
    };

    return fetch('http://xpense.develotion.com/login.php',{
    method : 'POST',
    body: JSON.stringify(data),
    headers:{
        'Content-Type': 'application/json'
    }}).then(res => res.status === 200 ? res.json() : null)
    .catch(error => {
        console.error(error);
        return -1;
    });
    
};

export {login};