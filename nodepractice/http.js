const fs =require('fs');
const http = require('http'); 
const url = require('url');
const request = require('request');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');
const ejs = require('ejs');
const pug = require('pug');
const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const dateformat = require('dateformat');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const multipart = require('connect-multiparty');
const session = require('express-session');
const parseurl = require('parseurl');
const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const mysql = require('mysql');

const crawler = require('./carwler');
const { runInNewContext } = require('vm');
const { findSeries } = require('async');
const { EDESTADDRREQ } = require('constants');
const { schedulingPolicy } = require('cluster');


http.createServer((req, res) => {
   const get = url.parse(req.url, true).query; 
   if (req.method === 'GET') {
     res.writeHead(200, {'Context-Type' : 'text/html'});
     res.end(`<h1>${JSON.stringify(get)}</h1>`);
     console.log(`${req.method}방식의 요청입니다.`); 
   } else if (req.method === 'POST') {
     console.log(`${req.method}방식의 요청입니다.`);
   }
}).listen(50000, () => {
  console.log("서버가 동작중입니다.");
})

http.createServer((req, res) => {
  fs.readFile('./images/city1.jpeg', (err,data) => {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(data);
  });
}).listen(50001, ()=> {
  console.log('서버가 동작중입니다. 5001');
});


http.createServer((req,res) => {
  let pathname = url.parse(req.url);
  pathname = url.parse(req.url).pathname;

  if(pathname === '/') {
    fs.readFile('./html/138_index.html', (err, data) => {
      res.writeHead(200, { 'Content-type': 'text/html'});
      res.end(data);
      console.log(url.parse(req.url));
    });
  } else if(pathname === '/example') {
    fs.readFile('./html/136_example.html', (err, data) => {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(data);
      console.log(url.parse(req.url));
    });
  }
}).listen(50002, () => {
  console.log('서버가 동작중입니다. 5002');
});

http.createServer((req, res) => {
 
  if(req.method ==='GET') {
    fs.readFile('/Users/johyesu/DEV/nodePractice/html/140_exmaple.html', (err, data) => {
      console.log(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
      console.log(`${req.method}방식의 요청입니다.`);
    });
  } else if(req.method === 'post') {
    req.on('data', (data) => {
      res.writeHead(200, {'Content -Type' : 'text/html'});
      res.end(data);
      console.log(`${req.method}방식의 요청입니다.`);
    });
  }
}).listen(50003, () => {
  console.log('서버가 작동중입니다. 50003');
});

http.createServer((reqeust, response) => {
  response.writeHead(200, {
    'Content-Type' : 'text/html', 
    'Set-Cookie' : ['soju = grilledpork', 'beer = chicken'],
  });
  response.end(`<h1>${reqeust.headers.cookie}</h1>`);
}).listen(50004, () => {
  console.log('서버가 동작중입니다. 50004');
});

http.createServer((req,res) => {
  if(req.headers.cookie) {
    const cookie = req.headers.cookie.split(';').map((element) => {
      element = element.split('=');
      return {
        name: element[0],
        value: element[1],
      };
    });
    res.end(`<h1>${JSON.stringify(cookie)}</h1>`);
  } else {
    res.writeHead(200, {
      'Content - Type' : 'Text/html',
      'Set-cookie' : ['soju = grilledpork', 'beer = chickeen'],
    });
    res.end(`<h1>${'쿠키 생성함'}</h1>`);
  }
}).listen(5005, () => {
  console.log('서버가 동작중입니다., 5005');
});

// request({
//   url : 'http://www.google.com/',
//   method: 'GET',
// }, (error, response, body) => console.log(body));

// request({
//   url: 'https://www.google.com/search',
//   method: 'GET',
//   qs : {q : '신사역 맛집'},
//   encoding : null,
// }, (error, response, body) => {
//   const decodedResult = iconv.decode(body, 'EUC-KR').toString();
//   console.log(decodedResult);
// }); 

// const $ = cheerio.load('<html><h2 class="title">hello</h2></html>');
// const titleText = $('h2.title').text();

// console.log('titleText:', titleText);

// const parse = (decodedResult) => {
//   console.log(decodedResult);
//   const $ = cheerio.load(decodedResult);
//   const titles = $('h3.r').find('a');
//   for (let i = 0; i < titles.length; i +=1) {
//     const title = $(titles[i]).text();
//     console.log(title);
//   }
// };

// crawler.crawl(parse)({ q: '서울대입구역 맛집'});

// const parse2 = (decodedResult) => {
  
//   const $ = cheerio.loaf(decodedResult);
//   const titles = $('h3.r').find('a');
//   titles.each((index, element) => {
//     const title = $(element).text();
//     console.log(title);
//     fs.appendFile('./bye.text', `${title}\n`);
//   });
// };

// crawler.crawl(parse)({ q: '샤로수길 맛집'});

http.createServer((req, res) => {
  fs.readFile('155_ejs_example.ejs', 'utf-8', (err, data) => {
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    res.end(ejs.render(data, {
      table_name: 'Multiplication table 19 x ?',
      number: '19',
    }));
  });
}).listen(50006, () => {
  console.log('서버가 동작중입니다. 50006');
});

http.createServer((req,res) => {
  fs.readFile('./nodepractice/156_pug_example.pug', 'utf-8', (error, data) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    const fn = pug.compile(data);
    res.end(fn());
  })
}).listen(50007, () => {
  console.log('서버가 작동합니다. 50000');
});

http.createServer((req, res) => {
  fs.readFile('./nodepractice/157_pug_example2.pug', 'utf-8', (error,data) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    const fn = pug.compile(data);
    res.end(fn());
  })
}).listen(50008, () => {
  console.log('서버가 작동합니다. 50008');
});

http.createServer((req,res) => {
  fs.readFile('./nodepractice/158_pug_example3.pug', 'utf-8', (error,data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      const fn = pug.compile(data);
      res.end(fn({
        table_name: 'Multiplication table 19 X ?',
        number: '19',
      }));
  });
}).listen(50009, () => {
  console.log('서버가 동작합니다. 50008');
});

const tsformat = () => {
  return dateformat(now, "dddd, mmmm ds,yyyy, h:MM:ss TT");
}

const logger = winston.createLogger ({
  transports: [
    new (winston.transports.Console)({
        timestamp : tsformat,
        colorize : true,
        showlevel : true,
        level : 'debug', 
    }),
    new (winstonDaily) ({
        level : 'info',
        filename: "Log/logs",
        timestamp : tsformat,
        datePattern :'_yyyy-mm-dd.log',
        showlevel : true,
        maxsize: 1000000,
        maxFiles: 5,
    }),
    ],
    exceptionHandlers: [
      new (winstonDaily) ({
        level: 'info',
        filename: 'Log/exception',
        timestamp: tsformat,
        datePattern: '_yyyy-MM-dd.log',
        showlevel: true,
        maxsize: 1000000,
        maxFiles: 5,
      }),
      new (winston.transports.Console) ({
        timestamp: tsformat,
        colorize: true,
        showlevel: true,
        level: 'debug',
      }),
    ],
});

logger.info('인포 로깅');
logger.error('에러 로깅'); 
                             
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello express module');
// });

app.listen(5002, () => {
  console.log('Server is running port 5002!');
});

// app.get('/', (req,res) => {
//   const result = [];
//   const multipleNumber = 9;
//   for (let i = 1; i < 5; i++) {
//     result.push({
//       number : `${multipleNumber} x ${i}`,
//       multiple : multipleNumber * i,
//     });
//   }
//   res.send(result);
// });

// app.get('/error', (req,res) => {
//   res.status(404).send('404 ERROR');
// });

// app.listen(3003, () => {
//   console.log('Server is running port 3003!');
// });
const date = new Date(2021, 1,1,19, 27, 0);

console.log(date);

const j = schedule.scheduleJob(date, () => {
  console.log('no pain, no gain');
});

const rule = new schedule.RecurrenceRule();
rule.minute = 32;

const k = schedule.scheduleJob(rule, () => {
  console.log('Laziness is nothing more then the habit of resting before you get tired');
});

j.cancel();
k.cancel();

app.use(session({
  secret: 'keyboard dog',
  resave : false,
  saveUninitialized: true,
}));

app.use((req,res,next) => {
  if(!req.session.views) {
    req.session.views = {};
  }
  console.log(req.session);

  const pathname = parseurl(req).pathname;

  req.session.views[pathname] = (req.session.views[pathname] || 0) +1;

  next();
});

app.get('/puddle', (req,res) => {
  res.send(`Hello puddle! you viewed this page ${req.session.views['/puddle']} times`);
});

app.get('/biggle', (req,res) => {
  res.send(`Hello biggle@ you viewed this page ${req.session.views['/biggle']} times`);
});

app.use(multipart({uploadDir: `${__dirname}/upload`}));

app.get('/', (req,res) => {
  fs.readFile( `${__dirname}/connect-multiparty.html`, (error,data) => {
    res.send(data.toString());
  });
});

app.post('/', (req,res) => {
  const imgFile = req.files.image;
  const outputPath = `${__dirname}/upload/${Date.now()}_${imgFile.name}`;
  console.log(outputPath);
  console.log(req.body, req.files);
  fs.rename(imgFile.path, outputPath, ()=> {
    res.redirect('/');
  });
});

app.use(cookieParser());

app.get('/set', (req,res) => {
  console.log('Set Cookie 호출');
  res.cookie('user', {
    id: '0070',
    name: 'jhs',
    authorized: true,
  });
  res.redirect('/get');
});

app.get('/get', (req,res) => {
  console.log('Get Cookie 호출');
  res.send(req.cookies);
});

app.use(morgan('combined'));
app.use(morgan('common'));
app.use(morgan(':method + :date'));
app.use(morgan(':status + :url'));
app.use((req,res) => {
  res.send('express morgan');
});

app.get('/one', (req,res) => {
  res.send('<a href="/two">Street 200</a>');
});


app.get('/two', (req,res) => {
    res.send('<a href="/one">Street 100</a>');
});

app.get('/three/:number', (req,res) => {
  const streetNumber = req.params.number;
  res.send(`${streetNumber}Street`);
});

app.get('/four/:number', (req,res) => {
  const aveNumber = req.params.number; 
  res.send(`${aveNumber}Street`);
});

app.listen(3003, () => {
  console.log('3003!');
});


app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.use(express.static(`login`));

app.use((req,res) => {
  const userId = req.body.userid || req.query.userid;
  const userPassword = req.body.password || req.query.password;

  res.writeHead('200', {
    'Content-Type':'text/html;charset=utf8'});
  res.write('<h1>Login ID와 PW의 결과값입니다.</h1>');
  res.write(`<div><p>${userId}</p></div>`);
  res.write(`<div><p>${userPassword}</p></div>`);
  res.end(JSON.stringify(req.body, null, 2));
});

app.use(express.static('images'));
app.use((req,res) => {
  res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
  res.end('<img src="city1.jpeg" width=100%>');
});


app.use((req,res, next) => {
  console.log('첫번째 미들웨어요청');
  req.user1 = '철수';
  next();
});

app.use((req,res, next) => {
  console.log('두번째 미들웨어요청');
  req.user2 = '영이';
  next();
});

app.use((req,res,next) => {
  console.log('세번째 미들웨어 요청');
  res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});

  res.write(`<div><p>${req.user1}</p></div>`);
  res.write(`<div><p>${req.user2}</p></div>`);
  res.end('<h1>express 서버에서 응답한 결과</h1>');
});


app.use((req,res) => {
  const agent = req.header('User-Agent');
  const paramName = req.query.name;
  const browserChrome = 'Hello Chrome';
  const browserOthers = 'Hello others'; 

  console.log("header", req.headers);
  console.log("baseUrl",req.baseUrl);
  console.log("hostname",req.hostname);
  console.log("protocol",req.protocol);

  if(agent.toLowerCase().match(/chrome/)) {
    res.write(`<div><p>${browserChrome}</p></div>`);
  } else {
    res.write(`<div><p>${browserOthers}</p></div>`);
  }
  res.write(`<div><p>${agent}</p></div>`);
  res.write(`<div><p>${paramName}</p></div>`);
  res.end();
});



// const connection = mysql.createConnection({
//   host : 'localhost',
//   user: 'root',
//   password: '',
//   database : 'comicbook',
//   port: '3306',
// });

//데이터베이스 연결
// connection.connect();

//테이블생성
// connection.query(
//   'create table books (number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, genre VARCHAR(20) NOT NULL, name VARCHAR(50) NOT NULL, writer VARCHAR(30) NOT NULL, releasedate date NOT NULL);', 
//   (error, results, fields) => {
//       if (error) throw error;
//       console.log(results);
//     });

//     connection.query('describe books', (error, results, fields) => {
//       if(error) throw error;
//       console.log(results);
//     });

// connection.query('insert into books (genre,name,writer, releasedate) values\
//       (\'fantasy\', \'LUMINE\' , \'Emma Krogell\' , \'2015-05-15\'), \
//       (\'comedy\', \'Mygiant Nerd Boyfriend\', \'fishball\', \'2017-03-03\');',
//       (error, results, fields) => {
//         if(error) throw error;
//         console.log(results);
//       });

//     connection.end();

