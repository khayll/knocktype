import * as ko from "knockout";

interface ComponentOptions {
    selector: string;
    template?: string;
    templateUrl?: string;
}

export default function component(options: ComponentOptions): Function {
    return (constructor: Function): void => {
        if (options.template === undefined && options.templateUrl === undefined) {
            throw new Error('Either template or templateUrl must be specified');
        }

        constructor.prototype.selector = options.selector;
        constructor.prototype.template = options.template;
        constructor.prototype.templateUrl = options.templateUrl;

    }
}
