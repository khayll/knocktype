import * as ko from "knockout";

declare var injectHtml: any;

export class Hello {

    public static template: string = `
//=include Hello.html
    `;

    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(params: any) {
        this.language = ko.observable(params.language);
        this.framework = ko.observable(params.framework);
    }

}