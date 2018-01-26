/* XXX: partial */
import {Model} from "../../model"

export namespace Expression {
  export interface Attrs extends Model.Attrs {}
}

export interface Expression extends Model, Expression.Attrs {}

export abstract class Expression extends Model {

  static initClass() {
    this.prototype.type = "Expression"
  }

  initialize(): void {
    super.initialize();
    this._connected= {};
    this._result = {};
  }

  _v_compute(source) {
    if ((this._connected[source.id] == null)) {
      this.connect(source.change, function() { return this._result[source.id] = null; });
      this._connected[source.id] = true;
    }

    if (this._result[source.id] != null) {
      return this._result[source.id];
    }

    this._result[source.id] = this.v_compute(source);
    return this._result[source.id];
  }
}
Expression.initClass()
