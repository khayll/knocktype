import * as $ from "jquery";
import * as ko from 'knockout';
import service from '../framework/service';

@service
export default class HttpService {

    constructor() {

    }

    public static async get(): Promise<HttpService> {
        return new Promise<HttpService>( (resolve, reject) => {

            if ( !ko.components.isRegistered((<any>HttpService).name) ) {
                ko.components.register((<any>HttpService).name, 
                    {viewModel: HttpService});
            }
            ko.components.get((<any>HttpService), (component: any) => {
                resolve(component);
            });

        });
    }

}
