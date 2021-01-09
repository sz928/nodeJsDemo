/** 模拟更新数据库*/
function dbUpdate(sql, done) {
    setTimeout(() => {
        console.log(sql + '更新成功!');
        done();
    }, 800)
}
dbUpdate('sql1', () => {
    dbUpdate('sql2', () => {
        dbUpdate('sql3', () => {})
    })
})


// Promise函数嵌套解决
function dbUpdateAsync(sql) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(sql + '更新成功!');
            resolve(sql + ' ok');
        }, 800)
    })
    return p;
}
dbUpdateAsync('sql1')
    .then(() => dbUpdateAsync('sql2'))
    .then(() => dbUpdateAsync('sql3'));


// 代码更加简洁的 async/await
async function updateDb() {
    let sql1 = await dbUpdateAsync('sql1');
    let sql2 = await dbUpdateAsync('sql2');
    let sql3 = await dbUpdateAsync('sql3');
    console.log(sql1, sql2, sql3);

}
updateDb();