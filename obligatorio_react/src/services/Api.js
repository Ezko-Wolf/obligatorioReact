const URI = 'http://xpense.develotion.com';

const login = userData => {

    let data = {
        "usuario": userData.userName,
        "password": userData.pass
    };

    return fetch(`${URI}/login.php`,{
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

const registro = userData => {

    let data = {
        "usuario": userData.userName,
        "password": userData.pass
    };

    return fetch(`${URI}/usuarios.php`,{
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

const obtenerRubros = user => { 
    console.info('llamo al get');   
    return fetch(`${URI}/rubros.php`,{
    method : 'GET',
    headers:{
        'Cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'apikey' : user.apiKey
    }}).then(res => res.status === 200 ? res.json() : null)
    .catch(error => {
        console.error(error);
        return -1;
    });    
};

const altaGasto = (dataGasto, user) => {
    let data = {
        "nombre":dataGasto.nombre,
        "monto": dataGasto.monto,
        "idUsuario": user.id,
        "idRubro": dataGasto.idRubro
    };
    return fetch(`${URI}/gastos.php`,{
    method : 'POST',
    body: JSON.stringify(data),
    headers:{
        'Cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'apikey' : user.apiKey
    }}).then(res => res.status === 200 ? res.json() : null)
    .catch(error => {
        console.error(error);
        return -1;
    });
    
}

const obtenerGastos = user => {

    return fetch(`${URI}/gastos.php?id=${user.id}`,{
    method : 'GET',
    headers:{
        'Cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'apikey' : user.apiKey
    }}).then(res => res.status === 200 ? res.json() : null)
    .catch(error => {
        console.error(error);
        return -1;
    });    
}

const bajaGasto = (user, idGasto) => {
    let data = {
        "idGasto":idGasto
    };

    return fetch(`${URI}/gastos.php`,{
    method : 'DELETE',
    body : JSON.stringify(data),
    headers:{
        'Content-Type': 'application/json',
        'apikey' : user.apiKey
    }}).then(res => res.status === 200 ? res.json() : null)
    .catch(error => {
        console.info(error);
        return -1;
    });    
}

export {login, registro, obtenerRubros, altaGasto, obtenerGastos, bajaGasto};