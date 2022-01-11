function receivesAFunction (spy) {
    return spy();
}

function returnsANamedFunction () {
    return function fn() {
        return fn();
    };
}

function returnsAnAnonymousFunction() {
    return function() {
    };
}