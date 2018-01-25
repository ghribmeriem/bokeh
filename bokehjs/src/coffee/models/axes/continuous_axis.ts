import {Axis} from "./axis"

export interface ContinuousAxisAttrs extends AxisAttrs {
}

export interface ContinuousAxis extends Axis, ContinuousAxisAttrs {}

export abstract class ContinuousAxis extends Axis {
  static initClass() {
    this.prototype.type = "ContinuousAxis"
  }
}

ContinuousAxis.initClass()
