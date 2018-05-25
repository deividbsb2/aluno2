import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    panelOpenState = false;
    isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
    constructor(private breakpointObserver: BreakpointObserver, private swUpdate: SwUpdate) {
    }

    ngOnInit() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if (confirm('New version available. Load New Version?')) {
                    window.location.reload();
                }
            });
        }
    }
}
