import {Injectable} from '@angular/core'

@Injectable()
export class GreeterService {
private message:string = 'PRRIIVVAATTE';
getMessage() {
return this.message;
}
}
