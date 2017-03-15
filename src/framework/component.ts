import * as ko from "knockout";

interface ComponentOptions {
    selector: string;
    template?: string;
    templateUrl?: string;
}

export function component(options: ComponentOptions): Function {
    return (constructor: Function): void => {
        if ( options.template === undefined && options.templateUrl === undefined ) {
            throw new Error('Either template or templateUrl must be specified');
        }
        // TODO: handle templateUrl        
        registerComponent(constructor, options.selector, options.template);
    }
}

function registerComponent(constructor: Function, selector: string, template: string): void {
    if ( !ko.components.isRegistered(selector) ) {
        ko.components.register(selector, {viewModel: constructor, template: template});
    } 
}
