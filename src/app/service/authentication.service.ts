import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface LoginModel {
  email: String;
  password: String;
}

@Injectable()
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<LoginModel>;
  public currentUser: Observable<LoginModel>;
  readonly BASE_URL = "https://miso4202-back.herokuapp.com";

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(endpoint: string, loginModel: LoginModel): Observable<any> {
    return this.http.post<any>(this.BASE_URL + endpoint, loginModel).pipe(
      map((response) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        this.currentUserSubject.next(response.data);
        return response.data;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
