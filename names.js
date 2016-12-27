function list(names) {
    if (names.length < 4) {
        switch (names.length) {
            case 0:
                return '';
            case 1:
                return names[0].name;
            case 2:
                return `${names[0].name} & ${names[1].name}`;
            case 3:
                return `${names[0].name}, ${names[1].name} & ${names[2].name}`;
        }
    } else
        var fun = [];
    for (name in names) {
        fun.push(names[name]);
    }
    let str = ''
    for (i = 0; i < fun.length; i++) {
        if (i == (fun.length - 2)) {
            str += `${fun[i].name}`;
        } else if (i == (fun.length - 3)) {
            str += ` ${fun[i].name} & `;
        } else if ((i != fun.length - 2) || (i != fun.length - 3)|| (i != fun.length - 1)) {
            str += `${fun[i].name}, `
        }
        console.log(str)
    }
    return str;
}
