import { SUCCESS_STATUS } from "../constant";

class ResponseEntity {
    constructor(private status: string, private data:any, private message:string) {}

    generateResponse(){
        if(this.status === SUCCESS_STATUS) {
            return {
                status: this.status,
                data: this.data,
                message: this.message
            }
        }
        return {
            status: this.status,
            error: this.data,
            message: this.message  
        }
     
    }
}

export default ResponseEntity