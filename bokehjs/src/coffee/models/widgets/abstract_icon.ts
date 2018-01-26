import {Widget, WidgetView} from "./widget"

export abstract class AbstractIconView extends WidgetView {
  model: AbstractIcon
}

export namespace AbstractIcon {
  export interface Attrs extends Widget.Attrs {}
}

export interface AbstractIcon extends Widget, AbstractIcon.Attrs {}

export abstract class AbstractIcon extends Widget {
  static initClass() {
    this.prototype.type = "AbstractIcon"
  }
}

AbstractIcon.initClass()
