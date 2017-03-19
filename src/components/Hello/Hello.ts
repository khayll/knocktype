import * as ko from "knockout";
import component from "../../framework/component";
import HttpService from '../../services/HttpService';

@component({
    selector: 'hello',
    template: `
//=include Hello.html
    `
})
export default class Hello {

    httpService: HttpService = new HttpService();

    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(params: any) {
        this.language = ko.observable(params.language);
        this.framework = ko.observable(params.framework);
    }

}