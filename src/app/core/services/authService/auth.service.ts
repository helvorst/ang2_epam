import {Injectable} from "@angular/core";
import {userInfo} from "../../class/user.class";
import {userInfoStatus} from "../../enums/userInfoStatus";
import {Md5} from 'ts-md5/dist/md5';


@Injectable()
export class AuthService {
    fakeUser: userInfo = {
        name: 'Billy',
        surname: 'Joe',
        status: userInfoStatus.ordinary
    };

    private getToken(): string {
        return Md5.hashStr(this.fakeUser.name + this.fakeUser.surname).toString();
    };

    login(credentials): boolean {

        const info = JSON.stringify(this.fakeUser);
        localStorage.setItem(this.getToken(), info);
        return true;
    };

    logout(): boolean {
        localStorage.removeItem(this.getToken());
        return true;
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem(this.getToken());
        return token ? true : false;
    }

    getUserInfo(): userInfo {
        return this.fakeUser;
    }
}