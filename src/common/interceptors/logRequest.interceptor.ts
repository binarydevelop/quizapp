import { CallHandler, ExecutionContext, Logger, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

export class logRequestInterceptor implements NestInterceptor{
    constructor(private logger: Logger){}
    intercept(context: ExecutionContext , next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        this.logger.debug({ Request: {URL: request.url,
                            Method: request.method,
                            Host: request.host,
                            Message: 'Request successfully sent.'}})
        return next
            .handle()
    }
}