import express from 'express'
function main() {
    const app = express()
    app.listen(8080,()=>{
        console.log("server running on port 8080")
    })
}

main()