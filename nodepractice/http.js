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

const crawler = require('./carwler');


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