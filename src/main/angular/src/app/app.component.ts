import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {interval, Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

interface Dummy {
    hello: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public readonly dummy$: Observable<Dummy>;

    constructor(
        private readonly http: HttpClient,
    ) {
        this.dummy$ = interval(10000).pipe(
            switchMap(() => http.post<Dummy>('/dummy', null, {
                observe: "body"
            }))
        );
    }
}
