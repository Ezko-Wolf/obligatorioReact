const login = userData => {
    console.info(userData);
    let user = {
        "usuario": "Gaston24",
        "password": "tongas",
        "codigo": 200,
        "apiKey": "9f4251b00f6905fc25f4fecce0cc68b3",
        "id": "77"
    }

    return new Promise((resolve, reject) => {
        resolve(user);
    });
};

export {login};