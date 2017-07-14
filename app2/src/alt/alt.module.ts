import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AltDynamicFormComponent } from "./alt-dynamic-form.component";
import { AltBase } from "./alt-base";
import { AltOption } from "./alt-option";
import { AltTextbox } from "./alt-textbox";
import { AltDropdown } from "./alt-dropdown";
import { AltTextarea } from "./alt-textarea";
import { AltCheckboxGroup } from "./alt-checkbox-group";
import { AltRadioGroup } from "./alt-radio-group";
import { AltEventsService } from "./alt-events.service";

@NgModule({
    declarations: [
        AltDynamicFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [AltDynamicFormComponent],
    providers: [AltEventsService]
})
export class AltModule { }