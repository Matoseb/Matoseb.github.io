    const A = {

        scroll(e, delay = 300, clock = 50, amt) {

            let f = (d = clock) => {
                if (e.matches(':active'))
                    A.setScroll(e, amt), A.clock = setTimeout(f, d);
            };

            clearTimeout(A.clock);
            setTimeout(_ => f(delay)); //settimeout bug fix firefox
        },

        setScroll(e, amt) {
            let ss = e.parentNode.querySelectorAll('.s'),
                s = e.parentNode.querySelector('input:not(.s)');

            amt = amt ? s.max * amt / s.offsetWidth : s.max / 15;

            s.value = +s.value + Math.ceil(amt) * (e.classList.contains('up') ? 1 : -1);
            ss.forEach(A.$thumb);
        },

        $thumb(e) {
            requestAnimationFrame(_ => {
                let s = e.parentNode.querySelector('input:not(.s)');
                e.value = A.map(+s.value, s.max, e.max);
            });
        },

        thumb(e) {
            let s = e.parentNode.querySelector('input:not(.s)');
            s.value = A.map(+e.value, e.max, s.max);
        },

        map(e, _max, max_) {
            return e / _max * max_;
        },
    }