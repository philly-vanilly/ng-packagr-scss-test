import {Component, Inject, OnInit} from '@angular/core';
import {Config, ConfigService} from "../dummy.module";

@Component({
  selector: 'sample-workspace-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  constructor(
     @Inject(ConfigService) public config: Config
  ) { }

  ngOnInit(): void {
  }

}
