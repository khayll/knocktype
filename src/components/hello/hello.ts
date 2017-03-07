import * as ko from "knockout";

declare var injectHtml: any;

export class HelloViewModel {

    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(params: any) {
        this.language = ko.observable(params.language);
        this.framework = ko.observable(params.framework);
    }

    public static template: string = '@@import components/hello/hello.html';    

}