function main() {
    setTimeout(function () {
        try {
            console.log("one");
            setTimeout(function () {
                try {
                    console.log("two");

                    setTimeout(function () {
                        try {
                            console.log("three");

                            setTimeout(function () {
                                try {
                                    console.log("four");

                                    setTimeout(function () {
                                        try {
                                            console.log("five");

                                            setTimeout(function () {
                                                console.log("done");
                                            }, 300);
                                        } catch (err) {
                                            console.log("error");
                                        }
                                    }, 300);
                                } catch (err) {
                                    console.log("error");
                                }
                            }, 300);
                        } catch (err) {
                            console.log("error");
                        }
                    }, 300);
                } catch (err) {
                    console.log("error");
                }
            }, 300);
        } catch (err) {
            console.log("error");
        }

    }, 300);
}

main();