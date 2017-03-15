import * as ko from "knockout";
import { koComponent } from "../../framework/koComponent";
declare var injectHtml: any;

@koComponent({
    selector: 'hello',
    template: `
//=include Hello.html
    `
})
export class Hello {

    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(params: any) {
        this.language = ko.observable(params.language);
        this.framework = ko.observable(params.framework);
    }

}