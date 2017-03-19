# Knocktype [![Build Status](https://travis-ci.org/khayll/knocktype.svg?branch=master)](https://travis-ci.org/khayll/knocktype)

Knocktype is an application container over Knockout, that supports singleton services in addition to components. It's written using  Typescript, and is making use of decorators to conveniently define components and service. This project contains the framework and is a template project as well. 

### Using requirejs

RequireJS is used to handle dependencies.

### Application container

Application container is defined globally in `window.knocktype`. This also means, that in the current form it's not possible to have multiple applications in the same window.
The container is initialized, once it's imported and used.

```javascript
import knocktype from './framework/Knocktype';

export class App {
  
  constructor() {
    knocktype.bootstrap();
  }

}
```

### Components

Knockout component metadata is defined with decorators:

```javascript
@component({
    selector: 'hello',
    template: '<div> hello </div>'
})
export class Hello {
    constructor() {

    }
}
```

Components defined with the `@component` decorator are registered with 
`knocktype.component(Hello.prototype);` into the application container.

However they are only registered into Knockout once `knocktype.bootstrap();` is called, like this:

```javascript
import Hello from "./components/Hello/Hello";
import knocktype from './framework/Knocktype';

export class App {
  
  constructor() {
    knocktype.component(Hello.prototype);
    knocktype.bootstrap();
  }

}
```



### Services

Services are singletons, and are registered by name into the application container. To define a service you only need to put the `@service` decorator on the object definition. Note, that services cannot have constructor parameters.

```javascript
import service from '../framework/service';

@service
export default class HttpService {
    constructor() {

    }
}
```

To get the reference for the singleton instance, just simply use `new`, in the background this will create the sinlgeton instance, or it will return the reference.

```javascript
import HttpService from '../../services/HttpService';

class UseService {

    private httpService: HttpService = new HttpService();

    public doSomething() {
        this.httpService.get('some/service?param=true');
    }

}
```


