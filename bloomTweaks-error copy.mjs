var W0 = Object.create;
var Cn = Object.defineProperty;
var $0 = Object.getOwnPropertyDescriptor;
var Q0 = Object.getOwnPropertyNames;
var Z0 = Object.getPrototypeOf
  , X0 = Object.prototype.hasOwnProperty;
var st = (a => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(a,{
    get: (e, t) => (typeof require < "u" ? require : e)[t]
}) : a)(function(a) {
    if (typeof require < "u")
        return require.apply(this, arguments);
    throw Error('Dynamic require of "' + a + '" is not supported')
});
var la = (a, e) => () => (e || a((e = {
    exports: {}
}).exports, e),
e.exports)
  , J0 = (a, e) => {
    for (var t in e)
        Cn(a, t, {
            get: e[t],
            enumerable: !0
        })
}
  , ec = (a, e, t, i) => {
    if (e && typeof e == "object" || typeof e == "function")
        for (let o of Q0(e))
            !X0.call(a, o) && o !== t && Cn(a, o, {
                get: () => e[o],
                enumerable: !(i = $0(e, o)) || i.enumerable
            });
    return a
}
;
var lt = (a, e, t) => (t = a != null ? W0(Z0(a)) : {},
ec(e || !a || !a.__esModule ? Cn(t, "default", {
    value: a,
    enumerable: !0
}) : t, a));
var ts = la( (as, Fn) => {
    (function(a) {
        if (typeof as == "object" && typeof Fn < "u")
            Fn.exports = a();
        else if (typeof define == "function" && define.amd)
            define([], a);
        else {
            var e;
            typeof window < "u" ? e = window : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = this,
            e.kuromoji = a()
        }
    }
    )(function() {
        var a, e, t;
        return function() {
            function i(o, l, s) {
                function n(u, d) {
                    if (!l[u]) {
                        if (!o[u]) {
                            var m = typeof st == "function" && st;
                            if (!d && m)
                                return m(u, !0);
                            if (r)
                                return r(u, !0);
                            var g = new Error("Cannot find module '" + u + "'");
                            throw g.code = "MODULE_NOT_FOUND",
                            g
                        }
                        var v = l[u] = {
                            exports: {}
                        };
                        o[u][0].call(v.exports, function(S) {
                            var x = o[u][1][S];
                            return n(x || S)
                        }, v, v.exports, i, o, l, s)
                    }
                    return l[u].exports
                }
                for (var r = typeof st == "function" && st, c = 0; c < s.length; c++)
                    n(s[c]);
                return n
            }
            return i
        }()({
            1: [function(i, o, l) {
                (function(s, n) {
                    (function(r, c) {
                        typeof l == "object" && typeof o < "u" ? c(l) : typeof a == "function" && a.amd ? a(["exports"], c) : c(r.async = r.async || {})
                    }
                    )(this, function(r) {
                        "use strict";
                        function c(h, y) {
                            y = y | 0;
                            for (var b = Math.max(h.length - y, 0), A = Array(b), O = 0; O < b; O++)
                                A[O] = h[y + O];
                            return A
                        }
                        var u = function(h) {
                            var y = c(arguments, 1);
                            return function() {
                                var b = c(arguments);
                                return h.apply(null, y.concat(b))
                            }
                        }
                          , d = function(h) {
                            return function() {
                                var y = c(arguments)
                                  , b = y.pop();
                                h.call(this, y, b)
                            }
                        };
                        function m(h) {
                            var y = typeof h;
                            return h != null && (y == "object" || y == "function")
                        }
                        var g = typeof setImmediate == "function" && setImmediate
                          , v = typeof s == "object" && typeof s.nextTick == "function";
                        function S(h) {
                            setTimeout(h, 0)
                        }
                        function x(h) {
                            return function(y) {
                                var b = c(arguments, 1);
                                h(function() {
                                    y.apply(null, b)
                                })
                            }
                        }
                        var D;
                        g ? D = setImmediate : v ? D = s.nextTick : D = S;
                        var B = x(D);
                        function q(h) {
                            return d(function(y, b) {
                                var A;
                                try {
                                    A = h.apply(this, y)
                                } catch (O) {
                                    return b(O)
                                }
                                m(A) && typeof A.then == "function" ? A.then(function(O) {
                                    K(b, null, O)
                                }, function(O) {
                                    K(b, O.message ? O : new Error(O))
                                }) : b(null, A)
                            })
                        }
                        function K(h, y, b) {
                            try {
                                h(y, b)
                            } catch (A) {
                                B(te, A)
                            }
                        }
                        function te(h) {
                            throw h
                        }
                        var W = typeof Symbol == "function";
                        function R(h) {
                            return W && h[Symbol.toStringTag] === "AsyncFunction"
                        }
                        function F(h) {
                            return R(h) ? q(h) : h
                        }
                        function X(h) {
                            return function(y) {
                                var b = c(arguments, 1)
                                  , A = d(function(O, P) {
                                    var V = this;
                                    return h(y, function($, ne) {
                                        F($).apply(V, O.concat(ne))
                                    }, P)
                                });
                                return b.length ? A.apply(this, b) : A
                            }
                        }
                        var Y = typeof n == "object" && n && n.Object === Object && n
                          , H = typeof self == "object" && self && self.Object === Object && self
                          , Q = Y || H || Function("return this")()
                          , Z = Q.Symbol
                          , G = Object.prototype
                          , ee = G.hasOwnProperty
                          , ie = G.toString
                          , me = Z ? Z.toStringTag : void 0;
                        function le(h) {
                            var y = ee.call(h, me)
                              , b = h[me];
                            try {
                                h[me] = void 0;
                                var A = !0
                            } catch {}
                            var O = ie.call(h);
                            return A && (y ? h[me] = b : delete h[me]),
                            O
                        }
                        var pe = Object.prototype
                          , ge = pe.toString;
                        function ce(h) {
                            return ge.call(h)
                        }
                        var L = "[object Null]"
                          , p = "[object Undefined]"
                          , f = Z ? Z.toStringTag : void 0;
                        function k(h) {
                            return h == null ? h === void 0 ? p : L : f && f in Object(h) ? le(h) : ce(h)
                        }
                        var w = "[object AsyncFunction]"
                          , j = "[object Function]"
                          , I = "[object GeneratorFunction]"
                          , _ = "[object Proxy]";
                        function M(h) {
                            if (!m(h))
                                return !1;
                            var y = k(h);
                            return y == j || y == I || y == w || y == _
                        }
                        var T = 9007199254740991;
                        function z(h) {
                            return typeof h == "number" && h > -1 && h % 1 == 0 && h <= T
                        }
                        function E(h) {
                            return h != null && z(h.length) && !M(h)
                        }
                        var C = {};
                        function N() {}
                        function U(h) {
                            return function() {
                                if (h !== null) {
                                    var y = h;
                                    h = null,
                                    y.apply(this, arguments)
                                }
                            }
                        }
                        var J = typeof Symbol == "function" && Symbol.iterator
                          , oe = function(h) {
                            return J && h[J] && h[J]()
                        };
                        function re(h, y) {
                            for (var b = -1, A = Array(h); ++b < h; )
                                A[b] = y(b);
                            return A
                        }
                        function de(h) {
                            return h != null && typeof h == "object"
                        }
                        var ae = "[object Arguments]";
                        function ue(h) {
                            return de(h) && k(h) == ae
                        }
                        var Ae = Object.prototype
                          , Se = Ae.hasOwnProperty
                          , _e = Ae.propertyIsEnumerable
                          , ea = ue(function() {
                            return arguments
                        }()) ? ue : function(h) {
                            return de(h) && Se.call(h, "callee") && !_e.call(h, "callee")
                        }
                          , be = Array.isArray;
                        function Ge() {
                            return !1
                        }
                        var oa = typeof r == "object" && r && !r.nodeType && r
                          , qe = oa && typeof o == "object" && o && !o.nodeType && o
                          , Ea = qe && qe.exports === oa
                          , Te = Ea ? Q.Buffer : void 0
                          , da = Te ? Te.isBuffer : void 0
                          , na = da || Ge
                          , fa = 9007199254740991
                          , tu = /^(?:0|[1-9]\d*)$/;
                        function iu(h, y) {
                            return y = y ?? fa,
                            !!y && (typeof h == "number" || tu.test(h)) && h > -1 && h % 1 == 0 && h < y
                        }
                        var nu = "[object Arguments]"
                          , ru = "[object Array]"
                          , ou = "[object Boolean]"
                          , su = "[object Date]"
                          , lu = "[object Error]"
                          , uu = "[object Function]"
                          , cu = "[object Map]"
                          , du = "[object Number]"
                          , mu = "[object Object]"
                          , hu = "[object RegExp]"
                          , gu = "[object Set]"
                          , pu = "[object String]"
                          , fu = "[object WeakMap]"
                          , yu = "[object ArrayBuffer]"
                          , ku = "[object DataView]"
                          , vu = "[object Float32Array]"
                          , bu = "[object Float64Array]"
                          , wu = "[object Int8Array]"
                          , Lu = "[object Int16Array]"
                          , Su = "[object Int32Array]"
                          , Cu = "[object Uint8Array]"
                          , Au = "[object Uint8ClampedArray]"
                          , ju = "[object Uint16Array]"
                          , Tu = "[object Uint32Array]"
                          , xe = {};
                        xe[vu] = xe[bu] = xe[wu] = xe[Lu] = xe[Su] = xe[Cu] = xe[Au] = xe[ju] = xe[Tu] = !0,
                        xe[nu] = xe[ru] = xe[yu] = xe[ou] = xe[ku] = xe[su] = xe[lu] = xe[uu] = xe[cu] = xe[du] = xe[mu] = xe[hu] = xe[gu] = xe[pu] = xe[fu] = !1;
                        function Mu(h) {
                            return de(h) && z(h.length) && !!xe[k(h)]
                        }
                        function Iu(h) {
                            return function(y) {
                                return h(y)
                            }
                        }
                        var vr = typeof r == "object" && r && !r.nodeType && r
                          , br = vr && typeof o == "object" && o && !o.nodeType && o
                          , xu = br && br.exports === vr
                          , sn = xu && Y.process
                          , wr = function() {
                            try {
                                return sn && sn.binding && sn.binding("util")
                            } catch {}
                        }()
                          , Lr = wr && wr.isTypedArray
                          , Eu = Lr ? Iu(Lr) : Mu
                          , Du = Object.prototype
                          , zu = Du.hasOwnProperty;
                        function Nu(h, y) {
                            var b = be(h)
                              , A = !b && ea(h)
                              , O = !b && !A && na(h)
                              , P = !b && !A && !O && Eu(h)
                              , V = b || A || O || P
                              , $ = V ? re(h.length, String) : []
                              , ne = $.length;
                            for (var he in h)
                                (y || zu.call(h, he)) && !(V && (he == "length" || O && (he == "offset" || he == "parent") || P && (he == "buffer" || he == "byteLength" || he == "byteOffset") || iu(he, ne))) && $.push(he);
                            return $
                        }
                        var Pu = Object.prototype;
                        function Ou(h) {
                            var y = h && h.constructor
                              , b = typeof y == "function" && y.prototype || Pu;
                            return h === b
                        }
                        function _u(h, y) {
                            return function(b) {
                                return h(y(b))
                            }
                        }
                        var Fu = _u(Object.keys, Object)
                          , Bu = Object.prototype
                          , Ru = Bu.hasOwnProperty;
                        function Gu(h) {
                            if (!Ou(h))
                                return Fu(h);
                            var y = [];
                            for (var b in Object(h))
                                Ru.call(h, b) && b != "constructor" && y.push(b);
                            return y
                        }
                        function ln(h) {
                            return E(h) ? Nu(h) : Gu(h)
                        }
                        function Uu(h) {
                            var y = -1
                              , b = h.length;
                            return function() {
                                return ++y < b ? {
                                    value: h[y],
                                    key: y
                                } : null
                            }
                        }
                        function qu(h) {
                            var y = -1;
                            return function() {
                                var A = h.next();
                                return A.done ? null : (y++,
                                {
                                    value: A.value,
                                    key: y
                                })
                            }
                        }
                        function Vu(h) {
                            var y = ln(h)
                              , b = -1
                              , A = y.length;
                            return function() {
                                var P = y[++b];
                                return b < A ? {
                                    value: h[P],
                                    key: P
                                } : null
                            }
                        }
                        function Hu(h) {
                            if (E(h))
                                return Uu(h);
                            var y = oe(h);
                            return y ? qu(y) : Vu(h)
                        }
                        function ya(h) {
                            return function() {
                                if (h === null)
                                    throw new Error("Callback was already called.");
                                var y = h;
                                h = null,
                                y.apply(this, arguments)
                            }
                        }
                        function Zt(h) {
                            return function(y, b, A) {
                                if (A = U(A || N),
                                h <= 0 || !y)
                                    return A(null);
                                var O = Hu(y)
                                  , P = !1
                                  , V = 0;
                                function $(he, se) {
                                    if (V -= 1,
                                    he)
                                        P = !0,
                                        A(he);
                                    else {
                                        if (se === C || P && V <= 0)
                                            return P = !0,
                                            A(null);
                                        ne()
                                    }
                                }
                                function ne() {
                                    for (; V < h && !P; ) {
                                        var he = O();
                                        if (he === null) {
                                            P = !0,
                                            V <= 0 && A(null);
                                            return
                                        }
                                        V += 1,
                                        b(he.value, he.key, ya($))
                                    }
                                }
                                ne()
                            }
                        }
                        function Va(h, y, b, A) {
                            Zt(y)(h, F(b), A)
                        }
                        function Ke(h, y) {
                            return function(b, A, O) {
                                return h(b, y, A, O)
                            }
                        }
                        function Yu(h, y, b) {
                            b = U(b || N);
                            var A = 0
                              , O = 0
                              , P = h.length;
                            P === 0 && b(null);
                            function V($, ne) {
                                $ ? b($) : (++O === P || ne === C) && b(null)
                            }
                            for (; A < P; A++)
                                y(h[A], A, ya(V))
                        }
                        var Ku = Ke(Va, 1 / 0)
                          , Da = function(h, y, b) {
                            var A = E(h) ? Yu : Ku;
                            A(h, F(y), b)
                        };
                        function et(h) {
                            return function(y, b, A) {
                                return h(Da, y, F(b), A)
                            }
                        }
                        function Sr(h, y, b, A) {
                            A = A || N,
                            y = y || [];
                            var O = []
                              , P = 0
                              , V = F(b);
                            h(y, function($, ne, he) {
                                var se = P++;
                                V($, function(fe, Ee) {
                                    O[se] = Ee,
                                    he(fe)
                                })
                            }, function($) {
                                A($, O)
                            })
                        }
                        var Xt = et(Sr)
                          , Cr = X(Xt);
                        function at(h) {
                            return function(y, b, A, O) {
                                return h(Zt(b), y, F(A), O)
                            }
                        }
                        var tt = at(Sr)
                          , un = Ke(tt, 1)
                          , Ar = X(un);
                        function Jt(h, y) {
                            for (var b = -1, A = h == null ? 0 : h.length; ++b < A && y(h[b], b, h) !== !1; )
                                ;
                            return h
                        }
                        function Wu(h) {
                            return function(y, b, A) {
                                for (var O = -1, P = Object(y), V = A(y), $ = V.length; $--; ) {
                                    var ne = V[h ? $ : ++O];
                                    if (b(P[ne], ne, P) === !1)
                                        break
                                }
                                return y
                            }
                        }
                        var $u = Wu();
                        function bt(h, y) {
                            return h && $u(h, y, ln)
                        }
                        function Qu(h, y, b, A) {
                            for (var O = h.length, P = b + (A ? 1 : -1); A ? P-- : ++P < O; )
                                if (y(h[P], P, h))
                                    return P;
                            return -1
                        }
                        function Zu(h) {
                            return h !== h
                        }
                        function Xu(h, y, b) {
                            for (var A = b - 1, O = h.length; ++A < O; )
                                if (h[A] === y)
                                    return A;
                            return -1
                        }
                        function ei(h, y, b) {
                            return y === y ? Xu(h, y, b) : Qu(h, Zu, b)
                        }
                        var cn = function(h, y, b) {
                            typeof y == "function" && (b = y,
                            y = null),
                            b = U(b || N);
                            var A = ln(h)
                              , O = A.length;
                            if (!O)
                                return b(null);
                            y || (y = O);
                            var P = {}
                              , V = 0
                              , $ = !1
                              , ne = Object.create(null)
                              , he = []
                              , se = []
                              , fe = {};
                            bt(h, function(De, Ne) {
                                if (!be(De)) {
                                    Ee(Ne, [De]),
                                    se.push(Ne);
                                    return
                                }
                                var Ve = De.slice(0, De.length - 1)
                                  , Ca = Ve.length;
                                if (Ca === 0) {
                                    Ee(Ne, De),
                                    se.push(Ne);
                                    return
                                }
                                fe[Ne] = Ca,
                                Jt(Ve, function(ot) {
                                    if (!h[ot])
                                        throw new Error("async.auto task `" + Ne + "` has a non-existent dependency `" + ot + "` in " + Ve.join(", "));
                                    ka(ot, function() {
                                        Ca--,
                                        Ca === 0 && Ee(Ne, De)
                                    })
                                })
                            }),
                            V0(),
                            Qe();
                            function Ee(De, Ne) {
                                he.push(function() {
                                    va(De, Ne)
                                })
                            }
                            function Qe() {
                                if (he.length === 0 && V === 0)
                                    return b(null, P);
                                for (; he.length && V < y; ) {
                                    var De = he.shift();
                                    De()
                                }
                            }
                            function ka(De, Ne) {
                                var Ve = ne[De];
                                Ve || (Ve = ne[De] = []),
                                Ve.push(Ne)
                            }
                            function sa(De) {
                                var Ne = ne[De] || [];
                                Jt(Ne, function(Ve) {
                                    Ve()
                                }),
                                Qe()
                            }
                            function va(De, Ne) {
                                if (!$) {
                                    var Ve = ya(function(ot, Ln) {
                                        if (V--,
                                        arguments.length > 2 && (Ln = c(arguments, 1)),
                                        ot) {
                                            var Sn = {};
                                            bt(P, function(Y0, K0) {
                                                Sn[K0] = Y0
                                            }),
                                            Sn[De] = Ln,
                                            $ = !0,
                                            ne = Object.create(null),
                                            b(ot, Sn)
                                        } else
                                            P[De] = Ln,
                                            sa(De)
                                    });
                                    V++;
                                    var Ca = F(Ne[Ne.length - 1]);
                                    Ne.length > 1 ? Ca(P, Ve) : Ca(Ve)
                                }
                            }
                            function V0() {
                                for (var De, Ne = 0; se.length; )
                                    De = se.pop(),
                                    Ne++,
                                    Jt(H0(De), function(Ve) {
                                        --fe[Ve] === 0 && se.push(Ve)
                                    });
                                if (Ne !== O)
                                    throw new Error("async.auto cannot execute tasks due to a recursive dependency")
                            }
                            function H0(De) {
                                var Ne = [];
                                return bt(h, function(Ve, Ca) {
                                    be(Ve) && ei(Ve, De, 0) >= 0 && Ne.push(Ca)
                                }),
                                Ne
                            }
                        };
                        function it(h, y) {
                            for (var b = -1, A = h == null ? 0 : h.length, O = Array(A); ++b < A; )
                                O[b] = y(h[b], b, h);
                            return O
                        }
                        var Ju = "[object Symbol]";
                        function e0(h) {
                            return typeof h == "symbol" || de(h) && k(h) == Ju
                        }
                        var a0 = 1 / 0
                          , jr = Z ? Z.prototype : void 0
                          , Tr = jr ? jr.toString : void 0;
                        function dn(h) {
                            if (typeof h == "string")
                                return h;
                            if (be(h))
                                return it(h, dn) + "";
                            if (e0(h))
                                return Tr ? Tr.call(h) : "";
                            var y = h + "";
                            return y == "0" && 1 / h == -a0 ? "-0" : y
                        }
                        function t0(h, y, b) {
                            var A = -1
                              , O = h.length;
                            y < 0 && (y = -y > O ? 0 : O + y),
                            b = b > O ? O : b,
                            b < 0 && (b += O),
                            O = y > b ? 0 : b - y >>> 0,
                            y >>>= 0;
                            for (var P = Array(O); ++A < O; )
                                P[A] = h[A + y];
                            return P
                        }
                        function i0(h, y, b) {
                            var A = h.length;
                            return b = b === void 0 ? A : b,
                            !y && b >= A ? h : t0(h, y, b)
                        }
                        function n0(h, y) {
                            for (var b = h.length; b-- && ei(y, h[b], 0) > -1; )
                                ;
                            return b
                        }
                        function r0(h, y) {
                            for (var b = -1, A = h.length; ++b < A && ei(y, h[b], 0) > -1; )
                                ;
                            return b
                        }
                        function o0(h) {
                            return h.split("")
                        }
                        var s0 = "\\ud800-\\udfff"
                          , l0 = "\\u0300-\\u036f"
                          , u0 = "\\ufe20-\\ufe2f"
                          , c0 = "\\u20d0-\\u20ff"
                          , d0 = l0 + u0 + c0
                          , m0 = "\\ufe0e\\ufe0f"
                          , h0 = "\\u200d"
                          , g0 = RegExp("[" + h0 + s0 + d0 + m0 + "]");
                        function p0(h) {
                            return g0.test(h)
                        }
                        var Mr = "\\ud800-\\udfff"
                          , f0 = "\\u0300-\\u036f"
                          , y0 = "\\ufe20-\\ufe2f"
                          , k0 = "\\u20d0-\\u20ff"
                          , v0 = f0 + y0 + k0
                          , b0 = "\\ufe0e\\ufe0f"
                          , w0 = "[" + Mr + "]"
                          , mn = "[" + v0 + "]"
                          , hn = "\\ud83c[\\udffb-\\udfff]"
                          , L0 = "(?:" + mn + "|" + hn + ")"
                          , Ir = "[^" + Mr + "]"
                          , xr = "(?:\\ud83c[\\udde6-\\uddff]){2}"
                          , Er = "[\\ud800-\\udbff][\\udc00-\\udfff]"
                          , S0 = "\\u200d"
                          , Dr = L0 + "?"
                          , zr = "[" + b0 + "]?"
                          , C0 = "(?:" + S0 + "(?:" + [Ir, xr, Er].join("|") + ")" + zr + Dr + ")*"
                          , A0 = zr + Dr + C0
                          , j0 = "(?:" + [Ir + mn + "?", mn, xr, Er, w0].join("|") + ")"
                          , T0 = RegExp(hn + "(?=" + hn + ")|" + j0 + A0, "g");
                        function M0(h) {
                            return h.match(T0) || []
                        }
                        function Nr(h) {
                            return p0(h) ? M0(h) : o0(h)
                        }
                        function I0(h) {
                            return h == null ? "" : dn(h)
                        }
                        var x0 = /^\s+|\s+$/g;
                        function E0(h, y, b) {
                            if (h = I0(h),
                            h && (b || y === void 0))
                                return h.replace(x0, "");
                            if (!h || !(y = dn(y)))
                                return h;
                            var A = Nr(h)
                              , O = Nr(y)
                              , P = r0(A, O)
                              , V = n0(A, O) + 1;
                            return i0(A, P, V).join("")
                        }
                        var D0 = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m
                          , z0 = /,/
                          , N0 = /(=.+)?(\s*)$/
                          , P0 = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
                        function O0(h) {
                            return h = h.toString().replace(P0, ""),
                            h = h.match(D0)[2].replace(" ", ""),
                            h = h ? h.split(z0) : [],
                            h = h.map(function(y) {
                                return E0(y.replace(N0, ""))
                            }),
                            h
                        }
                        function Pr(h, y) {
                            var b = {};
                            bt(h, function(A, O) {
                                var P, V = R(A), $ = !V && A.length === 1 || V && A.length === 0;
                                if (be(A))
                                    P = A.slice(0, -1),
                                    A = A[A.length - 1],
                                    b[O] = P.concat(P.length > 0 ? ne : A);
                                else if ($)
                                    b[O] = A;
                                else {
                                    if (P = O0(A),
                                    A.length === 0 && !V && P.length === 0)
                                        throw new Error("autoInject task functions require explicit parameters.");
                                    V || P.pop(),
                                    b[O] = P.concat(ne)
                                }
                                function ne(he, se) {
                                    var fe = it(P, function(Ee) {
                                        return he[Ee]
                                    });
                                    fe.push(se),
                                    F(A).apply(null, fe)
                                }
                            }),
                            cn(b, y)
                        }
                        function ma() {
                            this.head = this.tail = null,
                            this.length = 0
                        }
                        function Or(h, y) {
                            h.length = 1,
                            h.head = h.tail = y
                        }
                        ma.prototype.removeLink = function(h) {
                            return h.prev ? h.prev.next = h.next : this.head = h.next,
                            h.next ? h.next.prev = h.prev : this.tail = h.prev,
                            h.prev = h.next = null,
                            this.length -= 1,
                            h
                        }
                        ,
                        ma.prototype.empty = function() {
                            for (; this.head; )
                                this.shift();
                            return this
                        }
                        ,
                        ma.prototype.insertAfter = function(h, y) {
                            y.prev = h,
                            y.next = h.next,
                            h.next ? h.next.prev = y : this.tail = y,
                            h.next = y,
                            this.length += 1
                        }
                        ,
                        ma.prototype.insertBefore = function(h, y) {
                            y.prev = h.prev,
                            y.next = h,
                            h.prev ? h.prev.next = y : this.head = y,
                            h.prev = y,
                            this.length += 1
                        }
                        ,
                        ma.prototype.unshift = function(h) {
                            this.head ? this.insertBefore(this.head, h) : Or(this, h)
                        }
                        ,
                        ma.prototype.push = function(h) {
                            this.tail ? this.insertAfter(this.tail, h) : Or(this, h)
                        }
                        ,
                        ma.prototype.shift = function() {
                            return this.head && this.removeLink(this.head)
                        }
                        ,
                        ma.prototype.pop = function() {
                            return this.tail && this.removeLink(this.tail)
                        }
                        ,
                        ma.prototype.toArray = function() {
                            for (var h = Array(this.length), y = this.head, b = 0; b < this.length; b++)
                                h[b] = y.data,
                                y = y.next;
                            return h
                        }
                        ,
                        ma.prototype.remove = function(h) {
                            for (var y = this.head; y; ) {
                                var b = y.next;
                                h(y) && this.removeLink(y),
                                y = b
                            }
                            return this
                        }
                        ;
                        function _r(h, y, b) {
                            if (y == null)
                                y = 1;
                            else if (y === 0)
                                throw new Error("Concurrency must not be zero");
                            var A = F(h)
                              , O = 0
                              , P = []
                              , V = !1;
                            function $(fe, Ee, Qe) {
                                if (Qe != null && typeof Qe != "function")
                                    throw new Error("task callback must be a function");
                                if (se.started = !0,
                                be(fe) || (fe = [fe]),
                                fe.length === 0 && se.idle())
                                    return B(function() {
                                        se.drain()
                                    });
                                for (var ka = 0, sa = fe.length; ka < sa; ka++) {
                                    var va = {
                                        data: fe[ka],
                                        callback: Qe || N
                                    };
                                    Ee ? se._tasks.unshift(va) : se._tasks.push(va)
                                }
                                V || (V = !0,
                                B(function() {
                                    V = !1,
                                    se.process()
                                }))
                            }
                            function ne(fe) {
                                return function(Ee) {
                                    O -= 1;
                                    for (var Qe = 0, ka = fe.length; Qe < ka; Qe++) {
                                        var sa = fe[Qe]
                                          , va = ei(P, sa, 0);
                                        va === 0 ? P.shift() : va > 0 && P.splice(va, 1),
                                        sa.callback.apply(sa, arguments),
                                        Ee != null && se.error(Ee, sa.data)
                                    }
                                    O <= se.concurrency - se.buffer && se.unsaturated(),
                                    se.idle() && se.drain(),
                                    se.process()
                                }
                            }
                            var he = !1
                              , se = {
                                _tasks: new ma,
                                concurrency: y,
                                payload: b,
                                saturated: N,
                                unsaturated: N,
                                buffer: y / 4,
                                empty: N,
                                drain: N,
                                error: N,
                                started: !1,
                                paused: !1,
                                push: function(fe, Ee) {
                                    $(fe, !1, Ee)
                                },
                                kill: function() {
                                    se.drain = N,
                                    se._tasks.empty()
                                },
                                unshift: function(fe, Ee) {
                                    $(fe, !0, Ee)
                                },
                                remove: function(fe) {
                                    se._tasks.remove(fe)
                                },
                                process: function() {
                                    if (!he) {
                                        for (he = !0; !se.paused && O < se.concurrency && se._tasks.length; ) {
                                            var fe = []
                                              , Ee = []
                                              , Qe = se._tasks.length;
                                            se.payload && (Qe = Math.min(Qe, se.payload));
                                            for (var ka = 0; ka < Qe; ka++) {
                                                var sa = se._tasks.shift();
                                                fe.push(sa),
                                                P.push(sa),
                                                Ee.push(sa.data)
                                            }
                                            O += 1,
                                            se._tasks.length === 0 && se.empty(),
                                            O === se.concurrency && se.saturated();
                                            var va = ya(ne(fe));
                                            A(Ee, va)
                                        }
                                        he = !1
                                    }
                                },
                                length: function() {
                                    return se._tasks.length
                                },
                                running: function() {
                                    return O
                                },
                                workersList: function() {
                                    return P
                                },
                                idle: function() {
                                    return se._tasks.length + O === 0
                                },
                                pause: function() {
                                    se.paused = !0
                                },
                                resume: function() {
                                    se.paused !== !1 && (se.paused = !1,
                                    B(se.process))
                                }
                            };
                            return se
                        }
                        function Fr(h, y) {
                            return _r(h, 1, y)
                        }
                        var nt = Ke(Va, 1);
                        function za(h, y, b, A) {
                            A = U(A || N);
                            var O = F(b);
                            nt(h, function(P, V, $) {
                                O(y, P, function(ne, he) {
                                    y = he,
                                    $(ne)
                                })
                            }, function(P) {
                                A(P, y)
                            })
                        }
                        function gn() {
                            var h = it(arguments, F);
                            return function() {
                                var y = c(arguments)
                                  , b = this
                                  , A = y[y.length - 1];
                                typeof A == "function" ? y.pop() : A = N,
                                za(h, y, function(O, P, V) {
                                    P.apply(b, O.concat(function($) {
                                        var ne = c(arguments, 1);
                                        V($, ne)
                                    }))
                                }, function(O, P) {
                                    A.apply(b, [O].concat(P))
                                })
                            }
                        }
                        var Br = function() {
                            return gn.apply(null, c(arguments).reverse())
                        }
                          , _0 = Array.prototype.concat
                          , ai = function(h, y, b, A) {
                            A = A || N;
                            var O = F(b);
                            tt(h, y, function(P, V) {
                                O(P, function($) {
                                    return $ ? V($) : V(null, c(arguments, 1))
                                })
                            }, function(P, V) {
                                for (var $ = [], ne = 0; ne < V.length; ne++)
                                    V[ne] && ($ = _0.apply($, V[ne]));
                                return A(P, $)
                            })
                        }
                          , Rr = Ke(ai, 1 / 0)
                          , Gr = Ke(ai, 1)
                          , Ur = function() {
                            var h = c(arguments)
                              , y = [null].concat(h);
                            return function() {
                                var b = arguments[arguments.length - 1];
                                return b.apply(this, y)
                            }
                        };
                        function wt(h) {
                            return h
                        }
                        function rt(h, y) {
                            return function(b, A, O, P) {
                                P = P || N;
                                var V = !1, $;
                                b(A, function(ne, he, se) {
                                    O(ne, function(fe, Ee) {
                                        fe ? se(fe) : h(Ee) && !$ ? (V = !0,
                                        $ = y(!0, ne),
                                        se(null, C)) : se()
                                    })
                                }, function(ne) {
                                    ne ? P(ne) : P(null, V ? $ : y(!1))
                                })
                            }
                        }
                        function qr(h, y) {
                            return y
                        }
                        var ti = et(rt(wt, qr))
                          , Lt = at(rt(wt, qr))
                          , ii = Ke(Lt, 1);
                        function Vr(h) {
                            return function(y) {
                                var b = c(arguments, 1);
                                b.push(function(A) {
                                    var O = c(arguments, 1);
                                    typeof console == "object" && (A ? console.error && console.error(A) : console[h] && Jt(O, function(P) {
                                        console[h](P)
                                    }))
                                }),
                                F(y).apply(null, b)
                            }
                        }
                        var Hr = Vr("dir");
                        function Yr(h, y, b) {
                            b = ya(b || N);
                            var A = F(h)
                              , O = F(y);
                            function P($) {
                                if ($)
                                    return b($);
                                var ne = c(arguments, 1);
                                ne.push(V),
                                O.apply(this, ne)
                            }
                            function V($, ne) {
                                if ($)
                                    return b($);
                                if (!ne)
                                    return b(null);
                                A(P)
                            }
                            V(null, !0)
                        }
                        function pn(h, y, b) {
                            b = ya(b || N);
                            var A = F(h)
                              , O = function(P) {
                                if (P)
                                    return b(P);
                                var V = c(arguments, 1);
                                if (y.apply(this, V))
                                    return A(O);
                                b.apply(null, [null].concat(V))
                            };
                            A(O)
                        }
                        function Kr(h, y, b) {
                            pn(h, function() {
                                return !y.apply(this, arguments)
                            }, b)
                        }
                        function Wr(h, y, b) {
                            b = ya(b || N);
                            var A = F(y)
                              , O = F(h);
                            function P($) {
                                if ($)
                                    return b($);
                                O(V)
                            }
                            function V($, ne) {
                                if ($)
                                    return b($);
                                if (!ne)
                                    return b(null);
                                A(P)
                            }
                            O(V)
                        }
                        function $r(h) {
                            return function(y, b, A) {
                                return h(y, A)
                            }
                        }
                        function ni(h, y, b) {
                            Da(h, $r(F(y)), b)
                        }
                        function St(h, y, b, A) {
                            Zt(y)(h, $r(F(b)), A)
                        }
                        var Ct = Ke(St, 1);
                        function fn(h) {
                            return R(h) ? h : d(function(y, b) {
                                var A = !0;
                                y.push(function() {
                                    var O = arguments;
                                    A ? B(function() {
                                        b.apply(null, O)
                                    }) : b.apply(null, O)
                                }),
                                h.apply(this, y),
                                A = !1
                            })
                        }
                        function ri(h) {
                            return !h
                        }
                        var oi = et(rt(ri, ri))
                          , At = at(rt(ri, ri))
                          , si = Ke(At, 1);
                        function Qr(h) {
                            return function(y) {
                                return y?.[h]
                            }
                        }
                        function F0(h, y, b, A) {
                            var O = new Array(y.length);
                            h(y, function(P, V, $) {
                                b(P, function(ne, he) {
                                    O[V] = !!he,
                                    $(ne)
                                })
                            }, function(P) {
                                if (P)
                                    return A(P);
                                for (var V = [], $ = 0; $ < y.length; $++)
                                    O[$] && V.push(y[$]);
                                A(null, V)
                            })
                        }
                        function B0(h, y, b, A) {
                            var O = [];
                            h(y, function(P, V, $) {
                                b(P, function(ne, he) {
                                    ne ? $(ne) : (he && O.push({
                                        index: V,
                                        value: P
                                    }),
                                    $())
                                })
                            }, function(P) {
                                P ? A(P) : A(null, it(O.sort(function(V, $) {
                                    return V.index - $.index
                                }), Qr("value")))
                            })
                        }
                        function yn(h, y, b, A) {
                            var O = E(y) ? F0 : B0;
                            O(h, y, F(b), A || N)
                        }
                        var li = et(yn)
                          , jt = at(yn)
                          , ui = Ke(jt, 1);
                        function Zr(h, y) {
                            var b = ya(y || N)
                              , A = F(fn(h));
                            function O(P) {
                                if (P)
                                    return b(P);
                                A(O)
                            }
                            O()
                        }
                        var ci = function(h, y, b, A) {
                            A = A || N;
                            var O = F(b);
                            tt(h, y, function(P, V) {
                                O(P, function($, ne) {
                                    return $ ? V($) : V(null, {
                                        key: ne,
                                        val: P
                                    })
                                })
                            }, function(P, V) {
                                for (var $ = {}, ne = Object.prototype.hasOwnProperty, he = 0; he < V.length; he++)
                                    if (V[he]) {
                                        var se = V[he].key
                                          , fe = V[he].val;
                                        ne.call($, se) ? $[se].push(fe) : $[se] = [fe]
                                    }
                                return A(P, $)
                            })
                        }
                          , Xr = Ke(ci, 1 / 0)
                          , Jr = Ke(ci, 1)
                          , eo = Vr("log");
                        function di(h, y, b, A) {
                            A = U(A || N);
                            var O = {}
                              , P = F(b);
                            Va(h, y, function(V, $, ne) {
                                P(V, $, function(he, se) {
                                    if (he)
                                        return ne(he);
                                    O[$] = se,
                                    ne()
                                })
                            }, function(V) {
                                A(V, O)
                            })
                        }
                        var ao = Ke(di, 1 / 0)
                          , to = Ke(di, 1);
                        function io(h, y) {
                            return y in h
                        }
                        function no(h, y) {
                            var b = Object.create(null)
                              , A = Object.create(null);
                            y = y || wt;
                            var O = F(h)
                              , P = d(function($, ne) {
                                var he = y.apply(null, $);
                                io(b, he) ? B(function() {
                                    ne.apply(null, b[he])
                                }) : io(A, he) ? A[he].push(ne) : (A[he] = [ne],
                                O.apply(null, $.concat(function() {
                                    var se = c(arguments);
                                    b[he] = se;
                                    var fe = A[he];
                                    delete A[he];
                                    for (var Ee = 0, Qe = fe.length; Ee < Qe; Ee++)
                                        fe[Ee].apply(null, se)
                                })))
                            });
                            return P.memo = b,
                            P.unmemoized = h,
                            P
                        }
                        var mi;
                        v ? mi = s.nextTick : g ? mi = setImmediate : mi = S;
                        var ro = x(mi);
                        function kn(h, y, b) {
                            b = b || N;
                            var A = E(y) ? [] : {};
                            h(y, function(O, P, V) {
                                F(O)(function($, ne) {
                                    arguments.length > 2 && (ne = c(arguments, 1)),
                                    A[P] = ne,
                                    V($)
                                })
                            }, function(O) {
                                b(O, A)
                            })
                        }
                        function oo(h, y) {
                            kn(Da, h, y)
                        }
                        function so(h, y, b) {
                            kn(Zt(y), h, b)
                        }
                        var vn = function(h, y) {
                            var b = F(h);
                            return _r(function(A, O) {
                                b(A[0], O)
                            }, y, 1)
                        }
                          , lo = function(h, y) {
                            var b = vn(h, y);
                            return b.push = function(A, O, P) {
                                if (P == null && (P = N),
                                typeof P != "function")
                                    throw new Error("task callback must be a function");
                                if (b.started = !0,
                                be(A) || (A = [A]),
                                A.length === 0)
                                    return B(function() {
                                        b.drain()
                                    });
                                O = O || 0;
                                for (var V = b._tasks.head; V && O >= V.priority; )
                                    V = V.next;
                                for (var $ = 0, ne = A.length; $ < ne; $++) {
                                    var he = {
                                        data: A[$],
                                        priority: O,
                                        callback: P
                                    };
                                    V ? b._tasks.insertBefore(V, he) : b._tasks.push(he)
                                }
                                B(b.process)
                            }
                            ,
                            delete b.unshift,
                            b
                        };
                        function uo(h, y) {
                            if (y = U(y || N),
                            !be(h))
                                return y(new TypeError("First argument to race must be an array of functions"));
                            if (!h.length)
                                return y();
                            for (var b = 0, A = h.length; b < A; b++)
                                F(h[b])(y)
                        }
                        function hi(h, y, b, A) {
                            var O = c(h).reverse();
                            za(O, y, b, A)
                        }
                        function gi(h) {
                            var y = F(h);
                            return d(function(A, O) {
                                return A.push(function(V, $) {
                                    if (V)
                                        O(null, {
                                            error: V
                                        });
                                    else {
                                        var ne;
                                        arguments.length <= 2 ? ne = $ : ne = c(arguments, 1),
                                        O(null, {
                                            value: ne
                                        })
                                    }
                                }),
                                y.apply(this, A)
                            })
                        }
                        function co(h) {
                            var y;
                            return be(h) ? y = it(h, gi) : (y = {},
                            bt(h, function(b, A) {
                                y[A] = gi.call(this, b)
                            })),
                            y
                        }
                        function mo(h, y, b, A) {
                            yn(h, y, function(O, P) {
                                b(O, function(V, $) {
                                    P(V, !$)
                                })
                            }, A)
                        }
                        var ho = et(mo)
                          , bn = at(mo)
                          , go = Ke(bn, 1);
                        function po(h) {
                            return function() {
                                return h
                            }
                        }
                        function pi(h, y, b) {
                            var A = 5
                              , O = 0
                              , P = {
                                times: A,
                                intervalFunc: po(O)
                            };
                            function V(se, fe) {
                                if (typeof fe == "object")
                                    se.times = +fe.times || A,
                                    se.intervalFunc = typeof fe.interval == "function" ? fe.interval : po(+fe.interval || O),
                                    se.errorFilter = fe.errorFilter;
                                else if (typeof fe == "number" || typeof fe == "string")
                                    se.times = +fe || A;
                                else
                                    throw new Error("Invalid arguments for async.retry")
                            }
                            if (arguments.length < 3 && typeof h == "function" ? (b = y || N,
                            y = h) : (V(P, h),
                            b = b || N),
                            typeof y != "function")
                                throw new Error("Invalid arguments for async.retry");
                            var $ = F(y)
                              , ne = 1;
                            function he() {
                                $(function(se) {
                                    se && ne++ < P.times && (typeof P.errorFilter != "function" || P.errorFilter(se)) ? setTimeout(he, P.intervalFunc(ne)) : b.apply(null, arguments)
                                })
                            }
                            he()
                        }
                        var fo = function(h, y) {
                            y || (y = h,
                            h = null);
                            var b = F(y);
                            return d(function(A, O) {
                                function P(V) {
                                    b.apply(null, A.concat(V))
                                }
                                h ? pi(h, P, O) : pi(P, O)
                            })
                        };
                        function yo(h, y) {
                            kn(nt, h, y)
                        }
                        var fi = et(rt(Boolean, wt))
                          , Tt = at(rt(Boolean, wt))
                          , yi = Ke(Tt, 1);
                        function ko(h, y, b) {
                            var A = F(y);
                            Xt(h, function(P, V) {
                                A(P, function($, ne) {
                                    if ($)
                                        return V($);
                                    V(null, {
                                        value: P,
                                        criteria: ne
                                    })
                                })
                            }, function(P, V) {
                                if (P)
                                    return b(P);
                                b(null, it(V.sort(O), Qr("value")))
                            });
                            function O(P, V) {
                                var $ = P.criteria
                                  , ne = V.criteria;
                                return $ < ne ? -1 : $ > ne ? 1 : 0
                            }
                        }
                        function vo(h, y, b) {
                            var A = F(h);
                            return d(function(O, P) {
                                var V = !1, $;
                                function ne() {
                                    var he = h.name || "anonymous"
                                      , se = new Error('Callback function "' + he + '" timed out.');
                                    se.code = "ETIMEDOUT",
                                    b && (se.info = b),
                                    V = !0,
                                    P(se)
                                }
                                O.push(function() {
                                    V || (P.apply(null, arguments),
                                    clearTimeout($))
                                }),
                                $ = setTimeout(ne, y),
                                A.apply(null, O)
                            })
                        }
                        var R0 = Math.ceil
                          , G0 = Math.max;
                        function U0(h, y, b, A) {
                            for (var O = -1, P = G0(R0((y - h) / (b || 1)), 0), V = Array(P); P--; )
                                V[A ? P : ++O] = h,
                                h += b;
                            return V
                        }
                        function ki(h, y, b, A) {
                            var O = F(b);
                            tt(U0(0, h, 1), y, O, A)
                        }
                        var bo = Ke(ki, 1 / 0)
                          , wo = Ke(ki, 1);
                        function Lo(h, y, b, A) {
                            arguments.length <= 3 && (A = b,
                            b = y,
                            y = be(h) ? [] : {}),
                            A = U(A || N);
                            var O = F(b);
                            Da(h, function(P, V, $) {
                                O(y, P, V, $)
                            }, function(P) {
                                A(P, y)
                            })
                        }
                        function So(h, y) {
                            var b = null, A;
                            y = y || N,
                            Ct(h, function(O, P) {
                                F(O)(function(V, $) {
                                    arguments.length > 2 ? A = c(arguments, 1) : A = $,
                                    b = V,
                                    P(!V)
                                })
                            }, function() {
                                y(b, A)
                            })
                        }
                        function Co(h) {
                            return function() {
                                return (h.unmemoized || h).apply(null, arguments)
                            }
                        }
                        function wn(h, y, b) {
                            b = ya(b || N);
                            var A = F(y);
                            if (!h())
                                return b(null);
                            var O = function(P) {
                                if (P)
                                    return b(P);
                                if (h())
                                    return A(O);
                                var V = c(arguments, 1);
                                b.apply(null, [null].concat(V))
                            };
                            A(O)
                        }
                        function Ao(h, y, b) {
                            wn(function() {
                                return !h.apply(this, arguments)
                            }, y, b)
                        }
                        var jo = function(h, y) {
                            if (y = U(y || N),
                            !be(h))
                                return y(new Error("First argument to waterfall must be an array of functions"));
                            if (!h.length)
                                return y();
                            var b = 0;
                            function A(P) {
                                var V = F(h[b++]);
                                P.push(ya(O)),
                                V.apply(null, P)
                            }
                            function O(P) {
                                if (P || b === h.length)
                                    return y.apply(null, arguments);
                                A(c(arguments, 1))
                            }
                            A([])
                        }
                          , q0 = {
                            apply: u,
                            applyEach: Cr,
                            applyEachSeries: Ar,
                            asyncify: q,
                            auto: cn,
                            autoInject: Pr,
                            cargo: Fr,
                            compose: Br,
                            concat: Rr,
                            concatLimit: ai,
                            concatSeries: Gr,
                            constant: Ur,
                            detect: ti,
                            detectLimit: Lt,
                            detectSeries: ii,
                            dir: Hr,
                            doDuring: Yr,
                            doUntil: Kr,
                            doWhilst: pn,
                            during: Wr,
                            each: ni,
                            eachLimit: St,
                            eachOf: Da,
                            eachOfLimit: Va,
                            eachOfSeries: nt,
                            eachSeries: Ct,
                            ensureAsync: fn,
                            every: oi,
                            everyLimit: At,
                            everySeries: si,
                            filter: li,
                            filterLimit: jt,
                            filterSeries: ui,
                            forever: Zr,
                            groupBy: Xr,
                            groupByLimit: ci,
                            groupBySeries: Jr,
                            log: eo,
                            map: Xt,
                            mapLimit: tt,
                            mapSeries: un,
                            mapValues: ao,
                            mapValuesLimit: di,
                            mapValuesSeries: to,
                            memoize: no,
                            nextTick: ro,
                            parallel: oo,
                            parallelLimit: so,
                            priorityQueue: lo,
                            queue: vn,
                            race: uo,
                            reduce: za,
                            reduceRight: hi,
                            reflect: gi,
                            reflectAll: co,
                            reject: ho,
                            rejectLimit: bn,
                            rejectSeries: go,
                            retry: pi,
                            retryable: fo,
                            seq: gn,
                            series: yo,
                            setImmediate: B,
                            some: fi,
                            someLimit: Tt,
                            someSeries: yi,
                            sortBy: ko,
                            timeout: vo,
                            times: bo,
                            timesLimit: ki,
                            timesSeries: wo,
                            transform: Lo,
                            tryEach: So,
                            unmemoize: Co,
                            until: Ao,
                            waterfall: jo,
                            whilst: wn,
                            all: oi,
                            allLimit: At,
                            allSeries: si,
                            any: fi,
                            anyLimit: Tt,
                            anySeries: yi,
                            find: ti,
                            findLimit: Lt,
                            findSeries: ii,
                            forEach: ni,
                            forEachSeries: Ct,
                            forEachLimit: St,
                            forEachOf: Da,
                            forEachOfSeries: nt,
                            forEachOfLimit: Va,
                            inject: za,
                            foldl: za,
                            foldr: hi,
                            select: li,
                            selectLimit: jt,
                            selectSeries: ui,
                            wrapSync: q
                        };
                        r.default = q0,
                        r.apply = u,
                        r.applyEach = Cr,
                        r.applyEachSeries = Ar,
                        r.asyncify = q,
                        r.auto = cn,
                        r.autoInject = Pr,
                        r.cargo = Fr,
                        r.compose = Br,
                        r.concat = Rr,
                        r.concatLimit = ai,
                        r.concatSeries = Gr,
                        r.constant = Ur,
                        r.detect = ti,
                        r.detectLimit = Lt,
                        r.detectSeries = ii,
                        r.dir = Hr,
                        r.doDuring = Yr,
                        r.doUntil = Kr,
                        r.doWhilst = pn,
                        r.during = Wr,
                        r.each = ni,
                        r.eachLimit = St,
                        r.eachOf = Da,
                        r.eachOfLimit = Va,
                        r.eachOfSeries = nt,
                        r.eachSeries = Ct,
                        r.ensureAsync = fn,
                        r.every = oi,
                        r.everyLimit = At,
                        r.everySeries = si,
                        r.filter = li,
                        r.filterLimit = jt,
                        r.filterSeries = ui,
                        r.forever = Zr,
                        r.groupBy = Xr,
                        r.groupByLimit = ci,
                        r.groupBySeries = Jr,
                        r.log = eo,
                        r.map = Xt,
                        r.mapLimit = tt,
                        r.mapSeries = un,
                        r.mapValues = ao,
                        r.mapValuesLimit = di,
                        r.mapValuesSeries = to,
                        r.memoize = no,
                        r.nextTick = ro,
                        r.parallel = oo,
                        r.parallelLimit = so,
                        r.priorityQueue = lo,
                        r.queue = vn,
                        r.race = uo,
                        r.reduce = za,
                        r.reduceRight = hi,
                        r.reflect = gi,
                        r.reflectAll = co,
                        r.reject = ho,
                        r.rejectLimit = bn,
                        r.rejectSeries = go,
                        r.retry = pi,
                        r.retryable = fo,
                        r.seq = gn,
                        r.series = yo,
                        r.setImmediate = B,
                        r.some = fi,
                        r.someLimit = Tt,
                        r.someSeries = yi,
                        r.sortBy = ko,
                        r.timeout = vo,
                        r.times = bo,
                        r.timesLimit = ki,
                        r.timesSeries = wo,
                        r.transform = Lo,
                        r.tryEach = So,
                        r.unmemoize = Co,
                        r.until = Ao,
                        r.waterfall = jo,
                        r.whilst = wn,
                        r.all = oi,
                        r.allLimit = At,
                        r.allSeries = si,
                        r.any = fi,
                        r.anyLimit = Tt,
                        r.anySeries = yi,
                        r.find = ti,
                        r.findLimit = Lt,
                        r.findSeries = ii,
                        r.forEach = ni,
                        r.forEachSeries = Ct,
                        r.forEachLimit = St,
                        r.forEachOf = Da,
                        r.forEachOfSeries = nt,
                        r.forEachOfLimit = Va,
                        r.inject = za,
                        r.foldl = za,
                        r.foldr = hi,
                        r.select = li,
                        r.selectLimit = jt,
                        r.selectSeries = ui,
                        r.wrapSync = q,
                        Object.defineProperty(r, "__esModule", {
                            value: !0
                        })
                    })
                }
                ).call(this, i("_process"), typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }
            , {
                _process: 4
            }],
            2: [function(i, o, l) {
                (function() {
                    "use strict";
                    var s = "\0"
                      , n = 0
                      , r = 0
                      , c = -1
                      , u = !0
                      , d = !0
                      , m = 4
                      , g = 4
                      , v = 2
                      , S = function(R) {
                        R == null && (R = 1024);
                        var F = function(G, ee, ie) {
                            for (var me = ee; me < ie; me++)
                                G[me] = -me + 1;
                            if (0 < Z.array[Z.array.length - 1]) {
                                for (var le = Z.array.length - 2; 0 < Z.array[le]; )
                                    le--;
                                G[ee] = -le
                            }
                        }
                          , X = function(G, ee, ie) {
                            for (var me = ee; me < ie; me++)
                                G[me] = -me - 1
                        }
                          , Y = function(G) {
                            var ee = G * v
                              , ie = B(Q.signed, Q.bytes, ee);
                            F(ie, Q.array.length, ee),
                            ie.set(Q.array),
                            Q.array = null,
                            Q.array = ie;
                            var me = B(Z.signed, Z.bytes, ee);
                            X(me, Z.array.length, ee),
                            me.set(Z.array),
                            Z.array = null,
                            Z.array = me
                        }
                          , H = r + 1
                          , Q = {
                            signed: u,
                            bytes: m,
                            array: B(u, m, R)
                        }
                          , Z = {
                            signed: d,
                            bytes: g,
                            array: B(d, g, R)
                        };
                        return Q.array[r] = 1,
                        Z.array[r] = r,
                        F(Q.array, r + 1, Q.array.length),
                        X(Z.array, r + 1, Z.array.length),
                        {
                            getBaseBuffer: function() {
                                return Q.array
                            },
                            getCheckBuffer: function() {
                                return Z.array
                            },
                            loadBaseBuffer: function(G) {
                                return Q.array = G,
                                this
                            },
                            loadCheckBuffer: function(G) {
                                return Z.array = G,
                                this
                            },
                            size: function() {
                                return Math.max(Q.array.length, Z.array.length)
                            },
                            getBase: function(G) {
                                return Q.array.length - 1 < G ? -G + 1 : Q.array[G]
                            },
                            getCheck: function(G) {
                                return Z.array.length - 1 < G ? -G - 1 : Z.array[G]
                            },
                            setBase: function(G, ee) {
                                Q.array.length - 1 < G && Y(G),
                                Q.array[G] = ee
                            },
                            setCheck: function(G, ee) {
                                Z.array.length - 1 < G && Y(G),
                                Z.array[G] = ee
                            },
                            setFirstUnusedNode: function(G) {
                                H = G
                            },
                            getFirstUnusedNode: function() {
                                return H
                            },
                            shrink: function() {
                                for (var G = this.size() - 1; !(0 <= Z.array[G]); )
                                    G--;
                                Q.array = Q.array.subarray(0, G + 2),
                                Z.array = Z.array.subarray(0, G + 2)
                            },
                            calc: function() {
                                for (var G = 0, ee = Z.array.length, ie = 0; ie < ee; ie++)
                                    Z.array[ie] < 0 && G++;
                                return {
                                    all: ee,
                                    unused: G,
                                    efficiency: (ee - G) / ee
                                }
                            },
                            dump: function() {
                                var G = "", ee = "", ie;
                                for (ie = 0; ie < Q.array.length; ie++)
                                    G = G + " " + this.getBase(ie);
                                for (ie = 0; ie < Z.array.length; ie++)
                                    ee = ee + " " + this.getCheck(ie);
                                return console.log("base:" + G),
                                console.log("chck:" + ee),
                                "base:" + G + " chck:" + ee
                            }
                        }
                    };
                    function x(R) {
                        this.bc = S(R),
                        this.keys = []
                    }
                    x.prototype.append = function(R, F) {
                        return this.keys.push({
                            k: R,
                            v: F
                        }),
                        this
                    }
                    ,
                    x.prototype.build = function(R, F) {
                        if (R == null && (R = this.keys),
                        R == null)
                            return new D(this.bc);
                        F == null && (F = !1);
                        var X = R.map(function(Y) {
                            return {
                                k: K(Y.k + s),
                                v: Y.v
                            }
                        });
                        return F ? this.keys = X : this.keys = X.sort(function(Y, H) {
                            for (var Q = Y.k, Z = H.k, G = Math.min(Q.length, Z.length), ee = 0; ee < G; ee++)
                                if (Q[ee] !== Z[ee])
                                    return Q[ee] - Z[ee];
                            return Q.length - Z.length
                        }),
                        X = null,
                        this._build(r, 0, 0, this.keys.length),
                        new D(this.bc)
                    }
                    ,
                    x.prototype._build = function(R, F, X, Y) {
                        var H = this.getChildrenInfo(F, X, Y)
                          , Q = this.findAllocatableBase(H);
                        this.setBC(R, H, Q);
                        for (var Z = 0; Z < H.length; Z = Z + 3) {
                            var G = H[Z];
                            if (G !== n) {
                                var ee = H[Z + 1]
                                  , ie = H[Z + 2]
                                  , me = Q + G;
                                this._build(me, F + 1, ee, ie)
                            }
                        }
                    }
                    ,
                    x.prototype.getChildrenInfo = function(R, F, X) {
                        var Y = this.keys[F].k[R]
                          , H = 0
                          , Q = new Int32Array(X * 3);
                        Q[H++] = Y,
                        Q[H++] = F;
                        for (var Z = F, G = F; Z < F + X; Z++) {
                            var ee = this.keys[Z].k[R];
                            Y !== ee && (Q[H++] = Z - G,
                            Q[H++] = ee,
                            Q[H++] = Z,
                            Y = ee,
                            G = Z)
                        }
                        return Q[H++] = Z - G,
                        Q = Q.subarray(0, H),
                        Q
                    }
                    ,
                    x.prototype.setBC = function(R, F, X) {
                        var Y = this.bc;
                        Y.setBase(R, X);
                        var H;
                        for (H = 0; H < F.length; H = H + 3) {
                            var Q = F[H]
                              , Z = X + Q
                              , G = -Y.getBase(Z)
                              , ee = -Y.getCheck(Z);
                            Z !== Y.getFirstUnusedNode() ? Y.setCheck(G, -ee) : Y.setFirstUnusedNode(ee),
                            Y.setBase(ee, -G);
                            var ie = R;
                            if (Y.setCheck(Z, ie),
                            Q === n) {
                                var me = F[H + 1]
                                  , le = this.keys[me].v;
                                le == null && (le = 0);
                                var pe = -le - 1;
                                Y.setBase(Z, pe)
                            }
                        }
                    }
                    ,
                    x.prototype.findAllocatableBase = function(R) {
                        for (var F = this.bc, X, Y = F.getFirstUnusedNode(); ; ) {
                            if (X = Y - R[0],
                            X < 0) {
                                Y = -F.getCheck(Y);
                                continue
                            }
                            for (var H = !0, Q = 0; Q < R.length; Q = Q + 3) {
                                var Z = R[Q]
                                  , G = X + Z;
                                if (!this.isUnusedNode(G)) {
                                    Y = -F.getCheck(Y),
                                    H = !1;
                                    break
                                }
                            }
                            if (H)
                                return X
                        }
                    }
                    ,
                    x.prototype.isUnusedNode = function(R) {
                        var F = this.bc
                          , X = F.getCheck(R);
                        return R === r ? !1 : X < 0
                    }
                    ;
                    function D(R) {
                        this.bc = R,
                        this.bc.shrink()
                    }
                    D.prototype.contain = function(R) {
                        var F = this.bc;
                        R += s;
                        for (var X = K(R), Y = r, H = c, Q = 0; Q < X.length; Q++) {
                            var Z = X[Q];
                            if (H = this.traverse(Y, Z),
                            H === c)
                                return !1;
                            if (F.getBase(H) <= 0)
                                return !0;
                            Y = H
                        }
                        return !1
                    }
                    ,
                    D.prototype.lookup = function(R) {
                        R += s;
                        for (var F = K(R), X = r, Y = c, H = 0; H < F.length; H++) {
                            var Q = F[H];
                            if (Y = this.traverse(X, Q),
                            Y === c)
                                return c;
                            X = Y
                        }
                        var Z = this.bc.getBase(Y);
                        return Z <= 0 ? -Z - 1 : c
                    }
                    ,
                    D.prototype.commonPrefixSearch = function(R) {
                        for (var F = K(R), X = r, Y = c, H = [], Q = 0; Q < F.length; Q++) {
                            var Z = F[Q];
                            if (Y = this.traverse(X, Z),
                            Y !== c) {
                                X = Y;
                                var G = this.traverse(Y, n);
                                if (G !== c) {
                                    var ee = this.bc.getBase(G)
                                      , ie = {};
                                    ee <= 0 && (ie.v = -ee - 1),
                                    ie.k = te(q(F, 0, Q + 1)),
                                    H.push(ie)
                                }
                                continue
                            } else
                                break
                        }
                        return H
                    }
                    ,
                    D.prototype.traverse = function(R, F) {
                        var X = this.bc.getBase(R) + F;
                        return this.bc.getCheck(X) === R ? X : c
                    }
                    ,
                    D.prototype.size = function() {
                        return this.bc.size()
                    }
                    ,
                    D.prototype.calc = function() {
                        return this.bc.calc()
                    }
                    ,
                    D.prototype.dump = function() {
                        return this.bc.dump()
                    }
                    ;
                    var B = function(R, F, X) {
                        if (R)
                            switch (F) {
                            case 1:
                                return new Int8Array(X);
                            case 2:
                                return new Int16Array(X);
                            case 4:
                                return new Int32Array(X);
                            default:
                                throw new RangeError("Invalid newArray parameter element_bytes:" + F)
                            }
                        else
                            switch (F) {
                            case 1:
                                return new Uint8Array(X);
                            case 2:
                                return new Uint16Array(X);
                            case 4:
                                return new Uint32Array(X);
                            default:
                                throw new RangeError("Invalid newArray parameter element_bytes:" + F)
                            }
                    }
                      , q = function(R, F, X) {
                        var Y = new ArrayBuffer(X)
                          , H = new Uint8Array(Y,0,X)
                          , Q = R.subarray(F, X);
                        return H.set(Q),
                        H
                    }
                      , K = function(R) {
                        for (var F = new Uint8Array(new ArrayBuffer(R.length * 4)), X = 0, Y = 0; X < R.length; ) {
                            var H, Q = R.charCodeAt(X++);
                            if (Q >= 55296 && Q <= 56319) {
                                var Z = Q
                                  , G = R.charCodeAt(X++);
                                if (G >= 56320 && G <= 57343)
                                    H = (Z - 55296) * 1024 + 65536 + (G - 56320);
                                else
                                    return null
                            } else
                                H = Q;
                            H < 128 ? F[Y++] = H : H < 2048 ? (F[Y++] = H >>> 6 | 192,
                            F[Y++] = H & 63 | 128) : H < 65536 ? (F[Y++] = H >>> 12 | 224,
                            F[Y++] = H >> 6 & 63 | 128,
                            F[Y++] = H & 63 | 128) : H < 1 << 21 && (F[Y++] = H >>> 18 | 240,
                            F[Y++] = H >> 12 & 63 | 128,
                            F[Y++] = H >> 6 & 63 | 128,
                            F[Y++] = H & 63 | 128)
                        }
                        return F.subarray(0, Y)
                    }
                      , te = function(R) {
                        for (var F = "", X, Y, H, Q, Z, G, ee, ie = 0; ie < R.length; )
                            Y = R[ie++],
                            Y < 128 ? X = Y : Y >> 5 === 6 ? (H = R[ie++],
                            X = (Y & 31) << 6 | H & 63) : Y >> 4 === 14 ? (H = R[ie++],
                            Q = R[ie++],
                            X = (Y & 15) << 12 | (H & 63) << 6 | Q & 63) : (H = R[ie++],
                            Q = R[ie++],
                            Z = R[ie++],
                            X = (Y & 7) << 18 | (H & 63) << 12 | (Q & 63) << 6 | Z & 63),
                            X < 65536 ? F += String.fromCharCode(X) : (X -= 65536,
                            G = 55296 | X >> 10,
                            ee = 56320 | X & 1023,
                            F += String.fromCharCode(G, ee));
                        return F
                    }
                      , W = {
                        builder: function(R) {
                            return new x(R)
                        },
                        load: function(R, F) {
                            var X = S(0);
                            return X.loadBaseBuffer(R),
                            X.loadCheckBuffer(F),
                            new D(X)
                        }
                    };
                    typeof o > "u" ? window.doublearray = W : o.exports = W
                }
                )()
            }
            , {}],
            3: [function(i, o, l) {
                (function(s) {
                    function n(m, g) {
                        for (var v = 0, S = m.length - 1; S >= 0; S--) {
                            var x = m[S];
                            x === "." ? m.splice(S, 1) : x === ".." ? (m.splice(S, 1),
                            v++) : v && (m.splice(S, 1),
                            v--)
                        }
                        if (g)
                            for (; v--; v)
                                m.unshift("..");
                        return m
                    }
                    var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                      , c = function(m) {
                        return r.exec(m).slice(1)
                    };
                    l.resolve = function() {
                        for (var m = "", g = !1, v = arguments.length - 1; v >= -1 && !g; v--) {
                            var S = v >= 0 ? arguments[v] : s.cwd();
                            if (typeof S != "string")
                                throw new TypeError("Arguments to path.resolve must be strings");
                            if (!S)
                                continue;
                            m = S + "/" + m,
                            g = S.charAt(0) === "/"
                        }
                        return m = n(u(m.split("/"), function(x) {
                            return !!x
                        }), !g).join("/"),
                        (g ? "/" : "") + m || "."
                    }
                    ,
                    l.normalize = function(m) {
                        var g = l.isAbsolute(m)
                          , v = d(m, -1) === "/";
                        return m = n(u(m.split("/"), function(S) {
                            return !!S
                        }), !g).join("/"),
                        !m && !g && (m = "."),
                        m && v && (m += "/"),
                        (g ? "/" : "") + m
                    }
                    ,
                    l.isAbsolute = function(m) {
                        return m.charAt(0) === "/"
                    }
                    ,
                    l.join = function() {
                        var m = Array.prototype.slice.call(arguments, 0);
                        return l.normalize(u(m, function(g, v) {
                            if (typeof g != "string")
                                throw new TypeError("Arguments to path.join must be strings");
                            return g
                        }).join("/"))
                    }
                    ,
                    l.relative = function(m, g) {
                        m = l.resolve(m).substr(1),
                        g = l.resolve(g).substr(1);
                        function v(te) {
                            for (var W = 0; W < te.length && te[W] === ""; W++)
                                ;
                            for (var R = te.length - 1; R >= 0 && te[R] === ""; R--)
                                ;
                            return W > R ? [] : te.slice(W, R - W + 1)
                        }
                        for (var S = v(m.split("/")), x = v(g.split("/")), D = Math.min(S.length, x.length), B = D, q = 0; q < D; q++)
                            if (S[q] !== x[q]) {
                                B = q;
                                break
                            }
                        for (var K = [], q = B; q < S.length; q++)
                            K.push("..");
                        return K = K.concat(x.slice(B)),
                        K.join("/")
                    }
                    ,
                    l.sep = "/",
                    l.delimiter = ":",
                    l.dirname = function(m) {
                        var g = c(m)
                          , v = g[0]
                          , S = g[1];
                        return !v && !S ? "." : (S && (S = S.substr(0, S.length - 1)),
                        v + S)
                    }
                    ,
                    l.basename = function(m, g) {
                        var v = c(m)[2];
                        return g && v.substr(-1 * g.length) === g && (v = v.substr(0, v.length - g.length)),
                        v
                    }
                    ,
                    l.extname = function(m) {
                        return c(m)[3]
                    }
                    ;
                    function u(m, g) {
                        if (m.filter)
                            return m.filter(g);
                        for (var v = [], S = 0; S < m.length; S++)
                            g(m[S], S, m) && v.push(m[S]);
                        return v
                    }
                    var d = "ab".substr(-1) === "b" ? function(m, g, v) {
                        return m.substr(g, v)
                    }
                    : function(m, g, v) {
                        return g < 0 && (g = m.length + g),
                        m.substr(g, v)
                    }
                }
                ).call(this, i("_process"))
            }
            , {
                _process: 4
            }],
            4: [function(i, o, l) {
                var s = o.exports = {}, n, r;
                function c() {
                    throw new Error("setTimeout has not been defined")
                }
                function u() {
                    throw new Error("clearTimeout has not been defined")
                }
                (function() {
                    try {
                        typeof setTimeout == "function" ? n = setTimeout : n = c
                    } catch {
                        n = c
                    }
                    try {
                        typeof clearTimeout == "function" ? r = clearTimeout : r = u
                    } catch {
                        r = u
                    }
                }
                )();
                function d(te) {
                    if (n === setTimeout)
                        return setTimeout(te, 0);
                    if ((n === c || !n) && setTimeout)
                        return n = setTimeout,
                        setTimeout(te, 0);
                    try {
                        return n(te, 0)
                    } catch {
                        try {
                            return n.call(null, te, 0)
                        } catch {
                            return n.call(this, te, 0)
                        }
                    }
                }
                function m(te) {
                    if (r === clearTimeout)
                        return clearTimeout(te);
                    if ((r === u || !r) && clearTimeout)
                        return r = clearTimeout,
                        clearTimeout(te);
                    try {
                        return r(te)
                    } catch {
                        try {
                            return r.call(null, te)
                        } catch {
                            return r.call(this, te)
                        }
                    }
                }
                var g = [], v = !1, S, x = -1;
                function D() {
                    !v || !S || (v = !1,
                    S.length ? g = S.concat(g) : x = -1,
                    g.length && B())
                }
                function B() {
                    if (!v) {
                        var te = d(D);
                        v = !0;
                        for (var W = g.length; W; ) {
                            for (S = g,
                            g = []; ++x < W; )
                                S && S[x].run();
                            x = -1,
                            W = g.length
                        }
                        S = null,
                        v = !1,
                        m(te)
                    }
                }
                s.nextTick = function(te) {
                    var W = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var R = 1; R < arguments.length; R++)
                            W[R - 1] = arguments[R];
                    g.push(new q(te,W)),
                    g.length === 1 && !v && d(B)
                }
                ;
                function q(te, W) {
                    this.fun = te,
                    this.array = W
                }
                q.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ,
                s.title = "browser",
                s.browser = !0,
                s.env = {},
                s.argv = [],
                s.version = "",
                s.versions = {};
                function K() {}
                s.on = K,
                s.addListener = K,
                s.once = K,
                s.off = K,
                s.removeListener = K,
                s.removeAllListeners = K,
                s.emit = K,
                s.prependListener = K,
                s.prependOnceListener = K,
                s.listeners = function(te) {
                    return []
                }
                ,
                s.binding = function(te) {
                    throw new Error("process.binding is not supported")
                }
                ,
                s.cwd = function() {
                    return "/"
                }
                ,
                s.chdir = function(te) {
                    throw new Error("process.chdir is not supported")
                }
                ,
                s.umask = function() {
                    return 0
                }
            }
            , {}],
            5: [function(i, o, l) {
                (function() {
                    "use strict";
                    function s(M) {
                        throw M
                    }
                    var n = void 0
                      , r = this;
                    function c(M, T) {
                        var z = M.split(".")
                          , E = r;
                        !(z[0]in E) && E.execScript && E.execScript("var " + z[0]);
                        for (var C; z.length && (C = z.shift()); )
                            !z.length && T !== n ? E[C] = T : E = E[C] ? E[C] : E[C] = {}
                    }
                    var u = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u" && typeof DataView < "u";
                    new (u ? Uint8Array : Array)(256);
                    var d;
                    for (d = 0; 256 > d; ++d)
                        for (var g = d, m = 7, g = g >>> 1; g; g >>>= 1)
                            --m;
                    function v(M, T, z) {
                        var E, C = typeof T == "number" ? T : T = 0, N = typeof z == "number" ? z : M.length;
                        for (E = -1,
                        C = N & 7; C--; ++T)
                            E = E >>> 8 ^ x[(E ^ M[T]) & 255];
                        for (C = N >> 3; C--; T += 8)
                            E = E >>> 8 ^ x[(E ^ M[T]) & 255],
                            E = E >>> 8 ^ x[(E ^ M[T + 1]) & 255],
                            E = E >>> 8 ^ x[(E ^ M[T + 2]) & 255],
                            E = E >>> 8 ^ x[(E ^ M[T + 3]) & 255],
                            E = E >>> 8 ^ x[(E ^ M[T + 4]) & 255],
                            E = E >>> 8 ^ x[(E ^ M[T + 5]) & 255],
                            E = E >>> 8 ^ x[(E ^ M[T + 6]) & 255],
                            E = E >>> 8 ^ x[(E ^ M[T + 7]) & 255];
                        return (E ^ 4294967295) >>> 0
                    }
                    var S = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]
                      , x = u ? new Uint32Array(S) : S;
                    function D() {}
                    D.prototype.getName = function() {
                        return this.name
                    }
                    ,
                    D.prototype.getData = function() {
                        return this.data
                    }
                    ,
                    D.prototype.G = function() {
                        return this.H
                    }
                    ;
                    function B(M) {
                        var T = M.length, z = 0, E = Number.POSITIVE_INFINITY, C, N, U, J, oe, re, de, ae, ue, Ae;
                        for (ae = 0; ae < T; ++ae)
                            M[ae] > z && (z = M[ae]),
                            M[ae] < E && (E = M[ae]);
                        for (C = 1 << z,
                        N = new (u ? Uint32Array : Array)(C),
                        U = 1,
                        J = 0,
                        oe = 2; U <= z; ) {
                            for (ae = 0; ae < T; ++ae)
                                if (M[ae] === U) {
                                    for (re = 0,
                                    de = J,
                                    ue = 0; ue < U; ++ue)
                                        re = re << 1 | de & 1,
                                        de >>= 1;
                                    for (Ae = U << 16 | ae,
                                    ue = re; ue < C; ue += oe)
                                        N[ue] = Ae;
                                    ++J
                                }
                            ++U,
                            J <<= 1,
                            oe <<= 1
                        }
                        return [N, z, E]
                    }
                    var q = [], K;
                    for (K = 0; 288 > K; K++)
                        switch (!0) {
                        case 143 >= K:
                            q.push([K + 48, 8]);
                            break;
                        case 255 >= K:
                            q.push([K - 144 + 400, 9]);
                            break;
                        case 279 >= K:
                            q.push([K - 256 + 0, 7]);
                            break;
                        case 287 >= K:
                            q.push([K - 280 + 192, 8]);
                            break;
                        default:
                            s("invalid literal: " + K)
                        }
                    var te = function() {
                        function M(C) {
                            switch (!0) {
                            case C === 3:
                                return [257, C - 3, 0];
                            case C === 4:
                                return [258, C - 4, 0];
                            case C === 5:
                                return [259, C - 5, 0];
                            case C === 6:
                                return [260, C - 6, 0];
                            case C === 7:
                                return [261, C - 7, 0];
                            case C === 8:
                                return [262, C - 8, 0];
                            case C === 9:
                                return [263, C - 9, 0];
                            case C === 10:
                                return [264, C - 10, 0];
                            case 12 >= C:
                                return [265, C - 11, 1];
                            case 14 >= C:
                                return [266, C - 13, 1];
                            case 16 >= C:
                                return [267, C - 15, 1];
                            case 18 >= C:
                                return [268, C - 17, 1];
                            case 22 >= C:
                                return [269, C - 19, 2];
                            case 26 >= C:
                                return [270, C - 23, 2];
                            case 30 >= C:
                                return [271, C - 27, 2];
                            case 34 >= C:
                                return [272, C - 31, 2];
                            case 42 >= C:
                                return [273, C - 35, 3];
                            case 50 >= C:
                                return [274, C - 43, 3];
                            case 58 >= C:
                                return [275, C - 51, 3];
                            case 66 >= C:
                                return [276, C - 59, 3];
                            case 82 >= C:
                                return [277, C - 67, 4];
                            case 98 >= C:
                                return [278, C - 83, 4];
                            case 114 >= C:
                                return [279, C - 99, 4];
                            case 130 >= C:
                                return [280, C - 115, 4];
                            case 162 >= C:
                                return [281, C - 131, 5];
                            case 194 >= C:
                                return [282, C - 163, 5];
                            case 226 >= C:
                                return [283, C - 195, 5];
                            case 257 >= C:
                                return [284, C - 227, 5];
                            case C === 258:
                                return [285, C - 258, 0];
                            default:
                                s("invalid length: " + C)
                            }
                        }
                        var T = [], z, E;
                        for (z = 3; 258 >= z; z++)
                            E = M(z),
                            T[z] = E[2] << 24 | E[1] << 16 | E[0];
                        return T
                    }();
                    u && new Uint32Array(te);
                    function W(M, T) {
                        switch (this.i = [],
                        this.j = 32768,
                        this.d = this.f = this.c = this.n = 0,
                        this.input = u ? new Uint8Array(M) : M,
                        this.o = !1,
                        this.k = F,
                        this.w = !1,
                        (T || !(T = {})) && (T.index && (this.c = T.index),
                        T.bufferSize && (this.j = T.bufferSize),
                        T.bufferType && (this.k = T.bufferType),
                        T.resize && (this.w = T.resize)),
                        this.k) {
                        case R:
                            this.a = 32768,
                            this.b = new (u ? Uint8Array : Array)(32768 + this.j + 258);
                            break;
                        case F:
                            this.a = 0,
                            this.b = new (u ? Uint8Array : Array)(this.j),
                            this.e = this.D,
                            this.q = this.A,
                            this.l = this.C;
                            break;
                        default:
                            s(Error("invalid inflate mode"))
                        }
                    }
                    var R = 0
                      , F = 1;
                    W.prototype.g = function() {
                        for (; !this.o; ) {
                            var M = j(this, 3);
                            switch (M & 1 && (this.o = !0),
                            M >>>= 1,
                            M) {
                            case 0:
                                var T = this.input
                                  , z = this.c
                                  , E = this.b
                                  , C = this.a
                                  , N = T.length
                                  , U = n
                                  , J = n
                                  , oe = E.length
                                  , re = n;
                                switch (this.d = this.f = 0,
                                z + 1 >= N && s(Error("invalid uncompressed block header: LEN")),
                                U = T[z++] | T[z++] << 8,
                                z + 1 >= N && s(Error("invalid uncompressed block header: NLEN")),
                                J = T[z++] | T[z++] << 8,
                                U === ~J && s(Error("invalid uncompressed block header: length verify")),
                                z + U > T.length && s(Error("input buffer is broken")),
                                this.k) {
                                case R:
                                    for (; C + U > E.length; ) {
                                        if (re = oe - C,
                                        U -= re,
                                        u)
                                            E.set(T.subarray(z, z + re), C),
                                            C += re,
                                            z += re;
                                        else
                                            for (; re--; )
                                                E[C++] = T[z++];
                                        this.a = C,
                                        E = this.e(),
                                        C = this.a
                                    }
                                    break;
                                case F:
                                    for (; C + U > E.length; )
                                        E = this.e({
                                            t: 2
                                        });
                                    break;
                                default:
                                    s(Error("invalid inflate mode"))
                                }
                                if (u)
                                    E.set(T.subarray(z, z + U), C),
                                    C += U,
                                    z += U;
                                else
                                    for (; U--; )
                                        E[C++] = T[z++];
                                this.c = z,
                                this.a = C,
                                this.b = E;
                                break;
                            case 1:
                                this.l(L, w);
                                break;
                            case 2:
                                for (var de = j(this, 5) + 257, ae = j(this, 5) + 1, ue = j(this, 4) + 4, Ae = new (u ? Uint8Array : Array)(Y.length), Se = n, _e = n, ea = n, be = n, Ge = n, oa = n, qe = n, Te = n, Ea = n, Te = 0; Te < ue; ++Te)
                                    Ae[Y[Te]] = j(this, 3);
                                if (!u)
                                    for (Te = ue,
                                    ue = Ae.length; Te < ue; ++Te)
                                        Ae[Y[Te]] = 0;
                                for (Se = B(Ae),
                                be = new (u ? Uint8Array : Array)(de + ae),
                                Te = 0,
                                Ea = de + ae; Te < Ea; )
                                    switch (Ge = I(this, Se),
                                    Ge) {
                                    case 16:
                                        for (qe = 3 + j(this, 2); qe--; )
                                            be[Te++] = oa;
                                        break;
                                    case 17:
                                        for (qe = 3 + j(this, 3); qe--; )
                                            be[Te++] = 0;
                                        oa = 0;
                                        break;
                                    case 18:
                                        for (qe = 11 + j(this, 7); qe--; )
                                            be[Te++] = 0;
                                        oa = 0;
                                        break;
                                    default:
                                        oa = be[Te++] = Ge
                                    }
                                _e = B(u ? be.subarray(0, de) : be.slice(0, de)),
                                ea = B(u ? be.subarray(de) : be.slice(de)),
                                this.l(_e, ea);
                                break;
                            default:
                                s(Error("unknown BTYPE: " + M))
                            }
                        }
                        return this.q()
                    }
                    ;
                    var X = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Y = u ? new Uint16Array(X) : X, H = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258], Q = u ? new Uint16Array(H) : H, Z = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0], G = u ? new Uint8Array(Z) : Z, ee = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], ie = u ? new Uint16Array(ee) : ee, me = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], le = u ? new Uint8Array(me) : me, pe = new (u ? Uint8Array : Array)(288), ge, ce;
                    for (ge = 0,
                    ce = pe.length; ge < ce; ++ge)
                        pe[ge] = 143 >= ge ? 8 : 255 >= ge ? 9 : 279 >= ge ? 7 : 8;
                    var L = B(pe), p = new (u ? Uint8Array : Array)(30), f, k;
                    for (f = 0,
                    k = p.length; f < k; ++f)
                        p[f] = 5;
                    var w = B(p);
                    function j(M, T) {
                        for (var z = M.f, E = M.d, C = M.input, N = M.c, U = C.length, J; E < T; )
                            N >= U && s(Error("input buffer is broken")),
                            z |= C[N++] << E,
                            E += 8;
                        return J = z & (1 << T) - 1,
                        M.f = z >>> T,
                        M.d = E - T,
                        M.c = N,
                        J
                    }
                    function I(M, T) {
                        for (var z = M.f, E = M.d, C = M.input, N = M.c, U = C.length, J = T[0], oe = T[1], re, de; E < oe && !(N >= U); )
                            z |= C[N++] << E,
                            E += 8;
                        return re = J[z & (1 << oe) - 1],
                        de = re >>> 16,
                        de > E && s(Error("invalid code length: " + de)),
                        M.f = z >> de,
                        M.d = E - de,
                        M.c = N,
                        re & 65535
                    }
                    W.prototype.l = function(M, T) {
                        var z = this.b
                          , E = this.a;
                        this.r = M;
                        for (var C = z.length - 258, N, U, J, oe; (N = I(this, M)) !== 256; )
                            if (256 > N)
                                E >= C && (this.a = E,
                                z = this.e(),
                                E = this.a),
                                z[E++] = N;
                            else
                                for (U = N - 257,
                                oe = Q[U],
                                0 < G[U] && (oe += j(this, G[U])),
                                N = I(this, T),
                                J = ie[N],
                                0 < le[N] && (J += j(this, le[N])),
                                E >= C && (this.a = E,
                                z = this.e(),
                                E = this.a); oe--; )
                                    z[E] = z[E++ - J];
                        for (; 8 <= this.d; )
                            this.d -= 8,
                            this.c--;
                        this.a = E
                    }
                    ,
                    W.prototype.C = function(M, T) {
                        var z = this.b
                          , E = this.a;
                        this.r = M;
                        for (var C = z.length, N, U, J, oe; (N = I(this, M)) !== 256; )
                            if (256 > N)
                                E >= C && (z = this.e(),
                                C = z.length),
                                z[E++] = N;
                            else
                                for (U = N - 257,
                                oe = Q[U],
                                0 < G[U] && (oe += j(this, G[U])),
                                N = I(this, T),
                                J = ie[N],
                                0 < le[N] && (J += j(this, le[N])),
                                E + oe > C && (z = this.e(),
                                C = z.length); oe--; )
                                    z[E] = z[E++ - J];
                        for (; 8 <= this.d; )
                            this.d -= 8,
                            this.c--;
                        this.a = E
                    }
                    ,
                    W.prototype.e = function() {
                        var M = new (u ? Uint8Array : Array)(this.a - 32768), T = this.a - 32768, z, E, C = this.b;
                        if (u)
                            M.set(C.subarray(32768, M.length));
                        else
                            for (z = 0,
                            E = M.length; z < E; ++z)
                                M[z] = C[z + 32768];
                        if (this.i.push(M),
                        this.n += M.length,
                        u)
                            C.set(C.subarray(T, T + 32768));
                        else
                            for (z = 0; 32768 > z; ++z)
                                C[z] = C[T + z];
                        return this.a = 32768,
                        C
                    }
                    ,
                    W.prototype.D = function(M) {
                        var T, z = this.input.length / this.c + 1 | 0, E, C, N, U = this.input, J = this.b;
                        return M && (typeof M.t == "number" && (z = M.t),
                        typeof M.z == "number" && (z += M.z)),
                        2 > z ? (E = (U.length - this.c) / this.r[2],
                        N = 258 * (E / 2) | 0,
                        C = N < J.length ? J.length + N : J.length << 1) : C = J.length * z,
                        u ? (T = new Uint8Array(C),
                        T.set(J)) : T = J,
                        this.b = T
                    }
                    ,
                    W.prototype.q = function() {
                        var M = 0, T = this.b, z = this.i, E, C = new (u ? Uint8Array : Array)(this.n + (this.a - 32768)), N, U, J, oe;
                        if (z.length === 0)
                            return u ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);
                        for (N = 0,
                        U = z.length; N < U; ++N)
                            for (E = z[N],
                            J = 0,
                            oe = E.length; J < oe; ++J)
                                C[M++] = E[J];
                        for (N = 32768,
                        U = this.a; N < U; ++N)
                            C[M++] = T[N];
                        return this.i = [],
                        this.buffer = C
                    }
                    ,
                    W.prototype.A = function() {
                        var M, T = this.a;
                        return u ? this.w ? (M = new Uint8Array(T),
                        M.set(this.b.subarray(0, T))) : M = this.b.subarray(0, T) : (this.b.length > T && (this.b.length = T),
                        M = this.b),
                        this.buffer = M
                    }
                    ;
                    function _(M) {
                        this.input = M,
                        this.c = 0,
                        this.m = [],
                        this.s = !1
                    }
                    _.prototype.F = function() {
                        return this.s || this.g(),
                        this.m.slice()
                    }
                    ,
                    _.prototype.g = function() {
                        for (var M = this.input.length; this.c < M; ) {
                            var T = new D
                              , z = n
                              , E = n
                              , C = n
                              , N = n
                              , U = n
                              , J = n
                              , oe = n
                              , re = n
                              , de = n
                              , ae = this.input
                              , ue = this.c;
                            switch (T.u = ae[ue++],
                            T.v = ae[ue++],
                            (T.u !== 31 || T.v !== 139) && s(Error("invalid file signature:" + T.u + "," + T.v)),
                            T.p = ae[ue++],
                            T.p) {
                            case 8:
                                break;
                            default:
                                s(Error("unknown compression method: " + T.p))
                            }
                            if (T.h = ae[ue++],
                            re = ae[ue++] | ae[ue++] << 8 | ae[ue++] << 16 | ae[ue++] << 24,
                            T.H = new Date(1e3 * re),
                            T.N = ae[ue++],
                            T.M = ae[ue++],
                            0 < (T.h & 4) && (T.I = ae[ue++] | ae[ue++] << 8,
                            ue += T.I),
                            0 < (T.h & 8)) {
                                for (oe = [],
                                J = 0; 0 < (U = ae[ue++]); )
                                    oe[J++] = String.fromCharCode(U);
                                T.name = oe.join("")
                            }
                            if (0 < (T.h & 16)) {
                                for (oe = [],
                                J = 0; 0 < (U = ae[ue++]); )
                                    oe[J++] = String.fromCharCode(U);
                                T.J = oe.join("")
                            }
                            0 < (T.h & 2) && (T.B = v(ae, 0, ue) & 65535,
                            T.B !== (ae[ue++] | ae[ue++] << 8) && s(Error("invalid header crc16"))),
                            z = ae[ae.length - 4] | ae[ae.length - 3] << 8 | ae[ae.length - 2] << 16 | ae[ae.length - 1] << 24,
                            ae.length - ue - 4 - 4 < 512 * z && (N = z),
                            E = new W(ae,{
                                index: ue,
                                bufferSize: N
                            }),
                            T.data = C = E.g(),
                            ue = E.c,
                            T.K = de = (ae[ue++] | ae[ue++] << 8 | ae[ue++] << 16 | ae[ue++] << 24) >>> 0,
                            v(C, n, n) !== de && s(Error("invalid CRC-32 checksum: 0x" + v(C, n, n).toString(16) + " / 0x" + de.toString(16))),
                            T.L = z = (ae[ue++] | ae[ue++] << 8 | ae[ue++] << 16 | ae[ue++] << 24) >>> 0,
                            (C.length & 4294967295) !== z && s(Error("invalid input size: " + (C.length & 4294967295) + " / " + z)),
                            this.m.push(T),
                            this.c = ue
                        }
                        this.s = !0;
                        var Ae = this.m, Se, _e, ea = 0, be = 0, Ge;
                        for (Se = 0,
                        _e = Ae.length; Se < _e; ++Se)
                            be += Ae[Se].data.length;
                        if (u)
                            for (Ge = new Uint8Array(be),
                            Se = 0; Se < _e; ++Se)
                                Ge.set(Ae[Se].data, ea),
                                ea += Ae[Se].data.length;
                        else {
                            for (Ge = [],
                            Se = 0; Se < _e; ++Se)
                                Ge[Se] = Ae[Se].data;
                            Ge = Array.prototype.concat.apply([], Ge)
                        }
                        return Ge
                    }
                    ,
                    c("Zlib.Gunzip", _),
                    c("Zlib.Gunzip.prototype.decompress", _.prototype.g),
                    c("Zlib.Gunzip.prototype.getMembers", _.prototype.F),
                    c("Zlib.GunzipMember", D),
                    c("Zlib.GunzipMember.prototype.getName", D.prototype.getName),
                    c("Zlib.GunzipMember.prototype.getData", D.prototype.getData),
                    c("Zlib.GunzipMember.prototype.getMtime", D.prototype.G)
                }
                ).call(this)
            }
            , {}],
            6: [function(i, o, l) {
                "use strict";
                var s = i("./viterbi/ViterbiBuilder")
                  , n = i("./viterbi/ViterbiSearcher")
                  , r = i("./util/IpadicFormatter")
                  , c = /、|。/;
                function u(d) {
                    this.token_info_dictionary = d.token_info_dictionary,
                    this.unknown_dictionary = d.unknown_dictionary,
                    this.viterbi_builder = new s(d),
                    this.viterbi_searcher = new n(d.connection_costs),
                    this.formatter = new r
                }
                u.splitByPunctuation = function(d) {
                    for (var m = [], g = d; g !== ""; ) {
                        var v = g.search(c);
                        if (v < 0) {
                            m.push(g);
                            break
                        }
                        m.push(g.substring(0, v + 1)),
                        g = g.substring(v + 1)
                    }
                    return m
                }
                ,
                u.prototype.tokenize = function(d) {
                    for (var m = u.splitByPunctuation(d), g = [], v = 0; v < m.length; v++) {
                        var S = m[v];
                        this.tokenizeForSentence(S, g)
                    }
                    return g
                }
                ,
                u.prototype.tokenizeForSentence = function(d, m) {
                    m == null && (m = []);
                    var g = this.getLattice(d)
                      , v = this.viterbi_searcher.search(g)
                      , S = 0;
                    m.length > 0 && (S = m[m.length - 1].word_position);
                    for (var x = 0; x < v.length; x++) {
                        var D = v[x], B, q, K;
                        D.type === "KNOWN" ? (K = this.token_info_dictionary.getFeatures(D.name),
                        K == null ? q = [] : q = K.split(","),
                        B = this.formatter.formatEntry(D.name, S + D.start_pos, D.type, q)) : D.type === "UNKNOWN" ? (K = this.unknown_dictionary.getFeatures(D.name),
                        K == null ? q = [] : q = K.split(","),
                        B = this.formatter.formatUnknownEntry(D.name, S + D.start_pos, D.type, q, D.surface_form)) : B = this.formatter.formatEntry(D.name, S + D.start_pos, D.type, []),
                        m.push(B)
                    }
                    return m
                }
                ,
                u.prototype.getLattice = function(d) {
                    return this.viterbi_builder.build(d)
                }
                ,
                o.exports = u
            }
            , {
                "./util/IpadicFormatter": 22,
                "./viterbi/ViterbiBuilder": 24,
                "./viterbi/ViterbiSearcher": 27
            }],
            7: [function(i, o, l) {
                "use strict";
                var s = i("./Tokenizer")
                  , n = i("./loader/NodeDictionaryLoader");
                function r(c) {
                    c.dicPath == null ? this.dic_path = "dict/" : this.dic_path = c.dicPath
                }
                r.prototype.build = function(c) {
                    var u = new n(this.dic_path);
                    u.load(function(d, m) {
                        c(d, new s(m))
                    })
                }
                ,
                o.exports = r
            }
            , {
                "./Tokenizer": 6,
                "./loader/NodeDictionaryLoader": 19
            }],
            8: [function(i, o, l) {
                "use strict";
                function s(n, r, c, u, d) {
                    this.class_id = n,
                    this.class_name = r,
                    this.is_always_invoke = c,
                    this.is_grouping = u,
                    this.max_length = d
                }
                o.exports = s
            }
            , {}],
            9: [function(i, o, l) {
                "use strict";
                var s = i("./InvokeDefinitionMap")
                  , n = i("./CharacterClass")
                  , r = i("../util/SurrogateAwareString")
                  , c = "DEFAULT";
                function u() {
                    this.character_category_map = new Uint8Array(65536),
                    this.compatible_category_map = new Uint32Array(65536),
                    this.invoke_definition_map = null
                }
                u.load = function(d, m, g) {
                    var v = new u;
                    return v.character_category_map = d,
                    v.compatible_category_map = m,
                    v.invoke_definition_map = s.load(g),
                    v
                }
                ,
                u.parseCharCategory = function(d, m) {
                    var g = m[1]
                      , v = parseInt(m[2])
                      , S = parseInt(m[3])
                      , x = parseInt(m[4]);
                    if (!isFinite(v) || v !== 0 && v !== 1)
                        return console.log("char.def parse error. INVOKE is 0 or 1 in:" + v),
                        null;
                    if (!isFinite(S) || S !== 0 && S !== 1)
                        return console.log("char.def parse error. GROUP is 0 or 1 in:" + S),
                        null;
                    if (!isFinite(x) || x < 0)
                        return console.log("char.def parse error. LENGTH is 1 to n:" + x),
                        null;
                    var D = v === 1
                      , B = S === 1;
                    return new n(d,g,D,B,x)
                }
                ,
                u.parseCategoryMapping = function(d) {
                    var m = parseInt(d[1])
                      , g = d[2]
                      , v = 3 < d.length ? d.slice(3) : [];
                    return (!isFinite(m) || m < 0 || m > 65535) && console.log("char.def parse error. CODE is invalid:" + m),
                    {
                        start: m,
                        default: g,
                        compatible: v
                    }
                }
                ,
                u.parseRangeCategoryMapping = function(d) {
                    var m = parseInt(d[1])
                      , g = parseInt(d[2])
                      , v = d[3]
                      , S = 4 < d.length ? d.slice(4) : [];
                    return (!isFinite(m) || m < 0 || m > 65535) && console.log("char.def parse error. CODE is invalid:" + m),
                    (!isFinite(g) || g < 0 || g > 65535) && console.log("char.def parse error. CODE is invalid:" + g),
                    {
                        start: m,
                        end: g,
                        default: v,
                        compatible: S
                    }
                }
                ,
                u.prototype.initCategoryMappings = function(d) {
                    var m;
                    if (d != null)
                        for (var g = 0; g < d.length; g++) {
                            var v = d[g]
                              , S = v.end || v.start;
                            for (m = v.start; m <= S; m++) {
                                this.character_category_map[m] = this.invoke_definition_map.lookup(v.default);
                                for (var x = 0; x < v.compatible.length; x++) {
                                    var D = this.compatible_category_map[m]
                                      , B = v.compatible[x];
                                    if (B != null) {
                                        var q = this.invoke_definition_map.lookup(B);
                                        if (q != null) {
                                            var K = 1 << q;
                                            D = D | K,
                                            this.compatible_category_map[m] = D
                                        }
                                    }
                                }
                            }
                        }
                    var te = this.invoke_definition_map.lookup(c);
                    if (te != null)
                        for (m = 0; m < this.character_category_map.length; m++)
                            this.character_category_map[m] === 0 && (this.character_category_map[m] = 1 << te)
                }
                ,
                u.prototype.lookupCompatibleCategory = function(d) {
                    var m = [], g = d.charCodeAt(0), v;
                    if (g < this.compatible_category_map.length && (v = this.compatible_category_map[g]),
                    v == null || v === 0)
                        return m;
                    for (var S = 0; S < 32; S++)
                        if (v << 31 - S >>> 31 === 1) {
                            var x = this.invoke_definition_map.getCharacterClass(S);
                            if (x == null)
                                continue;
                            m.push(x)
                        }
                    return m
                }
                ,
                u.prototype.lookup = function(d) {
                    var m, g = d.charCodeAt(0);
                    return r.isSurrogatePair(d) ? m = this.invoke_definition_map.lookup(c) : g < this.character_category_map.length && (m = this.character_category_map[g]),
                    m == null && (m = this.invoke_definition_map.lookup(c)),
                    this.invoke_definition_map.getCharacterClass(m)
                }
                ,
                o.exports = u
            }
            , {
                "../util/SurrogateAwareString": 23,
                "./CharacterClass": 8,
                "./InvokeDefinitionMap": 12
            }],
            10: [function(i, o, l) {
                "use strict";
                function s(n, r) {
                    this.forward_dimension = n,
                    this.backward_dimension = r,
                    this.buffer = new Int16Array(n * r + 2),
                    this.buffer[0] = n,
                    this.buffer[1] = r
                }
                s.prototype.put = function(n, r, c) {
                    var u = n * this.backward_dimension + r + 2;
                    if (this.buffer.length < u + 1)
                        throw "ConnectionCosts buffer overflow";
                    this.buffer[u] = c
                }
                ,
                s.prototype.get = function(n, r) {
                    var c = n * this.backward_dimension + r + 2;
                    if (this.buffer.length < c + 1)
                        throw "ConnectionCosts buffer overflow";
                    return this.buffer[c]
                }
                ,
                s.prototype.loadConnectionCosts = function(n) {
                    this.forward_dimension = n[0],
                    this.backward_dimension = n[1],
                    this.buffer = n
                }
                ,
                o.exports = s
            }
            , {}],
            11: [function(i, o, l) {
                "use strict";
                var s = i("doublearray")
                  , n = i("./TokenInfoDictionary")
                  , r = i("./ConnectionCosts")
                  , c = i("./UnknownDictionary");
                function u(d, m, g, v) {
                    d != null ? this.trie = d : this.trie = s.builder(0).build([{
                        k: "",
                        v: 1
                    }]),
                    m != null ? this.token_info_dictionary = m : this.token_info_dictionary = new n,
                    g != null ? this.connection_costs = g : this.connection_costs = new r(0,0),
                    v != null ? this.unknown_dictionary = v : this.unknown_dictionary = new c
                }
                u.prototype.loadTrie = function(d, m) {
                    return this.trie = s.load(d, m),
                    this
                }
                ,
                u.prototype.loadTokenInfoDictionaries = function(d, m, g) {
                    return this.token_info_dictionary.loadDictionary(d),
                    this.token_info_dictionary.loadPosVector(m),
                    this.token_info_dictionary.loadTargetMap(g),
                    this
                }
                ,
                u.prototype.loadConnectionCosts = function(d) {
                    return this.connection_costs.loadConnectionCosts(d),
                    this
                }
                ,
                u.prototype.loadUnknownDictionaries = function(d, m, g, v, S, x) {
                    return this.unknown_dictionary.loadUnknownDictionaries(d, m, g, v, S, x),
                    this
                }
                ,
                o.exports = u
            }
            , {
                "./ConnectionCosts": 10,
                "./TokenInfoDictionary": 13,
                "./UnknownDictionary": 14,
                doublearray: 2
            }],
            12: [function(i, o, l) {
                "use strict";
                var s = i("../util/ByteBuffer")
                  , n = i("./CharacterClass");
                function r() {
                    this.map = [],
                    this.lookup_table = {}
                }
                r.load = function(c) {
                    for (var u = new r, d = [], m = new s(c); m.position + 1 < m.size(); ) {
                        var g = d.length
                          , v = m.get()
                          , S = m.get()
                          , x = m.getInt()
                          , D = m.getString();
                        d.push(new n(g,D,v,S,x))
                    }
                    return u.init(d),
                    u
                }
                ,
                r.prototype.init = function(c) {
                    if (c != null)
                        for (var u = 0; u < c.length; u++) {
                            var d = c[u];
                            this.map[u] = d,
                            this.lookup_table[d.class_name] = u
                        }
                }
                ,
                r.prototype.getCharacterClass = function(c) {
                    return this.map[c]
                }
                ,
                r.prototype.lookup = function(c) {
                    var u = this.lookup_table[c];
                    return u ?? null
                }
                ,
                r.prototype.toBuffer = function() {
                    for (var c = new s, u = 0; u < this.map.length; u++) {
                        var d = this.map[u];
                        c.put(d.is_always_invoke),
                        c.put(d.is_grouping),
                        c.putInt(d.max_length),
                        c.putString(d.class_name)
                    }
                    return c.shrink(),
                    c.buffer
                }
                ,
                o.exports = r
            }
            , {
                "../util/ByteBuffer": 21,
                "./CharacterClass": 8
            }],
            13: [function(i, o, l) {
                "use strict";
                var s = i("../util/ByteBuffer");
                function n() {
                    this.dictionary = new s(10 * 1024 * 1024),
                    this.target_map = {},
                    this.pos_buffer = new s(10 * 1024 * 1024)
                }
                n.prototype.buildDictionary = function(r) {
                    for (var c = {}, u = 0; u < r.length; u++) {
                        var d = r[u];
                        if (!(d.length < 4)) {
                            var m = d[0]
                              , g = d[1]
                              , v = d[2]
                              , S = d[3]
                              , x = d.slice(4).join(",");
                            (!isFinite(g) || !isFinite(v) || !isFinite(S)) && console.log(d);
                            var D = this.put(g, v, S, m, x);
                            c[D] = m
                        }
                    }
                    return this.dictionary.shrink(),
                    this.pos_buffer.shrink(),
                    c
                }
                ,
                n.prototype.put = function(r, c, u, d, m) {
                    var g = this.dictionary.position
                      , v = this.pos_buffer.position;
                    return this.dictionary.putShort(r),
                    this.dictionary.putShort(c),
                    this.dictionary.putShort(u),
                    this.dictionary.putInt(v),
                    this.pos_buffer.putString(d + "," + m),
                    g
                }
                ,
                n.prototype.addMapping = function(r, c) {
                    var u = this.target_map[r];
                    u == null && (u = []),
                    u.push(c),
                    this.target_map[r] = u
                }
                ,
                n.prototype.targetMapToBuffer = function() {
                    var r = new s
                      , c = Object.keys(this.target_map).length;
                    r.putInt(c);
                    for (var u in this.target_map) {
                        var d = this.target_map[u]
                          , m = d.length;
                        r.putInt(parseInt(u)),
                        r.putInt(m);
                        for (var g = 0; g < d.length; g++)
                            r.putInt(d[g])
                    }
                    return r.shrink()
                }
                ,
                n.prototype.loadDictionary = function(r) {
                    return this.dictionary = new s(r),
                    this
                }
                ,
                n.prototype.loadPosVector = function(r) {
                    return this.pos_buffer = new s(r),
                    this
                }
                ,
                n.prototype.loadTargetMap = function(r) {
                    var c = new s(r);
                    for (c.position = 0,
                    this.target_map = {},
                    c.readInt(); !(c.buffer.length < c.position + 1); )
                        for (var u = c.readInt(), d = c.readInt(), m = 0; m < d; m++) {
                            var g = c.readInt();
                            this.addMapping(u, g)
                        }
                    return this
                }
                ,
                n.prototype.getFeatures = function(r) {
                    var c = parseInt(r);
                    if (isNaN(c))
                        return "";
                    var u = this.dictionary.getInt(c + 6);
                    return this.pos_buffer.getString(u)
                }
                ,
                o.exports = n
            }
            , {
                "../util/ByteBuffer": 21
            }],
            14: [function(i, o, l) {
                "use strict";
                var s = i("./TokenInfoDictionary")
                  , n = i("./CharacterDefinition")
                  , r = i("../util/ByteBuffer");
                function c() {
                    this.dictionary = new r(10 * 1024 * 1024),
                    this.target_map = {},
                    this.pos_buffer = new r(10 * 1024 * 1024),
                    this.character_definition = null
                }
                c.prototype = Object.create(s.prototype),
                c.prototype.characterDefinition = function(u) {
                    return this.character_definition = u,
                    this
                }
                ,
                c.prototype.lookup = function(u) {
                    return this.character_definition.lookup(u)
                }
                ,
                c.prototype.lookupCompatibleCategory = function(u) {
                    return this.character_definition.lookupCompatibleCategory(u)
                }
                ,
                c.prototype.loadUnknownDictionaries = function(u, d, m, g, v, S) {
                    this.loadDictionary(u),
                    this.loadPosVector(d),
                    this.loadTargetMap(m),
                    this.character_definition = n.load(g, v, S)
                }
                ,
                o.exports = c
            }
            , {
                "../util/ByteBuffer": 21,
                "./CharacterDefinition": 9,
                "./TokenInfoDictionary": 13
            }],
            15: [function(i, o, l) {
                "use strict";
                var s = i("../CharacterDefinition")
                  , n = i("../InvokeDefinitionMap")
                  , r = /^(\w+)\s+(\d)\s+(\d)\s+(\d)/
                  , c = /^(0x[0-9A-F]{4})(?:\s+([^#\s]+))(?:\s+([^#\s]+))*/
                  , u = /^(0x[0-9A-F]{4})\.\.(0x[0-9A-F]{4})(?:\s+([^#\s]+))(?:\s+([^#\s]+))*/;
                function d() {
                    this.char_def = new s,
                    this.char_def.invoke_definition_map = new n,
                    this.character_category_definition = [],
                    this.category_mapping = []
                }
                d.prototype.putLine = function(m) {
                    var g = r.exec(m);
                    if (g != null) {
                        var v = this.character_category_definition.length
                          , S = s.parseCharCategory(v, g);
                        if (S == null)
                            return;
                        this.character_category_definition.push(S);
                        return
                    }
                    var x = c.exec(m);
                    if (x != null) {
                        var D = s.parseCategoryMapping(x);
                        this.category_mapping.push(D)
                    }
                    var B = u.exec(m);
                    if (B != null) {
                        var q = s.parseRangeCategoryMapping(B);
                        this.category_mapping.push(q)
                    }
                }
                ,
                d.prototype.build = function() {
                    return this.char_def.invoke_definition_map.init(this.character_category_definition),
                    this.char_def.initCategoryMappings(this.category_mapping),
                    this.char_def
                }
                ,
                o.exports = d
            }
            , {
                "../CharacterDefinition": 9,
                "../InvokeDefinitionMap": 12
            }],
            16: [function(i, o, l) {
                "use strict";
                var s = i("../ConnectionCosts");
                function n() {
                    this.lines = 0,
                    this.connection_cost = null
                }
                n.prototype.putLine = function(r) {
                    if (this.lines === 0) {
                        var c = r.split(" ")
                          , u = c[0]
                          , d = c[1];
                        if (u < 0 || d < 0)
                            throw "Parse error of matrix.def";
                        return this.connection_cost = new s(u,d),
                        this.lines++,
                        this
                    }
                    var m = r.split(" ");
                    if (m.length !== 3)
                        return this;
                    var g = parseInt(m[0])
                      , v = parseInt(m[1])
                      , S = parseInt(m[2]);
                    if (g < 0 || v < 0 || !isFinite(g) || !isFinite(v) || this.connection_cost.forward_dimension <= g || this.connection_cost.backward_dimension <= v)
                        throw "Parse error of matrix.def";
                    return this.connection_cost.put(g, v, S),
                    this.lines++,
                    this
                }
                ,
                n.prototype.build = function() {
                    return this.connection_cost
                }
                ,
                o.exports = n
            }
            , {
                "../ConnectionCosts": 10
            }],
            17: [function(i, o, l) {
                "use strict";
                var s = i("doublearray")
                  , n = i("../DynamicDictionaries")
                  , r = i("../TokenInfoDictionary")
                  , c = i("./ConnectionCostsBuilder")
                  , u = i("./CharacterDefinitionBuilder")
                  , d = i("../UnknownDictionary");
                function m() {
                    this.tid_entries = [],
                    this.unk_entries = [],
                    this.cc_builder = new c,
                    this.cd_builder = new u
                }
                m.prototype.addTokenInfoDictionary = function(g) {
                    var v = g.split(",");
                    return this.tid_entries.push(v),
                    this
                }
                ,
                m.prototype.putCostMatrixLine = function(g) {
                    return this.cc_builder.putLine(g),
                    this
                }
                ,
                m.prototype.putCharDefLine = function(g) {
                    return this.cd_builder.putLine(g),
                    this
                }
                ,
                m.prototype.putUnkDefLine = function(g) {
                    return this.unk_entries.push(g.split(",")),
                    this
                }
                ,
                m.prototype.build = function() {
                    var g = this.buildTokenInfoDictionary()
                      , v = this.buildUnknownDictionary();
                    return new n(g.trie,g.token_info_dictionary,this.cc_builder.build(),v)
                }
                ,
                m.prototype.buildTokenInfoDictionary = function() {
                    var g = new r
                      , v = g.buildDictionary(this.tid_entries)
                      , S = this.buildDoubleArray();
                    for (var x in v) {
                        var D = v[x]
                          , B = S.lookup(D);
                        g.addMapping(B, x)
                    }
                    return {
                        trie: S,
                        token_info_dictionary: g
                    }
                }
                ,
                m.prototype.buildUnknownDictionary = function() {
                    var g = new d
                      , v = g.buildDictionary(this.unk_entries)
                      , S = this.cd_builder.build();
                    g.characterDefinition(S);
                    for (var x in v) {
                        var D = v[x]
                          , B = S.invoke_definition_map.lookup(D);
                        g.addMapping(B, x)
                    }
                    return g
                }
                ,
                m.prototype.buildDoubleArray = function() {
                    var g = 0
                      , v = this.tid_entries.map(function(x) {
                        var D = x[0];
                        return {
                            k: D,
                            v: g++
                        }
                    })
                      , S = s.builder(1024 * 1024);
                    return S.build(v)
                }
                ,
                o.exports = m
            }
            , {
                "../DynamicDictionaries": 11,
                "../TokenInfoDictionary": 13,
                "../UnknownDictionary": 14,
                "./CharacterDefinitionBuilder": 15,
                "./ConnectionCostsBuilder": 16,
                doublearray: 2
            }],
            18: [function(i, o, l) {
                "use strict";
                var s = i("./TokenizerBuilder")
                  , n = i("./dict/builder/DictionaryBuilder")
                  , r = {
                    builder: function(c) {
                        return new s(c)
                    },
                    dictionaryBuilder: function() {
                        return new n
                    }
                };
                o.exports = r
            }
            , {
                "./TokenizerBuilder": 7,
                "./dict/builder/DictionaryBuilder": 17
            }],
            19: [function(i, o, l) {
                "use strict";
                var s = i("zlibjs/bin/gunzip.min.js")
                  , n = i("./DictionaryLoader");
                function r(c) {
                    n.apply(this, [c])
                }
                r.prototype = Object.create(n.prototype),
                r.prototype.loadArrayBuffer = function(c, u) {
                    fetch(c).then(d => {
                        if (!d.ok)
                            throw new Error(d.statusText);
                        return d.arrayBuffer()
                    }
                    ).then(d => {
                        let g = new s.Zlib.Gunzip(new Uint8Array(d)).decompress();
                        u(null, g.buffer)
                    }
                    ).catch(d => {
                        u(d, null)
                    }
                    )
                }
                ,
                o.exports = r
            }
            , {
                "./DictionaryLoader": 20,
                "zlibjs/bin/gunzip.min.js": 5
            }],
            20: [function(i, o, l) {
                "use strict";
                var s = i("path")
                  , n = i("async")
                  , r = i("../dict/DynamicDictionaries");
                function c(u) {
                    this.dic = new r,
                    this.dic_path = u
                }
                c.prototype.loadArrayBuffer = function(u, d) {
                    throw new Error("DictionaryLoader#loadArrayBuffer should be overwrite")
                }
                ,
                c.prototype.load = function(u) {
                    var d = this.dic
                      , m = this.dic_path
                      , g = this.loadArrayBuffer;
                    n.parallel([function(v) {
                        n.map(["base.dat.gz", "check.dat.gz"], function(S, x) {
                            g(`${m}/${S}`, function(D, B) {
                                if (D)
                                    return x(D);
                                x(null, B)
                            })
                        }, function(S, x) {
                            if (S)
                                return v(S);
                            var D = new Int32Array(x[0])
                              , B = new Int32Array(x[1]);
                            d.loadTrie(D, B),
                            v(null)
                        })
                    }
                    , function(v) {
                        n.map(["tid.dat.gz", "tid_pos.dat.gz", "tid_map.dat.gz"], function(S, x) {
                            g(`${m}/${S}`, function(D, B) {
                                if (D)
                                    return x(D);
                                x(null, B)
                            })
                        }, function(S, x) {
                            if (S)
                                return v(S);
                            var D = new Uint8Array(x[0])
                              , B = new Uint8Array(x[1])
                              , q = new Uint8Array(x[2]);
                            d.loadTokenInfoDictionaries(D, B, q),
                            v(null)
                        })
                    }
                    , function(v) {
                        g(`${m}/cc.dat.gz`, function(S, x) {
                            if (S)
                                return v(S);
                            var D = new Int16Array(x);
                            d.loadConnectionCosts(D),
                            v(null)
                        })
                    }
                    , function(v) {
                        n.map(["unk.dat.gz", "unk_pos.dat.gz", "unk_map.dat.gz", "unk_char.dat.gz", "unk_compat.dat.gz", "unk_invoke.dat.gz"], function(S, x) {
                            g(`${m}/${S}`, function(D, B) {
                                if (D)
                                    return x(D);
                                x(null, B)
                            })
                        }, function(S, x) {
                            if (S)
                                return v(S);
                            var D = new Uint8Array(x[0])
                              , B = new Uint8Array(x[1])
                              , q = new Uint8Array(x[2])
                              , K = new Uint8Array(x[3])
                              , te = new Uint32Array(x[4])
                              , W = new Uint8Array(x[5]);
                            d.loadUnknownDictionaries(D, B, q, K, te, W),
                            v(null)
                        })
                    }
                    ], function(v) {
                        u(v, d)
                    })
                }
                ,
                o.exports = c
            }
            , {
                "../dict/DynamicDictionaries": 11,
                async: 1,
                path: 3
            }],
            21: [function(i, o, l) {
                "use strict";
                var s = function(c) {
                    for (var u = new Uint8Array(c.length * 4), d = 0, m = 0; d < c.length; ) {
                        var g, v = c.charCodeAt(d++);
                        if (v >= 55296 && v <= 56319) {
                            var S = v
                              , x = c.charCodeAt(d++);
                            if (x >= 56320 && x <= 57343)
                                g = (S - 55296) * 1024 + 65536 + (x - 56320);
                            else
                                return null
                        } else
                            g = v;
                        g < 128 ? u[m++] = g : g < 2048 ? (u[m++] = g >>> 6 | 192,
                        u[m++] = g & 63 | 128) : g < 65536 ? (u[m++] = g >>> 12 | 224,
                        u[m++] = g >> 6 & 63 | 128,
                        u[m++] = g & 63 | 128) : g < 2097152 && (u[m++] = g >>> 18 | 240,
                        u[m++] = g >> 12 & 63 | 128,
                        u[m++] = g >> 6 & 63 | 128,
                        u[m++] = g & 63 | 128)
                    }
                    return u.subarray(0, m)
                }
                  , n = function(c) {
                    for (var u = "", d, m, g, v, S, x, D, B = 0; B < c.length; )
                        m = c[B++],
                        m < 128 ? d = m : m >> 5 === 6 ? (g = c[B++],
                        d = (m & 31) << 6 | g & 63) : m >> 4 === 14 ? (g = c[B++],
                        v = c[B++],
                        d = (m & 15) << 12 | (g & 63) << 6 | v & 63) : (g = c[B++],
                        v = c[B++],
                        S = c[B++],
                        d = (m & 7) << 18 | (g & 63) << 12 | (v & 63) << 6 | S & 63),
                        d < 65536 ? u += String.fromCharCode(d) : (d -= 65536,
                        x = 55296 | d >> 10,
                        D = 56320 | d & 1023,
                        u += String.fromCharCode(x, D));
                    return u
                };
                function r(c) {
                    var u;
                    if (c == null)
                        u = 1024 * 1024;
                    else if (typeof c == "number")
                        u = c;
                    else if (c instanceof Uint8Array) {
                        this.buffer = c,
                        this.position = 0;
                        return
                    } else
                        throw typeof c + " is invalid parameter type for ByteBuffer constructor";
                    this.buffer = new Uint8Array(u),
                    this.position = 0
                }
                r.prototype.size = function() {
                    return this.buffer.length
                }
                ,
                r.prototype.reallocate = function() {
                    var c = new Uint8Array(this.buffer.length * 2);
                    c.set(this.buffer),
                    this.buffer = c
                }
                ,
                r.prototype.shrink = function() {
                    return this.buffer = this.buffer.subarray(0, this.position),
                    this.buffer
                }
                ,
                r.prototype.put = function(c) {
                    this.buffer.length < this.position + 1 && this.reallocate(),
                    this.buffer[this.position++] = c
                }
                ,
                r.prototype.get = function(c) {
                    return c == null && (c = this.position,
                    this.position += 1),
                    this.buffer.length < c + 1 ? 0 : this.buffer[c]
                }
                ,
                r.prototype.putShort = function(c) {
                    if (65535 < c)
                        throw c + " is over short value";
                    var u = 255 & c
                      , d = (65280 & c) >> 8;
                    this.put(u),
                    this.put(d)
                }
                ,
                r.prototype.getShort = function(c) {
                    if (c == null && (c = this.position,
                    this.position += 2),
                    this.buffer.length < c + 2)
                        return 0;
                    var u = this.buffer[c]
                      , d = this.buffer[c + 1]
                      , m = (d << 8) + u;
                    return m & 32768 && (m = -(m - 1 ^ 65535)),
                    m
                }
                ,
                r.prototype.putInt = function(c) {
                    if (4294967295 < c)
                        throw c + " is over integer value";
                    var u = 255 & c
                      , d = (65280 & c) >> 8
                      , m = (16711680 & c) >> 16
                      , g = (4278190080 & c) >> 24;
                    this.put(u),
                    this.put(d),
                    this.put(m),
                    this.put(g)
                }
                ,
                r.prototype.getInt = function(c) {
                    if (c == null && (c = this.position,
                    this.position += 4),
                    this.buffer.length < c + 4)
                        return 0;
                    var u = this.buffer[c]
                      , d = this.buffer[c + 1]
                      , m = this.buffer[c + 2]
                      , g = this.buffer[c + 3];
                    return (g << 24) + (m << 16) + (d << 8) + u
                }
                ,
                r.prototype.readInt = function() {
                    var c = this.position;
                    return this.position += 4,
                    this.getInt(c)
                }
                ,
                r.prototype.putString = function(c) {
                    for (var u = s(c), d = 0; d < u.length; d++)
                        this.put(u[d]);
                    this.put(0)
                }
                ,
                r.prototype.getString = function(c) {
                    var u = [], d;
                    for (c == null && (c = this.position); !(this.buffer.length < c + 1 || (d = this.get(c++),
                    d === 0)); )
                        u.push(d);
                    return this.position = c,
                    n(u)
                }
                ,
                o.exports = r
            }
            , {}],
            22: [function(i, o, l) {
                "use strict";
                function s() {}
                s.prototype.formatEntry = function(n, r, c, u) {
                    var d = {};
                    return d.word_id = n,
                    d.word_type = c,
                    d.word_position = r,
                    d.surface_form = u[0],
                    d.pos = u[1],
                    d.pos_detail_1 = u[2],
                    d.pos_detail_2 = u[3],
                    d.pos_detail_3 = u[4],
                    d.conjugated_type = u[5],
                    d.conjugated_form = u[6],
                    d.basic_form = u[7],
                    d.reading = u[8],
                    d.pronunciation = u[9],
                    d
                }
                ,
                s.prototype.formatUnknownEntry = function(n, r, c, u, d) {
                    var m = {};
                    return m.word_id = n,
                    m.word_type = c,
                    m.word_position = r,
                    m.surface_form = d,
                    m.pos = u[1],
                    m.pos_detail_1 = u[2],
                    m.pos_detail_2 = u[3],
                    m.pos_detail_3 = u[4],
                    m.conjugated_type = u[5],
                    m.conjugated_form = u[6],
                    m.basic_form = u[7],
                    m
                }
                ,
                o.exports = s
            }
            , {}],
            23: [function(i, o, l) {
                "use strict";
                function s(n) {
                    this.str = n,
                    this.index_mapping = [];
                    for (var r = 0; r < n.length; r++) {
                        var c = n.charAt(r);
                        this.index_mapping.push(r),
                        s.isSurrogatePair(c) && r++
                    }
                    this.length = this.index_mapping.length
                }
                s.prototype.slice = function(n) {
                    if (this.index_mapping.length <= n)
                        return "";
                    var r = this.index_mapping[n];
                    return this.str.slice(r)
                }
                ,
                s.prototype.charAt = function(n) {
                    if (this.str.length <= n)
                        return "";
                    var r = this.index_mapping[n]
                      , c = this.index_mapping[n + 1];
                    return c == null ? this.str.slice(r) : this.str.slice(r, c)
                }
                ,
                s.prototype.charCodeAt = function(n) {
                    if (this.index_mapping.length <= n)
                        return NaN;
                    var r = this.index_mapping[n], c = this.str.charCodeAt(r), u;
                    return c >= 55296 && c <= 56319 && r < this.str.length && (u = this.str.charCodeAt(r + 1),
                    u >= 56320 && u <= 57343) ? (c - 55296) * 1024 + u - 56320 + 65536 : c
                }
                ,
                s.prototype.toString = function() {
                    return this.str
                }
                ,
                s.isSurrogatePair = function(n) {
                    var r = n.charCodeAt(0);
                    return r >= 55296 && r <= 56319
                }
                ,
                o.exports = s
            }
            , {}],
            24: [function(i, o, l) {
                "use strict";
                var s = i("./ViterbiNode")
                  , n = i("./ViterbiLattice")
                  , r = i("../util/SurrogateAwareString");
                function c(u) {
                    this.trie = u.trie,
                    this.token_info_dictionary = u.token_info_dictionary,
                    this.unknown_dictionary = u.unknown_dictionary
                }
                c.prototype.build = function(u) {
                    for (var d = new n, m = new r(u), g, v, S, x, D, B = 0; B < m.length; B++) {
                        for (var q = m.slice(B), K = this.trie.commonPrefixSearch(q), te = 0; te < K.length; te++) {
                            v = K[te].v,
                            g = K[te].k;
                            for (var W = this.token_info_dictionary.target_map[v], R = 0; R < W.length; R++) {
                                var F = parseInt(W[R]);
                                S = this.token_info_dictionary.dictionary.getShort(F),
                                x = this.token_info_dictionary.dictionary.getShort(F + 2),
                                D = this.token_info_dictionary.dictionary.getShort(F + 4),
                                d.append(new s(F,D,B + 1,g.length,"KNOWN",S,x,g))
                            }
                        }
                        var X = new r(q)
                          , Y = new r(X.charAt(0))
                          , H = this.unknown_dictionary.lookup(Y.toString());
                        if (K == null || K.length === 0 || H.is_always_invoke === 1) {
                            if (g = Y,
                            H.is_grouping === 1 && 1 < X.length)
                                for (var Q = 1; Q < X.length; Q++) {
                                    var Z = X.charAt(Q)
                                      , G = this.unknown_dictionary.lookup(Z);
                                    if (H.class_name !== G.class_name)
                                        break;
                                    g += Z
                                }
                            for (var ee = this.unknown_dictionary.target_map[H.class_id], ie = 0; ie < ee.length; ie++) {
                                var me = parseInt(ee[ie]);
                                S = this.unknown_dictionary.dictionary.getShort(me),
                                x = this.unknown_dictionary.dictionary.getShort(me + 2),
                                D = this.unknown_dictionary.dictionary.getShort(me + 4),
                                d.append(new s(me,D,B + 1,g.length,"UNKNOWN",S,x,g.toString()))
                            }
                        }
                    }
                    return d.appendEos(),
                    d
                }
                ,
                o.exports = c
            }
            , {
                "../util/SurrogateAwareString": 23,
                "./ViterbiLattice": 25,
                "./ViterbiNode": 26
            }],
            25: [function(i, o, l) {
                "use strict";
                var s = i("./ViterbiNode");
                function n() {
                    this.nodes_end_at = [],
                    this.nodes_end_at[0] = [new s(-1,0,0,0,"BOS",0,0,"")],
                    this.eos_pos = 1
                }
                n.prototype.append = function(r) {
                    var c = r.start_pos + r.length - 1;
                    this.eos_pos < c && (this.eos_pos = c);
                    var u = this.nodes_end_at[c];
                    u == null && (u = []),
                    u.push(r),
                    this.nodes_end_at[c] = u
                }
                ,
                n.prototype.appendEos = function() {
                    var r = this.nodes_end_at.length;
                    this.eos_pos++,
                    this.nodes_end_at[r] = [new s(-1,0,this.eos_pos,0,"EOS",0,0,"")]
                }
                ,
                o.exports = n
            }
            , {
                "./ViterbiNode": 26
            }],
            26: [function(i, o, l) {
                "use strict";
                function s(n, r, c, u, d, m, g, v) {
                    this.name = n,
                    this.cost = r,
                    this.start_pos = c,
                    this.length = u,
                    this.left_id = m,
                    this.right_id = g,
                    this.prev = null,
                    this.surface_form = v,
                    d === "BOS" ? this.shortest_cost = 0 : this.shortest_cost = Number.MAX_VALUE,
                    this.type = d
                }
                o.exports = s
            }
            , {}],
            27: [function(i, o, l) {
                "use strict";
                function s(n) {
                    this.connection_costs = n
                }
                s.prototype.search = function(n) {
                    return n = this.forward(n),
                    this.backward(n)
                }
                ,
                s.prototype.forward = function(n) {
                    var r, c, u;
                    for (r = 1; r <= n.eos_pos; r++) {
                        var d = n.nodes_end_at[r];
                        if (d != null)
                            for (c = 0; c < d.length; c++) {
                                var m = d[c], g = Number.MAX_VALUE, v, S = n.nodes_end_at[m.start_pos - 1];
                                if (S != null) {
                                    for (u = 0; u < S.length; u++) {
                                        var x = S[u], D;
                                        m.left_id == null || x.right_id == null ? (console.log("Left or right is null"),
                                        D = 0) : D = this.connection_costs.get(x.right_id, m.left_id);
                                        var B = x.shortest_cost + D + m.cost;
                                        B < g && (v = x,
                                        g = B)
                                    }
                                    m.prev = v,
                                    m.shortest_cost = g
                                }
                            }
                    }
                    return n
                }
                ,
                s.prototype.backward = function(n) {
                    var r = []
                      , c = n.nodes_end_at[n.nodes_end_at.length - 1][0]
                      , u = c.prev;
                    if (u == null)
                        return [];
                    for (; u.type !== "BOS"; ) {
                        if (r.push(u),
                        u.prev == null)
                            return [];
                        u = u.prev
                    }
                    return r.reverse()
                }
                ,
                o.exports = s
            }
            , {}]
        }, {}, [18])(18)
    })
}
);
var $n = la( (ip, Bs) => {
    var Td = !!(typeof window < "u" && window.document && window.document.createElement);
    Bs.exports = Td
}
);
var ll = la( (Wi, sl) => {
    (function(a, e) {
        typeof Wi == "object" && typeof sl < "u" ? e(Wi) : typeof define == "function" && define.amd ? define(["exports"], e) : e((a = typeof globalThis < "u" ? globalThis : a || self)["curve-interpolator"] = {})
    }
    )(Wi, function(a) {
        "use strict";
        var e = function(L, p) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(f, k) {
                f.__proto__ = k
            }
            || function(f, k) {
                for (var w in k)
                    k.hasOwnProperty(w) && (f[w] = k[w])
            }
            ,
            e(L, p)
        };
        function t(L, p) {
            function f() {
                this.constructor = L
            }
            e(L, p),
            L.prototype = p === null ? Object.create(p) : (f.prototype = p.prototype,
            new f)
        }
        var i = function() {
            return i = Object.assign || function(L) {
                for (var p, f = 1, k = arguments.length; f < k; f++)
                    for (var w in p = arguments[f])
                        Object.prototype.hasOwnProperty.call(p, w) && (L[w] = p[w]);
                return L
            }
            ,
            i.apply(this, arguments)
        };
        function o(L, p) {
            for (var f = new Array(L.length), k = 0; k < L.length; k++)
                f[k] = 2 * L[k] - p[k];
            return f
        }
        function l(L, p, f) {
            var k, w, j, I, _ = p.length - 1;
            if (f)
                k = p[L - 1 < 0 ? _ : L - 1],
                w = p[L % p.length],
                j = p[(L + 1) % p.length],
                I = p[(L + 2) % p.length];
            else {
                if (L === _)
                    throw Error("There is no spline segment at this index for a closed curve!");
                w = p[L],
                j = p[L + 1],
                k = L > 0 ? p[L - 1] : o(w, j),
                I = L < _ - 1 ? p[L + 2] : o(j, w)
            }
            return [k, w, j, I]
        }
        function s(L, p, f) {
            f === void 0 && (f = !1);
            var k = f ? p.length : p.length - 1;
            if (L === 1)
                return {
                    index: k - 1,
                    weight: 1
                };
            var w = k * L
              , j = Math.floor(w);
            return {
                index: j,
                weight: w - j
            }
        }
        function n(L, p) {
            for (var f = 0; f < L.length; f++)
                L[f] = p;
            return L
        }
        function r(L, p) {
            for (var f = 0; f < L.length; f++)
                L[f] = p(L[f], f);
            return L
        }
        function c(L, p, f) {
            f === void 0 && (f = 0);
            for (var k = 0; k < L.length; k++)
                f = p(f, L[k], k);
            return f
        }
        function u(L, p) {
            p = p || new Array(L.length);
            for (var f = 0; f < L.length; f++)
                p[f] = L[f];
            return p
        }
        function d(L, p, f) {
            return p === void 0 && (p = 0),
            f === void 0 && (f = 1),
            L < p ? p : L > f ? f : L
        }
        function m(L, p) {
            var f = p[0];
            if (L >= p[p.length - 1])
                return p.length - 1;
            if (L <= f)
                return 0;
            for (var k = 0, w = p.length - 1; k <= w; ) {
                var j = Math.floor((k + w) / 2)
                  , I = p[j];
                if (I < L)
                    k = j + 1;
                else {
                    if (!(I > L))
                        return j;
                    w = j - 1
                }
            }
            return Math.max(0, w)
        }
        var g = Math.pow(2, -42);
        function v(L) {
            var p = Math.pow(Math.abs(L), .3333333333333333);
            return L < 0 ? -p : p
        }
        function S(L, p, f) {
            if (Math.abs(L) < g)
                return Math.abs(p) < g ? [] : [-f / p];
            var k = p * p - 4 * L * f;
            return Math.abs(k) < g ? [-p / (2 * L)] : k > 0 ? [(-p + Math.sqrt(k)) / (2 * L), (-p - Math.sqrt(k)) / (2 * L)] : []
        }
        function x(L, p, f, k) {
            if (Math.abs(L) < g)
                return S(p, f, k);
            var w, j = (3 * L * f - p * p) / (3 * L * L), I = (2 * p * p * p - 9 * L * p * f + 27 * L * L * k) / (27 * L * L * L);
            if (Math.abs(j) < g)
                w = [v(-I)];
            else if (Math.abs(I) < g)
                w = [0].concat(j < 0 ? [Math.sqrt(-j), -Math.sqrt(-j)] : []);
            else {
                var _ = I * I / 4 + j * j * j / 27;
                if (Math.abs(_) < g)
                    w = [-1.5 * I / j, 3 * I / j];
                else if (_ > 0)
                    w = [(M = v(-I / 2 - Math.sqrt(_))) - j / (3 * M)];
                else {
                    var M = 2 * Math.sqrt(-j / 3)
                      , T = Math.acos(3 * I / j / M) / 3
                      , z = 2 * Math.PI / 3;
                    w = [M * Math.cos(T), M * Math.cos(T - z), M * Math.cos(T - 2 * z)]
                }
            }
            for (var E = 0; E < w.length; E++)
                w[E] -= p / (3 * L);
            return w
        }
        function D(L, p) {
            if (L.length !== p.length)
                throw Error("Vectors must be of equal length!");
            for (var f = 0, k = 0; k < L.length; k++)
                f += L[k] * p[k];
            return f
        }
        function B(L, p, f) {
            if (!(L.length > 3)) {
                f = f || new Array(3);
                var k = L[0]
                  , w = L[1]
                  , j = L[2] || 0
                  , I = p[0]
                  , _ = p[1]
                  , M = p[2] || 0;
                return f[0] = w * M - j * _,
                f[1] = j * I - k * M,
                f[2] = k * _ - w * I,
                f
            }
        }
        function q(L, p) {
            for (var f = 0, k = 0; k < L.length; k++)
                f += (L[k] - p[k]) * (L[k] - p[k]);
            return f
        }
        function K(L) {
            for (var p = 0, f = 0; f < L.length; f++)
                p += L[f] * L[f];
            return Math.sqrt(p)
        }
        function te(L, p) {
            var f = q(L, p);
            return f === 0 ? 0 : Math.sqrt(f)
        }
        function W(L, p) {
            var f = p ? u(L, p) : L
              , k = c(f, function(j, I) {
                return j + Math.pow(I, 2)
            })
              , w = Math.sqrt(k);
            return w === 0 ? n(f, 0) : r(f, function(j) {
                return j / w
            })
        }
        function R(L, p, f, k) {
            p === void 0 && (p = [0, 1, 0]),
            f === void 0 && (f = 0);
            var w = Math.cos(f)
              , j = Math.sin(f)
              , I = 1 - w
              , _ = L[0]
              , M = L[1]
              , T = L[2]
              , z = p[0]
              , E = p[1]
              , C = p[2]
              , N = I * z
              , U = I * E;
            return (k = k || L)[0] = (N * z + w) * _ + (N * E - j * C) * M + (N * C + j * E) * T,
            k[1] = (N * E + j * C) * _ + (U * E + w) * M + (U * C - j * z) * T,
            k[2] = (N * C - j * E) * _ + (U * C + j * z) * M + (I * C * C + w) * T,
            k
        }
        function F(L, p, f, k, w) {
            if (w === void 0 && (w = 0),
            w === 0)
                return [0, 1, 2, 3];
            var j = function(M, T) {
                return Math.pow(q(M, T), .5 * w)
            }
              , I = j(p, L)
              , _ = j(f, p) + I;
            return [0, I, _, j(k, f) + _]
        }
        function X(L, p, f, k, w) {
            for (var j = Number.isFinite(w.tension) ? w.tension : .5, I = Number.isFinite(w.alpha) ? w.alpha : null, _ = I > 0 ? F(L, p, f, k, I) : null, M = new Array(L.length), T = 0; T < L.length; T++) {
                var z = 0
                  , E = 0
                  , C = L[T]
                  , N = p[T]
                  , U = f[T]
                  , J = k[T];
                if (_) {
                    var oe = _[0]
                      , re = _[1]
                      , de = _[2]
                      , ae = _[3];
                    re - de != 0 && (oe - re != 0 && oe - de != 0 && (z = (1 - j) * (de - re) * ((C - N) / (oe - re) - (C - U) / (oe - de) + (N - U) / (re - de))),
                    re - ae != 0 && de - ae != 0 && (E = (1 - j) * (de - re) * ((N - U) / (re - de) - (N - J) / (re - ae) + (U - J) / (de - ae))))
                } else
                    z = (1 - j) * (U - C) * .5,
                    E = (1 - j) * (J - N) * .5;
                var ue = 2 * N - 2 * U + z + E
                  , Ae = -3 * N + 3 * U - 2 * z - E
                  , Se = z
                  , _e = N;
                M[T] = [ue, Ae, Se, _e]
            }
            return M
        }
        function Y(L, p) {
            var f = L * L
              , k = L * f;
            return p[0] * k + p[1] * f + p[2] * L + p[3]
        }
        function H(L, p) {
            var f = L * L;
            return 3 * p[0] * f + 2 * p[1] * L + p[2]
        }
        function Q(L, p) {
            return 6 * p[0] * L + 2 * p[1]
        }
        function Z(L, p) {
            var f = p[0]
              , k = p[1]
              , w = p[2]
              , j = p[3] - L;
            return f === 0 && k === 0 && w === 0 && j === 0 ? [0] : x(f, k, w, j).filter(function(I) {
                return I > -g && I <= 1 + g
            }).map(function(I) {
                return d(I, 0, 1)
            })
        }
        function G(L, p, f, k) {
            k === void 0 && (k = null),
            k = k || new Array(f.length);
            for (var w = 0; w < f.length; w++)
                k[w] = L(p, f[w]);
            return k
        }
        var ee = function() {
            function L(p) {
                p === void 0 && (p = null),
                this._alpha = 0,
                this._tension = .5,
                this._closed = !1,
                this._onInvalidateCache = null,
                this._onInvalidateCache = p,
                this._cache = {
                    arcLengths: null,
                    coefficients: null
                }
            }
            return L.prototype._invalidateCache = function() {
                this.points && (this._cache = {
                    arcLengths: null,
                    coefficients: null
                },
                this._onInvalidateCache && this._onInvalidateCache())
            }
            ,
            Object.defineProperty(L.prototype, "alpha", {
                get: function() {
                    return this._alpha
                },
                set: function(p) {
                    Number.isFinite(p) && p !== this._alpha && (this._invalidateCache(),
                    this._alpha = p)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "tension", {
                get: function() {
                    return this._tension
                },
                set: function(p) {
                    Number.isFinite(p) && p !== this._tension && (this._invalidateCache(),
                    this._tension = p)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "points", {
                get: function() {
                    return this._points
                },
                set: function(p) {
                    if (!p || p.length < 2)
                        throw Error("At least 2 control points are required!");
                    this._points = p,
                    this._invalidateCache()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "closed", {
                get: function() {
                    return this._closed
                },
                set: function(p) {
                    p = !!p,
                    this._closed !== p && (this._invalidateCache(),
                    this._closed = p)
                },
                enumerable: !1,
                configurable: !0
            }),
            L.prototype.reset = function() {
                this._invalidateCache()
            }
            ,
            L.prototype.evaluateForT = function(p, f, k) {
                var w = s(f, this.points, this.closed)
                  , j = w.index;
                return G(p, w.weight, this.getCoefficients(j), k)
            }
            ,
            L.prototype.getCoefficients = function(p) {
                if (this.points) {
                    if (this._cache.coefficients || (this._cache.coefficients = new Map),
                    !this._cache.coefficients.has(p)) {
                        var f = l(p, this.points, this.closed)
                          , k = X(f[0], f[1], f[2], f[3], {
                            tension: this.tension,
                            alpha: this.alpha
                        });
                        this._cache.coefficients.set(p, k)
                    }
                    return this._cache.coefficients.get(p)
                }
            }
            ,
            L
        }()
          , ie = function(L) {
            function p(f, k) {
                f === void 0 && (f = 300),
                k === void 0 && (k = null);
                var w = L.call(this, k) || this;
                return w._subDivisions = f,
                w
            }
            return t(p, L),
            Object.defineProperty(p.prototype, "arcLengths", {
                get: function() {
                    return this._cache.arcLengths || (this._cache.arcLengths = this.computeArcLengths()),
                    this._cache.arcLengths
                },
                enumerable: !1,
                configurable: !0
            }),
            p.prototype._invalidateCache = function() {
                L.prototype._invalidateCache.call(this),
                this._cache.arcLengths = null
            }
            ,
            p.prototype.computeArcLengths = function() {
                var f, k = [], w = this.evaluateForT(Y, 0), j = 0;
                k.push(0);
                for (var I = 1; I <= this._subDivisions; I++)
                    j += te(f = this.evaluateForT(Y, I / this._subDivisions), w),
                    k.push(j),
                    w = f;
                return k
            }
            ,
            p.prototype.lengthAt = function(f) {
                var k = this.arcLengths;
                return f * k[k.length - 1]
            }
            ,
            p.prototype.getT = function(f) {
                var k = this.arcLengths
                  , w = k.length
                  , j = f * k[w - 1]
                  , I = m(j, k);
                if (k[I] === j)
                    return I / (w - 1);
                var _ = k[I];
                return (I + (j - _) / (k[I + 1] - _)) / (w - 1)
            }
            ,
            p.prototype.getU = function(f) {
                if (f === 0)
                    return 0;
                if (f === 1)
                    return 1;
                var k = this.arcLengths
                  , w = k.length - 1
                  , j = k[w]
                  , I = f * w
                  , _ = Math.floor(I)
                  , M = k[_];
                if (I === _)
                    return M / j;
                var T = _ / w;
                return (M + te(this.evaluateForT(Y, T), this.evaluateForT(Y, f))) / j
            }
            ,
            p
        }(ee)
          , me = [[[-.906179845938664, .23692688505618908], [-.5384693101056831, .47862867049936647], [0, .5688888888888889], [.5384693101056831, .47862867049936647], [.906179845938664, .23692688505618908]], [[-.932469514203152, .17132449237917036], [-.6612093864662645, .3607615730481386], [-.2386191860831969, .46791393457269104], [.2386191860831969, .46791393457269104], [.6612093864662645, .3607615730481386], [.932469514203152, .17132449237917036]], [[-.9491079123427585, .1294849661688697], [-.7415311855993945, .27970539148927664], [-.4058451513773972, .3818300505051189], [0, .4179591836734694], [.4058451513773972, .3818300505051189], [.7415311855993945, .27970539148927664], [.9491079123427585, .1294849661688697]], [[-.9602898564975363, .10122853629037626], [-.7966664774136267, .22238103445337448], [-.525532409916329, .31370664587788727], [-.1834346424956498, .362683783378362], [.1834346424956498, .362683783378362], [.525532409916329, .31370664587788727], [.7966664774136267, .22238103445337448], [.9602898564975363, .10122853629037626]], [[-.9681602395076261, .08127438836157441], [-.8360311073266358, .1806481606948574], [-.6133714327005904, .26061069640293544], [-.3242534234038089, .31234707704000286], [0, .3302393550012598], [.3242534234038089, .31234707704000286], [.6133714327005904, .26061069640293544], [.8360311073266358, .1806481606948574], [.9681602395076261, .08127438836157441]], [[-.9739065285171717, .06667134430868814], [-.8650633666889845, .1494513491505806], [-.6794095682990244, .21908636251598204], [-.4333953941292472, .26926671930999635], [-.14887433898163122, .29552422471475287], [.14887433898163122, .29552422471475287], [.4333953941292472, .26926671930999635], [.6794095682990244, .21908636251598204], [.8650633666889845, .1494513491505806], [.9739065285171717, .06667134430868814]], [[-.978228658146056, .0556685671161736], [-.887062599768095, .125580369464904], [-.730152005574049, .186290210927734], [-.519096129206811, .23319376459199], [-.269543155952344, .262804544510246], [0, .2729250867779], [.269543155952344, .262804544510246], [.519096129206811, .23319376459199], [.730152005574049, .186290210927734], [.887062599768095, .125580369464904], [.978228658146056, .0556685671161736]], [[-.981560634246719, .0471753363865118], [-.904117256370474, .106939325995318], [-.769902674194304, .160078328543346], [-.587317954286617, .203167426723065], [-.36783149899818, .233492536538354], [-.125233408511468, .249147045813402], [.125233408511468, .249147045813402], [.36783149899818, .233492536538354], [.587317954286617, .203167426723065], [.769902674194304, .160078328543346], [.904117256370474, .106939325995318], [.981560634246719, .0471753363865118]], [[-.984183054718588, .0404840047653158], [-.917598399222977, .0921214998377284], [-.801578090733309, .138873510219787], [-.64234933944034, .178145980761945], [-.448492751036446, .207816047536888], [-.230458315955134, .226283180262897], [0, .232551553230873], [.230458315955134, .226283180262897], [.448492751036446, .207816047536888], [.64234933944034, .178145980761945], [.801578090733309, .138873510219787], [.917598399222977, .0921214998377284], [.984183054718588, .0404840047653158]], [[-.986283808696812, .0351194603317518], [-.928434883663573, .0801580871597602], [-.827201315069764, .121518570687903], [-.687292904811685, .157203167158193], [-.515248636358154, .185538397477937], [-.319112368927889, .205198463721295], [-.108054948707343, .215263853463157], [.108054948707343, .215263853463157], [.319112368927889, .205198463721295], [.515248636358154, .185538397477937], [.687292904811685, .157203167158193], [.827201315069764, .121518570687903], [.928434883663573, .0801580871597602], [.986283808696812, .0351194603317518]], [[-.987992518020485, .0307532419961172], [-.937273392400705, .0703660474881081], [-.848206583410427, .107159220467171], [-.72441773136017, .139570677926154], [-.570972172608538, .166269205816993], [-.394151347077563, .186161000015562], [-.201194093997434, .198431485327111], [0, .202578241925561], [.201194093997434, .198431485327111], [.394151347077563, .186161000015562], [.570972172608538, .166269205816993], [.72441773136017, .139570677926154], [.848206583410427, .107159220467171], [.937273392400705, .0703660474881081], [.987992518020485, .0307532419961172]], [[-.989400934991649, .027152459411754], [-.944575023073232, .0622535239386478], [-.865631202387831, .0951585116824927], [-.755404408355003, .124628971255533], [-.617876244402643, .149595988816576], [-.458016777657227, .169156519395002], [-.281603550779258, .182603415044923], [-.0950125098376374, .189450610455068], [.0950125098376374, .189450610455068], [.281603550779258, .182603415044923], [.458016777657227, .169156519395002], [.617876244402643, .149595988816576], [.755404408355003, .124628971255533], [.865631202387831, .0951585116824927], [.944575023073232, .0622535239386478], [.989400934991649, .027152459411754]], [[-.990575475314417, .0241483028685479], [-.950675521768767, .0554595293739872], [-.880239153726985, .0850361483171791], [-.781514003896801, .111883847193403], [-.65767115921669, .135136368468525], [-.512690537086476, .15404576107681], [-.351231763453876, .16800410215645], [-.178484181495847, .176562705366992], [0, .179446470356206], [.178484181495847, .176562705366992], [.351231763453876, .16800410215645], [.512690537086476, .15404576107681], [.65767115921669, .135136368468525], [.781514003896801, .111883847193403], [.880239153726985, .0850361483171791], [.950675521768767, .0554595293739872], [.990575475314417, .0241483028685479]], [[-.99156516842093, .0216160135264833], [-.955823949571397, .0497145488949698], [-.892602466497555, .076425730254889], [-.803704958972523, .100942044106287], [-.691687043060353, .122555206711478], [-.559770831073947, .14064291467065], [-.411751161462842, .154684675126265], [-.251886225691505, .164276483745832], [-.0847750130417353, .169142382963143], [.0847750130417353, .169142382963143], [.251886225691505, .164276483745832], [.411751161462842, .154684675126265], [.559770831073947, .14064291467065], [.691687043060353, .122555206711478], [.803704958972523, .100942044106287], [.892602466497555, .076425730254889], [.955823949571397, .0497145488949697], [.99156516842093, .0216160135264833]], [[-.992406843843584, .0194617882297264], [-.96020815213483, .0448142267656996], [-.903155903614817, .0690445427376412], [-.822714656537142, .0914900216224499], [-.720966177335229, .111566645547333], [-.600545304661681, .128753962539336], [-.46457074137596, .142606702173606], [-.316564099963629, .152766042065859], [-.160358645640225, .158968843393954], [0, .161054449848783], [.160358645640225, .158968843393954], [.316564099963629, .152766042065859], [.46457074137596, .142606702173606], [.600545304661681, .128753962539336], [.720966177335229, .111566645547333], [.822714656537142, .0914900216224499], [.903155903614817, .0690445427376412], [.96020815213483, .0448142267656996], [.992406843843584, .0194617882297264]], [[-.993128599185094, .0176140071391521], [-.963971927277913, .0406014298003869], [-.912234428251325, .062672048334109], [-.839116971822218, .0832767415767047], [-.74633190646015, .10193011981724], [-.636053680726515, .118194531961518], [-.510867001950827, .131688638449176], [-.373706088715419, .142096109318382], [-.227785851141645, .149172986472603], [-.0765265211334973, .152753387130725], [.0765265211334973, .152753387130725], [.227785851141645, .149172986472603], [.373706088715419, .142096109318382], [.510867001950827, .131688638449176], [.636053680726515, .118194531961518], [.74633190646015, .10193011981724], [.839116971822218, .0832767415767047], [.912234428251325, .062672048334109], [.963971927277913, .0406014298003869], [.993128599185094, .0176140071391521]], [[-.993752170620389, .0160172282577743], [-.967226838566306, .0369537897708524], [-.9200993341504, .0571344254268572], [-.853363364583317, .0761001136283793], [-.768439963475677, .0934444234560338], [-.667138804197412, .108797299167148], [-.551618835887219, .121831416053728], [-.424342120207438, .132268938633337], [-.288021316802401, .139887394791073], [-.145561854160895, .14452440398997], [0, .14608113364969], [.145561854160895, .14452440398997], [.288021316802401, .139887394791073], [.424342120207438, .132268938633337], [.551618835887219, .121831416053728], [.667138804197412, .108797299167148], [.768439963475677, .0934444234560338], [.853363364583317, .0761001136283793], [.9200993341504, .0571344254268572], [.967226838566306, .0369537897708524], [.993752170620389, .0160172282577743]], [[-.994294585482399, .0146279952982722], [-.970060497835428, .0337749015848141], [-.926956772187174, .0522933351526832], [-.8658125777203, .0697964684245204], [-.787816805979208, .0859416062170677], [-.694487263186682, .10041414444288], [-.587640403506911, .112932296080539], [-.469355837986757, .123252376810512], [-.341935820892084, .131173504787062], [-.207860426688221, .136541498346015], [-.0697392733197222, .139251872855631], [.0697392733197222, .139251872855631], [.207860426688221, .136541498346015], [.341935820892084, .131173504787062], [.469355837986757, .123252376810512], [.587640403506911, .112932296080539], [.694487263186682, .10041414444288], [.787816805979208, .0859416062170677], [.8658125777203, .0697964684245204], [.926956772187174, .0522933351526832], [.970060497835428, .0337749015848141], [.994294585482399, .0146279952982722]], [[-.994769334997552, .0134118594871417], [-.972542471218115, .0309880058569794], [-.932971086826016, .0480376717310846], [-.876752358270441, .0642324214085258], [-.804888401618839, .0792814117767189], [-.71866136313195, .0929157660600351], [-.619609875763646, .104892091464541], [-.509501477846007, .114996640222411], [-.39030103803029, .123049084306729], [-.264135680970344, .128905722188082], [-.133256824298466, .132462039404696], [0, .133654572186106], [.133256824298466, .132462039404696], [.264135680970344, .128905722188082], [.39030103803029, .123049084306729], [.509501477846007, .114996640222411], [.619609875763646, .104892091464541], [.71866136313195, .0929157660600351], [.804888401618839, .0792814117767189], [.876752358270441, .0642324214085258], [.932971086826016, .0480376717310846], [.972542471218115, .0309880058569794], [.994769334997552, .0134118594871417]], [[-.995187219997021, .0123412297999872], [-.974728555971309, .0285313886289336], [-.938274552002732, .0442774388174198], [-.886415527004401, .0592985849154367], [-.820001985973902, .0733464814110803], [-.740124191578554, .0861901615319532], [-.648093651936975, .0976186521041138], [-.545421471388839, .107444270115965], [-.433793507626045, .115505668053725], [-.315042679696163, .121670472927803], [-.191118867473616, .125837456346828], [-.0640568928626056, .127938195346752], [.0640568928626056, .127938195346752], [.191118867473616, .125837456346828], [.315042679696163, .121670472927803], [.433793507626045, .115505668053725], [.545421471388839, .107444270115965], [.648093651936975, .0976186521041138], [.740124191578554, .0861901615319532], [.820001985973902, .0733464814110803], [.886415527004401, .0592985849154367], [.938274552002732, .0442774388174198], [.974728555971309, .0285313886289336], [.995187219997021, .0123412297999872]], [[-.995556969790498, .0113937985010262], [-.976663921459517, .0263549866150321], [-.942974571228974, .0409391567013063], [-.894991997878275, .0549046959758351], [-.833442628760834, .0680383338123569], [-.759259263037357, .080140700335001], [-.673566368473468, .0910282619829636], [-.577662930241222, .10053594906705], [-.473002731445714, .108519624474263], [-.361172305809387, .114858259145711], [-.243866883720988, .119455763535784], [-.12286469261071, .12224244299031], [0, .123176053726715], [.12286469261071, .12224244299031], [.243866883720988, .119455763535784], [.361172305809387, .114858259145711], [.473002731445714, .108519624474263], [.577662930241222, .10053594906705], [.673566368473468, .0910282619829636], [.759259263037357, .080140700335001], [.833442628760834, .0680383338123569], [.894991997878275, .0549046959758351], [.942974571228974, .0409391567013063], [.976663921459517, .0263549866150321], [.995556969790498, .0113937985010262]], [[-.995885701145616, .010551372617343], [-.97838544595647, .0244178510926319], [-.947159066661714, .0379623832943627], [-.902637861984307, .0509758252971478], [-.845445942788498, .0632740463295748], [-.776385948820678, .0746841497656597], [-.696427260419957, .0850458943134852], [-.606692293017618, .0942138003559141], [-.508440714824505, .102059161094425], [-.403051755123486, .108471840528576], [-.292004839485956, .113361816546319], [-.17685882035689, .116660443485296], [-.0592300934293132, .118321415279262], [.0592300934293132, .118321415279262], [.17685882035689, .116660443485296], [.292004839485956, .113361816546319], [.403051755123486, .108471840528576], [.508440714824505, .102059161094425], [.606692293017618, .0942138003559141], [.696427260419957, .0850458943134852], [.776385948820678, .0746841497656597], [.845445942788498, .0632740463295748], [.902637861984307, .0509758252971478], [.947159066661714, .0379623832943627], [.97838544595647, .0244178510926319], [.995885701145616, .010551372617343]], [[-.996179262888988, .00979899605129436], [-.979923475961501, .0226862315961806], [-.950900557814705, .0352970537574197], [-.909482320677491, .047449412520615], [-.856207908018294, .0589835368598335], [-.791771639070508, .0697488237662455], [-.717013473739423, .0796048677730577], [-.632907971946495, .0884231585437569], [-.540551564579456, .0960887273700285], [-.441148251750026, .102501637817745], [-.335993903638508, .107578285788533], [-.226459365439536, .111252488356845], [-.113972585609529, .113476346108965], [0, .114220867378956], [.113972585609529, .113476346108965], [.226459365439536, .111252488356845], [.335993903638508, .107578285788533], [.441148251750026, .102501637817745], [.540551564579456, .0960887273700285], [.632907971946495, .0884231585437569], [.717013473739423, .0796048677730577], [.791771639070508, .0697488237662455], [.856207908018294, .0589835368598336], [.909482320677491, .047449412520615], [.950900557814705, .0352970537574197], [.979923475961501, .0226862315961806], [.996179262888988, .00979899605129436]], [[-.996442497573954, .00912428259309452], [-.981303165370872, .0211321125927712], [-.954259280628938, .0329014277823043], [-.915633026392132, .0442729347590042], [-.865892522574395, .0551073456757167], [-.805641370917179, .0652729239669995], [-.735610878013631, .0746462142345687], [-.656651094038864, .0831134172289012], [-.569720471811401, .0905717443930328], [-.475874224955118, .0969306579979299], [-.376251516089078, .10211296757806], [-.272061627635178, .106055765922846], [-.16456928213338, .108711192258294], [-.0550792898840342, .110047013016475], [.0550792898840342, .110047013016475], [.16456928213338, .108711192258294], [.272061627635178, .106055765922846], [.376251516089078, .10211296757806], [.475874224955118, .0969306579979299], [.569720471811401, .0905717443930328], [.656651094038864, .0831134172289012], [.735610878013631, .0746462142345687], [.805641370917179, .0652729239669995], [.865892522574395, .0551073456757167], [.915633026392132, .0442729347590042], [.954259280628938, .0329014277823043], [.981303165370872, .0211321125927712], [.996442497573954, .00912428259309452]], [[-.996679442260596, .00851690387874641], [-.982545505261413, .0197320850561227], [-.957285595778087, .0307404922020936], [-.921180232953058, .0414020625186828], [-.874637804920102, .0515948269024979], [-.818185487615252, .0612030906570791], [-.752462851734477, .0701179332550512], [-.678214537602686, .0782383271357637], [-.596281797138227, .0854722573661725], [-.507592955124227, .0917377571392587], [-.413152888174008, .0969638340944086], [-.314031637867639, .101091273759914], [-.211352286166001, .104073310077729], [-.106278230132679, .10587615509732], [0, .106479381718314], [.106278230132679, .10587615509732], [.211352286166001, .104073310077729], [.314031637867639, .101091273759914], [.413152888174008, .0969638340944086], [.507592955124227, .0917377571392587], [.596281797138227, .0854722573661725], [.678214537602686, .0782383271357637], [.752462851734477, .0701179332550512], [.818185487615252, .0612030906570791], [.874637804920102, .0515948269024979], [.921180232953058, .0414020625186828], [.957285595778087, .0307404922020936], [.982545505261413, .0197320850561227], [.996679442260596, .00851690387874641]], [[-.996893484074649, .0079681924961666], [-.983668123279747, .0184664683110909], [-.960021864968307, .0287847078833233], [-.926200047429274, .038799192569627], [-.882560535792052, .048402672830594], [-.829565762382768, .057493156217619], [-.767777432104826, .0659742298821805], [-.697850494793315, .0737559747377052], [-.620526182989242, .0807558952294202], [-.536624148142019, .0868997872010829], [-.447033769538089, .0921225222377861], [-.352704725530878, .0963687371746442], [-.254636926167889, .0995934205867952], [-.153869913608583, .101762389748405], [-.0514718425553176, .102852652893558], [.0514718425553176, .102852652893558], [.153869913608583, .101762389748405], [.254636926167889, .0995934205867952], [.352704725530878, .0963687371746442], [.447033769538089, .0921225222377861], [.536624148142019, .0868997872010829], [.620526182989242, .0807558952294202], [.697850494793315, .0737559747377052], [.767777432104826, .0659742298821805], [.829565762382768, .057493156217619], [.882560535792052, .048402672830594], [.926200047429274, .038799192569627], [.960021864968307, .0287847078833233], [.983668123279747, .0184664683110909], [.996893484074649, .0079681924961666]]]
          , le = me.length + 5
          , pe = function(L) {
            function p(f, k, w) {
                f === void 0 && (f = 24),
                k === void 0 && (k = 21);
                var j = L.call(this, w) || this;
                return j._nSamples = 21,
                j._gauss = function(I) {
                    if (I < 5 || I > le)
                        throw Error("Order for Gaussian Quadrature must be in the range of ".concat(5, " and ").concat(le, "."));
                    return me[I - 5]
                }(f),
                j._nSamples = k,
                j
            }
            return t(p, L),
            p.prototype._invalidateCache = function() {
                L.prototype._invalidateCache.call(this),
                this._cache.arcLengths = null,
                this._cache.samples = null
            }
            ,
            Object.defineProperty(p.prototype, "arcLengths", {
                get: function() {
                    return this._cache.arcLengths || (this._cache.arcLengths = this.computeArcLengths()),
                    this._cache.arcLengths
                },
                enumerable: !1,
                configurable: !0
            }),
            p.prototype.getSamples = function(f) {
                if (this.points) {
                    if (this._cache.samples || (this._cache.samples = new Map),
                    !this._cache.samples.has(f)) {
                        for (var k = this._nSamples, w = [], j = [], I = this.getCoefficients(f), _ = 0; _ < k; ++_) {
                            var M = _ / (k - 1);
                            w.push(this.computeArcLength(f, 0, M));
                            var T = K(G(H, M, I))
                              , z = T === 0 ? 0 : 1 / T;
                            this.tension > .95 && (z = d(z, -1, 1)),
                            j.push(z)
                        }
                        var E = k - 1
                          , C = []
                          , N = []
                          , U = w[0]
                          , J = j[0]
                          , oe = 1 / E;
                        for (_ = 0; _ < E; ++_) {
                            var re = U
                              , de = (U = w[_ + 1]) - re
                              , ae = J
                              , ue = j[_ + 1];
                            J = ue;
                            var Ae = oe / de
                              , Se = (ae + ue - 2 * Ae) / (de * de)
                              , _e = (3 * Ae - 2 * ae - ue) / de;
                            C.push(Se),
                            N.push(_e)
                        }
                        this._cache.samples.set(f, [w, j, N, C])
                    }
                    return this._cache.samples.get(f)
                }
            }
            ,
            p.prototype.computeArcLength = function(f, k, w) {
                if (k === void 0 && (k = 0),
                w === void 0 && (w = 1),
                k === w)
                    return 0;
                for (var j = this.getCoefficients(f), I = .5 * (w - k), _ = 0, M = 0; M < this._gauss.length; M++) {
                    var T = this._gauss[M]
                      , z = T[0];
                    _ += T[1] * K(G(H, I * z + I + k, j))
                }
                return I * _
            }
            ,
            p.prototype.computeArcLengths = function() {
                if (this.points) {
                    var f = [];
                    f.push(0);
                    for (var k = this.closed ? this.points.length : this.points.length - 1, w = 0, j = 0; j < k; j++)
                        w += this.computeArcLength(j),
                        f.push(w);
                    return f
                }
            }
            ,
            p.prototype.inverse = function(f, k) {
                var w = 1 / (this._nSamples - 1)
                  , j = this.getSamples(f)
                  , I = j[0]
                  , _ = j[1]
                  , M = j[2]
                  , T = j[3];
                if (k >= I[I.length - 1])
                    return 1;
                if (k <= 0)
                    return 0;
                var z = Math.max(0, m(k, I))
                  , E = z * w;
                if (I[z] === k)
                    return E;
                var C = _[z]
                  , N = T[z]
                  , U = M[z]
                  , J = k - I[z];
                return ((N * J + U) * J + C) * J + E
            }
            ,
            p.prototype.lengthAt = function(f) {
                return f * this.arcLengths[this.arcLengths.length - 1]
            }
            ,
            p.prototype.getT = function(f) {
                var k = this.arcLengths
                  , w = k.length
                  , j = f * k[w - 1]
                  , I = m(j, k)
                  , _ = I / (w - 1);
                if (k[I] === j)
                    return _;
                var M = j - k[I];
                return (I + this.inverse(I, M)) / (w - 1)
            }
            ,
            p.prototype.getU = function(f) {
                if (f === 0)
                    return 0;
                if (f === 1)
                    return 1;
                var k = this.arcLengths
                  , w = k.length - 1
                  , j = k[w]
                  , I = f * w
                  , _ = Math.floor(I)
                  , M = k[_];
                if (I === _)
                    return M / j;
                var T = I - _;
                return (M + this.computeArcLength(_, 0, T)) / j
            }
            ,
            p
        }(ee)
          , ge = function() {
            function L(p, f) {
                f === void 0 && (f = {});
                var k = this;
                this._cache = new Map;
                var w = (f = i({
                    tension: .5,
                    alpha: 0,
                    closed: !1
                }, f)).arcDivisions ? new ie(f.arcDivisions,function() {
                    return k._invalidateCache()
                }
                ) : new pe(f.numericalApproximationOrder,f.numericalInverseSamples,function() {
                    return k._invalidateCache()
                }
                );
                w.alpha = f.alpha,
                w.tension = f.tension,
                w.closed = f.closed,
                w.points = p,
                this._lmargin = f.lmargin || 1 - w.tension,
                this._curveMapper = w
            }
            return L.prototype.getTimeFromPosition = function(p, f) {
                return f === void 0 && (f = !1),
                this._curveMapper.getT(f ? d(p, 0, 1) : p)
            }
            ,
            L.prototype.getPositionFromTime = function(p, f) {
                return f === void 0 && (f = !1),
                this._curveMapper.getU(f ? d(p, 0, 1) : p)
            }
            ,
            L.prototype.getPositionFromLength = function(p, f) {
                f === void 0 && (f = !1);
                var k = f ? d(p, 0, this.length) : p;
                return this._curveMapper.getU(k / this.length)
            }
            ,
            L.prototype.getLengthAt = function(p, f) {
                return p === void 0 && (p = 1),
                f === void 0 && (f = !1),
                this._curveMapper.lengthAt(f ? d(p, 0, 1) : p)
            }
            ,
            L.prototype.getTimeAtKnot = function(p) {
                if (p < 0 || p > this.points.length - 1)
                    throw Error("Invalid index!");
                return p === 0 ? 0 : this.closed || p !== this.points.length - 1 ? p / (this.closed ? this.points.length : this.points.length - 1) : 1
            }
            ,
            L.prototype.getPositionAtKnot = function(p) {
                return this.getPositionFromTime(this.getTimeAtKnot(p))
            }
            ,
            L.prototype.getPointAtTime = function(p, f) {
                return (p = d(p, 0, 1)) === 0 ? u(this.points[0], f) : p === 1 ? u(this.closed ? this.points[0] : this.points[this.points.length - 1], f) : this._curveMapper.evaluateForT(Y, p, f)
            }
            ,
            L.prototype.getPointAt = function(p, f) {
                return this.getPointAtTime(this.getTimeFromPosition(p), f)
            }
            ,
            L.prototype.getTangentAt = function(p, f) {
                var k = d(this.getTimeFromPosition(p), 0, 1);
                return this.getTangentAtTime(k, f)
            }
            ,
            L.prototype.getTangentAtTime = function(p, f) {
                return W(this._curveMapper.evaluateForT(H, p, f))
            }
            ,
            L.prototype.getNormalAt = function(p, f) {
                var k = d(this.getTimeFromPosition(p), 0, 1);
                return this.getNormalAtTime(k, f)
            }
            ,
            L.prototype.getNormalAtTime = function(p, f) {
                var k = W(this._curveMapper.evaluateForT(H, p));
                if (!(k.length < 2 || k.length > 3)) {
                    var w = f || new Array(k.length);
                    if (k.length === 2)
                        return w[0] = -k[1],
                        w[1] = k[0],
                        w;
                    var j = W(this._curveMapper.evaluateForT(Q, p));
                    return W(B(B(k, j), k), w)
                }
            }
            ,
            L.prototype.getFrenetFrames = function(p, f, k) {
                if (f === void 0 && (f = 0),
                k === void 0 && (k = 1),
                !(f < 0 || k > 1 || k < f)) {
                    for (var w = new Array(p + 1), j = new Array(p + 1), I = 0; I <= p; I++) {
                        var _ = f === 0 && k === 1 ? I / p : f + I / p * (k - f);
                        w[I] = this.getTangentAt(_)
                    }
                    if (this.dim === 2) {
                        for (I = 0; I < w.length; I++)
                            j[I] = [-w[I][1], w[I][0]];
                        return {
                            tangents: w,
                            normals: j
                        }
                    }
                    if (this.dim === 3) {
                        var M = new Array(p + 1)
                          , T = void 0
                          , z = Number.MAX_VALUE
                          , E = Math.abs(w[0][0])
                          , C = Math.abs(w[0][1]);
                        E <= z && (z = E,
                        T = [1, 0, 0]),
                        C <= z && (z = C,
                        T = [0, 1, 0]),
                        Math.abs(w[0][2]) <= z && (T = [0, 0, 1]);
                        var N = W(B(w[0], T));
                        for (j[0] = B(w[0], N),
                        M[0] = B(w[0], j[0]),
                        I = 1; I <= p; I++) {
                            if (N = B(w[I - 1], w[I]),
                            j[I] = u(j[I - 1]),
                            K(N) > g) {
                                W(N);
                                var U = Math.acos(d(D(w[I - 1], w[I]), -1, 1));
                                R(j[I - 1], N, U, j[I])
                            }
                            M[I] = B(w[I], j[I])
                        }
                        if (this.closed === !0)
                            for (U = Math.acos(d(D(j[0], j[p]), -1, 1)) / p,
                            D(w[0], B(j[0], j[p])) > 0 && (U = -U),
                            I = 1; I <= p; I++)
                                R(j[I], w[I], U * I, j[I]),
                                M[I] = B(w[I], j[I]);
                        return {
                            tangents: w,
                            normals: j,
                            binormals: M
                        }
                    }
                }
            }
            ,
            L.prototype.getCurvatureAt = function(p) {
                var f = d(this.getTimeFromPosition(p), 0, 1);
                return this.getCurvatureAtTime(f)
            }
            ,
            L.prototype.getCurvatureAtTime = function(p) {
                var f = this._curveMapper.evaluateForT(H, p)
                  , k = this._curveMapper.evaluateForT(Q, p)
                  , w = W(f, [])
                  , j = 0
                  , I = void 0;
                if (f.length === 2) {
                    if ((E = Math.pow(f[0] * f[0] + f[1] * f[1], 1.5)) !== 0) {
                        var _ = (f[0] * k[1] - f[1] * k[0]) / E;
                        I = _ < 0 ? [w[1], -w[0]] : [-w[1], w[0]],
                        j = Math.abs(_)
                    }
                } else if (f.length === 3) {
                    var M = K(f)
                      , T = B(f, k);
                    I = W(B(T, f)),
                    M !== 0 && (j = K(T) / Math.pow(M, 3))
                } else {
                    M = K(f);
                    var z = K(k)
                      , E = Math.pow(M, 3)
                      , C = D(f, k);
                    E !== 0 && (j = Math.sqrt(Math.pow(M, 2) * Math.pow(z, 2) - Math.pow(C, 2)) / E)
                }
                return {
                    curvature: j,
                    radius: j !== 0 ? 1 / j : 0,
                    tangent: w,
                    direction: I
                }
            }
            ,
            L.prototype.getDerivativeAt = function(p, f) {
                var k = d(this.getTimeFromPosition(p), 0, 1);
                return this._curveMapper.evaluateForT(H, k, f)
            }
            ,
            L.prototype.getSecondDerivativeAt = function(p, f) {
                var k = d(this.getTimeFromPosition(p), 0, 1);
                return this._curveMapper.evaluateForT(Q, k, f)
            }
            ,
            L.prototype.getBoundingBox = function(p, f) {
                if (p === void 0 && (p = 0),
                f === void 0 && (f = 1),
                p === 0 && f === 1 && this._cache.has("bbox"))
                    return this._cache.get("bbox");
                for (var k = [], w = [], j = this.getTimeFromPosition(p), I = this.getTimeFromPosition(f), _ = this.getPointAtTime(j), M = this.getPointAtTime(I), T = this.closed ? this.points.length : this.points.length - 1, z = Math.floor(T * j), E = Math.ceil(T * I), C = 0; C < _.length; C++)
                    k[C] = Math.min(_[C], M[C]),
                    w[C] = Math.max(_[C], M[C]);
                for (var N = function(re) {
                    var de = l(re - 1, U.points, U.closed)[2];
                    if (re < E)
                        for (var ae = 0; ae < de.length; ae++)
                            de[ae] < k[ae] && (k[ae] = de[ae]),
                            de[ae] > w[ae] && (w[ae] = de[ae]);
                    if (U.tension < 1) {
                        var ue = T * j - (re - 1)
                          , Ae = T * I - (re - 1)
                          , Se = function(be) {
                            return be > -g && be <= 1 + g && (re - 1 !== z || be > ue) && (re !== E || be < Ae)
                        }
                          , _e = U._curveMapper.getCoefficients(re - 1)
                          , ea = function(be) {
                            var Ge = _e[be];
                            S(3 * Ge[0], 2 * Ge[1], Ge[2]).filter(Se).forEach(function(oa) {
                                var qe = Y(oa, _e[be]);
                                qe < k[be] && (k[be] = qe),
                                qe > w[be] && (w[be] = qe)
                            })
                        };
                        for (ae = 0; ae < _e.length; ae++)
                            ea(ae)
                    }
                }, U = this, J = z + 1; J <= E; J++)
                    N(J);
                var oe = {
                    min: k,
                    max: w
                };
                return p === 0 && f === 1 && this._cache.set("bbox", oe),
                oe
            }
            ,
            L.prototype.getPoints = function(p, f, k, w) {
                if (p === void 0 && (p = 100),
                k === void 0 && (k = 0),
                w === void 0 && (w = 1),
                !p || p <= 0)
                    throw Error("Invalid arguments passed to getPoints(). You must specify at least 1 sample/segment.");
                if (!(k < 0 || w > 1 || w < k)) {
                    for (var j = [], I = 0; I <= p; I++) {
                        var _ = k === 0 && w === 1 ? I / p : k + I / p * (w - k);
                        j.push(this.getPointAt(_, f && new f))
                    }
                    return j
                }
            }
            ,
            L.prototype.getNearestPosition = function(p, f, k) {
                var w = this;
                if (f === void 0 && (f = 1e-5),
                f <= 0 || !Number.isFinite(f))
                    throw Error("Invalid threshold. Must be a number greater than zero!");
                k = k || 10 * this.points.length - 1;
                var j = new Array(p.length)
                  , I = 1 / 0
                  , _ = 0
                  , M = this.createLookupTable(function(C) {
                    return w.getPointAt(C)
                }, k, {
                    cacheKey: "lut_nearest_".concat(k)
                });
                Array.from(M.keys()).forEach(function(C) {
                    var N = M.get(C)
                      , U = te(p, N);
                    if (U < I)
                        return I = U,
                        _ = C,
                        !0
                });
                for (var T = this.getTimeFromPosition(_), z = function(C) {
                    if (C >= 0 && C <= 1) {
                        w.getPointAtTime(C, j);
                        var N = te(p, j);
                        if (N < I)
                            return I = N,
                            T = C,
                            !0
                    }
                }, E = .005; E > f; )
                    z(T - E) || z(T + E) || (E /= 2);
                return {
                    u: _ = this._curveMapper.getU(T),
                    distance: I,
                    point: j
                }
            }
            ,
            L.prototype.getIntersects = function(p, f, k, w) {
                var j = this;
                f === void 0 && (f = 0),
                k === void 0 && (k = 0),
                w === void 0 && (w = this._lmargin);
                var I = this.getIntersectsAsTime(p, f, k, w).map(function(_) {
                    return j.getPointAtTime(_)
                });
                return Math.abs(k) === 1 ? I.length === 1 ? I[0] : null : I
            }
            ,
            L.prototype.getIntersectsAsPositions = function(p, f, k, w) {
                var j = this;
                return f === void 0 && (f = 0),
                k === void 0 && (k = 0),
                w === void 0 && (w = this._lmargin),
                this.getIntersectsAsTime(p, f, k, w).map(function(I) {
                    return j.getPositionFromTime(I)
                })
            }
            ,
            L.prototype.getIntersectsAsTime = function(p, f, k, w) {
                f === void 0 && (f = 0),
                k === void 0 && (k = 0),
                w === void 0 && (w = this._lmargin);
                for (var j = f, I = new Set, _ = this.closed ? this.points.length : this.points.length - 1, M = 0; M < _ && (k === 0 || I.size < Math.abs(k)); M += 1) {
                    var T = k < 0 ? _ - (M + 1) : M
                      , z = l(T, this.points, this.closed)
                      , E = z[1]
                      , C = z[2]
                      , N = this._curveMapper.getCoefficients(T)
                      , U = void 0
                      , J = void 0;
                    if (E[j] < C[j] ? (U = E[j],
                    J = C[j]) : (U = C[j],
                    J = E[j]),
                    p - w <= J && p + w >= U) {
                        var oe = Z(p, N[j]);
                        k < 0 ? oe.sort(function(ae, ue) {
                            return ue - ae
                        }) : k >= 0 && oe.sort(function(ae, ue) {
                            return ae - ue
                        });
                        for (var re = 0; re < oe.length; re++) {
                            var de = (oe[re] + T) / _;
                            if (I.add(de),
                            k !== 0 && I.size === Math.abs(k))
                                break
                        }
                    }
                }
                return Array.from(I)
            }
            ,
            L.prototype.createLookupTable = function(p, f, k) {
                if (!f || f <= 1)
                    throw Error("Invalid arguments passed to createLookupTable(). You must specify at least 2 samples.");
                var w = i({
                    from: 0,
                    to: 1,
                    cacheForceUpdate: !1
                }, k)
                  , j = w.from
                  , I = w.to
                  , _ = w.cacheKey
                  , M = w.cacheForceUpdate;
                if (!(j < 0 || I > 1 || I < j)) {
                    var T = null;
                    if (_ && !M && this._cache.has(_))
                        _ && this._cache.has(_) && (T = this._cache.get(_));
                    else {
                        T = new Map;
                        for (var z = 0; z < f; z++) {
                            var E = j === 0 && I === 1 ? z / (f - 1) : j + z / (f - 1) * (I - j)
                              , C = p(E);
                            T.set(E, C)
                        }
                        _ && this._cache.set(_, T)
                    }
                    return T
                }
            }
            ,
            L.prototype.forEach = function(p, f, k, w) {
                var j = this;
                k === void 0 && (k = 0),
                w === void 0 && (w = 1);
                var I = [];
                if (Number.isFinite(f)) {
                    var _ = f;
                    if (_ <= 1)
                        throw Error("Invalid arguments passed to forEach(). You must specify at least 2 samples.");
                    for (var M = 0; M < _; M++) {
                        var T = k === 0 && w === 1 ? M / (_ - 1) : k + M / (_ - 1) * (w - k);
                        I.push(T)
                    }
                } else
                    Array.isArray(f) && (I = f);
                var z = null;
                I.forEach(function(E, C) {
                    if (!Number.isFinite(E) || E < 0 || E > 1)
                        throw Error("Invalid position (u) for sample in forEach!");
                    var N = j.getTimeFromPosition(E)
                      , U = p({
                        u: E,
                        t: N,
                        i: C,
                        prev: z
                    });
                    z = {
                        u: E,
                        t: N,
                        i: C,
                        value: U
                    }
                })
            }
            ,
            L.prototype.map = function(p, f, k, w) {
                var j = this;
                k === void 0 && (k = 0),
                w === void 0 && (w = 1);
                var I = [];
                if (Number.isFinite(f)) {
                    var _ = f;
                    if (_ <= 1)
                        throw Error("Invalid arguments passed to map(). You must specify at least 2 samples.");
                    for (var M = 0; M < _; M++) {
                        var T = k === 0 && w === 1 ? M / (_ - 1) : k + M / (_ - 1) * (w - k);
                        I.push(T)
                    }
                } else
                    Array.isArray(f) && (I = f);
                var z = null;
                return I.map(function(E, C) {
                    if (!Number.isFinite(E) || E < 0 || E > 1)
                        throw Error("Invalid position (u) for sample in map()!");
                    var N = j.getTimeFromPosition(E)
                      , U = p({
                        u: E,
                        t: N,
                        i: C,
                        prev: z
                    });
                    return z = {
                        u: E,
                        t: N,
                        i: C,
                        value: U
                    },
                    U
                })
            }
            ,
            L.prototype.reduce = function(p, f, k, w, j) {
                var I = this;
                w === void 0 && (w = 0),
                j === void 0 && (j = 1);
                var _ = [];
                if (Number.isFinite(k)) {
                    var M = k;
                    if (M <= 1)
                        throw Error("Invalid arguments passed to map(). You must specify at least 2 samples.");
                    for (var T = 0; T < M; T++) {
                        var z = w === 0 && j === 1 ? T / (M - 1) : w + T / (M - 1) * (j - w);
                        _.push(z)
                    }
                } else
                    Array.isArray(k) && (_ = k);
                return _.reduce(function(E, C, N) {
                    if (!Number.isFinite(C) || C < 0 || C > 1)
                        throw Error("Invalid position (u) for sample in map()!");
                    var U = I.getTimeFromPosition(C);
                    return p({
                        acc: E,
                        u: C,
                        t: U,
                        i: N
                    })
                }, f)
            }
            ,
            L.prototype._invalidateCache = function() {
                return this._cache = new Map,
                this
            }
            ,
            L.prototype.reset = function() {
                this._curveMapper.reset()
            }
            ,
            Object.defineProperty(L.prototype, "points", {
                get: function() {
                    return this._curveMapper.points
                },
                set: function(p) {
                    this._curveMapper.points = p
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "tension", {
                get: function() {
                    return this._curveMapper.tension
                },
                set: function(p) {
                    this._curveMapper.tension = p
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "alpha", {
                get: function() {
                    return this._curveMapper.alpha
                },
                set: function(p) {
                    this._curveMapper.alpha = p
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "closed", {
                get: function() {
                    return this._curveMapper.closed
                },
                set: function(p) {
                    this._curveMapper.closed = p
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "length", {
                get: function() {
                    return this._curveMapper.lengthAt(1)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "minX", {
                get: function() {
                    return this.getBoundingBox().min[0]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "maxX", {
                get: function() {
                    return this.getBoundingBox().max[0]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "minY", {
                get: function() {
                    return this.getBoundingBox().min[1]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "maxY", {
                get: function() {
                    return this.getBoundingBox().max[1]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "minZ", {
                get: function() {
                    return this.getBoundingBox().min[2]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "maxZ", {
                get: function() {
                    return this.getBoundingBox().max[2]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "dim", {
                get: function() {
                    var p;
                    return ((p = this.points[0]) === null || p === void 0 ? void 0 : p.length) || void 0
                },
                enumerable: !1,
                configurable: !0
            }),
            L
        }()
          , ce = function() {
            function L(p, f, k, w) {
                p === void 0 && (p = 0),
                f === void 0 && (f = 0),
                k === void 0 && (k = null),
                w === void 0 && (w = null),
                this.x = p,
                this.y = f,
                this.z = k,
                this.w = w
            }
            return Object.defineProperty(L.prototype, 0, {
                get: function() {
                    return this.x
                },
                set: function(p) {
                    this.x = p
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, 1, {
                get: function() {
                    return this.y
                },
                set: function(p) {
                    this.y = p
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, 2, {
                get: function() {
                    return this.z
                },
                set: function(p) {
                    this.z = p
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, 3, {
                get: function() {
                    return this.w
                },
                set: function(p) {
                    this.w = p
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(L.prototype, "length", {
                get: function() {
                    return Number.isFinite(this.w) ? 4 : Number.isFinite(this.z) ? 3 : 2
                },
                enumerable: !1,
                configurable: !0
            }),
            L
        }();
        a.CurveInterpolator = ge,
        a.EPS = g,
        a.LinearCurveMapper = ie,
        a.NumericalCurveMapper = pe,
        a.Point = ce,
        a.add = function(L, p, f) {
            f = f || new Array(L.length);
            for (var k = 0; k < L.length; k++)
                f[k] = L[k] + p[k];
            return f
        }
        ,
        a.binarySearch = m,
        a.calcKnotSequence = F,
        a.calculateCoefficients = X,
        a.clamp = d,
        a.copyValues = u,
        a.cross = B,
        a.derivativeAtT = H,
        a.distance = te,
        a.dot = D,
        a.evaluateForT = G,
        a.extrapolateControlPoint = o,
        a.fill = n,
        a.findRootsOfT = Z,
        a.getControlPoints = l,
        a.getCubicRoots = x,
        a.getQuadRoots = S,
        a.getSegmentIndexAndT = s,
        a.magnitude = K,
        a.map = r,
        a.normalize = W,
        a.orthogonal = function(L, p) {
            if (L.length > 2)
                throw Error("Only supported for 2d vectors");
            var f = p ? u(L, p) : L
              , k = -f[1];
            return f[1] = f[0],
            f[0] = k,
            f
        }
        ,
        a.reduce = c,
        a.rotate2d = function(L, p, f, k) {
            p === void 0 && (p = 0),
            f === void 0 && (f = [0, 0]);
            var w = Math.cos(p)
              , j = Math.sin(p)
              , I = L[0] - f[0]
              , _ = L[1] - f[1];
            return (k = k || L)[0] = I * w - _ * j + f[0],
            k[1] = I * j + _ * w + f[1],
            k
        }
        ,
        a.rotate3d = R,
        a.secondDerivativeAtT = Q,
        a.simplify2d = function(L, p, f) {
            var k;
            if (p === void 0 && (p = .001),
            f === void 0 && (f = 10),
            L.length <= 4)
                return L;
            for (var w = L[0], j = w[0], I = w[1], _ = L.map(function(_e) {
                return [_e[0] - j, _e[1] - I]
            }), M = _[0], T = M[0], z = M[1], E = [L[0]], C = 1; C + 1 < _.length; C++) {
                var N = _[C]
                  , U = N[0]
                  , J = N[1]
                  , oe = _[C + 1]
                  , re = oe[0]
                  , de = oe[1];
                if (re - U != 0 || de - J != 0) {
                    var ae = Math.abs(T * de - z * re + re * J - de * U + z * U - T * J) / Math.sqrt(Math.pow(re - T, 2) + Math.pow(de - z, 2))
                      , ue = [T - U, z - J]
                      , Ae = Math.sqrt(Math.pow(ue[0], 2) + Math.pow(ue[1], 2));
                    (ae > p || Ae >= f) && (E.push([U + j, J + I]),
                    T = (k = [U, J])[0],
                    z = k[1])
                }
            }
            var Se = _[_.length - 1];
            return E.push([Se[0] + j, Se[1] + I]),
            E
        }
        ,
        a.sub = function(L, p, f) {
            f = f || new Array(L.length);
            for (var k = 0; k < L.length; k++)
                f[k] = L[k] - p[k];
            return f
        }
        ,
        a.sumOfSquares = q,
        a.valueAtT = Y
    })
}
);
var dl = la( (af, cl) => {
    cl.exports = class {
        constructor(e, t) {
            this.xs = e,
            this.ys = t,
            this.ks = this.getNaturalKs(new Float64Array(this.xs.length))
        }
        getNaturalKs(e) {
            let t = this.xs.length - 1
              , i = Cm(t + 1, t + 2);
            for (let o = 1; o < t; o++)
                i[o][o - 1] = 1 / (this.xs[o] - this.xs[o - 1]),
                i[o][o] = 2 * (1 / (this.xs[o] - this.xs[o - 1]) + 1 / (this.xs[o + 1] - this.xs[o])),
                i[o][o + 1] = 1 / (this.xs[o + 1] - this.xs[o]),
                i[o][t + 1] = 3 * ((this.ys[o] - this.ys[o - 1]) / ((this.xs[o] - this.xs[o - 1]) * (this.xs[o] - this.xs[o - 1])) + (this.ys[o + 1] - this.ys[o]) / ((this.xs[o + 1] - this.xs[o]) * (this.xs[o + 1] - this.xs[o])));
            return i[0][0] = 2 / (this.xs[1] - this.xs[0]),
            i[0][1] = 1 / (this.xs[1] - this.xs[0]),
            i[0][t + 1] = 3 * (this.ys[1] - this.ys[0]) / ((this.xs[1] - this.xs[0]) * (this.xs[1] - this.xs[0])),
            i[t][t - 1] = 1 / (this.xs[t] - this.xs[t - 1]),
            i[t][t] = 2 / (this.xs[t] - this.xs[t - 1]),
            i[t][t + 1] = 3 * (this.ys[t] - this.ys[t - 1]) / ((this.xs[t] - this.xs[t - 1]) * (this.xs[t] - this.xs[t - 1])),
            Sm(i, e)
        }
        getIndexBefore(e) {
            let t = 0
              , i = this.xs.length
              , o = 0;
            for (; t < i; )
                o = Math.floor((t + i) / 2),
                this.xs[o] < e && o !== t ? t = o : this.xs[o] >= e && o !== i ? i = o : i = t;
            return t + 1
        }
        at(e) {
            let t = this.getIndexBefore(e)
              , i = (e - this.xs[t - 1]) / (this.xs[t] - this.xs[t - 1])
              , o = this.ks[t - 1] * (this.xs[t] - this.xs[t - 1]) - (this.ys[t] - this.ys[t - 1])
              , l = -this.ks[t] * (this.xs[t] - this.xs[t - 1]) + (this.ys[t] - this.ys[t - 1]);
            return (1 - i) * this.ys[t - 1] + i * this.ys[t] + i * (1 - i) * (o * (1 - i) + l * i)
        }
    }
    ;
    function Sm(a, e) {
        let t = a.length
          , i = 0
          , o = 0;
        for (; i < t && o <= t; ) {
            let s = 0
              , n = -1 / 0;
            for (let r = i; r < t; r++) {
                let c = Math.abs(a[r][o]);
                c > n && (s = r,
                n = c)
            }
            if (a[s][o] === 0)
                o++;
            else {
                Am(a, i, s);
                for (let r = i + 1; r < t; r++) {
                    let c = a[r][o] / a[i][o];
                    a[r][o] = 0;
                    for (let u = o + 1; u <= t; u++)
                        a[r][u] -= a[i][u] * c
                }
                i++,
                o++
            }
        }
        for (let s = t - 1; s >= 0; s--) {
            var l = 0;
            a[s][s] && (l = a[s][t] / a[s][s]),
            e[s] = l;
            for (let n = s - 1; n >= 0; n--)
                a[n][t] -= a[n][s] * l,
                a[n][s] = 0
        }
        return e
    }
    function Cm(a, e) {
        let t = [];
        for (let i = 0; i < a; i++)
            t.push(new Float64Array(e));
        return t
    }
    function Am(a, e, t) {
        let i = a[e];
        a[e] = a[t],
        a[t] = i
    }
}
);
var yl = la( (fl, rr) => {
    (function(a, e, t) {
        function i(n) {
            var r = this
              , c = s();
            r.next = function() {
                var u = 2091639 * r.s0 + r.c * 23283064365386963e-26;
                return r.s0 = r.s1,
                r.s1 = r.s2,
                r.s2 = u - (r.c = u | 0)
            }
            ,
            r.c = 1,
            r.s0 = c(" "),
            r.s1 = c(" "),
            r.s2 = c(" "),
            r.s0 -= c(n),
            r.s0 < 0 && (r.s0 += 1),
            r.s1 -= c(n),
            r.s1 < 0 && (r.s1 += 1),
            r.s2 -= c(n),
            r.s2 < 0 && (r.s2 += 1),
            c = null
        }
        function o(n, r) {
            return r.c = n.c,
            r.s0 = n.s0,
            r.s1 = n.s1,
            r.s2 = n.s2,
            r
        }
        function l(n, r) {
            var c = new i(n)
              , u = r && r.state
              , d = c.next;
            return d.int32 = function() {
                return c.next() * 4294967296 | 0
            }
            ,
            d.double = function() {
                return d() + (d() * 2097152 | 0) * 11102230246251565e-32
            }
            ,
            d.quick = d,
            u && (typeof u == "object" && o(u, c),
            d.state = function() {
                return o(c, {})
            }
            ),
            d
        }
        function s() {
            var n = 4022871197
              , r = function(c) {
                c = String(c);
                for (var u = 0; u < c.length; u++) {
                    n += c.charCodeAt(u);
                    var d = .02519603282416938 * n;
                    n = d >>> 0,
                    d -= n,
                    d *= n,
                    n = d >>> 0,
                    d -= n,
                    n += d * 4294967296
                }
                return (n >>> 0) * 23283064365386963e-26
            };
            return r
        }
        e && e.exports ? e.exports = l : t && t.amd ? t(function() {
            return l
        }) : this.alea = l
    }
    )(fl, typeof rr == "object" && rr, typeof define == "function" && define)
}
);
var vl = la( (kl, or) => {
    (function(a, e, t) {
        function i(s) {
            var n = this
              , r = "";
            n.x = 0,
            n.y = 0,
            n.z = 0,
            n.w = 0,
            n.next = function() {
                var u = n.x ^ n.x << 11;
                return n.x = n.y,
                n.y = n.z,
                n.z = n.w,
                n.w ^= n.w >>> 19 ^ u ^ u >>> 8
            }
            ,
            s === (s | 0) ? n.x = s : r += s;
            for (var c = 0; c < r.length + 64; c++)
                n.x ^= r.charCodeAt(c) | 0,
                n.next()
        }
        function o(s, n) {
            return n.x = s.x,
            n.y = s.y,
            n.z = s.z,
            n.w = s.w,
            n
        }
        function l(s, n) {
            var r = new i(s)
              , c = n && n.state
              , u = function() {
                return (r.next() >>> 0) / 4294967296
            };
            return u.double = function() {
                do
                    var d = r.next() >>> 11
                      , m = (r.next() >>> 0) / 4294967296
                      , g = (d + m) / (1 << 21);
                while (g === 0);
                return g
            }
            ,
            u.int32 = r.next,
            u.quick = u,
            c && (typeof c == "object" && o(c, r),
            u.state = function() {
                return o(r, {})
            }
            ),
            u
        }
        e && e.exports ? e.exports = l : t && t.amd ? t(function() {
            return l
        }) : this.xor128 = l
    }
    )(kl, typeof or == "object" && or, typeof define == "function" && define)
}
);
var wl = la( (bl, sr) => {
    (function(a, e, t) {
        function i(s) {
            var n = this
              , r = "";
            n.next = function() {
                var u = n.x ^ n.x >>> 2;
                return n.x = n.y,
                n.y = n.z,
                n.z = n.w,
                n.w = n.v,
                (n.d = n.d + 362437 | 0) + (n.v = n.v ^ n.v << 4 ^ (u ^ u << 1)) | 0
            }
            ,
            n.x = 0,
            n.y = 0,
            n.z = 0,
            n.w = 0,
            n.v = 0,
            s === (s | 0) ? n.x = s : r += s;
            for (var c = 0; c < r.length + 64; c++)
                n.x ^= r.charCodeAt(c) | 0,
                c == r.length && (n.d = n.x << 10 ^ n.x >>> 4),
                n.next()
        }
        function o(s, n) {
            return n.x = s.x,
            n.y = s.y,
            n.z = s.z,
            n.w = s.w,
            n.v = s.v,
            n.d = s.d,
            n
        }
        function l(s, n) {
            var r = new i(s)
              , c = n && n.state
              , u = function() {
                return (r.next() >>> 0) / 4294967296
            };
            return u.double = function() {
                do
                    var d = r.next() >>> 11
                      , m = (r.next() >>> 0) / 4294967296
                      , g = (d + m) / (1 << 21);
                while (g === 0);
                return g
            }
            ,
            u.int32 = r.next,
            u.quick = u,
            c && (typeof c == "object" && o(c, r),
            u.state = function() {
                return o(r, {})
            }
            ),
            u
        }
        e && e.exports ? e.exports = l : t && t.amd ? t(function() {
            return l
        }) : this.xorwow = l
    }
    )(bl, typeof sr == "object" && sr, typeof define == "function" && define)
}
);
var Sl = la( (Ll, lr) => {
    (function(a, e, t) {
        function i(s) {
            var n = this;
            n.next = function() {
                var c = n.x, u = n.i, d, m, g;
                return d = c[u],
                d ^= d >>> 7,
                m = d ^ d << 24,
                d = c[u + 1 & 7],
                m ^= d ^ d >>> 10,
                d = c[u + 3 & 7],
                m ^= d ^ d >>> 3,
                d = c[u + 4 & 7],
                m ^= d ^ d << 7,
                d = c[u + 7 & 7],
                d = d ^ d << 13,
                m ^= d ^ d << 9,
                c[u] = m,
                n.i = u + 1 & 7,
                m
            }
            ;
            function r(c, u) {
                var d, m, g = [];
                if (u === (u | 0))
                    m = g[0] = u;
                else
                    for (u = "" + u,
                    d = 0; d < u.length; ++d)
                        g[d & 7] = g[d & 7] << 15 ^ u.charCodeAt(d) + g[d + 1 & 7] << 13;
                for (; g.length < 8; )
                    g.push(0);
                for (d = 0; d < 8 && g[d] === 0; ++d)
                    ;
                for (d == 8 ? m = g[7] = -1 : m = g[d],
                c.x = g,
                c.i = 0,
                d = 256; d > 0; --d)
                    c.next()
            }
            r(n, s)
        }
        function o(s, n) {
            return n.x = s.x.slice(),
            n.i = s.i,
            n
        }
        function l(s, n) {
            s == null && (s = +new Date);
            var r = new i(s)
              , c = n && n.state
              , u = function() {
                return (r.next() >>> 0) / 4294967296
            };
            return u.double = function() {
                do
                    var d = r.next() >>> 11
                      , m = (r.next() >>> 0) / 4294967296
                      , g = (d + m) / (1 << 21);
                while (g === 0);
                return g
            }
            ,
            u.int32 = r.next,
            u.quick = u,
            c && (c.x && o(c, r),
            u.state = function() {
                return o(r, {})
            }
            ),
            u
        }
        e && e.exports ? e.exports = l : t && t.amd ? t(function() {
            return l
        }) : this.xorshift7 = l
    }
    )(Ll, typeof lr == "object" && lr, typeof define == "function" && define)
}
);
var Al = la( (Cl, ur) => {
    (function(a, e, t) {
        function i(s) {
            var n = this;
            n.next = function() {
                var c = n.w, u = n.X, d = n.i, m, g;
                return n.w = c = c + 1640531527 | 0,
                g = u[d + 34 & 127],
                m = u[d = d + 1 & 127],
                g ^= g << 13,
                m ^= m << 17,
                g ^= g >>> 15,
                m ^= m >>> 12,
                g = u[d] = g ^ m,
                n.i = d,
                g + (c ^ c >>> 16) | 0
            }
            ;
            function r(c, u) {
                var d, m, g, v, S, x = [], D = 128;
                for (u === (u | 0) ? (m = u,
                u = null) : (u = u + "\0",
                m = 0,
                D = Math.max(D, u.length)),
                g = 0,
                v = -32; v < D; ++v)
                    u && (m ^= u.charCodeAt((v + 32) % u.length)),
                    v === 0 && (S = m),
                    m ^= m << 10,
                    m ^= m >>> 15,
                    m ^= m << 4,
                    m ^= m >>> 13,
                    v >= 0 && (S = S + 1640531527 | 0,
                    d = x[v & 127] ^= m + S,
                    g = d == 0 ? g + 1 : 0);
                for (g >= 128 && (x[(u && u.length || 0) & 127] = -1),
                g = 127,
                v = 4 * 128; v > 0; --v)
                    m = x[g + 34 & 127],
                    d = x[g = g + 1 & 127],
                    m ^= m << 13,
                    d ^= d << 17,
                    m ^= m >>> 15,
                    d ^= d >>> 12,
                    x[g] = m ^ d;
                c.w = S,
                c.X = x,
                c.i = g
            }
            r(n, s)
        }
        function o(s, n) {
            return n.i = s.i,
            n.w = s.w,
            n.X = s.X.slice(),
            n
        }
        function l(s, n) {
            s == null && (s = +new Date);
            var r = new i(s)
              , c = n && n.state
              , u = function() {
                return (r.next() >>> 0) / 4294967296
            };
            return u.double = function() {
                do
                    var d = r.next() >>> 11
                      , m = (r.next() >>> 0) / 4294967296
                      , g = (d + m) / (1 << 21);
                while (g === 0);
                return g
            }
            ,
            u.int32 = r.next,
            u.quick = u,
            c && (c.X && o(c, r),
            u.state = function() {
                return o(r, {})
            }
            ),
            u
        }
        e && e.exports ? e.exports = l : t && t.amd ? t(function() {
            return l
        }) : this.xor4096 = l
    }
    )(Cl, typeof ur == "object" && ur, typeof define == "function" && define)
}
);
var Tl = la( (jl, cr) => {
    (function(a, e, t) {
        function i(s) {
            var n = this
              , r = "";
            n.next = function() {
                var u = n.b
                  , d = n.c
                  , m = n.d
                  , g = n.a;
                return u = u << 25 ^ u >>> 7 ^ d,
                d = d - m | 0,
                m = m << 24 ^ m >>> 8 ^ g,
                g = g - u | 0,
                n.b = u = u << 20 ^ u >>> 12 ^ d,
                n.c = d = d - m | 0,
                n.d = m << 16 ^ d >>> 16 ^ g,
                n.a = g - u | 0
            }
            ,
            n.a = 0,
            n.b = 0,
            n.c = -1640531527,
            n.d = 1367130551,
            s === Math.floor(s) ? (n.a = s / 4294967296 | 0,
            n.b = s | 0) : r += s;
            for (var c = 0; c < r.length + 20; c++)
                n.b ^= r.charCodeAt(c) | 0,
                n.next()
        }
        function o(s, n) {
            return n.a = s.a,
            n.b = s.b,
            n.c = s.c,
            n.d = s.d,
            n
        }
        function l(s, n) {
            var r = new i(s)
              , c = n && n.state
              , u = function() {
                return (r.next() >>> 0) / 4294967296
            };
            return u.double = function() {
                do
                    var d = r.next() >>> 11
                      , m = (r.next() >>> 0) / 4294967296
                      , g = (d + m) / (1 << 21);
                while (g === 0);
                return g
            }
            ,
            u.int32 = r.next,
            u.quick = u,
            c && (typeof c == "object" && o(c, r),
            u.state = function() {
                return o(r, {})
            }
            ),
            u
        }
        e && e.exports ? e.exports = l : t && t.amd ? t(function() {
            return l
        }) : this.tychei = l
    }
    )(jl, typeof cr == "object" && cr, typeof define == "function" && define)
}
);
var Il = la( (Ml, Zi) => {
    (function(a, e, t) {
        var i = 256, o = 6, l = 52, s = "random", n = t.pow(i, o), r = t.pow(2, l), c = r * 2, u = i - 1, d;
        function m(q, K, te) {
            var W = [];
            K = K == !0 ? {
                entropy: !0
            } : K || {};
            var R = x(S(K.entropy ? [q, B(e)] : q ?? D(), 3), W)
              , F = new g(W)
              , X = function() {
                for (var Y = F.g(o), H = n, Q = 0; Y < r; )
                    Y = (Y + Q) * i,
                    H *= i,
                    Q = F.g(1);
                for (; Y >= c; )
                    Y /= 2,
                    H /= 2,
                    Q >>>= 1;
                return (Y + Q) / H
            };
            return X.int32 = function() {
                return F.g(4) | 0
            }
            ,
            X.quick = function() {
                return F.g(4) / 4294967296
            }
            ,
            X.double = X,
            x(B(F.S), e),
            (K.pass || te || function(Y, H, Q, Z) {
                return Z && (Z.S && v(Z, F),
                Y.state = function() {
                    return v(F, {})
                }
                ),
                Q ? (t[s] = Y,
                H) : Y
            }
            )(X, R, "global"in K ? K.global : this == t, K.state)
        }
        function g(q) {
            var K, te = q.length, W = this, R = 0, F = W.i = W.j = 0, X = W.S = [];
            for (te || (q = [te++]); R < i; )
                X[R] = R++;
            for (R = 0; R < i; R++)
                X[R] = X[F = u & F + q[R % te] + (K = X[R])],
                X[F] = K;
            (W.g = function(Y) {
                for (var H, Q = 0, Z = W.i, G = W.j, ee = W.S; Y--; )
                    H = ee[Z = u & Z + 1],
                    Q = Q * i + ee[u & (ee[Z] = ee[G = u & G + H]) + (ee[G] = H)];
                return W.i = Z,
                W.j = G,
                Q
            }
            )(i)
        }
        function v(q, K) {
            return K.i = q.i,
            K.j = q.j,
            K.S = q.S.slice(),
            K
        }
        function S(q, K) {
            var te = [], W = typeof q, R;
            if (K && W == "object")
                for (R in q)
                    try {
                        te.push(S(q[R], K - 1))
                    } catch {}
            return te.length ? te : W == "string" ? q : q + "\0"
        }
        function x(q, K) {
            for (var te = q + "", W, R = 0; R < te.length; )
                K[u & R] = u & (W ^= K[u & R] * 19) + te.charCodeAt(R++);
            return B(K)
        }
        function D() {
            try {
                var q;
                return d && (q = d.randomBytes) ? q = q(i) : (q = new Uint8Array(i),
                (a.crypto || a.msCrypto).getRandomValues(q)),
                B(q)
            } catch {
                var K = a.navigator
                  , te = K && K.plugins;
                return [+new Date, a, te, a.screen, B(e)]
            }
        }
        function B(q) {
            return String.fromCharCode.apply(0, q)
        }
        if (x(t.random(), e),
        typeof Zi == "object" && Zi.exports) {
            Zi.exports = m;
            try {
                d = st("crypto")
            } catch {}
        } else
            typeof define == "function" && define.amd ? define(function() {
                return m
            }) : t["seed" + s] = m
    }
    )(typeof self < "u" ? self : Ml, [], Math)
}
);
var El = la( (Ff, xl) => {
    var Qm = yl()
      , Zm = vl()
      , Xm = wl()
      , Jm = Sl()
      , eh = Al()
      , ah = Tl()
      , Xa = Il();
    Xa.alea = Qm;
    Xa.xor128 = Zm;
    Xa.xorwow = Xm;
    Xa.xorshift7 = Jm;
    Xa.xor4096 = eh;
    Xa.tychei = ah;
    xl.exports = Xa
}
);
var ac = Object.defineProperty
  , tc = (a, e, t) => e in a ? ac(a, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[e] = t
  , Ce = (a, e, t) => (tc(a, typeof e != "symbol" ? e + "" : e, t),
t)
  , ic = {
    addEventListener: (...a) => {}
    ,
    removeEventListener: (...a) => {}
    ,
    dispatchEvent: (...a) => {}
}
  , nc = {
    userAgent: ""
}
  , Mt = () => typeof document < "u" ? document : ic
  , rc = () => typeof navigator < "u" ? navigator : nc
  , oc = () => rc().userAgent.toLowerCase().includes("mac")
  , An = !1
  , sc = a => {
    !oc() || a.key !== "Meta" || (An = !0)
}
  , lc = a => {
    !An || a.key !== "Meta" || (An = !1,
    To())
}
  , vi = new Map
  , uc = a => {
    vi.set(a.key, a)
}
  , cc = a => {
    vi.delete(a.key)
}
  , To = () => {
    for (let a of vi.values()) {
        let e = new KeyboardEvent("keyup",{
            key: a.key,
            code: a.code,
            bubbles: !0,
            cancelable: !0
        });
        Mt().dispatchEvent(e)
    }
    vi.clear()
}
  , dc = a => {
    try {
        let e = () => a();
        return addEventListener("focus", e),
        () => {
            removeEventListener("focus", e)
        }
    } catch {}
}
  , mc = a => {
    try {
        let e = () => {
            To(),
            a()
        }
        ;
        return addEventListener("blur", e),
        () => removeEventListener("blur", e)
    } catch {}
}
  , hc = a => {
    try {
        let e = t => {
            uc(t),
            sc(t),
            a({
                key: t.key,
                aliases: [`@${t.code}`],
                originalEvent: t,
                composedPath: () => t.composedPath(),
                preventDefault: () => t.preventDefault()
            })
        }
        ;
        return Mt().addEventListener("keydown", e),
        () => Mt().removeEventListener("keydown", e)
    } catch {}
}
  , gc = a => {
    try {
        let e = t => {
            cc(t),
            lc(t),
            a({
                key: t.key,
                aliases: [`@${t.code}`],
                originalEvent: t,
                composedPath: () => t.composedPath(),
                preventDefault: () => t.preventDefault()
            })
        }
        ;
        return Mt().addEventListener("keyup", e),
        () => Mt().removeEventListener("keyup", e)
    } catch {}
}
  , bi = class {
    constructor(e) {
        Ce(this, "_onPressed"),
        Ce(this, "_onPressedWithRepeat"),
        Ce(this, "_onReleased"),
        Ce(this, "_isPressed"),
        Ce(this, "_identity"),
        this._isPressed = !1,
        this._identity = e,
        typeof e == "function" ? this._onPressedWithRepeat = e : (this._onPressed = e.onPressed,
        this._onPressedWithRepeat = e.onPressedWithRepeat,
        this._onReleased = e.onReleased)
    }
    get isEmpty() {
        return !this._onPressed && !this._onPressedWithRepeat && !this._onReleased
    }
    isOwnHandler(e) {
        return this._identity === e
    }
    executePressed(e) {
        var t, i;
        this._isPressed || (t = this._onPressed) == null || t.call(this, e),
        this._isPressed = !0,
        (i = this._onPressedWithRepeat) == null || i.call(this, e)
    }
    executeReleased(e) {
        var t;
        this._isPressed && ((t = this._onReleased) == null || t.call(this, e)),
        this._isPressed = !1
    }
}
  , jn = class Aa {
    constructor(e, t, i={}) {
        Ce(this, "_normalizedKeyCombo"),
        Ce(this, "_parsedKeyCombo"),
        Ce(this, "_handlerState"),
        Ce(this, "_keyComboEventMapper"),
        Ce(this, "_movingToNextSequenceAt"),
        Ce(this, "_sequenceIndex"),
        Ce(this, "_unitIndex"),
        Ce(this, "_lastActiveKeyPresses"),
        Ce(this, "_lastActiveKeyCount"),
        Ce(this, "_isPressedWithFinalUnit"),
        this._normalizedKeyCombo = Aa.normalizeKeyCombo(e),
        this._parsedKeyCombo = Aa.parseKeyCombo(e),
        this._handlerState = new bi(i),
        this._keyComboEventMapper = t,
        this._movingToNextSequenceAt = 0,
        this._sequenceIndex = 0,
        this._unitIndex = 0,
        this._lastActiveKeyPresses = [],
        this._lastActiveKeyCount = 0,
        this._isPressedWithFinalUnit = null
    }
    static parseKeyCombo(e) {
        if (Aa._parseCache[e])
            return Aa._parseCache[e];
        let t = e.toLowerCase()
          , i = ""
          , o = []
          , l = [o]
          , s = [l]
          , n = [s]
          , r = !1;
        for (let u = 0; u < e.length; u += 1)
            if (t[u] === "\\")
                r = !0;
            else if ((t[u] === "+" || t[u] === ">" || t[u] === ",") && !r) {
                if (i)
                    throw new Error("cannot have two operators in a row");
                i = t[u]
            } else
                t[u].match(/[^\s]/) && (i && (i === "," ? (o = [],
                l = [o],
                s = [l],
                n.push(s)) : i === ">" ? (o = [],
                l = [o],
                s.push(l)) : i === "+" && (o = [],
                l.push(o)),
                i = ""),
                r = !1,
                o.push(t[u]));
        let c = n.map(u => u.map(d => d.map(m => m.join(""))));
        return Aa._parseCache[e] = c,
        c
    }
    static stringifyKeyCombo(e) {
        return e.map(t => t.map(i => i.map(o => o === "+" ? "\\+" : o === ">" ? "\\>" : o === "," ? "\\," : o).join("+")).join(">")).join(",")
    }
    static normalizeKeyCombo(e) {
        if (Aa._normalizationCache[e])
            return Aa._normalizationCache[e];
        let t = this.stringifyKeyCombo(this.parseKeyCombo(e));
        return Aa._normalizationCache[e] = t,
        t
    }
    get isPressed() {
        return !!this._isPressedWithFinalUnit
    }
    get sequenceIndex() {
        return this.isPressed ? this._parsedKeyCombo.length : this._sequenceIndex
    }
    isOwnHandler(e) {
        return this._handlerState.isOwnHandler(e)
    }
    executePressed(e) {
        var t, i;
        !((t = this._isPressedWithFinalUnit) != null && t.has(e.key)) && !((i = e.aliases) != null && i.some(o => {
            var l;
            return (l = this._isPressedWithFinalUnit) == null ? void 0 : l.has(o)
        }
        )) || this._handlerState.executePressed(this._wrapEvent(this._lastActiveKeyPresses, {
            key: e.key,
            aliases: new Set(e.aliases),
            event: e
        }))
    }
    executeReleased(e) {
        var t, i;
        !((t = this._isPressedWithFinalUnit) != null && t.has(e.key)) && !((i = e.aliases) != null && i.some(o => {
            var l;
            return (l = this._isPressedWithFinalUnit) == null ? void 0 : l.has(o)
        }
        )) || (this._handlerState.executeReleased(this._wrapEvent(this._lastActiveKeyPresses, {
            key: e.key,
            aliases: new Set(e.aliases),
            event: e
        })),
        this._isPressedWithFinalUnit = null)
    }
    updateState(e, t) {
        let i = e.length
          , o = i < this._lastActiveKeyCount;
        this._lastActiveKeyCount = i;
        let l = this._parsedKeyCombo[this._sequenceIndex]
          , s = l.slice(0, this._unitIndex)
          , n = l.slice(this._unitIndex)
          , r = () => {
            this._movingToNextSequenceAt = 0,
            this._sequenceIndex = 0,
            this._unitIndex = 0,
            this._lastActiveKeyPresses.length = 0,
            this._handlerState.isEmpty && (this._isPressedWithFinalUnit = null)
        }
          , c = 0;
        if (o) {
            if (this._movingToNextSequenceAt === 0)
                return r();
            if (this._movingToNextSequenceAt + t < Date.now() || i !== 0)
                return;
            this._movingToNextSequenceAt = 0,
            this._sequenceIndex += 1,
            this._unitIndex = 0;
            return
        }
        for (let u of s) {
            for (let d of u) {
                let m = !1;
                for (let g = c; g < e.length && g < c + u.length; g += 1)
                    if (e[g].key === d || e[g].aliases.has(d)) {
                        m = !0;
                        break
                    }
                if (!m)
                    return r()
            }
            c += u.length
        }
        if (this._movingToNextSequenceAt === 0) {
            for (let u of n) {
                for (let d of u) {
                    let m = !1;
                    for (let g = c; g < e.length && g < c + u.length; g += 1)
                        if (e[g].key === d || e[g].aliases.has(d)) {
                            m = !0;
                            break
                        }
                    if (!m)
                        return
                }
                this._unitIndex += 1,
                c += u.length
            }
            if (c < i - 1)
                return r();
            if (this._lastActiveKeyPresses[this._sequenceIndex] = e.slice(0),
            this._sequenceIndex < this._parsedKeyCombo.length - 1) {
                this._movingToNextSequenceAt = Date.now();
                return
            }
            this._isPressedWithFinalUnit = new Set(l[l.length - 1])
        }
    }
    _wrapEvent(e, t) {
        return {
            ...this._keyComboEventMapper(e, t),
            keyCombo: this._normalizedKeyCombo,
            keyEvents: e.flat().map(i => i.event),
            finalKeyEvent: t.event
        }
    }
}
;
Ce(jn, "_parseCache", {}),
Ce(jn, "_normalizationCache", {});
var Na = jn, pc = 1e3, Tn = class {
    constructor(e={}) {
        Ce(this, "sequenceTimeout"),
        Ce(this, "_isActive"),
        Ce(this, "_unbinder"),
        Ce(this, "_onActiveBinder"),
        Ce(this, "_onInactiveBinder"),
        Ce(this, "_onKeyPressedBinder"),
        Ce(this, "_onKeyReleasedBinder"),
        Ce(this, "_keyComboEventMapper"),
        Ce(this, "_selfReleasingKeys"),
        Ce(this, "_keyRemap"),
        Ce(this, "_handlerStates"),
        Ce(this, "_keyComboStates"),
        Ce(this, "_keyComboStatesArray"),
        Ce(this, "_activeKeyPresses"),
        Ce(this, "_activeKeyMap"),
        Ce(this, "_watchedKeyComboStates"),
        this.sequenceTimeout = pc,
        this._isActive = !0,
        this._onActiveBinder = () => {}
        ,
        this._onInactiveBinder = () => {}
        ,
        this._onKeyPressedBinder = () => {}
        ,
        this._onKeyReleasedBinder = () => {}
        ,
        this._keyComboEventMapper = () => ({}),
        this._selfReleasingKeys = [],
        this._keyRemap = {},
        this._handlerStates = {},
        this._keyComboStates = {},
        this._keyComboStatesArray = [],
        this._activeKeyPresses = [],
        this._activeKeyMap = new Map,
        this._watchedKeyComboStates = {},
        this.bindEnvironment(e)
    }
    get pressedKeys() {
        return this._activeKeyPresses.map(e => e.key)
    }
    bindKey(e, t) {
        var i;
        if (typeof e == "object") {
            for (let l of e)
                this.bindKey(l, t);
            return
        }
        e = e.toLowerCase();
        let o = new bi(t);
        (i = this._handlerStates)[e] ?? (i[e] = []),
        this._handlerStates[e].push(o)
    }
    unbindKey(e, t) {
        if (typeof e == "object") {
            for (let o of e)
                this.unbindKey(o, t);
            return
        }
        e = e.toLowerCase();
        let i = this._handlerStates[e];
        if (i)
            if (t)
                for (let o = 0; o < i.length; o += 1)
                    i[o].isOwnHandler(t) && (i.splice(o, 1),
                    o -= 1);
            else
                i.length = 0
    }
    bindKeyCombo(e, t) {
        var i;
        if (typeof e == "object") {
            for (let l of e)
                this.bindKeyCombo(l, t);
            return
        }
        e = Na.normalizeKeyCombo(e);
        let o = new Na(e,this._keyComboEventMapper,t);
        (i = this._keyComboStates)[e] ?? (i[e] = []),
        this._keyComboStates[e].push(o),
        this._keyComboStatesArray.push(o)
    }
    unbindKeyCombo(e, t) {
        if (typeof e == "object") {
            for (let o of e)
                this.unbindKeyCombo(o, t);
            return
        }
        e = Na.normalizeKeyCombo(e);
        let i = this._keyComboStates[e];
        if (i)
            if (t) {
                for (let o = 0; o < i.length; o += 1)
                    if (i[o].isOwnHandler(t)) {
                        for (let l = 0; l < this._keyComboStatesArray.length; l += 1)
                            this._keyComboStatesArray[l] === i[o] && (this._keyComboStatesArray.splice(l, 1),
                            l -= 1);
                        i.splice(o, 1),
                        o -= 1
                    }
            } else
                i.length = 0
    }
    checkKey(e) {
        return e = e.toLowerCase(),
        this._activeKeyPresses.some(t => t.key === e || t.aliases.has(e))
    }
    checkKeyCombo(e) {
        return this._ensureCachedKeyComboState(e).isPressed
    }
    checkKeyComboSequenceIndex(e) {
        return this._ensureCachedKeyComboState(e).sequenceIndex
    }
    bindEnvironment(e={}) {
        this.unbindEnvironment(),
        this._onActiveBinder = e.onActive ?? dc,
        this._onInactiveBinder = e.onInactive ?? mc,
        this._onKeyPressedBinder = e.onKeyPressed ?? hc,
        this._onKeyReleasedBinder = e.onKeyReleased ?? gc,
        this._keyComboEventMapper = e.mapKeyComboEvent ?? ( () => ({})),
        this._selfReleasingKeys = e.selfReleasingKeys ?? [],
        this._keyRemap = e.keyRemap ?? {};
        let t = this._onActiveBinder( () => {
            this._isActive = !0
        }
        )
          , i = this._onInactiveBinder( () => {
            this._isActive = !1
        }
        )
          , o = this._onKeyPressedBinder(s => {
            this._handleKeyPress(s)
        }
        )
          , l = this._onKeyReleasedBinder(s => {
            this._handleKeyRelease(s)
        }
        );
        this._unbinder = () => {
            t?.(),
            i?.(),
            o?.(),
            l?.()
        }
    }
    unbindEnvironment() {
        var e;
        (e = this._unbinder) == null || e.call(this)
    }
    _ensureCachedKeyComboState(e) {
        e = Na.normalizeKeyCombo(e),
        this._watchedKeyComboStates[e] || (this._watchedKeyComboStates[e] = new Na(e,this._keyComboEventMapper));
        let t = this._watchedKeyComboStates[e];
        return t.updateState(this._activeKeyPresses, this.sequenceTimeout),
        t
    }
    _handleKeyPress(e) {
        var t;
        if (!this._isActive)
            return;
        e = {
            ...e,
            key: e.key.toLowerCase(),
            aliases: ((t = e.aliases) == null ? void 0 : t.map(s => s.toLowerCase())) ?? []
        };
        let i = this._keyRemap[e.key];
        i && (e.key = i);
        for (let s = 0; s < e.aliases.length; s += 1) {
            let n = this._keyRemap[e.aliases[s]];
            n && (e.aliases[s] = n)
        }
        let o = this._handlerStates[e.key];
        if (o)
            for (let s of o)
                s.executePressed(e);
        for (let s = 0; s < e.aliases.length; s += 1) {
            let n = this._handlerStates[e.aliases[s]];
            if (n)
                for (let r of n)
                    r.executePressed(e)
        }
        let l = this._activeKeyMap.get(e.key);
        if (l)
            l.event = e;
        else {
            let s = {
                key: e.key,
                aliases: new Set(e.aliases),
                event: e
            };
            this._activeKeyMap.set(e.key, s),
            this._activeKeyPresses.push(s)
        }
        this._updateKeyComboStates();
        for (let s of this._keyComboStatesArray)
            s.executePressed(e)
    }
    _handleKeyRelease(e) {
        var t;
        e = {
            ...e,
            key: e.key.toLowerCase(),
            aliases: ((t = e.aliases) == null ? void 0 : t.map(l => l.toLowerCase())) ?? []
        };
        let i = this._keyRemap[e.key];
        if (i && (e.key = i),
        e.aliases)
            for (let l = 0; l < e.aliases.length; l += 1) {
                let s = this._keyRemap[e.aliases[l]];
                s && (e.aliases[l] = s)
            }
        let o = this._handlerStates[e.key];
        if (o)
            for (let l of o)
                l.executeReleased(e);
        for (let l = 0; l < e.aliases.length; l += 1) {
            let s = this._handlerStates[e.aliases[l]];
            if (s)
                for (let n of s)
                    n.executeReleased(e)
        }
        if (this._activeKeyMap.has(e.key)) {
            this._activeKeyMap.delete(e.key);
            for (let l = 0; l < this._activeKeyPresses.length; l += 1)
                if (this._activeKeyPresses[l].key === e.key) {
                    this._activeKeyPresses.splice(l, 1),
                    l -= 1;
                    break
                }
        }
        this._tryReleaseSelfReleasingKeys(),
        this._updateKeyComboStates();
        for (let l of this._keyComboStatesArray)
            l.executeReleased(e)
    }
    _updateKeyComboStates() {
        for (let e of this._keyComboStatesArray)
            e.updateState(this._activeKeyPresses, this.sequenceTimeout)
    }
    _tryReleaseSelfReleasingKeys() {
        for (let e of this._activeKeyPresses)
            for (let t of this._selfReleasingKeys)
                e.key === t && this._handleKeyRelease(e.event)
    }
}
, fc, Mn, yc = a => {
    Mn = a ?? new Tn(fc)
}
, It = () => (Mn || yc(),
Mn);
var Mo = (...a) => It().bindKey(...a)
  , Io = (...a) => It().unbindKey(...a)
  , wi = (...a) => It().bindKeyCombo(...a)
  , Li = (...a) => It().unbindKeyCombo(...a)
  , xo = (...a) => It().checkKey(...a);
var Gh = Na.normalizeKeyCombo
  , Uh = Na.stringifyKeyCombo
  , qh = Na.parseKeyCombo;
var Eo = new Set;
function Si() {
    for (; ; ) {
        let a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            let t = Math.random() * 16 | 0;
            return (e == "x" ? t : t & 3 | 8).toString(16)
        });
        if (Eo.has(a) === !1)
            return Eo.add(a),
            a
    }
}
var Ci = class {
    Items;
    DestroyedState;
    constructor() {
        this.Items = new Map,
        this.DestroyedState = !1
    }
    Push(e) {
        let t = Si();
        return this.Items.set(t, e),
        t
    }
    Get(e) {
        return this.Items.get(e)
    }
    Remove(e) {
        let t = this.Items.get(e);
        if (t !== void 0)
            return this.Items.delete(e),
            t
    }
    GetIterator() {
        return this.Items.entries()
    }
    IsDestroyed() {
        return this.DestroyedState
    }
    Destroy() {
        this.DestroyedState || (this.DestroyedState = !0)
    }
}
;
var Ai = class {
    ConnectionReferences;
    Location;
    Disconnected;
    constructor(e, t) {
        this.ConnectionReferences = e,
        this.Disconnected = !1,
        this.Location = e.Push({
            Callback: t,
            Connection: this
        })
    }
    Disconnect() {
        this.Disconnected || (this.Disconnected = !0,
        this.ConnectionReferences.Remove(this.Location))
    }
    IsDisconnected() {
        return this.Disconnected
    }
}
  , In = class {
    Signal;
    constructor(e) {
        this.Signal = e
    }
    Connect(e) {
        return this.Signal.Connect(e)
    }
    IsDestroyed() {
        return this.Signal.IsDestroyed()
    }
}
  , Le = class {
    ConnectionReferences;
    DestroyedState;
    constructor() {
        this.ConnectionReferences = new Ci,
        this.DestroyedState = !1
    }
    Connect(e) {
        if (this.DestroyedState)
            throw "Cannot connect to a Destroyed Signal";
        return new Ai(this.ConnectionReferences,e)
    }
    Fire(...e) {
        if (this.DestroyedState)
            throw "Cannot fire a Destroyed Signal";
        for (let[t,i] of this.ConnectionReferences.GetIterator())
            i.Callback(...e)
    }
    GetEvent() {
        return new In(this)
    }
    IsDestroyed() {
        return this.DestroyedState
    }
    Destroy() {
        if (!this.DestroyedState) {
            for (let[e,t] of this.ConnectionReferences.GetIterator())
                t.Connection.Disconnect();
            this.DestroyedState = !0
        }
    }
}
  , Do = a => a instanceof Ai;
var zo = a => {
    if (!a[2])
        switch (a[2] = !0,
        a[0]) {
        case 0:
            globalThis.clearTimeout(a[1]);
            break;
        case 1:
            globalThis.clearInterval(a[1]);
            break;
        case 2:
            globalThis.cancelAnimationFrame(a[1]);
            break
        }
}
  , Fe = (a, e) => [0, setTimeout(e, a * 1e3)];
var Ha = a => [2, requestAnimationFrame(a)]
  , Be = a => {
    let e = [2, 0];
    return e[1] = requestAnimationFrame( () => {
        e[0] = 0,
        e[1] = setTimeout(a, 0)
    }
    ),
    e
}
  , No = a => Array.isArray(a) && (a.length === 2 || a.length === 3) && typeof a[0] == "number" && typeof a[1] == "number" && (a[2] === void 0 || a[2] === !0);
var kc = a => "Destroy"in a
  , ke = class {
    Items;
    DestroyedState;
    DestroyingSignal;
    CleanedSignal;
    DestroyedSignal;
    Destroying;
    Cleaned;
    Destroyed;
    constructor() {
        this.Items = new Map,
        this.DestroyedState = !1,
        this.DestroyingSignal = new Le,
        this.CleanedSignal = new Le,
        this.DestroyedSignal = new Le,
        this.Destroying = this.DestroyingSignal.GetEvent(),
        this.Cleaned = this.CleanedSignal.GetEvent(),
        this.Destroyed = this.DestroyedSignal.GetEvent()
    }
    CleanItem(e) {
        kc(e) ? e.Destroy() : No(e) ? zo(e) : e instanceof MutationObserver || e instanceof ResizeObserver ? e.disconnect() : Do(e) ? e.Disconnect() : e instanceof Element ? e.remove() : typeof e == "function" ? e() : console.warn("UNSUPPORTED MAID ITEM", typeof e, e)
    }
    Give(e, t) {
        if (this.DestroyedState)
            return this.CleanItem(e),
            e;
        let i = t ?? Si();
        return this.Has(i) && this.Clean(i),
        this.Items.set(i, e),
        e
    }
    GiveItems(...e) {
        for (let t of e)
            this.Give(t);
        return e
    }
    Get(e) {
        return this.DestroyedState ? void 0 : this.Items.get(e)
    }
    Has(e) {
        return this.DestroyedState ? !1 : this.Items.has(e)
    }
    Clean(e) {
        if (this.DestroyedState)
            return;
        let t = this.Items.get(e);
        t !== void 0 && (this.Items.delete(e),
        this.CleanItem(t))
    }
    CleanUp() {
        if (!this.DestroyedState) {
            for (let[e,t] of this.Items)
                this.Clean(e);
            this.DestroyedState === !1 && this.CleanedSignal.Fire()
        }
    }
    IsDestroyed() {
        return this.DestroyedState
    }
    Destroy() {
        this.DestroyedState === !1 && (this.DestroyingSignal.Fire(),
        this.CleanUp(),
        this.DestroyedState = !0,
        this.DestroyedSignal.Fire(),
        this.DestroyingSignal.Destroy(),
        this.CleanedSignal.Destroy(),
        this.DestroyedSignal.Destroy())
    }
}
;
var Ze = new ke, En = import.meta.url.includes("localhost"), ye = globalThis.Spicetify, we, ze, Me, Et, xn, Dt, Ta, ra, Po, vc = new Promise(a => Po = a), ct = vc;
{
    let a = () => {
        if (we = ye.Player,
        ze = ye.Platform,
        Me = ze?.History,
        Et = ye.Playbar,
        xn = ye.Snackbar,
        Dt = ye.CosmosAsync,
        Ta = ye.URI,
        we === void 0 || ze === void 0 || Me === void 0 || Et === void 0 || xn === void 0 || Dt === void 0 || Ta === void 0) {
            Ze.Give(Be(a));
            return
        }
        if (ra === void 0) {
            if (ra = ze.RequestBuilder,
            ra === void 0) {
                let e = [ye]
                  , t = new Set;
                for (; e.length > 0; ) {
                    let i = e.pop();
                    for (let o of [...Object.getOwnPropertyNames(i), ...Object.getOwnPropertyNames(Object.getPrototypeOf(i) || [])])
                        try {
                            let l = i[o];
                            if (t.has(l))
                                continue;
                            if (l == null)
                                continue;
                            if (typeof l == "object") {
                                let s = Object.getPrototypeOf(l);
                                if (typeof s.resetPendingRequests == "function" && typeof s.build == "function" && typeof l.pendingRequests == "object") {
                                    ra = l;
                                    break
                                }
                                e.push(l)
                            }
                            t.add(l)
                        } catch {}
                    if (ra !== void 0)
                        break
                }
            }
            if (ra === void 0) {
                console.warn("Failed to find SpotifyRequestBuilder"),
                Ze.Give(Be(a));
                return
            }
        }
        Ze.Give(Be(Po))
    }
    ;
    a()
}
var ut, ja, xt = () => {
    if (ut !== void 0) {
        let a = (ut.expiresAtTime - Date.now()) / 1e3;
        if (a <= 2)
            return ut = void 0,
            ja = new Promise(e => Ze.Give(Fe(a, e))).then( () => (ja = void 0,
            xt())),
            ja
    }
    return ja !== void 0 || (ja = Dt.get("sp://oauth/v2/token").then(a => (ut = a,
    ja = Promise.resolve(a.accessToken),
    xt())).catch(a => (a.message.includes("Resolver not found") && (ze.Session === void 0 ? console.warn("Failed to find SpotifyPlatform.Session for fetching token") : (ut = {
        accessToken: ze.Session.accessToken,
        expiresAtTime: ze.Session.accessTokenExpirationTimestampMs,
        tokenType: "Bearer"
    },
    ja = Promise.resolve(ut.accessToken))),
    xt()))),
    ja
}
;
var zt = (a, e, t) => {
    xn.enqueueSnackbar(ye.React.createElement("div", {
        dangerouslySetInnerHTML: {
            __html: a.trim()
        }
    }), {
        variant: e,
        autoHideDuration: t * 1e3
    })
}
;
var Oo = new Set
  , ji = (a, e, t, i) => {
    if (Oo.has(a))
        throw new Error(`Can't retrieve InstantStore (${a}) twice.`);
    Oo.add(a);
    let o;
    {
        if (En === !1 || i === void 0) {
            let l = localStorage.getItem(a);
            if (l !== null) {
                let s = JSON.parse(l);
                s.Version === e && (o = s)
            }
        }
        if (o === void 0)
            o = {
                Version: e,
                Items: JSON.parse(JSON.stringify(t))
            };
        else {
            let l = [[o, t, a]];
            for (; l.length > 0; ) {
                let[s,n,r] = l.pop();
                for (let c in n) {
                    let u = s[c]
                      , d = n[c];
                    if (u === void 0)
                        s[c] = JSON.parse(JSON.stringify(d));
                    else {
                        let m = typeof u;
                        if (m !== typeof d)
                            throw new Error(`Template Type mismatch for "${`${r}.${c}`}"`);
                        m === "object" && l.push([u, d, `${r}.${c}`])
                    }
                }
            }
        }
    }
    return Object.freeze({
        Items: o.Items,
        SaveChanges: () => localStorage.setItem(a, JSON.stringify(o))
    })
}
;
var bc = (a, e) => caches.open(a).then(t => t.match(`/${e}`)).then(t => t?.json())
  , wc = (a, e, t) => caches.open(a).then(i => i.put(`/${e}`, new Response(JSON.stringify(t),{
    headers: {
        "Content-Type": "application/json"
    }
}))).catch(i => {
    console.warn(`Failed to Update Cache API (${a}/${e})`),
    console.error(i)
}
)
  , Lc = new Set
  , Ti = (a, e, t, i) => {
    if (Lc.has(a))
        throw new Error(`Can't retrieve ExpireStore (${a}) twice.`);
    return Object.freeze({
        GetItem: o => En && i ? Promise.resolve(void 0) : bc(a, o).then(l => {
            if (l !== void 0 && l.CacheVersion === e && !(l.ExpiresAt < Date.now()))
                return l.Content
        }
        ),
        SetItem: (o, l) => {
            let s = new Date;
            s.setHours(0, 0, 0, 0),
            t.Unit == "Weeks" ? s.setDate(s.getDate() + t.Duration * 7) : (s.setMonth(s.getMonth() + t.Duration),
            s.setDate(0));
            let r = {
                ExpiresAt: s.getTime(),
                CacheVersion: e,
                Content: l
            };
            return wc(a, o, r).then( () => l)
        }
    })
}
;
var og = Fo(2)
  , _o = Fo(3);
function Fo(a) {
    if (typeof a != "number" || Number.isNaN(a) || a < 1 || a === Number.POSITIVE_INFINITY)
        throw new Error("`" + a + "` is not a valid argument for `n-gram`");
    return e;
    function e(t) {
        let i = [];
        if (t == null)
            return i;
        let o = typeof t.slice == "function" ? t : String(t)
          , l = o.length - a + 1;
        if (l < 1)
            return i;
        for (; l--; )
            i[l] = o.slice(l, l + a);
        return i
    }
}
var Sc = /\s+/g
  , Cc = /[\t\n\v\f\r ]+/g;
function Bo(a, e) {
    e ? typeof e == "string" && (e = {
        style: e
    }) : e = {};
    let t = e.preserveLineEndings ? Ac : jc;
    return String(a).replace(e.style === "html" ? Cc : Sc, e.trim ? Tc(t) : t)
}
function Ac(a) {
    let e = /\r?\n|\r/.exec(a);
    return e ? e[0] : " "
}
function jc() {
    return " "
}
function Tc(a) {
    return e;
    function e(t, i, o) {
        return i === 0 || i + t.length === o.length ? "" : a(t)
    }
}
var Ro = {}.hasOwnProperty;
function Mc(a) {
    return a == null ? "" : Bo(String(a).replace(/[\u0021-\u0040]+/g, " ")).trim().toLowerCase()
}
function Ic(a) {
    return _o(" " + Mc(a) + " ")
}
function xc(a) {
    let e = Ic(a)
      , t = {}
      , i = -1;
    for (; ++i < e.length; )
        Ro.call(t, e[i]) ? t[e[i]]++ : t[e[i]] = 1;
    return t
}
function Go(a) {
    let e = xc(a), t = [], i;
    for (i in e)
        Ro.call(e, i) && t.push([i, e[i]]);
    return t.sort(Ec),
    t
}
function Ec(a, e) {
    return a[1] - e[1]
}
var Uo = {
    cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,
    Latin: /[A-Za-z\u00AA\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]/g,
    Cyrillic: /[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]|\uD838[\uDC30-\uDC6D\uDC8F]/g,
    Arabic: /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E\uDEFD-\uDEFF]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,
    ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g,
    Devanagari: /[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]|\uD806[\uDF00-\uDF09]/g,
    jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[\u3400-\u4DB5\u4E00-\u9FAF]/g,
    jav: /[\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF]/g,
    kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,
    tel: /[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g,
    tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g,
    guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g,
    kan: /[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3]/g,
    mal: /[\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g,
    Myanmar: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,
    pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g,
    Ethiopic: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]/g,
    tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g,
    sin: /[\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,
    ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g,
    khm: /[\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF]/g,
    hye: /[\u0531-\u0556\u0559-\u058A\u058D-\u058F\uFB13-\uFB17]/g,
    sat: /[\u1C50-\u1C7F]/g,
    bod: /[\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA]/g,
    Hebrew: /[\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F]/g,
    kat: /[\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u1C90-\u1CBA\u1CBD-\u1CBF\u2D00-\u2D25\u2D27\u2D2D]/g,
    lao: /[\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF]/g,
    zgh: /[\u2D30-\u2D67\u2D6F\u2D70\u2D7F]/g,
    iii: /[\uA000-\uA48C\uA490-\uA4C6]/g,
    aii: /[\u0700-\u070D\u070F-\u074A\u074D-\u074F\u0860-\u086A]/g
};
var Mi = {
    Latin: {
        spa: " de|de |os | la| a |la | y |\xF3n |i\xF3n|es |ere|rec|ien|o a|der|ci\xF3|cho|ech|en |a p|ent|a l|aci|el |na |ona|e d| co|as |da | to|al |ene| en|tod| pe|e l| el|ho |nte| su|per|a t|ad | ti|ers|tie| se|rso|son|e s| pr|o d|oda|te |cia|n d| es|dad|ida| in|ne |est|ion|cio|s d|con|a e| po|men| li|n e|nci|res|su |to |tra| re| lo|tad| na|los|a s| o |ia |que| pa|r\xE1 |pro| un|s y|ual|s e|lib|nac|do |ra |er |a d|ue | qu|e e|sta|nal|ar |nes|ica|a c|ser|or |ter|se |por|cci|io |del|l d|des|ado|les|one|a a|ndi| so| cu|s p|ale|s n|ame|par|ici|oci|una|ber|s t|rta|com| di|dos|e a|imi|o s|e c|ert|las|o p|ant|dic|nto| al|ara|ibe|enc|o e|s l|cas| as|e p|ten|ali|o t|soc|y l|n c|nta|so |tos|y a|ria|n t|die|a u| fu|no |l p|ial|qui|dis|s o|hos|gua|igu| ig| ca|sar|l t| ma|l e|pre| ac|tiv|s a|re |nad|vid|era| tr|ier|cua|n p|ta |cla|ade|bre|s s|esa|ntr|ecc|a i| le|lid|das|d d|ido|ari|ind|ada|nda|fun|mie|ca |tic|eli|y d|nid|e i|odo|ios|o y|esp|iva|y e|mat|bli|r a|dr\xE1|tri|cti|tal|rim|ont|er\xE1|us |sus|end|pen|tor|ito|ond|ori|uie|lig|n a|ist|rac|lar|rse|tar|mo |omo|ibr|n l|edi|med| me|nio|a y|eda|isf|lo |aso|l m|ias|ico|lic|ple|ste|act|tec|ote|rot|ele|ura| ni|ie |adi|u p|seg|s i|un |und|a n|lqu|alq|o i|inc|sti| si|n s|ern",
        eng: "the| th| an|he |nd |ion|and| to|to |tio| of|on |of | in|al |ati|or |ght|igh|rig| ri|ne |ent|one|ll |is |as |ver|ed | be|e r|in |t t|all|eve|ht | or|ery|s t|ty | ev|e h|yon| ha|ryo|e a|be |his| fr|ng |d t|has| sh|ing| hi|sha| pr| co| re|hal|nal|y a|s a|n t|ce |men|ree|fre|e s|l b|nat|for|ts |nt |n a|ity|ry |her|nce|ect|d i| pe|pro|n o|cti| fo|e e|ly |es | no|ona|ny |any|er |re |f t|e o| de|s o| wi|ter|nte|e i|ons| en| ar|res|ers|y t|per|d f| a | on|ith|l a|e t|oci|soc|lit| as| se|dom|edo|eed|nti|s e|t o|oth|wit| di|equ|t a|ted|st |y o|int|e p| ma| so| na|l o|e c|ch |d a|enc|th |are|ns |ic | un| fu|tat|ial|cia| ac|hts|nit|qua| eq| al|om |e w|d o|f h|ali|ote|n e| wh|r t|sta|ge |thi|o a|tit|ual|an |te |ess| ch|le |ary|e f|by | by|y i|tec|uni|o t|o o| li|no | la|s r| su|inc|led|rot|con| pu| he|ere|imi|r a|ntr| st| ot|eli|age|dis|s d|tle|itl|hou|son|duc|edu| wo|ate|ble|ces|at | at| fa|com|ive|o s|eme|o e|aw |law|tra|und|pen|nde|unt|oun|n s|s f|f a|tho|ms | is|act|cie|cat|uca| ed|anc|wor|ral|t i| me|o f|ily|pri|ren|ose|s c|en |d n|l c|ful|rar|nta|nst| ag|l p|min|din|sec|y e| tr|rso|ich|hic|whi|cou|ern|uri|r o|tic|iti|igi|lig|rat|rth|t f|oms|rit|d r|ee |e b|era|rou|se |ay |rs | ho|abl|e u",
        por: "de | de| se|\xE3o |os |to |em | e |do |o d| di|er |ito|eit|ser|ent|\xE7\xE3o| a |dir|ire|rei|o s|ade|dad|uma|as |no |e d| to|nte| co|o t|tod| ou|men|que|s e|man| pr| in| qu|es | te|hum|odo|e a|da | hu|ano|te |al |tem|o e|s d|ida|m d| pe| re|o a|ou |r h|e s|cia|a e| li|o p| es|res| do| da| \xE0 |ual| em| su|a\xE7\xE3|dos|a p|tra|est|ia |con|pro|ar |e p|is | na|r\xE1 |qua|a d| pa|com|ais|o c|ame|er\xE1| po|uer|sta|ber|ter| o |ess|ra |e e|das|o \xE0|nto|nal|o o|a c|ido|rda|erd| as|nci|sua|ona|des|ibe|lib|e t|ado|s n|ua |s t|ue | so|ica|ma |lqu|alq|tos|m s|a l|per|ada|oci|soc|cio|a n|par|aci|s a|pre|ont|m o|ura|a s| um|ion|e o|or |e r|pel|nta|ntr|a i|io |nac|\xEAnc|str|ali|ria|nst| tr|a q|int|o n|a o|ca |ela|u\xE7\xE3|lid|e l| at|sen|ese|r d|s p|egu|seg|vid|pri|sso|\xE9m |ime|tic|dis|ra\xE7|eci|ara| ca|nid|tru|\xF5es|ass|seu|por|a a|m p| ex|so |r i|e\xE7\xE3|te\xE7|ote|rot| le| ma|ing|a t|ran|era|rio|l d|eli|\xE7a |sti| ne|cid|ern|utr|out|r e|e c|tad|gua|igu| ig| os|s o|ru\xE7|ins|\xE7\xF5e|ios| fa|e n|sse| no|re |art|r p|rar|u p|inc|lei|cas|ico|u\xE9m|gu\xE9|ngu|nin| ni|gur|la |pen|n\xE7a|na |i\xE7\xE3|i\xE3o|cie|ist|sem|ta |ele|e f|om |tro| ao|rel|m a|s s|tar|eda|ied|uni|e m|s i|a f|ias| cu| ac|r a|\xE1 a|rem|ei |omo|rec|for|s f|esc|ant|\xE0 s| vi|o q|ver|a u|nda|und|fun",
        ind: "an |ang|ng | da|ak | pe|ata| se| ke| me|dan| di| be|ber|kan|ran|hak|per|yan| ya|nga|nya|gan| at|ara| ha|eng|asa|ora|men|n p|n k|erh|rha|n d|ya |ap |at |as |tan|n b|ala|a d| or|a s|san|tas|eti|uk |pen|g b|set|ntu|n y|tia|iap|k m|eba|aan| un|n s|tuk|k a|p o|am |lam| ma|unt| de|ter|bas|beb|dak|end|i d|pun|mem|tau|dal|ama|keb|aka|ika|n m| ba|di |ma | sa|den|au |nda|n h|eri| ti|ela|k d|un |n a|ebe|ana|ah |ra |ida|uka| te|al |ada|ri |ole|tid|ngg|lak|leh|dap|a p|dil|g d|ena|eh |gar|na |ert|apa|um |tu |atu|a m|sam|ila|har|n t|asi|ban|erl|t d|bat|uat|ta |lan|adi|h d|neg| ne|kum|mas|nan|pat|aha| in|l d|emp|sem|rus|sua|ser|uan|era|ari|erb|kat|man|a b|g s|rta|ai |nny|n u|ung|ndi|han|uku|huk| hu|sa |ers|in | la|ka | su|ann|car|kes|aku|dip|i s|a a|erk|n i|lai|rga|aru|k h|i m|rka|a u|us |nak|emb|gga|nta|iba| pu|ind|s p|ent|mel|ina|min|ian|dar|ni |rma|lua|rik|ndu|lin|sia|rbu|g p|k s|da |aya|ese|u d|ega|nas|ar |ipe|yar|sya|ik |aga| ta|ain|ua |arg|uar|iny|pem|ut |si |dun|eor|seo|rak|ngs|ami|kel|ini|g t|dik|mer|emu|aks|rat|uru|ewa|il |enu|any|kep|pel|asu|rli|ia |dir|jam|mba|mat|pan|g m|ses|sar|das|kuk|bol|ili|u k|gsa|u p|a k|ern|ant|raa|t p|ema|mua|idi|did|t s|i k|rin|erm|esu|ger|elu|nja|enj|ga |dit",
        fra: " de|es |de |ion|nt |tio|et |ne |on | et|ent|le |oit|e d| la|e p|la |it | \xE0 |t d|roi|dro| dr| le|t\xE9 |e s|ati|te |re | to|s d|men|tou|e l|ns | pe| co|son|que| au| so|e a|onn|out| un| qu| sa| pr|ute|eme| l\u2019|t \xE0| a |e e|con|des| pa|ue |ers|e c| li|a d|per|ont|s e|t l|les|ts |tre|s l|ant| ou|cti|rso|ou |ce |ux |\xE0 l|nne|ons|it\xE9|en |un | en|er |une|n d|sa |lle| in|nte|e t| se|lib|res|a l|ire| d\u2019| re|\xE9 d|nat|iqu|ur |r l|t a|s s|aux|par|nal|a p|ans|dan|qui|t p| d\xE9|pro|s p|air| ne| fo|ert|s a|nce|au |ui |ect|du |ond|ale|lit| po|san| ch|\xE9s | na|us |com|our|ali|tra| ce|al |e o|e n|rt\xE9|ber|ibe|tes|r d|e r|its| di|\xEAtr|pou|\xE9t\xE9|s c|\xE0 u|ell|int|fon|oci|soc|ut |ter| da|aut|ien|rai| do|iss|s n| ma|bli|ge |est|s o| du|ona|n p|pri|rs |\xE9ga| \xEAt|ous|ens|ar |age|s t| su|cia|u d|cun|rat| es|ir |n c|e m| \xE9t|t \xEA|a c| ac|ote|n t|ein| tr|a s|ndi|e q|sur|\xE9e |ser|l n| pl|anc|lig|t s|n e|s i|t e| \xE9g|ain|omm|act|ntr|tec|gal|ul | nu| vi|me |nda|ind|soi|st | te|pay|tat|era|il |rel|n a|dis|n s|pr\xE9|peu|rit|\xE9 e|t \xE9|bre|sen|ill|l\u2019a|d\u2019a| mo|ass|lic|art| pu|abl|nta|t c|rot| on| lo|ure|l\u2019e|ava|ten|nul|ivi|t i|ess|ys |ays| fa|ine|eur|r\xE9s|cla|t\xE9s|oir|eut|e f|utr|doi|ibr|ais|ins|\xE9ra|\u2019en|i\xE9t|l e|s \xE9|nt\xE9| r\xE9|ssi| as|nse|ces|\xE9 a",
        deu: "en |er |der|ein| un|nd |und|ung|cht|ich| de|sch|ng | ge|ine|ech|gen|rec|che|ie | re|eit| au|ht |die| di| ha|ch | da|ver| zu|lic|t d|in |auf| ei| in| be|hen|nde|n d|uf |ede| ve|it |ten|n s|sei|at |jed| je| se|and|rei|s r|den|ter|ne |hat|t a|r h|zu |das|ode| od|as |es | an|fre|nge| we|n u|run| fr|ere|e u|lle|ner|nte|hei|ese| so|rde|wer|ige| al|ers|n g|hte|d d| st|n j|lei|all|n a|nen|ege|ent|bei|g d|erd|t u|ren|nsc|chu| gr|kei|ens|le |ben|aft|haf|cha|tli|ges|e s| si|men| vo|lun|em |r s|ion|te |len|gru|gun|tig|unt|uch|spr|n e|ft |ei |e f| wi| sc|r d|n n|geh|r g|dar|sta|erk| er|r e|sen|eic|gle| gl|lie|e e|tz |fen|n i|nie|f g|t w|des|chl|ite|ihe|eih|ies|ruc|st |ist|n w|h a|n z|e a| ni|ang|rf |arf|gem|ale|ati|on |he |t s|ach| na|end|n o|pru|ans|sse|ern|aat|taa|ehe|e d|hli|hre|int|tio|her|nsp|de |mei| ar|r a|ffe|e b|wie|erf|abe|hab|ndl|n v|sic|t i|han|ema|nat|ber|ied|geg|d s|nun|d f|ind| me|gke|igk|ie\xDF| fa|igu|hul|r v|dig|rch|urc|dur| du|utz|hut|tra|aus|alt|bes|str|ell|ste|ger|r o|esc|e g|rbe|arb|ohn|r b|mit|d g|r w|ntl|sow|n h|nne|etz|raf|dlu| ih|lte|man|iem|erh|eru| is|dem|lan|rt |son|isc|eli|rel|n r|e i|rli|r i| mi|e m|ild|bil| bi|eme| en|ins|f\xFCr| f\xFC|gel|\xF6ff| \xF6f|owi|ill|wil|e v|ric|f e",
        jav: "ng |an | ka|ang|ing|kan| sa|ak |lan| la|hak| pa| ha|ara|ne |abe| in|n k|ngg|ong|ane|nga|ant|won|uwo| an| uw|nin|ata|n u|en |ra |tan| da|ran|ana| ma|nth|ake|ben|beb|hi |ke |sab|nda| ng|adi|thi|nan|a k| ba|san|asa|ni |e h|e k|g k| ut|pan|awa| be|eba|gan|g p|dan| wa|bas|aka|dha|yan|sa |arb|man| di|wa |g d| na|g n|ban| tu|n s|ung|wen|g s|rbe|dar|dak|di |g u|ora|aya|be |ah |a s|eni| or|han|as | pr|a n|na |iya|a a|kar|at |a l|mar|uwe|duw|uta|und|n p|asi|pa | si|ala|n n| un|kab|oni|ya |i h|gar|g b|yat|tum|ta |n m|i k|apa|taw| li|ani| ke|al |ka |kal|ngk|ega| ne|nal|n i|g a|ggo|ina|we |ena|dad|iba|awi|aga|a p| ta|sar|adh|awe|and|uju|ind|min|sin|ndu|uwa|gge|n l|ggu|ngs|n b|a b|pra|iji|n a|ha | bi|kat|go | ku|e p|ron|kak|ngu|a u|gsa|war|nya|g t|pad|bis|k b|i w|ae |wae| nd|ali|a m|er |sak|e s|ku |liy|ama|i l|eh |isa|arg|n t|a d|kap|i s|ayo|gay| pe|ndh|bad|pri|neg|tow|uto|eda|bed|il |ih | ik|ur |k k|rta|art|i p|rga|lak|ami|ro |aro|yom|r k|e d|a w|kon|rib|eng|ger|g l|ras|dil| ti|k l|rap|mra|uma| pi|k h|n d|gaw|wat|ga |k n|ar |per| we|oma|k p|jro|ajr|saj|ase|ini|ken|saw|ona|nas|kas|h k|i t| um|tin|wo | me|aba|rak|pag|yar|sya|t k| te| mu|ngl| ni|i b|men|ate|a i|aku|ebu|a t| du|g m|owo|mat| lu|amp",
        vie: "ng |\u0323c |\u0301c | qu|a\u0300 | th|nh | ng|\u0323i |\u0300n |va\u0300| va| nh|uy\xEA| ph|quy| ca|\xEA\u0300n|y\xEA\u0300|\u0300nh|\u0300i |\u0323t | ch|o\u0301 | tr|ng\u01B0|i n| gi|g\u01B0\u01A1|\u01A1\u0300i|\u01B0\u01A1\u0300|\u0301t | co|\u01B0\u01A1\u0323| cu|a\u0301c|\u01B0\u0323 |\u01A1\u0323c| kh| \u0111\u01B0|\u0111\u01B0\u01A1| t\u01B0|co\u0301| ha|\xF4ng|c t| \u0111\xEA|n t|i \u0111|i\u0300n|\u0300u |ca\u0301|gia|\u0301i |o\u0323i|mo\u0323| mo|\xEA\u0300u|i\xEA\u0323|\u0111\xEA\u0300|u c|nh\u01B0|pha| ba| bi|\xE2\u0301t|\u0309a |u\u0309a|cu\u0309|h\xF4n| \u0111\xF4|g t|\u0301 q|\u0303ng| ti|t\u01B0\u0323|t c|\u0323n | la|n \u0111|n c|n n|hi\xEA|ch |ay |hay| vi|\xE2n | \u0111i| na|ba\u0309| ho|do | do| t\xF4| hi|\xF4\u0323i|ha\u0301|i\u0323 |na\u0300|\u0300 t|\u01A1\u0301i|h\xE2n| m\xF4|\u0301p |a\u0300n|\u0323 d|\u0301ch|\u0323p |\u0300o |a\u0300o|kh\xF4|\u0301n |\xF4\u0323t|m\xF4\u0323| h\xF4|ia |\xF4\u0301c|c h|h\u01B0\u0303|i v|g n|\u0301ng|u\xF4\u0301|qu\xF4|h t|\xF4n |\xEAn |n v|nh\xE2|\u0323 t| b\xE2|i c|g v|\u0309ng|i\xEA\u0301|c c|\xE2\u0323t|th\u01B0|h\u01B0 |\u01B0\u01A1\u0301|\u0309n | v\u01A1| c\xF4|c \u0111| \u0111o| s\u01B0|t t|\xF4\u0323c|\u01B0\u0303n|v\u01A1\u0301| v\xEA|a\u0309 |\u0323ng|g \u0111|\u0309o |a\u0309o|u\xE2\u0323| \u0111a|bi\u0323|la\u0300|s\u01B0\u0323|b\xE2\u0301|ha\u0300|h\xF4\u0323|i t|a\u0309n|h\u01B0\u01A1|\u0300ng|tro|\u0309m |o v| mi|\xEA\u0309 |u\u0323c|i h|\u01B0\u0301c|a\u0301p|g c|\u0303 h|ia\u0301|n b|\u0309i |a m|h c|c\xF4n|\xEA\u0323n|\u01A1\u0301c|ha\u0323|\u0111\xF4\u0323| du| c\u01B0|a c|n h|tha|a\u0303 | xa|\u0301o |a\u0301o|i\u0301n|\u0300y |g b| h\u01B0|g h|ong|ron|\u0300 c|cho|\u0300 n|mi\u0300|\u01B0\u0323c|h v|c b| lu|i b|\xEA\u0323 |ai |\xEA\u0301 |\u0323 c|xa\u0303|kha|c q|i\xEA\u0309|t\xF4\u0323|\xF4\u0301i|\u0111\xF4\u0301|a\u0301 |hoa|o h|h \u0111|ca\u0309|n l|ho\u0323|ti\xEA|y t|\u0309 c|a\u0323i|a\u0301n|\u0300 \u0111|oa\u0300|y \u0111|chi|\u0309 n|ph\xE2|\xEA\u0300 |thu|i\xEAn|du\u0323|o c|i m|lu\xE2|c p|\xF4\u0301n|c l|\u0301 c|u\u0303n|cu\u0303|c g|c n|qua|n g|c m|o n|a\u0309i|ha\u0309|\u0301 t|ho |v\xEA\u0300| t\xE2| h\u01A1|o t|\u01A1\u0309 |h\u01B0\u0301|hi\u0300|vi\xEA|\u0300m |\u0309 t|\u0111o\u0301|th\xF4|\u01B0\u0301 |c\u01B0\u0301|hi\u0301|\u0301nh|a\u0300y|\u01A1\u0309n|\u01B0\u01A1\u0309| b\u0103|tri| ta|m v|c v|\u01A1\u0323p|h\u01A1\u0323|h m| n\u01B0|\xEA\u0301t|thi|\u0103\u0323c|ngh|uy ",
        ita: " di|to | in|ion|la | de|di |re |e d|ne | e |zio|rit|a d|one|o d|ni |le |lla|itt|ess| al|iri|dir|tto|ent|ell|i i|del|ndi|ere|ind|o a| co|te |t\xE0 |ti |a s|uo |e e|gni|azi| pr|idu|ivi|duo|vid|div|ogn| og| es|i e| ha|all|ale|nte|e a|men|ser| su| ne|e l|za |i d|per|a p|ha | pe| un|con|no |sse|li |e i| o | so| li| la|pro|ia |o i|e p|o s|i s|in |ato|o h|na |e s|a l|e o|nza|ali|tti|o p|ta |so |ber|ibe|lib|o e|un | a | ri|ua |il | il|nto|pri|el | po|una|are|ame| qu|a c|ro |oni|nel|e n| ad|ual|gli|sua|ond| re|a a|i c|ri |o o|sta|ita|i o| le|ad |i a|ers|enz|ssi|\xE0 e|it\xE0|gua|i p|e c|io | pa|ter|soc|nal|ona|naz|ist|cia|rso|ver|a e|i r|tat|lle|sia| si|rio|tra|che| se|rt\xE0|ert|anz|eri|tut|\xE0 d|he | da|al |ant|qua|on |ari|o c| st|oci|er |dis|tri|si |ed | ed|ono| tu|ei |dei|uzi|com|att|a n|opr|rop|par|nes|i l|zza|ese|res|ien|son| eg|n c|ont|nti|pos|int|ico|r\xE0 |sun|ial|lit|sen|pre|tta|dev|nit|era|eve|ll |l i| l |nda|ina|non| no|o n|ria|str|d a|art|se |ssu|ica|raz|ett|sci|gio|ati|egu| na|i u|utt|ve | ma|do |e r|ssa|sa |a f|n p|fon| ch|d u|rim| fo|a t| sc|tr\xE0|otr|pot|n i| cu|l p|ra |ezz|a o|ini|sso|dic|ltr|uni|cie| ra|i n|ruz|tru|ste| is|der|l m|a r|pie|lia|est|dal|nta| at|tal|ntr| pu|nno|ann|ten|vit|a v",
        tur: " ve| ha|ve |ir |ler|hak| he|her|in |lar|r h|bir|ya |er |ak |kk\u0131|akk|eti| ka| bi|eya|an |eri|iye|yet|ara|ek | ol|de |vey|\u0131n |\u0131r |nda|ar\u0131|esi|\u0131n\u0131|d\u0131r| ta|tle|e h|as\u0131|etl|e k| va|\u0131 v|s\u0131n|ile|ne |rke|erk|ard|ine| sa|\u0131nd|ini|k h|k\u0131n|ama|le |tin|rd\u0131|var|a v| me|e m|na |sin|ere|k v| \u015Fa| bu|lan|kes|dir|rin|dan| ma|k\u0131 |mak|\u015Fah|da | te|mek| ge|n\u0131 | hi|nin|en |n h| se|lik|rle|ana|lma|e a|\u0131 h|r \u015F|ill|si | de|aya|zdi|izd|aiz|hai|ret|hi\xE7|\u0131na| i\u015F|e b| ba|kla|et | h\xFC|r\u0131n|n k|ola|nma|e t| ya|eme|riy|n v|e i|a h|li |mil|eli|ket|ik |kar|irl|h\xFCr|im |evl|mes|e d|ahs|ma |rak|ala|let|lle|un | ed|rri|\xFCrr|bu | mi|i v|dil| il| e\u015F|n i|la |el |mal| m\xFC| ko|e g|se | ki|mas|lek|mle|mem|n b|ili|e e|ser| i\xE7|n s|din| di|es |mel|eke|tir|\u015Fit|e\u015Fi|r b|akl|yla|n m|len| ke|edi|oru|nde|re |ele|ni |t\xFCr|a k|eye|\u0131k |ken|u\u011Fu| uy|eml|erd|ede|ame| g\xF6|e s|i m|tim|i b|rde|r\u015F\u0131|ar\u015F|a s|it |t v|siy|ar |rme|est|bes|rbe|erb|te |al\u0131| an|ndi|end|hs\u0131|unm|r\u0131 |kor|n\u0131n| ce|maz|mse|ims|kim|i\xE7 | ay|a m|lam|ri |s\u0131z|a b|ade|n t|nam|lme|ilm|k g|il |tme|etm|r v|e v|n e|\u011Fre|\xF6\u011Fr| \xF6\u011F|al |\u0131yl|olm|vle|\u015Fma|i s|ger|me | da|ind|lem|i o|may|cak|\xE7in|i\xE7i|nun|kan|ye |e y|r t|az |\xE7 k|ece|s\u0131 |eni| mu|ulu|und|den|lun| fa|\u015F\u0131 |ahi|l v|r a|san|kat| so|enm| ev|i\u015F ",
        pol: " pr|nie|pra| i |nia|ie |go |ani|raw|ia | po|ego| do|wie|iek|awo| ni|owi|ch |ek |do | ma|wo |a p|\u015Bci|ci |ej | cz| za| w |ych|o\u015Bc|rze|prz| ka|wa |eni| na| je|a\u017Cd|ka\u017C|ma |z\u0142o|cz\u0142|no\u015B|o d|\u0142ow|y c|dy |\u017Cdy|i p|wol| lu|ny |oln| wy|stw| wo|ub |lub|lno|rod|k m|twa|dzi|na | sw|rzy|aj\u0105|ecz|czn|sta| sp|owa|o p|spo|i w|kie|a w|zys|obo|est|neg|a\u0107 |mi |cze|e w|nyc|nic|jak| ja|wsz| z |jeg|wan|\u0144st|o s|a i|awa|e p|yst|pos|pow| r\xF3|o o|j\u0105c|ony|nej|owo|dow|\xF3w | ko|kol|aki|bez|rac|sze|iej| in|zen|pod|i i|ni | ro|cy |o w|zan|e\u0144s|no |zne|a s|lwi|olw|ez |odn|r\xF3w|odz|o u|ne |i n|i k|czy| be|acj|wob|inn| ob|\xF3wn|zie| ws|aln|orz|nik|o n|icz|zyn|\u0142ec|o\u0142e|po\u0142|aro|nar|a j|i z|t\u0119p|st\u0119|ien|cza|o z|ym |zec|ron|i l|ami| os|kra| kr|owe| od|ji |cji|mie|a z|bod|swo|dni|zes|e\u0142n|pe\u0142|iu |edn|iko|a n|raj| st|odo|zna|wyc|em |lni|szy|wia|nym|\u0105 p|j\u0105 |ze\u0144|iec|pie|st |jes| to|sob|kt\xF3|ale|y w|ieg|och|du |ini|war|zaw|nny|roz|i o|wej|i\u0119 |si\u0119| si|nau| or|o r|kor|e s|pop|zas|niu|z p|owy|w k|ywa| ta|ymi|hro|chr| oc|jed|ki |o t|ogo|oby|ran|any|oso|a o|t\xF3r| kt|w z|dne|to |tan|h i|nan|ejs|ada|a k|iem|aw |h p|wni|ucz|ora|a d| w\u0142|ian| dz| mo|e m|awi|\u0107 s|gan|zez|mu |taw|dst|wi\u0105|w c|y p|kow|o j|i m|y s|bow|kog|by |j o|ier|mow|sza|b o|ju |yna",
        swh: "a k| ya|na |wa |ya | ku|a m| na| ha|i y| wa|a h|a n|ana|aki|ki |la |hak| ka|kwa|tu | kw| ma|li |a a|ila|i k| ki|ni |a w|ali|a u| an| mt|ke |mtu|a y|ake|ati|kil|ka |ika|kat|ili|te |ote|we |a s|e k|ia |zi |u a|za |azi|ifa|ma |yak|yo |i n|ama| yo|au | au|e a|kut|amb|o y|ha |asi|fa |u w|hal|ara|sha|ish|ata|ayo| as|tik|u k| za|i z|ina|u n|mba|uhu|hi |hur|cha|yot|ru |uru|wat| ch|eri|ngi|e y|u y|i a|aif|tai| sh|nay|chi|ra |ani| bi| uh|sa | hi|i h|awa|iwa|a j|ti |mu |o k|ja |kan|uli|iwe|any|i w| am|e n|end|atu|kaz|o h|ria|her|she|shi|nch| nc|uta|ye |wak|ii |ele|ami|adh|eza| wo|iki|oja|moj|jam| ja|aka|bu |kam|kul|mat|fan|a l|agu|ind|ne |iri|lim|wen|da |kup|uto|i m|a b|ini|wan|bil| ta|sta|dha| sa| ni|ao | hu|e w|wot| zi|rik|kuf|aji|ta |wez|nya|har| ye|e m|si |lin| ut|ine|gin|ing| la|a t|zim|imu|ima|tak|e b|uni|ibu|azo|kos|yan|nye|uba|ari|ahi|nde|asa|ri |ham|dhi|eli|hir|ush|pat| nd|kus|maa|di |nda|oa |bar|bo |mbo|oka|tok|ndw|ala|wal| si|uzi|hii|tah|i s|o n|liw| el|upa|zin|hag|a c|ndi|ais|mai|eny|mwe|aa |ewe| al|ndo|e h|lo |umi|kuh|jib|osa|mam|a z|ufu|dwa|u i| in|iyo|nyi| ny|u m|sil|ang|o w|guz|zwa|uwa|kuw|hil|saw|uch|ufa|laz|und|aha|ua | mw|bal| lo|o l|a i|del|nun|anu|nji| ba|lik|le |uku|i i",
        sun: "an |na |eun|ng | ka|ana| sa| di|ang|ung|un |nga|ak | ha|keu| ba|a b| an|nu |hak| bo|anu|ata|nan|a h|ina| je|aha|ga |ah |awa|jeu| na|ara|ing|oga|bog|gan| ng|asa|kan|a s|ha |ae |bae|n k|a k| pa|a p|sah|g s|sar| si|sin|a n|din|n s|ma | at|aga|a a|tan| ku| ma|n a|san|man|wa |lah|pan|taw|u d|ra |ari|eu | pi|gar| pe|kat| te|n p|sa |per|a d|a m|e b|aan|ban|ran|ala|ike|n n|kum| ti|ama|a j|pik|ima|n d|al |at | ja|ila|ta |nda|bas|rim|teu|n b|eba|beb|udu|aya|ika|ngg|nag|kab|rta|art| me|ola|k n|uma|atu|aba|g k|adi|aca| po|ngt|nar|una|ate|oh |boh|awe|di |tin|asi|uku|n h|dan|aka|iba|car|sac|gaw|are|ent|um |jen|abe|u s|dil|pol|ar |ku |kud|u m|upa|han| hu|ake|bar|ur |hna|aru|h s|a t|sak|wat|kaw| so|n t|pa |mpa|du |ngk|g d|ena|huk| mi|mas|ngs|ti |n j|ka |aku|ren|n m| ta|law|isa| tu|und|a u|h a|tay|ula|aja|ali|nte|gsa|en |gam| wa|ieu|ere|k h|jal|h b|il |dit|ngu|lan|asu|yun|ayu|gta|k d|a r|g n|mah|uda|dip|kas|rup|geu| be|ter|sej|min|ri |ern|u p|k k|amp|ura|kal|e a|k a|ut |g b|nak|bis| bi|k p|tes|end|we |h k|tun|uan| un| de|u n|h t|ksa|u k|ian|wil|u b|ona|nas|uka|rak|eje| se|ami| ke|war| ra| ie|k j|eh |ya |lma|alm|pen|tur|wan|lak|h j|g a|ean|up |rga|arg|r k|u t| ne|deu|gal|gke|e t|h p| ge|g t| da|i n",
        ron: " de|re | \xEEn|\u0219i |are|de | \u0219i|te |ul | sa|rep|e d|ea |ept|dre|tul|e a| dr|ie |\xEEn |ptu|le |ate|la |e p| la| pe|ori| pr|ce |e s| or|au |tat| ar|ice|ii |or |a s| fi| a |ric|ale|per| co|n\u0103 |\u0103 a|rea|ers|i s| li|sau| ca|rso|ent|lor|a\u021Bi|al |a d|e o|men|l l|ei |e c|pri|an\u0103| ac| re|uri|ber|ibe|lib|a p|oan|soa| in|i l|ter| al| s\u0103|tea|l\u0103 |car|t\u0103\u021B|s\u0103 |tur|i a|i d|nal| ni|ri |ita|e \xEE|e \u0219|se |ilo|in |ia |\u021Bie|pre|fie|\u021Bii|\u0103\u021Bi|con|ere|e f|a o|eni|nte| nu| se|ace|ire|ici| cu|i \xEE|a c|i n|a l|pen|ui |nu |\u0103ri|al\u0103|ona|l d|r\u0103 |ert|ril| su|ntr|n c|rin| as|ni |i o|eri|t\u0103 |c\u0103 |ile|\u0103 d|i c|e n|ele|sa | mo|i p|fi |sal|tor|va |oci|soc|nic|pro| un| tr|est|in\u021B|a \xEE|uni|n m|a a| di|ecu|lui|sta|lit| po|tre|gal|ega|oat|ra |act|\u0103 \xEE|leg|u d|e l|nde|int|a f|n a| so|na\u021B|ara|i f|uie|iun| to|tar|ste|ces|rar|at | ce|eme|i \u0219|rec|dep| c\u0103| o | \xEEm|bui|ebu|reb| eg| na|m\xE2n|ntu|ili|v\u0103\u021B|\xE2nd|iei|r \u0219|bil|pli|od |mod|res|din|e e|c\u021Bi| au|ali|\u0103 p|\u0103 f|\xEEmp|ial|cia|ion|\u0103 c|dec|nta| om|it\u0103| fa|\u021B\u0103 |cu |tra|\u0103\u021B\u0103|nv\u0103|\xEEnv|\xE2t |ite|i i|lic| pu| ex|riv|tri|rot|\u021Ba |\u021Bi |l c|rta|imi|ulu|\u021Bio|ic\u0103|lig|rel|ta |cla|t \xEE|nt |nit|e m|\xE2nt|\u0103m\xE2|\u021B\u0103m|ger|n\u021Ba|ru |tru|gur|u c|bli|abi|at\u0103|art|par|ar |rim|iva|l \u0219| sc|ime|nim|era|sup|ind|u a|dic|ic | st| va|ini|igi|e r",
        hau: "da | da|in |a k|ya |a d| ya|an |a a| ko| wa|na | a |sa | ha|kin|wan|ta | ba|a s| ta|a y|a h|wa |ko | na|n d|a t|ba |ma |n a| ma|iya|hak|asa| sa|ar |ata|yan| za|akk|a w|ama| ka|i d|iki|a m|owa|a b| ci| mu| sh|anc|nci|kow|a z|ai |nsa|a c|shi| \u0199a|cik|ne |ana|i k|ci |kki|e d|a \u0199| ku|su |n y|uma|ka |uwa|kum|hi |a n|utu| yi|ani| ga| ra|aka|ali|mut|\u2018ya|tar| do|\u0257an|ars| \u2018y|sam|\u0199as|nda|ane|man|tum|i a|yi |ni | du|ada| su|and|a g|cin| ad|a i|ke | \u0257a|n k|yin|um |e m| ab|ins|nan|ki |mi |ami|yar|min|oka|re |i b|kam|mas|i y|mat|za |ann|en |a\u0257a| ja|m n|li |duk|dai|e s|n s|ra |n w|n h|aik| ai|ida|ga |san|rsa|aba|sar|ce |nin| la|o n|ban|nna|kan|abi|una|dam|me |ara|i m|hal|a r|add|are|n j|abu| ne|zai|a \u0257|wat|ari| \u0199u|on |ans|wa\u0257|ame|ake|kar|din|zam| fa|a l|\u0199un|buw|r d| hu|oki|kok|a \u2018|u d|n t|abb|aur| id|rin|yak|dok|kiy|ray|jam|n b|ubu|bub|n m|i s| an|am |ili|bba|omi|dan|gam|ayu|ash|nce|tsa|ayi|har|yya|ika|bin|han|kko|rsu|aif|imi|fa | am|i i|dom| ki|yuw|dun|o a|fan|n \u0199|aya|fi |n r|she|uni|bay|riy|n \u2018|sab| iy|bat|tab|aga| ir|mar|o w|i w|sha|awa| ak|uns|unc|tun|u k| il|\u0257in|mfa|amf|aci|ewa|kas|lin|n n|don|n i|ure|ifi|lai|dda| ts|iri|aye|un |tan|wad|gwa|afi| ay|ace|mba|amb|aid|nta|ant|war|lim|kya| al|a\u0257i",
        fuv: "de | e |e n| ha|nde|la | wa|ina| ka|akk| nd|\u0257o |na | in|e e|hak|al |di |i h|kke|ii |um |ko |ala|ndi| mu| ne|lla| jo|wal|e\u0257\u0257|ne\u0257|all|mum| fo|kal|jog|ke |aaw|taa| ko|eed|\u0257\u0257o|aa | le|ji |ade|aad|laa|o k| ng|e h| ta|re |ogi|a j|e w|e m|nnd|gii|e l|ley|awa|aag|ede|waa|e k|gu |e d| go|gal|\u0253e |ti |fot|aan|eyd|ydi|\u0257e |ee | re|ol |oto|i e|oti|m e|taw|nga|a i|kee|to |ann|eji|am |ni | wo|een|goo|eej|e f| he|enn|gol|agu|pot| po|dee|ay | fa|ka |a k|ond|oot| de|a f|o f|a n|wa |maa|ota|le |hay|i k|o n|ngo|e j|o t| ja|\xF1aa|hee|nka|i w|awi|a w|ngu|der| to|e t|dim|i n|fof|i f|e g|tee|naa|aak| do|too|a e|ndo|ren|dii|oor|er |o e|i m|of | sa| so|gaa|ani|kam| ma| \xF1a|o w|i l|u m|kaa|ima|dir| ba|igg|lig| li|aar| \u0253e|o i|e s| o |e r|so |ooj| nj| la|won|awo|dow|woo|faw|and|e i|ore|nge|nan|are|a t|tin|aam| mo|\u0257ee|ita|ira|aa\u0257|e p|nng|ma |ank|yan|nda|oo |e \u0253|njo|ude|nee|e y|e a|je | ya|en |ine|iin| di|ral| na|\u0257i |und| hu|inn|\u014Bde|a\u014Bd|ja\u014B|a d|den| fe| te|go | su|a h|haa|tal|e\u0257e|e b|y g|baa|tde| yi|\u0257\u0257a|o h|ii\u0257|ow | da|do |l n|alt| ho|l e|aga|mii| aa|a a|ama|nna|m t| ke|edd|oga|m w|l m|o j|a\u0257e|ree|oje|yee| no|ele|ne |ago| pa| al|guu|wi |ge |aa\u0253|daa|ind|dew|i j|jey| je|ent|tan|o \u0257|ge\u0257| ge|\xF1ee|a l| \u0257u|kko|mak|a s| ga",
        bos: " pr| i |je |rav|na |ma |pra| na|ima| sv|a s|da |a p|vo |nje|ko |ako|anj|o i| po|avo|ja |e s|a i|ti | im| da| u |sva|no |ju | za|o n|va |i p|ili|vak|li | ko|ne | il|koj| ne|nja| dr|ost| sl|van|im |i s|u s|i i|a n|ava|ije|a u| bi|stv|se |a d|om |jed|bod|obo|lob|slo| se| ra|ih |sti| ob| je|pri|enj|dru|u i|o d|iti|voj|raz|ova|dje| os|e i|lo |e p| nj|uje|i d|bra|tre| tr| su|jeg|i n|u z|a k|og |u p|oje|cij|reb|a o|a b|lju|i u|ran|mij|ni |nos|jen|ba |edn|svo| iz|jel|pro|e d|\u017Eav|bit| ni|i o|sta|a z|avn|vje| ka|bil|ovo|a j|aju|ist|nih|tu |red|gov| od|e o|oji| sm|lje|o k|ilo|ji |aci|e u|e n|pre|o p|eba|u o|su |vim|i\u010Dn| sa|u n| dj|a t|ija|\u010Dno|jem|r\u017Ea|dr\u017E|elj|stu|dna|odn|eni|za |iva|olj|\u0161ti|nom|em |du |vno|smi|jer|e b|de |pos|m i| do|u d|nak|a r|obr| mo|lja|nim|ego| kr|tit|kri|ve |nju|an |iko|nik|nu |i m|nog|eno|sno| st|e k|tup|rug|ka |oda|riv|vol|aln|m s|itu|a\u0161t|za\u0161|ani|sam|akv|ovi|osn|rod|aro| mi|tva|dno|nst|jan|ak |ite|vi\u010D|rad|u m| ta|dst|tiv|nac|rim|kon|ku |odu|\u017Eiv|amo|tvo|tel|pod|g p|nov|ina|nar| vj|o s|i b|oj | ov|ave|vu |ans|oja|zov|azo|ude|bud| bu|e t|i v|din|edi|nic|tan|nap|mje| is|jal|slu|pun|eds|o o|zak|jav|i k|m p|tno|ivo|ere|ni\u010D|m n|jim|kak|ada|vni|ugi| ro|mov|ven|pol|to |te | vr",
        hrv: " pr| i |ma |rav|ima|pra|je |na | sv|ti | na|a p|vo |vat|ko |a s|nje| po|anj|avo|o i|tko| im|a i|sva|no |i p|e s|ja |o n| za|ju |ili| u |va |li | bi|ne |i s|atk| il|iti|da | ne| ko| dr| sl|van|nja|koj|ije| ra|ova| os|u s|i i|ost|bod|obo|lob|slo|pri|a n|om |jed|ati|ih |im |voj|ava| ob|stv|se | mo|i u|bit|dru| je| se|dje|i o|enj| ka|i n|sti|lo |u i|svo|mij|ni |e i|raz|a o|e n|bra|o p| su|a b|u p|ran|a k|og |i d|bil|ako|e p|a d|edn|aju|mor|eni| nj|iva|jel|\u017Eav| ni|a z|avn|ovi|eno|ra |oje|a j| da|a u|ora|jeg| iz|nih|r\u017Ea|dr\u017E|oji|sno|nit|jen|vje|ilo|cij|oda|nim| dj|pro|tit|u z|e d|red|nom|jem| od|nos|sta|nov|osn| sm|lje|o s|ji |ovo|stu|pos|vim| do|odn|rad|ist| sa|e o|tu |nju|em |gov|o d|rod|i m|jer|aci|oj |pre|m i|nak|dna|a r|lju|uje|e m|obr|za |olj|ve |o o|m s|an |nu |du |aro|vno|smi|aln|e k|o k|i b|e u|tva|u u|tup|rug|dno|u o|su |u d|ka |vol| ta|ija|itu|\u0161ti|a\u0161t|za\u0161|itk|\u017Eiv|ani|sam|elj| st|sob|oso|nar|akv|ada| mi|te |ona|nst|jan|lja|i v|ite|ego|elo|rim|ku |odu|amo|tvo|tel|jim|pod|nog|vi |ina| vj|to |e b|ans|zov|azo|ak | sk|edi|tan|oju|pun|pot|oti|kon|zak|i k|m p|tno|ivo|ere|ni\u010D|kak|vni|ugi| ro|mov|ven|\u0161tv| be|ara|kla|ave|u b|avi|oja|jal|u m|dni|mje|rak|din|\u0107i |ju\u010D|klj|nic|u k|nap|obi|atn",
        nld: "en |an |de | de| he|ing|cht| en|der|van| va|ng |een|et |ech| ge| ee|n e|rec| re|n v|n d|nde|ver| be|er |ede|den| op|het|n i| te|lij|gen|zij| zi|ht |ijk|eli| in|t o| ve|op |and|ten|ke |ijn|e v|jn |ied| on|eft| ie|sch|n z|n o|aan|ft |eid|te |oor| we|ond|eef|ere|hee|id |in |rde|n w|t r|aar|rij|ord|wor|ens|of | of|hei|n g| vr| vo| aa|r h|hte| wo|n h|al |nd |vri|e o|ren|le |or |n a|jke|lle|eni|n b|ij |e e|g v| st|ige|die|e g|men|nge|t h|e b| za|e s|om |t e|ati|wel|erk|sta|ers| al| om|n t|zal|dig| me|ste|voo|ter|gin|re |ege|ge |g e|bes|nat| na|eke|che|ig |gel|nie|nst|e a|nig|est|e w|erw|r d|end|ona|d v|jhe|ijh|d e|ele| di|ie | do|del|n n|at |it | da|tie|e r|elk|ich|jk |vol|ijd|tel|min|len|str|lin|n s|per|t d|han| zo|hap|cha|wet| to|ven| ni|aat|ion|tio|taa|lke|eze|met|ard|waa|uit|sti|e n|doo|pen|eve|el |toe|ale|ien|ach|st |ns | wa|eme|nin|e d|bij| gr|n m|p v|esc|t w|ont|ite|man|ema| ma|nal|g o|rin|hed|t a|t v|beg|all|ijs|wij|rwi|e h| bi|gro|p d|rmi|erm|her|oon| pe|eit|kin|t z|iet|iem|e i|gem|igi| an|d o|r e|ete|e m|js | hu|oep|g z|edi|arb|zen|tin|ron|daa|teg|g t|raf|tra|eri|soo|nsc|t b| er|lan| la|ern|ar |lit|zon|d z|ze |dez|eho|d m|tig|loo|mee|ger|ali|gev|ije|ezi|gez|nli|l v|tij|eer| ar",
        srp: " pr| i |rav|na |pra| na|ma | sv|ima|da |ja |a p|vo |je |ko |ti |avo| po|a i|ako|a s| za| u |ju |o i| im|nje|i p|va |sva|anj|vak| da|o n|nja|e s|ost| ko|a n|li |ili|ne |om | ne|i s| sl| il| dr|no |koj|u s|ava| ra|og |slo|im |enj|sti|bod|obo|lob|iti|a o|stv|i u|a d|ni |jed|u p|pri|edn| bi|i i|a k|o d|sta|ih |dru|a u| je| os| ni|nos|pro|aju|i o|ran| de| su|u i|se |van|ova|i d|cij| ob|uje|red|\u017Eav|e i|i n|voj|e p|a j|dna| se| od|ve | ka|eni|r\u017Ea|dr\u017E|a z|avn|aci|ovo|u u|m i|oja| iz|lja| nj|ija|u z|e o|rod|jen|lje|e b|raz|jan|lju|svo|za |gov|i\u010Dn| st|nov|sno|osn|du |ji |pre| tr|su |vu |odn|a b|jeg|nim|nih|tu |tit|\u0161ti|ku |nom|bit|e d|me |iko|\u010Dno|oji|lo |vno|nik|e n|\u0111en|ika|bez|ara|de |u o|vim|nak| sa|u n|riv|ave|an |olj|vol| kr|o p|sme|e k|nog| ov|e u|tva|bra|rug|reb|tre|u d|oda| mo| vr|vlj|avl|ego|jav|del|m s|kri|o k|a\u0161t|za\u0161|nju| sm|ani| li|dno|e\u0111u|aln|la |akv|oj |\u0161en|kom|stu|ugi|avi|a r|ka |rad|oju|tan|odi|vi\u010D|tav|itu|ude|bud| bu|pot|odu|\u017Eiv|ere|m n|tvo|ilo|bil|aro|ovi|por|eno|\u0161tv|nac|ove|m p|tup|pos|rem|dni|ba |nst|a t|ast|iva|e m|vre|nu |be\u0111|ist|pun|en |te |dst|rot|zak|ao |kao|i k|ju\u0107|o s|st |sam|ter|nar| me|i m|kol|e r|u\u0161t|ru\u0161|ver|kak| be|i b|kla|ada|eba|ena|ona| on|tvu|ans| do|rak|slu",
        ckb: " he| \xFB |\xEAn | bi| ma|na |in |maf| di|an |xwe| xw|ku | ku|kes| de| ji|her|kir|iya|ya |rin|iri|ji |bi |es | ne|ye |y\xEAn|e b|er |af\xEA|tin|ke | an|iy\xEA|eye|rke|erk|we | be|e h|de | we|hey|f\xEA |i b|y\xEA |ina| b\xEA| li|diy|ber|li |re |\xEE \xFB|n\xEA |\xEA d| se| ci|eke|di |w\xEE | na|\xEE y|af |ete|hem| w\xEE|sti| ki|r\xEE |k\xEE |\xEE a|yek|n d|kar| te|ne |y\xEE |i h|e k|t\xEE |t\xEA |a w|e d|\xEE b|s m|ast|n b|be |yan|ser|tew|net| tu| ew|hev|aza|ara|\xFB b|n k|adi|ev |zad| az|ras|est|an\xEA| ya|n h|n \xFB|wed| t\xEA|wek|bat|bo | bo| y\xEA|st |n n|\xEA k|dan|\xEA h|ema|\xEA b|iye|\xEE h|din|b\xFBn|r k|ek\xEE| me|par|\xFBna|ta |wle|ewl|\xEE m| ke|nav|ewe|man|\xEA t|d\xEE |\xFB m|m\xFB |em\xFB|a m|ika|e \xFB|n w|a x|\xEA m|e n| ta|ela|n j|ey\xEA|n x|civ|wey|ana| re|khe|ekh|bik|k\xEA |j\xEE |f h|er\xEE| pa|\xEEna|bin|erb|vak|iva|a s| ni|cih|v\xEA |e j|ari| p\xEA|\xEE d|n\xEAn|ike|e t|a k|\xEA x| ye|n a|ey\xEE|n e|ama|b\xEA |ar |ewa|at\xEA|bes|rbe|av |ibe|ist|m\xEE |tem|awa|are|h\xEE |geh|nge|ing|nek|n\xFBn|an\xFB|qan| qa|v\xEE |rti|uke|tuk| \u015Fe|eza| da|u d|\xFB a|f \xFB|edi| ra|tu |tiy|t\xEAn| mi|xeb| ge|h\xEEn| h\xEE|et\xEA|\xEE j|st\xEE|mal|bib|ra |i d|e m|mam|i a|nik|i m|\xEE k| wi|\xFBn | ko|a \u015F|\xEA j|riy|lat|wel|e e|ine|ane|\xFB h|\xEEn |a d|siy|end|aye| za|ija|a n|\xEE n|ek |tek|yet|mbe|emb|\xFB d|rov|iro|mir|eba| xe|m\xEAn| \xEAn| hu|n\xEEn|an\xEE|t \xFB|ten|n m|dem|\xEA \xFB|en\xEA|te |art|i r| j\xEE|u j|ek\xEA|dew",
        yor: " n\xED|ti |\u1ECD\u0301 |n\xED | l\xE1| \u1EB9\u0300|\xE0n |\u1EB9\u0301 |kan|t\xED | t\xED|an |\u1EB9\u0300 |t\u1ECD\u0301|\u1ECD\u0300 | \u1EB9n|\u1ECDn |w\u1ECDn|\xED \u1EB9|b\xED |\xE1ti|l\xE1t|\u0300t\u1ECD|\u1EB9\u0300t| gb| \xE0t| \xE0w|n l|\xE0ti| a |l\u1EB9\u0300|\u1EB9n\xEC| \xF3 |k\u1ECD\u0300| l\xF3|\xEC k|s\xED |\u1ECD\u0300k| k\u1ECD|ra |ni |\xE0b\xED|t\xE0b| t\xE0|n\xEC | s\xED|\u0300ka|\u1ECD\u0300\u1ECD|n \u1EB9|\xE0w\u1ECD|n t|\xF3 n|\u0300\u1ECD\u0300|\xEDl\u1EB9|or\xED|l\xF3 | w\u1ECD|t\xF3 |d\xE8 |\xECy\xE0|\xFAn | t\xF3| or|\xED \xEC|\xE8d\xE8|k\xF2 |\u2010\xE8d|\u0300\u2010\xE8|\u1EB9\u0300\u2010|r\xEDl|\xED \xF3|r\u1EB9\u0300|\xED \xE0| s\xEC|y\xE0n|gbo|\u1E63e | k\xF2|\xED a| r\u1EB9| j\u1EB9|s\xEC | b\xE1|r\xE0n| \u1E63e|w\u1ECD\u0301|n\xECy|f\xFAn| f\xFA|n \xE0|ba |n n|gb\xE0|gb\u1ECD|j\u1EB9\u0301|un |\xEC\xED | k\xED|gba|\xE8n\xEC| \xE8n|b\xE1 |\u0301 l|a k| ka|d\u1ECD\u0300|k\xED | \xF2m|in | fi|b\xF2 |fi |b\u1EB9\u0301|\u1ECDd\u1ECD|b\u1ECDd|\u0301 s|hun|n\xFA |n\xEDn|w\xE0 |ira|nir|\xF2m\xEC|\xECgb| \xECg|\u0301 t|\u1EB9ni|\xEDn\xFA|i l|\xECni|m\xECn|b\xE0 |\xE1\xE0 |i \xEC|ohu| oh|\xED i|ara| ti|bo |\xF2 l| p\xE9|r\xFA |\xEDr\xE0| \u1ECD\u0300|\xED \xF2|ogb|k\u1ECD\u0301|p\u1ECD\u0300|\xF3 b|\xE0 t|i n|l\u1ECD\u0301|\u1EB9\u0301n| \xECb|y\xEC\xED|gb\xE9|g\u1EB9\u0301|bog|\xF3\xF2 |y\xF3\xF2| y\xF3|n k|p\xE9 |d\xE1 |\u0301w\u1ECD|\u1ECD\u0301w|\xE0 l|\xED k| w\xE0|n o|j\u1ECD | ir|\u1ECD\u0300r|\xFA \xEC|\u0301 \xE0|\xF3 s|i t|\u1E63\u1EB9\u0301|\u0300k\u1ECD|\xED t|y\xE9 |l\xE8 | l\xE8|fin|\xE0b\xF2| l\u1ECD|\xE0 n|\xF9j\u1ECD|w\xF9j|ir\xFA|\xF3 j| ar|\xED w|a w| \xECm|\xFA \xE0|\u0300 t|\xF2fi| \xF2f| \xE0\xE0|f\u1EB9\u0301|\xE0w\xF9|\u0301ni|w\xF9 |\xEC\xEDr|m\xEC\xED| m\xEC|l\xE1\xEC| y\xEC|\xED g|\u1ECD\u0301n|n s|i \u1EB9|\u1EB9\u0300k|\xE0gb|\xEDgb|n\xEDg|a n| k\xFA|l\xE1\xE0|\xED o|n\xE1\xE0| n\xE1|k\u1EB9\u0301|\xEDpa|n\xEDp|\xECn | \xECk|b\xE9 |i g|\u1ECDm\u1ECD| \u1ECDm|i \xE0|i\u1E63\u1EB9|\u0300 \xE0|\xECm\u1ECD|n a|n f|j\u1EB9 |y\xED |\u0301 \u1ECD|\xF3 d|\u0301 \xF2| d\xE1| m\xFA|\xE0\xE0b|\xE1b\u1EB9|l\xE1b|\xECb\xE1|\xF2 g|j\xFA |i o|l\xFA | \xE8t|\u0300 \u1EB9|t\u1ECD\u0300|de |\u0300 n|i \xF2| \xECy|k\xE0n|\u0301n | b\xED| i\u1E63|m\u1ECD\u0300|e \u1EB9|\u0300 l| f\xE0|\xE8y\xED| \xE8y| \xECd|m\u1ECD\u0301|d\xE9 |\u0300 k|\u0301 p|\xF2 t|m\xFA | f\u1EB9| \xECj|r\xED |\xECk\u1EB9|n\xECk|\xECn\xED|n \xEC|n \xE8|s\xECn|\xE8 \u1EB9| i |r\u1ECD\u0300| \xE0n|\u0301 b|\xF9n |\u0301gb|\u1ECD\u0301g|d\u1ECD\u0301| d\u1ECD|\xED n|rin|\u0300 j",
        uzn: "ish|an |lar|ga |ir | bi|ar | va|da |iga| hu|va |bir|sh |uqu|quq|huq| ha|shi| bo|r b|gan|a e|ida| ta|ini|lis|adi|ng |dir|lik|iy |ili|o\u02BBl|har|ari| o\u02BB|uqi|ins|lan|hi |ing|dan|nin|kin| yo|son|nso| in| mu|on |qig| ma|ega|r i|bo\u02BB| eg|o\u02BBz|ni |gad|ash|i b|ki |oki|ila|yok|a b|n b|osh|ala|at |in |r h|erk| er|lga| qa|rki|h h| sh|i h|ara|n m| ba|nis|ik |igi|lig|bos|ri |qil|a t|bil|las|eti| et|n o|ani|nli|kla|i v|a q|a h|a o|yat| qo|im |a s|i m|iya|atl|oli|osi|siy|qla|cha|til| ol|ati|a y|mas|qar|inl|lat| qi|ta\u02BC|ham|gi |ib |\u02BBli|mla|h v|\u02BBz |hun|n e|mum| da| bu| to|un |mki|umk|sha|tla|ris|iro|ha |rch|bar|iri|oya|ali| be|i o|asi|aro| ke|i t|rla| te|arc|hda|shu|tis|n h|tga| sa| xa|rak|lin|ada|ola|imo|hqa|shq|li | tu|aml|lla|sid| as|nid|a i| ki|ch |n t|nda|k b|era|siz|or |hla|a m|r v|eng|ten|mat|mda|amd|lim|miy|y t|ayo|i a|ino|ilg|tni| is|ana|as |ema| em|ech|a a|tar|kat|aka|ak |rat| de|aza|ill| si| so|g\u02BBi|uql|n q|oda|\u02BCli|a\u02BCl|nik| ni|tda|uch|gin|a u|him|uni|sit|ay |qon| ja|atn|kim|h k|hec| he|\u02BBzi|lak|ker|ikl| ch|liy|lli|chi|ur |zar|shl|rig|irl|dam|koh|iko|a d|am |n v|rti|tib|yot|tal|chu| uc|sla|rin|sos|aso| un|na | ka|muh|dig|asl|lma|ra |bu |ush|xal|\u02BBlg|i k|ekl|r d|qat|aga|i q|oiy|mil| mi|qa |i s|jin",
        zlm: "an |ang| ke|ng | se| da|ada|ara|dan| pe|ran| be|ak |ber|hak|ata|ala|a s|ah |nya| me|da |per|n s|ya | di|kan|lah|n k|aan|gan|dal|pad|kep|a p|n d|erh|eba|nga|yan|rha| ya|nda|ora|tia|asa| ha|ama|epa| or|iap|ap |a b| at| ma|eti|ra |tau|n a|set|au | ba|pa | ad|n p|tan|p o|eng|a d|men|apa|h b|h d|dak|man|a a|ter| te|k k| sa|n b|ana|g a|end|leh|ole|a k|am |n y|aka|eh |lam|bas|beb|n m| un|pen|sa |keb|sam|n t| ti|ela|san|car|uan|ma |di |han|ega|ban|eri|at |sia|a m|ika|kes|ian|gar|seb|ta |mas|und|neg|nan|ngs|i d|erl|na |epe|emb|bar| la|atu|kla|pem|mem|emu|eca|sec|ngg|nny|any|bol|al |aha|gsa|ebe|ind|akl|n h|erk|ung|ena| bo|a t| ap|ers| de|in |tu |pun|as |agi|ann|g b|bag| ne|ain|hen| he|era|rat|sem| su|adi|lan|g s|dia|mat|ses|iad| ta|iha|g t|tin|k m|k h|i k|gi |i s|ing|uka|enu|den|lai|k d|ert|ti |rka|aja|rga|lua|ker|mel|dun|ndu|lin|rli|nak|ntu|esi|aya|un |uat|jua| in|rma|erm|ai |emp|kem|ri |dil|ua |uk |h m|l d|g m|mba|kat|ese|tik|ni |ini| an|mpu|ka |dar|mar|rja|erj|arg|u k|sua| ol|esa|dap|ar |g u|si |ent|g d| pu|awa|iri|dir|sal|gam|mbe|n i|har|a h|raa|ema|tar|i a|saa|ira|ari|pel|jar|laj|uju|tuj|rak|ura|uar|elu|t d|unt|il |wen|asi|gga|ipa|ksa|tuk|ula|sek|sas|ibu|rta|sep|rsa|nta|ati|ila|mua|yar",
        ibo: "a n|e n|ke | na| \u1ECD |na | b\u1EE5|\u1ECD b|nwe|nye|ere|re | n |ya |la | nk|ye | nw| ma|e \u1ECD| ya| ik|a o|a \u1ECD|ma |\u1EE5la|b\u1EE5l|ike| on|nke|e i|a m|ony|\u1EE5 n|kik|iki|b\u1EE5 | a |ka |wer|ta |i n|do |di | nd| ga|a a|e a|a i|he |kwa| ok| ob|e o|hi |any|ga\u2010|ha |d\u1EE5 | mm|ndi|\u1ECD n|wa |r\u1EE5 |e m|che|a e|oke|wu |aka|ite|o n|a g|odo|bod|obo| d\u1ECB| ez|ara|we | ih|a\u2010e|h\u1ECB |ri |n o|zi |mma|chi|d\u1ECB |ghi|\u1EE5ta|iri|ihe| an| oh|a y|gba|\u1EE5 \u1ECD| \u1ECDz| ak| iw|nya|te |iwu| nt|ro |oro|e \u1ECB|z\u1ECD |ezi|me |e e|u n|her|ohe| si|a\u2010a|i m|ala|\u1EE5 i| ka|akw| in|gh\u1ECB|kpe|n e|p\u1EE5t| e |i i|i o|ide|inw|\u1EE5 o|h\u1EE5 |ah\u1EE5|weg|ra |o i|kpa|ad\u1EE5|mad|si |sit|a s| me|sor|i \u1ECD|gid|edo|u o|e y|n a| en|tar|ozu|toz|bi |be |\u1EE5 m|\u1EE5r\u1EE5|\u1ECDr\u1EE5| \u1ECDr|mak|uso|ama|de |\u1ECB o| \u1ECDn|\u1ECDz\u1ECD|ch\u1ECB|egh|enw|ap\u1EE5|ru | to|i a|a \u1EE5|osi|r\u1ECB |wet|hed|nch| nc| eb| al|n\u1ECDd|\u1ECDn\u1ECD|uru|sir| kw|yer|ji |eny| mk|\u1ECBr\u1ECB|eta| us|tu |\u1ECD d|u \u1ECD| o |ba | mb|\u1ECDd\u1EE5|\u1ECBch| ch|a d|pa | ag|kwe| ha|a u|e s|mkp|n u|nta|ebe|n \u1ECD|o m|kwu|nkw|nwa|obi| \u1ECBk|esi|i e|nha| nh|le |ile|nil| ni|eme| og|e k|n i|ch\u1ECD|o y|as\u1ECB|otu| ot|ram|u m|\u1ECBgh|d\u1ECBg|zu |n\u1ECD |mba| gb|e g|\u1ECB m|\u1ECDch|ich|pe |agb|i \u1ECB|uch|z\u1EE5z|uny|wun|\u1ECDr\u1ECD| nn|na\u2010| di|ge |oge|iji| ij|\u1ECDha| \u1ECDh|ikp|egi|meg|o o|\u1EE5h\u1EE5|h\u1EE5h|mah|n \u1EE5|\u1ECD g|\u1ECDta|ek\u1ECD|\u1ECB n|kw\u1EE5|agh|\u1EE5m\u1EE5|ban|kpu|okp| ah|\u1ECBkp|a k|ime| im|z\u1EE5 |\u1EE5z\u1EE5|\u1ECDz\u1EE5| \u1EE5z|lit|ali|nat",
        ceb: "sa | sa|ng |ang| ka| pa|an |ga |nga| ma|pag| ng|on |a p|od |kat|ay | an|g m|a k|ug |ana| ug|ung|ata|ngo|atu|n s|ala|san|d s|tun|ag |a m|god|g s|a a|a s|g k|g p|yon|n u|ong|tag|usa|pan|ing|una|mat|g u|mga| mg|y k| us|ali|syo| o |aga|tan|iya|kin|dun|nay|man|nan|a i| na|ina|nsa|isa|bis|a b|adu| ad|n n| bi|asy|asa|lay|awa|lan|non|a n|nas|o s|al |agp|lin|nal|wal| wa|ili|was|gaw|han| iy| ki|nah|ban|nag|yan|ahi|n k|gan| gi|him| di|a u| ba| un|ini|ama|ya |kas|asu|n a|g a|gka|agk|kan|ags|agt|l n|a g|kag| ta|imo|uns|sam| su|g n|n o|gal|kal|og |taw|aho|uka|gpa|ipo|ika|o p|a t| og| si|gsa|g t|aba|ano|gla|y s|o a|aki|hat|kau|sud|gpi|a w|g i|aha|ot |ran|i s|n m|bal|lip|gon|ud | ga|li |uba|ig |ara|g d|na |kab|aka|gba|ngl|ayo| la| hu|a h|ati|d a|d n| pu| in|uga|ok |ihi|d u|ma |may|awo|agb|ami|say|apa|pod|uha|t n|agh|buh|ins|ad | ub| bu|at |iin|a d|ip |uta|sal|hon|wo |ho |tra|lak|iko|as |aod|bah|mo |aug|ona|dil|gik|sos|lih|pin| pi|k s|nin|oon|abu|la |rab|hun| ti|mah|tar|t s|ngb|uma|hin|bat|lao|mak|it | at|s s|sno|asn|ni |aan|ahu| hi|agi|n p|inu|ulo|y p| ni|iha|mag|o n|duk|edu| ed|a e|til|ura|tin|kip|agl|gay|g h|g b|ato|ghi|nab|kon|in |ter|o u|o o|yal|sya|osy| so|tik| re| tr|hig|a o|ha |but|pak|aya",
        tgl: "ng |ang| pa|an |sa | ka| sa|at | ma| ng|apa|ala|ata|g p|pan|pag|ay | an| na|ara| at|tan|a p|pat|n a| ba|ga |awa|rap|kar|g k|aya|lan|g m|n n|g b|nga|mga| mg|a k|na |ama|n s|a a|gan|yan|gka| ta|may|tao|agk|asa|man|aka|ao |y m|ana|g a|nan|aha|kan|y k|baw|kal|a m|g n|ing|wat| y |t t|pam|a n|o y|ban| la|ali|san|wal|mag| o |g i|aga|lay|any|g s|in |nya|yon|kas|a s|isa|una|ong|aan|kat|t p| wa|ina|tay|ya |on |o m|ila|ag |nta|t n|aba|ili| ay|o a| ga|no |a i|gal|ant|han|t s|kap|kak|lah|ari|agt|agp|ran|g l|lin|as |lal|gaw|ans|to |ito| it|hay|wa |t m| is|pap|mam|nsa|ahi|nag|bat|lip|gta| di|gay|gpa|pin| si|ngk|ung|aki|y n|iti|tat|ano|yaa|y s|mal|hat|kai|sal|hin|uma|mak|di |agi|pun|ihi|a l|i a|ira|gga|nah|s n|ap | ha|usa|nin|o p|gin|ipu|ika|ngi|i n|lag|la |y p|ini|g t|uka|nap| tu|a g|tas|aru|ipa| ip|li |al |n o|a o|t k|alo| pi|sin|syo|asy|ita|aho|nar|par|o s|pak|t a|uha|sas|gsa|ags|kin|a h|iba|lit|ula|o n|nak|a t| bu|duk|kab|sam|g e|ain|ami|mas|lab|ani|kil|it | al|agb|buh|a b|g g|ba | ib|iyo|ri |yag|ad | da|edu| ed|anl|ma |ais|iga|mba|tun|ipi| ki|od |ayu| li|lih|sar|gi |g w|pah|wir|oob|loo|agg|nli|bay|map|git|mil|ok |hon|ngg|sah|iya|pas|g h|agl|tar|ngu|amb|uku|ayo|s a|p n|n m|rus|i m|l a|abu| aa",
        hun: "en | sz| va| a |\xE9s |min|ek | \xE9s| mi|jog| jo|an |ind|nek|sze|s\xE1g|nde|a v|den|oga|sza|val|ga |m\xE9l|ala|em\xE9|gy |n a|van|zem|ele| me|egy|\xE9ly| eg|zab|t\xE1s| az|n s|bad|aba|ni |az |gye| el|ak | se|meg|sen|\xE9ny|s\xE9g|k j|yne|lyn| ne|ben|lam|tt |t a|et |agy|oz |hoz|vag|zet| te|n m|ez |nak|int|re |et\xE9|tet|mel|tel|s a|em |ely|let|hez| al|s s| ki|ete|at\xE1|z a| le|yen|es |ra |t\xE9s|ell|nt |sem|t s|len|nem|a s|ese|nki|enk|a m|\xE1s\xE1|i m|ban|kin|k m|szt| \xE1l|ame|k\xF6z|k a|ds\xE1|ads|l\xF3 | k\xF6|\xE1s |ly |on |\xE9be|tat|a t|n v|\xE1ll|m\xE9n| v\xE9|nye|k\xFCl|l\u0151 |a n| cs|i \xE9|ok |\xE9sz|\xE9rt|lla|lap|\xE1go|gok|nyi|tek| ke|nd |\xE9te|ami|z\xE9s|yes|szo|t m|a a|het|fel|lat|lem|lle|el |z e|s e|k \xE9|mbe|emb|el\xE9|ot |lis|vet|kor|\xE1g |olg| am|sz\xE1|ehe|leh|ogo|ott|\xFCl |nte|\xE9le|i v|ogy|hog| ho|kel|n k|tes|nl\u0151|enl|ss\xE1|\xE1za|h\xE1z|\xE9g |vel|\xE1ba|lek|\xE9ge| ha|a h|r\xE9s| fe|\xE1ny|del|el\u0151|\xE1t |al\xE1|art|tar|zto|z\xE1s|t\u0151 |yil|koz|tko|al\xF3|s k|i e|\xE1rs|t\xE1r|mze|emz| ny|m\xE1s|ett|ny |fej|ass|zas| h\xE1|d a|t \xE9|is |\xE9s\xE9|ez\xE9|t\xE9b| mu|\xE1so|s\xEDt|lye|elm|\xE9de|v\xE9d|ine|t k|os |it |izt|biz| bi|y a|m l|tot|a j|atk|n\xE9l|t n|ti | m\xE1|ai |l\xE1s|eve|nev|zte| b\xE1|sel|ll |al |ere|n e|unk|mun|t e| ak|ife|kif|ako|s \xE9| \xE9r|\xE1na| es|s t|got|s\xFCl| be|v\xE1l|csa|se |\xE9se|ad |ges|tos|ja | gy|asz|ten|lm\xE9| t\xE1|eze|\xE1rm|b\xE1r|ess|l s|\xFCle",
        azj: " v\u0259|v\u0259 |\u0259r |ir | h\u0259| bi| h\xFC| ol|\xFCqu|h\xFCq|quq|na |in |lar|h\u0259r|d\u0259 | \u015F\u0259|bir|l\u0259r|lik|mal|r b|lma|r h| t\u0259|\u0259xs|\u015F\u0259x|\u0259n |dir|uqu|una|an |ali|a m| ma|ikd|ini|r \u015F|d\u0259n|ar |il\u0259|qun|aq |as\u0131| ya|m\u0259k|y\u0259t| m\u0259| m\xFC|kdi|\u0259si|\u0259k |ilm|nin|nd\u0259|olm|\u0259ti|\u0259 y|sin|xs |nda|lm\u0259|yy\u0259|i v| qa| az|olu|iyy|ya |ind|zad|qla|\xFCn |ni |l\u0259 |tin|n m|aza|ar\u0131|\u0259t |n t|maq|lun|l\u0131q|\u0259 b|un |nun|q v|n h|dan|\u0131n | et|tm\u0259|\u0259r\u0259| \xF6z|da |\u0259 v| on|\u0259 a|\u0131na|\u0131n\u0131|bil|a b|s\u0131 |il |\u0259mi|ara|si | di|\u0259 m|\u0259ri|rl\u0259| va|\u0259 h|etm|\u0131\u011F\u0131|ama|dl\u0131|adl|rin|b\u0259r|r\u0131n|n i|m\xFCd|n\u0131n| he|mas|ik |n a|dil|al\u0131|irl|\u0259l\u0259|\xFCda|s\u0131n|\u0131nd|xsi|li |\u0259 d|n\u0259 | b\u0259|\u0259ya| in|\u0259 i|l\u0259t| s\u0259|n\u0131 | i\u015F|an\u0131|e\xE7 |he\xE7|q h|eyn|\u0259 e|d\u0131r| da|asi|r\u0131 |i\u015F |ifa|l\u0131\u011F|i s|fi\u0259|afi|daf| ed|m\u0259z|u v|kil| ha|ola|n v|\u0259ni|\u0131r |uq |unm| bu| as|sia|osi|sos|ili|\u0131d\u0131|l\u0131d|nma|\u0131q |in\u0259|\u0259ra|sil|xil|axi|dax|ad\u0259|man|a h|\u0259 o|onu|a q|\u0259z | ki|se\xE7| se|\u0131 h|min|lan|\u0259d\u0259|bu |raq|l\u0131 |\u0131l\u0131|al |\u0259 q|r v|nla|hsi|\u0259hs|t\u0259h|\xF6z |ist| is|m\u0259s| \u0259s|ina|\u0259 t|\u0259tl|a v|i\u0259 |n b|t\u0259r| ta| c\u0259|edi|ala|kim|qu |i t|ulm|m\u0259h|n o|aya|\u0131 o|ial| so|ill|siy| d\u0259|var|ins|mi |\u011F\u0131 |nik|r i|aql|k h|t\u0259m|tam|\xE7\xFCn|\xFC\xE7\xFC| \xFC\xE7|\u011F\u0131n|sas|\u0259sa|z h|\u0259m\u0259|zam| za|sti|r\u0259f|n e|r a|ild|h\u0259m|\u0131ql|yan|may|n \u0259|m\u0259n|mil| mi|\u0259qi|din|n d|t\xFCn| d\xF6|miy|kah|ika| ni|fad|tif|l o|s\u0259r|yni| ey|ana|l\u0259n|am |ril|ay\u0259|a\u015F\u0131",
        ces: " pr|n\xED | a | ne|pr\xE1|r\xE1v|na |ost| po|ho | sv|o n| na|vo |neb|\xE1vo|bo |ebo|nos|m\xE1 | m\xE1|a\u017Ed|ka\u017E| ka| ro|ch |d\xFD |\u017Ed\xFD|ti |ou |a s| p\u0159| za|\xE1n\xED|\xE1 p| je| v |svo|\xE9ho| st|\xFD m|sti|n\u011B | by|obo|vob|ter|pro|en\xED|bod| z\xE1| sp|\xED a|rod|kte|by |mu |u p|o p| n\xE1|v\xE1n|jak| ja|a p|o v|\xED n|ov\xE1|oli|v\xED |spo|roz| kt|mi |\xED p|ny | ma|\xEDm |i a|do | so|odn|\xE1ro|n\xE1r|li |n\xE9 |tv\xED|at |\xFDch|a z| vy|byl|vol|en |\xFDt |b\xFDt| b\xFD|t s|tn\xED|stn|o s|\xED b|to | do|sv\xE9|v\xE9 |ran|ejn|z\xE1k|eho|jeh|nes|p\u0159\xED|m\xED |\u010Din|kol|aj\xED|sou| v\u0161|\xEDch|it |n\xFDm|\xFDm |nu |hra|nou|u s|\xE9mu| k |du |\u017Een|pod| ze|kla|a v|stv|pol|dn\xED|er\xE9|m p|st\xE1|je |ci |e\u010Dn| ni|n\xE9h|a n|ak\xE9|\xE1va|maj|em |rov|\xED m|k\xE9 |ole|n\xFDc|ova| ve|ako| ta|i k|chr|och| oc|kon|i p|\xED v|sm\xED|esm|kdo|st |i n|o z|ave|odu|bez| to|sta|ech|j\xED |o d|sob|se | se|\xED s|\xFDmi|i s| i |i v| vz|n\xEDm|pra|ln\u011B|p\u0159i|t\xE1t|ste|a j|aby| ab| s |oln|a o|m n|\u010Den|slu|\u0159\xEDs| os|zem|mez| \u010Di|ln\xED|\xE1ln|oci|jin| ji|y b|\xED z|y s|va |v\u0161e|t v|ovn|chn|d\u011Bl|n\xEDc|le\u010D| pl|vat| vo|vin|rav|vou|lad|inn|\xE9 v|anu|tej|u k|stu|est| tr|ky |ikd|nik|ivo|nit|zen|u o|n\xE9m|nez|i\xE1l|\xEDho|len|ens|o\u017Ee|oko|k\xE9h|rac|ven|\xED k|e s|l\xE1n|\u011Bl\xE1|zd\u011B|vzd|t k|din|odi|t\xED | od|r\xE9 |tup|pov|pln|\u0161t\u011B|\xE1kl|nno|tak|er\xE1|\u0159ed|o a|a t|res|j\xEDc| mu|u z|rok| ob|\u010Dno|u a|y k|i j|\xE9 n|lu\u0161|\xEDsl|oso|ci\xE1|soc|n\xEDh|o j|ck\xE9",
        run: "ra |we |wa |e a| mu|a k|se | n | um| ku|ira|ash|tu |ntu|a i|mu |umu|mun|unt|ere|zwa|ege|ye |ora|teg|a n|a a|ing|ko | bi|sho|iri| ar| we|shi|aba|e n|ese|go |a m|o a|gu |uba|ngo|nga|hir| ca|ugu|obo|hob|za |ndi|ish|gih| at|ara|wes| kw|ger|ate|a b| ba| gu|e k|can|ama|ung|bor|u w|mwe|di | ab|nke|ke |kwi|ka |ank|yo |ezw|n u|na |iwe|e m|rez|ri |a g|gir| am|igi|e i|ro |a u|ngi|e b|ban| ak| in|ari|n i|hug|ihu|e u|riz|ang|nta| vy|ata| ub|and|aka|rwa| nt|kur|ta |iki|kan|iza|u b|ran|sha|o n|i n| ig|ivy| iv|ahi|bah|u n|ana| bu| as|aku|ga |uko|o u|ho | ka|ose|ubu|ako|guk|ite|o y|ba |i b|any|kir|o k|aho|iye|kub|amw|nye|aha| ng|o m|nya| it|re | im|o b|izw|kun|hin|e c|vyo|o i|vyi|ngu|uri|imi|imw|gin|ene|u m|zi |ha |kug|bur|uru|jwe| zi|u g|era|aga|ron|abi| y |e y| uk|gek|ani| gi|eye|ind|wo |u a|i a| ib|i i|ras|bat|gan|amb|n a|onk|rik|ne |ihe|agi|kor| ic|ze |tun|ibi|wub|nge|o z|tse|nka|he |rek|twa|gen|eko|mat|ber| ah|ni |ush|umw| bw|mak|bik|ury|yiw|bwo| nk|ma |no |kiz|uro|gis|aro|ika| ya|gus|y i|wir|ugi|uki| ki|a c|ryo|bir| ma| yi|iro|bwa|mur|eng|ukw|hat|tan|utu|wit|w i| mw|y a|mbe| ha|uza|ham|rah| is|irw|o v|umv|ura|eny|him|eka|bak|bun| ny|bo |yig|kuv|wab|key|eke|yer|vye|i y|ita|ya |a r| ko|kwa|o c",
        plt: "ny |na |ana| ny|a n|sy |y f|a a|aha|ra | ma|nan|n n|any|y n|a m|y m|y a| fi|an |tra|han|ara| fa| am|ka | ts| na|in |ami| mi|a t|olo|min|man|iza|lon| iz|fan| ol| ha| sy|aka|a i|reh|ay |ian|tsy|ina| ar|on |o a|etr|het|ona|y o|o h|zan|y t|a h|ala| hi|a f|y h|ehe|ira|a s|zo |y i|ndr|jo | jo|n j| an| az|ran|dia| dr|y s|fah|ena|ire|tan|dre| zo|mba| ka|m p|afa| di|n d|and|azo|zy |amp|ia |ren|iny|rah|y z|ry |ika|oan|ao |amb|lal|ho | ho|isy|ony|tsa|asa|a d|ha |fia|mis|ava|ray| pi|am |dra| to|rin| ta|ant|eo |zay|rai|tsi|itr|sa | fo| ra|van|ova|nen|azy| vo|mpi|ari|o f|tok|a k| ir|kan|oto|mah|ly |sia| la|n i|voa|haf|a r|ito|y k|oka|y r|y l|ano|ita|ene|its|ial|zon|aza|ain| re| as|fot|aro|fit|nat|nin|aly|har| ko|ham| no|fa |ary|atr|ila|ata|iha|nam|kon|oko| sa|elo|nja|anj|ive|isa|oa |dy |y d|o m|nto|ank|o n|otr|pan|fir|air|sir|ty |a v|sam|o s|tov|mit|rak|reo|o t|pia|tao| ao|no |y v|iar|a e|a z|hit|hoa| it|to |za |ton|eha|end|vy |idi|tin|ati|adi|lna|aln|rov|ban| za|nga|hah|oni|osi|sos|vah|ino|ity| at|hia|pir|ifa|omb|ame|era|vel|kar|va |tso|jak|fid|ifi|ais|o i|idy|la |ama|ba | pa|tot|ani|rar|mpa|haz|kam| eo| il|iva|aho|nao|n k|ato|lah|ovy| te|dro|lan|ela| mo| si|fin|miv|san|koa| he|aso| mb|sak|kav",
        qug: "ta | ka|ka |na |una|cha|ash|ari|a k|ana|pak|ish|ach|hka|shk|mi |kta|hay|man| ch|apa|ak |rin|ata|kun|har|akt|ita| ha|ami|lla| pa|ama|pas|shp| ma|tak|ay\xF1|y\xF1i|in |sh |ina|uku|nka|chi|aka|a c|yta|kuy|all|tap|a h|kan| tu|\xF1it|tuk| ru|run|chu|an |pay|ayt|ris| ki|aku|hpa|ank|a p|kam| sh|nam|a s|uy |i k|ayp|nak|pi |nta|a m| li|ay |lia|hin|kaw|nap|ant|tam|a t|iri|nat| wa|y r|kay|aws| ya|n t|ypa|wsa|pa |lak|shi|a a|lli|iku|hu |n k|iak|yay|kis| al|shu|a w|ipa| sa| il|api|kas|yku|yac|kat|a r|huk|i c|wan|hik|a i|ill|ush| ti|ayk|hpi| ku|kac|say|hun|uya|ila|ika|yuy|pir|ich|mac|ima|a y|yll|ayl|i p|kin|a l| wi|kus| yu|lan|tan|llu|kpi| ta| pi|aya|la |yan|awa| ni|kak|lat|rik|war|ull|kll|li |ink|nch|un |akp|n s|may| ay|uch|i s|nac|sha|iki|kik|h m|ukt|pip|tin|n p|iya|nal|aki| ri|ura|tik|mak|ypi|i m|i w|n m|his|k i|riy|iwa|y h| hu|han|akl|k t|mas|pik|kap| \xF1a|u t|nmi|nis|k a|i y|k l|kar| im|i i|wil|yma|aym|ksi|iks|uma| su|h k|has| ak|unk|huc|kir|anc|k m|pal|k k|ik |i\xF1i| i\xF1|ma |n y|mun| mu|mam|tac|a n|i t|k r|sam|ian|asi|k h|was|ywa|iyt|llp|san|sum|ray|si |pan|nki|tar| ii|u k|\xF1ik|uk |i\xF1a|kuk|wpa|awp|akk|a u|wat|uri| mi|yar|uyk|ayw|h c|ha |tay|rmi|arm|uta|las|yka|llk|kul|wi\xF1|ati|ska| ll|kit|n h|uti|kic|mat",
        mad: "an |eng|ng |ban| sa| ka|dha|ren| se| ba|ak | ha|adh|hak| dh|ang|se | pa|aba|a s|na |aga|ha | or|n s|ore|ara| ag|gad|are|ana|n o|ngg|ale|gan|a k|ala|dhu|tab|sar|ota|asa|eba| ot| ke|sab|ba |wi |uwi|abb|i h|huw|aan|n k|a b|bba| ta| ma|pan|hal|bas|ako|dhi|ra |kab|em |beb|ka |lak|gi |lem|g a|eka|n b|ama|nga|san|at |ong|ran|nge|a o|ggu|sa |a d|ane|n p|ken|par|aja|man|gar|ata|nek|apa| na|agi|abe| ga|e e|sal|a a|tan|g s|al |kal|gen|ta |i s|aka|e a|a p|a e| la| pe|nan| an|era|e d| e | be|n a| al|ena|uy |guy|n n|ate| bi|mas|e k|kat|uan|oan|kon|k k|a m|i d|g e|n t|g k|ada|koa|lan|ela| da|bad|ma |ne |as |lab|ega| mo|ar |car|one|i p|bi |kaa|bat|ri |on |pon| so|e b|le |ah |abi|ase|adi|epa| ep|k h|and|pam|te |ok |ste|aon|om |oko|aha|ari|ona|asi|ter| di|di |pad|e s|sad|yar|neg|ton|set|rga|ost|mos|gap|nda|a l|har|i k|ina| a | ng|kom|isa|si |a t|a h| kl|jan|daj|iga|hig|idh|hid|ndh|n m|ngs|tto|ett|arg|la |k b|ler|k d|nna| to|nao|n d|mat| ca|tad|bis|aya|epo|aen| po|bin|nya|kas|k s|n h|sya|nta|gsa|en |ant|n g|kar|i e|das|e t|e p|iba| pr|g p| ho| el|i a|hi |os |sao|uwa|tes| ja|nag|nas|lae|sia|t s|k o|nto|int|yat|arn|m p|duw|adu|eta| ko|i b|ni |g n|kla|rak|ame|mpo|jua|sok|aso|ggi|eja|pel|jam|ele| et|dil",
        nya: "ali|ndi|a m|a k| nd|wa |na | al|yen| ku|nth|ra |di |se |nse| mu|a n|thu|hu |nga| wa|la |mun|u a|unt|iye| ka|ce |ace| lo|a l|ang|e a| la| pa|liy|a u|ens| ma|idw|ons|dwa|e m|i n|ala|kha|lo |li |ira|era|ene|ga |ana|za |o m| mo|yo |o w| ci|we |dzi|ko |o l|and|dan|hal|zik|chi|oyo|pa |ner|ulu|ena|moy| um|a p| da|ape|kap|ka |iko| an|pen|a c|to |ito|hit|nch| nc|iri|lir|wac|umo|e k|lu |a a|aye| dz|kuk|a z|dwe|tha|mal| za|ing|ufu|mu |ro |ful| uf|o c|i d|lin|e l|zo |edw| zo|o a|mwa|u w|iro|o n|lan|amu|ere| mw|nzi|dza|alo|ri | li|fun|lid|gan|so | ca|kul|ofu|nso|o z|ulo|unz|o k|mul|lam|i c|san|a b|kwa| na|a d| a |una|u k|i l|nkh|ant|aku|ca |cit|oli|ipo|dip|ama|lac|wir|han|yan|osa|uli|tsa|i m|pon|kup|u d|ti |gwi|ukh|ung|hun|lon|ank|nda|iki|ina| ko|ao |diz|phu|ati|oma|i a|tsi|pat|iya|siy|kut| ya|zid|eze|ma |i k|mer|ome|mol|u n|u o|aph|ogw|izo|mba|sid|ku |sam|awi|adz| ad|izi|ula|say|e n|khu| kh|rez|vom|bvo|okh|lok|win|akh|o o| am| on|zir|map| zi|eza|ja |go |ngo|ika|its|ats|osi|gwe| co|isa|ya |haw|ani|o p|zi |ndu|kho|ezo|kir|uni|i u| ay|lal|gal|sa |bom| bo|ola|amb|wak|ha |ba |nja|anj|ban| ba|iza| bu|udz|ngw|bun|oye|o d|nal|kus|i p|i o|i y|wi | nt|e p| si|aka|ne |men|jir|nji|sed|ets|end|eka|uma|du ",
        zyb: "bou|iz |aeu|enz|eng|uz | bo|ih |oux|nz | di|ing|z g|ux |uq |dih|ngh| ca|ng |gen|ung|z c| mi|miz|ij |cae|z d| gi| de| ge|euq|you| ci|ngz|ouj|aen|uj | yi|ien|gya| gu|ngj|mbo| mb|zli|dae|gij|cin|ang|j d|nae| se| ba|z y|euz| cu|de |x m|oz |j g|ouz|x b|li |z b|h g| da| yo|nj |xna|oxn|rox| ro|h c|nzl|vei|yau|wz |z m|ix | si|i c|iq |gh |j b| cw|nda|yin| hi| nd|dan|vun|inh| ga|can|ei |cun|yie|q g|hoz|bau| li| gy|wyo|cwy|z h|gue|gz |gun|faz|unz|yen|uh |den|ciz| go|q c|gj | bi|ej |aej| fa|hin|zci| wn|j n|goz|gai|au |z s|q d| vu|h m|gva|hu |auj|ouq|az |h d|ya |uek|ci |nh |u d|ou |sou|jso|gjs|din|awz|enj| do|h s|eve|sev|z r|nq |sin|nhy|g g|g b|liz|kgy|ekg|sen|eix|wng|lij|ngq|bin|i d|ghc| ha|bae|hix|h y|j c|ghg|i b|ouh|en |n d|h f|j s|z v|j y|law|hci|anh|inz|q y|nei|anj|ozc|ez |enh|q s|aiq|uen|zsi|zda|hye|ujc|e c|siz|eiz|anz|g y|i g|q n|bie| ne| ae|giz|u c|hgy|g d|gda|ngd|cou| la|z l|auy|ai |in |iuz|zdi|jhu|ujh|yuz| du|j m| fu|cuz|eiq|g c|gzd| co|uyu|coz|zbi|biu| dw|i s|i n|aw |dun|yun|izy|daw| he|nho| ho|enq|x l|cie|q b|cij|uzl|x d|iuj|awj| ya|eij|dei|nde|sae|izc|wnq|wnh|sei|h b|aih|gzs|bwn|a d|u g|ngg|jca|e b|ran| ra|hcu| me|iet|van| bu|guh|hen|si |wnj| ve|u b|azl|inj|gak|gan|ozg|siu|yaw|i m",
        kin: "ra | ku|se | mu|a k|ntu|tu |nga|umu|ye | um|unt|mun|e n| gu|we |ira|a n| n |wa |ere|mu |ko |gom|a b|e a| ab|li |e k|mba|a a|e b|aba|ga |e u|ba |omb|o k| ba|a u|ose|u b|o a| cy|ash|eng| ag|kwi| bu|za |gih|ren|ndi| ub|ang|yo |aka|gu |igi| ib|a g|a m| nt|uli|o b|ama|ihu|e i|nta| ak|ago|ro |ora| ka|ugu|hug|di |iye|ban| am|cya|ku |ta | bw|and|sha|re | ig|gan|ubu|na | kw|obo| by| bi|a i|yan|ka |sho|kub|era|ese| we|kan|aga|hob|bor|ana|byo|ura|uru|ibi|rwa|wes|u w|no |uko|i m|mo |u a|ure|ili|uba|o n|uha|uga|n a| im|ish|bwa|bwo|wiy|ali|ber|ze |ne |ush|are|o i|u m|ger|bur|ran| ki| no|ane|bye| y |ege|teg|guh| uk|n i|rag|i a|ya |u g|e m|anz|bo |abo|gar|wo |y i|ho |age|ind|o m|eke|a s|ara|zir|ite|kug|kim|aci| as|u n|ani|kir|mbe| gi|yos|kur|ugo|gir|e c|iza|aho|i b|tur|ata|o u| se|u u|zo |i i|aha|nge|mwe|iro|akw|any|eza|uki|imi|o y|ate|u k|iki|atu|bat| in|go |tan|n u|bos| bo| na|hak|iby| at|ihe|ung|ha |bul|kar|eye|eko|gek|nya|o g|shy|e y|awe|ngo|bit|mul|nzi|rer|bag|ge |imw|bah|cir|gac|bak|je |gez|imu|eze|tse|ets|mat| ru|irw|he | ni| ur| yi|ako|ngi| ng|i n|rez|ubi|gus|fit|afi|ugi|uka|amb|o c|utu|ufa|ruk|mug|bas|bis|uku|hin|e g|ige|amo|ing| af|yem|ni | ry|a r|gaz|te |erw|bwe|ubw|hwa|iko| al|ant|zi ",
        zul: "nge|oku| ng|a n|lo |ung|nga|la |le | no|elo|lun| um|e n|wa |we |gel|e u|ele|nel|thi|ke |nom|ezi|ma |ntu|oma|hi |o n|ngo|tu |nke|onk|o l|uth|ni |a u|lek|unt| wo|o e| lo|mun|umu|pha| ku|ang|ho |kwe|ulu| ne|won|une|lul|elu| un|a i|gok|kul|ath|hla|lok|khe|eni|tho|ela|zwe|akh|kel|a k|enz|ana|ban|aka|u u|ing|ule|elw|kho|uku|ala|lwa|gen| uk|wen|ama|na |e k|ko |gan|a e|he |zin|enk|o y| ez|kat| kw|lan|eth|het|o o| ok|okw|i n|nzi|aba|e a|hak|lel|lwe|eko|ane|ka |so |yo |ayo|o a|uhl|nku|nye| na|thu|mph|do |ben|ise|kut|ike|kun| is| im|hol|obu|fan|i k|e w|nhl|nok|ini|and|kuh|ukh|kuk| ak|e i|isi|aph|zi |ile|eki|ekh| ba|eka|the|a a| le| ye|kwa|e e|fut| fu|za |mal| ab|ebe|isa| em|o w|kub|mth|i w|ndl|emp|any|olo|ga | ko|nen|nis|alu|ith|eli|ndo|seb|nda| ya|i i|eke|vik|ake|uba|abe|ezw|yok|ba |ale|zo |olu|ume|ye |esi|kil|khu|yen|emi|nez|hlo|a l|ase|ula|kek|a o|iph|o u|no |azw|kan|mel|uny|ne |ufa|ahl|lin|hul|ant|und|sa |enh|kus|kuv|lak| in|o i|din|kom|amb|zis|ind|ola|uph|wez|eng|yez|phe|phi|mba|nya|han|kuf|nem|isw|ani|iyo| iy|fun| yo|uvi|i a|ene|izi| el|cal|i e|eze|ano|nay|hwe|kup|lal|uyo|ubu|kol|oko|ulo| la|e l|tha|nan|mfu|hon|nza|hin| ey|omp|da |bo |ilu|wak|lon|iso|kug|nka|ink|i l|sek|eku| ek|thw|gez",
        swe: "ar |er |tt |ch |och| oc|ing|\xE4tt|ill|r\xE4t|en | ti|til|f\xF6r|ll | r\xE4|nde| f\xF6|var|et |and| en|ell| ha|om |het|lle|lig|de |nin| de|ng | in| fr|as |ler| el|gen|nva|und|att|env|r h| i |r r|ska|fri| so|har|der| at|\xF6r |ter|all|t t| ut|den|ka |lla|som|av |sam|ghe|ga | sk| vi| av|ete|la |ens|t a| si|r s|iga|igh|tig| va|ig |a s| st|ion|ra |tti|a o| \xE4r|ten|ns |t e|na | be|han| un| an| sa|a f| la| gr| m\xE5|nge|n s|vis|lan|m\xE5 |ati|nat| \xE5t|an |nna| li| al|t f|ans|nsk|sni|gru|\xE4ll|tio|ad | me|isk|kli|s f|t i|st\xE4|t s|ri |med|sta|h r|lik|da |dig|ta |r o|run|on | re|lag|tta|\xE4r |kap|a i|a r|\xE4nd|erv|n e|kte|n f|rvi|nom|itt|id | mo|sky|r e|ver|\xE4ns|vil|gt |igt| na|tan|uta|dra|t o|ro |isn| fa|kal|ihe|rih|erk|r u|e s|per|l v|vid|one|rel|ber|ran|ot |mot|ndl|d f|ed |ika|m\xE4n|l s|bet|t b|dd |ydd|kyd|n o|s s|str|n m|tet|sin|r f| om|rna|int|r i|end|nad|l a|ap |ers|nda|t v|ent|rbe|arb| h\xE4|ets|h\xE4l|amh|ckl|gar|nga|r m|je |rje|arj|n i|s e|lin|r t|i s|r\xE4n| pe|ilk|t l|ern|p\xE5 | p\xE5|t\xE4l|d e|dom|ege|g e|tni|r a|lit|ras| s\xE5|lln|kil|ski|enn|i o|a d|er\xE4|n a|ara| ge|\xE4ro|a m| ar|t d|ilj|els|yck| ve|g o|fr\xE5|nas|tra|ess|del|m s|liv|l l|in |v s|g a|ast|e e|val|son|rso|e t|age|nd | eg|ial|cia|oci|soc|upp|igi|eli|g s|rkl|gad|ndr|nte|\xF6ra",
        lin: "na | na| ya|ya |a m| mo|to | ko|li |a b| li|o n| bo|i n|a y|a n|ki |a l|kok|la | ma|zal|i y|oki| pe|ngo|ali|pe |so |nso|oto|ons| ba|ala|mot|a k|eng|nyo|eko|o e|nge|yon| ny|kol|lik|iko|a e|o y|ang|ye | ye|oko|ma |o a|go | ek|ko |e m|aza|te |olo|sal|ama|si | az|mak|e b|lo | te|ta |isa|ako|amb|sen|ong|e n|ela|oyo|i k|ani| es|o m|ni |osa| to|ban|bat|a t|mba|ing|yo | oy|eli|a p|mbo|o p|mi | mi| nd|ba |i m|bok|i p|isi|mok|lis|nga|ge |nde|koz|bo |gel|ato|o t|mos|aka|oba|ese|lam|kop| ez|lon|den|omb|o b|ota|sa |ga |e a|e y|eza|kos|lin|esa|e e|kob|e k|sam|kot|kan|bot|ika|ngi|kam|ka | po|gom|oli|ope|yan|elo| lo|ata| el|bon|oka|po |bik|ate| bi|a s|i t|i b|omi|pes|wa | se|oza|lok|bom|oke|som|zwa|mis|i e|bek|iki| at|ola|ti |ozw|lib|o l|osu|oso|e t|nda|ase|ele|kel|omo|bos|su |usu|sus|bal|i l|ami|o o|bak| nz|pon|tel|mob|mu | ep|nza|asi|mbi|ati|kat|le |gi |ana|oti|ndi|tan|a o|wan|obe|kum|nya|mab|bis|nis|opo|tal|mat| ka|bol|and|aye|baz|u y|eta| ta|ne |ene|emb|sem|e l|gis|ben| ak| en|mal|obo|gob|ike|se |ibo|\u2019te| \u2019t|umb| so|mik|oku|be |mbe|bi |i a|eni|i o| mb|tey|san| et|abo|ebe|geb|eba|yeb|bu | as|ote|sik|ema|eya|ibe|mib|ai |pai|mwa|kes|da |may|boz|amu|a a|kom|mel|ona|ebi|ia |ina|tin| ti|bwa|sol|son",
        som: " ka|ka |ay |uu |an |yo |oo |aan|aha| wa|da | qo| in| u |sha| xa|a i|ada|iyo| iy|ma |ama| ah| la|qof|aa |hay|ga |a a|a w|ah | dh|a s| da|in |xaq| oo|a d|aad|yah|eey| le|isa|lee|u l|q u|aq | si|taa|eya|ast|la |of |iya|sa |y i|u x|sta|kas|xuu|uxu|wux| wu|iis|nuu|inu|ro | am| ma|a q|wax|dha|ala|kal|nay|f k|a k|le |ku | ku| sh|o i|a l|ta |maa|a u|dii|loo| lo|o a|ale|ara|ana|iga|o d| uu|ha |lo |o m|o x|doo|aro|kar|yaa|gu |si |ima|na | xo| fa|adk|do |a x|ad |aas| qa| so|a o| ba|lag| aa| he|dka|adi|soo|o k|aqa| is|ash|u d|had| ga|eed|san|u k|a m|iin|i k| ca|u s|n l|yad|rka|axa|elo|hel|aga|hii|o h|o q| ha|id |n k| mi|baa| xu|har|xor|aar|ax |mad|add|nta|mid|aal|waa|haa|ina|qaa|daa|agu|ark|o w|nka|u h|dad|ihi| bu| ho|naa|n a|ays|haq|a h|o l| gu|o s|aya|saa|lka| ee| sa|dda|ab |nim|quu|gga|ank|kii|rci|arc|n s|a g| ji|gel| ge|eli|ysa|a f|siy|int|laa|uuq|uqu|xuq| mu|i a|uur|mar|ra |iri|o u| ci|riy|ya |ado|alk|dal|ee |al |rri|ayn|asa| di|ooc|aam|ofk|oon|to |ayo|dar| xi|dhi|jee|a c| ay|yih|a j|ban|caa|lad|sho|d k|ida|uqd|agg|sag|ras|bar|ar | ko| ra|o f|gaa|gal|fal|u a| de| ya|o c|ii |xay|eel|aab|sig|aba|orr|hoo|u q|y d|ed |ho |sad|qda|h q|fka|n i|xag|n x|qay|lsh|uls|bul|u w|jin| do|raa| ug|ido|ood",
        hms: "ang|gd |ngd|ib | na|nan|ex | ji|eb |id |d n|b n|ud | li|nl |ad | le|jid|leb|l l| ga|ot | me|x n|anl|aot|mex|d g|b l|d d|ob |gs |ngs|jan| ne|ul | ni|nja| nj|lib|ong|nd | zh|jex| je|b j| sh|ngb| gh|gb | gu|gao|l n|han| ad|gan| da|t n| wu|il |x g|nb |b m| nh|she|is |l j|d l|nha|l g|d j|b g|el |end|wud|nex|gho|d s|d z|oul|hob|ub |nis| ch| ya|it |b y|eib| gi|s g|lie| yo| zi|oud|s j|d b|nx | de|es |d y| hu|uel|gue|ies|aob|you| ba|d m|chu|gia|dao|b d|s n|zib| go|zha|eit|hei|al |hud| do|nt |ol | fa|t g|hen|ut |gx |ngx|ab |fal|x j|b z|ian|d h|don|b w|t j|iad|nen| xi|gou|d c|b h|hao|x z|nib|anx|ant|gua| mi|s z|dan|ox |inl|hib|lil|uan|and| xa|b x| se|x m|uib|hui|d x|anb|enl| we|od |enb| du|at |ix |s m|bao| ho|hub| ng|zhi|jil|l s|yad|t m|t l|yan| ze| ju|heb|had|os |aos|t h|l d|nga| he|b a|xan|b s|sen|xin|dud|jul|d a|lou| lo|dei|d w| bi|b c| di|zhe|gt |ngt|x l|bad|x b| ja|hon|zho|blo| bl|d k| ma|deb|l z|wei| yi| qi|b b|x d|d p|eud| ge|x a|can| ca|t w|lol| si|hol|s w|aod|pao| pa|ren| re|x s|eut|pud| pu|aox|mis|gl |ngl|x w|zei|gon|enx|gha|s a|b f|l y|oub|eab|hea| to|did| ko|unb|ghu|t p|x c|geu|t s|x x|jao|ed |t c|l m|l h|jib|ax |l c|d f|nia| pi|eul|d r| no|min|l t|heu|ux |tou|ns |s y|iel|s l|hun",
        hnj: "it | zh| ni|ab |at |ang| sh|nit| do|uat|os |ax |ox |ol |nx |ob | nd|t d|zhi|nf |x n|if |uax| mu|d n|tab| ta| cu|mua|cua|as |ad |ef |uf |id |dos|gd |ngd|hit|ib |us |enx|f n|she|s d|t l|nb |ux |x z|ed |inf|b n|l n|t n|aob|b z| lo|ong|ix |dol| go|zhe|f g| ho| yi|t z|d z|b d| le|euf|d s|ut |yao| yo| zi|gb |ngb|ndo|enb|len| dr|zha|uab|dro|hox| ge|nen| ne|han| ja|das|x d|x c|x j|f z|shi|f h|il | da|oux|nda|s n|nd |s z|b g| ny|heu| de|gf |ngf| du|od |gox| na|uad| gu|inx|b c| ya|uef| xa| ji|ous| ua| hu|xan|hen|zhu|nil|jai|rou|t g|f d| la|enf|ged|ik | bu|nya|you|f y|lob|af |bua|uk |is |yin|out|of |l m|ud |hua| qi|ot |t s| ba|ait| kh|s s|nad| di|aib|x l|lol| id|dou|ex |aod|bao| re| ga|d d|b y|las|hed|b h|b s|f b|t y|jua| ju| dl|x s|hue|b l| xi|zif|dus|b b|x g|hif|x y|hai| nz|sha| li|x t| be|d j|und|hun|ren|d y|hef|xin| ib|b t|l d|aos|s l| ha|gai|nzh|gx |ngx| ao|s b|s x|el |gt |ngt|hik|aid|s t|x m|f l|f t| pi|aof|t r|eb | gh|s y|d l|gua| bi| za| fu|t h| zu|hou|deu|lb | lb|d g| mo|b k| bo|iao|ros|gon|eut|x h|al |uaf|hab|t t|k n|f x|hix|pin|yua| no|t b|ak | zo|s m| nb| we|d b|gha|f s|mol|euk|dax|l b|nof| ko|lou|guk|end|uas|t k|dis|dan|yol|uan|d t|x b|lan|t m| ch|jix|x x| hl|aox|zis|x i|et | ro",
        ilo: "ti |iti|an |nga|ga | ng| it| pa|en | ma| ka| a | ke| ti|ana|pan|ken|ang|a n|agi|a k|n a|gan|a m|a a|lin|ali|aya|man|int|teg|n t|i p|nte| na|awa|a p|na |kal|ng |dag|git|ega|sa |da |add|way|n i|n n|no |ysa|al |dda|n k|ada|aba|nag|nna|ngg|eys| me|a i|i a|mey|ann|pag|wen|i k|gal|gga| tu|enn| da| sa|nno| we|ung| ad|tun|mai| ba|l m| ag|ya |i s|i n|yan|nan|ata|nak| si|aka|kad|aan|kas|asa|wan|ami|aki|ay |li |i m|apa|yaw|a t|mak| an|i t|g k|a s|ina|eng|ala|ika|ama|ong|ara|ili|dad| aw|gpa|nai|et |yon|ani|aik|on |at |oma|sin|bal|ipa|n d|uma|g i|ket|ag |in |aen|n p|ram|sab|aga|nom|ino|lya|ily|syo|i b| ki|nia|agp|gim|kab|asi|kin|iam|ags|bab|oy |toy|n m|agt| ta|bag|sia|g a|gil|mil| um|o p|ngi|n w|i i|pad|pap|daa|iwa|naa|eg |ias|ed |nat|bae|o k|saa|san|pam|gsa|ta |kit|ma |dum|yto|tan|i e|t n|uka|t k|apu|lan|sta|sal| li|a b|ari|g n|den|mid|ad |o i|y a|ida|ar |aar|y n|dey| de| wa|a d|ak |bia|ao |tao|min|asy|mon|imo| gi|maa|sap|abi|i u|aib|kni|i l|gin|ged|o a| ar|kap|pul|eyt|abs|ibi| am|akn|i g|kip|isu|g t|bas|nay|ing|i d|kar|ban|iba|nib|t i|as |d n|y i|ura|a w|nal|aad|i w|lak|adu|kai|bsa|duk|edu| ed|may|agb|agk|tra|gge|sol|aso|agr|ngs|ian|ila|dde|edd|tal|aip|kua|umi|pay|sas|ita|pak|g d|ulo|inn|aw ",
        uig: "ish| he|ini|gha|in |ili| bo|sh |bol| we|ing|nin|we |shq|quq|oqu|hoq| ho|ush|ng |qa |ni |qil|hqa|en |lis|n b|dem|shi| ad|lik|ade|hem| qi|nda|ki |em |e a|iy |din|qan|igh|uq |ge |et |han|and| bi|ige|her|tin|olu|aq |ash|idi|luq|daq|erq|ha | te|let| ya|iti|liq|kin|me |mme|emm|rqa|lus|iki| qa|de | ba|aki|yak|uql|a h|men|rim|an | er|qlu| be|shk|du |d\xF6l| d\xF6|hri|ile|lgh|esh|q h|rki|erk|i w|uqi| me|\xF6le|ime|ehr|nli|iq |ara|ar |lar|a b| \xF6z|da |ik |i b|beh|hi |len|h h|ila|ayd|may|ke | ar|che|shl|nis|ydu|lin| k\xE9|bil| mu|e q| ig|er |olm|\xE9li|inl|tni|yet|lma|q a|ek |asi|hli|e b| as| sh|u h|hke|ali|ari|siy|shu|a i|e h| qo|rli|bir|emd| tu|ler|iye| is|ett|qi |i k|mde|he |bar|\xF6zi|etl|lid|tur|e t| al|nun|kil|tis|mni|qig|uru| je|ima|bas| ji|rek|\xE9re|k\xE9r|r b|raw|awa| ma|a a|anu|\xE9ti|ida|emn| bu|iqi|i y|jin| sa|e e| xi|mus|k h|iri|tes|ayi|nay|ina|dil|adi|i h|zin| \xE9l|she|i q|n h|hek|n w|min|n q|tti|ti | ch|ip |iya|\xE9ri|tid|his|alg|pal|apa|les|sas|asa|e m|p q|uch|niy|qti|siz|isi|n a|il |rni|uni|chi|tim| ij|ris|i s| xa|ir |ghu|met|n i|m i| ta|atn| pa|tle|lim|gen| de|ich|kap| ka|g h|q b|i a|\xFCn |h\xFCn|ch\xFC|\xFCch|q q|und|sht|sit|rus|lig| to| iy|ale|y m|e d|aiy|mai|jti|ijt|eli|i d|i t|si |rqi|e i|arl|hu |ami|rin| h\xF6|etn",
        hat: " li|ou |an |wa |li |on | po|pou|yon|te | yo|oun| mo|un |mou|en |ak | na|n p|nan| dw|dwa| ki| f\xE8|tou| pa| to| ak|ki |syo|se |yo |i p| ko|gen| ge|\xE8t | sa| la| se|out|n d|ut |pa |u l|n s|ite|n n| ch|n k| de|t p|n l|cha|kon|e l|e d| re|asy|nn |f\xE8 |a a|i s|ans|f\xE8t| a |a p|sa |swa|ni | ka|\xF2t |n y|t m|n a|i k|hak|pi |n m|ote|men| me| so|i l|a l|lit|epi| pe| si|enn|e p|e s| ep|nm |i t|yen|k m|t l|eyi| an| ni|e n| l\xF2|a f| ap|yi |pey|i a|son|l\xF2t|ns |san|e k|n e|ay |n t|man|ali| os|a s|e a| pr|al |e m|osw|n f|enm|sou| ma|ap |e y| ba|ran|a k| tr|lwa|n g|aso|lib|i d| p\xE8|ant|i g|la | ta|sos|i m|i n|ka |a c|a y|nal|anm| di|pwo| pw|ye |e t|je |k l|de | vi|ksy|t k|nen|ons|a t|alw|lal|ete| le|ta |res|ava|he |che|ati| fa|ken|oke| ok|tan|osy| pi|bli|le |tis|a g|kal|nas|a d|sye|l\xE8 |lek|a m|a n|u y|eks|re |\xE8 l|o p|tra|i f|onn|aye|way| en|ik |ze |kla|kou| sw|a r| za|ide|di |a b|vay|rav|p\xE8s|wot|ont|kot|k k|jan|o t|ona|ras|isy|sya|van|ib |\xE8 a| t\xE8|k a|p\xF2t| ne|pre|esp|\xF2l |\xE8so|ach|i o|it |ist|e r|is |s k|n o|\xE8te|u f|nsa|t a|dev|las|u t|nte| l\xE8|i r|l k| k\xF2|sip|tek|ri |pas|pra|k p|nt | ja| te|ond|yal|pan|fas|iti|fan|si | ra|u d|ife|dek|b\xE8t|ib\xE8|u k|ret|k\xF2l|ek\xF2|lon|wen|s a|vle| vl|ent| aj|ibl|ini|np\xF2|enp| as|\xE8 s",
        hil: "nga|ang| ka|ng | sa|ga |an |sa | ng| pa| ma|ag |on |pag| an|a p|san|n s|ata|a k|ung|kag|n n|a m|kat| ta|gan|ags|ay |tar|gsa|tag|g p|run|aru|a s|ala|g k|kon|g m|man|a t|ing|agp|n k| si|may|y k|g t|mga| mg|g s|a i|a n|mag|ya |gpa|sin|n a|uko|yon|la |hil| uk|od |gin|ina|ahi|g i|kas|syo|ili|g a|iya| gi|pan|ban|way|ana|tan| pu| in|lwa|ilw|in |asa|lin|n p|gka|aya|nan|han| iy|at |g n|wal|aha|apa|o m|al |a g|lan|aba|gba| wa|kah| na|o s|a a|kab|agk|pat|ong|no |ano|ngs|pun|yan|aki|isa|o n|ali|ini|agb|nag|aga|a d|a h|ngk|i s|asy|abu|dap| hi| da|aho|agt|n m|di |n u|sal|til|sod|gso|ni |uga|mat|bah|bat|asu|a b|ato|ati| la|iba|sil|ngo|uha| su|nah|ulo|na | ba|pas| pr|ida| di|ngb|aka| ko|gay|lal|paa|o a|d s|ton|agh|pro|y n|uan|bis|ot |asi|i m|ka | is|ksy|atu|him|ila|y s|tao|gi |agi|aag|aan|o k|non|k s|ula|sul|tek|sug|gua| bi|gon|yo |n d| ib|uli| du|duk|ho |iko|hin| ed|a e|bot|ind|do |ron|aro|i a|abi|lab|eks|ote|rot|ugu|to |mak|as |s n|n b| o |n o|ad |m s|gal|una| hu| tu|but|kal|ika|a l|yag|hay|pah|nta|int|ama|pam|hat| al|uka|edu|ko |g e|ghi|lik|ami|ndi|sta|ok |tok|tra|os |abo|om |alo|dal|kin|n t|hi |a w|i n|da |kda|akd|tak|lig|inu|t n|d k|ao |kaa|par|aay|rab|awa|kau|mo |gla|gko|d a|ado|g o|lo |lon",
        sna: "wa |a k|ana|na | mu|ro | ku|a m| zv|nhu|mun|hu |dze|oku|a n|aka|che|zer|unh| ch|chi|ero|kan|ka |odz|kod| ne|zvi|rwa| pa| an|se |ra |e a|nek|va |ane|o y| we|kut| ka|ke |ake|iri|dzi|eko| yo|cha|ese|ach|ika| no|zva|ngu|ano|yok|ri |wes|u w|ang|yik|nyi|eku|ung|idz|ech|uva| dz|ipi|a z|irw|van| va|nge|iro|wan|o i|ani|nga|ich|wo |eng|ti |udz|o n|tan|ira|a y|a c|dza|sun|vak|nok| ya|a p|kwa|i p|e k|ita|rir|ko |ga |hip|unu|hec|edz| ma|ara|bat|guk|nun|sha|zwa|dzw|hen|o m|zve|o c|mo |kuv|a d|eny|ema|uta|uti| rw|ta |ino|twa|o a|pac|dzo|yak|wak| kw|i z|kus|zir|kur|rus|ere|nem|e z|emo|tem|gar| ha| ak|o k|rwo|uko|mwe|ata|e n|we |o r|and|za |zo |a i|yo |da |pan|erw|ezv|pi |asi|rud|usu|hak|uka|han| ic|guv|pir|a a|ari|isi|emu|aan|uch|re |hur|kwe|ura| in|uru|oru|kub|fan|anh|ush|hek| ye|ute|ran| ac| iy|ong|mut|i m|a r|ina|sin|pas|ait|nor|uye| uy|a u|sa |asa|i i|era|nen|omu|uit|kui|u a| ny|kud|kuc|e m|aru|uwa|uba|nir|a s|cho|enz|ndi|aga|kun|i a|sva|ge |vin|get|hap|o z| wa|sar|o p|no |muk|itw|uri|mat|ama| ko|kuw|usa|ofa|nof|kuz|vo |a v|uma|mag|wen|e p|yor|pam|emh|swa| hu|ne |ye |ete|vic|uzv|ava|ose|si |ayo|mir|apa|ton|vem|nez|do |i h|adz|azv|zan|nza|zid|mum|imb|bas|mba|mus|iki|e c|osv|hos|mho|vis|ngo|ite",
        xho: "lo |nge|lun|oku|elo|ye |ung|nye| ng|nga|e n|la |tu |ntu| ku|a n|o l|ele|e u|lek|yo |gel|o n|nel|ho | na|ke |wa |a k| um| lo|ko |ulu|o e| ne|nke|onk|elu|any|mnt|we |ama|lul| kw|umn| wo|kub|ngo|une| no|eko|won|enz|ule| un|a u|ela|le |kun|kan|ba |a i| ok|ang|lwa|eyo|oka|alu|uba|lok|lel|ukh|kuk|aku|ala|aph|akh|kwe|ley|eth|the|u u|khe|het|nok|pha|ezi|ile|uny|use|ath|eki|khu|zwe|kul|kho|e k|wen|gok|na |o y|sel|a e| ez| uk|o o|ane|ana|hul|e a|tho| in|enk|o k|nam|o w|uku|kil|he | yo|unt|ent|ni |obu|nku|esi|ing|o z|ayo|ya |hi |lwe|phi|ban|fun|ben|elw|o a|uhl|ndl|nzi|gan|eli|olu|eni|hus|kwa|aba|ha |und|gen|uth|lal|ntl|e o|ink|hla|ise|iph|seb|ebe|isw|thi| zo|ume|kut|a a|isa|kel|izw|e i|za | ba| ab|sha|tya|een|yal|mth|i k|uph|sa | lw|alo|lan|dle|tha|lin|zi |ase|nay|i n|pho| ak|man|mal|wak|zo |bel| im|mfu|int|swa|ngu|do |nee|ene|ulo|o u|a o|tla|ezo|ga |wan|han|sen|kuh|kus|ety| es| ya| le|eng| el|kup|azi|ka |e e|olo|ubu|bal|and| se|o s|fan|okw|ant|o i|tsh|li |lis|sis|ale| en|phu| ol|ham|iso|lak|bo |mny|okh|nte|mel|ziz|sek| am|zin| ul| ub|nen|e w|ong|zel|emf|nan|ndo|yok|ube|nya|yen|len|gal|ili|e l|be |abe|ali| ph|a y|wam|aka|amn|men|lum|rhu|urh|eka|dla|u k|oli|iba| ko|thw|imf| wa|nda| is|nza| be",
        min: "an |ak |ang| ma| ka| da|yo |ara|nyo| sa| ha|ran|ng |nan|hak| pa| ba|dan| di|ata| pu|ura|pun|kan| na|man|ok |nda|ala|o h|uak|asa|k m|ntu|k u| ti|uny|ah | ur|n k| un|tua|n d|n b|and|n s|unt|ek |g p|iok|tio|jo |n p|tau| at|dak| ta|aka|pan|au |ind|ama|pek|dap|aan|ape|nga|k d|n m|uan|tan|lia|sua|gan|amo|bas|kat|gar|o p| in|n n| jo|mo |at |mar|ado|o t|ari|di |k s|n a|am |lam| su|o d|iah|par|ban|tu |sam|adi|o s|ika|lak|ian|ko |dal|um |san| la|ai |ega|neg| ne|k k|uka|al |asi|ant|aga|bat|dek|o m|mas|eba|beb|asu|mal|n u|tar|aku|ri |kal|ana|in |atu|ti |ato|sar|ngg|lan|alu|rad|aro|ali|un |ami|o u|k h|ro |car|o b|amp|mam| bu|dok|dia|aha|n t|to |rat|ka |ila|a d|sia|anu|yar|sya|i d|sur|sas|kum|as |pam|aca|k t|ati|kar|eka|dil|any|lo |i m|h d|iba|k b|u d|kab|u p|o a|o k|kam|lai|aba|ard|dua|ndu|lin|k p|ajo|raj|han|bai|ra |n i|uku|huk|itu|dar|aya|uli|mpa|amb|i k|ain|rde|abe|did|ili| li|sac|sti| mu|bul|n h|i p|nny|k a| ko|ras|bad|k n|ndi|rga|arg|iko|tam|a n|kaw|i j|ga | an|nta|k l|apa|ida|jam|alo|sal|l d|u k| hu|das|tik|mat|dik|ia |idi|uju|lua|pul|kuk| pi|ann|il |iny|i t|bak|ust|mus|uah|pri|aja| ja|n j|h p|sio|ar |ada|oka|ngk|sa |gam|min|ik |mbe| ad|si |m d|kaa|sat|i n|i a|usi|rak|asy|aki|rik|kny|ulo",
        afr: "ie |die|en | di| en|an |ing|ng |van| re| va|reg|te |e r|et |e v|een|e e| ge| be| te|eg |n d|le |ens|n h| he|het|ver|t d|lke|nie| in|ke |lik|of | el|e o|nde| ve|al | to|elk| op| ni| of|g t|der|id |and|eid|aan|kee|ge |ot |tot|de |hei|e b| vr| we|om | sa| aa|ord|er |e w|ige|g v|n v|ers|in |sal|nd |erk|e s| vo|dig|vry|wor|n s|asi|eni| wa| om| de|bes|rd | wo|\u2019n | \u2019n| on|ond|at |ska|ede|esk|sy |nig|e t|oor|ns |men|g o|aak|eli|kap| me|lle|vol|n a|edi|din|g e|uit|op |e g|gte|rdi|aar|ik |erd|el |ak |sta| st|ap |egt|se | sy|ele|gin|sie|min|ker|ere|is | so|yhe|ryh|es |ike|wat|e n|e d|del|wer|end|ale|n o|ur |eur|s o|per| hu|re |gel|ten|deu|e k| as|it |ema|gem|nas|ger|d s| is|rin|ewe|eme|ite|ter|as |n e|soo|oed|s v|ees|wet|red|e h|d v| al|ies| ma|nsk|ig |e i|ier|hie| hi|r d|t e|man|kin|nal|ona|d o|ske|ien|e a|eri|wee|ir |vir| vi| na|n w|iem|t v|s e|r e|ion|sio|nte|tel|eke| da|taa| gr|oon|rso| pe|tee|ort|n b|d e|lyk|ely|ese|e m|sia|ont|ans| ty|rde|ind|d t|nge|d d|g s|voe|n t|ndi|rmi|erm| sl|ren|maa|d w|lan|l g|hed|t a|n g|hul|n r|waa|t g|all|pvo|opv|ang|dee|nli|osi|sos|mee|wel|k o|kan| ka|raa|spr|nsp|nse|den|aat|gen|t s|g a|ste|est|str|lin|l v|sek|d n|ern|arb|daa|s d|ods|r m|t i|yke|met|rs |n i",
        lua: "wa |ne | mu| ne|a m|a k| ku|di | di| bu|e b|bwa|tu |udi| bw|a d|a b|ntu|e m|nga|i b|i n|shi|la |mun|yi | ba|adi|unt|u b| dy|nde|ung|ons|ya |mu |na |ga |end|nsu|a n|buk|e k| ma|any|u m|nyi|esh|de |lu |idi|ika|u n|su |ku |yon|i m| ka| mw| yo|u y|we | ud|wen|ken|dya|ji | kw|u d|mwa| an| bi|dik|sha|tun| ci|ha |hi |kes|oke|kok|bwe|kwa|dit|nji|kan|ka |mwe|ibw|yen|itu|ba |u u|ena|ang|le |ban|ala|enj|a a|e n|uko|uke|ans|u a|ana|bul| wa|nda|did|umw|ish| a |ila|bad|e d|mbu|kal|du |ndu|hin|kum|aka|nso|nan|a c|ele|ela|kwi|bu |nsh|ind|i k|sun|i d|i a|ula|ye | na|dye|u w|mba|alu|mak|ant| pa|lon| by|kus| mi|amb|gan|dil|dim|mud| cy| ns|kub|lel|u k|da |bud|enz|ond|ako|ile|e c|umb|diy|mus|abu|ja |dis|aku|bid|mal|umu|kad|dib|imu|cya|kuk|kud|so | me|ilu|ulu|ngu|ta |bak|akw|u c|iba|ush| ke|wik|eng|uba|wil|elu|und|kwe| mo|a p|omb|nza|iye|pa |mum|man|bya|kup|wu |muk|aci|a u|som|atu|ukw|upe|uka|e a|bis|kak|ngi|nge|pet|ilo|ama|iko|iku|mik|utu|ong|ulo|iki|and| um|mat|kul|uja|isu|gil|ale|nka|ata| mb|san|dif|ifu|ole|lwi|ulw|za |cik|lam|bel|awu| ya|wab|lum|ubi|sam|isa|aa | aa|fun|kon|bum| lu|eta|mbe|wel|kol| be|ane|ame| ad| tu|men|upa|tup|uku|omu|mom| my|mul|ing|ma |o u|pik|kab|cil|aji|me |uyi|kuy|o b|bon| bo",
        fin: "en |ise|on |ais|ja |ta |an | ja|sta|n o|ist|keu|ike|oik|ell|lla|een| oi|n t| on| va|n j|aan|kai|la | ta|lis| jo|sen|lli|a o|uks|sel|tai|a j| ka|us |in |n k|a t|eus|sa |ksi|n s|\xE4\xE4n|\xE4n |kse|nen|jok|see|oka|ai |tta|ssa|taa|mis|aa |nsa|ses|apa|t\xE4 | se|ans|den|est|tt\xE4|all|kan|t\xE4\xE4| yh|lai|sia|ill|\xE4 o|a v|itt|ett|vap|aik|ia |h\xE4n| h\xE4|ast|a k| tu|n e|ust|kun|eis|ess|ti |sti|per|\xE4 j|n v|ain|n y|k\xE4 |n p|n m| t\xE4|ine|isi|\xE4ne|yks|ude|\xE4 t|a m| pe|tei|tee| mi|a s|a p|val|unn|tuk|s\xE4 |a h|sek|utt|ll\xE4|ste|yht|ava|lta|ien| sa|l\xE4 |oll| ei|ss\xE4|n a|n h|st\xE4| ke|alt|suu|isu|sal|tet|ois|tav|a a|ikk|sty|ek\xE4|a y|etu| ku|vaa| te|hte| mu|pau|stu|iin|toi| to|lle| he| ri|muk| la|n l|\xE4\xE4 | ra| ol|nno| ma|ei |uut|iit| su|oma|ami|tam|ten|att|dis|tur|aut|m\xE4\xE4|n r|\xE4m\xE4|maa|oon|jul| ju|ute|iaa|et |kki|tie|ide|\xE4 m|kaa|suo| si|saa|i s|rva|urv|v\xE4l|lin|tus|rus|eru|nna|sku|isk|lii|oli|uol|a r|sii|ite|a e|hen| ko|sil|euk| sy| ty|ty\xF6|pet|ope|ali|avi|paa|si |iss|voi|tyk|\xE4 v|oja|vat|vas| yk|joi|vai|t\xE4m|kil|enk|mai|mie|tti|iel|rii|nk\xE4|min|hmi|yhd|lit|ens| pu|uka|ita|ka |omi|aas|kka|jaa|uoj| ed|ala|oit|t\xE4y|i t|int|il\xF6|nki|eel|\xE4 s| al|eli|lee|un |k\xE4\xE4|oht|koh|va |eid|tun|ttu|le |na |ihm| ih|aal| av|aat|i v|non|tte|ytt|yyt|ulk|eud|van",
        slk: " pr| a |pr\xE1|r\xE1v| po|ho |vo |na | na|ost| ro| ne|ie |nos|ch |\xE1vo|kto|ebo|m\xE1 | m\xE1|a\u017Ed|ka\u017E| ka|bo |leb|ale| al|o n|ani|d\xFD |\u017Ed\xFD|ia |ne |om |ti |\xE9ho| v | je|ova| za|\xE1 p|\xFD m|mi |eni|to |n\xE9 | sl|tor|van|a p|sti|voj|o v| kt|nia|lob|slo| sv|mu |rov|rod|\xFDch|svo| z\xE1| by|o p| n\xE1|a\u0165 | ma|nie| sp|e s|ej |nu |je |n\xE9h|o a|\xE1va|bod|obo|a s|e a|by |a n|oci| vy|o s|odn|a z|n\xFD |en\xFD|mie|\xE1ro|roz|ovn|spo|u p|eho|nes|u a|n\xE1r|kla|a v|i a| sa|jeh|y\u0165 |by\u0165|e v|stn|va |a m|sa |n\xFDc|n\xFDm| k |ran|och|pre|a o|\xE9mu|a k|i\u0165 |aj\xFA| do| v\u0161|ov |\u010Din|hra|z\xE1k|tre| ni|s\u0165 |u s|pr\xED|stv|pod| ob| s\xFA|a r|v\u0161e|\xFDmi|oje|\xFDm |pri|kon|i p|vna|est|e b|smi|esm|os\u0165| \u010Di|or\xE9|lad| in|pol|\u017Een|bez|\xE1ci|a a|u k|maj|\u0161et| vo|e z|\u0165 s|t\xE1t|i k|pro|chr| oc|nak|bol| bo| tr|i s|iu |\u010Den|ny |du | ho|\u0165 v|j\xFA |del|ami|dov|va\u0165|ko | vz|rav|pra|lne|r\xE9 |\u0161t\xE1| ta|anu|nom|aby| ab|res|vo\u013E|ikt|n\xFA |niu|slu|kra|edz|e p|odu|\xE1ln| so|o\u017Ee| de|\xE9 v|etk|n\xED |ok | pl|k\xFDm|ako| \u0161t|vin|str|ou |\xE9 p|m p|inn|r\xEDs|kej|stu|nik|med|tvo|por| to| kr|de |sta|pov|i\xE1l|ens|ak\xE9|hoc|r\xE1c|o d|en\xE9|m a|lan|ela|zde|vzd|o\u010Dn|olo| ak|lo\u010D| st|in\xFD|\xEDm |ast|dne|ju |oju| od|an\xED|tup|i n|rej| ve|pln|adn|tak|\xFA p|j\xFAc| s |o\u013En|\u010Dno|ivo|obe|lu\u0161|sob|oso| os|jin|aji|raj|in\xE1|ade| \u017Ei|ven|vod|ci\xE1|soc|dno|bo\u017E|\xE1bo|n\xE1b|o r|k\xE9h",
        tuk: "lar| bi| we|we |da | he|ada| ha|dyr|er |an |r b|ir |ydy| \xFDa|bir|y\u0148 |yna|na |yr | ad|ary|dam|lyd|de |kly|yny| \xF6z|lan|r a|her|hak|akl|aga|kla|i\u0148 |am |ara|mag|ili|r h|ga |ala|ler|dan|en |a h|\xF6z |ar |ny\u0148|gyn|ini|ne |bil|li |len|atl|nda| ed| ga|\u2010da|ygy|a\u2010d|ine| de|uku|huk|e h|lyg|edi|a g|\xFDa\u2010|dil| bo|kuk|lma|eri|tly|ryn|asy|a d|eti|ny |ly |ni\u0148|dir| hu|\u2010de|aza|ge |\xFDan|ile|a\xFDy|e d|zat| az|hem| g\xF6|ama|lyk|\xFDet|den|nde|any|ynd|ykl|ukl|\xE4ge|m\xE4g|im | du|a w|a \xFD|gin|m\u2010d|em\u2010|in | je|n e|bol| hi| di|e a| be|p b|ra |e \xF6|mak| go|ni |mez|ilm|aly|ril|n b|sy |syn|rla|esi|ry\u0148|gal| ma|etm|nma|ede| sa|lme|i\xE7 |hi\xE7|e g|a b|lin|igi|ele|rin|iri|de\u0148| do|ak |lik|anm|dal| ka|mal|n h|kan| ba| \xFDe|i\xFDa|gat| ge|al |y b|y\xFDe|ti\u0148|let|ard|tle|n \xFD|ere|agy|ora|gor|nme|inm| gu| ki|sas|esa| es|r e|bu | bu|gar|tla|ill|\xFDle|lig|sin|\u0148 \xFD|mel|e b|end|n a|\xFDar|\u0148 h|rda|y w| et|tyn| d\xF6| i\u015F|\xE7in| ar|z h|r d|\xFDda|\u0148 g|nun|\xFCnd|yly|\u0148 w|ez |yp |kim|\xFDa\u015F|olm| \xE7\xE4|g\xF6r|dur| \xE4h|si\xFD|and|da\xFD|eli|mil|e\xFDl|be\xFD|erk| er|a\xFDa|kin|ek |ndi| yn|ola|ry |r w|lim|a\xFDl|gy\xFD|et |e m|i \xFD|agt|wag| se|dol|a \xF6|n w|i b|e\u0148 |n p|anu|z\xFCn|\xF6z\xFC|m \xF6|i g|\xE7 k|a\u015Fa|rma|ana|ldi|my |hal|\xE4hl|asi|ram|kda|\xFDyn|gda|agd|\u015Fyn|ip |lip|gel| mi|din|rle| me|at |j\xFCn|pj\xFC|\xFCpj| \xFCp|\xFDla|mgy|emg|jem|gur",
        dan: "er |og | og|til|et | ti|der|en | de|for|il | re| fo|ret|ing| ha|lig|de |nde| en|lle|hed|els|ver|ar |und|ed |har|ell|den|ge |ler|lse|and|r h|t t|se |ng |hve| el|enh| fr|at |e e|e o|ig |nhv| i |gen|ede|ska|ige| at|es |le |ghe|r r| in|e f|fri| me|nge|al |igh|nne|nin|l a| be| sk| af|r e|ion|af |re |han| st|om | so|r s|e s| an|eli|ne |r o| p\xE5|tig|esk|or |del|ati|p\xE5 |r f| er|enn| al|ens| un| he|tio|ndl|med| si|end|kal|nat|g f|ske|ns |tte|ent|ter|det|ke |lin|som|e r| ud|ett|g o|sky|e a| ve|nte|n s|r d|tti|sni|t s|lde|vil|ale|ind|ans|r a|kel| hv|dig| li|men|ren|old|hol| na| gr|ihe|rih|sam|v\xE6r|e i|e m|s f|age| vi|d d|g h|str|\xE6re|te |ilk|g t|r i|nal|ona|e n|rel|run|gru|d e|nd |ers| sa|r u|ere|ger|e t|tel|bes| m\xE5|t i|per|lan|isk|dli|ors|rin|e d|kab| mo| v\xE6|all|ejd|bej|rbe|arb|gte|mme|ved|e h|m\xE5 |n m|igt|res|kke|l h|sig|ld |l e| fa| ar|n f|r k|ets|rsk|t o|t f|it |t d|t v|g i|ytt|kyt|ven|ove|g e|ste|r t|eri|tet|lke| om|\xF8re|e g|fun|orm|d a|oge|nog| no|g a|erk|kra| kr|d h|od |mod|g d|g s|ie |erv|ene|em |sta|nst| ku|isn|vis|rvi|g m|t a|ner|tes|r\xE6n|s s|n h|int| la|ikk|el | op|lit|n a|g u|av |rav|ts |dre|t m|e u|s o|ore|l f|rit|ndi|lag|l t|ffe|rli|n e| fu|yld|dan|n o|rke|ive|raf|tra|dom| tr|i s|l l",
        nob: "er |og | og|en |til| ha| ti| re|ett| de|ing|ret|il |tt |et |lle|for|ar | en|ver|ell|om | fo|ng |har|r h|het|ler|lig| so|hve|t t| el|ter|nne|som|enh|and|de |av |nhv|ska| \xE5 | i |le |r r|den|e e| fr|ig |r s|nde|els|se |e o| er|enn| me| st|lse|al |re |fri|tte| sk|han|or | be| in|ke | av| ut|ghe|r e|esk|nge|te |es | p\xE5|ete|der|nin|ten|p\xE5 |igh|ed |l \xE5|kal|ge |unn| sa|ent|e s|eli|n s|rin|ne |g f|itt|sam|lik|gen|t s|end|jon|sjo|asj| an|r o|g s|t o|men| al| si|lin|mme|med|g o|ner|dig|n m|ren|nte|ige|inn|e f| gr|e r|r f| ve|sni|sky|g e|del|ens|und|res|det|isk|gru|ihe|rih|tig|tti|kte|ans|g t|tel| li| un|lan|nas|t i|m e|r u|ske|e m|ns |ekt|str|t e|ers|per|ale|kke| he|rel|run| ar|kap|mot| mo|all|eid|bei|rbe|arb|e t| vi|bes|g r|ven|s f|eri| m\xE5|n e|e g| na|nn |e d|kra| kr|ot |ndl|ere|erd|rit|\xE6re|vis|ger|ffe|id |e a|ytt|kyt|g h| et|tes| sl|i s|m\xE5 | la|dom|l e|n o| fa|rav|r k|t f|nes|v\xE6r|ta |sta|ste|\xE5 d|ndi|g d|bar|l f|isn|rvi|g a|vil|nnl|r m|t d|jen|dli|e b|gre|e h|ikk|el |l o|nal|ona|opp|r a|on |n a|noe| no|ute|erk|v p|ts |e i|dre|g m|ie |gan|erv|org|ser|tat|ang|at |t v|s o|tli|fen|an |e n|ik |g i|\xE5 s|lov| lo|r l|t a|lt |ove|aff|rdi|m s|l l|nse|r t|n h| pe|sli| gj| ik|d d|old|hol|ial|sia|osi|sos",
        suk: "na | mu| bu|we | na|hu |a n|ya | gu|a b|nhu|wa |a g|a m|unh| ya|mun|li |ili|ali|bul|i m|ilw| ba| bo|uli|han|mu |lil| al|e n|u a|bo |la |ose|kwe|ang|ulu|lwe|kil| wi|i b| se|ga |ina|le |ge |kge|ekg|sek|bi |e b|e y|lo |and|i n|yo |ila|se |lu |a s|lin|gil|ngi|akw|aki|abi| gw|si |nsi| ns|dak| nu|ng\u2019|gan|u b|o g|ilo|nul|e g|ka |nga|ile|a w|ada|u m|gwi| ka| ad|ubi|lwa|ani|ban|o a| ly|ndi|a l| ng|jo |g\u2019w|a i|ho |ayo|ika|dik|e k| ma|anh|gul|u n|o b| ji|o n|yab|iya|wiy|lag|ula|yak|o l|ma |ing|gi |gub|biz|lan|shi|iwa|ja | li|iha|mo |o j|wen|o s|lya|a a|ola| ku|jil|win| ga| sh|agi|ha |iga|uga|a k|iti|oma| nd|uyo|iza|za |i a|a y|yos| ha| mi| lu|iko|ndu|pan|ji |nil|ala|bos|ene|a u|ele|nhy|u g|nik|o w|iki| mh|nda|uhu|duh|hay|aji|ana| ja|gwa|nay|i y|ong|aya|mil|o m|da |lug|man|e i|abo|aga|okw| ab|nek|ngh|dul|e m|aha|uma|ubu|bus|sol|wig|ki |nya|ung|iji| gi|wit|iso|som|twa|udu|imo|eki|\u2019we|hya|gut|iku|e u|uso|u l| il|but|mha|any| um|bal|ujo|kuj|aka|tum|waj| we|ko |ugu|bud|lon|a h|utu| uy| is|jiw|ale|e a|a j|sha|ita|lit|ibi|lyo|u w|g\u2019h| ij|upa|tog|ida|omb|yom|ajo|atw|mat|bok|ulo|gup|lik| ul|ize| at|uto|ze |kan|ulw|u u|sho|ish|hil|ike|kal|mah|umu|je |ule|mbi| ih|kaj| lo|ti |wik|\u2019ha|eni|yiw|umo|ito|ba ",
        als: "t\xEB | t\xEB|dhe|he | dh|\xEB d|n\xEB |et |\xEB t|imi|p\xEBr|ejt|rej|dre|e t| dr|it | e | p\xEB| n\xEB|gji|\xEB p|sht|jit| gj|jt\xEB|\xEBr |het|ith|ve | ve| li|ush| sh| ka| i |t t|a t|kus|hku|j\xEB |sh | ku|e p|ka |se | pa|me |e n|mit|s\xEB | nj|\xEB n|thk|\xEBn |\xEB k|e d|\xEB s|in |ose|lir|h k|et\xEB| os| si|ara|n e|nj\xEB|t d|tet| ba|jer|ohe|jet|\xEB m|rim| nd|\xEB b|e k|e s|eve|eti| du|nd\xEB|r\xEB |\xEB g|t\xEBn|vet|eri|ra | me| q\xEB|t n|do |es |iri|e l|duh|d\xEBr|shk|und|si | as|re |end| ng|uhe|ndi|\xEBsi|ga |nga|min|q\xEB |hte|ime|ash|mi |tje|i n|jes|ris|\xEB v|ri | ar|nje|r n| pe|\xEB i|ur |uk |nuk| nu|tar|i p|at |en |an\xEB|ta |jta|e m| pu|e v|ar |sim|is\xEB|gje|art|\xEB l| ma|\xEB r| s\xEB|ht |ish|i d|or | mb| je|lim|e a| ko|uar|\xEB e|cil|bar|mar|t\xEBs|edh|\xEBm |sh\xEB|ave|shm|nal|t a|\xEB j|ari|ht\xEB| ci|k d|im |snj|asn|kom|igj|t p|\xEBs |\xEBrk| de| k\xEB|a n|\xEB a|ir\xEB|bas|es\xEB| pr|tim|hme|ke |per|pri|vep|mun|roh|t s|oj\xEB|\xEB c|tit|lli|omb|lit|par|i s| tj|s s|ij |tij|shi| fa|le |ale| ti|roj|bro|mbr|ali|\xEB q|nim| mu| t |n k|ti |t i|ven|uri|q\xEBr|in\xEB|ik |esi| ra|at\xEB|ras|t m|\xEBri|je |h\xEB |pun|i i|e b|nd |jen|mev|a g|\xEB f|n p|ona|son|rso|ers|epr|tes|\xEBsh| \xEBs|ft\xEB|oft|ore|ror|oq\xEB|hoq|sho|\xEBta|zim|ar\xEB|kur|rat|k\xEBt|\xEBzo|i t|ill|ars|ite|ind|r d|rin| pl|ie |\xEBrf|\xEB z|a p|rte|h\xEBm|r p|tyr|bli|res|ike|te |kun|m t|lig|a d|ia ",
        sag: "t\xEE | t\xEE|na | na| ng|ngb|a n|lo | lo|nga|g\xF6 |ng\xF6|gbi|bi |n\xEE |zo |ang|la |\xEE l| wa| s\xF4|s\xF4 |gan| zo|a t|\xEEng|o n|i t|l\xEEn| al|g\xFC |ng\xFC|wal|ala|\xF6 t|al\xEE|a l| k\xFB| nd|\xEE k|\xF4 a| l\xEA|\xE2 t|\xEE n|\xEB t|\xFB\xEA |k\xFB\xEA|\xEA t| mb|\xEE m|\xE4ng|ko | te|o k|\xF6r\xF6|e n|o a|g\xEB |l\xEAg|g\xE2 |ng\xE2|\xEE b|\xEBp\xEB|p\xEBp| p\xEB|\xF4ko|a \xE2|\xEE \xE2|\xEAg\xEB|m\xFB |\xEE s|d\xF6r|\xF6d\xF6|k\xF6d|\xEF n|a k|\xEBe |p\xEBe|\xFC t| k\xF6| \xF4k|ter|a z|kua|ke |eke|yek| ay|\xEE t|\xEA n|ua |b\xEAn|o t|t\xEF |ra | am|aye|\xEE d|\xFB n|\xEA a|r\xEA |er\xEA|\xE2 n|\xEAn\xEE|mb\xEA|r\xF6 |\xE2ng|am\xFB|a y|a m|ga | du| ku|\xEE g| y\xE2|a s|ro |oro|dut| \xE2l|y\xE2 |ng\xF4|\xE4 t| n\xEE| \xE2m|ut\xEF|r\xE4 |ar\xE4|\xE2la|b\xEA |\xF6 n|l\xEF |\xF6ng|o s|a p|\xEE z|\xF6n\xEE|ten|i n|gba|ne |ene| s\xEA|ba |e t| gb|ndo|i\xE4 |di\xE4|ndi|\xF6 k|nd\xF6| g\xEF|ara|\xEFng|\xEE w|l\xEB |do |\xEF t|a w|\xFBng|war| \xE2n|a a|y\xEA | \xE2k| da|\xEE a|ban|o w|t\xEBn| t\xEB|\xE2ra|s\xE2r|n\xEB |d\xF6 |\xEE p|o \xF4|z\xF6n|nz\xF6| m\xE4|\xF4ng|se |da |nd\xE2|s\xEAn|t\xF6n| t\xF6|e a|\xEBn\xEB|\xEB s|\xFCng| nz|o p|k\xE2n| k\xE2|a g|b\xE2 | ko|o l|r\xF6s| b\xEA|\xF4i |g\xF4i|\xEEr\xEE|\xEAnd|ana|ta |\xEE f| po| s\xE2|mb\xE2|\xE2mb| s\xEF|\xEBng|mba|zar| za|ib\xEA| m\xFB|\xEBt\xEF|b\xEBt|mb\xEB|i p| as|fa |t\xE4n|e z|l\xEA |sor|mar| ma|s\xEF |i s|a b|amb|od\xEB|kod|b\xFBn|\xEB n|\xEAse|s\xEAs|\xF6s\xEA|o m|du | af|d\xEB |bor| bo|\xEA s|g\xEA |ng\xEA|\xF4 n|\xE4 s|\xE4t\xE4|b\xE4t|\xFC n|\xEB \xF4|ata|bat|\xE4l\xEB|p\xE4l|kp\xE4| kp|\xF6 w|p\xEB |r\xE4n|\xE4r\xE4|s\xE4r| s\xE4|g\xEF | \xE2z| ad|\xF6 m|g\xEE |\xEFg\xEE|b\xEEr|mb\xEE|afa|r\xEB |er\xEB|\xFBe |k\xFBe| \xE2s|\xF6n |gb\xE2|e l| mo|\xE2l\xEF|w\xE2l|\xEA w|\xE4 w|i \xF4|\xE4 a|p\xE4 |\xFC s|yam| ya|\xE2zo| \xE2b",
        nno: " de| og|og | ha|er |lle|en |ar |til| ti|il | re|ett|et |ret|om |le |har|tt | al|all|re |ing| \xE5 |ell|and| sk|ska| i |det| fr|t t|an | ei| so|enn|ne |ler| el|den|e s|ver| me|l \xE5|leg|e h| ve| p\xE5|al | fo|dom|for|p\xE5 |av |ein| sa|ten|n s|som|sam|fri|nne|r r|ei |ere|men|gje| st|de |e o| gj|je |nde|kal|dei|st |eg |tte| in|han|i s|ast|r s|ski|t o|med|rid|or |lan|ter|t e| an|ed |r f|te |t s|kje|ge | sl| av|r k|ido|e t| er|ke |jon|sjo|asj|nas|unn| ut|g f|g s|n o|g o|nga|\xE5 f|e a|der|ng |e f| gr|kil| f\xE5|r d|ske|esk| si|lik|e i|n m|ste|at |ern|ona|n e|lag|kra| kr|e n|in |t a|ren| la|nte|e d|nin|e k|nn |tan|na |seg|v p|rav|nsk|ins|me |ame|nes|e m|bei|\xE5 v|itt|eid|a s|ege|f\xE5 |e r|\xE5r |e v|lov|r a| fa|gru|sla|ld |rbe|arb|ome|kap|jen|n t|jel| mo|r l|sta|ane| tr| li| m\xE5| at|kkj|ikk| ik|kan| ka| lo| na|n a|dre|ndr|ha |g g| ar|n d|eld| se|id |ot |mot|\xE5 s|va |t i|gen|nle|t d|n i|ale|ige|nal|rel|run|ag |oko|nok| no|d a|nad|fr\xE5|l d|\xE5 a|ild|var| kv|ve |erd|e e|inn|e u|g i|r h|kte|dig|gar|lin|god| vi|str|i e|l h|nge|end|t h|r o|r g|bli| bl|int|eig|nna|on |se |uta|t f|l f|e g|nom|amf|sin|pet|k\xE5r|vil|ga |m\xE5l|ene|ent|ig |fer|are|d d|g a|rn |ova|ele|g e|ik |g t|per|ens|gre| om|rt |und| un|rna|\xF8ve|h\xF8v|l e|ial|sia",
        mos: " n | a |e\u0303n| se|a t| ne|a s|\u0303n |se\u0303| ye|e n| ta| pa|n t| t\u0269| so|t\u0269 | la|nin| ni|\xE3a |f\xE3a| f\xE3| t\xF5| bu|ng |t\xF5e| b |ye |a n|or | te|a a|la |\xF5e |tar|e\u0303 | ya|ne |pa | to|ed |ned|sor|e t|te\u0303|aan|uud|buu|g n|r n| ma|maa|n y|ud |a y|n m|ra |\xE3 n|paa|n p|ara|em |a b| wa|d f|n b|n d|\u0303ng|s\xE3 | t\u028A|eng|b\xE3 |n w|an |g\xE3 |og |me |ins| na|e b|b\u0269 | b\u0269| ka|\u0269 b|am |g a|d b|aam|ge\u0303|taa|mb |ore|\u0269 n|yel|\u028A\u028Am|\xE3mb|ab |a m|t\u028A\u028A|wa |a l| b\xE3| ba|tog|ga |m n|re |ba |ng\xE3|nd |aab|aa |yaa| s\xE3|na | t\u0169| s\xF5| da|aoo|n n| y\u0269|\xE3 y|ame| me|aal|dat|n s|b s|ing|\xE3ng|d n|\u0269 y|\xE3 t|\xE3 s| k\xE3|lg |m t|oor|r s|d s|\u0303nd|nge|el |neb|b y|nga|ar |gr |kao| b\u028A|d\xE3 |to |v\u0269\u0269| v\u0269|egd|seg|men|saa|nsa| le|a k|at |ngr|n k|w\xE3 | w\xE3|g t|oog|b\u0169m| b\u0169|a p|d\u0269 |\u028Am |ren|\u0269\u0269m|\xE3ad|\u028Amd|da |b t|\u0169mb|y\u0269 |b\xE3m|b n|d a|ya |g s|eb |l s| yi|ke\u0303| ke|r\xE3 | s\u0269|m s| ti| y\xE3| we|oab|soa| f | z\u0129|b k|m b|oga|go |gd\u0269|a z|\xF5ng|s\xF5n|aor|t\u0169 |\u0269m |b p|\xE3 p|ilg| mi|in | ko|al |ka | no|\u0269 s|p\u028Ag| p\u028A|gam|\u0303 n|lem|\u0129nd|b b|\xE3 f|le |te |iid|uii|bui|ell|wil| wi|s a|oa |r t|e y|a g|aas|e s|\u0269 t|ik |we\u0303| ra|g b|t\u0169u|e p| y\xF5|oy |noy|a r| z\xE3|aba|ull|\u0169 n|m\xE3 |k\xE3a|eem|kat|aka|wak|s n|nda|ll |gre|kog|loa|alo|lal|\xE3 k|mb\xE3|md |e\u0303e|k n|ag |r b|o t|eg | g\xE3|n g|seb|\u028Age|eb\xE3|o a|b\xE3n|sul| su|m y|bao|n z|ate|\xE3 w|kam|mik",
        cat: " de| i | a |la | la|es | se|de | pe|per|tat|i\xF3 |ent|ret|dre|at |a p| dr|a l|ona|nt |men|ci\xF3|ts |na |aci|al |en |t a|ls | el| to|et |tot|a s|el | co|s d|ers|er |a t|que| en|s i|ta |e l| pr|t d|rso| qu| o | ll|son|ion|t\xE9 | t\xE9|ns |\xE9 d|sev|ita|als|ota| in| l\u2019|est|cio| re| al| un|cia|ons|ame|del|res|ar |ual|lli|s e|va |nal|ia |con|ser|les|i a|r\xE0 | no|pro|els|eva|nac|a c|s p|i l|nci| le|ue |no | so| ca|a d|sta|r a|s l|l\u2019e|ert|s a|a i|re | d\u2019|l d|una|ues|ter|rta|e c|ats|t i|n d|s n|a u|cci|s o| pa| es| na|l p|vol|sen|ber|ibe|lib|s t|t e|ure|l i|lit|er\xE0|ant|da |ici|oci|soc|ra |tra|ens| di|gua|igu| ma|nta|ali|ene|tes| ni|a a|nte|a e|\xE9s |o s|tre|alt|r s|com|ets|i e|par|cti|ect|ten|cte|ote|us |eta|mit|ial|om |se |i d|s s|e d|i p|pre|un |ntr|r l|ecc| tr|seg|l t|ada|dic|eme|qua|ica|eli|\xF3 d|aqu| aq|\xE8nc| ig|ir |iva|ssi|lic|t t|des|o p| ac|ont|act|ing|egu|ria| te|int|ndi| fo|a m| po|lig|lle|inc|ist|nse|cla|hom|ltr|i i|cie|ess|ura|ass|a f|e t|bli|seu|tal|tec|rot|\xFA n|g\xFA |ng\xFA|nin|tac|pen|nde|t s|ic |s f|\xF3 a|ol |evo|lse|tic|dis|cap|rac|mat|iur|liu|man|ll |itj| mi|olu|e i|art|uni|rti|esp|l s|le |ble|eri|os |sos|ies| as| ob|e p|n e|s q|tri|tiu|i c| ar|ni |tur|t n|gur|vid| vi|a v|ran|\xE0ri|ind| si|\u2019es| fa",
        sot: " le|le |ng |ho | mo| e | ho|a l|e m|ya | bo|a h|lo | ya|ong|ba | ba| ka|na | ts|e t|tho|a b|mon|o y|o e|a m|elo|la |ets|olo|sa |oth|g l|oke|eng|kel|a k|ka | na| di|ang|mot|tla|a t|tsa|tok| se| ha|e b|o t| o |wa | tl|o l|e e|o b| to|pa |e k|lok|ha |aba|apa| a |e h|o n|so |tse|a e|hab|jha|tjh|tso|tsh|kap|se |ana|oko|ela|g o|a s|o m|let|loh|a d|e l|kol|set| ma|a a|bol|ohi|tsw|ele|hi |dit|eth| ke|lan| kg|o s|o h|eo |bo |g m|ke |ala|phe| me|etj|ola|o k| ph|aha| mm|ohl|ebe|lwa|a n|g k|swa|e d|bot| th|di | sa|atl|ena|hle|mol|tlo|ae |hae|abe|g y|ats|lat|i b|seb|to |otl|ane|g b|moh|mel|edi|lek|a f|the|wan|efe|nan|g t|e s|o a|han|ito|me |hlo| hl|shi|rel|ire|lao|kgo|hel|g h| en|g e|nah|ona|bet|man| fu|ell|kga|eha|a p|its|get|kge|mme|swe|si |thu|mat|uma|fum| ef|bel|len|ume|lal|hat|ban|kan|we |bat|tsi|ing|ato|e n|ao |o f|lel|hir|hla|sen| eo|she|pha|ano|eka|ile|fen|i k|tlh|lap|ots|fet|hal|din| ko|hen| fe|heo|got|hwa|elw|a y|i m|o o|bon|hol|son|dis|o p|alo| lo|boh|uto|hut|ben|nya|tha|abo|ita|aka|ama|ose|mab|iso|shw|e y|i l|het|oho|o d|tum| tu|llo|oll| wa|hil|ath|mos|oka|mmo|ikg|mo |uso|hah|emo|adi|boi|llw|dik|nts|lle|non|sel|all| yo|tle|e i|ike|rab|wen|meh|ame|lho|mee|ken| si|eny|oph|yal|pan|g s",
        bcl: "an | sa|in | na|ng |sa |na | pa|nin|ang| ni| ka| ma|pag| an|n s|ion|sin|asi| as|on |cio|n n|a m| de|n a|ban|a n|a p|kan|rec|ere|der|aro|cho|ech|aci|ga |a s|n d|o n| la|mga| mg|g s|n p|o s|man|sar| o |ho |n l|asa|n k|ay |n m|wa |gwa|igw|al | ig|mba|amb|kat|o i|sai|ong|lam|ata|ro |os |iya|a a|ara|o a|agk|apa|kas|tal|a k|yan|aiy|gka|nac|ali|may|g p|san|ina|aba|a d|lin| ba| da|ag |nka|ink|o m|yo |a i|iba|aka| in|ad |ing| ga|ent|no |ayo|nta|par| pr|ano|ini|hay|aha|iri|dap|ida|abo|han|sta|nal|kai|og |agt|at |pat| co|a g|ant|pro|g n|nte|n i|t n|ia |cia|con| si|dad|do |o k|a b|tan|ron|l n|s a|mag|ran|g m|aki|s n|men|es |g d|y n|tra| so|ona|a l|ra |min|agp|uha|n b|g o|a o|n o|a c|g k|mak|aya|hos|as |ado|o p|ter|bas|ags|i n|lan|ba |g i|bos|gab|bah|li |ico|l a|kap|cci|ecc|tec|ami|isa|imi|ton|ial| re|en |g a|tay|pin|n e|ili|rab|bal|hon|ote|rot|rim|cri|ast|gpa|y m|say|iis|sii|pan|sad|nag| se|ala|gan|bil|n c|nda|d a| di|nga|taw|gta|i a|ios| es|pak|bo |aan|res| pu|a e|sab|ey |ley| le|atu|buh|mit|om |abi|e s|kab|ika|rin|ici|gsa|ale|ica|ni |ipa|nci|ind|nan| ip|cac|waa|nwa|anw| ed|lid|nes|ura|le |ibo|uli| hu|sal| gi|awe|gaw|agi|y p|to |air| bu|rar|int|ito|ndi|kam|dir|agh|oci|soc|lig| li|aen|lar| bi",
        glg: " de|de |os |i\xF3n| a | e |to |da |en |ci\xF3|\xF3n |der|n d|ere|ito| se|a p|eit|rei|ent|as | co|ade| pe|dad|aci|per| te|do |o d|nte|e a|ten|men| to|e d|al | pr|rso|ers|s e|a t|tod|que|soa| ou|ida| da|te | in| po|s d|oa |cia|es |o a|est| \xE1 |ra |oda| do| li|a e| es|a s|ou |con|e e|res|tra| re|nci| o |s\xFAa| s\xFA|pro|a d|o e| pa|ar |e c|tos|lib|ue | qu|r\xE1 | na|ser|a a|er |\xFAa | ca|ter|ia |dos| en|er\xE1|e s|ica|a c|sta|s p|ber|nac|s n|s s| no|e o|a o| ni|ns | un|ado|e p|o \xE1|io |cci|era|nin|des|nal|is |\xF3ns|ame|nto| so|or |se |com|pre|par|no |o t|o p|ona|e n|sen|s t|por|ais|das| as|cto|\xE1 s|eme|cio|ha |nha|unh|ara|rda|erd|ant|ici|n p|n s|ibe|n e| di|cas|nta| ac|ont|n t|dic|ndi|oci|soc|ion|ing|s o|enc|tiv|so |ali| ma|o s|a u|ngu|tad|e i|ese| me|lic|seu|ect|n c|lid|vid|ria| tr|e t|eli|e l|gua|igu| ig|l e|o m|r a|re |cti|act|ntr|ecc|ual|rec|a l|ido|nde|ind|o n|a n|cal|dis|ta | os|o \xF3|r d|iva|ada|mat|ste|fun| fu|tri| \xF3 |\xE1 p|tor|nda|pen|na |on |n a|o o|ori|uer|lqu|alq|ca |rac|n o|tar|nid|bre|ibr|lo |aso|esp|a v|a i|ode|pod|und|s a|tec|ote|rot|tes|ena|ura|\xEDn |u\xEDn|gu\xED|egu|seg|ita|ome|ari|s i|ase| fa|ond|ial|tic|ixi|inc|sti|ist|cla|cie|e r|omo|s c|man|bal|spe|ati|edi|med|uni|ios|isf| sa|ias|ren| mo|lle|co |ico",
        lit: "as |ir | ir|eis|tei| te|uri|ti |s t|iek|is |os | ki|us |vie|ri |tur|ai | tu| pa|ien| vi|ali|i t|\u017Emo|s\u0119 |is\u0119| \u017Em|mog|kie|ena|ais| ne|ini|kvi|ekv| la|gus|lai|ogu|nas|\u0117s |m\u0105 | \u012F | jo| b\u016B|s \u017E|vis| ar|b\u016Bt| su|ant|mo |i\u0173 | ka|s i| pr|s s|mas|pri|isv|\u016Bti|oki|s k|s a|ar | sa|sav| ti| ap| ta|tin|kai|\u0119 \u012F|ama|i b|s v|in\u0117|isi|im\u0105|s n|val|imo|jo |aci|gal| nu|s p|rin|men|i p| ku|dar|cij|sta|kur|nim|je |li |i k|tas|ms |i i|arb|ina|sin|jos| na|mis|lyg|i v|i s|asi|tik|ijo|oti|vo |mok|tie| mo| va|t\u0173 |i\u0161k|aik|iam|tai|aut|s b|lin|kit|eik|r t| ly|ntu|jim| i\u0161|tuo|sty|\u0105 i|r p|ega|neg|ma | \u012Fs| re| be|i n|s j|is\u0117|n\u0117s|si |yb\u0117|din|\u012Fst|tat|aus|es |nti|kia|i a|m\u0173 |ara|oje|aud| ga|iai| at|tis|avo|r l|suo|isu|ek |tyb|\u0105 k|am |mos|pag|aug|aty|ie\u0161|rie|int|nt |sva| ve|gyv|ava|tar|\u0161al| da|o n|ima|kal| sk|kla|omi|ip |aip|o a|ito|r j|avi|\u0173 i|ven|yve|als|j\u0173 |kim|alt|ika|agr|nuo|sau|ymo|kio|tym|tu |\u0161ka|nam|eka|uti|lie| \u0161a|oma|nac|kin|iki|tok| \u0161i| ji|s g|s l|ksl|ink|vai|ome|pat|o l|rei|o p|o t|ios|psa|aps|io |san|ni\u0173|uo |min|nie| ni| as|v\u0119 |ver|o k|ikl|cia|oci|soc|r k|eli|yti| to|\u0173 t|irt|ki\u0173|s \u0161|pas|udo|u k| or|uom|uok|eny|eno|im\u0173|sla|i \u012F|ati|t\u0105 |a t|lst|vei|ran|\u0117ji|ary|tim|usi|a k|lti|gas|uot|tos|ist|ndi|\u0117ms|j\u0105 |o v|g\u0105 ",
        umb: "kwe| om|e o|oku| ok|a o|a k|nda| kw|ko | ly|da |wen|la |end|nu |unu|mun|omu|wa |oko|ka |o l| ko|kwa|omo|mok|iwa|le |we |o y|i o|okw|te |eka|mwe|olo| vy|a v|osi|o k|ali|ete| ey|lyo|wet|si |yok| yo|lo |vo |ang|ong|kut|sok|iso|u e|u o|a e|a l|ye |oci|gi |eye|oka|fek|ofe|nde|i\xF1g|nga|o o|ata|\xF1gi| li|eci| nd|i k|ngi|wat|kal|ilo|ovo|vyo| va|pan| oc|li |so |a y|owi|ci |kuk|e k|nge|wi\xF1| al|avo|kul|lon|ga |ing|ili|e l|ale|lom|ala|ge |ovi|ta |ngo|ati| ya|imw|go |eli|vya|a a|uli| ol|he |ahe|iha|ele|ika| wo| ku|lil|isa|a u|ti |yo |alo|kol|o v| ov|lis|i v|lya|lin|cih|uti| yi|yal|ako|ukw| lo|wav|ung|akw|ikw|yos|val|tiw|upa| ye|onj|i l|lim|and|uka| vo| el|gol|sa |su |kok|aka|e y|lyu|\xF1go| ka|yov|vik|e v|eko|yah|gis|omw| wa| la|lik|e u|ava|tav|olw|ila|e e|vak|kov|omb|aso|a c|tis| ce|tat|iyo|epa|dec|a n|va |u c|eso|ela|ama|kat| ek|kup| ha|o e|co |ekw|asu|has|yon|asi|yow| ke|i c|upi| ci|wil|cit|ole|eyo| co|liw| yu| ca|kas| ec|uta|yim|wal|yol|kiy|e w|yuk|lye| of|o w|o c|i a|ita|ola|lwi|uva|lit|iti|njo| on|apo|ipa|sil| um|lof|wam|kun|i e|anj|cel|del|han| ak|u y|a\xF1g| up|o a|tun|atu|kak|yik|yof|iki|eti|fet|o\xF1g|lo\xF1|ulo|koc|yi |wiw|kwi| ow| os|kuv|ndu| es|vos|yel|uyu|mak|san|mbo|jon|i w|ngu|oco|lok|yas|e n",
        tsn: " le|le | mo|ng |go | ts|we |gwe| go|ya |ong| ya|lo |ngw| bo| e | di|a l|tsh|sa |e t|elo|a g|tlh|tsa|e m|olo|a b|wa |na |e l|o y|o t|a t|wan| kg|eng|kgo|o n| tl|a k|mon|la | na|ets|ane|mo | o |hwa|shw|tse| ba|e e|nel|a m|ka | ga|tla|ots|o m| ka|ele|o l|ba |e d|dit|e g|got|di | a |se | se|ang|a d|otl|bot|e o|lho|o e|ga |lol|e b| nn|a n|lha|so |lel|tso|o b|seg|ose|let|ola|ego|gol|o o|g l|kan|eka|nng|e k| ma|aka|atl|mol|sen|o g|aba|ela|its|los|tho|ano|gat|oth|yo |agi|tsw|e n|e y|len| yo|hab|o k|to | th|o s| nt|lhe|ho |agw|gag|g y|kga|mel|rel|ire|tlo|o a|ana|lek|iwa|aga|bon|g m|tir|edi|\u0161ha|t\u0161h|lao|g k|i k|tle|ntl| te|dir|ao |e s|lwa|hir|shi|a e|pe |o d|any|a a|i l|a s|ale|alo|a y|g t|jwa| jw|hol|mot|gi |kwa|dik|lon|etl|tet| wa|mai|swe|set|thu|ko |non|ats| me|han|ume|ala| mm|nya|iti|he |bat|hut|nna|ira|itl|no | ne|ro |iro|nan|elw|she|ona|i b|hot|oag|log|a p|wen|i t|ikg|adi| ti|o i|lat|g g|ame|mog|bo |okg|hel|tha| sa|nag|bod|emo|nyo|isi|ile|hok|ogo|uto|si |pa | it| ko|the|diw|ope| op|tek|it\u0161|odi|rwa|sep| ph| kw|pol|gis|bok|me |o j|aag|baa|hop|yal|opa|are|kar|ing|oke|ato|lam|bak|leb|ke | ke|amo|eny|gwa|mok|g n|nye|swa|boa|tum| ja|gan|g a|hag|gon|lan|net|mme| la|ban| fe|ika|rag|ne |g e|nen",
        vec: " de|de | \u0142a|\u0142a |el | el|ion|ar | e |sio|on |to |e \u0142|o d|rit| in|par| pa| co|a \u0142|eri|\u0142e |ga |der|t\xE0 |a d| ga|un | a |a s|asi|n e| i |ito|e i|a e| on|te |onj|e d|ti |\u2019l |ent|con|int|l d| re|nte|s\xF3 | s\xF3|l g|o a|he | da|a p|e a| \u0142e| pr|jun|nju|da |che| o |e c|sar|e e| ch|a\u0142e|n c|na |e o|it\xE0| na|e\u2019l|art|ta |ens|\xE8sa| \xE8s|e p|men| po| se|tar|a c|sa |bar|a\u0142i|o e|ona|e n| so| \u0142i|i d|i e|pro|dar|e s|\xE0 d|nas|na\u0142|sta|i i|sia|r\xE0 |ars|osi|ze |rso|n d|a n|eze|nji|se |ro |esi|nta|ara|iba|\u0142ib|nsa|tut| l\u2019|tri|ame|o o|ar\xE0|ist|a g|usi|i s| cu|io |ita|nes| ne|rt\xE0| tu|r \u0142| un|nto| ma| si|l p|ond|sos|tra|so |nsi|sun|esu|\xE0 p|e r|iti|ji |onp|ren|ont|tes|ste|in |ia |de\u2019|l s|rio|isi|ra |dis|ras|ghe|\u0142i |e f|sie|r d|i p|man|r e|nda|res|ca |nca|anc|a a|str|a i|o i|go | st| fa|n o|ia\u0142|sen|\u2019st| \u2019s|i c|ntr|ien| di|o c|ver|est|r a|o p|nti|l m|pie|nde|son|ego|ega|ari|r i|var| an|rim|a\u2019l|i o|e m|pod|imi| al|n p|pre|o s|co |ani|ri |uti|rus|tru|l\u2019i|et\xE0|e l| ca|ato| fo|\xF3 d|\u0142it| a\u2019|ant|dez| cr| me|ten|\xE0 \xE8|oda|\xF3 p|\xE0 o|den|en | vi|a v|o n|ne |rte|ltr|teg|nio|ini|or |sti|una|e\u0142i|i g| ze|\xE0 e|npa|ni |ers|a r|a \xE8| su|com| vo|ans|ja |\xE0 i| ar|fon|esp|tro|ote|rot|ura|re |o \u0142|cia|r t|\xE0 c|min|ene|alt|opi|eso|o\u0142o|n s|ute|e t|rse|anj",
        nso: "go | le|le | go|a g|lo |ba |o y|ng | ma|ka | di|ya | ya| ka| mo|a m|et\u0161|a l|elo| t\u0161|a k|ang|e m|o l|na |e t|man|wa |o t| bo|tok| a |e g|la |a b| ga|a t|we |oke| se|gwe|kel| ba|\u0161a |o a|o m|t\u0161a| na|e l|o k|t\u0161e|a s| to| o |ele|a d|o b|ago|ego|dit|t\u0161h|o g|oba|gob|e d|tho| e |\u0161o |ngw| ye|ong|g l|di |o n| tl|ga |swa|let|olo|tla|t\u0161w|mo |ane|ho |\u0161e |oko|aba|\u0161ha| kg|t\u0161o|wan|ela|hab| sw| th|g o|ola|ye |e b|a n|kgo|\u0161wa|eo |set|ito|e s|ona|log|mol| wa|se |oth|ao |eth|ogo|thu|to |eng|a y|o d|hut|e k|o s|net|kol|lok|a a|gag|rel|ire|e e|nag|agw| wo|ana|o w| yo|hlo|lel| bj|\u0161we|alo|aga|leg|wag| ph|yo |lwa|mel|pha|wo |get|kge|ano|aka|ato|lat|din|o o|hir|\u0161eg|o e|ala|mok|\u0161om| la|mog|nya|e y|lao| ts|mot|i g|ke | ke|kan|iti| me|kar|g y|gwa|eba|ohl|\u0161hi|hel|phe|oph|bo |bot|ume|pol|a w|sa | sa|gon| lo| am|are|gel|ale|a p|len|e n|at\u0161|it\u0161|rwa|o f|emo|edi|bon|bja|ta |tle|ban|no |u\u0161o|tlh|amo|wel|i\u0161o|ing|ge | ge|the|leb|o \u0161|ko |hla|bop|dir|e a|ahl|aem|mae|ntl|\u0161on| mm|mon| fi|lek|oka|uto|omo|i b|ret|ape|oge|lal| nn|o\u0161o|pel|okg|abo|gab|lon|lag|yeo|a f|ile|mo\u0161|kga|dik|\u0161i |yal|i l|tlo|a e|tsh|otl|elw|odi|i t| fe|med|dum|mal|ora|oll|hol| nt|jo |boi|lwe|i s|bat|hom|lho|ikg|tha|nel|mu\u0161|mmu|ha |apa|ne |adi|eny|iri|\u0161al",
        ban: "ng |an | sa|ang|ing|san| ma|rin|ane| pa|ne |n s|ak | ka| ke| ha|hak| ri|nga|ma | ng| ja|in |sal|lan| pe|n k|uwe|iri|g s|ara|alu|lui|gan|uir|duw|adu|mad|adi|yan|nma|anm|jan|asa|n p|we |g p|g j|pun|a s|a m|man|e h|nge|tan|n m|awi| la|kan|nin|ra |uta| ne|pan|ur | tu|ih |ala|aya|n n|wan|eng|nte|un |ngg|tur|ah | da|en | ut|ana|bas|beb|nan|lih| wi|apa| ta|are|aha|ent|iad|wia|eba|han|ian|ani|ten|din|wi |taw|aan|a n|gar|asi|n w|pen|ebe|da |ika|ngk|a p|keb|ama|ata|aje|n r|aka|ipu|kal|e s|saj|g n|nen|g k|ado|oni|ron|ero|jer|ela|dan|ate|ka |anu|dos|dad|nya|al |aki|i k|a t| wa|ami|ren|ksa|ega|sak|gka|nay|ewa|mar|nik|ep |e p|aks|ndi|sar|iwa|upa|era|neg|oli|ina|uni| pu| se|h s|pat|ban|lak|h p|rep|os |ran|a k|ali|ngs|aga|sa |ar |e m|ung|atu|arg|n l|usa|sam|ngu|ewe|tat|nip|swa| sw|n t| pi|n d|i n|a u|kat|osa|eda| mu|ena|e k| me|r n|lah|k r|nda|ayo|ida|um |uku|k p|gsa|kew| ba|ras|r p|wen|par|pak|k h|eka| ny|i m|end|ari|yom|gay|kab|uan|pa |gi |kin|kum|huk| hu|n u|h r|war|dik|mal|g t|ta |ti |sti|sap| su|s k|per| in|ntu|pol| po|car|rga|pin|eh |r m|tah|ant|nus|mi |idi|did|rya|ary| pr|ngi|kar|pag|gew|ha |k k|min|uru|ut |tut|ita|eta|dil|oma|ri |ust|mus|ira|g d|sio|gam| ag|as |abi|i p|g h|g r|il |awa|lar",
        bug: "na |ng | na|eng| ri|ang|nge|nna|ngn|gng|ge |sen| ma|app| si| ta|nap|ase|a r| pa|ddi|a n|ri |tau|a t|ale|edd|au |ega|ria| ha|ai |hak|len|e n|ias|ak |ga |a a|pun|inn|ing|ass|a s|nai|pa |nin|sin|ppu|ini|are|gen| ru|ngi|upa|g r|una|rup|ana|ye | ye|gi |ama|i h|lal|man|asa|enn|ara|le |i r|ila| de| ke|ssa|g n|ae | as|e a|san|a m|din|a p|di |sed|ane| se|e r|u n|ada|ann|ala|ren|e p| la|da |lan| we|nas|aga|ipa|i a|e s|pan| ad|wed|reg| ar|sal|pad|ole|i n|g a|lai|asi|pas|a k|i s|ung|rip|g s|ena|jam|ola| pe|ran|ppa|e m|i l|akk|gan|ngk|ong|map|ril|aji|ttu|kan|gar|neg| ne|gka|att|g m|ain| ja|nar|ett| e |k r|i p|nan|i t|ra |e d|ban|gag|bas|eba|beb|ata|sib|nen|i m|unn|iba| mo| wa|ebe|keb|uwe|de | te| sa|par|kel|g p| ba|kun|ura|a d|uru|mas|aka|bol| al|u r|ko |we |kol|tu |add|o r|e y| hu|pol| po|mak|deg| at|bbi|ian|elo|kko|ell|auw|nga|cen|iga|nat|g t|dan| di| tu|apa|uku|huk|ro |tte|ma |ngs|atu|leb|iko|sik|ssi|rga|arg|ekk|rel|uan|la |an |ece|pat|gau| to|ele|a w|e w|a y|lu |a b|gsa|sil|rus|ie |ire|ebb|oe |wet|rek|llu|ppi|tun|dec|wa |awa|baw|u w|ten|ter|ka |per|mat|g y|pak| an|lua|sse|pig|dde|nre|anr|ton|olo| ia|caj|nca|ona|nro|onr|sa |tur|k n|e h|u p|bir|lin|a e|eri|mae|e k|si |elu|a l|tam|ru |ntu|ade",
        knc: "nz\u0259|ro | a |be |ye | k\u0259|z\u0259 |mbe| ka|a k| ha|akk|abe|kki|hak|ndu| nd|a n|a a| ya| la|ad\u0259|ben|aye|en |inz|kin|yay|\u0259be|ji | mb|lan|ma |d\u0259 |eji|bej|\u0259 a|o a|aro|\u0259la|du |e m|k\u0259l|\u0259na|k\u0259n| ba| ga|ga |lar|e a|u y|an |rd\u0259| ad|anz|shi| sh|ard|\u0259ga| ku|au | au|e h|n k|a s|uro|wa | na| ye|so |obe| sa|ara|iya|kal|ama| n\u0259| su|amb|n n|in |\u0259nd|ndo|kur|inb|d\u0259g|u a|kam|na | fa| nz|and|ida|ba |\u0259 k|awa|la |nyi|a b| fu|d\u0259b|a l|n\u0259m|sur|e s|aso|ana|gan| ci| ab|a d|t\u0259 |a g|kar|d\u0259n|uru|a y|baa|\u0259 n|ru | da|wo |\u0259ra|ndi|ya | s\u0259|t\u0259n|ade|gad|asa|ta |aar|aa |al | as|aya|i k| du|e n| ta|uwu|din| t\u0259|nam|ata|e k|o k|am |a f|o n|t\u0259g|i a|\u0259mk|\u0259 s|nba|awu|iga|nga|wu |ala|utu|o w|da |nza|z\u0259g|\u0259li|gin|ima|z\u0259n|u k|adi|owu|cid|\u0259wa| wa|san|\u0259gi|laa|awo|de |bem|fut|n a|wan|rad|do |ali|i n|mka|e l|u s|z\u0259b|o s|ayi|wur|n y|ibe|iwa|\u0259g\u0259|za |mar|a t|wal|m\u0259r| m\u0259|tu |nd\u0259|az\u0259|wum|fuw|kun|g\u0259n|uma| ng|o g|ema|yir|gay|o h|on |tam|kat|ada|lmu|ilm| il|jam| ja|dob| ny|d\u0259w|yaw| ay|\u0259n |hir|i s|liw|ela|bel|how| ho|at\u0259|nat|iro|aid|z\u0259l|lt\u0259|hi |tin|dum|nbe|o t|\u0259 f|irt|rta|n d|kiw|a h| wo|mu |sad|\u0259 h|\u0259d\u0259|taw|lil|dal|sha|n f|iwo|o f|enz|diy|\u0259di|s\u0259d|yi |\u0259ny|ang|nab|nya|wob|unz| aw| ra| ji|lam| al|nad|wow|ram|\u0259 y|dar|a i|ut\u0259| yi|u n|di |kas|fan|\u0259nz|t\u0259b",
        kng: " ya|na |ya |a k| na|a y|a m| ku|a n|u y|and|a b| mu|wan| ba| lu|yin|tu |ve |yan| ki|ka | yi|nda| mp|a l|di |ndi|la |ana|ntu|si |so |da |ons|e n|mpe|nso|aka| ke|pe |mun|unt|lu |i y|alu|sal| ma|o m|luv|ta |ina|nza|ke |u m|e y|uve|ndu|ala|u n|i m|za |ban|amb|u k|isa|fwa| ko|to |kon|ayi|ma |du |kim|ulu|o y|kan| me|wa |usa|kus|anz|ama|ang|end| ve|yon|nyo| ny|a v|a d| to|i k|nsi|ins|i n|sa |mos| mo|mbu|e k|und| bi|osi| fw|ika|kuz|len|uti|imp|mab|uka|ata| le|ind|vwa|tin|pwa|mpw|kuk|ba | at|kis|adi|mba|olo|ngu|bu | di|uta|mut|lo |sam| sa|sik|isi|e m|su |ila|ula|e l|mu |usu|abu|nga| nz|lus|yi |yay|ngi|but|o n|ni | nt| ka|dya|kak|dil|esa|amu|ti |imv|o k| bu|bal|e b|wu |awu|kul|ant|gu |ngo|inz|bun|a t|mpa|utu|dis| dy|nka|ank|mvu|kin|u f|iku|ong|uzi|zwa|i l|bim|sad| mb|vuk|dik|uzw|lam|tan|mef|idi|kat|lwa|fun|kuv|ga |ken|bak|ing|luz|baw|bis|yal|uya|luy|bay|nsa|mak|usi|mus|nta|ibu|kub|a a|atu|ufu|uvw|i a|ani|swa|uza| ni|ela|tuk|kol|lak|uso|ola| ns|twa|uko|pam|kut|bam|i s|eng|ku |umb|don|ndo|yak|i t|iti|mbi|eta| nk|iki|gi |uku|a s|luk|sol|nzo|te |nak|oko|mam|tal|efw|pes|dib|u b|ati|gid|uke|nu | nd|umu| vw|ilw|dus|luf|zo |u t|mvw|met|bum| ng|sul|ima|wel|kwe|ukw|zol|yam|ota|kot|lan|zit|i b|i v|kun",
        ibb: " nd|ke |e u| mm|ndi| ke|me |de |e n| em|o e|en |nye|mme|owo| en| ow|wo |yen|ene|mi |emi|ye |i e|e e|eny| un|nen|eke|une|edi| ek|e o| uk|et |n n|ne |e i|n e|e m| ed|e k| ye| es|ana|em | id|ede|esi| mb|un |di | nk|iet|kpo|na |ukp|sie|kem|kpu| in|kie|eme|did|ie |idu| nt|nam|am |ndo|o u|o o|mo |o n|mmo|yun|t e|din|dib|kpe| uf|o m|ked|nyu|no |ded|o k|an |on |nkp|e a|du |m e|iny|kpa|po |ho | kp|ade|om |ina|dut|ono| ub|m u|uke|bo |ikp|i o| ki|ini|bet|mbe|ida|t m|ode|in |oho|wem|uwe| uw|bio|ut | ot|ru |uru|pur|uto|ni |i m|do |fen|omo|dom|u u|ok | us|to |dik|iso| ut|mde|tom|ibo| is|n i|ri |o i|oki|mok|edu|ide| et|a n| on| ak|diy|ak |nek|a e|n o|i u|man|u o|puk|akp|pan|idi|m n| ob|ara| or|a m|op |a k|t k| ny|ema| as|io |kar|pon|nwa| ik|oto|boh|ubo|n k|ufo| an|i k|m k|k n|pem|uka|o a|i n|uk |ed |wed|nwe| nw|usu|uan|te |mad|ti |e y|a u|asa| mi|obi| ef|n m|m m|dud|sun|n y|ka |o y| ey|t i|ro |oro|ond| of|ra |aba|tod|fin|re |nte|nde|ko |efe| ab|k u|dis|n u| eb|ony|pa |nti|pe |med|da |ndu|mbo|eye|dem|aha|ban|ena|nka|san|i a|sop|ibi|sin|ion|eko|se |he |ruk|oru|eto|sua|d e|odu| od|a o|mba|ama|fok|iok|a a|anw|mek|so |ufe|m o|kon|k m|ha | se|si |asi|bas|ufi|ito|dit|ere|ike|son|ori|pep|fon|u n|a y|bon",
        lug: "a o| ok| mu|wa |oku|nga|mu |ga | ob|a e|tu |ntu|bwa|na |a a|ba |ang|ra |a m| ng|wan|aba| n |a n|li |oba|a k|unt|la | ab|era|a b|ibw|mun|u n|ka |ali|tee|ate|i m|uli|bul|obu|eek|u a| bu|dde|za | ku|ana|ban|sa |edd|ala| eb|mbe|iri|ye |gwa|emb|omu| om| ek|u b|ant|ira|e o|n o|be |amu| en|eki|kwa| er|dem| ed| ki|nna|okw|ama|kuk|eer| ye|eri|kus| ba|ggw|kol| wa| em|usa|ula| am|inz| ly|eka|any|ola|i e|ina|kwe|o e| eg| ky|ekw|u m|mus| bw|kir|ere|ebi|u e|ri |n e|uyi|a y|y o|a l|onn|uso|u k|ger|e e|bal|egg|o o|mat|zib|izi|aan| at|awa|no |ko |yo |bwe|yin|kul|bir|zes|wal|aga|nge|ako|gan|ebw|nza|lin|esa|e m|oze| ma|riz| te|nyi|kut|ya |ufu|kub|sin|we |ngi|obo|kan|nka|yen|eby|y e|gir|eta|una|aka|lye|tuu|wo |bee|u o|ku |i y|ino|kin|e b|a w|isa|o b|sob|zi |e n|wam|imu|e l|uku|bon|de |san| by|ata|wat|iko|kuy| ag|boz| al|ngo|lwa|umu|ulu|utu|uki|ewa|taa|o n|ong|si |nsi|by |e k|muk|usi|rwa|ne |i o|i n|enk|bye|rir|ma |kug|mbi|iza|lal|uko|kis|enn| og|ole|kye|a g|asa|add|ani|nya|sib|ens|ni |ini|uka|i k| aw|uga|gi |yam|n a|tab|uma|umb|kyo|wen|uwa|bib|wee|ing|a z| ey|ze |emu|ete| et|tew|a t|yiz|mul|awo|u g|nzi| kw|tal|o a|o k|fun|afu|and|i b|ibi|ung|ro |amb|igi|aku|saa|baa|nyu|yig|ayi|gya|wet|kik|go |a s|ti ",
        ace: "an |ng |eun| ha|ang|oe |peu|ak |on |ngo|gon|ah |nya| ta|na | ny|ung| ng|reu|yan| na| pe|ure|meu|roe| ke|eut|hak|keu| me| ba| ur|at |teu|ee |han|a h|dro|ban| di|ara| be|ata|g n|iep|tie|am |eur| sa|nan|jeu|ut |n n|ep |eug|tap|seu| la| te| ti|uga|e n|euk| da|ala| at|a n|eba|beb|awa|ong|ra |tan|n t|eum|eh |n b|p u|ih | se|nda|h n|a t|a b|h t|ape|eu | pi|oh |eub|e p|lam|e t|ai | ma|um | si|dan|eul|asa|t n|und|neu|ana|n p| wa|n a|bah|lah|and|lan|wa |euh|n k|nyo|n h|eus|ula| bu|k t| je| dr|anj| pa|ma |g s|n m|h p|eng|nga|ran|n d|om |hai|a s|yoe|e b|mas|san|ngg| ra|ta |beu|g d|nje|taw|uka|ek |a k|una|a m|ura|yar|sya|gan|soe|n s| li|sid|ya |sab|aka|k n|ka |dum|ndu|har|ot |di |idr|aya| ka|kat|e u|e d|ok |a p|bat|aba|euj|gah|adi|lak|pat|et |n j| ja|kom|uko|kan|en |asi|ari|t t|aan|un |h d|sa |ame|ate|ama|sia|oih|usa|h h|g k|i n|sal|ila|bue|dee|lin|h b|ieh|g p|bak|aja|huk|ade|k m|dip| in|lee|uny|uh |rak|dar|uta| so|gar| ne|nto|ant|rat|uja|h s|aro| le|g h|nta|ep\u2010|ina|k a|uma|t b| ji|don|gro| hu|k h|ile|t h|t s|ngs|gam|aga| ag|m p|n l|heu|e s|ahe|a l|ane|e a|ggr|\u2010ti|p\u2010t|g b|ue |toe|jam|oe\u2010|eud|k k|ngk|ika|ino|ute|ie |wah|ham|n u|taa|yat|k b|tam|sam|a d|ia |man|use|t l|uk | an|aso|ga |g m| ya|ri ",
        bam: " ka|ka |ni |a k|an | ni|kan| b\u025B| la|i k|la |ya |n k|ye | ye|\u0254g\u0254|na |li |\u025B\u025B |b\u025B\u025B|\u025B k|ali| ma| i |man|sir|ra | da|en |ama|g\u0254 |wal| wa|ira|n n| k\u025B|m\u0254g| ja|a n|a b| mi|ma |a d|ana| m\u0254| ba|\u2019i |\u0254r\u0254|min| o |iya| si| sa|in |ara| na| k\u0254|i m|i j|dan| k\u2019|i d|a s|len| jo|b\u025B |jam|a m|\u025Br\u025B|i n| n\u2019|a l|a y|k\u0254n| f\u025B|k\u025B | t\u025B|iri|ari|\u2019a |aw |\u025B s|a i|\u0254n\u0254|i t|\u025B b|n b|ani| an|riy|sar|\u025B m|t\u025B |r\u0254 |ko |a w|i b|si |asi|a t|k\u2019i|\u025Bn |o j|a f|a j| fa|den|aya|n\u0254 |n y|i s|ale| de|ang|aar|baa|ila|ala|kal| di|inn|tig|o b|\u025B j|\u0272a |i f|olo|nu |nnu|osi|jos|raw|kun|ati|e k|w n|\u025B n|aga| se|\u0254 m|n\u025B |in\u025B|nti| ta|lan|b\u0254 |i y|\u0254 b|don|ga |ugu|a a|f\u025Bn|da | j\u025B|ig\u025B|\u0254n |\u0272\u0254g| \u0272\u0254|n\u0272a|u k|ada|bil|abi|r\u025B |n\u2019i|o l|\u0254 k| fo| a | ti|aba|nw |jo |n i|a \u0272|go |\u0254 s|i\u0272\u025B|o m|y\u0254r|n o|n\u2019a|ri |h\u0254r|i h|g\u0254n|afa|kab|un | ko|i l|aka|lak|on |e m|igi|a o| b\u0254|o f| s\u0254|n f| fi|ant| h\u0254| c\u025B|\u025B l|dam| ha|aay|maa|fur| fu| ku| t\u0254|ti |ile|gu |m\u025Bn|riw|e b|\u2019o |e f|iwa|\u025B y|uya|nna|n m| do|ago|nga|kar|nka| du|o k|\u0272\u025B |n w| j\u0254|iir|n d|fan|oma|lom|wol|nin|n j|c\u025B |u b|ili|a h|nen|\u0272\u025Bn|ade|\u025B\u025Br|u d|nba|ru |uru|t\u0254n|\u025Bku|j\u025B |dil|gan|i i|sug| su|w l|\u025Bm\u025B|w k|uma|ew |f\u025B |aju|\u0254 o|di\u0272|\u025B i|\u0254 n|s\u0254r|isi|\u025Bya|ank| t\u2019|\u0254n\u0272|r\u0254n|i \u0272|wa | b\u2019|taa|anb|mad|had|lu |yir| yi|amu|aam|lad|\u025Bna| \u0272\u025B|sag",
        tzm: "en | ye| d |an | n |ur | s |ad | ad|h\u0323e|lh\u0323| lh| gh|agh|n i| i |\u0323eq|d y|n t|eqq| ta|ett|qq |s l|dan| is|gh |la |hur|ell|ra |d t|r s|ghu|is | na| am|nag|i t|mda|ll |n g|a y|yet|t i| te| ti|di |n a|l a| di|akk|in |ara|a d|n d| ar|ma |ghe|n l|ull|it |edd|dd |kul| ku|amd| ur| id| wa| we| ma|a n|q a|li |rt | yi| ak|d a|as |a t|lla|men|es |d i|a i| le|sen|lli|lel|a a|n s|t t|ar |na |n n|eg | tm|n y| dd|tta|t a| as|r a|ken|kw |kkw|twa|i w|n u|d u|deg|mur|t n| tu|s d| ag|at |wen|gar|i l|win|ttu|wak|n w| tl| de|s t|d\u0323e|i n|hel|d l|tam| se|rfa|wan|w d|urt|er |h d|iya|gi |sse|yes|erf|zer| tt| ik|ddu|q i|h\u0323u| in|tle|nt |hed|r i|wa |arw|mga|idd|sef|fan|ize|n m| im|ya |udd|ttw|i u|uh\u0323|mad|tim|s n|i d|emd|wem|tmu|ef |ame|rwa|i g|\u0323en|id\u0323|ddi|ih\u0323|ili|ess| u |el |t d|awa|msa|lan|a l|kke|tte|ikh|em |wad|way|\u0323ud|s y|mma|s k|i i|ant| ya|siy|\u0323r\u0323|un |agi|dda|til|khe|med|tes|ana|taw|l n|d n|chu|all|yek|am |g w|ah\u0323|r d| iz| ne|nun|anu|qan|lqa| lq|t l|iwi| ss|den|gha|ert|der|nes|man|tag|s u|hwa|ehw|yeh|ala|ila|lna|eln| la|r\u0323r|ray|s\u0323e|yed|iwe|n k| l\xE2|yen|ile| il|ha |ski|esk|lt |hul|ekh|del|i a|kra| kr|yn |ayn|a s|h a|ir |ezm|net|eh\u0323|awi|ki |u a|leq|fel| fe|ssi|use|ine|il |r t|tem|edm|hef|ail|aw |naw|yas|asi",
        kmb: "a k|la | ku|ya |ala| mu| ki|a m|kal| o |u k|o k|ni | ni| ky|mu | dy|dya|a o|lu |ang| ya|tok|kya|nga|na |so |oso|a n|oka|nge|mba|i k|a d|kut|xi | wa|kwa| ka|mut|hu |elu|thu|ba |uth| kw|uka|gel|ka |a i|wal|wa |uto|ene|ban|ga |i m|kuk|ku | mb|e k|u m|ne |ana|kik|u n|a y|ngu|iji| ng|u y|ela|u w|i y|ixi| mw|kit|kel|ye |ika|wen|isa|nda|ji |oke|u i| ji|ena|and|und|kil|ilu|ung|ke |iba|ila|aka|a w|o w|yos|ten|kus|ulu|kub|e m|ta |alu|sa |oxi|mox|amb|olo|kum|gu |wos| wo|wat|ate|muk|gan|lo |tun|du |ndu| it|mwe|kan|san|kis|ita|o m|luk|imo|ong| ph|kye|a t|i d| ye|di |ato|nji|kij|sok|idi| ix|u d|kud|u u|ula|tes|we |e o| ke|a s|o i| di|uku|da |udi|ma |lun|lak|eng|ele|wij|yat| we|nu |wan|uba|e n|hal|pha| se|e y|yen|kib|a j|uke|ki |o n| yo|ito|itu|a u|i n|jin|kwe| im|lon|u o|uta|su |i w|ja | ja|utu|kat|iki|fol|ute| ut|kul|i u| en|kim|adi|ikw|tal|esa|nde|dal|yan|ngo|fun| ko|jil|eny|i o|uki|nen| ik|umu|lel|atu| uf|ing|uso|vwa|o y|esu|u j|ge |ufu|lan|o d|nyo|jya|uma|i j|jix|ukw|usa|unj|ite|o a|kuz|sak|dib|kyo|mun| os|mbo|imb|go |kos|u p|ijy| ib| tu|te |i i| a |han|xil|exi| il|kam|dit| un|a a|ilo|gam|kwi|tul|ivw|ubu|lul|a p| so|iku|uni|se |oko|o o|mwi|ote| to|kex| uk| bh|ufo|e a|ind|bul|sen|inu|ngh|kiv",
        lun: "ng | mu|la | ku|a k|di |aku|tu |chi|g a| a |ntu|mun|ma | ch|a n|unt|a m|ndi|ela| we| na|aka|ima|ind|jim|eji| ni|i m| in|u w|a i|wu |i k|a w|shi|awu|hi |lon|u m|wej|sha|ing|kul|wa |nak|i n|ala| ja|na |ung| kw|muk|ulo|kum|ka |a c|hak|cha|iku|ewa|wen|a h| wa|g o|u j|kut| ha|ana|vu |ovu| ov|yi |idi|u c|him|nik|ong|adi|mbi|kwa|jak|kuk| an|ang|tun|bi |nsh|tel|ha |esh|amu|han|kus|kwi|ate|ila| he|uch|ula|imb|ilu|a a|kew|enk|uku|mu |u a|hin|a y|zat|nke|u n|kal|hel|ond|i a|ham|eka|eng|mwi|a d|itu|and|del|nde|wak|ins|nin|i c| ya|ona|mon|ina|nji|i h|ach| yi|ama| ak|nat| mw|nyi|kin|umo|lu |ata|uma|sak|ku |udi|ta |ati|uza|kuz|mul|wes|ich|i y|awa|u k|uta|muc|i j|wal|uka|kuy|uke|wit| di|yid|naw|kam|bul|ayi|wan| ko|i i|kad|waw|akw|ni |ken|ji |uki|iha|dik|u y|g e|ush|mbu|si |osi|kos|ahi|ika|ish|kud|ash|twe|atw|any|dil|hih| ye|da |eni|kwe|wil|imu|dim|li |ya |kun|yin|g i|nan|yan|win|iwa|din|tam|etu|ant|amb|mwe|his|nda|hik|til|ule|umu|was|inj|jin|hu |nam|mpi|iki|wah|hiw|kuh|jil| da|eyi|ney| ne|isa|hid|usa|jaw|wat|wun|tan|umb| ma|uya|una|end|lun|pin| ji|ahu|nka|omw| om| ny| i |hen|che|yej|wik|u h|eta|tal|kuc|ulu|sem|wet|fwe|twa|utw|uyi| hi|iji|iwu|mpe|omp|ilo|yil|nic| en|a e|iyi| at|haw|lek|mba|emb| ew",
        war: "an |nga|ga | ng| pa| ha| ka|han|pag| hi|in | ma| an|ata|mga|hin| mg|kat|ay |ya |a m|a p|gan|on |da |n n|n h|ug |n p|n k|ung| ug|iya|a h|a k|ha |n i|adu|n m|dun|tad|ada| iy|sa | o |ara|may|a n| ta| di|a t|n a| na|y k|o h|pan|kad|tag|n u|yon|ags|ud |o n|ang|al |a s|ana|gsa|gad|a u|o p|man|syo|asa|ala| ba|ag | in|a i|g h|n b|agp|asy|awo|ray|war| wa|to |a d|wo |a a|usa| us|g a|nas|ina|was|taw|nal|ing|gpa|ali|iri|dir|agt|i h|ra |ng |aha|ri |bal|san|ad |kas|aka|g p|o a|a b|ida|awa|hat|no |g m|ini|uga|ahi|y h|o m|tan|ili| bu|uha|buh|gka|agi|bah|aba|i n| su|tal|him|at |pin| pi|hiy|kan|int|mo |n t|did|a o|aya|sya| ko| tu|nah|nan|iba| bi|n o|od |agb|la |kon|lwa|alw|gba|aho|tra|uro|o u|l n|ona|yo |ho |pam|o k|agk|ano|d a|sud|asu|gin|ngo|ni | la|hi |as |rab|uma|ton|os |par| sa|sal|ati|ko |iko|upa|lin|ami|gar|ban|n d|ern|gi |aag|abu|a g|kal|d h|aga|yan|n e|yal|d m|gtu|ak |mil|rin|ba |lip|mah|aud|lau|ka | so| ig|lig|ama| ki|ihi|tik|ras|aso|mag|gud|g i|tun|g k|duk|osy|sos|kau|uka| un|hon|n s| pu| ib|ro |imo|tub|mak|pak|ila|n w|yer|bye|ent|ito|ika|amo|it |sug|n g|dad|ira|edu| ed|tum|aup|ngb|til|non|anu|pod|upo|sak|sam|ari| pr|agh|alu|ato|ta |nta|gon|lik|bli|s h|d i|k h|uyo|ig |uli|bul|dto|adt|isa",
        dyu: "a\u2019 | k\xE1| k\xE0|ye | ye|k\xE0 | \xE0 |ni |la | b\u025B|\xE1n |k\xE1n| la| ni|ya\u2019| i |\u0254g\u0254|ya |k\xE1 |m\u0254g|a k| m\u0254|b\u025B\u025B|\xE1 k|\u025B\u025B |na |\u0254r\u0254|n k| m\xED|\u2019 y|m\xEDn|\xEDn |i y|\u2019 k| be|\u2019 l|be | ya| k\u025B|te |ma |\xE0 k|\u2019 m| te| j\xE0| w\xE1|n n|nya|\u025B k|\u025Br\u025B|i\u2019 |a b|w\xE1l|ra |\xE0ma|\xE1li| \xF2 |ima| n\xED|j\xE0m|\u025Bn |g\u0254 | m\xE0|e k|\xE0 l|\u0254\u2019 |lim|n\xED |n\u2019 | l\xE1|iya| k\u0254|\xE0 \xE0|o\u2019 |e \xE0|e b| h\xE1|r\u025B |ana|man|r\u0254 |n b|i k| s\xE0|\u025B y|\xE0 m|e s|\xE0 b|li\u2019|\u0254n\u0254|k\u0254n|h\xE1k| d\xED|gb\u025B| b\xE1|n y|ara|b\u025Bn|\u2019 s|k\u025B |m\xE0 | b\u0254|\u2019 n| k\xF3|aw |\u2019 b| s\u0254|riy|\xE0 y|a m|n\u0254 |e m|s\xE0r|a j| s\xED| f\xE0|\u0254 k|\xE0ni|\xE0 s| gb|k\u025Br|s\u0254r|y\u025Br| y\u025B| f\u025B|g\u0254\u2019|n m|b\xE1a| s\xEC| t\xE1|\xE0ri|na\u2019|e w|y\u0254r|a d|i m|a s|a n|\xE1k\u025B| l\xE0|l\xE1 |\xE1ar|d\xED |\xE0 i|ali|a f|en | c\u025B|b\u0254 |an\u2019| d\xE0|yaw|\xF3lo|\u2019 t|d\xE9n|\xECgi|s\xECg| \xE0n|\u2019 f| s\xE9|\u0254 s|\xE1na|\u025Bra|\xF3go|b\u025Br| \xF3 |a t|w n|\u0254n |ra\u2019|e i|\xE0 t|i \xE0|\xE0 d|si |se | se|\u2019 d| a |aya| \u0272\xE1| t\u0254|c\xF3g| c\xF3|s\xED |f\u025Bn|i b|\xE0ra| m\xE1|\u025Bya|lan|k\xE0l|\xE1 d|\u025B l|\u0254 \xE0|nga|n s|a w|\xE0ng|li |a \xE0|\u025B\u2019 |\xE0 n|ko | \xED | d\u0254|g\u0254n|e \xF2|a y|t\xE1 |\xED i|i t|\xE0la| na| d\xF2|so\u2019|u\u2019 |e\u2019 |r\u0254\u2019|a i|a g|ina|kan|nin|\u0254ny|a h|k\xF3 | \xF9 |ili|\u0254 b|w l|k\u025By|e n|den|ama| d\xE9|f\xFAr| f\xFA|i n|i \u0272|\xFAny|d\xFAn| d\xFA|ma\u2019|k\xF9n| k\xF9|\xF2n |d\xF2n|i l|e d|ga |nna|go |\xF2 k|i s|len|k\xE9l| k\xE9|\xED t| n\xE0|\u025B n|a c|i f|\u025Bnn|d\xE0n|\xED \xE0| l\u0254|d\u0254 |tig|\xE1ki|r\u0254n|h\u0254r| w\xF3|da\u2019|gid|\u0272\u0254g| \u0272\u0254|la\u2019|\xFAru|\xF2 b|ow | b\xE8| f\xE1|\u025B t| y\u0254|\u0254 y|j\u0254n|\xECna|m\xECn| m\xEC|\u0272\xE1n|\u025B b|e j|in |\xED y|\xE9le|b\xF3l|\xE0ga|\xEDin|d\xEDi",
        wol: "am | ci|ci | sa|sa\xF1|a\xF1 | na|it | ak| am| mb|lu |ak |aa |\xF1 s|mu |na |m n|ne | ko|al | ku|baa|mba|te | mu|ko | wa|a s|\xF1u | ni|u n| te| ne|nit|u a|e a| lu|t k|i a|oo |u m|ar |ku |ay | it|pp | do|u k|gu |u y|\xE9ew|r\xE9e| r\xE9|war| ta| \xF1u|i w| bu|xal|llu|\xE9pp|oom| li|u c|on | xa|ul |\xE0ll|w\xE0l| w\xE0|loo| yo| di|kk | ya| aa|u d| gu|yoo|oon|i d|i b|m\xEBn| m\xEB|fee|doo|bu |nn | bo|ew |e m|o c|r n| xe|eex|i m|boo| yi|nam|aay|m a| nj|ara| du|ju |xee|yu |en |een|naa|uy |ana|enn|aar|aju| bi|taa|ama|igg|oot| l\xE9|yi | pa|di | aj|ti |\xEBn |okk|k s|taw|lig|g\xE9e|ral|ee |u l|i l|m m|und|dun| de|li |u j|n w|an |w m|ala| me|eet| se|axa|ata| ba| so|n t|a a| d\xEB|m c|yam|mi |\xE9ey|gg\xE9|ota| gi|ir |ewa| an|a m|aam| ja| ke|ngu|om | su|a d|see|amu| ay|ax |ex |wfe|awf|dam| mi| ng|ey |p l|i n|o n|u t|a n|ool|jaa|ken|une| ye|la |n m|k l|kan|a l|et | yu|bok|mbo|u x|i t|\xE0ng|j\xE0n| s\xEB|k i|nee|i j|e b|men|ok |em |ndi|i k|\xF1 \xF1| lo|m g|nda|\xF1oo|kun|opp|ali| ti|laa|j a|l x|n n|lee|nd | da|ada|aad|are|nj\xE0|eem|y d| fe| jo|y a|l\xE9p|tee|aw |l c|wam|k c|n a|l l|nja|\xEBng|le |a b| mo|aan| fa|e n|m r|oxa|dox|n c|l a|ska|ask| as|aat|a c|mul|l b|aax|u s|y t|eg | j\xEB|k n|ng |g m|gi |gir|k t|\xEBy |s\xEBy|\xEBra|g\xF3o|kku|u\xF1u| b\xE9|tax|ba |e s|m s|i r|i c|k b|a\xF1u|t a|u w",
        nds: "en |at |un | da|n d| de|een|dat| un|de |t d| ee| he|cht|n s|n e|sch|ht |er |ech| wa|rec|tt | si| to|vun| vu|ett|ten| re| ge|n h|ver|nne|k u|elk| el|t w|ien|lk |sie|to |het|gen|n u|t u|n w|orr| an|n v|r d| in| ve|ch |war|ann| or|\xF6r |t r|rn | f\xF6|it |rer|ner|f\xF6r| st|rre|den|t g|n f|up | up|eit|t a|t e|rie| fr|aar|nd |ich| sc|chu|wat|n g|fri|nn |ege|on |oon|rrn|daa|t h| bi|is | is|rt |ell| se|hte|len|n o|n k| ma|kee|in |ik |lt |e s| mi|n i|aat| we| na|ven|hei|t s|t t|hn |lle|n t|n m| dr|ok | ok|doo|ers| ke|se |lie| s\xFC|nsc|ken|n a|arr|sta|\xFCnn|gel|r s|ren|rd |che|ll |ill|he |e a|nen|ene|men|ie |ins|ahn| gr| wi|ede|kt |\xF6ff|r\xF6f|dr\xF6|raa|sik|llt|n b|an |kan|ard|und|e g|gru|dee|ff |s d|sse|s\xFCn|all| ka|run| d\xF6|eke|st | do|ere| \xFCn|ehe|ebb|heb| gl|min|e e|ens|taa|rch|\xF6rc|d\xF6r|ig |nee|maa| so|al |aal|cho|tsc|e f|ieh|e v|t v|\xFCnd|iet|t m|enn|p s|el |h\xF6r| wo|t o|t n| fa|iht|eih|hen| al| ar|bei|rbe|arb|pp |upp|hup|e w|ehr| eh|utt| be| ut|na |inn|nre|lan|nst|ats|huu|as |weg|t f|e r|\xF6ve|eel|et | ni|mut| mu|pen|t b|a d|wen|ul |uul|e d| ah|str|eve|lic|ert|aak|hee|t k|ste|erk|\xFCss|d\xFCs| d\xFC|t i|der|iek|e m|mit|d d|nic|ent|gt |anr|set| as|aaf|tra|art|oot|r t| eg|ach|t l|l s|ter|akt|and|ame|hon|nat|n \xFC|r e|ite",
        fuf: " e | ka| ha|ndi|al |de |di |and| no|han|no | ma|o h|nde|e d|aa |e n|dyi|he |i e|un |a n|ala|dhi|yi |la |gol|re |dho|ka |eed|ho | wo|kal| dy|maa|dhe|o k| bh| ne|ko |ann|ni |hi | dh|bhe| nd|edd|won|ol |e e|ddh| mu|haa|ned|mun|e m| le| sa|i m| go|nnd|taa|aan|e h| fo|ede|eyd|ley|dan|e k|gal|aad|ii |i k|o n|sar|ond| fa|en |dya| ko|e b|tta|a k| he|ow |ana|uud|adh|iya|riy|yaa|bha|aak|ani|ett|het|ngu|aar|ydi|ari|i d|e f|i n|tal|le |ral|ira|ita|oni|ya |oo |na |nga|goo|dir|ndh|nda|ee |ydh| ta|e l|are|e g|ina|n n| wa|faa|fow| hu|i w| fi|akk|naa|ree|e w|udh|yan|ugo|i h|to |oto|nan| ng|oot|dyo|udy|oll|ore|fii|kko|mak|e s| da|a d|l m|on |dhu|dii|iid|ude|aam|i f|a e|o f|ady|den|n m|yee| on|e t|laa| la| na|l d|e a|idy|l n|l e|fot|ke |awt|lle|oor|in |o e| do|ubh|n k|a h|a b|a o|tan| ya|yng|att| ho|an |ake|nya|hen|a l|ewa|hun|i s|i t|mo |amu|te |n e|huu|taw|tor| o | ad|lli|onn|bon| bo|dee|bhu| an|ere|hoo|n h| ny|woo|iin|o w| mo|ku |er |der|ota|n f|dha|ant|l h|wti|tin| ke|tit|l l|yam|o b|aal|l s|a f|guu|ell|edy| se|und|n d| ga|ago|a t|eyn| ku|l g|gur|ama|a w|a m|oon|ndu|rew|waa|u m|nee|mu |tii|ri |nta|hin|wal|kaw|bhi| de|tug|dud|ure|uur|hey| fe|wad|do | si|too|o s|ing| te|tay|eta|o t|adu|ang|rda|urd",
        vmw: "tth|la |thu|a e|na |a m|ana|we |hu |kha| mu|a o|awe|ela|wa | ed|to |ire|ala|hal|dir|edi|ito|eit|rei|ni |mut|aan| wa|a w|u o|akh| on|a n|haa|ya | ni|o y|a a| yo|wak|utt|nla| ot| oh|iwa|ka |okh|att|oha| n\u2019|the|oth|mwa|mul|ari|ne | si|iya|aku|apo|lap|unl|kun|aka| el| wi|tha|ott| ok|ha |oni|e m|e a| at|ale|le | sa|e n| va|ene|ihi| aw|owa|o o|ett|e s|ele|hen|hav|oot|lel|ta |moo|ula|amu|iha| kh| en|e o|han|o n| ak|o a|ota| mo|i a|e w|po | mw|row|nro|ara|\u2019we|anl|i m|e e|de |ade|aya|a s|waw|ihe|ra |hel|eli|dad|a i|o s|ina|vo |a\u2019w|nak| ah|lan|i e|i o|ika|sin| et|wi |eri|n\u2019a|onr| ya|ri |var|ona|liw|hiy|nna|aa |wal|u a|a v|kan|oli| so|ko |huk|her|hiw|riw|avo|u e|wan|thi|aha|kel| an|eko|tek|hwa|sa |yot|itt|e k|uku|laa|riy|una|hun|ntt|yar|khw|ane|ath|pon|e y|o e|iwe|lei|ali|kho|wih| ep|n\u2019e| es|ida|ani| a |nih|n\u2019h|vih|avi|him|ei |lo | ma|aki|kum|i n|i w|nkh|uth| nn|a y|ahi|ile|rda|erd|ber|ibe|lib|i v|ia |ute|ole| it|som|i s|yok| na|ola|nuw|nnu| eh| yi|va |mih|saa|lih|hop|\u2019at|man|hik|a k|ikh|iri|nin|mu |elo|\u2019el|yaw|tte|mur|ont|ila|lik|hol|u s|uma|ma |uwi|inn|ehi|u y|nal|kin|saw|enk|in\u2019|nan| wo|tti|ena|mak| ek|pel|ope|oma|sik|epo|ulu|ro |ira|wir|nli|pwe|mpw|emp|lem|sil|pot|tel| oo|iko|esi|n\u2019o|era",
        ewe: "me |le |ame|e a|wo |kp\u0254|\u0192e | am| si|\u0256e | me| wo| le|si |sia|e d|a\u0256e|esi|be |p\u0254 |e l|la |e w| \u0256e| la| \u0192e| kp|na |e e| m\u0254| du| be|a a| a\u0256|nye| dz|e s| \u014Bu|uk\u0254|duk| na|e n|ome|ye |dzi|e m|kpl|e b|nya|\u0254kp|p\u0254k|\u0254 a|ple|ke |\u0254 l|\u0254nu|woa| o |iwo| nu|\u0254 m| al|evi|u a|awo|mes|\u0256ek|nu |\u014Bu |o a|\u0254w\u0254|e \u0256|n\u0254 |ekp|gbe|m\u0254n|k\u0254 |\u0254me|e\u0192e|eke|lo |alo| e\u0192|i n| ny|o n|o m|ya |dze| ab|ia |e \u014B|e k|siw|iam|o d|ubu|bub| bu|o k|zi |ukp|li |a m|w\u0254 |nuk|mek| ha|i s|kpe|e \u0192|eny|any|\u0254 s| go|e g| li|mev|\u014But|eme|akp|a\u0303 |an\u0254|gom| ey|bl\u0254|d\u0254w|m\u0254 | w\xF2|en\u0254|tso|iny|\u0254\u0256e|b\u0254 |oma|\u0254na|a k| ta|e t|to |n\u0254n| gb|ia\u0256|\u0256es|\u0254e |bu |egb|a s|vi | \u0192o| d\u0254| he| to|a \u0192|o e|\u0256o | \u0256o|ele|w\u0254w|aw\u0254|i l| an|l\u0254\u0256|abl|\u0192om|e h|i w|a n|w\u0254n|i d|ene|oto|yen|\u0254 \u0256|meg|i a|\u0254 \u0192|x\u0254 |ti | ts|afi|wom|agb| ag|nan|so |uwo|o g|\u0254n\u0254| vo|e\u0256o|t\u0254 |a l|et\u0254| at|o \u0192| ad|ee |se | se|ne | x\u0254|gb\u0254|uti| ma|ovo|vov|vin|\u0254wo|w\xF2a|i b|i t|a \u014B|a d| af|ats|e\u014Bu|e x|\u0256ok|o l| ne|ado|e v|de |\u0254 b|ta |eye| ka|g\u0254m| g\u0254|te |a e|ben| es|ana|a t|i \u0256|r\u0254\u0303|mee|o t| ak|ewo|\u0254 k|s\u0254 |i o|\u0254 e|i m|ema|ded|e\u0303 |man| el|yi |\u0256ev|ata|odz|e\u0256e|u s|k\u0254m|ate|da | xe|ax\u0254| en| aw|edz|ui |buw|heh|uny|pe\u0256|o s|ze |i e| s\u0254|bet|a g|ud\u0254|ehe|ada|o \u014B|o h|abe|he |o w|ts\u0254|u \u0256|ku |isi|kui|oku|\u0254 n| ke|ma |e o| t\u0254|men|ade|dz\u0254|o\u0256o",
        slv: " pr|in |rav| in|do |pra|ti |avi|anj| do|nje|vic|je |o d|no |li |ih |a p|ega| vs|o i|ost| za|ne | po|ga |ja | dr|co |ico|ako|vsa| v |kdo|sak| ka|ali|ima| im|e s|sti| na|van|i s| ne|akd|svo| sv| al|nja|nih|ma |pri|i d|stv|nos|o p|dru|i p|o s|pre|e n|jo | iz|red|iti| de|i i|neg|o v|ki |avn|vo |ni |em |i v|oli|a v|a i| so| nj|jan|obo|vob|ova|na | ki|ati| bi| ob|ko |ego|i z|tva|gov|r\u017Ea|dr\u017E|i n|kol|i k|e v|kak| ra|bod|se |eva|ru\u017E|jeg|e i|vlj| sk|\u017Een| mo|e p|sto|nak|ena| se|del|n p|ter|\u017Eav|jem|kon|sme|a d|voj|lja| ni|enj|pol| en|ovo| te| ta|va |imi|zak| st|bit| sm|var|a n|i o| z |mi |ve |kat|di |pos|lov|nsk|me |kr\u0161|aro| sp|o k|n s|en | je|tvo|odn|vat|ate|a z|vol|ri |ed |ju |sta|a s| va|ji |sam|a k|o a| s |ene|u\u017Ei|rug|ora|mor|jen|ans|elo|avl|itv|e m|eja|dej|rst|vne|nan|ove|e b| me|lje|r\u0161n|akr|nar|\u010Din|\u017Eiv|\u010Den|i m|o z|so |eni|rod|pno|za |oln|dol|h i|olj|tak|ars|nju|ebn|mu |o o|i\u010Dn|cij|aci|\u0161\u010Di|h p|vi\u010D| ve|raz|nst|ajo|ode|kup|sku|e d|v n|u s|otr|nim|jav|\u0161ne|vi |vni|rim|kaz|ta |ovi|ski|n n|\u010De |ose|v s|o t|da |ev |nik|rem| ko|ara|n d|bra|e o|ijo|si |i u|ra |\u017Eev|ra\u017E|vez|dov|ons|zni|obr| ja| sa|ljn|elj|dst|dis|bre|i b|m v|zna|sod|nem|\u0161ni|ina|an |seb|pro|ere|oji|mej|amo|skr| bo|edn|med|iko|ust|mo\u017E",
        ayr: "apa|nak| ja|aka|ata| ma|aki|asi|a\xF1a|ana|aqe|\xF1ap|cha|aw |mar|ti |jha|iw |paw|pat|spa|ark|tak|ama| ch|ani| ta|una|jh |hat|kap|kan|a j|jaq|rka| uk|a m|aru|ki |kis|jan|taq| ar|pa |qe | wa|na |a a|niw|may|kas|iti|ach|i j| kh|ayn|ina|pan| mu| ya|ati|a u|yni|ha | am|amp|w k|as |uka|i\xF1a|sa |mun|at |hit|isp|t a|is |ch |ka |khi|\xF1an|e m|an |isi|oqa|ru |asp|si\xF1|ejh|ta |qha|kam|h a|ajh|pjh|at\xE4| u\xF1|han|mpi|sis|sti| in|ita|qen|ham|\xF1at|\xE4\xF1a|t\xE4\xF1|sin|rus| sa|ma |iri|ara|sit|yas|\xF1ja|ska| ut|yat| ku|arj|qat|tis|tap|kha|pas| ji|ura|u\xF1j|jam|a y|nin|nch|ka\xF1| ju|ha\xF1|ukh|na\xF1|kat|qas|i t|noq|rjh|lir|ili|\xF1a |kun|tas| ka|ans|tha|kak|utj|w m|aya|pi | as|i u|nka|us |aqa|kiw|a t|has|jil| lu|tat|sna|tan|tay|w u|ino|i m|in |w j|rak|s a|apj|jas|nsa|asn|pis|i a|mas|wak| ay|w t|i c|njh|ipa| a |s j|s m|chi|kaj|sip|ra\xF1|lur|mp |ta\xF1|a k|uki|rin|upa|iru|hac|ena|uya|muy|amu|wa |a i|llu|yll|ayl|api|hap|nip|ak |aqh|yaq|n m|a c|tja|eqa|uch|ayk|isa|ank|asa|sap|k a|anq|awa|s u|lan|h j|pam|i y| pa|ask|h u|a w|ap |juc|anc|run|nap|ri |ali|auk|inc|nir| aj|tir|ast|ink|anj|isk|kar|jac|ist|ni |usk|khu|yan|mat|a s| ap|pka|en |\xF1as|sir|qer|i k|kit|heq|che|m\xE4 | m\xE4|s k|e j|yt |ayt|way|qa\xF1|naq|nas|n j|sar|war|s w|s c|ika|hik|a l|t u|hus|h k",
        bem: " uk|uku|la |wa |a i|kwa|a u|ali|ta | mu|a n| na|ya |amb| ya| in|ata|sam|shi|ula|nsa|nga|ang| ku|bu |mbu|wat|se |nse| pa|ins|ons|kul| ba|li | no|aku|lo |ngu|nan|a m|gu | al|ala|mo |a a|fya|a k|ntu|yak| ca|ikw|ing|u u|lik|na |e a|ili|alo|nok| on|u y| um|tu |a p|ga |o n|mu |lwa|lin|sha|i n|ka |ila| ci|ku |uli|oku|ika|and|ulu|ukw|ana|kup|akw|ko |ama|we |cal|a c|amo|umu|aka|a b|aba|kus|lil|o u|cit|kan|yal|mbi|ndu|mul|pa |o a|ish|le |ile|o b|hi |u m|bal|kub|u c|kal|u a|uci|ba |ne |unt|e u|any|ton|kwe| sh|po |ha |yo |bul| fi| if|nsh| ab|du |kuc| fy|e n|abu|ung|u n|cil|nka| ne|kum|a l|fwa|o c|lan|o i|i u|a f|kut| am|und|ush|nda|kuk|afw|no |gan|pan|upo|a o|win|aya|ale|bi | ta|ify|utu| ng| ka|tun| bu|int|wil|fwi|u b|pam|lam|apo|way|ako| ic|bil|ans|uko|apa|wab|mun|ma |nya|cin|ban|tan|wal|ela|o y|ine| af|imi|lul|kap|ngw| li|ubu|e b|mas|nta| ma|ilw|ti |iti|gil|ngi|eka|imb| im|twa|e k|uma|umw|i k|tul|pat| ak|gwa|u k|ita|onk|ant|bom|usa|a s|but|eng|e p|iwa|umo|ici|o f|afu|sa |da |atu| ns| is| wa|mut|o m|nto|ont|uka|baf|ilo|min|mba|kuf|ini|u s|pok|ye |ily|men|kwi|hiw|pal|ind|ute|cak|mak|tak| at|ash|u i|lel|ina|alw|lu |asa|asu|kat|o o|aik|ubo|suk|ule|ufy|upe|e i|til|lya|pak|nam|mwi|efw|lef|ate|tek",
        emk: " ka|a k|ka | a |an |la | la| ma|kan|na |a l|a a|n k|ya |ni |ama|a m|ma |\u025B\u025B | di|lu | ja| b\u025B|ana|aka|man|di |a b|b\u025B\u025B|iya|d\u0254 |a d|ara|jam| si|a s|m\u0254\u0254| m\u0254| sa| d\u0254|en |\u0254\u0254 | t\u025B|alu|i s|da |t\u025B |sar|den|a j|riy|ila| ye|ani| k\u025B| i |i a|ye |ari| ni|n d|kak|\u025B k|\u025Bn |a t| ba| al|i d|ra |nna|len|\u0272a |aar|n m| se| bo|olo|\u0254n |sil|ele|\u0254d\u0254|n n| k\u0254|i k|ank|\u0254 a|baa|e k|a \u0272|se |bol|\u025B d|lo |u d|kel| s\u0254| na| da|n s| ke|\u0254n\u0254|fan|a f| fa| de|nda|a i|\u025B s|ade|ada|m\u025Bn|ala|i b| mi|and|\u0254 s|lak|\u025B m|\u025B y|li | ha|d\u0254n|s\u0254d|nu | ko|\u0254 b|k\u0254n|ina| su|\u025Bda|k\u025Bd| wo|han| m\u025B|kar|ko |aya|a n|\u0254 m|i m|n\u0254 |\u0254 k|\u0272\u0254\u0254|n a|ata|\u0254ya|n\u0272a|nnu| wa|n b|in |nka|k\u025B |olu|a h|i l|dan| an|mad|le | le|ran| gb|a g|u l|e m|i j|si |kun| ku|u m|\u025Bn\u025B|ii |suu|lat|enn|nad|nin|on |don| \u0272a|\u025B l|aji|\u025B b|mak|u k|yan|a w|u s|\u025Bnn|i t|sii|n t| \u0272\u0254|wo |dam| ad|awa|law|u t|\u0254nn|\u025Bd\u025B|nba|enb|b\u0254 |ibi|jib|waj|gb\u025B|\u0272in| \u0272i|o m|nan| l\u0254|f\u025B | f\u025B|b\u025Bn|din|kol|f\u025Bn|af\u025B|maf|su |usu|uus|taa|u y|e a|ta | ta|aba|\u0254r\u0254| d\u025B|d\u025B\u025B|asa|iri|mir|ba |udu|fud| fu|ini|b\u025Bd|aha|dah|du | b\u0254|\u0254 j|tan|dal|te |ida|lan|biy|ant| do| te|i w|k\u0254d|\u0272\u025B |l\u0254n|\u0254\u0254y|min|\u025B j|nal|n\u025Bn|\u0254\u0254n|aam|e b|ili|kil|nki|en\u0272| du|nni|wan|tii|was|d\u025B |a y|o s|\u025Bb\u025B|bay|ali|l\u0254 |f\u0254l| f\u0254|\u025B a|\u0254 n| t\u0254|bil| bi|e i|nfa|anf|iil|e f|\u0254 l|san|\u0254 d",
        bci: "an | \u0254 |be | be|un | i |wla|ran|kwl|la |sra| sr|in |n b| kw|n s|k\u025B | k\u025B|n k|le |a k|n n| nu| ng|l\u025B |nun| a |n i|man|n \u0254|\u025B n|n m|kun|a b|e k|i s| ku|\u025Bn |nga| su|mun| n | ti| fa| mu|su |ga |ti | ni|e n|e a|\u0254 f| li|\u025B \u0254|nin|a n|e s|a s|i n|\u0254 n|a \u0254| le|tin| at|\u0254 k|wa |ati|\u0254 l|\u025B i| s\u0254|ta |ata|fat|\u025B b| ma| m\u0254| sa|m\u0254 |s\u0254 |a a|i\u025B |akw|di | s\u025B|vle|nvl| nv|lak| kl|\u025B m|i b|i k|li\u025B|d\u025B |nd\u025B| nd|s\u025B | wu| yo|lik|\u0254 \u0254|n a| ka|\u0254 t|\u025B s| mm|e w|yo | di|i a|ba |ngb|ke | an|und|sa |a m|m\u025Bn|e t|uma| fi|ike| ju|e y| m\u025B|mla|mml|\u0254 b| ny|i i| bo| ye| si| aw| y\u025B|e m|bo |e b|fa |n f|ndi|\u0254 i|i f|e i|o n| tr|jum|\u025B a|a w|kan|i w|wie|wun|a y|n l|y\u025B |awa|\u0254 y|ge |nge|ing|u\u025B |ie |ka | f\u0254|b a| b | fl| o | wl| wi|fin|tra|klu|i m|lo | uf|a i|ang|\u0254un|f\u0254u|n t|gba| wa|ua |uwa|luw|flu|o i|b\u0254 |wuk|uan|fl\u025B|e l|ye |n y|nan|n w| ba|\u0254b\u0254|b\u0254b|\u0254 d|o \u0254|ufl|nz\u025B|anz|kpa| kp|\u025B k|al\u025B|dan| ak|e \u0254|sie|te | af| b\u0254|lun|nyi|kle|nua|u m|lu | na|u i|il\u025B|i t|z\u025B |fu\u025B|\u025B w|a t|ika|u b|\u0254 s|anm|b\u025Bn|gb\u025B| bl|ci |aci|i \u0254|n u|o m|wl\u025B|i l| bu|se | se|e f|i\u025Bn|wo | wo|bu |el\u025B| yi|afi|uka|a j|i j|ian|nma|san|u n|aka|anu|u s|a l|unm|\u0254 w|nda|ote|vot| vo|fi\u025B|e j|wan| k\u0254| ja|o b|usu|\u0254n |n j|anw|\u0254l\u025B| j\u0254|w a| w |kac|o s| ya|i y|ngu| e |u \u0254|dil|tua|yi |yan|nya|ja ",
        bum: "e a|od |an | mo|e n|mod|ne |am |se | ab|e m| me| os|ai | ai| ng| ak|ose| y | an|e e|y a| nn|le |d o|nna|a a| be| en| dz|nam|ele|ane|i n|nde|i a|n a|de |a m|i\xF1 |end| a |ie |na | na|a n|bel|abe|e d| as|nyi|ki |a b|ngu| ya| ay|ven|mve|ge |m a|ul |gul|da |li |ya | ki|asu|be | bo| e |su | et|oe |l y|i m|yi\xF1|dzi|ebe|yia|eny|ene| mv|i e|ian|ala|e b|nge|en |og | mb|ili|e y| mi|ege|bod|tob| ma|nda|ayi| at|e k|la |abo|\xF1 m|ban|bog|\xF1 a|ve |om |eti| to|bo | ny|fe | bi|e v|o a|g a|d m|fil| fi|dzo|mem|ben| se|abi| si|beb| nd|n e|woe| wo| fe| ek|zie|aye|oan| nt|emv|ia |bia|ato|e f| ad| da|ga |nga|n m|u m| ve|mbo|a e| te|ial|sie|me |ond|ug |lug|m e|obo| al|do |n b|uan|ae |n k|di |k m|e s|e\xF1 |zia|e t|d b|to | ba|alu|ako|o m|si |a s| di|oba|ma |edz|man|ama|n y|m w| vo|n n|d a|bi |aka|m y|min|\u014Dk |k\u014Dk|ak\u014D|zen|em | nk|\xF1 d|mis|tie|i b|ali|kom| es|eku| ze|ii |mam|zi\xF1| zi|ndo|o e|s a|i d|ye |a\xF1 |ake|vom|a f| ev| eb|m m|fam| fa|men|lu |ulu|\xF1 e| mf|dze|boa|gan|sog|tso|s m|is |sal|esa|ses|teg|ese|yeg|mon|u a|kua|any|ela|ad |lad|ete|und|kun|nku|uma|aku|o n|e o|bon|ui |dza|\xF3 m|\xF1 n|adi|e z|die|tii|us |ebo|meb|a d|zo |u n|med|nye|kam|l a|voe|deg|da\xF1|ol |ke |l n|yae|kya|aky|m s|eki|d e|kal|m o|te |oga|nts|i s|omo",
        epo: "aj | la|la |kaj| ka|oj |on | de|iu |raj| ra|as |ajt|de | \u0109i|a\u016D | li|j k|eco|\u0109iu|ia |jn | pr|o k|e l| al|est| a\u016D| ki| es|jto|co |kon| ko|en |tas|n k|an | en|pro| po|a p|ta |io |ere|ber|ibe|lib|j p|n a| ne| se|o d|to |aci|kiu| in|o e|a k|ajn|j l|ton| pe|do |o a|cio|j e|jta|iaj|eni|ro | ha|taj|ita|rec|lia|toj|ado|vas|hav|per| re|a a|o \u0109|sta|iuj| si|a l|stu|cia|j r|ala|n p| ri|ekt|je | je|ter|tu |nac|al |j d| di|tra|sia|ava|nta|a s| so| aj|sen| ti|ali|uj |a r|nec|int|n d|s r|ent|kto|oci|soc|por|ega|j a|n l|rim|ojn|u h|e s|s l|or |a e|u a|j \u0109|pri|ntr|ont|evi|u r|n j|re |nte|ata| fa| pl| na|ika|igi|tiu|laj|gal| eg|ra\u016D|cev|ice|ric|ne | ku|\u011Di |lan| ju|nen|j s|n s|no |era|pre| el|ian|bla|ebl|vi |tek|e a| pu|don|u s|u e|ers|art| su|i\u011Do|j n|o p|igo|ren|e p|ons|li |j i|ena|er |len|ple|n r|ote|rot|sti|s e|for|n \u0109|niu|imi|son|tat|o n|o r|u l|con|ili|duk|bor|abo|lab|edu| ed|tan|i\u011Di|ioj|is |ni |uzi|lo | ek|res|men|un |dis|e e|el | ma|erv|i e|ern|ato|\u011Do |a d|lig|go |\u0109i |coj|unu|ti |la\u016D|moj|hom| ho|kad|kun|edz| ce|\u015Dta| \u015Dt|i k|zo | ar|n i|u k|ra |kri| ag| kr|j f| vi|ura|nda|ono|rso|par|ndo|and|jur|far|ven|\u016D s|ka |eli|sek|\u0109u | \u0109u|kia|kla|ini|uka|r l|ele|rto| pa|i l|ora|edo|le | ge|l l|opr|ive|ziv|luz",
        pam: "ng |ing|ang|an | ka| pa|g k| at|ala|at | ma|g p| ki|apa|kin|lan|g m|ata|yan|pam|kar|ara|pat|tan| in| ba|pan|n a|aya|ung| a |g a|g b|rap|ama|man| ni|nin|n k|tin|ati|n i|tun|a a|iya|bal| me|ami| la| di| iy|asa| o |etu|nga|mag|met|ban|in |din|a k|nan|a i|ya |mak| na|ari| mi|kay|aka|yun|ipa| sa|sa | al|rin|a m|na |kal|ant|g s|par|ana|al |ali|ika| da|t k|san|gan|ran|lay|u m|nu |g l|un |a n|atu|kat|awa|a p|t m|ti |iti|syu|mip|ila|aba|n n|la |kas|as |ili|nsa|wa |kap|mal|ra |n d|aki|g n|t p|g i|anu|t a|tas|ans|ita|iwa|uli|i a|mil|a d|bat|sal|ira|li |una|lal| it| pr|dap|ral|ad |usa|o p|kab| an|mik|tul|e p|nte|iba|tau|be |ag |s a|aga| e |lit|mas|wan|lir| ta|abe|g e|abi|n o|n p|lip| li|lam|pro|n l|te |au |kan|g g|ap | ar|ani|alu|e k|it |sab|ale|a b|t i|eng|tek|uri|lab|ail|l a|nti|mam|i i|gaw| tu|ily|ian|liw|inu|da |g d|g t|bra|obr|u i|mba|ina|aru|abu|ie |bie|mit|am |o k|lya|pun|o a|a o|asy|gga|lub|pag|gal|bla|abl|en |len|lat| bi|pak|tur|lin|ksy|eks|ote|rot|e m|ril|sar|u a|u n|tu |gpa|agp|n m| ke| pi|ipu|ka |wal| re|ta |tik|ngg|nap|rti|art|ema|gam|ko |kia|kai|aun|d a|tad|nta|amb|a l|rus|g o| ya|lak|bus| ga|gob|dan|sas|ags|nun| nu|sak| ag|e d|a e|agl|are|bil|ndi|and| pe|iyu|rel|kul|i k|upa|isa",
        tiv: "an | u | na|nan| sh|en | a |shi|ha | i |sha|a i|or | er|er | ma|u n|n i|han|ar |n s|gh |r n|n u|a m|in |y\xF4 |n a|na |n n|hin| ha|u a|a u|a k|mba|n m|a n|nge| lu|kwa|man|n k|ana| ke| ve|r u| kw| mb| ga|ren|lu |a t|agh|ir |ga |aor|mao| y\xF4|a s|nma|anm|ang|wag| ia|gen|a a|ba |ma | ci| ng| gb|i n|ken|ere|ian| or|aa | kp|e u| ta|ve |r i|ii |gu |ngu| la|ity| he|om |a h|hen|n g|ge |la | ts|n t|e n|oo |gba|kpa|u i|ese|se |aha|cii|r m|tar|r s| ka|ol | ne|tom|u k|ugh|ish| ku|ev | it|doo|ior|n e|on |ene|u s|hi | de|n h| te|yol|oug|a v| to|igh|u t|ty\xF4|ind|i u|i d|ima|iyo|h u|paa|a l|ua |ndi|o u|him| is|r k|i m|ie |hie|tes|u e|yan|hir|ker|di |e s|uma|r a|a e| do|m u|nen|era| io|e a| ya|un | as|ne |tin|ee |mak|u h|tse|n y| za|a g| in|bar| mi|ka |i a|ron|\xF4ro| iy|men|ase|e e|de |\xF4 i|a o|nah|ave| zu|gbe|ran| ti|i v|io |u l| ik|r t|n l| ig| mk|nja|inj|eng|ant| wa|e h|mi |a d|ra |kur| ij|a y|end|hio|lun|l i|r l|av | fa|u z|h s|e i|do |ndo|i k|i i|ta |nta|ake|ash|uan|zua|u m|e m|i l|a w|ura|\xF4m |m\xF4m|vou| vo|i e|iji|e k| hi|da |nda|ghi|kig|iky|see|v s|a f|n c|was|ce |ace|mac|soo| so|r c| mt|vir|ivi|civ|zou|mzo| mz|a c|nev|ves|emb|sen|jir| m\xF4|e l|e g|i y|een|uer|lue|alu| al|u u|\xF4 u|zan| im|\xF4nd|n z|e y|em ",
        tpi: "ng |ong|lon| lo|im | ol| na|la |ela|pel| ma| yu|at |ait|gat|ri | ra|na | bi|ol |t l|it |rai| ka| o |mi |umi|bil|yum|ilo|man|t r| i |eri|ing|iga| ig|mer|ara| wa|i o|rap|tin|ta |eta|get|lge|olg| sa|wan|ap |ain|ape|nar|in |a m|ini|ant| no|i i|em |m o|g k|n o|sim|an |as |mas|i n| wo|yu |nme|anm|wok|g y| me|kai| ga|ok |tri| pa| ha|ntr|kan|g o|m n|a l| st|g s|i b|a i|g w|a k|g l|i m|g n|gut|ama|isi|o m|l n|sam|kim| in|lo |pim|aim|kam|p l|sin|amt|a s| gu|i l|tai|mti| ko|t w| la| ki|m l|en |g b|tpe|no |nog|m k|a t|utp|tap|sta|m y|nim|nap|api|g p|tu |ts |a p|nem|i y| tu|kis|lai|oga|tim|spe|isp|its|a o|a n|nka|map|nta|l i|usi|g g|o i|s b|sem|lse|ols| sk|n s|t n|m s|g t| ti|luk| lu|ni |iki|o b|sen|o l|os |et |iti|kin|dis| di|a y|asi|pas|ane|ari| pi|ili|ina|o k|aus|s i|ot |a h| ba|npe|anp|nin|aun|yet| ye|ik |lim|gti|ngt|m g|i g|pik|aik|u y|sai|kot|ut |k b|uti|aut|kau|pos|sap|un |a g|s o| ta|am |ve |ave|sav|i s|s n|t o|ank|a w| fr|ul |kul|sku|ti |m b|go | go|u n|g h|n i|ese|i w| ne|ati|vim|ivi|ali|t m|n b|gav|o n|apo|rau|n m|l m|hap|o w|oli|s l|es |les|ple|m m| em|l s|a r|m i|fri|liv|hal| si|bun|pai|dau|nsa|ins|upe| hu|g r|kom|ana|san|n r|nis|gar|aga|bag|n n| pe|m p|m w|s s|avm|uka| as|g m|g e",
        ven: "na | na| mu|a m| vh| u |ha |we |a n|wa |tsh|hu |a u|\u1E45we| ts| ya|lo |ya |ana|nga|vha|ho |o y|u\u1E45w|a v|thu|ane|mu\u1E45|shi|e n| dz|vhu| pf|elo| kh|nel|ga |a p|a t|fan|ne | zw| ng|pfa|sha|u n|uth|aho| a |a k|mut| ka| hu|a h|ele|kan|kha|o n|edz|wo |dza|zwa|la |u m|a z| mb|e u|dzi|hum|si |i n| wa|a d|mul|e a|zwi|u t|fho|ang|\u1E13o | ha|u s|o v|gan|olo|vho|ela| \u1E13o|lwa|o d|hol| i |ula|aka|o m|no |za |o k|hi |he |shu|han|o t|zo |ofh|lel|led|rel|low|u v|awe|tsi|hak| sh| ma|ka |mbo|ano|e k|yo |elw|a i|a s|bof|ngo|o i| te|nah|owo|i\u1E45w|hil|its|o h|dzo|zi |dzw|mba|lan|e m|i k|sa | mi| si|ing|one|hon|and|ush|go |isa|li |het|e v|a l|swa|ire|sir|i h|i t|a \u1E13| nd| lu|eth|umb|hat| fh|dzh| it|ine|wi |avh|khe|u k|ea |tea|unz|ni |\u1E71he|ath|ndu|hen|ila|u a|mo |wah|kon|ulo|vhe|wan|o w|u w|mis|a a|a y|i \u1E13|isw| an|iwa|hus|hel|e y| sa|alo|mbu| \u1E3Da|o\u1E71h|le |du |mus|o a|uts|ayo|tel|nda|amb|uvh| ho|vel|fun|i v|zan| ny|a w|zwo|o \u1E3D|pfu|u i|adz|hut| bv|kat|lay|hav|hit|afh| \u1E13i|evh|i m| ko| li|umi|a\u1E45w|so |fha|ene|nyi|she| o |mal| i\u1E45|n\u1E13a|mel|zhe|ivh|zit|hii|san|lis|ili|eli|ala|hul|u h|o u|ura|bul|nzo|umo|i i|mbi|haw|hin|o z|u \u1E13| th|o f|oni|lus| yo|alu|lwo|\u1E13a |an\u1E13|fhe|zhi|u d|eah|usi|a \u1E71| re|une|ite|ere|rer|hur|mbe|hal|lul|ule|thi",
        ssw: "nge|ntf|e n| le|tfu|eku| ng|a n|o l|la |lo |fu |khe| ku|nga|tsi| ne|le |unt| lo|he |mun|a l|nkh|ma |si |ele|elo|ung|nom|oma| no| um|wa |ni |ent|lel|lek|eli|lun|kut|ko |nel|gel|eni|pha| ba|onk| la|e l| em|ats|tfo|a k|e u|o n|e k|nye|hla|ela|umu|ban|oku|ulu|aka|akh|lil|won|ema|lok|lul|hul|a e|eti|ala|tse|khu|uts|ilu|i l| wo|ane|ye |nti|ndl|ang| na|ule|ve |we |esi|nek|na |ke |any|aph|ana|fo |set| li| ye| un|ale|lan|u u|hat|une|te |e b|eko|aba| ka|kwe|and|gan|lwa|ka |gen|tin|nem|phi|fan|wen|ben|mph|nal|kan|i n|ile|lal| ek|i k|gek|kel|o y|lab|ant|seb|u l|len|ahl|\u2010ke|let|e e|ako|ebe|lom|ive|be |ing|a b|kha|etf|uhl|ba |isw|kus|kho|ukh|yel|wo | kw|ikh|o k| im|uma|kat|kub|ne |ndz|sit|alo|ise|ini|omu|uph|abe|ngu|e i|alu|mal|nak|a i|kuv|sen|tis|kun|elw|lwe|e w|iph| in|fun|enk|sek|eke|dle|ti |lin|ase|a a|sa |use|hak|gab|a\u2010k|e a|les|kul|nen|kuh|ta |cal| ti|isa|tfw|ona|swa|ene|ma\u2010|hol|jen|ali|eki|bon| se|to |fol|utf|yen|ula|o e|lon|kuk|ike|liv|sel|ute|sik|lak|eng|hi |ume|kuf|alw|int|sha|nhl| ya|its|i e|fut|i a|und| bu|i u| ab|ebu|emb|dza|ndv|kil|emp|had|yak|ets|ifa|vik|emt|phe|emi|ite| si|tsa|kwa|u n|dla|a u|olo|imi|o m|han|gap|nan|ufa|ata|wem|mts|end|uvi|i w|ekh|owo|low|ind|i i|uba|mel|vum|dvo",
        nyn: "omu| om|a o| ku|tu |ntu|wa |ari| ob|ra |a k|obu|mun|uri|mu |unt|a n| mu|nga|ri | na|ho |e o|bwa|aba|rik|a e|gye|han|ga |ang|oku|a a|bur| bu|iku|re |ush|aha|iri|uga|ka |i m|ndi|sho|ain|kur|u a|we |ere|ira|ibw|ire|na |e n|ne |ine|iha|aho|ung|and|e k|ye | eb|a b|ban|eki|ing|bug| ni| ab|ba |kut|ura|uba|be |ro |u b|sa | kw|bir|ebi|u n|kwe|e b|gir| ok|i n|kir|zi |abe| bw| ah|o o|kub|i k|gab|ish|sha|era|o e| no| ai|u o|ate|tee| ek|di |rwa|ha |kuk|rin|mer|wah|kwa|i b|bwe| ba|ant|zib|u m|end|ngo|i a|ngi|bus|nib|ama|baa|kuh|iro|iki|eka|eek|i o|nar|o g|go |kug|ya |kan| ka|ngy|ana| ar|o b|agi| ti| or|hi |shi| gw|eme|ash|gan|bwo|o k|rag|uru|ute|ris|ja |mur|ora|tar| nk|she|o a|i e|oro|iba|yes|wee|tek|ara| en|bya|ija|mus| ha|kus|mwe|eir|hem| ne|obw| n |eih|rir|za | we|ekw|naa|yen|o n|uta|iho|rih|har| by|egy| er|e e|amb|da |nda|rei|gi |wen|kwi|aar|eby|rer|yam|a y|isa|yaa|nko| bi|aka|sib|aab|ind|riz|uku|irw|si |nsi|ens|iin|aij|mub|a r|ugi|oon|ata|ki |dii|nka|utu|bas|hob|aga|kor|uko|n o|eri|bye| am|amu|ika|ham|mut|umu|nok|aat|izi|uzi|o m|ebw|oba|emi| em|rim|azi|uka|rye|ona|okw|u k|e a|kum|tuu|ibi|ahu|gwa|bor|mo |aas| ya|ent|ete|u e|ori| ei|bo |ani|amw|aah| ky|uma|eer|der|nde|ugy|a z|ikw|tih|ong|yob",
        yao: "ndu|chi| wa|du |akw|aku|a m|kwe| ch|und|ni | mu|wak|mun|la |e m| ak|wa |wan|amb| ku|ulu|mbo|ali|u w|we |ila|kut|lu |bo | ma|kwa|a n|ful|ufu|le |se |a k| ni|hil|nga|ose|ete|e u|ang|jwa| jw| ga|na |kul| uf|lam|ne |amu|aka|son| na|e a| pa|oni|u j| so|ngo|wal|and|go |mwa| yi|te |wet|ana|uti|nda|yak|che|lij|gan|i a|a c|ele|cha|o s|e n|jos| ya|o c|ijo|i m|ti |pa |ga | mw|kam|ya |ula|asa|ala|ind|yin|e k|isy|ich|kas|ile|li | ka|ili|o m|ani|si |ach|u a|nam|ela|jil|ikw|a w|mul|yo |uch|aga|a u|hak|asi|kap|gal|kus|mbi|mba|mal|ma |ule|ape|o a|lan|i w|imb|pe |his| al|e w|end|a p|usi|ika|uli| ng|ope|sye|a j|aji|kum|ase|i k|ine|pen| ja|lem|him|u y|e c|mas|ka |och|ena|ekw|sya|ako|kup|a y|any|man|ane|ten|kol|hel|i y|ola|i u|wo |wam|e y| ul|kwi| kw|awo|gam|cho|gak|o n|eng|sen|pel| mp|iwa|da |gwa|sop|jo | ji|mch|ite|ama| li|ngw|hik|syo|u g|mpe|je |oso|ye |emw|ujo|duj|uwa|kuw|bom|ja |i g|mus|waj| mc|iga|tam|upi|jak|ong|dan|a s|sa |was|ole|nde|nji|ene|oma|nya|poc|ons|lo |apo|a l|i n|alo|mka|ale|one|o k|lil|uma|lic|ung|i j|ban| bo|mag|ata|usa|win|lik|hos|o g|sik|lig|lek|kan|anj|iku|pan|ing|u m|wu | aw| mm|eje|uku| yo|omb|pak|a a|he |hin|e s|esy|nag|muc|iji|lwa|mma|kal|ba |nil|uta| nd|awa|i p|ipa|no |ano",
        lvs: "as |\u012Bba|ies|tie|bas|ai |un | un| ti|s\u012Bb|es\u012B|ien|ir | ir|vie| vi| va|bu |am |\u012Bbu|iem|m i|em | ne|s u|r t|vai| uz| pa|uz |ena|\u0101s |pie| pi| iz| sa|nam|dz\u012B|\u0161an|isk|ar | ar|kvi|ikv| ik|vi\u0146|br\u012B| br|es |r\u012Bv| ka| at|u u| ci|i i|s p|cij| no|edr|in\u0101|\u0101ci|s v|i\u0146a|dr\u012B|dar|s t|u p|u a|p\u0101r| pr|i a|ot |nu |s s| la|z\u012Bb|ska| ie|aiz|jas|ija|v\u012Bb| j\u0101| ap|\u012Bb\u0101|\u012Bgi|vis|arb|t\u012Bb|gu | st|k\u0101 |s i|val|\u012Bv\u012B|\u0101m |\u012Bdz|st |ied|bai|\u012Bgu|s b|\u0146a |t p|ar\u012B|lst|als|ana|s n|gi |l\u012Bd|s l|mu |umu|kas|jum|ju |iju|kum|u i|ba |u n|izs|n p| ai|\u0101 v| da|n\u012Bg|ama|u k|u v|i v|rdz|son| t\u0101|kst|\u012Bks|r\u012Bk|ned| so|iec|s k|aj\u0101|cit|sav|l\u012Bt|st\u012B|pil|u d|t v|per| pe|b\u0101 |n\u012Bb|i n|not|st\u0101| dz|s d|m u|ras|tu |cie|n v|kat|\u0101 a|mat|en\u0101| li|evi|nev| k\u0101|kur|aut|nas| p\u0101|sk\u0101| re|a a|a v|k\u0101d|ebk|jeb| je|bez| be|j\u0101 |l\u012Bb|i u|i p|bie|tik| ta|n i|pam|mie|ard|sar|zsa|n\u0101c|iku|lik|iet|r j|b\u016Bt|rso|ers|du |ikt|sta|ci\u0101|oci|soc|c\u012Bb|tis|r\u012Bb|\u0101da|t\u012Bt|\u012Bt\u012B|gl\u012B|zgl|izg|abi|ul\u012B|aul|lau|tra|atr| l\u012B|ais|tot|atv|umi|nod|anu|t s|a u|ram|ier| ku|a p|t\u0101s|kt |kl\u0101|a s|ta |ant|i\u0101l|ma | ve|n b|n\u0101t|ekl|ret|pre|\u0101 u|lv\u0113|ilv|cil|j\u0101b|sab|eja|o\u0161i|m\u0113r|\u0101ti|ro\u0161|dro|pat|m k|kri|rie|\u016Bt |m v|\u0113t |t t|z\u012Bv|\u012Bga|a i|kar|atk|nea|ts |\u0101du|\u0101t |s m|l\u0101s|n\u0101l| na|ec\u012B|tas|i\u0123i|li\u0123|eli|rel|uma|sas| ga|s g|et |m p",
        quz: "una|an |nan|as |pas|apa|ana|cha| ka|lla|man| ru| ll|sqa|run|qa |aq | ma|ach|ta |pa |paq|npa|mi |taq|na | ch|a r|kun|hay|anp|tin|nta|nch|yta|chu|asq|chi|aku|lap|ant|qan|kuy|in |ama|aqm| wa|qmi|a a|ay | ya|ata|nap|ati|ipa|wan| ju|ina|a k|aqa| at|may| ja|a l|aqt|ayt|a m|kan|ima| pi|n k|s m|nin|ank|tap|anc|qta|his|hu |pip| mu|n j|all|a c|spa|uku|ypa|qpa|iku|yac|pi | pa|ion|uch|naq|pan|n m|a p|kam|un |han|ayp|a j|aci|nac|awa|n r|laq|s k|nma|anm|usa|aus|kau|isq|k a|n l|cio|asp|lan|n c|ayk|yan|nak|oq |yoq|ayn|inc|nat|uy |n p|yku| im|mun|jin| ji| yu|i k|has|q j|tan|inp|tuk| tu|n y|ura|kay|uyt|kus|\xF1a | na| sa|is |nmi|s t|s w| qa|mac|tun|atu|jat|asi|yni|uya|api|pac|nk | ay|kaq|tiy|waw|inm|ech| de|n t| ri|q k|a y|ma |hik|nti|sin|kas|lin|lli| al|ari|nku|juc|was|nal| aj|i m|pay|rmi|arm|war|a q|yay|yuy|q y|say|i p| ti|usq| an| as|qti|n a|npi|pap|hur|a w|rec|ere|der|ita|q c|rim|s p|aqp|s y|yqa|iyo|niy|ani|i l|unt|s j|juj|kin|iya|q a|huy|a s|ywa|nka|sap|u l|ras|int|sta|uma|kuk|piq|iqp|hak|tay| ta|qas|q r|ypi|maq| su|ash|y r|uj |qsi|lak|heq|che|min|a t| ni|yma|t a|s a| ki|uyp|q q| re|muc|nqa|cho|unc|yas|s l|ayo|y l|qha| qh|ist|pur| pu|la |ill|mas|nam|pis|isp|hap|q w|lat| si|mik|y k|y s|ayq|pat|ali",
        src: " de|de |e s| sa|os |tu | a | su|tzi|one|sa |ne |ent| in|ion| e |a s|su |der|zio|u d|ret|e d|as |ess|ere|es |men| pr| pe|et |ten|ade|etu|nte| cu|ale|er |re | so|s i|atz| te|in | un| s |ene|a p|zi |ida|e e| on|sos| es|e t|nzi|onz|are|chi| si|le |te |s d| is|dad|u s|a d|net|u a|e c|tad|sse|ame|sso|t d| ch| o |son|at |pro|e i|i p|e a|pes|e p|nt |ntu| co|na |a c|du |hi |u e| li|e o|s e|int|s a| at|sas|un |cun|nu |per| po|ter|n s|ber|ser|nes|tra|zia| di|res|ro |s c|si |adu|sta|nat|s p|unu|era|ia |t s|tos|t a|da |nal|pod|u c| re|s s|sua|ona|ica|ist|ibe|lib|rar|egu|ntr|s o|ua |a a|o s|pre|ntz|ant| ne|ust| da|ndi|una|rta| fa|ode|u p|a e| to|est|nta|a l| pa|u o|und|ra |ada|ert|iss| na|otu|con| ma|a u|ae |dae|o a|otz|dis|eru|cus|les|a i|pet|lid|ali|i s|iat|sia|u t|sot|rat|epe|s n|tot|ssi|t e|ime|unt| ca| as|a n|ind|sti|eto|st |etz|lic|ont|a b|a t|iu |fun|ta |ine|a o| se|nen|nid|suo|s f| tr|ass|e u|nda| fu|ial|ena|sen|das|ghe|e f|pen|ual|gua| eg|pri| fi|par|a f|ria|u i|for|t p|emo|seg|ner|icu|tut| no|eli|run|det|itu|dep|inn|man|tar|lu |dos|r p|art| pu| bo|cum|ina|i d|ura|u n|tes|mos|nem|gur| bi|idu|nde|cu |ata|us |o d|tic|e l|e r|cam|des|\xE8nt|din|ral|cas|uni|ios|com|u l|ado|sio|fin|nsi|n a|ire",
        rup: "ri | sh|ari|i s|hi |shi| a | ca|ti |ea |i a|tsi|rea|i c|tu | s |ndr|dre|i n|a a|ptu|ept|rep|c\xE2 | nd| un| di|la | la|i l|i u|a s| tu|ear|di |ui |lui| li|are|a l| ar|un |\xE2 s|li |caf|ati|tat|afi|lje|fi | lu|ats|ic\xE2|\xE2 t|ei |r\xE2 |b\xE2 |n\xE2 |ib\xE2|car|i t|jei|si |ali| c\xE2|tul|hib| hi|s h|t\xE2 |or |u c|n a|\xE2 c| in| cu|ul |i d|ilj| ti|\xE2 a|a p|a c|a n|lor|tea|u s| al|int| co|u a|cu |tur|ber|ibe|lib| ic|lu |i p|eas|ts\xE2|i i|u p|sea|lji|min|u l| nu|\xE2 n|nal| pi| pr|ii |url|rar|nu |sta|ots|al\xE2|ji | po|\xE2 p|sti| ts|sii| si|al |oat|can|til|ura|\xE2 l|an\xE2|its|i f|l\xE2 |nat|ina|ist|ert|s\xE2 |i m| st|sia| so|pri|\xE2 d|poa|ips| fa|sht|tut|tse| ac| ap|\xE2nd|t c|ita|nts|gur|a d|sot|ent|sh |lip| su| as|ate| lj|ur\xE2|pur| \xE2n|at |ili|uni|a i|ona|\xE2 i| de|\xE2ts|ash|zea|i e|ucr|luc|it\xE2|un\xE2| ma|act|bli| pu|nit| sc|con|tar|alt| mi|nde|ind|t\xE2t|hti|ntu|rli|ilo|ntr|par|r s|a t|apu|imi|rim|mlu| ni|com|igu|sig|rta|i b|ial| na|tic|l l|ica|est|tsl|\xE2lj|art|pse|chi|iti|unt|sun| ea|r a|adz|l s|tlu|at\xE2|ter|sit|asi|pi |apt|ia |rlo|\xE2r\xE2|f\xE2r| f\xE2|oml|uts|scu| ba|na |lit|ndu|pis|dit|gal|ega| eg|fac|s f|ru |ac\xE2|c\xE2r|ead|atl|ra | ta|ar\xE2|cul|rti|nte| cr|iil|i v|lic|ubl|pub|vre| vr|s l|cri|nom|sc\xE2|asc|nji|ire|ion|aes| ae| du|rt\xE2|idi|ini|sin|eal|uti|cru|vit",
        sco: " th|the|he |nd | an|and|al | o |ae | in|es |in |t t| ta|cht|or |tae|ich|ric| ri|ion| aw| be|is |s t|tio|ht |bod|dy |ody|s a|e a| he|e r|ent|on | co|his|hes| or| na|ati|wbo|awb|ty | fr| hi|be |e t|n t| sh|ts |sha|er |hal|nal| on|y h|ng |l b|ree|fre|ing|l a|e o|y a| pe|o t|it | ti|e s|ter|s o|air| ma|nat|for|n a|nt |il |til|aw | fo|ona|e c|ny |ony|tit|nti| a |men|ity|e w|at |d t|t o| wi|her|e f|dom|edo|eed|d f|d a|ce |con|an |e i|e e|r t|nte|ar |lit|oun| re|ic |n o|nae|t i| it|ont|sta|oci|soc| as|y i|r i|ith|ne |ane|ons|ed | di| so|ly | wa| fa| pr|y s|ers| ha| se|int|und|e g| st| de| fu| en|nce|hts|d o|o h|res|com| no|le |e h|nin|r a|ie |e p|ear|ial|r o| la|inc|ite|wi |re |ual|qua|equ| eq|ns | le|ess|ali| pu|en |per|e m|cia|as |thi|lt |elt|rit| is|d i| we|imi|din|ild|eil|nor|r h|t n|e b|tri|ntr|ir |iou|eli|ge |lan|s r|s f|ms |tel|cie| me|lea|fai|y t|hat|tha|l t|law|g a|om |y o|sec|e l|ver| tr|ds |r b|l o|iti|un |cti|dis|e d|s d|id |hei|ld |are|rou| un|omm|s c| at|ssi|war|n h|me | ac|ten|bei|t a|uni|eme|tho|rt | ga|s n|m o|hau| li|tie|g o|rni| wh|s w|rie|ern| gr|mai|tat|n n|ica|igi|age|n w|oms|s e|d s| ar|nit|ee |n f|man|arn|rk |ark|eri|ral|e u|k a|el |te |ose|pos|ak |ces|s h| ch|lic",
        tso: " ku|ku |ni |a k|hi |i n| ni|a n| a |ka |i k|wa | ya|na |ya |fan| ma|la | ti| hi|nel|iwa|a m|ane|hu |a t| sv|ela| na| ka|lo |svi|u n|mbe|nhu| \xE0 | mu|u k|a w|eli|ndz|li |vi |be |kum|ihi|umb|i l|wu |ele|elo|mun| wu|a h|a l|nfa|u l| fa|liw| va|aka|wih| wi|unh|nga|lan| nf|a s| wa|u y|u h|iku|tik| ng|i m|u t| xi|va |o y|le |i a|nu |yel|amb|e k| le|anu|han| ha|isa|ana|eni|a x|lel|ma | kh|a a| la|ga |ndl|i h| li| nt|irh| ko| \xE8 |a y|ti |ani|ta |sa |in |kwe|u a|i w|any|lek|u v|pfu| ye|van|yen|u w|i s|yi |tir|\xE0 n|and| nd|mel|e y|eke|i t|a v|n k| lo|\xE0 k|isi| kw|hin|we |ang|\xE8 k|wan|aye|ko |a f|mah|rhu|i y|end|ham|mba|u f|lul|ulu|hul|khu|kwa|nti|hla|ngo|kel| si|eka|dle|dzi|may|ule|aha|u s|u m|i \xE0|ati|thx| th|dze|nth|anh|eki|oko|eyi|u \xE0| l\xE8|mat|n w|xi |fum|vu |nye|zis|i f|thl|lok|rhi|ava|a \xE8|lak|o n|mbi|t\xE0 |mu |ke |tin|ond|o l|ngu|e n| dj|ong| mi|siw|a \xE0|vik|lwe| ts|uma|naw| t\xE0|hak|\xE8li|\xE0 m| l\xE0|xa |ume|u p|sik|gan|e a|wak|xiw|ind|u d|esv|les|ike|wey| lw|e h|awu|mha| h\xE0| ta|za |dza|i x|nyi|ths|fun|avu|wav|kot|ki |jon|djo|rha|umu|ba |sin|ha |xih|kar|lon|hxu|\xE0wu| nh|to |ung|a u|ola|kol|ali|fu |int|akw|nan|\xE0kw|gul|sun|wen|ikw|gom|kon|sva|kho|hel|sem|tse|sek| y |zen|\xEChi|l\xE0 |mi |e w|hlo|e m|exi|lex|nya",
        men: " ng|\u0254\u0254 |a n|i n|ti | gb| ti| i |i l|ngi| ma|gi |aa | nu| k\u0254|a k|ia |ma | na| ye| ta|k\u0254\u0254|\u025B\u025B |ei | a |hu |bi |gbi|a m|na | hu|a t|i y| l\u0254|u g|ya | nd|ii |i h|a h|i m|\u0254ny| k\u025B|\u025B n|nya|l\u0254n|mia| mi|\u0254 t|uu |ng\u0254|\u0254 i|ee |nga|l\u0254 |la |ao |tao| kp|i t|ye |nge|\u0254 n|i g|gaa|g\u0254 |i k| le|hou|a y|ung|ni |ind| y\u025B|e n|nuu|a l|nda| hi|umu|num|hin|mu |ugb|hug|oun|k\u025B\u025B|eng|gba|a a|maa|a i| \u0254\u0254|da |\u0254l\u0254|ahu|le |i i| sa|nd\u0254| ji|a w|\u0254ma|mah|y\u025B |e t| lo|saw|o k| va|ta |gb\u0254|u n|i w|li |va |u k|bat| ho| ya|sia|lei|ahi|e a|i j|nde|e m| ki|yei|isi| wo|kpa|d\u0254l|gbu|\u0254 k|ge |awa| gu|wei|awe|e k|ila|ani| wa| ii|ji |aho|ale|ndu|kp\u025B| ha|k\u0254l|a g|gb\u025B|wa |nah|i b|yek|ein|yil|bua|at\u025B| la| ny|t\u025B |\u025B t|kp\u0254|taa| \u025B\u025B|\u0254 s|ie |\u025B k| we|b\u0254m|kpe|ekp|hei|nun|uni|\u025Bi |u t|\u025B y|\u025Bl\u025B|gen|te |ote|wot|\u0254 g|ama|i \u025B|ul\u0254|gul|lee|k\u025B |eke|pe |tii|\u0254 y|p\u025Bl|yen|b\u025B\u025B|e y|\u025B g|\u0254le|ga |a b| t\u0254|u w|aah|baa|lek|o g|a v|bu | he|ili|kia|uvu|aal|j\u0254\u0254|aj\u0254|maj|nye| b\u025B| s\u0254|l\u0254l|ka |\u025Bmb| wi| ka|e h|iti|akp|ang|b\u025Bm| ba|u m|u \u0254| yi|\u025B i|e g|lii|uah|nuv|l\u025B\u025B|gua|y\u025Bn|s\u0254\u0254|ui | l\u025B|dei| pe|i p|mbo|uam|ong|lon|ngo|oko|lok|a p|a s|haa|i v|ula|hii|yee|yan|u a|ati|wat|hi |ke |wee|e i|u i|ew\u0254|\u0254 h|wu |ny\u025B|oi |\u0254hu|\u025B h|u y|vuu|boi|paw|\u025Bng|wie|\u025B w| ga|l\u025B |\u0254\u0254h|bla|\u025B a|\u0254li|ua |m\u025Bi|am\u025B|oma",
        fon: " e |na | na| \u0256o|\u0254n |\u0256o |nu |o n|kpo| nu| \u0254 | kp|m\u025B | m\u025B| gb| \xE9 |t\u0254n|po |do |yi | si| t\u0254| al| to|gb\u025B|w\u025B |bo |e n|\u0256e |l\u025B | l\u025B| do|lo |in | bo|e \u0256|\u025Bn |o a| w\u025B|\u025Bt\u0254|to |t\u0254 |\u0254 e|sin|o e|a n|\u025B b|ac\u025B| ac|o t|nyi| ny|\u0254 \u0256|okp|n\u0254 |ee |b\u025Bt|\u0256ok|c\u025B |\u025B \u0254|b\u0254 |an |\u025B n|a \u0256| \u0256e|\u025B \u0256|o \u0254|n e|ji |\u0254 n| b\u0254| \u01CE | en|m\u0254 | m\u0254|n b| hw|i \u0256|alo|lin|n n|\u0254 \xE9|n a|n\u025B |\u025B e|un |o \u0256|bi | bi|m\u025B\u0256| yi|i n| ye|kpl| jl| wa|\u025B\u0256e|en\u025B| ji|u e|i e| \u0256\u0254|al\u0254|a d|n m|\u0254 b|\xE9 n|nun|h\u025Bn| h\u025B|e m|e e|\u0254 m|e k|\u0256\u0254 | n\u0254|l\u0254 |\u025B \xE9|\xE9 \u0256|odo|gb\u0254|wa |n k|a y|kpa|s\u025Bn|a s|\u0256ee|\u025B k|a t|jlo|\u0254 w|\u0254 t| s\u025B|e j|k\u0254n|\u0254 g|nnu|inu|pod|b\u0254n|o g|e s|\u0254 s|un\u0254|n \u0256|\u0254 a|o s|a b|n t|hw\u025B|o j|e w|o m|i t|b\u025B |xu |ixu|six|e\u0256e|et\u0254|\u0254 k|l\u0254n|b\u01D0 | b\u01D0| we| ka|nuk|o h|n \u0254|ba |z\u0254n|uk\u0254|a m|\u025B a|n d|ma |o l|hwe|si |u k|az\u0254| az|ema|wem|ogu|tog|nm\u025B|o y|s\u0254 | s\u0254|ali|\u025B l|j\u025B |n l|ayi| ay|\u025B s|pl\u0254| z\u0254|a z|\u0256\xE8 |i k|onu|n w|u w|u a|u m|a e|hun|o b| lo|gun|n s|e \u0254|ka |dan|o d|gan| i |a g|i w|\u0256\xF3 | \u0256\xF3|n g|wu |u t|yet|\u025B g|su | su|oko|a j|\u025B w| hu|\u025Bnn|obo|u l|kw\u025B| ga|a w|i s| fi|a l| ee|pan|lee| le|\u025B t| \u025B |e b|evo|\u0256ev| wu|u g|i a| ma|\u0256i | \u0256i|ye |o w|isi|sis|z\u0254 |\u01D0 \u0256|o k|n\xFA | n\xFA| vi|ple|em\u025B|we | \u0256 |w\u025Bn| ba|o \xE9|nya| da|\u0254 h|gba|\u025B m|fi |ya |kan| j\u025B|e g|i m|jij|m\u025Bt|\u0254nu|u n|nu\u0256| e\u0256|e t|xo |\u0254 y| li|enu|wen|\u0254m\u025B",
        nhn: "aj |tla| ti| tl|ej |j t| ma|li |a t|tij|an |i t|sej|kaj|eki|uan| to| no| te|ij |j m| ua|chi| se|noj| ki|ma |ika|laj|j k|j u|pa |tle|man|aka|oj |ka |lis|ech|tek|se |uaj|ano|ise|iaj|tec|amp|iua|ali|pia|j n|och| mo|pan|mpa|a k|kua| pa|n t|is |ya | am|uel| ue|eli|ual|ili|en |len|kit|ajt|a m|jto|j s|kin|ijp|amo|ia |jki|tim| ke|mo |hi |ant|ama|ani|noc|opa|oli|aua|j i|ase|tli|nek|itl| ik|ijk|tok|nij|imo|ati|kam|jpi|tik|ipa|one|tis| o |oua|tit|ra |ara|par|nop|tl |jya|a s|iti|lal|cht|ok |ojk| ku|o t|kiu| ka|maj|kej|lak|leu|alt|ijt|mej|lau|kia|ana|ki |kij| ak|jka|n n|lam|i m|mon|e t|til|s t|nti|j a|k t|ita|kip|kem|j p|lan|jtl|tep|lti|lat|ema|uat|ose|iki| ip|ats| ni|ntl|ajy|e a|stl|ach|tou|eua|tot|kat|uam|atl|eui|toj|ni |nau|nka|ist|epa|ite|ale|pal|oka|tia|ajk|ini|j o|tsa|n m|ipi|kui|eyi|uey|jua|a i|n k|mat|nit|i n|oju|a a|onk| on|o o|uik|uil|n s|ken|ijn|ank|a n|ote|i u|i k|otl| sa|kon|as |ino|hiu|xtl|tos|its|tsi|n a|oyo|eka|chp|san|mpo|uak|ko |a u|tol|oke|yek|yol| ya|uas|pam|nok|tin|aui|htl|o k|sij|yok| me|nem|las|jke|ejy|hti|jne|nko|jti| ax|mac|emi| in|i i|mot|oui|ame|yi |lit|i a|kol|jku|sek|epe|lte|pil|nan|axt|ami|ejk|ine|int|ojt|ate|ias|ela|mel|aku|ina|uis|etl|kis|mik|ito|ui |ak | ye|ona",
        dip: " ku|en |ic | bi|bi |ku | yi| ke|yic|an | ci|aan|raa| th|c b| ka|n e|n a| eb|ci | ra|c k|\u014B y|kua|i l|i k|ka |in |th |ben|ny |ebe|kem| ek| al|eme|men| ye|k e|h\xF6m|nh\xF6| nh|\xF6m |ai |al\u025B|l\u025B\u0308|i y| lo|n k|t k|c e|thi| la| er|\u025B\u0308\u014B|\u0254c |\u0308\u014B |k\u0254c|ek |yen|ua |m k|de |t e|\u014B k|a l|ok |aci| te|n b|at |u l|ith|n t| ep| ac|k k|it |i r| lu| e |uat|ke |u k|aai|o\u014B |te |cin|ken|e y|e\u014B |ui |epi|baa|ath| l\u025B|tho|\u025B\u014B |hin|era|n c|e w| mi|a c|hii|lau|h k|ek\u0254|n y|el | ti|u t|l k|au |kek|nde|l\u025B\u014B| pa|n r|n l| et|h e|a k|u b|nhi|a t|th\xF6|pio|la |c t|e k|ot |rot| k\u0254|iny|pin|\u014B e|ak |loo| le| pi|i e|eba|\xEBk |ik |im |iim|\u014B n|oi | ro| ny| tu|kak| el|i m| k\xF6|hok|y k|pan| we| ba|i t|iic|m e|u n|ye |oc |ioc|loi|k a|lui|wic| wi|e c|and|e l|eu |pir|i p|wen|\u025Bt | l\xF6| li|mit|\xEB\u014B |eth|yit| ey|\xF6\u014B |u m|nyo| aw|e e|i b| ew|i d|den|any|iit|iek| aa|k t|uc |k\xF6u| ko|leu|ir |r e|t t|e r| dh|\xF6k |uee|tue|y b|e t|eny|uny|oo\u014B|i c|cit|u c|n w| ya|l e| ec|kic|h\xF6\u014B|ee\u014B|dhi|a p|uan|m b|ut | ak|yii|y e|ewe|wuc|awu| m\u025B|pat|i n|ien| ed|h t|uk |tii|\xF6un|lie|\u025B\u0308n|elo|am |cii|r k|t c|wel|l\xF6i| w\u025B|bai|th\xEB|u y|tha|eku| en|k c|th\u025B|h\xF6k|\u025B\u025Bt|il |hil| c\u0254|ie\u014B|cie|\xF6ny|k\xF6n|aku|m r|tic|oui|lou|ale|t a|war| wa|eka|ynh|nyn|kue|eke|eri|oth|yoo|lo\u014B|p k|up |k y|m a|y r|die",
        kde: "na | na|la |nu | va| wa|a k| ku|ila|wa |a w|unu| mu|a v|chi|mun|e n|a m|a n|van|ya |ele|ana|le | ch|amb|ave|sa |lam|asa| vi|ohe|mbo|aka|u a|was|e v|bo | n\u2019|ne |e m|ke |u v|vel| pa|ala|a u|ake| av|hil|ika|ng\u2019|ing|ngo|he |a l|ve |ile|anu|ela|vak|any| ma|vil| li|a a|go |a i|wun|uku|ili|lan|bel|mbe|ene| mw|nda|kuw|ama|nya|ola|ali|kol|kan| di|g\u2019a|au | au|emb|den|eng|lik|uni|wak|a d|\u2019an|e a|lem|ong|o v|ulu|kuk|an\u2019| ak|ach|a p|kal|ma |dya|n\u2019n|lew|mad|aya|and|mwa|uwu|kum|ye |a c| vy|apa|va |ava|ane|hel|mbi|kut|o m|hi |we |ula|ole|u m|umi|din|ton|ji |nji|nil|ewa| il|voh|ade|und|ni |kul|dye|dan|kay|uko|idy|kav|tuk|nan|kam|ka |ia |lia|eli| dy| in|ndo|ond|hin| la|uva| ul|ani|vya|i n|o n|wen|mwe|da |e k|e u|o c|lel|pal|nje|yik|aha|uwa|lil|n\u2019t|nga|ata| ka|she|pan|cho|ang|no |u i|lon|ulo|lim|uli|\u2019ch|dil|hev|i w|u l|e w|mba|niw|mil|ba |yoh|uma| um| kw|u n|wal|vin|vyo| an|bi |a s| ya|dol|hoh|u c|awa|lin| al|ilo|\u2019ni|e p|ale|n\u2019c|mu |imu|lun|kup|yak|yac|\u2019ma|n\u2019m|mah|atu|wav|kuv|hon| lu|i v|hih|jel|utu|hap|uka|o l|u w|itu|ga |o a|i d|umb|a y|inj|taw|ita|lit|lek|val|e c|oko|aku|me |bu |paw|kuy|mak|e i|yen|iho|amw|woh| ih|iku|pil|kun|onj|tul|nah|awu|ahe|i a|kat|mat| wu|pac|ina|olo|uto|ech|kwa|i c|li |ngi",
        kbp: "aa | pa|se | se|na |n\u025B | n\u025B| wa| y\u0254|y\u028A |\u0256\u025B |a\u0256\u025B|a w|\u025Bw\u025B|\u025Bna|\u025B s|\u0269 \u025B|paa|a \u025B| \u025By| \u025Bw| \u025B |\u025B p|e \u025B|wa\u0256|\u025B \u025B|e p|a p|w\u025Bn| p\u0269|y\u0254 |y\u0269 |a\u0263 |\u025By\u028A|\u0254\u0254 |\u028A\u028A | ta|ala|y\u0254\u0254|y\u025B |\u0254 p|a n| \u0269 |yaa|taa|\u028A n|a a|\u028A \u025B| t\u0254|\u028A w|z\u0269 |la |w\u025B\u025B|n\u0269 | an|\u025B t| k\u0269|an\u0269|\u025B y|ma\u0263|\u025B n|n\u0254\u0254| n\u0254|\u025By\u0269|\u0254m |t\u0254m|\u0269 t| we| p\u028A|\u0269 p|\u025B \u0256|\u0269\u0263 | \u014Bg|ama|kpa|a t|\u0269y\u025B|ay\u0269|a k| t\u028A| k\u028A| p\u0254|daa| w\u025B|pa |\u028A t|\u028A p|t\u028A |\u028A y| \u025Bs|wal| p\u025B| na|\u0254\u0254y| ya|f\u025By| \u0256\u0269|\u0256\u0269 |\u0254\u0256\u0254|\u0254 \u025B| \u025Bl|i \u025B|\u0269 \u0256|w\u025B |\u025B k|\u025B\u025B | t\u0269|\u0269 n|pa\u0263|\u0269 s|\u025Bja| \u025Bj|\u0256\u0254 | \u0256\u0254|\u0254 s|\u025Bla| \u025Bk|a s| mb|\u0269 y|\u025Bya|pal|a y|\u028Ama|\u0254y\u028A|a \u0269|ja\u0256|\u0256\u0254\u0256|kpe|\u0269z\u0269|\u0269na| \xF1\u0269|yi |eyi|k\u025B |b\u028A |mb\u028A|\u028A k|m\u0269y|t\u028Am|al\u0269|\u014Bgb|\u025Bz\u0269| fa|\u028Ay\u028A|\u0269 \u0269|\u0269f\u025B| \u025Bt|k\u0269 |wey|ma |l\u0269 |\u0254\u0254l|nda|\u0269ma|gb\u025B|sam| sa|li | l\u025B|\u0269s\u0269|akp|pak|\u0263t\u028A|ya |lab|s\u0269 |\u014B p|p\u0269f|day|and|kan|\u0263 \u025B|s\u0254\u0254| ye|\u0269m |k\u0269m| kp|uli|kul|\u025By\u025B|\u028Am\u0269|laa|iya|\u0269 k|e e| \u0256o|\u028A s| ha|a\u028A |ma\u028A| \u0256e|a\u0263t|\u0254 k|\u0254 y|a l| ke|p\u0269z|\u014Bg\u028A|\u0263 p| k\u025B|eki|\u0254\u014B |a\u014B |t\u0269 |\u025Bh\u025B|b\u025By|\u028A \u014B|p\u028A |ba | s\u0254| \u025Bd|n\u028Am| n\u028A| pe|\u0256\u028A |ada|pad|\u0263na|le | le|\u028A \u0256|\xF1\u0269n|pe |z\u0269\u0263|\u025Bp\u0269|naa|g\u028A |\xF1\u0269m|\u0263 t|a \xF1| la|hal|\u025Bda| \u025B\u0256|nd\u028A|m n|z\u028A\u028A|\u0256e |ana|ak\u0269|b\u0269 |ab\u0269|l\u025B |\u025B\u025Bn|m t|\u0254y\u0254|ekp| \u025Bp|d\u028A |t\u0269\u014B|\u025Bk\u025B|\u0256am| \u0256a|ina|ma\u014B|al\u028A|uku|suk| su|k\u028A |\u025Bs\u0254|\u025Bt\u0269|lal|\u025B l|t\u025B |e l|l\u028A | k\u0254|\u0269l\u0269|\u025B\u025Bk|i p|pan| t\u025B|\u014B\u014B |aka|p\u0269w|b\u028Ay|ab\u028A|nab|lak|ee |yee|e w|\u028Ana|m p|e t|ye |iye|uu |a \u0256|n\u0256\u0269| n\u0256|d\u0269 |eek|pee|ga |\u014Bga|ya\u0263|a m",
        tem: "a \u028C|uni| \u0254 |ni |wun| wu| t\u0259|yi | ka| yi| \u028C\u014B|ka | k\u0259| k\u028C|t\u0259k|k\u0259 |\u0254\u014B |\u0259k\u0259| a\u014B|mar|n\u025B | \u028Cm|ma |i t| th|ri | \u0254w| a |i k|a k| ma|i m|ari| ba|wa |tha| k\u0254| m\u028C|\u0254wa|th\u0254|ba |\u0254m | o |l\u0254m|\u028Cma|k\u0254 |i \u0254|a y|\u2010e |o w|\u014B k|a a|al\u0254|te |i o|hal|\u0254 b|a\u014B |\u0254 y|a m|\u014Bth|\u014B y| r\u028C| \u028Ct| m\u0259|kom|ema|yem|m\u028C |\u0254 k|om | ye|h\u0254f|\u0254f | m\u0254|th |e \u0254|\u025B t|\u028Cn\u025B| \u014Ba| s\u0254| gb| ro|\u028C\u014Bt|\u0254 t|\u028Cth|a \u0254|ar |y\u025B |\u028Cte|m k|\u028C\u014B |m \u028C|h\u0254 |ank|wan|\u014Ba |an\u025B|\u014B \u0254|\u014B\u0254\u014B| \u014B\u0254|nko|r\u028Cw|k\u028Cm|ki |k\u0259t| y\u025B| te|a t|\u028Cwa|\u0254 \u028C|\u028Cm\u028C|e a|k\u028Ct|thi|i r|\u0259m |ra |k\u0259l|a w|\u0259 k| y\u0254|\u028Cme|me |a r|m\u0254 |k\u0259p|a\u014Bf|\u0259\u014B |e t|pa |\u0259th|f\u0259m|a\u2010e|\u0259l\u0259|l\u0259\u014B|\u025B k|\u028C k|\u014Be |y\u0254 |ro |r\u028C |\u0254 m|gba|th\u0259|\u014Bf\u0259|li |\u0259 b| \u028Ck|\u0259 t| r\u0259|m r|\u025B \u028C|i \u028C|\u028C\u014Be|ta | ta|e m|bot|\u0259pa|n\u028Cn|m a|ma\u2010|s\u0254\u014B|k\u0259s|e w| ra|t\u0259m|\u014B t| t\u028C|ath|gb\u0259|\u028Ck\u0259|\u0259 s|\u025Bth|\u0254 a| bo|i a|\u014B a|\u014B b|\u025B \u014B| b\u025B|\u028Cr\u028C|nth|ant|\u0259li|b\u0259l|o \u0254|\u0254k\u0254| p\u0259| t\u0254|\u0259s |e y|kar|nka|ran|r k|\u028Cl\u0259|\u0259yi|m t|\u0259 y|s\u0254 |\u0254 \u0254|\u014Bgb|t\u028C\u014B|\u0254th|s\u0254t|m\u028Cy|t k|ot |ith|\u025B m|t\u0254\u014B|t\u0259t|l\u0259s|m\u0254\u014B|r\u0259k|\u0254 r|th\u025B| po|t\u0259 |wop| wo|gb\u028C|f \u028C|\u028Cyi|\u028C \u028C|e k|\u025B a|m\u028Cs|\u0259 g|\u0259n\u028C|h\u0259n|b\u025B |ara|pan|hit| \u028Cr|k\u0254\u014B|a \u025B| wa|iki|\u0254 g|to | to|l\u0254k|o t|\u025B r|e\u014B |m\u028Cl|gb\u025B|\u028Cgb|hi |pi |tho|m\u0259 |\u014B\u028Cn|\u0259r |o\u014B |ro\u014B|m \u014B|h\u025B |po |i\u2010e|m\u028Ct|\u028C t|\u028Cy |ti |\u2010o |f \u014B|op |\u0254 w|na |sh\u0254|nsh|ekr|sek|\u028Cse|a\u014Bk|bas|m\u0259t|ra\u014B|k\u028Cr|\u028Ct\u028C|wat| \u025Bm|h k|i y|han|\u0259k | ya|k\u0259b|k\u0254n|yik|ayi|yir|p\u0259y|\u028C \u0254|\u025B\u014B |\u0259te",
        toi: " ku|a k|wa |a m| mu|la |e k|a a|ula|ali|ya |i a|de |ang|aku|tu |kwa|aan|ntu|na |lim| al|ulu|lwa|mun|ngu|luk|ele|gul|mwi|wi |gwa|kub|imw|ons| oo|oon|se |nse|ant|zyi|unt|ela|si | ak| ba| an|and|a b|ala| ci|uki|isi|nyi|ide|kid|zya| lw|ba | kw|uny|eel|laa| ul|cis|yin|kun|uli| zy| ka|tel|nte|ina|kul|kuk| ma|ili|waa|uba|wee|kwe|ede|led|nda|we |mul|nga|kus|da |izy|kut|wab|ana|i m| ya|ukw|o k|amb|yan|ka |e a|lil| bu| am|uci|a l|ilw|a c|li |sal|ban|e m|e u|u o|ila|bwa|aka|bo |bul|akw|wak|ale|kal|o a|i k|amu|bil|umi|bel|mbu|lan|usa|egw|abi|lo |awo|kuy|kup|igw|ko |uko|kak|wo |law|aci|i b|u b|ati|o l|yig|asy|ubu|wii|ika| bw|le | mb|ga |ung|kum|kka|ku |ndi|aam|muk|cit|mal|bun|yo |ukk|ind| wa|i c|bi |aya|ne |ene|len|mo | ab|upe|a n|mbi|eya|kuc| lu|ndu|a y|syi|u z|uta|ile|abo|u a|a z|ita|uka|aba|bal|imo|ley|iin|yi |ti |u u|lik|du |asi|yak|o y|u k|ube|iko|cik|zum|muc|ani|ule|mil| mi|mbo|twa|e b|umu|was|di |o n|ngw|lwe|nzy|peg|zye|abu|buk|kwi|liz| nk|i n|bam|ta |kab|alw|eka|mas|u m|imb|onz|kon|sya|miz|gan|tal| we|uum|no |yil|int|lem|del|nde|end|mbe|uya|oba|azy|iyo|i z|lek| ng|o o|cii|i o|a u|mba|mu |a o|ako|yik|yeg|ezy|a w|mi |ni |omb|kom|o b|syo|iya|usi|min| ca|e c|aul|lau|uku| aa|yee|ama|yal|kam",
        ekk: "sel|le |se |ja | ja|use|ise|mis|\xF5ig| va|ele|ste|ust|gus|us |igu|st | v\xF5| \xF5i|dus| on|on |el |te |ma |al |iga|v\xF5i|a v| in|nim|ini|da |e j| te|ist| ig|ime|l o|lik|mes|e k|\xF5i |est| ko|l i| ka|end|iku|ese|adu|gal| se|e v|tus|lt |ami|n \xF5|ema|aba|vab|a k| ra|lis|val|a i|atu| ku|tsi|ud | mi|ada|ali|e t| ta|ta |stu|ast|ks |ole|tam|sta|nda|es |ell|tes| pe|e s|ik |a t|is |i v|ahe|rah|t v|ava|bad|kul|ine|ne |t k|vah|ei | ei|e e|ga | ol|lus|kon|s v|ida|s t|gi |a r|mat|ioo|tud|tel|kus|oma| om|dse|k\xF5i|teg|ees|i t|aal|ndu|a s|a j|ing|a a|iel|s k|vas|tse| ee|tem|ul |igi|lle|s s|i s|ili|vus|uta|elt| sa|aja|e a|eks|min|its|asu|a p|s o|sus|sli|i m|oni|oon|sio|ses|e o|ete|abi|\xFChi|ega| ki|ari|emi|si |i e| ke|uma| ri|usl|ahv|ats|eva|lev|ab |pea|eis|nis|rds|\xF5rd|v\xF5r|sed| k\xF5|t\xF6\xF6| ni| ab| \xFCh|rid|nna|saa|teo|sek|ni |kor|ale|imi|ait|t i|sik|isi|eli|e \xF5|dis|ots| so|ata|lem|eab|\xFCks|tum|dam| m\xF5|a o|\xF5ik|idu|har| t\xF6|e h|nin|alt|onn|ite|ult|e m|mal|isk|kai|ead|sea|koh|d k|as |jal|p\xF5h| p\xF5|aks|rit|hvu|dum|een|e p| \xFCk|s j|set|ed |ng |bie|a \xFC|uri|s a|kin|ald|e r|t m|eri|i k| al|eel|lli|eta|dad|ule|elu|s p|i p|rii|hel| to|ndi|lse|als|iaa|sia|sot|rat|ara| k\xE4| ve|and|umi| su|de |etu| v\xE4|na | s\xFC| ha|a m|e i|lit|lu |per|nud",
        snk: "an | a |na | na|re |a n| su| ga|a k|ga | ka|a a|en |su | se|a s|ta |ma |e s| ta|ser|ere|ama| i |aan| ra|un |nta| ma|n s|do | ki| ja|a g|jam|ne |nan| do| nt|ana| da| ya|ane|wa |\u014Ba |n \u014B|ri |e k|u k|a d| \u014Ba|ndi|ni |ra |raa| ku|taq|maa| si| ba|a r|tan| ke|aaw| sa|ren|gan|and|a b| be|a i|awa|di |i s|oxo|aqu|oro|kit|me |lli| go|tta|ini|ya |a j|ari|a m| xa|iri|aar|oll|gol|a t|e m|i a|i k|xo |sir|n d|aax|lle|a y|be |on |baa|n g|ran|din|ara|u r|e d|u n|qu | so|axu|are|o a|a f|ke | wa| ko| an|man|xar|dan|kan|ron|sor|li |de |nu |fo | fo| no|kuu|n t|pa |nde|n k|i g|len| \xF1a| du|n n|nme|aad|u b|ang|axa|e y| fa| mo|ppa|app|kap|o k|o s| fe|ell|a x|att|kat|ure|i x|xun|e n|aba|mox|ti |i t|n y|yan|enm|ada|n f| bo|n b|a \xF1| yi|i m|u t| di|da |iti|qun|nga|u a|xu |itt| ha|le |i d|sel|i n| me|ill|e t|riy|o b|ro |u d|du |saa| re|dam|haa|ind|xa |n x|ono|i i|nen|lla| mu|ond| ro|o n|udo|uud|ant|aga|ku |la | wu|nma|eye| tu|edd|fed|nox|no |o d|uur|sar|gu |e g|kil|\xF1aa|ire| bi|inm|ken|e b|tey|ite|ira|yu |a w|ina|iin|yi | xo|n w|o t|taa|ka |u s|an\u014B|uga|und|i r|ore|bur|i b|fan|iba|xib| xi|een|u m|ogu|bog|bag|oqu|noq|oor|e r|bir| ti|i j|ban|ye |dii|o m|anm|ene|kka| ye|\xF1a |rey| le|i\xF1a|ita|mun|ura|kaf|ank|e i|li\u014B| li",
        cjk: " ku|a k|yi |nyi| ny|la | ci|a n|a c|wa |we | mu| ha|nga|i k|ga |ana|uli|kul|a m|esw|ela|ze |mwe| ka|ha |sa |tel|a h|swe|ung|ci |a u|ate|ma | wa|u m|kwa|han|e m|kut| mw|uci|mbu|mut|nji|nat|ya |uth|e k|na |pwa|kup|thu| ma|wes| ca|ji |kan| ya|lit|hu |i m|aku|asa|i n|mu | ul|ca |ang|e a|ina|anj|ali|imb|cip|amb|mba|i c|li |e n|i u|ka |muk|a i|awa|naw| na|fuc|ifu|uta|upw|ing|ize|ula|lin| xi|ukw|lim|ong| kw| an|ite|xim|ta |ita|umw|ulo|umu|has|kuh|kha|u c|ala|nge| mb|wo |ila| ce|cif|a a|kus|ama|tam|mwi|ili|te |imw|bu |o k| ng|ba |ipw|lo |bun|ikh|wik|ulu|mo |ufu| ak|o m|utu|ngu|imo|mil| mi|ko |a w|kun|ciz|i y|a y|kuk|eny|aze|aci|pwe|aka|o n|yum|uha|uka|e w|o y|lon|kum|e u|cim|ku |swa|e h|e c|mbi|emu|no |nal|a x|was|fun| un|uma| ja|usa| li|wil|uze| ye|o w|isa|o c|nda|ngi| es|kat|e y| in|aha|waz|yul|esa|yes|una|wen|aco|i h|cik|ema|pem|nyu|ika|kal|bi | ik|mah|zan|aso|so | uf|ata| iz|apw|tum|tal|o l|wam|iku|sak|ja | up|kwo|umb|oze|yoz|uni|ges|cen|kuz|wak|mul|wan|ulw|o u|cyu| cy|u i|e i|tan|mun| um|kuc|ngw|cin|co |go |ngo|da |ipe|ge |lem| uk| yo|lwi|nin|ikw|u k|kuf|uso|i w|upi|lum|gwe|uki|upu|and|pha|ces|ond|i j|man|ile|ule|uku|gik|akw|ino|ele| if|hac|tha|cil|eka|za |vul|uvu|hel|lu | it|ke |lya",
        ada: "mi | e |n\u025B | n\u0254| n\u025B|n\u0254 | he|he |\u0254 n| a | ng|e n|a n|k\u025B | k\u025B|aa |\u025B e|bl\u0254| bl|i k|i n|g\u025B |ng\u025B|\u025B n|l\u0254 |e b| mi| ma| ko|\u025B h| ts|ko |\u025B a|e h| ni|hi |\u025B\u025B |\u0254 k|a m|i h| \u0254 |tsu|ma |ami|a k| ny|\u0254 f|oo |loo|i a| be|ya |e m|be |ni | kp|o n| si|si |nya|emi|\u025B m|f\u025B\u025B| f\u025B|laa|a h|a b|e j|a t| hi|e k|umi| ka|kpa| je|\u0254 h|e s| lo| ye|\u0254 e|i t|pee|omi|m\u025B | pe|mla|i m| wo|je | ha|\u0254mi|\u0254 m|maa|sum|ke |i b|o e|\u025B k|\u0254 t|alo| ml|ee | sa|\u025B \u0254|\u0254\u0254 |ha | na|l\u025B | l\u025B|a a|i l|\u0254\u0301 |a s|\u025B s| h\u025B| gb| su|n\u0254\u0301|e p| al|e\u0254 |\u025B b|ne |i s|\u025Bmi| fa|uaa|sua| b\u0254|\u0254 a| to| ji|o k|kaa|b\u0254 |a e|ihi|u n|e \u0254|o a|yem|ane|e w|su\u0254|imi|e y| ke|\u025B y|\u025B t| hu|san| we| j\u0254|\u0254hi|l\u0254h|e e|ahi|i j| bu|\u025B j|pa | ja| ku|wom|ng\u0254|a j|him| bi|ue |e a| ya|tom|\u0254 b|gba|o m|jam|\u0301 k|fa |ake|\u025B p|uu |ba |hla| hl|sa |\u0254 s|hu |e f|h\u025B\u025B|u\u0254 | tu|e t|ji |ts\u0254|j\u0254m|i \u0254|kuu|kak|\u025B g|a l|wo | s\u0254|tue|o h| gu|isi|\u0254 y|s\u025B |o b|s\u0254\u0254|g\u0254 |ia | ju| k\u0254|eem|e l|akp|pak|li |e g|s\u0254s|a p|u\u025B | yi|ti |sis| s\u025B|to |\u0254 l|\u0254 w|\u025B w|y\u025Bm|na |hia| nu|\u0254s\u0254|ye | m\u025B|sem|ase|kas|hi\u0254|naa|\xEDhi|n\xEDh| n\xED|kpe|usu|uam|on\u025B|kon|nih|ee\u0254|mah|o l|a w|lam|\u0254\u025B |s\u0254\u025B| pu|h\u025B | ba|gu |a g|a y|\u025Bti|p\u025Bt|kp\u025B|o s| f\u0254|bi |nyu|o j|we |se |uo |suo|ade| ad|bua|su |ngm| fi|i\u0254 |u k|haa|o\u0254 |koj| am|\u0254 \u0254|\u025Bp\u025B|i p|i e|gu\u025B| wa|io |jio|bam|\u0254 j|yo ",
        quy: "chi|nch|hik|anc| ka|una|man|aq |pas|ana|kun|as |paq|nan|kan|ikp|cha|sqa|qa |ik |apa|aku|ech|kpa| de|cho|rec|ere|der|spa| ma|asq|am |an |taq|pa |nam| ru| ch|yoq|ta |na |a k|ina|mi |qan|ima| ll|aqa|lli|oyo|hoy|ant|ach|run|nap| im|pi |nak|hay|asp|ayn|wan|q k|ipa|nta|hin|oq |cio| hi|iw |liw|inc|ion|aci|chu|lla|pip|nas|npa|nin|qmi|kay|kas|ota|a m|anp| hu|all|nac| na|yna| ya|ari|api|i k|w r|nku|iku|in |a c|ama| pi|may|hu |kuy|ay |nma|has|onc|hon| ot| wa|aqm|anm|a p|n h|ata| li|ikm|hwa|chw|ma |awa|a d|qta|ara|pan|m d|pap|yku|yni|a l|kma|q l|ich|kin|huk|a r| ha|yan|uwa| ca|nqa|kta|ikt|q m|a i|n k|kpi|mun| sa|cas|usp|q h|wsa|aws|kaw|bre|ibr|lib|lin| al|k c| mu|ask|kus|a h|s l|ank|q d|yta|e k|tap|q c|mpa|pak|ski|qaq|ien|i c| qa|tin|re |nni|uch|isq|a s|was|ern|s m|a a|ayk|onn|s y|oqm|aqt|ruw|qpa|aqp|par|amp| am|nmi|ley| le|ayp|nat|i h|yma|onk|law|ier|map|a f|war|ita| ni|naq|yac|tar|naw|ayt|sak|n a|anq| pa|a q|aya|val| va|ypi|sti|ast|ura|n c|m p|s o|w n|rno|bie|obi|gob| go|rma|qar|nit|m i| ta|say|haw|s i|k l|asa|k h|rur|pun|wac|onm|tan| fa|tam|kap|oqt|i d|s c|ici| ju|a t|ras|ran|uy |uku| tu|qay|k k|ku |q i|arm|uk |a y|nti|awk|um |igu|esq|k m|sap|ati|aw |a o|asi|n p|sic|isp|aru|ukl|ten|pti|qku",
        rmn: "aj | te|te |en | sa| le|el | si|si |aka|sar|pen|les|kaj|es |ipe|sav|qe |j t| ha| th|ja |hak| e |and| o |ave|i l|ar |ta |esq| an|a s|sqe| ma| ja|ia |nas| ta|imn|e t|as |mna|kas|e s|haj|tha|s s|ark|asq|e a|nd |i t|s h|rka| na| i | pe|mes|isa|vel|cia| bi|ne |bar|kan| aj| me|avo|utn|the|e k|lo |o s|est|qo |e p|n s|ard|hem|a a| av| so| ba| pr|\xF5l |a t|mat|ima|l p|e r|e m|e o| ka|man|orr|e d| di|o t|rel|sqo|re | ov|ika| re|qi | ak|enq|ere|vor|e b|res|ove|avi|ve |ver|o a|n t|o m|akh|rak|rim|a p|no |ana| ra|sti|d o|len|aja|rre|but| va|sqi|ker|r s|de |ata|ren|ali|ara|ste|ti |e l|r t|vip| ke|na |i s|ang|\xE0ci|tim|nqe|kon| ph|n a|nip| de|j b|\xE0lo|al | pa| bu|are|vi |d\xF5l| ni|tar| ko|na\u015B| pu|o k|n n|l a| po|\u015Baj| \u015Ba|on |lim|er |ari|i a|ven|pe |\u015Bti|a\u015Bt|a l|o p|e n|dik|rd\xF5|nik|l s|tis|ast|tne|a m|a e|erd|ndi|ni |pes|rin|j s|e h|aba|rab|khe|tni|eme|uti|rip|uj |amu|ano|\u0107ar|a j|\u0107a |la |khl|l t|e z|do |o z|ri |mut|kri|alo|soc|i p|so |ran|del|kar|nu\u015B|anu|pra|din|nge|nis|ut\u0103|rde|vo |muj|mam|i d|n\u0107a|en\u0107|ate|uni| as|iko| zi|rdo|l o|j p|eri|emu|ane|i b|o j|oci|i r|a d|ing| je|i\xE0l|e e|l l|\u0275ar| za|tes|\u0107ha|pal| vi|l b|\u0275e |l e|a\u0107a|one|kin|to |ziv|imi|a n|per|ter|ris| kr|s a| st|o b| \u0107h|a i|kla|da |nda|e j|ekh|jek",
        bin: "e o|ne | ne|an |en |be | o |e e|wan|mwa|n n|vbe|mwe|emw|evb|na |omw|e n| em|in | na|ie |gha|n e| gh|re | om|wen|e a|ha | ke|e i|n o|gie|bo | vb|wee| kh|win| ir|vbo| ev|o n|gbe|he |hia|nmw|o r|a r|o k| no|ogi|nog|kev|tin|eti| et| mw|e u|mwi|a g|ra | ya|een|ee |a n|a o|ke | re| we|rri|ghe|ogh| og|a e|n k| a |ia |ya |o g|ien| uh| rr|ye |khi|ran|ira|ere|a m|a k|ian| ot|ro |n i|ovb|o m| ye|egb| ra|hi |de |kpa| eg| hi|n y|o e|hae| ok|a y|eke|mie| mi| gb|o y|ba |oto|rhi|n m| iw| ru| er|arr| ar|unm|rro| ov|e k|okp|aen|n a|hek|khe|nna|inn|ugi|hie|a u|ru |ae |to |wun|mwu|hun|otu|i k|i n|a v|nde|and| do| or|uem|rue|dom|n w|oba|iob|rio|e r|tu |ze |ehe|pa |e v| ma|aya|iru|iwi|ma | rh|un |uhu|yan|mo |gba|e y|o h| la|a i|rie|irr|ai |uhi|ho |u o|ren|yi | ni|egh|u e|u a| ug|ugh| al| iy|beh|aan|a d|n g|gho|ue |onm|ghi|anm|iko| ai|ene|i r|a a|aze| az|khu|i e|bi |vbi| i |yaa| yi| ek|hin|bie|on | ay|emo| od|aro|obo|e d|rov|o w|e g|ii |nii|se |kom| ow|ron|kha|o v| se|a s|rre| de|lug|alu|owa|wu |a w|aa |e w| bi|a b|n h|dia|fue|ifu| if|ebe| eb|ode|sa | os|nug|anu|wa |oo |gue|uwu| uw|ese|bug|vbu| en|n r| lo|n l|ugb|kug|la |uyi| uy|i v|o o|i g|rra|aku| ab| es|abe|aik|oro|enr| eh|eha|o a|a l|we |n u|i o|okh",
        gaa: "m\u0254 | ni|ni |k\u025B | ak|l\u025B |\u025B a|\u025B m| m\u0254|ak\u025B| ko| he|gb\u025B|i a|\u025B\u025B | l\u025B|\u0254 n|\u025B e|ko |aa |b\u025B |y\u025B |i e| k\u025B|\u0254 k| y\u025B|li |\u025B h| ml|egb|oo |f\u025B\u025B| f\u025B|shi|a\u014B |heg|mli|\u0254\u0254 |a a| es| gb|i n|loo|\u025B n|ma\u014B| ma|\u025B k|i k| n\u0254|\u0254 y|n\u0254 |\u0254 f| al|he |esa| sh|alo| ek|\u0254 m|ii |am\u0254| eh| en|em\u0254|ji |naa|b\u0254 |e n|fee|o a|oni|kon|o n|ee | hu|o e| b\u0254|i m|hi | am|\u0254 l|hu |tsu|um\u0254|\u025Bi |aaa|na |nii|sum|sa |\u0254m\u0254|ena|i y|\u025Bji|n\u025B\u025B| n\u025B|\u025B g|baa|eem|\u0254 e|a l|kw\u025B|y\u0254\u0254|e\u0254 |am\u025B|ts\u0254| sa|ana| ts|saa|k\u025Bj|\u0254 a|ehe|a m|toi|eli|yel|aji|i l| ah|m\u025Bi| at|e e|gba|a n| an|ane|hi\u025B| na|eko|eye| ey|o h|kom|mla| kr| ej| as|\u014B n|san| ay|i s|nit|ash|ek\u025B|ha |e k|ne | hi|i h|\u025B t|esh|efe|i\u0254 |its|ia\u014B|ku |o k|ats|kpa| kp|ome|gb\u0254|ets| ab|\u0254 b|\u025B b|ye | et|a e|shw|oko|a k| b\u025B|\u0254 h|\u025B y| af| ku|s\u025B |ts\u025B|\u014B h|u\u0254 |\u014B\u014B | to|\u014Bm\u025B|\u025B s| m\u025B|oi |m\u0254\u0254|aye|hwe| ef|la |ehi|rok|kro| ji|\u014B k|o m|aka|akw|o y| lo|o s|j\u025B | ny|e a|\u014Bm\u0254| ba|bii|aan|\u014Bts|\u025B\u014Bt|i\u025B\u014B|di\u025B| di|ai |u k|o l|\u014B m| eb|\u0254 s|aha|ny\u0254|i j|a h|\u025B l|w\u025B |usu| aw| ja|su\u0254|eni|i f|agb| ag|b\u0254m|sem|bua|any|\u025B d|i b|maj|m\u025Bb|a s|e\u014Bm|awo|e b|afe|hik| yi|u e|e s|ish|nak|an\u0254|hey|\u014B a|o g|jam|u m|o b|a\u014Bm| y\u0254|b\u025Bi|ye\u0254| su|ny\u025B|hew|me |\u0254 g|\u0254se| ee|il\u025B|hil|ihi|hih|las|\u0303la|a\u0303l|ba\u0303| \u014Bm|nyo|te |esu|kai|ate|\u014Bma|eee|\u025Bm\u0254|\u025Bia| eg|al\u025B|jia|\u0254\u014B |ala|wal|hi\u0254|\u025B f|his",
        ndo: "na |oku| na|wa |a o|a n| om| uu| ok|e o|ong|ka |uth|mba| ne|ntu|ba |tu |omu|nge|he |a u|the|uut|emb|hem|o o|o n|ehe|unt|e n|a w|nga|kal| wo| ke|ang| iy|lon|mun|no |lo |la |o i|ku | no|oka|keh|ulu|u n|we |shi|a m|ala|ko |ga |a k|ge |eng|nen|u k|ilo|osh|ngo|han|a y|elo|gwa|ngu|ye |li |ano|hil| mo|gul|ana|luk|a e|tha|dhi|uka| pa|lwa|go |ath|ho |man|kwa|ta |oma| sh|a p|wan|thi|uko| ko|wok| ta|ha |mwe|ya |wo |e p| yo|gel|a i|e m| os|nka|ika|uun|hi | ka|o g|sho|ema| li|kuk|iya|o w|i n|ith|and|men|ame|gam|ele|pan|opa|ash|ndj|po |hik|yom| po|le |ing|alo| el|olo|sha|kul|nok|ilw|kug|o k|a a|adh|aka|lat|aa |pam| ye|kan|iyo|mbo| we|kut|nin|e e|umb|onk|ndu| go|ike|ond|non|gan|omo|una|a s| e |mon| ga|ela|und|waa| ng|yok|ne |ulo|amw|oye| oy|aan|a l|iil|okw|eta| a |wen| ku|i k| gw|aku|igw|ila|a t| nd|ina|yuu|ene|ke | on| dh|iye|mo |pau|bo |him|lyo|o s|ula|wat|ota|yon|e t|eko|yaa|o e| me|a g|yop|e g|lun|alu|ngw|omb|ane| th|yi |o y| ii|nom|ili|dho|ono|mok|uga|vet|eho|ome|kun|iyu|i m|ali|epa| ni|lwe|opo|lok|oko|hok|i o|lol|djo|ung|oon|i t| yi|alw| ot|ukw|uuk|uki|egu|mii|o m| wu| mb|awa|naw|edh|ani|kat|nwa|enw|e k|taa|ont|a h|u t|lel|uni|ndo|wom| mw|she|ola|pwa|dyo|ndy|nem|ndi|yeh|aye|fut|nek|udh|omi"
    },
    Cyrillic: {
        rus: " \u043F\u0440| \u0438 |\u0440\u0430\u0432| \u043D\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0433\u043E |\u0435\u043D\u0438|\u0432\u043E |\u043E\u0432\u0435| \u043A\u0430|\u043D\u0430 |\u0442\u044C | \u043F\u043E|\u0438\u044F |\u043E \u043D| \u043E\u0431|\u0435\u0442 | \u0432 |\u0441\u0432\u043E| \u0441\u0432|\u0430\u0432\u043E|\u0430\u043D\u0438|\u043E\u0441\u0442|\u043E\u0433\u043E|\u044B\u0439 |\u0430\u0436\u0434|\u043B\u043E\u0432|\u0442 \u043F| \u0438\u043C|\u043D\u0438\u044F| \u0447\u0435| \u0441\u043E|\u0435\u043B\u043E|\u0438\u043C\u0435| \u043D\u0435|\u043B\u044C\u043D|\u043B\u0438 |\u0447\u0435\u043B|\u043A\u0430\u0436|\u0435\u0441\u0442|\u0432\u0435\u043A|\u0430\u0442\u044C|\u043E\u0432\u0430|\u0438\u043B\u0438| \u0440\u0430|\u0435\u043A |\u0439 \u0447|\u0434\u044B\u0439|\u0436\u0434\u044B| \u0434\u043E|\u0438\u0435 |\u0435\u0435\u0442|\u043C\u0435\u0435|\u043D\u043E | \u0438\u043B|\u0438\u0438 |\u0441\u044F |\u0435\u0433\u043E|\u043E\u0431\u043E|\u0438 \u043F|\u043D\u0438\u0435|\u043A \u0438| \u0431\u044B|\u0438 \u0441|\u0438 \u0438|\u043C\u0438 |\u0431\u043E\u0434|\u0432\u043E\u0431|\u0432\u0430\u043D| \u0437\u0430|\u043E\u0439 |\u044B\u0445 |\u043E\u043C |\u043B\u0435\u043D|\u0430\u0446\u0438|\u0435\u043D\u043D|\u043E \u0441|\u043E \u043F|\u044C\u043D\u043E|\u0442\u0432\u0430|\u0442\u0432\u043E|\u043F\u0440\u0438|\u043D\u043E\u0433|\u0430\u043B\u044C|\u0430\u043A\u043E|\u0432\u0430 |\u0438 \u043D|\u0441\u0442\u0438|\u043D\u044B\u0445|\u0442\u043E |\u0431\u0440\u0430|\u043E\u043B\u0436|\u0434\u043E\u043B|\u0441\u0442\u043E|\u0438 \u0432|\u043D\u044B\u043C|\u043E\u0435 | \u0435\u0433|\u043D\u043E\u0432|\u0438\u0445 |\u0435\u043B\u044C|\u0442\u0435\u043B|\u0442\u0438 |\u043D\u043E\u0441|\u043D\u0435 |\u043F\u043E\u043B|\u0440\u0430\u0437| \u0432\u0441|\u0438 \u043E| \u043B\u0438|\u0438 \u0440|\u044B\u0442\u044C|\u0431\u044B\u0442|\u0432\u043B\u0435|\u0440\u0435\u0434|\u0438\u044E |\u0442\u043E\u0440| \u043E\u0441|\u044C\u0441\u044F|\u0442\u044C\u0441|\u043E\u0434\u0438|\u0449\u0435\u0441|\u044F \u0438|\u043A\u0430\u043A|\u043F\u0440\u043E|\u0436\u0435\u043D|\u044B\u043C |\u043F\u0440\u0435|\u0430 \u0441|\u0441\u043D\u043E|\u0435 \u0434|\u043D\u043D\u043E|\u043E \u0438|\u0438\u0439 | \u043A\u043E|\u043E \u0432| \u043D\u0438| \u0434\u0435|\u0441\u0442\u0443|\u043B\u0436\u043D|\u0441\u043E\u0432|\u0435 \u0432|\u043D\u043E\u043C|\u043E\u043B\u044C|\u0440\u0430\u043D|\u043E\u0436\u0435|\u0438\u0447\u0435|\u0435\u0439 |\u0430\u0441\u0442|\u043D\u043D\u044B| \u043E\u0442|\u0442\u0443\u043F|\u043C \u0438|\u043E\u0434\u043D|\u0437\u043E\u0432|\u0440\u0435\u0441| \u043C\u043E|\u043E\u0441\u0443|\u043B\u044F |\u043E\u0441\u043D|\u0430 \u043E|\u0432\u0435\u043D| \u0442\u043E|\u043E \u0431|\u0448\u0435\u043D|\u0442\u0432\u0435|\u043E\u0431\u0449|\u0430 \u0438|\u0435 \u043C|\u044C\u043D\u044B|\u043E\u0431\u0440|\u0432\u0435\u0440|\u0447\u0435\u043D|\u044F \u043D|\u0436\u043D\u043E|\u0447\u0435\u0441|\u0430\u043A |\u043B\u0438\u0447|\u043D\u0438\u0438|\u0435 \u0438|\u0432\u0441\u0435|\u0431\u0449\u0435|\u0432\u0430\u0442|\u0435\u0441\u043F|\u043C\u043E\u0436|\u0439 \u0438|\u043D\u043E\u0435|\u043E \u0434|\u0431\u0435\u0441| \u0432\u043E|\u044F \u0432|\u0434\u0443 | \u0441\u0442|\u0434\u043D\u043E|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0434\u0435\u043D|\u0435\u0436\u0434|\u0445 \u0438| \u0431\u0435|\u0438 \u0434|\u043D\u044B |\u0434\u043E\u0441|\u0434\u043B\u044F| \u0434\u043B| \u0442\u0430|\u043B\u044C\u0441|\u0430\u0442\u0435|\u0446\u0438\u0438|\u044F \u043F|\u0443\u044E |\u0438\u0442\u0435|\u0435 \u043E|\u043D\u043E\u0439|\u043F\u043E\u0434|\u043E\u0442\u043E|\u0441\u0442\u0440|\u0441\u0442\u0430| \u043C\u0435|\u0435\u043B\u0438| \u0440\u0435|\u044F \u043A|\u0442\u043E\u044F|\u0430\u043C\u0438|\u0435\u043D |\u044C \u0432|\u044E \u0438|\u0430\u0437\u043E|\u0433\u043E\u0441|\u043C \u043F|\u044C \u043F|\u0442 \u0431|\u0436\u0435\u0442|\u0443\u0447\u0430|\u0441\u0443\u0434|\u044C\u0441\u0442|\u0434\u0441\u0442|\u0449\u0438\u0442|\u0430\u0449\u0438|\u0437\u0430\u0449|\u043A\u043E\u043D|\u043D\u0438\u044E|\u0430\u043C |\u043E\u0434\u0443|\u0435\u0440\u0435|\u0433\u0440\u0430|\u043F\u0435\u0447|\u043E \u043E|\u043E\u0440\u043E|\u043A\u043E\u0442|\u0438 \u043A|\u0442\u0440\u0430|\u043D\u0438\u043A|\u0443\u0449\u0435|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u043D\u0430\u043B|\u0435\u0441\u043A|\u043E \u0440|\u043A\u043E\u0433|\u0434\u0440\u0443| \u0434\u0440|\u043D\u0438 |\u0430\u0432\u0430|\u043D\u0441\u0442|\u0435\u043C |\u0430\u0432\u043D|\u044B\u043C\u0438|\u0435\u0434\u0441|\u0434\u0438\u043D|\u0434\u043E\u0432| \u0433\u043E| \u0432\u044B|\u0432 \u043A|\u044B\u0435 |\u043E\u0431\u0435|\u043C\u0443 |\u044F \u0435|\u0441\u043B\u0443|\u0443\u0434\u0430|\u0442\u0430\u043A|\u043A\u043E\u0439|\u0442\u0443 |\u0438\u0442\u0443|\u0437\u0430\u043A|\u0445\u043E\u0434|\u0432\u043E\u043B|\u0440\u0430\u0431|\u043A\u0442\u043E|\u0438\u043A\u0442|\u0438\u0447\u043D|\u043D\u0438\u0447|\u043E\u0442 |\u0438\u043D\u0430| \u043A |\u0442\u0435\u0440|\u0440\u043E\u0434|\u043D\u0430\u0440",
        ukr: "\u043D\u0430 | \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u043E|\u043D\u044F |\u043D\u043D\u044F| \u0437\u0430|\u043E\u0433\u043E|\u0442\u0438 |\u0432\u043E |\u0433\u043E | \u043A\u043E|\u0430\u0432\u043E| \u043C\u0430|\u043B\u044E\u0434|\u043E \u043D| \u043D\u0435| \u043B\u044E|\u044E\u0434\u0438|\u043E\u0436\u043D|\u043A\u043E\u0436|\u043B\u044C\u043D|\u0436\u043D\u0430|\u0434\u0438\u043D|\u0430\u0442\u0438|\u0430\u0454 |\u0438\u0445 |\u0438\u043D\u0430|\u043F\u043E\u0432|\u0441\u0432\u043E| \u0441\u0432|\u0430\u043D\u043D|\u0454 \u043F|\u043C\u0430\u0454|\u0430\u0431\u043E|\u0430 \u043B| \u0431\u0443|\u043D\u0435 |\u0435\u043D\u043D|\u0431\u043E | \u0430\u0431|\u0430 \u043C|\u043E\u0432\u0438|\u043D\u0456 | \u0432\u0438| \u043E\u0441|\u0430\u0446\u0456|\u0432\u0438\u043D| \u0442\u0430|\u0431\u0435\u0437|\u043E\u0431\u043E| \u0432\u0456| \u044F\u043A|\u0435\u0440\u0435| \u0434\u043E|\u0456 \u043F|\u0443\u0432\u0430|\u043E \u043F|\u0430\u043B\u044C|\u043D\u0438\u0445|\u043E\u043C |\u043C\u0438 |\u0456\u043B\u044C|\u043D\u043E\u0433|\u0442\u0430 |\u0438\u0439 |\u043F\u0440\u0438|\u043E\u044E |\u0442\u044C |\u0441\u0442\u0430| \u043E\u0431|\u0432\u0430\u043D|\u0438\u043D\u043D|\u0442\u0456 |\u043E\u0441\u0442| \u0443 |\u0441\u044F |\u0432\u0430\u0442|\u0431\u0443\u0442|\u0438\u0441\u0442| \u043C\u043E|\u0435\u0437\u043F|\u0443\u0442\u0438|\u043D\u043E\u0432|\u043F\u0435\u0440|\u0456\u0457 |\u0438 \u043F|\u0431\u043E\u0434|\u0432\u043E\u0431|\u0441\u0442\u0432| \u0432 |\u043E \u0432|\u0432\u0456\u0434| \u0431\u0435|\u0430\u043A\u043E|\u043F\u0456\u0434|\u0442\u0438\u0441|\u043A\u043E\u043D|\u043D\u043E |\u0432\u0430 |\u043D\u043D\u0456|\u0456 \u0441|\u0430 \u043F|\u0441\u0442\u0456| \u0441\u043F|\u043D\u0438\u0439|\u0434\u0443 |\u044C\u043D\u043E|\u043E\u043D\u0430| \u0456\u043D|\u0434\u043D\u043E|\u043D\u0438\u043C|\u0456\u0439 |\u0430 \u0437|\u043D\u0443 |\u043C\u043E\u0436|\u0457\u0457 | \u0457\u0457|\u043B\u044F |\u0441\u043E\u0431|\u043C\u0443 |\u043E\u0457 |\u044F\u043A\u043E| \u043F\u0435| \u0440\u0430|\u0456\u0434 | \u0434\u0435|\u0456 \u0432|\u0438 \u0456|\u0447\u0438\u043D|\u0432\u043D\u043E|\u043E\u043C\u0443|\u043D\u043E\u043C|\u0443 \u043F|\u0456 \u043D|\u0430 \u0441| \u0441\u0443|\u0430 \u043E|\u043D\u0435\u043D|\u0438\u0441\u044F|\u043E\u0432\u043E|\u043D\u0430\u043D|\u043E\u0434\u043D|\u0443 \u0432|\u0456 \u0434|\u0430\u0432\u0430|\u0456\u0434\u043D|\u0440\u0456\u0432| \u0440\u0456|\u0456 \u0440|\u0438\u043C\u0438|\u0432\u0456\u043B|\u0438\u043C |\u0446\u0456\u0457|\u043E \u0434|\u0430 \u0432|\u0441\u0442\u0443|\u043E\u0434\u0443|\u0431\u0443\u0434|\u043E\u0432\u0430| \u043F\u0456| \u043D\u0456|\u044F \u043D|\u0435 \u043F|\u043D\u0430\u0446|\u0438 \u0441|\u043D\u043D\u0430| \u043E\u0434| \u0440\u043E|\u043D\u043E\u0441|\u044C\u043D\u0438|\u044E\u0442\u044C|\u0438 \u0437|\u043A\u0438 |\u0456 \u0437|\u0430 \u0431|\u0441\u043F\u0440|\u0447\u0435\u043D|\u0436\u0435 |\u043E\u0436\u0435|\u0435 \u043C|\u043E\u0432\u043D|\u0440\u0438\u043C|\u0435 \u0431|\u0442\u043E |\u043D\u0456\u0445|\u043E\u0441\u043E|\u0443\u0434\u044C|\u0432\u0456 | \u0440\u0435| \u0441\u0442|\u0440\u0430\u0446|\u0434\u043E | \u0441\u043E|\u0440\u043E\u0437|\u043B\u0435\u043D|\u0432\u043D\u0438|\u0456\u0432\u043D|\u0440\u043E\u0434| \u0432\u0441|\u0441\u043F\u0456|\u043A\u043E\u0432|\u0437\u043F\u0435|\u0456\u0432 |\u0434\u043B\u044F| \u0434\u043B|\u0457 \u043E|\u0445\u0438\u0441|\u0430\u0445\u0438|\u0437\u0430\u0445|\u2010\u044F\u043A|\u044C\u2010\u044F|\u0434\u044C\u2010|\u044F \u0456|\u0442\u0430\u043A|\u0437\u043D\u0430|\u0437\u0430\u0431|\u0441\u0442\u044C|\u0442\u0443 |\u043D\u043E\u044E|\u0430 \u043D|\u0442\u043E\u0440|\u0441\u043D\u043E|\u043E \u0441|\u0436\u0435\u043D|\u0446\u0456\u0430|\u043E\u0446\u0456|\u0441\u043E\u0446|\u0456\u043D\u0448|\u0456 \u043C|\u043A\u043B\u0430|\u0438 \u0432|\u0442\u0435\u0440| \u0434\u0456|\u0456\u0441\u0442|\u043E\u0432\u0456|\u0443 \u0441|\u044F \u0432|\u0430\u0440\u043E|\u0441\u0456 |\u0432\u0456\u0442|\u0441\u0432\u0456|\u043E\u0441\u0432|\u0440\u043E\u0431|\u043F\u0456\u043B|\u0440\u0435\u0441|\u0437\u0430 |\u043F\u0435\u0447|\u0430\u0431\u0435|\u043A\u0443 |\u043B\u0438\u0432|\u0435\u0440\u0436|\u0434\u0435\u0440|\u0432 \u0456|\u0430\u0432\u043D|\u0442\u0430\u0432|\u0430\u0432 |\u0430\u043C\u0438|\u043A\u043E\u043C|\u0432\u043B\u0435|\u043E \u0431|\u044C \u043F| \u0449\u043E|\u0457\u0445 |\u0442\u0432\u043E|\u0445\u0442\u043E|\u0456\u0445\u0442|\u043A\u043E\u0433| \u043A\u0440|\u0430\u043D\u043E|\u0442\u0430\u043D|\u0456\u0430\u043B|\u043D\u0430\u043B|\u043D\u044C |\u0445 \u043F|\u0436\u043D\u043E|\u043B\u0435\u0436|\u0430\u043B\u0435|\u043F\u0440\u043E|\u0442\u0432\u0430|\u0440\u0430\u0442|\u043E \u043E|\u0445 \u0432|\u043D\u0430\u0440|\u043B\u044C\u0441|\u0446\u0456\u0439|\u043A\u043E\u0440|\u0447\u0430\u0441|\u0440\u0436\u0430|\u0457 \u0441|\u0438\u043D\u0443|\u0434\u0441\u0442|\u043E \u0437|\u0440\u0430\u0437|\u043C\u0456\u043D|\u0430 \u0440|\u0437\u0430\u043A",
        bos: " \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043C\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u0438\u043C\u0430| \u0441\u0432|\u0430 \u0441|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u0458\u0435 |\u043A\u043E |\u0430\u043A\u043E|\u043E \u0438| \u043F\u043E|\u0430\u0432\u043E|\u0435 \u0441|\u0430 \u0438|\u0442\u0438 | \u0438\u043C| \u0434\u0430| \u0443 |\u0441\u0432\u0430|\u043D\u043E | \u0437\u0430|\u043E \u043D|\u0432\u0430 |\u0438 \u043F|\u0438\u043B\u0438|\u0432\u0430\u043A|\u043B\u0438 | \u043A\u043E|\u043D\u0435 | \u0438\u043B|\u043A\u043E\u0458| \u043D\u0435| \u0434\u0440|\u043E\u0441\u0442| \u0441\u043B|\u045A\u0430 |\u0438\u043C |\u0438 \u0441|\u0443 \u0441|\u0438 \u0438|\u0430\u0432\u0430|\u0438\u0458\u0435|\u0430 \u0443| \u0431\u0438|\u0441\u0442\u0432|\u0441\u0435 |\u0432\u0430\u045A|\u0430 \u0434|\u043E\u043C |\u0458\u0435\u0434|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0441\u043B\u043E| \u0441\u0435| \u0440\u0430|\u0438\u0445 |\u0441\u0442\u0438|\u0430 \u043D|\u045A\u0435 | \u043E\u0431| \u0458\u0435|\u043F\u0440\u0438|\u0434\u0440\u0443|\u0443 \u0438|\u0458\u0443 |\u043E \u0434|\u0438\u0442\u0438|\u0432\u043E\u0458|\u0440\u0430\u0437|\u0430\u045A\u0435|\u043E\u0432\u0430|\u0434\u0458\u0435| \u043E\u0441|\u0435 \u0438|\u043B\u043E |\u0435 \u043F|\u0430\u045A\u0430|\u0443\u0458\u0435|\u0438 \u0434|\u0431\u0440\u0430|\u0442\u0440\u0435| \u0442\u0440| \u0441\u0443|\u0443 \u0437|\u0430 \u043A|\u043E\u0433 |\u0443 \u043F|\u043E\u0458\u0435|\u0446\u0438\u0458|\u0440\u0435\u0431|\u0430 \u043E|\u0430 \u0431| \u045A\u0435|\u0438 \u0443|\u043C\u0438\u0458|\u043D\u0438 |\u043D\u043E\u0441|\u0431\u0430 |\u0435\u0434\u043D|\u0441\u0432\u043E|\u045A\u0435\u0433| \u0438\u0437|\u043F\u0440\u043E|\u0435 \u0434|\u0436\u0430\u0432|\u0431\u0438\u0442| \u043D\u0438|\u0438 \u043E|\u0441\u0442\u0430|\u0430 \u0437|\u0430\u0432\u043D|\u0432\u0458\u0435| \u043A\u0430|\u0431\u0438\u043B|\u043E\u0432\u043E|\u0430 \u0458|\u0430\u0458\u0443|\u0438\u0441\u0442|\u0438 \u043D|\u043D\u0438\u0445|\u0458\u0435\u043B|\u0442\u0443 |\u0440\u0435\u0434|\u0433\u043E\u0432| \u043E\u0434|\u0435 \u043E|\u043E\u0458\u0438| \u0441\u043C|\u0458\u0430 |\u043E \u043A|\u0438\u043B\u043E|\u0430\u0446\u0438|\u0435 \u0443|\u043F\u0440\u0435|\u043E \u043F|\u0435\u0431\u0430|\u0443 \u043E|\u0441\u0443 |\u0432\u0438\u043C|\u0438\u0447\u043D| \u0441\u0430| \u0434\u0458|\u0430 \u0442|\u0438\u0458\u0430|\u0448\u0442\u0438|\u0447\u043D\u043E|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0441\u0442\u0443|\u0434\u043D\u0430|\u043E\u0434\u043D|\u0435\u043D\u0438|\u0437\u0430 |\u0438\u0432\u0430|\u043D\u043E\u043C|\u0435\u043C |\u0434\u0443 |\u0440\u0430\u043D|\u0432\u043D\u043E|\u0441\u043C\u0438|\u0458\u0435\u0440|\u0435 \u0431|\u0435 \u043D|\u0434\u0435 |\u043F\u043E\u0441|\u043C \u0438| \u0434\u043E|\u0443 \u0434|\u043D\u0430\u043A|\u0430 \u0440|\u043E\u0431\u0440| \u043C\u043E|\u043D\u0438\u043C|\u0435\u0433\u043E| \u043A\u0440|\u0442\u0438\u0442|\u043A\u0440\u0438|\u0432\u0435 |\u0430\u043D |\u0438\u043A\u043E|\u043D\u0438\u043A|\u043D\u0443 |\u0438 \u043C|\u043D\u043E\u0433|\u0435\u043D\u043E|\u0441\u043D\u043E|\u0435 \u043A|\u0442\u0443\u043F|\u0440\u0443\u0433|\u043A\u0430 |\u043E\u0434\u0430|\u0440\u0438\u0432|\u0432\u043E\u0459|\u0430\u043B\u043D|\u043C \u0441|\u0438\u0442\u0443|\u0430\u0448\u0442|\u0437\u0430\u0448|\u0430\u043D\u0438|\u0441\u0430\u043C| \u0441\u0442|\u0430\u043A\u0432|\u043E\u0432\u0438|\u043E\u0441\u043D|\u0440\u043E\u0434|\u0430\u0440\u043E| \u043C\u0438|\u0458\u0438 |\u0442\u0432\u0430|\u0434\u043D\u043E|\u043D\u0441\u0442|\u0430\u043A |\u0438\u0442\u0435|\u0459\u0443 |\u0432\u0438\u0447|\u0440\u0430\u0434|\u0443 \u043D|\u0443 \u043C| \u0442\u0430|\u0434\u0441\u0442|\u0442\u0438\u0432|\u043D\u0430\u0446|\u0440\u0438\u043C|\u043A\u043E\u043D|\u043A\u0443 |\u045A\u0443 |\u043E\u0434\u0443|\u0436\u0438\u0432|\u0430\u043C\u043E|\u0442\u0432\u043E|\u0442\u0435\u0459|\u043F\u043E\u0434|\u0435\u045B\u0443|\u0433 \u043F|\u043D\u043E\u0432|\u0438\u043D\u0430|\u043D\u0430\u0440| \u0432\u0458|\u0438 \u0431|\u043E\u0458 | \u043E\u0432|\u0430\u0432\u0435|\u0432\u0443 |\u0430\u043D\u0441|\u043E\u0458\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u0435 \u0442|\u0438 \u0432|\u0435\u045A\u0430|\u0435\u0434\u0438|\u043D\u0438\u0446|\u043D\u0430\u043F|\u043C\u0458\u0435| \u0438\u0441|\u0441\u043B\u0443|\u0435\u0434\u0441|\u043E \u043E|\u0437\u0430\u043A|\u0438 \u043A|\u043C \u043F|\u0442\u043D\u043E|\u0438\u0432\u043E|\u0435\u0440\u0435|\u043D\u0438\u0447|\u043A\u0430\u043A|\u0430\u0434\u0430|\u0432\u043D\u0438|\u0443\u0433\u0438| \u0440\u043E|\u043C\u043E\u0432|\u0432\u0435\u043D|\u043E \u0441|\u0442\u043E |\u0442\u0435 | \u0432\u0440| \u0431\u0435|\u0430\u0440\u0430|\u043A\u043B\u0430| \u0431\u0440|\u0443 \u0431|\u0443 \u0443|\u0438 \u0442|\u043E\u043D\u0430| \u043E\u043D|\u0430\u0432\u0438|\u0458\u0430\u043B|\u0434\u043D\u0438| \u0441\u043A",
        srp: " \u043F\u0440| \u0438 |\u0440\u0430\u0432|\u043D\u0430 |\u043F\u0440\u0430| \u043D\u0430|\u043C\u0430 | \u0441\u0432|\u0438\u043C\u0430|\u0434\u0430 |\u0430 \u043F|\u0432\u043E |\u043A\u043E |\u0442\u0438 |\u0430\u0432\u043E| \u043F\u043E|\u0430 \u0438|\u0430\u043A\u043E|\u0430 \u0441| \u0437\u0430| \u0443 |\u043E \u0438| \u0438\u043C|\u0438 \u043F|\u0432\u0430 |\u0441\u0432\u0430|\u0432\u0430\u043A| \u0434\u0430|\u043E \u043D|\u0435 \u0441|\u043E\u0441\u0442| \u043A\u043E|\u045A\u0430 |\u043B\u0438 |\u0438\u043B\u0438|\u043D\u0435 |\u043E\u043C | \u043D\u0435|\u0430 \u043D| \u0441\u043B| \u0438\u043B|\u0458\u0435 | \u0434\u0440|\u0438 \u0441|\u043D\u043E |\u043A\u043E\u0458|\u0443 \u0441|\u0430\u0432\u0430| \u0440\u0430|\u043E\u0433 |\u0441\u043B\u043E|\u0458\u0443 |\u0438\u043C |\u0441\u0442\u0438|\u0431\u043E\u0434|\u043E\u0431\u043E|\u043B\u043E\u0431|\u0438\u0442\u0438|\u0430 \u043E|\u0441\u0442\u0432|\u0438 \u0443|\u0430 \u0434|\u043D\u0438 |\u0458\u0435\u0434|\u0443 \u043F|\u043F\u0440\u0438|\u0435\u0434\u043D| \u0431\u0438|\u0438 \u0438|\u0430 \u043A|\u043E \u0434|\u0441\u0442\u0430|\u0438\u0445 |\u0434\u0440\u0443|\u0430 \u0443| \u0458\u0435|\u0430\u045A\u0430| \u043E\u0441| \u043D\u0438|\u043D\u043E\u0441|\u043F\u0440\u043E|\u0430\u0458\u0443|\u0438 \u043E| \u0434\u0435| \u0441\u0443|\u0443 \u0438|\u0441\u0435 |\u045A\u0435 |\u0458\u0430 |\u043E\u0432\u0430|\u0438 \u0434|\u0446\u0438\u0458| \u043E\u0431|\u0443\u0458\u0435|\u0440\u0435\u0434|\u0436\u0430\u0432|\u0435 \u0438|\u0435 \u043F|\u0430 \u0458|\u0434\u043D\u0430| \u0441\u0435| \u043E\u0434|\u0432\u0435 | \u043A\u0430|\u0435\u043D\u0438|\u0440\u0436\u0430|\u0434\u0440\u0436|\u0430 \u0437|\u0430\u0432\u043D|\u0435\u045A\u0430|\u0430\u0446\u0438|\u0432\u043E\u0458|\u043E\u0432\u043E|\u0443 \u0443|\u043C \u0438|\u043E\u0458\u0430|\u0432\u0430\u045A| \u0438\u0437|\u0438\u0458\u0430|\u0443 \u0437|\u0430\u045A\u0435|\u0440\u0430\u043D|\u0435 \u043E|\u0440\u043E\u0434|\u0438 \u043D|\u0435 \u0431|\u0440\u0430\u0437|\u0437\u0430 | \u045A\u0435|\u0433\u043E\u0432|\u0438\u0447\u043D| \u0441\u0442|\u043D\u043E\u0432|\u0441\u043D\u043E|\u043E\u0441\u043D|\u0434\u0443 |\u043F\u0440\u0435| \u0442\u0440|\u0441\u0443 |\u0432\u0443 |\u043E\u0434\u043D|\u0430 \u0431|\u0441\u0432\u043E|\u045A\u0435\u0433|\u043D\u0438\u043C|\u043D\u0438\u0445|\u0442\u0443 |\u0442\u0438\u0442|\u0448\u0442\u0438|\u043A\u0443 |\u043D\u043E\u043C|\u0431\u0438\u0442|\u0435 \u0434|\u043C\u0435 |\u0438\u043A\u043E|\u0447\u043D\u043E|\u043E\u0458\u0438|\u043B\u043E |\u0432\u043D\u043E|\u043D\u0438\u043A|\u0438\u043A\u0430|\u0431\u0435\u0437|\u0430\u0440\u0430|\u0434\u0435 |\u0443 \u043E|\u0432\u0438\u043C|\u043D\u0430\u043A| \u0441\u0430|\u0440\u0438\u0432|\u0430\u0432\u0435|\u0430\u043D |\u0432\u043E\u0459| \u043A\u0440|\u043E \u043F|\u0441\u043C\u0435|\u0435 \u043A|\u043D\u043E\u0433|\u0458\u0438 | \u043E\u0432|\u0435 \u0443|\u0442\u0432\u0430|\u0431\u0440\u0430|\u0440\u0443\u0433|\u0440\u0435\u0431|\u0442\u0440\u0435|\u0443 \u0434|\u043E\u0434\u0430| \u043C\u043E| \u0432\u0440|\u0430\u0432\u0459|\u0443 \u043D|\u0435\u0433\u043E|\u0434\u0435\u043B|\u043C \u0441|\u043A\u0440\u0438|\u043E \u043A|\u0430\u0448\u0442|\u0437\u0430\u0448|\u045A\u0443 | \u0441\u043C|\u0430\u043D\u0438| \u043B\u0438|\u0434\u043D\u043E|\u0435\u0452\u0443|\u0430\u043B\u043D|\u043B\u0430 |\u0430\u043A\u0432|\u043E\u0458 |\u043A\u043E\u043C|\u0441\u0442\u0443|\u0443\u0433\u0438|\u0430\u0432\u0438|\u0430 \u0440|\u043A\u0430 |\u0440\u0430\u0434|\u043E\u0434\u0438|\u0432\u0438\u0447|\u0442\u0430\u0432|\u0438\u0442\u0443|\u0443\u0434\u0435|\u0431\u0443\u0434| \u0431\u0443|\u043F\u043E\u0442|\u043E\u0434\u0443|\u0436\u0438\u0432|\u0435\u0440\u0435|\u0442\u0432\u043E|\u0438\u043B\u043E|\u0431\u0438\u043B|\u0430\u0440\u043E|\u0435 \u043D|\u043E\u0432\u0438|\u043F\u043E\u0440|\u0435\u043D\u043E|\u0448\u0442\u0432|\u043D\u0430\u0446|\u043E\u0432\u0435|\u043C \u043F|\u0442\u0443\u043F|\u043F\u043E\u0441|\u0440\u0435\u043C|\u0434\u043D\u0438|\u0431\u0430 |\u043D\u0441\u0442|\u0430 \u0442|\u043E\u0458\u0443|\u0430\u0441\u0442|\u0438\u0432\u0430|\u0435 \u043C|\u0432\u0440\u0435|\u0432\u0459\u0430|\u043D\u0443 |\u0431\u0435\u0452|\u0438\u0441\u0442|\u0435\u043D |\u0442\u0435 |\u0434\u0441\u0442|\u0440\u043E\u0442|\u0437\u0430\u043A|\u0430\u043E |\u043A\u0430\u043E|\u0438 \u043A|\u0458\u0443\u045B|\u043E \u0441|\u0441\u0442 |\u0441\u0430\u043C|\u043C \u043D|\u0442\u0435\u0440|\u043D\u0430\u0440| \u043C\u0435|\u0438 \u043C|\u043A\u043E\u043B|\u0435 \u0440|\u0443\u0448\u0442|\u0440\u0443\u0448|\u0432\u0435\u0440|\u043A\u0430\u043A| \u0431\u0435|\u0438 \u0431|\u043A\u043B\u0430|\u0430\u0434\u0430|\u0435\u0431\u0430|\u0435\u043D\u0430|\u043E\u043D\u0430| \u043E\u043D|\u0442\u0432\u0443|\u0430\u043D\u0441| \u0434\u043E|\u0440\u0430\u043A|\u0441\u043B\u0443|\u0438 \u0432|\u043D\u0438\u0446|\u0443 \u043A|\u043C\u0435\u043D|\u0432\u0440\u0448|\u0435\u043C\u0435|\u0435\u0434\u0441|\u0438\u0432\u0438|\u043E \u043E|\u0458\u0430\u0432",
        uzn: "\u0430\u043D |\u043B\u0430\u0440|\u0433\u0430 |\u0438\u0440 | \u0431\u0438|\u0430\u0440 | \u0432\u0430|\u0434\u0430 |\u0438\u0433\u0430| \u04B3\u0443|\u0432\u0430 |\u0431\u0438\u0440|\u0443\u049B\u0443|\u049B\u0443\u049B|\u04B3\u0443\u049B| \u04B3\u0430|\u0440 \u0431|\u0433\u0430\u043D|\u0438\u0448 |\u0438\u0434\u0430| \u0442\u0430|\u0430 \u044D|\u0438\u043D\u0438|\u0430\u0434\u0438|\u043D\u0433 |\u0434\u0438\u0440|\u0438\u0448\u0438|\u043B\u0438\u043A|\u043B\u0438\u0448|\u0438\u0439 |\u0438\u043B\u0438|\u0430\u0440\u0438|\u0443\u049B\u0438|\u04B3\u0430\u0440|\u043B\u0430\u043D|\u0438\u043D\u0433|\u0448\u0438 |\u0434\u0430\u043D|\u043D\u0438\u043D|\u0438\u043D\u0441|\u043A\u0438\u043D|\u0441\u043E\u043D|\u043D\u0441\u043E| \u0438\u043D| \u043C\u0443|\u049B\u0438\u0433| \u043C\u0430|\u043E\u043D |\u0440 \u0438| \u0431\u045E|\u044D\u0433\u0430| \u044D\u0433| \u045E\u0437|\u043D\u0438 |\u0431\u045E\u043B|\u0433\u0430\u0434|\u0438 \u0431|\u043A\u0438 |\u0438\u043B\u0430|\u0451\u043A\u0438| \u0451\u043A|\u0430 \u0431|\u043D \u0431|\u0438\u043D |\u0440 \u04B3|\u0430\u043B\u0430|\u044D\u0440\u043A| \u044D\u0440|\u043B\u0433\u0430| \u049B\u0430|\u0440\u043A\u0438|\u0448 \u04B3|\u0438 \u04B3|\u043D \u043C| \u0431\u043E| \u0431\u0430|\u0438\u043A |\u0430\u0440\u0430|\u0438\u0433\u0438|\u043B\u0438\u0433|\u0440\u0438 |\u049B\u0438\u043B|\u0430 \u0442|\u0431\u0438\u043B| \u044D\u0442|\u043D\u0438\u0448|\u043D\u043B\u0438|\u043A\u043B\u0430|\u0438 \u0432|\u0431\u043E\u0448|\u044D\u0442\u0438|\u0430\u043D\u0438|\u0438\u043C |\u0438 \u043C|\u043E\u043B\u0438|\u049B\u043B\u0430|\u0430 \u04B3|\u043B\u0430\u0448|\u0430\u0442\u043B|\u0442\u0438\u043B|\u0430 \u049B| \u043E\u043B|\u043E\u0441\u0438|\u043C\u0430\u0441|\u049B\u0430\u0440|\u0438\u043D\u043B|\u043B\u0430\u0442| \u049B\u0438|\u0442\u0430\u044A|\u04B3\u0430\u043C|\u0433\u0438 |\u0438\u0431 |\u043C\u043B\u0430|\u045E\u0437 |\u043D \u044D|\u043C\u0443\u043C| \u0434\u0430| \u0431\u0443|\u0430\u0442 |\u0448 \u0432|\u0443\u043D |\u0430\u0442\u0438|\u043C\u043A\u0438|\u0443\u043C\u043A|\u0442\u043B\u0430|\u0438\u0440\u043E|\u045E\u043B\u0438|\u0431\u0430\u0440|\u0438\u0440\u0438|\u0440\u0438\u0448|\u0438\u044F\u0442|\u0430\u043B\u0438| \u0431\u0435| \u049B\u043E|\u0430 \u0448|\u0430\u0440\u043E| \u043A\u0435|\u0438 \u0442|\u0440\u043B\u0430| \u0442\u0435|\u0447\u0430 |\u0440\u0447\u0430|\u0430\u0440\u0447|\u0430 \u045E| \u0448\u0443|\u0442\u0438\u0448|\u043D \u04B3|\u0442\u0433\u0430| \u0441\u0430|\u0430\u0441\u0438| \u0445\u0430|\u0440\u0430\u043A|\u043B\u0438\u043D|\u043E\u043B\u0430|\u0438\u043C\u043E|\u0448\u049B\u0430|\u043B\u0438 | \u0442\u0443|\u0430\u043C\u043B|\u043B\u043B\u0430|\u0441\u0438\u0434|\u043D \u045E| \u0430\u0441|\u043D\u0438\u0434|\u0430 \u0438| \u043A\u0438|\u043D \u0442|\u043D\u0434\u0430|\u043A \u0431|\u0435\u0440\u0430|\u043E\u0448\u049B|\u0441\u0438\u0437|\u043E\u0440 |\u0430 \u043C|\u0440 \u0432|\u0435\u043D\u0433|\u0442\u0435\u043D|\u043C\u0430\u0442|\u043C\u0434\u0430|\u0430\u043C\u0434|\u043B\u0438\u043C|\u0439 \u0442|\u044F\u0442 |\u0438 \u0430|\u0438\u043D\u043E|\u0438\u043B\u0433| \u0442\u043E|\u0442\u043D\u0438|\u0430\u043D\u0430|\u0430\u0441 |\u044D\u043C\u0430| \u044D\u043C|\u0430 \u0451| \u0448\u0430|\u0430\u0448 |\u0430 \u0430|\u0442\u0430\u0440|\u043A\u0430\u0442|\u0430\u043A\u0430|\u0430\u043A | \u0434\u0435|\u0430\u0437\u0430|\u0438\u043B\u043B|\u0441\u0438\u0439| \u0441\u0438| \u0441\u043E|\u0443\u049B\u043B|\u043D \u049B|\u043E\u0434\u0430|\u044A\u043B\u0438|\u0430\u044A\u043B|\u043D\u0438\u043A|\u0430\u0434\u0430| \u043D\u0438|\u0442\u0434\u0430|\u0433\u0438\u043D|\u0443\u043D\u0438|\u0441\u0438\u0442|\u0430\u0439 |\u049B\u043E\u043D|\u043D \u043E| \u0436\u0430|\u043A\u0438\u043C|\u0435\u0447 |\u04B3\u0435\u0447| \u04B3\u0435|\u045E\u0437\u0438|\u043B\u0430\u043A|\u043A\u0435\u0440|\u0438\u043A\u043B|\u043B\u043B\u0438|\u0443\u0440 |\u0437\u0430\u0440|\u0448\u043B\u0430|\u0440\u0438\u0433|\u0438\u0440\u043B|\u0434\u0430\u043C|\u043A\u043E\u04B3|\u0438\u043A\u043E|\u0430 \u0434|\u0430\u043C |\u043D \u0432|\u0440\u0442\u0438|\u0442\u0438\u0431|\u0442\u0430\u043B| \u0438\u0448|\u0447\u0443\u043D|\u0443\u0447\u0443| \u0443\u0447|\u0441\u043B\u0430|\u0430 \u0443|\u0440\u0438\u043D|\u0441\u043E\u0441|\u0430\u0441\u043E| \u0443\u043D|\u043D\u0430 | \u043A\u0430|\u043C\u0443\u04B3|\u0434\u0438\u0433|\u0447 \u043A|\u0430\u0441\u043B|\u043B\u043C\u0430|\u0440\u0430 |\u0431\u0443 |\u0445\u0430\u043B|\u045E\u043B\u0433|\u0438 \u043A|\u0435\u043A\u043B|\u0440 \u0434|\u049B\u0430\u0442|\u0430\u0433\u0430|\u0438 \u049B|\u043E\u0438\u0439|\u043C\u0438\u043B| \u043C\u0438|\u049B\u0430 |\u0438 \u0441|\u0436\u0438\u043D| \u0436\u0438|\u0441\u0438\u043D|\u0440\u043E\u0440|\u0430 \u0432|\u043B\u0430\u0434|\u0430 \u043E|\u0442\u043B\u0438|\u043C\u0438\u044F|\u043D \u0438|\u0430\u0431 |\u0442\u0438\u0440|\u0437 \u043C|\u0434\u0430\u0432|\u0440\u0433\u0430|\u0430\u0433\u0438|\u0430 \u043A|\u043D\u043B\u0430|\u0430\u049B\u0442|\u0432\u0430\u049B|\u0430\u0440\u0442|\u0430\u0451\u0442|\u043B\u0430\u0431",
        azj: " \u0432\u04D9|\u0432\u04D9 |\u04D9\u0440 |\u0438\u0440 | \u04BB\u04D9| \u0431\u0438| \u04BB\u04AF| \u043E\u043B|\u04AF\u0433\u0443|\u04BB\u04AF\u0433|\u0433\u0443\u0433|\u043D\u0430 |\u0438\u043D |\u043B\u0430\u0440|\u04BB\u04D9\u0440|\u0434\u04D9 | \u0448\u04D9|\u0431\u0438\u0440|\u043B\u04D9\u0440|\u043B\u0438\u043A|\u043C\u0430\u043B|\u0440 \u0431|\u043B\u043C\u0430|\u0440 \u04BB| \u0442\u04D9|\u04D9\u0445\u0441|\u0448\u04D9\u0445|\u04D9\u043D |\u0434\u0438\u0440|\u0443\u0433\u0443|\u0443\u043D\u0430|\u0430\u043D |\u0430\u043B\u0438|\u0430 \u043C| \u043C\u0430|\u0438\u043A\u0434|\u0438\u043D\u0438|\u0440 \u0448|\u0434\u04D9\u043D|\u0430\u0440 |\u0438\u043B\u04D9|\u0433\u0443\u043D|\u0430\u0433 |\u0430\u0441\u044B| \u0458\u0430|\u043C\u04D9\u043A|\u0458\u04D9\u0442| \u043C\u04D9| \u043C\u04AF|\u043A\u0434\u0438|\u04D9\u0441\u0438|\u04D9\u043A |\u0438\u043B\u043C|\u043D\u0438\u043D|\u043D\u0434\u04D9|\u043E\u043B\u043C|\u04D9\u0442\u0438|\u04D9 \u0458|\u0441\u0438\u043D|\u0445\u0441 |\u043D\u0434\u0430|\u043B\u043C\u04D9|\u0458\u0458\u04D9|\u0438 \u0432| \u0433\u0430| \u0430\u0437|\u043E\u043B\u0443|\u0438\u0458\u0458|\u0458\u0430 |\u0438\u043D\u0434|\u0437\u0430\u0434|\u0433\u043B\u0430|\u04AF\u043D |\u043D\u0438 |\u043B\u04D9 |\u0442\u0438\u043D|\u043D \u043C|\u0430\u0437\u0430|\u0430\u0440\u044B|\u04D9\u0442 |\u043D \u0442|\u043C\u0430\u0433|\u043B\u0443\u043D|\u043B\u044B\u0433|\u04D9 \u0431|\u0443\u043D |\u043D\u0443\u043D|\u0433 \u0432|\u043D \u04BB|\u0434\u0430\u043D|\u044B\u043D | \u0435\u0442|\u0442\u043C\u04D9|\u04D9\u0440\u04D9| \u04E9\u0437|\u0434\u0430 |\u04D9 \u0432| \u043E\u043D|\u04D9 \u0430|\u044B\u043D\u0430|\u044B\u043D\u044B|\u0431\u0438\u043B|\u0430 \u0431|\u0441\u044B |\u0438\u043B |\u04D9\u043C\u0438|\u0430\u0440\u0430|\u0441\u0438 | \u0434\u0438|\u04D9 \u043C|\u04D9\u0440\u0438|\u0440\u043B\u04D9| \u0432\u0430|\u04D9 \u04BB|\u0435\u0442\u043C|\u044B\u0493\u044B|\u0430\u043C\u0430|\u0434\u043B\u044B|\u0430\u0434\u043B|\u0440\u0438\u043D|\u0431\u04D9\u0440|\u0440\u044B\u043D|\u043D \u0438|\u043C\u04AF\u0434|\u043D\u044B\u043D| \u04BB\u0435|\u043C\u0430\u0441|\u0438\u043A |\u043D \u0430|\u0434\u0438\u043B|\u0430\u043B\u044B|\u0438\u0440\u043B|\u04D9\u043B\u04D9|\u04AF\u0434\u0430|\u0441\u044B\u043D|\u044B\u043D\u0434|\u0445\u0441\u0438|\u043B\u0438 |\u04D9 \u0434|\u043D\u04D9 | \u0431\u04D9|\u04D9\u0458\u0430| \u0438\u043D|\u04D9 \u0438|\u043B\u04D9\u0442| \u0441\u04D9|\u043D\u044B | \u0438\u0448|\u0430\u043D\u044B|\u0435\u0447 |\u04BB\u0435\u0447|\u0433 \u04BB|\u0435\u0458\u043D|\u04D9 \u0435|\u0434\u044B\u0440| \u0434\u0430|\u0430\u0441\u0438|\u0440\u044B |\u0438\u0448 |\u0438\u0444\u0430|\u043B\u044B\u0493|\u0438 \u0441|\u0444\u0438\u04D9|\u0430\u0444\u0438|\u0434\u0430\u0444| \u0435\u0434|\u043C\u04D9\u0437|\u0443 \u0432|\u043A\u0438\u043B| \u04BB\u0430|\u043E\u043B\u0430|\u043D \u0432|\u04D9\u043D\u0438|\u044B\u0440 |\u0443\u0433 |\u0443\u043D\u043C| \u0431\u0443| \u0430\u0441|\u0441\u0438\u0430|\u043E\u0441\u0438|\u0441\u043E\u0441|\u0438\u043B\u0438|\u044B\u0434\u044B|\u043B\u044B\u0434|\u043D\u043C\u0430|\u044B\u0433 |\u0438\u043D\u04D9|\u04D9\u0440\u0430|\u0441\u0438\u043B|\u0445\u0438\u043B|\u0430\u0445\u0438|\u0434\u0430\u0445|\u0430\u0434\u04D9|\u043C\u0430\u043D|\u0430 \u04BB|\u04D9 \u043E|\u043E\u043D\u0443|\u0430 \u0433|\u04D9\u0437 | \u043A\u0438|\u0441\u0435\u0447| \u0441\u0435|\u044B \u04BB|\u043C\u0438\u043D|\u043B\u0430\u043D|\u04D9\u0434\u04D9|\u0431\u0443 |\u0440\u0430\u0433|\u043B\u044B |\u044B\u043B\u044B|\u0430\u043B |\u04D9 \u0433|\u0440 \u0432|\u043D\u043B\u0430|\u04BB\u0441\u0438|\u04D9\u04BB\u0441|\u0442\u04D9\u04BB|\u04E9\u0437 |\u0438\u0441\u0442| \u0438\u0441|\u043C\u04D9\u0441| \u04D9\u0441|\u0438\u043D\u0430|\u04D9 \u0442|\u04D9\u0442\u043B|\u0430 \u0432|\u0438\u04D9 |\u043D \u0431|\u0442\u04D9\u0440| \u0442\u0430| \u04B9\u04D9|\u0435\u0434\u0438|\u0430\u043B\u0430|\u043A\u0438\u043C|\u0433\u0443 |\u0438 \u0442|\u0443\u043B\u043C|\u043C\u04D9\u04BB|\u043D \u043E|\u0430\u0458\u0430|\u044B \u043E|\u0438\u0430\u043B| \u0441\u043E|\u0438\u043B\u043B|\u0441\u0438\u0458| \u0434\u04D9|\u0432\u0430\u0440|\u0438\u043D\u0441|\u043C\u0438 |\u0493\u044B |\u043D\u0438\u043A|\u0440 \u0438|\u0430\u0433\u043B|\u043A \u04BB|\u0442\u04D9\u043C|\u0442\u0430\u043C|\u0447\u04AF\u043D|\u04AF\u0447\u04AF| \u04AF\u0447|\u0493\u044B\u043D|\u0441\u0430\u0441|\u04D9\u0441\u0430|\u0437 \u04BB|\u04D9\u043C\u04D9|\u0437\u0430\u043C| \u0437\u0430|\u0441\u0442\u0438|\u0440\u04D9\u0444|\u043D \u0435|\u0440 \u0430|\u0438\u043B\u0434|\u04BB\u04D9\u043C|\u044B\u0433\u043B|\u0458\u0430\u043D|\u043C\u0430\u0458|\u043D \u04D9|\u043C\u04D9\u043D|\u043C\u0438\u043B| \u043C\u0438|\u04D9\u0433\u0438|\u0434\u0438\u043D|\u043D \u0434|\u0442\u04AF\u043D| \u0434\u04E9|\u043C\u0438\u0458|\u043A\u0430\u04BB|\u0438\u043A\u0430| \u043D\u0438|\u0444\u0430\u0434|\u0442\u0438\u0444|\u043B \u043E|\u0441\u04D9\u0440|\u0458\u043D\u0438| \u0435\u0458|\u0430\u043D\u0430|\u043B\u04D9\u043D|\u0430\u043C |\u0440\u0438\u043B|\u0430\u0458\u04D9|\u0430\u0448\u044B",
        koi: "\u043D\u044B |\u04E7\u043D | \u0431\u044B|\u0434\u0430 | \u043F\u0440|\u043B\u04E7\u043D|\u0440\u0430\u0432| \u043C\u043E|\u043F\u0440\u0430| \u0434\u0430|\u0431\u044B\u0434| \u0432\u0435|\u043E\u0440\u0442|\u043B\u04E7 |\u04E7\u0439 |\u043C\u043E\u0440|\u04E7\u043C |\u0430\u0432\u043E| \u043D\u0435|\u0432\u043E |\u044B\u0434 |\u044B\u0441 |\u043D\u04E7\u0439|\u044B\u043D |\u043C \u043F|\u0434 \u043C|\u044B\u043D\u044B|\u0442\u043D\u044B| \u0430\u0441|\u0442\u04E7\u043C|\u043B\u044C\u043D| \u044D\u043C|\u0432\u0435\u0440|\u0441\u044C |\u044C\u043D\u04E7|\u044D\u043C |\u043D \u044D|\u0442\u043B\u04E7| \u043A\u044B|\u0441\u04E7 | \u043F\u043E|\u0435\u0440\u043C|\u0441\u044C\u04E7|\u0440\u0442\u043B|\u0430\u043B\u044C| \u043A\u04E7|\u044D\u0437 | \u04E7\u0442|\u04E7 \u0432|\u0442\u043E |\u0435\u0442\u043E|\u043D\u0435\u0442|\u044B\u043B\u04E7| \u043A\u043E|\u0442\u0448\u04E7| \u043E\u0442| \u0438 |\u044B \u0441|\u0431\u044B |\u04E7 \u0431|\u0441\u0442\u0432|\u043A\u04E7\u0440| \u0432\u04E7|\u0448\u04E7\u043C|\u043A\u044B\u0442|\u0442\u0430 |\u043D\u0430 |\u0437 \u0432| \u0441\u0435| \u0434\u043E|\u0432\u043E\u043B|\u04E7\u0441 | \u0441\u044B|\u044B \u0430|\u043E\u043B\u0430|\u0440\u043C\u04E7|\u0430\u0441 |\u043E\u0437 | \u043E\u0437| \u0441\u0456|\u0430 \u0441|\u0442\u0432\u043E|\u0441 \u043E| \u0432\u044B|\u043B\u0456\u0441|\u04E7 \u043A|\u044B\u0442\u0448|\u04E7 \u0434|\u0438\u0441 |\u0456\u0441\u044C|\u04E7\u0442\u043D|\u0430\u0441\u044C| \u043E\u043B| \u043D\u0430|\u0430\u0446\u0438| \u044D\u0442|\u0430 \u0432|\u0437\u043B\u04E7|\u0441\u0435\u0442| \u0432\u043E| \u0447\u0443|\u043B\u0430\u0441|\u043B\u0430\u043D|\u043C\u04E7 |\u0442\u044B\u0441|\u0440\u0442\u044B|\u04E7\u0440\u0442|\u044B \u043F|\u04E7\u0442\u043B|\u043E \u0441|\u044D\u0442\u0430|\u0434\u0437 |\u043A\u04E7\u0442|\u04E7\u0434\u043D|\u0432\u043D\u044B| \u043C\u044B|\u043D \u043D|\u0443\u0434\u0436| \u0443\u0434|\u0432\u044B\u043B|\u04E7 \u043C|\u0440\u0442\u0456|\u043E\u0440\u0439|\u0438\u0441\u044C| \u0441\u043E|\u0432\u043E\u044D|\u044B\u0434\u04E7|\u0439 \u043E|\u043A\u043E\u043B| \u0433\u043E|\u0441 \u0441|\u0441\u0441\u0438|\u0441\u044B\u043B|\u044B\u0441\u043B|\u0439\u044B\u043D|\u043A\u0438\u043D|\u043E\u043B\u04E7|\u0442\u04E7\u043D| \u0441\u044C|\u0430\u043D\u0430|\u04E7\u0440 |\u0446\u0438\u044F|\u0430 \u0434|\u04E7\u043C\u04E7| \u0432\u0438|\u0437 \u043A| \u044D\u0437|\u044B \u0431|\u0442\u04E7\u0433|\u04E7\u0442 |\u043C\u04E7\u0434|\u0435\u0441\u0442|\u043E\u0441\u0442|\u04E7\u043D\u044B|\u0442\u0438\u0440|\u043E\u0442\u0438|\u0443\u043A\u04E7|\u0447\u0443\u043A|\u043D \u043F|\u043E\u043D\u0434|\u043F\u043E\u043D|\u0441\u043B\u04E7|\u043A\u0435\u0440| \u043A\u0435| \u043E\u0431|\u0441\u0438\u0441|\u0441\u0443\u0434|\u0430 \u043D|\u0434\u043E\u0440|\u043A\u043E\u043D|\u043D\u0435\u043A|\u043D \u0431|\u043B\u04E7\u0442|\u0441 \u0432|\u0442\u0456 |\u044C\u04E7\u0440|\u0442\u0440\u0430| \u0441\u0442|\u043D\u0430\u043B|\u043E\u043D\u0430|\u043D\u0430\u0446|\u043D \u043A|\u043A\u04E7\u0434|\u04E7\u0433 |\u0441\u043A\u04E7|\u0442\u044C |\u0435\u0442\u04E7|\u0434\u04E7\u0441|\u0431\u044B\u0442|\u0440\u043D\u044B|\u04E7 \u043D|\u0442\u0441\u04E7|\u0440\u0440\u0435|\u0430 \u0431|\u043D\u0434\u0430|\u0441 \u0434|\u0430\u0441\u0441|\u044B \u043A|\u0430\u0441\u043B| \u043B\u043E|\u044C\u043D\u044B|\u0441\u044C\u043D|\u044B \u043C|\u0435\u043A\u0438|\u044B \u0434| \u043C\u04E7|\u044C \u043C|\u044B \u043D|\u044B\u0442\u04E7| \u043C\u0435|\u0440\u0439\u04E7|\u0438\u0430\u043B|\u0439 \u0434|\u0438\u0442\u04E7|\u0430 \u043A|\u04E7\u0441\u044C|\u043C\u04E7\u0441|\u043E\u0432\u043D|\u0437\u044B\u043D|\u0430 \u043F|\u043E\u0442\u0441| \u043B\u0438|\u043E\u043B\u044F|\u04E7 \u0430|\u043E\u0441\u0443|\u04E7\u044F |\u043D\u04E7\u044F|\u0435\u0437\u043B|\u0440\u0435\u0437|\u043C\u0435\u0434|\u0441 \u043C| \u0441\u044D|\u044C \u043A|\u0440\u0439\u044B|\u0430\u043A\u043E|\u0437\u0430\u043A| \u0437\u0430|\u044C\u044B\u043D|\u043D\u043D\u0451|\u043C\u04E7\u043B|\u0443\u043C\u04E7| \u0443\u043C|\u044B \u0443|\u043D \u0432|\u043C \u0434|\u043D \u0441| \u0434\u0437|\u043D \u043E|\u0440\u0430\u043D|\u0441\u0442\u0440|\u043E\u0437\u044C|\u043F\u043E\u0437|\u0437 \u043F|\u043E \u0434|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0438\u043E\u043D|\u0430 \u043C|\u0435\u0441\u043A|\u0447\u0435\u0441|\u043D\u04E7 |\u0437 \u0434|\u0442\u0441\u044C|\u0431\u04E7\u0440| \u0431\u04E7| \u043E\u0432|\u0432\u0435\u0441|\u043A\u044B\u0434|\u04E7 \u0441|\u0432\u043E\u044B|\u043A\u043E\u0434|\u0442\u043A\u043E|\u04E7\u0442\u043A|\u043E\u043B\u044C|\u0434\u0431\u044B|\u0435\u0434\u0431|\u0441\u044C\u044B|\u0447\u044B\u043D|\u0442\u0447\u044B|\u04E7\u0442\u0447|\u0442\u043B\u0430|\u043C\u04E7\u043D|\u0441\u043B\u0430|\u0439\u04E7\u0437| \u0439\u04E7|\u0442 \u0432|\u044B \u0438|\u0435\u0437 |\u043E \u0432|\u043E\u043D\u044B|\u0439\u04E7 |\u0430\u043D\u043D|\u04E7\u043B\u044C| \u043F\u044B|\u0430\u043D |\u043D\u04E7\u0441|\u043D\u0438\u0442| \u0441\u0443|\u043C \u0441",
        bel: " \u043F\u0440|\u043F\u0440\u0430| \u0456 |\u0430\u0432\u0430|\u043D\u0430 |\u0440\u0430\u0432| \u043D\u0430| \u043F\u0430|\u043D\u044B |\u0432\u0430 |\u0430\u0431\u043E|\u0446\u044C | \u0430\u0431|\u0430\u0435 | \u043C\u0430|\u0430\u0432\u0435|\u0430\u043D\u043D|\u0430\u0446\u044B|\u0441\u0432\u0430| \u0441\u0432|\u0435 \u043F|\u043B\u044C\u043D| \u0447\u0430|\u043D\u0435 |\u043D\u043D\u044F|\u0430\u043B\u0430|\u0430 \u043D|\u0430\u0439 |\u043B\u0430\u0432|\u0447\u0430\u043B| \u043A\u043E| \u0430\u0434| \u043D\u0435|\u0433\u0430 |\u043E\u0436\u043D|\u043A\u043E\u0436|\u0432\u0435\u043A|\u043D\u044F | \u044F\u043A|\u0436\u043D\u044B|\u044B \u0447|\u043C\u0430\u0435|\u0430 \u043F|\u0430\u0433\u0430|\u0431\u043E |\u0435\u043A |\u0430 \u0430|\u0446\u0430 |\u0446\u0446\u0430| \u045E | \u0437\u0430|\u044B\u0445 |\u043F\u0430\u0432|\u0430 \u0441|\u0433\u043E |\u0432\u0456\u043D|\u0434\u043D\u0430|\u0431\u043E\u0434|\u043C\u0456 |\u0432\u0430\u0431|\u0432\u0430\u043D|\u0430\u043C | \u0432\u044B| \u0441\u0430| \u0434\u0430|\u0441\u0442\u0430|\u0430\u0432\u0456|\u043D\u043D\u0435|\u0430\u0441\u0446|\u043D\u0430\u0439|\u0446\u044B\u044F|\u043D\u0430\u0433|\u0430\u0440\u0430|\u0456 \u043D|\u043A \u043C|\u044F\u0433\u043E| \u044F\u0433|\u044C\u043D\u0430|\u043F\u0440\u044B|\u0430\u0446\u044C|\u0456 \u043F|\u043E\u0434\u043D|\u0441\u0442\u0432|\u0430\u043C\u0430|\u043D\u044B\u0445| \u0431\u044B|\u0442\u0432\u0430|\u0434\u0437\u0435|\u0430\u043B\u044C| \u0440\u0430|\u043D\u0456 |\u0456 \u0441|\u0456 \u0430|\u044B\u0446\u044C|\u0430 \u0431|\u0435\u043D\u043D|\u043B\u0435\u043D|\u0446\u0456 |\u043E\u045E\u043D|\u044B\u043C |\u0440\u0430\u0446|\u0456\u043D\u043D|\u0456\u0445 | \u0430\u0441| \u0442\u0430|\u0442\u043E |\u043D\u0430\u0441|\u044F\u043A\u0456| \u0434\u0437|\u0447\u044B\u043D|\u043E\u043B\u044C|\u0456 \u0434|\u0430\u0432\u043E|\u0430\u0434 | \u043D\u0456|\u0441\u0446\u0456|\u044B\u043C\u0456|\u043D\u044B\u043C|\u0431\u044B\u0446|\u044F \u043F|\u044C\u043D\u044B|\u044B\u044F |\u0430\u0440\u043E|\u0430\u043D\u0430|\u0456\u043D\u0430|\u0456 \u0456|\u0440\u0430\u0434| \u0433\u0440|\u043B\u044F |\u045E\u043B\u0435|\u043E \u043F|\u0430 \u045E|\u0440\u044B\u043C|\u043F\u0430\u0434|\u044B\u0456 | \u0456\u043D|\u0430\u043C\u0456|\u0434\u0437\u044F|\u0440\u0430\u043C|\u0446\u044B\u0456|\u0430\u0431\u0430|\u0430 \u0456|\u0434\u0443 |\u0436\u043D\u0430|\u045E\u043D\u0430|\u043D\u0430\u043B|\u043D\u0430\u0446|\u0440\u044B |\u044D\u0442\u0430|\u0433\u044D\u0442| \u0433\u044D|\u043D\u0435\u043D|\u0434\u0430 |\u0430\u0445 |\u0433\u0440\u0430|\u043A\u0430\u0446|\u0443\u043A\u0430|\u0430 \u0437|\u043A\u0456 |\u0430\u0434\u0441|\u045E \u0456|\u043D\u0441\u0442|\u044D\u043D\u043D|\u044F \u0430|\u043D\u043D\u0456|\u043E\u0434\u0443|\u0430 \u0440|\u043D\u043D\u0430|\u0445\u043E\u0434|\u043D\u0430\u043D|\u043F\u0435\u0440|\u0445 \u043F| \u0443 |\u0430\u0434\u0437|\u0456 \u0440|\u043C\u0430\u0434|\u043C \u043F|\u0435 \u043C|\u0430\u0434\u0443|\u0434\u0441\u0442|\u0434\u043B\u044F| \u0434\u043B|\u043E\u045E |\u043D\u0430\u0435|\u0456 \u043C|\u0430\u043A\u043E| \u043A\u0430|\u044B \u045E|\u0431\u0430\u0440|\u0435 \u0430|\u0430\u0446\u0446|\u0443\u044E |\u044B\u0446\u0446|\u0441\u0430\u043C|\u044F\u045E\u043B|\u0430\u043B\u0435|\u0440\u043E\u0434|\u0440\u0430\u0431| \u043F\u0435|\u0448\u0442\u043E| \u045E\u0441|\u0430\u0434\u043D| \u0441\u0443|\u0440\u043E\u045E| \u0440\u043E|\u0434\u0443\u043A|\u043B\u044E\u0431|\u044C \u0441| \u0448\u043B|\u0440\u0430\u0437|\u043D\u0430\u0432|\u0437\u043D\u0430|\u0432\u043E\u043B|\u0443\u0434\u0437|\u0430\u0434\u0430|\u0436\u044B\u0446|\u0447\u043D\u0430|\u0432\u0435 |\u0430 \u0442|\u0430\u0441\u043D|\u0441\u0430\u0446|\u0435\u0440\u0430| \u0440\u044D|\u044F\u043A\u043E|\u043A\u043B\u0430|\u0430\u043D\u044B| \u0448\u0442|\u044C \u0443|\u0430\u044E\u0446|\u043D\u0430\u0440| \u0443\u0441|\u0441\u043E\u0431|\u0430\u0441\u043E|\u043F\u0430\u043C|\u044F \u045E|\u0430\u0432\u044F|\u0447\u044D\u043D|\u0432\u043E\u045E|\u0442\u0430\u043A|\u043D\u0443 |\u044E \u0430|\u044C \u043F|\u0437\u0430\u043A|\u043A\u0430\u0440|\u0435 \u0456|\u044C \u0430|\u0431\u0435\u0441|\u0456\u044F |\u043A\u0456\u044F|\u0445 \u0456|\u0437\u0430\u0431|\u0430\u0441\u0430|\u0456\u043C |\u0436\u0430\u0432|\u0456 \u0437|\u043B\u0435\u0436|\u0442\u0430\u043D|\u0430\u0445\u043E|\u044F\u043B\u044C|\u044B\u044F\u043B|\u043E \u0441|\u044F\u043D\u0430|\u043A\u0430\u043D|\u0430\u043A\u0430|\u0456\u043D\u0448|\u0430\u043B\u0456|\u0432\u044B | \u043C\u043E|\u043D\u0430\u0445|\u044F \u044F|\u043C \u043D|\u043E\u0433\u0430| \u0431\u0435|\u0439 \u0434|\u043E \u0430| \u0441\u0442|\u0435\u043D\u044B|\u0456 \u045E|\u0430 \u0434|\u0435\u0441\u043F|\u0448\u043B\u044E|\u0446\u0446\u044F|\u044B \u0456|\u044B\u0441\u0442|\u0440\u044B\u0441|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0442\u0430\u0446|\u0443\u043B\u044C|\u044B\u043D\u0441|\u0430\u0447\u044B|\u0441\u043F\u0440| \u0441\u043F|\u0430\u045E |\u044B\u043C\u0430|\u0430\u0440\u044B|\u043A\u0430\u043C|\u0435 \u045E|\u0456 \u043A|\u043A\u043E\u043D",
        bul: " \u043D\u0430|\u043D\u0430 | \u043F\u0440|\u0442\u043E | \u0438 |\u0440\u0430\u0432|\u0434\u0430 | \u0434\u0430|\u043F\u0440\u0430|\u0441\u0442\u0432|\u0432\u0430 |\u0430 \u0441|\u0430 \u043F|\u0432\u043E |\u043D\u043E |\u0438\u0442\u0435|\u0442\u0430 |\u043E \u0438|\u0435\u043D\u0438| \u0437\u0430|\u043D\u0435 | \u043D\u0435|\u0430 \u043D| \u0432\u0441|\u0432\u0430\u043D|\u0430\u0432\u043E|\u043E\u0442\u043E|\u0435 \u043D|\u043E \u043D|\u0430 \u0438|\u043A\u0438 |\u0438\u0435 |\u0442\u0435 |\u043D\u0438 |\u0438\u043C\u0430| \u0438\u043C|\u043B\u0438 |\u0438\u043B\u0438|\u0438\u044F | \u043F\u043E|\u043E\u0432\u0435|\u0430\u043D\u0435|\u0447\u043E\u0432|\u043C\u0430 | \u0447\u043E|\u0438 \u0447|\u0430 \u0434|\u043D\u0438\u0435|\u0438 \u0434|\u0435\u0441\u0442| \u0438\u043B|\u0430\u043D\u0438|\u0432\u0435\u043A|\u0432\u0441\u0435| \u043E\u0431|\u0435\u043A |\u0435\u043A\u0438|\u0441\u0435\u043A|\u0430\u0432\u0430|\u0442\u0432\u043E|\u0441\u0432\u043E| \u0441\u0432|\u0432\u043E\u0442|\u0430 \u0432|\u0438 \u0441|\u043E\u0441\u0442| \u0440\u0430|\u043E\u0432\u0430|\u0430 \u043E|\u0435 \u0438|\u0432\u0430\u0442|\u0438 \u043D|\u0435 \u043F|\u043A \u0438|\u0430 \u0431| \u0432 |\u0438 \u043F|\u043B\u043D\u043E|\u043E \u0434| \u0441\u0435|\u0440\u0430\u0437|\u0435\u0442\u043E|\u044A\u0434\u0435|\u0431\u044A\u0434| \u0431\u044A|\u043F\u0440\u0438|\u0430\u0442\u0430| \u043A\u043E| \u0442\u0440| \u043E\u0441| \u0441\u044A|\u0431\u043E\u0434|\u043E\u0431\u043E|\u0432\u043E\u0431|\u0430\u0442 |\u0437\u0430 |\u0442\u0435\u043B| \u0435 |\u0430\u0446\u0438|\u043E \u0441|\u0434\u0435 |\u043E \u043F|\u0435\u043D |\u0431\u0440\u0430|\u0438 \u0432| \u043E\u0442|\u0441\u0435 |\u043D\u0438\u044F|\u0430\u043B\u043D| \u0434\u0435|\u0435\u0433\u043E|\u043D\u0435\u0433| \u0438\u0437|\u043E\u0442 |\u0440\u0430\u043D|\u044F\u0442\u0430|\u043A\u0430\u043A|\u043E\u0434\u0438|\u0435 \u0441|\u0438 \u0438|\u0434\u0435\u043D|\u043F\u0440\u0435|\u0431\u0432\u0430|\u044F\u0431\u0432|\u0440\u044F\u0431|\u0442\u0440\u044F|\u043D\u0438\u0442| \u043A\u0430|\u044F\u0432\u0430|\u043F\u0440\u043E|\u0441\u0442 |\u0430 \u0437|\u0433\u043E\u0432|\u0432\u0435\u043D|\u0442\u0432\u0435|\u043E \u043E|\u0430 \u0440|\u0430\u043A\u0432|\u043E \u0432|\u0438 \u0437|\u0440\u0435\u0434|\u043D\u043E\u0441|\u0438\u044F\u0442|\u0435 \u0434|\u0449\u0435\u0441|\u043D\u043E\u0432| \u043D\u0438|\u0446\u0438\u044F| \u0434\u043E|\u0439\u0441\u0442|\u043E \u0442|\u0435 \u0442|\u0440\u0436\u0430|\u044A\u0440\u0436|\u0434\u044A\u0440|\u0435\u043D\u043E|\u043F\u043E\u043B| \u0441 |\u043E\u0431\u0440|\u0442\u0432\u0430|\u043D\u043E\u0442|\u0440\u0435\u0441|\u0435\u0439\u0441|\u0438 \u043E|\u0435 \u0432|\u043A\u043E\u0439|\u043E\u0431\u0449|\u043B\u0435\u043D|\u043E\u043D\u0430|\u043D\u0430\u0446|\u0438\u0447\u0435|\u0435\u0437 |\u0431\u0435\u0437| \u0431\u0435|\u0435\u0436\u0434|\u0443\u0432\u0430|\u0432\u0438\u0442|\u0440\u0438 |\u0437\u0430\u043A|\u0438 \u043A| \u043B\u0438|\u0430 \u0435|\u043F\u043E\u0434|\u0435\u043B\u0438|\u043D\u0438\u043A|\u0441\u0438 |\u0435 \u043E|\u0430 \u0442|\u0430\u0432\u043D|\u0438 \u0440|\u0442 \u0441|\u043A\u0430 |\u043E\u0435\u0442|\u0435\u043B\u043D|\u043D\u0435\u043D|\u043E\u0439 |\u0433\u0440\u0430|\u0436\u0435\u043D|\u0434\u0440\u0443| \u0440\u0435|\u0430 \u043A|\u0441\u043D\u043E|\u043E\u0441\u043D|\u043B\u0438\u0447|\u0437\u0438 | \u0442\u0430|\u0441\u0430 |\u043D\u0441\u0442|\u0432\u043D\u0438|\u0447\u043A\u0438|\u0438\u0447\u043A|\u0441\u0438\u0447|\u0432\u0441\u0438|\u043B\u044E\u0447|\u043A\u043B\u044E|\u0434\u043D\u043E| \u043C\u043E|\u0435\u043C\u0435|\u0430 \u0443|\u0438\u0437\u0432|\u0442\u0432\u0438|\u0434\u0435\u0439|\u044F \u043D|\u043A\u0440\u0438|\u0430\u0442\u043E|\u043E \u0440|\u0439 \u043D|\u0438\u043A\u043E|\u0438\u0447\u043D|\u0436\u0430\u0432| \u0434\u044A| \u0442\u043E|\u0431\u0449\u0435|\u0438\u0430\u043B| \u0441\u043E|\u043B\u0438\u0442|\u0442 \u043D| \u0441\u0438|\u0442 \u0438|\u043E\u0434\u043D|\u0436\u0434\u0430|\u0437\u043E\u0432|\u0430\u0437\u043E|\u0443\u0447\u0430| \u0433\u0440|\u043A\u043E\u0435|\u0442\u044A\u043F|\u0441\u0442\u044A|\u0432\u043E\u043B|\u043B\u043D\u0438|\u0441\u0440\u0435| \u0441\u0440|\u043A\u0432\u0430|\u043A\u043E\u043D|\u0442\u043D\u043E|\u0430\u043A\u0430|\u0438 \u0443|\u043A\u043E |\u0433\u0430\u043D|\u043E\u0434\u0430|\u0447\u0435\u043D|\u043B\u0441\u0442|\u0435\u043B\u0441|\u0441\u0442\u0440| \u043A\u044A|\u0441\u0442\u0430|\u0440\u043E\u0434|\u043D\u0430\u0440|\u0438 \u043C|\u043D\u0430\u043B|\u0440\u0443\u0433| \u0434\u0440|\u0447\u0435\u0441|\u0432\u044A\u0437|\u0434\u0438 | \u0441\u0430| \u0442\u0435|\u0441\u0442\u043E|\u0434\u043E\u0441|\u0440\u0430\u0436|\u0440\u0435\u0437|\u0447\u0440\u0435|\u0433\u0430\u0442|\u0435\u043E\u0431|\u0430 \u043C|\u043E \u0435|\u0438\u043D\u0435|\u0430\u0441\u0442|\u043E\u0432\u043E|\u0447\u043D\u043E|\u0430\u0432\u0435|\u043C\u0443 | \u043C\u0443|\u0430\u043D\u043E|\u0438\u0442\u0430|\u0438\u043C\u0438|\u0430\u043A\u043E|\u043D\u0430\u043A|\u043B\u0430\u0433|\u043E\u0432\u0438",
        kaz: "\u043D\u0435 | \u049B\u04B1|\u0435\u043D |\u04B1\u049B\u044B| \u0431\u0430| \u049B\u0430|\u049B\u04B1\u049B|\u044B\u049B |\u0493\u0430 | \u0436\u04D9|\u04D9\u043D\u0435|\u0436\u04D9\u043D| \u043D\u0435| \u0431\u043E|\u0434\u0435 |\u0434\u0430\u043C|\u0430\u0434\u0430|\u0430 \u049B|\u0442\u0430\u0440|\u044B\u043D\u0430| \u0430\u0434|\u044B\u043B\u044B| \u04D9\u0440|\u044B\u04A3 |\u0430\u043D |\u0456\u043D |\u049B\u044B\u043B|\u0430\u0440 |\u0435\u043C\u0435|\u043D\u0430 |\u0440 \u0430|\u043B\u044B\u049B|\u0443\u0493\u0430|\u0430\u043B\u0430|\u044B\u049B\u0442| \u04E9\u0437|\u043C\u0435\u0441|\u04D9\u0440 | \u0436\u0430|\u043C\u0435\u043D|\u044B\u0493\u044B|\u043B\u044B | \u0434\u0435|\u049B\u0442\u0430|\u043D\u044B\u04A3|\u043D \u049B|\u0493\u0430\u043D|\u0456\u043D\u0435|\u0431\u0430\u0441|\u0430\u0440\u044B| \u043C\u0435| \u049B\u043E|\u0435\u043A\u0435|\u044B\u043D |\u0434\u0430 |\u0435 \u049B|\u0434\u044B |\u0430\u0441\u044B|\u0441\u0435 |\u0435\u0441\u0435|\u0430\u043C |\u0431\u043E\u043B|\u0430\u043D\u0434|\u043D\u0435\u043C| \u0431\u0456|\u0430\u0440\u0430|\u044B \u0431|\u0441\u0442\u0430|\u0442\u0430\u043D|\u043D\u0434\u044B|\u043D \u0431|\u0456\u04A3 |\u0435 \u0431|\u0456\u043B\u0456|\u0442\u0438\u0456| \u0442\u0438|\u0431\u0430\u0440|\u0493\u044B |\u043D\u0434\u0435|\u0435\u0442\u0442|\u0438\u0456\u0441|\u049B\u044B\u0493|\u0456\u0441 |\u043B\u0430\u0440|\u0433\u0435 |\u044B \u0442|\u0456\u043D\u0434|\u0456\u043A |\u0431\u0456\u0440| \u0431\u0435| \u043A\u0435|\u0430\u043B\u0443|\u0435 \u0430|\u0430\u043B\u044B|\u043B\u0443\u044B|\u0430 \u0436|\u0435\u0440\u0456|\u043E\u043B\u044B| \u0442\u0435|\u049B\u044B\u049B|\u043D \u043A| \u0442\u0430|\u043D \u0436|\u0493\u044B\u043D|\u0442\u0442\u0456|\u0456\u043D\u0456|\u0442\u044B\u043D| \u0435\u0440|\u043D\u0434\u0430|\u0456\u043C | \u0441\u0430|\u0435 \u0436|\u0430\u0442\u044B| \u0430\u0440|\u0440\u0493\u0430|\u0435\u0442\u0456|\u0430\u043D\u0430|\u044B \u04D9|\u0443\u044B\u043D|\u043B\u0493\u0430|\u04E9\u0437\u0456|\u043E\u0441\u0442|\u0435\u0433\u0456|\u0442\u0456\u043A|\u049B\u0430 |\u0441\u049B\u0430|\u0440\u044B\u043D|\u043A\u0456\u043D|\u043B\u0443\u0493|\u04A3 \u049B|\u043D\u0456\u04A3|\u0443\u044B |\u0431\u043E\u0441|\u0430\u0441\u049B|\u049B\u0430\u0440|\u0434\u044B\u049B|\u043D\u0430\u043D|\u043C\u044B\u0441|\u043C\u043D\u044B|\u0430\u043C\u043D|\u044B \u043C|\u0430\u0439\u0434|\u043A\u0435 | \u0436\u0435|\u0437\u0456\u043D|\u0440\u0434\u0435|\u0440\u0456\u043D|\u0435 \u0442|\u0433\u0435\u043D|\u044B\u043F |\u0440\u044B |\u0442\u0456 |\u0441\u044B\u043D|\u049B\u0430\u043C|\u0434\u0435\u043D|\u0456 \u0431|\u0433\u0456\u0437|\u0440\u0430\u043B|\u0435 \u04E9|\u043B\u0430\u043D|\u0441\u044B |\u0430\u043C\u0430|\u0442\u0442\u0430|\u0442\u044B\u049B|\u0431\u0435\u0440|\u0434\u0456 |\u0431\u0456\u043B|\u0440\u043A\u0456|\u04E9\u0437 |\u0437\u0434\u0435|\u043A\u0435\u0442|\u049B\u043E\u0440|\u0434\u0430\u0439|\u0443\u0433\u0435|\u044B \u0435|\u044B\u043D\u0434|\u043D\u0435\u0433|\u043E\u043D\u044B|\u0435\u0439 |\u043C\u0435\u0442|\u0430\u043D\u044B|\u0430 \u0442|\u0436\u0430\u0441|\u0430\u0443\u044B|\u043B\u0433\u0435|\u0430\u0441\u0430|\u0435\u0433\u0435|\u0434\u0430\u0440|\u0440\u0443 |\u0430\u0443 |\u0435\u0440\u043A|\u044B \u0436|\u0440\u044B\u043B| \u0442\u043E|\u043D \u043D|\u0435 \u043D|\u0442\u0456\u043D|\u0456\u0440 |\u0441\u0456\u0437|\u0442\u0435\u0440|\u043B\u043C\u0430|\u0456 \u0442|\u043A\u0456\u043C| \u0430\u043B|\u0440 \u043C|\u043B\u0456\u043A| \u043C\u04AF|\u0435 \u043C|\u0442\u04AF\u0440| \u0442\u04AF|\u043A\u0435\u043B|\u043B\u044B\u043F|\u0435\u04A3 |\u0442\u0435\u04A3|\u0440\u043B\u044B|\u043B\u0456\u043C|\u0440\u0434\u044B|\u0430\u0440\u0434|\u0430\u0442\u0442|\u0441 \u0431|\u044B\u0440\u044B|\u0441\u044B\u0437|\u044B\u0441 |\u0435\u043B\u0433|\u0434\u0430\u043B|\u0439\u0434\u0430|\u043E\u0440\u0493|\u0440\u049B\u044B|\u0430\u0440\u049B| \u0436\u04AF|\u0442\u0430\u043B|\u044B\u043B\u043C|\u0430 \u0431|\u0456\u0433\u0456|\u043B\u0434\u0435|\u0456\u0437 |\u049B\u0442\u044B| \u0435\u0448|\u0434\u0435\u0439|\u0430\u0439 |\u0436\u0430\u0493|\u043A\u0442\u0456|\u0456\u043A\u0442|\u0433\u0456\u043D| \u04D9\u043B|\u0442\u0442\u044B|\u04B1\u043B\u0442| \u04B1\u043B|\u0435 \u0434|\u044B\u043D\u044B|\u043B\u0456\u043D|\u0440 \u0431|\u0435\u043B\u0435|\u043A\u04B1\u049B| \u043A\u04B1|\u0430\u043C\u0434|\u043C \u0431| \u0435\u0442|\u043E\u0493\u0430|\u049B\u04B1\u0440| \u043A\u04E9|\u0430\u0493\u0430|\u0442\u043E\u043B|\u0448\u0456\u043D|\u0430\u0439\u044B| \u049B\u044B|\u049B\u0430\u043B|\u0436\u0435\u043A|\u0456 \u043D|\u0435\u0441 |\u0430\u0493\u044B|\u0435 \u043E|\u0435\u043B\u0456| \u0435\u043B|\u043D \u0435|\u0437\u0456 |\u0448\u043A\u0456|\u0435\u0448\u043A|\u043E\u043B\u0443|\u0446\u0438\u044F|\u043C\u0430\u0441|\u0493\u0434\u0430|\u0430\u0493\u0434|\u043B\u0442\u0442|\u0456\u043C\u0434|\u043D\u044B\u043C| \u0434\u0430|\u0430 \u0434|\u04D9\u0441\u0456|\u0441 \u04D9|\u049B\u0430\u0442|\u0456\u0440\u0456| \u0441\u043E|\u04A3 \u0431|\u0430\u0437\u0430|\u043C\u0434\u0430|\u0430\u0439\u043B| \u0430\u0441|\u0493\u0430\u043C|\u049B\u043E\u0493",
        tat: " \u04BB\u04D9|\u043B\u0430\u0440|\u0433\u0430 |\u043A\u0443\u043A|\u043E\u043A\u0443|\u0445\u043E\u043A| \u0445\u043E|\u04D9\u043C |\u0440\u0433\u0430|\u04BB\u04D9\u043C| \u043A\u0435| \u0431\u0435|\u0430\u0440 |\u0435\u0448\u0435|\u04D9\u0440 |\u0430\u043D |\u043A\u0435\u0448|\u043B\u04D9\u0440|\u0433\u04D9 | \u0431\u0430|\u0435\u04A3 |\u043D\u0435\u04A3| \u0431\u0443|\u043A\u043B\u0430|\u0440\u0433\u04D9|\u044B\u0440\u0433|\u04BB\u04D9\u0440| \u0442\u0438| \u0442\u043E|\u0440 \u043A|\u0434\u0430 |\u0435\u043D\u0435|\u0431\u0435\u0440|\u04D9\u043D |\u0434\u04D9 | \u04AF\u0437|\u0430 \u0442|\u0442\u043E\u0440|\u0435\u043D | \u043A\u0430|\u043D\u04D9 | \u0430\u043B|\u044B \u0431|\u043D\u0430 |\u0433\u0430\u043D|\u0430\u0440\u0430|\u0438\u0440\u0435|\u0431\u0443\u043B| \u0434\u04D9|\u0431\u0430\u0440|\u0435\u043D\u04D9|\u0443\u043A\u043B|\u0442\u0438\u0435|\u0430 \u0445| \u0438\u0442|\u0438\u0435\u0448|\u0430\u0440\u044B|\u043A\u044B |\u043A\u0430 |\u04D9 \u0442|\u043D \u0431|\u0443\u043A\u044B| \u0438\u0440|\u0435\u043A\u043B|\u0435\u043B\u0435|\u044B\u043D\u0430|\u0448\u0435 |\u0430\u043B\u0430|\u043D \u0442|\u043B\u044B\u043A|\u043B\u0435 |\u0448\u0435\u043D|\u0435\u0448 |\u043A\u0430\u0440|\u043B\u044B |\u043B\u0430\u043D|\u043B\u04D9\u043D|\u0440\u044B\u043D|\u04D9 \u043A|\u0435\u043B\u04D9|\u0435\u0440\u0433|\u043D\u0434\u0430|\u0440\u0435\u043A|\u0442\u0435\u043B|\u0435\u0437 |\u0438\u0442\u0435|\u0430 \u043A|\u0431\u0435\u043B| \u0442\u0430|\u043B\u044B\u0440|\u04D9 \u0431|\u044B\u043D | \u0433\u0430|\u0435\u043B |\u0441\u04D9 | \u044F\u043A|\u0430\u043B\u044B|\u04D9\u0440\u0433|\u0430 \u0431|\u044F\u0438\u0441| \u044F\u0438|\u0442\u04D9 |\u0434\u0430\u043D|\u0430 \u0430|\u04AF\u0437 |\u04D9 \u0445|\u0448 \u0442|\u0435 \u0431|\u044B\u043D\u0434|\u0441\u0435\u0437|\u043A\u043B\u04D9|\u0438\u0441\u04D9|\u0440 \u0431|\u0443\u043B\u044B| \u044D\u0448|\u0447\u0435\u043D|\u0430 \u04BB|\u0435\u043C | \u0441\u0430|\u043D \u0438|\u0448\u043A\u0430|\u0442\u0435\u043D|\u04AF\u0437\u0435|\u044B \u04BB|\u04D9\u0442 |\u044F\u0442\u044C|\u0433\u0435\u0437|\u0438\u0433\u0435|\u0430\u043D\u044B|\u04D9 \u04BB|\u043E\u0440\u043C| \u0442\u04AF| \u0445\u0430| \u0442\u04D9| \u043D\u0438|\u0440 \u04BB| \u0442\u0443|\u043C\u04D9\u0442|\u043A\u043B\u0435|\u04AF\u043B\u04D9|\u043B\u0443 |\u0442\u044C |\u043C \u0430|\u043B\u0433\u0430|\u0448\u0442\u04D9| \u043A\u0438|\u043C \u0438| \u043C\u04D9|\u043D\u0435 |\u043B\u0435\u043A|\u043C\u044B\u0448|\u0440\u043C\u044B|\u0433\u0435\u043B|\u0442\u04AF\u0433|\u043B\u0435\u0440|\u0434\u0438 |\u0437\u0435\u043D|\u0443\u0433\u0430|\u0441\u0435\u043D|\u0433\u04D9\u043D|\u0430\u043A\u044B|\u043A\u043B\u044B|\u043B\u04D9\u0442|\u0430\u043B\u0443|\u043D\u044B |\u0435\u0448\u0442|\u0432\u0435\u0448|\u04D9\u0432\u0435|\u0440\u04D9\u0432| \u0440\u04D9|\u0442\u04D9\u0440|\u0440\u043B\u04D9|\u04AF\u0433\u0435|\u0430 \u044F|\u043B\u044C |\u0440\u0435\u043D|\u0431\u0430\u0448|\u04D9 \u0434|\u04D9 \u0438|\u0438\u043B\u043B|\u0435\u0440 |\u0440 \u0430|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0430\u0439\u043B|\u0440\u0434\u04D9| \u0430\u0448|\u0440\u0430\u043A|\u0440\u0434\u0430|\u0430\u0440\u0434|\u0440\u043D\u0435|\u04D9\u0440\u043D|\u044F\u043A\u043B|\u043B\u04D9 | \u0497\u04D9|\u043D \u043C|\u044B\u04A3 |\u043D\u044B\u04A3|\u043A\u043A\u0430|\u04D9\u0440\u0435|\u043E\u0440\u0433|\u0442\u0430\u043D|\u043C\u0430\u0441|\u0441\u044B\u043D|\u043D\u0434\u0438|\u0438\u043D\u0434|\u043D\u0438\u043D|\u0440\u0435\u043B| \u0431\u0438|\u044B\u043A |\u043B\u0435\u043C|\u0430\u043B\u044C|\u043D\u0438 |\u0438\u043D |\u043A\u0435\u0440|\u043C \u0442|\u04D9\u04AF\u043B|\u0448\u043B\u0430|\u043D \u044F|\u0442\u044B\u043D|\u043D\u0434\u04D9| \u043E\u0447|\u0431\u0443 |\u043A\u043E\u043D|\u0430 \u0434|\u0430\u0440\u0442|\u043A\u0435\u043C|\u0440\u043A\u0435|\u044B\u043B\u044B|\u043A\u0442\u0430|\u043A\u04D9 | \u0438\u043B|\u0440 \u0438|\u0435\u0440\u04D9| \u0497\u0438|\u04A3 \u0442|\u0446\u0438\u044F|\u0430 \u0438|\u0430\u0448\u043A| \u0441\u04D9| \u0434\u0438|\u0430\u0441\u044B|\u044B\u0439 |\u043C\u0438\u043B| \u043C\u0438| \u043C\u04E9|\u0442\u0430 |\u043B \u04BB|\u043D\u043D\u0430|\u0433\u044B\u043D|\u0438\u0430\u043B| \u0441\u043E|\u0437\u043C\u04D9|\u0435\u0437\u043C|\u0445\u0435\u0437| \u0445\u0435|\u044B\u044F\u0442|\u0433\u044B\u044F|\u043C\u0433\u044B|\u0448\u044B\u0440|\u04D9 \u044F|\u0435\u0440\u043B|\u043D\u043B\u044B|\u0435\u0440\u0435| \u043A\u044B|\u0435\u043A |\u0443\u0440\u044B|\u0442\u044B\u0440|\u043D \u0445|\u0435\u043B\u04AF|\u0430\u043A\u043E|\u0437\u0430\u043A| \u0437\u0430|\u0438\u0442\u04D9| \u0434\u0430|\u0447\u0430\u0440|\u043D\u044B\u0440| \u043A\u043E| \u0430\u043D|\u0438\u043B\u0435|\u04D9\u0441\u0435|\u044B\u0448 |\u0430\u0446\u0438| \u0434\u0435|\u0430\u0435\u0440| \u0430\u0435|\u0430\u043D\u0443|\u0438\u043D\u0430|\u04D9 \u0441| \u0442\u04E9|\u04D9\u0442\u0435|\u0430\u043D\u0430|\u043D \u04BB|\u0431\u0438\u0440|\u043D\u0430\u043D|\u0440\u044B |\u0439\u043B\u0430|\u04D9 \u0430|\u04D9\u043B\u04D9",
        tuk: " \u0431\u0438| \u0432\u0435|\u0432\u0435 |\u0434\u0430 |\u043B\u0430\u0440|\u0438\u0440 |\u0431\u0438\u0440| \u0445\u0435|\u0430\u0434\u0430|\u0440 \u0431| \u0445\u0430|\u0435\u0440 | \u0430\u0434|\u0433\u0430 |\u0438\u043B\u0438|\u0434\u044B\u0440|\u0434\u0430\u043C|\u0435\u043D |\u044B\u0440 |\u0430\u0440\u0430|\u0430\u0440\u044B|\u0445\u0435\u0440|\u043B\u0430\u043D|\u0440 \u0430|\u044B\u0434\u044B|\u0440 \u0445|\u0430\u043C |\u043A\u043B\u0430|\u0430\u0433\u0430|\u0430\u043B\u0430|\u043D\u0434\u0430|\u0431\u0438\u043B|\u0445\u0430\u043A|\u043A\u043B\u044B|\u0430\u043A\u043B|\u043B\u044B\u0434|\u043B\u044B | \u0431\u043E| \u04E9\u0437|\u044B\u04A3 |\u0430\u043D |\u2010\u0434\u0430|\u043B\u0435\u043D|\u044B\u043D\u044B|\u043C\u0430\u0433|\u043D\u0435 |\u043B\u0435\u0440|\u0438\u043D |\u044F\u2010\u0434| \u044F\u2010|\u0438\u043D\u0435|\u043D\u0430 | \u044D\u0434|\u0430 \u0445|\u044B\u043D\u0430|\u044B\u043D\u0434|\u0434\u0430\u043D|\u0443\u043A\u0443|\u0445\u0443\u043A| \u0445\u0443|\u043D\u044B |\u043B\u043C\u0430|\u0435 \u0445|\u0438\u043B\u0435|\u0435\u0440\u0438| \u0434\u0435|\u0433\u0435 |\u0438\u04A3 |\u043B\u0438 |\u0430\u0442\u043B|\u0430\u043B\u044B|\u0430\u0440 |\u0434\u0435\u043D|\u0435\u0440\u0435| \u0431\u0430|\u0434\u0438\u043B|\u043B\u0438\u0433| \u0433\u0430|\u0430\u0441\u044B|\u043B\u0438\u043A|\u043B\u044B\u0433|\u0430 \u0433|\u043A\u0438\u043D|\u0431\u043E\u043B|\u043A\u0443\u043A|\u04E9\u0437 |\u0435 \u0430|\u0430\u043C\u0430|\u0434\u0435 |\u044D\u0440\u043A|\u0440\u044B\u043D| \u044D\u0440| \u0445\u0438|\u0438\u043D\u0438|\u0433\u044B\u043D|\u0438\u0433\u0438|\u0430\u0439\u044B|\u0430 \u0434| \u043C\u0430|\u043C\u0430\u043A|\u043F \u0431|\u0430\u043D\u044B|\u044D\u0434\u0438|\u043D\u0438 |\u044B\u0433\u044B|\u0431\u0430\u0448|\u043B\u044B\u043A|\u0439\u0434\u0430|\u0440\u043A\u0438|\u04D9\u0433\u0435|\u0435\u0442\u0438|\u0438\u0447 |\u0445\u0438\u0447| \u0442\u0430|\u0430\u043A |\u0448\u0433\u0430|\u0430\u0448\u0433|\u0441\u044B\u043D|\u043C\u0430\u043B| \u0434\u043E|\u0433\u0434\u0430|\u044B \u0431|\u0440\u044B |\u0433\u0438 |\u043C\u04D9\u0433| \u0497\u0435|\u044B\u0435\u0442|\u0441\u0430\u0441|\u044D\u0441\u0430| \u044D\u0441|\u043B\u043C\u0435|\u0438\u043B\u043C|\u043C\u0435\u0437|\u0438\u043F |\u044B\u043A\u043B|\u0442\u043B\u044B|\u043D \u044D|\u0434\u0430\u043A|\u0434\u0430\u0439|\u044F\u0433\u0434| \u044F\u0433|\u0443\u043A\u043B|\u0445\u0435\u043C|\u0433\u0430\u043B|\u044B \u0432|\u0447\u0438\u043D|\u0438\u043C |\u043C\u0435\u043A|\u0440\u0438\u043B|\u044F\u043D |\u0440\u0438\u043D| \u0441\u0435|\u0430\u043B |\u04D9\u043D |\u0439\u04D9\u043D|\u043D\u044B\u04A3|\u0430 \u0431|\u0434\u0438\u0440|\u043E\u043B\u0430| \u043A\u0430|\u043D\u0434\u0435|\u044B \u0434|\u0441\u044B |\u043B\u0438\u043D|\u0435 \u0434|\u0433\u0438\u043D|\u0437\u0430\u0442|\u0430 \u0432|\u0435\u043A\u043B|\u043A\u044B |\u0430\u043A\u044B|\u043D \u043C|\u043A\u0430\u043D|\u044B\u043B\u044B| \u0441\u0430| \u0434\u04D9|\u0445\u0430\u043B|\u0434\u043E\u043B|\u0447\u0438\u043B| \u0433\u04E9|\u0442\u043C\u0435| \u0433\u0435|\u043D \u0445|\u0430 \u0430|\u0430\u0439\u0434|\u0434\u0435\u04A3| \u0430\u043B|\u043B\u0435\u0442| \u0434\u04E9| \u0438\u0448|\u043D \u0433|\u0435 \u0431|\u0443\u04A3 | \u0433\u0443|\u0434\u04D9\u043B| \u0433\u043E|\u0438\u0440\u0438|\u0438\u043A | \u043E\u043D|\u04A3 \u0434|\u0441\u0435\u0440|\u043B\u0438\u043F|\u0435\u043B\u0438| \u0441\u043E|\u0438\u043B\u043B| \u0434\u0438|\u0430\u0437\u0430| \u0430\u0437|\u0433\u0430\u0440|\u0438 \u0432|\u043B\u0438\u043C|\u043D\u0438\u043A|\u0435 \u0432|\u0435\u043B\u0435|\u043D\u043B\u0438|\u04AF\u0447\u0438| \u04AF\u0447|\u043D\u043C\u0435|\u0437 \u0445|\u0440\u0430\u043F|\u0442\u0430\u0440|\u043D\u0443\u04A3|\u043E\u043D\u0443|\u043C\u0435\u043B|\u0435 \u0433|\u043A\u0434\u0430|\u0441\u0438\u0437|\u043A\u043B\u0435|\u044B\u0437 |\u0441\u044B\u0437|\u043D\u0438\u04A3|\u0434\u0430\u043B|\u0430 \u044F|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0430 \u0441|\u043C\u0438\u043B| \u043C\u0438|\u043A\u043B\u0438|\u043E\u043B\u043C|\u0438 \u0431| \u0431\u0435|\u043D \u0431|\u0440\u0430 | \u0434\u04AF|\u0435\u04A3 |\u0435\u0441\u0438|\u044D\u0442\u043C| \u044D\u0442|\u044B \u04E9|\u0438\u043A\u0430| \u043D\u0438| \u0430\u0440|\u0435 \u043C|\u0434\u04E9\u0432|\u0435\u0442 |\u043A \u044D|\u0442\u0430\u043B|\u043D \u0430|\u0433\u044B |\u0435\u0437 |\u0438\u043D\u043C|\u044B\u043F |\u043E\u043B\u044B|\u043E\u0440\u0430|\u0433\u043E\u0440|\u0447 \u0431|\u043D\u0443\u043D|\u0430\u043D\u0443|\u043C \u0445|\u0430\u043B\u043C|\u043B\u0439\u04D9| \u043A\u0438|\u0435\u043A |\u043D \u044F|\u0430\u043D\u0434|\u04AF\u043D\u0438|\u0440\u0435\u0442|\u0442\u043B\u0430|\u0433\u0430\u0442|\u0430\u0439\u043B|\u0446\u0438\u044F|\u043D \u0434|\u04A3 \u0445| \u043C\u0435|\u0433\u044B\u0435|\u043C\u0433\u044B|\u0435\u043C\u0433|\u0497\u0435\u043C|\u0435\u0442\u0435|\u0430\u0445\u0430|\u043C\u0430\u0445|\u0442\u043B\u0435|\u0442\u0438\u04A3|\u0430 \u044D|\u04A3 \u044D|\u043B\u0430\u043C|\u043F\u043B\u0430|\u043D \u0432",
        tgk: "\u0430\u0440 | \u04B3\u0430| \u0431\u0430|\u0430\u0434 | \u0434\u0430| \u0432\u0430|\u043E\u043D | \u0442\u0430|\u0432\u0430 | \u0438\u043D|\u0431\u0430 | \u0434\u043E|\u0434\u0430\u0440|\u0442\u0438 |\u0430\u0440\u043E|\u0434\u043E\u0440| \u043A\u0438|\u043E\u0438 | \u044F\u043A|\u0434 \u04B3| \u0431\u043E|\u0431\u0430\u0440|\u04B3\u0430\u0440|\u044F\u043A |\u043E\u0440\u0430|\u043A\u0438 | \u043D\u0430|\u043D\u0441\u043E|\u0438\u043D\u0441| \u043C\u0430|\u0441\u043E\u043D|\u0438 \u043C|\u0440 \u044F|\u0438 \u043E|\u04B3\u0430\u049B|\u0440\u0430\u0434|\u0430\u0438 |\u043A \u0438|\u0443\u049B\u0443|\u0430\u0440\u0434|\u0438 \u04B3|\u049B \u0434|\u0438\u043D |\u043D\u0438 | \u043C\u0443| \u0430\u0437|\u0438\u0438 | \u04B3\u0443| \u0448\u0430|\u0430\u0437 |\u04B3\u043E\u0438|\u0430\u049B |\u044F\u0434 |\u043E\u043D\u0430| \u043A\u0430|\u0438 \u0434| \u0451 |\u0438 \u0431|\u043E\u044F\u0434|\u0434\u0430\u043D|\u0430\u043D\u0434|\u049B\u0443\u049B|\u04B3\u0443\u049B|\u0437\u043E\u0434|\u043E\u0437\u043E| \u043E\u0437|\u0438\u044F\u0442|\u0434 \u0431|\u0430 \u0431|\u043D\u0434 |\u0434\u0430 |\u0434\u0438 |\u043D \u0431|\u0430\u043C\u043E| \u0445\u0443|\u0443\u0434\u0430|\u043E\u0434\u0438|\u0433\u0430\u0440|\u0434\u043E\u043D|\u0438 \u0438|\u0430\u0442 |\u043C\u043E\u044F|\u043D\u0430\u043C|\u0438 \u0441|\u0441\u0442 |\u04B3\u0430\u043C|\u043D \u04B3|\u0440\u0434\u0430|\u0445\u0443\u0434|\u0430\u043D |\u0431\u043E\u044F|\u043E\u0434\u0430|\u0430\u0432\u0430|\u0438 \u0442|\u043E\u0448\u0430|\u0431\u043E\u0448|\u049B\u0438 |\u0438 \u0445|\u0430 \u0448|\u0430\u0441\u0442|\u04E3 \u0432|\u043C\u0438\u043B| \u0434\u0438| \u043E\u043D| \u043C\u0435|\u0448\u0430\u0432|\u043E\u043D\u0438|\u0435 \u043A|\u0438\u043B\u0430|\u0448\u0430\u0434|\u0438\u043C\u043E|\u0438 \u043D|\u043E\u0431\u0430|\u043E\u043C\u0438|\u043A\u043E\u0440|\u0434 \u043A|\u043A\u0430\u0440|\u0440\u043E\u0438|\u0440\u0438 |\u0432\u0430\u0434|\u0443\u0434 |\u0440\u043E |\u04E3 \u0451|\u043E\u0442\u0438| \u0431\u0435|\u0430\u043D\u0438|\u044F\u0442\u0438|\u0442\u0430\u04B3|\u043C\u0438\u043D|\u043D \u0434|\u044F\u0442 |\u0442\u0430 |\u043D\u0430 |\u0430\u0442\u0438|\u043E\u0441\u0438|\u0431\u043E |\u0438 \u0430|\u0440\u043E\u0431|\u0430 \u04B3|\u0442\u0430\u044A|\u0438 \u04B7|\u0430 \u043C|\u0434 \u0430|\u0440 \u043A|\u0438 \u04EF|\u0430 \u0432|\u043B\u0430\u0442|\u0438\u0441\u0442| \u0444\u0430|\u0438 \u043A|\u0448\u0443\u0434|\u0440 \u04B3| \u0430\u0441|\u0438\u0434\u0430|\u0438\u0433\u0430| \u0441\u043E|\u0430 \u0434|\u0430\u0440\u0430|\u0438\u04B3\u043E|\u0434 \u0432|\u043E\u0434\u043E|\u043D \u043C|\u0442 \u0431| \u04EF |\u0442 \u04B3|\u0430\u043C\u0430|\u0442\u0430\u0440|\u043E\u0440 |\u0444\u0438 | \u0441\u0430|\u0432\u0430\u0440| \u0448\u0443|\u043B\u04E3 | \u043C\u0438|\u043B\u0438 |\u0440\u043E\u043D|\u0434\u0438\u0433|\u04B3\u043E |\u0438 \u0448|\u0434\u0430\u0432|\u0431\u043E\u0442| \u04B3\u0438|\u0438\u0440\u043E|\u0443\u043D\u0430| \u043D\u0438|\u043A\u0430\u0441|\u0435\u04B7 |\u0430 \u0442|\u0430\u0431\u043E| \u0430\u049B|\u043D\u04B3\u043E|\u0440\u0430\u0444|\u043C\u043E\u043D|\u043D \u0432|\u0430\u0432\u0440|\u0438\u043D\u043E| \u043A\u043E| \u0441\u0443| \u04B7\u0430|\u043E\u04B3 | \u04B3\u0435|\u0434 \u0442|\u043C\u0430\u04B3|\u0441\u0442\u0438|\u0441\u0430\u0440|\u0430 \u043E|\u0434 \u0434|\u0434\u0438\u04B3|\u0440 \u0430|\u0443\u043D\u0438|\u0440 \u0431|\u0443\u049B |\u0430 \u0430|\u043C\u0438 | \u0432\u043E|\u043D \u0438|\u0440 \u0432|\u0442\u0430\u0432|\u043E\u0440\u0438|\u043D \u043D|\u043C\u0443\u043C|\u0430\u0440\u0438|\u044F\u0438 |\u043E\u044F\u0438| \u049B\u043E| \u044D\u044A|\u04B3\u0435\u04B7|\u0440\u0438\u0438|\u0434\u04E3 |\u0440\u0434\u043E|\u043E\u043B\u0438| \u0438\u0441|\u0443\u0434\u0438|\u0440 \u0434|\u0430\u0441\u043E|\u0444\u0430\u0440|\u043A\u0438\u0448|\u04E3 \u04B3|\u043D\u0430\u0438|\u0434\u0430\u0430|\u043B\u043E\u043C| \u0438\u04B7|\u0440\u0430\u043D|\u0430\u0445\u0441|\u0448\u0442\u0430|\u0440 \u043C|\u04E3 \u0431|\u0438\u0442\u0430|\u0441\u0438\u0442|\u0432\u043E\u0441|\u0443 \u043E|\u043E \u0434|\u0430\u04B3\u0440|\u043D\u0442\u0438|\u0438\u043D\u0442|\u0438\u0444\u043E|\u0442\u0438\u0444|\u0438\u0431\u043E|\u0442\u04B3\u043E|\u049B\u0443 |\u0430 \u043A|\u0438\u0440 |\u0440\u0440\u0430|\u0440\u0430\u0442|\u04B3\u0438\u043C|\u043E\u043D\u0443|\u049B\u043E\u043D|\u0437\u0434\u0438|\u0443\u043D |\u043E\u0444\u0438|\u0438 \u049B|\u043D\u0434\u0430|\u043B\u0430 | \u0433\u0443|\u043D\u0430\u0431|\u0433\u043E\u043D|\u0430 \u043D|\u049B\u0430\u0440|\u043E\u044F\u0442|\u0448\u0432\u0430|\u0438\u0448\u0432|\u043B\u0430\u043B|\u0438\u044F |\u043C\u0438\u044F|\u0430\u043C\u0438|\u0442\u0438\u043C|\u04B7\u0442\u0438|\u0438\u04B7\u0442|\u0441\u04E3 | \u0437\u0430|\u043E\u0448\u0442|\u044F\u043D\u0434|\u043E\u044F\u043D|\u0430\u0442\u04B3|\u0430 \u0438|\u0430\u044A\u043B|\u043D\u0438\u043A|\u049B\u049B\u0438|\u0430\u049B\u049B|\u0438\u0445\u043E",
        kir: " \u0436\u0430|\u043D\u0430 |\u0430\u043D\u0430| \u0431\u0438|\u0436\u0430\u043D|\u0431\u0438\u0440|\u0443\u043A\u0443|\u0433\u0430 | \u0443\u043A|\u0430\u0440 |\u0443\u0443 | \u043A\u0430|\u043A\u0443\u043A|\u0443\u043A\u0442|\u043B\u0443\u0443|\u0443\u0443\u0433|\u0442\u0430\u0440|\u0443\u0433\u0430| \u0430\u0434|\u0430\u043D |\u0435\u043D |\u044B\u043A | \u0430\u0440|\u0430\u0434\u0430|\u0438\u0440 |\u0434\u0430\u043C|\u043E\u043B\u0443|\u0433\u0430\u043D| \u0431\u043E|\u0430\u043C |\u0440 \u0431| \u0436\u0435| \u043C\u0435|\u0442\u0443\u0443|\u044B\u043D |\u0430\u0440\u0430|\u0431\u043E\u043B|\u043C\u0435\u043D|\u043A\u0442\u0443| \u0431\u0430|\u0430\u043D\u0434|\u043D\u0435\u043D|\u0435\u043D\u0435|\u0430\u0440\u044B|\u044B\u043D\u0430|\u0440 \u0430|\u043D\u0434\u0430|\u043D \u043A|\u0438\u043D |\u04AF\u043D |\u043D \u0431| \u04E9\u0437|\u044D\u0440\u043A| \u043A\u043E|\u0430 \u0436| \u0430\u043B| \u044D\u0440|\u0434\u0430 |\u043A\u0442\u0430|\u0436\u0435 | \u0442\u0430|\u0430\u043D\u044B|\u0430 \u0442|\u0440\u043A\u0438|\u0430 \u0443|\u0434\u044B\u043A|\u0430\u0440\u0434|\u0430 \u043A|\u043A\u0438\u043D|\u0438\u043D\u0434|\u0438\u0448 |\u0442\u0438\u0439| \u0442\u0438|\u0438\u0439\u0438|\u043D \u0436|\u04AF\u04AF |\u0433\u04E9 |\u043D \u0430|\u0430\u043B\u0430|\u043D \u044D|\u0430\u043B\u044B|\u0443\u043A |\u0438\u043B\u0438|\u043D \u0442|\u0439\u0438\u0448|\u043A\u044B\u043B|\u043B\u0430\u0440|\u0440\u0434\u044B|\u0430\u043B\u0443|\u043D\u0434\u0438|\u0442\u0435\u0440| \u043C\u0430|\u04AF\u0433\u04E9|\u0443 \u0430|\u043A\u0430\u0440|\u043D\u044B\u043D| \u043A\u044B|\u0430 \u0430|\u0431\u0430\u0448|\u0431\u0430\u0440|\u043B\u0433\u0430|\u0438\u043C |\u0443\u043D | \u044D\u043C| \u044D\u044D|\u043B\u044B\u043A| \u0442\u0443|\u0430 \u0431|\u0430 \u044D| \u0430\u043D|\u043D\u0430\u043D|\u04E9\u0437 |\u0442\u0443\u0440|\u0440\u04AF\u04AF|\u0434\u0430\u0439|\u0430\u043B\u0434|\u0443\u043B\u0443| \u0441\u0430|\u0440\u044B\u043D|\u0434\u0430\u0440|\u0442\u0442\u0430|\u04AF\u04AF\u0433|\u0435\u0442\u0442|\u0440\u0433\u0430| \u043A\u0438|\u043A\u0430\u043D|\u0438\u0433\u0438|\u043D \u0443|\u043A\u04AF\u043D|\u043A\u0430 |\u043D\u0434\u044B|\u0443 \u0431| \u0431\u0435|\u043C \u0430|\u04AF\u0447\u04AF|\u043C\u0435\u0441|\u044D\u043C\u0435|\u0440\u044B |\u0434\u0438\u043A|\u0440 \u043C|\u0443\u0448\u0443| \u043C\u04AF| \u0441\u043E|\u043A \u0436|\u0442\u0443\u043A|\u04AF\u043D\u04E9|\u043D\u0435 |\u0438\u043D\u0435|\u0430\u043B\u0433|\u043A\u0430\u043C|\u0442\u04AF\u04AF|\u04AF\u043D\u04AF|\u044D\u0447 |\u0435\u043A\u0435|\u043A\u0435 |\u0435\u0441 | \u044D\u0447|\u04E9\u0437\u04AF|\u0433\u0438\u043D|\u0438\u043A\u0442|\u0435\u0433\u0438|\u043B\u0434\u044B|\u04E9 \u0436|\u0435\u0440\u0438|\u043A \u043C|\u0443\u043F |\u043B\u0438\u043C|\u0431\u0438\u043B|\u0430\u0442\u0442|\u043A\u0435\u0442|\u0443 \u043C|\u0447\u04AF\u043D|\u0442\u0430\u043B|\u0443\u0433\u0443| \u043A\u0435|\u0440\u0443\u0443|\u043A \u0442|\u043B\u0443\u043A|\u0447 \u043A|\u0435 \u043A|\u044D\u044D |\u043A\u0442\u0435|\u0443 \u0436| \u0434\u0435|\u0443\u043B | \u043D\u0435|\u0448\u043A\u0430|\u0434\u0438\u043D| \u0434\u0438| \u0442\u04AF|\u043C\u0434\u0430|\u0430\u043C\u0434|\u0433\u043E\u043D| \u0438\u0448|\u044B \u043C|\u043A\u0430\u043B|\u043A \u043A| \u0442\u043E|\u043A\u043E\u0440|\u0440\u0434\u0435|\u044B\u0437 |\u0441\u044B\u0437|\u0440\u0433\u043E|\u043E\u0440\u0433|\u0430\u0439 |\u0443\u043D\u0443| \u044D\u043B|\u0435 \u0430|\u043D\u04AF\u043D|\u0430\u0439\u0434|\u0437\u04AF\u043D|\u044B\u0433\u044B|\u0433\u0435 |\u0446\u0438\u044F|\u0440\u0430\u0431|\u044B\u043A\u0442|\u0433\u0438\u0437|\u043D\u0435\u0433|\u0430\u0448\u043A|\u044B\u043B\u0443|\u0435 \u0431|\u0440\u0438\u043D| \u0442\u0435|\u0438\u043A |\u043E\u043D |\u043C\u043A\u04AF|\u04AF \u0436|\u04AF \u04AF|\u043E\u043E |\u043D \u043C|\u043D\u0443\u0443|\u0442\u044B\u043A|\u0430\u0448\u0442|\u0443\u043D\u0430|\u0435\u0439 |\u0434\u0435\u0439|\u0438\u0440\u0434|\u0430\u0431\u044B| \u043C\u044B|\u043C \u04E9|\u0435\u0440\u0434|\u043B\u043E\u043E|\u043C\u0441\u044B|\u043D \u043D|\u0435\u043A\u0442|\u0434\u044B\u0440|\u0434\u0438\u0433|\u0430\u043A\u0442|\u043C\u0430\u043A|\u0430\u0433\u0430|\u0435 \u044D|\u043B\u0430\u043D|\u0430\u0446\u0438|\u0442\u0430\u043D|\u0430\u0439\u044B|\u0446\u0438\u0430|\u043E\u0446\u0438|\u0441\u043E\u0446|\u0438\u043B\u0435|\u0440\u0430\u043B|\u044B\u043D\u0434|\u0434\u0435 |\u043A\u043E\u043E|\u043D\u0438\u043A|\u0430\u0442\u044B| \u04E9\u043B|\u043B\u0433\u043E|\u043E\u043B\u0433|\u0440\u0434\u0438|\u0430\u043C\u0441|\u04AF\u043C\u043A|\u043C\u04AF\u043C|\u04E9\u0441\u04AF|\u043C\u0434\u0443|\u043D \u0438|\u0448 \u0436| \u04AF\u0447|\u0448\u0442\u044B|\u0433\u0443\u043D|\u0437\u0433\u0438|\u0431\u0435\u0440|\u04E9\u043D | \u0431\u0443|\u0431\u044B\u043D|\u0441\u0430\u043B|\u043A\u0438\u043C|\u0443 \u044D|\u043D \u0441|\u04E9\u043D\u04AF|\u043A\u0442\u04E9|\u0430 \u04E9|\u0434\u044B\u0433|\u0434\u044B |\u0437 \u043A| \u043A\u04E9|\u0434\u0430\u043D|\u044B\u043B\u044B|\u0440\u043C\u0430| \u0430\u0439|\u0438\u0430\u043B",
        mkd: " \u043D\u0430|\u043D\u0430 | \u043F\u0440| \u0438 |\u0432\u043E | \u0441\u0435|\u0440\u0430\u0432|\u043F\u0440\u0430|\u0442\u0430 |\u0430 \u0441| \u043D\u0435|\u0442\u043E |\u0434\u0430 | \u0434\u0430|\u0430 \u043F|\u0443\u0432\u0430|\u0438\u0442\u0435|\u0442\u0435 |\u043E \u043D|\u0432\u0430 |\u0430 \u043D|\u043E\u0458 |\u043A\u043E\u0458|\u0438 \u0441|\u043D\u043E |\u0430 \u0438|\u0430\u0442\u0430|\u0430\u0432\u043E| \u0438\u043C|\u0435\u043A\u043E|\u043C\u0430 | \u0437\u0430| \u0441\u043E|\u0441\u0442\u0432|\u043D\u0438 |\u0438\u043C\u0430|\u043E\u0442 |\u045A\u0435 | \u0432\u043E| \u043F\u043E|\u043B\u0438 |\u0458\u0430 |\u0430 \u0434|\u043E\u0441\u0442|\u0441\u0435\u043A|\u0435 \u043D|\u043E\u0432\u0430|\u0441\u0435 |\u0438\u043B\u0438| \u0438\u043B|\u043E \u0441|\u0435 \u043F|\u0430 \u043E|\u0430\u045A\u0435|\u0438 \u043F| \u0441\u043B|\u0430\u0442 |\u0435 \u0438|\u0432\u0430\u045A|\u0438\u0458\u0430|\u043E \u0434|\u043E\u0442\u043E|\u0435\u043D |\u043E \u0438|\u0441\u043B\u043E|\u0440\u0435\u0434|\u0438 \u0434|\u043E\u0431\u043E|\u043F\u0440\u0438| \u043E\u0434|\u0431\u043E\u0434|\u043B\u043E\u0431|\u0458 \u0438|\u0438 \u043D|\u0432\u043E\u0442|\u0441\u0442\u0430|\u0441\u0442 |\u0438 \u0438|\u0435\u0433\u043E|\u043D\u0435\u0433| \u0431\u0438|\u0430 \u0432|\u043D\u043E\u0441| \u0440\u0430| \u045C\u0435|\u0433\u043E\u0432|\u043F\u0440\u0435| \u043D\u0438| \u043A\u043E|\u0442 \u0438| \u043E\u0431|\u0435 \u0441|\u0430\u0432\u0430|\u0430\u043A\u0432|\u045C\u0435 |\u0431\u0438\u0434| \u0434\u0435| \u0434\u0440|\u0441\u043E |\u0442\u0432\u043E|\u0432\u0430\u0442|\u0430\u043A\u043E|\u0430\u0446\u0438|\u0448\u0442\u043E|\u0440\u0430\u0437|\u0435\u0434\u043D|\u0430\u0430\u0442|\u043F\u0440\u043E|\u0431\u0440\u0430|\u0438\u0434\u0435|\u0430\u043D\u0438|\u0430 \u0437|\u0430 \u0431|\u043A\u0430\u043A|\u0446\u0438\u0458|\u0435\u0441\u0442|\u0434\u0435 | \u0435 |\u0430 \u0435| \u0448\u0442| \u043A\u0430|\u0435 \u0431|\u043E\u0434\u043D|\u043E\u0434 |\u0438 \u043E|\u043D\u0438\u0442|\u0442 \u0441|\u0458 \u043D|\u0440\u0430\u043D|\u0435 \u0434|\u0438 \u0437|\u0435\u043D\u043E|\u0434\u0438 |\u043A\u043E\u043D|\u0435\u043D\u0438| \u0435\u0434| \u0441\u0438|\u0435\u043C\u0435|\u0441\u043D\u043E|\u043E\u0441\u043D| \u043E\u0441|\u0442\u0438\u0442|\u043E\u0432\u0438|\u0458\u0430\u0442|\u043E \u043F|\u0432\u0435\u043D|\u043B\u043D\u043E|\u0430\u043B\u043D| \u0458\u0430|\u0435\u0434 |\u0434\u0440\u0443|\u0432\u0430\u0430|\u0441\u0442\u043E|\u0434\u043D\u0430|\u0437\u0430 |\u043D\u043E\u0442|\u0434\u043D\u043E|\u0435 \u043E| \u0434\u043E|\u0432\u0438 |\u043E\u0432\u0435|\u0435\u0434\u0438|\u0434\u0440\u0436|\u043E \u0432|\u043D\u0438\u0435|\u043D\u043E\u0432|\u0447\u043D\u043E|\u043D\u0438\u043A|\u0436\u0438\u0432|\u0435\u0442\u043E|\u0430 \u043A|\u0438\u043E\u0442| \u0441\u0442|\u043D\u0430\u0446|\u0435\u043B\u0438|\u0432\u043D\u0438|\u0434 \u043D|\u0431\u0435\u0437|\u0430\u0440\u0430|\u043E \u043E|\u0438 \u0432|\u0442 \u043D|\u0440\u0443\u0433|\u0434\u0435\u043D|\u0434\u043D\u0438|\u0441\u0438\u0442|\u043E\u0431\u0440|\u0430 \u0440|\u043B\u0443\u0447|\u0430 \u0433| \u0432\u0440|\u043D\u0435 |\u043F\u043E\u0440|\u0448\u0442\u0438|\u0438\u0447\u043D|\u0447\u0443\u0432|\u043A\u0430 |\u0430\u0432\u043D|\u0442\u0432\u0435|\u043A\u043E | \u0431\u0435| \u043E\u043F|\u0431\u043E\u0442|\u0430\u0431\u043E|\u0440\u0430\u0431|\u0430 \u043C|\u0446\u0435\u043B| \u0446\u0435|\u0442\u0435\u043D|\u0435\u043B\u043E|\u043E\u043B\u043D|\u0434\u0435\u043B|\u043D\u0443\u0432|\u0435 \u0432|\u0438\u0442\u0430|\u0430\u0448\u0442|\u0437\u0430\u0448|\u043A\u0440\u0438|\u0440\u043E\u0434|\u043D\u0438\u043E|\u0442 \u043F|\u0437\u0435\u043C|\u0435\u043C\u0430|\u043D\u0435\u043C|\u043E\u0458\u0430|\u0435\u0437 |\u0438\u043C | \u043E\u0432|\u043E\u0434\u0438|\u043F\u0448\u0442|\u043E\u043F\u0448|\u043E\u043D |\u0438\u0435 |\u043D\u0441\u0442|\u043D\u0430\u043A|\u0430\u0453\u0430|\u0448\u0442\u0435|\u0447\u043E\u0432| \u0447\u043E|\u0432\u0430\u043D|\u0437\u043E\u0432|\u0430\u0437\u043E|\u043A\u043E\u0442|\u0441\u043B\u0443|\u0436\u0430\u0432|\u0440\u0436\u0430| \u0438\u0437|\u043E \u043A|\u0440\u0435\u043C|\u0438\u0441\u0442|\u0435\u045A\u0435|\u0432\u043E\u043B|\u043E\u0440\u0435|\u0433\u0438 |\u043D \u0438| \u0442\u043E|\u0442\u0438 |\u0438\u043A\u043E|\u043E\u0434\u0430| \u0436\u0438|\u043B\u0430\u0441|\u0430\u0440\u043E| \u043C\u0435| \u0437\u0435|\u043B\u043E |\u0431\u0435\u0434|\u043B\u0438\u0442| \u0440\u0435|\u0438\u043F\u0430|\u0440\u0438\u043F|\u0435\u0434\u0435|\u043E \u045C|\u043E\u0432\u043E| \u043C\u043E|\u043D\u0430\u043F|\u0442 \u0434|\u0432\u0440\u0435|\u0458\u0441\u0442|\u0435\u0458\u0441|\u043E\u0440\u0430|\u0438\u0432\u0438|\u0440\u0438\u0432|\u0440\u0438 |\u0437\u0432\u043E|\u0432\u0435\u043A|\u043B\u043D\u0438|\u043A\u0432\u043E|\u0432\u043D\u043E| \u0441\u043F|\u043E \u0435|\u043A\u0432\u0430|\u043D \u043D|\u0436\u0435\u043D|\u0434\u0430\u0442|\u043D\u0435\u0442|\u0438\u043D\u0435|\u0438\u0432\u043E|\u043F\u043E\u0434|\u0430\u043B\u0438|\u0438\u043A\u0430",
        khk: " \u044D\u0440|\u044D\u0440\u0445| \u0445\u04AF|\u043D \u0431|\u044D\u0439 |\u0442\u044D\u0439|\u0445 \u044D| \u0431\u043E|\u0430\u0445 | \u0431\u04AF|\u043D\u0438\u0439|\u0430\u043D |\u0438\u0439\u0433|\u0439\u043D |\u0445\u04AF\u043D|\u0431\u043E\u043B| \u0431\u0430|\u044D\u043D |\u043E\u043B\u043E|\u0438\u0439\u043D|\u0443\u0443\u043B|\u0439 \u0445| \u0445\u0430|\u0431\u04AF\u0440|\u044D\u0445 |\u0431\u0430\u0439| \u0431\u0443|\u0433\u0430\u0430|\u0440\u0445\u0442|\u0445\u0442\u044D|\u0433\u04AF\u0439|\u0440\u0445 |\u04AF\u0440 |\u04AF\u043D |\u0430\u0430\u0440|\u0439\u0433 |\u0430\u0440 |\u043B\u0430\u0445|\u043E\u043D | \u0445\u044D|\u0438\u0439 |\u0430\u0430 | \u0437\u0430|\u043D \u0445|\u0439 \u0431| \u043E\u0440|\u04E9\u043B\u04E9|\u043B\u044D\u0445|\u04AF\u0439 |\u043B\u04E9\u04E9|\u0443\u043B\u0430| \u0445\u0443|\u044B\u043D |\u04AF\u043D\u0434|\u044D\u043B |\u044D\u0440 | \u0443\u043B| \u0447 | \u0451\u0441|\u043D \u044D| \u043D\u0438|\u043B\u043E\u043D|\u0445\u0438\u0439| \u0442\u0443|\u0440 \u0445|\u04E9\u04E9\u0440| \u0433\u044D|\u0441\u0430\u043D|\u0447\u04E9\u043B| \u0447\u04E9|\u0443\u043B\u0441| \u04AF\u043D|\u0433\u044D\u044D|\u043E\u0440\u043E|\u043D\u044B |\u043D \u0442|\u044E\u0443 |\u0443\u044E\u0443|\u0431\u0443\u044E| \u0448\u0430|\u0445\u0430\u043D|\u044D\u0434 |\u043E\u0445 |\u044D\u044D |\u043D\u044C | \u043D\u044C| \u0442\u044D|\u0441\u044D\u043D|\u043D \u0430|\u0440 \u044D|\u0430\u0439 |\u043B \u0445|\u0445\u0430\u043C|\u043B\u0430\u0433| \u0442\u043E|\u0445 \u0451| \u044D\u0434|\u043D\u0434\u044D|\u043B\u0433\u0430| \u0442\u04E9|\u0440\u043E\u043B|\u0436 \u0431| \u0430\u043B|\u04AF\u043B\u044D|\u0445 \u0431|\u043B\u0438\u0439| \u0445\u04E9|\u043E\u043B |\u043B \u0431|\u043B\u0441 |\u044D\u0433 |\u044D\u044D\u0440|\u0439\u0433\u044D|\u0430\u0432\u0430|\u0442\u0430\u0439|\u0433\u044D\u043C|\u0433\u0443\u0443|\u0434 \u0445|\u0431\u0443\u0441| \u04E9\u04E9|\u04E9\u0442\u044D|\u04E9\u04E9\u0442|\u0442\u04E9\u0440|\u044B\u0433 |\u043B\u0433\u043E|\u043B\u0443\u0443|\u0445\u0443\u0443|\u04AF\u04AF\u043B|\u043D\u0434 |\u0445\u044D\u043D|\u0441\u043E\u043D|\u0434\u044D\u0441| \u044F\u043B|\u043B\u0434 |\u0430\u043B\u0434|\u0445\u0430\u0440|\u0433\u0438\u0439| \u043D\u044D|\u043B\u043E\u0432|\u0433 \u0431|\u0440\u044D\u0433|\u044D\u0440\u044D|\u04AF\u0439\u043B|\u0430\u0430\u043B|\u043D \u0437|\u0433 \u0445|\u0445 \u0442|\u044D\u043D\u0438| \u0430\u043C|\u0440\u043B\u0430|\u0433\u044D\u0440|\u04AF\u043D\u0438|\u043E\u0439 |\u0442\u043E\u0439|\u0430\u043B | \u0433\u0430|\u0430\u0434 |\u0440\u0438\u0439|\u0430\u0430\u043D|\u0439 \u0430| \u0430\u0436|\u0432\u0441\u0440| \u0437\u043E|\u0443\u0440\u0430|\u043B\u043B\u0430| \u0430\u0432| \u0445\u0438|\u044D\u0434\u044D|\u0434\u0441\u044D| \u04AF\u0439|\u043C\u0433\u0430|\u0430\u043C\u0433|\u0439\u0445 |\u0430\u0439\u0445|\u0447 \u0431| \u043E\u043B|\u0440\u0433\u0430|\u04E9\u0440\u04E9|\u044D\u0441 |\u0430\u0433\u0430| \u0441\u0430|\u043D \u0434|\u043E\u043E |\u0430\u043D\u0430|\u0438\u043D |\u0430\u0433 |\u043D \u043D|\u043E\u0432\u0441| \u0441\u043E|\u043E\u043B\u0446|\u044D\u0433\u0442|\u0434\u044D\u043B|\u0430\u043B\u0438|\u0433\u04E9\u04E9|\u0442\u044D\u0433|\u0445\u044D\u044D|\u0445\u044D\u0440|\u0432\u0430\u0445|\u0430\u0440\u043B|\u04AF\u04AF |\u0445\u04AF\u04AF|\u043B\u0430\u0430| \u0434\u044D|\u0441 \u043E| \u0442\u04AF|\u043C\u0438\u0439|\u0439\u0433\u043C| \u0448\u04AF|\u043D \u0448|\u0430\u0440\u0433|\u0440 \u0447|\u04E9\u0440 |\u0430\u0441\u0430|\u0434\u0438\u043B|\u0430\u0434\u0438| \u0430\u0434| \u043C\u044D|\u0441\u0440\u043E| \u0431\u0438|\u0430 \u0445|\u0438\u043B\u0433|\u0440\u0430\u0430|\u0439 \u0442|\u0445\u04AF\u0440| \u0442\u0430|\u04E9\u0445 |\u0430\u0440\u0434|\u0434\u044D\u044D|\u043B\u043E\u0445|\u043B\u0430\u043D|\u0432\u0430\u0430|\u0438\u0432\u0430|\u043B\u0438\u0432|\u0430\u043B\u0443|\u0442\u0433\u044D|\u043E\u0440\u0438|\u043B\u044B\u043D| \u0434\u0430| \u044F\u0432|\u043B \u043D|\u04AF\u0440\u044D|\u0430\u0439\u0433|\u0434 \u0431|\u043E\u0433\u0442|\u0442\u043E\u0433|\u0430\u0439\u043B|\u04E9\u0440\u0438|\u0430\u0448\u0438|\u044F\u043B\u0433|\u043C\u0430\u0440|\u043B\u0430\u043B|\u0433\u043B\u0430| \u044D\u043D|\u043D \u04AF|\u0440\u043E\u043D| \u0445\u043E|\u043D \u0433|\u043D \u0443|\u0430\u0439\u0434|\u0445 \u0447|\u0434\u043B\u044D|\u0440 \u0442|\u0430\u0442\u0430|\u0431\u0438\u0435|\u0430\u043D\u0433|\u0439 \u044D|\u043D\u044D\u0433| \u0441\u0443|\u043B\u0446\u043E|\u0431\u04AF\u043B|\u043B\u0436 |\u0434 \u043D|\u043B\u04E9\u0445|\u0434\u0430\u0445|\u0440\u0445\u0438|\u043B\u044D\u043B|\u0433 \u04AF| \u0434\u0443|\u0433\u043E\u0445|\u0442\u043E\u043E|\u044D\u0440\u0433|\u043E\u043B\u0433|\u0430\u0441 |\u044D\u0436 |\u0439\u043B\u0434|\u0445 \u0430|\u0433\u0448 |\u044D\u0433\u0448|\u0443\u043B\u0438| \u0448\u0438|\u0445 \u0448|\u0433 \u043D|\u0438\u0433\u043B|\u0441\u0433\u04AF|\u0451\u0441\u0433|\u0434\u0430\u0440|\u0445 \u0445|\u0430\u043C\u044C|\u0440 \u0430|\u043E \u0445",
        kbd: "\u0433\u044A\u044D|\u044B\u0433\u044A| \u043A\u044A| \u0445\u0443|\u044B\u0445\u0443|\u043D\u044B\u0433| \u0437\u044B|\u043D\u0443 |\u0445\u0443\u0438|\u044D\u043C |\u044A\u044D |\u0445\u0443\u044D| \u0438 |\u0443\u0438\u0442|\u0442\u044B\u043D|\u0433\u044A\u0443|\u044D \u0437|\u043A\u044A\u044B|\u044D\u0445\u044D|\u04CF\u044B\u0445|\u044D \u0438|\u044D\u0440 | \u0437\u044D|\u044A\u044D\u0440|\u044B\u043C |\u0445\u044C\u044D|\u044A\u0443\u044D|\u0446\u04CF\u044B| \u0446\u04CF|\u044D\u0445\u0443|\u044B\u043D\u044B|\u0438\u0442\u044B|\u0437\u044B |\u043D\u044D |\u0445\u044D\u043C|\u0430\u0433\u044A|\u0443\u044D |\u043A\u044A\u044D|\u044D\u043D\u0443| \u0434\u044D|\u044D\u0443 |\u044D\u0433\u044A|\u043C \u0438|\u044D\u043D\u044D|\u0445\u044A\u0443|\u044D\u0449 |\u0440\u0430\u043B|\u0442\u0445\u044D|\u044D\u0442\u0445|\u044D\u0440\u0430|\u0445\u044D\u043D|\u0434\u044D\u0442|\u043C \u0445|\u0438\u0433\u044A|\u044D \u0445|\u04CF\u044D |\u0449\u0445\u044C|\u044B \u0446|\u044B\u043D\u0443|\u044D\u043D\u044B|\u0443 \u0445| \u0445\u044D|\u0443 \u0437| \u0433\u044A|\u0437\u044D\u0445|\u043A\u04CF\u044D|\u044A\u044D\u0445|\u0443\u043C |\u0445\u0443\u043C|\u0456\u044D |\u044D\u0434\u044D|\u0440\u044D | \u0438\u043A|\u044A\u0443\u043D| \u0449\u044B|\u0449\u04CF\u044D|\u0443\u044D\u0434|\u0438 \u0445|\u0443\u044D\u043D|\u044D \u043A|\u0445\u044D\u0442|\u0443\u044D\u0444|\u0438\u0456\u044D| \u0438\u0456|\u0445\u044D\u0440|\u044D \u0449| \u0435 |\u043C\u0438 |\u043B\u044A\u044B|\u044D\u043A\u04CF|\u0456\u044D\u0449|\u044D\u0442\u0438|\u0442\u0438 |\u0445\u0443\u0430|\u043C \u043A|\u044D\u0440\u044B|\u0443 \u0434|\u0449\u0456\u044D|\u043A\u044A\u0443|\u0440 \u0437|\u0437\u044D\u0440|\u043C\u0440\u044D|\u044D\u043A\u0456|\u043A\u0456\u044D|\u044A\u044B\u043C|\u0443\u043D\u0443| \u0445\u044A|\u04CF\u0438 |\u0430\u0443\u044D| \u043D\u044D|\u044A\u044D\u043C|\u043B\u044A\u044D|\u044D\u043C\u0440|\u044D \u0433|\u0443\u044D\u0445|\u0435\u0437\u044B|\u043D\u0448\u044D|\u044A\u044D\u043F|\u0437\u044B\u0445|\u0430\u043B\u044A|\u0443 \u043A|\u0430\u0449\u044D|\u0444\u0430\u0449|\u043A\u04CF\u0438|\u0438\u043A\u04CF|\u044A\u044B\u0445|\u0443\u043A\u044A|\u0430\u043B\u044B|\u0430\u043B |\u0443 \u0438|\u0431\u0437\u044D|\u044A\u044D\u0449| \u043C\u044B|\u044D\u0444\u0430| \u043F\u0441|\u0456\u0443\u044D|\u0430\u0431\u0437| \u0445\u0430|\u04CF\u0443\u044D| \u0433\u0443| \u043B\u044A|\u0437\u044B\u043C| \u0449\u04CF| \u0449\u0445|\u043F\u0441\u043E|\u0443\u043C\u044D|\u044A\u0443\u043C|\u0445\u0430\u0431|\u043D\u0443\u043A|\u0438\u04CF\u044D| \u0438\u04CF|\u0449\u044B\u0442|\u04CF\u044D\u0449| \u044F |\u0440\u0438 |\u0445\u0443 | \u0435\u0437|\u0440\u0438\u0433|\u0438 \u043A|\u043C \u0449|\u0443 \u0449|\u0438 \u0446|\u043B\u044B\u043C|\u0448\u044D\u0443|\u044A\u044B\u0449|\u044B\u0445\u044D|\u044D\u043F\u044D|\u044D\u0449\u04CF|\u0449\u044D\u0445|\u044B\u0445\u044C|\u044D\u043D |\u0445\u044A\u044D| \u0443\u043D|\u044A\u044D\u043A|\u044A\u044D\u0436|\u044A\u044B\u0442|\u043C \u0435|\u0443\u0443 |\u044D\u043F\u0441|\u0449\u04CF\u044B|\u0443 \u043F|\u0441\u044D\u043D|\u043C\u0430\u043B|\u0430\u043C\u0430| \u0430\u043C|\u043F\u0445\u044A| \u0449\u0456|\u0449\u0456\u0430|\u043C\u044D\u043D|\u044D\u0445\u044A|\u044C\u044D |\u044D\u0436\u044B|\u044B\u043B\u044A|\u044D \u0435|\u044D\u0449\u0445|\u0456\u044B\u0445|\u0446\u0456\u044B| \u0446\u0456|\u043C \u0437|\u0442\u0443 |\u044C\u044D\u0445|\u044D\u0441\u044D|\u044C\u044D\u043D|\u0430\u043F\u0449|\u044D\u0440\u0438|\u0436\u044C\u044D|\u044A\u044D\u0437|\u044A\u044D\u0443|\u0434\u044D |\u043F\u0449\u04CF|\u043F\u0441\u044D|\u0438 \u043D|\u044B\u043D\u0448|\u0436\u044B\u043D|\u0443\u044D\u0449|\u043D\u044D\u0433|\u044C\u044D\u043F|\u043D \u0445|\u044A\u0443\u0430|\u044B\u043A\u04CF|\u0445\u0443\u0440|\u043B\u044A\u0445|\u0434\u044D\u0443|\u044D \u044F|\u044A\u044D\u0441|\u043F\u0441\u044B|\u044D \u043F|\u044D\u0442\u044B|\u044D \u0434| \u0438\u0440|\u0440 \u0438|\u044D\u0449\u0456|\u043D\u044D\u0445|\u0437\u044D\u0433|\u044B\u0437\u044D|\u0438 \u043B|\u0438 \u0438|\u043D\u0435\u0439|\u0443\u043D\u0435|\u044B\u0442 | \u0437\u0438|\u0443\u043D\u0430|\u044D\u043D\u0448|\u0445\u044D\u0433|\u0433\u0443\u043F|\u044B\u0449\u044B|\u0445\u0443\u0435|\u044B\u0440 |\u0438\u0442\u0443|\u0438 \u0449|\u0441\u043E\u043C|\u0441\u044D\u0445|\u044D\u0437\u044D|\u044B\u043A\u044A|\u044D\u0433\u0443| \u0442\u0435|\u0430\u043F\u0445|\u043A\u044A\u0435| \u0437\u0430|\u043B\u0445\u044D|\u0430\u043B\u0445|\u0438 \u0434|\u044D \u043B|\u0438 \u0443|\u0443\u044D\u0442|\u0430\u043C |\u043C\u044B |\u044B\u043D |\u0438 \u0437|\u044D\u0436\u044C|\u0436\u044C\u044B|\u0449 \u0435|\u0443\u044D\u043C|\u043C \u0434|\u0437\u044D |\u044A\u044D\u0433|\u0435\u0433\u044A| \u0456\u0443|\u0449 \u0437|\u043B \u0445|\u0431\u0433\u044A|\u044B\u0442\u044D| \u043F\u0449|\u043D\u0430\u0433|\u0440 \u0449|\u0441\u044D\u0443|\u043C \u044F|\u043A\u044D |\u0442 \u0445|\u0438\u043C\u044B|\u043E\u043C\u0438|\u044D \u0430|\u044D\u043C\u044B|\u0442\u044D\u043D|\u043C\u044B\u043B|\u0445\u044D\u043A|\u0443 \u0435|\u0445\u0443\u0431|\u0443\u0438\u0433|\u0443\u0435\u0439"
    },
    Arabic: {
        arb: " \u0627\u0644|\u064A\u0629 |\u0641\u064A | \u0641\u064A|\u0627\u0644\u062D| \u0623\u0648|\u0623\u0648 | \u0648\u0627|\u0648\u0627\u0644|\u062D\u0642 |\u0629 \u0627|\u0644\u062D\u0642|\u0627\u0644\u062A|\u0643\u0644 |\u0627\u0644\u0645|\u0644\u0643\u0644| \u0644\u0643|\u0644\u0649 |\u0642 \u0641|\u062A\u0647 |\u0648 \u0627|\u0629 \u0648|\u0634\u062E\u0635|\u0629 \u0644|\u0627\u062A |\u0627\u0644\u0623|\u064A \u0623|\u0648\u0646 | \u0634\u062E|\u0645 \u0627|\u0623\u064A | \u0623\u064A|\u0627\u0646 |\u0623\u0646 |\u0645\u0629 |\u064A \u0627|\u0627\u0644\u0627|\u0644\u0627 |\u0647\u0627 |\u0627\u0621 | \u0623\u0646| \u0639\u0644|\u062E\u0635 |\u0646 \u0627| \u0644\u0644|\u062F \u0627|\u0645\u0646 |\u0641\u0631\u062F|\u0645\u0627 |\u0627\u0644\u0639|\u062A \u0627|\u062D\u0631\u064A|\u0639\u0644\u0649|\u0644 \u0641|\u0631\u062F |\u0644 \u0634| \u0644\u0627|\u0631\u064A\u0629| \u0625\u0644|\u0629 \u0623|\u0627 \u0627|\u0646 \u064A| \u0648\u0644|\u0627 \u0644|\u0627 \u064A| \u0641\u0631| \u0645\u0646|\u0629 \u0645|\u0627\u0644\u0642|\u062C\u062A\u0645|\u0646 \u0623|\u0642 \u0627|\u0627\u0644\u0625| \u062D\u0631|\u0644\u0647 |\u0647 \u0644|\u0627\u064A\u0629|\u0644\u0643 |\u0647 \u0627| \u062F\u0648|\u062F\u0629 |\u0627\u064B |\u064A\u0646 |\u0647 \u0648|\u0644\u0629 |\u064A \u062D| \u0639\u0646|\u0645\u0627\u0639|\u064A \u062A|\u0630\u0627 | \u062D\u0642|\u0642\u0648\u0642|\u062D\u0642\u0648|\u060C \u0648|\u0646 \u062A|\u0645\u0639 |\u0635 \u0627|\u0627\u0645 |\u062F \u0623| \u0643\u0627|\u0647\u0630\u0627|\u0627\u0644\u0648| \u0625\u0646|\u0645\u0644 |\u0627\u0645\u0629|\u0639 \u0627|\u0625\u0644\u0649|\u0629 \u0639|\u0645\u0627\u064A|\u062D\u0645\u0627|\u0646 \u0648|\u0644\u062A\u0639| \u0648\u064A|\u064A\u0631 |\u0646\u0648\u0646|\u064A \u0648|\u0627\u0633\u064A|\u0627\u0644\u062C| \u0647\u0630|\u0646\u0633\u0627|\u0648\u0642 |\u062A\u0631\u0627|\u0639\u064A\u0629|\u0647 \u0623| \u0644\u0647|\u0633\u064A\u0629| \u064A\u062C| \u0628\u0627|\u062F\u0648\u0644|\u0627\u0646\u0648|\u0642\u0627\u0646|\u0644\u0642\u0627|\u0629 \u0628|\u0629 \u062A|\u062A\u0645\u0627|\u0627\u0644\u062F|\u064A\u0627\u062A|\u0639 \u0628|\u0633\u0627\u0646|\u0625\u0646\u0633|\u0647\u0645 |\u0639\u0644\u064A| \u0645\u062A|\u0644\u0645\u062C|\u0630\u0644\u0643|\u0639\u0645\u0644|\u0644\u0623\u0633|\u0648\u0632 |\u062C\u0648\u0632|\u064A\u062C\u0648|\u0628\u0627\u0644|\u063A\u064A\u0631|\u0643 \u0627|\u0643\u0627\u0646|\u0633\u0627\u0633|\u0623\u0633\u0627|\u062F\u0645 |\u0644\u0627\u062F|\u0627\u0639\u064A|\u0627\u0644\u0631|\u062A\u0645\u064A|\u062F\u0648\u0646|\u062A\u0645\u062A|\u0644\u062A\u0645| \u064A\u0639|\u0644\u064A\u0647|\u0633\u0627\u0648|\u0627\u062C\u062A|\u064A \u0645|\u0644\u0639\u0627|\u0644\u062C\u0645|\u062A\u0639\u0644|\u0631 \u0648|\u062A\u0645\u0639|\u0645\u062C\u062A| \u0645\u0639|\u064A\u0647 |\u0649 \u0623|\u0641\u064A\u0647|\u0649 \u0627| \u0643\u0644|\u0644\u0627\u062A|\u0645\u0644\u0627|\u0648\u062F |\u0627\u0646\u062A|\u0627\u0644\u0641|\u064A\u0647\u0627|\u064A \u0625|\u062A\u064A |\u0627\u0644\u0628|\u0644\u064A |\u0642\u062F\u0645|\u0627\u0644 |\u0627\u062F |\u0644 \u0627|\u064A\u0632 |\u064A\u064A\u0632|\u0645\u064A\u064A| \u062A\u0645|\u0644\u062D\u0631|\u062A\u0639 |\u0645\u062A\u0639|\u0627 \u0628|\u0639\u0627\u0645|\u0627 \u0648|\u0642 \u0648|\u0631\u0627\u0645|\u0644 \u0644|\u0644\u0627\u062C|\u0631\u0627 |\u0627\u0644\u0634| \u0648\u0625|\u064A\u0645 |\u0644\u064A\u0645|\u0634\u062A\u0631|\u0627 \u062D|\u0648\u0627\u062C|\u0644\u0632\u0648|\u0648\u0644 |\u0627 \u0641|\u0648\u0644\u0629|\u0644\u062D\u0645|\u0623\u0633\u0631| \u0630\u0644|\u0647 \u0641|\u0627\u062A\u0647|\u0645\u0633\u0627|\u0644\u0645\u0633| \u062A\u0639|\u0639\u0646 |\u0647 \u0639|\u0648\u0644\u0647|\u064A\u062A\u0647|\u0646 \u0644|\u0631\u0629 | \u0648\u0633|\u0627\u0629 |\u064A\u062F | \u062A\u062D| \u0645\u0633|\u064A \u064A|\u0644\u062A\u064A|\u0639\u0629 |\u0648\u0644\u064A|\u0644\u062F\u0648| \u0623\u0633| \u0648\u0641|\u0644 \u0648|\u0623\u064A\u0629|\u0646\u064A |\u0627\u0644\u0633|\u0644\u0627\u0646|\u0644\u0625\u0639|\u0629 \u0641|\u0631\u064A\u0627|\u0644 \u0625|\u0645 \u0628|\u0627\u0645\u0644|\u0643\u0631\u0627|\u062A\u0633\u0627|\u0645\u064A\u0639|\u062C\u0645\u064A| \u062C\u0645|\u0623\u0648\u0644|\u0628\u064A\u0629|\u0639\u064A\u0634|\u062A\u062D\u0642|\u0627\u062F\u0629|\u0633 \u0627| \u0645\u0645|\u0645\u0639\u064A|\u062C\u0645\u0627|\u0639\u0627\u062A|\u0627\u0639\u0627|\u0627\u0631\u0633|\u0645\u0627\u0631|\u0645\u0645\u0627|\u0645 \u0648|\u0631\u0627\u0643|\u0627\u0634\u062A|\u0627\u0644\u0637|\u0627\u062C |\u0632\u0648\u0627|\u0627\u0644\u0632| \u0648\u0645|\u062D\u062F\u0629|\u062A\u062D\u062F|\u0644\u0645\u062A|\u0645\u0645 |\u0644\u0623\u0645|\u062F\u0647 |\u0628\u0644\u0627| \u0628\u0644|\u0627\u0631 |\u064A\u0627\u0631|\u062A\u064A\u0627|\u062E\u062A\u064A|\u0627\u062E\u062A|\u0646 \u0645| \u0645\u0631",
        urd: "\u0648\u0631 | \u0627\u0648|\u0627\u0648\u0631|\u06A9\u06D2 | \u06A9\u06D2| \u06A9\u06CC| \u06A9\u0627|\u06CC\u06BA | \u062D\u0642|\u06A9\u06CC |\u06A9\u0627 | \u06A9\u0648|\u0626\u06D2 |\u06D2 \u06A9|\u06CC\u0627 |\u0633\u06D2 |\u06A9\u0648 |\u0634\u062E\u0635| \u0634\u062E|\u0646\u06D2 | \u0627\u0633| \u06C1\u06D2|\u0645\u06CC\u06BA|\u062D\u0642 | \u06C1\u0648| \u0645\u06CC|\u062E\u0635 |\u06D2 \u0627| \u062C\u0627|\u0627\u0633 | \u0633\u06D2| \u06CC\u0627|\u06C1\u0631 |\u06CC \u0627| \u06A9\u0631| \u06C1\u0631|\u06D2\u06D4 |\u0633\u06CC |\u06C1\u06CC\u06BA|\u0627 \u062D|\u0635 \u06A9|\u0648\u06BA |\u06D2 \u0645| \u0627\u0646|\u0631 \u0634|\u06D4 \u06C1|\u0627\u0626\u06D2|\u0632\u0627\u062F|\u0622\u0632\u0627| \u0622\u0632|\u0627\u0645 |\u0631 \u0627|\u0642 \u06C1|\u0627\u062F\u06CC|\u062C\u0627\u0626|\u06BA \u06A9|\u06C1\u06D2\u06D4|\u0645 \u06A9| \u06A9\u0633|\u0627 \u062C|\u06CC \u06A9|\u0633 \u06A9|\u06A9\u0633\u06CC| \u067E\u0631|\u06D2 \u06AF|\u06C1\u06D2 |\u0627\u0631 |\u062A \u06A9|\u062F\u06CC |\u067E\u0631 |\u0648 \u0627| \u062D\u0627| \u062C\u0648| \u06C1\u06CC|\u0627\u0646 |\u06CC \u062C|\u0631\u06CC | \u0646\u06C1| \u0645\u0639|\u062C\u0648 |\u0644 \u06A9|\u06CC \u062A|\u0646 \u06A9|\u06A9\u0631\u0646|\u0626\u06CC |\u0644 \u06C1|\u062A\u06CC |\u06C1\u0648 |\u06C1 \u0627| \u0627\u06CC|\u0635\u0644 |\u0627\u0635\u0644|\u062D\u0627\u0635|\u0631\u0646\u06D2|\u06CC \u0634|\u0646\u06C1 |\u06D4 \u0627|\u06BA\u06D4 |\u06CC\u06BA\u06D4|\u0631 \u06A9|\u0631 \u0645| \u0645\u0644|\u0648\u06C1 |\u0645\u0639\u0627|\u0631\u06D2 |\u06BA \u0627|\u0646\u06C1\u06CC|\u06D2 \u06C1|\u06D2 \u0628|\u0627\u06CC\u0633|\u06D2 \u0644| \u062A\u0639| \u06AF\u0627|\u06CC\u062A |\u06CC \u062D|\u0627 \u0627|\u06CC \u0645|\u0627\u067E\u0646| \u0627\u067E|\u06A9\u06CC\u0627|\u0645\u06CC |\u06CC \u0633| \u062C\u0633|\u06C1 \u06A9|\u0646\u06CC |\u0627\u0634\u0631|\u0639\u0627\u0634| \u062F\u0648|\u0644\u0626\u06D2| \u0644\u0626|\u0627\u0646\u06C1|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0645\u0644 | \u0642\u0627|\u06A9\u06C1 | \u06AF\u06CC|\u0631 \u0628|\u06C1 \u0645| \u0648\u06C1| \u0628\u0646|\u06CC \u0628|\u0645\u0644\u06A9|\u062C\u0633 |\u0627\u06D4 |\u0631\u06CC\u0642|\u0631 \u0646|\u06D2 \u062C|\u0627\u062F |\u0627\u062A |\u06AF\u06CC |\u062F \u06A9|\u06D2 \u062D|\u062F\u0627\u0631|\u0631 \u06C1|\u06AF\u0627\u06D4|\u0642\u0648\u0645| \u0642\u0648|\u06D2\u060C |\u0627 \u0633|\u062F\u0648\u0633|\u0631 \u067E| \u0648 | \u0634\u0627|\u06CC \u0622|\u06BA \u0645|\u0642 \u062D| \u067E\u0648| \u0628\u0627|\u062E\u0644\u0627|\u0627\u0646\u06D2|\u06CC\u0645 |\u0644\u06CC\u0645|\u0648 \u062A|\u0648\u0646 | \u06A9\u06C1|\u06CC\u060C |\u06D4 \u06A9|\u0627 \u067E|\u0646 \u0627|\u0644\u06A9 |\u0639\u0644\u0627|\u0627 \u0645|\u0642 \u06A9|\u0627\u0626\u06CC|\u0648\u0633\u0631|\u06CC \u06C1|\u0648\u0626\u06CC|\u06CC\u0631 |\u0627 \u06C1|\u0639\u0644\u06CC|\u0648 \u06AF|\u0648\u0631\u06CC|\u062F\u06AF\u06CC|\u0646\u062F\u06AF|\u0648 \u06A9|\u06CC\u0633\u06D2| \u0645\u0646|\u0627\u0626\u062F|\u0631\u0627\u0626| \u0645\u0631|\u067E\u0648\u0631| \u0637\u0631|\u0648\u0645\u06CC|\u06D2 \u062E|\u0633\u0628 |\u0646\u0648\u0646|\u0627\u0646\u0648|\u0642\u0627\u0646| \u0633\u06A9|\u0648\u0627\u0645|\u06CC\u0646 | \u0631\u06A9|\u062A\u0639\u0644|\u0644\u0627\u0642|\u063A\u06CC\u0631|\u062F\u0627\u0646|\u060C \u0627| \u0628\u06CC| \u0645\u0633|\u06CC\u0648\u06BA|\u0646\u0627 | \u0628\u06BE| \u0628\u0631|\u0631\u062A\u06CC|\u0627\u062F\u0627|\u0627\u0645\u0644|\u06CC\u06C1 | \u06CC\u06C1|\u06C1 \u0648| \u0639\u0627|\u06CC \u067E| \u0628\u0686|\u0627\u0641 |\u0644\u0627\u0641| \u062E\u0644|\u06CC\u06D4 |\u06AF\u06CC\u06D4| \u062F\u06CC|\u06BE\u06CC |\u0628\u06BE\u06CC|\u062F\u06C1 |\u062C\u0627 |\u067E\u0646\u06CC|\u0642\u0648\u0627|\u0627\u0642\u0648|\u0631\u06A9\u06BE|\u06D2 \u06CC| \u0639\u0644|\u06A9\u0648\u0626|\u060C \u0645| \u0686\u0627|\u06D2 \u0633|\u0631 \u0639| \u067E\u06CC|\u0628\u0631\u0627|\u0631 \u0633|\u0631 \u062D|\u0633\u0627\u0646|\u0645 \u0627|\u06A9\u0627\u0645|\u0634\u0631\u062A| \u0631\u0627|\u0634\u0627\u0645|\u0645\u0646 |\u0632\u0646\u062F| \u0632\u0646|\u0628 \u06A9|\u062A \u0645|\u0627\u06C1 |\u0627\u0631\u06CC|\u0633 \u0645|\u0631 \u062C| \u0645\u062D|\u0648\u0631\u0627|\u06D2 \u067E|\u0637\u0631\u06CC|\u06C1\u0648\u06BA|\u0627\u0644 |\u06BA \u0633|\u06CC \u0646|\u06A9\u0631\u06D2| \u0645\u0642|\u062A \u0633|\u062A\u062D\u0641| \u062A\u062D|\u0648\u06D4 |\u06C1\u0648\u06D4|\u0628\u0646\u062F| \u0627\u0642|\u062F \u06C1| \u0627\u0645|\u0627\u0645\u06CC|\u0627\u0644\u0627|\u0644\u062A |\u0634\u0631\u06D2|\u06D2 \u0639|\u0627 \u06A9|\u0641\u0631\u06CC",
        pes: " \u0648 | \u062D\u0642| \u0628\u0627|\u0646\u062F |\u0631\u062F |\u062F\u0627\u0631| \u062F\u0627|\u06A9\u0647 |\u0647\u0631 | \u062F\u0631| \u06A9\u0647|\u062F\u0631 | \u0647\u0631|\u0631 \u06A9|\u062D\u0642 |\u062F \u0647|\u0627\u0632 |\u06CC\u062A | \u0627\u0632|\u06CC\u0627 |\u06A9\u0633 |\u0648\u062F |\u0627\u0631\u062F| \u06CC\u0627| \u06A9\u0633|\u0627\u06CC |\u062F \u0648| \u0628\u0631| \u062E\u0648|\u0642 \u062F|\u0628\u0627\u0634|\u0634\u062F |\u062F \u06A9|\u0627\u0631 |\u062F \u0628| \u0631\u0627|\u0647 \u0628|\u0627\u0646 |\u0622\u0632\u0627| \u0622\u0632|\u0631\u0627 |\u0627\u0634\u062F|\u06CC \u0648|\u0647 \u0627|\u06CC\u0646 |\u06CC\u062F |\u0632\u0627\u062F|\u0633 \u062D|\u062E\u0648\u062F|\u06CC \u0628| \u0627\u0633|\u062F\u0647 |\u062F\u06CC |\u0648\u0631 |\u0627\u06CC\u062F|\u0647 \u062F|\u0631\u06CC |\u0648 \u0627|\u062A\u0645\u0627|\u0627\u062A | \u0646\u0645|\u06CC \u06A9|\u0627\u062F\u06CC|\u0646\u0647 |\u0631\u0627\u06CC|\u062F \u0627| \u0622\u0646|\u0627\u0633\u062A|\u0631 \u0627|\u0631 \u0645| \u0627\u062C|\u0645\u0627\u06CC|\u0648\u0646 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645| \u0627\u0646|\u0627\u0646\u0647| \u0647\u0645|\u0648\u0642 |\u0627\u06CC\u062A| \u0634\u0648|\u06CC \u0627| \u0645\u0648| \u0628\u06CC|\u0628\u0627 | \u062A\u0627|\u0648\u0631\u062F|\u0627\u0646\u0648|\u0633\u062A |\u0648\u0627\u0646|\u0628\u0631\u0627|\u0627\u0645 |\u0634\u0648\u062F|\u0622\u0646 |\u062C\u062A\u0645|\u06CC \u06CC| \u06A9\u0646|\u0631 \u0628|\u06A9\u0646\u062F| \u0645\u0631|\u062A \u0645|\u0647\u0627\u06CC|\u062A \u0627| \u0645\u0633|\u06CC\u060C |\u0645\u0627\u0639|\u0627\u062C\u062A|\u062A\u0648\u0627|\u06CC\u06AF\u0631|\u0648 \u0628|\u062F\u0627\u0646|\u062A \u0648|\u0627 \u0645| \u0628\u062F|\u0639\u06CC |\u06A9\u0627\u0631| \u0645\u0646|\u0645\u0648\u0631| \u0645\u0642|\u06CC \u062F| \u0632\u0646|\u06CC \u0645|\u0646 \u0628|\u0631 \u062E|\u0627\u0647 |\u0627 \u0628|\u0627\u0631\u06CC|\u062F \u0622|\u0645\u0644 | \u0628\u0647|\u0627\u0639\u06CC|\u062F\u060C |\u062F\u06CC\u06AF|\u062A \u0628|\u0628\u0627\u06CC|\u0627\u06CC\u0646| \u0645\u06CC|\u0646 \u0648|\u0642 \u0645| \u0639\u0645| \u06A9\u0627|\u0646 \u0627|\u0648 \u0622| \u062D\u0645|\u0646\u0648\u0646|\u0647 \u0648|\u0648 \u062F|\u062F \u0634| \u0627\u06CC|\u0634\u0648\u0631|\u06A9\u0634\u0648| \u06A9\u0634|\u0644\u06CC |\u0646\u06CC |\u0647 \u0645|\u0628\u0639\u06CC|\u0631 \u0634|\u06CC\u0647 | \u0645\u0644|\u0645\u06CC\u062A|\u06CC \u0631|\u0631\u0646\u062F| \u0634\u0631|\u0645\u06CC |\u0648\u06CC |\u0633\u0627\u0648|\u0642\u0627\u0646| \u0642\u0627|\u0645\u0642\u0627|\u0627\u0648 | \u0627\u0648|\u062F \u0645|\u06AF\u06CC |\u0646\u0645\u06CC| \u0627\u062D| \u0645\u062D|\u0645\u06CC\u0646|\u0626\u06CC |\u0627\u062F\u0627| \u0622\u0645|\u062E\u0648\u0627|\u06AF\u0631\u062F| \u06AF\u0631|\u0645\u0646\u062F| \u0634\u062F|\u0627\u0626\u06CC| \u062F\u06CC|\u0632 \u062D|\u0647\u06CC\u0686| \u0647\u06CC|\u0627\u062F\u0647| \u0645\u062A|\u0646\u0645\u0627|\u062A \u06A9|\u0631\u0627\u0646| \u0628\u0645|\u0646 \u062D|\u0631 \u062A|\u062D\u0645\u0627|\u0627\u0631\u0646|\u0645\u0633\u0627|\u062F\u06AF\u06CC|\u0648\u0645\u06CC|\u0646 \u062A|\u0645\u0644\u0644|\u0628\u0631 |\u0647\u062F |\u0648\u0627\u0647|\u0628\u0647\u0631| \u0627\u0639|\u200C\u0647\u0627|\u0642 \u0648|\u060C \u0627|\u0639\u06CC\u062A|\u06CC\u062A\u0648|\u0627 \u0631|\u0646 \u0645| \u0639\u0642|\u0647\u0645\u0647|\u0627 \u0647|\u0632\u0634 |\u0648\u0632\u0634|\u0645\u0648\u0632|\u0622\u0645\u0648|\u0627\u0646\u062A|\u062A\u06CC |\u062C\u0627\u0645|\u0645\u0648\u0645|\u0639\u0645\u0648|\u062A\u062E\u0627| \u0641\u0631|\u0637\u0648\u0631|\u062F \u062F|\u0647 \u062D|\u0631\u062F\u0627|\u0627\u0648\u06CC|\u0646\u0648\u0627|\u0627\u0646\u06CC|\u0631\u0627\u0631| \u0645\u062C|\u06CC \u0646|\u062D\u062F\u06CC|\u0627\u062D\u062F|\u0646\u062F\u06AF|\u0632\u0646\u062F|\u0634\u062E\u0635| \u0634\u062E|\u200C\u0645\u0646|\u0647\u200C\u0645|\u0631\u0647\u200C|\u0647\u0631\u0647|\u0634\u062F\u0647|\u0639 \u0627|\u0648 \u0647|\u0627\u0633\u06CC|\u0647\u0654 |\u06CC\u062F\u0647|\u0639\u0642\u06CC|\u0627 \u0627|\u0645\u0647 | \u0628\u0634|\u0627\u062F |\u062F\u06CC\u0647|\u0627 \u062F|\u062F\u0648\u0627|\u06CC \u062D|\u0627\u0628\u0639|\u06CC \u062A|\u062E\u0627\u0628|\u0646\u062A\u062E|\u0631\u0648\u0631|\u0648 \u0631|\u0634\u0631\u0627| \u062E\u0627|\u0654\u0645\u06CC|\u0627\u0654\u0645|\u062A\u0627\u0654|\u0627\u064B |\u0627\u0645\u0644|\u0644\u0647 |\u062F \u0631|\u0627\u0633\u0627|\u062E\u0648\u0631|\u0628\u0644 |\u0627\u0628\u0644|\u0642\u0627\u0628|\u06CC\u06A9 |\u0633\u0627\u0646|\u0642\u0631\u0627|\u0627 \u0646|\u062E\u0635\u06CC| \u0627\u0645| \u0628\u0648|\u06CC\u0631 |\u0627\u0644\u0645|\u0628\u06CC\u0646|\u0627\u0647\u062F|\u062A\u0628\u0639| \u062A\u0628",
        zlm: " \u062F\u0627|\u0627\u0646 |\u062F\u0627\u0646| \u0628\u0631| \u0627\u0648|\u0646 \u0633|\u0631\u06A0 |\u062F\u0627\u0644| \u06A4\u0631|\u0644\u0647 |\u0643\u0646 | \u0643\u06A4|\u0646 \u0627|\u0646 \u0643|\u0646 \u062F|\u064A\u06A0 | \u064A\u06A0|\u06A4\u062F |\u062D\u0642 |\u0648\u0631\u06A0|\u062A\u064A\u0627|\u064A\u0627\u06A4|\u0627\u0631\u0627|\u0643\u06A4\u062F|\u0627\u0648\u0631|\u0631\u062D\u0642|\u0628\u0631\u062D|\u0627\u0644\u0647|\u0623\u0646 |\u0648\u0644\u064A| \u0627\u062A|\u0627\u062A\u0627|\u06A0\u0646 |\u062A\u0627\u0648|\u0627\u06A4 |\u0633\u062A\u064A|\u0644\u064A\u0647|\u0627\u0648 | \u0633\u062A|\u06A4 \u0627|\u064A\u0647 |\u0631\u0627 |\u0647 \u0628|\u0647 \u062F|\u0639\u062F\u0627| \u0639\u062F|\u0646 \u06A4|\u0646 \u0628|\u064A\u0646 | \u062A\u0631|\u0642 \u0643|\u0646 \u064A|\u064A\u0628\u0633|\u0628\u064A\u0628| \u062A\u064A| \u0633\u0648| \u0643\u0628| \u0633\u0627|\u0646 \u0645|\u0646 \u062A|\u0644\u0645 |\u0627\u0644\u0645|\u062F \u0633|\u06A0 \u0639| \u0645\u0646|\u0686\u0627\u0631|\u062F \u06A4|\u0631\u0646 |\u0633\u0627\u0645| \u0645\u0627|\u06BD \u0633|\u0646\u060C | \u0628\u0648| \u0627\u064A|\u0646\u062F\u0642| \u062D\u0642|\u06AC\u0627\u0631|\u0646\u06AC\u0627|\u0628\u0648\u0644|\u0633\u0628\u0627| \u0633\u0628|\u0627\u062A\u0648|\u0627 \u0633|\u0642\u0644\u0647| \u06A4\u0645| \u0645\u0645|\u0648\u0627\u0646|\u0633\u0686\u0627| \u0633\u0686| \u0643\u0633|\u0627 \u0628|\u0633\u0646 | \u0633\u0645|\u06A4\u0631\u0644|\u0627\u0648\u0646|\u0646\u06BD |\u062A\u0646 | \u0628\u0627|\u0647\u0646 |\u0633\u064A\u0627|\u0627 \u06A4|\u0627\u0631\u06A0|\u0628\u0627\u0631|\u06A4\u0627 |\u0628\u0633\u0646|\u0643\u0628\u064A|\u0627\u0645 |\u064A\u0646\u062F|\u064A \u062F|\u0627\u06AC\u064A|\u06A0 \u0628|\u0628\u0627\u06AC|\u064A \u0627|\u0645\u0627\u0646| \u0644\u0627| \u062F |\u062F\u0642\u0644|\u0647\u0646\u062F| \u0647\u0646|\u062A \u062F|\u0627\u062F\u064A|\u0648\u064A\u0646|\u064A\u0643\u0646| \u0646\u06AC|\u060C \u0643|\u0646\u0662 | \u06A4\u0648|\u0628\u06A0\u0633|\u0642\u0662 |\u0627\u062A |\u0627\u0648\u0644|\u0627\u0643\u0646|\u0627\u06BD | \u0633\u0633|\u0648\u0646 |\u0627\u062F | \u0643\u0648|\u0627\u064A\u0646|\u062F\u06A0\u0646| \u062F\u06A0|\u0627\u0626\u0646|\u062A\u0648 |\u062A\u064A |\u0646 \u0647|\u06AC\u064A |\u0633\u064A |\u0642 \u0645|\u0648\u06A0\u0646|\u062F\u0648\u06A0|\u0646\u062F\u0648|\u0644\u064A\u0646|\u0631\u0644\u064A|\u0646\u062A\u0648|\u06A4\u0648\u0646|\u0648\u0627\u062A|\u064A\u0627\u062F|\u062A\u064A\u0643|\u06A0\u0633\u0627|\u06A4\u0645\u0628|\u062A\u0631\u0645|\u0662 \u062F|\u062D\u0642\u0662|\u0648\u0627 |\u0644\u0648\u0627|\u0645\u0627\u0633|\u0648\u0642 |\u0647 \u0645|\u0644 \u062F| \u0645\u0644|\u0648\u0646\u062F| \u06A4\u06A0|\u0627\u060C |\u060C \u062A|\u0644\u0627\u0626|\u0627\u064A |\u0645\u06A4\u0648|\u064A\u0643 |\u064A \u0643|\u0631\u0627\u062A|\u0645\u0631\u0627| \u0628\u064A|\u0633\u0645\u0648|\u0648 \u0643|\u060C \u062F|\u0633\u0648\u0627|\u06A0 \u0645|\u06A0 \u0633|\u06A0\u0662 |\u06A4\u0631\u064A|\u064A\u0631\u064A|\u062F\u064A\u0631|\u0627 \u0627|\u0627\u0633\u0627|\u06A4\u0662 |\u062A\u0627 |\u0633\u0648\u0633|\u060C \u0633|\u062C\u0648\u0627|\u06A0 \u062A|\u0631\u0623\u0646| \u0627\u0646|\u0633\u0623\u0646|\u0631\u064A\u0643|\u064A\u0623\u0646|\u0631\u064A | \u062F\u0631|\u0627\u0645\u0631|\u0643\u0631\u062C| \u06A4\u0644|\u0627 \u062F|\u062C\u0631\u0646|\u0627\u062C\u0631|\u0627\u0631\u0643|\u0644\u0627\u062C|\u062F \u0643|\u0648\u0627\u0631|\u0628\u0631\u0633|\u0648\u0646\u062A|\u0645\u0646\u0648|\u0633\u0627\u0644|\u064A\u0646\u06A0|\u062F\u06A0\u0662|\u0646\u062F\u06A0| \u0645\u06A0|\u0627\u06A4\u0627|\u0633\u0633\u064A|\u0633\u0627\u0633|\u0646\u0646 |\u06A4\u0648\u0644|\u0627\u06AC\u0627| \u0628\u06A0| \u0633\u06A4|\u0645\u0628\u064A| \u0627\u06A4|\u06A0 \u0627|\u0627\u0631\u0623|\u06A4\u0631\u0627|\u064A \u0633|\u0628\u0633 | \u062F\u0644|\u0627 \u0645|\u0645\u0648\u0627|\u06A4\u0644\u0627|\u0645\u0644\u0627|\u06A4\u0631\u0643|\u0643\u0648\u0631|\u0648\u0628\u0648| \u0643\u0623|\u0648\u0643\u0646|\u0623\u0646\u06BD|\u0643\u0633\u0627|\u06A0\u06AC\u0648|\u0627\u062F\u06A4|\u0647\u0627\u062F|\u0631\u0647\u0627|\u062A\u0631\u0647|\u0643\u0648\u0645|\u062A\u0648\u0642|\u0645 \u0633|\u06A0 \u062F|\u062F\u064A | \u062F\u064A|\u0662 \u0633|\u0646\u062F\u064A|\u0627\u0633 |\u0627\u062F\u0627|\u0628\u0648\u0627| \u062F\u0628|\u06A0 \u06A4|\u06BD\u060C |\u0627\u06A4\u0662|\u0631\u062A\u0627|\u0627\u0644 |\u064A\u0627\u0644|\u0648\u0633\u064A| \u0643\u062A|\u0623\u0646\u060C|\u0646\u06A4\u0627|\u062A\u0646\u06A4| \u062A\u0646|\u0645 \u06A4|\u0631\u0633\u0627|\u0645\u0645\u06A4| \u0645\u0631|\u0646 \u062D| \u0643\u0645|\u0646\u0633\u064A|\u062C\u0623\u0646|\u0624\u064A |\u0644\u0624\u064A|\u0627\u0644\u0624|\u0644\u0627\u0644|\u0643\u06A4\u0631|\u0643\u062A |\u0631\u0643\u062A|\u0634\u0627\u0631|\u0645\u0634\u0627| \u0645\u0634|\u062C\u0627\u062F|\u0631\u06AC\u0627",
        skr: "\u062A\u06D2 |\u0627\u06BA |\u062F\u06CC |\u062F\u06D2 | \u06D4 |\u0648\u06BA | \u062A\u06D2| \u062F\u0627| \u06A9\u0648|\u06A9\u0648\u06BA| \u062D\u0642|\u062F\u0627 | \u062F\u06CC|\u06CC\u0627\u06BA| \u062F\u06D2|\u06CC\u06BA |\u06D2 \u0627|\u0634\u062E\u0635| \u0634\u062E|\u06C1\u0631 |\u06D2 \u06D4|\u0627\u0635\u0644| \u062D\u0627|\u062D\u0642 |\u062E\u0635 | \u06C1\u0631|\u0635\u0644 |\u062D\u0627\u0635|\u06C1\u06D2 | \u06C1\u06D2|\u0627\u0644 |\u0642 \u062D|\u0644 \u06C1| \u0646\u0627| \u06A9\u06CC| \u0648\u0686|\u06D4 \u06C1|\u06CC\u0627 |\u0633\u06CC |\u06D2 \u0645| \u0627\u0648|\u0648\u0686 |\u0627\u062A\u06D2|\u06A9\u06CC\u062A|\u0627 \u062D|\u0627\u062F\u06CC|\u0646\u0627\u0644|\u0635 \u06A9| \u0627\u062A|\u0631 \u0634|\u06C1\u06CC\u06BA| \u06CC\u0627|\u06BA \u062F| \u0627\u06CC|\u06CC\u0633\u06CC| \u0645\u0644|\u0648\u0646\u062F|\u06A9\u06C1\u06CC| \u06A9\u06C1|\u06CC \u062A|\u0632\u0627\u062F|\u0627\u0632\u0627| \u0627\u0632|\u0646\u062F\u06D2|\u06BA \u06A9|\u0627\u0631 | \u0648\u06CC|\u06D2 \u06A9|\u0626\u06D2 | \u0627\u0646|\u06BB \u062F|\u0646\u06C1 | \u06A9\u0631|\u0627\u0648\u0646|\u06D2 \u0648|\u062F\u06CC\u0627|\u06CC \u062F|\u06BA \u0627|\u06D2 \u0628|\u0648\u06CC\u0633|\u0648\u06BB |\u06CC \u0646| \u06C1\u0648|\u062A\u06CC |\u06CC \u06D4| \u0646\u06C1|\u06CC \u0627|\u06CC\u0646\u062F|\u0648 \u0684|\u0622\u067E\u06BB| \u0622\u067E|\u0627 \u0648|\u06D2 \u062C| \u06A9\u0646|\u06D2 \u0646|\u0646\u062F\u06CC|\u062A \u062F|\u06D2 \u062D|\u06CC \u06A9|\u0626\u06CC |\u0645\u0644\u06A9|\u06CC\u062A\u06D2|\u0646 \u06D4|\u062A\u06BE\u06CC| \u062A\u06BE|\u0648\u0646 |\u06BA \u0645| \u0628\u0686|\u06D4 \u0627|\u0646\u0648\u06BA|\u06A9\u0646\u0648|\u06BB\u06D2 |\u0627\u0631\u06CC|\u0627 \u0627|\u06D2 \u06C1|\u0644 \u062A| \u0684\u0626|\u0648\u0642 |\u0642\u0648\u0642|\u062D\u0642\u0648|\u0644 \u06A9|\u062E\u0644\u0627| \u062C\u06CC|\u0644\u06A9 |\u062F\u0627\u0631|\u06CC\u062A |\u06A9\u0631\u06BB|\u0627\u0646\u06C1|\u06A9\u0648 |\u06C1\u06A9\u0648| \u06C1\u06A9|\u0646 \u0627|\u0645\u0644 | \u0648\u0633|\u06BA \u0648|\u067E\u06BB\u06D2| \u062A\u0639|\u06CC \u0645|\u0627\u0641 |\u06D2 \u062E|\u0646\u0648\u0646|\u0642\u0646\u0648| \u0642\u0646| \u0644\u0648|\u06D4 \u06A9|\u0631\u06CC |\u0644\u06D2 |\u062A\u0627 |\u06CC\u062A\u0627| \u0642\u0648| \u0686\u0627|\u06C1\u0627\u06BA|\u0684\u0626\u06D2|\u0642 \u062A|\u0627\u06CC\u06C1|\u0631\u06BB |\u06D2 \u062F|\u0631 \u06A9| \u0648 |\u0644\u0627\u0641| \u062E\u0644| \u062C\u0648|\u06CC \u0648|\u0627\u0648 |\u06C1\u0648 |\u0626\u0648 |\u0686\u0626\u0648|\u0628\u0686\u0626|\u06CC\u0631 |\u06C1\u0648\u0648|\u0627 \u0645|\u06CC \u062C|\u0627\u0644\u0627|\u06CC\u0646 | \u062C\u0627|\u0645\u06CC |\u0646\u06C1\u0627|\u0627\u0646 |\u0627\u062A |\u0633\u06B1\u062F| \u0633\u06B1|\u06CC\u0628 |\u0633\u06CC\u0628|\u0648\u0633\u06CC| \u0634\u0627|\u0628 \u062F|\u06CC\u0648\u06BB|\u0627\u0645 |\u0627\u0648\u06BB|\u06D2 \u062A|\u06BB \u06A9| \u0645\u0637|\u06BA \u062A| \u0648\u0646| \u06A9\u0645|\u0646 \u062F|\u0631\u06A9\u06BE| \u0631\u06A9|\u06BB\u06CC |\u06BA \u0622|\u0631\u06CC\u0627|\u06CC \u06C1|\u0627\u062F |\u06CC\u0627\u062F|\u0639\u0644\u0627|\u0631 \u06C1|\u06BA \u0633|\u06CC \u062D|\u062C\u06BE\u06CC|\u0627\u0626\u062F|\u06C1\u06CC |\u0644\u0648\u06A9| \u068B\u0648| \u0633\u0645| \u0633\u0627| \u0645\u0646| \u0645\u0639|\u0628\u0642 |\u0627\u0628\u0642|\u0637\u0627\u0628|\u0645\u0637\u0627|\u06BE\u06CC\u0648|\u06BA \u0641|\u06C1\u0646 | \u06C1\u0646|\u062C\u0648 |\u0648 \u06A9|\u06BA \u0634|\u0631 \u062A|\u06A9\u0627\u0631|\u0645 \u062F|\u06BE\u06CC\u0627| \u067B\u0627|\u063A\u06CC\u0631|\u0648 \u0644|\u0648\u0626\u06CC|\u062C\u06CC\u0627|\u0648\u0627\u0645|\u0642\u0648\u0627|\u06CC \u0633| \u062C\u06BE|\u0644 \u0627|\u0642\u0648\u0645| \u0633\u06CC|\u0630\u06C1\u0628|\u0645\u0630\u06C1| \u0645\u0630|\u0627\u06D2 | \u0627\u06D2|\u062F\u0646 |\u0627 \u062A|\u0633\u0627\u0646|\u0646\u0633\u0627|\u0627\u0646\u0633|\u0631\u06D2 |\u0644\u06CC\u0645|\u0639\u0644\u06CC|\u062A\u0639\u0644|\u0627\u0645\u0644|\u06C1 \u062F|\u06D2 \u0631|\u062F \u0627|\u06A9\u0645 |\u06CC\u06C1\u0648|\u0641\u0627\u0626|\u0686 \u0627| \u06A9\u06BE|\u0645 \u062A|\u0631\u0627 |\u0648\u0631\u0627|\u067E\u0648\u0631|\u06BA \u0628|\u0642 \u062F|\u06D2 \u0642|\u0648\u06A9\u0648|\u06A9\u06BE\u06CC|\u0627 \u06A9|\u0648 \u062F|\u06D2 \u0630|\u067E\u06BB\u06CC|\u0628\u0646\u062F| \u0641\u0631|\u06A9\u0648\u0626|\u0627\u0645\u06CC|\u06CC \u06CC|\u0627\u0626\u06CC|\u0644\u0627\u0642|\u0627\u06CC\u06BA|\u06C1 \u0627| \u0646\u0638|\u0633\u0645\u0627|\u0648\u0645\u06CC|\u06CC\u060C |\u06D2 \u0633|\u062A \u0648|\u06BE\u06CC\u0646|\u06D2 \u0639|\u06CC\u0645 |\u0633\u06C1\u0648| \u0633\u06C1",
        pbu: " \u062F | \u0627\u0648|\u0627\u0648 |\u067E\u0647 | \u067E\u0647|\u064A\u06D4 | \u062D\u0642|\u0686\u06D0 | \u0686\u06D0|\u0631\u0647 |\u064A \u0627|\u06D0 \u062F| \u0647\u0631|\u0646\u0647 |\u0647\u0631 |\u062D\u0642 | \u0685\u0648|\u0648\u06A9 |\u0685\u0648\u06A9|\u0648 \u0627|\u0647 \u062F|\u0647 \u0627|\u06D4 \u0647|\u0647 \u0648| \u0634\u064A| \u0644\u0631|\u064A \u0686|\u0648 \u062F|\u0631\u064A |\u0644\u0631\u064A|\u0642 \u0644| \u06A9\u069A|\u0648\u064A |\u069A\u06D0 |\u06A9\u069A\u06D0|\u0647 \u06A9|\u063A\u0647 |\u0644\u0648 |\u0631 \u0685|\u0633\u0631\u0647| \u0633\u0631|\u0647 \u067E| \u067C\u0648|\u0648 \u067E|\u0644\u0647 |\u064A\u062A |\u067C\u0648\u0644|\u064A\u0627 |\u06A9\u0693\u064A| \u06A9\u0648|\u062E\u0647 |\u064A\u060C |\u062F\u064A | \u0644\u0647| \u0627\u0632|\u062F \u0645| \u0647\u064A| \u0648\u0627| \u064A\u0627| \u0685\u062E|\u0627\u0632\u0627|\u062F \u0627|\u0648\u0644\u0648|\u0647 \u062A|\u0685\u062E\u0647| \u06A9\u0693|\u0648\u0644 |\u0647\u063A\u0647|\u0647 \u0634|\u064A \u062F| \u0647\u063A|\u06A9\u0648\u0644|\u0632\u0627\u062F|\u0646\u0648 | \u0648\u064A|\u0648 \u064A|\u0647 \u0628|\u0634\u064A\u06D4|\u062F\u06D0 |\u064A\u0648 | \u062F\u064A|\u062A\u0647 |\u062E\u067E\u0644| \u067E\u0631|\u0627\u062F |\u062F \u062F|\u06A9 \u062D| \u062A\u0648|\u0647 \u0645|\u06AB\u0647 |\u0647 \u0647|\u0642\u0648\u0642|\u062D\u0642\u0648|\u0648 \u0645|\u0647 \u062D|\u062F \u0647| \u062A\u0631| \u0645\u0633|\u0634\u064A | \u0646\u0647|\u0693\u064A\u06D4|\u0646\u064A |\u062F \u067E|\u0648\u0627\u062F|\u06D0 \u067E|\u0627\u062F\u064A|\u0648\u0644\u0646| \u064A\u0648|\u062F \u062A|\u0648\u0646\u0648|\u0648\u06AB\u0647|\u064A \u0648|\u0644\u064A | \u062F\u0627|\u064A\u062F | \u0628\u0627|\u062A\u0648\u0646| \u062E\u067E|\u064A \u067E|\u062A\u0648\u06AB|\u0627\u0631 |\u0627\u0646\u062F|\u064A\u0648\u0627|\u06D0 \u0648|\u062F\u0627\u0646| \u0628\u0631|\u0693\u064A | \u0639\u0645|\u0627\u0646\u0647| \u062F\u0647|\u064A\u0685 |\u0647\u064A\u0685|\u0627\u0645\u064A|\u0644\u0646\u064A|\u0628\u0639\u064A|\u0689\u0648\u0644| \u0689\u0648|\u0647 \u0644|\u0627\u064A\u062F|\u0628\u0627\u064A|\u0627\u062A\u0648|\u0647 \u06AB| \u062A\u0627|\u067E\u0644 | \u0645\u0644|\u0627\u064A\u062A|\u0648\u0645 |\u0648\u0646 | \u0644\u0627|\u0647\u064A\u0648| \u0634\u0648| \u062F\u063A|\u0645 \u062F|\u062F\u0647 |\u06D0 \u0627|\u0627\u0646 | \u062A\u0647|\u06A9\u0627\u0631|\u062A\u0648 |\u0645\u064A |\u0627\u0631\u0647|\u0627\u0648\u064A|\u0633\u0627\u0648|\u0645\u0633\u0627|\u0646\u0648\u0646|\u062F\u0647\u063A|\u0648 \u062A|\u064A \u0634|\u0627\u0646\u0648| \u0645\u062D|\u064A\u0646 |\u0627\u062E\u0644| \u06AB\u067C|\u0634\u0648\u064A|\u062F\u063A\u0647|\u0648 \u062D|\u0648\u064A\u060C|\u0646\u064A\u0632|\u0633\u064A |\u0627\u0633\u064A|\u0648\u0646\u062F|\u0642\u0648 |\u0648\u0642\u0648|\u0648 \u06A9|\u0648\u0646\u0647|\u0648\u0645\u064A| \u0648\u06A9|\u064A \u062A| \u0627\u0646|\u0642\u0627\u0646|\u0646\u062F\u06D0|\u0648 \u0631|\u06A9 \u062F|\u0647 \u064A|\u0645\u064A\u0646|\u067E\u0631 |\u067C\u0647 |\u0644\u0627\u0645|\u063A\u0648 |\u0647\u063A\u0648|\u062F \u067C|\u0648 \u0647|\u0644 \u062A|\u0644\u06D2 |\u0648\u0644\u06D2|\u0648\u0648\u0646|\u06A9\u064A |\u0631\u0648 |\u0646 \u06A9|\u0645\u0648\u0645|\u0648\u06A9\u0693|\u067E\u0627\u0631|\u0646 \u0634|\u0645\u0646 | \u0646\u0648| \u0648\u0693| \u0642\u0627|\u06D0 \u0686| \u0648\u0633|\u0685 \u0685|\u0634\u062E\u0635| \u0634\u062E|\u0698\u0648\u0646| \u0698\u0648|\u062A\u0631 |\u06AB\u067C\u0647|\u0648 \u0685|\u0647\u0645 |\u0639\u0642\u064A|\u0631\u062A\u0647| \u0648\u0631|\u0628\u0644 | \u0628\u0644|\u0648 \u0628|\u0647 \u0633|\u069A\u0648\u0648| \u069A\u0648| \u06A9\u0627|\u06D0 \u06A9|\u0648 \u0633|\u0627\u062F\u0647|\u0648\u0646\u06A9| \u063A\u0648|\u062F\u0648 |\u0648 \u0646|\u062A \u06A9|\u0645\u0644 |\u0639\u0645\u0648|\u0644 \u0647| \u067E\u064A|\u0648\u0633\u064A|\u0693\u0627\u0646|\u0648\u0693\u0627|\u064A\u0632 |\u062E\u0635\u064A|\u064A \u0645|\u0627 \u0628|\u0627\u062F\u0627|\u0647 \u0646|\u062E\u0644\u064A|\u0648\u0627\u062E|\u062F\u064A\u0648|\u060C \u062F|\u062F \u0642| \u0647\u0645|\u0627 \u062F| \u0628\u064A|\u062A\u0628\u0639| \u062A\u0628|\u0647 \u0686| \u0639\u0642|\u067E\u0644\u0648|\u0648 \u0644| \u0631\u0627|\u062F \u0628|\u0631\u0627\u064A| \u062F\u062E|\u0646\u06D0 |\u0646\u06A9\u064A|\u062A \u062F|\u0627\u0628\u0639| \u0645\u0642|\u062F \u062E|\u0648\u0631\u0647|\u0634\u0631\u0627| \u0634\u0631|\u0631 \u0645|\u0631\u0633\u0631|\u062A\u0627\u0645|\u0647 \u067C| \u0645\u0646|\u0637\u0647 |\u0633\u0637\u0647|\u0627\u0633\u0637|\u0648\u0627\u0633|\u0644\u06D0 | \u0627\u0633|\u06D4 \u062F|\u0628\u0631\u062E|\u06D0 \u0646",
        uig: " \u0626\u0627| \u06BE\u06D5|\u06D5 \u0626|\u0649\u0646\u0649| \u0628\u0648|\u0649\u0644\u0649| \u0626\u0649|\u0628\u0648\u0644| \u06CB\u06D5|\u06CB\u06D5 |\u0649\u0646 |\u0646\u0649\u06AD|\u0642\u06C7\u0642|\u0648\u0642\u06C7|\u06BE\u0648\u0642| \u06BE\u0648|\u0634\u0642\u0627|\u0642\u0649\u0644|\u0649\u06AD |\u0646\u0649 |\u0642\u0627 |\u0644\u0649\u0634|\u0646 \u0628|\u06D5\u0646 |\u0626\u0627\u062F|\u06BE\u06D5\u0645|\u0644\u0649\u0643|\u062F\u06D5\u0645| \u0642\u0649|\u0627\u062F\u06D5| \u0626\u06D5|\u0643\u0649 |\u0646\u062F\u0627|\u062F\u0649\u0646|\u0642\u0627\u0646|\u0649 \u0626|\u06AF\u06D5 |\u06D5\u0645 |\u0649\u0634 |\u0649\u064A |\u06C7\u0642 | \u0628\u0649|\u063A\u0627\u0646|\u0649\u063A\u0627|\u0627\u0646\u062F|\u062A\u0649\u0646|\u0649\u06AF\u06D5|\u0648\u0644\u06C7|\u06D5\u062A |\u06BE\u06D5\u0631|\u0649\u0634\u0649|\u0643\u0649\u0646|\u0649\u062F\u0649|\u0627\u0642 |\u0649\u062A\u0649|\u0644\u06C7\u0642|\u06D5\u0631\u0642|\u0649\u0643\u0649|\u0645\u06D5 |\u0644\u06D5\u062A| \u064A\u0627|\u0644\u06C7\u0634|\u0644\u0649\u0642|\u0645\u0645\u06D5|\u06D5\u0645\u0645| \u0626\u06C6|\u062F\u0627\u0642|\u0631\u0642\u0627| \u062A\u06D5| \u0642\u0627| \u0628\u0627|\u0649\u0634\u0642|\u0627\u0643\u0649|\u063A\u0627 |\u06C7\u0642\u0644|\u0627 \u06BE|\u064A\u0627\u0643|\u0645\u06D5\u0646|\u0631\u0649\u0645| \u0628\u06D5|\u0627 \u0626|\u062F\u06D5 |\u0626\u06D5\u0631|\u0642\u0644\u06C7|\u062F\u06C7 |\u062F\u06C6\u0644| \u062F\u06C6|\u0649\u0644\u06D5|\u0627\u0646 |\u0642 \u06BE|\u0631\u0643\u0649|\u06D5\u0631\u0643|\u06C7\u0642\u0649| \u0645\u06D5|\u0649 \u0628|\u0649\u0645\u06D5|\u06D5\u06BE\u0631|\u0646\u0644\u0649|\u0649\u0642 |\u0646 \u0626|\u0627\u0631\u0627|\u0626\u06C6\u0632|\u0649 \u06CB|\u06C6\u0644\u06D5|\u06BE\u0631\u0649|\u0627\u0631 |\u0644\u0627\u0631| \u0626\u06D0|\u0628\u06D5\u06BE|\u0644\u06D5\u0646|\u0644\u063A\u0627|\u0634 \u06BE|\u0649\u0644\u0627|\u06C7\u0634\u0642|\u0634\u0649 |\u0646\u0649\u0634|\u0642 \u0626|\u0626\u0627\u0631|\u0644\u0649\u0646|\u0628\u0649\u0644| \u0626\u06C7|\u0627 \u0628|\u0627\u064A\u062F|\u0645\u0627\u064A|\u0643\u06D5 |\u0648\u0644\u0645|\u064A\u062F\u06C7|\u0626\u0649\u064A| \u0643\u06D0|\u0627\u0633\u0649| \u0645\u06C7|\u06D5 \u0642|\u06D5\u0631 |\u060C \u0626|\u0649\u0646\u0644|\u064A\u06D5\u062A|\u0649\u0643 |\u0644\u0645\u0627| \u0626\u0648|\u0645 \u0626|\u06D0\u0644\u0649|\u0645\u0627\u0626|\u06D5 \u0628|\u0626\u0649\u06AF|\u062A\u0646\u0649|\u0627\u060C |\u0634 \u0626|\u06C7 \u06BE|\u0634\u0643\u06D5|\u0627\u0644\u0649|\u06AD \u0626|\u0627\u0631\u0649|\u06D5\u0643 | \u0642\u0648|\u0633\u0649\u064A|\u0631\u0644\u0649|\u0649 \u0643|\u0628\u0649\u0631|\u06D5\u0645\u062F|\u06D5 \u06BE|\u0644\u06D5\u0631|\u06C6\u0632\u0649|\u0626\u0627\u0644|\u0649\u064A\u06D5|\u0645\u0646\u0649|\u06D5\u062A\u062A|\u0627\u0626\u0649|\u0634\u0644\u0649|\u0645\u062F\u06D5| \u062A\u06C7|\u0628\u0627\u0631|\u06D5\u0634\u0643|\u06D5\u062A\u0644|\u0644\u0649\u062F|\u0643\u0649\u0644|\u0626\u0649\u0634|\u0642\u0649\u063A|\u0686\u06D5 |\u06C7\u0634\u0649|\u0649\u0645\u0627|\u0627\u0634\u0642| \u062C\u0649|\u0631\u06D5\u0643|\u06D0\u0631\u06D5|\u0643\u06D0\u0631|\u0631 \u0626|\u0631 \u0628|\u0631\u0627\u06CB|\u0646\u060C |\u0627\u06CB\u0627| \u0645\u0627|\u0627\u064A\u0649|\u0627\u062F\u0649|\u062A\u06C7\u0631|\u0646\u06C7\u0646|\u0627\u0646\u06C7|\u06D0\u062A\u0649|\u062A\u0649\u0634|\u0649\u0634\u0644|\u062F\u0627 |\u0649\u062F\u0627|\u06C7\u0631\u06C7|\u0642\u0649 | \u062C\u06D5|\u0628\u0627\u0634|\u062C\u0649\u0646|\u0649\u060C | \u0633\u0627| \u062E\u0649|\u06D0\u0631\u0649|\u0646\u0627\u064A|\u0649\u0646\u0627|\u0649 \u06BE|\u0632\u0649\u0646|\u06D5 \u062A|\u0649 \u0642|\u06D5\u0645\u0646| \u0628\u06C7|\u0631\u0646\u0649|\u0646 \u0642|\u062A\u062A\u0649|\u062A\u0649 |\u0649\u0642\u0649|\u0649 \u064A|\u0643 \u06BE|\u0649\u0631\u0649|\u0627\u0626\u0627|\u064A \u0626|\u062A\u06D5\u0634|\u0634\u0649\u0634|\u0644\u06D5\u0634|\u062F\u0649\u0644|\u062A\u0649\u062F|\u062F\u0627\u060C|\u0633\u0627\u0633|\u0627\u0633\u0627|\u06D5 \u0645|\u0633\u0649\u062A|\u067E \u0642|\u0626\u06D0\u0644|\u0646\u0649\u064A|\u0646 \u06CB|\u0633\u0649\u0632|\u0649\u0633\u0649|\u0649\u0644 |\u0627\u0634 |\u064A\u060C |\u0645\u0649\u0646|\u06C7\u0646\u0649|\u0649\u067E |\u062A\u0649\u0645|\u06D5\u0644\u0649|\u0631\u0649\u0634|\u0649\u064A\u0627|\u06C7\u0634 |\u0645\u06C7\u0634| \u062E\u0627|\u0649\u0631 |\u0645\u06D5\u062A| \u062A\u0627| \u067E\u0627|\u062A\u0644\u06D5|\u0627\u0644\u063A|\u0644\u0649\u0645|\u067E\u0627\u0644|\u0627\u067E\u0627|\u0643\u0627\u067E| \u0643\u0627|\u0627\u0646\u0644|\u06AD \u06BE|\u06C7\u0646\u062F| \u062A\u0648|\u0642\u062A\u0649|\u0627\u0644\u06D5|\u0646 \u06BE|\u06D5 \u062F|\u062C\u062A\u0649|\u0649\u062C\u062A|\u0626\u0649\u062C|\u0631\u0642\u0649|\u0649\u064A\u0649|\u0627\u0631\u0644|\u0627\u0645\u0649| \u06BE\u06C6| \u0628\u06D0|\u06D5\u062A\u0646|\u0627\u062A\u0646|\u0649\u0643\u0627|\u064A \u0645|\u0627\u062A\u0649|\u0634\u0643\u0649|\u0633\u0649 | \u0626\u06C8|\u06D5\u060C |\u062A \u0626|\u06AF\u06D5\u0646| \u062F\u06D5|\u0642 \u0642|\u0648\u0644\u063A|\u0642 \u0628",
        prs: " \u0648 | \u062D\u0642|\u0631\u062F | \u0628\u0627|\u0646\u062F |\u062F\u0627\u0631| \u062F\u0627| \u062F\u0631|\u0647\u0631 |\u06A9\u0647 | \u0647\u0631|\u062F\u0631 | \u06A9\u0647|\u062F \u0647| \u0628\u0647|\u062D\u0642 |\u0631 \u06A9| \u0627\u0632|\u0627\u0632 |\u06CC\u062A |\u0628\u0647 |\u06A9\u0633 |\u0648\u062F | \u06A9\u0633|\u06CC\u0627 |\u0627\u0631\u062F| \u06CC\u0627| \u0628\u0631|\u062F \u0648|\u0642 \u062F|\u062F \u06A9| \u0631\u0627|\u0627\u0631 |\u0627\u06CC | \u062E\u0648| \u0627\u0633|\u0647 \u0628|\u0628\u0627\u0634|\u06CC\u062F |\u0622\u0632\u0627| \u0622\u0632|\u0631\u0627 |\u06CC\u0646 |\u0627\u0646 |\u0647 \u062F|\u0632\u0627\u062F|\u0627\u0634\u062F|\u06CC \u0648|\u0647 \u0627|\u0627\u06CC\u062F|\u0633 \u062D|\u062F\u0647 |\u062F \u0628|\u06CC \u0628|\u0627\u0633\u062A|\u062E\u0648\u062F| \u0622\u0646|\u0634\u062F |\u0648\u0631 | \u0647\u0645|\u062A\u0645\u0627|\u06CC \u0627|\u0627\u062A |\u0631 \u0627|\u0627\u062F\u06CC|\u0646\u0647 |\u0631\u06CC |\u0631\u0627\u06CC|\u0648 \u0627|\u0648 \u0645| \u0646\u0645|\u06CC \u06A9| \u0645\u0648| \u0627\u062C|\u062F\u060C |\u0645\u0627\u06CC|\u0648\u0646 |\u0628\u0631\u0627|\u0642\u0648\u0642|\u062D\u0642\u0648| \u0634\u0648| \u0627\u0646|\u0627\u0646\u0647| \u0645\u0633|\u0647 \u0645|\u0631 \u0628|\u0648\u0642 |\u0627\u06CC\u062A|\u0622\u0646 |\u0647\u0627\u06CC|\u0631 \u0645|\u0647\u06CC\u0686| \u0647\u06CC| \u062A\u0627|\u0647 \u0648|\u0648\u0631\u062F|\u0634\u0648\u062F|\u0627\u0646\u0648|\u0633\u062A | \u0628\u06CC|\u0627\u0645 |\u0648\u0627\u0646|\u06CC\u06AF\u0631|\u0628\u0627 | \u0645\u0631|\u0646 \u0627|\u06CC \u062F|\u062F\u06CC |\u06CC \u0645|\u062F \u0622|\u0631 \u0634|\u0645\u0627\u0639|\u062C\u062A\u0645|\u0627\u062C\u062A|\u06CC \u06CC|\u0633\u06CC | \u06A9\u0646|\u062F\u06CC\u06AF|\u0628\u0627\u06CC|\u062A \u0648|\u0639\u06CC |\u06A9\u0646\u062F|\u062A \u0645|\u062A \u0627| \u0645\u0646|\u0645\u0648\u0631| \u0639\u0645|\u0648 \u062F|\u0631 \u062E|\u0627\u0647 |\u0644\u06CC |\u0627 \u0628|\u0628\u0631 |\u0646\u06CC | \u0634\u062F|\u06CC\u060C |\u0627\u0639\u06CC| \u062F\u06CC|\u062A\u0648\u0627|\u062A \u0628|\u062F\u0627\u0646|\u06A9\u0627\u0631|\u062F \u0627|\u0646 \u0648| \u0634\u0631|\u0645\u06CC | \u06A9\u0627|\u0648 \u0622| \u062D\u0645|\u0633\u0627\u0648|\u0645\u0633\u0627|\u0646\u0648\u0646| \u0627\u0648| \u0632\u0646|\u062F \u0634| \u0645\u062D|\u0646 \u0628|\u0647 \u0634|\u0634\u0648\u0631|\u06A9\u0634\u0648| \u06A9\u0634|\u0627\u0631\u06CC|\u0645\u0644 |\u0628\u0639\u06CC|\u0645\u0646\u062F|\u06CC\u06CC | \u0645\u0644|\u06CC \u0631|\u0648 \u0628|\u062F \u0645|\u0648\u06CC |\u0642\u0627\u0646| \u0642\u0627| \u0645\u0642|\u0627\u0648 |\u0627\u0646\u06CC|\u06AF\u06CC |\u0627\u06CC\u0646| \u0627\u06CC|\u0645\u06CC\u0646|\u0627\u062F\u0627| \u0622\u0645|\u062E\u0648\u0627|\u06AF\u0631\u062F| \u06AF\u0631|\u0647 \u062D|\u060C \u0627|\u0632 \u062D|\u0645\u06CC\u062A|\u0631\u0646\u062F|\u0627 \u0647|\u06CC\u0644 |\u0627\u062F\u0647|\u0646\u0645\u0627|\u0642 \u0645|\u062A \u06A9|\u0631\u0627\u0646|\u0646 \u062D|\u062F \u062F|\u062D\u0645\u0627|\u0627\u0631\u0646|\u0627\u0648\u06CC|\u0627\u0646\u062A|\u0634\u062F\u060C|\u0686\u06A9\u0633|\u06CC\u0686\u06A9|\u062F\u06AF\u06CC|\u0648\u0645\u06CC|\u0645\u0644\u0644|\u0647\u062F |\u0648\u0627\u0647|\u200C\u0645\u0646|\u0647\u200C\u0645|\u0631\u0647\u200C|\u0647\u0631\u0647|\u0628\u0647\u0631|\u060C \u0628|\u06CC\u0647 | \u0627\u0639|\u062F\u06CC\u0647|\u0642 \u0648|\u0639\u06CC\u062A|\u0647\u0654 |\u0627 \u0631| \u0639\u0642|\u0647\u0645\u0647|\u0627\u0628\u0631|\u0631\u0627\u0628| \u0645\u06CC|\u0627 \u0645|\u0632\u0634 |\u0648\u0632\u0634|\u0645\u0648\u0632|\u0622\u0645\u0648|\u0627 \u062F|\u062F\u0648\u0627|\u062A\u06CC |\u062C\u0627\u0645|\u0645\u0648\u0645|\u0639\u0645\u0648| \u0645\u062A| \u0648\u0633| \u0641\u0631|\u0642 \u0627|\u0631 \u062A|\u0645\u0642\u0627|\u06CC\u06A9 |\u0646\u0648\u0627|\u0631\u0627\u0631|\u0646\u0645\u06CC|\u0632\u0646\u062F|\u0634\u062E\u0635| \u0634\u062E|\u0627\u06CC\u06CC|\u062A\u060C |\u0648 \u0647|\u0627\u0633\u06CC|\u06CC\u062F\u0647|\u0639\u0642\u06CC|\u0627\u064B | \u0628\u062F|\u06CC\u062A\u0648|\u0645\u0647 | \u062A\u0645|\u0631\u0634 |\u0637\u0648\u0631|\u0627\u0632\u062F|\u06CC \u062D|\u0627\u0628\u0639|\u06CC \u062A|\u062E\u0627\u0628|\u062A\u062E\u0627|\u0646\u062A\u062E|\u0631\u0648\u0631|\u0648 \u0631|\u0634\u0631\u0627| \u062E\u0627|\u0627\u0628 |\u0654\u0645\u06CC|\u0627\u0654\u0645|\u062A\u0627\u0654|\u200C\u0647\u0627|\u06CC\u0631\u062F|\u0648 \u06CC|\u0627\u0645\u0644|\u0644\u0647 |\u0627\u0633\u0627|\u0631\u062F\u0627|\u062E\u0648\u0631|\u0627 \u0627|\u0633\u0627\u0646|\u0642\u0631\u0627| \u0645\u062C|\u06CC \u0646|\u0627 \u0646|\u06A9\u0633\u06CC|\u062E\u0635\u06CC| \u0627\u0645|\u0646\u062F\u06AF|\u062F\u0648\u062F"
    },
    Devanagari: {
        hin: "\u0915\u0947 |\u092A\u094D\u0930| \u092A\u094D| \u0915\u093E| \u0915\u0947| \u0964 |\u0914\u0930 | \u0914\u0930|\u0915\u093E | \u0915\u094B|\u0915\u093E\u0930|\u093E\u0930 |\u0924\u093F |\u092F\u093E |\u0915\u094B |\u0928\u0947 |\u094B\u0902 |\u093F\u0915\u093E|\u094D\u0930\u0924| \u0939\u0948| \u0915\u093F|\u0902 \u0915|\u0939\u0948 |\u0927\u093F\u0915|\u0935\u094D\u092F|\u0905\u0927\u093F| \u0905\u0927|\u094D\u0924\u093F| \u0938\u092E|\u094D\u092F\u0915|\u093F \u0915|\u0915\u094D\u0924|\u093E \u0905|\u0915\u0940 |\u093E \u0915| \u0935\u094D|\u0947\u0902 | \u0939\u094B|\u092F\u0915\u094D|\u0938\u0940 |\u0938\u0947 |\u0947 \u0915| \u092F\u093E| \u0915\u0940|\u092E\u0947\u0902|\u0928\u094D\u0924| \u092E\u0947|\u0924\u094D\u092F|\u0948 \u0964|\u0924\u093E |\u0930\u0924\u094D|\u0915\u094D\u0937|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0915 |\u0930 \u0939|\u092D\u0940 |\u0915\u093F\u0938| \u091C\u093E| \u0938\u094D|\u0915 \u0935|\u093E \u091C|\u093F\u0938\u0940|\u092E\u093E\u0928| \u0935\u093F|\u0930 \u0938|\u0924\u094D\u0930|\u0940 \u0938|\u0964 \u092A| \u0915\u0930|\u094D\u0930\u093E|\u0917\u093E |\u093F\u0924 | \u0905\u092A| \u092A\u0930|\u0938\u094D\u0935|\u0940 \u0915| \u0938\u0947|\u093E \u0938|\u094D\u092F | \u0905\u0928|\u094D\u0924\u094D|\u093F\u092F\u093E|\u093E \u0939| \u0938\u093E|\u0928\u093E |\u094D\u0924 |\u092A\u094D\u0924|\u0938\u092E\u093E|\u093E\u0928 |\u0930 \u0915|\u093E\u092A\u094D|\u0924\u0928\u094D| \u092D\u0940| \u0909\u0938|\u0930\u093E\u092A|\u0935\u0924\u0928|\u094D\u0935\u0924|\u0930\u094B\u0902|\u0935\u093E\u0930|\u0947 \u0938|\u0925\u093E |\u0939\u094B |\u0947 \u0905|\u093E \u0964|\u0928 \u0915| \u0928 |\u0926\u0947\u0936| \u0930\u093E|\u0937\u093E |\u0905\u0928\u094D|\u0924 \u0939|\u094D\u0937\u093E|\u094D\u0935\u093E|\u091C\u093E\u090F|\u0940 \u092A|\u0915\u0930\u0928|\u093E \u092A|\u0905\u092A\u0928|\u0937\u094D\u091F| \u0938\u0902|\u0947 \u0935|\u0939\u094B\u0917|\u093F\u0935\u093E|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0938\u0915\u0947| \u092E\u093E|\u0913\u0902 |\u093E\u0913\u0902|\u0930\u0940 |\u0915 \u0938|\u0947 \u092A| \u0928\u093F|\u0940\u092F |\u0930\u0915\u094D|\u094B \u0938|\u093E\u090F\u0917|\u0930\u0928\u0947| \u0907\u0938|\u0935 \u0915|\u092A\u0930 |\u0930\u0924\u093E|\u0930 \u0905| \u0938\u092D|\u0924\u0925\u093E| \u0924\u0925| \u0910\u0938|\u0930\u093E |\u092A\u0928\u0947|\u094D\u0930\u0940|\u093F\u0915\u094D|\u0915\u093F\u092F|\u093E \u0935|\u092E\u093E\u091C|\u0902 \u0914|\u0930 \u0909|\u0926\u094D\u0927|\u0938\u092D\u0940|\u0936\u094D\u092F| \u091C\u093F|\u093E\u0928\u0947|\u093E\u0930\u094D|\u093E\u0930\u093E|\u0926\u094D\u0935| \u0926\u094D|\u090F\u0917\u093E|\u0938\u092E\u094D|\u0947\u0936 |\u093F\u090F |\u093E\u0935 |\u0930 \u092A| \u0926\u0947|\u094D\u0924\u0930|\u093E \u0914|\u093E\u0930\u094B|\u092F\u094B\u0902|\u092A\u0930\u093E|\u092A\u0942\u0930|\u091A\u093F\u0924|\u094D\u0927 |\u0930\u0942\u092A| \u0930\u0942| \u0938\u0941| \u0932\u093F|\u0924 \u0915|\u094B \u092A|\u0902 \u0938|\u0947 \u0932|\u0936\u093F\u0915| \u0936\u093F|\u0935\u093E\u0939|\u0947 \u0914|\u091C\u094B |\u0930\u093E\u0927|\u091C\u093F\u0938|\u0942\u0930\u094D|\u0940 \u092D|\u0942\u092A |\u094B\u0917\u093E|\u0938\u094D\u0925|\u0930\u0940\u092F|\u0924\u093F\u0915|\u094D\u0930 |\u0964 \u0907|\u0907\u0938 | \u0909\u0928|\u0932\u0947 |\u0947 \u092E|\u0932\u093F\u090F|\u092E \u0915|\u0915\u0924\u093E|\u0947 \u092F| \u091C\u094B|\u0928 \u092E|\u0905\u092A\u0930| \u092A\u0942|\u094B \u0915|\u093E \u0909|\u093E\u0939 |\u0928\u0942\u0928|\u093E\u0928\u0942|\u0917\u0940 |\u0926\u0940 |\u093E\u0930\u0940|\u0902 \u092E|\u0964 \u0915|\u0924\u0930\u094D|\u0940 \u0930|\u0936 \u0915|\u092A\u0930\u093F|\u0938\u094D\u0924|\u094B\u0908 |\u0915\u094B\u0908|\u0930\u094D\u092F|\u0940 \u0905|\u0939\u093F\u0924|\u092D\u093E\u0935| \u092D\u093E|\u0924\u093E\u0913|\u093E\u0938 |\u0938\u093E\u092E|\u0935\u093F\u0915|\u0935\u093F\u0935|\u092E\u094D\u092E| \u0938\u0915|\u0915\u0930 |\u093E\u0928\u093E|\u0927 \u0915|\u0928\u093F\u0915|\u092F \u0915|\u0909\u0938\u0915|\u0915\u0943\u0924| \u0958\u093E|\u0928 \u0938|\u091C\u0940\u0935|\u094D\u092F\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u093E\u091C |\u0928\u094D\u092F|\u094D\u092E |\u0930\u094D\u0923|\u0958 \u0939|\u0939\u0958 | \u0939\u0958|\u0940 \u092E|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0915 \u0914|\u092E\u093F\u0932|\u0947\u0928\u0947|\u0932\u0947\u0928| \u0932\u0947|\u092F\u0947 |\u094B \u0905|\u0947 \u091C|\u0930\u093F\u0935|\u092E\u092F |\u0938\u092E\u092F|\u0935\u0936\u094D|\u0906\u0935\u0936| \u0906\u0935|\u0910\u0938\u0940|\u093E\u0927 |\u0930 \u0926|\u0930\u094D\u0935|\u0938\u093E\u0930|\u092A \u0938|\u092C\u0928\u094D| \u0938\u0939|\u093F\u0927\u093E|\u0935\u093F\u0927|\u0940 \u0928|\u0942\u0928 |\u0958\u093E\u0928",
        mar: "\u094D\u092F\u093E|\u092F\u093E |\u0924\u094D\u092F|\u092F\u093E\u091A|\u091A\u093E |\u0923\u094D\u092F|\u093E\u091A\u093E| \u0935 |\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u093F\u0915\u093E|\u0927\u093F\u0915|\u093E\u0930 | \u0905\u0927|\u0905\u0927\u093F|\u091A\u094D\u092F|\u0906\u0939\u0947| \u0906\u0939|\u093E \u0905|\u0939\u0947 |\u093E \u0915|\u093E\u0938 |\u0935\u093E |\u094D\u092F\u0947|\u094D\u0930\u0924| \u0938\u094D|\u0924\u093E |\u093E \u0938| \u0905\u0938| \u0915\u0930|\u0938\u094D\u0935| \u0915\u093E|\u0932\u094D\u092F|\u0930\u0924\u094D|\u093E\u0939\u093F|\u0915\u094B\u0923| \u0915\u094B|\u093F\u0915 |\u092F\u0947\u0915|\u094D\u0935\u093E|\u093E \u0935| \u0924\u094D|\u0930 \u0906|\u094D\u092F |\u0924\u094D\u0930|\u0947\u0915\u093E|\u0915\u094D\u0937|\u093E \u0928| \u0938\u0902|\u093E\u092E\u093E|\u093E\u091A\u094D|\u0902\u0935\u093E|\u093F\u0902\u0935|\u0915\u093F\u0902| \u0915\u093F|\u093E\u0924 |\u0937\u094D\u091F|\u0915\u093E\u0938| \u092F\u093E|\u092F\u093E\u0902|\u093E\u0902\u091A|\u0930\u094D\u092F|\u092E\u093F\u0933| \u092E\u093F| \u0938\u093E|\u0935\u094D\u092F|\u094B\u0923\u0924|\u0928\u0947 |\u0947 \u092A|\u0915\u093E\u092E| \u0938\u092E|\u0902\u0924\u094D|\u092F\u0947 | \u0930\u093E|\u0938\u092E\u093E|\u0924\u0902\u0924|\u0915\u0930\u0923|\u093E \u0906|\u0947 \u0915|\u0939\u093F |\u0947 \u0938|\u0928\u093E |\u093F\u0933\u0923|\u0942\u0928 |\u093E \u092A|\u091F\u094D\u0930|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0940\u092F |\u0935 \u0938|\u0915\u094D\u0924|\u092E\u093E\u0928|\u0930\u094D\u0935| \u0906\u092A|\u0933\u0923\u094D|\u094D\u0930\u094D|\u093E\u0924\u0902|\u0935\u093E\u0924|\u091A\u0947 | \u0935\u093F|\u094D\u0937\u0923|\u0930\u0923\u094D| \u0926\u0947| \u0935\u094D|\u0906\u092A\u0932|\u0939\u0940 |\u093E\u0930\u094D|\u0928\u092F\u0947| \u0928\u092F|\u092E\u093E |\u092F\u093E\u0938| \u091C\u093E|\u0932\u0947\u0932| \u0928\u093F|\u0947 \u0905| \u092A\u093E|\u093E \u092E|\u0932\u0947 |\u093E\u0939\u0940|\u092C\u0902\u0927|\u0947 \u0935|\u094D\u092F\u0915| \u092E\u093E|\u0936\u093F\u0915| \u0936\u093F|\u0926\u0947\u0936|\u093E \u0926|\u092E\u093E\u091C|\u094D\u0930\u0940|\u0932\u0940 |\u093E\u0928 |\u093E\u0902\u0928|\u092A\u0932\u094D| \u0939\u094B|\u093E \u0939|\u0937\u0923 |\u091C\u0947 |\u093F\u091C\u0947|\u0939\u093F\u091C|\u092A\u093E\u0939|\u093E\u0930\u093E|\u092F\u093E\u0924|\u0938\u0930\u094D| \u0938\u0930|\u0930\u093E\u0902|\u0905\u0938\u0932|\u0902\u092C\u0902|\u0938\u0902\u092C|\u093F\u0915\u094D|\u0940 \u092A|\u0902\u091A\u094D|\u0930\u0915\u094D|\u0923\u0924\u094D| \u0906\u0923|\u0932\u093E |\u0938\u094D\u0925|\u0930\u0940\u092F|\u0940\u0924 |\u0902\u0928\u093E|\u0924 \u0935|\u094D\u0935 |\u0915 \u0935|\u0923\u0947 |\u093E\u091A\u0947|\u0928 \u0915|\u0924 \u0915|\u0930\u0924\u093E|\u094D\u0930\u093E|\u092F\u093E\u0939|\u094D\u0924 |\u091A\u0940 |\u092F \u0915|\u0926\u094D\u0927|\u094D\u0935\u0924|\u092F\u0915\u094D|\u0923\u093F |\u0906\u0923\u093F|\u0938 \u0938|\u0902\u0927\u093E|\u0915 \u0938|\u091A\u094D\u091B|\u092F \u0905|\u0924 \u0938|\u0940\u0928\u0947|\u094B\u0923\u093E|\u0915\u0930\u0924|\u0924\u094D\u0935|\u0940\u0932 |\u0940 \u0905|\u0938\u093E\u0930|\u0930 \u0935|\u092D\u093E\u0935|\u0935 \u0924|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0947 \u0924|\u0947 \u091C|\u092F\u093E\u092F|\u0902\u091A\u093E|\u0947\u0932\u094D|\u093E\u0928\u0947|\u0947\u0923\u094D|\u0915 \u0906|\u0915\u094D\u0915|\u0939\u0915\u094D| \u0939\u0915|\u0923 \u092E|\u0902\u0930\u0915|\u0938\u0902\u0930|\u0928\u094D\u092F|\u093E\u092F\u0926|\u093E \u0924|\u0924 \u0906| \u0909\u092A|\u0935\u0938\u094D|\u093F\u0935\u093E|\u0947\u0936\u093E|\u0938\u093E\u092E|\u0947 \u092F|\u0947 \u0906|\u0940 \u0935|\u0935 \u092E|\u0924\u0940\u0928|\u0935 \u0906|\u0927\u094D\u092F| \u0905\u0936|\u0927\u093E\u0924|\u0915\u0943\u0924|\u094D\u0915 |\u0926\u094D\u092F|\u093F\u0924 |\u0938\u0932\u0947|\u0947\u0936 |\u0924\u094B |\u0947\u0932 |\u0924\u0940 |\u094D\u0924\u0940|\u0905\u0938\u0947|\u0907\u0924\u0930| \u0907\u0924|\u0938\u094D\u0924|\u0930\u094D\u0923|\u093E \u092C|\u0947\u0932\u0947| \u0915\u0947|\u0939\u0940\u0930|\u091C\u093E\u0939|\u093E \u091C|\u0947\u0924 |\u0942\u0930\u094D|\u092A\u0942\u0930|\u0947\u091A | \u0935\u093E|\u093E\u091C\u093E|\u0940 \u0938|\u0936\u093E |\u092F \u0935| \u0928\u094D|\u092F\u093E\u0935|\u0926\u094D\u0926|\u094D\u0927 |\u0930\u0942\u0928|\u092F\u0926\u094D|\u0915\u093E\u092F|\u093E \u0936|\u0917\u0923\u094D|\u0915 \u0915|\u0930\u093E\u0927| \u0936\u093E|\u092F\u0924\u094D|\u0932 \u0905|\u094D\u092F\u0935|\u0940 \u0915|\u093E\u0935 |\u093E \u092F|\u0924\u094D\u0924|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0930\u0923\u093E| \u0927\u0930|\u093E \u0927|\u092D\u0947\u0926| \u092C\u093E|\u0930\u0915\u093E|\u094D\u0930\u0915|\u0915\u0947\u0932|\u093F \u0935|\u093F\u0937\u094D|\u0924\u0940\u0932|\u092F\u094B\u0917|\u0938\u093E\u0927|\u093E\u0902\u0924|\u0935\u093F\u0935|\u0936\u094D\u0930| \u0927\u0947| \u092E\u0941|\u0935\u0924\u0903",
        mai: "\u093E\u0915 |\u092A\u094D\u0930|\u0915\u093E\u0930| \u092A\u094D|\u093E\u0930 |\u093F\u0915\u093E|\u094D\u092F\u0915|\u0927\u093F\u0915|\u0915 \u0905|\u094D\u0930\u0924|\u094D\u0924\u093F|\u0935\u094D\u092F| \u0905\u0927|\u0947\u0901 |\u0905\u0927\u093F|\u093F\u0915 | \u0935\u094D|\u0906\u02BC | \u0906\u02BC|\u0915\u094D\u0924|\u092F\u0915\u094D|\u0924\u093F\u0915|\u0915\u0947\u0901|\u0915 \u0935|\u092C\u093E\u0915|\u0915 \u0938|\u091B\u0948\u0915| \u091B\u0948|\u0924\u094D\u092F|\u092E\u0947 |\u0947\u0915 | \u0938\u092E|\u0915\u094D\u0937|\u0939\u093F |\u0930\u0924\u094D|\u0930 \u091B|\u092F\u0947\u0915|\u094D\u092F\u0947|\u0928\u094D\u0924|\u0935\u093E |\u093F\u0915\u0947|\u0915\u0964 |\u0948\u0915\u0964|\u0964 \u092A| \u0905\u092A| \u0938\u094D| \u0935\u093F| \u091C\u093E|\u093F\u0924 |\u0938\u0901 | \u0939\u094B|\u0915\u094B\u0928| \u0915\u094B|\u0924\u094D\u0930|\u0938\u094D\u0935| \u0935\u093E|\u0915 \u0906|\u0937\u094D\u091F| \u0915\u0930|\u0905\u092A\u0928|\u092E\u093E\u0928| \u0915\u093E| \u0905\u0928|\u0924\u093F |\u094D\u0924\u094D|\u0928\u094B |\u0928\u0939\u093F| \u092A\u0930|\u091F\u094D\u0930|\u094D\u092F | \u090F\u0939|\u093F \u0915|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u0930\u093E|\u0938\u092E\u093E|\u094B\u0928\u094B|\u0932 \u091C| \u0928\u0939|\u0924\u093E\u0915|\u093E\u0930\u094D|\u092A\u0928 |\u0924\u0928\u094D|\u0935\u0924\u0928|\u094D\u0935\u0924|\u094D\u0937\u093E| \u0915\u090F| \u0938\u093E|\u094D\u0930\u0940| \u0928\u093F|\u093E \u0906|\u093F\u0935\u093E| \u0938\u0902| \u0926\u0947|\u091C\u093E\u090F|\u0940\u092F |\u0915\u0930\u092C|\u0925\u093E |\u090F\u092C\u093E|\u093E \u092A|\u0928\u093E |\u094D\u0935\u093E|\u0926\u0947\u0936|\u0924\u0964 |\u0930\u0915 |\u0915 \u0939|\u0901 \u0905| \u0938\u092D| \u0906 |\u0924 \u0915|\u091A\u093F\u0924|\u094D\u0924 |\u0935\u093E\u0930|\u0924\u093E |\u093E\u0930\u0915|\u092E\u093E\u091C|\u093E \u0938|\u0930\u0940\u092F|\u0928\u094D\u092F|\u0930\u0924\u093E|\u093E\u0928 |\u094D\u0930\u093E|\u094D\u092F\u093E|\u0930\u0915\u094D|\u093E\u0930\u0923|\u092A\u0930\u093F|\u090F\u0932 |\u0915\u090F\u0932|\u0905\u0928\u094D|\u0930\u092C\u093E|\u0915 \u092A|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0905\u091B\u093F| \u0905\u091B|\u093F\u0930\u094D|\u093E\u0928\u094D|\u0928\u0915 |\u0939\u094B\u090F|\u0915\u0930 |\u0927\u093E\u0930|\u0938\u094D\u0925|\u093E \u0905|\u093F\u092E\u0947|\u0930 \u0906|\u090F\u0939\u093F| \u090F\u0915|\u0947 \u0938|\u0924\u0925\u093E| \u0924\u0925| \u092E\u093E|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092A\u094D\u0924|\u0930\u094D\u0935|\u0928\u093F\u0930|\u091A\u094D\u091B|\u0930\u094D\u092F|\u0901 \u0938|\u0915 \u0915|\u0939\u094B |\u093E\u0939\u093F|\u090F\u0924\u0964|\u0930 \u092A|\u093E\u092E\u093E|\u0938\u093E\u092E|\u0937\u093E |\u02BC \u0938|\u0901 \u090F|\u0948\u0915 |\u0926\u094D\u0927|\u0930 \u0905|\u0915 \u091C|\u0938\u094D\u0924|\u093E\u092A\u094D|\u0901 \u0915| \u0938\u0915|\u092F\u0915 |\u0915\u093E\u0928|\u0939\u0928 |\u090F\u0939\u0928|\u0947\u0932 |\u094B\u090F\u0924|\u0924 \u0906|\u093E \u0935|\u0964 \u0915|\u094D\u0924\u0930|\u093E\u090F\u0924|\u094D\u0930\u0915|\u0939\u0941 |\u0915 \u0909|\u092A\u0942\u0930|\u0935\u093F\u0935|\u02BC \u0905|\u091B\u093F | \u0932\u0947|\u0928 \u092A|\u093E\u0938 |\u0930\u093E\u092A|\u0927\u0915 |\u092A\u090F\u092C| \u092A\u090F|\u0930\u093E |\u092F\u0924\u093E|\u0930\u0942\u092A|\u0928 \u0935| \u0915\u0947|\u0937\u093E\u0915|\u092F \u092A|\u0924 \u0939|\u091C\u093E\u0939| \u0913 |\u092D\u093E\u0935|\u092A\u0930 |\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u0938\u092E\u094D|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0942\u0930\u094D|\u0930\u0924\u093F| \u0926\u094B|\u0938\u092D\u0915|\u0964 \u0938| \u091C\u0928|\u0938\u092D |\u092C\u093E\u0927|\u0905\u0928\u0941|\u093F\u0938\u0901| \u0938\u0939|\u0901 \u0935|\u090F \u0938|\u0930\u093F\u0935|\u0924\u0941 |\u0947\u0924\u0941|\u0939\u0947\u0924| \u0939\u0947|\u093E\u0927 |\u0947\u092C\u093E|\u0928 \u0938|\u093F\u0937\u094D|\u0930\u093E\u0927| \u0905\u0935|\u093F\u0924\u094D|\u0935\u093E\u0938|\u091A\u093E\u0930| \u0909\u091A|\u093E\u0930\u093E|\u0928 \u0915|\u0935\u0915 |\u093E \u0915|\u0928\u0942\u0928|\u093E\u0928\u0942|\u090F\u0924 |\u0930\u0940 |\u0947\u0913 |\u0915\u0947\u0913|\u0930\u0923 |\u094D\u0930\u0938|\u093F \u0926|\u0913 \u0935| \u092D\u0947|\u0928\u0939\u0941|\u094B\u0928\u0939|\u094D\u0925\u093F|\u092A\u0924\u094D|\u092E\u094D\u092A|\u0930\u093E\u091C| \u092D\u093E|\u0939\u093F\u092E| \u0939\u0915|\u093E\u092E\u0947|\u094D\u0923 |\u0930\u094D\u0923|\u0939\u093E\u0930|\u093F \u0938|\u0915 \u0926|\u0928 \u0905|\u0924 \u0905|\u0932\u0947\u092C| \u0905\u092D|\u093F\u0936\u094D|\u091C\u0915 |\u093E\u091C\u0915|\u0928 \u0906|\u0935\u093E\u0939|\u0915\u093E\u091C|\u0936\u094D\u092F|\u0935\u0938\u094D|\u0913\u0939\u093F| \u0913\u0939|\u092F\u094B\u0917|\u0964 \u090F|\u0915\u090F |\u0947 \u0913|\u0905\u092A\u0930",
        bho: " \u0915\u0947|\u0915\u0947 |\u0947 \u0915|\u093E\u0930 |\u0915\u093E\u0930|\u093F\u0915\u093E|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0913\u0930 |\u0906\u0913\u0930| \u0906\u0913|\u0947 \u0905|\u0947 \u0938|\u093E \u0915| \u0938\u0902|\u093F\u0915 |\u0930 \u0939|\u093E \u0938| \u0939\u094B|\u0930 \u0938|\u0947\u0902 |\u092E\u0947\u0902| \u092E\u0947| \u0915\u0930| \u0938\u0947|\u0928\u094B |\u0915\u094D\u0937|\u0938\u0947 | \u0915\u093E|\u0964 \u0938|\u0916\u0947 |\u093E\u0964 |\u0930\u093E | \u0938\u092E| \u0938\u092C|\u094D\u0930\u093E| \u0938\u0915|\u0930 \u0915|\u0928 \u0915|\u0935\u0947 |\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u091A\u093E\u0939| \u091A\u093E| \u092C\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0925\u093E |\u093F \u0915|\u0924\u093F | \u091C\u093E| \u0938\u093E|\u0947 \u0906|\u092A\u0928 |\u0915\u0930\u0947|\u0924\u093E |\u0939\u094B\u0916|\u0924 \u0915|\u0947\u0964 |\u0947 \u092C|\u0924\u0925\u093E| \u0924\u0925| \u0906\u092A|\u0915\u0947\u0932|\u0938\u0915\u0947| \u0938\u094D|\u0930\u0947 |\u0938\u092C\u0939|\u0915\u0930 |\u0906\u092A\u0928|\u0947 \u0913|\u091C\u093E | \u092A\u0930|\u0937\u094D\u091F| \u0930\u093E|\u0928\u093E |\u0939\u0935\u0947| \u0939\u0935|\u0932\u093E |\u0947\u0932\u093E|\u092C\u0939\u093F| \u0913\u0915|\u094B\u0916\u0947|\u0930 \u092C|\u0939\u0964 | \u0939\u0964|\u0928 \u0938|\u093E\u0937\u094D|\u0930\u093E\u0937|\u094D\u0924 | \u0914\u0930|\u0947 \u091A|\u0964 \u0915|\u0938\u0902\u0917|\u0930 \u0906|\u091F\u094D\u0930|\u094D\u091F\u094D|\u0937\u093E |\u092E\u093E\u0928|\u093E \u0906|\u0902 \u0915|\u093E \u092A|\u094D\u0937\u093E|\u0930\u0915\u094D|\u0939\u0947 |\u093E\u0939\u0947|\u093E\u0924\u093F|\u093E\u0935\u0947| \u091C\u0947|\u0939\u0940 |\u0913\u0915\u0930|\u092E\u093F\u0932|\u093F\u0924 |\u094B \u0938|\u0932 \u091C|\u0907\u0916\u0947|\u0928\u0907\u0916| \u0928\u0907|\u0924\u094D\u0930|\u092E\u093E\u091C| \u092C\u093F|\u0935\u0947\u0964|\u0947 \u091C|\u0915 \u0938|\u093F\u0902 |\u0939\u093F\u0902|\u0915\u0930\u093E|\u0914\u0930 |\u0947 \u092E|\u0938\u092E\u093E|\u0939\u0941 | \u0913 |\u092A\u0930 |\u0947 \u0928|\u0938\u094D\u0925|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0932\u093E\u0964|\u093E\u091C |\u093E\u0928 |\u0915\u093E\u0928|\u0947 \u0924|\u093F\u0930 |\u0924\u093F\u0930|\u0916\u093E\u0924| \u0916\u093E|\u0947 \u0909|\u0928\u0942\u0928|\u093E\u0928\u0942|\u093E\u092E | \u0938\u0941| \u0926\u0947|\u0940 \u0915| \u092E\u093E|\u0930 \u092E|\u092A\u094D\u0924|\u093F\u092F\u093E|\u093E\u0939\u0940|\u092C\u093E\u0964|\u092F\u094B\u0917|\u0940 \u0938|\u0932 \u0939|\u0942\u0928 |\u0935\u094D\u092F|\u0941 \u0915|\u090F \u0915|\u0947 \u0935|\u0902\u0924\u094D|\u0938\u094D\u0935|\u0915\u0947\u0939|\u0940\u092F |\u0916\u0932 |\u0938\u093E\u092E|\u092F\u0924\u093E|\u0924\u093F\u0915|\u0947 \u0939|\u093E\u092A\u094D|\u0930\u093E\u092A|\u0930 \u092A|\u0930 \u0905| \u0932\u094B| \u0938\u0939|\u091C\u0947 |\u094B\u0917 |\u092E \u0915|\u0932\u0947 | \u0928\u093F|\u0947\u0915\u0930|\u093E \u0939|\u092A\u0942\u0930|\u0930 \u0928|\u0947\u0939\u0941|\u094D\u092F |\u092F\u093E | \u092F\u093E|\u0926\u0947\u0936|\u0926\u0940 |\u093E \u092E|\u093E\u0935 | \u0926\u094B|\u0947 \u0926| \u092A\u093E|\u0939\u093F |\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u092C\u093E |\u093F\u0932 | \u0909\u092A|\u094D\u0930\u0924| \u0935\u093F| \u0939\u0940| \u0932\u0947|\u0930\u094B |\u0947 \u0916|\u0920\u0928 |\u0917\u0920\u0928|\u0902\u0917\u0920| \u092E\u093F|\u0937\u0923 |\u094D\u0937\u0923|\u0902\u0930\u0915|\u0938\u0902\u0930| \u0906\u0926| \u090F\u0915|\u0928\u0947 | \u0905\u092A|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u094D\u0924\u0930|\u094D\u092F\u093E|\u0947\u0936 |\u093E\u0926\u0940|\u094D\u0924\u093F|\u091C\u093F\u0915|\u093E\u091C\u093F|\u0915 \u0906|\u094D\u092E |\u091A\u093E\u0930| \u0909\u091A| \u0936\u093E|\u0930\u0940 |\u093E\u0939 |\u092F\u093E\u0939|\u092C\u093F\u092F|\u091A\u093F\u0924|\u0915\u094D\u0924|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0930\u0924\u093E|\u0930 \u0935|\u0928 \u092E|\u0932\u094B\u0917|\u0939 \u0915|\u0928 \u092A|\u0915\u093E\u092E| \u092A\u0942| \u0907 |\u0906\u0926\u093F|\u0908\u0932 | \u0915\u0908| \u0935\u094D|\u092E\u0940 |\u0941\u0930\u0915|\u0938\u0941\u0930| \u091C\u0940|\u0927\u093E\u0930|\u092F \u0938|\u0924\u0930\u094D|\u092D\u0947 |\u0938\u092D\u0947| \u0938\u092D|\u092D\u093E\u0935|\u094D\u0925\u093F|\u093E\u092E\u093E|\u0938\u0930 |\u0930\u094D\u092E| \u0915\u094B| \u092C\u0947|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u093E\u0938 |\u0947 \u092A|\u091C\u093E\u0926|\u0906\u091C\u093E| \u0906\u091C|\u0909\u091A\u093F|\u0917 \u0915|\u093E\u0930\u0940| \u091C\u0930|\u0917\u0947 |\u091C \u0915|\u0940 \u092C|\u0938\u0928 |\u0939\u094B |\u093E \u0924",
        npi: "\u0915\u094B |\u0928\u0947 | \u0930 |\u093E\u0930 |\u0915\u094D\u0924|\u0915\u093E\u0930|\u092A\u094D\u0930| \u092A\u094D|\u094D\u092F\u0915|\u0935\u094D\u092F| \u0917\u0930|\u093F\u0915\u093E| \u0935\u094D|\u094D\u0930\u0924|\u0927\u093F\u0915|\u094D\u0924\u093F|\u092F\u0915\u094D|\u0905\u0927\u093F| \u0905\u0927|\u093E\u0908 |\u092E\u093E |\u0932\u093E\u0908|\u0924\u094D\u092F|\u093F\u0915 | \u0964 | \u0938\u092E|\u0935\u093E | \u0935\u093E|\u0915 \u0935|\u094D\u0928\u0947|\u0930\u094D\u0928|\u0917\u0930\u094D|\u0928\u094D\u0924|\u091B \u0964|\u0924\u093F\u0932|\u0930\u0924\u094D|\u0924\u094D\u0930|\u0947\u0915 |\u092F\u0947\u0915|\u094D\u092F\u0947|\u093F\u0932\u093E|\u0930 \u0938|\u094B \u0938| \u0938\u094D|\u092E\u093E\u0928|\u0915\u094D\u0937| \u0935\u093F|\u0939\u0941\u0928|\u093E \u0938| \u0939\u0941| \u091B |\u0930 \u091B|\u094D\u0924\u094D|\u0938\u092E\u093E|\u0938\u094D\u0935|\u0964 \u092A| \u0938\u0902|\u0928\u0947\u091B|\u0941\u0928\u0947|\u0939\u0930\u0941|\u0924\u0928\u094D|\u0935\u0924\u0928|\u0947 \u0905|\u093F\u0928\u0947|\u094B \u0905|\u094D\u0935\u0924| \u0915\u093E|\u0947 \u091B|\u0917\u0930\u093F| \u0930\u093E|\u094D\u0930 |\u0924\u093F |\u093E\u0915\u094B| \u0915\u0941|\u0937\u094D\u091F|\u0928\u093E |\u0938\u094D\u0924|\u0915 \u0938|\u0941\u0928\u0948|\u0915\u0941\u0928|\u091F\u094D\u0930|\u0932\u0947 | \u0928\u093F|\u093E\u0928 |\u091B\u0948\u0928| \u091B\u0948|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937|\u0924\u093F\u0915|\u091B\u0964 |\u093E\u0930\u094D|\u0924\u093E |\u093F\u0924 |\u0928\u0948 |\u093E \u0905| \u0938\u093E|\u093E \u0935|\u0930\u0941 | \u092E\u093E| \u0905\u0928|\u093E \u0930|\u0930\u0924\u093E|\u0930 \u0930|\u0939\u0930\u0942|\u0947\u091B |\u093E \u092A|\u0930\u0915\u094D|\u094D\u0924 | \u092A\u0930|\u0925\u093E | \u0932\u093E|\u092A\u0930\u093F|\u0926\u0947\u0936|\u0938\u0915\u094B| \u092F\u0938|\u092E\u093E\u091C|\u093E\u092E\u093E|\u094D\u0930\u093E|\u093F\u0935\u093E|\u093E\u0939\u0930|\u094B \u092A|\u094D\u092F |\u0935\u093E\u0930|\u0928 \u0938|\u0964 \u0915|\u0928\u093F |\u094D\u0937\u093E| \u0924\u094D|\u0926\u094D\u0927|\u0930 \u0939|\u0924\u0925\u093E| \u0924\u0925|\u092F\u0938\u094D|\u094D\u092F\u0938|\u0930\u0940 |\u0930 \u0935|\u092A\u0928\u093F|\u0930\u093F\u0928|\u0902\u0930\u0915|\u0938\u0902\u0930|\u092D\u093E\u0935|\u0948 \u0935|\u0938\u092C\u0948| \u0938\u092C| \u0936\u093F| \u0938\u0939|\u0924\u093E\u0915|\u0947 \u0930|\u0924 \u0930|\u0932\u093E\u0917| \u0938\u0941|\u094D\u0937\u0923|\u0926\u094D\u0926| \u0905\u092A|\u0948\u0928 |\u094B \u0935|\u093F\u0915\u094D|\u093E\u0935 |\u0927\u093E\u0930|\u094D\u092F\u093E|\u094D\u0930\u093F|\u093E \u092D|\u090F\u0915\u094B|\u0930 \u092E|\u0928 \u0905|\u094B \u0932| \u0909\u0938|\u0936\u093F\u0915|\u093E\u0924\u094D|\u0938\u094D\u0925|\u0935\u093E\u0939|\u0942\u0930\u094D|\u0936\u094D\u092F|\u093F\u0924\u094D|\u0930\u0915\u094B|\u093E\u0930\u0915|\u0941\u0926\u094D|\u0924\u094B |\u094D\u0924\u094B|\u093E\u0909\u0928|\u0915\u093E\u0928|\u093F\u090F\u0915|\u093E \u0928| \u092A\u0928|\u0928\u0964 |\u0948\u0928\u0964|\u0915\u093E |\u0947\u091B\u0964| \u092D\u0947|\u0930\u094D\u092F|\u0938\u092E\u094D|\u0924\u094D\u092A|\u0938\u093E\u092E|\u0930\u093F\u092F|\u091A\u093E\u0930|\u0928\u093F\u091C|\u0941\u0928 |\u0917\u093F |\u093E\u0917\u093F|\u0909\u0938\u0915| \u092E\u0924| \u0905\u092D|\u092A\u0942\u0930|\u0930 \u0924| \u0938\u0915|\u0938\u093E\u0930|\u0930\u093E\u0927|\u092A\u0930\u093E|\u0905\u092A\u0930|\u0941\u0915\u094D|\u091C\u0915\u094B| \u0909\u092A|\u0930\u093E |\u093E\u0930\u093E|\u094D\u0935\u093E|\u0935\u093F\u0927|\u094D\u0928 |\u093E \u0924|\u0928 \u0917|\u0923\u0915\u094B| \u092A\u093E| \u0926\u093F|\u0915 \u0930|\u0930 \u092A|\u0905\u0928\u094D|\u092D\u0947\u0926|\u093E\u0930\u092E|\u094B \u0906| \u0905\u0930|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093F\u092F |\u0937\u093E |\u093E\u091F |\u092C\u093E\u091F| \u092C\u093E|\u093F \u0930| \u091B\u0964|\u0924\u094D\u0935|\u0924 \u0938|\u0930\u0942 |\u091B \u0930|\u0930\u0915\u093E|\u0935\u093F\u0915|\u0930 \u0909|\u094B\u0917 |\u094D\u0926\u0947|\u0930\u093F\u0935|\u0938\u0915\u093F|\u0948 \u092A|\u0930\u0924\u093F|\u0905\u0928\u0941| \u0906\u0935|\u092F\u0941\u0915|\u093E \u0917|\u0928\u092E\u093E|\u092F\u094B\u0917|\u0917 \u0917|\u0915 \u0905|\u0926\u094D\u0935|\u094D\u0927 |\u0930\u0941\u0926| \u092C\u093F|\u0964 \u0938|\u0909\u0928\u0947|\u093E\u0928\u094D|\u093E \u092E|\u093F\u0915\u094B|\u0930\u094D\u0926|\u093E\u0930\u0940|\u094D\u0924\u0930|\u094B \u0939|\u0939\u093F\u0924| \u0926\u0947|\u0930\u093F\u0915|\u093E \u0915| \u0906\u0927|\u0930\u093E\u091C|\u0930\u094D\u092E|\u094D\u0923 |\u0930\u094D\u0923|\u093F \u0935|\u094D\u092F\u0935|\u0935\u093F\u091A|\u092C\u0948 |\u0938\u0939\u093F|\u0930\u094B\u091C|\u0930\u094D\u0938|\u0908 \u0909|\u094D\u092A |\u0930\u093E\u0924|\u0928\u093F\u0915|\u092E\u093F\u0915|\u091A\u094D\u091B|\u094D\u0925\u093E|\u0935\u093F\u0935|\u0915\u0924\u093E|\u0905\u092D\u093F|\u094D\u0927\u093E",
        mag: " \u0915\u0947|\u0915\u0947 |\u093E\u0930 | \u0939\u0908|\u0915\u093E\u0930|\u0908\u0964 |\u0939\u0908\u0964|\u093F\u0915\u093E|\u0947 \u0905|\u0927\u093F\u0915|\u0905\u0927\u093F| \u0905\u0927|\u0930 \u0939|\u0947 \u0915|\u0914\u0930 | \u0914\u0930|\u093E \u0915|\u0947 \u0938|\u0938\u092C | \u0938\u092C| \u0915\u0930|\u0947\u0902 |\u0925\u093E |\u092E\u0947\u0902| \u092E\u0947|\u0924\u0925\u093E| \u0924\u0925|\u093F\u0915 | \u0939\u094B| \u0938\u092E|\u0915\u094D\u0937|\u0928\u093E |\u092C \u0915|\u0930 \u0938| \u0938\u0902|\u093E \u0938|\u0915\u0930 | \u092D\u0940|\u0964 \u0938| \u0938\u093E| \u0938\u0947| \u0915\u093E| \u0905\u092A|\u094D\u0930\u093E|\u092A\u094D\u0930| \u092A\u094D|\u0938\u0947 |\u092D\u0940 | \u0915\u094B|\u0924 \u0915| \u092A\u0930|\u0930\u093E |\u0915 \u0939|\u092A\u0928 |\u0905\u092A\u0928| \u0938\u0915|\u092F\u093E |\u0924\u093F |\u0930 \u0915|\u0940 \u0915| \u092F\u093E|\u0915\u0930\u0947| \u091C\u093E|\u0930\u0947 | \u0913\u0915|\u094D\u0924 |\u0938\u0915 |\u0928\u094B |\u093E\u0928 |\u092E\u093E\u0928|\u0913\u0915\u0930|\u093E \u092A|\u0928 \u0915|\u0947\u0932 | \u0928\u093E|\u0964 \u0915|\u0930\u0915\u094D| \u0938\u094D|\u0939\u0940 |\u0939\u094B\u090F| \u090F\u0915|\u092A\u0930 |\u0926\u0940 |\u091F\u094D\u0930|\u0924\u093E |\u0935\u094D\u092F|\u0939\u0908 | \u0936\u093E|\u0947 \u0909| \u0926\u0947|\u0924\u094D\u0930|\u093E\u0926\u0940| \u0930\u093E| \u0939\u0940|\u0915\u093E\u0928|\u093F\u0924 |\u092E \u0915|\u0932 \u091C|\u093E\u092E |\u0940 \u0938|\u0947 \u092D|\u0928 \u0938|\u092E\u093E\u091C|\u0937\u094D\u091F|\u0937\u093E | \u0932\u0947|\u0915 \u0938|\u092C\u0947 |\u0935\u0947 |\u093E\u0935\u0947|\u092E\u093F\u0932|\u0930 \u092E|\u094D\u092F |\u093E \u0939|\u0932\u093E |\u092A\u094D\u0924|\u0928\u0942\u0928|\u093E\u0928\u0942|\u091C\u093E |\u0947\u0915\u0930|\u094D\u0937\u093E|\u094D\u0930\u0924|\u0902\u0924\u094D|\u0930 \u0914|\u094B\u0908 |\u0915\u094B\u0908|\u094D\u091F\u094D|\u093E\u0937\u094D|\u0930\u093E\u0937| \u092E\u093E|\u0930\u094B | \u091C\u0947|\u0915\u0930\u093E|\u094B\u090F |\u093E\u092A\u094D|\u0930\u093E\u092A|\u0938\u092E\u093E|\u0942\u0928 |\u094B \u0938|\u0938\u094D\u0935|\u094D\u0924\u093F|\u0938\u093E\u092E|\u094B\u0928\u094B|\u0915\u094B\u0928| \u0935\u094D|\u0930 \u0905|\u094D\u092E | \u0935\u093F| \u0938\u0939|\u0947 \u092E|\u0915\u094D\u0924|\u092F\u094B\u0917|\u0930 \u0935|\u0915\u093E\u092E|\u0932 \u0939| \u0928\u093F|\u0926\u0947\u0936|\u092A\u0942\u0930|\u0935\u093E\u0930| \u0907 |\u0902\u0930\u0915|\u0938\u0902\u0930|\u090F \u0915|\u0930 \u092A| \u0938\u0941|\u0924\u0902\u0924|\u0935\u0924\u0902|\u094D\u0935\u0924|\u093E \u092E|\u0935 \u0915|\u0947 \u0935|\u093E\u0925 |\u0938\u093E\u0925| \u0926\u094B|\u0939\u094B\u092C| \u092A\u093E|\u094B \u0915|\u0947 \u092C|\u094B\u0917 | \u0909\u092A|\u0938\u094D\u0924|\u092A\u0930\u093F|\u0928 \u092A|\u0947 \u0924|\u094D\u0924\u0930|\u0932\u0947\u0932|\u0947 \u0913|\u091A\u093E\u0939| \u091A\u093E|\u092F \u0915|\u0935\u093E |\u0947\u0936 |\u092F \u0938|\u0928 \u0939|\u0937\u0923 |\u093E \u092C|\u0964 \u0924|\u090F\u0915 |\u090F\u0932 |\u0940\u092F |\u0915\u0947\u0915|\u0947 \u0939|\u0930 \u0906|\u093F \u0915|\u0938\u094D\u0925|\u091C\u093F\u0915|\u093E\u091C\u093F|\u093E\u092E\u093E|\u0930\u0940\u092F|\u094D\u0930\u0940|\u0924\u093F\u0915|\u093E\u0924\u093F| \u092C\u093F|\u091A\u093E\u0930|\u0947 \u0906|\u093E\u0938 | \u0909\u091A|\u093E \u0924|\u092F\u0915\u094D|\u094D\u092F\u0915|\u093F\u0932 |\u092E\u092F |\u0938\u092E\u092F|\u0936\u093E\u0926|\u092A\u092F\u094B|\u0909\u092A\u092F|\u0947 \u0916|\u0930\u093F\u0935| \u092A\u0942|\u0947 \u0932|\u0947 \u091A|\u094C\u0928\u094B|\u0915\u094C\u0928| \u0915\u094C|\u0902 \u0915|\u0938\u0902\u0917|\u0928 \u0926|\u0902 \u0938|\u0923 \u092A|\u094D\u0937\u0923|\u0930 \u0928|\u0947 \u0928|\u094B \u092D|\u0915\u0930\u094B|\u093E \u0914|\u0930\u0924\u093E|\u093E\u0935 |\u092D\u093E\u0935|\u0915 \u0914|\u0930\u094D\u092E|\u094B\u0938\u0930|\u0926\u094B\u0938|\u0923 \u0915|\u0947 \u092A|\u0928 \u0914|\u092C \u0939|\u093F\u0915\u094D|\u0936\u093F\u0915| \u0936\u093F|\u093E\u092C\u0947|\u0928\u093F\u092F|\u091A\u093F\u0924|\u0909\u091A\u093F|\u093F\u0924\u094D|\u0917 \u0915|\u0947\u0964 |\u0924 \u0938|\u0940 \u0936|\u0902 \u0936|\u090F\u0915\u0930|\u0964 \u090F|\u0924\u0928 | \u0913 |\u0930\u0940 |\u094D\u0930 |\u091C\u0947 |\u0915 \u0915| \u0938\u0940|\u0938\u0928 |\u093F\u0935\u093E| \u0905\u0928|\u0942\u0930\u093E| \u092C\u091A|\u090F\u0964 | \u092C\u0947|\u0924 \u0939| \u0924\u0915| \u092E\u093F|\u0927\u093E\u0930|\u0925\u0935\u093E|\u0905\u0925\u0935| \u0905\u0925|\u093F\u0932\u093E|\u094D\u0935\u093E|\u093F \u092E| \u0906\u0926|\u0928\u0947 |\u0915\u090F\u0932| \u0915\u090F|\u094D\u092F\u093E"
    },
    Myanmar: {
        mya: "\u1004\u1037\u103A|\u1004\u103A\u1038|\u102D\u102F\u1004|\u102F\u1004\u103A|\u101E\u100A\u103A|\u1037\u103A |\u103D\u1004\u1037|\u1001\u103D\u1004|\u1000\u102D\u102F|\u100A\u103A\u1038|\u1031\u102C\u1004|\u101E\u1031\u102C|\u102C\u1004\u103A|\u103C\u1005\u103A|\u1010\u102D\u102F|\u1014\u102D\u102F|\u103A\u1038\u1000|\u102D\u102F |\u1004\u103A | \u1021\u1001|\u103C\u1004\u103A|\u1016\u103C\u1005|\u101C\u100A\u103A| \u101C\u1030|\u103A \u1021|\u101B\u103E\u102D|\u103B\u102C\u1038|\u1019\u103B\u102C|\u103A\u1001\u103D|\u103A\u104B |\u100A\u103A\u104B|\u1000\u1031\u102C|\u1038\u1000\u1031|\u1014\u103E\u1004|\u103E\u1004\u1037|\u102D\u102F\u1037|\u101B\u1031\u1038|\u103A\u1038 |\u1004\u103A\u1001|\u1038\u104A |\u103A \u101C|\u1031\u102C |\u1001\u103C\u1004|\u103D\u1004\u103A|\u1019\u103E\u102F|\u103A\u1005\u1031|\u1010\u103D\u1004|\u103A\u1038\u104A|\u103E\u102D\u101E|\u1031\u102C\u1000|\u102D\u101E\u100A|\u1038\u1000\u102D|\u100A\u103A\u1037|\u1031\u102C\u103A|\u102C\u1000\u103A|\u1010\u103A\u101C|\u1005\u103A\u1005|\u101C\u1015\u103A|\u103D\u1010\u103A|\u101C\u103D\u1010| \u1019\u102D|\u101C\u1030\u1010|\u103A\u101C\u1015|\u1030\u1010\u102D|\u103A\u101C\u100A|\u103A\u1038\u1019| \u1016\u103C|\u1005\u103D\u102C| \u101C\u103D|\u1004\u103A\u101B|\u103D\u102C |\u102F\u1015\u103A|\u103A\u104A |\u103A\u1037 |\u1011\u102D\u102F|\u103A\u101E\u1031|\u1038\u1010\u103D|\u104B \u101C|\u103C\u102C\u1038|\u1021\u101B\u1031|\u1037\u103A\u1021|\u1021\u1001\u103D|\u102D\u1019\u102D|\u103D\u1000\u103A|\u102C\u103A\u101C|\u1031\u104A |\u102C\u1038 |\u1019\u100A\u103A| \u101E\u1031|\u1000\u103A |\u102D\u102F\u1038|\u103A\u101B\u103E|\u100A\u103A |\u1019\u102D\u1019|\u103A\u1005\u103D|\u1005\u1031\u104A|\u1037\u103A\u101B| \u1011\u102D|\u103A\u1021\u101B|\u103C\u1004\u1037|\u1014\u103A |\u1038\u1014\u103E|\u103A\u1038\u1010|\u1019\u103A\u1038|\u1016\u103C\u1004|\u103A \u1019|\u1021\u102C\u1038|\u103A\u101E\u100A| \u1015\u103C|\u1014\u103A\u1038|\u1021\u1001\u103C|\u103A\u1004\u1036|\u1004\u103A\u1004|\u1015\u102D\u102F|\u102C \u1021|\u103A\u1019\u103E|\u1015\u103A\u1005|\u101B\u1014\u103A| \u1014\u102D|\u1006\u102D\u102F|\u1038\u1019\u103B|\u102C\u1038\u1000| \u101B\u103E|\u1005\u1031\u101B|\u103D\u101A\u103A|\u1038\u101E\u100A|\u101C\u102F\u1015|\u103A \u1015|\u1010\u1005\u103A|\u104A \u1021|\u1038 \u1021|\u103A \u1016|\u102F\u1036\u1038|\u1001\u103C\u102C|\u101D\u1004\u103A|\u101B\u1019\u100A|\u103A \u101B|\u103C\u100A\u103A|\u102F\u1010\u103A|\u101E\u102D\u102F|\u1038\u1001\u103C|\u1038\u1016\u103C|\u1038\u1019\u103E|\u1021\u1015\u103C|\u103A\u1001\u103C|\u1005\u102C\u1038| \u101C\u100A|\u103A\u1038\u101E|\u103A\u1014\u102D|\u1021\u1010\u103D|\u1015\u103C\u102F|\u1015\u103C\u100A|\u103A\u1038\u1015|\u1001\u1036\u1005| \u1001\u1036|\u1038 \u1019|\u1031\u1038\u1019|\u1015\u103C\u1004|\u1004\u103A\u101E|\u101F\u102F\u1010|\u1019\u101F\u102F|\u1015\u103A\u1001|\u1037 \u1021|\u102C\u1038\u101E|\u1000\u103C\u1031|\u1010\u103A |\u1000\u103A\u1019|\u1010\u103D\u1000|\u102C\u1038\u1014|\u1015\u1012\u1031|\u1025\u1015\u1012|\u102F \u1021|\u101E\u102C\u1038|\u103A \u101E|\u103A\u1038\u1001|\u104A \u1019|\u1015\u100A\u102C|\u102D\u102F\u1000|\u1019\u103E |\u1019\u103B\u103E|\u100A\u103A\u101E|\u103C\u1031\u102C|\u101B\u104B |\u1005\u100A\u103A|\u103A\u1016\u103C|\u1010\u100A\u103A|\u103B\u1000\u103A|\u1000\u103D\u101A| \u1021\u102C|\u1031\u1038 | \u101E\u102D|\u102C\u1038\u1016| \u1021\u101C|\u103A\u1019\u103B|\u101E\u1004\u103A|\u103D\u1032\u1037|\u1016\u103D\u1032|\u101B\u102C\u1038|\u1010\u101B\u102C|\u103A\u1000\u102D| \u1025\u1015|\u1031\u1038\u1001|\u1015\u103C\u1005|\u1010\u103A\u1001|\u103A\u101B\u1014|\u1000\u103A\u101E|\u103A\u1001\u103B|\u102F\u1037\u1010|\u104A \u101C|\u102C\u1038\u101C|\u103A\u101B\u103D|\u1019\u102D\u104F|\u102F \u101E|\u102F\u1000\u103A|\u101E\u1000\u103A| \u1021\u1000|\u102C\u1038\u101B|\u1001\u103C\u1031|\u103A \u1014|\u103A\u1019\u103C|\u1005\u103A\u1019|\u103A\u1038\u1014|\u104A \u1014| \u1000\u102D|\u104A \u101E|\u103B\u102D\u102F|\u101C\u1030\u1019|\u1038\u1001\u103B|\u103A\u1014\u103E|\u1030\u1019\u103B|\u1030\u100A\u102E|\u1010\u1030\u100A| \u1010\u1030|\u101C\u102D\u102F|\u102C\u1038\u1005| \u1021\u1010|\u1038\u101E\u1031|\u1006\u1031\u102C|\u1004\u103A\u104A|\u1012\u1031\u1021|\u1015\u1031\u1038|\u103E\u102F |\u102C \u101C|\u103A\u101E\u1030|\u103E\u1031\u102C|\u102D\u1019\u103A|\u102C\u1038\u1001|\u1036\u1005\u102C|\u103A \u1001|\u103B\u1004\u103A|\u103D\u1031\u1038|\u1021\u101C\u102F|\u102B\u101D\u1004|\u1015\u102B\u101D| \u1014\u103E|\u102C\u1038\u1010|\u1015\u103A |\u1038 \u1014|\u1038\u1005\u103D|\u102F \u101C|\u1031\u1021\u101B| \u1021\u1015|\u102C\u1038\u1019|\u103A\u101B\u1031|\u102C \u101E|\u1031\u1038\u1000|\u104B \u1019| \u101C\u102F|\u103A \u1011|\u103A\u101B\u102C|\u1031\u101B\u104B| \u1021\u1006|\u1038\u1019\u101F|\u1037\u1010\u100A|\u104A \u1000|\u1011\u102C\u1038|\u103A \u1000|\u102D\u102F\u101E|\u1015\u103A\u101E|\u103A \u1010| \u1015\u102B|\u1021\u1016\u103D|\u101B\u103D\u1000|\u1021\u1001\u102B|\u1031\u1038\u101B|\u103A \u1005|\u1001\u1036\u101B|\u104F \u1021|\u1000\u103A\u1001|\u103A\u1038\u1021|\u1038\u1021\u1016|\u1021\u1016\u103C|\u103D\u1014\u103A|\u103B\u103E |\u102F\u1019\u103B|\u103E\u1004\u103A|\u102F\u101A\u103A|\u102D\u102F\u101A|\u102C\u1004\u1037| \u1010\u102D",
        shn: "\u1004\u103A\u1088|\u107C\u103A\u1038|\u101C\u1086\u1088|\u1004\u103A\u1038|\u103A\u1038 |\u1030\u107C\u103A|\u102F\u107C\u103A|\u107C\u103A\u1089|\u1030\u1004\u103A|\u101D\u103A\u1038|\u103D\u1004\u103A|\u107C\u107C\u103A|\u102D\u1030\u1004|\u103A\u1087\u101C|\u1019\u103A\u1087|\u1030\u101D\u103A|\u103A\u1088\u101C|\u107C\u103A\u1087|\u1087\u101C\u1086|\u103A\u1038\u1075|\u1010\u1083\u1087|\u1019\u102D\u1030|\u1022\u1019\u103A|\u1075\u1030\u107C|\u1019\u102E\u1038|\u1010\u103A\u1088|\u1010\u103A\u1038|\u101E\u102F\u107C|\u101D\u103A\u1088|\u101C\u103D\u1004|\u101C\u1084\u1088|\u1004\u103A\u1087|\u102F\u1004\u103A|\u107C\u1086\u1089|\u1062\u1004\u103A|\u1022\u107C\u103A|\u1075\u1031\u1083|\u103A\u1088 | \u101C\u103D|\u1086\u1089 |\u1088 \u1010|\u102D\u1030\u101D|\u1019\u103A\u1038|\u1086\u1088 | \u1010\u1083|\u1084\u1088 |\u107C\u103A |\u103D\u1010\u103A|\u103A\u1038\u107C| \u1075\u1030|\u102D\u102F\u1004|\u1038\u101E\u102F|\u101A\u1030\u1087|\u103A\u1038\u101C|\u1062\u107C\u103A|\u1035\u107C\u103A|\u102E\u1038\u101E|\u1075\u103A\u1038|\u1085\u101D\u103A|\u101C\u1085\u101D|\u101C\u103D\u1010|\u102F\u1075\u103A| \u1019\u102E|\u1031\u1083\u1089| \u1022\u107C|\u1075\u103A\u1087| \u101C\u1084|\u1035\u1004\u103A|\u1088 \u101C|\u1075\u107C\u103A|\u103A\u1088\u1075|\u1015\u102D\u1030|\u1075\u1030\u108A|\u103A\u1038\u1015|\u103D\u107C\u103A|\u103A\u1038\u1010|\u103A\u1088\u1010|\u1083\u1089\u107C|\u103A\u1089 |\u103A\u1088\u1019|\u104B \u1075|\u103A\u1038\u101E|\u1087\u104B | \u1010\u1031|\u1078\u1082\u103A|\u103A\u1038\u1019|\u1030\u1087\u104B|\u1075\u103A\u1088|\u101E\u1031 |\u103A\u1087 |\u1089\u107C\u1086|\u108A\u1075\u1031|\u1030\u108A\u1075|\u1038\u1075\u1030|\u1089 \u1019|\u1088\u101C\u1085|\u103A\u1088\u1015|\u103A\u1087\u107C|\u1015\u1035\u107C|\u1010\u102E\u1088|\u1088\u1019\u102D|\u1075\u1062\u107C|\u1031\u1022\u1019|\u101D\u103A\u1087|\u102D\u102F\u107C|\u1076\u101D\u103A|\u1035\u1010\u103A|\u1081\u1035\u1010|\u101C\u1082\u103A|\u102F\u1019\u103A|\u1038\u107C\u107C|\u1078\u102D\u102F|\u102D\u1004\u103A|\u1082\u103A\u1088|\u107C\u103A\u1088|\u1015\u103A\u1089|\u1019\u103A\u1088|\u102D\u1030\u107C|\u1062\u1086\u1038|\u103A\u104A |\u103A\u1038\u1076|\u1088\u101C\u103D|\u1004\u103A |\u103A \u101C|\u103A\u1087\u1019|\u103A\u1038\u1078|\u103A\u1038\u101A|\u1083\u1088 |\u1010\u1004\u103A|\u1010\u1031\u1083|\u102F\u101D\u103A|\u102D\u102F\u101D|\u107C\u103A\u101C|\u103A\u1087\u1075|\u1015\u107C\u103A|\u1038 \u101C|\u103A\u1089\u101C|\u107E\u102D\u1004|\u103A\u1087\u1015|\u1010\u103A\u1087|\u1038\u1015\u102D|\u1081\u1082\u103A|\u1019\u107C\u103A|\u1083\u1087 |\u1031\u1083\u1088|\u107C\u1083\u1088|\u103A\u107C\u107C|\u103A\u1038\u1081|\u1088\u1010\u1083|\u1011\u102F\u1075|\u103A\u1088\u107C| \u1022\u1019|\u103A\u1089\u1010|\u103A\u1088\u1081|\u1010\u1062\u1004|\u1010\u1031\u1022|\u1031\u1083\u1087|\u1030\u107A\u103A|\u107C\u103A\u1075|\u1075\u101D\u103A|\u1089 \u1010|\u1087\u107C\u107C|\u1038\u1019\u102D|\u1062\u1019\u103A|\u1062\u1086\u1087|\u1038 \u1022|\u1015\u1062\u1086|\u103A\u1088\u1078|\u1088 \u1022|\u1083\u1087\u1076|\u1086\u1088\u1010|\u103D\u1019\u103A|\u1031\u101C\u1086|\u1010\u1031\u101C|\u1030\u1019\u103A|\u103A\u1088\u1022|\u1062\u101D\u103A|\u107C\u103A\u1015|\u101E\u1062\u1004|\u107C\u103A\u107C|\u103A\u1088\u101A|\u101C\u102D\u1030|\u101D\u103A |\u103A\u101E\u1031|\u107D\u1035\u1004|\u107C\u103A\u1022|\u1078\u103D\u1019|\u1015\u103A\u1038|\u1088\u101C\u1086|\u1022\u101D\u103A|\u101E\u1004\u103A|\u1089\u101A\u1030|\u103A\u1089\u101A|\u103A\u1089\u1075|\u103A\u1038\u1022| \u1019\u102D|\u103A \u1022|\u1011\u102D\u102F|\u1076\u103D\u1004|\u107C\u103A\u1010|\u107E\u1062\u1086|\u1081\u1015\u103A|\u1082\u103A\u1038|\u107C\u1082\u103A|\u103A\u1089\u1081|\u107A\u103A\u1088|\u1038\u101C\u1085|\u1038\u101E\u1031|\u103A\u1087\u1076|\u107C\u1004\u103A|\u1082\u103A\u1089|\u103A\u1087\u107D|\u1015\u102D\u102F|\u103D\u1075\u103A|\u107C\u103A\u1019|\u103A\u107C\u1086|\u1015\u1035\u1004|\u101C\u1030\u107A| \u1015\u102D|\u1030\u1015\u103A|\u101C\u102F\u1075|\u1087 \u101C|\u1088\u101E\u1004|\u1010\u1030\u101D|\u1088 \u1015|\u1085\u1004\u103A|\u103A \u1010|\u1081\u1030\u1019|\u103A\u1087\u1081|\u1083\u1087\u101C|\u1087\u1076\u101D| \u107E\u1062|\u103A\u1087\u1078|\u103A\u1087\u1010|\u1038\u101C\u103D|\u1086\u1088\u1019|\u107C\u103A\u107D|\u1083\u1087\u1075|\u1010\u102D\u102F|\u1038\u101E\u1062|\u101D\u103A\u107C|\u1087\u1015\u1035|\u1030\u1075\u103A|\u1075\u103A\u1089|\u1084\u1088\u101E|\u101A\u1035\u107C|\u1088\u1011\u102F|\u1086\u1088\u1011|\u1038\u1075\u1062|\u1015\u1075\u103A|\u1086\u1088\u1015|\u1085\u1010\u103A|\u1089 \u101C|\u107D\u1030\u1088|\u101D\u1083\u1088|\u103A\u1075\u1030|\u1004\u103A\u1078|\u1089\u104B |\u1038\u107C\u1086|\u1088 \u1019|\u1088\u1019\u102E|\u1081\u107C\u103A|\u1038\u1010\u1031|\u107C\u103A\u101E|\u101D\u1086\u1089| \u101E\u102F|\u1030\u1010\u103A|\u1075\u102D\u1030|\u103A\u1022\u107C|\u1019\u103A\u1089|\u1078\u102F\u1019| \u1010\u102E|\u1083\u1087\u1081|\u1089\u107C\u107C|\u107A\u103A\u1038|\u103A\u1089\u101E|\u1038\u1075\u1031|\u103A\u1078\u102D|\u101D\u103A\u1089|\u104A \u101C|\u107C\u103A\u108A|\u1038\u104A |\u102D\u1075\u103A| \u107C\u1082|\u1089\u1081\u107C|\u102D\u1010\u103A|\u1087\u1075\u107C|\u103A\u104B |\u1083\u1087\u1078|\u1004\u103A\u101E|\u104B \u1015|\u101E\u103D\u107C|\u1075\u1010\u103A|\u1078\u101D\u103A|\u103A\u1078\u1082|\u1004\u103A\u1015|\u1082\u103A\u104A|\u1085\u107C\u103A|\u101E\u1031\u1022|\u103A\u1022\u1019"
    },
    Ethiopic: {
        amh: "\u1361\u1218\u1265|\u1230\u12CD\u1361|\u1275\u1361\u12A0|\u1265\u1275\u1361|\u1361\u1230\u12CD|\u1218\u1265\u1275|\u1361\u12A0\u1208|\u12ED\u121D\u1361|\u12C8\u12ED\u121D|\u1361\u12C8\u12ED|\u1290\u1275\u1361|\u1208\u12CD\u1362|\u12A0\u1208\u12CD|\u1295\u12F1\u1361|\u12F3\u1295\u12F1|\u1295\u12F3\u1295|\u12EB\u1295\u12F3|\u12A5\u12EB\u1295|\u12F1\u1361\u1230|\u1361\u12A5\u1295|\u1275\u1361\u1218|\u12CD\u1362 | \u12A5\u12EB|\u1361\u12E8\u1218|\u1362 \u12A5|\u12A5\u1295\u12F2|\u1361\u1290\u133B|\u1361\u12E8\u1270|\u121D\u1361\u1260|\u12CD\u1361\u12E8|\u121D\u1361\u12E8|\u1361\u12E8\u121A|\u1295\u1361\u12E8|\u1293\u1361\u1260|\u1293\u1361\u12E8|\u1361\u12A0\u12ED|\u1361\u12E8\u121B|\u1290\u133B\u1290|\u12CD\u1361\u1260|\u1206\u1290\u1361|\u1276\u127D\u1361|\u1275\u1361\u12E8|\u12CD\u1362\u1361|\u1361\u1260\u121A|\u1275\u1293\u1361|\u1280\u1265\u1228|\u1361\u1218\u1295|\u1275\u1295\u1361|\u12CD\u121D\u1361|\u1265\u127B\u1361|\u1361\u1208\u1218|\u121D\u1361\u1230|\u121D\u1362 |\u129B\u12CD\u121D|\u1295\u129B\u12CD|\u121B\u1295\u129B|\u1295\u121D\u1361|\u1361\u12A0\u1308|\u1218\u1265\u1276|\u1361\u12EB\u1208|\u12A5\u12A9\u120D|\u1228\u1275\u1361|\u1218\u1295\u130D|\u1361\u1208\u121B|\u1275\u1361\u1260|\u1206\u1295\u1361|\u1260\u1275\u1361|\u1361\u1260\u1270|\u1208\u1275\u1361|\u1361\u12A5\u12A9|\u130B\u1265\u127B|\u12CE\u127D\u1361|\u12C8\u1295\u1300|\u1205\u1295\u1290|\u12F0\u1205\u1295|\u12A9\u120D\u1361|\u121B\u1295\u121D| \u121B\u1295|\u1362 \u121B|\u1320\u1260\u1245|\u133B\u1290\u1275|\u1265\u1276\u127D|\u1361\u120D\u12E9|\u122B\u12CA\u1361|\u1230\u1265\u1361|\u121D\u1361\u12A5|\u130D\u1298\u1275|\u121B\u130D\u1298|\u127D\u1361\u1260|\u1225\u122B\u1361|\u1290\u133B\u1361|\u122D\u12F5\u1361|\u134D\u122D\u12F5|\u1361\u1260\u1206|\u1361\u12F5\u122D|\u120D\u1361\u1218|\u1361\u12F0\u1205|\u1270\u130D\u1263|\u1361\u12E8\u1206|\u1275\u1361\u12C8|\u1260\u1275\u121D|\u1348\u1338\u121D|\u122D\u1361\u12C8|\u12ED\u1290\u1275|\u1275\u121D\u1361|\u1361\u1260\u1218|\u1361\u1201\u1209|\u1278\u12CD\u1361|\u1298\u1275\u1361|\u121B\u1280\u1260|\u12E8\u121B\u130D|\u1260\u122D\u1361|\u121D\u1361\u1218|\u1260\u1280\u1265|\u1361\u1260\u1280|\u127D\u1293\u1361|\u1361\u1291\u122E|\u1361\u1225\u122B|\u1361\u130A\u12DC|\u1361\u12C8\u1295|\u1218\u1220\u1228|\u1361\u1218\u1220|\u1271\u1295\u1361|\u1215\u130D\u1361|\u1263\u122D\u1361|\u130D\u1263\u122D|\u1290\u1275\u1293|\u1290\u1276\u127D|\u133B\u1290\u1276|\u1295\u1293\u1361|\u12E9\u1290\u1275|\u120D\u12E9\u1290|\u12F0\u1228\u1303|\u1361\u12F0\u1228|\u1265\u1361\u12E8|\u12D3\u12ED\u1290|\u1361\u12D3\u12ED|\u12ED\u121B\u1296|\u1203\u12ED\u121B|\u120D\u1362 |\u1290\u12CD\u1362|\u1361\u1290\u12CD|\u1201\u1209\u1361|\u122D\u1275\u1361|\u1205\u122D\u1275|\u121D\u1205\u122D|\u1275\u121D\u1205|\u1295\u1290\u1275|\u1293\u1361\u1208|\u1260\u1275\u1362|\u1208\u1260\u1275|\u12A0\u1208\u1260|\u1218\u1206\u1295|\u1295\u1361\u12A0|\u1295\u1361\u12C8|\u1361\u1218\u1230|\u1265\u1228\u1361|\u1361\u1265\u127B|\u1361\u12A0\u120B|\u122D\u1305\u1275|\u12F5\u122D\u1305|\u1295\u130D\u1225|\u1270\u1263\u1260|\u120E\u127D\u1361|\u120C\u120E\u127D|\u12E8\u121A\u12EB|\u1264\u1270\u1230|\u12A5\u1295\u12F0|\u1275\u1361\u12F5|\u1361\u1218\u1206|\u127D\u1361\u12E8|\u1275\u12AD\u12AD|\u1361\u121B\u1295|\u1260\u1206\u1290|\u1206\u1291\u1361|\u1295\u1361\u1218|\u1362\u1361 |\u1275\u1361\u1208|\u1228\u130D\u1361|\u1361\u12ED\u1205|\u12F2\u1320\u1260|\u1295\u12F2\u1320|\u1275\u1361\u12A5|\u1290\u1271\u1361|\u1361\u1260\u1215|\u12E8\u1206\u1290|\u1338\u121D\u1361|\u1260\u1245\u1361|\u12E8\u1218\u1296|\u1275\u121D\u1362|\u1308\u122D\u1361|\u1361\u12A8\u121A|\u12CD\u1361\u12A8|\u1229\u1275\u1361|\u12E8\u1280\u1265|\u1361\u12E8\u1280|\u1214\u122B\u12CA|\u1265\u1214\u122B|\u1361\u12A0\u1235|\u122D\u1361\u12E8|\u12ED\u1308\u1263|\u12CD\u1295\u1361|\u1325\u1361\u12E8|\u1295\u1235\u1361|\u1361\u1275\u121D|\u1291\u122E\u1361|\u1295\u1361\u1208|\u127D\u1361\u12A5|\u1201\u1294\u1273|\u1361\u1201\u1294|\u1235\u1275\u1361|\u1361\u1260\u12A0|\u1361\u121B\u1280|\u1265\u1228\u1230|\u1218\u1230\u1228|\u1228\u1361\u1230|\u12E8\u121A\u1348|\u120B\u1278\u12CD|\u12A0\u120B\u1278|\u1218\u1348\u1338|\u1361\u130B\u1265|\u122D\u1361\u1260|\u12DC\u130D\u1290|\u127D\u1295\u1361|\u1305\u1275\u1361|\u12E8\u1270\u1263|\u1290\u1275\u1295|\u12DA\u1205\u1361|\u1265\u1290\u1275|\u1308\u1265\u1290|\u1361\u1308\u1265|\u1235\u1325\u1361|\u12CD\u1235\u1325|\u1361\u12CD\u1235|\u1230\u1261\u1361|\u1218\u12CD\u1361|\u1348\u1338\u1218|\u130A\u12DC\u1361|\u1275\u1361\u130A|\u1206\u1296\u1361|\u1361\u1206\u1296|\u1348\u120B\u130A|\u12CD\u1361\u1208|\u1219\u1209\u1361|\u12AD\u1208\u129B|\u12AD\u12AD\u1208|\u1300\u120D\u1361|\u1295\u1300\u120D|\u1201\u121D\u1361|\u12F2\u1201\u121D|\u1295\u12F2\u1201|\u1361\u1260\u130D|\u12CD\u1361\u12EB|\u1273\u12CA\u1361|\u1228\u1273\u12CA|\u1295\u130D\u1235|\u1361 \u12A5|\u12F0\u1228\u130D|\u1362\u1361\u12ED|\u1290\u1361\u1218|\u1290\u1271\u1295|\u1295\u1290\u1271|\u1209\u1361\u1260|\u1260\u1215\u130D|\u1361\u1270\u130D|\u12D3\u12CA\u1361|\u1265\u12D3\u12CA|\u1230\u1265\u12D3|\u121D\u1361\u12A8|\u1245\u1361\u1218|\u1218\u1320\u1260|\u1361\u1218\u1320|\u1260\u1290\u133B|\u1361\u1260\u1290|\u1218\u1296\u122D|\u121D\u1260\u1275|\u12A0\u12ED\u1348|\u121D\u1361\u12D3|\u1361\u1260\u121B|\u1262\u1206\u1295|\u1361\u1262\u1206|\u122D\u1361\u12A0|\u1308\u1229\u1361|\u12A0\u1308\u1229|\u1293\u120D\u1361|\u123D\u1293\u120D|\u1293\u123D\u1293|\u122D\u1293\u123D|\u1270\u122D\u1293|\u1295\u1270\u122D|\u12A2\u1295\u1270|\u1361\u12E8\u12A0|\u12A0\u1308\u122D|\u1295\u12F5\u1361|\u12A0\u1295\u12F5|\u1205\u121D\u1361|\u1293\u1361\u1290|\u1361\u12CD\u1233|\u1228\u1303\u1361|\u1296\u1275\u1361",
        tir: "\u1361\u1361 | \u1218\u1230|\u1230\u1265 | \u1230\u1265| \u12A6\u1208|\u12A6\u1208\u12CE|\u1293\u12ED | \u1293\u12ED|\u12CE\u1361\u1361|\u1208\u12CE\u1361|\u1218\u1230\u120D|\u1230\u120D |\u1215\u12F5\u1215|\u1215\u12F5 |\u12F5\u1215\u12F5| \u1215\u12F5|\u12ED \u121D|\u120D \u12A6| \u12A6\u1265|\u12F5 \u1230|\u1275\u1295 |\u12CD\u1295 |\u1361 \u1215|\u12AB\u1265 |\u12A6\u1265 |\u12C8\u12ED | \u12C8\u12ED|\u1295 \u1218|\u1265 \u12DD| \u12AB\u1265| \u1218\u1295| \u1290\u1343|\u1290\u1275 |\u1265 \u1218|\u12DD\u12BE\u1290|\u1265 \u1265| \u12A5\u1295|\u12BE\u1290 | \u12DD\u12BE|\u1295 \u1290| \u121D\u122D|\u1295\u1361\u1361|\u12B9\u1295 | \u12A5\u12DA|\u122D\u12AB\u1265|\u121D\u122D\u12AB| \u12A6\u12ED|\u12ED\u12B9\u1295| \u12ED\u12B9|\u1273\u1275\u1295|\u1290\u1343\u1290|\u12A5\u12DA |\u1295 \u12A6|\u1215\u130A |\u1290 \u12ED|\u1273\u1275 |\u1275 \u12A6|\u12ED \u1265|\u1295 \u121D| \u12A8\u121D|\u1265 \u12A6| \u1265\u1215| \u1363 |\u1295\u130D\u1235|\u1218\u1295\u130D| \u1203\u1308|\u1363 \u1265|\u12CA \u1218|\u121B\u12D5\u122A|\u1235\u122B\u1215|\u1295 \u1295| \u1295\u121D|\u12D5\u122A | \u1295\u12AD|\u12A6\u12CA |\u1295 \u1265|\u2019\u12CD\u1295|\u1218\u1230\u120B|\u122B\u12CA |\u121B\u1215\u1260|\u12A6\u1275 | \u12DD\u1270| \u121B\u12D5|\u120E\u121D |\u122D\u1295 | \u1235\u122B|\u1270\u1230\u1265|\u12D3\u1275 |\u1290\u1271 |\u1265\u12A6\u12CA|\u1230\u1265\u12A6|\u1275 \u12C8|\u1290\u1273\u1275|\u120B\u1275\u1295|\u1215\u1260\u122B|\u120D\u12A6\u1275|\u12AB\u120D\u12A6| \u1265\u12D8|\u1295 \u12DD|\u121D\u1361\u1361|\u122D\u1272 |\u1205\u122D\u1272|\u121D\u1205\u122D|\u1275\u121D\u1205| \u1275\u121D|\u122B\u1215 | \u121B\u1215|\u12B8\u12CD\u1295| \u1308\u1260|\u1265\u1215\u130A|\u1271 \u1295| \u1265\u12DD|\u1343\u1290\u1273|\u1230\u120B\u1275|\u12DA \u12F5| \u12A6\u12F5|\u12CE\u121D\u1361|\u1208\u12CE\u121D|\u1273\u12CA |\u12A5\u1295\u1275|\u122A\u1270\u1230|\u1265\u122A\u1270|\u1215\u1265\u122A| \u1215\u1265|\u1265\u1295 |\u122B\u1275 |\u1295 \u1230|\u12CB\u1295 |\u12A1\u2019\u12CD|\u121D\u12A1\u2019|\u12A8\u121D\u12A1|\u1363 \u12A6|\u122D\u12D3\u1275|\u1235\u122D\u12D3| \u1235\u122D|\u12D5\u120A |\u1295 \u1293|\u1290\u1275\u1295|\u1275 \u1293|\u12ED \u12A6|\u1290\u1343 |\u1308\u1229 |\u1203\u1308\u1229|\u121D \u1218|\u1295\u130B\u1308|\u12F5\u1295\u130B| \u12F5\u1295|\u12A5\u1295\u1270|\u1260\u122B\u12CA| \u1265\u121B|\u12ED\u121B\u1296|\u1203\u12ED\u121B|\u12A9\u120E\u121D| \u12A9\u120E|\u120D\u1295 |\u12AD\u12B8\u12CD| \u12AD\u12B8|\u1275 \u1235|\u1295 \u1213| \u1203\u12ED|\u1275 \u1218|\u1361 \u12A5| \u12AB\u120D|\u12A5\u1295 |\u1264\u1270\u1230| \u1264\u1270|\u12A5\u12CB\u1295| \u12A5\u12CB|\u1260\u1295 |\u1295 \u12D8|\u1270\u12F0\u1295|\u1218\u1230\u122A|\u130D\u1235\u1272|\u1295 \u12AB|\u1213\u1208\u12CB| \u1213\u1208|\u1265\u12D8\u12ED| \u121D\u12C3| \u1215\u130A|\u1295\u1363 |\u12CA \u12C8|\u1343\u1290\u1275| \u12D8\u12ED|\u1213\u12F0 |\u1295 \u1270|\u1275\u1363 |\u1293\u1295 | \u121D\u1235|\u1343\u1295 |\u1290\u1343\u1295| \u12AD\u1265|\u1361 \u1275|\u1265\u121B\u12D5|\u1275 \u1265|\u1273\u12CD\u1295|\u1265\u1290\u1343| \u1265\u1290|\u1265 \u1293|\u12DC\u130D\u1290| \u12DC\u130D|\u1235\u1273\u1275|\u130D\u1235\u1273|\u1265 \u1215|\u12CA \u12A6|\u1265 \u1295|\u1263\u122D\u1295|\u1361 \u12DD| \u1265\u1213|\u1290\u1272 | \u1290\u1272|\u122A\u130B\u1308|\u1308\u1260\u1295|\u134D\u1275\u1213|\u120B\u12CD\u1295|\u1363 \u12A8|\u1343\u12A2 |\u12C8\u1343\u12A2| \u12C8\u1343|\u1308 \u1235|\u1308\u1308 |\u1295\u1308\u1308|\u12F0\u1295\u1308|\u12DD\u1270\u12F0|\u130A \u12AB|\u1203\u1308\u122B|\u1230\u122A\u1273|\u1209 \u1218|\u1235\u1272 |\u12DA \u1265|\u1208\u12CB |\u12D8\u12ED |\u120D\u12D5\u120A| \u120D\u12D5|\u12F5 \u12A6|\u12AD\u1265\u1229|\u12CA \u12AD|\u120D \u12A5|\u1275 \u12AD| \u12F5\u1215| \u121D\u1295|\u1205\u12ED\u12C8|\u12ED\u134D\u1340|\u12D3\u1208\u121D|\u1363 \u1215|\u1265 \u12A5| \u121D\u121D|\u122D\u1363 | \u1213\u12F0|\u1361 \u1265|\u1308 \u12A5|\u130B\u1308 |\u120D\u12CE |\u12F5\u120D\u12CE|\u12A6\u12F5\u120D| \u1265\u1203| \u1265\u121D|\u121D \u1265|\u1275 \u12A5|\u1263\u1275 |\u1263\u1208 |\u12D5\u1263\u1208|\u121D\u12D5\u1263| \u121D\u12D5| \u1265\u122D|\u12F5\u1215\u1290|\u1265 \u1230|\u122A \u12AD|\u1295 \u1235|\u1271\u1295 |\u1272 \u1265|\u12CA \u12CD| \u121D\u1325| \u1218\u122A|\u1363 \u121D| \u121D\u130D|\u1271 \u12C8| \u1295\u1265|\u122D \u1295|\u1263\u122D |\u121D\u1235 |\u1309\u1305\u1208| \u1309\u1305|\u1215\u1295 | \u134D\u1275|\u1295 \u134D|\u1213\u12F3\u122D| \u1213\u12F3|\u1295\u1295 |\u1271 \u12AD|\u1308\u120D\u130D|\u1270\u130D\u1263| \u1270\u130D|\u1261\u122B\u1275|\u1215\u1261\u122B| \u1215\u1261|\u12F5\u1265 |\u12CD\u12F5\u1265| \u12CD\u12F5|\u12DA \u1218|\u1215\u1273\u1275"
    },
    Hebrew: {
        heb: "\u05D5\u05EA |\u05D9\u05DD |\u05DB\u05DC | \u05DB\u05DC|\u05D3\u05DD |\u05D0\u05D3\u05DD| \u05D6\u05DB|\u05DC \u05D0|\u05D9\u05D5\u05EA| \u05D0\u05D3|\u05EA \u05D4|\u05D9 \u05DC|\u05DB\u05D0\u05D9|\u05D0\u05D9 |\u05D6\u05DB\u05D0| \u05E9\u05DC|\u05DC\u05D0 | \u05D5\u05DC|\u05DC \u05D4|\u05D9\u05EA |\u05E9\u05DC |\u05E8\u05D5\u05EA|\u05D0\u05D5 | \u05D0\u05D5|\u05EA \u05D5|\u05DD \u05D6| \u05DC\u05D0|\u05D5\u05D9\u05D5|\u05D9\u05DF |\u05D9\u05E8\u05D5|\u05D6\u05DB\u05D5|\u05E8\u05D4 | \u05DC\u05D4|\u05EA \u05DC|\u05EA \u05E9|\u05DD \u05DC| \u05D4\u05DE|\u05D5\u05DF |\u05D5 \u05D1| \u05D5\u05D4|\u05D4 \u05E9| \u05D4\u05D7|\u05D5 \u05DC|\u05D5\u05EA\u05D9|\u05D7\u05D9\u05E8|\u05EA\u05D5 |\u05D9\u05D9\u05DD|\u05EA \u05D1|\u05E0\u05D4 |\u05D0\u05EA |\u05D4 \u05D4|\u05EA \u05D0| \u05D5\u05D1| \u05D1\u05DE|\u05D5\u05DA |\u05EA \u05DB|\u05E2\u05DC |\u05D0 \u05D9|\u05DC\u05D4 |\u05D4 \u05D0|\u05D9\u05D4 | \u05D0\u05EA|\u05D3\u05D4 | \u05E2\u05DC|\u05DD \u05D5|\u05DD \u05D1|\u05E0\u05D9 |\u05D5 \u05DB| \u05E9\u05D5| \u05E9\u05D4|\u05DB\u05D5\u05EA|\u05D4 \u05DB|\u05DB\u05D5\u05D9| \u05DC\u05D1|\u05D1\u05D5\u05D3|\u05D1\u05D5\u05EA|\u05DD \u05D4|\u05D1\u05D7\u05D9| \u05D1\u05D9|\u05E0\u05D5\u05EA|\u05D4 \u05DC| \u05D4\u05D0|\u05D0\u05D5\u05DE|\u05D4 \u05D1|\u05D4 \u05D5|\u05D4\u05D7\u05D9|\u05DC\u05D9\u05EA|\u05D9\u05E8\u05D4|\u05EA \u05DE|\u05D9\u05E0\u05D5| \u05DC\u05E2|\u05DF \u05E9|\u05D4 \u05DE|\u05DC\u05D0\u05D5|\u05DE\u05D9 |\u05E4\u05DC\u05D9|\u05D5\u05D4 |\u05E9\u05D5\u05D5|\u05DF \u05D5|\u05D7\u05D9\u05E0|\u05D5 \u05D0|\u05D5 \u05D5| \u05D4\u05DB|\u05D7\u05D5\u05E7|\u05D4\u05D7\u05D5|\u05D9 \u05D4|\u05DD \u05D0|\u05D3\u05D5\u05EA|\u05DC\u05D5 |\u05D1\u05D9\u05DF|\u05E2\u05D4 | \u05D0\u05D7|\u05DC\u05D9\u05D4| \u05DC\u05E4|\u05DF \u05DC| \u05D7\u05D5| \u05D1\u05E0|\u05E0\u05D5\u05DA|\u05D5\u05E4\u05E9|\u05D7\u05D5\u05E4|\u05D5\u05E8 |\u05D5\u05D3 |\u05D4\u05D2\u05E0|\u05D5\u05E7 | \u05D1\u05DB|\u05D9\u05DC\u05D9| \u05D9\u05D4| \u05D4\u05D6|\u05D9 \u05D5| \u05D4\u05D9|\u05D5\u05D0 |\u05D0\u05DC\u05D9|\u05D5 \u05D4|\u05E4\u05D9 |\u05D5\u05DC\u05D4|\u05D5\u05DE\u05D9|\u05DC \u05DE| \u05D4\u05E4|\u05D5\u05E6\u05D9|\u05DA \u05D4|\u05DF \u05D1|\u05D5\u05D0\u05D9|\u05E8\u05DA |\u05D7\u05D5\u05EA|\u05D0\u05D9\u05DF|\u05E8\u05E6\u05D5|\u05E8\u05D1\u05D5|\u05DD \u05E9|\u05DC\u05D9\u05DC|\u05D9\u05D5 |\u05E9\u05D5\u05D0| \u05DC\u05DE|\u05E8 \u05D0|\u05DF \u05D4| \u05D4\u05D3| \u05D1\u05D7|\u05D5\u05D5\u05D4|\u05DC\u05D4\u05D2|\u05E4\u05E0\u05D9|\u05D4\u05D9\u05D4| \u05DC\u05D7| \u05DC\u05D5|\u05D9\u05D1\u05D5|\u05DC\u05EA |\u05E0\u05EA\u05D5| \u05D4\u05D5|\u05DE\u05D3\u05D9|\u05DC\u05DC |\u05D0\u05D7\u05E8|\u05D4 \u05E4|\u05D9\u05D0 |\u05D4\u05D9\u05D0|\u05DC\u05DC\u05D0|\u05D6\u05D5 |\u05D4\u05DB\u05E8| \u05D1\u05D4|\u05E8\u05D5\u05D9| \u05D0\u05D9|\u05E0\u05D5 |\u05EA\u05D9\u05D4|\u05D3\u05D5 |\u05D1\u05E0\u05D9|\u05DC \u05D1|\u05E2\u05D1\u05D5|\u05D9\u05D0\u05DC|\u05E6\u05D9\u05D0|\u05E1\u05D5\u05E6| \u05E1\u05D5|\u05D5\u05D3\u05D4| \u05D7\u05D9|\u05E9\u05D9\u05EA|\u05E4\u05E9\u05D9|\u05D3\u05E8\u05DA| \u05D3\u05E8|\u05D4\u05DF | \u05D4\u05E2|\u05D7\u05D4 | \u05D1\u05E9|\u05D5\u05D9 |\u05EA\u05D5\u05DA|\u05DE\u05E2\u05E9|\u05D2\u05E0\u05D4|\u05D4\u05DB\u05DC|\u05E9\u05D9\u05D5|\u05DE\u05E9\u05E4| \u05E2\u05D1|\u05D9\u05D4\u05D9|\u05DC\u05D7\u05D9|\u05D2\u05D1\u05DC|\u05E9\u05E8\u05D9| \u05E9\u05E8|\u05DE\u05E0\u05D5|\u05D9 \u05E9|\u05D3\u05D9\u05E0| \u05D9\u05D5| \u05DE\u05E2|\u05D7\u05D1\u05E8|\u05E9\u05D4\u05D9| \u05D6\u05D5|\u05D6\u05D4 |\u05D0\u05D9\u05E9|\u05DC\u05E4\u05D9|\u05D4\u05DD |\u05DD \u05E0|\u05D9 \u05D0|\u05DB\u05DC\u05DC|\u05E2\u05D5\u05EA|\u05E0\u05E9\u05D5|\u05D5\u05EA\u05D5|\u05D9\u05D4\u05DF|\u05D2\u05D5\u05D3|\u05D9\u05E4\u05D5|\u05D0 \u05D1|\u05D0\u05E8\u05E6| \u05D0\u05E8|\u05DB\u05D1\u05D5| \u05D1\u05D6|\u05E9\u05D4 |\u05E9\u05D5\u05EA|\u05E7 \u05D1| \u05E4\u05DC|\u05EA\u05D9\u05D5|\u05E8\u05D9\u05E8|\u05D5\u05D4\u05D7|\u05E1\u05D5\u05D3|\u05D9\u05E1\u05D5|\u05EA \u05D6|\u05E8\u05D9\u05DD|\u05E2\u05DD |\u05DC \u05D6|\u05D0\u05D9\u05DD|\u05D5\u05DD |\u05D5\u05DC\u05D0| \u05DC\u05DB|\u05D9\u05E9\u05D9|\u05DF \u05D0|\u05D4\u05D6\u05DB|\u05DD \u05D9|\u05D4\u05D2\u05D1| \u05D4\u05D2|\u05D5\u05E0\u05D5|\u05D5\u05D1\u05D9|\u05D4\u05D5\u05D0|\u05EA\u05D4 |\u05D4\u05DE\u05D3|\u05D3 \u05D0|\u05D9\u05D3\u05D4| \u05DC\u05D9|\u05EA\u05D9 |\u05D0 \u05DC|\u05E4\u05D5\u05DC| \u05DC\u05E9|\u05D4\u05E4\u05DC|\u05D0 \u05D4| \u05DC\u05DC|\u05D4 \u05D6| \u05E9\u05E0|\u05D7\u05E8\u05D5| \u05D1\u05EA|\u05DD \u05DB| \u05D1\u05E2| \u05D5\u05E9|\u05E9\u05E8 |\u05D5\u05D1\u05D7|\u05D4\u05E9\u05EA|\u05D9\u05D3\u05D9| \u05D4\u05E8|\u05D1\u05D5\u05E8|\u05E6\u05D9\u05D1| \u05D0\u05DE|\u05D1\u05E8\u05D4|\u05E2\u05D9\u05EA|\u05D4 \u05D7|\u05D4\u05E0\u05E9| \u05D4\u05E0|\u05E8\u05D7\u05D5|\u05D6\u05E8\u05D7|\u05D0\u05D6\u05E8|\u05D5\u05D7\u05D3|\u05DE\u05D5\u05EA",
        ydd: " \u05E4\u05BF|\u05E2\u05E8 |\u05D5\u05DF |\u05D8 \u05D0|\u05D3\u05E2\u05E8| \u05D0\u05B7|\u05DF \u05D0| \u05D0\u05D5|\u05D0\u05B7\u05E8|\u05D0\u05D5\u05DF| \u05D0\u05F1|\u05E2\u05DF |\u05DF \u05E4| \u05D0\u05D9|\u05E4\u05BF\u05D5|\u05E8\u05E2\u05DB| \u05E8\u05E2|\u05E2\u05DB\u05D8|\u05BF\u05D5\u05DF|\u05F1\u05E3 |\u05D0\u05F1\u05E3|\u05E4\u05BF\u05D0| \u05D3\u05E2|\u05DB\u05D8 |\u05D0\u05B7 | \u05D6\u05F2|\u05D6\u05F2\u05B7| \u05D2\u05E2|\u05D0\u05B8\u05E1|\u05D5\u05E0\u05D2|\u05BF\u05D0\u05B7| \u05D4\u05D0|\u05D4\u05D0\u05B8|\u05DF \u05D3| \u05D0\u05B8|\u05B7\u05DF | \u05D3\u05D9|\u05D0\u05B7\u05DC|\u05F0\u05D0\u05B8| \u05F0\u05D0|\u05E0\u05D2 |\u05D0\u05B7\u05E0|\u05E0\u05D9\u05D8|\u05D0\u05B8\u05D8|\u05D3\u05D9 |\u05F2\u05B7\u05DF|\u05B8\u05D8 |\u05D0\u05B8\u05DC|\u05D9\u05D8 |\u05E2\u05D3\u05E2|\u05D9\u05E2\u05D3| \u05D9\u05E2|\u05DF \u05D6|\u05D0\u05B8\u05E8|\u05E8\u05F2\u05B7|\u05B8\u05E1 |\u05DE\u05E2\u05DF|\u05D1\u05D0\u05B7| \u05DE\u05E2| \u05D1\u05D0|\u05E0\u05D0\u05B7|\u05D8\u05DF |\u05D6\u05D0\u05B8|\u05B7 \u05E8|\u05D0\u05B8\u05D3|\u05E8 \u05D0|\u05D9\u05DF |\u05D0\u05D9\u05DF|\u05E4\u05BF\u05E8|\u05DF \u05D2|\u05E8 \u05D4|\u05DF \u05F0|\u05BF\u05E8\u05F2|\u05B8\u05D3\u05E2|\u05D9\u05D6 | \u05D6\u05D0| \u05E6\u05D5|\u05E2 \u05D0|\u05D0\u05B7\u05E6|\u05D0\u05D9\u05D6|\u05B7\u05E6\u05D9|\u05B7\u05E0\u05D3|\u05F2\u05B7\u05E0|\u05DC\u05E2\u05DB| \u05E4\u05BC|\u05B7\u05E4\u05BF|\u05D0\u05B7\u05E4| \u05E0\u05D9| \u05F0\u05E2|\u05F2\u05D8 |\u05E2\u05D6\u05E2|\u05D2\u05E2\u05D6|\u05D8\u05E2\u05E8|\u05E8\u05D0\u05B7|\u05B8\u05DC |\u05D0\u05B8\u05E0|\u05DC\u05D0\u05B7|\u05E4\u05BF\u05D8|\u05DE\u05D9\u05D8|\u05E8\u05DF |\u05D3\u05D9\u05E7|\u05DC\u05DF |\u05DF \u05E0|\u05D8 \u05D3|\u05D1\u05DF |\u05B7\u05DC\u05E2|\u05E7\u05D8 |\u05D8\u05D9\u05E7|\u05E9\u05D0\u05B7| \u05DE\u05D9|\u05E2\u05E0\u05D8|\u05E8 \u05DE|\u05D8\u05DC\u05E2|\u05D0\u05B7\u05E7|\u05E0\u05E2\u05DF|\u05E3 \u05D0|\u05DB\u05E2\u05E8|\u05D8\u05D0\u05B8|\u05E2\u05E8\u05E2|\u05D9\u05E2 |\u05B7\u05E0\u05E2|\u05E8\u05D5\u05E0|\u05E2\u05DB\u05E2|\u05D9\u05E7 | \u05D3\u05D0|\u05D9\u05E7\u05E2|\u05B7\u05E8\u05D1|\u05D9\u05D8\u05BE|\u05E1\u05E2\u05E8|\u05D4\u05F2\u05D8|\u05B7\u05D4\u05F2|\u05F2\u05B7\u05D4|\u05DC\u05E2 |\u05DF \u05D1| \u05D6\u05D9|\u05DF \u05DE|\u05E4\u05BC\u05E8|\u05D2\u05DF |\u05E2\u05DD |\u05E8 \u05D2| \u05E7\u05F2|\u05B8\u05E8 | \u05D8\u05D0|\u05D9\u05D0\u05B8|\u05E6\u05D9\u05D0|\u05D9\u05E9\u05E2|\u05E2 \u05E4|\u05BE\u05D0\u05D9|\u05D8\u05BE\u05D0|\u05BE\u05E0\u05D9|\u05D8\u05D0\u05B7|\u05DE\u05E2\u05E0|\u05E0\u05D2\u05E2|\u05D0\u05F1\u05E1|\u05E4\u05BF\u05E2|\u05D3\u05D0\u05B8|\u05DF \u05E7|\u05E8 \u05E4|\u05E2\u05D8 |\u05B8\u05E0\u05D0|\u05E8\u05BE\u05E0|\u05E2\u05E8\u05BE|\u05B8\u05E1\u05E2|\u05E6\u05D9\u05E2|\u05D8 \u05E4|\u05E6\u05D5 |\u05D2 \u05D0|\u05D8 \u05E6|\u05D9\u05E7\u05D8|\u05D9\u05DA |\u05D6\u05D9\u05DA|\u05E0\u05D3 |\u05E7\u05DF |\u05DC\u05F2\u05B7| \u05D2\u05DC|\u05F0\u05E2\u05E8|\u05D6\u05E2\u05DC|\u05E7\u05F2\u05D8|\u05D0\u05B8\u05D1|\u05E7\u05E2 |\u05DB\u05E2 |\u05D9\u05E7\u05DF| \u05E6\u05D9|\u05F2\u05E0\u05E2|\u05E2\u05E0\u05E2|\u05E2\u05E8\u05DF| \u05E0\u05D0|\u05E0\u05D3\u05E2|\u05E0\u05D8\u05E2|\u05E8 \u05D3|\u05BF\u05D8 |\u05DF \u05D9|\u05E3 \u05E4|\u05D2\u05E2\u05DF|\u05D3\u05D5\u05E8|\u05E1 \u05D0|\u05DF \u05DC|\u05DF \u05D4|\u05D8 \u05F0| \u05E9\u05D5|\u05E2\u05E1 |\u05E1 \u05D6|\u05E4\u05BC\u05E2| \u05DC\u05D0|\u05E7\u05E2\u05E8|\u05D0\u05B7\u05D8|\u05D9\u05D8\u05E2|\u05E8\u05E2 |\u05E9\u05E2 |\u05D5\u05E0\u05D8|\u05B7\u05E8\u05D0|\u05DC \u05D6|\u05D2\u05DC\u05F2|\u05DC\u05E9\u05D0|\u05E2\u05DC\u05E9|\u05D1\u05E2\u05D8| \u05D3\u05D5|\u05E2\u05E4\u05BF|\u05DB\u05DF |\u05E9\u05DF |\u05D9\u05DD |\u05E9\u05D8\u05E2|\u05DF \u05E9|\u05E0\u05E2\u05DD|\u05E7\u05F2\u05E0|\u05D0\u05B8\u05E4|\u05E0\u05D8 |\u05D8\u05E2\u05D8|\u05DC\u05D9\u05D8| \u05E9\u05D8|\u05F2\u05D8\u05DF|\u05E8 \u05F0|\u05E0\u05D8\u05E9|\u05E8\u05D1\u05E2|\u05D9\u05D5\u05E0|\u05E8\u05DA |\u05D5\u05E8\u05DA|\u05E2\u05E8\u05E6|\u05D9 \u05E4|\u05E8\u05E2\u05E1| \u05D2\u05E8|\u05F2\u05B7\u05DB|\u05E8\u05D0\u05B8|\u05D2 \u05E4|\u05E6\u05D9 |\u05DD \u05D8|\u05E8\u05E2\u05E0|\u05E7 \u05D0|\u05B8\u05E4\u05BC|\u05DC\u05E2\u05E8|\u05D0\u05D9\u05E0|\u05E8\u05E2\u05DC|\u05BF\u05D0\u05B8|\u05E2 \u05E8|\u05D9 \u05D0|\u05B7\u05E8\u05E2|\u05E8 \u05D6| \u05DB\u05BC|\u05DA \u05D0|\u05E6\u05D9\u05D5|\u05E8\u05E6\u05D9|\u05D2 \u05D6|\u05E8 \u05D1| \u05DE\u05D0|\u05E2\u05DE\u05E2|\u05E6\u05DF |\u05E0\u05E2\u05DE|\u05E9\u05E4\u05BC|\u05D0\u05B7\u05DF|\u05E0\u05D8\u05DC|\u05B8\u05D1\u05DF|\u05B7\u05E7\u05D8|\u05DF \u05E6|\u05D2\u05E2\u05E8|\u05E2\u05E8\u05D9| \u05E7\u05E2|\u05DF \u05E2|\u05E2\u05E5 |\u05D6\u05E2\u05E5|\u05DC\u05F1\u05D8| \u05DC\u05F1| \u05F0\u05D9|\u05DD \u05D0|\u05D0\u05D9\u05DD|\u05D5\u05DD |\u05D8\u05E8\u05D0|\u05E4\u05BF\u05DF|\u05B7\u05E8\u05D6|\u05D0\u05D5\u05DE|\u05DE\u05D0\u05B8| \u05E7\u05D5|\u05B7\u05DC\u05D9|\u05E4\u05BC\u05D0|\u05DC\u05D9\u05D2|\u05D6 \u05D0|\u05E7\u05DC\u05D0|\u05E3 \u05D3|\u05E2\u05E8\u05E9|\u05E4\u05BF\u05D9|\u05D0\u05B7\u05E9"
    }
};
var Dc = 2048, zc = 10, qo = 300, Ii = {}.hasOwnProperty, Nt, xi = {};
for (Nt in Mi)
    if (Ii.call(Mi, Nt)) {
        let a = Mi[Nt], e;
        xi[Nt] = {};
        for (e in a)
            if (Ii.call(a, e)) {
                let t = a[e].split("|")
                  , i = {}
                  , o = t.length;
                for (; o--; )
                    i[t[o]] = o;
                xi[Nt][e] = i
            }
    }
function Ei(a, e) {
    return Nc(a, e)[0][0]
}
function Nc(a, e={}) {
    let t = [...e.whitelist || [], ...e.only || []]
      , i = [...e.blacklist || [], ...e.ignore || []]
      , o = e.minLength !== null && e.minLength !== void 0 ? e.minLength : zc;
    if (!a || a.length < o)
        return Dn();
    a = a.slice(0, Dc);
    let l = Oc(a, Uo);
    return !l[0] || !(l[0]in xi) ? !l[0] || l[1] === 0 || !Vo(l[0], t, i) ? Dn() : Ho(l[0]) : Pc(a, Fc(Go(a), xi[l[0]], t, i))
}
function Pc(a, e) {
    let t = e[0][1]
      , i = a.length * qo - t
      , o = -1;
    for (; ++o < e.length; )
        e[o][1] = 1 - (e[o][1] - t) / i || 0;
    return e
}
function Oc(a, e) {
    let t = -1, i, o;
    for (o in e)
        if (Ii.call(e, o)) {
            let l = _c(a, e[o]);
            l > t && (t = l,
            i = o)
        }
    return [i, t]
}
function _c(a, e) {
    let t = a.match(e);
    return (t ? t.length : 0) / a.length || 0
}
function Fc(a, e, t, i) {
    e = Rc(e, t, i);
    let o = [], l;
    if (e)
        for (l in e)
            Ii.call(e, l) && o.push([l, Bc(a, e[l])]);
    return o.length === 0 ? Dn() : o.sort(Gc)
}
function Bc(a, e) {
    let t = 0
      , i = -1;
    for (; ++i < a.length; ) {
        let o = a[i]
          , l = qo;
        o[0]in e && (l = o[1] - e[o[0]] - 1,
        l < 0 && (l = -l)),
        t += l
    }
    return t
}
function Rc(a, e, t) {
    if (e.length === 0 && t.length === 0)
        return a;
    let i = {}, o;
    for (o in a)
        Vo(o, e, t) && (i[o] = a[o]);
    return i
}
function Vo(a, e, t) {
    return e.length === 0 && t.length === 0 ? !0 : (e.length === 0 || e.includes(a)) && !t.includes(a)
}
function Dn() {
    return Ho("und")
}
function Ho(a) {
    return [[a, 1]]
}
function Gc(a, e) {
    return a[1] - e[1]
}
var Xe = {
    NIPPON: "nippon",
    PASSPORT: "passport",
    HEPBURN: "hepburn"
}
  , zn = {
    nippon: {
        "\uFF11": "1",
        "\uFF12": "2",
        "\uFF13": "3",
        "\uFF14": "4",
        "\uFF15": "5",
        "\uFF16": "6",
        "\uFF17": "7",
        "\uFF18": "8",
        "\uFF19": "9",
        "\uFF10": "0",
        "\uFF01": "!",
        "\u201C": '"',
        "\u201D": '"',
        "\uFF03": "#",
        "\uFF04": "$",
        "\uFF05": "%",
        "\uFF06": "&",
        "\u2019": "'",
        "\uFF08": "(",
        "\uFF09": ")",
        "\uFF1D": "=",
        "\uFF5E": "~",
        "\uFF5C": "|",
        "\uFF20": "@",
        "\u2018": "`",
        "\uFF0B": "+",
        "\uFF0A": "*",
        "\uFF1B": ";",
        "\uFF1A": ":",
        "\uFF1C": "<",
        "\uFF1E": ">",
        "\u3001": ",",
        "\u3002": ".",
        "\uFF0F": "/",
        "\uFF1F": "?",
        "\uFF3F": "_",
        "\u30FB": "\uFF65",
        "\u300C": '"',
        "\u300D": '"',
        "\uFF5B": "{",
        "\uFF5D": "}",
        "\uFFE5": "\\",
        "\uFF3E": "^",
        \u3042: "a",
        \u3044: "i",
        \u3046: "u",
        \u3048: "e",
        \u304A: "o",
        \u30A2: "a",
        \u30A4: "i",
        \u30A6: "u",
        \u30A8: "e",
        \u30AA: "o",
        \u304B: "ka",
        \u304D: "ki",
        \u304F: "ku",
        \u3051: "ke",
        \u3053: "ko",
        \u30AB: "ka",
        \u30AD: "ki",
        \u30AF: "ku",
        \u30B1: "ke",
        \u30B3: "ko",
        \u3055: "sa",
        \u3057: "si",
        \u3059: "su",
        \u305B: "se",
        \u305D: "so",
        \u30B5: "sa",
        \u30B7: "si",
        \u30B9: "su",
        \u30BB: "se",
        \u30BD: "so",
        \u305F: "ta",
        \u3061: "ti",
        \u3064: "tu",
        \u3066: "te",
        \u3068: "to",
        \u30BF: "ta",
        \u30C1: "ti",
        \u30C4: "tu",
        \u30C6: "te",
        \u30C8: "to",
        \u306A: "na",
        \u306B: "ni",
        \u306C: "nu",
        \u306D: "ne",
        \u306E: "no",
        \u30CA: "na",
        \u30CB: "ni",
        \u30CC: "nu",
        \u30CD: "ne",
        \u30CE: "no",
        \u306F: "ha",
        \u3072: "hi",
        \u3075: "hu",
        \u3078: "he",
        \u307B: "ho",
        \u30CF: "ha",
        \u30D2: "hi",
        \u30D5: "hu",
        \u30D8: "he",
        \u30DB: "ho",
        \u307E: "ma",
        \u307F: "mi",
        \u3080: "mu",
        \u3081: "me",
        \u3082: "mo",
        \u30DE: "ma",
        \u30DF: "mi",
        \u30E0: "mu",
        \u30E1: "me",
        \u30E2: "mo",
        \u3084: "ya",
        \u3086: "yu",
        \u3088: "yo",
        \u30E4: "ya",
        \u30E6: "yu",
        \u30E8: "yo",
        \u3089: "ra",
        \u308A: "ri",
        \u308B: "ru",
        \u308C: "re",
        \u308D: "ro",
        \u30E9: "ra",
        \u30EA: "ri",
        \u30EB: "ru",
        \u30EC: "re",
        \u30ED: "ro",
        \u308F: "wa",
        \u3090: "wi",
        \u3091: "we",
        \u3092: "wo",
        \u30EF: "wa",
        \u30F0: "wi",
        \u30F1: "we",
        \u30F2: "wo",
        \u304C: "ga",
        \u304E: "gi",
        \u3050: "gu",
        \u3052: "ge",
        \u3054: "go",
        \u30AC: "ga",
        \u30AE: "gi",
        \u30B0: "gu",
        \u30B2: "ge",
        \u30B4: "go",
        \u3056: "za",
        \u3058: "zi",
        \u305A: "zu",
        \u305C: "ze",
        \u305E: "zo",
        \u30B6: "za",
        \u30B8: "zi",
        \u30BA: "zu",
        \u30BC: "ze",
        \u30BE: "zo",
        \u3060: "da",
        \u3062: "di",
        \u3065: "du",
        \u3067: "de",
        \u3069: "do",
        \u30C0: "da",
        \u30C2: "di",
        \u30C5: "du",
        \u30C7: "de",
        \u30C9: "do",
        \u3070: "ba",
        \u3073: "bi",
        \u3076: "bu",
        \u3079: "be",
        \u307C: "bo",
        \u30D0: "ba",
        \u30D3: "bi",
        \u30D6: "bu",
        \u30D9: "be",
        \u30DC: "bo",
        \u3071: "pa",
        \u3074: "pi",
        \u3077: "pu",
        \u307A: "pe",
        \u307D: "po",
        \u30D1: "pa",
        \u30D4: "pi",
        \u30D7: "pu",
        \u30DA: "pe",
        \u30DD: "po",
        \u304D\u3083: "kya",
        \u304D\u3085: "kyu",
        \u304D\u3087: "kyo",
        \u3057\u3083: "sya",
        \u3057\u3085: "syu",
        \u3057\u3087: "syo",
        \u3061\u3083: "tya",
        \u3061\u3085: "tyu",
        \u3061\u3087: "tyo",
        \u306B\u3083: "nya",
        \u306B\u3085: "nyu",
        \u306B\u3087: "nyo",
        \u3072\u3083: "hya",
        \u3072\u3085: "hyu",
        \u3072\u3087: "hyo",
        \u307F\u3083: "mya",
        \u307F\u3085: "myu",
        \u307F\u3087: "myo",
        \u308A\u3083: "rya",
        \u308A\u3085: "ryu",
        \u308A\u3087: "ryo",
        \u30AD\u30E3: "kya",
        \u30AD\u30E5: "kyu",
        \u30AD\u30E7: "kyo",
        \u30B7\u30E3: "sya",
        \u30B7\u30E5: "syu",
        \u30B7\u30E7: "syo",
        \u30C1\u30E3: "tya",
        \u30C1\u30E5: "tyu",
        \u30C1\u30E7: "tyo",
        \u30CB\u30E3: "nya",
        \u30CB\u30E5: "nyu",
        \u30CB\u30E7: "nyo",
        \u30D2\u30E3: "hya",
        \u30D2\u30E5: "hyu",
        \u30D2\u30E7: "hyo",
        \u30DF\u30E3: "mya",
        \u30DF\u30E5: "myu",
        \u30DF\u30E7: "myo",
        \u30EA\u30E3: "rya",
        \u30EA\u30E5: "ryu",
        \u30EA\u30E7: "ryo",
        \u304E\u3083: "gya",
        \u304E\u3085: "gyu",
        \u304E\u3087: "gyo",
        \u3058\u3083: "zya",
        \u3058\u3085: "zyu",
        \u3058\u3087: "zyo",
        \u3062\u3083: "dya",
        \u3062\u3085: "dyu",
        \u3062\u3087: "dyo",
        \u3073\u3083: "bya",
        \u3073\u3085: "byu",
        \u3073\u3087: "byo",
        \u3074\u3083: "pya",
        \u3074\u3085: "pyu",
        \u3074\u3087: "pyo",
        \u304F\u308E: "kwa",
        \u3050\u308E: "gwa",
        \u30AE\u30E3: "gya",
        \u30AE\u30E5: "gyu",
        \u30AE\u30E7: "gyo",
        \u30B8\u30E3: "zya",
        \u30B8\u30E5: "zyu",
        \u30B8\u30E7: "zyo",
        \u30C2\u30E3: "dya",
        \u30C2\u30E5: "dyu",
        \u30C2\u30E7: "dyo",
        \u30D3\u30E3: "bya",
        \u30D3\u30E5: "byu",
        \u30D3\u30E7: "byo",
        \u30D4\u30E3: "pya",
        \u30D4\u30E5: "pyu",
        \u30D4\u30E7: "pyo",
        \u30AF\u30EE: "kwa",
        \u30B0\u30EE: "gwa",
        \u3041: "a",
        \u3043: "i",
        \u3045: "u",
        \u3047: "e",
        \u3049: "o",
        \u3083: "ya",
        \u3085: "yu",
        \u3087: "yo",
        \u308E: "wa",
        \u30A1: "a",
        \u30A3: "i",
        \u30A5: "u",
        \u30A7: "e",
        \u30A9: "o",
        \u30E3: "ya",
        \u30E5: "yu",
        \u30E7: "yo",
        \u30EE: "wa",
        \u30F5: "ka",
        \u30F6: "ke",
        \u3093: "n",
        \u30F3: "n",
        "\u3000": " ",
        \u3044\u3047: "ye",
        \u304D\u3047: "kye",
        \u304F\u3043: "kwi",
        \u304F\u3047: "kwe",
        \u304F\u3049: "kwo",
        \u3050\u3043: "gwi",
        \u3050\u3047: "gwe",
        \u3050\u3049: "gwo",
        \u30A4\u30A7: "ye",
        \u30AD\u30A7: "kya",
        \u30AF\u30A3: "kwi",
        \u30AF\u30A7: "kwe",
        \u30AF\u30A9: "kwo",
        \u30B0\u30A3: "gwi",
        \u30B0\u30A7: "gwe",
        \u30B0\u30A9: "gwo",
        \u3057\u3047: "sye",
        \u3058\u3047: "zye",
        \u3059\u3043: "swi",
        \u305A\u3043: "zwi",
        \u3061\u3047: "tye",
        \u3064\u3041: "twa",
        \u3064\u3043: "twi",
        \u3064\u3047: "twe",
        \u3064\u3049: "two",
        \u306B\u3047: "nye",
        \u3072\u3047: "hye",
        \u3075\u3041: "hwa",
        \u3075\u3043: "hwi",
        \u3075\u3047: "hwe",
        \u3075\u3049: "hwo",
        \u3075\u3085: "hwyu",
        \u3075\u3087: "hwyo",
        \u30B7\u30A7: "sye",
        \u30B8\u30A7: "zye",
        \u30B9\u30A3: "swi",
        \u30BA\u30A3: "zwi",
        \u30C1\u30A7: "tye",
        \u30C4\u30A1: "twa",
        \u30C4\u30A3: "twi",
        \u30C4\u30A7: "twe",
        \u30C4\u30A9: "two",
        \u30CB\u30A7: "nye",
        \u30D2\u30A7: "hye",
        \u30D5\u30A1: "hwa",
        \u30D5\u30A3: "hwi",
        \u30D5\u30A7: "hwe",
        \u30D5\u30A9: "hwo",
        \u30D5\u30E5: "hwyu",
        \u30D5\u30E7: "hwyo"
    },
    passport: {
        "\uFF11": "1",
        "\uFF12": "2",
        "\uFF13": "3",
        "\uFF14": "4",
        "\uFF15": "5",
        "\uFF16": "6",
        "\uFF17": "7",
        "\uFF18": "8",
        "\uFF19": "9",
        "\uFF10": "0",
        "\uFF01": "!",
        "\u201C": '"',
        "\u201D": '"',
        "\uFF03": "#",
        "\uFF04": "$",
        "\uFF05": "%",
        "\uFF06": "&",
        "\u2019": "'",
        "\uFF08": "(",
        "\uFF09": ")",
        "\uFF1D": "=",
        "\uFF5E": "~",
        "\uFF5C": "|",
        "\uFF20": "@",
        "\u2018": "`",
        "\uFF0B": "+",
        "\uFF0A": "*",
        "\uFF1B": ";",
        "\uFF1A": ":",
        "\uFF1C": "<",
        "\uFF1E": ">",
        "\u3001": ",",
        "\u3002": ".",
        "\uFF0F": "/",
        "\uFF1F": "?",
        "\uFF3F": "_",
        "\u30FB": "\uFF65",
        "\u300C": '"',
        "\u300D": '"',
        "\uFF5B": "{",
        "\uFF5D": "}",
        "\uFFE5": "\\",
        "\uFF3E": "^",
        \u3042: "a",
        \u3044: "i",
        \u3046: "u",
        \u3048: "e",
        \u304A: "o",
        \u30A2: "a",
        \u30A4: "i",
        \u30A6: "u",
        \u30A8: "e",
        \u30AA: "o",
        \u304B: "ka",
        \u304D: "ki",
        \u304F: "ku",
        \u3051: "ke",
        \u3053: "ko",
        \u30AB: "ka",
        \u30AD: "ki",
        \u30AF: "ku",
        \u30B1: "ke",
        \u30B3: "ko",
        \u3055: "sa",
        \u3057: "shi",
        \u3059: "su",
        \u305B: "se",
        \u305D: "so",
        \u30B5: "sa",
        \u30B7: "shi",
        \u30B9: "su",
        \u30BB: "se",
        \u30BD: "so",
        \u305F: "ta",
        \u3061: "chi",
        \u3064: "tsu",
        \u3066: "te",
        \u3068: "to",
        \u30BF: "ta",
        \u30C1: "chi",
        \u30C4: "tsu",
        \u30C6: "te",
        \u30C8: "to",
        \u306A: "na",
        \u306B: "ni",
        \u306C: "nu",
        \u306D: "ne",
        \u306E: "no",
        \u30CA: "na",
        \u30CB: "ni",
        \u30CC: "nu",
        \u30CD: "ne",
        \u30CE: "no",
        \u306F: "ha",
        \u3072: "hi",
        \u3075: "fu",
        \u3078: "he",
        \u307B: "ho",
        \u30CF: "ha",
        \u30D2: "hi",
        \u30D5: "fu",
        \u30D8: "he",
        \u30DB: "ho",
        \u307E: "ma",
        \u307F: "mi",
        \u3080: "mu",
        \u3081: "me",
        \u3082: "mo",
        \u30DE: "ma",
        \u30DF: "mi",
        \u30E0: "mu",
        \u30E1: "me",
        \u30E2: "mo",
        \u3084: "ya",
        \u3086: "yu",
        \u3088: "yo",
        \u30E4: "ya",
        \u30E6: "yu",
        \u30E8: "yo",
        \u3089: "ra",
        \u308A: "ri",
        \u308B: "ru",
        \u308C: "re",
        \u308D: "ro",
        \u30E9: "ra",
        \u30EA: "ri",
        \u30EB: "ru",
        \u30EC: "re",
        \u30ED: "ro",
        \u308F: "wa",
        \u3090: "i",
        \u3091: "e",
        \u3092: "o",
        \u30EF: "wa",
        \u30F0: "i",
        \u30F1: "e",
        \u30F2: "o",
        \u304C: "ga",
        \u304E: "gi",
        \u3050: "gu",
        \u3052: "ge",
        \u3054: "go",
        \u30AC: "ga",
        \u30AE: "gi",
        \u30B0: "gu",
        \u30B2: "ge",
        \u30B4: "go",
        \u3056: "za",
        \u3058: "ji",
        \u305A: "zu",
        \u305C: "ze",
        \u305E: "zo",
        \u30B6: "za",
        \u30B8: "ji",
        \u30BA: "zu",
        \u30BC: "ze",
        \u30BE: "zo",
        \u3060: "da",
        \u3062: "ji",
        \u3065: "zu",
        \u3067: "de",
        \u3069: "do",
        \u30C0: "da",
        \u30C2: "ji",
        \u30C5: "zu",
        \u30C7: "de",
        \u30C9: "do",
        \u3070: "ba",
        \u3073: "bi",
        \u3076: "bu",
        \u3079: "be",
        \u307C: "bo",
        \u30D0: "ba",
        \u30D3: "bi",
        \u30D6: "bu",
        \u30D9: "be",
        \u30DC: "bo",
        \u3071: "pa",
        \u3074: "pi",
        \u3077: "pu",
        \u307A: "pe",
        \u307D: "po",
        \u30D1: "pa",
        \u30D4: "pi",
        \u30D7: "pu",
        \u30DA: "pe",
        \u30DD: "po",
        \u304D\u3083: "kya",
        \u304D\u3085: "kyu",
        \u304D\u3087: "kyo",
        \u3057\u3083: "sha",
        \u3057\u3085: "shu",
        \u3057\u3087: "sho",
        \u3061\u3083: "cha",
        \u3061\u3085: "chu",
        \u3061\u3087: "cho",
        \u306B\u3083: "nya",
        \u306B\u3085: "nyu",
        \u306B\u3087: "nyo",
        \u3072\u3083: "hya",
        \u3072\u3085: "hyu",
        \u3072\u3087: "hyo",
        \u307F\u3083: "mya",
        \u307F\u3085: "myu",
        \u307F\u3087: "myo",
        \u308A\u3083: "rya",
        \u308A\u3085: "ryu",
        \u308A\u3087: "ryo",
        \u30AD\u30E3: "kya",
        \u30AD\u30E5: "kyu",
        \u30AD\u30E7: "kyo",
        \u30B7\u30E3: "sha",
        \u30B7\u30E5: "shu",
        \u30B7\u30E7: "sho",
        \u30C1\u30E3: "cha",
        \u30C1\u30E5: "chu",
        \u30C1\u30E7: "cho",
        \u30CB\u30E3: "nya",
        \u30CB\u30E5: "nyu",
        \u30CB\u30E7: "nyo",
        \u30D2\u30E3: "hya",
        \u30D2\u30E5: "hyu",
        \u30D2\u30E7: "hyo",
        \u30DF\u30E3: "mya",
        \u30DF\u30E5: "myu",
        \u30DF\u30E7: "myo",
        \u30EA\u30E3: "rya",
        \u30EA\u30E5: "ryu",
        \u30EA\u30E7: "ryo",
        \u304E\u3083: "gya",
        \u304E\u3085: "gyu",
        \u304E\u3087: "gyo",
        \u3058\u3083: "ja",
        \u3058\u3085: "ju",
        \u3058\u3087: "jo",
        \u3062\u3083: "ja",
        \u3062\u3085: "ju",
        \u3062\u3087: "jo",
        \u3073\u3083: "bya",
        \u3073\u3085: "byu",
        \u3073\u3087: "byo",
        \u3074\u3083: "pya",
        \u3074\u3085: "pyu",
        \u3074\u3087: "pyo",
        \u30AE\u30E3: "gya",
        \u30AE\u30E5: "gyu",
        \u30AE\u30E7: "gyo",
        \u30B8\u30E3: "ja",
        \u30B8\u30E5: "ju",
        \u30B8\u30E7: "jo",
        \u30C2\u30E3: "ja",
        \u30C2\u30E5: "ju",
        \u30C2\u30E7: "jo",
        \u30D3\u30E3: "bya",
        \u30D3\u30E5: "byu",
        \u30D3\u30E7: "byo",
        \u30D4\u30E3: "pya",
        \u30D4\u30E5: "pyu",
        \u30D4\u30E7: "pyo",
        \u3041: "a",
        \u3043: "i",
        \u3045: "u",
        \u3047: "e",
        \u3049: "o",
        \u3083: "ya",
        \u3085: "yu",
        \u3087: "yo",
        \u308E: "wa",
        \u30A1: "a",
        \u30A3: "i",
        \u30A5: "u",
        \u30A7: "e",
        \u30A9: "o",
        \u30E3: "ya",
        \u30E5: "yu",
        \u30E7: "yo",
        \u30EE: "wa",
        \u30F5: "ka",
        \u30F6: "ke",
        \u3093: "n",
        \u30F3: "n",
        "\u3000": " ",
        \u30F4: "b"
    },
    hepburn: {
        "\uFF11": "1",
        "\uFF12": "2",
        "\uFF13": "3",
        "\uFF14": "4",
        "\uFF15": "5",
        "\uFF16": "6",
        "\uFF17": "7",
        "\uFF18": "8",
        "\uFF19": "9",
        "\uFF10": "0",
        "\uFF01": "!",
        "\u201C": '"',
        "\u201D": '"',
        "\uFF03": "#",
        "\uFF04": "$",
        "\uFF05": "%",
        "\uFF06": "&",
        "\u2019": "'",
        "\uFF08": "(",
        "\uFF09": ")",
        "\uFF1D": "=",
        "\uFF5E": "~",
        "\uFF5C": "|",
        "\uFF20": "@",
        "\u2018": "`",
        "\uFF0B": "+",
        "\uFF0A": "*",
        "\uFF1B": ";",
        "\uFF1A": ":",
        "\uFF1C": "<",
        "\uFF1E": ">",
        "\u3001": ",",
        "\u3002": ".",
        "\uFF0F": "/",
        "\uFF1F": "?",
        "\uFF3F": "_",
        "\u30FB": "\uFF65",
        "\u300C": '"',
        "\u300D": '"',
        "\uFF5B": "{",
        "\uFF5D": "}",
        "\uFFE5": "\\",
        "\uFF3E": "^",
        \u3042: "a",
        \u3044: "i",
        \u3046: "u",
        \u3048: "e",
        \u304A: "o",
        \u30A2: "a",
        \u30A4: "i",
        \u30A6: "u",
        \u30A8: "e",
        \u30AA: "o",
        \u304B: "ka",
        \u304D: "ki",
        \u304F: "ku",
        \u3051: "ke",
        \u3053: "ko",
        \u30AB: "ka",
        \u30AD: "ki",
        \u30AF: "ku",
        \u30B1: "ke",
        \u30B3: "ko",
        \u3055: "sa",
        \u3057: "shi",
        \u3059: "su",
        \u305B: "se",
        \u305D: "so",
        \u30B5: "sa",
        \u30B7: "shi",
        \u30B9: "su",
        \u30BB: "se",
        \u30BD: "so",
        \u305F: "ta",
        \u3061: "chi",
        \u3064: "tsu",
        \u3066: "te",
        \u3068: "to",
        \u30BF: "ta",
        \u30C1: "chi",
        \u30C4: "tsu",
        \u30C6: "te",
        \u30C8: "to",
        \u306A: "na",
        \u306B: "ni",
        \u306C: "nu",
        \u306D: "ne",
        \u306E: "no",
        \u30CA: "na",
        \u30CB: "ni",
        \u30CC: "nu",
        \u30CD: "ne",
        \u30CE: "no",
        \u306F: "ha",
        \u3072: "hi",
        \u3075: "fu",
        \u3078: "he",
        \u307B: "ho",
        \u30CF: "ha",
        \u30D2: "hi",
        \u30D5: "fu",
        \u30D8: "he",
        \u30DB: "ho",
        \u307E: "ma",
        \u307F: "mi",
        \u3080: "mu",
        \u3081: "me",
        \u3082: "mo",
        \u30DE: "ma",
        \u30DF: "mi",
        \u30E0: "mu",
        \u30E1: "me",
        \u30E2: "mo",
        \u3084: "ya",
        \u3086: "yu",
        \u3088: "yo",
        \u30E4: "ya",
        \u30E6: "yu",
        \u30E8: "yo",
        \u3089: "ra",
        \u308A: "ri",
        \u308B: "ru",
        \u308C: "re",
        \u308D: "ro",
        \u30E9: "ra",
        \u30EA: "ri",
        \u30EB: "ru",
        \u30EC: "re",
        \u30ED: "ro",
        \u308F: "wa",
        \u3090: "i",
        \u3091: "e",
        \u3092: "o",
        \u30EF: "wa",
        \u30F0: "i",
        \u30F1: "e",
        \u30F2: "o",
        \u304C: "ga",
        \u304E: "gi",
        \u3050: "gu",
        \u3052: "ge",
        \u3054: "go",
        \u30AC: "ga",
        \u30AE: "gi",
        \u30B0: "gu",
        \u30B2: "ge",
        \u30B4: "go",
        \u3056: "za",
        \u3058: "ji",
        \u305A: "zu",
        \u305C: "ze",
        \u305E: "zo",
        \u30B6: "za",
        \u30B8: "ji",
        \u30BA: "zu",
        \u30BC: "ze",
        \u30BE: "zo",
        \u3060: "da",
        \u3062: "ji",
        \u3065: "zu",
        \u3067: "de",
        \u3069: "do",
        \u30C0: "da",
        \u30C2: "ji",
        \u30C5: "zu",
        \u30C7: "de",
        \u30C9: "do",
        \u3070: "ba",
        \u3073: "bi",
        \u3076: "bu",
        \u3079: "be",
        \u307C: "bo",
        \u30D0: "ba",
        \u30D3: "bi",
        \u30D6: "bu",
        \u30D9: "be",
        \u30DC: "bo",
        \u3071: "pa",
        \u3074: "pi",
        \u3077: "pu",
        \u307A: "pe",
        \u307D: "po",
        \u30D1: "pa",
        \u30D4: "pi",
        \u30D7: "pu",
        \u30DA: "pe",
        \u30DD: "po",
        \u304D\u3083: "kya",
        \u304D\u3085: "kyu",
        \u304D\u3087: "kyo",
        \u3057\u3083: "sha",
        \u3057\u3085: "shu",
        \u3057\u3087: "sho",
        \u3061\u3083: "cha",
        \u3061\u3085: "chu",
        \u3061\u3087: "cho",
        \u306B\u3083: "nya",
        \u306B\u3085: "nyu",
        \u306B\u3087: "nyo",
        \u3072\u3083: "hya",
        \u3072\u3085: "hyu",
        \u3072\u3087: "hyo",
        \u307F\u3083: "mya",
        \u307F\u3085: "myu",
        \u307F\u3087: "myo",
        \u308A\u3083: "rya",
        \u308A\u3085: "ryu",
        \u308A\u3087: "ryo",
        \u30AD\u30E3: "kya",
        \u30AD\u30E5: "kyu",
        \u30AD\u30E7: "kyo",
        \u30B7\u30E3: "sha",
        \u30B7\u30E5: "shu",
        \u30B7\u30E7: "sho",
        \u30C1\u30E3: "cha",
        \u30C1\u30E5: "chu",
        \u30C1\u30E7: "cho",
        \u30CB\u30E3: "nya",
        \u30CB\u30E5: "nyu",
        \u30CB\u30E7: "nyo",
        \u30D2\u30E3: "hya",
        \u30D2\u30E5: "hyu",
        \u30D2\u30E7: "hyo",
        \u30DF\u30E3: "mya",
        \u30DF\u30E5: "myu",
        \u30DF\u30E7: "myo",
        \u30EA\u30E3: "rya",
        \u30EA\u30E5: "ryu",
        \u30EA\u30E7: "ryo",
        \u304E\u3083: "gya",
        \u304E\u3085: "gyu",
        \u304E\u3087: "gyo",
        \u3058\u3083: "ja",
        \u3058\u3085: "ju",
        \u3058\u3087: "jo",
        \u3062\u3083: "ja",
        \u3062\u3085: "ju",
        \u3062\u3087: "jo",
        \u3073\u3083: "bya",
        \u3073\u3085: "byu",
        \u3073\u3087: "byo",
        \u3074\u3083: "pya",
        \u3074\u3085: "pyu",
        \u3074\u3087: "pyo",
        \u30AE\u30E3: "gya",
        \u30AE\u30E5: "gyu",
        \u30AE\u30E7: "gyo",
        \u30B8\u30E3: "ja",
        \u30B8\u30E5: "ju",
        \u30B8\u30E7: "jo",
        \u30C2\u30E3: "ja",
        \u30C2\u30E5: "ju",
        \u30C2\u30E7: "jo",
        \u30D3\u30E3: "bya",
        \u30D3\u30E5: "byu",
        \u30D3\u30E7: "byo",
        \u30D4\u30E3: "pya",
        \u30D4\u30E5: "pyu",
        \u30D4\u30E7: "pyo",
        \u3041: "a",
        \u3043: "i",
        \u3045: "u",
        \u3047: "e",
        \u3049: "o",
        \u3083: "ya",
        \u3085: "yu",
        \u3087: "yo",
        \u308E: "wa",
        \u30A1: "a",
        \u30A3: "i",
        \u30A5: "u",
        \u30A7: "e",
        \u30A9: "o",
        \u30E3: "ya",
        \u30E5: "yu",
        \u30E7: "yo",
        \u30EE: "wa",
        \u30F5: "ka",
        \u30F6: "ke",
        \u3093: "n",
        \u30F3: "n",
        "\u3000": " ",
        \u3044\u3047: "ye",
        \u3046\u3043: "wi",
        \u3046\u3047: "we",
        \u3046\u3049: "wo",
        \u304D\u3047: "kye",
        \u304F\u3041: "kwa",
        \u304F\u3043: "kwi",
        \u304F\u3047: "kwe",
        \u304F\u3049: "kwo",
        \u3050\u3041: "gwa",
        \u3050\u3043: "gwi",
        \u3050\u3047: "gwe",
        \u3050\u3049: "gwo",
        \u30A4\u30A7: "ye",
        \u30A6\u30A3: "wi",
        \u30A6\u30A7: "we",
        \u30A6\u30A9: "wo",
        \u30F4: "vu",
        \u30F4\u30A1: "va",
        \u30F4\u30A3: "vi",
        \u30F4\u30A7: "ve",
        \u30F4\u30A9: "vo",
        \u30F4\u30E5: "vyu",
        \u30F4\u30E7: "vyo",
        \u30AD\u30A7: "kya",
        \u30AF\u30A1: "kwa",
        \u30AF\u30A3: "kwi",
        \u30AF\u30A7: "kwe",
        \u30AF\u30A9: "kwo",
        \u30B0\u30A1: "gwa",
        \u30B0\u30A3: "gwi",
        \u30B0\u30A7: "gwe",
        \u30B0\u30A9: "gwo",
        \u3057\u3047: "she",
        \u3058\u3047: "je",
        \u3061\u3047: "che",
        \u3064\u3041: "tsa",
        \u3064\u3043: "tsi",
        \u3064\u3047: "tse",
        \u3064\u3049: "tso",
        \u3066\u3043: "ti",
        \u3066\u3085: "tyu",
        \u3067\u3043: "di",
        \u3067\u3085: "dyu",
        \u3068\u3045: "tu",
        \u3069\u3045: "du",
        \u306B\u3047: "nye",
        \u3072\u3047: "hye",
        \u3075\u3041: "fa",
        \u3075\u3043: "fi",
        \u3075\u3047: "fe",
        \u3075\u3049: "fo",
        \u3075\u3085: "fyu",
        \u3075\u3087: "fyo",
        \u30B7\u30A7: "she",
        \u30B8\u30A7: "je",
        \u30C1\u30A7: "che",
        \u30C4\u30A1: "tsa",
        \u30C4\u30A3: "tsi",
        \u30C4\u30A7: "tse",
        \u30C4\u30A9: "tso",
        \u30C6\u30A3: "ti",
        \u30C6\u30E5: "tyu",
        \u30C7\u30A3: "di",
        \u30C7\u30E5: "dyu",
        \u30C8\u30A5: "tu",
        \u30C9\u30A5: "du",
        \u30CB\u30A7: "nye",
        \u30D2\u30A7: "hye",
        \u30D5\u30A1: "fa",
        \u30D5\u30A3: "fi",
        \u30D5\u30A7: "fe",
        \u30D5\u30A9: "fo",
        \u30D5\u30E5: "fyu",
        \u30D5\u30E7: "fyo"
    }
};
var Pt = function(a="") {
    let e = (a[0] || "").charCodeAt(0);
    return e >= 12353 && e <= 12438
}
  , Ya = function(a="") {
    let e = (a[0] || "").charCodeAt(0);
    return e >= 12449 && e <= 12540
}
  , Ot = function(a="") {
    return Pt(a) || Ya(a)
}
  , Ma = function(a="") {
    let e = ([...a][0] || "").codePointAt(0);
    return e >= 19968 && e <= 40959 || e >= 13312 && e <= 19903 || e >= 131072 && e <= 173791
}
  , Nn = function(a="") {
    return Ot(a) || Ma(a)
}
  , Pn = function(a="") {
    for (let e = 0; e < a.length; e++)
        if (Pt(a[e]))
            return !0;
    return !1
}
  , On = function(a="") {
    for (let e = 0; e < a.length; e++)
        if (Ya(a[e]))
            return !0;
    return !1
}
  , Yo = function(a="") {
    for (let e = 0; e < a.length; e++)
        if (Ot(a[e]))
            return !0;
    return !1
}
  , _n = function(a="") {
    a = [...a];
    for (let e = 0; e < a.length; e++)
        if (Ma(a[e]))
            return !0;
    return !1
}
  , Di = function(a="") {
    a = [...a];
    for (let e = 0; e < a.length; e++)
        if (Nn(a[e]))
            return !0;
    return !1
}
  , ha = function(a="") {
    return [...a].map(e => e.codePointAt(0) >= 12449 && e.codePointAt(0) <= 12534 ? String.fromCharCode(e.charCodeAt(0) + -96) : e).join("")
}
  , Pa = function(a="") {
    return [...a].map(e => e.codePointAt(0) >= 12353 && e.codePointAt(0) <= 12438 ? String.fromCharCode(e.charCodeAt(0) + 96) : e).join("")
}
  , _t = function(a="", e) {
    e = e || Xe.HEPBURN;
    let t = /(っ|ッ)([bcdfghijklmnopqrstuvwyz])/gm, i = /っ|ッ/gm, o = 0, l, s, n = "";
    if (e === Xe.PASSPORT && (a = a.replace(/ー/gm, "")),
    e === Xe.NIPPON || e === Xe.HEPBURN) {
        let c = new RegExp(/(ん|ン)(?=あ|い|う|え|お|ア|イ|ウ|エ|オ|ぁ|ぃ|ぅ|ぇ|ぉ|ァ|ィ|ゥ|ェ|ォ|や|ゆ|よ|ヤ|ユ|ヨ|ゃ|ゅ|ょ|ャ|ュ|ョ)/g), u, d = [];
        for (; (u = c.exec(a)) !== null; )
            d.push(u.index + 1);
        if (d.length !== 0) {
            let m = "";
            for (let g = 0; g < d.length; g++)
                g === 0 ? m += `${a.slice(0, d[g])}'` : m += `${a.slice(d[g - 1], d[g])}'`;
            m += a.slice(d[d.length - 1]),
            a = m
        }
    }
    let r = a.length;
    for (; o <= r; )
        (s = zn[e][a.substring(o, o + 2)]) ? (n += s,
        o += 2) : (n += (s = zn[e][l = a.substring(o, o + 1)]) ? s : l,
        o += 1);
    return n = n.replace(t, "$2$2"),
    (e === Xe.PASSPORT || e === Xe.HEPBURN) && (n = n.replace(/cc/gm, "tc")),
    n = n.replace(i, "tsu"),
    (e === Xe.PASSPORT || e === Xe.HEPBURN) && (n = n.replace(/nm/gm, "mm"),
    n = n.replace(/nb/gm, "mb"),
    n = n.replace(/np/gm, "mp")),
    e === Xe.NIPPON && (n = n.replace(/aー/gm, "\xE2"),
    n = n.replace(/iー/gm, "\xEE"),
    n = n.replace(/uー/gm, "\xFB"),
    n = n.replace(/eー/gm, "\xEA"),
    n = n.replace(/oー/gm, "\xF4")),
    e === Xe.HEPBURN && (n = n.replace(/aー/gm, "\u0101"),
    n = n.replace(/iー/gm, "\u012B"),
    n = n.replace(/uー/gm, "\u016B"),
    n = n.replace(/eー/gm, "\u0113"),
    n = n.replace(/oー/gm, "\u014D")),
    n
}
  , Ko = function(a="") {
    a = [...a];
    let e = !1
      , t = !1;
    for (let i = 0; i < a.length; i++)
        Ma(a[i]) ? e = !0 : (Pt(a[i]) || Ya(a[i])) && (t = !0);
    return e && t ? 1 : e ? 0 : t ? 2 : 3
}
  , Wo = function(a) {
    for (let e = 0; e < a.length; e++)
        Di(a[e].surface_form) ? a[e].reading ? Pn(a[e].reading) && (a[e].reading = Pa(a[e].reading)) : a[e].surface_form.split("").every(Ot) ? a[e].reading = Pa(a[e].surface_form) : a[e].reading = a[e].surface_form : a[e].reading = a[e].surface_form;
    for (let e = 0; e < a.length; e++)
        a[e].pos && a[e].pos === "\u52A9\u52D5\u8A5E" && (a[e].surface_form === "\u3046" || a[e].surface_form === "\u30A6") && e - 1 >= 0 && a[e - 1].pos && a[e - 1].pos === "\u52D5\u8A5E" && (a[e - 1].surface_form += "\u3046",
        a[e - 1].pronunciation ? a[e - 1].pronunciation += "\u30FC" : a[e - 1].pronunciation = `${a[e - 1].reading}\u30FC`,
        a[e - 1].reading += "\u30A6",
        a.splice(e, 1),
        e--);
    for (let e = 0; e < a.length; e++)
        a[e].pos && (a[e].pos === "\u52D5\u8A5E" || a[e].pos === "\u5F62\u5BB9\u8A5E") && a[e].surface_form.length > 1 && (a[e].surface_form[a[e].surface_form.length - 1] === "\u3063" || a[e].surface_form[a[e].surface_form.length - 1] === "\u30C3") && e + 1 < a.length && (a[e].surface_form += a[e + 1].surface_form,
        a[e].pronunciation ? a[e].pronunciation += a[e + 1].pronunciation : a[e].pronunciation = `${a[e].reading}${a[e + 1].reading}`,
        a[e].reading += a[e + 1].reading,
        a.splice(e + 1, 1),
        e--);
    return a
}
  , $o = function(a) {
    return ha(a)
}
  , Qo = function(a) {
    return Pa(a)
}
  , Zo = function(a, e) {
    return _t(a, e)
};
var Xo = {
    isHiragana: Pt,
    isKatakana: Ya,
    isKana: Ot,
    isKanji: Ma,
    isJapanese: Nn,
    hasHiragana: Pn,
    hasKatakana: On,
    hasKana: Yo,
    hasKanji: _n,
    hasJapanese: Di,
    kanaToHiragna: $o,
    kanaToKatakana: Qo,
    kanaToRomaji: Zo
}
  , zi = class {
    constructor() {
        this._analyzer = null,
        this.Util = Xo
    }
    async init(e) {
        if (!e || typeof e != "object" || typeof e.init != "function" || typeof e.parse != "function")
            throw new Error("Invalid initialization parameter.");
        if (this._analyzer == null)
            await e.init(),
            this._analyzer = e;
        else
            throw new Error("Kuroshiro has already been initialized.")
    }
    async convert(e, t) {
        if (t = t || {},
        t.to = t.to || "hiragana",
        t.mode = t.mode || "normal",
        t.romajiSystem = t.romajiSystem || Xe.HEPBURN,
        t.delimiter_start = t.delimiter_start || "(",
        t.delimiter_end = t.delimiter_end || ")",
        e = e || "",
        ["hiragana", "katakana", "romaji"].indexOf(t.to) === -1)
            throw new Error("Invalid Target Syllabary.");
        if (["normal", "spaced", "okurigana", "furigana"].indexOf(t.mode) === -1)
            throw new Error("Invalid Conversion Mode.");
        if (Object.keys(Xe).map(s => Xe[s]).indexOf(t.romajiSystem) === -1)
            throw new Error("Invalid Romanization System.");
        let o = await this._analyzer.parse(e)
          , l = Wo(o);
        if (t.mode === "normal" || t.mode === "spaced")
            switch (t.to) {
            case "katakana":
                return t.mode === "normal" ? l.map(n => n.reading).join("") : l.map(n => n.reading).join(" ");
            case "romaji":
                let s = n => {
                    let r;
                    return Di(n.surface_form) ? r = n.pronunciation || n.reading : r = n.surface_form,
                    _t(r, t.romajiSystem)
                }
                ;
                return t.mode === "normal" ? l.map(s).join("") : l.map(s).join(" ");
            case "hiragana":
                for (let n = 0; n < l.length; n++)
                    if (_n(l[n].surface_form))
                        if (!On(l[n].surface_form))
                            l[n].reading = ha(l[n].reading);
                        else {
                            l[n].reading = ha(l[n].reading);
                            let r = ""
                              , c = "";
                            for (let m = 0; m < l[n].surface_form.length; m++)
                                Ma(l[n].surface_form[m]) ? c += "(.*)" : c += Ya(l[n].surface_form[m]) ? ha(l[n].surface_form[m]) : l[n].surface_form[m];
                            let d = new RegExp(c).exec(l[n].reading);
                            if (d) {
                                let m = 0;
                                for (let g = 0; g < l[n].surface_form.length; g++)
                                    Ma(l[n].surface_form[g]) ? (r += d[m + 1],
                                    m++) : r += l[n].surface_form[g];
                                l[n].reading = r
                            }
                        }
                    else
                        l[n].reading = l[n].surface_form;
                return t.mode === "normal" ? l.map(n => n.reading).join("") : l.map(n => n.reading).join(" ");
            default:
                throw new Error("Unknown option.to param")
            }
        else if (t.mode === "okurigana" || t.mode === "furigana") {
            let s = [];
            for (let r = 0; r < l.length; r++)
                switch (Ko(l[r].surface_form)) {
                case 0:
                    s.push([l[r].surface_form, 1, ha(l[r].reading), l[r].pronunciation || l[r].reading]);
                    break;
                case 1:
                    let u = ""
                      , d = !1
                      , m = [];
                    for (let S = 0; S < l[r].surface_form.length; S++)
                        Ma(l[r].surface_form[S]) ? d ? m[m.length - 1] += l[r].surface_form[S] : (d = !0,
                        u += "(.+)",
                        m.push(l[r].surface_form[S])) : (d = !1,
                        m.push(l[r].surface_form[S]),
                        u += Ya(l[r].surface_form[S]) ? ha(l[r].surface_form[S]) : l[r].surface_form[S]);
                    let v = new RegExp(`^${u}$`).exec(ha(l[r].reading));
                    if (v) {
                        let S = 1;
                        for (let x = 0; x < m.length; x++)
                            Ma(m[x][0]) ? (s.push([m[x], 1, v[S], Pa(v[S])]),
                            S += 1) : s.push([m[x], 2, ha(m[x]), Pa(m[x])])
                    } else
                        s.push([l[r].surface_form, 1, ha(l[r].reading), l[r].pronunciation || l[r].reading]);
                    break;
                case 2:
                    for (let S = 0; S < l[r].surface_form.length; S++)
                        s.push([l[r].surface_form[S], 2, ha(l[r].reading[S]), l[r].pronunciation && l[r].pronunciation[S] || l[r].reading[S]]);
                    break;
                case 3:
                    for (let S = 0; S < l[r].surface_form.length; S++)
                        s.push([l[r].surface_form[S], 3, l[r].surface_form[S], l[r].surface_form[S]]);
                    break;
                default:
                    throw new Error("Unknown strType")
                }
            let n = "";
            switch (t.to) {
            case "katakana":
                if (t.mode === "okurigana")
                    for (let r = 0; r < s.length; r++)
                        s[r][1] !== 1 ? n += s[r][0] : n += s[r][0] + t.delimiter_start + Pa(s[r][2]) + t.delimiter_end;
                else
                    for (let r = 0; r < s.length; r++)
                        s[r][1] !== 1 ? n += s[r][0] : n += `<ruby>${s[r][0]}<rp>${t.delimiter_start}</rp><rt>${Pa(s[r][2])}</rt><rp>${t.delimiter_end}</rp></ruby>`;
                return n;
            case "romaji":
                if (t.mode === "okurigana")
                    for (let r = 0; r < s.length; r++)
                        s[r][1] !== 1 ? n += s[r][0] : n += s[r][0] + t.delimiter_start + _t(s[r][3], t.romajiSystem) + t.delimiter_end;
                else {
                    n += "<ruby>";
                    for (let r = 0; r < s.length; r++)
                        n += `${s[r][0]}<rp>${t.delimiter_start}</rp><rt>${_t(s[r][3], t.romajiSystem)}</rt><rp>${t.delimiter_end}</rp>`;
                    n += "</ruby>"
                }
                return n;
            case "hiragana":
                if (t.mode === "okurigana")
                    for (let r = 0; r < s.length; r++)
                        s[r][1] !== 1 ? n += s[r][0] : n += s[r][0] + t.delimiter_start + s[r][2] + t.delimiter_end;
                else
                    for (let r = 0; r < s.length; r++)
                        s[r][1] !== 1 ? n += s[r][0] : n += `<ruby>${s[r][0]}<rp>${t.delimiter_start}</rp><rt>${s[r][2]}</rt><rp>${t.delimiter_end}</rp></ruby>`;
                return n;
            default:
                throw new Error("Invalid Target Syllabary.")
            }
        }
    }
}
;
zi.Util = Xo;
var Jo = zi;
var es = Jo;
var Bn = {};
J0(Bn, {
    init: () => rd,
    parse: () => od
});
var is = lt(ts()), nd = is.default, Ni, rd = () => Ni !== void 0 ? Promise.resolve() : new Promise( (a, e) => {
    nd.builder({
        dicPath: "https://kuromoji.socalifornian.live"
    }).build( (t, i) => {
        if (t)
            return e(t);
        Ni = i,
        a()
    }
    )
}
), od = (a="") => {
    if (a.trim() === "" || Ni === void 0)
        return Promise.resolve([]);
    let e = Ni.tokenize(a);
    for (let t of e)
        t.verbose = {
            word_id: t.word_id,
            word_type: t.word_type,
            word_position: t.word_position
        },
        delete t.word_id,
        delete t.word_type,
        delete t.word_position;
    return Promise.resolve(e)
}
;
var Rn;
function ns(a) {
    return typeof Intl?.Segmenter == "function" ? (Rn || (Rn = new Intl.Segmenter("zh-Hans-CN",{
        granularity: "word"
    })),
    [...Rn.segment(a)].map(e => e.segment)) : [a]
}
var rs = {
    style: 1,
    mode: 0,
    heteronym: !1,
    group: !1,
    compact: !1
}
  , Ia = {
    \u0101: "a1",
    \u00E1: "a2",
    \u01CE: "a3",
    \u00E0: "a4",
    \u0113: "e1",
    \u00E9: "e2",
    \u011B: "e3",
    \u00E8: "e4",
    \u014D: "o1",
    \u00F3: "o2",
    \u01D2: "o3",
    \u00F2: "o4",
    \u012B: "i1",
    \u00ED: "i2",
    \u01D0: "i3",
    \u00EC: "i4",
    \u016B: "u1",
    \u00FA: "u2",
    \u01D4: "u3",
    \u00F9: "u4",
    \u00FC: "v0",
    \u01D8: "v2",
    \u01DA: "v3",
    \u01DC: "v4",
    \u0144: "n2",
    \u0148: "n3",
    "\uE7C7": "m2"
}
  , Pi = "b,p,m,f,d,t,n,l,g,k,h,j,q,x,r,zh,ch,sh,z,c,s".split(",")
  , Mg = "ang,eng,ing,ong,an,en,in,un,er,ai,ei,ui,ao,ou,iu,ie,ve,a,o,e,i,u,v".split(",");
function Ka(a, e) {
    return Object.prototype.hasOwnProperty.call(a, e)
}
var os = new Map([["tone", 1], ["TONE", 1], ["1", 1], ["tone2", 2], ["TONE2", 2], ["2", 2], ["to3ne", 5], ["TO3NE", 5], ["5", 5], ["first_letter", 4], ["FIRST_LETTER", 4], ["4", 4], ["initials", 3], ["INITIALS", 3], ["3", 3], ["normal", 0], ["NORMAL", 0], ["0", 0], ["passport", 6], ["PASSPORT", 6], ["6", 6]]);
function ld(a) {
    let e = String(a);
    return os.has(e) ? os.get(e) : 1
}
var ss = new Map([["normal", 0], ["NORMAL", 0], ["surname", 1], ["SURNAME", 1]]);
function ud(a) {
    let e = String(a);
    return ss.has(e) ? ss.get(e) : 0
}
function ds(a) {
    let e;
    return a?.segment && (a?.segment === !0 ? e = "Intl.Segmenter" : e = a.segment),
    {
        ...rs,
        style: ld(a?.style),
        mode: ud(a?.mode),
        segment: e,
        heteronym: a?.heteronym || !1,
        group: a?.group || !1
    }
}
function ls(a, e) {
    let t = [];
    if (!a.length)
        return e;
    if (!e.length)
        return a;
    for (let i = 0, o = a.length; i < o; i++)
        for (let l = 0, s = e.length; l < s; l++)
            t.push(a[i] + e[l]);
    return t
}
function ms(a) {
    if (a.length === 0)
        return [];
    if (a.length === 1)
        return a[0];
    let e = ls(a[0], a[1]);
    for (let t = 2, i = a.length; t < i; t++)
        e = ls(e, a[t]);
    return e
}
function us(a, e) {
    if (!Array.isArray(a) || !Array.isArray(e))
        throw new Error("compact2array expect two array as parameters");
    a.length || (a = [""]),
    e.length || (e = [""]);
    let t = [];
    for (let i = 0, o = a.length; i < o; i++)
        for (let l = 0, s = e.length; l < s; l++)
            Array.isArray(a[i]) ? t.push([...a[i], e[l]]) : t.push([a[i], e[l]]);
    return t
}
function Gn(a) {
    if (a.length === 0)
        return [];
    if (a.length === 1)
        return [a[0]];
    let e = us(a[0], a[1]);
    for (let t = 2, i = a.length; t < i; ++t)
        e = us(e, a[t]);
    return e
}
function cd(a) {
    for (let e = 0, t = Pi.length; e < t; e++)
        if (a.indexOf(Pi[e]) === 0)
            return Pi[e];
    return ""
}
var Oi = new RegExp("([" + Object.keys(Ia).join("") + "])","g")
  , _i = /([aeoiuvnm])([0-4])$/;
function Wa(a, e) {
    let t = "", i, o;
    switch (e) {
    case 3:
        return cd(a);
    case 4:
        return i = a.charAt(0),
        Ka(Ia, i) && (i = Ia[i].charAt(0)),
        i;
    case 0:
        return a.replace(Oi, function(l, s) {
            return Ia[s].replace(_i, "$1")
        });
    case 6:
        return a.replace(Oi, function(l, s) {
            return Ia[s].replace(_i, "$1").replace("v", "YU")
        }).toUpperCase();
    case 5:
        return a.replace(Oi, function(l, s) {
            return Ia[s]
        });
    case 2:
        return o = a.replace(Oi, function(l, s) {
            return t = Ia[s].replace(_i, "$2"),
            Ia[s].replace(_i, "$1")
        }),
        o + t;
    case 1:
    default:
        return a
    }
}
var Fi = "https://pinyin.socalifornian.live"
  , Un = () => import(`${Fi}/dict-zi.mjs`).then(a => a.default)
  , dd = () => import(`${Fi}/phrases-dict.mjs`).then(a => a.default)
  , md = () => import(`${Fi}/surname.mjs`).then(a => a.default)
  , hd = () => import(`${Fi}/compound_surname.mjs`).then(a => a.default)
  , Ft = class {
    STYLE_TONE = 1;
    STYLE_TONE2 = 2;
    STYLE_TO3NE = 5;
    STYLE_NORMAL = 0;
    STYLE_INITIALS = 3;
    STYLE_FIRST_LETTER = 4;
    STYLE_PASSPORT = 6;
    MODE_NORMAL = 0;
    MODE_SURNAME = 1;
    pinyin(e, t) {
        if (typeof e != "string")
            return Promise.resolve([]);
        let i = ds(t), o;
        return i.mode === 1 ? o = this.surname_pinyin(e, i) : i.segment ? o = this.segment_pinyin(e, i) : o = this.normal_pinyin(e, i),
        t?.compact && (o = o.then(this.compact)),
        o
    }
    normal_pinyin(e, t) {
        return Un().then(i => {
            let o = []
              , l = "";
            for (let s = 0, n = e.length; s < n; s++) {
                let r = e[s]
                  , c = r.charCodeAt(0);
                i[c] ? (l.length > 0 && (o.push(Promise.resolve([l])),
                l = ""),
                o.push(this.single_pinyin(r, t))) : l += r
            }
            return l.length > 0 && (o.push(Promise.resolve([l])),
            l = ""),
            Promise.all(o)
        }
        )
    }
    single_pinyin(e, t) {
        return typeof e != "string" ? Promise.resolve([]) : e.length !== 1 ? this.single_pinyin(e.charAt(0), t) : Un().then(i => {
            let o = e.charCodeAt(0);
            if (!i[o])
                return [e];
            let l = i[o].split(",");
            if (!t.heteronym)
                return [Wa(l[0], t.style)];
            let s = {}
              , n = [];
            for (let r = 0, c = l.length; r < c; r++) {
                let u = Wa(l[r], t.style);
                Ka(s, u) || (s[u] = u,
                n.push(u))
            }
            return n
        }
        )
    }
    segment(e) {
        return ns(e)
    }
    segment_pinyin(e, t) {
        return Un().then(i => {
            let o = this.segment(e)
              , l = []
              , s = "";
            for (let n = 0, r = o.length; n < r; n++) {
                let c = o[n]
                  , u = c.charCodeAt(0);
                if (i[u]) {
                    s.length > 0 && (l.push(Promise.resolve([[s]])),
                    s = "");
                    let d = c.length === 1 ? this.normal_pinyin(c, t) : this.phrases_pinyin(c, t);
                    t.group ? l.push(d.then(m => Promise.resolve([this.groupPhrases(m)]))) : l.push(d)
                } else
                    s += c
            }
            return s.length > 0 && (l.push(Promise.resolve([[s]])),
            s = ""),
            Promise.all(l).then(n => n.flat(1))
        }
        )
    }
    phrases_pinyin(e, t) {
        return dd().then(i => {
            let o = [];
            if (Ka(i, e)) {
                i[e].forEach(function(l, s) {
                    let n = [];
                    t.heteronym ? l.forEach(function(r, c) {
                        n[c] = Wa(r, t.style)
                    }) : n[0] = Wa(l[0], t.style),
                    o[s] = Promise.resolve(n)
                })
            } else
                for (let l = 0, s = e.length; l < s; l++)
                    o.push(this.single_pinyin(e[l], t));
            return Promise.all(o)
        }
        )
    }
    groupPhrases(e) {
        return e.length === 1 ? e[0] : ms(e)
    }
    surname_pinyin(e, t) {
        return this.compound_surname(e, t)
    }
    compound_surname(e, t) {
        return hd().then(i => {
            let o = e.length
              , l = 0
              , s = [];
            for (let n = 0; n < o; n++) {
                let r = e.substring(n, n + 2);
                if (Ka(i, r)) {
                    l <= n - 1 && s.push(this.single_surname(e.substring(l, n), t));
                    let c = i[r].map(u => u.map(d => Wa(d, t.style)));
                    s.push(Promise.resolve(c)),
                    n = n + 2,
                    l = n
                }
            }
            return s.push(this.single_surname(e.substring(l, o), t)),
            Promise.all(s).then(n => n.flat(1))
        }
        )
    }
    single_surname(e, t) {
        return md().then(i => {
            let o = [];
            for (let l = 0, s = e.length; l < s; l++) {
                let n = e.charAt(l);
                if (Ka(i, n)) {
                    let r = i[n].map(c => c.map(u => Wa(u, t.style)));
                    o.push(Promise.resolve(r))
                } else
                    o.push(this.single_pinyin(n, t).then(r => [r]))
            }
            return Promise.all(o).then(l => l.flat(1))
        }
        )
    }
    compare(e, t) {
        let i = this.pinyin(e)
          , o = this.pinyin(t);
        return String(i).localeCompare(String(o))
    }
    compact(e) {
        return Gn(e)
    }
}
;
function hs(a) {
    let e = a.pinyin.bind(a);
    return e.compare = a.compare.bind(a),
    e.compact = a.compact.bind(a),
    e.STYLE_TONE = 1,
    e.STYLE_TONE2 = 2,
    e.STYLE_TO3NE = 5,
    e.STYLE_NORMAL = 0,
    e.STYLE_INITIALS = 3,
    e.STYLE_FIRST_LETTER = 4,
    e.STYLE_PASSPORT = 6,
    e.MODE_NORMAL = 0,
    e.MODE_SURNAME = 1,
    e
}
var qn = class extends Ft {
}
  , gs = hs(new qn)
  , ps = gs
  , Gg = gs.compare;
var gd = {
    RevisedRomanizationTranscription: {
        cho: {
            \u1100: "g",
            \u1101: "kk",
            \u1102: "n",
            \u1103: "d",
            \u1104: "tt",
            \u1105: "r",
            \u1106: "m",
            \u1107: "b",
            \u1108: "pp",
            \u1109: "s",
            \u110A: "ss",
            \u110B: "",
            \u110C: "j",
            \u110D: "jj",
            \u110E: "ch",
            \u110F: "k",
            \u1110: "t",
            \u1111: "p",
            \u1112: "h"
        },
        cho2: void 0,
        jung: {
            \u1161: "a",
            \u1162: "ae",
            \u1163: "ya",
            \u1164: "yae",
            \u1165: "eo",
            \u1166: "e",
            \u1167: "yeo",
            \u1168: "ye",
            \u1169: "o",
            \u116A: "wa",
            \u116B: "wae",
            \u116C: "oe",
            \u116D: "yo",
            \u116E: "u",
            \u116F: "wo",
            \u1170: "we",
            \u1171: "wi",
            \u1172: "yu",
            \u1173: "eu",
            \u1174: "eui",
            \u1175: "i"
        },
        jong: {
            \u11A8: "k",
            \u11A8\u110B: "g",
            \u11A8\u1102: "ngn",
            \u11A8\u1105: "ngn",
            \u11A8\u1106: "ngm",
            \u11A8\u1112: "kh",
            \u11A9: "kk",
            \u11A9\u110B: "kg",
            \u11A9\u1102: "ngn",
            \u11A9\u1105: "ngn",
            \u11A9\u1106: "ngm",
            \u11A9\u1112: "kh",
            \u11AA: "k",
            \u11AA\u110B: "ks",
            \u11AA\u1102: "ngn",
            \u11AA\u1105: "ngn",
            \u11AA\u1106: "ngm",
            \u11AA\u1112: "kch",
            \u11AB: "n",
            \u11AB\u1105: "ll",
            \u11AC: "n",
            \u11AC\u110B: "nj",
            \u11AC\u1102: "nn",
            \u11AC\u1105: "nn",
            \u11AC\u1106: "nm",
            \u11AC\u314E: "nch",
            \u11AD: "n",
            \u11AD\u110B: "nh",
            \u11AD\u1105: "nn",
            \u11AE: "t",
            \u11AE\u110B: "d",
            \u11AE\u1102: "nn",
            \u11AE\u1105: "nn",
            \u11AE\u1106: "nm",
            \u11AE\u1112: "th",
            \u11AF: "l",
            \u11AF\u110B: "r",
            \u11AF\u1102: "ll",
            \u11B0: "k",
            \u11B0\u110B: "lg",
            \u11B0\u1102: "ngn",
            \u11B0\u1105: "ngn",
            \u11B0\u1106: "ngm",
            \u11B0\u1112: "lkh",
            \u11B1: "m",
            \u11B1\u110B: "lm",
            \u11B1\u1102: "mn",
            \u11B1\u1105: "mn",
            \u11B1\u1106: "mm",
            \u11B1\u1112: "lmh",
            \u11B2: "p",
            \u11B2\u110B: "lb",
            \u11B2\u1102: "mn",
            \u11B2\u1105: "mn",
            \u11B2\u1106: "mm",
            \u11B2\u1112: "lph",
            \u11B3: "t",
            \u11B3\u110B: "ls",
            \u11B3\u1102: "nn",
            \u11B3\u1105: "nn",
            \u11B3\u1106: "nm",
            \u11B3\u1112: "lsh",
            \u11B4: "t",
            \u11B4\u110B: "lt",
            \u11B4\u1102: "nn",
            \u11B4\u1105: "nn",
            \u11B4\u1106: "nm",
            \u11B4\u1112: "lth",
            \u11B5: "p",
            \u11B5\u110B: "lp",
            \u11B5\u1102: "mn",
            \u11B5\u1105: "mn",
            \u11B5\u1106: "mm",
            \u11B5\u1112: "lph",
            \u11B6: "l",
            \u11B6\u110B: "lh",
            \u11B6\u1102: "ll",
            \u11B6\u1105: "ll",
            \u11B6\u1106: "lm",
            \u11B6\u1112: "lh",
            \u11B7: "m",
            \u11B7\u1105: "mn",
            \u11B8: "p",
            \u11B8\u110B: "b",
            \u11B8\u1102: "mn",
            \u11B8\u1105: "mn",
            \u11B8\u1106: "mm",
            \u11B8\u1112: "ph",
            \u11B9: "p",
            \u11B9\u110B: "ps",
            \u11B9\u1102: "mn",
            \u11B9\u1105: "mn",
            \u11B9\u1106: "mm",
            \u11B9\u1112: "psh",
            \u11BA: "t",
            \u11BA\u110B: "s",
            \u11BA\u1102: "nn",
            \u11BA\u1105: "nn",
            \u11BA\u1106: "nm",
            \u11BA\u1112: "sh",
            \u11BB: "t",
            \u11BB\u110B: "ss",
            \u11BB\u1102: "tn",
            \u11BB\u1105: "tn",
            \u11BB\u1106: "nm",
            \u11BB\u1112: "th",
            \u11BC: "ng",
            \u11BD: "t",
            \u11BD\u110B: "j",
            \u11BD\u1102: "nn",
            \u11BD\u1105: "nn",
            \u11BD\u1106: "nm",
            \u11BD\u1112: "ch",
            \u11BE: "t",
            \u11BE\u110B: "ch",
            \u11BE\u1102: "nn",
            \u11BE\u1105: "nn",
            \u11BE\u1106: "nm",
            \u11BE\u1112: "ch",
            \u11BF: "k",
            \u11BF\u110B: "k",
            \u11BF\u1102: "ngn",
            \u11BF\u1105: "ngn",
            \u11BF\u1106: "ngm",
            \u11BF\u1112: "kh",
            \u11C0: "t",
            \u11C0\u110B: "t",
            \u11C0\u1102: "nn",
            \u11C0\u1105: "nn",
            \u11C0\u1106: "nm",
            \u11C0\u1112: "th",
            \u11C1: "p",
            \u11C1\u110B: "p",
            \u11C1\u1102: "mn",
            \u11C1\u1105: "mn",
            \u11C1\u1106: "mm",
            \u11C1\u1112: "ph",
            \u11C2: "t",
            \u11C2\u110B: "h",
            \u11C2\u1102: "nn",
            \u11C2\u1105: "nn",
            \u11C2\u1106: "mm",
            \u11C2\u1112: "t"
        }
    },
    RevisedRomanizationTransliteration: {
        cho: {
            \u1100: "g",
            \u1101: "kk",
            \u1102: "n",
            \u1103: "d",
            \u1104: "tt",
            \u1105: "l",
            \u1106: "m",
            \u1107: "b",
            \u1108: "pp",
            \u1109: "s",
            \u110A: "ss",
            \u110B: "",
            \u110C: "j",
            \u110D: "jj",
            \u110E: "ch",
            \u110F: "k",
            \u1110: "t",
            \u1111: "p",
            \u1112: "h"
        },
        cho2: void 0,
        jung: {
            \u1161: "a",
            \u1162: "ae",
            \u1163: "ya",
            \u1164: "yae",
            \u1165: "eo",
            \u1166: "e",
            \u1167: "yeo",
            \u1168: "ye",
            \u1169: "o",
            \u116A: "oa",
            \u116B: "oae",
            \u116C: "oi",
            \u116D: "yo",
            \u116E: "u",
            \u116F: "ueo",
            \u1170: "ue",
            \u1171: "ui",
            \u1172: "yu",
            \u1173: "eu",
            \u1174: "eui",
            \u1175: "i"
        },
        jong: {
            \u11A8: "g",
            \u11A8\u110B: "g-",
            \u11A9: "kk",
            \u11A9\u110B: "kk-",
            \u11AA: "gs",
            \u11AA\u110B: "gs-",
            \u11AA\u1109: "gs-s",
            \u11AB: "n",
            \u11AB\u110B: "n-",
            \u11AC: "nj",
            \u11AC\u110B: "nj-",
            \u11AC\u110C: "nj-j",
            \u11AD: "nh",
            \u11AD\u110B: "nh-",
            \u11AE: "d",
            \u11AE\u110B: "d-",
            \u11AF: "l",
            \u11AF\u110B: "l-",
            \u11B0: "lg",
            \u11B0\u110B: "lg-",
            \u11B1: "lm",
            \u11B1\u110B: "lm-",
            \u11B2: "lb",
            \u11B2\u110B: "lb-",
            \u11B3: "ls",
            \u11B3\u110B: "ls-",
            \u11B3\u1109: "ls-s",
            \u11B4: "lt",
            \u11B4\u110B: "lt-",
            \u11B5: "lp",
            \u11B5\u110B: "lp-",
            \u11B6: "lh",
            \u11B6\u110B: "lh-",
            \u11B7: "m",
            \u11B7\u110B: "m-",
            \u11B8: "b",
            \u11B8\u110B: "b-",
            \u11B9: "bs",
            \u11B9\u110B: "bs-",
            \u11B9\u1109: "bs-s",
            \u11BA: "s",
            \u11BA\u110B: "s-",
            \u11BA\u110A: "s-ss",
            \u11BB: "ss",
            \u11BB\u110B: "ss-",
            \u11BB\u1109: "ss-s",
            \u11BC: "ng",
            \u11BC\u110B: "ng-",
            \u11BD: "j",
            \u11BD\u110B: "j-",
            \u11BD\u110C: "j-j",
            \u11BE: "ch",
            \u11BE\u110B: "ch-",
            \u11BF: "k",
            \u11BF\u110B: "k-",
            \u11C0: "t",
            \u11C0\u110B: "t-",
            \u11C1: "p",
            \u11C1\u110B: "p-",
            \u11C2: "h",
            \u11C2\u110B: "h-"
        }
    },
    Skats: {
        hyphen: " ",
        cho: {
            \u1100: "L",
            \u1101: "LL",
            \u1102: "F",
            \u1103: "B",
            \u1104: "BB",
            \u1105: "V",
            \u1106: "M",
            \u1107: "W",
            \u1108: "WW",
            \u1109: "G",
            \u110A: "GG",
            \u110B: "K",
            \u110C: "P",
            \u110D: "PP",
            \u110E: "C",
            \u110F: "X",
            \u1110: "Z",
            \u1111: "O",
            \u1112: "J",
            " ": "  "
        },
        cho2: void 0,
        jung: {
            \u1161: "E",
            \u1162: "EU",
            \u1163: "I",
            \u1164: "IU",
            \u1165: "T",
            \u1166: "TU",
            \u1167: "S",
            \u1168: "SU",
            \u1169: "A",
            \u116A: "AE",
            \u116B: "AEU",
            \u116C: "AU",
            \u116D: "N",
            \u116E: "H",
            \u116F: "HT",
            \u1170: "HTU",
            \u1171: "HU",
            \u1172: "R",
            \u1173: "D",
            \u1174: "DU",
            \u1175: "U"
        },
        jong: {
            \u11A8: "L",
            \u11A9: "LL",
            \u11AA: "LG",
            \u11AB: "F",
            \u11AC: "FP",
            \u11AD: "FJ",
            \u11AE: "B",
            \u11AF: "V",
            \u11B0: "VL",
            \u11B1: "VM",
            \u11B2: "VW",
            \u11B3: "VG",
            \u11B4: "VZ",
            \u11B5: "VO",
            \u11B6: "VJ",
            \u11B7: "M",
            \u11B8: "W",
            \u11B9: "WG",
            \u11BA: "G",
            \u11BB: "GG",
            \u11BC: "K",
            \u11BD: "P",
            \u11BE: "C",
            \u11BF: "X",
            \u11C0: "Z",
            \u11C1: "O",
            \u11C2: "J"
        }
    },
    IndonesionTranscription: {
        cho: {
            \u1100: "gh",
            \u1101: "k",
            \u1102: "n",
            \u1103: "dh",
            \u1104: "t",
            \u1105: "r",
            \u1106: "m",
            \u1107: "bh",
            \u1108: "p",
            \u1109: "s",
            \u110A: "s",
            \u110B: "",
            \u110C: "jh",
            \u110D: "c",
            \u110E: "ch",
            \u110F: "kh",
            \u1110: "th",
            \u1111: "ph",
            \u1112: "h"
        },
        cho2: {
            \u1100: "g",
            \u1101: "k",
            \u1102: "n",
            \u1103: "d",
            \u1104: "t",
            \u1105: "r",
            \u1106: "m",
            \u1107: "b",
            \u1108: "p",
            \u1109: "s",
            \u110A: "s",
            \u110B: "",
            \u110C: "j",
            \u110D: "c",
            \u110E: "ch",
            \u110F: "kh",
            \u1110: "th",
            \u1111: "ph",
            \u1112: "h"
        },
        jung: {
            \u1161: "a",
            \u1162: "\xE8",
            \u1163: "ya",
            \u1164: "y\xE8",
            \u1165: "\xF6",
            \u1166: "\xE9",
            \u1167: "y\xF6",
            \u1168: "y\xE9",
            \u1169: "o",
            \u116A: "wa",
            \u116B: "w\xE8",
            \u116C: "w\xE9",
            \u116D: "yo",
            \u116E: "u",
            \u116F: "wo",
            \u1170: "w\xE9",
            \u1171: "wi",
            \u1172: "yu",
            \u1173: "eu",
            \u1174: "eui",
            \u1175: "i"
        },
        jong: {
            \u11A8: "k",
            \u11A8\u110B: "g",
            \u11A8\u1102: "ngn",
            \u11A8\u1105: "ngn",
            \u11A8\u1106: "ngm",
            \u11A8\u1112: "kh",
            \u11A9: "k",
            \u11A9\u110B: "kg",
            \u11A9\u1102: "ngn",
            \u11A9\u1105: "ngn",
            \u11A9\u1106: "ngm",
            \u11A9\u1112: "kh",
            \u11AA: "k",
            \u11AA\u110B: "ks",
            \u11AA\u1102: "ngn",
            \u11AA\u1105: "ngn",
            \u11AA\u1106: "ngm",
            \u11AA\u1112: "kch",
            \u11AB: "n",
            \u11AB\u1105: "ll",
            \u11AC: "n",
            \u11AC\u110B: "nj",
            \u11AC\u1102: "nn",
            \u11AC\u1105: "nn",
            \u11AC\u1106: "nm",
            \u11AC\u314E: "nch",
            \u11AD: "n",
            \u11AD\u110B: "nh",
            \u11AD\u1105: "nn",
            \u11AE: "t",
            \u11AE\u110B: "d",
            \u11AE\u1102: "nn",
            \u11AE\u1105: "nn",
            \u11AE\u1106: "nm",
            \u11AE\u1112: "th",
            \u11AF: "l",
            \u11AF\u110B: "r",
            \u11AF\u1102: "ll",
            \u11B0: "k",
            \u11B0\u110B: "lg",
            \u11B0\u1102: "ngn",
            \u11B0\u1105: "ngn",
            \u11B0\u1106: "ngm",
            \u11B0\u1112: "lkh",
            \u11B1: "m",
            \u11B1\u110B: "lm",
            \u11B1\u1102: "mn",
            \u11B1\u1105: "mn",
            \u11B1\u1106: "mm",
            \u11B1\u1112: "lmh",
            \u11B2: "p",
            \u11B2\u110B: "lb",
            \u11B2\u1102: "mn",
            \u11B2\u1105: "mn",
            \u11B2\u1106: "mm",
            \u11B2\u1112: "lph",
            \u11B3: "t",
            \u11B3\u110B: "ls",
            \u11B3\u1102: "nn",
            \u11B3\u1105: "nn",
            \u11B3\u1106: "nm",
            \u11B3\u1112: "lsh",
            \u11B4: "t",
            \u11B4\u110B: "lt",
            \u11B4\u1102: "nn",
            \u11B4\u1105: "nn",
            \u11B4\u1106: "nm",
            \u11B4\u1112: "lth",
            \u11B5: "p",
            \u11B5\u110B: "lp",
            \u11B5\u1102: "mn",
            \u11B5\u1105: "mn",
            \u11B5\u1106: "mm",
            \u11B5\u1112: "lph",
            \u11B6: "l",
            \u11B6\u110B: "lh",
            \u11B6\u1102: "ll",
            \u11B6\u1105: "ll",
            \u11B6\u1106: "lm",
            \u11B6\u1112: "lh",
            \u11B7: "m",
            \u11B7\u1105: "mn",
            \u11B8: "p",
            \u11B8\u110B: "b",
            \u11B8\u1102: "mn",
            \u11B8\u1105: "mn",
            \u11B8\u1106: "mm",
            \u11B8\u1112: "ph",
            \u11B9: "p",
            \u11B9\u110B: "ps",
            \u11B9\u1102: "mn",
            \u11B9\u1105: "mn",
            \u11B9\u1106: "mm",
            \u11B9\u1112: "psh",
            \u11BA: "t",
            \u11BA\u110B: "sh",
            \u11BA\u1102: "nn",
            \u11BA\u1105: "nn",
            \u11BA\u1106: "nm",
            \u11BA\u1112: "sh",
            \u11BB: "t",
            \u11BB\u110B: "s",
            \u11BB\u1102: "nn",
            \u11BB\u1105: "nn",
            \u11BB\u1106: "nm",
            \u11BB\u1112: "th",
            \u11BC: "ng",
            \u11BD: "t",
            \u11BD\u110B: "j",
            \u11BD\u1102: "nn",
            \u11BD\u1105: "nn",
            \u11BD\u1106: "nm",
            \u11BD\u1112: "ch",
            \u11BE: "t",
            \u11BE\u110B: "ch",
            \u11BE\u1102: "nn",
            \u11BE\u1105: "nn",
            \u11BE\u1106: "nm",
            \u11BE\u1112: "ch",
            \u11BF: "k",
            \u11BF\u110B: "k",
            \u11BF\u1102: "ngn",
            \u11BF\u1105: "ngn",
            \u11BF\u1106: "ngm",
            \u11BF\u1112: "kh",
            \u11C0: "t",
            \u11C0\u110B: "t",
            \u11C0\u1102: "nn",
            \u11C0\u1105: "nn",
            \u11C0\u1106: "nm",
            \u11C0\u1112: "th",
            \u11C0\u110B\u1175: "ch",
            \u11C1: "p",
            \u11C1\u110B: "p",
            \u11C1\u1102: "mn",
            \u11C1\u1105: "mn",
            \u11C1\u1106: "mm",
            \u11C1\u1112: "ph",
            \u11C2: "t",
            \u11C2\u110B: "h",
            \u11C2\u1102: "nn",
            \u11C2\u1105: "nn",
            \u11C2\u1106: "mm",
            \u11C2\u1112: "t"
        }
    }
}
  , pd = /\s/
  , fs = a => a.charCodeAt(0) >= 4352 && a.charCodeAt(0) <= 4370
  , ys = (a, e, t="") => {
    let i = gd[e], o = "", l, s = !0;
    for (let n = 0; n <= a.length; n += 1) {
        let r = a.charCodeAt(n) - 44032, c;
        if (isNaN(r) === !1 && r >= 0 && r <= 11171 ? c = String.fromCharCode(Math.floor(r / 588) + 4352) + String.fromCharCode(Math.floor(r % 588 / 28) + 4449) + (r % 28 == 0 ? "" : String.fromCharCode(r % 28 + 4519)) : c = a.charAt(n),
        l !== void 0) {
            let u = ""
              , d = l.charAt(0);
            s ? n > 0 && pd.test(a.charAt(n - 2)) === !1 && i.cho2 !== void 0 && i.cho2[d] !== void 0 ? u += i.cho2[d] : i.cho[d] !== void 0 ? u += i.cho[d] : u += d : s = !0;
            let m = l.length;
            if (m > 1) {
                let g = l.charAt(1);
                if (i.jung[g] !== void 0 ? u += i.jung[g] : u += g,
                m === 2)
                    fs(c.charAt(0)) && (u += " ");
                else if (m > 2) {
                    let v = l.charAt(2)
                      , S = c.charAt(0)
                      , x = c.charAt(1);
                    if (i.jong[v + S + x] !== void 0)
                        u += i.jong[v + S + x],
                        s = !1;
                    else if (i.jong[v + S] !== void 0)
                        u += i.jong[v + S],
                        s = !1;
                    else {
                        let D = i.jong[v];
                        u += D === void 0 ? v : D,
                        fs(S) && (u += " ")
                    }
                }
            }
            l.length > 1 && (t === "" && i.hyphen !== void 0 ? u = u.replace(" ", i.hyphen) : (u = u.replace(" ", t),
            t !== "" && (u = u.replace("-", t)))),
            o += u
        }
        l = c
    }
    return o
}
;
var ks = 2
  , vs = .25
  , fd = ["pes", "urd", "arb", "uig", "heb", "ydd", "men"]
  , bs = new es
  , yd = bs.init(Bn)
  , kd = /[\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]/
  , vd = /([\u4E00-\u9FFF])/
  , bd = /([ぁ-んァ-ン])/
  , Vn = a => fd.includes(a) ? "Right" : "Left"
  , wd = (a, e) => e === "cmn" || vd.test(a.Text) ? ps(a.Text, {
    segment: !1,
    group: !0
}).then(t => a.RomanizedText = t.join("-")).then( () => "Chinese") : Promise.resolve()
  , Ld = (a, e) => e === "jpn" || bd.test(a.Text) ? yd.then( () => bs.convert(a.Text, {
    to: "romaji",
    mode: "spaced"
})).then(t => (a.RomanizedText = t,
"Japanese")) : Promise.resolve()
  , Sd = (a, e) => e === "kor" || kd.test(a.Text) ? (a.RomanizedText = ys(a.Text, "RevisedRomanizationTransliteration"),
Promise.resolve("Korean")) : Promise.resolve()
  , Bi = (a, e) => Ld(a, e.Language).then(t => t === void 0 ? Sd(a, e.Language) : t).then(t => t === void 0 ? wd(a, e.Language) : t).then(t => {
    t !== void 0 && (e.RomanizedLanguage = t)
}
)
  , ws = a => {
    let e = a
      , t = [];
    if (e.Type === "Static") {
        {
            let i = e.Lines[0].Text;
            for (let l = 1; l < e.Lines.length; l += 1)
                i += `
${e.Lines[l].Text}`;
            let o = Ei(i);
            e.Language = o,
            e.NaturalAlignment = Vn(o)
        }
        for (let i of e.Lines)
            t.push(Bi(i, e))
    } else if (e.Type === "Line") {
        {
            let i = [];
            for (let s of e.Content)
                s.Type === "Vocal" && i.push(s.Text);
            let o = i.join(`
`)
              , l = Ei(o);
            e.Language = l,
            e.NaturalAlignment = Vn(l)
        }
        for (let i of e.Content)
            i.Type == "Vocal" && t.push(Bi(i, e))
    } else if (e.Type === "Syllable") {
        {
            let i = [];
            for (let s of e.Content)
                if (s.Type === "Vocal") {
                    let n = s.Lead.Syllables[0].Text;
                    for (let r = 1; r < s.Lead.Syllables.length; r += 1) {
                        let c = s.Lead.Syllables[r];
                        n += `${c.IsPartOfWord ? "" : " "}${c.Text}`
                    }
                    i.push(n)
                }
            let o = i.join(`
`)
              , l = Ei(o);
            e.Language = l,
            e.NaturalAlignment = Vn(l)
        }
        for (let i of e.Content)
            if (i.Type == "Vocal") {
                for (let o of i.Lead.Syllables)
                    t.push(Bi(o, e));
                if (i.Background !== void 0)
                    for (let o of i.Background[0].Syllables)
                        t.push(Bi(o, e))
            }
    }
    return Promise.all(t).then( () => {
        if (e.Type === "Static")
            return;
        let i = [];
        if (e.Type === "Line")
            for (let l of e.Content)
                l.Type === "Vocal" && i.push({
                    StartTime: l.StartTime,
                    EndTime: l.EndTime
                });
        else if (e.Type === "Syllable") {
            for (let l of e.Content)
                if (l.Type === "Vocal") {
                    let s = l.Lead.StartTime
                      , n = l.Lead.EndTime;
                    if (l.Background !== void 0)
                        for (let r of l.Background)
                            s = Math.min(s, r.StartTime),
                            n = Math.max(n, r.EndTime);
                    i.push({
                        StartTime: s,
                        EndTime: n
                    })
                }
        }
        let o = !1;
        {
            let l = i[0];
            l.StartTime >= ks && (i.unshift({
                StartTime: -1,
                EndTime: -1
            }),
            e.Content.unshift({
                Type: "Interlude",
                StartTime: 0,
                EndTime: l.StartTime - vs
            }),
            o = !0)
        }
        for (let l = i.length - 1; l > (o ? 1 : 0); l -= 1) {
            let s = i[l]
              , n = i[l - 1];
            s.StartTime - n.EndTime >= ks && (i.splice(l, 0, {
                StartTime: -1,
                EndTime: -1
            }),
            e.Content.splice(l, 0, {
                Type: "Interlude",
                StartTime: n.EndTime,
                EndTime: s.StartTime - vs
            }))
        }
    }
    ).then( () => e)
}
;
var ga = Ze.Give(new ke), [Ri,Gi,Ui,Yn,Kn,As,js,Ts,Ms] = ga.GiveItems(new Le, new Le, new Le, new Le, new Le, new Le, new Le, new Le, new Le), Ue = Ri.GetEvent(), Is = Gi.GetEvent(), xs = Ui.GetEvent(), Rt = Yn.GetEvent(), Wn = Kn.GetEvent(), qi = As.GetEvent(), Es = js.GetEvent(), Ds = Ts.GetEvent(), zs = Ms.GetEvent(), ve, Re, _a = !1, Hn = !1, Ns = a => a !== _a && we.setHeart(a), Ps = () => {
    if (ve?.Type === "DJ")
        throw new Error("Cannot get duration of a DJ track");
    let a = ve?.Duration ?? 0
      , e = Math.floor(a / 60)
      , t = Math.floor(a % 60);
    return `${a >= 600 ? e.toString().padStart(2, "0") : e}:${t.toString().padStart(2, "0")}`
}
, Je = -1, aa = !1, Bt = !1, Fa = "Off", Vi = a => we.setRepeat(a === "Off" ? 0 : a === "Context" ? 1 : 2), Os = a => we.setShuffle(a), _s = a => a !== aa && (a ? we.play() : we.pause()), Hi = a => we.seek(a * 1e3), Fs = () => {
    if (ve?.Type === "DJ")
        throw new Error("Cannot get Timestamp of a DJ track");
    let a = ve?.Duration ?? 0
      , e = Math.floor(Je / 60)
      , t = Math.floor(Je % 60);
    return `${a >= 600 ? e.toString().padStart(2, "0") : e}:${t.toString().padStart(2, "0")}`
}
, We, dt = !1, Ls = Ti("Player_TrackInformation", 2, {
    Duration: 2,
    Unit: "Weeks"
}, !0), Cd = [/\s*(?:\-|\/)\s*(?:(?:Stereo|Mono)\s*)?Remastered(?:\s*\d+)?/, /\s*\-\s*(?:Stereo|Mono)(?:\s*Version|\s*Mix)?/, /\s*\(\s*(?:Stereo|Mono)(?:\s*Mix)?\)?/], Ad = () => {
    We = void 0,
    dt = !1;
    let a = ve;
    if (a === void 0 || a.Type === "DJ") {
        dt = !0,
        Ui.Fire();
        return
    }
    if (a.Type === "Local") {
        We = {
            IsLocal: !0,
            Name: we.data.item.name,
            Album: we.data.item.album.name,
            Artists: we.data.item.artists?.map(e => e.name)
        },
        dt = !0,
        Ui.Fire();
        return
    }
    Ls.GetItem(a.Id).then(e => {
        if (e === void 0) {
            let t = ra.build().withHost("https://spclient.wg.spotify.com/metadata/4").withPath(`/track/${a.InternalId}`).withEndpointIdentifier(`/track/${a.InternalId}`);
            return t.UseExistingPromise = !0,
            t.send().catch(i => {
                throw console.warn(i),
                i
            }
            ).then(i => {
                if (i.ok === !1)
                    throw `Failed to load Track (${a.Id}) Information`;
                return i.body
            }
            ).then(i => (Ls.SetItem(a.Id, i),
            i))
        } else
            return e
    }
    ).then(e => {
        if (ve !== a)
            return;
        let t = e.name;
        for (let i of Cd)
            t = t.replace(i, "");
        We = {
            IsLocal: !1,
            ISRC: e.external_id.find(i => i.type === "isrc").id,
            Name: t,
            Artists: e.artist.map(i => ({
                InternalId: i.gid,
                Id: Ta.hexToId(i.gid),
                Name: i.name
            })),
            Album: {
                InternalId: e.album.gid,
                Id: Ta.hexToId(e.album.gid),
                Artists: e.album.artist.map(i => ({
                    InternalId: i.gid,
                    Id: Ta.hexToId(i.gid),
                    Name: i.name
                })),
                ReleaseDate: e.album.date
            },
            Raw: e
        },
        dt = !0,
        Ui.Fire()
    }
    )
}
, Ss = Ti("Player_ProviderLyrics", 2, {
    Duration: 1,
    Unit: "Months"
}, !0), Cs = Ti("Player_TransformedLyrics", 2, {
    Duration: 1,
    Unit: "Months"
}, !0), Ie, Oa = !1, jd = () => {
    Oa = !1,
    Ie = void 0;
    let a = ve;
    if (a === void 0 || a.Type !== "Streamed") {
        Oa = !0,
        Yn.Fire();
        return
    }
    Ss.GetItem(a.Id).then(e => e === void 0 ? xt().then(t => fetch(`https://beautiful-lyrics.socalifornian.live/lyrics/${encodeURIComponent(a.Id)}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${t}`
        }
    })).then(t => {
        if (t.ok === !1)
            throw `Failed to load Lyrics for Track (${a.Id}), Error: ${t.status} ${t.statusText}`;
        return t.text()
    }
    ).then(t => {
        if (t.length !== 0)
            return JSON.parse(t)
    }
    ).then(t => {
        let i = t ?? !1;
        return Ss.SetItem(a.Id, i),
        i
    }
    ) : e).then(e => Cs.GetItem(a.Id).then(t => [e, t])).then( ([e,t]) => t === void 0 ? (e === !1 ? Promise.resolve(!1) : ws(e)).then(i => (Cs.SetItem(a.Id, i),
    i || void 0)) : Promise.resolve(t || void 0)).then(e => {
        ve === a && (Ie = e,
        Oa = !0,
        Yn.Fire())
    }
    )
}
;
ct.then( () => {
    {
        ra.resetPendingRequests();
        let a = ra.build
          , e = new Map;
        ra.build = (...t) => {
            let i = a.call(ra, ...t), o = i.onAfterSend, l;
            i.onAfterSend = (...n) => (l !== void 0 && e.delete(l),
            o.call(i, ...n));
            let s = i.send;
            return i.send = (...n) => {
                let r = i.host === "https://spclient.wg.spotify.com/metadata/4" && i.path.startsWith("/track/") && i.endpointIdentifier?.startsWith("/track/");
                if (i.UseExistingPromise && r) {
                    let u = e.get(`${i.host}${i.path}`);
                    if (u !== void 0)
                        return u
                }
                let c = s.call(i, ...n);
                if (r) {
                    let u = `${i.host}${i.path}`;
                    e.set(u, c),
                    l = u
                }
                return c
            }
            ,
            i
        }
        ,
        ga.Give( () => ra.build = a, "RequestBuilderOverride")
    }
    {
        let a = () => {
            let e = we.getHeart();
            (Hn === !1 || _a !== e) && (_a = e,
            Hn = !0,
            Ms.Fire());
            let t = we.getShuffle();
            Bt !== t && (Bt = t,
            js.Fire());
            let i = we.getRepeat()
              , o = i === 0 ? "Off" : i === 1 ? "Context" : "Song";
            Fa !== o && (Fa = o,
            Ts.Fire())
        }
        ;
        a(),
        ze.PlayerAPI._events.addListener("update", a),
        ga.Give( () => ze.PlayerAPI._events.removeListener("update", a))
    }
    {
        let a = () => {
            if (we.data?.context === void 0)
                return ga.Give(Be(a), "SongChangeUpdate");
            if (we.data === null) {
                ve !== void 0 && (ve = void 0,
                Ri.Fire()),
                Re !== void 0 && (Re = void 0,
                Gi.Fire());
                return
            }
            let e = we.data.item
              , t = e.type === "track"
              , i = e.type === "unknown" && e.provider.startsWith("narration");
            if (e === void 0 || t === !1 && i === !1)
                ve = void 0;
            else {
                Je = 0;
                let o = e.metadata
                  , l = Ta.from(e.uri);
                ve = Object.freeze(i ? {
                    Type: "DJ",
                    Uri: e.uri,
                    Action: e.name,
                    CoverArt: {
                        Large: o.image_xlarge_url,
                        Big: o.image_large_url,
                        Default: o.image_url,
                        Small: o.image_small_url
                    }
                } : o.is_local === "true" ? {
                    Type: "Local",
                    Uri: e.uri,
                    Duration: we.data.duration / 1e3,
                    CoverArt: we.data.item.images?.[0]?.url
                } : {
                    Type: "Streamed",
                    Uri: e.uri,
                    Id: l.id,
                    InternalId: Ta.idToHex(l.id),
                    Duration: we.data.duration / 1e3,
                    CoverArt: {
                        Large: o.image_xlarge_url,
                        Big: o.image_large_url,
                        Default: o.image_url,
                        Small: o.image_small_url
                    }
                })
            }
            if (Hn = !1,
            Ad(),
            jd(),
            Ri.Fire(),
            we.data.hasContext === !1 && Re !== void 0)
                Re = void 0,
                Gi.Fire();
            else if (Re === void 0 || Re.Uri !== we.data.context.uri) {
                let o = we.data.context.metadata
                  , l = {
                    Uri: we.data.context.uri,
                    CoverArt: o.image_url === "" ? void 0 : o.image_url,
                    Description: o.context_description
                };
                if (l.Uri === "spotify:internal:local-files")
                    Re = {
                        Type: "LocalFiles",
                        ...l
                    };
                else {
                    let s = Ta.from(we.data.context.uri);
                    s?.type?.startsWith("playlist") ? Re = {
                        Type: "Playlist",
                        Id: s.id,
                        ...l
                    } : s?.type === "album" ? Re = {
                        Type: "Album",
                        Id: s.id,
                        ...l
                    } : Re = {
                        Type: "Other",
                        ...l
                    }
                }
                Gi.Fire()
            }
        }
        ;
        a(),
        we.addEventListener("songchange", a),
        ga.Give( () => we.removeEventListener("songchange", a))
    }
    {
        let a = () => {
            if (we.data === void 0 || we.data === null)
                return ga.Give(Be(a), "PlayingUpdate");
            let e = we.data.isPaused;
            aa === e && (aa = !e,
            Kn.Fire(),
            aa === !1 && ga.Clean("AutomaticSync"))
        }
        ;
        a(),
        we.addEventListener("onplaypause", a),
        ga.Give( () => we.removeEventListener("onplaypause", a))
    }
    {
        let a, e = [.05, .1, .15, .75], t = aa ? e.length : 0;
        Ri.Connect( () => t = e.length),
        Kn.Connect( () => t = aa ? e.length : 0);
        let i = () => {
            let s = performance.now()
              , n = ze.PlaybackAPI._isLocal;
            return (n ? ze.PlayerAPI._contextPlayer.getPositionState({}).then( ({position: r}) => ({
                StartedSyncAt: s,
                Position: Number(r)
            })) : (t > 0 ? ze.PlayerAPI._contextPlayer.resume({}) : Promise.resolve()).then( () => (t = Math.max(0, t - 1),
            aa ? {
                StartedSyncAt: s,
                Position: ze.PlayerAPI._state.positionAsOfTimestamp + (Date.now() - ze.PlayerAPI._state.timestamp)
            } : {
                Position: ze.PlayerAPI._state.positionAsOfTimestamp
            }))).then(r => a = r).then( () => ga.Give(Fe(n || t === 0 ? 1 / 30 : e[e.length - t], i), "TimestampPositionSync"))
        }
          , o = performance.now()
          , l = () => {
            if (o === void 0)
                return o = performance.now(),
                ga.Give(Be(l), "Timestep");
            let s = performance.now()
              , n = (s - o) / 1e3;
            if (ve !== void 0) {
                let r, c = n, u = a === void 0 ? void 0 : a.Position / 1e3 + (a.StartedSyncAt === void 0 ? 0 : (s - a.StartedSyncAt) / 1e3);
                a = void 0,
                aa ? u === void 0 || Math.abs(u - Je) < .075 ? (r = Je + n,
                c = n) : r = u : u !== void 0 && Math.abs(u - Je) > .05 && (r = u,
                c = 0),
                r !== void 0 && (Je = r,
                As.Fire(c, c === 0 || void 0))
            }
            o = s,
            ga.Give(Be(l), "Timestep")
        }
        ;
        i().then(l)
    }
}
);
var rl = lt($n(), 1);
var Md = typeof global == "object" && global && global.Object === Object && global
  , Rs = Md;
var Id = typeof self == "object" && self && self.Object === Object && self
  , xd = Rs || Id || Function("return this")()
  , Yi = xd;
var Ed = Yi.Symbol
  , mt = Ed;
var Gs = Object.prototype
  , Dd = Gs.hasOwnProperty
  , zd = Gs.toString
  , Gt = mt ? mt.toStringTag : void 0;
function Nd(a) {
    var e = Dd.call(a, Gt)
      , t = a[Gt];
    try {
        a[Gt] = void 0;
        var i = !0
    } catch {}
    var o = zd.call(a);
    return i && (e ? a[Gt] = t : delete a[Gt]),
    o
}
var Us = Nd;
var Pd = Object.prototype
  , Od = Pd.toString;
function _d(a) {
    return Od.call(a)
}
var qs = _d;
var Fd = "[object Null]"
  , Bd = "[object Undefined]"
  , Vs = mt ? mt.toStringTag : void 0;
function Rd(a) {
    return a == null ? a === void 0 ? Bd : Fd : Vs && Vs in Object(a) ? Us(a) : qs(a)
}
var Hs = Rd;
function Gd(a) {
    return a != null && typeof a == "object"
}
var Ys = Gd;
var Ud = "[object Symbol]";
function qd(a) {
    return typeof a == "symbol" || Ys(a) && Hs(a) == Ud
}
var Ks = qd;
var Vd = /\s/;
function Hd(a) {
    for (var e = a.length; e-- && Vd.test(a.charAt(e)); )
        ;
    return e
}
var Ws = Hd;
var Yd = /^\s+/;
function Kd(a) {
    return a && a.slice(0, Ws(a) + 1).replace(Yd, "")
}
var $s = Kd;
function Wd(a) {
    var e = typeof a;
    return a != null && (e == "object" || e == "function")
}
var $a = Wd;
var Qs = NaN
  , $d = /^[-+]0x[0-9a-f]+$/i
  , Qd = /^0b[01]+$/i
  , Zd = /^0o[0-7]+$/i
  , Xd = parseInt;
function Jd(a) {
    if (typeof a == "number")
        return a;
    if (Ks(a))
        return Qs;
    if ($a(a)) {
        var e = typeof a.valueOf == "function" ? a.valueOf() : a;
        a = $a(e) ? e + "" : e
    }
    if (typeof a != "string")
        return a === 0 ? a : +a;
    a = $s(a);
    var t = Qd.test(a);
    return t || Zd.test(a) ? Xd(a.slice(2), t ? 2 : 8) : $d.test(a) ? Qs : +a
}
var Qn = Jd;
var em = function() {
    return Yi.Date.now()
}
  , Ki = em;
var am = "Expected a function"
  , tm = Math.max
  , im = Math.min;
function nm(a, e, t) {
    var i, o, l, s, n, r, c = 0, u = !1, d = !1, m = !0;
    if (typeof a != "function")
        throw new TypeError(am);
    e = Qn(e) || 0,
    $a(t) && (u = !!t.leading,
    d = "maxWait"in t,
    l = d ? tm(Qn(t.maxWait) || 0, e) : l,
    m = "trailing"in t ? !!t.trailing : m);
    function g(W) {
        var R = i
          , F = o;
        return i = o = void 0,
        c = W,
        s = a.apply(F, R),
        s
    }
    function v(W) {
        return c = W,
        n = setTimeout(D, e),
        u ? g(W) : s
    }
    function S(W) {
        var R = W - r
          , F = W - c
          , X = e - R;
        return d ? im(X, l - F) : X
    }
    function x(W) {
        var R = W - r
          , F = W - c;
        return r === void 0 || R >= e || R < 0 || d && F >= l
    }
    function D() {
        var W = Ki();
        if (x(W))
            return B(W);
        n = setTimeout(D, S(W))
    }
    function B(W) {
        return n = void 0,
        m && i ? g(W) : (i = o = void 0,
        s)
    }
    function q() {
        n !== void 0 && clearTimeout(n),
        c = 0,
        i = r = o = n = void 0
    }
    function K() {
        return n === void 0 ? s : B(Ki())
    }
    function te() {
        var W = Ki()
          , R = x(W);
        if (i = arguments,
        o = this,
        r = W,
        R) {
            if (n === void 0)
                return v(r);
            if (d)
                return clearTimeout(n),
                n = setTimeout(D, e),
                g(r)
        }
        return n === void 0 && (n = setTimeout(D, e)),
        s
    }
    return te.cancel = q,
    te.flush = K,
    te
}
var Qa = nm;
var rm = "Expected a function";
function om(a, e, t) {
    var i = !0
      , o = !0;
    if (typeof a != "function")
        throw new TypeError(rm);
    return $a(t) && (i = "leading"in t ? !!t.leading : i,
    o = "trailing"in t ? !!t.trailing : o),
    Qa(a, e, {
        leading: i,
        maxWait: e,
        trailing: o
    })
}
var Zn = om;
var Jn = lt($n(), 1)
  , gt = function() {
    return gt = Object.assign || function(e) {
        for (var t, i = 1, o = arguments.length; i < o; i++) {
            t = arguments[i];
            for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l])
        }
        return e
    }
    ,
    gt.apply(this, arguments)
}
  , ht = null
  , Zs = null;
Jn.default && window.addEventListener("resize", function() {
    Zs !== window.devicePixelRatio && (Zs = window.devicePixelRatio,
    ht = null)
});
function Xs() {
    if (ht === null) {
        if (typeof document > "u")
            return ht = 0,
            ht;
        var a = document.body
          , e = document.createElement("div");
        e.classList.add("simplebar-hide-scrollbar"),
        a.appendChild(e);
        var t = e.getBoundingClientRect().right;
        a.removeChild(e),
        ht = t
    }
    return ht
}
function Js(a) {
    return !a || !a.ownerDocument || !a.ownerDocument.defaultView ? window : a.ownerDocument.defaultView
}
function el(a) {
    return !a || !a.ownerDocument ? document : a.ownerDocument
}
var al = function(a) {
    var e = {}
      , t = Array.prototype.reduce.call(a, function(i, o) {
        var l = o.name.match(/data-simplebar-(.+)/);
        if (l) {
            var s = l[1].replace(/\W+(.)/g, function(n, r) {
                return r.toUpperCase()
            });
            switch (o.value) {
            case "true":
                i[s] = !0;
                break;
            case "false":
                i[s] = !1;
                break;
            case void 0:
                i[s] = !0;
                break;
            default:
                i[s] = o.value
            }
        }
        return i
    }, e);
    return t
};
function tl(a, e) {
    var t;
    a && (t = a.classList).add.apply(t, e.split(" "))
}
function il(a, e) {
    a && e.split(" ").forEach(function(t) {
        a.classList.remove(t)
    })
}
function nl(a) {
    return ".".concat(a.split(" ").join("."))
}
var sm = Object.freeze({
    __proto__: null,
    getElementWindow: Js,
    getElementDocument: el,
    getOptions: al,
    addClasses: tl,
    removeClasses: il,
    classNamesToQuery: nl
})
  , Ba = Js
  , Xn = el
  , lm = al
  , Ra = tl
  , Ga = il
  , ta = nl
  , Ut = function() {
    function a(e, t) {
        t === void 0 && (t = {});
        var i = this;
        if (this.removePreventClickId = null,
        this.minScrollbarWidth = 20,
        this.stopScrollDelay = 175,
        this.isScrolling = !1,
        this.isMouseEntering = !1,
        this.scrollXTicking = !1,
        this.scrollYTicking = !1,
        this.wrapperEl = null,
        this.contentWrapperEl = null,
        this.contentEl = null,
        this.offsetEl = null,
        this.maskEl = null,
        this.placeholderEl = null,
        this.heightAutoObserverWrapperEl = null,
        this.heightAutoObserverEl = null,
        this.rtlHelpers = null,
        this.scrollbarWidth = 0,
        this.resizeObserver = null,
        this.mutationObserver = null,
        this.elStyles = null,
        this.isRtl = null,
        this.mouseX = 0,
        this.mouseY = 0,
        this.onMouseMove = function() {}
        ,
        this.onWindowResize = function() {}
        ,
        this.onStopScrolling = function() {}
        ,
        this.onMouseEntered = function() {}
        ,
        this.onScroll = function() {
            var o = Ba(i.el);
            i.scrollXTicking || (o.requestAnimationFrame(i.scrollX),
            i.scrollXTicking = !0),
            i.scrollYTicking || (o.requestAnimationFrame(i.scrollY),
            i.scrollYTicking = !0),
            i.isScrolling || (i.isScrolling = !0,
            Ra(i.el, i.classNames.scrolling)),
            i.showScrollbar("x"),
            i.showScrollbar("y"),
            i.onStopScrolling()
        }
        ,
        this.scrollX = function() {
            i.axis.x.isOverflowing && i.positionScrollbar("x"),
            i.scrollXTicking = !1
        }
        ,
        this.scrollY = function() {
            i.axis.y.isOverflowing && i.positionScrollbar("y"),
            i.scrollYTicking = !1
        }
        ,
        this._onStopScrolling = function() {
            Ga(i.el, i.classNames.scrolling),
            i.options.autoHide && (i.hideScrollbar("x"),
            i.hideScrollbar("y")),
            i.isScrolling = !1
        }
        ,
        this.onMouseEnter = function() {
            i.isMouseEntering || (Ra(i.el, i.classNames.mouseEntered),
            i.showScrollbar("x"),
            i.showScrollbar("y"),
            i.isMouseEntering = !0),
            i.onMouseEntered()
        }
        ,
        this._onMouseEntered = function() {
            Ga(i.el, i.classNames.mouseEntered),
            i.options.autoHide && (i.hideScrollbar("x"),
            i.hideScrollbar("y")),
            i.isMouseEntering = !1
        }
        ,
        this._onMouseMove = function(o) {
            i.mouseX = o.clientX,
            i.mouseY = o.clientY,
            (i.axis.x.isOverflowing || i.axis.x.forceVisible) && i.onMouseMoveForAxis("x"),
            (i.axis.y.isOverflowing || i.axis.y.forceVisible) && i.onMouseMoveForAxis("y")
        }
        ,
        this.onMouseLeave = function() {
            i.onMouseMove.cancel(),
            (i.axis.x.isOverflowing || i.axis.x.forceVisible) && i.onMouseLeaveForAxis("x"),
            (i.axis.y.isOverflowing || i.axis.y.forceVisible) && i.onMouseLeaveForAxis("y"),
            i.mouseX = -1,
            i.mouseY = -1
        }
        ,
        this._onWindowResize = function() {
            i.scrollbarWidth = i.getScrollbarWidth(),
            i.hideNativeScrollbar()
        }
        ,
        this.onPointerEvent = function(o) {
            if (!(!i.axis.x.track.el || !i.axis.y.track.el || !i.axis.x.scrollbar.el || !i.axis.y.scrollbar.el)) {
                var l, s;
                i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect(),
                i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect(),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) && (l = i.isWithinBounds(i.axis.x.track.rect)),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) && (s = i.isWithinBounds(i.axis.y.track.rect)),
                (l || s) && (o.stopPropagation(),
                o.type === "pointerdown" && o.pointerType !== "touch" && (l && (i.axis.x.scrollbar.rect = i.axis.x.scrollbar.el.getBoundingClientRect(),
                i.isWithinBounds(i.axis.x.scrollbar.rect) ? i.onDragStart(o, "x") : i.onTrackClick(o, "x")),
                s && (i.axis.y.scrollbar.rect = i.axis.y.scrollbar.el.getBoundingClientRect(),
                i.isWithinBounds(i.axis.y.scrollbar.rect) ? i.onDragStart(o, "y") : i.onTrackClick(o, "y"))))
            }
        }
        ,
        this.drag = function(o) {
            var l, s, n, r, c, u, d, m, g, v, S;
            if (!(!i.draggedAxis || !i.contentWrapperEl)) {
                var x, D = i.axis[i.draggedAxis].track, B = (s = (l = D.rect) === null || l === void 0 ? void 0 : l[i.axis[i.draggedAxis].sizeAttr]) !== null && s !== void 0 ? s : 0, q = i.axis[i.draggedAxis].scrollbar, K = (r = (n = i.contentWrapperEl) === null || n === void 0 ? void 0 : n[i.axis[i.draggedAxis].scrollSizeAttr]) !== null && r !== void 0 ? r : 0, te = parseInt((u = (c = i.elStyles) === null || c === void 0 ? void 0 : c[i.axis[i.draggedAxis].sizeAttr]) !== null && u !== void 0 ? u : "0px", 10);
                o.preventDefault(),
                o.stopPropagation(),
                i.draggedAxis === "y" ? x = o.pageY : x = o.pageX;
                var W = x - ((m = (d = D.rect) === null || d === void 0 ? void 0 : d[i.axis[i.draggedAxis].offsetAttr]) !== null && m !== void 0 ? m : 0) - i.axis[i.draggedAxis].dragOffset;
                W = i.draggedAxis === "x" && i.isRtl ? ((v = (g = D.rect) === null || g === void 0 ? void 0 : g[i.axis[i.draggedAxis].sizeAttr]) !== null && v !== void 0 ? v : 0) - q.size - W : W;
                var R = W / (B - q.size)
                  , F = R * (K - te);
                i.draggedAxis === "x" && i.isRtl && (F = !((S = a.getRtlHelpers()) === null || S === void 0) && S.isScrollingToNegative ? -F : F),
                i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] = F
            }
        }
        ,
        this.onEndDrag = function(o) {
            var l = Xn(i.el)
              , s = Ba(i.el);
            o.preventDefault(),
            o.stopPropagation(),
            Ga(i.el, i.classNames.dragging),
            l.removeEventListener("mousemove", i.drag, !0),
            l.removeEventListener("mouseup", i.onEndDrag, !0),
            i.removePreventClickId = s.setTimeout(function() {
                l.removeEventListener("click", i.preventClick, !0),
                l.removeEventListener("dblclick", i.preventClick, !0),
                i.removePreventClickId = null
            })
        }
        ,
        this.preventClick = function(o) {
            o.preventDefault(),
            o.stopPropagation()
        }
        ,
        this.el = e,
        this.options = gt(gt({}, a.defaultOptions), t),
        this.classNames = gt(gt({}, a.defaultOptions.classNames), t.classNames),
        this.axis = {
            x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: {
                    size: null,
                    el: null,
                    rect: null,
                    isVisible: !1
                },
                scrollbar: {
                    size: null,
                    el: null,
                    rect: null,
                    isVisible: !1
                }
            },
            y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: {
                    size: null,
                    el: null,
                    rect: null,
                    isVisible: !1
                },
                scrollbar: {
                    size: null,
                    el: null,
                    rect: null,
                    isVisible: !1
                }
            }
        },
        typeof this.el != "object" || !this.el.nodeName)
            throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
        this.onMouseMove = Zn(this._onMouseMove, 64),
        this.onWindowResize = Qa(this._onWindowResize, 64, {
            leading: !0
        }),
        this.onStopScrolling = Qa(this._onStopScrolling, this.stopScrollDelay),
        this.onMouseEntered = Qa(this._onMouseEntered, this.stopScrollDelay),
        this.init()
    }
    return a.getRtlHelpers = function() {
        if (a.rtlHelpers)
            return a.rtlHelpers;
        var e = document.createElement("div");
        e.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
        var t = e.firstElementChild
          , i = t?.firstElementChild;
        if (!i)
            return null;
        document.body.appendChild(t),
        t.scrollLeft = 0;
        var o = a.getOffset(t)
          , l = a.getOffset(i);
        t.scrollLeft = -999;
        var s = a.getOffset(i);
        return document.body.removeChild(t),
        a.rtlHelpers = {
            isScrollOriginAtZero: o.left !== l.left,
            isScrollingToNegative: l.left !== s.left
        },
        a.rtlHelpers
    }
    ,
    a.prototype.getScrollbarWidth = function() {
        try {
            return this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth"in document.documentElement.style || "-ms-overflow-style"in document.documentElement.style ? 0 : Xs()
        } catch {
            return Xs()
        }
    }
    ,
    a.getOffset = function(e) {
        var t = e.getBoundingClientRect()
          , i = Xn(e)
          , o = Ba(e);
        return {
            top: t.top + (o.pageYOffset || i.documentElement.scrollTop),
            left: t.left + (o.pageXOffset || i.documentElement.scrollLeft)
        }
    }
    ,
    a.prototype.init = function() {
        Jn.default && (this.initDOM(),
        this.rtlHelpers = a.getRtlHelpers(),
        this.scrollbarWidth = this.getScrollbarWidth(),
        this.recalculate(),
        this.initListeners())
    }
    ,
    a.prototype.initDOM = function() {
        var e, t;
        this.wrapperEl = this.el.querySelector(ta(this.classNames.wrapper)),
        this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(ta(this.classNames.contentWrapper)),
        this.contentEl = this.options.contentNode || this.el.querySelector(ta(this.classNames.contentEl)),
        this.offsetEl = this.el.querySelector(ta(this.classNames.offset)),
        this.maskEl = this.el.querySelector(ta(this.classNames.mask)),
        this.placeholderEl = this.findChild(this.wrapperEl, ta(this.classNames.placeholder)),
        this.heightAutoObserverWrapperEl = this.el.querySelector(ta(this.classNames.heightAutoObserverWrapperEl)),
        this.heightAutoObserverEl = this.el.querySelector(ta(this.classNames.heightAutoObserverEl)),
        this.axis.x.track.el = this.findChild(this.el, "".concat(ta(this.classNames.track)).concat(ta(this.classNames.horizontal))),
        this.axis.y.track.el = this.findChild(this.el, "".concat(ta(this.classNames.track)).concat(ta(this.classNames.vertical))),
        this.axis.x.scrollbar.el = ((e = this.axis.x.track.el) === null || e === void 0 ? void 0 : e.querySelector(ta(this.classNames.scrollbar))) || null,
        this.axis.y.scrollbar.el = ((t = this.axis.y.track.el) === null || t === void 0 ? void 0 : t.querySelector(ta(this.classNames.scrollbar))) || null,
        this.options.autoHide || (Ra(this.axis.x.scrollbar.el, this.classNames.visible),
        Ra(this.axis.y.scrollbar.el, this.classNames.visible))
    }
    ,
    a.prototype.initListeners = function() {
        var e = this, t, i = Ba(this.el);
        if (this.el.addEventListener("mouseenter", this.onMouseEnter),
        this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
        this.el.addEventListener("mousemove", this.onMouseMove),
        this.el.addEventListener("mouseleave", this.onMouseLeave),
        (t = this.contentWrapperEl) === null || t === void 0 || t.addEventListener("scroll", this.onScroll),
        i.addEventListener("resize", this.onWindowResize),
        !!this.contentEl) {
            if (window.ResizeObserver) {
                var o = !1
                  , l = i.ResizeObserver || ResizeObserver;
                this.resizeObserver = new l(function() {
                    o && i.requestAnimationFrame(function() {
                        e.recalculate()
                    })
                }
                ),
                this.resizeObserver.observe(this.el),
                this.resizeObserver.observe(this.contentEl),
                i.requestAnimationFrame(function() {
                    o = !0
                })
            }
            this.mutationObserver = new i.MutationObserver(function() {
                i.requestAnimationFrame(function() {
                    e.recalculate()
                })
            }
            ),
            this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        }
    }
    ,
    a.prototype.recalculate = function() {
        if (!(!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)) {
            var e = Ba(this.el);
            this.elStyles = e.getComputedStyle(this.el),
            this.isRtl = this.elStyles.direction === "rtl";
            var t = this.contentEl.offsetWidth
              , i = this.heightAutoObserverEl.offsetHeight <= 1
              , o = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0
              , l = this.contentWrapperEl.offsetWidth
              , s = this.elStyles.overflowX
              , n = this.elStyles.overflowY;
            this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft),
            this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
            var r = this.contentEl.scrollHeight
              , c = this.contentEl.scrollWidth;
            this.contentWrapperEl.style.height = i ? "auto" : "100%",
            this.placeholderEl.style.width = o ? "".concat(t || c, "px") : "auto",
            this.placeholderEl.style.height = "".concat(r, "px");
            var u = this.contentWrapperEl.offsetHeight;
            this.axis.x.isOverflowing = t !== 0 && c > t,
            this.axis.y.isOverflowing = r > u,
            this.axis.x.isOverflowing = s === "hidden" ? !1 : this.axis.x.isOverflowing,
            this.axis.y.isOverflowing = n === "hidden" ? !1 : this.axis.y.isOverflowing,
            this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === !0,
            this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === !0,
            this.hideNativeScrollbar();
            var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0
              , m = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > l - m,
            this.axis.y.isOverflowing = this.axis.y.isOverflowing && r > u - d,
            this.axis.x.scrollbar.size = this.getScrollbarSize("x"),
            this.axis.y.scrollbar.size = this.getScrollbarSize("y"),
            this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")),
            this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")),
            this.positionScrollbar("x"),
            this.positionScrollbar("y"),
            this.toggleTrackVisibility("x"),
            this.toggleTrackVisibility("y")
        }
    }
    ,
    a.prototype.getScrollbarSize = function(e) {
        var t, i;
        if (e === void 0 && (e = "y"),
        !this.axis[e].isOverflowing || !this.contentEl)
            return 0;
        var o = this.contentEl[this.axis[e].scrollSizeAttr], l = (i = (t = this.axis[e].track.el) === null || t === void 0 ? void 0 : t[this.axis[e].offsetSizeAttr]) !== null && i !== void 0 ? i : 0, s = l / o, n;
        return n = Math.max(~~(s * l), this.options.scrollbarMinSize),
        this.options.scrollbarMaxSize && (n = Math.min(n, this.options.scrollbarMaxSize)),
        n
    }
    ,
    a.prototype.positionScrollbar = function(e) {
        var t, i, o;
        e === void 0 && (e = "y");
        var l = this.axis[e].scrollbar;
        if (!(!this.axis[e].isOverflowing || !this.contentWrapperEl || !l.el || !this.elStyles)) {
            var s = this.contentWrapperEl[this.axis[e].scrollSizeAttr]
              , n = ((t = this.axis[e].track.el) === null || t === void 0 ? void 0 : t[this.axis[e].offsetSizeAttr]) || 0
              , r = parseInt(this.elStyles[this.axis[e].sizeAttr], 10)
              , c = this.contentWrapperEl[this.axis[e].scrollOffsetAttr];
            c = e === "x" && this.isRtl && (!((i = a.getRtlHelpers()) === null || i === void 0) && i.isScrollOriginAtZero) ? -c : c,
            e === "x" && this.isRtl && (c = !((o = a.getRtlHelpers()) === null || o === void 0) && o.isScrollingToNegative ? c : -c);
            var u = c / (s - r)
              , d = ~~((n - l.size) * u);
            d = e === "x" && this.isRtl ? -d + (n - l.size) : d,
            l.el.style.transform = e === "x" ? "translate3d(".concat(d, "px, 0, 0)") : "translate3d(0, ".concat(d, "px, 0)")
        }
    }
    ,
    a.prototype.toggleTrackVisibility = function(e) {
        e === void 0 && (e = "y");
        var t = this.axis[e].track.el
          , i = this.axis[e].scrollbar.el;
        !t || !i || !this.contentWrapperEl || (this.axis[e].isOverflowing || this.axis[e].forceVisible ? (t.style.visibility = "visible",
        this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll",
        this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(e))) : (t.style.visibility = "hidden",
        this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden",
        this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(e))),
        this.axis[e].isOverflowing ? i.style.display = "block" : i.style.display = "none")
    }
    ,
    a.prototype.showScrollbar = function(e) {
        e === void 0 && (e = "y"),
        this.axis[e].isOverflowing && !this.axis[e].scrollbar.isVisible && (Ra(this.axis[e].scrollbar.el, this.classNames.visible),
        this.axis[e].scrollbar.isVisible = !0)
    }
    ,
    a.prototype.hideScrollbar = function(e) {
        e === void 0 && (e = "y"),
        this.axis[e].isOverflowing && this.axis[e].scrollbar.isVisible && (Ga(this.axis[e].scrollbar.el, this.classNames.visible),
        this.axis[e].scrollbar.isVisible = !1)
    }
    ,
    a.prototype.hideNativeScrollbar = function() {
        this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px",
        this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px")
    }
    ,
    a.prototype.onMouseMoveForAxis = function(e) {
        e === void 0 && (e = "y");
        var t = this.axis[e];
        !t.track.el || !t.scrollbar.el || (t.track.rect = t.track.el.getBoundingClientRect(),
        t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect(),
        this.isWithinBounds(t.track.rect) ? (this.showScrollbar(e),
        Ra(t.track.el, this.classNames.hover),
        this.isWithinBounds(t.scrollbar.rect) ? Ra(t.scrollbar.el, this.classNames.hover) : Ga(t.scrollbar.el, this.classNames.hover)) : (Ga(t.track.el, this.classNames.hover),
        this.options.autoHide && this.hideScrollbar(e)))
    }
    ,
    a.prototype.onMouseLeaveForAxis = function(e) {
        e === void 0 && (e = "y"),
        Ga(this.axis[e].track.el, this.classNames.hover),
        Ga(this.axis[e].scrollbar.el, this.classNames.hover),
        this.options.autoHide && this.hideScrollbar(e)
    }
    ,
    a.prototype.onDragStart = function(e, t) {
        var i;
        t === void 0 && (t = "y");
        var o = Xn(this.el)
          , l = Ba(this.el)
          , s = this.axis[t].scrollbar
          , n = t === "y" ? e.pageY : e.pageX;
        this.axis[t].dragOffset = n - (((i = s.rect) === null || i === void 0 ? void 0 : i[this.axis[t].offsetAttr]) || 0),
        this.draggedAxis = t,
        Ra(this.el, this.classNames.dragging),
        o.addEventListener("mousemove", this.drag, !0),
        o.addEventListener("mouseup", this.onEndDrag, !0),
        this.removePreventClickId === null ? (o.addEventListener("click", this.preventClick, !0),
        o.addEventListener("dblclick", this.preventClick, !0)) : (l.clearTimeout(this.removePreventClickId),
        this.removePreventClickId = null)
    }
    ,
    a.prototype.onTrackClick = function(e, t) {
        var i = this, o, l, s, n;
        t === void 0 && (t = "y");
        var r = this.axis[t];
        if (!(!this.options.clickOnTrack || !r.scrollbar.el || !this.contentWrapperEl)) {
            e.preventDefault();
            var c = Ba(this.el);
            this.axis[t].scrollbar.rect = r.scrollbar.el.getBoundingClientRect();
            var u = this.axis[t].scrollbar
              , d = (l = (o = u.rect) === null || o === void 0 ? void 0 : o[this.axis[t].offsetAttr]) !== null && l !== void 0 ? l : 0
              , m = parseInt((n = (s = this.elStyles) === null || s === void 0 ? void 0 : s[this.axis[t].sizeAttr]) !== null && n !== void 0 ? n : "0px", 10)
              , g = this.contentWrapperEl[this.axis[t].scrollOffsetAttr]
              , v = t === "y" ? this.mouseY - d : this.mouseX - d
              , S = v < 0 ? -1 : 1
              , x = S === -1 ? g - m : g + m
              , D = 40
              , B = function() {
                i.contentWrapperEl && (S === -1 ? g > x && (g -= D,
                i.contentWrapperEl[i.axis[t].scrollOffsetAttr] = g,
                c.requestAnimationFrame(B)) : g < x && (g += D,
                i.contentWrapperEl[i.axis[t].scrollOffsetAttr] = g,
                c.requestAnimationFrame(B)))
            };
            B()
        }
    }
    ,
    a.prototype.getContentElement = function() {
        return this.contentEl
    }
    ,
    a.prototype.getScrollElement = function() {
        return this.contentWrapperEl
    }
    ,
    a.prototype.removeListeners = function() {
        var e = Ba(this.el);
        this.el.removeEventListener("mouseenter", this.onMouseEnter),
        this.el.removeEventListener("pointerdown", this.onPointerEvent, !0),
        this.el.removeEventListener("mousemove", this.onMouseMove),
        this.el.removeEventListener("mouseleave", this.onMouseLeave),
        this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
        e.removeEventListener("resize", this.onWindowResize),
        this.mutationObserver && this.mutationObserver.disconnect(),
        this.resizeObserver && this.resizeObserver.disconnect(),
        this.onMouseMove.cancel(),
        this.onWindowResize.cancel(),
        this.onStopScrolling.cancel(),
        this.onMouseEntered.cancel()
    }
    ,
    a.prototype.unMount = function() {
        this.removeListeners()
    }
    ,
    a.prototype.isWithinBounds = function(e) {
        return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height
    }
    ,
    a.prototype.findChild = function(e, t) {
        var i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
        return Array.prototype.filter.call(e.children, function(o) {
            return i.call(o, t)
        })[0]
    }
    ,
    a.rtlHelpers = null,
    a.defaultOptions = {
        forceVisible: !1,
        clickOnTrack: !0,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        ariaLabel: "scrollable content",
        classNames: {
            contentEl: "simplebar-content",
            contentWrapper: "simplebar-content-wrapper",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover",
            dragging: "simplebar-dragging",
            scrolling: "simplebar-scrolling",
            scrollable: "simplebar-scrollable",
            mouseEntered: "simplebar-mouse-entered"
        },
        scrollableNode: null,
        contentNode: null,
        autoHide: !0
    },
    a.getOptions = lm,
    a.helpers = sm,
    a
}();
var ar = function(a, e) {
    return ar = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, i) {
        t.__proto__ = i
    }
    || function(t, i) {
        for (var o in i)
            Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
    }
    ,
    ar(a, e)
};
function um(a, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    ar(a, e);
    function t() {
        this.constructor = a
    }
    a.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype,
    new t)
}
var ol = Ut.helpers
  , er = ol.getOptions
  , ua = ol.addClasses
  , tr = function(a) {
    um(e, a);
    function e() {
        for (var t = [], i = 0; i < arguments.length; i++)
            t[i] = arguments[i];
        var o = a.apply(this, t) || this;
        return e.instances.set(t[0], o),
        o
    }
    return e.initDOMLoadedElements = function() {
        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements),
        window.removeEventListener("load", this.initDOMLoadedElements),
        Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(t) {
            t.getAttribute("data-simplebar") !== "init" && !e.instances.has(t) && new e(t,er(t.attributes))
        })
    }
    ,
    e.removeObserver = function() {
        var t;
        (t = e.globalObserver) === null || t === void 0 || t.disconnect()
    }
    ,
    e.prototype.initDOM = function() {
        var t = this, i, o, l;
        if (!Array.prototype.filter.call(this.el.children, function(r) {
            return r.classList.contains(t.classNames.wrapper)
        }).length) {
            for (this.wrapperEl = document.createElement("div"),
            this.contentWrapperEl = document.createElement("div"),
            this.offsetEl = document.createElement("div"),
            this.maskEl = document.createElement("div"),
            this.contentEl = document.createElement("div"),
            this.placeholderEl = document.createElement("div"),
            this.heightAutoObserverWrapperEl = document.createElement("div"),
            this.heightAutoObserverEl = document.createElement("div"),
            ua(this.wrapperEl, this.classNames.wrapper),
            ua(this.contentWrapperEl, this.classNames.contentWrapper),
            ua(this.offsetEl, this.classNames.offset),
            ua(this.maskEl, this.classNames.mask),
            ua(this.contentEl, this.classNames.contentEl),
            ua(this.placeholderEl, this.classNames.placeholder),
            ua(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl),
            ua(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl); this.el.firstChild; )
                this.contentEl.appendChild(this.el.firstChild);
            this.contentWrapperEl.appendChild(this.contentEl),
            this.offsetEl.appendChild(this.contentWrapperEl),
            this.maskEl.appendChild(this.offsetEl),
            this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
            this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
            this.wrapperEl.appendChild(this.maskEl),
            this.wrapperEl.appendChild(this.placeholderEl),
            this.el.appendChild(this.wrapperEl),
            (i = this.contentWrapperEl) === null || i === void 0 || i.setAttribute("tabindex", "0"),
            (o = this.contentWrapperEl) === null || o === void 0 || o.setAttribute("role", "region"),
            (l = this.contentWrapperEl) === null || l === void 0 || l.setAttribute("aria-label", this.options.ariaLabel)
        }
        if (!this.axis.x.track.el || !this.axis.y.track.el) {
            var s = document.createElement("div")
              , n = document.createElement("div");
            ua(s, this.classNames.track),
            ua(n, this.classNames.scrollbar),
            s.appendChild(n),
            this.axis.x.track.el = s.cloneNode(!0),
            ua(this.axis.x.track.el, this.classNames.horizontal),
            this.axis.y.track.el = s.cloneNode(!0),
            ua(this.axis.y.track.el, this.classNames.vertical),
            this.el.appendChild(this.axis.x.track.el),
            this.el.appendChild(this.axis.y.track.el)
        }
        Ut.prototype.initDOM.call(this),
        this.el.setAttribute("data-simplebar", "init")
    }
    ,
    e.prototype.unMount = function() {
        Ut.prototype.unMount.call(this),
        e.instances.delete(this.el)
    }
    ,
    e.initHtmlApi = function() {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this),
        typeof MutationObserver < "u" && (this.globalObserver = new MutationObserver(e.handleMutations),
        this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0
        })),
        document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements),
        window.addEventListener("load", this.initDOMLoadedElements))
    }
    ,
    e.handleMutations = function(t) {
        t.forEach(function(i) {
            i.addedNodes.forEach(function(o) {
                o.nodeType === 1 && (o.hasAttribute("data-simplebar") ? !e.instances.has(o) && document.documentElement.contains(o) && new e(o,er(o.attributes)) : o.querySelectorAll("[data-simplebar]").forEach(function(l) {
                    l.getAttribute("data-simplebar") !== "init" && !e.instances.has(l) && document.documentElement.contains(l) && new e(l,er(l.attributes))
                }))
            }),
            i.removedNodes.forEach(function(o) {
                o.nodeType === 1 && (o.getAttribute("data-simplebar") === "init" ? e.instances.has(o) && !document.documentElement.contains(o) && e.instances.get(o).unMount() : Array.prototype.forEach.call(o.querySelectorAll('[data-simplebar="init"]'), function(l) {
                    e.instances.has(l) && !document.documentElement.contains(l) && e.instances.get(l).unMount()
                }))
            })
        })
    }
    ,
    e.instances = new WeakMap,
    e
}(Ut);
rl.default && tr.initHtmlApi();
var cm = 4
  , dm = 1.25
  , mm = .75
  , hm = 1 / 30
  , gm = a => {
    let e = globalThis.getComputedStyle(a)
      , t = parseFloat(e.marginTop)
      , i = parseFloat(e.marginBottom);
    return a.offsetHeight + t + i
}
  , qt = class {
    Maid;
    ScrollContainer;
    LyricsContainer;
    VocalGroups;
    LyricsAreSynced;
    Scroller;
    ScrollerObject;
    GroupDimensions = [];
    AutoScrollBlocked = !1;
    AutoScrolling = !1;
    LastActiveVocalIndex = 0;
    LyricsEnded = !1;
    constructor(e, t, i, o) {
        this.LyricsAreSynced = o,
        this.Maid = new ke,
        this.Scroller = new tr(e),
        this.ScrollerObject = this.Scroller.getScrollElement(),
        this.Maid.Give(this.Scroller.unMount.bind(this.Scroller)),
        this.ScrollContainer = e,
        this.LyricsContainer = t,
        this.VocalGroups = i,
        this.WatchAutoScrollBlocking(),
        this.Maid.Give(new ResizeObserver( () => {
            this.UpdateLyricHeights(),
            o && this.MoveToActiveLyrics()
        }
        )).observe(this.ScrollContainer),
        this.UpdateLyricHeights(),
        o && (this.HandleLyricActiveStateChanges(),
        this.MoveToActiveLyrics(!0))
    }
    ToggleAutoScrollBlock(e) {
        this.AutoScrollBlocked !== e && (e ? (this.AutoScrollBlocked = !0,
        this.ScrollContainer.classList.add("UserScrolling")) : (this.AutoScrollBlocked = !1,
        this.ScrollContainer.classList.remove("UserScrolling")))
    }
    WatchAutoScrollBlocking() {
        let e = () => {
            this.AutoScrolling === !1 ? (this.ToggleAutoScrollBlock(!0),
            this.Maid.Give(Fe(mm, () => this.MoveToActiveLyrics()), "WaitForUserToStopScrolling")) : this.Maid.Give(Fe(hm, () => this.AutoScrolling = !1), "WaitForAutoScroll")
        }
        ;
        this.ScrollerObject.addEventListener("scroll", e),
        this.Maid.Give( () => this.ScrollerObject.removeEventListener("scroll", e))
    }
    HandleLyricActiveStateChanges() {
        for (let e of this.VocalGroups)
            for (let t of e.Vocals)
                this.Maid.Give(t.ActivityChanged.Connect( () => this.MoveToActiveLyrics(!0)))
    }
    UpdateLyricHeights() {
        this.GroupDimensions = [];
        let e = 0;
        for (let t of this.VocalGroups) {
            let i = gm(t.GroupContainer);
            this.GroupDimensions.push({
                Height: i / 2,
                Center: e + i / 2
            }),
            e += i
        }
        this.LyricsContainer.style.height = `${e}px`,
        this.Scroller.recalculate()
    }
    DetermineLyricBlur() {
        let e, t, i = [];
        for (let o of this.VocalGroups)
            for (let l of o.Vocals) {
                if (l.IsActive()) {
                    let s = i.length;
                    e === void 0 && (e = s),
                    t = s
                }
                i.push(l)
            }
        e === void 0 || t === void 0 ? (e = this.LastActiveVocalIndex,
        t = e) : this.LastActiveVocalIndex = e;
        for (let[o,l] of i.entries()) {
            let s = Math.min(o < e ? e - o : o > t ? o - t : 0, cm);
            l.SetBlur(s * dm)
        }
    }
    MoveToActiveLyrics(e) {
        if (this.LyricsAreSynced === !1 || (e && this.DetermineLyricBlur(),
        this.AutoScrollBlocked && this.Scroller.isScrolling))
            return;
        let t = globalThis.getComputedStyle(this.LyricsContainer)
          , i = parseInt(t.marginTop)
          , o = t.getPropertyValue("--use-offset") === "1" ? parseInt(t.lineHeight) : 0
          , l = this.ScrollContainer.offsetHeight
          , s = l / 2 - o
          , n = s - i
          , r = this.ScrollerObject.scrollTop
          , c = this.ScrollerObject.scrollHeight - l
          , u = [];
        for (let[v,S] of this.VocalGroups.entries())
            S.Vocals.some(x => x.IsActive()) && u.push({
                Dimensions: this.GroupDimensions[v],
                Group: S
            });
        if (u.length === 0) {
            this.AutoScrollBlocked === !1 && this.LyricsEnded && r < c && this.ScrollTo(c);
            return
        }
        let d = 0
          , m = 0;
        for (let v of u)
            m += v.Dimensions.Height,
            d += v.Dimensions.Center;
        d /= u.length;
        let g;
        this.AutoScrollBlocked || d > n ? (this.AutoScrollBlocked && d >= r - m && d <= r + l && (this.ToggleAutoScrollBlock(!1),
        this.DetermineLyricBlur()),
        this.AutoScrollBlocked === !1 && (g = d - s + i + o)) : r > 0 && (g = 0),
        g !== void 0 && this.ScrollTo(g)
    }
    ScrollTo(e) {
        this.AutoScrolling = !0,
        this.ScrollerObject.scrollTop = e,
        this.Scroller.scrollY()
    }
    SetLyricsEnded(e) {
        this.LyricsEnded = e
    }
    ForceToActive(e) {
        this.LyricsAreSynced !== !1 && (this.ToggleAutoScrollBlock(!1),
        e ? this.Maid.Clean("ForceToActiveCSS") : (this.ScrollContainer.classList.add("InstantScroll"),
        this.Maid.Give(Be( () => this.ScrollContainer.classList.remove("InstantScroll")), "ForceToActiveCSS")),
        this.MoveToActiveLyrics())
    }
    ForceToTop() {
        this.ToggleAutoScrollBlock(!1),
        this.ScrollTo(0)
    }
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var Qi = lt(ll());
var pm = Math.PI
  , fm = pm / 2;
function Vt(a) {
    return Math.sin(a * fm)
}
var km = Math.PI
  , vm = km * 2
  , ir = Math.exp
  , bm = Math.sin
  , wm = Math.cos
  , ul = Math.sqrt
  , Lm = .1
  , nr = class {
    Velocity;
    DampingRatio;
    Frequency;
    Sleeping = !0;
    Position;
    Final;
    constructor(e, t, i) {
        if (t * i < 0)
            throw new Error("Spring does not converge.");
        this.DampingRatio = t,
        this.Frequency = i,
        this.Velocity = 0,
        this.Position = e,
        this.Final = e
    }
    Update(e) {
        let t = this.Frequency * vm, i = this.Final, o = this.Velocity, l = this.Position - i, s = this.DampingRatio, n = ir(-s * t * e), r, c;
        if (this.DampingRatio == 1)
            r = (l * (1 + t * e) + o * e) * n + i,
            c = (o * (1 - t * e) - l * (t * t * e)) * n;
        else if (this.DampingRatio < 1) {
            let u = ul(1 - s * s), d = wm(t * u * e), m = bm(t * u * e), g;
            if (u > 1e-4)
                g = m / u;
            else {
                let S = e * t;
                g = S + (S * S * (u * u) * (u * u) / 20 - u * u) * (S * S * S) / 6
            }
            let v;
            if (t * u > 1e-4)
                v = m / (t * u);
            else {
                let S = t * u;
                v = e + (e * e * (S * S) * (S * S) / 20 - S * S) * (e * e * e) / 6
            }
            r = (l * (d + s * g) + o * v) * n + i,
            c = (o * (d - g * s) - l * (g * t)) * n
        } else {
            let u = ul(s * s - 1)
              , d = -t * (s - u)
              , m = -t * (s + u)
              , g = (o - l * d) / (2 * t * u)
              , S = (l - g) * ir(d * e)
              , x = g * ir(m * e);
            r = S + x + i,
            c = S * d + x * m
        }
        return this.Position = r,
        this.Velocity = c,
        this.Sleeping = Math.abs(i - r) <= Lm,
        r
    }
    Set(e) {
        this.Position = e,
        this.Final = e,
        this.Velocity = 0,
        this.Sleeping = !0
    }
    SetFrequency(e) {
        if (this.DampingRatio * e < 0)
            throw new Error("Spring does not converge.");
        this.Frequency = e
    }
    SetDampingRatio(e) {
        if (e * this.Frequency < 0)
            throw new Error("Spring does not converge.");
        this.DampingRatio = e
    }
    IsSleeping() {
        return this.Sleeping
    }
}
  , ia = nr;
var ml = lt(dl())
  , pa = a => {
    let e = a.map(i => i.Time)
      , t = a.map(i => i.Value);
    return new ml.default(e,t)
}
  , ba = (a, e, t) => Math.max(e, Math.min(a, t));
var hl = 3
  , ca = {
    YOffsetDamping: .4,
    YOffsetFrequency: 1.25,
    ScaleDamping: .6,
    ScaleFrequency: .7,
    GlowDamping: .5,
    GlowFrequency: 1,
    ScaleRange: [{
        Time: 0,
        Value: .75
    }, {
        Time: .7,
        Value: 1.05
    }, {
        Time: 1,
        Value: 1
    }],
    YOffsetRange: [{
        Time: 0,
        Value: .125
    }, {
        Time: .9,
        Value: -.2
    }, {
        Time: 1,
        Value: 0
    }],
    GlowRange: [{
        Time: 0,
        Value: 0
    }, {
        Time: .6,
        Value: 1
    }, {
        Time: 1,
        Value: 1
    }],
    OpacityRange: [{
        Time: 0,
        Value: .35
    }, {
        Time: .6,
        Value: 1
    }, {
        Time: 1,
        Value: 1
    }]
}
  , $i = {
    ScaleSpline: pa(ca.ScaleRange),
    YOffsetSpline: pa(ca.YOffsetRange),
    GlowSpline: pa(ca.GlowRange),
    OpacitySpline: pa(ca.OpacityRange)
}
  , jm = () => ({
    Scale: new ia(0,ca.ScaleDamping,ca.ScaleFrequency),
    YOffset: new ia(0,ca.YOffsetDamping,ca.YOffsetFrequency),
    Glow: new ia(0,ca.GlowDamping,ca.GlowFrequency),
    Opacity: new ia(0,ca.GlowDamping,ca.GlowFrequency)
})
  , xa = {
    YOffsetDamping: .4,
    YOffsetFrequency: 1.25,
    ScaleDamping: .7,
    ScaleFrequency: 5,
    BaseScaleRange: [{
        Time: 0,
        Value: 0
    }, {
        Time: .2,
        Value: 1.05
    }, {
        Time: -.075,
        Value: 1.15
    }, {
        Time: -0,
        Value: 0
    }],
    OpacityRange: [{
        Time: 0,
        Value: 0
    }, {
        Time: .5,
        Value: 1
    }, {
        Time: -.075,
        Value: 1
    }, {
        Time: -0,
        Value: 0
    }],
    YOffsetRange: [{
        Time: 0,
        Value: 1 / 100
    }, {
        Time: .9,
        Value: -(1 / 60)
    }, {
        Time: 1,
        Value: 0
    }]
}
  , gl = 2.25
  , Tm = .95
  , Mm = 1.05
  , Im = new Qi.CurveInterpolator(xa.YOffsetRange.map(a => [a.Time, a.Value]))
  , xm = () => ({
    Scale: new ia(0,xa.ScaleDamping,xa.ScaleFrequency),
    YOffset: new ia(0,xa.YOffsetDamping,xa.YOffsetFrequency),
    Opacity: new ia(0,xa.YOffsetDamping,xa.YOffsetFrequency)
})
  , pt = class {
    Maid = new ke;
    Container;
    StartTime;
    Duration;
    Dots = [];
    LiveText;
    ScaleSpline;
    OpacitySpline;
    State = "Idle";
    IsSleeping = !0;
    ActivityChangedSignal = this.Maid.Give(new Le);
    RequestedTimeSkipSignal = this.Maid.Give(new Le);
    ActivityChanged = this.ActivityChangedSignal.GetEvent();
    RequestedTimeSkip = this.RequestedTimeSkipSignal.GetEvent();
    constructor(e, t) {
        let i = this.Maid.Give(document.createElement("div"));
        i.classList.add("Interlude"),
        this.Container = i,
        this.LiveText = {
            Object: i,
            Springs: xm()
        },
        this.StartTime = t.StartTime,
        this.Duration = t.EndTime - this.StartTime;
        {
            let o = xa.BaseScaleRange.map(s => ({
                Time: s.Time,
                Value: s.Value
            }))
              , l = xa.OpacityRange.map(s => ({
                Time: s.Time,
                Value: s.Value
            }));
            o[2].Time += this.Duration,
            l[2].Time += this.Duration,
            o[3].Time = this.Duration,
            l[3].Time = this.Duration;
            {
                let s = o[1]
                  , r = o[2].Time - s.Time;
                for (let c = Math.floor(r / gl); c > 0; c -= 1) {
                    let u = s.Time + c * gl
                      , d = c % 2 === 0 ? Mm : Tm;
                    o.splice(2, 0, {
                        Time: u,
                        Value: d
                    })
                }
            }
            for (let s of [o, l])
                for (let n of s)
                    n.Time /= this.Duration;
            this.ScaleSpline = new Qi.CurveInterpolator(o.map(s => [s.Time, s.Value])),
            this.OpacitySpline = new Qi.CurveInterpolator(l.map(s => [s.Time, s.Value]))
        }
        {
            let o = .925 / hl
              , l = 0;
            for (let s = 0; s < hl; s++) {
                let n = this.Maid.Give(document.createElement("span"));
                n.classList.add("InterludeDot"),
                this.Dots.push({
                    Start: l,
                    Duration: o,
                    GlowDuration: 1 - l,
                    LiveText: {
                        Object: n,
                        Springs: jm()
                    }
                }),
                i.appendChild(n),
                l += o
            }
        }
        this.SetToGeneralState(!1),
        e.appendChild(i)
    }
    UpdateLiveDotState = (e, t, i, o) => {
        let l = $i.ScaleSpline.at(t)
          , s = $i.YOffsetSpline.at(t)
          , n = $i.GlowSpline.at(i)
          , r = $i.OpacitySpline.at(t);
        o ? (e.Springs.Scale.Set(l),
        e.Springs.YOffset.Set(s),
        e.Springs.Glow.Set(n),
        e.Springs.Opacity.Set(r)) : (e.Springs.Scale.Final = l,
        e.Springs.YOffset.Final = s,
        e.Springs.Glow.Final = n,
        e.Springs.Opacity.Final = r)
    }
    ;
    UpdateLiveDotVisuals = (e, t) => {
        let i = e.Springs.Scale.Update(t)
          , o = e.Springs.YOffset.Update(t)
          , l = e.Springs.Glow.Update(t)
          , s = e.Springs.Opacity.Update(t);
        return e.Object.style.transform = `translateY(calc(var(--dot-size) * ${o}))`,
        e.Object.style.scale = i.toString(),
        e.Object.style.setProperty("--text-shadow-blur-radius", `${4 + 6 * l}px`),
        e.Object.style.setProperty("--text-shadow-opacity", `${l * 90}%`),
        e.Object.style.opacity = s.toString(),
        e.Springs.Scale.IsSleeping() && e.Springs.YOffset.IsSleeping() && e.Springs.Glow.IsSleeping() && e.Springs.Opacity.IsSleeping()
    }
    ;
    UpdateLiveMainState = (e, t, i) => {
        let o = Im.getPointAt(t)[1]
          , l = this.ScaleSpline.getIntersects(t)
          , s = this.OpacitySpline.getIntersects(t)
          , n = l.length === 0 ? 1 : l[l.length - 1][1]
          , r = s.length === 0 ? 1 : s[s.length - 1][1];
        i ? (e.Springs.Scale.Set(n),
        e.Springs.YOffset.Set(o),
        e.Springs.Opacity.Set(r)) : (e.Springs.Scale.Final = n,
        e.Springs.YOffset.Final = o,
        e.Springs.Opacity.Final = r)
    }
    ;
    UpdateLiveMainVisuals = (e, t) => {
        let i = e.Springs.Scale.Update(t)
          , o = e.Springs.YOffset.Update(t)
          , l = e.Springs.Opacity.Update(t);
        return e.Object.style.transform = `translateY(calc(var(--dot-size) * ${o}))`,
        e.Object.style.scale = i.toString(),
        e.Object.style.opacity = Vt(l).toString(),
        e.Springs.Scale.IsSleeping() && e.Springs.YOffset.IsSleeping() && e.Springs.Opacity.IsSleeping()
    }
    ;
    EvaluateClassState() {
        let e = ["Active", "Sung"], t;
        this.State === "Active" ? (e.splice(0, 1),
        t = "Active") : this.State == "Sung" && (e.splice(1, 1),
        t = "Sung");
        for (let i of e)
            this.Container.classList.contains(i) && this.Container.classList.remove(i);
        t !== void 0 && this.Container.classList.add(t)
    }
    SetToGeneralState(e) {
        let t = e ? 1 : 0;
        for (let i of this.Dots)
            this.UpdateLiveDotState(i.LiveText, t, t, !0),
            this.UpdateLiveDotVisuals(i.LiveText, 0);
        this.UpdateLiveMainState(this.LiveText, t, !0),
        this.UpdateLiveMainVisuals(this.LiveText, 0),
        this.State = e ? "Sung" : "Idle",
        this.EvaluateClassState()
    }
    Animate(e, t, i) {
        let o = e - this.StartTime
          , l = ba(o / this.Duration, 0, 1)
          , s = o >= 0
          , n = o <= this.Duration
          , r = s && n
          , c = r ? "Active" : s ? "Sung" : "Idle"
          , u = c != this.State
          , d = u || r || i;
        if (u) {
            let g = this.State;
            this.State = c,
            this.State !== "Sung" && this.EvaluateClassState(),
            g === "Active" ? this.ActivityChangedSignal.Fire(!1) : r && this.ActivityChangedSignal.Fire(!0)
        }
        d && (this.IsSleeping = !1);
        let m = this.IsSleeping === !1;
        if (d || m) {
            let g = !0;
            for (let v of this.Dots) {
                let S = ba((l - v.Start) / v.Duration, 0, 1);
                d && this.UpdateLiveDotState(v.LiveText, S, S, i),
                m && this.UpdateLiveDotVisuals(v.LiveText, t) === !1 && (g = !1)
            }
            d && this.UpdateLiveMainState(this.LiveText, l, i),
            m && this.UpdateLiveMainVisuals(this.LiveText, t) === !1 && (g = !1),
            g && (this.IsSleeping = !0,
            r === !1 && this.EvaluateClassState())
        }
    }
    ForceState(e) {
        this.SetToGeneralState(e)
    }
    IsActive() {
        return this.State === "Active"
    }
    SetBlur() {}
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var Ht = class {
    Maid;
    LyricMetadata;
    constructor(e, t, i) {
        this.LyricMetadata = t,
        this.Maid = new ke;
        let o = this.Maid.Give(document.createElement("div"));
        o.classList.add("Vocals"),
        o.classList.add("Lead"),
        o.classList.add("Active");
        let l = this.Maid.Give(document.createElement("span"));
        l.classList.add("Lyric"),
        l.classList.add("Static"),
        l.innerText = i && t.RomanizedText || t.Text,
        o.appendChild(l),
        e.appendChild(o)
    }
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var Em = [{
    Time: 0,
    Value: 0
}, {
    Time: .5,
    Value: 1
}, {
    Time: .925,
    Value: 1
}, {
    Time: 1,
    Value: 0
}]
  , Dm = pa(Em)
  , zm = .5
  , Nm = 1
  , Yt = class {
    Maid = new ke;
    Container;
    StartTime;
    Duration;
    Span;
    GlowSpring;
    State = "Idle";
    IsSleeping = !0;
    ActivityChangedSignal = this.Maid.Give(new Le);
    RequestedTimeSkipSignal = this.Maid.Give(new Le);
    ActivityChanged = this.ActivityChangedSignal.GetEvent();
    RequestedTimeSkip = this.RequestedTimeSkipSignal.GetEvent();
    constructor(e, t, i) {
        let o = this.Maid.Give(document.createElement("div"));
        o.classList.add("Vocals"),
        o.classList.add("Lead"),
        this.Container = o,
        o.addEventListener("click", () => this.RequestedTimeSkipSignal.Fire()),
        this.StartTime = t.StartTime,
        this.Duration = t.EndTime - t.StartTime;
        let l = this.Maid.Give(document.createElement("span"));
        l.classList.add("Lyric"),
        l.classList.add("Synced"),
        l.classList.add("Line"),
        l.innerText = i && t.RomanizedText || t.Text,
        o.appendChild(l),
        this.Span = l,
        this.GlowSpring = new ia(0,zm,Nm),
        this.SetToGeneralState(!1),
        e.appendChild(o)
    }
    UpdateLiveTextState = (e, t) => {
        let i = Dm.at(e);
        t ? this.GlowSpring.Set(i) : this.GlowSpring.Final = i
    }
    ;
    UpdateLiveTextVisuals = (e, t) => {
        let i = this.GlowSpring.Update(t);
        return this.Span.style.setProperty("--text-shadow-blur-radius", `${4 + 8 * i}px`),
        this.Span.style.setProperty("--text-shadow-opacity", `${i * 50}%`),
        this.Span.style.setProperty("--gradient-progress", `${0 + 120 * e}%`),
        this.GlowSpring.IsSleeping()
    }
    ;
    EvaluateClassState() {
        let e = ["Active", "Sung"], t;
        this.State === "Active" ? (e.splice(0, 1),
        t = "Active") : this.State == "Sung" && (e.splice(1, 1),
        t = "Sung");
        for (let i of e)
            this.Container.classList.contains(i) && this.Container.classList.remove(i);
        t !== void 0 && this.Container.classList.add(t)
    }
    SetToGeneralState(e) {
        let t = e ? 1 : 0;
        this.UpdateLiveTextState(t, !0),
        this.UpdateLiveTextVisuals(t, 0),
        this.State = e ? "Sung" : "Idle",
        this.EvaluateClassState()
    }
    Animate(e, t, i) {
        let o = e - this.StartTime
          , l = ba(o / this.Duration, 0, 1)
          , s = o >= 0
          , n = o <= this.Duration
          , r = s && n
          , c = r ? "Active" : s ? "Sung" : "Idle"
          , u = c != this.State
          , d = u || r || i;
        if (u) {
            let m = this.State;
            this.State = c,
            this.State !== "Sung" && this.EvaluateClassState(),
            m === "Active" ? this.ActivityChangedSignal.Fire(!1) : r && this.ActivityChangedSignal.Fire(!0)
        }
        d && (this.IsSleeping = !1,
        this.UpdateLiveTextState(l, i || o < 0 || void 0)),
        this.IsSleeping === !1 && this.UpdateLiveTextVisuals(l, t) && (this.IsSleeping = !0,
        r === !1 && this.EvaluateClassState())
    }
    ForceState(e) {
        this.SetToGeneralState(e)
    }
    IsActive() {
        return this.State === "Active"
    }
    SetBlur(e) {
        this.Container.style.setProperty("--text-blur", `${e}px`)
    }
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var Pm = [{
    Time: 0,
    Value: .95
}, {
    Time: .7,
    Value: 1.025
}, {
    Time: 1,
    Value: 1
}]
  , Om = [{
    Time: 0,
    Value: 1 / 100
}, {
    Time: .9,
    Value: -(1 / 60)
}, {
    Time: 1,
    Value: 0
}]
  , _m = [{
    Time: 0,
    Value: 0
}, {
    Time: .15,
    Value: 1
}, {
    Time: .6,
    Value: 1
}, {
    Time: 1,
    Value: 0
}]
  , Fm = pa(Pm)
  , Bm = pa(Om)
  , Rm = pa(_m)
  , Gm = .4
  , Um = 1.25
  , qm = .6
  , Vm = .7
  , Hm = .5
  , Ym = 1
  , pl = () => ({
    Scale: new ia(0,qm,Vm),
    YOffset: new ia(0,Gm,Um),
    Glow: new ia(0,Hm,Ym)
})
  , Km = 1
  , Wm = 12
  , $m = (a, e) => a.EndTime - a.StartTime >= Km && (e && a.RomanizedText || a.Text).length <= Wm
  , ft = class {
    Maid = new ke;
    Container;
    StartTime;
    Duration;
    Syllables = [];
    State = "Idle";
    IsSleeping = !0;
    ActivityChangedSignal = this.Maid.Give(new Le);
    RequestedTimeSkipSignal = this.Maid.Give(new Le);
    ActivityChanged = this.ActivityChangedSignal.GetEvent();
    RequestedTimeSkip = this.RequestedTimeSkipSignal.GetEvent();
    constructor(e, t, i, o) {
        let l = this.Maid.Give(document.createElement("div"));
        l.classList.add("Vocals"),
        l.classList.add(i ? "Background" : "Lead"),
        this.Container = l,
        l.addEventListener("click", () => this.RequestedTimeSkipSignal.Fire()),
        this.StartTime = t[0].StartTime,
        this.Duration = t[t.length - 1].EndTime - this.StartTime;
        let s = [];
        {
            let n = [];
            for (let r of t)
                n.push(r),
                r.IsPartOfWord === !1 && (s.push(n),
                n = []);
            n.length > 0 && s.push(n)
        }
        for (let n of s) {
            let r = l
              , c = n.length
              , u = c > 1;
            if (u) {
                let d = this.Maid.Give(document.createElement("span"));
                d.classList.add("Word"),
                r = d,
                l.appendChild(d)
            }
            for (let[d,m] of n.entries()) {
                let g = $m(m, o)
                  , v = this.Maid.Give(document.createElement("span"));
                {
                    v.classList.add("Lyric"),
                    v.classList.add("Syllable"),
                    g ? v.classList.add("Emphasis") : v.classList.add("Synced");
                    let R = u && d === c - 1;
                    m.IsPartOfWord ? (v.classList.add("PartOfWord"),
                    d === 0 ? v.classList.add("StartOfWord") : R && v.classList.add("EndOfWord")) : R && v.classList.add("EndOfWord")
                }
                let S;
                if (g) {
                    let R = [];
                    for (let Y of o && m.RomanizedText || m.Text)
                        R.push(Y);
                    let F = 1 / R.length;
                    S = [];
                    let X = 0;
                    for (let Y of R) {
                        let H = this.Maid.Give(document.createElement("span"));
                        H.classList.add("Letter"),
                        H.classList.add("Synced"),
                        H.innerText = Y,
                        v.appendChild(H),
                        S.push({
                            Start: X,
                            Duration: F,
                            GlowDuration: 1 - X,
                            LiveText: {
                                Object: H,
                                Springs: pl()
                            }
                        }),
                        X += F
                    }
                } else
                    v.innerText = o && m.RomanizedText || m.Text;
                let x = m.StartTime - this.StartTime
                  , D = m.EndTime - this.StartTime
                  , B = x / this.Duration
                  , q = D / this.Duration
                  , K = D - x
                  , te = q - B
                  , W = {
                    Object: v,
                    Springs: pl()
                };
                g ? this.Syllables.push({
                    Type: "Letters",
                    Start: x,
                    Duration: K,
                    StartScale: B,
                    DurationScale: te,
                    LiveText: W,
                    Letters: S
                }) : this.Syllables.push({
                    Type: "Syllable",
                    Start: x,
                    Duration: K,
                    StartScale: B,
                    DurationScale: te,
                    LiveText: W
                }),
                r.appendChild(v)
            }
        }
        this.SetToGeneralState(!1),
        e.appendChild(l)
    }
    UpdateLiveTextState = (e, t, i, o) => {
        let l = Fm.at(t)
          , s = Bm.at(t)
          , n = Rm.at(i);
        o ? (e.Springs.Scale.Set(l),
        e.Springs.YOffset.Set(s),
        e.Springs.Glow.Set(n)) : (e.Springs.Scale.Final = l,
        e.Springs.YOffset.Final = s,
        e.Springs.Glow.Final = n)
    }
    ;
    UpdateLiveTextVisuals = (e, t, i, o) => {
        let l = e.Springs.Scale.Update(o)
          , s = e.Springs.YOffset.Update(o)
          , n = e.Springs.Glow.Update(o);
        return e.Object.style.setProperty("--gradient-progress", `${-20 + 120 * i}%`),
        e.Object.style.transform = `translateY(calc(var(--lyrics-size) * ${s * (t ? 2 : 1)}))`,
        e.Object.style.scale = l.toString(),
        e.Object.style.setProperty("--text-shadow-blur-radius", `${4 + 2 * n * (t ? 3 : 1)}px`),
        e.Object.style.setProperty("--text-shadow-opacity", `${n * (t ? 100 : 35)}%`),
        e.Springs.Scale.IsSleeping() && e.Springs.YOffset.IsSleeping() && e.Springs.Glow.IsSleeping()
    }
    ;
    EvaluateClassState() {
        let e = ["Active", "Sung"], t;
        this.State === "Active" ? (e.splice(0, 1),
        t = "Active") : this.State == "Sung" && (e.splice(1, 1),
        t = "Sung");
        for (let i of e)
            this.Container.classList.contains(i) && this.Container.classList.remove(i);
        t !== void 0 && this.Container.classList.add(t)
    }
    SetToGeneralState(e) {
        let t = e ? 1 : 0;
        for (let i of this.Syllables)
            if (this.UpdateLiveTextState(i.LiveText, t, t, !0),
            this.UpdateLiveTextVisuals(i.LiveText, !1, t, 0),
            i.Type === "Letters")
                for (let o of i.Letters)
                    this.UpdateLiveTextState(o.LiveText, t, t, !0),
                    this.UpdateLiveTextVisuals(o.LiveText, !0, t, 0);
        this.State = e ? "Sung" : "Idle",
        this.EvaluateClassState()
    }
    Animate(e, t, i) {
        let o = e - this.StartTime
          , l = ba(o / this.Duration, 0, 1)
          , s = o >= 0
          , n = o <= this.Duration
          , r = s && n
          , c = r ? "Active" : s ? "Sung" : "Idle"
          , u = c != this.State
          , d = u || r || i;
        if (u) {
            let g = this.State;
            this.State = c,
            this.State !== "Sung" && this.EvaluateClassState(),
            g === "Active" ? this.ActivityChangedSignal.Fire(!1) : r && this.ActivityChangedSignal.Fire(!0)
        }
        d && (this.IsSleeping = !1);
        let m = this.IsSleeping === !1;
        if (d || m) {
            let g = !0;
            for (let v of this.Syllables) {
                let S = ba((l - v.StartScale) / v.DurationScale, 0, 1);
                if (v.Type == "Letters") {
                    let x = Vt(S);
                    for (let D of v.Letters) {
                        let B = x - D.Start
                          , q = ba(B / D.Duration, 0, 1)
                          , K = ba(B / D.GlowDuration, 0, 1);
                        d && this.UpdateLiveTextState(D.LiveText, q, K, i),
                        m && this.UpdateLiveTextVisuals(D.LiveText, !0, q, t) === !1 && (g = !1)
                    }
                }
                d && this.UpdateLiveTextState(v.LiveText, S, S, i),
                m && this.UpdateLiveTextVisuals(v.LiveText, !1, S, t) === !1 && (g = !1)
            }
            g && (this.IsSleeping = !0,
            r === !1 && this.EvaluateClassState())
        }
    }
    ForceState(e) {
        this.SetToGeneralState(e)
    }
    IsActive() {
        return this.State === "Active"
    }
    SetBlur(e) {
        this.Container.style.setProperty("--text-blur", `${e}px`)
    }
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var Za = class {
    Maid = new ke;
    constructor(e, t, i) {
        let o = this.Maid.Give(document.createElement("div"));
        o.classList.add("LyricsScrollContainer");
        let l = this.Maid.Give(document.createElement("div"));
        if (l.classList.add("Lyrics"),
        o.appendChild(l),
        l.classList.add(`NaturallyAligned${t.NaturalAlignment}`),
        t.Type === "Static") {
            let s = [];
            for (let n of t.Lines) {
                let r = this.Maid.Give(document.createElement("div"));
                r.classList.add("VocalsGroup"),
                s.push({
                    GroupContainer: r,
                    Vocals: [this.Maid.Give(new Ht(r,n,i))]
                }),
                l.appendChild(r)
            }
            this.Maid.Give(new qt(o,l,s,!1))
        } else {
            let s = []
              , n = [];
            if (t.Type === "Line")
                for (let u of t.Content) {
                    let d = this.Maid.Give(document.createElement("button"));
                    d.classList.add("VocalsGroup"),
                    u.Type === "Vocal" ? (u.OppositeAligned && d.classList.add("AlignedOpposite"),
                    s.push({
                        GroupContainer: d,
                        Vocals: [this.Maid.Give(new Yt(d,u,i))]
                    }),
                    n.push(u.StartTime)) : (s.push({
                        GroupContainer: d,
                        Vocals: [this.Maid.Give(new pt(d,u))]
                    }),
                    n.push(u.StartTime)),
                    l.appendChild(d)
                }
            else
                for (let u of t.Content) {
                    let d = this.Maid.Give(document.createElement("button"));
                    if (d.classList.add("VocalsGroup"),
                    u.Type === "Vocal") {
                        u.OppositeAligned && d.classList.add("AlignedOpposite");
                        let m = []
                          , g = u.Lead.StartTime;
                        if (m.push(this.Maid.Give(new ft(d,u.Lead.Syllables,!1,i))),
                        u.Background !== void 0)
                            for (let v of u.Background)
                                g = Math.min(g, v.StartTime),
                                m.push(this.Maid.Give(new ft(d,v.Syllables,!0,i)));
                        s.push({
                            GroupContainer: d,
                            Vocals: m
                        }),
                        n.push(g)
                    } else
                        s.push({
                            GroupContainer: d,
                            Vocals: [this.Maid.Give(new pt(d,u))]
                        }),
                        n.push(u.StartTime);
                    l.appendChild(d)
                }
            let r = this.Maid.Give(new qt(o,l,s,!0))
              , c = !1;
            this.Maid.Give(qi.Connect( (u, d) => {
                this.Update(r, s, t.EndTime, Je, u, d, c || void 0),
                d && c && (c = !1)
            }
            )),
            this.Maid.Give(Ha( () => this.Update(r, s, t.EndTime, Je, 1 / 60, !0)));
            for (let[u,d] of s.entries()) {
                let m = n[u];
                for (let g of d.Vocals)
                    g.RequestedTimeSkip.Connect( () => {
                        c = !0,
                        Hi(m)
                    }
                    )
            }
        }
        e.appendChild(o)
    }
    Update(e, t, i, o, l, s, n) {
        for (let r of t)
            for (let c of r.Vocals)
                c.Animate(o, l, s);
        e.SetLyricsEnded(o >= i),
        s && e.ForceToActive(n)
    }
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var Dl = lt(El());
var Ua = ji("BeautifulLyrics/LyricViews", 1, {
    CardLyricsVisible: !1,
    PlaybarDetailsHidden: !1,
    RomanizedLanguages: {
        Chinese: !1,
        Japanese: !1,
        Korean: !1
    }
})
  , zl = new Le
  , Ji = zl.GetEvent()
  , Pe = a => {
    let e = document.createElement("div");
    return e.innerHTML = a,
    e.firstElementChild
}
  , en = (a, e) => {
    Ua.Items.RomanizedLanguages[a] !== e && (Ua.Items.RomanizedLanguages[a] = e,
    Ua.SaveChanges(),
    zl.Fire(a, e))
}
  , qa = a => Ua.Items.RomanizedLanguages[a] === !0
  , Xi = "BeautifulLyricsBackground"
  , th = ["Front", "Back", "BackCenter"]
  , an = () => {
    if (ve?.Type === "DJ")
        return [ve.CoverArt.Big, void 0];
    let a = ve?.Type === "Local" ? ve?.CoverArt ?? (Re?.CoverArt !== void 0 ? `spotify:image:${Re.CoverArt}` : void 0) : ve?.CoverArt.Big;
    return a === void 0 ? ["https://images.socalifornian.live/SongPlaceholderFull.png", 75 + 285 * (0,
    Dl.default)(ve?.Uri)()] : [a, void 0]
}
  , yt = (a, e) => {
    a.classList.toggle(Xi, !0),
    e.Give( () => a.classList.toggle(Xi, !1)),
    e.Give(new MutationObserver( () => a.classList.toggle(Xi, !0))).observe(a, {
        attributes: !0,
        attributeFilter: ["class"],
        childList: !1,
        subtree: !1
    });
    let t = e.Give(document.createElement("div"));
    t.classList.add(`${Xi}-Container`);
    let i = [];
    for (let l of th) {
        let s = e.Give(document.createElement("img"));
        s.classList.add(l),
        t.appendChild(s),
        i.push(s)
    }
    let o = () => {
        let[l,s] = an();
        for (let n of i)
            n.style.setProperty("--PlaceholderHueShift", `${s ?? 0}deg`),
            n.src = l
    }
    ;
    o(),
    e.Give(Ue.Connect(o)),
    e.Give(Is.Connect(o)),
    a.prepend(t)
}
;
var ih = `
	<div id="BeautifulLyrics-CardView" style="">
		<div class="Header" data-encore-id="type">
			<div class="Title">Lyrics</div>
		</div>
	</div>
`
  , nh = '<button class="ShowLyrics">Show lyrics</button>'
  , Nl = {
    Disabled: `
		<svg role="img" height="17" width="17" aria-hidden="true" viewBox="0 0 125.45 131.07" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon">
			<path class="cls-1" d="m53.38,130.41c-12.54-2.87-20.86-14.36-19.98-27.42.59-7.62,5.8-15.12,13.07-18.69,4.28-2.11,11.02-3.4,17.75-3.46h4.8v-12.71c.06-16,.64-17.99,5.98-20.74,4.86-2.46,10.96-.47,13.3,4.34,1.17,2.34,1.23,3.52,1.23,17.23v14.65l2.81,1.05c13.59,5.1,30.59,17.87,32.34,24.38,1.17,4.34-.88,8.79-4.92,10.72-4.1,1.93-5.63,1.41-13.89-5.27-4.69-3.69-12.83-9.02-15.29-9.96-.88-.29-1.05,0-1.05,1.64,0,2.93-1.58,8.5-3.34,11.78-1.93,3.46-6.74,8.03-10.43,9.79-6.21,2.99-15.88,4.16-22.38,2.7v-.03Zm11.84-20.51c1.05-.47,2.4-1.46,2.87-2.29,1-1.52,1.41-5.39.7-6.15-.64-.59-12.66-.18-13.95.53-1.23.64-1.46,4.92-.29,6.45,1.82,2.34,6.86,3.05,10.66,1.46h0Z"></path>
			<path class="cls-1" d="m6.33,103.4c-4.39-1.99-6.91-6.04-6.21-9.9.23-1.11,2.23-4.8,4.51-8.32,7.21-11.19,17.64-31.23,18.98-36.56l.35-1.46h-8.67c-7.62,0-8.91-.18-10.66-1.17-2.99-1.76-4.34-3.93-4.34-6.91,0-3.52,1.64-6.04,5.1-7.73,2.81-1.41,3.4-1.46,13.89-1.46h10.96l.64-3.93c.35-2.23,1.05-6.86,1.58-10.43,1-7.21,1.93-9.79,4.22-12.19,2.34-2.46,4.39-3.34,7.85-3.34,5.74,0,9.26,3.34,9.26,8.79,0,1.46-.64,5.8-1.46,9.67-.76,3.87-1.46,7.27-1.46,7.56,0,.94,2.99-.29,7.97-3.28,6.04-3.57,9.32-4.22,12.42-2.23,4.51,2.81,4.92,10.84.82,16.35-2.7,3.63-10.9,6.33-20.92,6.91l-6.45.35-1.99,5.33c-3.63,9.67-9.43,22.73-15.35,34.34-6.74,13.3-9.43,17.64-11.72,18.98-2.46,1.46-6.86,1.76-9.32.64h0Z"></path>
			<path class="cls-1" d="m109.17,57.17c-11.19-4.69-29.82-13.3-30.88-14.24-4.69-4.22-3.46-12.42,2.17-15.12,4.28-1.99,6.56-1.29,24.9,7.73,15.12,7.38,16.88,8.44,18.34,10.61,1.99,2.87,2.34,6.8.76,9.2-1.29,1.99-5.21,3.81-8.26,3.81-1.35,0-4.34-.88-7.03-1.99Z"></path>
		</svg>
	`.trim(),
    Enabled: `
		<svg role="img" height="20" width="20" aria-hidden="true" viewBox="0 0 750 900" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon">
			<path class="cls-1" d="m529.42,632.32H214.71l-81.89,163.5H13.31L377.06,80.35l350.9,715.47h-121.41l-77.13-163.5Zm-45.23-95.48l-109.03-228.9-114.27,228.9h223.3Z"></path>
		</svg>
	`.trim()
}
  , rh = `
	<div class="Controls">
		<button id="Romanize" class="ViewControl"></button>
		<button id="Page" class="ViewControl">
			<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon"><path d="M14.55 1c.8 0 1.45.65 1.45 1.45V7h-1.5V2.5h-13v11h5.507V15H1.45C.65 15 0 14.35 0 13.55V2.45C0 1.65.65 1 1.45 1h13.1z"></path><path d="M16 9.757a.75.75 0 0 0-.75-.75H9.068L6.56 6.5h1.385a.75.75 0 1 0 0-1.5H4v3.946a.75.75 0 0 0 1.5 0V7.561l3.076 3.075v3.614c0 .414.336.75.75.75h5.925a.75.75 0 0 0 .75-.75V9.757z"></path>
			</svg>
		</button>
		<button id="Close" class="ViewControl">
			<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon"><path d="M1.47 1.47a.75.75 0 0 1 1.06 0L8 6.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L9.06 8l5.47 5.47a.75.75 0 1 1-1.06 1.06L8 9.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L6.94 8 1.47 2.53a.75.75 0 0 1 0-1.06z"></path>
			</svg>
		</button>
	</div>
`.trim()
  , oh = '<div class="LyricsContent"><div class="ContentContainer"></div></div>'
  , Kt = class {
    Maid = new ke;
    Container;
    Header;
    ShowLyricsButton;
    ExpandedControls;
    RomanizeTooltip;
    LyricsContainer;
    LyricsContentContainer;
    constructor(e) {
        {
            this.Container = this.Maid.Give(Pe(ih)),
            this.Header = this.Container.querySelector(".Header"),
            this.ShowLyricsButton = this.Maid.Give(Pe(nh));
            let t = this.Maid.Give(Pe(rh));
            this.ExpandedControls = {
                Container: t,
                RomanizeButton: t.querySelector("#Romanize"),
                OpenPageButton: t.querySelector("#Page"),
                CloseButton: t.querySelector("#Close")
            },
            Ie.RomanizedLanguage === void 0 && this.ExpandedControls.RomanizeButton.remove(),
            this.LyricsContainer = this.Maid.Give(Pe(oh)),
            this.LyricsContentContainer = this.LyricsContainer.querySelector(".ContentContainer")
        }
        {
            let t = ye.Tippy(this.ExpandedControls.CloseButton, {
                ...ye.TippyProps,
                content: "Close Lyrics"
            });
            this.Maid.Give( () => t.destroy());
            let i = ye.Tippy(this.ExpandedControls.OpenPageButton, {
                ...ye.TippyProps,
                content: "Open Lyrics Page"
            });
            if (this.Maid.Give( () => i.destroy()),
            Ie.RomanizedLanguage !== void 0) {
                let o = ye.Tippy(this.ExpandedControls.RomanizeButton, {
                    ...ye.TippyProps,
                    content: "Waiting For Update"
                });
                this.Maid.Give( () => o.destroy()),
                this.RomanizeTooltip = o
            }
        }
        if (Ie.RomanizedLanguage !== void 0) {
            let t = i => {
                this.RomanizeTooltip.setContent(i ? "Disable Romanization" : "Enable Romanization"),
                this.ExpandedControls.RomanizeButton.innerHTML = i ? Nl.Enabled : Nl.Disabled
            }
            ;
            this.Maid.Give(Ji.Connect( (i, o) => {
                i === Ie.RomanizedLanguage && (t(o),
                this.Maid.Has("LyricsRenderer") && this.CreateLyricsRenderer())
            }
            )),
            t(qa(Ie.RomanizedLanguage))
        }
        if (this.ShowLyricsButton.addEventListener("click", () => this.SetLyricsVisibility(!0)),
        this.ExpandedControls.CloseButton.addEventListener("click", () => this.SetLyricsVisibility(!1)),
        this.ExpandedControls.OpenPageButton.addEventListener("click", () => Me.push("/BeautifulLyrics/Page")),
        Ie.RomanizedLanguage !== void 0) {
            let t = Ie.RomanizedLanguage;
            this.ExpandedControls.RomanizeButton.addEventListener("click", () => en(t, !qa(t)))
        }
        this.ReactToLyricsVisibility(),
        e.after(this.Container)
    }
    SetLyricsVisibility(e) {
        Ua.Items.CardLyricsVisible = e,
        this.ReactToLyricsVisibility(),
        Ua.SaveChanges()
    }
    CreateLyricsRenderer() {
        this.Maid.Give(new Za(this.LyricsContentContainer,Ie,Ie.RomanizedLanguage === void 0 ? !1 : qa(Ie.RomanizedLanguage)), "LyricsRenderer")
    }
    ReactToLyricsVisibility() {
        let e = Ua.Items.CardLyricsVisible
          , t = e ? this.ExpandedControls.Container : this.ShowLyricsButton;
        this.Header.appendChild(t),
        this.Maid.Give( () => t.remove(), "VisibleHeaderElement"),
        e ? (this.CreateLyricsRenderer(),
        this.Container.appendChild(this.LyricsContainer)) : (this.LyricsContainer.remove(),
        this.Maid.Clean("LyricsRenderer"))
    }
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var Pl = `
	<div class="PlaybackControl SkipTrack REPLACEME">
		<svg viewBox="0 0 35 20" xmlns="http://www.w3.org/2000/svg">
			<path d="M 19.467 19.905 C 20.008 19.905 20.463 19.746 21.005 19.426 L 33.61 12.023 C 34.533 11.482 35 10.817 35 9.993 C 35 9.158 34.545 8.53 33.61 7.977 L 21.005 0.574 C 20.463 0.254 19.998 0.094 19.456 0.094 C 18.374 0.094 17.475 0.917 17.475 2.418 L 17.475 9.49 C 17.315 8.898 16.873 8.408 16.135 7.977 L 3.529 0.574 C 3 0.254 2.533 0.094 1.993 0.094 C 0.911 0.094 0 0.917 0 2.418 L 0 17.582 C 0 19.083 0.91 19.906 1.993 19.906 C 2.533 19.906 3 19.746 3.529 19.426 L 16.135 12.023 C 16.861 11.593 17.315 11.088 17.475 10.485 L 17.475 17.582 C 17.475 19.083 18.386 19.906 19.467 19.906 L 19.467 19.905 Z" fill-rule="nonzero"/>
		</svg>
	</div>
`
  , je = {
    EnableRomanization: `
		<svg role="img" height="20" width="20" aria-hidden="true" viewBox="0 0 750 900" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon Enable">
			<path class="cls-1" d="m529.42,632.32H214.71l-81.89,163.5H13.31L377.06,80.35l350.9,715.47h-121.41l-77.13-163.5Zm-45.23-95.48l-109.03-228.9-114.27,228.9h223.3Z"></path>
		</svg>
	`,
    DisableRomanization: `
		<svg role="img" height="17" width="17" aria-hidden="true" viewBox="0 0 125.45 131.07" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon Disable">
			<path class="cls-1" d="m53.38,130.41c-12.54-2.87-20.86-14.36-19.98-27.42.59-7.62,5.8-15.12,13.07-18.69,4.28-2.11,11.02-3.4,17.75-3.46h4.8v-12.71c.06-16,.64-17.99,5.98-20.74,4.86-2.46,10.96-.47,13.3,4.34,1.17,2.34,1.23,3.52,1.23,17.23v14.65l2.81,1.05c13.59,5.1,30.59,17.87,32.34,24.38,1.17,4.34-.88,8.79-4.92,10.72-4.1,1.93-5.63,1.41-13.89-5.27-4.69-3.69-12.83-9.02-15.29-9.96-.88-.29-1.05,0-1.05,1.64,0,2.93-1.58,8.5-3.34,11.78-1.93,3.46-6.74,8.03-10.43,9.79-6.21,2.99-15.88,4.16-22.38,2.7v-.03Zm11.84-20.51c1.05-.47,2.4-1.46,2.87-2.29,1-1.52,1.41-5.39.7-6.15-.64-.59-12.66-.18-13.95.53-1.23.64-1.46,4.92-.29,6.45,1.82,2.34,6.86,3.05,10.66,1.46h0Z"></path>
			<path class="cls-1" d="m6.33,103.4c-4.39-1.99-6.91-6.04-6.21-9.9.23-1.11,2.23-4.8,4.51-8.32,7.21-11.19,17.64-31.23,18.98-36.56l.35-1.46h-8.67c-7.62,0-8.91-.18-10.66-1.17-2.99-1.76-4.34-3.93-4.34-6.91,0-3.52,1.64-6.04,5.1-7.73,2.81-1.41,3.4-1.46,13.89-1.46h10.96l.64-3.93c.35-2.23,1.05-6.86,1.58-10.43,1-7.21,1.93-9.79,4.22-12.19,2.34-2.46,4.39-3.34,7.85-3.34,5.74,0,9.26,3.34,9.26,8.79,0,1.46-.64,5.8-1.46,9.67-.76,3.87-1.46,7.27-1.46,7.56,0,.94,2.99-.29,7.97-3.28,6.04-3.57,9.32-4.22,12.42-2.23,4.51,2.81,4.92,10.84.82,16.35-2.7,3.63-10.9,6.33-20.92,6.91l-6.45.35-1.99,5.33c-3.63,9.67-9.43,22.73-15.35,34.34-6.74,13.3-9.43,17.64-11.72,18.98-2.46,1.46-6.86,1.76-9.32.64h0Z"></path>
			<path class="cls-1" d="m109.17,57.17c-11.19-4.69-29.82-13.3-30.88-14.24-4.69-4.22-3.46-12.42,2.17-15.12,4.28-1.99,6.56-1.29,24.9,7.73,15.12,7.38,16.88,8.44,18.34,10.61,1.99,2.87,2.34,6.8.76,9.2-1.29,1.99-5.21,3.81-8.26,3.81-1.35,0-4.34-.88-7.03-1.99Z"></path>
		</svg>
	`,
    CloseView: `
		<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon">
			<path d="M1.47 1.47a.75.75 0 0 1 1.06 0L8 6.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L9.06 8l5.47 5.47a.75.75 0 1 1-1.06 1.06L8 9.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L6.94 8 1.47 2.53a.75.75 0 0 1 0-1.06z"></path>
		</svg>
	`,
    SmallerView: `
		<svg role="img" height="18" width="18" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon Small">
			<path d="M14.55 1c.8 0 1.45.65 1.45 1.45V7h-1.5V2.5H2.595L5.5 5.406V4.021a.75.75 0 0 1 1.5 0v3.946H3.055a.75.75 0 0 1 0-1.5H4.44L1.5 3.527V13.5h5.507V15H1.45C.65 15 0 14.35 0 13.55V2.45C0 1.65.65 1 1.45 1h13.1z"></path><path d="M16 9.757a.75.75 0 0 0-.75-.75H9.325a.75.75 0 0 0-.75.75v4.493c0 .414.336.75.75.75h5.925a.75.75 0 0 0 .75-.75V9.757z"></path>
		</svg>
	`,
    FullscreenClose: `
		<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-24-icon Fullscreen">
			<path d="M21.707 2.293a1 1 0 0 1 0 1.414L17.414 8h1.829a1 1 0 0 1 0 2H14V4.757a1 1 0 1 1 2 0v1.829l4.293-4.293a1 1 0 0 1 1.414 0zM2.293 21.707a1 1 0 0 1 0-1.414L6.586 16H4.757a1 1 0 0 1 0-2H10v5.243a1 1 0 0 1-2 0v-1.829l-4.293 4.293a1 1 0 0 1-1.414 0z">
			</path>
		</svg>
	`,
    AddToPlaylist: `
		<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 Svg-img-16-icon AddToPlaylist">
			<path d="M2 0v2H0v1.5h2v2h1.5v-2h2V2h-2V0H2zm11.5 2.5H8.244A5.482 5.482 0 0 0 7.966 1H15v11.75A2.75 2.75 0 1 1 12.25 10h1.25V2.5zm0 9h-1.25a1.25 1.25 0 1 0 1.25 1.25V11.5zM4 8.107a5.465 5.465 0 0 0 1.5-.593v5.236A2.75 2.75 0 1 1 2.75 10H4V8.107zM4 11.5H2.75A1.25 1.25 0 1 0 4 12.75V11.5z">
			</path>
		</svg>
	`,
    Library: `
		<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
			<path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z">
			</path>
		</svg>
	`,
    CreateFolder: `
		<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Folder">
			<path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v11.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0 0 16 14.25v-9.5A1.75 1.75 0 0 0 14.25 3H7.82l-.65-1.125A1.75 1.75 0 0 0 5.655 1H1.75zM1.5 2.75a.25.25 0 0 1 .25-.25h3.905a.25.25 0 0 1 .216.125L6.954 4.5h7.296a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25V2.75z"></path>
		</svg>
	`,
    CreatePlaylist: `
		<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Playlist">
			<path d="M16 8.328V1h-1.5v4.828h-1a2.5 2.5 0 1 0 2.5 2.5zm-2.5-1h1v1a1 1 0 1 1-1-1zm-4.5 3V4H7.5v3.828h-1a2.5 2.5 0 1 0 2.5 2.5zm-2.5-1h1v1a1 1 0 1 1-1-1zM0 14.5h16V16H0v-1.5zM2 10H0v1.5h2V10zM0 5.5h4V7H0V5.5zM12 1H0v1.5h12V1z">
			</path>
		</svg>
	`,
    AddedToPlaylist: `
		<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Added">
			<path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.398-2.38a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z">
			</path>
		</svg>
	`,
    PlaceholderPlaylistIcon: `
		<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Placeholder">
			<path d="M6 3h15v15.167a3.5 3.5 0 1 1-3.5-3.5H19V5H8v13.167a3.5 3.5 0 1 1-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 1 0 1.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 1 0 1.5 1.5v-1.5z">
			</path>
		</svg>
	`,
    Shuffle: `
		<div class="PlaybackControl Shuffle">
			<svg viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
				<path d="M 19.857 19.948 C 20.135 19.94 20.403 19.841 20.62 19.663 L 24.632 16.281 C 25.123 15.868 25.123 15.223 24.632 14.797 L 20.62 11.402 C 20.403 11.224 20.135 11.125 19.857 11.117 C 19.212 11.117 18.81 11.518 18.81 12.164 L 18.81 14.1 L 17.003 14.1 C 15.853 14.1 15.144 13.738 14.33 12.782 L 11.956 9.981 L 14.33 7.167 C 15.17 6.186 15.802 5.849 16.939 5.849 L 18.81 5.849 L 18.81 7.838 C 18.81 8.471 19.212 8.871 19.857 8.871 C 20.133 8.868 20.403 8.773 20.62 8.6 L 24.632 5.216 C 25.123 4.803 25.123 4.145 24.632 3.732 L 20.62 0.337 C 20.406 0.154 20.136 0.053 19.857 0.052 C 19.212 0.052 18.81 0.453 18.81 1.087 L 18.81 3.241 L 16.925 3.241 C 15.015 3.241 13.827 3.771 12.472 5.398 L 10.277 7.992 L 7.992 5.269 C 6.738 3.798 5.55 3.241 3.719 3.241 L 1.393 3.241 C 0.569 3.241 0 3.784 0 4.546 C 0 5.308 0.567 5.849 1.393 5.849 L 3.628 5.849 C 4.712 5.849 5.436 6.199 6.249 7.167 L 8.611 9.967 L 6.247 12.782 C 5.423 13.752 4.763 14.1 3.691 14.1 L 1.393 14.1 C 0.569 14.1 0 14.641 0 15.403 C 0 16.165 0.567 16.707 1.393 16.707 L 3.783 16.707 C 5.617 16.707 6.738 16.153 7.992 14.68 L 10.29 11.956 L 12.537 14.629 C 13.815 16.153 15.066 16.707 16.925 16.707 L 18.81 16.707 L 18.81 18.902 C 18.81 19.548 19.212 19.948 19.857 19.948 Z"/>
			</svg>
		</div>
	`,
    LastTrack: Pl.replace("REPLACEME", "LastTrack"),
    Play: `
		<svg viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" class="Play">
			<path d="M 1.558 20 C 2.006 20 2.381 19.838 2.874 19.561 L 16.622 11.572 C 17.527 11.053 17.894 10.65 17.894 9.997 C 17.894 9.35 17.527 8.948 16.622 8.419 L 2.874 0.439 C 2.381 0.153 2.006 0 1.558 0 C 0.706 0 0.106 0.654 0.106 1.694 L 0.106 18.298 C 0.106 19.346 0.706 20 1.558 20 L 1.558 20 Z" fill-rule="nonzero" transform="matrix(1, 0, 0, 1, 0, 8.881784197001252e-16)"/>
		</svg>
	`,
    Pause: `
		<svg viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" class="Pause">
			<path d="M 4.427 19.963 C 5.513 19.963 6.06 19.416 6.06 18.33 L 6.06 1.66 C 6.06 0.545 5.513 0.037 4.427 0.037 L 1.633 0.037 C 0.548 0.037 0 0.575 0 1.66 L 0 18.331 C -0.009 19.416 0.538 19.963 1.633 19.963 L 4.427 19.963 Z M 13.377 19.963 C 14.462 19.963 15 19.416 15 18.33 L 15 1.66 C 15 0.545 14.462 0.037 13.376 0.037 L 10.573 0.037 C 9.487 0.037 8.949 0.575 8.949 1.66 L 8.949 18.331 C 8.949 19.416 9.487 19.963 10.573 19.963 L 13.376 19.963 L 13.377 19.963 Z" fill-rule="nonzero"/>
		</svg>
	`,
    NextTrack: Pl.replace("REPLACEME", "NextTrack"),
    Loop: `
		<svg viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg" class="Loop">
			<path d="M 1.148 8.951 C 1.786 8.956 2.307 8.441 2.307 7.803 L 2.307 7.201 C 2.307 5.853 3.255 4.949 4.705 4.949 L 11.426 4.949 L 11.426 6.778 C 11.426 7.325 11.773 7.67 12.33 7.67 C 12.572 7.67 12.806 7.583 12.988 7.424 L 16.454 4.515 C 16.879 4.158 16.879 3.589 16.454 3.233 L 12.988 0.301 C 12.806 0.142 12.572 0.055 12.33 0.055 C 11.773 0.055 11.428 0.402 11.428 0.948 L 11.428 2.686 L 4.872 2.686 C 1.895 2.686 0 4.37 0 7.001 L 0 7.803 C 0 8.44 0.513 8.951 1.148 8.951 L 1.148 8.951 Z M 7.681 16.945 C 8.227 16.945 8.572 16.6 8.572 16.053 L 8.572 14.303 L 15.128 14.303 C 18.116 14.303 20 12.619 20 9.988 L 20 9.186 C 20 8.302 19.043 7.75 18.278 8.192 C 17.922 8.397 17.703 8.776 17.703 9.186 L 17.703 9.788 C 17.703 11.136 16.745 12.04 15.295 12.04 L 8.572 12.04 L 8.572 10.223 C 8.572 9.676 8.227 9.331 7.681 9.331 C 7.436 9.331 7.199 9.417 7.012 9.576 L 3.556 12.497 C 3.121 12.842 3.133 13.41 3.556 13.767 L 7.012 16.711 C 7.202 16.862 7.438 16.944 7.681 16.945 L 7.681 16.945 Z" fill-rule="nonzero"/>
		</svg>
	`,
    LoopTrack: `
		<svg viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg" class="LoopTrack">
			<path d="M 18.885 6.353 C 19.52 6.353 19.888 6.008 19.888 5.318 L 19.888 1.236 C 19.888 0.511 19.409 0.022 18.696 0.022 C 18.105 0.022 17.758 0.21 17.302 0.556 L 16.176 1.437 C 15.907 1.639 15.819 1.839 15.819 2.073 C 15.819 2.418 16.074 2.697 16.488 2.697 C 16.666 2.697 16.81 2.641 16.956 2.529 L 17.781 1.839 L 17.859 1.839 L 17.859 5.318 C 17.859 6.008 18.227 6.353 18.885 6.353 L 18.885 6.353 Z M 1.147 8.986 C 1.791 9.003 2.319 8.48 2.306 7.836 L 2.306 7.234 C 2.306 5.886 3.254 4.982 4.703 4.982 L 9.274 4.982 L 9.274 6.811 C 9.274 7.358 9.62 7.703 10.178 7.703 C 10.42 7.703 10.653 7.616 10.836 7.457 L 14.302 4.548 C 14.727 4.191 14.727 3.621 14.302 3.265 L 10.837 0.333 C 10.655 0.175 10.421 0.087 10.179 0.088 C 9.622 0.088 9.275 0.434 9.275 0.981 L 9.275 2.719 L 4.873 2.719 C 1.895 2.719 0 4.403 0 7.034 L 0 7.836 C 0 8.494 0.502 8.984 1.148 8.984 L 1.147 8.986 Z M 7.68 16.978 C 8.226 16.978 8.572 16.633 8.572 16.086 L 8.572 14.336 L 15.127 14.336 C 18.115 14.336 20 12.652 20 10.021 L 20 9.219 C 20.013 8.58 19.491 8.058 18.851 8.071 C 18.21 8.054 17.686 8.578 17.703 9.219 L 17.703 9.821 C 17.703 11.169 16.744 12.073 15.295 12.073 L 8.572 12.073 L 8.572 10.256 C 8.572 9.709 8.226 9.364 7.68 9.364 C 7.435 9.364 7.198 9.45 7.011 9.609 L 3.555 12.53 C 3.12 12.875 3.132 13.443 3.555 13.8 L 7.011 16.744 C 7.201 16.895 7.437 16.977 7.68 16.978 L 7.68 16.978 Z" fill-rule="nonzero" transform="matrix(1, 0, 0, 1, 0, -8.881784197001252e-16)"/>
		</svg>
	`,
    VolumeLevels: `
		<svg aria-role="presentation" version="1.1" viewBox="0 0 64 64" class="VolumeLevels">
			<path transform="translate(2,11.149)" d="m23.477 39.911c1.4129 0 2.431-1.0389 2.431-2.431v-33.141c0-1.3921-1.0181-2.5349-2.4726-2.5349-1.0181 0-1.7038 0.43634-2.805 1.4752l-9.2046 8.6644c-0.14545 0.12464-0.31166 0.18698-0.51945 0.18698h-6.2126c-2.9297 0-4.5088 1.5999-4.5088 4.7374v8.0411c0 3.1167 1.5791 4.7166 4.5088 4.7166h6.2126c0.20779 0 0.374 0.06234 0.51945 0.18698l9.2046 8.7475c0.99732 0.93501 1.8285 1.3506 2.8466 1.3506z"></path>
			<path class="Level" transform="translate(2,11.149)" d="m34.864 29.959c0.70647 0.49868 1.7246 0.35323 2.3271-0.47787 1.6205-2.1817 2.5971-5.3815 2.5971-8.6436 0-3.2621-0.9766-6.4411-2.5971-8.6436-0.60255-0.83111-1.5999-0.97655-2.3271-0.49868-0.89345 0.62336-1.0181 1.683-0.35319 2.5765 1.2051 1.6207 1.9323 4.0932 1.9323 6.5658 0 2.4726-0.76881 4.9451-1.9531 6.5866-0.62332 0.89345-0.51945 1.9116 0.374 2.5349z"></path>
			<path class="Level" transform="translate(2,11.149)" d="m43.154 35.569c0.81021 0.54023 1.8077 0.33245 2.3894-0.49867 2.7426-3.8231 4.3426-8.9137 4.3426-14.233 0-5.3399-1.5583-10.451-4.3426-14.254-0.60255-0.81034-1.5791-1.0181-2.3894-0.47787-0.78979 0.54021-0.91447 1.5583-0.29106 2.4518 2.2647 3.3245 3.6779 7.6878 3.6779 12.28s-1.3923 8.9969-3.6779 12.28c-0.60255 0.89345-0.49872 1.9116 0.29106 2.4518z"></path>
			<path class="Level" transform="translate(2,11.149)" d="m51.527 41.241c0.76894 0.51945 1.7872 0.31166 2.3898-0.54021 3.8438-5.423 6.0255-12.446 6.0255-19.864s-2.2443-14.42-6.0255-19.864c-0.60255-0.87268-1.6209-1.0805-2.3898-0.54021-0.78936 0.56098-0.91404 1.5791-0.31149 2.4518 3.3451 4.9244 5.423 11.241 5.423 17.952 0 6.7113-1.9945 13.132-5.423 17.952-0.60255 0.87268-0.47787 1.8908 0.31149 2.4518z"></path>
		</svg>
	`,
    LoadingLyrics: `
		<div
			class="LoadingLyrics Loading"
			style="mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjExMi4wNzQgMTc5NS4zNTkiIHdpZHRoPSIyMTEwcHgiIGhlaWdodD0iMTcyOXB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIGZpbGw9IiNmZmZmZmYiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OTk5LCAtNS42ODQzNDE4ODYwODA4MDJlLTE0LCAwKSI+CiAgICA8cGF0aCBkPSJNNiAxNzI3LjIgYy02LjEgLTMgLTYuMSAtMi45IC01LjggLTY3LjcgMC4zIC02NS4xIDAgLTYyLjQgNy41IC02NC40IDUuMyAtMS41IDExMDUuMyAtMS41IDExMTAuNiAwIDcuNSAyIDcuMiAtMC43IDcuNSA2NC40IDAuMyA2NC44IDAuMyA2NC43IC01LjggNjcuNyAtMy4zIDEuNyAtMzIgMS44IC01NTcgMS44IC01MjUgMCAtNTUzLjcgLTAuMSAtNTU3IC0xLjh6IiBzdHlsZT0iIi8+CiAgICA8cGF0aCBkPSJNMTE1NyAxNzI3LjIgYy02LjEgLTMgLTYuMSAtMi45IC01LjggLTY3LjcgMC4zIC02NS4xIDAgLTYyLjQgNy41IC02NC40IDUuMiAtMS41IDE0Ni40IC0xLjUgMTUxLjYgMCA3LjUgMiA3LjIgLTAuNyA3LjUgNjQuNCAwLjMgNjQuOCAwLjMgNjQuNyAtNS44IDY3LjcgLTMuMiAxLjcgLTkuMSAxLjggLTc3LjUgMS44IC02OC40IDAgLTc0LjMgLTAuMSAtNzcuNSAtMS44eiIgc3R5bGU9IiIvPgogICAgPHBhdGggZD0iTTEzNTIgMTcyNy4yIGMtMi40IC0xLjEgLTMuOSAtMi44IC00LjcgLTUuMiAtMS42IC00LjYgLTEuOCAtMTE0LjcgLTAuMiAtMTIwLjMgMiAtNy41IC0wLjMgLTcuMiA2MC40IC03LjIgNjAuNyAwIDU4LjQgLTAuMyA2MC40IDcuMiAxLjYgNS42IDEuNCAxMTUuNyAtMC4yIDEyMC4zIC0wLjggMi40IC0yLjMgNC4xIC00LjcgNS4yIC0zLjIgMS42IC04IDEuOCAtNTUuNSAxLjggLTQ3LjUgMCAtNTIuMyAtMC4yIC01NS41IC0xLjh6IiBzdHlsZT0iIi8+CiAgICA8cGF0aCBkPSJNNiAxNTM0LjIgYy02LjEgLTMgLTYuMSAtMi45IC01LjggLTY3LjcgMC4zIC02NS4xIDAgLTYyLjQgNy41IC02NC40IDUuMyAtMS41IDUzNy4zIC0xLjUgNTQyLjYgMCA3LjUgMiA3LjIgLTAuNyA3LjUgNjQuNCAwLjMgNjQuOCAwLjMgNjQuNyAtNS44IDY3LjcgLTMuMyAxLjcgLTE4LjQgMS44IC0yNzMgMS44IC0yNTQuNiAwIC0yNjkuNyAtMC4xIC0yNzMgLTEuOHoiIHN0eWxlPSIiLz4KICAgIDxwYXRoIGQ9Ik01ODcgMTUzNC4yIGMtNi4xIC0zIC02LjEgLTIuOSAtNS44IC02Ny43IDAuMyAtNjUuMSAwIC02Mi40IDcuNSAtNjQuNCA1LjMgLTEuNSA5NzYuMyAtMS41IDk4MS42IDAgNy41IDIgNy4yIC0wLjcgNy41IDY0LjQgMC4zIDY0LjggMC4zIDY0LjcgLTUuOCA2Ny43IC0zLjMgMS43IC0yOSAxLjggLTQ5Mi41IDEuOCAtNDYzLjUgMCAtNDg5LjIgLTAuMSAtNDkyLjUgLTEuOHoiIHN0eWxlPSIiLz4KICAgIDxwYXRoIGQ9Ik0zLjMgMTM1OCBjLTIuOSAtMS4yIC0zLjUgLTUuMSAtMy4xIC0xOS44IDAuMiAtOC4yIDAuNyAtMTIuNSAxLjYgLTEzLjQgMS44IC0xLjggMjYuNiAtMS44IDI4LjQgMCAxLjggMS44IDEuOSAzMC41IDAgMzIuNCAtMS42IDEuNiAtMjMuNSAyLjIgLTI2LjkgMC44eiIgc3R5bGU9IiIvPgogICAgPHBhdGggZD0iTTk5LjMgMTM1OCBjLTIuOSAtMS4yIC0zLjUgLTUuMSAtMy4xIC0xOS44IDAuMiAtOC4yIDAuNyAtMTIuNSAxLjYgLTEzLjQgMS44IC0xLjggMjYuNiAtMS44IDI4LjQgMCAxLjggMS44IDEuOSAzMC41IDAgMzIuNCAtMS42IDEuNiAtMjMuNSAyLjIgLTI2LjkgMC44eiIgc3R5bGU9IiIvPgogICAgPHBhdGggZD0iTTE5Ny4zIDEzNTggYy0yLjkgLTEuMiAtMy41IC01LjEgLTMuMSAtMTkuOCAwLjIgLTguMiAwLjcgLTEyLjUgMS42IC0xMy40IDEuOCAtMS44IDI2LjYgLTEuOCAyOC40IDAgMS44IDEuOCAxLjkgMzAuNSAwIDMyLjQgLTEuNiAxLjYgLTIzLjUgMi4yIC0yNi45IDAuOHoiIHN0eWxlPSIiLz4KICAgIDxwYXRoIGQ9Ik02IDEyNzcuMiBjLTYuMSAtMyAtNi4xIC0yLjkgLTUuOCAtNjcuNyAwLjMgLTY1LjEgMCAtNjIuNCA3LjUgLTY0LjQgNS4zIC0xLjUgNzgyLjMgLTEuNSA3ODcuNiAwIDcuNSAyIDcuMiAtMC43IDcuNSA2NC40IDAuMyA2NC44IDAuMyA2NC43IC01LjggNjcuNyAtMy4zIDEuNyAtMjQuMyAxLjggLTM5NS41IDEuOCAtMzcxLjIgMCAtMzkyLjIgLTAuMSAtMzk1LjUgLTEuOHoiIHN0eWxlPSIiLz4KICAgIDxwYXRoIGQ9Ik04MzIgMTI3Ny4yIGMtNi4xIC0zIC02LjEgLTIuOSAtNS44IC02Ny43IDAuMyAtNjUuMSAwIC02Mi40IDcuNSAtNjQuNCA1LjMgLTEuNSA0MjcuMyAtMS41IDQzMi42IDAgNy41IDIgNy4yIC0wLjcgNy41IDY0LjQgMC4zIDY0LjggMC4zIDY0LjcgLTUuOCA2Ny43IC0zLjMgMS43IC0xNS44IDEuOCAtMjE4IDEuOCAtMjAyLjIgMCAtMjE0LjcgLTAuMSAtMjE4IC0xLjh6IiBzdHlsZT0iIi8+CiAgICA8cGF0aCBkPSJNMTMwNSAxMjc3LjIgYy02LjEgLTMgLTYuMSAtMi45IC01LjggLTY3LjcgMC4zIC02NS4xIDAgLTYyLjQgNy41IC02NC40IDUuMyAtMS41IDUzNy4zIC0xLjUgNTQyLjYgMCA3LjUgMiA3LjIgLTAuNyA3LjUgNjQuNCAwLjMgNjQuOCAwLjMgNjQuNyAtNS44IDY3LjcgLTMuMyAxLjcgLTE4LjQgMS44IC0yNzMgMS44IC0yNTQuNiAwIC0yNjkuNyAtMC4xIC0yNzMgLTEuOHoiIHN0eWxlPSIiLz4KICAgIDxwYXRoIGQ9Ik02IDEwODguMiBjLTYuMSAtMyAtNi4xIC0yLjkgLTUuOCAtNjcuNyAwLjMgLTY1LjEgMCAtNjIuNCA3LjUgLTY0LjQgNS4zIC0xLjUgNDMyLjMgLTEuNSA0MzcuNiAwIDcuNSAyIDcuMiAtMC43IDcuNSA2NC40IDAuMyA2NC44IDAuMyA2NC43IC01LjggNjcuNyAtMy4zIDEuNyAtMTUuOSAxLjggLTIyMC41IDEuOCAtMjA0LjYgMCAtMjE3LjIgLTAuMSAtMjIwLjUgLTEuOHoiIHN0eWxlPSIiLz4KICAgIDxwYXRoIGQ9Ik00ODIgMTA4OC4yIGMtNi4xIC0zIC02LjEgLTIuOSAtNS44IC02Ny43IDAuMyAtNjUuMSAwIC02Mi40IDcuNSAtNjQuNCA1LjMgLTEuNSAyMzMuMyAtMS41IDIzOC42IDAgNy41IDIgNy4yIC0wLjcgNy41IDY0LjQgMC4zIDY0LjggMC4zIDY0LjcgLTUuOCA2Ny43IC0zLjMgMS43IC0xMS4xIDEuOCAtMTIxIDEuOCAtMTA5LjkgMCAtMTE3LjcgLTAuMSAtMTIxIC0xLjh6IiBzdHlsZT0iIi8+CiAgICA8cGF0aCBkPSJNNzU4IDEwODguMiBjLTYuMSAtMyAtNi4xIC0yLjkgLTUuOCAtNjcuNyAwLjMgLTY1LjEgMCAtNjIuNCA3LjUgLTY0LjQgNS4zIC0xLjUgNTIyLjMgLTEuNSA1MjcuNiAwIDcuNSAyIDcuMiAtMC43IDcuNSA2NC40IDAuMyA2NC44IDAuMyA2NC43IC01LjggNjcuNyAtMy4zIDEuNyAtMTguMSAxLjggLTI2NS41IDEuOCAtMjQ3LjQgMCAtMjYyLjIgLTAuMSAtMjY1LjUgLTEuOHoiIHN0eWxlPSIiLz4KICAgIDxwYXRoIGQ9Ik0xMzI0IDEwODguMiBjLTYuMSAtMyAtNi4xIC0yLjkgLTUuOCAtNjcuNyAwLjMgLTY1LjEgMCAtNjIuNCA3LjUgLTY0LjQgNS4zIC0xLjUgNzcxLjMgLTEuNSA3NzYuNiAwIDcuNSAyIDcuMiAtMC43IDcuNSA2NC40IDAuMyA2NC44IDAuMyA2NC43IC01LjggNjcuNyAtMy4zIDEuNyAtMjQgMS44IC0zOTAgMS44IC0zNjYgMCAtMzg2LjcgLTAuMSAtMzkwIC0xLjh6IiBzdHlsZT0iIi8+CiAgICA8cGF0aCBkPSJNNiA4OTkuMiBjLTYuMSAtMyAtNi4xIC0yLjkgLTUuOCAtNjcuNyAwLjMgLTY1LjEgMCAtNjIuNCA3LjUgLTY0LjQgNS4zIC0xLjUgMTEyNi4zIC0xLjUgMTEzMS42IDAgNy41IDIgNy4yIC0wLjcgNy41IDY0LjQgMC4zIDY0LjggMC4zIDY0LjcgLTUuOCA2Ny43IC0zLjMgMS43IC0zMi41IDEuOCAtNTY3LjUgMS44IC01MzUgMCAtNTY0LjIgLTAuMSAtNTY3LjUgLTEuOHoiIHN0eWxlPSIiLz4KICAgIDxwYXRoIGQ9Ik02IDcxMC4yIGMtNi4xIC0zIC02LjEgLTIuOSAtNS44IC02Ny43IDAuMyAtNjUuMSAwIC02Mi40IDcuNSAtNjQuNCA1LjIgLTEuNSAxNTIuNCAtMS41IDE1Ny42IDAgNy41IDIgNy4yIC0wLjcgNy41IDY0LjQgMC4zIDY0LjggMC4zIDY0LjcgLTUuOCA2Ny43IC0zLjIgMS43IC05LjIgMS44IC04MC41IDEuOCAtNzEuMyAwIC03Ny4zIC0wLjEgLTgwLjUgLTEuOHoiIHN0eWxlPSIiLz4KICAgIDxwYXRoIGQ9Ik0xOTcgNzEwLjIgYy02LjEgLTMgLTYuMSAtMi45IC01LjggLTY3LjcgMC4zIC02NS4xIDAgLTYyLjQgNy41IC02NC40IDUuMyAtMS41IDgwNi4zIC0xLjUgODExLjYgMCA3LjUgMiA3LjIgLTAuNyA3LjUgNjQuNCAwLjMgNjQuOCAwLjMgNjQuNyAtNS44IDY3LjcgLTMuMyAxLjcgLTI0LjkgMS44IC00MDcuNSAxLjggLTM4Mi42IDAgLTQwNC4yIC0wLjEgLTQwNy41IC0xLjh6IiBzdHlsZT0iIi8+CiAgICA8cGF0aCBkPSJNMTA0NCA3MTAuMiBjLTYuMSAtMyAtNi4xIC0yLjkgLTUuOCAtNjcuNyAwLjMgLTY1LjEgMCAtNjIuNCA3LjUgLTY0LjQgNS4zIC0xLjUgNjg4LjMgLTEuNSA2OTMuNiAwIDcuNSAyIDcuMiAtMC43IDcuNSA2NC40IDAuMyA2NC44IDAuMyA2NC43IC01LjggNjcuNyAtMy4zIDEuNyAtMjIgMS44IC0zNDguNSAxLjggLTMyNi41IDAgLTM0NS4yIC0wLjEgLTM0OC41IC0xLjh6IiBzdHlsZT0iIi8+CiAgICA8cGF0aCBkPSJNMTc3MCA3MTAuMiBjLTYuMSAtMyAtNi4xIC0yLjkgLTUuOCAtNjcuNyAwLjMgLTY1LjEgMCAtNjIuNCA3LjUgLTY0LjQgNS4zIC0xLjUgMzI1LjMgLTEuNSAzMzAuNiAwIDcuNSAyIDcuMiAtMC43IDcuNSA2NC40IDAuMyA2NC44IDAuMyA2NC43IC01LjggNjcuNyAtMy4zIDEuNyAtMTMuMyAxLjggLTE2NyAxLjggLTE1My43IDAgLTE2My43IC0wLjEgLTE2NyAtMS44eiIgc3R5bGU9IiIvPgogICAgPHBhdGggZD0iTTYgNTE3LjIgYy02LjEgLTMgLTYuMSAtMi45IC01LjggLTY3LjcgMC4zIC02NS4xIDAgLTYyLjQgNy41IC02NC40IDUuMyAtMS41IDMyNS4zIC0xLjUgMzMwLjYgMCA3LjUgMiA3LjIgLTAuNyA3LjUgNjQuNCAwLjMgNjQuOCAwLjMgNjQuNyAtNS44IDY3LjcgLTMuMyAxLjcgLTEzLjMgMS44IC0xNjcgMS44IC0xNTMuNyAwIC0xNjMuNyAtMC4xIC0xNjcgLTEuOHoiIHN0eWxlPSIiLz4KICAgIDxwYXRoIGQ9Ik0zNzEgNTE2LjIgYy02LjEgLTMgLTYuMSAtMi45IC01LjggLTY3LjcgMC4zIC02NS4xIDAgLTYyLjQgNy41IC02NC40IDUuMyAtMS41IDY0Mi4zIC0xLjUgNjQ3LjYgMCA3LjUgMiA3LjIgLTAuNyA3LjUgNjQuNCAwLjMgNjQuOCAwLjMgNjQuNyAtNS44IDY3LjcgLTMuMyAxLjcgLTIwLjkgMS44IC0zMjUuNSAxLjggLTMwNC42IDAgLTMyMi4yIC0wLjEgLTMyNS41IC0xLjh6IiBzdHlsZT0iIi8+CiAgICA8cGF0aCBkPSJNMTA1MyA1MTYuMiBjLTYuMSAtMyAtNi4xIC0yLjkgLTUuOCAtNjcuNyAwLjMgLTY1LjEgMCAtNjIuNCA3LjUgLTY0LjQgNS4zIC0xLjUgMjQ1LjMgLTEuNSAyNTAuNiAwIDcuNSAyIDcuMiAtMC43IDcuNSA2NC40IDAuMyA2NC44IDAuMyA2NC43IC01LjggNjcuNyAtMy4zIDEuNyAtMTEuNCAxLjggLTEyNyAxLjggLTExNS42IDAgLTEyMy43IC0wLjEgLTEyNyAtMS44eiIgc3R5bGU9IiIvPgogICAgPHBhdGggZD0iTTYgMzIyLjIgYy02LjEgLTMgLTYuMSAtMi45IC01LjggLTY3LjcgMC4zIC02NS4xIDAgLTYyLjQgNy41IC02NC40IDUuMyAtMS41IDU1NC4zIC0xLjUgNTU5LjYgMCA3LjUgMiA3LjIgLTAuNyA3LjUgNjQuNCAwLjMgNjQuOCAwLjMgNjQuNyAtNS44IDY3LjcgLTMuMyAxLjcgLTE4LjggMS44IC0yODEuNSAxLjggLTI2Mi43IDAgLTI3OC4yIC0wLjEgLTI4MS41IC0xLjh6IiBzdHlsZT0iIi8+CiAgICA8cGF0aCBkPSJNNjAxIDMyMi4yIGMtNi4xIC0zIC02LjEgLTIuOSAtNS44IC02Ny43IDAuMyAtNjUuMSAwIC02Mi40IDcuNSAtNjQuNCA1LjMgLTEuNSA2NTguMyAtMS41IDY2My42IDAgNy41IDIgNy4yIC0wLjcgNy41IDY0LjQgMC4zIDY0LjggMC4zIDY0LjcgLTUuOCA2Ny43IC0zLjMgMS43IC0yMS4zIDEuOCAtMzMzLjUgMS44IC0zMTIuMiAwIC0zMzAuMiAtMC4xIC0zMzMuNSAtMS44eiIgc3R5bGU9IiIvPgogICAgPHBhdGggZD0iTTYgMTMzLjIgYy02LjEgLTMgLTYuMSAtMi45IC01LjggLTY3LjcgMC4zIC02NS4xIDAgLTYyLjQgNy41IC02NC40IDUuMiAtMS41IDIxMS40IC0xLjUgMjE2LjYgMCA3LjUgMiA3LjIgLTAuNyA3LjUgNjQuNCAwLjMgNjQuOCAwLjMgNjQuNyAtNS44IDY3LjcgLTMuMyAxLjcgLTEwLjYgMS44IC0xMTAgMS44IC05OS40IDAgLTEwNi43IC0wLjEgLTExMCAtMS44eiIgc3R5bGU9IiIvPgogICAgPHBhdGggZD0iTTI1OCAxMzMuMiBjLTYuMSAtMyAtNi4xIC0yLjkgLTUuOCAtNjcuNyAwLjMgLTY1LjEgMCAtNjIuNCA3LjUgLTY0LjQgNS4zIC0xLjUgNzM4LjMgLTEuNSA3NDMuNiAwIDcuNSAyIDcuMiAtMC43IDcuNSA2NC40IDAuMyA2NC44IDAuMyA2NC43IC01LjggNjcuNyAtMy4zIDEuNyAtMjMuMiAxLjggLTM3My41IDEuOCAtMzUwLjMgMCAtMzcwLjIgLTAuMSAtMzczLjUgLTEuOHoiIHN0eWxlPSIiLz4KICA8L2c+Cjwvc3ZnPg==);"
		>
		</div>
	`,
    HeartOutline: `
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 985" preserveAspectRatio="xMidYMid meet" class="Outline">
			<g>
				<path d="M502 982.2 c-12.7 -4.6 -22.5 -11.3 -40.5 -27.7 -4.9 -4.5 -16.6 -14.4 -25.9 -21.9 -9.4 -7.5 -29.8 -24.7 -45.4 -38.2 -15.6 -13.6 -37.5 -32.1 -48.6 -41.2 -52.7 -43.5 -87.4 -76.4 -115.2 -109.7 -3.3 -3.8 -17.8 -19.8 -32.4 -35.5 -54.3 -58.5 -100.8 -125.3 -134 -192.5 -40.2 -81.3 -58 -149.7 -58.1 -223 0 -24.3 0.9 -37.2 4.1 -57.4 7.2 -44.9 24.8 -85.3 52.8 -121.5 35.7 -46.2 82.6 -80 137.2 -98.8 12.4 -4.2 52.6 -12.7 66.5 -13.9 17.3 -1.6 51.9 -0.6 68 2 52.1 8.3 101.2 29.4 140 60.1 10 7.9 28.4 26.4 35 35.3 2.8 3.6 5.2 6.7 5.5 6.7 0.3 0 5.3 -5.5 11.2 -12.3 42.8 -49.2 109.3 -82.9 180.4 -91.2 16.5 -1.9 48.1 -1.9 64.5 0 82.9 9.7 159.7 56.6 205 125.3 19.6 29.6 35.1 64.8 42.9 97.7 17.1 71.6 4.1 160.5 -38.2 260.5 -22.7 53.6 -49 97.7 -92.7 155.5 -23.1 30.5 -32 41.1 -56.2 67 -12.9 13.8 -28.7 31.2 -35.3 38.8 -29.6 34.5 -55.4 58.7 -111.7 105.3 -10.7 8.8 -34 28.8 -51.9 44.4 -49.5 43.2 -71.6 61.2 -99.1 80.8 -13.6 9.6 -15.4 9.9 -27.9 5.4z m16.9 -26.9 c22 -15.6 50.9 -39.2 94.6 -77.4 35.8 -31.2 44.9 -39 62 -52.9 37.2 -30.2 77.1 -68.3 100.7 -96 6.3 -7.4 22.4 -25.1 35.6 -39.4 49.2 -52.7 96.9 -119.8 125.1 -175.6 29.3 -57.9 49.8 -120.1 58.2 -176.7 3 -19.9 3.7 -60.8 1.5 -79.3 -3.9 -32.1 -13.2 -61.2 -29.7 -93 -32 -61.8 -84.7 -106.2 -152.4 -128.5 -42.6 -14.1 -89.5 -16.5 -134.8 -6.9 -51.8 10.9 -103 38.6 -133.6 72.2 -20.2 22.2 -28.6 32.1 -31.3 36.9 -1.7 2.9 -3.3 5.3 -3.6 5.2 -0.4 0 -6.8 -7.9 -14.2 -17.6 -15.6 -20.4 -25.9 -31.6 -38.5 -42.1 -28.9 -24.2 -72.1 -44.9 -111.7 -53.7 -24.7 -5.4 -30.4 -6 -60.3 -5.9 l-28 0.1 -25.6 5.5 c-33.8 7.4 -54.1 15.2 -80.3 31.1 -26.6 16 -52 38.2 -70.9 61.8 -33.1 41.4 -49.7 83 -54.8 137.2 -1.5 16.6 -0.6 62.9 1.5 78.7 6.9 50.1 20.7 96.5 43.6 147 31.3 69 82.2 144.1 138.6 204.7 13.7 14.7 30.3 33.1 36.9 40.8 24.5 28.8 62.1 64.5 105.3 99.8 10.6 8.7 33.1 27.8 50 42.4 16.9 14.6 38.6 32.9 48.2 40.7 9.6 7.7 21.3 17.6 26 22 11.2 10.3 21.2 17.9 28 21 3 1.4 5.9 2.6 6.4 2.6 0.5 0 3.8 -2.1 7.5 -4.7z"/>
			</g>
		</svg>
	`,
    BrokenHeart: `
		<svg "version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 985" preserveAspectRatio="xMidYMid meet" class="Filled">
			<g>
				<path class="Left" d="M490.9 968.2 c-132.6 -101.1 -256.9 -218.6 -339.9 -321.2 -39.1 -48.4 -63.9 -86 -86.9 -132 -32 -64.1 -51.4 -125.6 -60.3 -191.5 -3 -21.6 -3.2 -65 -0.5 -82.5 9.8 -62.9 36 -115.5 79.1 -158.6 74.9 -74.9 184.4 -100.6 284.4 -66.7 29.2 9.9 60.1 26.8 85.2 46.9 18 14.4 42.5 40.8 55.4 59.6 l3.8 5.6 -20.5 83.8 -20.5 83.7 40 60.1 c22.1 33 40.3 60.8 40.5 61.6 0.3 0.9 -16.3 32.2 -36.8 69.5 -20.5 37.3 -37.2 68.4 -37.2 69 0 0.6 15.8 32.2 35.1 70.2 19.4 37.9 35.2 69.5 35.2 70.2 0 0.6 -17.3 31.5 -38.5 68.6 -21.2 37.2 -38.5 68 -38.5 68.5 0 1.4 39.9 146.2 41 148.8 0.5 1.2 0.9 2.2 0.7 2.1 -0.1 0 -9.5 -7.1 -20.8 -15.7z"/>
				<path class="Right" d="M510 980.2 c-0.5 -2.1 -9.8 -35.8 -20.5 -74.7 -10.7 -39 -19.5 -71.6 -19.5 -72.5 0 -0.9 16.9 -31.3 37.6 -67.5 20.7 -36.3 38.1 -66.9 38.6 -68.1 0.8 -1.7 -5.3 -14.3 -34.6 -71.6 -19.6 -38.3 -35.6 -69.9 -35.6 -70.3 0 -0.3 16.5 -30.6 36.6 -67.3 20.2 -36.7 37.1 -67.6 37.6 -68.8 0.9 -1.8 -4.7 -10.7 -39.6 -63.1 l-40.7 -60.9 20.4 -83.2 c12.4 -50.5 21 -83.8 21.9 -84.5 0.8 -0.7 4.2 -5 7.6 -9.7 33.4 -46.8 83.3 -84 137.4 -102.3 72.4 -24.5 149.6 -18.3 217.8 17.4 71.1 37.3 124 106.5 141.4 184.9 5.2 23.8 6.1 32.5 6 62 0 29.4 -1.3 42.8 -6.9 73.5 -13.9 75.6 -48.1 158.7 -94 228 -67.3 101.9 -198.7 236 -348.5 355.6 -20.5 16.4 -60.5 46.9 -61.4 46.9 -0.3 0 -1 -1.7 -1.6 -3.8z"/>
			</g>
		</svg>
	`,
    LoadingBrokenHeart: `
		<div
			class="Loading"
			style="
				--FilledMask: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjAvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTg3cHgiIGhlaWdodD0iNzM0cHgiIHZpZXdCb3g9IjAgMCA5ODcgNzM0IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KIDxnIGZpbGw9IiNmZmZmZmYiPgogIDxwYXRoIGQ9Ik00ODUuNSA3MjguNSBjLTIuMiAtMS4yIC04LjkgLTQuNyAtMTUgLTcuOCAtMjkuNSAtMTUuMSAtOTEuMSAtNTAuOSAtMTM0IC03Ny44IC0zNC44IC0yMS44IC05OS4zIC02Ny43IC0xMzEgLTkzLjMgLTM4LjEgLTMwLjggLTc4IC02OC4zIC05OC40IC05Mi42IC0zNC44IC00MS40IC02Ni43IC05NC42IC04My4yIC0xMzguNSAtMS43IC00LjQgLTMuNCAtOC45IC0zLjkgLTEwIC00LjQgLTEwLjUgLTExLjUgLTM2LjYgLTE0LjUgLTUyLjggLTIuMyAtMTIuNyAtMi45IC0yMSAtMi45IC0zOS4yIDAgLTQ2LjkgMTUuMSAtOTEgNDQuNyAtMTMwLjMgMjguNSAtMzcuOSA3NCAtNjcuMyAxMjEuNiAtNzguNyAxOC4yIC00LjMgMzAuOSAtNS44IDUwLjIgLTUuNiAyNS42IDAuMSA0NC4xIDMuMSA2Ny4zIDEwLjggMzAuMSAxMCA1Ni44IDI2IDgzIDQ5LjcgbDguOSA4LjEgLTAuNyAxMiBjLTAuNCA2LjYgLTAuOSAxNCAtMS4xIDE2LjUgLTAuNCA0LjMgLTIgMjUuNSAtMyA0MSAtMC42IDkgLTIuMSAyOC44IC0zLjUgNDYuMyAtMC41IDcgLTEgMTQuNSAtMSAxNi41IDAgNC4xIC0xLjYgMi4yIDI4LjkgMzQuMiA5LjcgMTAuMiAyMC41IDIxLjcgMjQuMSAyNS41IDMuNyAzLjkgMTAuNyAxMS4zIDE1LjggMTYuNyA1LjEgNS4zIDkuMiAxMC4zIDkuMiAxMS4xIDAgMC44IC0zIDEwIC02LjYgMjAuMyAtMy42IDEwLjQgLTguMyAyNC4xIC0xMC40IDMwLjQgLTIuMSA2LjMgLTcuOSAyMy40IC0xMi45IDM4IC01IDE0LjYgLTguOSAyNyAtOC42IDI3LjcgMC41IDEuNSAxNC43IDIwLjcgNDguOSA2Ni41IGwyMy45IDMxLjkgLTE1LjMgNDEuNyBjLTguNCAyMi45IC0xOCA0OC44IC0yMS4yIDU3LjYgLTMuMiA4LjcgLTUuOCAxNi4yIC01LjggMTYuNiAwIDAuNCAyLjcgNi4zIDUuOSAxMy4xIDMuMiA2LjggOS4xIDE5LjQgMTMuMSAyNy45IDExLjEgMjMuNyAxNC4zIDMwLjUgMjAgNDIuNSA4LjYgMTguMiAxMi4xIDI1LjggMTEuOCAyNS45IC0wLjIgMC4xIC0yLjEgLTAuOCAtNC4zIC0xLjl6Ii8+CiAgPHBhdGggZD0iTTQ5Ny42IDcyNC43IGMtMC40IC0zIC0wLjkgLTcuMiAtMS4xIC05LjMgLTAuMiAtMi4xIC0xLjEgLTExLjEgLTEuOSAtMTkuOSAtMC45IC04LjggLTEuOCAtMTcuNiAtMiAtMTkuNSAtMC4zIC0xLjkgLTAuNyAtNi45IC0xLjEgLTExIC0wLjMgLTQuMSAtMC44IC04LjYgLTEgLTEwIC0wLjQgLTIuNCAtMC44IC01LjcgLTIuMSAtMjAuNSAtMC4zIC0zLjggLTAuNyAtOC4xIC0wLjkgLTkuNSAtMC4yIC0xLjQgLTAuNiAtNS41IC0xIC05LjEgbC0wLjcgLTYuNiAxMy4yIC0xNS45IGM3LjIgLTguNyAxNC40IC0xNy40IDE1LjggLTE5LjIgMS41IC0xLjggMy42IC00LjQgNC43IC01LjYgMS4xIC0xLjMgMy40IC00IDUgLTYuMiAyLjkgLTMuNyAzMS4xIC0zOCAzNi4xIC00My44IDMgLTMuNSAzIC0zLjQgLTAuMiAtMTMuMSAtMS40IC00LjQgLTIuNyAtOC43IC0yLjkgLTkuNSAtMC4yIC0wLjggLTEgLTMuNSAtMS44IC02IC0wLjggLTIuNSAtMy42IC0xMSAtNiAtMTkgLTIuNSAtOCAtNiAtMTkgLTcuNyAtMjQuNSAtMS43IC01LjUgLTMuMyAtMTAuNyAtMy41IC0xMS41IC0wLjIgLTAuOCAtMSAtMy41IC0xLjggLTYgLTAuOCAtMi41IC0zLjQgLTEwLjQgLTUuNyAtMTcuNyBsLTQuMiAtMTMuMiA2LjkgLTguNCBjMy43IC00LjYgNy45IC05LjggOS4zIC0xMS43IDEuNCAtMS44IDUuOSAtNy41IDEwIC0xMi42IDQuMSAtNS4xIDExLjEgLTEzLjggMTUuNSAtMTkuNCA0LjQgLTUuNSAxMi4xIC0xNS4yIDE3IC0yMS40IDUgLTYuMSAxMC45IC0xMy43IDEzLjMgLTE2LjggbDQuMiAtNS41IC00LjEgLTguOSBjLTQuNiAtMTAgLTUuMSAtMTEuMiAtMTAuOSAtMjQuNCAtMi4zIC01LjIgLTUuMiAtMTEuNyAtNi41IC0xNC41IC0xLjMgLTIuNyAtNS4xIC0xMS4zIC04LjUgLTE5IC0zLjQgLTcuNyAtNi44IC0xNS4zIC03LjYgLTE3IC0wLjggLTEuNiAtMy4xIC02LjcgLTUgLTExLjIgLTMuOCAtOC45IC0zLjggLTkuMyAwLjIgLTE3LjcgMS4zIC0yLjggMi40IC01LjMgMi40IC01LjcgMCAtMC40IDEuOCAtNC43IDQgLTkuNCAyLjIgLTQuNyA0IC04LjggNCAtOSAwIC0wLjMgMS4xIC0yLjggMi40IC01LjcgNC4zIC05LjQgMTAuNiAtMjMuOCAxMC42IC0yNC4yIDAgLTAuNCAxLjMgLTMuNCA4LjEgLTE4LjUgMS4xIC0yLjQgMi45IC02LjUgMy45IC05LjEgMSAtMi42IDIuOCAtNi43IDMuOSAtOS4xIDEgLTIuNCAzLjMgLTcuNSA1IC0xMS4yIDEuNyAtMy44IDMuMSAtNy4zIDMuMSAtNy44IDAgLTEuMiAxOC42IC0xOS4yIDI2IC0yNS4xIDUuOCAtNC42IDIwLjQgLTE0LjkgMjMgLTE2LjEgMC44IC0wLjQgMy44IC0yLjEgNi41IC0zLjcgNC44IC0yLjkgMTcuNCAtOS4yIDIyLjUgLTExLjIgMS40IC0wLjYgMy4zIC0xLjUgNC40IC0yIDEgLTAuNSAyLjYgLTEuMSAzLjUgLTEuNCAwLjkgLTAuMiA0LjMgLTEuMyA3LjYgLTIuNSAzLjMgLTEuMiA3LjYgLTIuNiA5LjUgLTMuMSAxLjkgLTAuNSA0LjQgLTEuMSA1LjUgLTEuNCAxMS45IC0zLjUgMzMuNiAtNi4zIDUyLjIgLTYuOCAxMS41IC0wLjIgMzUuOCAyLjIgNDQuMyA0LjQgMS45IDAuNSA3LjMgMS45IDEyIDMgMTQuOSAzLjcgMjEuNCA2LjIgNDAgMTUuNCAyOS42IDE0LjcgNDkuNCAzMC4zIDY5LjkgNTUuMSA2LjggOC4yIDcuNyA5LjUgMTUgMjAuMyA0LjMgNi4zIDEzLjkgMjQuNiAxNy44IDMzLjcgNy41IDE4IDEzLjMgMzkuNCAxNC44IDU0LjUgMC4zIDMgMC44IDcuNSAxIDEwIDAuOCA3LjIgMC41IDMxLjggLTAuNCA0MSAtMS4xIDkuOSAtMy44IDI2LjIgLTUuMSAzMC41IC0wLjUgMS43IC0xLjcgNS43IC0yLjYgOSAtMy44IDEzLjcgLTYuNyAyMi43IC04LjYgMjcuNSAtMS40IDMuMiAtMi4zIDUuNiAtMy45IDEwIC0wLjYgMS45IC0yLjMgNS45IC0zLjYgOC44IC0xLjIgMi45IC0yLjMgNS41IC0yLjMgNS43IDAgMC43IC03LjYgMTcgLTExLjIgMjQgLTI2LjYgNTEuOSAtNTguMiA5NC44IC05OS43IDEzNC44IC0xNC4zIDEzLjkgLTE2LjEgMTUuNSAtMzMuNyAzMC45IC0xMC40IDkuMSAtNDguNCAzOS43IC01OS45IDQ4LjMgLTExLjkgOC45IC0xNi45IDEyLjUgLTIyIDE2LjEgLTIuNyAxLjggLTcuNSA1LjIgLTEwLjUgNy40IC0xMCA3LjQgLTU4LjMgNDAgLTYwLjUgNDAuOSAtMC41IDAuMiAtMyAxLjggLTUuNSAzLjYgLTIuNSAxLjcgLTUuMiAzLjQgLTYgMy44IC0wLjggMC40IC0yLjcgMS41IC00LjEgMi41IC0xLjUgMC45IC01LjMgMy4zIC04LjQgNS4yIC0zLjEgMS45IC02LjkgNC4zIC04LjQgNS4yIC0xLjQgMC45IC0zLjYgMi4zIC00LjggMyAtMi4yIDEuMyAtMjQuNyAxNC43IC0zMS4zIDE4LjcgLTEuOSAxLjEgLTQuMiAyLjQgLTUgMi44IC0wLjggMC4zIC0yLjYgMS40IC00IDIuMyAtMS40IDEgLTQuNyAzIC03LjUgNC41IC0xOC42IDEwLjMgLTIzLjUgMTMgLTI3LjUgMTUuMyAtOS40IDUuMyAtNDcuNiAyNS4yIC00OC40IDI1LjIgLTAuMiAwIC0wLjcgLTIuNCAtMSAtNS4zeiIvPgogPC9nPgo8L3N2Zz4=);
				--OutlineMask: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjAvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTY4cHgiIGhlaWdodD0iOTMycHgiIHZpZXdCb3g9IjAgMCA5NjggOTMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KIDxnIGZpbGw9IiNmZmZmZmYiPgogIDxwYXRoIGQ9Ik00NjkuNCA5MjAuMiBjLTcuNyAtNS45IC0xNi43IC0xMi43IC0yMCAtMTUuMiAtMTIgLTkuMSAtMzcuNCAtMjkuNSAtNTQuNyAtNDQgLTQuOSAtNC4xIC0xMC40IC04LjYgLTEyLjEgLTEwIC00LjQgLTMuNSAtMzAuMSAtMjUuNSAtMzYuMSAtMzAuOSAtMi44IC0yLjUgLTYuNiAtNS45IC04LjUgLTcuNSAtNS40IC00LjUgLTIwLjcgLTE4LjMgLTI4LjUgLTI1LjYgLTMuOSAtMy42IC0xMy4xIC0xMi4xIC0yMC41IC0xOSAtNTEuOCAtNDguMyAtMTAxLjkgLTEwMS4zIC0xNDIuNSAtMTUwLjkgLTI5LjQgLTM1LjggLTUyLjkgLTY5LjMgLTcxLjMgLTEwMS42IC04LjIgLTE0LjQgLTI5LjEgLTU2LjMgLTMwLjcgLTYxLjUgLTAuNCAtMS40IC0zLjIgLTguNCAtNi4xIC0xNS43IC0xMy40IC0zMi43IC0yNSAtNzIuNSAtMzAuNCAtMTAzLjggLTQuNyAtMjcuMyAtNi4xIC00MC43IC02LjcgLTYzIC0wLjYgLTI0LjkgMC45IC00MS4xIDYuMyAtNjYuNCAxMi42IC01OC42IDQ4LjYgLTExMy44IDk4LjQgLTE1MS4zIDE5LjQgLTE0LjUgMzguMiAtMjQuOSA2MiAtMzQuMyAxOC41IC03LjMgMzQuNiAtMTEuNiA1NCAtMTQuNiAxMy40IC0yLjEgMTkgLTIuNCA0MS41IC0yLjQgMjMuNiAwLjEgMjcuNiAwLjQgNDIuOSAyLjkgMTkuNSAzLjIgMzMuNSA3LjIgNTQuMyAxNS41IDMzLjMgMTMuNCA2MS4zIDMyIDg3LjggNTguNiAxMi4zIDEyLjQgMjkuMyAzMi44IDM0LjUgNDEuNCAwLjkgMS41IDEuMSAxLjUgMiAwIDUuMiAtOC42IDIyLjIgLTI5IDM0LjUgLTQxLjQgMjYuNSAtMjYuNiA1NC41IC00NS4yIDg3LjggLTU4LjYgMjAuOCAtOC4zIDM0LjggLTEyLjMgNTQuMyAtMTUuNSAxNS4zIC0yLjUgMTkuMyAtMi44IDQyLjkgLTIuOSAyMi41IDAgMjguMSAwLjMgNDEuNSAyLjQgOC41IDEuMyAyMC45IDMuOCAyNy41IDUuNiAxMyAzLjYgMzYuOCAxMi42IDQ4IDE4LjIgNzAuNSAzNS40IDEyMi45IDEwMiAxMzguOSAxNzYuNCA1LjQgMjUuMyA2LjkgNDEuNSA2LjMgNjYuNCAtMC42IDIyLjMgLTIgMzUuNyAtNi43IDYzIC01LjQgMzEuMyAtMTcgNzEuMSAtMzAuNCAxMDMuOCAtMi45IDcuMyAtNS43IDE0LjMgLTYuMSAxNS43IC0xLjYgNS4yIC0yMi41IDQ3LjEgLTMwLjcgNjEuNSAtMTguNCAzMi4zIC00MS45IDY1LjggLTcxLjMgMTAxLjYgLTQwLjYgNDkuNiAtOTAuNyAxMDIuNiAtMTQyLjUgMTUwLjkgLTcuNCA2LjkgLTE2LjYgMTUuNCAtMjAuNSAxOSAtNy44IDcuMyAtMjMuMSAyMS4xIC0yOC41IDI1LjYgLTEuOSAxLjYgLTUuNyA1IC04LjUgNy41IC02IDUuNCAtMzEuNyAyNy40IC0zNi4xIDMwLjkgLTEuNyAxLjQgLTcuMiA1LjkgLTEyLjEgMTAgLTE3LjcgMTQuOCAtMzkgMzIgLTUzLjMgNDIuOSAtMTYuMiAxMi40IC0zNS44IDI3LjEgLTM2LjIgMjcuMSAtMC4yIC0wLjEgLTYuNiAtNC45IC0xNC40IC0xMC44eiIvPgogPC9nPgo8L3N2Zz4=);
			"
		></div>
	`
};
var tn = (a, e, t) => {
    let i = () => {
        e.Clean("LyricsRenderer"),
        Oa === !1 ? (t === void 0 && a.classList.remove("NoLyrics"),
        a.appendChild(e.Give(Pe(je.LoadingLyrics), "LyricsRenderer"))) : Ie === void 0 ? t === void 0 ? a.classList.add("NoLyrics") : a.appendChild(e.Give(Pe(t), "LyricsRenderer")) : (t === void 0 && a.classList.remove("NoLyrics"),
        e.Give(new Za(a,Ie,Ie.RomanizedLanguage !== void 0 && qa(Ie.RomanizedLanguage)), "LyricsRenderer"))
    }
    ;
    return i(),
    e.Give(Ue.Connect(i)),
    e.Give(Rt.Connect(i)),
    i
}
  , nn = (a, e, t) => {
    let i = () => {
        Ie?.RomanizedLanguage !== void 0 && en(Ie.RomanizedLanguage, !qa(Ie.RomanizedLanguage))
    }
    ;
    a.addEventListener("click", i);
    let o = ye.Tippy(a, {
        ...ye.TippyProps,
        content: "__WAITING__"
    });
    t.Give( () => o.destroy());
    let l = n => {
        o.setContent(n ? "Disable Romanization" : "Enable Romanization"),
        a.innerHTML = n ? je.EnableRomanization : je.DisableRomanization
    }
      , s = n => {
        a.style.display = n ? "" : "none"
    }
    ;
    t.Give(Ji.Connect( (n, r) => {
        n === Ie?.RomanizedLanguage && (l(r),
        e())
    }
    ));
    {
        let n = () => {
            Ie?.RomanizedLanguage === void 0 ? s(!1) : (l(qa(Ie.RomanizedLanguage)),
            s(!0))
        }
        ;
        n(),
        t.Give(Ue.Connect(n)),
        t.Give(Rt.Connect(n))
    }
}
;
var sh = `
	<div class="BeautifulLyricsPage Contained">
		<div class="Content"></div>
	</div>
`, lh = `
	<div class="ViewControls">
		<button id="Romanize" class="ViewControl"></button>
		<button id="Cinema" class="ViewControl">
			<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon">
				<path d="M14.55 1c.8 0 1.45.65 1.45 1.45V7h-1.5V2.5h-13v11h5.507V15H1.45C.65 15 0 14.35 0 13.55V2.45C0 1.65.65 1 1.45 1h13.1z"></path><path d="M16 9.757a.75.75 0 0 0-.75-.75H9.068L6.56 6.5h1.385a.75.75 0 1 0 0-1.5H4v3.946a.75.75 0 0 0 1.5 0V7.561l3.076 3.075v3.614c0 .414.336.75.75.75h5.925a.75.75 0 0 0 .75-.75V9.757z"></path>
			</svg>
		</button>
		<button id="Close" class="ViewControl">
			<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon">
				<path d="M1.47 1.47a.75.75 0 0 1 1.06 0L8 6.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L9.06 8l5.47 5.47a.75.75 0 1 1-1.06 1.06L8 9.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L6.94 8 1.47 2.53a.75.75 0 0 1 0-1.06z"></path>
			</svg>
		</button>
	</div>
`.trim(), uh = `<span class="NoLyrics">This song doesn't have any Lyrics!</span>`, ch = ".main-view-container__scroll-node-child-spacer, .main-view-container__scroll-node-child", dr, Wt = class {
    Maid = new ke;
    Closed = this.Maid.Destroyed;
    constructor(e, t) {
        let i = Me.entries[Me.entries.length - 2];
        i !== void 0 && i.pathname.startsWith("/BeautifulLyrics") === !1 && (dr = i.pathname);
        let o = this.Maid.Give(Pe(sh))
          , l = this.Maid.Give(Pe(lh));
        yt(o, this.Maid);
        let s = o.querySelector(".Content")
          , n = tn(s, this.Maid, uh);
        {
            let c = l.querySelector("#Cinema")
              , u = l.querySelector("#Romanize")
              , d = l.querySelector("#Close");
            {
                let m = ye.Tippy(d, {
                    ...ye.TippyProps,
                    content: "Close Page"
                });
                this.Maid.Give( () => m.destroy()),
                d.addEventListener("click", () => this.Close())
            }
            {
                let m = ye.Tippy(c, {
                    ...ye.TippyProps,
                    content: "Enter Cinema"
                });
                this.Maid.Give( () => m.destroy()),
                c.addEventListener("click", () => Me.push("/BeautifulLyrics/Fullscreen"))
            }
            nn(u, n, this.Maid)
        }
        let r = e.querySelector(ch);
        t && (e.style.containerType = "inline-size",
        this.Maid.Give( () => e.style.containerType = "")),
        r.appendChild(l),
        e.appendChild(o);
        {
            let c = () => {
                ve === void 0 && this.Close()
            }
            ;
            this.Maid.Give(Ue.Connect(c)),
            this.Maid.Give(Fe(1, c))
        }
    }
    Close() {
        if (dr !== void 0)
            return Me.push(dr);
        Me.push("/")
    }
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var dh = Math.PI
  , mh = dh * 2
  , rn = Math.exp
  , hh = Math.sin
  , gh = Math.cos
  , Ol = Math.sqrt
  , ph = (1 / 3840) ** 2
  , fh = .01 ** 2
  , _l = 1e-5
  , Ja = class {
    DampingRatio;
    Frequency;
    Goal;
    Position;
    Velocity;
    constructor(e, t, i, o=e) {
        if (t * i < 0)
            throw new Error("Spring will not converge");
        this.DampingRatio = i,
        this.Frequency = t,
        this.Goal = o,
        this.Position = e,
        this.Velocity = 0
    }
    Step(e) {
        let t = this.DampingRatio
          , i = this.Frequency * mh
          , o = this.Goal
          , l = this.Position
          , s = this.Velocity;
        if (t === 1) {
            let n = rn(-i * e)
              , r = e * n
              , c = r * i
              , u = n + c
              , d = n - c
              , m = r * i ** 2
              , g = l - o
              , v = g * u + s * r + o
              , S = s * d - g * m;
            return this.Position = v,
            this.Velocity = S,
            v
        } else if (t < 1) {
            let n = i * e, r = rn(-t * n), c = Ol(1 - t ** 2), u = c * n, d = gh(u), m = hh(u), g;
            if (c > _l)
                g = m / c;
            else {
                let q = c ** 2;
                g = n + (n ** 2 * q * q / 20 - q) * n ** 3 / 6
            }
            let v, S = i * c;
            if (S > _l)
                v = m / S;
            else {
                let q = S ** 2;
                v = e + (e ** 2 * q * q / 20 - q) * e ** 3 / 6
            }
            let x = l - o
              , D = (x * (d + g * t) + s * v) * r + o
              , B = (s * (d - g * t) - x * (g * i)) * r;
            return this.Position = D,
            this.Velocity = B,
            D
        } else {
            let n = Ol(t ** 2 - 1)
              , r = -i * (t - n)
              , c = -i * (t + n)
              , u = rn(r * e)
              , d = rn(c * e)
              , m = l - o
              , g = (s - m * r) / (2 * i * n)
              , v = u * (m - g)
              , S = g * d
              , x = v + S + o
              , D = v * r + S * c;
            return this.Position = x,
            this.Velocity = D,
            x
        }
    }
    CanSleep() {
        return !(this.Velocity ** 2 > fh || (this.Goal - this.Position) ** 2 > ph)
    }
    GetGoal() {
        return this.Goal
    }
    SetGoal(e, t) {
        this.Goal = e,
        t && (this.Position = e,
        this.Velocity = 0)
    }
    SetDampingRatio(e) {
        if (this.Frequency * e < 0)
            throw new Error("Spring will not converge");
        this.DampingRatio = e
    }
    SetFrequency(e) {
        if (e * this.DampingRatio < 0)
            throw new Error("Spring will not converge");
        this.Frequency = e
    }
}
;
var yh = {
    Alphabetical: "0",
    RecentlyAdded: "1",
    Creator: "2",
    CustomOrder: "4",
    Recents: "6"
}
  , Fl = (a="Recents", e="", t="") => ze.LibraryAPI.getContents({
    offset: 0,
    limit: 1e4,
    filters: ["2"],
    sortOrder: yh[a],
    textFilter: t,
    includeLocalFiles: !1,
    includeYourEpisodes: !1,
    includeLikedSongs: !1,
    includePreReleases: !1,
    filtersPickedByUser: !1,
    folderUri: e
}).then(i => {
    let o = [];
    for (let l of i.items)
        l.type === "playlist" ? o.push({
            Type: "Playlist",
            Uri: l.uri,
            CanAddTo: l.canAddTo
        }) : l.type === "folder" && o.push({
            Type: "Folder",
            Uri: l.uri,
            Name: l.name
        });
    return o
}
)
  , mr = a => ze.PlaylistAPI.getMetadata(a)
  , Bl = a => ze.PlaylistAPI.getContents(a).then(e => ({
    ItemCount: e.totalLength,
    Items: e.items
}))
  , Rl = (a, e) => ze.PlaylistAPI.add(a, e, {
    after: "end"
})
  , Gl = (a, e) => ze.PlaylistAPI.remove(a, e)
  , Ul = (a, e) => ze.RootlistAPI.createFolder(a, e !== void 0 ? {
    after: {
        uri: e
    }
} : void 0).then(t => t.uri)
  , ql = (a, e) => ze.RootlistAPI.createPlaylist(a, e !== void 0 ? {
    after: {
        uri: e
    }
} : void 0);
var Vl = 5
  , Hl = 2.5
  , kh = 15
  , vh = .5
  , hr = new Map;
{
    let a = () => {
        for (let[e,t] of hr)
            t();
        requestAnimationFrame(a)
    }
    ;
    requestAnimationFrame(a)
}
var wa = class {
    Maid = new ke;
    constructor(e, t, i) {
        let o = e.querySelector("span");
        i && e.classList.add("TextScrollStaticSizing");
        let l;
        i === void 0 && (l = this.Maid.Give(document.createElement("div")),
        l.classList.add("ExtraShift"),
        e.appendChild(l));
        let s = 0
          , n = 0
          , r = 0
          , c = () => {
            let d = n - s
              , m = d / kh;
            if (m >= vh) {
                e.classList.add("TextScroll");
                let g = performance.now() + Vl * 1e3
                  , v = g + m * 1e3
                  , S = v + Hl * 1e3
                  , x = S + m * 1e3;
                hr.set(e, () => {
                    let D = performance.now();
                    if (D < g)
                        return;
                    let B;
                    if (D <= v)
                        B = (D - g) / (v - g);
                    else if (D >= x)
                        e.style.setProperty("--TextScrollShift", null),
                        g = performance.now() + Vl * 1e3,
                        v = g + m * 1e3,
                        S = v + Hl * 1e3,
                        x = S + m * 1e3;
                    else if (D > S)
                        B = 1 - (D - S) / (x - S);
                    else
                        return;
                    B !== void 0 && e.style.setProperty("--TextScrollShift", `${(d + r) * (-(Math.cos(Math.PI * B) - 1) / 2)}px`)
                }
                ),
                this.Maid.Has("Animation") === !1 && this.Maid.Give( () => hr.delete(e), "Animation")
            } else
                this.Maid.Clean("Animation"),
                e.style.setProperty("--TextScrollShift", null),
                e.classList.remove("TextScroll")
        }
          , u = () => {
            let d = globalThis.getComputedStyle(e);
            s = e.offsetWidth - parseFloat(d.paddingLeft) - parseFloat(d.paddingRight),
            n = o.offsetWidth,
            i === void 0 && (e.style.setProperty("--TextWidth", `${n}px`),
            requestAnimationFrame( () => r = l.offsetWidth)),
            c()
        }
        ;
        this.Maid.Give(new ResizeObserver(u)).observe(t),
        this.Maid.Give(new MutationObserver(u)).observe(o, {
            childList: !0,
            characterData: !0,
            subtree: !0
        })
    }
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var He = class {
    Maid = new ke;
    IsPressing = !1;
    Pressed;
    Released;
    Clicked;
    ContextMenuRequested;
    constructor(e, t=!1, i) {
        e.setAttribute("Button", "");
        let[o,l,s,n] = this.Maid.GiveItems(new Le, new Le, new Le, new Le);
        this.Pressed = o.GetEvent(),
        this.Released = l.GetEvent(),
        this.Clicked = s.GetEvent(),
        this.ContextMenuRequested = n.GetEvent();
        {
            if (t) {
                let u = d => {
                    d.target !== e && d.target.hasAttribute("Button") || e.classList.contains("Selected") === !1 && e.classList.contains("NoFunctionality") || (d.preventDefault(),
                    n.Fire(d))
                }
                ;
                e.addEventListener("contextmenu", u),
                this.Maid.Give( () => e.removeEventListener("contextmenu", u))
            }
            let r = u => {
                if (u.button === 0) {
                    {
                        if (u.target !== e && u.target.hasAttribute("Button"))
                            return;
                        if (e.classList.contains("NoFunctionality"))
                            return
                    }
                    this.IsPressing = !0,
                    e.classList.add("Pressed"),
                    o.Fire(u)
                }
            }
            ;
            e.addEventListener("mousedown", r),
            this.Maid.Give( () => e.removeEventListener("mousedown", r));
            let c = u => {
                this.IsPressing && (this.IsPressing = !1,
                e.classList.remove("Pressed"),
                l.Fire(u),
                s.Fire(u))
            }
            ;
            if (i)
                document.addEventListener("mouseup", c),
                this.Maid.Give( () => document.removeEventListener("mouseup", c));
            else {
                e.addEventListener("mouseup", c);
                let u = d => {
                    this.IsPressing && (this.IsPressing = !1,
                    e.classList.remove("Pressed"),
                    l.Fire(d))
                }
                ;
                e.addEventListener("mouseleave", u),
                this.Maid.Give( () => {
                    e.removeEventListener("mouseup", c),
                    e.removeEventListener("mouseleave", u)
                }
                )
            }
        }
    }
    IsPressed() {
        return this.IsPressing
    }
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var bh = (a, e) => {
    let t = a.getBoundingClientRect();
    return Math.min(1, Math.max(0, (e.clientX - t.left) / t.width))
}
  , kt = class {
    Maid = new ke;
    IsActiveChanged;
    ProgressChanged;
    GetHitBox;
    IsActive;
    GetProgress;
    SetProgress;
    constructor(e, t=1, i, o=0) {
        let l = e.querySelector(".Hitbox") ?? e;
        this.GetHitBox = () => l;
        let[s,n] = this.Maid.GiveItems(new Le, new Le);
        this.IsActiveChanged = s.GetEvent(),
        this.ProgressChanged = n.GetEvent();
        let r, c = !1, u = (g=r, v) => {
            c !== !1 && (this.Maid.Clean("MouseDrag"),
            e.classList.toggle("Active", !1),
            c = !1,
            r = void 0,
            s.Fire(!1, g, v ? void 0 : d))
        }
        , d = 0, m = (g, v) => {
            d = i === void 0 || v === void 0 ? g : Math.floor(g / i) * i,
            e.style.setProperty("--SliderProgress", ((d - o) / (t - o)).toString()),
            n.Fire(d, v)
        }
        ;
        this.IsActive = () => c,
        this.GetProgress = () => d,
        this.SetProgress = (g, v) => {
            c && u(void 0, !0),
            v !== void 0 && (t = v),
            m(Math.max(o, Math.min(g, t)))
        }
        ;
        {
            let g = x => {
                r = x,
                m(o + bh(e, x) * (t - o), !0)
            }
              , v = () => {
                globalThis.addEventListener("mousemove", g),
                this.Maid.Give( () => globalThis.removeEventListener("mousemove", g), "MouseDrag")
            }
              , S = this.Maid.Give(new He(l,!1,!0));
            S.Pressed.Connect(x => {
                c = !0,
                s.Fire(!0, x, d),
                e.classList.toggle("Active", !0),
                g(x),
                this.Maid.Give(Be(v), "MouseDrag")
            }
            ),
            S.Released.Connect(u)
        }
    }
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var $t = {
    FullscreenOpen: `
		<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 Svg-img-16-icon">
			<path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z">
			</path>
		</svg>
	`,
    LyricsPage: `
		<svg class="Svg-sc-ytk21e-0 Svg-img-16-icon LyricsPageIcon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
			<g>
				<path d="M11.22 23.92 c0 -0.01 -0.02 -0.03 -0.05 -0.04 -0.03 -0.01 -0.07 -0.06 -0.09 -0.15 -0.03 -0.08 -0.06 -0.15 -0.07 -0.16 -0.01 -0.01 -0.03 -0.12 -0.05 -0.25 -0.02 -0.13 -0.04 -0.25 -0.06 -0.27 -0.01 -0.02 -0.02 -0.04 -0.01 -0.04 0.01 -0.01 0 -0.06 -0.02 -0.10 -0.02 -0.05 -0.05 -0.13 -0.06 -0.18 -0.01 -0.06 -0.03 -0.10 -0.04 -0.10 -0.01 0 -0.03 -0.05 -0.05 -0.11 -0.02 -0.06 -0.05 -0.11 -0.06 -0.11 -0.02 0 -0.02 -0.01 -0.01 -0.02 0.02 -0.02 0 -0.04 -0.16 -0.22 -0.06 -0.07 -0.15 -0.14 -0.19 -0.16 -0.04 -0.02 -0.08 -0.04 -0.08 -0.05 0 -0.01 -0.05 -0.03 -0.11 -0.05 -0.06 -0.02 -0.11 -0.04 -0.11 -0.05 0 -0.02 -0.16 -0.07 -0.29 -0.09 -0.06 -0.01 -0.10 -0.03 -0.10 -0.04 0 -0.01 -0.08 -0.03 -0.18 -0.05 -0.10 -0.02 -0.19 -0.04 -0.21 -0.06 -0.01 -0.01 -0.10 -0.04 -0.19 -0.07 -0.09 -0.03 -0.17 -0.06 -0.17 -0.06 0 -0.01 -0.04 -0.03 -0.09 -0.05 -0.05 -0.02 -0.12 -0.06 -0.17 -0.10 -0.08 -0.06 -0.08 -0.08 -0.08 -0.21 0 -0.12 0.01 -0.15 0.07 -0.19 0.04 -0.03 0.08 -0.06 0.08 -0.07 0.01 -0.01 0.10 -0.03 0.21 -0.05 0.11 -0.02 0.20 -0.04 0.21 -0.05 0.01 -0.01 0.18 -0.04 0.39 -0.07 0.21 -0.02 0.39 -0.05 0.39 -0.07 0.01 -0.01 0.06 -0.03 0.12 -0.04 0.17 -0.03 0.35 -0.19 0.45 -0.37 0.03 -0.06 0.06 -0.11 0.07 -0.11 0.02 -0.01 0.11 -0.19 0.10 -0.22 -0 -0.01 0.01 -0.02 0.02 -0.02 0.01 0 0.04 -0.06 0.06 -0.13 0.02 -0.07 0.04 -0.13 0.06 -0.13 0.01 0 0.03 -0.06 0.05 -0.12 0.02 -0.07 0.04 -0.14 0.06 -0.16 0.02 -0.02 0.02 -0.04 0.01 -0.06 -0.01 -0.01 -0.01 -0.03 0.01 -0.03 0.01 -0 0.04 -0.10 0.06 -0.22 0.02 -0.12 0.04 -0.22 0.05 -0.22 0.01 -0.01 0.03 -0.08 0.06 -0.16 0.06 -0.18 0.14 -0.27 0.25 -0.25 0.05 0.01 0.10 0.03 0.12 0.06 0.02 0.03 0.04 0.06 0.04 0.07 0.01 0.01 0.03 0.08 0.05 0.15 0.02 0.07 0.04 0.14 0.06 0.14 0.01 0 0.01 0.03 0 0.07 -0.01 0.04 0 0.07 0.02 0.07 0.02 0 0.04 0.08 0.06 0.18 0.02 0.10 0.04 0.18 0.06 0.18 0.01 0 0.02 0.02 0.02 0.06 0 0.07 0.08 0.35 0.11 0.37 0.01 0.01 0.04 0.06 0.06 0.11 0.02 0.05 0.06 0.13 0.09 0.17 0.06 0.09 0.42 0.46 0.45 0.46 0.01 0 0.06 0.03 0.11 0.07 0.05 0.04 0.13 0.07 0.18 0.08 0.05 0.01 0.09 0.02 0.09 0.03 0 0.03 0.34 0.11 0.44 0.11 0.04 0 0.08 0.01 0.08 0.03 0 0.02 0.03 0.03 0.07 0.03 0.11 0 0.40 0.06 0.40 0.08 0 0.01 0.05 0.03 0.11 0.05 0.19 0.06 0.22 0.25 0.08 0.39 -0.08 0.08 -0.31 0.20 -0.43 0.22 -0.05 0.01 -0.13 0.04 -0.19 0.07 -0.06 0.03 -0.17 0.06 -0.24 0.07 -0.08 0.01 -0.14 0.03 -0.14 0.04 0 0.01 -0.04 0.03 -0.10 0.04 -0.11 0.02 -0.28 0.07 -0.30 0.09 -0.01 0.01 -0.06 0.03 -0.12 0.05 -0.06 0.02 -0.11 0.04 -0.11 0.05 0 0.01 -0.05 0.03 -0.11 0.05 -0.12 0.04 -0.37 0.25 -0.33 0.28 0.03 0.02 0.04 0.11 0.02 0.11 -0.01 0 -0.03 0.04 -0.05 0.09 -0.02 0.05 -0.04 0.09 -0.06 0.09 -0.02 0 -0.02 0.01 -0.01 0.03 0.01 0.02 0.01 0.03 -0.01 0.03 -0.02 0 -0.04 0.08 -0.06 0.17 -0.02 0.09 -0.04 0.17 -0.05 0.17 -0.01 0 -0.03 0.11 -0.05 0.24 -0.02 0.13 -0.04 0.24 -0.06 0.24 -0.01 0 -0.02 0.03 -0.01 0.07 0.01 0.04 0.01 0.07 -0 0.07 -0.01 0 -0.03 0.05 -0.05 0.11 -0.04 0.14 -0.14 0.23 -0.24 0.23 -0.04 0 -0.08 -0.01 -0.08 -0.02z"/>
				<path d="M19.22 20.43 c0 -0.01 -0.03 -0.03 -0.06 -0.04 -0.07 -0.02 -0.23 -0.17 -0.23 -0.21 0 -0.02 -0.02 -0.05 -0.04 -0.07 -0.04 -0.04 -0.12 -0.40 -0.12 -0.54 0 -0.05 -0.01 -0.09 -0.03 -0.09 -0.02 0 -0.03 -0.09 -0.03 -0.20 0 -0.21 -0.04 -0.40 -0.08 -0.40 -0.01 0 -0.04 -0.04 -0.07 -0.10 -0.03 -0.06 -0.06 -0.11 -0.07 -0.12 -0.01 -0.01 -0.03 -0.16 -0.05 -0.33 -0.02 -0.17 -0.04 -0.32 -0.05 -0.34 -0.01 -0.01 -0.02 -0.04 -0.01 -0.06 0.01 -0.02 0 -0.04 -0.01 -0.04 -0.02 0 -0.04 -0.05 -0.06 -0.11 -0.02 -0.06 -0.04 -0.11 -0.06 -0.11 -0.01 0 -0.02 -0.02 -0.02 -0.04 0 -0.02 -0.03 -0.06 -0.06 -0.08 -0.03 -0.02 -0.05 -0.04 -0.03 -0.04 0.05 0 -0.24 -0.27 -0.40 -0.37 -0.09 -0.06 -0.17 -0.12 -0.17 -0.13 0 -0.01 -0.02 -0.02 -0.03 -0.02 -0.02 0 -0.10 -0.03 -0.18 -0.08 -0.08 -0.04 -0.19 -0.08 -0.24 -0.09 -0.04 -0.01 -0.10 -0.03 -0.12 -0.05 -0.02 -0.02 -0.11 -0.05 -0.21 -0.07 -0.10 -0.02 -0.19 -0.04 -0.21 -0.06 -0.01 -0.01 -0.14 -0.03 -0.28 -0.05 -0.14 -0.02 -0.27 -0.04 -0.30 -0.05 -0.03 -0.01 -0.13 -0.03 -0.22 -0.04 -0.24 -0.02 -0.50 -0.07 -0.50 -0.09 0 -0.01 -0.05 -0.03 -0.11 -0.05 -0.11 -0.03 -0.26 -0.13 -0.26 -0.18 0 -0.02 -0.02 -0.03 -0.04 -0.04 -0.06 -0.02 -0.10 -0.20 -0.08 -0.34 0.02 -0.13 0.14 -0.30 0.21 -0.30 0.02 0 0.05 -0.02 0.07 -0.04 0.03 -0.03 0.14 -0.05 0.38 -0.07 0.19 -0.01 0.34 -0.04 0.35 -0.05 0.01 -0.02 0.03 -0.03 0.07 -0.03 0.08 0 0.41 -0.08 0.50 -0.12 0.04 -0.02 0.12 -0.04 0.18 -0.05 0.05 -0.01 0.10 -0.03 0.10 -0.04 0 -0.01 0.07 -0.03 0.16 -0.05 0.09 -0.02 0.17 -0.05 0.19 -0.06 0.02 -0.02 0.08 -0.05 0.15 -0.07 0.07 -0.02 0.14 -0.05 0.17 -0.07 0.03 -0.02 0.10 -0.05 0.17 -0.07 0.06 -0.02 0.11 -0.04 0.11 -0.05 0 -0.01 0.05 -0.03 0.11 -0.05 0.06 -0.02 0.11 -0.05 0.12 -0.07 0.01 -0.02 0.05 -0.05 0.09 -0.06 0.04 -0.02 0.08 -0.05 0.08 -0.07 0 -0.02 0.01 -0.04 0.03 -0.04 0.01 0 0.04 -0.05 0.06 -0.11 0.02 -0.06 0.04 -0.13 0.06 -0.14 0.02 -0.02 0.04 -0.10 0.06 -0.18 0.02 -0.08 0.04 -0.15 0.06 -0.15 0.01 0 0.04 -0.06 0.05 -0.14 0.02 -0.08 0.04 -0.16 0.06 -0.17 0.02 -0.02 0.02 -0.05 0.01 -0.07 -0.01 -0.02 -0.01 -0.04 0.01 -0.04 0.01 0 0.04 -0.07 0.06 -0.16 0.02 -0.09 0.04 -0.16 0.05 -0.16 0.01 0 0.04 -0.11 0.07 -0.25 0.03 -0.14 0.06 -0.25 0.07 -0.25 0.01 0 0.03 -0.09 0.05 -0.19 0.02 -0.11 0.04 -0.21 0.06 -0.22 0.01 -0.02 0.02 -0.05 0.01 -0.07 -0.01 -0.02 -0 -0.04 0.01 -0.04 0.02 0 0.03 -0.03 0.03 -0.07 0 -0.10 0.05 -0.27 0.08 -0.27 0.02 0 0.03 -0.02 0.03 -0.04 0 -0.02 0.02 -0.07 0.05 -0.10 0.03 -0.04 0.04 -0.07 0.03 -0.08 -0.01 -0.01 -0 -0.02 0.01 -0.02 0.02 0 0.05 -0.02 0.08 -0.05 0.06 -0.07 0.26 -0.12 0.38 -0.10 0.10 0.02 0.20 0.07 0.20 0.10 0 0.01 0.02 0.04 0.05 0.07 0.03 0.03 0.06 0.09 0.07 0.14 0.01 0.05 0.03 0.09 0.04 0.09 0.01 0 0.02 0.08 0.02 0.18 0 0.21 0.07 0.79 0.10 0.83 0.01 0.02 0.03 0.12 0.05 0.22 0.02 0.10 0.04 0.19 0.05 0.19 0.01 0 0.03 0.07 0.05 0.17 0.02 0.09 0.06 0.21 0.08 0.27 0.03 0.06 0.06 0.14 0.07 0.19 0.01 0.04 0.03 0.08 0.04 0.08 0.02 0 0.02 0.01 0.01 0.02 -0.02 0.03 0.09 0.25 0.13 0.28 0.02 0.01 0.03 0.04 0.03 0.06 0 0.02 0.08 0.11 0.18 0.20 0.18 0.18 0.53 0.37 0.80 0.45 0.07 0.02 0.12 0.04 0.12 0.05 0 0.01 0.11 0.04 0.24 0.07 0.13 0.03 0.24 0.06 0.24 0.07 0 0.01 0.08 0.03 0.18 0.05 0.10 0.02 0.18 0.04 0.19 0.05 0.01 0.01 0.13 0.04 0.26 0.07 0.14 0.02 0.26 0.05 0.28 0.07 0.02 0.01 0.12 0.03 0.22 0.05 0.11 0.02 0.21 0.04 0.22 0.05 0.02 0.01 0.08 0.03 0.16 0.05 0.13 0.03 0.30 0.17 0.30 0.24 0 0.02 0.01 0.03 0.03 0.03 0.02 0 0.03 0.06 0.03 0.13 0 0.07 -0.01 0.13 -0.02 0.13 -0.01 0 -0.03 0.03 -0.04 0.06 -0.02 0.08 -0.18 0.24 -0.26 0.27 -0.03 0.01 -0.11 0.04 -0.17 0.07 -0.09 0.04 -0.22 0.06 -0.58 0.08 -0.25 0.02 -0.47 0.03 -0.48 0.04 -0.01 0.01 -0.10 0.03 -0.21 0.05 -0.11 0.02 -0.20 0.04 -0.21 0.06 -0.01 0.01 -0.09 0.04 -0.19 0.07 -0.10 0.03 -0.18 0.06 -0.18 0.06 0 0.01 -0.05 0.03 -0.12 0.05 -0.07 0.02 -0.12 0.04 -0.12 0.06 0 0.01 -0.06 0.04 -0.13 0.07 -0.07 0.03 -0.13 0.06 -0.13 0.07 0 0.01 -0.03 0.03 -0.06 0.04 -0.03 0.01 -0.10 0.05 -0.14 0.08 -0.04 0.03 -0.09 0.06 -0.11 0.06 -0.02 0 -0.04 0.02 -0.06 0.05 -0.02 0.03 -0.04 0.05 -0.06 0.05 -0.04 0 -0.16 0.13 -0.19 0.21 -0.01 0.03 -0.03 0.06 -0.04 0.06 -0.01 0 -0.03 0.04 -0.04 0.09 -0.01 0.04 -0.03 0.11 -0.06 0.14 -0.02 0.03 -0.03 0.07 -0.02 0.08 0.01 0.02 0.01 0.03 -0.01 0.03 -0.02 0 -0.03 0.04 -0.04 0.10 -0.01 0.05 -0.03 0.13 -0.05 0.18 -0.04 0.10 -0.12 0.40 -0.12 0.48 0 0.03 -0.01 0.06 -0.02 0.06 -0.01 0 -0.04 0.09 -0.06 0.21 -0.02 0.11 -0.04 0.22 -0.06 0.23 -0.01 0.02 -0.02 0.05 -0.01 0.07 0.01 0.02 0.01 0.04 -0.01 0.04 -0.02 0 -0.08 0.41 -0.08 0.56 0 0.05 -0.01 0.09 -0.02 0.09 -0.01 0 -0.03 0.06 -0.04 0.12 -0.01 0.07 -0.04 0.14 -0.06 0.17 -0.02 0.03 -0.03 0.05 -0.02 0.05 0.01 0 -0.02 0.02 -0.06 0.05 -0.05 0.03 -0.10 0.05 -0.12 0.05 -0.02 0 -0.04 0.01 -0.04 0.03 0 0.02 -0.06 0.03 -0.13 0.03 -0.07 0 -0.13 -0.01 -0.13 -0.02z"/>
				<path d="M5.69 18.57 c-1.37 -0.14 -2.43 -1.12 -2.66 -2.44 -0.06 -0.35 -0.04 -0.89 0.05 -1.24 0.08 -0.30 0.27 -0.72 0.45 -0.96 0.07 -0.09 1.61 -1.86 3.43 -3.93 l3.30 -3.76 0.04 -0.28 c0.23 -1.39 1.14 -2.63 2.42 -3.29 0.35 -0.18 0.88 -0.37 1.27 -0.44 0.37 -0.07 1.29 -0.07 1.63 -0 0.73 0.14 1.37 0.42 1.93 0.85 2.02 1.52 2.43 4.38 0.90 6.41 -0.67 0.89 -1.69 1.52 -2.76 1.72 -0.16 0.03 -0.31 0.06 -0.34 0.07 -0.03 0.01 -1.75 1.50 -3.82 3.33 -2.07 1.82 -3.82 3.35 -3.89 3.40 -0.29 0.22 -0.72 0.40 -1.10 0.49 -0.23 0.05 -0.67 0.08 -0.85 0.06z m0.56 -1.60 c0.17 -0.04 0.36 -0.13 0.49 -0.23 0.04 -0.03 1.66 -1.45 3.60 -3.15 l3.51 -3.09 -1.39 -1.39 c-0.76 -0.76 -1.40 -1.39 -1.41 -1.39 -0.01 0 -1.17 1.31 -2.58 2.91 -3.75 4.27 -3.70 4.21 -3.76 4.32 -0.29 0.57 -0.20 1.21 0.23 1.63 0.35 0.34 0.83 0.48 1.30 0.37z m9.21 -7.28 c0.49 -0.09 1.08 -0.41 1.47 -0.80 1.06 -1.05 1.19 -2.74 0.32 -3.92 -0.17 -0.22 -0.52 -0.57 -0.73 -0.71 -1.52 -1.03 -3.60 -0.48 -4.40 1.16 -0.13 0.27 -0.26 0.67 -0.26 0.80 0 0.06 0.31 0.38 1.71 1.78 1.09 1.09 1.73 1.71 1.76 1.71 0.02 -0.01 0.08 -0.02 0.13 -0.03z"/>
				<path d="M3.83 8.12 c-0.09 -0.08 -0.19 -0.29 -0.23 -0.52 -0.02 -0.10 -0.04 -0.19 -0.05 -0.19 -0.01 0 -0.01 -0.04 -0.01 -0.09 0.01 -0.05 0 -0.10 -0.01 -0.11 -0.01 -0.01 -0.04 -0.13 -0.06 -0.28 -0.02 -0.14 -0.04 -0.27 -0.06 -0.28 -0.01 -0.01 -0.02 -0.04 -0.01 -0.06 0.01 -0.02 0 -0.05 -0.01 -0.07 -0.01 -0.02 -0.03 -0.08 -0.04 -0.14 -0.01 -0.06 -0.03 -0.13 -0.05 -0.14 -0.02 -0.02 -0.05 -0.07 -0.07 -0.12 -0.02 -0.05 -0.05 -0.10 -0.07 -0.11 -0.02 -0.01 -0.03 -0.03 -0.03 -0.05 0 -0.02 -0.05 -0.08 -0.11 -0.13 -0.06 -0.06 -0.13 -0.12 -0.15 -0.14 -0.02 -0.02 -0.08 -0.05 -0.14 -0.07 -0.06 -0.02 -0.10 -0.04 -0.10 -0.05 0 -0.01 -0.05 -0.03 -0.11 -0.05 -0.06 -0.02 -0.15 -0.05 -0.19 -0.07 -0.04 -0.02 -0.15 -0.05 -0.24 -0.07 -0.09 -0.02 -0.16 -0.04 -0.17 -0.05 -0.01 -0.01 -0.09 -0.03 -0.20 -0.05 -0.10 -0.02 -0.20 -0.04 -0.21 -0.06 -0.02 -0.01 -0.11 -0.03 -0.21 -0.05 -0.10 -0.02 -0.23 -0.05 -0.29 -0.08 -0.06 -0.03 -0.14 -0.06 -0.19 -0.07 -0.12 -0.02 -0.27 -0.17 -0.27 -0.26 0 -0.04 -0.02 -0.07 -0.03 -0.08 -0.03 -0.01 -0.03 -0.02 0 -0.02 0.02 -0 0.03 -0.02 0.03 -0.05 0 -0.08 0.08 -0.22 0.12 -0.22 0.02 0 0.04 -0.01 0.04 -0.02 0 -0.03 0.16 -0.08 0.31 -0.10 0.07 -0.01 0.13 -0.02 0.13 -0.03 0 -0.01 0.12 -0.04 0.28 -0.07 0.15 -0.03 0.28 -0.06 0.28 -0.06 0 -0.01 0.11 -0.03 0.24 -0.05 0.13 -0.02 0.24 -0.04 0.24 -0.05 0 -0.01 0.09 -0.03 0.20 -0.05 0.19 -0.03 0.26 -0.05 0.40 -0.14 0.07 -0.04 0.29 -0.25 0.29 -0.28 0 -0.01 0.02 -0.05 0.05 -0.09 0.03 -0.04 0.04 -0.08 0.03 -0.09 -0.01 -0.01 -0 -0.02 0.01 -0.02 0.02 0 0.04 -0.05 0.06 -0.11 0.02 -0.06 0.05 -0.13 0.07 -0.14 0.02 -0.02 0.03 -0.07 0.03 -0.11 0 -0.04 0.02 -0.11 0.04 -0.15 0.02 -0.04 0.04 -0.09 0.04 -0.11 -0 -0.02 0 -0.05 0.01 -0.07 0.02 -0.06 0.07 -0.38 0.07 -0.47 0 -0.05 0.01 -0.08 0.03 -0.08 0.02 0 0.03 -0.04 0.02 -0.11 -0.01 -0.06 -0 -0.11 0.01 -0.11 0.01 0 0.03 -0.09 0.05 -0.20 0.02 -0.11 0.04 -0.20 0.05 -0.20 0.01 0 0.03 -0.04 0.05 -0.10 0.04 -0.10 0.16 -0.24 0.21 -0.24 0.02 0 0.03 -0.01 0.03 -0.03 0 -0.04 0.18 -0.03 0.23 0.01 0.12 0.10 0.20 0.18 0.18 0.18 -0.01 0 0 0.03 0.02 0.06 0.02 0.03 0.05 0.10 0.06 0.16 0.01 0.05 0.03 0.10 0.04 0.10 0.01 0 0.02 0.02 0.01 0.04 -0.01 0.02 -0.01 0.06 0.01 0.07 0.02 0.02 0.04 0.14 0.06 0.26 0.02 0.13 0.04 0.23 0.05 0.23 0.01 0 0.03 0.11 0.05 0.24 0.02 0.13 0.04 0.24 0.05 0.24 0.01 0 0.02 0.03 0.01 0.07 -0.01 0.04 0 0.07 0.02 0.07 0.02 0 0.03 0.05 0.04 0.11 0.01 0.06 0.03 0.12 0.05 0.14 0.02 0.02 0.05 0.08 0.08 0.14 0.05 0.13 0.06 0.14 0.24 0.34 0.07 0.08 0.14 0.14 0.16 0.14 0.02 0 0.04 0.02 0.06 0.03 0.03 0.04 0.29 0.17 0.43 0.21 0.07 0.02 0.13 0.04 0.14 0.05 0.02 0.01 0.11 0.03 0.21 0.05 0.10 0.02 0.21 0.04 0.24 0.06 0.03 0.01 0.18 0.04 0.33 0.07 0.15 0.02 0.29 0.05 0.30 0.06 0.02 0.01 0.08 0.04 0.15 0.05 0.13 0.04 0.27 0.14 0.29 0.23 0.01 0.03 0.03 0.06 0.04 0.06 0.01 0 0.02 0.08 0.02 0.17 0 0.10 -0.01 0.17 -0.03 0.17 -0.01 0 -0.03 0.02 -0.03 0.04 0 0.02 -0.03 0.06 -0.07 0.07 -0.04 0.02 -0.08 0.04 -0.09 0.05 -0.01 0.01 -0.11 0.04 -0.24 0.06 -0.12 0.03 -0.23 0.06 -0.25 0.07 -0.01 0.01 -0.13 0.03 -0.26 0.05 -0.13 0.02 -0.24 0.04 -0.25 0.05 -0.01 0.01 -0.11 0.03 -0.22 0.05 -0.12 0.02 -0.24 0.05 -0.29 0.07 -0.04 0.02 -0.13 0.05 -0.18 0.07 -0.06 0.02 -0.11 0.04 -0.12 0.05 -0.01 0.01 -0.04 0.03 -0.08 0.06 -0.10 0.06 -0.34 0.29 -0.39 0.38 -0.02 0.04 -0.05 0.09 -0.07 0.11 -0.02 0.02 -0.05 0.08 -0.07 0.15 -0.02 0.07 -0.04 0.12 -0.05 0.12 -0.01 0 -0.03 0.07 -0.05 0.16 -0.02 0.09 -0.04 0.16 -0.06 0.16 -0.01 0 -0.02 0.03 -0.01 0.07 0.01 0.04 0.01 0.07 -0.01 0.07 -0.01 0 -0.03 0.09 -0.05 0.21 -0.02 0.11 -0.04 0.22 -0.05 0.23 -0.01 0.02 -0.03 0.11 -0.05 0.21 -0.02 0.10 -0.04 0.20 -0.06 0.22 -0.02 0.02 -0.02 0.05 -0.01 0.07 0.01 0.02 0 0.04 -0.01 0.04 -0.01 0 -0.03 0.05 -0.04 0.11 -0.01 0.06 -0.05 0.14 -0.10 0.20 -0.08 0.08 -0.09 0.09 -0.26 0.09 -0.14 0 -0.19 -0.01 -0.25 -0.06z"/>
			</g>
		</svg>
	`
};
var wh = 2 * Math.PI / 3
  , gr = (a, e, t) => e + t * a
  , pr = (a, e, t) => e + t * (1 - Math.cos(a * Math.PI / 2))
  , Oe = (a, e, t) => e + t * Math.sin(a * Math.PI / 2)
  , La = (a, e, t) => e + t * (a === 0 ? 0 : a === 1 ? 1 : Math.pow(2, -10 * a) * Math.sin((a * 10 - .75) * wh) + 1)
  , fr = (a, e, t, i, o, l) => {
    let s = t.Get(i);
    if (s !== void 0 && s.CleanUp(),
    a.Type === "None")
        return;
    if (a.Type === "Static") {
        for (let D of a.Values) {
            let B = e[D.Target];
            B.PropertyValues[D.Property] = D.Value,
            B.Element.style.setProperty(`--${D.Property}`, `${D.Value}`)
        }
        return
    }
    if (s === void 0 && (s = t.Give(new ke, i)),
    a.InitialValues !== void 0 && (a.InitialValues.Condition === void 0 || a.InitialValues.Condition(o)))
        for (let D of a.InitialValues.Values) {
            let B = e[D.Target];
            B.PropertyValues[D.Property] = D.Value,
            B.Element.style.setProperty(`--${D.Property}`, `${D.Value}`)
        }
    let n = [];
    for (let D of a.Tasks)
        (D.Condition === void 0 || D.Condition(o)) && n.push(D);
    let r = n.length;
    for (let D of n)
        e[D.Target].Element.classList.toggle("Animating", !0);
    s.Give( () => {
        for (let D of n)
            e[D.Target].Element.classList.toggle("Animating", !1)
    }
    );
    let c = [], u = [], d = new Array(r).fill(!1), m = r, g;
    if (a.FinalValues !== void 0) {
        let D = !1;
        g = () => {
            if (!D && (D = !0,
            !(a.FinalValues.Condition !== void 0 && a.FinalValues.Condition(o) === !1)))
                for (let B of a.FinalValues.Values) {
                    let q = e[B.Target];
                    q.PropertyValues[B.Property] = B.Value,
                    q.Element.style.setProperty(`--${B.Property}`, `${B.Value}`)
                }
        }
        ,
        s.Give(g)
    }
    let v = performance.now()
      , S = a.Duration * 1e3
      , x = () => {
        let D = Math.min((performance.now() - v) / S, 1);
        for (let B = 0; B < r; B += 1) {
            if (d[B])
                continue;
            let q = n[B];
            if (D < q.StartProgress)
                continue;
            let K = e[q.Target];
            if (D >= q.EndProgress) {
                d[B] = !0,
                m -= 1,
                K.PropertyValues[q.Property] = q.To,
                K.Element.style.setProperty(`--${q.Property}`, `${q.To}`);
                continue
            }
            let te = c[B]
              , W = u[B];
            te === void 0 && (te = K.PropertyValues[q.Property],
            W = q.To - te,
            c.push(te),
            u.push(W));
            let R = q.GetValue((D - q.StartProgress) / (q.EndProgress - q.StartProgress), te, W, q.To);
            K.PropertyValues[q.Property] = R,
            K.Element.style.setProperty(`--${q.Property}`, `${R}`)
        }
        if (m > 0) {
            if (D === 1)
                throw new Error("Failed to complete Animation because there were still Tasks running");
            s.Give(Ha(x))
        } else
            g !== void 0 && g(),
            s.CleanUp(),
            a.OnCompletion !== void 0 && a.OnCompletion(o),
            l !== void 0 && l()
    }
    ;
    x()
}
;
var $e = {
    Outline: {
        Opacity: 1,
        Scale: 1
    },
    Filled: {
        Opacity: 1,
        Scale: 1
    },
    LeftPiece: {
        Rotation: 0,
        XOffset: 0,
        YOffset: 0
    },
    RightPiece: {
        Rotation: 0,
        XOffset: 0,
        YOffset: 0
    }
};
var Lh = [{
    Target: "Filled",
    Property: "Opacity",
    Value: $e.Filled.Opacity
}, {
    Target: "Filled",
    Property: "Scale",
    Value: $e.Filled.Scale
}, {
    Target: "LeftPiece",
    Property: "Rotation",
    Value: $e.LeftPiece.Rotation
}, {
    Target: "LeftPiece",
    Property: "XOffset",
    Value: $e.LeftPiece.XOffset
}, {
    Target: "LeftPiece",
    Property: "YOffset",
    Value: $e.LeftPiece.YOffset
}, {
    Target: "RightPiece",
    Property: "Rotation",
    Value: $e.RightPiece.Rotation
}, {
    Target: "RightPiece",
    Property: "XOffset",
    Value: $e.RightPiece.XOffset
}, {
    Target: "RightPiece",
    Property: "YOffset",
    Value: $e.RightPiece.YOffset
}]
  , Yl = {
    Default: {
        Type: "Static",
        Values: Lh
    },
    Hover: {
        Type: "Live",
        Duration: .6,
        Tasks: [{
            Condition: a => a.LastAnimationStates.includes("Pressed"),
            StartProgress: 0,
            EndProgress: .2,
            Target: "Filled",
            Property: "Scale",
            To: 1,
            GetValue: La
        }, {
            StartProgress: 0,
            EndProgress: 1,
            Target: "LeftPiece",
            Property: "Rotation",
            To: -2.5,
            GetValue: La
        }, {
            StartProgress: 0,
            EndProgress: 1,
            Target: "RightPiece",
            Property: "Rotation",
            To: 2.5,
            GetValue: La
        }]
    },
    Pressed: {
        Type: "Live",
        Duration: .075,
        Tasks: [{
            StartProgress: 0,
            EndProgress: 1,
            Target: "Filled",
            Property: "Scale",
            To: .5,
            GetValue: Oe
        }, {
            StartProgress: 0,
            EndProgress: .5,
            Target: "LeftPiece",
            Property: "Rotation",
            To: -10,
            GetValue: Oe
        }, {
            StartProgress: 0,
            EndProgress: .5,
            Target: "RightPiece",
            Property: "Rotation",
            To: 10,
            GetValue: Oe
        }],
        OnCompletion: a => a.Maid.Give(Fe(a.LikeStateUpdateShimmerAppearsAfter, () => a.Loading.classList.toggle("Full", !0)), "LikeStateLoading")
    },
    Unhovered: {
        Type: "Live",
        Duration: .075,
        InitialValues: {
            Values: [{
                Target: "LeftPiece",
                Property: "XOffset",
                Value: 0
            }, {
                Target: "LeftPiece",
                Property: "YOffset",
                Value: 0
            }, {
                Target: "RightPiece",
                Property: "XOffset",
                Value: 0
            }, {
                Target: "RightPiece",
                Property: "YOffset",
                Value: 0
            }]
        },
        Tasks: [{
            Condition: a => a.LastAnimationStates.includes("Pressed"),
            StartProgress: 0,
            EndProgress: .75,
            Target: "Filled",
            Property: "Scale",
            To: 1,
            GetValue: Oe
        }, {
            StartProgress: 0,
            EndProgress: 1,
            Target: "LeftPiece",
            Property: "Rotation",
            To: 0,
            GetValue: pr
        }, {
            StartProgress: 0,
            EndProgress: 1,
            Target: "RightPiece",
            Property: "Rotation",
            To: 0,
            GetValue: pr
        }]
    },
    SwitchedTo: {
        Type: "Live",
        Duration: .55,
        InitialValues: {
            Values: [{
                Target: "Filled",
                Property: "Opacity",
                Value: 0
            }, {
                Target: "Filled",
                Property: "Scale",
                Value: .75
            }, {
                Target: "LeftPiece",
                Property: "Rotation",
                Value: 0
            }, {
                Target: "LeftPiece",
                Property: "XOffset",
                Value: 0
            }, {
                Target: "LeftPiece",
                Property: "YOffset",
                Value: 0
            }, {
                Target: "RightPiece",
                Property: "Rotation",
                Value: 0
            }, {
                Target: "RightPiece",
                Property: "XOffset",
                Value: 0
            }, {
                Target: "RightPiece",
                Property: "YOffset",
                Value: 0
            }]
        },
        Tasks: [{
            StartProgress: 0,
            EndProgress: .2,
            Target: "Outline",
            Property: "Opacity",
            To: 0,
            GetValue: Oe
        }, {
            StartProgress: 0,
            EndProgress: .2,
            Target: "Filled",
            Property: "Opacity",
            To: 1,
            GetValue: Oe
        }, {
            StartProgress: 0,
            EndProgress: .15,
            Target: "Outline",
            Property: "Scale",
            To: 1.6,
            GetValue: Oe
        }, {
            StartProgress: 0,
            EndProgress: .15,
            Target: "Filled",
            Property: "Scale",
            To: 1.6,
            GetValue: Oe
        }, {
            StartProgress: .25,
            EndProgress: 1,
            Target: "Filled",
            Property: "Scale",
            To: 1,
            GetValue: La
        }]
    }
};
var Sh = [{
    Target: "Outline",
    Property: "Opacity",
    Value: $e.Outline.Opacity
}, {
    Target: "Outline",
    Property: "Scale",
    Value: $e.Outline.Scale
}]
  , Kl = {
    Default: {
        Type: "Static",
        Values: Sh
    },
    Hover: {
        Type: "None"
    },
    Pressed: {
        Type: "Live",
        Duration: .125,
        Tasks: [{
            StartProgress: 0,
            EndProgress: 1,
            Target: "Outline",
            Property: "Scale",
            To: .75,
            GetValue: Oe
        }],
        OnCompletion: a => a.Maid.Give(Fe(a.LikeStateUpdateShimmerAppearsAfter, () => a.Loading.classList.toggle("Outline", !0)), "LikeStateLoading")
    },
    Unhovered: {
        Type: "Live",
        Duration: .075,
        Tasks: [{
            Condition: a => a.LastAnimationStates.includes("Pressed"),
            StartProgress: 0,
            EndProgress: 1,
            Target: "Outline",
            Property: "Scale",
            To: 1,
            GetValue: Oe
        }]
    },
    SwitchedTo: {
        Type: "Live",
        Duration: .8,
        InitialValues: {
            Values: [{
                Target: "Outline",
                Property: "Opacity",
                Value: 0
            }, {
                Target: "Outline",
                Property: "Scale",
                Value: 1
            }, {
                Target: "Filled",
                Property: "Opacity",
                Value: 1
            }, {
                Target: "LeftPiece",
                Property: "XOffset",
                Value: 0
            }, {
                Target: "LeftPiece",
                Property: "YOffset",
                Value: 0
            }, {
                Target: "RightPiece",
                Property: "XOffset",
                Value: 0
            }, {
                Target: "RightPiece",
                Property: "YOffset",
                Value: 0
            }]
        },
        Tasks: [{
            StartProgress: .1,
            EndProgress: .15,
            Target: "Outline",
            Property: "Opacity",
            To: 1,
            GetValue: Oe
        }, {
            StartProgress: 0,
            EndProgress: .15,
            Target: "LeftPiece",
            Property: "Rotation",
            To: 0,
            GetValue: Oe
        }, {
            StartProgress: 0,
            EndProgress: .15,
            Target: "RightPiece",
            Property: "Rotation",
            To: 0,
            GetValue: Oe
        }, {
            StartProgress: 0,
            EndProgress: 1,
            Target: "Outline",
            Property: "Scale",
            To: 1,
            GetValue: La
        }, {
            StartProgress: 0,
            EndProgress: 1,
            Target: "Filled",
            Property: "Scale",
            To: 1,
            GetValue: La
        }, {
            StartProgress: .15,
            EndProgress: 1,
            Target: "LeftPiece",
            Property: "XOffset",
            To: -220,
            GetValue: gr
        }, {
            StartProgress: .15,
            EndProgress: 1,
            Target: "LeftPiece",
            Property: "YOffset",
            To: 350,
            GetValue: (a, e, t) => e + t * (2.25 * a ** 2 - 1.25 * a)
        }, {
            StartProgress: .15,
            EndProgress: 1,
            Target: "LeftPiece",
            Property: "Rotation",
            To: -110,
            GetValue: Oe
        }, {
            StartProgress: .15,
            EndProgress: 1,
            Target: "RightPiece",
            Property: "XOffset",
            To: 220,
            GetValue: gr
        }, {
            StartProgress: .15,
            EndProgress: 1,
            Target: "RightPiece",
            Property: "YOffset",
            To: 350,
            GetValue: (a, e, t) => e + t * (2.5 * a ** 2 - 1.5 * a)
        }, {
            StartProgress: .15,
            EndProgress: 1,
            Target: "RightPiece",
            Property: "Rotation",
            To: 117.5,
            GetValue: Oe
        }]
    }
};
var Wl = {
    Type: "Live",
    Duration: .85,
    InitialValues: {
        Values: [{
            Target: "Object",
            Property: "Scale",
            Value: 0
        }, {
            Target: "Object",
            Property: "Rotation",
            Value: 0
        }, {
            Target: "Object",
            Property: "YOffset",
            Value: 0
        }]
    },
    Tasks: [{
        StartProgress: 0,
        EndProgress: .65,
        Target: "Object",
        Property: "Rotation",
        To: 360 * 2,
        GetValue: Oe
    }, {
        StartProgress: 0,
        EndProgress: .15,
        Target: "Object",
        Property: "Scale",
        To: 1.6,
        GetValue: Oe
    }, {
        StartProgress: 0,
        EndProgress: .15,
        Target: "Object",
        Property: "Scale",
        To: 1.6,
        GetValue: Oe
    }, {
        StartProgress: .25,
        EndProgress: 1,
        Target: "Object",
        Property: "Scale",
        To: 1,
        GetValue: La
    }]
};
var $l = 2.5
  , Ch = $l + 1
  , Ah = (a, e, t) => e + (Ch * a ** 3 - $l * a ** 2) * t
  , Ql = {
    Type: "Live",
    Duration: .4,
    InitialValues: {
        Values: [{
            Target: "Object",
            Property: "Scale",
            Value: 1
        }, {
            Target: "Object",
            Property: "Rotation",
            Value: 0
        }, {
            Target: "Object",
            Property: "YOffset",
            Value: 0
        }]
    },
    Tasks: [{
        StartProgress: 0,
        EndProgress: 1,
        Target: "Object",
        Property: "Rotation",
        To: -(360 * 2),
        GetValue: Oe
    }, {
        StartProgress: 0,
        EndProgress: 1,
        Target: "Object",
        Property: "YOffset",
        To: 100,
        GetValue: Ah
    }]
};
var Zl = `
	<div class="GridItem Folder">
		<div class="Cover">${je.CreateFolder}</div>
		<div class="Name"><span></span></div>
	</div>
`, Xl = `
	<div class="GridItem Playlist">
		<div class="Cover">
			${je.AddedToPlaylist}
			<img>
		</div>
		<div class="Details">
			<div class="Name"><span></span></div>
			<div class="Collaborators"><span></span></div>
		</div>
	</div>
`, jh = `
	<div class="Branch Library">
		${je.Library}
		<div class="Name"><span>Library</span></div>
	</div>
`, Th = `
	<div class="Branch">
		<span class="Divider">/</span>
		${je.CreateFolder}
		<div class="Name"><span></span></div>
	</div>
`, Mh = `
	<div class="BeautifulLyricsPage Fullscreen">
		<div class="Content">
			<div class="PlayPanelMouseArea"></div>
			<div class="PlayPanel">
				<div class="MediaSpace">
					<div class="AddToPlaylistCover">
						<div class="Header">
							<div class="Action Close">${je.CloseView}</div>
							<div class="Action AddFolder">${je.CreateFolder}</div>
							<div class="Action AddPlaylist">${je.CreatePlaylist}</div>
							<div class="Divider"></div>
							<div class="Path"><div class="SizeMeasurement"></div></div>
						</div>
						<input type="text" placeholder="__WAITING__" maxlength="0">
						<div class="Grid"></div>
					</div>
					<div class="ViewControls">
						<button id="AddToPlaylist" class="ViewControl">${je.AddToPlaylist}</button>
						<button id="Romanize" class="ViewControl"></button>
						<button id="SmallerView" class="ViewControl"></button>
						<button id="Fullscreen" class="ViewControl">${$t.FullscreenOpen}</button>
						<button id="Close" class="ViewControl">${je.CloseView}</button>
					</div>
					<div class="LikeState">
						<div class="Hitbox">
							${je.LoadingBrokenHeart}
							${je.HeartOutline}
							${je.BrokenHeart}
						</div>
					</div>
					<div class="PlaybackControls">
						${je.Shuffle}
						${je.LastTrack}
						<div class="PlaybackControl TogglePlayState"></div>
						${je.NextTrack}
						<div class="PlaybackControl ToggleLoopState"></div>
					</div>
					<div class="VolumeControl">
						${je.VolumeLevels}
						<div class="SliderBar">
							<div class="Hitbox"></div>
							<div class="Handle"></div>
						</div>
					</div>
					<img class="CoverArt" src="">
				</div>
				<div class="Timeline">
					<span class="Position"></span>
					<div class="SliderBar">
						<div class="Hitbox"></div>
						<div class="Handle"></div>
					</div>
					<span class="Length"></span>
				</div>
				<div class="DetailSpace TrackDetails">
					<div class="DetailsShelf Title"><span></span></div>
					<div class="DetailsShelf Release">
						<span class="Date"></span>
						<div class="Separator"></div>
						<div class="Artists"><span></span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
`, Ih = 5, xh = 7.5, Jl = 2, eu = 1.1, Eh = .75, Dh = .5, on = .15, zh = [on + .02, .4, .725], vt = a => {
    Me.push(new URL(a.target.href).pathname),
    a.preventDefault()
}
, yr, Qt = class {
    Maid = new ke;
    Closed = this.Maid.Destroyed;
    constructor(e) {
        let t = Me.entries[Me.entries.length - 2];
        t !== void 0 && t.pathname.startsWith("/BeautifulLyrics") === !1 && (yr = t.pathname);
        let i = this.Maid.Give(Pe(Mh));
        yt(i, this.Maid);
        let o = i.querySelector(".Content")
          , l = tn(o, this.Maid);
        {
            let s = o.querySelector(".PlayPanel")
              , n = s.querySelector(".MediaSpace")
              , r = s.querySelector(".Timeline")
              , c = s.querySelector(".TrackDetails")
              , u = n.querySelector(".CoverArt")
              , d = n.querySelector(".AddToPlaylistCover")
              , m = n.querySelector(".ViewControls")
              , g = n.querySelector(".LikeState .Hitbox")
              , v = n.querySelector(".PlaybackControls")
              , S = r.querySelector(".Position")
              , x = r.querySelector(".SliderBar")
              , D = r.querySelector(".Length")
              , B = n.querySelector(".VolumeControl")
              , q = B.querySelector(".SliderBar")
              , K = B.querySelectorAll(".VolumeLevels .Level")
              , te = c.querySelector(".Title")
              , W = te.querySelector("span")
              , R = c.querySelector(".Date")
              , F = c.querySelector(".Separator")
              , X = c.querySelector(".Artists")
              , Y = X.querySelector("span");
            this.Maid.Give(new wa(te,s,!0)),
            this.Maid.Give(new wa(X,s));
            let H;
            {
                let G = !1, ee = d.querySelector(".Header"), ie = ee.querySelector(".Close"), me = ee.querySelector(".AddFolder"), le = ee.querySelector(".AddPlaylist"), pe = ee.querySelector(".Path"), ge = pe.querySelector(".SizeMeasurement"), ce = d.querySelector("input"), L = d.querySelector(".Grid"), p = this.Maid.Give(new Le), f = {
                    Type: "Folder",
                    Uri: "",
                    Name: "Library"
                }, k = (C, N, U) => {
                    if (N === void 0 && C.Items !== void 0 && U === void 0)
                        return C.Items;
                    let J = Fl("Recents", C.Uri, N).then(oe => {
                        let re = [];
                        for (let de of oe)
                            de.Type === "Folder" ? re.push({
                                Type: "Folder",
                                Uri: de.Uri,
                                Name: de.Name
                            }) : de.CanAddTo && re.push({
                                Type: "Playlist",
                                Uri: de.Uri,
                                LoadedDetails: mr(de.Uri)
                            });
                        return re
                    }
                    );
                    return N === void 0 && (C.Items = J),
                    J
                }
                , w = this.Maid.Give(new ke), j, I = (C, N, U) => {
                    w.CleanUp(),
                    j = N,
                    k(C, N, U).then(J => {
                        for (let oe of J)
                            if (N === void 0 && oe.Type === "Folder") {
                                let re = w.Give(Pe(Zl))
                                  , de = w.Give(new He(re))
                                  , ae = re.querySelector(".Name")
                                  , ue = ae.querySelector("span");
                                w.Give(new wa(ae,re,!0)),
                                ue.textContent = oe.Name,
                                de.Clicked.Connect( () => {
                                    G && p.Fire(oe)
                                }
                                ),
                                L.appendChild(re)
                            } else if (oe.Type === "Playlist") {
                                let re = w.Give(Pe(Xl))
                                  , de = w.Give(new He(re))
                                  , ae = re.querySelector(".Cover")
                                  , ue = ae.querySelector(".Added")
                                  , Ae = ae.querySelector("img")
                                  , Se = re.querySelector(".Details .Name")
                                  , _e = Se.querySelector("span")
                                  , ea = re.querySelector(".Details .Collaborators")
                                  , be = ea.querySelector("span")
                                  , Ge = {
                                    Object: {
                                        Element: ue,
                                        PropertyValues: {
                                            Scale: 0,
                                            Rotation: 0,
                                            YOffset: 0
                                        }
                                    }
                                };
                                w.Give(new wa(Se,re,!0)),
                                w.Give(new wa(ea,re,!0)),
                                Ae.classList.toggle("Loading", !0),
                                Se.classList.toggle("Loading", !0),
                                ea.classList.toggle("Loading", !0);
                                let oa = () => {
                                    oe.LoadedDetails.then(Te => {
                                        let da = Te.images[0]?.url;
                                        if (da === void 0) {
                                            let na = w.Give(Pe(je.PlaceholderPlaylistIcon), ae);
                                            Ae.style.display = "none",
                                            ae.prepend(na)
                                        } else
                                            w.Clean(ae),
                                            Ae.style.display = "",
                                            Ae.src = da;
                                        _e.textContent = Te.name,
                                        be.textContent = Te.collaborators.items.map(na => na.user.displayName).join(", "),
                                        Ae.classList.toggle("Loading", !1),
                                        Se.classList.toggle("Loading", !1),
                                        ea.classList.toggle("Loading", !1)
                                    }
                                    )
                                }
                                , qe, Ea = (Te, da) => Bl(oe.Uri).then(na => na.Items.find(fa => fa.uri === ve.Uri)).then(na => {
                                    ae.classList.toggle("Loading", !1);
                                    let fa = na !== void 0;
                                    return qe === fa ? [na, da === void 0 ? !0 : fa === da] : (qe = fa,
                                    Te === void 0 && fr(fa ? Wl : Ql, Ge, w, ue, void 0),
                                    ue.classList.toggle("Active", fa),
                                    Te || (oe.LoadedDetails = mr(oe.Uri)),
                                    oa(),
                                    [na, da === void 0 ? !1 : fa === da])
                                }
                                );
                                Ea(!0),
                                de.Clicked.Connect( () => {
                                    if (G === !1)
                                        return;
                                    let Te = qe === !1;
                                    Ea(void 0, Te).then( ([da,na]) => {
                                        if (!na)
                                            return ae.classList.toggle("Loading", !0),
                                            (Te ? Rl(oe.Uri, [ve.Uri]) : Gl(oe.Uri, [da])).then( () => w.Give(Be(Ea), oe))
                                    }
                                    )
                                }
                                ),
                                L.appendChild(re)
                            }
                    }
                    )
                }
                , _ = [], M, T = () => {
                    if (M === void 0)
                        ce.classList.toggle("Loading", !1),
                        ce.placeholder = `Search ${_[_.length - 1].Folder.Name}`,
                        ce.value = "",
                        ce.maxLength = 50,
                        ce.disabled = !G,
                        w.Clean("CreateItemWaiting");
                    else {
                        if (_[_.length - 1].Folder !== M.InFolder) {
                            M = void 0,
                            T();
                            return
                        }
                        if (M.Creating) {
                            ce.classList.toggle("Loading", !0),
                            ce.placeholder = `Creating your ${M.Type}, "${ce.value}"`,
                            ce.value = "",
                            ce.maxLength = 0,
                            ce.disabled = !0;
                            return
                        } else
                            ce.classList.toggle("Loading", !1);
                        if (j !== void 0 && G && I(M.InFolder),
                        M.Type === "Folder") {
                            let C = w.Give(Pe(Zl), "CreateItemWaiting");
                            C.classList.add("Loading"),
                            C.querySelector(".Name").remove(),
                            L.prepend(C)
                        } else {
                            let C = w.Give(Pe(Xl), "CreateItemWaiting");
                            C.classList.add("Loading"),
                            C.querySelector(".Cover img").classList.add("Loading"),
                            C.querySelector(".Details").remove(),
                            L.prepend(C)
                        }
                        ce.placeholder = `Type the Name of your ${M.Type}`,
                        ce.value = "",
                        ce.maxLength = 100,
                        ce.disabled = !G,
                        ce.focus()
                    }
                }
                ;
                {
                    p.Connect( () => Be(T));
                    let C = () => {
                        if (G !== !1 && M === void 0) {
                            let J = ce.value.trim();
                            w.Give(Fe(.1, () => I(_[_.length - 1].Folder, J === "" ? void 0 : J)), "UpdateSearchFilter")
                        }
                    }
                    ;
                    ce.addEventListener("input", C),
                    this.Maid.Give( () => ce.removeEventListener("input", C));
                    let N = () => {
                        M === void 0 || M.Creating || G === !1 || (M = void 0,
                        T())
                    }
                    ;
                    ce.addEventListener("focusout", N),
                    this.Maid.Give( () => ce.removeEventListener("focusout", N));
                    let U = J => {
                        if (G !== !1)
                            if (J.key === "Enter") {
                                let oe = M;
                                if (oe === void 0)
                                    return;
                                let re = ce.value.trim();
                                re.length === 0 && ce.blur(),
                                oe.Creating = !0,
                                T(),
                                (oe.Type === "Folder" ? Ul(re, oe.InFolder.Uri) : ql(re, oe.InFolder.Uri)).then( () => {
                                    oe === M && (M = void 0,
                                    I(oe.InFolder, void 0, !0),
                                    T())
                                }
                                )
                            } else
                                J.key === "Escape" && ce.blur()
                    }
                    ;
                    ce.addEventListener("keydown", U),
                    this.Maid.Give( () => ce.removeEventListener("keydown", U))
                }
                let z = this.Maid.Give(new ke)
                  , E = (C, N) => {
                    let U = z.Give(new ke, C)
                      , J = U.Give(Pe(N))
                      , oe = U.Give(new He(J))
                      , re = J.querySelector(".Name")
                      , de = re.querySelector("span");
                    U.Give(new wa(re,J)),
                    de.textContent = C.Name,
                    oe.Clicked.Connect( () => {
                        G !== !1 && J.classList.contains("Current") === !1 && p.Fire(C)
                    }
                    ),
                    ge.appendChild(J),
                    _.push({
                        Folder: C,
                        Element: J
                    })
                }
                ;
                this.Maid.Give(new ResizeObserver( () => ge.style.transform = `translateX(-${Math.max(0, ge.clientWidth - pe.clientWidth)}px)`)).observe(ge);
                {
                    let C = ye.Tippy(ie, {
                        ...ye.TippyProps,
                        content: "Close"
                    })
                      , N = ye.Tippy(me, {
                        ...ye.TippyProps,
                        content: "Create Folder"
                    })
                      , U = ye.Tippy(le, {
                        ...ye.TippyProps,
                        content: "Create Playlist"
                    });
                    this.Maid.GiveItems( () => C.destroy(), () => N.destroy(), () => U.destroy())
                }
                {
                    let[C,N,U] = this.Maid.GiveItems(new He(ie), new He(me), new He(le));
                    C.Clicked.Connect( () => H(!1)),
                    N.Clicked.Connect( () => {
                        G !== !1 && (M = {
                            Type: "Folder",
                            InFolder: _[_.length - 1].Folder
                        },
                        T())
                    }
                    ),
                    U.Clicked.Connect( () => {
                        G !== !1 && (M = {
                            Type: "Playlist",
                            InFolder: _[_.length - 1].Folder
                        },
                        T())
                    }
                    )
                }
                p.Connect(C => {
                    I(C),
                    _[_.length - 1].Element.classList.toggle("Current", !1);
                    let N;
                    for (let U = 0; U < _.length; U += 1)
                        if (_[U].Folder === C) {
                            N = U;
                            break
                        }
                    if (N === void 0)
                        E(C, Th);
                    else
                        for (let U = _.length - 1; U > N; U -= 1) {
                            let J = _.pop();
                            z.Clean(J.Folder),
                            z.Clean(J.Element)
                        }
                    _[_.length - 1].Element.classList.toggle("Current", !0)
                }
                );
                {
                    let C = new Ja(0,0,0), N, U = () => {
                        let J = performance.now();
                        if (N !== void 0) {
                            let oe = (J - N) / 1e3
                              , re = C.Step(oe);
                            if (n.style.setProperty("--AddToPlaylistOpenProgress", re.toString()),
                            C.CanSleep()) {
                                N = void 0,
                                G === !1 && (d.classList.toggle("Closing", !1),
                                d.classList.toggle("Open", !1),
                                _.length = 0,
                                z.CleanUp(),
                                w.CleanUp());
                                return
                            }
                        }
                        N = J,
                        this.Maid.Give(Ha(U), "AddToPlaylistAnimation")
                    }
                    ;
                    H = J => {
                        if (G !== J) {
                            if (G = J,
                            J) {
                                if (_.length === 0)
                                    E(f, jh),
                                    p.Fire(f);
                                else if (_.length > 1) {
                                    for (let oe = _.length - 1; oe > 0; oe -= 1) {
                                        let re = _.pop();
                                        z.Clean(re.Folder),
                                        z.Clean(re.Element)
                                    }
                                    p.Fire(f)
                                }
                                j !== void 0 && (I(_[_.length - 1].Folder),
                                T()),
                                d.classList.toggle("Closing", !1),
                                d.classList.toggle("Open", !0)
                            } else
                                d.classList.toggle("Closing", !0),
                                ce.blur();
                            C.SetGoal(J ? 1 : 0),
                            C.SetFrequency(J ? Ih : xh),
                            C.SetDampingRatio(J ? 1.5 : 2),
                            U()
                        }
                    }
                    ,
                    Ue.Connect( () => {
                        H(!1),
                        delete f.Items
                    }
                    )
                }
            }
            {
                let G = m.querySelector("#AddToPlaylist")
                  , ee = m.querySelector("#Romanize")
                  , ie = m.querySelector("#Fullscreen")
                  , me = m.querySelector("#SmallerView")
                  , le = m.querySelector("#Close");
                {
                    let ge = ye.Tippy(G, {
                        ...ye.TippyProps,
                        content: "Add to Playlist"
                    });
                    this.Maid.Give( () => ge.destroy()),
                    G.addEventListener("click", () => H(!0));
                    let ce = () => G.style.display = ve?.Type === "DJ" ? "none" : "";
                    ce(),
                    this.Maid.Give(Ue.Connect(ce))
                }
                let pe;
                {
                    let ge = ye.Tippy(me, {
                        ...ye.TippyProps,
                        content: "__WAITING__"
                    })
                      , ce = ye.Tippy(ie, {
                        ...ye.TippyProps,
                        content: "Enter Fullscreen"
                    });
                    this.Maid.Give( () => ge.destroy() && ce.destroy());
                    let L = () => {
                        let f = document.fullscreenElement === null;
                        ge.setContent(f ? "__WAITING__" : "Back to Cinema"),
                        me.innerHTML = f ? "" : je.FullscreenClose,
                        me.style.display = f ? "none" : "",
                        ie.style.display = f ? "" : "none"
                    }
                      , p = f => {
                        let k = document.fullscreenElement === null;
                        f === k && (f ? (delete Me.location.state.FromPlaybar,
                        document.documentElement.requestFullscreen()) : document.exitFullscreen())
                    }
                    ;
                    {
                        let f = () => p(!0);
                        ie.addEventListener("click", f);
                        let k = () => {
                            document.fullscreenElement === null ? Me.push("/BeautifulLyrics/Page") : (pe = !0,
                            p(!1))
                        }
                        ;
                        me.addEventListener("click", k),
                        this.Maid.GiveItems( () => ie.removeEventListener("click", f), () => me.removeEventListener("click", k)),
                        p(e ?? !1)
                    }
                    L(),
                    document.addEventListener("fullscreenchange", L),
                    this.Maid.Give( () => document.removeEventListener("fullscreenchange", L))
                }
                {
                    let ge = ye.Tippy(le, {
                        ...ye.TippyProps,
                        content: "Close"
                    });
                    this.Maid.Give( () => ge.destroy()),
                    le.addEventListener("click", () => this.Close());
                    let ce = {
                        onReleased: p => {
                            p.preventDefault(),
                            this.Close()
                        }
                    };
                    Mo("escape", ce),
                    this.Maid.Give( () => Io("escape", ce));
                    let L = () => {
                        document.fullscreenElement === null && e && pe === void 0 && this.Close()
                    }
                    ;
                    document.addEventListener("fullscreenchange", L),
                    this.Maid.Give( () => document.removeEventListener("fullscreenchange", L))
                }
                nn(ee, l, this.Maid)
            }
            {
                let G = g.querySelector(".Loading"), ee = g.querySelector(".Outline"), ie = g.querySelector(".Filled"), me = ie.querySelector(".Left"), le = ie.querySelector(".Right"), pe = [], ge, ce, L = !1, p = !1, f = !1, k = this.Maid.Give(new He(g)), w = {
                    Outline: {
                        Element: ee,
                        PropertyValues: {
                            ...$e.Outline
                        }
                    },
                    Filled: {
                        Element: ie,
                        PropertyValues: {
                            ...$e.Filled
                        }
                    },
                    LeftPiece: {
                        Element: me,
                        PropertyValues: {
                            ...$e.LeftPiece
                        }
                    },
                    RightPiece: {
                        Element: le,
                        PropertyValues: {
                            ...$e.RightPiece
                        }
                    }
                }, j = (M, T, z) => {
                    let E = _a ? Yl : Kl
                      , C = T ? "Default" : k.IsPressed() || M === void 0 && (p || f) ? "Pressed" : M && T === void 0 || z === void 0 && ce === "SwitchedTo" ? "SwitchedTo" : L ? "Hover" : ce === "Pressed" || ce === "Hover" ? "Unhovered" : "Default";
                    E === ge && C === ce || (this.Maid.Clean("LikeStateLoading"),
                    G.classList.toggle("Full", !1),
                    G.classList.toggle("Outline", !1),
                    pe.length === 2 && pe.shift(),
                    pe.push(ce),
                    ge = E,
                    ce = C,
                    M && (ee.classList.toggle("Active", _a === !1),
                    ie.classList.toggle("Active", _a)),
                    fr(ge[ce], w, this.Maid, "LikeAnimation", {
                        Maid: this.Maid,
                        LastAnimationStates: pe,
                        LikeStateUpdateShimmerAppearsAfter: Dh,
                        Loading: G
                    }, C === "SwitchedTo" ? () => j(void 0, void 0, !0) : void 0))
                }
                , I, _ = M => {
                    if (f = !1,
                    (M || I) && (j(!0, !0, !0),
                    j(!0, !1, !0)),
                    I || M) {
                        M === void 0 && (I = void 0);
                        return
                    }
                    j(!0)
                }
                ;
                _(!0),
                this.Maid.Give(Ue.Connect( () => (I = !0,
                p = !1,
                f = !1))),
                this.Maid.Give(zs.Connect(_)),
                k.Pressed.Connect( () => {
                    p = !0,
                    j()
                }
                ),
                k.Clicked.Connect( () => {
                    p && (p = !1,
                    f = !0,
                    Ns(!_a))
                }
                );
                {
                    let M = () => {
                        L = !0,
                        j()
                    }
                      , T = () => {
                        p && (p = !1),
                        L = !1,
                        j()
                    }
                    ;
                    g.addEventListener("mouseenter", M),
                    g.addEventListener("mouseleave", T),
                    this.Maid.GiveItems( () => g.removeEventListener("mouseenter", M), () => g.removeEventListener("mouseleave", T))
                }
            }
            {
                let G = v.querySelector(".Shuffle")
                  , ee = v.querySelector(".LastTrack")
                  , ie = v.querySelector(".TogglePlayState")
                  , me = v.querySelector(".NextTrack")
                  , le = v.querySelector(".ToggleLoopState")
                  , [pe,ge,ce,L,p] = this.Maid.GiveItems(new He(G), new He(ee), new He(ie), new He(me), new He(le));
                {
                    let f = () => {
                        ie.innerHTML = aa ? je.Pause : je.Play
                    }
                    ;
                    f(),
                    this.Maid.Give(Wn.Connect(f)),
                    ce.Clicked.Connect( () => _s(!aa))
                }
                ge.Clicked.Connect(we.back),
                L.Clicked.Connect(we.next);
                {
                    let f = () => {
                        G.classList.toggle("Enabled", Bt)
                    }
                      , k = () => {
                        le.classList.toggle("Enabled", Fa !== "Off"),
                        le.innerHTML = Fa === "Off" ? je.Loop : Fa === "Context" ? je.Loop : je.LoopTrack
                    }
                    ;
                    f(),
                    k(),
                    this.Maid.GiveItems(Es.Connect(f), Ds.Connect(k)),
                    pe.Clicked.Connect( () => Os(!Bt)),
                    p.Clicked.Connect( () => {
                        Fa === "Off" ? Vi("Context") : Fa === "Context" ? Vi("Song") : Vi("Off")
                    }
                    )
                }
            }
            let Q = this.Maid.Give(new kt(q,void 0,void 0,on));
            Q.ProgressChanged.Connect(G => {
                we.setVolume(G === on ? 0 : G);
                for (let[ee,ie] of K.entries())
                    ie.classList.toggle("Hidden", G === on || G < zh[ee])
            }
            ),
            Q.SetProgress(we.getVolume());
            let Z = this.Maid.Give(new kt(x,void 0,1));
            {
                let G = () => x.style.display = ve?.Type === "DJ" ? "none" : "";
                G(),
                this.Maid.Give(Ue.Connect(G)),
                Z.ProgressChanged.Connect( (le, pe) => {
                    if (pe && ve.Type !== "DJ") {
                        let ge = Math.floor(le / 60)
                          , ce = Math.floor(le % 60);
                        S.textContent = `${ve.Duration >= 600 ? ge.toString().padStart(2, "0") : ge}:${ce.toString().padStart(2, "0")}`
                    }
                }
                );
                let ee, ie;
                Z.IsActiveChanged.Connect( (le, pe, ge) => {
                    le === !1 && ge !== void 0 && (ee = ge,
                    ie = Je < ge ? 1 : -1,
                    Hi(ge))
                }
                );
                let me = () => {
                    if (this.Maid.Clean("TimelineUpdater"),
                    ve !== void 0 && ve.Type !== "DJ") {
                        ee = void 0,
                        ie = void 0,
                        Z.SetProgress(Je, ve.Duration),
                        D.textContent = Ps();
                        let le = () => {
                            if (ee !== void 0) {
                                let pe = Je - ee;
                                if (Math.abs(pe) < .1 || Math.sign(pe) === ie)
                                    ee = void 0,
                                    ie = void 0;
                                else
                                    return
                            }
                            Z.IsActive() === !1 && (S.textContent = Fs(),
                            Z.SetProgress(Je))
                        }
                        ;
                        le(),
                        this.Maid.Give(qi.Connect(le), "TimelineUpdater")
                    }
                }
                ;
                me(),
                this.Maid.Give(Ue.Connect(me))
            }
            {
                let G = this.Maid.Give(new ke, "SongDetails")
                  , ee = () => {
                    if (G.CleanUp(),
                    dt === !1) {
                        u.style.setProperty("--CoverArtHueShift", "0deg"),
                        u.style.backgroundColor = "",
                        n.classList.toggle("Loading", !0),
                        te.classList.toggle("Loading", !0),
                        X.classList.toggle("Loading", !0),
                        R.classList.toggle("Loading", !0),
                        W.textContent = "",
                        Y.innerHTML = "",
                        R.textContent = "";
                        return
                    }
                    if (n.classList.toggle("Loading", !1),
                    te.classList.toggle("Loading", !1),
                    X.classList.toggle("Loading", !1),
                    R.classList.toggle("Loading", !1),
                    ve?.Type === "DJ") {
                        let[ie,me] = an();
                        u.style.backgroundColor = me === void 0 ? "" : "white",
                        u.style.setProperty("--CoverArtHueShift", `${me ?? 0}deg`),
                        u.src = ie;
                        let le = G.Give(document.createElement("span"));
                        le.textContent = ve.Action,
                        W.appendChild(le);
                        let pe = G.Give(document.createElement("span"));
                        pe.textContent = "DJ",
                        Y.appendChild(pe),
                        R.textContent = "",
                        F.style.display = "none"
                    } else if (We !== void 0) {
                        let[ie,me] = an();
                        if (u.style.backgroundColor = me === void 0 ? "" : "white",
                        u.style.setProperty("--CoverArtHueShift", `${me ?? 0}deg`),
                        u.src = ie,
                        We.IsLocal)
                            if (Re === void 0 || Re.Type === "Other") {
                                let le = G.Give(document.createElement("span"));
                                le.textContent = We.Name,
                                W.appendChild(le)
                            } else {
                                let le = G.Give(document.createElement("a"));
                                le.href = Re.Type === "LocalFiles" ? "/collection/local-files" : Re.Type === "Playlist" ? `/playlist/${Re.Id}` : Re.Type === "Album" ? `/album/${Re.Id}` : "",
                                le.textContent = We.Name,
                                le.addEventListener("click", vt),
                                G.Give( () => le.removeEventListener("click", vt)),
                                W.appendChild(le)
                            }
                        else {
                            let le = G.Give(document.createElement("a"));
                            le.href = `/album/${We.Album.Id}`,
                            le.textContent = We.Name,
                            le.addEventListener("click", vt),
                            G.Give( () => le.removeEventListener("click", vt)),
                            W.appendChild(le)
                        }
                        if (We.Artists !== void 0)
                            if (We.IsLocal)
                                for (let[le,pe] of We.Artists.entries()) {
                                    let ge = G.Give(document.createElement("span"));
                                    if (ge.textContent = pe,
                                    le > 0) {
                                        let ce = G.Give(document.createElement("span"));
                                        ce.textContent = ", ",
                                        Y.appendChild(ce)
                                    }
                                    Y.appendChild(ge)
                                }
                            else
                                for (let[le,pe] of We.Artists.entries()) {
                                    let ge = G.Give(document.createElement("a"));
                                    if (ge.href = `/artist/${pe.Id}`,
                                    ge.textContent = pe.Name,
                                    le > 0) {
                                        let ce = G.Give(document.createElement("span"));
                                        ce.textContent = ", ",
                                        Y.appendChild(ce)
                                    }
                                    ge.addEventListener("click", vt),
                                    G.Give( () => ge.removeEventListener("click", vt)),
                                    Y.appendChild(ge)
                                }
                        We.IsLocal ? R.textContent = "" : R.textContent = We.Album.ReleaseDate.year.toString(),
                        We.IsLocal ? F.style.display = "none" : F.style.display = ""
                    }
                }
                ;
                ee(),
                Ue.Connect(ee),
                xs.Connect(ee)
            }
            {
                let G, ee = !1, ie = !1, me = new Ja(0,0,0), le = new Ja(0,0,0), pe = !1, ge = !1, ce, L = () => {
                    let w = performance.now();
                    if (ce !== void 0) {
                        let j = (w - ce) / 1e3
                          , I = me.Step(j)
                          , _ = le.Step(j);
                        if (n.style.setProperty("--CoverArtHoverScale", _.toString()),
                        n.style.setProperty("--ControlsVisibleScale", (I ** 4).toString()),
                        u.style.setProperty("--CoverArtScale", I.toString()),
                        me.CanSleep() && le.CanSleep()) {
                            ce = void 0,
                            ge = !1,
                            pe === !1 && n.classList.remove("ControlsVisible");
                            return
                        }
                    }
                    ce = w,
                    this.Maid.Give(Ha(L), "Animation")
                }
                , p = o.querySelector(".PlayPanelMouseArea"), f = w => {
                    let j = aa === !1 || Z.IsActive() || Q.IsActive() || w !== void 0 && w.clientX > p.clientLeft && w.clientX < p.clientLeft + p.clientWidth && w.clientY > p.clientTop && w.clientY < p.clientTop + p.clientHeight;
                    pe !== j && (pe = j,
                    pe === !1 && this.Maid.Clean("ControlsAutoHideTimer"),
                    me.SetGoal(pe ? 1 : 0),
                    me.SetFrequency(pe ? Jl : eu),
                    me.SetDampingRatio(pe ? 1.5 : 2),
                    le.SetGoal(ee ? 1 : 0, j && le.CanSleep()),
                    le.SetFrequency(pe ? Jl : eu),
                    le.SetDampingRatio(pe ? 1.5 : 2),
                    ge === !1 && (ge = !0,
                    pe && n.classList.add("ControlsVisible"),
                    L()))
                }
                ;
                G = () => {
                    pe && aa && ee === !1 && ie === !1 && Z.IsActive() === !1 && Q.IsActive() === !1 ? this.Maid.Give(Fe(Eh, () => f()), "ControlsAutoHideTimer") : this.Maid.Clean("ControlsAutoHideTimer")
                }
                ,
                this.Maid.Give(Wn.Connect( () => aa ? G() : f()));
                let k = () => {
                    let w = ee || Q.IsActive() ? 1 : 0;
                    le.GetGoal() !== w && (le.SetGoal(w),
                    L()),
                    ee === !1 && H(!1)
                }
                ;
                {
                    let w = (j, I) => {
                        j === !1 && (ee === !1 && ie === !1 && G(),
                        k(),
                        f(I))
                    }
                    ;
                    Z.IsActiveChanged.Connect(w),
                    Q.IsActiveChanged.Connect(w)
                }
                {
                    let w = () => f()
                      , j = !0
                      , I = () => j = !0
                      , _ = U => {
                        j = !1,
                        f(U)
                    }
                      , M = U => {
                        j && (f(U),
                        G())
                    }
                      , T = () => {
                        ee = !0,
                        this.Maid.Clean("ControlsAutoHideTimer"),
                        k()
                    }
                      , z = () => {
                        ee = !1,
                        k()
                    }
                      , E = () => ie = !0
                      , C = () => ie = !1;
                    n.addEventListener("mouseenter", T),
                    n.addEventListener("mouseleave", z);
                    let N = Z.GetHitBox();
                    N.addEventListener("mouseenter", E),
                    N.addEventListener("mouseleave", C),
                    globalThis.addEventListener("mouseover", I),
                    globalThis.addEventListener("mouseout", _),
                    globalThis.addEventListener("mousemove", M),
                    globalThis.addEventListener("blur", w),
                    this.Maid.GiveItems( () => n.removeEventListener("mouseover", T), () => n.removeEventListener("mouseout", z), () => globalThis.removeEventListener("mouseover", I), () => globalThis.removeEventListener("mouseout", _), () => globalThis.removeEventListener("mousemove", M), () => globalThis.removeEventListener("blur", w))
                }
            }
        }
        document.body.appendChild(i);
        {
            let s = () => {
                ve === void 0 && this.Close()
            }
            ;
            this.Maid.Give(Ue.Connect(s)),
            this.Maid.Give(Fe(1, s))
        }
    }
    Close() {
        if (document.fullscreenElement !== null && document.exitFullscreen(),
        yr !== void 0)
            return Me.push(yr);
        Me.push("/")
    }
    Destroy() {
        this.Maid.Destroy()
    }
}
;
var Ye = Ze.Give(new ke), Nh = '<div class="LoadingLyricsCard Loading"></div>', Ph = ".Root__main-view .main-view-container div[data-overlayscrollbars-viewport]", Oh = ".Root__main-view .main-view-container .os-host", _h = ".Root__right-sidebar", au = "aside, section.main-buddyFeed-container", Fh = ".main-nowPlayingView-nowPlayingWidget, canvas", Bh = ".main-nowPlayingView-section:not(:is(#BeautifulLyrics-CardView)):has(.main-nowPlayingView-lyricsTitle)", kr, Sa;
ct.then( () => {
    let a, e;
    {
        a = new Et.Button("Lyrics Page",$t.LyricsPage, () => {
            Sa === void 0 ? Me.push(`/BeautifulLyrics/${xo("shift") ? "Fullscreen" : "Page"}`) : (Sa.Close(),
            Sa = void 0)
        }
        ,!1,!1),
        Ye.Give( () => a.deregister());
        {
            let t = () => {
                ve === void 0 ? a.deregister() : a.register()
            }
            ;
            Ye.Give(Ue.Connect(t)),
            Ye.Give(Fe(1, t))
        }
        kr = t => a.active = t
    }
    e = new Et.Button("Enter Fullscreen",$t.FullscreenOpen, () => Me.push({
        pathname: "/BeautifulLyrics/Fullscreen",
        search: "",
        hash: "",
        state: {
            FromPlaybar: !0
        }
    }),!1,!1),
    Ye.Give( () => e.deregister()),
    e.element.style.order = "100000",
    e.element.id = "BeautifulLyricsFullscreenButton";
    {
        let t = () => {
            ve === void 0 ? (a.deregister(),
            e.deregister()) : (a.register(),
            e.register())
        }
        ;
        Ye.Give(Ue.Connect(t)),
        Ye.Give(Fe(1, t))
    }
}
).then( () => {
    let a, e, t = Ye.Give(new ke), i = Ye.Give(new ke), o = () => {
        i.CleanUp();
        let c = e.querySelector(Fh);
        if (c === null)
            return;
        let u = i.Give(new ke)
          , d = !1
          , m = () => {
            Me.location.pathname === "/BeautifulLyrics/Fullscreen" ? (u.CleanUp(),
            d = !1) : d === !1 && (d = !0,
            yt(e, u))
        }
        ;
        m(),
        i.Give(Me.listen(m));
        let g = c.parentElement
          , v = () => {
            let D = g.querySelector(Bh);
            D !== null && (D.style.display = "none")
        }
        ;
        v(),
        i.Give(new MutationObserver(v)).observe(g, {
            childList: !0
        });
        let x = () => {
            if (Me.location.pathname.startsWith("/BeautifulLyrics") || ve === void 0 || Oa && Ie === void 0) {
                i.Clean("Card");
                return
            } else if (Oa === !1) {
                let D = i.Give(Pe(Nh), "Card");
                c.after(D);
                return
            }
            i.Give(new Kt(c), "Card")
        }
        ;
        x(),
        i.GiveItems(Rt.Connect(x), Me.listen(x))
    }
    , l = () => Ye.Give(Be(o), "CheckForNowPlaying"), s = () => {
        t.CleanUp(),
        i.CleanUp(),
        e = a.querySelector(au) ?? void 0,
        e !== void 0 && (o(),
        t.Give(Ue.Connect(l)))
    }
    , n = () => Ye.Give(Be(s), "CheckForContentsContainer"), r = () => {
        let c = document.querySelector(_h);
        if (c === null) {
            Ye.Give(Be(r), "CheckForSidebar");
            return
        }
        a = c;
        let u = Ye.Give(new MutationObserver(n));
        s(),
        u.observe(a, {
            childList: !0
        });
        for (let d of a.children)
            d instanceof HTMLDivElement && (d.children.length === 0 || d.querySelector(au) !== null) && u.observe(d, {
                childList: !0
            })
    }
    ;
    r()
}
).then( () => {
    let a, e = !1, t = o => {
        Ye.Clean("PageView"),
        o.pathname === "/BeautifulLyrics/Page" ? (kr(!0),
        Sa = Ye.Give(new Wt(a,e), "PageView"),
        Sa.Closed.Connect( () => kr(!1)),
        Sa.Closed.Connect( () => Sa = void 0)) : o.pathname === "/BeautifulLyrics/Fullscreen" && (Sa = Ye.Give(new Qt(o.state.FromPlaybar), "PageView"),
        Sa.Closed.Connect( () => Sa = void 0))
    }
    , i = () => {
        let o = document.querySelector(Ph) ?? void 0
          , l = !1;
        o === void 0 && (o = document.querySelector(Oh) ?? void 0,
        l = !0),
        o === void 0 ? Ye.Give(Be(i)) : (a = o,
        e = l,
        t(Me.location),
        Ye.Give(Me.listen(t)))
    }
    ;
    i()
}
).then( () => {
    let a = () => {
        let e = document.querySelector(".main-nowPlayingBar-extraControls");
        if (e === null)
            Ye.Give(Be(a));
        else
            for (let t of e.children)
                (t.innerHTML.includes("0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75") || t.innerHTML.includes("2H14V4.757a1 1 0 1 1 2 0v1.829l4.293-4.293a1") || t.innerHTML.includes("M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75") || t.innerHTML.includes("M6.53 9.47a.75.75 0 010 1.06l-2.72 2.72h1.018a.75.75")) && t.id !== "BeautifulLyricsFullscreenButton" && t.remove()
    }
    ;
    a()
}
);
ct.then(a => {
    let e = () => {
        Dt.get("sp://desktop/v1/version").catch(s => zt(`Failed to Copy Spotify/Spicetify Information (${s})`, "error", 10)).then(s => {
            let n = `
						Spotify Version: ${s.version}
						Spotify Runtime: ${s.cefVersion}
						Spicetify Version: ${ye.Config.version}
						Spicetify Theme: ${ye.Config.current_theme}${ye.Config.color_scheme.length === 0 ? "" : ` / ${ye.Config.color_scheme}`}
						Spicetify Extensions: [${ye.Config.extensions.join(", ")}]
						Spicetify Custom Apps: [${ye.Config.custom_apps.join(", ")}]
					`.trim().replace(/\t/g, "");
            navigator.clipboard.writeText(n).catch(r => zt(`Failed to Copy Spotify/Spicetify Information (${r})`, "error", 10)).then( () => zt("Copied Spotify/Spicetify Information", "success", 5))
        }
        )
    }
    ;
    wi("shift+b+l>i", e),
    Ze.Give( () => Li("shift+b+l>i", e));
    let t = Pe("<a></a>")
      , i = (s, n, r) => {
        let c = new Blob([n],{
            type: r
        })
          , u = URL.createObjectURL(c);
        t.download = s,
        t.href = u,
        t.click(),
        URL.revokeObjectURL(u)
    }
      , o = () => i("Spotify.html", document.documentElement.innerHTML, "text/html")
      , l = () => fetch("xpui.css").then(s => s.text()).then(s => i("Spotify.css", s, "text/css")).catch(s => zt(`Failed to Save Spotify CSS (${s})`, "error", 10));
    wi("shift+b+l>h", o),
    wi("shift+b+l>c", l),
    Ze.GiveItems( () => Li("shift+b+l>h", o), () => Li("shift+b+l>c", l))
}
).then(a => {
    let e = ji("BeautifulLyrics/Analytics", 1, {})
      , t = () => {
        Ze.Clean("Analytics");
        let i = e.Items.LastVisitedAt
          , o = i !== void 0 ? new Date(i) : void 0
          , l = new Date;
        l.setHours(0, 0, 0, 0);
        let s = l.getTime();
        if (o?.getTime() !== s) {
            e.Items.LastVisitedAt = s,
            e.SaveChanges();
            let n = Ze.Give(document.createElement("iframe"), "Analytics");
            n.src = "https://track.beautiful-lyrics.socalifornian.live/",
            n.style.display = "none",
            document.body.appendChild(n)
        }
        Ze.Give(Fe(60, t))
    }
    ;
    t()
}
);
var zy = {
    Type: "Notification",
    Name: "Beautiful Lyrics"
}
  , Ny = Ze;
export {zy as UpdateNotice, Ny as default};
//# sourceMappingURL=bundle@4.1.6.mjs.map
