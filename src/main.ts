import * as ko from "knockout";
import {Hello} from "./components/Hello/Hello";

ko.components.register('hello', {viewModel: Hello, template: Hello.template });

ko.applyBindings();
