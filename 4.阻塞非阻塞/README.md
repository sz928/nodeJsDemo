阻塞与非阻塞
===========

## 知识点

* 阻塞处理
* 非阻塞处理(nodejs)

### demo

~~~ javascript

// 模拟 阻塞处理
/**更新数据库 */
function undb1() {
    var start = new Date().getTime();
    while (new Date().getTime() < start + 3000);
}
undb1();
console.log("db1-数据库更新完毕");
console.log("hello,world!");


// 非阻塞处理
function undb2(done) {
    setTimeout(() => {
        done();
    }, 3000)
}
undb2(() => {
    console.log("db2-数据库更新完毕");
})

console.log("hello,world!");

~~~ 