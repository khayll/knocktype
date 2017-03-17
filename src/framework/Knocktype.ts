import * as ko from "knockout";

/**
 * application container, currently on the global scope
 */
export class Knocktype {

  private components: Array<any> = [];
  public services: Array<any> = [];

  constructor() {

  }

  public component(component: any): Knocktype {
    this.components.push(component);
    return this;
  }

  public service(service: any): Knocktype {
    (<any>service).prototype.__knocktype = this;
    this.services.push(service);
    return this;
  }

  /**
   * bootsrap the container. registers components with knockout. creates singleton services.
   */
  public bootstrap(): void {

    for ( let service of this.services )  {

    }

    for ( let component of this.components ) {
      this.registerComponent(component.constructor, component.selector, component.template);
    }

    ko.applyBindings();
  }

  private registerComponent(constructor: Function, selector: string, template: string): void {
    if ( !ko.components.isRegistered(selector) ) {
      ko.components.register(selector, {viewModel: constructor, template: template});
    }
  }

}

var knocktype;

if ( (<any>window).knocktype === undefined ) {
  knocktype = new Knocktype();
  (<any>window).knocktype = knocktype;
} else {
  knocktype = (<any>window).knocktype;
}

export default knocktype;
