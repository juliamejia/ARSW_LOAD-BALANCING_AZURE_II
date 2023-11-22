
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth

    const callFib = dynamicFibonacci();
    answer = callFib(nth);


    function dynamicFibonacci() {
        let cache = {};

        return function fib(n) {
            if (n in cache) {
                return cache[n];
            } else if (n < 2) {
                return n;
            } else {
                cache[n] = BigInt(fib(n - 1)) + BigInt(fib(n - 2));
                return BigInt(cache[n]);
            }
        }
    }

    context.res = {
        body: answer.toString()
    };
}