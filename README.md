## How does bridge pattern apply in Angular Forms
What is Abstraction?
Abstraction is a high-level control layer for some entities. And this high-level class isn't supposed to do any real work on its own. It should delegate the work to the implementation layer

Dependency Inversion Principle
High-level module should not depend on low level module, both should depend on abstraction


#### Implementation
interface ControlValueAccessor {
  public writeValue(): void;
  public registerOnChange(fn): void;
  public registerOnTouched(fn): void;
  public setDisabledState(isDisabled): void
}

@Directive()
class DefautValueAccessor extends ControlValueAccessor {}

@Directive()
class CheckboxControlValueAccessor extends ControlValueAccessor {}

@Directive()
class SelectControlValueAccessor extends ControlValueAccessor {}


#### Abstraction
export abstract class NgControl extends AbstractControlDirective {
  // Bridge between abstraction and implementation
  valueAccessor: ControlValueAccessor | null = null;
}

@Directive()
class FormControl extends NgControl {}

@Directive()
class FormControlName extends NgControl {}

@Directive()
class NgModel extends NgControl {}