

export class LoggerManager {

    
    public info(message: any) {
        console.info(`${new Date()}[INFO] ${message}`);
    }

}