const URL = 'http://127.0.0.1:3333/'



export default {
    getdata: async function () {
        return fetch(URL).then(response => response.json())
    },
    addUsers: async function (data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        const newUsers =  await fetch(URL + 'add-user', options).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

        return newUsers;
    },
    deleteUsers: async function (data) {
        console.log("call deleteUsers")
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        const newUsers =  await fetch(URL + 'delete-user', options).then(response => response.json())
           .then(data => console.log(data))
           .catch(error => console.error(error));
        console.log("newUsers", newUsers);
        return newUsers;
    },
    updateUsers: async function (data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        const newUsers =  await fetch(URL + 'update-user', options).then(response => response.json())
           .then(data => console.log(data))
           .catch(error => console.error(error));

        return newUsers;
    }

}