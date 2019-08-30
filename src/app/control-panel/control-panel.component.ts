import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from "@angular/core";
import { TextFormat } from "../common/TextFormat";
@Component({
  selector: "app-control-panel",
  templateUrl: "./control-panel.component.html",
  styleUrls: ["./control-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {
  @Output() formatText = new EventEmitter<TextFormat>();
  bold() {
    this.formatText.emit(new TextFormat("B"));
  }
  italic() {
    this.formatText.emit(new TextFormat("I"));
  }
  underline() {
    this.formatText.emit(new TextFormat("U"));
  }
}
