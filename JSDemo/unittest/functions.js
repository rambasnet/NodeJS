function add(n1, n2) {
    return n1+n2;
}

const sub = (n1, n2) => n1-n2;

//exports.add = add
exports.sub = sub;
module.exports = {add, sub}
