let num = 1;
setTimeout(function () {
    console.log("num", num);
    num++;

    setTimeout(function () {
        console.log("num", num);
        num++;

        setTimeout(function () {
            console.log("num", num);
            num++;

            setTimeout(function () {
                console.log("num", num);
                num++;

                setTimeout(function () {
                    console.log("num", num);
                }, 300);
            }, 300);
        }, 300);
    }, 300);
}, 300);