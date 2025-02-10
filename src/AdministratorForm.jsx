import { useState } from "react";
import { AdministratorService } from "./services/AdministratorServices";

const AdministratorForm = () => {
    const [administratorName, setAdministratorName] = useState('');
    const [administratorPhone, setAdministratorPhone] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        new AdministratorService().addAdministrator(administratorName, administratorPhone)
            .then((response) => {
                console.log(response);
            })
    }

    return(
        <div>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label>Administrator Name</label>
                    <input type="text" value={administratorName} onChange={(e) => {
                        setAdministratorName(e.target.value);
                    }}/>
                </div>
                <div>
                    <label>Administrator Phone</label>
                    <input type="text" value={administratorPhone} onChange={(e) => {
                        setAdministratorPhone(e.target.value);
                    }}/>
                </div>
                <div>
                    <button type="submit">Add Administrator</button>
                </div>
            </form>
        </div>
    );
}

export default AdministratorForm;