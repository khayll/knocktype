import knocktype, { Knocktype } from './Knocktype';

function construct(constructor: any) {
    var c: any = function () {
        return constructor.apply(this);
  }
  c.prototype = constructor.prototype;
  return new c();
}

export default function service(target: any): any {
  var original = target;

  //TODO: throw error if service has constructor parameters

  var singleton: any = function () {

    let instance = knocktype.services[target.name];
    if (instance !== undefined) {
      return instance;
    }
    instance = construct(original);
    knocktype.services[target.name] = instance;

    return instance;
  }

  singleton.prototype = original.prototype;
  return singleton;

}

