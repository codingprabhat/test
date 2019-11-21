import { Injectable } from "@angular/core";

import { HttpHeaders, HttpClient } from "@angular/common/http";

import { TokenModel } from './token.model'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class AuthService {
    accessToken: string = "";
    token_api_url = "http://www.mcode2019.somee.com/token";
    constructor(private http: HttpClient) {

    }
    login(username: string, password: string): Observable<TokenModel> {
        let token_api_header = new HttpHeaders(
            {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        );
        let token_api_body = "grant_type=password&username=" + username + "&password=" + password;
        return this.http.post<TokenModel>(this.token_api_url, token_api_body, { headers: token_api_header });
    }
}