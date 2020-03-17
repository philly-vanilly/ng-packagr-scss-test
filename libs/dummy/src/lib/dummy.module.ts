import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';

// tslint:disable-next-line: no-empty-interface
export interface Config {
  title: string;
}

export const ConfigService = new InjectionToken<Config>(
  "Configuration for Dummy"
);

@NgModule({
  imports: [CommonModule],
  declarations: [DummyComponent],
  exports: [DummyComponent]
})
export class DummyModule {
  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: DummyModule,
      providers: [
        {
          provide: ConfigService,
          useValue: config
        }
      ]
    };
  }
}
