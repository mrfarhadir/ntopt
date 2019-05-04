
export default class Ntopt {
    result: string
    constructor(num: number) {
        let str = num + ''
        let result = this.parse(str)
        this.result = result
    }
    private parse(x: string): string {
        x = x.split("").reverse().join("")
        let arr = []
        let _arr = [
            '',
            'هزار',
            'میلیون',
            'میلیارد',
            'تیلیارد'
        ]
        let t: Array<string> = []
        for (let i = 0; i < x.length; i += 3) {
            let b = x[i + 1]
            let c = x[i + 2]
            if (i + 1 > x.length - 1)
                b = ''
            if (i + 2 > x.length - 1)
                c = ''
            let p = x[i] + '' + b + '' + c
            p = p.split("").reverse().join("")
            arr.push(p)
        }
        let and = 'و'
        arr.forEach((a, i) => {
            if (a == '000') return
            if (i == arr.length - 1) and = ''
            t.push((this.number2letters(a) + ' ' + _arr[i]) + ` ${and} `)
        })
        let _t = t.reverse().join("")
        _t = _t.substring(0, _t.length - 2)
        return _t
    }
    private number2letters(n: string): string {
        if (this.number2letter(n)) return this.number2letter(n)
        n = n + ''
        let z = [100, 10, 1]
        if (n.length <= 2)
            z = [10, 1]
        let l = ''
        let and = 'و'
        let t = []
        for (let i = 0; i < n.length; i++) {
            if (n[i] == '0') continue
            let x = parseInt(n[i]) * z[i]
            l += this.number2letter(x+'') + ` ${and} `
        }
        l = l.substring(0, l.length - 2)
        return l
    }
    private number2letter(n: string): any {
        let arr = [
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
        ]
        return arr.find(a => a.i+'' == n) ? arr.find(a => a.i+'' == n).p : false
    }
}
