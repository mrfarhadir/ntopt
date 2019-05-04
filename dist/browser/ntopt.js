var Ntopt = /** @class */ (function () {
    function Ntopt(num) {
        var str = num + '';
        var result = this.parse(str);
        this.result = result;
    }
    Ntopt.prototype.parse = function (x) {
        var _this = this;
        x = x.split("").reverse().join("");
        var arr = [];
        var _arr = [
            '',
            'هزار',
            'میلیون',
            'میلیارد',
            'تیلیارد'
        ];
        var t = [];
        for (var i = 0; i < x.length; i += 3) {
            var b = x[i + 1];
            var c = x[i + 2];
            if (i + 1 > x.length - 1)
                b = '';
            if (i + 2 > x.length - 1)
                c = '';
            var p = x[i] + '' + b + '' + c;
            p = p.split("").reverse().join("");
            arr.push(p);
        }
        var and = 'و';
        arr.forEach(function (a, i) {
            if (a == '000')
                return;
            if (i == arr.length - 1)
                and = '';
            t.push((_this.number2letters(a) + ' ' + _arr[i]) + (" " + and + " "));
        });
        var _t = t.reverse().join("");
        _t = _t.substring(0, _t.length - 2);
        return _t;
    };
    Ntopt.prototype.number2letters = function (n) {
        if (this.number2letter(n))
            return this.number2letter(n);
        n = n + '';
        var z = [100, 10, 1];
        if (n.length <= 2)
            z = [10, 1];
        var l = '';
        var and = 'و';
        var t = [];
        for (var i = 0; i < n.length; i++) {
            if (n[i] == '0')
                continue;
            var x = parseInt(n[i]) * z[i];
            l += this.number2letter(x + '') + (" " + and + " ");
        }
        l = l.substring(0, l.length - 2);
        return l;
    };
    Ntopt.prototype.number2letter = function (n) {
        var arr = [
            {
                i: 0,
                p: 'صفر'
            },
            {
                i: 1,
                p: 'یک'
            },
            {
                i: 2,
                p: 'دو'
            },
            {
                i: 3,
                p: 'سه'
            },
            {
                i: 4,
                p: 'چهار'
            },
            {
                i: 5,
                p: 'پنج'
            },
            {
                i: 6,
                p: 'شش'
            },
            {
                i: 7,
                p: 'هفت'
            },
            {
                i: 8,
                p: 'هشت'
            },
            {
                i: 9,
                p: 'نه'
            },
            {
                i: 10,
                p: 'ده'
            },
            {
                i: 11,
                p: 'یازده'
            },
            {
                i: 12,
                p: 'دوازده'
            },
            {
                i: 13,
                p: 'سیزده'
            },
            {
                i: 14,
                p: 'چهارده'
            },
            {
                i: 15,
                p: 'پانزده'
            },
            {
                i: 16,
                p: 'شانزده'
            },
            {
                i: 17,
                p: 'هفده'
            },
            {
                i: 18,
                p: 'هجده'
            },
            {
                i: 19,
                p: 'نوزده'
            },
            {
                i: 20,
                p: 'بیست'
            },
            {
                i: 30,
                p: 'سی'
            },
            {
                i: 40,
                p: 'چهل'
            },
            {
                i: 50,
                p: 'پنجاه'
            },
            {
                i: 60,
                p: 'شصت'
            },
            {
                i: 70,
                p: 'هفتاد'
            },
            {
                i: 80,
                p: 'هشتاد'
            },
            {
                i: 90,
                p: 'نود'
            },
            {
                i: 100,
                p: 'صد'
            },
            {
                i: 200,
                p: 'دویست'
            },
            {
                i: 300,
                p: 'سیصد'
            },
            {
                i: 400,
                p: 'چهارصد'
            },
            {
                i: 500,
                p: 'پانصد'
            },
            {
                i: 600,
                p: 'ششصد'
            },
            {
                i: 700,
                p: 'هفتصد'
            },
            {
                i: 800,
                p: 'هشتصد'
            },
            {
                i: 900,
                p: 'نهصد'
            },
        ];
        return arr.find(function (a) { return a.i + '' == n; }) ? arr.find(function (a) { return a.i + '' == n; }).p : false;
    };
    return Ntopt;
}());
