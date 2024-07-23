import { request } from '../../axios'
// import { TokenResponse } from "../../../types";
import { ApiContract } from "../../axios";

// enum APIs {
//     LOGIN = "/auth/login",
//     REFRESH_TOKEN = "/auth/refreshtoken",
// }

class AuthService {
    private readonly api: ApiContract

    constructor(request: ApiContract) {
        this.api = request
    }

    // async login(username: string, password: string): Promise<TokenResponse> {
    //     return this.setTokens(await this.api.post<TokenResponse>(APIs.LOGIN, {
    //         username: username,
    //         password: password
    //     }))
    // }

    // async setTokens(response: TokenResponse): Promise<TokenResponse> {
    //     // TODO
    // }
}

const authService = new AuthService(request)
export default authService