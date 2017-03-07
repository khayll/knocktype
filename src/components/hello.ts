import * as ko from "knockout";

export class HelloViewModel {

    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(params: any) {
        this.language = ko.observable(params.language);
        this.framework = ko.observable(params.framework);
    }

    public static template: string = `
        <div>
            <p>
                Hello from
                <strong data-bind="text: language">todo</strong>
                and
                <strong data-bind="text: framework">todo</strong>!
            </p>

            <p>Language: <input data-bind="value: language" /></p>
            <p>Framework: <input data-bind="value: framework" /></p>
        </div>
    `;

}