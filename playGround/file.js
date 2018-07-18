// const url = require('url');
// const fs = require('fs');
// const http = require('http');
// const up = require('upper-case');

// http.createServer((req, res) => {
//     var q = url.parse(req.url, true);
//     var filename = '.' + q.pathname;
//     fs.readFile(filename, (err, data) => {
//         if(err) {
//             // res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(up('Error Not Found'))
//             res.end()
//         }
//         else {
//         // res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data)
//         res.end()
//         }
        
//     })
// }).listen(3000)


// Next one
// var events = require('events');
// var eventEmmiter = new events.EventEmitter();

// var eventTracker = () => {
//     console.log('Event is traced');
// }

// eventEmmiter.on('scream', eventTracker);

// eventEmmiter.emit('scream')

// 2nd one
// const http = require('http');
// const formidable = require('formidable');
// const fs = require('fs')
// var form = new formidable.IncomingForm();

// http.createServer((req, res) => {
//     if(req.url === '/fileupload') {
//         form.parse(req, (err, fields, files) => {
//             var oldPath = files.filetoupload.path;
//             var newPath = '/Users/somyabiswal/Documents/JavaScript/Web-Server/playGround' + files.filetoupload.name;
//             fs.rename(oldPath, newPath , (err) => {
//                 if(err) throw err;
//                 res.write('File uploaded and moved');
//                 res.end();
//             })
//         })
//     }

//     else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//     }
// }).listen(3000)

// 3rd one

// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200,{'Content-Type': 'text/plan'});
//     res.write('Heloo')
//     res.end();
// }).listen(3000, () => {
//     console.log('Hello cons')
// });


//4th one

var twoMulpl = (val1, callback) => {
    callback(val1 * 2)
}


twoMulpl(3 ,(errMsg, info) => {
    if(errMsg) {
        console.log(errMsg);
    }
    else {
        console.log(info+1);
    }
})


