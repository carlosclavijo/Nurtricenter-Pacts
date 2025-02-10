import axios from "axios";

export class AdministratorService {
    constructor(baseUrl) {
        this.endpoint = baseUrl;
        if (!this.endpoint) {
            this.endpoint = 'http://localhost:5120';
        }
    }
    getAdministrators = () => {
        return new Promise((resolve, reject) => {
            axios.get(this.endpoint + "/api/Administrator")
                .then((response) => {
                    console.log(response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                });
        });
    }
    addAdministrator(administratorName, AdministratorPhone) {
        console.log('Administrator params', {
            administratorName, AdministratorPhone
        });
        return new Promise((resolve, reject) => {
            axios.post(this.endpoint + "/api/Administrator", {
                administratorName: administratorName,
                AdministratorPhone: AdministratorPhone
            }, {
                headers: {
                    'Accept': 'application/json'
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                alert("AAAAAAAAAAAAAAA");
                reject(error);
            });
        });
    }
}