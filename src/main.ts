import * as ko from "knockout";
import Hello from "./components/Hello/Hello";
import knocktype from './framework/Knocktype';

export class App {
  
  constructor() {
    knocktype.component(Hello.prototype);
    knocktype.bootstrap();
  }

}
