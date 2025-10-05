import app from "./app.js";
import { constants } from "./constants.js";

app.get('/',(req,res)=>{
    res.status(200).json(
	{	
	    message : constants.ErrorMessage
	}
    )
})

app.listen(8000,()=>{
    console.log(`Server started at port 8000...`)
})
