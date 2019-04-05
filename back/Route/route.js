var express = require('express'),
app = express.Router();
var cors = require('cors')
var fs = require('fs');
      app.get('/list', function(req, res) {

        res.setHeader('Content-Type', 'text/plain');
        
            var filename = "./Route/note.json";
            var sa=fs.readFileSync(filename, "utf8");
            var obj = JSON.parse(sa)
           
         
               for(let i=0;i<obj.length;i++){ 
               
                   app.get(obj[i].image,function(req,resp){
                      
                        let t = '.'+obj[i].image
                       
                        let f=fs.readFileSync(t)
                        
                        resp.write(f)
                        resp.end()
                      

                   })
               }

                res.send(sa)
       

    });
    
var filename1 = "./Route/test.json";
var sa1=fs.readFileSync(filename1, "utf8");
    
    
   
    app.get('/test',cors(), function(req, res){
        res.setHeader('Content-Type', 'text/plain');
        
        var filename = "./Route/test.json";
        var sa=fs.readFileSync(filename, "utf8");
        var obj = JSON.parse(sa)
       
     
           for(let i=0;i<obj.length;i++){ 
           
               app.get(obj[i].image,function(req,resp){
                  
                    let t = '.'+obj[i].image
                   
                    let f=fs.readFileSync(t)
                    
                    resp.write(f)
                    resp.end()
                  

               })
           }
        res.write(sa1);
        res.end();
    });
    
        
 

 
    module.exports=app
    //other routes..
