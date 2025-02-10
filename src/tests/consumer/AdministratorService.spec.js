import { MatchersV3, PactV3 } from "@pact-foundation/pact";
import { AdministratorService } from "../../services/AdministratorServices.js";
import { createAdministratorRequestBody, createAdministratorResponse, responseAdministratorList } from "../PactResponses.js";
const { like } = MatchersV3;

describe("Administrators API", () => {
    let administratorSercie;
    const provider = new PactV3({
        consumer: 'react-client',
        provider: 'inventory-service'
    });

    describe('get list of administrators', () => {
        it('returns a list of administrators', () => {
            provider.given('make a query of administrators')
                .uponReceiving('An empty body')
                .withRequest({
                    method: 'GET',
                    path: '/api/Administrator'
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(responseAdministratorList)
                });
            
            return provider.executeTest(async mockServer => {
                AdministratorService = new AdministratorService(mockServer.url);
                return AdministratorService.getAdministrators().then((response) => {
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).to.deep.equal(responseAdministratorList);
                    expect(response).to.be.an('array');
                    expect(response).to.have.lengthOf(2);
                    const values = responsemap((administrator) => administrator.administratorName);
                    expect(values).to.include('Carlos Clavijo Fernandez');
                });
            });
        });
    });

    describe('Add an administrator', () => {
        it('returns a created Id', () => {
            //Arrange
            provider.given('create administrator')
                .uponReceiving('data to create an administrator')
                .withRequest({
                    method: 'POST',
                    path: '/api/Administrator',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: crearItemRequestBody
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(createAdministratorResponse)
                });
            return provider.executeTest(async mockServer => {
                // Act
                administratorService = new AdministratorService(mockServer.url);
                return administratorService.addAdministrator(createAdministratorRequestBody.administratorName, createAdministratorRequestBody.administratorPhone).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(createAdministratorResponse);
                });
            });

        })
    });
})