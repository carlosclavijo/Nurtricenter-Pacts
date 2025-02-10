import { useEffect, useState } from "react";
import { AdministratorService } from "./services/AdministratorServices";

const AdministratorPage = () => {
    const [administratorList, setAdministratorList] = useState([]);
    useEffect(() => {
        new AdministratorService().getAdministrators().then((response) => {
            setAdministratorList(response);
        });
    }, []);

    const getAdministratorList = () => {
        getAdministrators().then((response) => {
            console.log(response);
            setAdministratorList(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <div>
            <h1>Administrator List Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {administratorList.map((administrator) => {
                        return (<tr key={administrator.id}>
                                <td>{administrator.id}</td>
                                <td>{administrator.administratorName}</td>
                                <td>{administrator.administratorPhone}</td>
                            </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AdministratorPage;