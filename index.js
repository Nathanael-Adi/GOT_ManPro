import path from 'path'
import express from 'express'
import mysql from 'mysql'

import * as url from 'url';
import { rejects } from 'assert';
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const pool = mysql.createPool({
    host: 'localhost',
	user: 'root',
	password: '',
	database: 'got_character_book1',
    dateStrings: true,
    connectionLimit: 10
});

const port = 8089;
const app = express();

app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, 'views'),
path.join(__dirname, 'views/Profile')

]);

app.use(express.static(path.resolve('public')));
app.use(express.static(__dirname + '/public'));

const dbConnect = () => {
    return new Promise ((resolve, rejects) => {
        pool.getConnection((err, conn) => {
            if (err)
            {
               rejects(err);
            }
            else
            {
                resolve(conn);
            }
        })
    })
};

app.get ('/', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('homepage');
});

app.get ('/homepage', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('homepage');
});

//buku1
const getBook1 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * from book1`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else{
                resolve(result)
            }
        })
    })
};

app.get ('/buku', async (req, res) => {
    const conn = await dbConnect();
    var userData = await getBook1(conn);
    conn.release();
    res.render('buku1', {userData});
});

//buku2
const getBook2 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * from book2`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else{
                resolve(result)
            }
        })
    })
};

app.get ('/buku2', async (req, res) => {
    const conn = await dbConnect();
    var userData = await getBook2(conn);
    conn.release();
    res.render('buku2', {userData});
});

//buku3
const getBook3 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * from book3`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else{
                resolve(result)
            }
        })
    })
};

app.get ('/buku3', async (req, res) => {
    const conn = await dbConnect();
    var userData = await getBook3(conn);
    conn.release();
    res.render('buku3', {userData});
});

//buku4
const getBook4 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * from book4`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else{
                resolve(result)
            }
        })
    })
};

app.get ('/buku4', async (req, res) => {
    const conn = await dbConnect();
    var userData = await getBook4(conn);
    conn.release();
    res.render('buku4', {userData});
});

//buku5
const getBook5 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * from book5`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else{
                resolve(result)
            }
        })
    })
};

app.get ('/buku5', async (req, res) => {
    const conn = await dbConnect();
    var userData = await getBook5(conn);
    conn.release();
    res.render('buku5', {userData});
});

//grafBuku1
const getGraph1 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * from book1`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else{
                resolve(result)
            }
        })
    })
};

app.get ('/grafikBar1', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('grafBuku1');
});

app.get ('/grafikBar2', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('grafBuku2');
});

app.get ('/grafikBar3', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('grafBuku3');
});

app.get ('/grafikBar4', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('grafBuku4');
});

app.get ('/grafikBar5', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('grafBuku5');
});

app.get ('/grafikTakBerarah1', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('graphTakBerarahBook1');
});

app.get ('/grafikTakBerarah2', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('graphTakBerarahBook2');
});

app.get ('/grafikTakBerarah3', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('graphTakBerarahBook3');
});

app.get ('/grafikTakBerarah4', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('graphTakBerarahBook4');
});

app.get ('/grafikTakBerarah5', async (req, res) => {
    const conn = await dbConnect();
    conn.release();
    res.render('graphTakBerarahBook5');
});

app.listen (port, () => {
    console.log("Connected to port: " + port)
});