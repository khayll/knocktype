import * as ko from "knockout";
import {HelloViewModel} from "./components/hello";

ko.components.register('hello', {viewModel: HelloViewModel, template: HelloViewModel.template });

ko.applyBindings();
