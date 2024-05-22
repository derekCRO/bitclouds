(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [900],
  {
    7952: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          geoAlbers: function () {
            return eG;
          },
          geoAlbersUsa: function () {
            return eW;
          },
          geoArea: function () {
            return W;
          },
          geoAzimuthalEqualArea: function () {
            return eU;
          },
          geoAzimuthalEqualAreaRaw: function () {
            return eF;
          },
          geoAzimuthalEquidistant: function () {
            return eV;
          },
          geoAzimuthalEquidistantRaw: function () {
            return eK;
          },
          geoBounds: function () {
            return tl;
          },
          geoCentroid: function () {
            return tw;
          },
          geoCircle: function () {
            return tT;
          },
          geoClipAntimeridian: function () {
            return tW;
          },
          geoClipCircle: function () {
            return tX;
          },
          geoClipExtent: function () {
            return tF;
          },
          geoClipRectangle: function () {
            return tY;
          },
          geoConicConformal: function () {
            return e2;
          },
          geoConicConformalRaw: function () {
            return e1;
          },
          geoConicEqualArea: function () {
            return eq;
          },
          geoConicEqualAreaRaw: function () {
            return eD;
          },
          geoConicEquidistant: function () {
            return e9;
          },
          geoConicEquidistantRaw: function () {
            return e3;
          },
          geoContains: function () {
            return t8;
          },
          geoDistance: function () {
            return t1;
          },
          geoEqualEarth: function () {
            return e8;
          },
          geoEqualEarthRaw: function () {
            return e7;
          },
          geoEquirectangular: function () {
            return e6;
          },
          geoEquirectangularRaw: function () {
            return e5;
          },
          geoGnomonic: function () {
            return rn;
          },
          geoGnomonicRaw: function () {
            return rt;
          },
          geoGraticule: function () {
            return nr;
          },
          geoGraticule10: function () {
            return no;
          },
          geoIdentity: function () {
            return re;
          },
          geoInterpolate: function () {
            return ni;
          },
          geoLength: function () {
            return tQ;
          },
          geoMercator: function () {
            return eQ;
          },
          geoMercatorRaw: function () {
            return e$;
          },
          geoNaturalEarth1: function () {
            return ro;
          },
          geoNaturalEarth1Raw: function () {
            return rr;
          },
          geoOrthographic: function () {
            return ra;
          },
          geoOrthographicRaw: function () {
            return ri;
          },
          geoPath: function () {
            return eM;
          },
          geoProjection: function () {
            return eH;
          },
          geoProjectionMutator: function () {
            return eL;
          },
          geoRotation: function () {
            return tP;
          },
          geoStereographic: function () {
            return rc;
          },
          geoStereographicRaw: function () {
            return ru;
          },
          geoStream: function () {
            return N;
          },
          geoTransform: function () {
            return ek;
          },
          geoTransverseMercator: function () {
            return rs;
          },
          geoTransverseMercatorRaw: function () {
            return rl;
          },
        });
      class r {
        constructor() {
          (this._partials = new Float64Array(32)), (this._n = 0);
        }
        add(t) {
          let n = this._partials,
            e = 0;
          for (let r = 0; r < this._n && r < 32; r++) {
            let o = n[r],
              i = t + o,
              a = Math.abs(t) < Math.abs(o) ? t - (i - o) : o - (i - t);
            a && (n[e++] = a), (t = i);
          }
          return (n[e] = t), (this._n = e + 1), this;
        }
        valueOf() {
          let t = this._partials,
            n = this._n,
            e,
            r,
            o,
            i = 0;
          if (n > 0) {
            for (
              i = t[--n];
              n > 0 && ((i = (e = i) + (r = t[--n])), !(o = r - (i - e)));

            );
            n > 0 &&
              ((o < 0 && t[n - 1] < 0) || (o > 0 && t[n - 1] > 0)) &&
              ((e = i + (r = 2 * o)), r == e - i && (i = e));
          }
          return i;
        }
      }
      var o = Math.PI,
        i = o / 2,
        a = o / 4,
        u = 2 * o,
        c = 180 / o,
        l = o / 180,
        s = Math.abs,
        f = Math.atan,
        p = Math.atan2,
        h = Math.cos,
        d = Math.ceil,
        v = Math.exp,
        g = Math.hypot,
        m = Math.log,
        y = Math.pow,
        b = Math.sin,
        _ =
          Math.sign ||
          function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          },
        w = Math.sqrt,
        E = Math.tan;
      function x(t) {
        return t > 1 ? 0 : t < -1 ? o : Math.acos(t);
      }
      function S(t) {
        return t > 1 ? i : t < -1 ? -i : Math.asin(t);
      }
      function M() {}
      function k(t, n) {
        t && C.hasOwnProperty(t.type) && C[t.type](t, n);
      }
      var O = {
          Feature: function (t, n) {
            k(t.geometry, n);
          },
          FeatureCollection: function (t, n) {
            for (var e = t.features, r = -1, o = e.length; ++r < o; )
              k(e[r].geometry, n);
          },
        },
        C = {
          Sphere: function (t, n) {
            n.sphere();
          },
          Point: function (t, n) {
            (t = t.coordinates), n.point(t[0], t[1], t[2]);
          },
          MultiPoint: function (t, n) {
            for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
              (t = e[r]), n.point(t[0], t[1], t[2]);
          },
          LineString: function (t, n) {
            P(t.coordinates, n, 0);
          },
          MultiLineString: function (t, n) {
            for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
              P(e[r], n, 0);
          },
          Polygon: function (t, n) {
            j(t.coordinates, n);
          },
          MultiPolygon: function (t, n) {
            for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
              j(e[r], n);
          },
          GeometryCollection: function (t, n) {
            for (var e = t.geometries, r = -1, o = e.length; ++r < o; )
              k(e[r], n);
          },
        };
      function P(t, n, e) {
        var r,
          o = -1,
          i = t.length - e;
        for (n.lineStart(); ++o < i; ) (r = t[o]), n.point(r[0], r[1], r[2]);
        n.lineEnd();
      }
      function j(t, n) {
        var e = -1,
          r = t.length;
        for (n.polygonStart(); ++e < r; ) P(t[e], n, 1);
        n.polygonEnd();
      }
      function N(t, n) {
        t && O.hasOwnProperty(t.type) ? O[t.type](t, n) : k(t, n);
      }
      var T,
        A,
        z,
        I,
        Z,
        R = new r(),
        H = new r(),
        L = {
          point: M,
          lineStart: M,
          lineEnd: M,
          polygonStart: function () {
            (R = new r()), (L.lineStart = B), (L.lineEnd = D);
          },
          polygonEnd: function () {
            var t = +R;
            H.add(t < 0 ? u + t : t),
              (this.lineStart = this.lineEnd = this.point = M);
          },
          sphere: function () {
            H.add(u);
          },
        };
      function B() {
        L.point = q;
      }
      function D() {
        G(T, A);
      }
      function q(t, n) {
        (L.point = G),
          (T = t),
          (A = n),
          (t *= l),
          (n *= l),
          (z = t),
          (I = h((n = n / 2 + a))),
          (Z = b(n));
      }
      function G(t, n) {
        (t *= l), (n *= l);
        var e = t - z,
          r = e >= 0 ? 1 : -1,
          o = r * e,
          i = h((n = n / 2 + a)),
          u = b(n),
          c = Z * u,
          s = I * i + c * h(o),
          f = c * r * b(o);
        R.add(p(f, s)), (z = t), (I = i), (Z = u);
      }
      function W(t) {
        return (H = new r()), N(t, L), 2 * H;
      }
      function X(t) {
        return [p(t[1], t[0]), S(t[2])];
      }
      function Y(t) {
        var n = t[0],
          e = t[1],
          r = h(e);
        return [r * h(n), r * b(n), b(e)];
      }
      function F(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
      }
      function U(t, n) {
        return [
          t[1] * n[2] - t[2] * n[1],
          t[2] * n[0] - t[0] * n[2],
          t[0] * n[1] - t[1] * n[0],
        ];
      }
      function K(t, n) {
        (t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
      }
      function V(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n];
      }
      function $(t) {
        var n = w(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        (t[0] /= n), (t[1] /= n), (t[2] /= n);
      }
      var Q = {
        point: J,
        lineStart: tn,
        lineEnd: te,
        polygonStart: function () {
          (Q.point = tr),
            (Q.lineStart = to),
            (Q.lineEnd = ti),
            (nd = new r()),
            L.polygonStart();
        },
        polygonEnd: function () {
          L.polygonEnd(),
            (Q.point = J),
            (Q.lineStart = tn),
            (Q.lineEnd = te),
            R < 0
              ? ((na = -(nc = 180)), (nu = -(nl = 90)))
              : nd > 1e-6
              ? (nl = 90)
              : nd < -0.000001 && (nu = -90),
            (ng[0] = na),
            (ng[1] = nc);
        },
        sphere: function () {
          (na = -(nc = 180)), (nu = -(nl = 90));
        },
      };
      function J(t, n) {
        nv.push((ng = [(na = t), (nc = t)])),
          n < nu && (nu = n),
          n > nl && (nl = n);
      }
      function tt(t, n) {
        var e = Y([t * l, n * l]);
        if (nh) {
          var r = U(nh, e),
            o = U([r[1], -r[0], 0], r);
          $(o), (o = X(o));
          var i,
            a = t - ns,
            u = a > 0 ? 1 : -1,
            f = o[0] * c * u,
            p = s(a) > 180;
          p ^ (u * ns < f && f < u * t)
            ? (i = o[1] * c) > nl && (nl = i)
            : p ^ (u * ns < (f = ((f + 360) % 360) - 180) && f < u * t)
            ? (i = -o[1] * c) < nu && (nu = i)
            : (n < nu && (nu = n), n > nl && (nl = n)),
            p
              ? t < ns
                ? ta(na, t) > ta(na, nc) && (nc = t)
                : ta(t, nc) > ta(na, nc) && (na = t)
              : nc >= na
              ? (t < na && (na = t), t > nc && (nc = t))
              : t > ns
              ? ta(na, t) > ta(na, nc) && (nc = t)
              : ta(t, nc) > ta(na, nc) && (na = t);
        } else nv.push((ng = [(na = t), (nc = t)]));
        n < nu && (nu = n), n > nl && (nl = n), (nh = e), (ns = t);
      }
      function tn() {
        Q.point = tt;
      }
      function te() {
        (ng[0] = na), (ng[1] = nc), (Q.point = J), (nh = null);
      }
      function tr(t, n) {
        if (nh) {
          var e = t - ns;
          nd.add(s(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
        } else (nf = t), (np = n);
        L.point(t, n), tt(t, n);
      }
      function to() {
        L.lineStart();
      }
      function ti() {
        tr(nf, np),
          L.lineEnd(),
          s(nd) > 1e-6 && (na = -(nc = 180)),
          (ng[0] = na),
          (ng[1] = nc),
          (nh = null);
      }
      function ta(t, n) {
        return (n -= t) < 0 ? n + 360 : n;
      }
      function tu(t, n) {
        return t[0] - n[0];
      }
      function tc(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
      }
      function tl(t) {
        var n, e, r, o, i, a, u;
        if (
          ((nl = nc = -(na = nu = 1 / 0)), (nv = []), N(t, Q), (e = nv.length))
        ) {
          for (nv.sort(tu), n = 1, i = [(r = nv[0])]; n < e; ++n)
            tc(r, (o = nv[n])[0]) || tc(r, o[1])
              ? (ta(r[0], o[1]) > ta(r[0], r[1]) && (r[1] = o[1]),
                ta(o[0], r[1]) > ta(r[0], r[1]) && (r[0] = o[0]))
              : i.push((r = o));
          for (
            a = -1 / 0, e = i.length - 1, n = 0, r = i[e];
            n <= e;
            r = o, ++n
          )
            (o = i[n]),
              (u = ta(r[1], o[0])) > a && ((a = u), (na = o[0]), (nc = r[1]));
        }
        return (
          (nv = ng = null),
          na === 1 / 0 || nu === 1 / 0
            ? [
                [NaN, NaN],
                [NaN, NaN],
              ]
            : [
                [na, nu],
                [nc, nl],
              ]
        );
      }
      var ts = {
        sphere: M,
        point: tf,
        lineStart: th,
        lineEnd: tg,
        polygonStart: function () {
          (ts.lineStart = tm), (ts.lineEnd = ty);
        },
        polygonEnd: function () {
          (ts.lineStart = th), (ts.lineEnd = tg);
        },
      };
      function tf(t, n) {
        t *= l;
        var e = h((n *= l));
        tp(e * h(t), e * b(t), b(n));
      }
      function tp(t, n, e) {
        ++nm,
          (nb += (t - nb) / nm),
          (n_ += (n - n_) / nm),
          (nw += (e - nw) / nm);
      }
      function th() {
        ts.point = td;
      }
      function td(t, n) {
        t *= l;
        var e = h((n *= l));
        (nj = e * h(t)),
          (nN = e * b(t)),
          (nT = b(n)),
          (ts.point = tv),
          tp(nj, nN, nT);
      }
      function tv(t, n) {
        t *= l;
        var e = h((n *= l)),
          r = e * h(t),
          o = e * b(t),
          i = b(n),
          a = p(
            w(
              (a = nN * i - nT * o) * a +
                (a = nT * r - nj * i) * a +
                (a = nj * o - nN * r) * a
            ),
            nj * r + nN * o + nT * i
          );
        (ny += a),
          (nE += a * (nj + (nj = r))),
          (nx += a * (nN + (nN = o))),
          (nS += a * (nT + (nT = i))),
          tp(nj, nN, nT);
      }
      function tg() {
        ts.point = tf;
      }
      function tm() {
        ts.point = tb;
      }
      function ty() {
        t_(nC, nP), (ts.point = tf);
      }
      function tb(t, n) {
        (nC = t), (nP = n), (t *= l), (n *= l), (ts.point = t_);
        var e = h(n);
        (nj = e * h(t)), (nN = e * b(t)), (nT = b(n)), tp(nj, nN, nT);
      }
      function t_(t, n) {
        t *= l;
        var e = h((n *= l)),
          r = e * h(t),
          o = e * b(t),
          i = b(n),
          a = nN * i - nT * o,
          u = nT * r - nj * i,
          c = nj * o - nN * r,
          s = g(a, u, c),
          f = S(s),
          p = s && -f / s;
        nM.add(p * a),
          nk.add(p * u),
          nO.add(p * c),
          (ny += f),
          (nE += f * (nj + (nj = r))),
          (nx += f * (nN + (nN = o))),
          (nS += f * (nT + (nT = i))),
          tp(nj, nN, nT);
      }
      function tw(t) {
        (nm = ny = nb = n_ = nw = nE = nx = nS = 0),
          (nM = new r()),
          (nk = new r()),
          (nO = new r()),
          N(t, ts);
        var n = +nM,
          e = +nk,
          o = +nO,
          i = g(n, e, o);
        return i < 1e-12 &&
          ((n = nE),
          (e = nx),
          (o = nS),
          ny < 1e-6 && ((n = nb), (e = n_), (o = nw)),
          (i = g(n, e, o)) < 1e-12)
          ? [NaN, NaN]
          : [p(e, n) * c, S(o / i) * c];
      }
      function tE(t) {
        return function () {
          return t;
        };
      }
      function tx(t, n) {
        function e(e, r) {
          return n((e = t(e, r))[0], e[1]);
        }
        return (
          t.invert &&
            n.invert &&
            (e.invert = function (e, r) {
              return (e = n.invert(e, r)) && t.invert(e[0], e[1]);
            }),
          e
        );
      }
      function tS(t, n) {
        return [s(t) > o ? t + Math.round(-t / u) * u : t, n];
      }
      function tM(t, n, e) {
        return (t %= u)
          ? n || e
            ? tx(tO(t), tC(n, e))
            : tO(t)
          : n || e
          ? tC(n, e)
          : tS;
      }
      function tk(t) {
        return function (n, e) {
          return [(n += t) > o ? n - u : n < -o ? n + u : n, e];
        };
      }
      function tO(t) {
        var n = tk(t);
        return (n.invert = tk(-t)), n;
      }
      function tC(t, n) {
        var e = h(t),
          r = b(t),
          o = h(n),
          i = b(n);
        function a(t, n) {
          var a = h(n),
            u = h(t) * a,
            c = b(t) * a,
            l = b(n),
            s = l * e + u * r;
          return [p(c * o - s * i, u * e - l * r), S(s * o + c * i)];
        }
        return (
          (a.invert = function (t, n) {
            var a = h(n),
              u = h(t) * a,
              c = b(t) * a,
              l = b(n),
              s = l * o - c * i;
            return [p(c * o + l * i, u * e + s * r), S(s * e - u * r)];
          }),
          a
        );
      }
      function tP(t) {
        function n(n) {
          return (n = t(n[0] * l, n[1] * l)), (n[0] *= c), (n[1] *= c), n;
        }
        return (
          (t = tM(t[0] * l, t[1] * l, t.length > 2 ? t[2] * l : 0)),
          (n.invert = function (n) {
            return (
              (n = t.invert(n[0] * l, n[1] * l)), (n[0] *= c), (n[1] *= c), n
            );
          }),
          n
        );
      }
      function tj(t, n, e, r, o, i) {
        if (e) {
          var a = h(n),
            c = b(n),
            l = r * e;
          null == o
            ? ((o = n + r * u), (i = n - l / 2))
            : ((o = tN(a, o)),
              (i = tN(a, i)),
              (r > 0 ? o < i : o > i) && (o += r * u));
          for (var s, f = o; r > 0 ? f > i : f < i; f -= l)
            (s = X([a, -c * h(f), -c * b(f)])), t.point(s[0], s[1]);
        }
      }
      function tN(t, n) {
        (n = Y(n)), (n[0] -= t), $(n);
        var e = x(-n[1]);
        return ((0 > -n[2] ? -e : e) + u - 1e-6) % u;
      }
      function tT() {
        var t,
          n,
          e = tE([0, 0]),
          r = tE(90),
          o = tE(6),
          i = {
            point: function (e, r) {
              t.push((e = n(e, r))), (e[0] *= c), (e[1] *= c);
            },
          };
        function a() {
          var a = e.apply(this, arguments),
            u = r.apply(this, arguments) * l,
            c = o.apply(this, arguments) * l;
          return (
            (t = []),
            (n = tM(-a[0] * l, -a[1] * l, 0).invert),
            tj(i, u, c, 1),
            (a = { type: "Polygon", coordinates: [t] }),
            (t = n = null),
            a
          );
        }
        return (
          (a.center = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : tE([+t[0], +t[1]])), a)
              : e;
          }),
          (a.radius = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : tE(+t)), a)
              : r;
          }),
          (a.precision = function (t) {
            return arguments.length
              ? ((o = "function" == typeof t ? t : tE(+t)), a)
              : o;
          }),
          a
        );
      }
      function tA() {
        var t,
          n = [];
        return {
          point: function (n, e, r) {
            t.push([n, e, r]);
          },
          lineStart: function () {
            n.push((t = []));
          },
          lineEnd: M,
          rejoin: function () {
            n.length > 1 && n.push(n.pop().concat(n.shift()));
          },
          result: function () {
            var e = n;
            return (n = []), (t = null), e;
          },
        };
      }
      function tz(t, n) {
        return 1e-6 > s(t[0] - n[0]) && 1e-6 > s(t[1] - n[1]);
      }
      function tI(t, n, e, r) {
        (this.x = t),
          (this.z = n),
          (this.o = e),
          (this.e = r),
          (this.v = !1),
          (this.n = this.p = null);
      }
      function tZ(t, n, e, r, o) {
        var i,
          a,
          u = [],
          c = [];
        if (
          (t.forEach(function (t) {
            if (!((n = t.length - 1) <= 0)) {
              var n,
                e,
                r = t[0],
                a = t[n];
              if (tz(r, a)) {
                if (!r[2] && !a[2]) {
                  for (o.lineStart(), i = 0; i < n; ++i)
                    o.point((r = t[i])[0], r[1]);
                  o.lineEnd();
                  return;
                }
                a[0] += 2e-6;
              }
              u.push((e = new tI(r, t, null, !0))),
                c.push((e.o = new tI(r, null, e, !1))),
                u.push((e = new tI(a, t, null, !1))),
                c.push((e.o = new tI(a, null, e, !0)));
            }
          }),
          u.length)
        ) {
          for (c.sort(n), tR(u), tR(c), i = 0, a = c.length; i < a; ++i)
            c[i].e = e = !e;
          for (var l, s, f = u[0]; ; ) {
            for (var p = f, h = !0; p.v; ) if ((p = p.n) === f) return;
            (l = p.z), o.lineStart();
            do {
              if (((p.v = p.o.v = !0), p.e)) {
                if (h)
                  for (i = 0, a = l.length; i < a; ++i)
                    o.point((s = l[i])[0], s[1]);
                else r(p.x, p.n.x, 1, o);
                p = p.n;
              } else {
                if (h)
                  for (i = (l = p.p.z).length - 1; i >= 0; --i)
                    o.point((s = l[i])[0], s[1]);
                else r(p.x, p.p.x, -1, o);
                p = p.p;
              }
              (l = (p = p.o).z), (h = !h);
            } while (!p.v);
            o.lineEnd();
          }
        }
      }
      function tR(t) {
        if ((n = t.length)) {
          for (var n, e, r = 0, o = t[0]; ++r < n; )
            (o.n = e = t[r]), (e.p = o), (o = e);
          (o.n = e = t[0]), (e.p = o);
        }
      }
      function tH(t) {
        return s(t[0]) <= o ? t[0] : _(t[0]) * (((s(t[0]) + o) % u) - o);
      }
      function tL(t, n) {
        var e = tH(n),
          c = n[1],
          l = b(c),
          s = [b(e), -h(e), 0],
          f = 0,
          d = 0,
          v = new r();
        1 === l ? (c = i + 1e-6) : -1 === l && (c = -i - 1e-6);
        for (var g = 0, m = t.length; g < m; ++g)
          if ((_ = (y = t[g]).length))
            for (
              var y,
                _,
                w = y[_ - 1],
                E = tH(w),
                x = w[1] / 2 + a,
                M = b(x),
                k = h(x),
                O = 0;
              O < _;
              ++O, E = P, M = N, k = T, w = C
            ) {
              var C = y[O],
                P = tH(C),
                j = C[1] / 2 + a,
                N = b(j),
                T = h(j),
                A = P - E,
                z = A >= 0 ? 1 : -1,
                I = z * A,
                Z = I > o,
                R = M * N;
              if (
                (v.add(p(R * z * b(I), k * T + R * h(I))),
                (f += Z ? A + z * u : A),
                Z ^ (E >= e) ^ (P >= e))
              ) {
                var H = U(Y(w), Y(C));
                $(H);
                var L = U(s, H);
                $(L);
                var B = (Z ^ (A >= 0) ? -1 : 1) * S(L[2]);
                (c > B || (c === B && (H[0] || H[1]))) &&
                  (d += Z ^ (A >= 0) ? 1 : -1);
              }
            }
        return (f < -0.000001 || (f < 1e-6 && v < -0.000000000001)) ^ (1 & d);
      }
      function tB(t) {
        return Array.from(
          (function* (t) {
            for (let n of t) yield* n;
          })(t)
        );
      }
      function tD(t, n, e, r) {
        return function (o) {
          var i,
            a,
            u,
            c = n(o),
            l = tA(),
            s = n(l),
            f = !1,
            p = {
              point: h,
              lineStart: v,
              lineEnd: g,
              polygonStart: function () {
                (p.point = m),
                  (p.lineStart = y),
                  (p.lineEnd = b),
                  (a = []),
                  (i = []);
              },
              polygonEnd: function () {
                (p.point = h), (p.lineStart = v), (p.lineEnd = g), (a = tB(a));
                var t = tL(i, r);
                a.length
                  ? (f || (o.polygonStart(), (f = !0)), tZ(a, tG, t, e, o))
                  : t &&
                    (f || (o.polygonStart(), (f = !0)),
                    o.lineStart(),
                    e(null, null, 1, o),
                    o.lineEnd()),
                  f && (o.polygonEnd(), (f = !1)),
                  (a = i = null);
              },
              sphere: function () {
                o.polygonStart(),
                  o.lineStart(),
                  e(null, null, 1, o),
                  o.lineEnd(),
                  o.polygonEnd();
              },
            };
          function h(n, e) {
            t(n, e) && o.point(n, e);
          }
          function d(t, n) {
            c.point(t, n);
          }
          function v() {
            (p.point = d), c.lineStart();
          }
          function g() {
            (p.point = h), c.lineEnd();
          }
          function m(t, n) {
            u.push([t, n]), s.point(t, n);
          }
          function y() {
            s.lineStart(), (u = []);
          }
          function b() {
            m(u[0][0], u[0][1]), s.lineEnd();
            var t,
              n,
              e,
              r,
              c = s.clean(),
              p = l.result(),
              h = p.length;
            if ((u.pop(), i.push(u), (u = null), h)) {
              if (1 & c) {
                if ((n = (e = p[0]).length - 1) > 0) {
                  for (
                    f || (o.polygonStart(), (f = !0)), o.lineStart(), t = 0;
                    t < n;
                    ++t
                  )
                    o.point((r = e[t])[0], r[1]);
                  o.lineEnd();
                }
                return;
              }
              h > 1 && 2 & c && p.push(p.pop().concat(p.shift())),
                a.push(p.filter(tq));
            }
          }
          return p;
        };
      }
      function tq(t) {
        return t.length > 1;
      }
      function tG(t, n) {
        return (
          ((t = t.x)[0] < 0 ? t[1] - i - 1e-6 : i - t[1]) -
          ((n = n.x)[0] < 0 ? n[1] - i - 1e-6 : i - n[1])
        );
      }
      tS.invert = tS;
      var tW = tD(
        function () {
          return !0;
        },
        function (t) {
          var n,
            e = NaN,
            r = NaN,
            a = NaN;
          return {
            lineStart: function () {
              t.lineStart(), (n = 1);
            },
            point: function (u, c) {
              var l,
                p,
                d,
                v,
                g,
                m,
                y = u > 0 ? o : -o,
                _ = s(u - e);
              1e-6 > s(_ - o)
                ? (t.point(e, (r = (r + c) / 2 > 0 ? i : -i)),
                  t.point(a, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(y, r),
                  t.point(u, r),
                  (n = 0))
                : a !== y &&
                  _ >= o &&
                  (1e-6 > s(e - a) && (e -= 1e-6 * a),
                  1e-6 > s(u - y) && (u -= 1e-6 * y),
                  (l = e),
                  (p = r),
                  (r =
                    s((m = b(l - (d = u)))) > 1e-6
                      ? f(
                          (b(p) * (g = h(c)) * b(d) -
                            b(c) * (v = h(p)) * b(l)) /
                            (v * g * m)
                        )
                      : (p + c) / 2),
                  t.point(a, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(y, r),
                  (n = 0)),
                t.point((e = u), (r = c)),
                (a = y);
            },
            lineEnd: function () {
              t.lineEnd(), (e = r = NaN);
            },
            clean: function () {
              return 2 - n;
            },
          };
        },
        function (t, n, e, r) {
          var a;
          if (null == t)
            (a = e * i),
              r.point(-o, a),
              r.point(0, a),
              r.point(o, a),
              r.point(o, 0),
              r.point(o, -a),
              r.point(0, -a),
              r.point(-o, -a),
              r.point(-o, 0),
              r.point(-o, a);
          else if (s(t[0] - n[0]) > 1e-6) {
            var u = t[0] < n[0] ? o : -o;
            (a = (e * u) / 2), r.point(-u, a), r.point(0, a), r.point(u, a);
          } else r.point(n[0], n[1]);
        },
        [-o, -i]
      );
      function tX(t) {
        var n = h(t),
          e = 6 * l,
          r = n > 0,
          i = s(n) > 1e-6;
        function a(t, e) {
          return h(t) * h(e) > n;
        }
        function u(t, e, r) {
          var i = Y(t),
            a = Y(e),
            u = [1, 0, 0],
            c = U(i, a),
            l = F(c, c),
            f = c[0],
            p = l - f * f;
          if (!p) return !r && t;
          var h = U(u, c),
            d = V(u, (n * l) / p);
          K(d, V(c, (-n * f) / p));
          var v = F(d, h),
            g = F(h, h),
            m = v * v - g * (F(d, d) - 1);
          if (!(m < 0)) {
            var y = w(m),
              b = V(h, (-v - y) / g);
            if ((K(b, d), (b = X(b)), !r)) return b;
            var _,
              E = t[0],
              x = e[0],
              S = t[1],
              M = e[1];
            x < E && ((_ = E), (E = x), (x = _));
            var k = x - E,
              O = 1e-6 > s(k - o);
            if (
              (!O && M < S && ((_ = S), (S = M), (M = _)),
              O || k < 1e-6
                ? O
                  ? (S + M > 0) ^ (b[1] < (1e-6 > s(b[0] - E) ? S : M))
                  : S <= b[1] && b[1] <= M
                : (k > o) ^ (E <= b[0] && b[0] <= x))
            ) {
              var C = V(h, (-v + y) / g);
              return K(C, d), [b, X(C)];
            }
          }
        }
        function c(n, e) {
          var i = r ? t : o - t,
            a = 0;
          return (
            n < -i ? (a |= 1) : n > i && (a |= 2),
            e < -i ? (a |= 4) : e > i && (a |= 8),
            a
          );
        }
        return tD(
          a,
          function (t) {
            var n, e, l, s, f;
            return {
              lineStart: function () {
                (s = l = !1), (f = 1);
              },
              point: function (p, h) {
                var d,
                  v,
                  g = [p, h],
                  m = a(p, h),
                  y = r
                    ? m
                      ? 0
                      : c(p, h)
                    : m
                    ? c(p + (p < 0 ? o : -o), h)
                    : 0;
                !n && (s = l = m) && t.lineStart(),
                  m !== l &&
                    (!(v = u(n, g)) || tz(n, v) || tz(g, v)) &&
                    (g[2] = 1),
                  m !== l
                    ? ((f = 0),
                      m
                        ? (t.lineStart(), (v = u(g, n)), t.point(v[0], v[1]))
                        : ((v = u(n, g)), t.point(v[0], v[1], 2), t.lineEnd()),
                      (n = v))
                    : i &&
                      n &&
                      r ^ m &&
                      !(y & e) &&
                      (d = u(g, n, !0)) &&
                      ((f = 0),
                      r
                        ? (t.lineStart(),
                          t.point(d[0][0], d[0][1]),
                          t.point(d[1][0], d[1][1]),
                          t.lineEnd())
                        : (t.point(d[1][0], d[1][1]),
                          t.lineEnd(),
                          t.lineStart(),
                          t.point(d[0][0], d[0][1], 3))),
                  !m || (n && tz(n, g)) || t.point(g[0], g[1]),
                  (n = g),
                  (l = m),
                  (e = y);
              },
              lineEnd: function () {
                l && t.lineEnd(), (n = null);
              },
              clean: function () {
                return f | ((s && l) << 1);
              },
            };
          },
          function (n, r, o, i) {
            tj(i, t, e, o, n, r);
          },
          r ? [0, -t] : [-o, t - o]
        );
      }
      function tY(t, n, e, r) {
        function o(o, i) {
          return t <= o && o <= e && n <= i && i <= r;
        }
        function i(o, i, u, l) {
          var s = 0,
            f = 0;
          if (
            null == o ||
            (s = a(o, u)) !== (f = a(i, u)) ||
            (0 > c(o, i)) ^ (u > 0)
          )
            do l.point(0 === s || 3 === s ? t : e, s > 1 ? r : n);
            while ((s = (s + u + 4) % 4) !== f);
          else l.point(i[0], i[1]);
        }
        function a(r, o) {
          return 1e-6 > s(r[0] - t)
            ? o > 0
              ? 0
              : 3
            : 1e-6 > s(r[0] - e)
            ? o > 0
              ? 2
              : 1
            : 1e-6 > s(r[1] - n)
            ? o > 0
              ? 1
              : 0
            : o > 0
            ? 3
            : 2;
        }
        function u(t, n) {
          return c(t.x, n.x);
        }
        function c(t, n) {
          var e = a(t, 1),
            r = a(n, 1);
          return e !== r
            ? e - r
            : 0 === e
            ? n[1] - t[1]
            : 1 === e
            ? t[0] - n[0]
            : 2 === e
            ? t[1] - n[1]
            : n[0] - t[0];
        }
        return function (a) {
          var c,
            l,
            s,
            f,
            p,
            h,
            d,
            v,
            g,
            m,
            y,
            b = a,
            _ = tA(),
            w = {
              point: E,
              lineStart: function () {
                (w.point = x),
                  l && l.push((s = [])),
                  (m = !0),
                  (g = !1),
                  (d = v = NaN);
              },
              lineEnd: function () {
                c && (x(f, p), h && g && _.rejoin(), c.push(_.result())),
                  (w.point = E),
                  g && b.lineEnd();
              },
              polygonStart: function () {
                (b = _), (c = []), (l = []), (y = !0);
              },
              polygonEnd: function () {
                var n = (function () {
                    for (var n = 0, e = 0, o = l.length; e < o; ++e)
                      for (
                        var i,
                          a,
                          u = l[e],
                          c = 1,
                          s = u.length,
                          f = u[0],
                          p = f[0],
                          h = f[1];
                        c < s;
                        ++c
                      )
                        (i = p),
                          (a = h),
                          (p = (f = u[c])[0]),
                          (h = f[1]),
                          a <= r
                            ? h > r &&
                              (p - i) * (r - a) > (h - a) * (t - i) &&
                              ++n
                            : h <= r &&
                              (p - i) * (r - a) < (h - a) * (t - i) &&
                              --n;
                    return n;
                  })(),
                  e = y && n,
                  o = (c = tB(c)).length;
                (e || o) &&
                  (a.polygonStart(),
                  e && (a.lineStart(), i(null, null, 1, a), a.lineEnd()),
                  o && tZ(c, u, n, i, a),
                  a.polygonEnd()),
                  (b = a),
                  (c = l = s = null);
              },
            };
          function E(t, n) {
            o(t, n) && b.point(t, n);
          }
          function x(i, a) {
            var u = o(i, a);
            if ((l && s.push([i, a]), m))
              (f = i),
                (p = a),
                (h = u),
                (m = !1),
                u && (b.lineStart(), b.point(i, a));
            else if (u && g) b.point(i, a);
            else {
              var c = [
                  (d = Math.max(-1e9, Math.min(1e9, d))),
                  (v = Math.max(-1e9, Math.min(1e9, v))),
                ],
                _ = [
                  (i = Math.max(-1e9, Math.min(1e9, i))),
                  (a = Math.max(-1e9, Math.min(1e9, a))),
                ];
              !(function (t, n, e, r, o, i) {
                var a,
                  u = t[0],
                  c = t[1],
                  l = n[0],
                  s = n[1],
                  f = 0,
                  p = 1,
                  h = l - u,
                  d = s - c;
                if (((a = e - u), h || !(a > 0))) {
                  if (((a /= h), h < 0)) {
                    if (a < f) return;
                    a < p && (p = a);
                  } else if (h > 0) {
                    if (a > p) return;
                    a > f && (f = a);
                  }
                  if (((a = o - u), h || !(a < 0))) {
                    if (((a /= h), h < 0)) {
                      if (a > p) return;
                      a > f && (f = a);
                    } else if (h > 0) {
                      if (a < f) return;
                      a < p && (p = a);
                    }
                    if (((a = r - c), d || !(a > 0))) {
                      if (((a /= d), d < 0)) {
                        if (a < f) return;
                        a < p && (p = a);
                      } else if (d > 0) {
                        if (a > p) return;
                        a > f && (f = a);
                      }
                      if (((a = i - c), d || !(a < 0))) {
                        if (((a /= d), d < 0)) {
                          if (a > p) return;
                          a > f && (f = a);
                        } else if (d > 0) {
                          if (a < f) return;
                          a < p && (p = a);
                        }
                        return (
                          f > 0 && ((t[0] = u + f * h), (t[1] = c + f * d)),
                          p < 1 && ((n[0] = u + p * h), (n[1] = c + p * d)),
                          !0
                        );
                      }
                    }
                  }
                }
              })(c, _, t, n, e, r)
                ? u && (b.lineStart(), b.point(i, a), (y = !1))
                : (g || (b.lineStart(), b.point(c[0], c[1])),
                  b.point(_[0], _[1]),
                  u || b.lineEnd(),
                  (y = !1));
            }
            (d = i), (v = a), (g = u);
          }
          return w;
        };
      }
      function tF() {
        var t,
          n,
          e,
          r = 0,
          o = 0,
          i = 960,
          a = 500;
        return (e = {
          stream: function (e) {
            return t && n === e ? t : (t = tY(r, o, i, a)((n = e)));
          },
          extent: function (u) {
            return arguments.length
              ? ((r = +u[0][0]),
                (o = +u[0][1]),
                (i = +u[1][0]),
                (a = +u[1][1]),
                (t = n = null),
                e)
              : [
                  [r, o],
                  [i, a],
                ];
          },
        });
      }
      var tU = {
        sphere: M,
        point: M,
        lineStart: function () {
          (tU.point = tV), (tU.lineEnd = tK);
        },
        lineEnd: M,
        polygonStart: M,
        polygonEnd: M,
      };
      function tK() {
        tU.point = tU.lineEnd = M;
      }
      function tV(t, n) {
        (t *= l), (n *= l), (nz = t), (nI = b(n)), (nZ = h(n)), (tU.point = t$);
      }
      function t$(t, n) {
        t *= l;
        var e = b((n *= l)),
          r = h(n),
          o = s(t - nz),
          i = h(o),
          a = r * b(o),
          u = nZ * e - nI * r * i,
          c = nI * e + nZ * r * i;
        nA.add(p(w(a * a + u * u), c)), (nz = t), (nI = e), (nZ = r);
      }
      function tQ(t) {
        return (nA = new r()), N(t, tU), +nA;
      }
      var tJ = [null, null],
        t0 = { type: "LineString", coordinates: tJ };
      function t1(t, n) {
        return (tJ[0] = t), (tJ[1] = n), tQ(t0);
      }
      var t2 = {
          Feature: function (t, n) {
            return t6(t.geometry, n);
          },
          FeatureCollection: function (t, n) {
            for (var e = t.features, r = -1, o = e.length; ++r < o; )
              if (t6(e[r].geometry, n)) return !0;
            return !1;
          },
        },
        t5 = {
          Sphere: function () {
            return !0;
          },
          Point: function (t, n) {
            return 0 === t1(t.coordinates, n);
          },
          MultiPoint: function (t, n) {
            for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
              if (0 === t1(e[r], n)) return !0;
            return !1;
          },
          LineString: function (t, n) {
            return t3(t.coordinates, n);
          },
          MultiLineString: function (t, n) {
            for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
              if (t3(e[r], n)) return !0;
            return !1;
          },
          Polygon: function (t, n) {
            return t9(t.coordinates, n);
          },
          MultiPolygon: function (t, n) {
            for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
              if (t9(e[r], n)) return !0;
            return !1;
          },
          GeometryCollection: function (t, n) {
            for (var e = t.geometries, r = -1, o = e.length; ++r < o; )
              if (t6(e[r], n)) return !0;
            return !1;
          },
        };
      function t6(t, n) {
        return !!(t && t5.hasOwnProperty(t.type)) && t5[t.type](t, n);
      }
      function t3(t, n) {
        for (var e, r, o, i = 0, a = t.length; i < a; i++) {
          if (
            0 === (r = t1(t[i], n)) ||
            (i > 0 &&
              (o = t1(t[i], t[i - 1])) > 0 &&
              e <= o &&
              r <= o &&
              (e + r - o) * (1 - Math.pow((e - r) / o, 2)) < 1e-12 * o)
          )
            return !0;
          e = r;
        }
        return !1;
      }
      function t9(t, n) {
        return !!tL(t.map(t4), t7(n));
      }
      function t4(t) {
        return (t = t.map(t7)).pop(), t;
      }
      function t7(t) {
        return [t[0] * l, t[1] * l];
      }
      function t8(t, n) {
        return (t && t2.hasOwnProperty(t.type) ? t2[t.type] : t6)(t, n);
      }
      function nt(t, n, e) {
        (t = +t),
          (n = +n),
          (e =
            (o = arguments.length) < 2
              ? ((n = t), (t = 0), 1)
              : o < 3
              ? 1
              : +e);
        for (
          var r = -1, o = 0 | Math.max(0, Math.ceil((n - t) / e)), i = Array(o);
          ++r < o;

        )
          i[r] = t + r * e;
        return i;
      }
      function nn(t, n, e) {
        var r = nt(t, n - 1e-6, e).concat(n);
        return function (t) {
          return r.map(function (n) {
            return [t, n];
          });
        };
      }
      function ne(t, n, e) {
        var r = nt(t, n - 1e-6, e).concat(n);
        return function (t) {
          return r.map(function (n) {
            return [n, t];
          });
        };
      }
      function nr() {
        var t,
          n,
          e,
          r,
          o,
          i,
          a,
          u,
          c,
          l,
          f,
          p,
          h = 10,
          v = 10,
          g = 90,
          m = 360,
          y = 2.5;
        function b() {
          return { type: "MultiLineString", coordinates: _() };
        }
        function _() {
          return nt(d(r / g) * g, e, g)
            .map(f)
            .concat(nt(d(u / m) * m, a, m).map(p))
            .concat(
              nt(d(n / h) * h, t, h)
                .filter(function (t) {
                  return s(t % g) > 1e-6;
                })
                .map(c)
            )
            .concat(
              nt(d(i / v) * v, o, v)
                .filter(function (t) {
                  return s(t % m) > 1e-6;
                })
                .map(l)
            );
        }
        return (
          (b.lines = function () {
            return _().map(function (t) {
              return { type: "LineString", coordinates: t };
            });
          }),
          (b.outline = function () {
            return {
              type: "Polygon",
              coordinates: [
                f(r).concat(
                  p(a).slice(1),
                  f(e).reverse().slice(1),
                  p(u).reverse().slice(1)
                ),
              ],
            };
          }),
          (b.extent = function (t) {
            return arguments.length
              ? b.extentMajor(t).extentMinor(t)
              : b.extentMinor();
          }),
          (b.extentMajor = function (t) {
            return arguments.length
              ? ((r = +t[0][0]),
                (e = +t[1][0]),
                (u = +t[0][1]),
                (a = +t[1][1]),
                r > e && ((t = r), (r = e), (e = t)),
                u > a && ((t = u), (u = a), (a = t)),
                b.precision(y))
              : [
                  [r, u],
                  [e, a],
                ];
          }),
          (b.extentMinor = function (e) {
            return arguments.length
              ? ((n = +e[0][0]),
                (t = +e[1][0]),
                (i = +e[0][1]),
                (o = +e[1][1]),
                n > t && ((e = n), (n = t), (t = e)),
                i > o && ((e = i), (i = o), (o = e)),
                b.precision(y))
              : [
                  [n, i],
                  [t, o],
                ];
          }),
          (b.step = function (t) {
            return arguments.length
              ? b.stepMajor(t).stepMinor(t)
              : b.stepMinor();
          }),
          (b.stepMajor = function (t) {
            return arguments.length ? ((g = +t[0]), (m = +t[1]), b) : [g, m];
          }),
          (b.stepMinor = function (t) {
            return arguments.length ? ((h = +t[0]), (v = +t[1]), b) : [h, v];
          }),
          (b.precision = function (s) {
            return arguments.length
              ? ((y = +s),
                (c = nn(i, o, 90)),
                (l = ne(n, t, y)),
                (f = nn(u, a, 90)),
                (p = ne(r, e, y)),
                b)
              : y;
          }),
          b
            .extentMajor([
              [-180, -89.999999],
              [180, 89.999999],
            ])
            .extentMinor([
              [-180, -80.000001],
              [180, 80.000001],
            ])
        );
      }
      function no() {
        return nr()();
      }
      function ni(t, n) {
        var e,
          r,
          o = t[0] * l,
          i = t[1] * l,
          a = n[0] * l,
          u = n[1] * l,
          s = h(i),
          f = b(i),
          d = h(u),
          v = b(u),
          g = s * h(o),
          m = s * b(o),
          y = d * h(a),
          _ = d * b(a),
          E =
            2 *
            S(
              w(
                (e = b((e = u - i) / 2)) * e +
                  s * d * ((r = b((r = a - o) / 2)) * r)
              )
            ),
          x = b(E),
          M = E
            ? function (t) {
                var n = b((t *= E)) / x,
                  e = b(E - t) / x,
                  r = e * g + n * y,
                  o = e * m + n * _;
                return [p(o, r) * c, p(e * f + n * v, w(r * r + o * o)) * c];
              }
            : function () {
                return [o * c, i * c];
              };
        return (M.distance = E), M;
      }
      var na,
        nu,
        nc,
        nl,
        ns,
        nf,
        np,
        nh,
        nd,
        nv,
        ng,
        nm,
        ny,
        nb,
        n_,
        nw,
        nE,
        nx,
        nS,
        nM,
        nk,
        nO,
        nC,
        nP,
        nj,
        nN,
        nT,
        nA,
        nz,
        nI,
        nZ,
        nR,
        nH,
        nL,
        nB,
        nD = (t) => t,
        nq = new r(),
        nG = new r(),
        nW = {
          point: M,
          lineStart: M,
          lineEnd: M,
          polygonStart: function () {
            (nW.lineStart = nX), (nW.lineEnd = nU);
          },
          polygonEnd: function () {
            (nW.lineStart = nW.lineEnd = nW.point = M),
              nq.add(s(nG)),
              (nG = new r());
          },
          result: function () {
            var t = nq / 2;
            return (nq = new r()), t;
          },
        };
      function nX() {
        nW.point = nY;
      }
      function nY(t, n) {
        (nW.point = nF), (nR = nL = t), (nH = nB = n);
      }
      function nF(t, n) {
        nG.add(nB * t - nL * n), (nL = t), (nB = n);
      }
      function nU() {
        nF(nR, nH);
      }
      var nK,
        nV,
        n$,
        nQ,
        nJ = 1 / 0,
        n0 = 1 / 0,
        n1 = -1 / 0,
        n2 = n1,
        n5 = {
          point: function (t, n) {
            t < nJ && (nJ = t),
              t > n1 && (n1 = t),
              n < n0 && (n0 = n),
              n > n2 && (n2 = n);
          },
          lineStart: M,
          lineEnd: M,
          polygonStart: M,
          polygonEnd: M,
          result: function () {
            var t = [
              [nJ, n0],
              [n1, n2],
            ];
            return (n1 = n2 = -(n0 = nJ = 1 / 0)), t;
          },
        },
        n6 = 0,
        n3 = 0,
        n9 = 0,
        n4 = 0,
        n7 = 0,
        n8 = 0,
        et = 0,
        en = 0,
        ee = 0,
        er = {
          point: eo,
          lineStart: ei,
          lineEnd: ec,
          polygonStart: function () {
            (er.lineStart = el), (er.lineEnd = es);
          },
          polygonEnd: function () {
            (er.point = eo), (er.lineStart = ei), (er.lineEnd = ec);
          },
          result: function () {
            var t = ee
              ? [et / ee, en / ee]
              : n8
              ? [n4 / n8, n7 / n8]
              : n9
              ? [n6 / n9, n3 / n9]
              : [NaN, NaN];
            return (n6 = n3 = n9 = n4 = n7 = n8 = et = en = ee = 0), t;
          },
        };
      function eo(t, n) {
        (n6 += t), (n3 += n), ++n9;
      }
      function ei() {
        er.point = ea;
      }
      function ea(t, n) {
        (er.point = eu), eo((n$ = t), (nQ = n));
      }
      function eu(t, n) {
        var e = t - n$,
          r = n - nQ,
          o = w(e * e + r * r);
        (n4 += (o * (n$ + t)) / 2),
          (n7 += (o * (nQ + n)) / 2),
          (n8 += o),
          eo((n$ = t), (nQ = n));
      }
      function ec() {
        er.point = eo;
      }
      function el() {
        er.point = ef;
      }
      function es() {
        ep(nK, nV);
      }
      function ef(t, n) {
        (er.point = ep), eo((nK = n$ = t), (nV = nQ = n));
      }
      function ep(t, n) {
        var e = t - n$,
          r = n - nQ,
          o = w(e * e + r * r);
        (n4 += (o * (n$ + t)) / 2),
          (n7 += (o * (nQ + n)) / 2),
          (n8 += o),
          (et += (o = nQ * t - n$ * n) * (n$ + t)),
          (en += o * (nQ + n)),
          (ee += 3 * o),
          eo((n$ = t), (nQ = n));
      }
      function eh(t) {
        this._context = t;
      }
      eh.prototype = {
        _radius: 4.5,
        pointRadius: function (t) {
          return (this._radius = t), this;
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._context.closePath(), (this._point = NaN);
        },
        point: function (t, n) {
          switch (this._point) {
            case 0:
              this._context.moveTo(t, n), (this._point = 1);
              break;
            case 1:
              this._context.lineTo(t, n);
              break;
            default:
              this._context.moveTo(t + this._radius, n),
                this._context.arc(t, n, this._radius, 0, u);
          }
        },
        result: M,
      };
      var ed,
        ev,
        eg,
        em,
        ey,
        eb = new r(),
        e_ = {
          point: M,
          lineStart: function () {
            e_.point = ew;
          },
          lineEnd: function () {
            ed && eE(ev, eg), (e_.point = M);
          },
          polygonStart: function () {
            ed = !0;
          },
          polygonEnd: function () {
            ed = null;
          },
          result: function () {
            var t = +eb;
            return (eb = new r()), t;
          },
        };
      function ew(t, n) {
        (e_.point = eE), (ev = em = t), (eg = ey = n);
      }
      function eE(t, n) {
        (em -= t), (ey -= n), eb.add(w(em * em + ey * ey)), (em = t), (ey = n);
      }
      function ex() {
        this._string = [];
      }
      function eS(t) {
        return (
          "m0," +
          t +
          "a" +
          t +
          "," +
          t +
          " 0 1,1 0," +
          -2 * t +
          "a" +
          t +
          "," +
          t +
          " 0 1,1 0," +
          2 * t +
          "z"
        );
      }
      function eM(t, n) {
        var e,
          r,
          o = 4.5;
        function i(t) {
          return (
            t &&
              ("function" == typeof o &&
                r.pointRadius(+o.apply(this, arguments)),
              N(t, e(r))),
            r.result()
          );
        }
        return (
          (i.area = function (t) {
            return N(t, e(nW)), nW.result();
          }),
          (i.measure = function (t) {
            return N(t, e(e_)), e_.result();
          }),
          (i.bounds = function (t) {
            return N(t, e(n5)), n5.result();
          }),
          (i.centroid = function (t) {
            return N(t, e(er)), er.result();
          }),
          (i.projection = function (n) {
            return arguments.length
              ? ((e = null == n ? ((t = null), nD) : (t = n).stream), i)
              : t;
          }),
          (i.context = function (t) {
            return arguments.length
              ? ((r = null == t ? ((n = null), new ex()) : new eh((n = t))),
                "function" != typeof o && r.pointRadius(o),
                i)
              : n;
          }),
          (i.pointRadius = function (t) {
            return arguments.length
              ? ((o = "function" == typeof t ? t : (r.pointRadius(+t), +t)), i)
              : o;
          }),
          i.projection(t).context(n)
        );
      }
      function ek(t) {
        return { stream: eO(t) };
      }
      function eO(t) {
        return function (n) {
          var e = new eC();
          for (var r in t) e[r] = t[r];
          return (e.stream = n), e;
        };
      }
      function eC() {}
      function eP(t, n, e) {
        var r = t.clipExtent && t.clipExtent();
        return (
          t.scale(150).translate([0, 0]),
          null != r && t.clipExtent(null),
          N(e, t.stream(n5)),
          n(n5.result()),
          null != r && t.clipExtent(r),
          t
        );
      }
      function ej(t, n, e) {
        return eP(
          t,
          function (e) {
            var r = n[1][0] - n[0][0],
              o = n[1][1] - n[0][1],
              i = Math.min(r / (e[1][0] - e[0][0]), o / (e[1][1] - e[0][1])),
              a = +n[0][0] + (r - i * (e[1][0] + e[0][0])) / 2,
              u = +n[0][1] + (o - i * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * i).translate([a, u]);
          },
          e
        );
      }
      function eN(t, n, e) {
        return ej(t, [[0, 0], n], e);
      }
      function eT(t, n, e) {
        return eP(
          t,
          function (e) {
            var r = +n,
              o = r / (e[1][0] - e[0][0]),
              i = (r - o * (e[1][0] + e[0][0])) / 2,
              a = -o * e[0][1];
            t.scale(150 * o).translate([i, a]);
          },
          e
        );
      }
      function eA(t, n, e) {
        return eP(
          t,
          function (e) {
            var r = +n,
              o = r / (e[1][1] - e[0][1]),
              i = -o * e[0][0],
              a = (r - o * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * o).translate([i, a]);
          },
          e
        );
      }
      (ex.prototype = {
        _radius: 4.5,
        _circle: eS(4.5),
        pointRadius: function (t) {
          return (
            (t = +t) !== this._radius &&
              ((this._radius = t), (this._circle = null)),
            this
          );
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._string.push("Z"), (this._point = NaN);
        },
        point: function (t, n) {
          switch (this._point) {
            case 0:
              this._string.push("M", t, ",", n), (this._point = 1);
              break;
            case 1:
              this._string.push("L", t, ",", n);
              break;
            default:
              null == this._circle && (this._circle = eS(this._radius)),
                this._string.push("M", t, ",", n, this._circle);
          }
        },
        result: function () {
          if (!this._string.length) return null;
          var t = this._string.join("");
          return (this._string = []), t;
        },
      }),
        (eC.prototype = {
          constructor: eC,
          point: function (t, n) {
            this.stream.point(t, n);
          },
          sphere: function () {
            this.stream.sphere();
          },
          lineStart: function () {
            this.stream.lineStart();
          },
          lineEnd: function () {
            this.stream.lineEnd();
          },
          polygonStart: function () {
            this.stream.polygonStart();
          },
          polygonEnd: function () {
            this.stream.polygonEnd();
          },
        });
      var ez = h(30 * l);
      function eI(t, n) {
        return +n
          ? (function (t, n) {
              function e(r, o, i, a, u, c, l, f, h, d, v, g, m, y) {
                var b = l - r,
                  _ = f - o,
                  E = b * b + _ * _;
                if (E > 4 * n && m--) {
                  var x = a + d,
                    M = u + v,
                    k = c + g,
                    O = w(x * x + M * M + k * k),
                    C = S((k /= O)),
                    P =
                      1e-6 > s(s(k) - 1) || 1e-6 > s(i - h)
                        ? (i + h) / 2
                        : p(M, x),
                    j = t(P, C),
                    N = j[0],
                    T = j[1],
                    A = N - r,
                    z = T - o,
                    I = _ * A - b * z;
                  ((I * I) / E > n ||
                    s((b * A + _ * z) / E - 0.5) > 0.3 ||
                    a * d + u * v + c * g < ez) &&
                    (e(r, o, i, a, u, c, N, T, P, (x /= O), (M /= O), k, m, y),
                    y.point(N, T),
                    e(N, T, P, x, M, k, l, f, h, d, v, g, m, y));
                }
              }
              return function (n) {
                var r,
                  o,
                  i,
                  a,
                  u,
                  c,
                  l,
                  s,
                  f,
                  p,
                  h,
                  d,
                  v = {
                    point: g,
                    lineStart: m,
                    lineEnd: b,
                    polygonStart: function () {
                      n.polygonStart(), (v.lineStart = _);
                    },
                    polygonEnd: function () {
                      n.polygonEnd(), (v.lineStart = m);
                    },
                  };
                function g(e, r) {
                  (e = t(e, r)), n.point(e[0], e[1]);
                }
                function m() {
                  (s = NaN), (v.point = y), n.lineStart();
                }
                function y(r, o) {
                  var i = Y([r, o]),
                    a = t(r, o);
                  e(
                    s,
                    f,
                    l,
                    p,
                    h,
                    d,
                    (s = a[0]),
                    (f = a[1]),
                    (l = r),
                    (p = i[0]),
                    (h = i[1]),
                    (d = i[2]),
                    16,
                    n
                  ),
                    n.point(s, f);
                }
                function b() {
                  (v.point = g), n.lineEnd();
                }
                function _() {
                  m(), (v.point = w), (v.lineEnd = E);
                }
                function w(t, n) {
                  y((r = t), n),
                    (o = s),
                    (i = f),
                    (a = p),
                    (u = h),
                    (c = d),
                    (v.point = y);
                }
                function E() {
                  e(s, f, l, p, h, d, o, i, r, a, u, c, 16, n),
                    (v.lineEnd = b),
                    b();
                }
                return v;
              };
            })(t, n)
          : eO({
              point: function (n, e) {
                (n = t(n, e)), this.stream.point(n[0], n[1]);
              },
            });
      }
      var eZ = eO({
        point: function (t, n) {
          this.stream.point(t * l, n * l);
        },
      });
      function eR(t, n, e, r, o, i) {
        if (!i)
          return (function (t, n, e, r, o) {
            function i(i, a) {
              return [n + t * (i *= r), e - t * (a *= o)];
            }
            return (
              (i.invert = function (i, a) {
                return [((i - n) / t) * r, ((e - a) / t) * o];
              }),
              i
            );
          })(t, n, e, r, o);
        var a = h(i),
          u = b(i),
          c = a * t,
          l = u * t,
          s = a / t,
          f = u / t,
          p = (u * e - a * n) / t,
          d = (u * n + a * e) / t;
        function v(t, i) {
          return [c * (t *= r) - l * (i *= o) + n, e - l * t - c * i];
        }
        return (
          (v.invert = function (t, n) {
            return [r * (s * t - f * n + p), o * (d - f * t - s * n)];
          }),
          v
        );
      }
      function eH(t) {
        return eL(function () {
          return t;
        })();
      }
      function eL(t) {
        var n,
          e,
          r,
          o,
          i,
          a,
          u,
          s,
          f,
          p,
          h = 150,
          d = 480,
          v = 250,
          g = 0,
          m = 0,
          y = 0,
          b = 0,
          _ = 0,
          E = 0,
          x = 1,
          S = 1,
          M = null,
          k = tW,
          O = null,
          C = nD,
          P = 0.5;
        function j(t) {
          return s(t[0] * l, t[1] * l);
        }
        function N(t) {
          return (t = s.invert(t[0], t[1])) && [t[0] * c, t[1] * c];
        }
        function T() {
          var t = eR(h, 0, 0, x, S, E).apply(null, n(g, m)),
            r = eR(h, d - t[0], v - t[1], x, S, E);
          return (
            (e = tM(y, b, _)),
            (u = tx(n, r)),
            (s = tx(e, u)),
            (a = eI(u, P)),
            A()
          );
        }
        function A() {
          return (f = p = null), j;
        }
        return (
          (j.stream = function (t) {
            var n;
            return f && p === t
              ? f
              : (f = eZ(
                  ((n = e),
                  eO({
                    point: function (t, e) {
                      var r = n(t, e);
                      return this.stream.point(r[0], r[1]);
                    },
                  }))(k(a(C((p = t)))))
                ));
          }),
          (j.preclip = function (t) {
            return arguments.length ? ((k = t), (M = void 0), A()) : k;
          }),
          (j.postclip = function (t) {
            return arguments.length
              ? ((C = t), (O = r = o = i = null), A())
              : C;
          }),
          (j.clipAngle = function (t) {
            return arguments.length
              ? ((k = +t ? tX((M = t * l)) : ((M = null), tW)), A())
              : M * c;
          }),
          (j.clipExtent = function (t) {
            return arguments.length
              ? ((C =
                  null == t
                    ? ((O = r = o = i = null), nD)
                    : tY(
                        (O = +t[0][0]),
                        (r = +t[0][1]),
                        (o = +t[1][0]),
                        (i = +t[1][1])
                      )),
                A())
              : null == O
              ? null
              : [
                  [O, r],
                  [o, i],
                ];
          }),
          (j.scale = function (t) {
            return arguments.length ? ((h = +t), T()) : h;
          }),
          (j.translate = function (t) {
            return arguments.length ? ((d = +t[0]), (v = +t[1]), T()) : [d, v];
          }),
          (j.center = function (t) {
            return arguments.length
              ? ((g = (t[0] % 360) * l), (m = (t[1] % 360) * l), T())
              : [g * c, m * c];
          }),
          (j.rotate = function (t) {
            return arguments.length
              ? ((y = (t[0] % 360) * l),
                (b = (t[1] % 360) * l),
                (_ = t.length > 2 ? (t[2] % 360) * l : 0),
                T())
              : [y * c, b * c, _ * c];
          }),
          (j.angle = function (t) {
            return arguments.length ? ((E = (t % 360) * l), T()) : E * c;
          }),
          (j.reflectX = function (t) {
            return arguments.length ? ((x = t ? -1 : 1), T()) : x < 0;
          }),
          (j.reflectY = function (t) {
            return arguments.length ? ((S = t ? -1 : 1), T()) : S < 0;
          }),
          (j.precision = function (t) {
            return arguments.length ? ((a = eI(u, (P = t * t))), A()) : w(P);
          }),
          (j.fitExtent = function (t, n) {
            return ej(j, t, n);
          }),
          (j.fitSize = function (t, n) {
            return eN(j, t, n);
          }),
          (j.fitWidth = function (t, n) {
            return eT(j, t, n);
          }),
          (j.fitHeight = function (t, n) {
            return eA(j, t, n);
          }),
          function () {
            return (
              (n = t.apply(this, arguments)), (j.invert = n.invert && N), T()
            );
          }
        );
      }
      function eB(t) {
        var n = 0,
          e = o / 3,
          r = eL(t),
          i = r(n, e);
        return (
          (i.parallels = function (t) {
            return arguments.length
              ? r((n = t[0] * l), (e = t[1] * l))
              : [n * c, e * c];
          }),
          i
        );
      }
      function eD(t, n) {
        var e = b(t),
          r = (e + b(n)) / 2;
        if (1e-6 > s(r))
          return (function (t) {
            var n = h(t);
            function e(t, e) {
              return [t * n, b(e) / n];
            }
            return (
              (e.invert = function (t, e) {
                return [t / n, S(e * n)];
              }),
              e
            );
          })(t);
        var i = 1 + e * (2 * r - e),
          a = w(i) / r;
        function u(t, n) {
          var e = w(i - 2 * r * b(n)) / r;
          return [e * b((t *= r)), a - e * h(t)];
        }
        return (
          (u.invert = function (t, n) {
            var e = a - n,
              u = p(t, s(e)) * _(e);
            return (
              e * r < 0 && (u -= o * _(t) * _(e)),
              [u / r, S((i - (t * t + e * e) * r * r) / (2 * r))]
            );
          }),
          u
        );
      }
      function eq() {
        return eB(eD).scale(155.424).center([0, 33.6442]);
      }
      function eG() {
        return eq()
          .parallels([29.5, 45.5])
          .scale(1070)
          .translate([480, 250])
          .rotate([96, 0])
          .center([-0.6, 38.7]);
      }
      function eW() {
        var t,
          n,
          e,
          r,
          o,
          i,
          a = eG(),
          u = eq().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
          c = eq().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
          l = {
            point: function (t, n) {
              i = [t, n];
            },
          };
        function s(t) {
          var n = t[0],
            a = t[1];
          return (
            (i = null),
            e.point(n, a),
            i || (r.point(n, a), i) || (o.point(n, a), i)
          );
        }
        function f() {
          return (t = n = null), s;
        }
        return (
          (s.invert = function (t) {
            var n = a.scale(),
              e = a.translate(),
              r = (t[0] - e[0]) / n,
              o = (t[1] - e[1]) / n;
            return (
              o >= 0.12 && o < 0.234 && r >= -0.425 && r < -0.214
                ? u
                : o >= 0.166 && o < 0.234 && r >= -0.214 && r < -0.115
                ? c
                : a
            ).invert(t);
          }),
          (s.stream = function (e) {
            var r, o;
            return t && n === e
              ? t
              : ((o = (r = [a.stream((n = e)), u.stream(e), c.stream(e)])
                  .length),
                (t = {
                  point: function (t, n) {
                    for (var e = -1; ++e < o; ) r[e].point(t, n);
                  },
                  sphere: function () {
                    for (var t = -1; ++t < o; ) r[t].sphere();
                  },
                  lineStart: function () {
                    for (var t = -1; ++t < o; ) r[t].lineStart();
                  },
                  lineEnd: function () {
                    for (var t = -1; ++t < o; ) r[t].lineEnd();
                  },
                  polygonStart: function () {
                    for (var t = -1; ++t < o; ) r[t].polygonStart();
                  },
                  polygonEnd: function () {
                    for (var t = -1; ++t < o; ) r[t].polygonEnd();
                  },
                }));
          }),
          (s.precision = function (t) {
            return arguments.length
              ? (a.precision(t), u.precision(t), c.precision(t), f())
              : a.precision();
          }),
          (s.scale = function (t) {
            return arguments.length
              ? (a.scale(t),
                u.scale(0.35 * t),
                c.scale(t),
                s.translate(a.translate()))
              : a.scale();
          }),
          (s.translate = function (t) {
            if (!arguments.length) return a.translate();
            var n = a.scale(),
              i = +t[0],
              s = +t[1];
            return (
              (e = a
                .translate(t)
                .clipExtent([
                  [i - 0.455 * n, s - 0.238 * n],
                  [i + 0.455 * n, s + 0.238 * n],
                ])
                .stream(l)),
              (r = u
                .translate([i - 0.307 * n, s + 0.201 * n])
                .clipExtent([
                  [i - 0.425 * n + 1e-6, s + 0.12 * n + 1e-6],
                  [i - 0.214 * n - 1e-6, s + 0.234 * n - 1e-6],
                ])
                .stream(l)),
              (o = c
                .translate([i - 0.205 * n, s + 0.212 * n])
                .clipExtent([
                  [i - 0.214 * n + 1e-6, s + 0.166 * n + 1e-6],
                  [i - 0.115 * n - 1e-6, s + 0.234 * n - 1e-6],
                ])
                .stream(l)),
              f()
            );
          }),
          (s.fitExtent = function (t, n) {
            return ej(s, t, n);
          }),
          (s.fitSize = function (t, n) {
            return eN(s, t, n);
          }),
          (s.fitWidth = function (t, n) {
            return eT(s, t, n);
          }),
          (s.fitHeight = function (t, n) {
            return eA(s, t, n);
          }),
          s.scale(1070)
        );
      }
      function eX(t) {
        return function (n, e) {
          var r = h(n),
            o = h(e),
            i = t(r * o);
          return i === 1 / 0 ? [2, 0] : [i * o * b(n), i * b(e)];
        };
      }
      function eY(t) {
        return function (n, e) {
          var r = w(n * n + e * e),
            o = t(r),
            i = b(o);
          return [p(n * i, r * h(o)), S(r && (e * i) / r)];
        };
      }
      var eF = eX(function (t) {
        return w(2 / (1 + t));
      });
      function eU() {
        return eH(eF).scale(124.75).clipAngle(179.999);
      }
      eF.invert = eY(function (t) {
        return 2 * S(t / 2);
      });
      var eK = eX(function (t) {
        return (t = x(t)) && t / b(t);
      });
      function eV() {
        return eH(eK).scale(79.4188).clipAngle(179.999);
      }
      function e$(t, n) {
        return [t, m(E((i + n) / 2))];
      }
      function eQ() {
        return eJ(e$).scale(961 / u);
      }
      function eJ(t) {
        var n,
          e,
          r,
          i = eH(t),
          a = i.center,
          u = i.scale,
          c = i.translate,
          l = i.clipExtent,
          s = null;
        function f() {
          var a = o * u(),
            c = i(tP(i.rotate()).invert([0, 0]));
          return l(
            null == s
              ? [
                  [c[0] - a, c[1] - a],
                  [c[0] + a, c[1] + a],
                ]
              : t === e$
              ? [
                  [Math.max(c[0] - a, s), n],
                  [Math.min(c[0] + a, e), r],
                ]
              : [
                  [s, Math.max(c[1] - a, n)],
                  [e, Math.min(c[1] + a, r)],
                ]
          );
        }
        return (
          (i.scale = function (t) {
            return arguments.length ? (u(t), f()) : u();
          }),
          (i.translate = function (t) {
            return arguments.length ? (c(t), f()) : c();
          }),
          (i.center = function (t) {
            return arguments.length ? (a(t), f()) : a();
          }),
          (i.clipExtent = function (t) {
            return arguments.length
              ? (null == t
                  ? (s = n = e = r = null)
                  : ((s = +t[0][0]),
                    (n = +t[0][1]),
                    (e = +t[1][0]),
                    (r = +t[1][1])),
                f())
              : null == s
              ? null
              : [
                  [s, n],
                  [e, r],
                ];
          }),
          f()
        );
      }
      function e0(t) {
        return E((i + t) / 2);
      }
      function e1(t, n) {
        var e = h(t),
          r = t === n ? b(t) : m(e / h(n)) / m(e0(n) / e0(t)),
          a = (e * y(e0(t), r)) / r;
        if (!r) return e$;
        function u(t, n) {
          a > 0
            ? n < -i + 1e-6 && (n = -i + 1e-6)
            : n > i - 1e-6 && (n = i - 1e-6);
          var e = a / y(e0(n), r);
          return [e * b(r * t), a - e * h(r * t)];
        }
        return (
          (u.invert = function (t, n) {
            var e = a - n,
              u = _(r) * w(t * t + e * e),
              c = p(t, s(e)) * _(e);
            return (
              e * r < 0 && (c -= o * _(t) * _(e)),
              [c / r, 2 * f(y(a / u, 1 / r)) - i]
            );
          }),
          u
        );
      }
      function e2() {
        return eB(e1).scale(109.5).parallels([30, 30]);
      }
      function e5(t, n) {
        return [t, n];
      }
      function e6() {
        return eH(e5).scale(152.63);
      }
      function e3(t, n) {
        var e = h(t),
          r = t === n ? b(t) : (e - h(n)) / (n - t),
          i = e / r + t;
        if (1e-6 > s(r)) return e5;
        function a(t, n) {
          var e = i - n,
            o = r * t;
          return [e * b(o), i - e * h(o)];
        }
        return (
          (a.invert = function (t, n) {
            var e = i - n,
              a = p(t, s(e)) * _(e);
            return (
              e * r < 0 && (a -= o * _(t) * _(e)),
              [a / r, i - _(r) * w(t * t + e * e)]
            );
          }),
          a
        );
      }
      function e9() {
        return eB(e3).scale(131.154).center([0, 13.9389]);
      }
      (eK.invert = eY(function (t) {
        return t;
      })),
        (e$.invert = function (t, n) {
          return [t, 2 * f(v(n)) - i];
        }),
        (e5.invert = e5);
      var e4 = w(3) / 2;
      function e7(t, n) {
        var e = S(e4 * b(n)),
          r = e * e,
          o = r * r * r;
        return [
          (t * h(e)) /
            (e4 *
              (1.340264 +
                -0.24331799999999998 * r +
                o * (0.0062510000000000005 + 0.034164 * r))),
          e * (1.340264 + -0.081106 * r + o * (893e-6 + 0.003796 * r)),
        ];
      }
      function e8() {
        return eH(e7).scale(177.158);
      }
      function rt(t, n) {
        var e = h(n),
          r = h(t) * e;
        return [(e * b(t)) / r, b(n) / r];
      }
      function rn() {
        return eH(rt).scale(144.049).clipAngle(60);
      }
      function re() {
        var t,
          n,
          e,
          r,
          o,
          i,
          a,
          u = 1,
          s = 0,
          f = 0,
          p = 1,
          d = 1,
          v = 0,
          g = null,
          m = 1,
          y = 1,
          _ = eO({
            point: function (t, n) {
              var e = x([t, n]);
              this.stream.point(e[0], e[1]);
            },
          }),
          w = nD;
        function E() {
          return (m = u * p), (y = u * d), (i = a = null), x;
        }
        function x(e) {
          var r = e[0] * m,
            o = e[1] * y;
          if (v) {
            var i = o * t - r * n;
            (r = r * t + o * n), (o = i);
          }
          return [r + s, o + f];
        }
        return (
          (x.invert = function (e) {
            var r = e[0] - s,
              o = e[1] - f;
            if (v) {
              var i = o * t + r * n;
              (r = r * t - o * n), (o = i);
            }
            return [r / m, o / y];
          }),
          (x.stream = function (t) {
            return i && a === t ? i : (i = _(w((a = t))));
          }),
          (x.postclip = function (t) {
            return arguments.length
              ? ((w = t), (g = e = r = o = null), E())
              : w;
          }),
          (x.clipExtent = function (t) {
            return arguments.length
              ? ((w =
                  null == t
                    ? ((g = e = r = o = null), nD)
                    : tY(
                        (g = +t[0][0]),
                        (e = +t[0][1]),
                        (r = +t[1][0]),
                        (o = +t[1][1])
                      )),
                E())
              : null == g
              ? null
              : [
                  [g, e],
                  [r, o],
                ];
          }),
          (x.scale = function (t) {
            return arguments.length ? ((u = +t), E()) : u;
          }),
          (x.translate = function (t) {
            return arguments.length ? ((s = +t[0]), (f = +t[1]), E()) : [s, f];
          }),
          (x.angle = function (e) {
            return arguments.length
              ? ((n = b((v = (e % 360) * l))), (t = h(v)), E())
              : v * c;
          }),
          (x.reflectX = function (t) {
            return arguments.length ? ((p = t ? -1 : 1), E()) : p < 0;
          }),
          (x.reflectY = function (t) {
            return arguments.length ? ((d = t ? -1 : 1), E()) : d < 0;
          }),
          (x.fitExtent = function (t, n) {
            return ej(x, t, n);
          }),
          (x.fitSize = function (t, n) {
            return eN(x, t, n);
          }),
          (x.fitWidth = function (t, n) {
            return eT(x, t, n);
          }),
          (x.fitHeight = function (t, n) {
            return eA(x, t, n);
          }),
          x
        );
      }
      function rr(t, n) {
        var e = n * n,
          r = e * e;
        return [
          t *
            (0.8707 -
              0.131979 * e +
              r * (-0.013791 + r * (0.003971 * e - 0.001529 * r))),
          n *
            (1.007226 +
              e * (0.015085 + r * (-0.044475 + 0.028874 * e - 0.005916 * r))),
        ];
      }
      function ro() {
        return eH(rr).scale(175.295);
      }
      function ri(t, n) {
        return [h(n) * b(t), b(n)];
      }
      function ra() {
        return eH(ri).scale(249.5).clipAngle(90.000001);
      }
      function ru(t, n) {
        var e = h(n),
          r = 1 + h(t) * e;
        return [(e * b(t)) / r, b(n) / r];
      }
      function rc() {
        return eH(ru).scale(250).clipAngle(142);
      }
      function rl(t, n) {
        return [m(E((i + n) / 2)), -t];
      }
      function rs() {
        var t = eJ(rl),
          n = t.center,
          e = t.rotate;
        return (
          (t.center = function (t) {
            return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]];
          }),
          (t.rotate = function (t) {
            return arguments.length
              ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90])
              : [(t = e())[0], t[1], t[2] - 90];
          }),
          e([0, 0, 90]).scale(159.155)
        );
      }
      (e7.invert = function (t, n) {
        for (
          var e, r, o = n, i = o * o, a = i * i * i, u = 0;
          u < 12 &&
          ((r =
            o * (1.340264 + -0.081106 * i + a * (893e-6 + 0.003796 * i)) - n),
          (o -= e =
            r /
            (1.340264 +
              -0.24331799999999998 * i +
              a * (0.0062510000000000005 + 0.034164 * i))),
          (a = (i = o * o) * i * i),
          !(1e-12 > s(e)));
          ++u
        );
        return [
          (e4 *
            t *
            (1.340264 +
              -0.24331799999999998 * i +
              a * (0.0062510000000000005 + 0.034164 * i))) /
            h(o),
          S(b(o) / e4),
        ];
      }),
        (rt.invert = eY(f)),
        (rr.invert = function (t, n) {
          var e,
            r = n,
            o = 25;
          do {
            var i = r * r,
              a = i * i;
            r -= e =
              (r *
                (1.007226 +
                  i *
                    (0.015085 +
                      a * (-0.044475 + 0.028874 * i - 0.005916 * a))) -
                n) /
              (1.007226 +
                i *
                  (0.045255 +
                    a * (-0.311325 + 0.259866 * i - 0.005916 * 11 * a)));
          } while (s(e) > 1e-6 && --o > 0);
          return [
            t /
              (0.8707 +
                (i = r * r) *
                  (-0.131979 +
                    i * (-0.013791 + i * i * i * (0.003971 - 0.001529 * i)))),
            r,
          ];
        }),
        (ri.invert = eY(S)),
        (ru.invert = eY(function (t) {
          return 2 * f(t);
        })),
        (rl.invert = function (t, n) {
          return [-n, 2 * f(v(t)) - i];
        });
    },
    4313: function (t, n, e) {
      "use strict";
      function r(t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      }
      e.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    789: function (t, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = e(3888),
        o = e(1986);
      function i(t) {
        var n = (0, r.Z)(t);
        return (
          n.local
            ? function (t) {
                return function () {
                  return this.ownerDocument.createElementNS(t.space, t.local);
                };
              }
            : function (t) {
                return function () {
                  var n = this.ownerDocument,
                    e = this.namespaceURI;
                  return e === o.P && n.documentElement.namespaceURI === o.P
                    ? n.createElement(t)
                    : n.createElementNS(e, t);
                };
              }
        )(n);
      }
    },
    5387: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          create: function () {
            return i;
          },
          creator: function () {
            return r.Z;
          },
          local: function () {
            return u;
          },
          matcher: function () {
            return l.Z;
          },
          namespace: function () {
            return s.Z;
          },
          namespaces: function () {
            return f.Z;
          },
          pointer: function () {
            return p.Z;
          },
          pointers: function () {
            return d;
          },
          select: function () {
            return o.Z;
          },
          selectAll: function () {
            return m;
          },
          selection: function () {
            return g.ZP;
          },
          selector: function () {
            return y.Z;
          },
          selectorAll: function () {
            return b.Z;
          },
          style: function () {
            return _.S;
          },
          window: function () {
            return w.Z;
          },
        });
      var r = e(789),
        o = e(4017);
      function i(t) {
        return (0, o.Z)((0, r.Z)(t).call(document.documentElement));
      }
      var a = 0;
      function u() {
        return new c();
      }
      function c() {
        this._ = "@" + (++a).toString(36);
      }
      c.prototype = u.prototype = {
        constructor: c,
        get: function (t) {
          for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
          return t[n];
        },
        set: function (t, n) {
          return (t[this._] = n);
        },
        remove: function (t) {
          return this._ in t && delete t[this._];
        },
        toString: function () {
          return this._;
        },
      };
      var l = e(3083),
        s = e(3888),
        f = e(1986),
        p = e(3172),
        h = e(5553);
      function d(t, n) {
        return (
          t.target &&
            ((t = (0, h.Z)(t)),
            void 0 === n && (n = t.currentTarget),
            (t = t.touches || [t])),
          Array.from(t, (t) => (0, p.Z)(t, n))
        );
      }
      var v = e(4313),
        g = e(2434);
      function m(t) {
        return "string" == typeof t
          ? new g.Y1([document.querySelectorAll(t)], [document.documentElement])
          : new g.Y1([null == t ? [] : (0, v.Z)(t)], g.Jz);
      }
      var y = e(7936),
        b = e(3545),
        _ = e(6339),
        w = e(5021);
    },
    3083: function (t, n, e) {
      "use strict";
      function r(t) {
        return function () {
          return this.matches(t);
        };
      }
      function o(t) {
        return function (n) {
          return n.matches(t);
        };
      }
      e.d(n, {
        P: function () {
          return o;
        },
        Z: function () {
          return r;
        },
      });
    },
    3888: function (t, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = e(1986);
      function o(t) {
        var n = (t += ""),
          e = n.indexOf(":");
        return (
          e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
          r.Z.hasOwnProperty(n) ? { space: r.Z[n], local: t } : t
        );
      }
    },
    1986: function (t, n, e) {
      "use strict";
      e.d(n, {
        P: function () {
          return r;
        },
      });
      var r = "http://www.w3.org/1999/xhtml";
      n.Z = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: r,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
    },
    3172: function (t, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = e(5553);
      function o(t, n) {
        if (((t = (0, r.Z)(t)), void 0 === n && (n = t.currentTarget), n)) {
          var e = n.ownerSVGElement || n;
          if (e.createSVGPoint) {
            var o = e.createSVGPoint();
            return (
              (o.x = t.clientX),
              (o.y = t.clientY),
              [(o = o.matrixTransform(n.getScreenCTM().inverse())).x, o.y]
            );
          }
          if (n.getBoundingClientRect) {
            var i = n.getBoundingClientRect();
            return [
              t.clientX - i.left - n.clientLeft,
              t.clientY - i.top - n.clientTop,
            ];
          }
        }
        return [t.pageX, t.pageY];
      }
    },
    4017: function (t, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = e(2434);
      function o(t) {
        return "string" == typeof t
          ? new r.Y1([[document.querySelector(t)]], [document.documentElement])
          : new r.Y1([[t]], r.Jz);
      }
    },
    2434: function (t, n, e) {
      "use strict";
      e.d(n, {
        Y1: function () {
          return H;
        },
        ZP: function () {
          return B;
        },
        Jz: function () {
          return R;
        },
      });
      var r = e(7936),
        o = e(4313),
        i = e(3545),
        a = e(3083),
        u = Array.prototype.find;
      function c() {
        return this.firstElementChild;
      }
      var l = Array.prototype.filter;
      function s() {
        return this.children;
      }
      function f(t) {
        return Array(t.length);
      }
      function p(t, n) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n);
      }
      function h(t, n, e, r, o, i) {
        for (var a, u = 0, c = n.length, l = i.length; u < l; ++u)
          (a = n[u])
            ? ((a.__data__ = i[u]), (r[u] = a))
            : (e[u] = new p(t, i[u]));
        for (; u < c; ++u) (a = n[u]) && (o[u] = a);
      }
      function d(t, n, e, r, o, i, a) {
        var u,
          c,
          l,
          s = new Map(),
          f = n.length,
          h = i.length,
          d = Array(f);
        for (u = 0; u < f; ++u)
          (c = n[u]) &&
            ((d[u] = l = a.call(c, c.__data__, u, n) + ""),
            s.has(l) ? (o[u] = c) : s.set(l, c));
        for (u = 0; u < h; ++u)
          (l = a.call(t, i[u], u, i) + ""),
            (c = s.get(l))
              ? ((r[u] = c), (c.__data__ = i[u]), s.delete(l))
              : (e[u] = new p(t, i[u]));
        for (u = 0; u < f; ++u) (c = n[u]) && s.get(d[u]) === c && (o[u] = c);
      }
      function v(t) {
        return t.__data__;
      }
      function g(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      p.prototype = {
        constructor: p,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      var m = e(3888),
        y = e(6339);
      function b(t) {
        return t.trim().split(/^|\s+/);
      }
      function _(t) {
        return t.classList || new w(t);
      }
      function w(t) {
        (this._node = t), (this._names = b(t.getAttribute("class") || ""));
      }
      function E(t, n) {
        for (var e = _(t), r = -1, o = n.length; ++r < o; ) e.add(n[r]);
      }
      function x(t, n) {
        for (var e = _(t), r = -1, o = n.length; ++r < o; ) e.remove(n[r]);
      }
      function S() {
        this.textContent = "";
      }
      function M() {
        this.innerHTML = "";
      }
      function k() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function O() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      w.prototype = {
        add: function (t) {
          0 > this._names.indexOf(t) &&
            (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (t) {
          var n = this._names.indexOf(t);
          n >= 0 &&
            (this._names.splice(n, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      var C = e(789);
      function P() {
        return null;
      }
      function j() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function N() {
        var t = this.cloneNode(!1),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function T() {
        var t = this.cloneNode(!0),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function A(t) {
        return function () {
          var n = this.__on;
          if (n) {
            for (var e, r = 0, o = -1, i = n.length; r < i; ++r)
              ((e = n[r]), (t.type && e.type !== t.type) || e.name !== t.name)
                ? (n[++o] = e)
                : this.removeEventListener(e.type, e.listener, e.options);
            ++o ? (n.length = o) : delete this.__on;
          }
        };
      }
      function z(t, n, e) {
        return function () {
          var r,
            o = this.__on,
            i = function (t) {
              n.call(this, t, this.__data__);
            };
          if (o) {
            for (var a = 0, u = o.length; a < u; ++a)
              if ((r = o[a]).type === t.type && r.name === t.name) {
                this.removeEventListener(r.type, r.listener, r.options),
                  this.addEventListener(
                    r.type,
                    (r.listener = i),
                    (r.options = e)
                  ),
                  (r.value = n);
                return;
              }
          }
          this.addEventListener(t.type, i, e),
            (r = {
              type: t.type,
              name: t.name,
              value: n,
              listener: i,
              options: e,
            }),
            o ? o.push(r) : (this.__on = [r]);
        };
      }
      var I = e(5021);
      function Z(t, n, e) {
        var r = (0, I.Z)(t),
          o = r.CustomEvent;
        "function" == typeof o
          ? (o = new o(n, e))
          : ((o = r.document.createEvent("Event")),
            e
              ? (o.initEvent(n, e.bubbles, e.cancelable), (o.detail = e.detail))
              : o.initEvent(n, !1, !1)),
          t.dispatchEvent(o);
      }
      var R = [null];
      function H(t, n) {
        (this._groups = t), (this._parents = n);
      }
      function L() {
        return new H([[document.documentElement]], R);
      }
      H.prototype = L.prototype = {
        constructor: H,
        select: function (t) {
          "function" != typeof t && (t = (0, r.Z)(t));
          for (
            var n = this._groups, e = n.length, o = Array(e), i = 0;
            i < e;
            ++i
          )
            for (
              var a, u, c = n[i], l = c.length, s = (o[i] = Array(l)), f = 0;
              f < l;
              ++f
            )
              (a = c[f]) &&
                (u = t.call(a, a.__data__, f, c)) &&
                ("__data__" in a && (u.__data__ = a.__data__), (s[f] = u));
          return new H(o, this._parents);
        },
        selectAll: function (t) {
          if ("function" == typeof t) {
            var n;
            (n = t),
              (t = function () {
                var t = n.apply(this, arguments);
                return null == t ? [] : (0, o.Z)(t);
              });
          } else t = (0, i.Z)(t);
          for (
            var e = this._groups, r = e.length, a = [], u = [], c = 0;
            c < r;
            ++c
          )
            for (var l, s = e[c], f = s.length, p = 0; p < f; ++p)
              (l = s[p]) && (a.push(t.call(l, l.__data__, p, s)), u.push(l));
          return new H(a, u);
        },
        selectChild: function (t) {
          var n;
          return this.select(
            null == t
              ? c
              : ((n = "function" == typeof t ? t : (0, a.P)(t)),
                function () {
                  return u.call(this.children, n);
                })
          );
        },
        selectChildren: function (t) {
          var n;
          return this.selectAll(
            null == t
              ? s
              : ((n = "function" == typeof t ? t : (0, a.P)(t)),
                function () {
                  return l.call(this.children, n);
                })
          );
        },
        filter: function (t) {
          "function" != typeof t && (t = (0, a.Z)(t));
          for (
            var n = this._groups, e = n.length, r = Array(e), o = 0;
            o < e;
            ++o
          )
            for (
              var i, u = n[o], c = u.length, l = (r[o] = []), s = 0;
              s < c;
              ++s
            )
              (i = u[s]) && t.call(i, i.__data__, s, u) && l.push(i);
          return new H(r, this._parents);
        },
        data: function (t, n) {
          if (!arguments.length) return Array.from(this, v);
          var e = n ? d : h,
            r = this._parents,
            i = this._groups;
          "function" != typeof t &&
            ((w = t),
            (t = function () {
              return w;
            }));
          for (
            var a = i.length, u = Array(a), c = Array(a), l = Array(a), s = 0;
            s < a;
            ++s
          ) {
            var f = r[s],
              p = i[s],
              g = p.length,
              m = (0, o.Z)(t.call(f, f && f.__data__, s, r)),
              y = m.length,
              b = (c[s] = Array(y)),
              _ = (u[s] = Array(y));
            e(f, p, b, _, (l[s] = Array(g)), m, n);
            for (var w, E, x, S = 0, M = 0; S < y; ++S)
              if ((E = b[S])) {
                for (S >= M && (M = S + 1); !(x = _[M]) && ++M < y; );
                E._next = x || null;
              }
          }
          return ((u = new H(u, r))._enter = c), (u._exit = l), u;
        },
        enter: function () {
          return new H(this._enter || this._groups.map(f), this._parents);
        },
        exit: function () {
          return new H(this._exit || this._groups.map(f), this._parents);
        },
        join: function (t, n, e) {
          var r = this.enter(),
            o = this,
            i = this.exit();
          return (
            (r = "function" == typeof t ? t(r) : r.append(t + "")),
            null != n && (o = n(o)),
            null == e ? i.remove() : e(i),
            r && o ? r.merge(o).order() : o
          );
        },
        merge: function (t) {
          if (!(t instanceof H)) throw Error("invalid merge");
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              o = e.length,
              i = Math.min(r, o),
              a = Array(r),
              u = 0;
            u < i;
            ++u
          )
            for (
              var c,
                l = n[u],
                s = e[u],
                f = l.length,
                p = (a[u] = Array(f)),
                h = 0;
              h < f;
              ++h
            )
              (c = l[h] || s[h]) && (p[h] = c);
          for (; u < r; ++u) a[u] = n[u];
          return new H(a, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var r, o = t[n], i = o.length - 1, a = o[i]; --i >= 0; )
              (r = o[i]) &&
                (a &&
                  4 ^ r.compareDocumentPosition(a) &&
                  a.parentNode.insertBefore(r, a),
                (a = r));
          return this;
        },
        sort: function (t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
          }
          t || (t = g);
          for (
            var e = this._groups, r = e.length, o = Array(r), i = 0;
            i < r;
            ++i
          ) {
            for (
              var a, u = e[i], c = u.length, l = (o[i] = Array(c)), s = 0;
              s < c;
              ++s
            )
              (a = u[s]) && (l[s] = a);
            l.sort(n);
          }
          return new H(o, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r = t[n], o = 0, i = r.length; o < i; ++o) {
              var a = r[o];
              if (a) return a;
            }
          return null;
        },
        size: function () {
          let t = 0;
          for (let n of this) ++t;
          return t;
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
            for (var o, i = n[e], a = 0, u = i.length; a < u; ++a)
              (o = i[a]) && t.call(o, o.__data__, a, i);
          return this;
        },
        attr: function (t, n) {
          var e = (0, m.Z)(t);
          if (arguments.length < 2) {
            var r = this.node();
            return e.local
              ? r.getAttributeNS(e.space, e.local)
              : r.getAttribute(e);
          }
          return this.each(
            (null == n
              ? e.local
                ? function (t) {
                    return function () {
                      this.removeAttributeNS(t.space, t.local);
                    };
                  }
                : function (t) {
                    return function () {
                      this.removeAttribute(t);
                    };
                  }
              : "function" == typeof n
              ? e.local
                ? function (t, n) {
                    return function () {
                      var e = n.apply(this, arguments);
                      null == e
                        ? this.removeAttributeNS(t.space, t.local)
                        : this.setAttributeNS(t.space, t.local, e);
                    };
                  }
                : function (t, n) {
                    return function () {
                      var e = n.apply(this, arguments);
                      null == e
                        ? this.removeAttribute(t)
                        : this.setAttribute(t, e);
                    };
                  }
              : e.local
              ? function (t, n) {
                  return function () {
                    this.setAttributeNS(t.space, t.local, n);
                  };
                }
              : function (t, n) {
                  return function () {
                    this.setAttribute(t, n);
                  };
                })(e, n)
          );
        },
        style: y.Z,
        property: function (t, n) {
          return arguments.length > 1
            ? this.each(
                (null == n
                  ? function (t) {
                      return function () {
                        delete this[t];
                      };
                    }
                  : "function" == typeof n
                  ? function (t, n) {
                      return function () {
                        var e = n.apply(this, arguments);
                        null == e ? delete this[t] : (this[t] = e);
                      };
                    }
                  : function (t, n) {
                      return function () {
                        this[t] = n;
                      };
                    })(t, n)
              )
            : this.node()[t];
        },
        classed: function (t, n) {
          var e = b(t + "");
          if (arguments.length < 2) {
            for (var r = _(this.node()), o = -1, i = e.length; ++o < i; )
              if (!r.contains(e[o])) return !1;
            return !0;
          }
          return this.each(
            ("function" == typeof n
              ? function (t, n) {
                  return function () {
                    (n.apply(this, arguments) ? E : x)(this, t);
                  };
                }
              : n
              ? function (t) {
                  return function () {
                    E(this, t);
                  };
                }
              : function (t) {
                  return function () {
                    x(this, t);
                  };
                })(e, n)
          );
        },
        text: function (t) {
          return arguments.length
            ? this.each(
                null == t
                  ? S
                  : ("function" == typeof t
                      ? function (t) {
                          return function () {
                            var n = t.apply(this, arguments);
                            this.textContent = null == n ? "" : n;
                          };
                        }
                      : function (t) {
                          return function () {
                            this.textContent = t;
                          };
                        })(t)
              )
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(
                null == t
                  ? M
                  : ("function" == typeof t
                      ? function (t) {
                          return function () {
                            var n = t.apply(this, arguments);
                            this.innerHTML = null == n ? "" : n;
                          };
                        }
                      : function (t) {
                          return function () {
                            this.innerHTML = t;
                          };
                        })(t)
              )
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(k);
        },
        lower: function () {
          return this.each(O);
        },
        append: function (t) {
          var n = "function" == typeof t ? t : (0, C.Z)(t);
          return this.select(function () {
            return this.appendChild(n.apply(this, arguments));
          });
        },
        insert: function (t, n) {
          var e = "function" == typeof t ? t : (0, C.Z)(t),
            o = null == n ? P : "function" == typeof n ? n : (0, r.Z)(n);
          return this.select(function () {
            return this.insertBefore(
              e.apply(this, arguments),
              o.apply(this, arguments) || null
            );
          });
        },
        remove: function () {
          return this.each(j);
        },
        clone: function (t) {
          return this.select(t ? T : N);
        },
        datum: function (t) {
          return arguments.length
            ? this.property("__data__", t)
            : this.node().__data__;
        },
        on: function (t, n, e) {
          var r,
            o,
            i = (t + "")
              .trim()
              .split(/^|\s+/)
              .map(function (t) {
                var n = "",
                  e = t.indexOf(".");
                return (
                  e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                  { type: t, name: n }
                );
              }),
            a = i.length;
          if (arguments.length < 2) {
            var u = this.node().__on;
            if (u) {
              for (var c, l = 0, s = u.length; l < s; ++l)
                for (r = 0, c = u[l]; r < a; ++r)
                  if ((o = i[r]).type === c.type && o.name === c.name)
                    return c.value;
            }
            return;
          }
          for (r = 0, u = n ? z : A; r < a; ++r) this.each(u(i[r], n, e));
          return this;
        },
        dispatch: function (t, n) {
          return this.each(
            ("function" == typeof n
              ? function (t, n) {
                  return function () {
                    return Z(this, t, n.apply(this, arguments));
                  };
                }
              : function (t, n) {
                  return function () {
                    return Z(this, t, n);
                  };
                })(t, n)
          );
        },
        [Symbol.iterator]: function* () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var r, o = t[n], i = 0, a = o.length; i < a; ++i)
              (r = o[i]) && (yield r);
        },
      };
      var B = L;
    },
    6339: function (t, n, e) {
      "use strict";
      e.d(n, {
        S: function () {
          return i;
        },
        Z: function () {
          return o;
        },
      });
      var r = e(5021);
      function o(t, n, e) {
        return arguments.length > 1
          ? this.each(
              (null == n
                ? function (t) {
                    return function () {
                      this.style.removeProperty(t);
                    };
                  }
                : "function" == typeof n
                ? function (t, n, e) {
                    return function () {
                      var r = n.apply(this, arguments);
                      null == r
                        ? this.style.removeProperty(t)
                        : this.style.setProperty(t, r, e);
                    };
                  }
                : function (t, n, e) {
                    return function () {
                      this.style.setProperty(t, n, e);
                    };
                  })(t, n, null == e ? "" : e)
            )
          : i(this.node(), t);
      }
      function i(t, n) {
        return (
          t.style.getPropertyValue(n) ||
          (0, r.Z)(t).getComputedStyle(t, null).getPropertyValue(n)
        );
      }
    },
    7936: function (t, n, e) {
      "use strict";
      function r() {}
      function o(t) {
        return null == t
          ? r
          : function () {
              return this.querySelector(t);
            };
      }
      e.d(n, {
        Z: function () {
          return o;
        },
      });
    },
    3545: function (t, n, e) {
      "use strict";
      function r() {
        return [];
      }
      function o(t) {
        return null == t
          ? r
          : function () {
              return this.querySelectorAll(t);
            };
      }
      e.d(n, {
        Z: function () {
          return o;
        },
      });
    },
    5553: function (t, n, e) {
      "use strict";
      function r(t) {
        let n;
        for (; (n = t.sourceEvent); ) t = n;
        return t;
      }
      e.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    5021: function (t, n, e) {
      "use strict";
      function r(t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        );
      }
      e.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    9657: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          zoom: function () {
            return tJ;
          },
          zoomIdentity: function () {
            return tG;
          },
          zoomTransform: function () {
            return tW;
          },
        });
      var r,
        o = { value: () => {} };
      function i() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
          if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t))
            throw Error("illegal type: " + t);
          r[t] = [];
        }
        return new a(r);
      }
      function a(t) {
        this._ = t;
      }
      function u(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r)
          if (t[r].name === n) {
            (t[r] = o), (t = t.slice(0, r).concat(t.slice(r + 1)));
            break;
          }
        return null != e && t.push({ name: n, value: e }), t;
      }
      a.prototype = i.prototype = {
        constructor: a,
        on: function (t, n) {
          var e,
            r = this._,
            o = (t + "")
              .trim()
              .split(/^|\s+/)
              .map(function (t) {
                var n = "",
                  e = t.indexOf(".");
                if (
                  (e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                  t && !r.hasOwnProperty(t))
                )
                  throw Error("unknown type: " + t);
                return { type: t, name: n };
              }),
            i = -1,
            a = o.length;
          if (arguments.length < 2) {
            for (; ++i < a; )
              if (
                (e = (t = o[i]).type) &&
                (e = (function (t, n) {
                  for (var e, r = 0, o = t.length; r < o; ++r)
                    if ((e = t[r]).name === n) return e.value;
                })(r[e], t.name))
              )
                return e;
            return;
          }
          if (null != n && "function" != typeof n)
            throw Error("invalid callback: " + n);
          for (; ++i < a; )
            if ((e = (t = o[i]).type)) r[e] = u(r[e], t.name, n);
            else if (null == n) for (e in r) r[e] = u(r[e], t.name, null);
          return this;
        },
        copy: function () {
          var t = {},
            n = this._;
          for (var e in n) t[e] = n[e].slice();
          return new a(t);
        },
        call: function (t, n) {
          if ((e = arguments.length - 2) > 0)
            for (var e, r, o = Array(e), i = 0; i < e; ++i)
              o[i] = arguments[i + 2];
          if (!this._.hasOwnProperty(t)) throw Error("unknown type: " + t);
          for (r = this._[t], i = 0, e = r.length; i < e; ++i)
            r[i].value.apply(n, o);
        },
        apply: function (t, n, e) {
          if (!this._.hasOwnProperty(t)) throw Error("unknown type: " + t);
          for (var r = this._[t], o = 0, i = r.length; o < i; ++o)
            r[o].value.apply(n, e);
        },
      };
      var c = e(4017);
      function l(t) {
        t.preventDefault(), t.stopImmediatePropagation();
      }
      function s(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
      }
      var f,
        p,
        h = (function t(n, e, r) {
          function o(t, o) {
            var i,
              a,
              u = t[0],
              c = t[1],
              l = t[2],
              f = o[0],
              p = o[1],
              h = o[2],
              d = f - u,
              v = p - c,
              g = d * d + v * v;
            if (g < 1e-12)
              (a = Math.log(h / l) / n),
                (i = function (t) {
                  return [u + t * d, c + t * v, l * Math.exp(n * t * a)];
                });
            else {
              var m = Math.sqrt(g),
                y = (h * h - l * l + r * g) / (2 * l * e * m),
                b = (h * h - l * l - r * g) / (2 * h * e * m),
                _ = Math.log(Math.sqrt(y * y + 1) - y);
              (a = (Math.log(Math.sqrt(b * b + 1) - b) - _) / n),
                (i = function (t) {
                  var r,
                    o,
                    i = t * a,
                    f = s(_),
                    p =
                      (l / (e * m)) *
                      ((((r = Math.exp(2 * (r = n * i + _))) - 1) / (r + 1)) *
                        f -
                        ((o = Math.exp((o = _))) - 1 / o) / 2);
                  return [u + p * d, c + p * v, (l * f) / s(n * i + _)];
                });
            }
            return (i.duration = (1e3 * a * n) / Math.SQRT2), i;
          }
          return (
            (o.rho = function (n) {
              var e = Math.max(0.001, +n),
                r = e * e;
              return t(e, r, r * r);
            }),
            o
          );
        })(Math.SQRT2, 2, 4),
        d = e(3172),
        v = e(2434),
        g = 0,
        m = 0,
        y = 0,
        b = 0,
        _ = 0,
        w = 0,
        E =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        x =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function S() {
        return _ || (x(M), (_ = E.now() + w));
      }
      function M() {
        _ = 0;
      }
      function k() {
        this._call = this._time = this._next = null;
      }
      function O(t, n, e) {
        var r = new k();
        return r.restart(t, n, e), r;
      }
      function C() {
        (_ = (b = E.now()) + w), (g = m = 0);
        try {
          !(function () {
            S(), ++g;
            for (var t, n = f; n; )
              (t = _ - n._time) >= 0 && n._call.call(null, t), (n = n._next);
            --g;
          })();
        } finally {
          (g = 0),
            (function () {
              for (var t, n, e = f, r = 1 / 0; e; )
                e._call
                  ? (r > e._time && (r = e._time), (t = e), (e = e._next))
                  : ((n = e._next),
                    (e._next = null),
                    (e = t ? (t._next = n) : (f = n)));
              (p = t), j(r);
            })(),
            (_ = 0);
        }
      }
      function P() {
        var t = E.now(),
          n = t - b;
        n > 1e3 && ((w -= n), (b = t));
      }
      function j(t) {
        !g &&
          (m && (m = clearTimeout(m)),
          t - _ > 24
            ? (t < 1 / 0 && (m = setTimeout(C, t - E.now() - w)),
              y && (y = clearInterval(y)))
            : (y || ((b = E.now()), (y = setInterval(P, 1e3))), (g = 1), x(C)));
      }
      function N(t, n, e) {
        var r = new k();
        return (
          (n = null == n ? 0 : +n),
          r.restart(
            (e) => {
              r.stop(), t(e + n);
            },
            n,
            e
          ),
          r
        );
      }
      k.prototype = O.prototype = {
        constructor: k,
        restart: function (t, n, e) {
          if ("function" != typeof t)
            throw TypeError("callback is not a function");
          (e = (null == e ? S() : +e) + (null == n ? 0 : +n)),
            this._next ||
              p === this ||
              (p ? (p._next = this) : (f = this), (p = this)),
            (this._call = t),
            (this._time = e),
            j();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), j());
        },
      };
      var T = i("start", "end", "cancel", "interrupt"),
        A = [];
      function z(t, n, e, r, o, i) {
        var a = t.__transition;
        if (a) {
          if (e in a) return;
        } else t.__transition = {};
        !(function (t, n, e) {
          var r,
            o = t.__transition;
          function i(c) {
            var l, s, f, p;
            if (1 !== e.state) return u();
            for (l in o)
              if ((p = o[l]).name === e.name) {
                if (3 === p.state) return N(i);
                4 === p.state
                  ? ((p.state = 6),
                    p.timer.stop(),
                    p.on.call("interrupt", t, t.__data__, p.index, p.group),
                    delete o[l])
                  : +l < n &&
                    ((p.state = 6),
                    p.timer.stop(),
                    p.on.call("cancel", t, t.__data__, p.index, p.group),
                    delete o[l]);
              }
            if (
              (N(function () {
                3 === e.state &&
                  ((e.state = 4), e.timer.restart(a, e.delay, e.time), a(c));
              }),
              (e.state = 2),
              e.on.call("start", t, t.__data__, e.index, e.group),
              2 === e.state)
            ) {
              for (
                l = 0, e.state = 3, r = Array((f = e.tween.length)), s = -1;
                l < f;
                ++l
              )
                (p = e.tween[l].value.call(t, t.__data__, e.index, e.group)) &&
                  (r[++s] = p);
              r.length = s + 1;
            }
          }
          function a(n) {
            for (
              var o =
                  n < e.duration
                    ? e.ease.call(null, n / e.duration)
                    : (e.timer.restart(u), (e.state = 5), 1),
                i = -1,
                a = r.length;
              ++i < a;

            )
              r[i].call(t, o);
            5 === e.state &&
              (e.on.call("end", t, t.__data__, e.index, e.group), u());
          }
          function u() {
            for (var r in ((e.state = 6), e.timer.stop(), delete o[n], o))
              return;
            delete t.__transition;
          }
          (o[n] = e),
            (e.timer = O(
              function (t) {
                (e.state = 1),
                  e.timer.restart(i, e.delay, e.time),
                  e.delay <= t && i(t - e.delay);
              },
              0,
              e.time
            ));
        })(t, e, {
          name: n,
          index: r,
          group: o,
          on: T,
          tween: A,
          time: i.time,
          delay: i.delay,
          duration: i.duration,
          ease: i.ease,
          timer: null,
          state: 0,
        });
      }
      function I(t, n) {
        var e = R(t, n);
        if (e.state > 0) throw Error("too late; already scheduled");
        return e;
      }
      function Z(t, n) {
        var e = R(t, n);
        if (e.state > 3) throw Error("too late; already running");
        return e;
      }
      function R(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw Error("transition not found");
        return e;
      }
      function H(t, n) {
        var e,
          r,
          o,
          i = t.__transition,
          a = !0;
        if (i) {
          for (o in ((n = null == n ? null : n + ""), i)) {
            if ((e = i[o]).name !== n) {
              a = !1;
              continue;
            }
            (r = e.state > 2 && e.state < 5),
              (e.state = 6),
              e.timer.stop(),
              e.on.call(
                r ? "interrupt" : "cancel",
                t,
                t.__data__,
                e.index,
                e.group
              ),
              delete i[o];
          }
          a && delete t.__transition;
        }
      }
      function L(t, n) {
        return (
          (t = +t),
          (n = +n),
          function (e) {
            return t * (1 - e) + n * e;
          }
        );
      }
      var B = 180 / Math.PI,
        D = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        };
      function q(t, n, e, r, o, i) {
        var a, u, c;
        return (
          (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
          (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
          (u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (c /= u)),
          t * r < n * e && ((t = -t), (n = -n), (c = -c), (a = -a)),
          {
            translateX: o,
            translateY: i,
            rotate: Math.atan2(n, t) * B,
            skewX: Math.atan(c) * B,
            scaleX: a,
            scaleY: u,
          }
        );
      }
      function G(t, n, e, r) {
        function o(t) {
          return t.length ? t.pop() + " " : "";
        }
        return function (i, a) {
          var u,
            c,
            l,
            s,
            f = [],
            p = [];
          return (
            (i = t(i)),
            (a = t(a)),
            !(function (t, r, o, i, a, u) {
              if (t !== o || r !== i) {
                var c = a.push("translate(", null, n, null, e);
                u.push({ i: c - 4, x: L(t, o) }, { i: c - 2, x: L(r, i) });
              } else (o || i) && a.push("translate(" + o + n + i + e);
            })(i.translateX, i.translateY, a.translateX, a.translateY, f, p),
            (u = i.rotate) !== (c = a.rotate)
              ? (u - c > 180 ? (c += 360) : c - u > 180 && (u += 360),
                p.push({
                  i: f.push(o(f) + "rotate(", null, r) - 2,
                  x: L(u, c),
                }))
              : c && f.push(o(f) + "rotate(" + c + r),
            (l = i.skewX) !== (s = a.skewX)
              ? p.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: L(l, s) })
              : s && f.push(o(f) + "skewX(" + s + r),
            !(function (t, n, e, r, i, a) {
              if (t !== e || n !== r) {
                var u = i.push(o(i) + "scale(", null, ",", null, ")");
                a.push({ i: u - 4, x: L(t, e) }, { i: u - 2, x: L(n, r) });
              } else
                (1 !== e || 1 !== r) &&
                  i.push(o(i) + "scale(" + e + "," + r + ")");
            })(i.scaleX, i.scaleY, a.scaleX, a.scaleY, f, p),
            (i = a = null),
            function (t) {
              for (var n, e = -1, r = p.length; ++e < r; )
                f[(n = p[e]).i] = n.x(t);
              return f.join("");
            }
          );
        };
      }
      var W = G(
          function (t) {
            let n = new (
              "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(t + "");
            return n.isIdentity ? D : q(n.a, n.b, n.c, n.d, n.e, n.f);
          },
          "px, ",
          "px)",
          "deg)"
        ),
        X = G(
          function (t) {
            return null == t
              ? D
              : (r ||
                  (r = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g"
                  )),
                r.setAttribute("transform", t),
                (t = r.transform.baseVal.consolidate()))
              ? q((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
              : D;
          },
          ", ",
          ")",
          ")"
        ),
        Y = e(3888);
      function F(t, n, e) {
        var r = t._id;
        return (
          t.each(function () {
            var t = Z(this, r);
            (t.value || (t.value = {}))[n] = e.apply(this, arguments);
          }),
          function (t) {
            return R(t, r).value[n];
          }
        );
      }
      function U(t, n, e) {
        (t.prototype = n.prototype = e), (e.constructor = t);
      }
      function K(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e;
      }
      function V() {}
      var $ = "\\s*([+-]?\\d+)\\s*",
        Q = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        J = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        tt = /^#([0-9a-f]{3,8})$/,
        tn = RegExp("^rgb\\(" + [$, $, $] + "\\)$"),
        te = RegExp("^rgb\\(" + [J, J, J] + "\\)$"),
        tr = RegExp("^rgba\\(" + [$, $, $, Q] + "\\)$"),
        to = RegExp("^rgba\\(" + [J, J, J, Q] + "\\)$"),
        ti = RegExp("^hsl\\(" + [Q, J, J] + "\\)$"),
        ta = RegExp("^hsla\\(" + [Q, J, J, Q] + "\\)$"),
        tu = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function tc() {
        return this.rgb().formatHex();
      }
      function tl() {
        return this.rgb().formatRgb();
      }
      function ts(t) {
        var n, e;
        return (
          (t = (t + "").trim().toLowerCase()),
          (n = tt.exec(t))
            ? ((e = n[1].length),
              (n = parseInt(n[1], 16)),
              6 === e
                ? tf(n)
                : 3 === e
                ? new td(
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (240 & n),
                    ((15 & n) << 4) | (15 & n),
                    1
                  )
                : 8 === e
                ? tp(
                    (n >> 24) & 255,
                    (n >> 16) & 255,
                    (n >> 8) & 255,
                    (255 & n) / 255
                  )
                : 4 === e
                ? tp(
                    ((n >> 12) & 15) | ((n >> 8) & 240),
                    ((n >> 8) & 15) | ((n >> 4) & 240),
                    ((n >> 4) & 15) | (240 & n),
                    (((15 & n) << 4) | (15 & n)) / 255
                  )
                : null)
            : (n = tn.exec(t))
            ? new td(n[1], n[2], n[3], 1)
            : (n = te.exec(t))
            ? new td(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                1
              )
            : (n = tr.exec(t))
            ? tp(n[1], n[2], n[3], n[4])
            : (n = to.exec(t))
            ? tp(
                (255 * n[1]) / 100,
                (255 * n[2]) / 100,
                (255 * n[3]) / 100,
                n[4]
              )
            : (n = ti.exec(t))
            ? ty(n[1], n[2] / 100, n[3] / 100, 1)
            : (n = ta.exec(t))
            ? ty(n[1], n[2] / 100, n[3] / 100, n[4])
            : tu.hasOwnProperty(t)
            ? tf(tu[t])
            : "transparent" === t
            ? new td(NaN, NaN, NaN, 0)
            : null
        );
      }
      function tf(t) {
        return new td((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function tp(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new td(t, n, e, r);
      }
      function th(t, n, e, r) {
        var o;
        return 1 == arguments.length
          ? ((o = t) instanceof V || (o = ts(o)), o)
            ? new td((o = o.rgb()).r, o.g, o.b, o.opacity)
            : new td()
          : new td(t, n, e, null == r ? 1 : r);
      }
      function td(t, n, e, r) {
        (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
      }
      function tv() {
        return "#" + tm(this.r) + tm(this.g) + tm(this.b);
      }
      function tg() {
        var t = this.opacity;
        return (
          (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
            ? "rgb("
            : "rgba(") +
          Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
          (1 === t ? ")" : ", " + t + ")")
        );
      }
      function tm(t) {
        return (
          ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16
            ? "0"
            : "") + t.toString(16)
        );
      }
      function ty(t, n, e, r) {
        return (
          r <= 0
            ? (t = n = e = NaN)
            : e <= 0 || e >= 1
            ? (t = n = NaN)
            : n <= 0 && (t = NaN),
          new t_(t, n, e, r)
        );
      }
      function tb(t) {
        if (t instanceof t_) return new t_(t.h, t.s, t.l, t.opacity);
        if ((t instanceof V || (t = ts(t)), !t)) return new t_();
        if (t instanceof t_) return t;
        var n = (t = t.rgb()).r / 255,
          e = t.g / 255,
          r = t.b / 255,
          o = Math.min(n, e, r),
          i = Math.max(n, e, r),
          a = NaN,
          u = i - o,
          c = (i + o) / 2;
        return (
          u
            ? ((a =
                n === i
                  ? (e - r) / u + (e < r) * 6
                  : e === i
                  ? (r - n) / u + 2
                  : (n - e) / u + 4),
              (u /= c < 0.5 ? i + o : 2 - i - o),
              (a *= 60))
            : (u = c > 0 && c < 1 ? 0 : a),
          new t_(a, u, c, t.opacity)
        );
      }
      function t_(t, n, e, r) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
      }
      function tw(t, n, e) {
        return (
          (t < 60
            ? n + ((e - n) * t) / 60
            : t < 180
            ? e
            : t < 240
            ? n + ((e - n) * (240 - t)) / 60
            : n) * 255
        );
      }
      function tE(t, n, e, r, o) {
        var i = t * t,
          a = i * t;
        return (
          ((1 - 3 * t + 3 * i - a) * n +
            (4 - 6 * i + 3 * a) * e +
            (1 + 3 * t + 3 * i - 3 * a) * r +
            a * o) /
          6
        );
      }
      U(V, ts, {
        copy: function (t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: tc,
        formatHex: tc,
        formatHsl: function () {
          return tb(this).formatHsl();
        },
        formatRgb: tl,
        toString: tl,
      }),
        U(
          td,
          th,
          K(V, {
            brighter: function (t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new td(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new td(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            displayable: function () {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: tv,
            formatHex: tv,
            formatRgb: tg,
            toString: tg,
          })
        ),
        U(
          t_,
          function (t, n, e, r) {
            return 1 == arguments.length
              ? tb(t)
              : new t_(t, n, e, null == r ? 1 : r);
          },
          K(V, {
            brighter: function (t) {
              return (
                (t =
                  null == t
                    ? 1.4285714285714286
                    : Math.pow(1.4285714285714286, t)),
                new t_(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new t_(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb: function () {
              var t = (this.h % 360) + (this.h < 0) * 360,
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < 0.5 ? e : 1 - e) * n,
                o = 2 * e - r;
              return new td(
                tw(t >= 240 ? t - 240 : t + 120, o, r),
                tw(t, o, r),
                tw(t < 120 ? t + 240 : t - 120, o, r),
                this.opacity
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function () {
              var t = this.opacity;
              return (
                (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                  ? "hsl("
                  : "hsla(") +
                (this.h || 0) +
                ", " +
                100 * (this.s || 0) +
                "%, " +
                100 * (this.l || 0) +
                "%" +
                (1 === t ? ")" : ", " + t + ")")
              );
            },
          })
        );
      var tx = (t) => () => t;
      function tS(t, n) {
        var e = n - t;
        return e
          ? function (n) {
              return t + n * e;
            }
          : tx(isNaN(t) ? n : t);
      }
      var tM = (function t(n) {
        var e,
          r =
            1 == (e = +(e = n))
              ? tS
              : function (t, n) {
                  var r, o, i;
                  return n - t
                    ? ((r = t),
                      (o = n),
                      (r = Math.pow(r, (i = e))),
                      (o = Math.pow(o, i) - r),
                      (i = 1 / i),
                      function (t) {
                        return Math.pow(r + t * o, i);
                      })
                    : tx(isNaN(t) ? n : t);
                };
        function o(t, n) {
          var e = r((t = th(t)).r, (n = th(n)).r),
            o = r(t.g, n.g),
            i = r(t.b, n.b),
            a = tS(t.opacity, n.opacity);
          return function (n) {
            return (
              (t.r = e(n)),
              (t.g = o(n)),
              (t.b = i(n)),
              (t.opacity = a(n)),
              t + ""
            );
          };
        }
        return (o.gamma = t), o;
      })(1);
      function tk(t) {
        return function (n) {
          var e,
            r,
            o = n.length,
            i = Array(o),
            a = Array(o),
            u = Array(o);
          for (e = 0; e < o; ++e)
            (r = th(n[e])),
              (i[e] = r.r || 0),
              (a[e] = r.g || 0),
              (u[e] = r.b || 0);
          return (
            (i = t(i)),
            (a = t(a)),
            (u = t(u)),
            (r.opacity = 1),
            function (t) {
              return (r.r = i(t)), (r.g = a(t)), (r.b = u(t)), r + "";
            }
          );
        };
      }
      tk(function (t) {
        var n = t.length - 1;
        return function (e) {
          var r =
              e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            o = t[r],
            i = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * o - i,
            u = r < n - 1 ? t[r + 2] : 2 * i - o;
          return tE((e - r / n) * n, a, o, i, u);
        };
      }),
        tk(function (t) {
          var n = t.length;
          return function (e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
              o = t[(r + n - 1) % n],
              i = t[r % n],
              a = t[(r + 1) % n],
              u = t[(r + 2) % n];
            return tE((e - r / n) * n, o, i, a, u);
          };
        });
      var tO = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        tC = RegExp(tO.source, "g");
      function tP(t, n) {
        var e;
        return (
          "number" == typeof n
            ? L
            : n instanceof ts
            ? tM
            : (e = ts(n))
            ? ((n = e), tM)
            : function (t, n) {
                var e,
                  r,
                  o,
                  i,
                  a,
                  u = (tO.lastIndex = tC.lastIndex = 0),
                  c = -1,
                  l = [],
                  s = [];
                for (t += "", n += ""; (o = tO.exec(t)) && (i = tC.exec(n)); )
                  (a = i.index) > u &&
                    ((a = n.slice(u, a)), l[c] ? (l[c] += a) : (l[++c] = a)),
                    (o = o[0]) === (i = i[0])
                      ? l[c]
                        ? (l[c] += i)
                        : (l[++c] = i)
                      : ((l[++c] = null), s.push({ i: c, x: L(o, i) })),
                    (u = tC.lastIndex);
                return (
                  u < n.length &&
                    ((a = n.slice(u)), l[c] ? (l[c] += a) : (l[++c] = a)),
                  l.length < 2
                    ? s[0]
                      ? ((e = s[0].x),
                        function (t) {
                          return e(t) + "";
                        })
                      : ((r = n),
                        function () {
                          return r;
                        })
                    : ((n = s.length),
                      function (t) {
                        for (var e, r = 0; r < n; ++r) l[(e = s[r]).i] = e.x(t);
                        return l.join("");
                      })
                );
              }
        )(t, n);
      }
      var tj = e(3083),
        tN = e(7936),
        tT = e(3545),
        tA = v.ZP.prototype.constructor,
        tz = e(6339);
      function tI(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      var tZ = 0;
      function tR(t, n, e, r) {
        (this._groups = t),
          (this._parents = n),
          (this._name = e),
          (this._id = r);
      }
      var tH = v.ZP.prototype;
      tR.prototype = function (t) {
        return (0, v.ZP)().transition(t);
      }.prototype = {
        constructor: tR,
        select: function (t) {
          var n = this._name,
            e = this._id;
          "function" != typeof t && (t = (0, tN.Z)(t));
          for (
            var r = this._groups, o = r.length, i = Array(o), a = 0;
            a < o;
            ++a
          )
            for (
              var u, c, l = r[a], s = l.length, f = (i[a] = Array(s)), p = 0;
              p < s;
              ++p
            )
              (u = l[p]) &&
                (c = t.call(u, u.__data__, p, l)) &&
                ("__data__" in u && (c.__data__ = u.__data__),
                (f[p] = c),
                z(f[p], n, e, p, f, R(u, e)));
          return new tR(i, this._parents, n, e);
        },
        selectAll: function (t) {
          var n = this._name,
            e = this._id;
          "function" != typeof t && (t = (0, tT.Z)(t));
          for (
            var r = this._groups, o = r.length, i = [], a = [], u = 0;
            u < o;
            ++u
          )
            for (var c, l = r[u], s = l.length, f = 0; f < s; ++f)
              if ((c = l[f])) {
                for (
                  var p,
                    h = t.call(c, c.__data__, f, l),
                    d = R(c, e),
                    v = 0,
                    g = h.length;
                  v < g;
                  ++v
                )
                  (p = h[v]) && z(p, n, e, v, h, d);
                i.push(h), a.push(c);
              }
          return new tR(i, a, n, e);
        },
        filter: function (t) {
          "function" != typeof t && (t = (0, tj.Z)(t));
          for (
            var n = this._groups, e = n.length, r = Array(e), o = 0;
            o < e;
            ++o
          )
            for (
              var i, a = n[o], u = a.length, c = (r[o] = []), l = 0;
              l < u;
              ++l
            )
              (i = a[l]) && t.call(i, i.__data__, l, a) && c.push(i);
          return new tR(r, this._parents, this._name, this._id);
        },
        merge: function (t) {
          if (t._id !== this._id) throw Error();
          for (
            var n = this._groups,
              e = t._groups,
              r = n.length,
              o = e.length,
              i = Math.min(r, o),
              a = Array(r),
              u = 0;
            u < i;
            ++u
          )
            for (
              var c,
                l = n[u],
                s = e[u],
                f = l.length,
                p = (a[u] = Array(f)),
                h = 0;
              h < f;
              ++h
            )
              (c = l[h] || s[h]) && (p[h] = c);
          for (; u < r; ++u) a[u] = n[u];
          return new tR(a, this._parents, this._name, this._id);
        },
        selection: function () {
          return new tA(this._groups, this._parents);
        },
        transition: function () {
          for (
            var t = this._name,
              n = this._id,
              e = ++tZ,
              r = this._groups,
              o = r.length,
              i = 0;
            i < o;
            ++i
          )
            for (var a, u = r[i], c = u.length, l = 0; l < c; ++l)
              if ((a = u[l])) {
                var s = R(a, n);
                z(a, t, e, l, u, {
                  time: s.time + s.delay + s.duration,
                  delay: 0,
                  duration: s.duration,
                  ease: s.ease,
                });
              }
          return new tR(r, this._parents, t, e);
        },
        call: tH.call,
        nodes: tH.nodes,
        node: tH.node,
        size: tH.size,
        empty: tH.empty,
        each: tH.each,
        on: function (t, n) {
          var e,
            r,
            o,
            i = this._id;
          return arguments.length < 2
            ? R(this.node(), i).on.on(t)
            : this.each(
                ((o = (t + "")
                  .trim()
                  .split(/^|\s+/)
                  .every(function (t) {
                    var n = t.indexOf(".");
                    return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
                  })
                  ? I
                  : Z),
                function () {
                  var a = o(this, i),
                    u = a.on;
                  u !== e && (r = (e = u).copy()).on(t, n), (a.on = r);
                })
              );
        },
        attr: function (t, n) {
          var e = (0, Y.Z)(t),
            r = "transform" === e ? X : tP;
          return this.attrTween(
            t,
            "function" == typeof n
              ? (e.local
                  ? function (t, n, e) {
                      var r, o, i;
                      return function () {
                        var a,
                          u,
                          c = e(this);
                        return null == c
                          ? void this.removeAttributeNS(t.space, t.local)
                          : (a = this.getAttributeNS(t.space, t.local)) ===
                            (u = c + "")
                          ? null
                          : a === r && u === o
                          ? i
                          : ((o = u), (i = n((r = a), c)));
                      };
                    }
                  : function (t, n, e) {
                      var r, o, i;
                      return function () {
                        var a,
                          u,
                          c = e(this);
                        return null == c
                          ? void this.removeAttribute(t)
                          : (a = this.getAttribute(t)) === (u = c + "")
                          ? null
                          : a === r && u === o
                          ? i
                          : ((o = u), (i = n((r = a), c)));
                      };
                    })(e, r, F(this, "attr." + t, n))
              : null == n
              ? (e.local
                  ? function (t) {
                      return function () {
                        this.removeAttributeNS(t.space, t.local);
                      };
                    }
                  : function (t) {
                      return function () {
                        this.removeAttribute(t);
                      };
                    })(e)
              : (e.local
                  ? function (t, n, e) {
                      var r,
                        o,
                        i = e + "";
                      return function () {
                        var a = this.getAttributeNS(t.space, t.local);
                        return a === i
                          ? null
                          : a === r
                          ? o
                          : (o = n((r = a), e));
                      };
                    }
                  : function (t, n, e) {
                      var r,
                        o,
                        i = e + "";
                      return function () {
                        var a = this.getAttribute(t);
                        return a === i
                          ? null
                          : a === r
                          ? o
                          : (o = n((r = a), e));
                      };
                    })(e, r, n)
          );
        },
        attrTween: function (t, n) {
          var e = "attr." + t;
          if (arguments.length < 2) return (e = this.tween(e)) && e._value;
          if (null == n) return this.tween(e, null);
          if ("function" != typeof n) throw Error();
          var r = (0, Y.Z)(t);
          return this.tween(
            e,
            (r.local
              ? function (t, n) {
                  var e, r;
                  function o() {
                    var o = n.apply(this, arguments);
                    return (
                      o !== r &&
                        (e =
                          (r = o) &&
                          function (n) {
                            this.setAttributeNS(
                              t.space,
                              t.local,
                              o.call(this, n)
                            );
                          }),
                      e
                    );
                  }
                  return (o._value = n), o;
                }
              : function (t, n) {
                  var e, r;
                  function o() {
                    var o = n.apply(this, arguments);
                    return (
                      o !== r &&
                        (e =
                          (r = o) &&
                          function (n) {
                            this.setAttribute(t, o.call(this, n));
                          }),
                      e
                    );
                  }
                  return (o._value = n), o;
                })(r, n)
          );
        },
        style: function (t, n, e) {
          var r,
            o,
            i,
            a,
            u,
            c,
            l,
            s,
            f,
            p,
            h,
            d,
            v,
            g,
            m,
            y,
            b,
            _,
            w,
            E,
            x,
            S = "transform" == (t += "") ? W : tP;
          return null == n
            ? this.styleTween(
                t,
                ((r = t),
                function () {
                  var t = (0, tz.S)(this, r),
                    n = (this.style.removeProperty(r), (0, tz.S)(this, r));
                  return t === n
                    ? null
                    : t === o && n === i
                    ? a
                    : (a = S((o = t), (i = n)));
                })
              ).on("end.style." + t, tI(t))
            : "function" == typeof n
            ? this.styleTween(
                t,
                ((u = t),
                (c = F(this, "style." + t, n)),
                function () {
                  var t = (0, tz.S)(this, u),
                    n = c(this),
                    e = n + "";
                  return (
                    null == n &&
                      (this.style.removeProperty(u),
                      (e = n = (0, tz.S)(this, u))),
                    t === e
                      ? null
                      : t === l && e === s
                      ? f
                      : ((s = e), (f = S((l = t), n)))
                  );
                })
              ).each(
                ((p = this._id),
                (b = "end." + (y = "style." + (h = t))),
                function () {
                  var t = Z(this, p),
                    n = t.on,
                    e = null == t.value[y] ? m || (m = tI(h)) : void 0;
                  (n !== d || g !== e) && (v = (d = n).copy()).on(b, (g = e)),
                    (t.on = v);
                })
              )
            : this.styleTween(
                t,
                ((_ = t),
                (x = n + ""),
                function () {
                  var t = (0, tz.S)(this, _);
                  return t === x ? null : t === w ? E : (E = S((w = t), n));
                }),
                e
              ).on("end.style." + t, null);
        },
        styleTween: function (t, n, e) {
          var r = "style." + (t += "");
          if (arguments.length < 2) return (r = this.tween(r)) && r._value;
          if (null == n) return this.tween(r, null);
          if ("function" != typeof n) throw Error();
          return this.tween(
            r,
            (function (t, n, e) {
              var r, o;
              function i() {
                var i = n.apply(this, arguments);
                return (
                  i !== o &&
                    (r =
                      (o = i) &&
                      function (n) {
                        this.style.setProperty(t, i.call(this, n), e);
                      }),
                  r
                );
              }
              return (i._value = n), i;
            })(t, n, null == e ? "" : e)
          );
        },
        text: function (t) {
          var n, e;
          return this.tween(
            "text",
            "function" == typeof t
              ? ((n = F(this, "text", t)),
                function () {
                  var t = n(this);
                  this.textContent = null == t ? "" : t;
                })
              : ((e = null == t ? "" : t + ""),
                function () {
                  this.textContent = e;
                })
          );
        },
        textTween: function (t) {
          var n = "text";
          if (arguments.length < 1) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" != typeof t) throw Error();
          return this.tween(
            n,
            (function (t) {
              var n, e;
              function r() {
                var r = t.apply(this, arguments);
                return (
                  r !== e &&
                    (n =
                      (e = r) &&
                      function (t) {
                        this.textContent = r.call(this, t);
                      }),
                  n
                );
              }
              return (r._value = t), r;
            })(t)
          );
        },
        remove: function () {
          var t;
          return this.on(
            "end.remove",
            ((t = this._id),
            function () {
              var n = this.parentNode;
              for (var e in this.__transition) if (+e !== t) return;
              n && n.removeChild(this);
            })
          );
        },
        tween: function (t, n) {
          var e = this._id;
          if (((t += ""), arguments.length < 2)) {
            for (
              var r, o = R(this.node(), e).tween, i = 0, a = o.length;
              i < a;
              ++i
            )
              if ((r = o[i]).name === t) return r.value;
            return null;
          }
          return this.each(
            (null == n
              ? function (t, n) {
                  var e, r;
                  return function () {
                    var o = Z(this, t),
                      i = o.tween;
                    if (i !== e) {
                      r = e = i;
                      for (var a = 0, u = r.length; a < u; ++a)
                        if (r[a].name === n) {
                          (r = r.slice()).splice(a, 1);
                          break;
                        }
                    }
                    o.tween = r;
                  };
                }
              : function (t, n, e) {
                  var r, o;
                  if ("function" != typeof e) throw Error();
                  return function () {
                    var i = Z(this, t),
                      a = i.tween;
                    if (a !== r) {
                      o = (r = a).slice();
                      for (
                        var u = { name: n, value: e }, c = 0, l = o.length;
                        c < l;
                        ++c
                      )
                        if (o[c].name === n) {
                          o[c] = u;
                          break;
                        }
                      c === l && o.push(u);
                    }
                    i.tween = o;
                  };
                })(e, t, n)
          );
        },
        delay: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(
                ("function" == typeof t
                  ? function (t, n) {
                      return function () {
                        I(this, t).delay = +n.apply(this, arguments);
                      };
                    }
                  : function (t, n) {
                      return (
                        (n = +n),
                        function () {
                          I(this, t).delay = n;
                        }
                      );
                    })(n, t)
              )
            : R(this.node(), n).delay;
        },
        duration: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(
                ("function" == typeof t
                  ? function (t, n) {
                      return function () {
                        Z(this, t).duration = +n.apply(this, arguments);
                      };
                    }
                  : function (t, n) {
                      return (
                        (n = +n),
                        function () {
                          Z(this, t).duration = n;
                        }
                      );
                    })(n, t)
              )
            : R(this.node(), n).duration;
        },
        ease: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(
                (function (t, n) {
                  if ("function" != typeof n) throw Error();
                  return function () {
                    Z(this, t).ease = n;
                  };
                })(n, t)
              )
            : R(this.node(), n).ease;
        },
        easeVarying: function (t) {
          var n;
          if ("function" != typeof t) throw Error();
          return this.each(
            ((n = this._id),
            function () {
              var e = t.apply(this, arguments);
              if ("function" != typeof e) throw Error();
              Z(this, n).ease = e;
            })
          );
        },
        end: function () {
          var t,
            n,
            e = this,
            r = e._id,
            o = e.size();
          return new Promise(function (i, a) {
            var u = { value: a },
              c = {
                value: function () {
                  0 == --o && i();
                },
              };
            e.each(function () {
              var e = Z(this, r),
                o = e.on;
              o !== t &&
                ((n = (t = o).copy())._.cancel.push(u),
                n._.interrupt.push(u),
                n._.end.push(c)),
                (e.on = n);
            }),
              0 === o && i();
          });
        },
        [Symbol.iterator]: tH[Symbol.iterator],
      };
      var tL = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
        },
      };
      (v.ZP.prototype.interrupt = function (t) {
        return this.each(function () {
          H(this, t);
        });
      }),
        (v.ZP.prototype.transition = function (t) {
          var n, e;
          t instanceof tR
            ? ((n = t._id), (t = t._name))
            : ((n = ++tZ),
              ((e = tL).time = S()),
              (t = null == t ? null : t + ""));
          for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
            for (var a, u = r[i], c = u.length, l = 0; l < c; ++l)
              (a = u[l]) &&
                z(
                  a,
                  t,
                  n,
                  l,
                  u,
                  e ||
                    (function (t, n) {
                      for (var e; !(e = t.__transition) || !(e = e[n]); )
                        if (!(t = t.parentNode))
                          throw Error(`transition ${n} not found`);
                      return e;
                    })(a, n)
                );
          return new tR(r, this._parents, t, n);
        });
      var tB = (t) => () => t;
      function tD(t, { sourceEvent: n, target: e, transform: r, dispatch: o }) {
        Object.defineProperties(this, {
          type: { value: t, enumerable: !0, configurable: !0 },
          sourceEvent: { value: n, enumerable: !0, configurable: !0 },
          target: { value: e, enumerable: !0, configurable: !0 },
          transform: { value: r, enumerable: !0, configurable: !0 },
          _: { value: o },
        });
      }
      function tq(t, n, e) {
        (this.k = t), (this.x = n), (this.y = e);
      }
      tq.prototype = {
        constructor: tq,
        scale: function (t) {
          return 1 === t ? this : new tq(this.k * t, this.x, this.y);
        },
        translate: function (t, n) {
          return (0 === t) & (0 === n)
            ? this
            : new tq(this.k, this.x + this.k * t, this.y + this.k * n);
        },
        apply: function (t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function (t) {
          return t * this.k + this.x;
        },
        applyY: function (t) {
          return t * this.k + this.y;
        },
        invert: function (t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function (t) {
          return (t - this.x) / this.k;
        },
        invertY: function (t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      var tG = new tq(1, 0, 0);
      function tW(t) {
        for (; !t.__zoom; ) if (!(t = t.parentNode)) return tG;
        return t.__zoom;
      }
      function tX(t) {
        t.stopImmediatePropagation();
      }
      function tY(t) {
        t.preventDefault(), t.stopImmediatePropagation();
      }
      function tF(t) {
        return (!t.ctrlKey || "wheel" === t.type) && !t.button;
      }
      function tU() {
        var t = this;
        return t instanceof SVGElement
          ? (t = t.ownerSVGElement || t).hasAttribute("viewBox")
            ? [
                [(t = t.viewBox.baseVal).x, t.y],
                [t.x + t.width, t.y + t.height],
              ]
            : [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value],
              ]
          : [
              [0, 0],
              [t.clientWidth, t.clientHeight],
            ];
      }
      function tK() {
        return this.__zoom || tG;
      }
      function tV(t) {
        return (
          -t.deltaY *
          (1 === t.deltaMode ? 0.05 : t.deltaMode ? 1 : 0.002) *
          (t.ctrlKey ? 10 : 1)
        );
      }
      function t$() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function tQ(t, n, e) {
        var r = t.invertX(n[0][0]) - e[0][0],
          o = t.invertX(n[1][0]) - e[1][0],
          i = t.invertY(n[0][1]) - e[0][1],
          a = t.invertY(n[1][1]) - e[1][1];
        return t.translate(
          o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
          a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
        );
      }
      function tJ() {
        var t,
          n,
          e,
          r = tF,
          o = tU,
          a = tQ,
          u = tV,
          s = t$,
          f = [0, 1 / 0],
          p = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          v = 250,
          g = h,
          m = i("start", "zoom", "end"),
          y = 0,
          b = 10;
        function _(t) {
          t.property("__zoom", tK)
            .on("wheel.zoom", O)
            .on("mousedown.zoom", C)
            .on("dblclick.zoom", P)
            .filter(s)
            .on("touchstart.zoom", j)
            .on("touchmove.zoom", N)
            .on("touchend.zoom touchcancel.zoom", T)
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function w(t, n) {
          return (n = Math.max(f[0], Math.min(f[1], n))) === t.k
            ? t
            : new tq(n, t.x, t.y);
        }
        function E(t, n, e) {
          var r = n[0] - e[0] * t.k,
            o = n[1] - e[1] * t.k;
          return r === t.x && o === t.y ? t : new tq(t.k, r, o);
        }
        function x(t) {
          return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
        }
        function S(t, n, e, r) {
          t.on("start.zoom", function () {
            M(this, arguments).event(r).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              M(this, arguments).event(r).end();
            })
            .tween("zoom", function () {
              var t = arguments,
                i = M(this, t).event(r),
                a = o.apply(this, t),
                u =
                  null == e
                    ? x(a)
                    : "function" == typeof e
                    ? e.apply(this, t)
                    : e,
                c = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                l = this.__zoom,
                s = "function" == typeof n ? n.apply(this, t) : n,
                f = g(l.invert(u).concat(c / l.k), s.invert(u).concat(c / s.k));
              return function (t) {
                if (1 === t) t = s;
                else {
                  var n = f(t),
                    e = c / n[2];
                  t = new tq(e, u[0] - n[0] * e, u[1] - n[1] * e);
                }
                i.zoom(null, t);
              };
            });
        }
        function M(t, n, e) {
          return (!e && t.__zooming) || new k(t, n);
        }
        function k(t, n) {
          (this.that = t),
            (this.args = n),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = o.apply(t, n)),
            (this.taps = 0);
        }
        function O(t, ...n) {
          if (r.apply(this, arguments)) {
            var e = M(this, n).event(t),
              o = this.__zoom,
              i = Math.max(
                f[0],
                Math.min(f[1], o.k * Math.pow(2, u.apply(this, arguments)))
              ),
              c = (0, d.Z)(t);
            if (e.wheel)
              (e.mouse[0][0] !== c[0] || e.mouse[0][1] !== c[1]) &&
                (e.mouse[1] = o.invert((e.mouse[0] = c))),
                clearTimeout(e.wheel);
            else {
              if (o.k === i) return;
              (e.mouse = [c, o.invert(c)]), H(this), e.start();
            }
            tY(t),
              (e.wheel = setTimeout(function () {
                (e.wheel = null), e.end();
              }, 150)),
              e.zoom(
                "mouse",
                a(E(w(o, i), e.mouse[0], e.mouse[1]), e.extent, p)
              );
          }
        }
        function C(t, ...n) {
          if (!e && r.apply(this, arguments)) {
            var o,
              i,
              u,
              s = M(this, n, !0).event(t),
              f = (0, c.Z)(t.view)
                .on(
                  "mousemove.zoom",
                  function (t) {
                    if ((tY(t), !s.moved)) {
                      var n = t.clientX - g,
                        e = t.clientY - m;
                      s.moved = n * n + e * e > y;
                    }
                    s.event(t).zoom(
                      "mouse",
                      a(
                        E(
                          s.that.__zoom,
                          (s.mouse[0] = (0, d.Z)(t, v)),
                          s.mouse[1]
                        ),
                        s.extent,
                        p
                      )
                    );
                  },
                  !0
                )
                .on(
                  "mouseup.zoom",
                  function (t) {
                    var n, e, r, o;
                    f.on("mousemove.zoom mouseup.zoom", null),
                      (n = t.view),
                      (e = s.moved),
                      (r = n.document.documentElement),
                      (o = (0, c.Z)(n).on("dragstart.drag", null)),
                      e &&
                        (o.on("click.drag", l, !0),
                        setTimeout(function () {
                          o.on("click.drag", null);
                        }, 0)),
                      "onselectstart" in r
                        ? o.on("selectstart.drag", null)
                        : ((r.style.MozUserSelect = r.__noselect),
                          delete r.__noselect),
                      tY(t),
                      s.event(t).end();
                  },
                  !0
                ),
              h = (0, d.Z)(t, v),
              v = t.currentTarget,
              g = t.clientX,
              m = t.clientY;
            (i = (o = t.view).document.documentElement),
              (u = (0, c.Z)(o).on("dragstart.drag", l, !0)),
              "onselectstart" in i
                ? u.on("selectstart.drag", l, !0)
                : ((i.__noselect = i.style.MozUserSelect),
                  (i.style.MozUserSelect = "none")),
              tX(t),
              (s.mouse = [h, this.__zoom.invert(h)]),
              H(this),
              s.start();
          }
        }
        function P(t, ...n) {
          if (r.apply(this, arguments)) {
            var e = this.__zoom,
              i = (0, d.Z)(t.changedTouches ? t.changedTouches[0] : t, this),
              u = e.invert(i),
              l = e.k * (t.shiftKey ? 0.5 : 2),
              s = a(E(w(e, l), i, u), o.apply(this, n), p);
            tY(t),
              v > 0
                ? (0, c.Z)(this).transition().duration(v).call(S, s, i, t)
                : (0, c.Z)(this).call(_.transform, s, i, t);
          }
        }
        function j(e, ...o) {
          if (r.apply(this, arguments)) {
            var i,
              a,
              u,
              c,
              l = e.touches,
              s = l.length,
              f = M(this, o, e.changedTouches.length === s).event(e);
            for (tX(e), a = 0; a < s; ++a)
              (u = l[a]),
                (c = [
                  (c = (0, d.Z)(u, this)),
                  this.__zoom.invert(c),
                  u.identifier,
                ]),
                f.touch0
                  ? f.touch1 ||
                    f.touch0[2] === c[2] ||
                    ((f.touch1 = c), (f.taps = 0))
                  : ((f.touch0 = c), (i = !0), (f.taps = 1 + !!t));
            t && (t = clearTimeout(t)),
              i &&
                (f.taps < 2 &&
                  ((n = c[0]),
                  (t = setTimeout(function () {
                    t = null;
                  }, 500))),
                H(this),
                f.start());
          }
        }
        function N(t, ...n) {
          if (this.__zooming) {
            var e,
              r,
              o,
              i,
              u = M(this, n).event(t),
              c = t.changedTouches,
              l = c.length;
            for (tY(t), e = 0; e < l; ++e)
              (r = c[e]),
                (o = (0, d.Z)(r, this)),
                u.touch0 && u.touch0[2] === r.identifier
                  ? (u.touch0[0] = o)
                  : u.touch1 &&
                    u.touch1[2] === r.identifier &&
                    (u.touch1[0] = o);
            if (((r = u.that.__zoom), u.touch1)) {
              var s = u.touch0[0],
                f = u.touch0[1],
                h = u.touch1[0],
                v = u.touch1[1],
                g = (g = h[0] - s[0]) * g + (g = h[1] - s[1]) * g,
                m = (m = v[0] - f[0]) * m + (m = v[1] - f[1]) * m;
              (r = w(r, Math.sqrt(g / m))),
                (o = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2]),
                (i = [(f[0] + v[0]) / 2, (f[1] + v[1]) / 2]);
            } else {
              if (!u.touch0) return;
              (o = u.touch0[0]), (i = u.touch0[1]);
            }
            u.zoom("touch", a(E(r, o, i), u.extent, p));
          }
        }
        function T(t, ...r) {
          if (this.__zooming) {
            var o,
              i,
              a = M(this, r).event(t),
              u = t.changedTouches,
              l = u.length;
            for (
              tX(t),
                e && clearTimeout(e),
                e = setTimeout(function () {
                  e = null;
                }, 500),
                o = 0;
              o < l;
              ++o
            )
              (i = u[o]),
                a.touch0 && a.touch0[2] === i.identifier
                  ? delete a.touch0
                  : a.touch1 && a.touch1[2] === i.identifier && delete a.touch1;
            if (
              (a.touch1 &&
                !a.touch0 &&
                ((a.touch0 = a.touch1), delete a.touch1),
              a.touch0)
            )
              a.touch0[1] = this.__zoom.invert(a.touch0[0]);
            else if (
              (a.end(),
              2 === a.taps &&
                ((i = (0, d.Z)(i, this)),
                Math.hypot(n[0] - i[0], n[1] - i[1]) < b))
            ) {
              var s = (0, c.Z)(this).on("dblclick.zoom");
              s && s.apply(this, arguments);
            }
          }
        }
        return (
          (_.transform = function (t, n, e, r) {
            var o = t.selection ? t.selection() : t;
            o.property("__zoom", tK),
              t !== o
                ? S(t, n, e, r)
                : o.interrupt().each(function () {
                    M(this, arguments)
                      .event(r)
                      .start()
                      .zoom(
                        null,
                        "function" == typeof n ? n.apply(this, arguments) : n
                      )
                      .end();
                  });
          }),
          (_.scaleBy = function (t, n, e, r) {
            _.scaleTo(
              t,
              function () {
                var t = this.__zoom.k,
                  e = "function" == typeof n ? n.apply(this, arguments) : n;
                return t * e;
              },
              e,
              r
            );
          }),
          (_.scaleTo = function (t, n, e, r) {
            _.transform(
              t,
              function () {
                var t = o.apply(this, arguments),
                  r = this.__zoom,
                  i =
                    null == e
                      ? x(t)
                      : "function" == typeof e
                      ? e.apply(this, arguments)
                      : e,
                  u = r.invert(i),
                  c = "function" == typeof n ? n.apply(this, arguments) : n;
                return a(E(w(r, c), i, u), t, p);
              },
              e,
              r
            );
          }),
          (_.translateBy = function (t, n, e, r) {
            _.transform(
              t,
              function () {
                return a(
                  this.__zoom.translate(
                    "function" == typeof n ? n.apply(this, arguments) : n,
                    "function" == typeof e ? e.apply(this, arguments) : e
                  ),
                  o.apply(this, arguments),
                  p
                );
              },
              null,
              r
            );
          }),
          (_.translateTo = function (t, n, e, r, i) {
            _.transform(
              t,
              function () {
                var t = o.apply(this, arguments),
                  i = this.__zoom,
                  u =
                    null == r
                      ? x(t)
                      : "function" == typeof r
                      ? r.apply(this, arguments)
                      : r;
                return a(
                  tG
                    .translate(u[0], u[1])
                    .scale(i.k)
                    .translate(
                      "function" == typeof n ? -n.apply(this, arguments) : -n,
                      "function" == typeof e ? -e.apply(this, arguments) : -e
                    ),
                  t,
                  p
                );
              },
              r,
              i
            );
          }),
          (k.prototype = {
            event: function (t) {
              return t && (this.sourceEvent = t), this;
            },
            start: function () {
              return (
                1 == ++this.active &&
                  ((this.that.__zooming = this), this.emit("start")),
                this
              );
            },
            zoom: function (t, n) {
              return (
                this.mouse &&
                  "mouse" !== t &&
                  (this.mouse[1] = n.invert(this.mouse[0])),
                this.touch0 &&
                  "touch" !== t &&
                  (this.touch0[1] = n.invert(this.touch0[0])),
                this.touch1 &&
                  "touch" !== t &&
                  (this.touch1[1] = n.invert(this.touch1[0])),
                (this.that.__zoom = n),
                this.emit("zoom"),
                this
              );
            },
            end: function () {
              return (
                0 == --this.active &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (t) {
              var n = (0, c.Z)(this.that).datum();
              m.call(
                t,
                this.that,
                new tD(t, {
                  sourceEvent: this.sourceEvent,
                  target: _,
                  type: t,
                  transform: this.that.__zoom,
                  dispatch: m,
                }),
                n
              );
            },
          }),
          (_.wheelDelta = function (t) {
            return arguments.length
              ? ((u = "function" == typeof t ? t : tB(+t)), _)
              : u;
          }),
          (_.filter = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : tB(!!t)), _)
              : r;
          }),
          (_.touchable = function (t) {
            return arguments.length
              ? ((s = "function" == typeof t ? t : tB(!!t)), _)
              : s;
          }),
          (_.extent = function (t) {
            return arguments.length
              ? ((o =
                  "function" == typeof t
                    ? t
                    : tB([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]],
                      ])),
                _)
              : o;
          }),
          (_.scaleExtent = function (t) {
            return arguments.length
              ? ((f[0] = +t[0]), (f[1] = +t[1]), _)
              : [f[0], f[1]];
          }),
          (_.translateExtent = function (t) {
            return arguments.length
              ? ((p[0][0] = +t[0][0]),
                (p[1][0] = +t[1][0]),
                (p[0][1] = +t[0][1]),
                (p[1][1] = +t[1][1]),
                _)
              : [
                  [p[0][0], p[0][1]],
                  [p[1][0], p[1][1]],
                ];
          }),
          (_.constrain = function (t) {
            return arguments.length ? ((a = t), _) : a;
          }),
          (_.duration = function (t) {
            return arguments.length ? ((v = +t), _) : v;
          }),
          (_.interpolate = function (t) {
            return arguments.length ? ((g = t), _) : g;
          }),
          (_.on = function () {
            var t = m.on.apply(m, arguments);
            return t === m ? _ : t;
          }),
          (_.clickDistance = function (t) {
            return arguments.length ? ((y = (t = +t) * t), _) : Math.sqrt(y);
          }),
          (_.tapDistance = function (t) {
            return arguments.length ? ((b = +t), _) : b;
          }),
          _
        );
      }
      tW.prototype = tq.prototype;
    },
    3096: function (t, n, e) {
      var r = "Expected a function",
        o = 0 / 0,
        i = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt,
        s = "object" == typeof e.g && e.g && e.g.Object === Object && e.g,
        f = "object" == typeof self && self && self.Object === Object && self,
        p = s || f || Function("return this")(),
        h = Object.prototype.toString,
        d = Math.max,
        v = Math.min,
        g = function () {
          return p.Date.now();
        };
      function m(t) {
        var n = typeof t;
        return !!t && ("object" == n || "function" == n);
      }
      function y(t) {
        if ("number" == typeof t) return t;
        if (
          "symbol" == typeof (n = t) ||
          (n && "object" == typeof n && "[object Symbol]" == h.call(n))
        )
          return o;
        if (m(t)) {
          var n,
            e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = m(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(i, "");
        var r = u.test(t);
        return r || c.test(t) ? l(t.slice(2), r ? 2 : 8) : a.test(t) ? o : +t;
      }
      t.exports = function (t, n, e) {
        var o = !0,
          i = !0;
        if ("function" != typeof t) throw TypeError(r);
        return (
          m(e) &&
            ((o = "leading" in e ? !!e.leading : o),
            (i = "trailing" in e ? !!e.trailing : i)),
          (function (t, n, e) {
            var o,
              i,
              a,
              u,
              c,
              l,
              s = 0,
              f = !1,
              p = !1,
              h = !0;
            if ("function" != typeof t) throw TypeError(r);
            function b(n) {
              var e = o,
                r = i;
              return (o = i = void 0), (s = n), (u = t.apply(r, e));
            }
            function _(t) {
              var e = t - l,
                r = t - s;
              return void 0 === l || e >= n || e < 0 || (p && r >= a);
            }
            function w() {
              var t,
                e,
                r,
                o = g();
              if (_(o)) return E(o);
              c = setTimeout(
                w,
                ((t = o - l), (e = o - s), (r = n - t), p ? v(r, a - e) : r)
              );
            }
            function E(t) {
              return ((c = void 0), h && o) ? b(t) : ((o = i = void 0), u);
            }
            function x() {
              var t,
                e = g(),
                r = _(e);
              if (((o = arguments), (i = this), (l = e), r)) {
                if (void 0 === c)
                  return (s = t = l), (c = setTimeout(w, n)), f ? b(t) : u;
                if (p) return (c = setTimeout(w, n)), b(l);
              }
              return void 0 === c && (c = setTimeout(w, n)), u;
            }
            return (
              (n = y(n) || 0),
              m(e) &&
                ((f = !!e.leading),
                (a = (p = "maxWait" in e) ? d(y(e.maxWait) || 0, n) : a),
                (h = "trailing" in e ? !!e.trailing : h)),
              (x.cancel = function () {
                void 0 !== c && clearTimeout(c),
                  (s = 0),
                  (o = l = i = c = void 0);
              }),
              (x.flush = function () {
                return void 0 === c ? u : E(g());
              }),
              x
            );
          })(t, n, { leading: o, maxWait: n, trailing: i })
        );
      };
    },
    4437: function (t, n, e) {
      "use strict";
      e.d(n, {
        default: function () {
          return G;
        },
      });
      var r = e(7294),
        o = e(9395),
        i = e(3967),
        a = e.n(i),
        u = e(2189),
        c = e(5637),
        l = e(4505),
        s = e(4641),
        f = e(1640),
        p = e(5464),
        h = e(4690),
        d = e(8086),
        v = e(6586),
        g = e(5094),
        m = e(9097),
        y = r.forwardRef(function (t, n) {
          var e = t.prefixCls,
            o = t.forceRender,
            i = t.className,
            u = t.style,
            c = t.children,
            s = t.isActive,
            f = t.role,
            p = r.useState(s || o),
            h = (0, l.Z)(p, 2),
            d = h[0],
            g = h[1];
          return (r.useEffect(
            function () {
              (o || s) && g(!0);
            },
            [o, s]
          ),
          d)
            ? r.createElement(
                "div",
                {
                  ref: n,
                  className: a()(
                    "".concat(e, "-content"),
                    (0, v.Z)(
                      (0, v.Z)({}, "".concat(e, "-content-active"), s),
                      "".concat(e, "-content-inactive"),
                      !s
                    ),
                    i
                  ),
                  style: u,
                  role: f,
                },
                r.createElement(
                  "div",
                  { className: "".concat(e, "-content-box") },
                  c
                )
              )
            : null;
        });
      y.displayName = "PanelContent";
      var b = [
          "showArrow",
          "headerClass",
          "isActive",
          "onItemClick",
          "forceRender",
          "className",
          "prefixCls",
          "collapsible",
          "accordion",
          "panelKey",
          "extra",
          "header",
          "expandIcon",
          "openMotion",
          "destroyInactivePanel",
          "children",
        ],
        _ = r.forwardRef(function (t, n) {
          var e = t.showArrow,
            o = t.headerClass,
            i = t.isActive,
            c = t.onItemClick,
            l = t.forceRender,
            s = t.className,
            f = t.prefixCls,
            p = t.collapsible,
            d = t.accordion,
            _ = t.panelKey,
            w = t.extra,
            E = t.header,
            x = t.expandIcon,
            S = t.openMotion,
            M = t.destroyInactivePanel,
            k = t.children,
            O = (0, h.Z)(t, b),
            C = "disabled" === p,
            P = "header" === p,
            j = "icon" === p,
            N = function () {
              null == c || c(_);
            },
            T =
              "function" == typeof x
                ? x(t)
                : r.createElement("i", { className: "arrow" });
          T &&
            (T = r.createElement(
              "div",
              {
                className: "".concat(f, "-expand-icon"),
                onClick: ["header", "icon"].includes(p) ? N : void 0,
              },
              T
            ));
          var A = a()(
              (0, v.Z)(
                (0, v.Z)(
                  (0, v.Z)({}, "".concat(f, "-item"), !0),
                  "".concat(f, "-item-active"),
                  i
                ),
                "".concat(f, "-item-disabled"),
                C
              ),
              s
            ),
            z = {
              className: a()(
                o,
                (0, v.Z)(
                  (0, v.Z)(
                    (0, v.Z)({}, "".concat(f, "-header"), !0),
                    "".concat(f, "-header-collapsible-only"),
                    P
                  ),
                  "".concat(f, "-icon-collapsible-only"),
                  j
                )
              ),
              "aria-expanded": i,
              "aria-disabled": C,
              onKeyDown: function (t) {
                ("Enter" === t.key ||
                  t.keyCode === m.Z.ENTER ||
                  t.which === m.Z.ENTER) &&
                  N();
              },
            };
          return (
            P ||
              j ||
              ((z.onClick = N),
              (z.role = d ? "tab" : "button"),
              (z.tabIndex = C ? -1 : 0)),
            r.createElement(
              "div",
              (0, u.Z)({}, O, { ref: n, className: A }),
              r.createElement(
                "div",
                z,
                (void 0 === e || e) && T,
                r.createElement(
                  "span",
                  {
                    className: "".concat(f, "-header-text"),
                    onClick: "header" === p ? N : void 0,
                  },
                  E
                ),
                null != w &&
                  "boolean" != typeof w &&
                  r.createElement(
                    "div",
                    { className: "".concat(f, "-extra") },
                    w
                  )
              ),
              r.createElement(
                g.ZP,
                (0, u.Z)(
                  {
                    visible: i,
                    leavedClassName: "".concat(f, "-content-hidden"),
                  },
                  S,
                  { forceRender: l, removeOnLeave: M }
                ),
                function (t, n) {
                  var e = t.className,
                    o = t.style;
                  return r.createElement(
                    y,
                    {
                      ref: n,
                      prefixCls: f,
                      className: e,
                      style: o,
                      isActive: i,
                      forceRender: l,
                      role: d ? "tabpanel" : void 0,
                    },
                    k
                  );
                }
              )
            )
          );
        }),
        w = [
          "children",
          "label",
          "key",
          "collapsible",
          "onItemClick",
          "destroyInactivePanel",
        ],
        E = function (t, n) {
          var e = n.prefixCls,
            o = n.accordion,
            i = n.collapsible,
            a = n.destroyInactivePanel,
            c = n.onItemClick,
            l = n.activeKey,
            s = n.openMotion,
            f = n.expandIcon;
          return t.map(function (t, n) {
            var p = t.children,
              d = t.label,
              v = t.key,
              g = t.collapsible,
              m = t.onItemClick,
              y = t.destroyInactivePanel,
              b = (0, h.Z)(t, w),
              E = String(null != v ? v : n),
              x = null != g ? g : i,
              S = !1;
            return (
              (S = o ? l[0] === E : l.indexOf(E) > -1),
              r.createElement(
                _,
                (0, u.Z)({}, b, {
                  prefixCls: e,
                  key: E,
                  panelKey: E,
                  isActive: S,
                  accordion: o,
                  openMotion: s,
                  expandIcon: f,
                  header: d,
                  collapsible: x,
                  onItemClick: function (t) {
                    "disabled" !== x && (c(t), null == m || m(t));
                  },
                  destroyInactivePanel: null != y ? y : a,
                }),
                p
              )
            );
          });
        },
        x = function (t, n, e) {
          if (!t) return null;
          var o = e.prefixCls,
            i = e.accordion,
            a = e.collapsible,
            u = e.destroyInactivePanel,
            c = e.onItemClick,
            l = e.activeKey,
            s = e.openMotion,
            f = e.expandIcon,
            p = t.key || String(n),
            h = t.props,
            d = h.header,
            v = h.headerClass,
            g = h.destroyInactivePanel,
            m = h.collapsible,
            y = h.onItemClick,
            b = !1;
          b = i ? l[0] === p : l.indexOf(p) > -1;
          var _ = null != m ? m : a,
            w = {
              key: p,
              panelKey: p,
              header: d,
              headerClass: v,
              isActive: b,
              prefixCls: o,
              destroyInactivePanel: null != g ? g : u,
              openMotion: s,
              accordion: i,
              children: t.props.children,
              onItemClick: function (t) {
                "disabled" !== _ && (c(t), null == y || y(t));
              },
              expandIcon: f,
              collapsible: _,
            };
          return "string" == typeof t.type
            ? t
            : (Object.keys(w).forEach(function (t) {
                void 0 === w[t] && delete w[t];
              }),
              r.cloneElement(t, w));
        },
        S = e(1200);
      function M(t) {
        var n = t;
        if (!Array.isArray(n)) {
          var e = (0, s.Z)(n);
          n = "number" === e || "string" === e ? [n] : [];
        }
        return n.map(function (t) {
          return String(t);
        });
      }
      var k = Object.assign(
        r.forwardRef(function (t, n) {
          var e,
            o = t.prefixCls,
            i = void 0 === o ? "rc-collapse" : o,
            s = t.destroyInactivePanel,
            h = t.style,
            v = t.accordion,
            g = t.className,
            m = t.children,
            y = t.collapsible,
            b = t.openMotion,
            _ = t.expandIcon,
            w = t.activeKey,
            k = t.defaultActiveKey,
            O = t.onChange,
            C = t.items,
            P = a()(i, g),
            j = (0, f.Z)([], {
              value: w,
              onChange: function (t) {
                return null == O ? void 0 : O(t);
              },
              defaultValue: k,
              postState: M,
            }),
            N = (0, l.Z)(j, 2),
            T = N[0],
            A = N[1];
          (0,
          p.ZP)(!m, "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");
          var z =
            ((e = {
              prefixCls: i,
              accordion: v,
              openMotion: b,
              expandIcon: _,
              collapsible: y,
              destroyInactivePanel: void 0 !== s && s,
              onItemClick: function (t) {
                return A(function () {
                  return v
                    ? T[0] === t
                      ? []
                      : [t]
                    : T.indexOf(t) > -1
                    ? T.filter(function (n) {
                        return n !== t;
                      })
                    : [].concat((0, c.Z)(T), [t]);
                });
              },
              activeKey: T,
            }),
            Array.isArray(C)
              ? E(C, e)
              : (0, d.Z)(m).map(function (t, n) {
                  return x(t, n, e);
                }));
          return r.createElement(
            "div",
            (0, u.Z)(
              { ref: n, className: P, style: h, role: v ? "tablist" : void 0 },
              (0, S.Z)(t, { aria: !0, data: !0 })
            ),
            z
          );
        }),
        { Panel: _ }
      );
      k.Panel;
      var O = e(5548),
        C = e(7474),
        P = e(1604),
        j = e(1946),
        N = e(299);
      let T = r.forwardRef((t, n) => {
        let { getPrefixCls: e } = r.useContext(j.E_),
          { prefixCls: o, className: i, showArrow: u = !0 } = t,
          c = e("collapse", o),
          l = a()({ ["".concat(c, "-no-arrow")]: !u }, i);
        return r.createElement(
          k.Panel,
          Object.assign({ ref: n }, t, { prefixCls: c, className: l })
        );
      });
      var A = e(5980),
        z = e(7346),
        I = (t) => ({
          [t.componentCls]: {
            ["".concat(t.antCls, "-motion-collapse-legacy")]: {
              overflow: "hidden",
              "&-active": {
                transition: "height "
                  .concat(t.motionDurationMid, " ")
                  .concat(t.motionEaseInOut, ",\n        opacity ")
                  .concat(t.motionDurationMid, " ")
                  .concat(t.motionEaseInOut, " !important"),
              },
            },
            ["".concat(t.antCls, "-motion-collapse")]: {
              overflow: "hidden",
              transition: "height "
                .concat(t.motionDurationMid, " ")
                .concat(t.motionEaseInOut, ",\n        opacity ")
                .concat(t.motionDurationMid, " ")
                .concat(t.motionEaseInOut, " !important"),
            },
          },
        }),
        Z = e(5910),
        R = e(810);
      let H = (t) => {
          let {
              componentCls: n,
              contentBg: e,
              padding: r,
              headerBg: o,
              headerPadding: i,
              collapseHeaderPaddingSM: a,
              collapseHeaderPaddingLG: u,
              collapsePanelBorderRadius: c,
              lineWidth: l,
              lineType: s,
              colorBorder: f,
              colorText: p,
              colorTextHeading: h,
              colorTextDisabled: d,
              fontSizeLG: v,
              lineHeight: g,
              lineHeightLG: m,
              marginSM: y,
              paddingSM: b,
              paddingLG: _,
              paddingXS: w,
              motionDurationSlow: E,
              fontSizeIcon: x,
              contentPadding: S,
              fontHeight: M,
              fontHeightLG: k,
            } = t,
            O = ""
              .concat((0, A.bf)(l), " ")
              .concat(s, " ")
              .concat(f);
          return {
            [n]: Object.assign(Object.assign({}, (0, z.Wf)(t)), {
              backgroundColor: o,
              border: O,
              borderBottom: 0,
              borderRadius: c,
              "&-rtl": { direction: "rtl" },
              ["& > ".concat(n, "-item")]: {
                borderBottom: O,
                "&:last-child": {
                  ["\n            &,\n            & > ".concat(n, "-header")]: {
                    borderRadius: "0 0 "
                      .concat((0, A.bf)(c), " ")
                      .concat((0, A.bf)(c)),
                  },
                },
                ["> ".concat(n, "-header")]: {
                  position: "relative",
                  display: "flex",
                  flexWrap: "nowrap",
                  alignItems: "flex-start",
                  padding: i,
                  color: h,
                  lineHeight: g,
                  cursor: "pointer",
                  transition: "all ".concat(E, ", visibility 0s"),
                  ["> ".concat(n, "-header-text")]: { flex: "auto" },
                  "&:focus": { outline: "none" },
                  ["".concat(n, "-expand-icon")]: {
                    height: M,
                    display: "flex",
                    alignItems: "center",
                    paddingInlineEnd: y,
                  },
                  ["".concat(n, "-arrow")]: Object.assign(
                    Object.assign({}, (0, z.Ro)()),
                    { fontSize: x, svg: { transition: "transform ".concat(E) } }
                  ),
                  ["".concat(n, "-header-text")]: { marginInlineEnd: "auto" },
                },
                ["".concat(n, "-icon-collapsible-only")]: {
                  cursor: "unset",
                  ["".concat(n, "-expand-icon")]: { cursor: "pointer" },
                },
              },
              ["".concat(n, "-content")]: {
                color: p,
                backgroundColor: e,
                borderTop: O,
                ["& > ".concat(n, "-content-box")]: { padding: S },
                "&-hidden": { display: "none" },
              },
              "&-small": {
                ["> ".concat(n, "-item")]: {
                  ["> ".concat(n, "-header")]: {
                    padding: a,
                    paddingInlineStart: w,
                    ["> ".concat(n, "-expand-icon")]: {
                      marginInlineStart: t.calc(b).sub(w).equal(),
                    },
                  },
                  ["> ".concat(n, "-content > ").concat(n, "-content-box")]: {
                    padding: b,
                  },
                },
              },
              "&-large": {
                ["> ".concat(n, "-item")]: {
                  fontSize: v,
                  lineHeight: m,
                  ["> ".concat(n, "-header")]: {
                    padding: u,
                    paddingInlineStart: r,
                    ["> ".concat(n, "-expand-icon")]: {
                      height: k,
                      marginInlineStart: t.calc(_).sub(r).equal(),
                    },
                  },
                  ["> ".concat(n, "-content > ").concat(n, "-content-box")]: {
                    padding: _,
                  },
                },
              },
              ["".concat(n, "-item:last-child")]: {
                ["> ".concat(n, "-content")]: {
                  borderRadius: "0 0 "
                    .concat((0, A.bf)(c), " ")
                    .concat((0, A.bf)(c)),
                },
              },
              ["& ".concat(n, "-item-disabled > ").concat(n, "-header")]: {
                "\n          &,\n          & > .arrow\n        ": {
                  color: d,
                  cursor: "not-allowed",
                },
              },
              ["&".concat(n, "-icon-position-end")]: {
                ["& > ".concat(n, "-item")]: {
                  ["> ".concat(n, "-header")]: {
                    ["".concat(n, "-expand-icon")]: {
                      order: 1,
                      paddingInlineEnd: 0,
                      paddingInlineStart: y,
                    },
                  },
                },
              },
            }),
          };
        },
        L = (t) => {
          let { componentCls: n } = t,
            e = "> "
              .concat(n, "-item > ")
              .concat(n, "-header ")
              .concat(n, "-arrow svg");
          return {
            ["".concat(n, "-rtl")]: { [e]: { transform: "rotate(180deg)" } },
          };
        },
        B = (t) => {
          let {
            componentCls: n,
            headerBg: e,
            paddingXXS: r,
            colorBorder: o,
          } = t;
          return {
            ["".concat(n, "-borderless")]: {
              backgroundColor: e,
              border: 0,
              ["> ".concat(n, "-item")]: {
                borderBottom: "1px solid ".concat(o),
              },
              ["\n        > "
                .concat(n, "-item:last-child,\n        > ")
                .concat(n, "-item:last-child ")
                .concat(n, "-header\n      ")]: { borderRadius: 0 },
              ["> ".concat(n, "-item:last-child")]: { borderBottom: 0 },
              ["> ".concat(n, "-item > ").concat(n, "-content")]: {
                backgroundColor: "transparent",
                borderTop: 0,
              },
              ["> "
                .concat(n, "-item > ")
                .concat(n, "-content > ")
                .concat(n, "-content-box")]: { paddingTop: r },
            },
          };
        },
        D = (t) => {
          let { componentCls: n, paddingSM: e } = t;
          return {
            ["".concat(n, "-ghost")]: {
              backgroundColor: "transparent",
              border: 0,
              ["> ".concat(n, "-item")]: {
                borderBottom: 0,
                ["> ".concat(n, "-content")]: {
                  backgroundColor: "transparent",
                  border: 0,
                  ["> ".concat(n, "-content-box")]: { paddingBlock: e },
                },
              },
            },
          };
        };
      var q = (0, Z.I$)(
          "Collapse",
          (t) => {
            let n = (0, R.TS)(t, {
              collapseHeaderPaddingSM: ""
                .concat((0, A.bf)(t.paddingXS), " ")
                .concat((0, A.bf)(t.paddingSM)),
              collapseHeaderPaddingLG: ""
                .concat((0, A.bf)(t.padding), " ")
                .concat((0, A.bf)(t.paddingLG)),
              collapsePanelBorderRadius: t.borderRadiusLG,
            });
            return [H(n), B(n), D(n), L(n), I(n)];
          },
          (t) => ({
            headerPadding: ""
              .concat(t.paddingSM, "px ")
              .concat(t.padding, "px"),
            headerBg: t.colorFillAlter,
            contentPadding: "".concat(t.padding, "px 16px"),
            contentBg: t.colorBgContainer,
          })
        ),
        G = Object.assign(
          r.forwardRef((t, n) => {
            let {
                getPrefixCls: e,
                direction: i,
                collapse: u,
              } = r.useContext(j.E_),
              {
                prefixCls: c,
                className: l,
                rootClassName: s,
                style: f,
                bordered: p = !0,
                ghost: h,
                size: v,
                expandIconPosition: g = "start",
                children: m,
                expandIcon: y,
              } = t,
              b = (0, N.Z)((t) => {
                var n;
                return null !== (n = null != v ? v : t) && void 0 !== n
                  ? n
                  : "middle";
              }),
              _ = e("collapse", c),
              w = e(),
              [E, x, S] = q(_),
              M = r.useMemo(
                () => ("left" === g ? "start" : "right" === g ? "end" : g),
                [g]
              ),
              T = null != y ? y : null == u ? void 0 : u.expandIcon,
              A = r.useCallback(
                function () {
                  let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n =
                      "function" == typeof T
                        ? T(t)
                        : r.createElement(o.Z, {
                            rotate: t.isActive ? 90 : void 0,
                          });
                  return (0, P.Tm)(n, () => {
                    var t;
                    return {
                      className: a()(
                        null === (t = null == n ? void 0 : n.props) ||
                          void 0 === t
                          ? void 0
                          : t.className,
                        "".concat(_, "-arrow")
                      ),
                    };
                  });
                },
                [T, _]
              ),
              z = a()(
                "".concat(_, "-icon-position-").concat(M),
                {
                  ["".concat(_, "-borderless")]: !p,
                  ["".concat(_, "-rtl")]: "rtl" === i,
                  ["".concat(_, "-ghost")]: !!h,
                  ["".concat(_, "-").concat(b)]: "middle" !== b,
                },
                null == u ? void 0 : u.className,
                l,
                s,
                x,
                S
              ),
              I = Object.assign(Object.assign({}, (0, C.Z)(w)), {
                motionAppear: !1,
                leavedClassName: "".concat(_, "-content-hidden"),
              }),
              Z = r.useMemo(
                () =>
                  m
                    ? (0, d.Z)(m).map((t, n) => {
                        var e, r;
                        if (
                          null === (e = t.props) || void 0 === e
                            ? void 0
                            : e.disabled
                        ) {
                          let e =
                              null !== (r = t.key) && void 0 !== r
                                ? r
                                : String(n),
                            { disabled: o, collapsible: i } = t.props,
                            a = Object.assign(
                              Object.assign(
                                {},
                                (0, O.Z)(t.props, ["disabled"])
                              ),
                              {
                                key: e,
                                collapsible:
                                  null != i ? i : o ? "disabled" : void 0,
                              }
                            );
                          return (0, P.Tm)(t, a);
                        }
                        return t;
                      })
                    : null,
                [m]
              );
            return E(
              r.createElement(
                k,
                Object.assign(
                  { ref: n, openMotion: I },
                  (0, O.Z)(t, ["rootClassName"]),
                  {
                    expandIcon: A,
                    prefixCls: _,
                    className: z,
                    style: Object.assign(
                      Object.assign({}, null == u ? void 0 : u.style),
                      f
                    ),
                  }
                ),
                Z
              )
            );
          }),
          { Panel: T }
        );
    },
    1100: function (t, n, e) {
      "use strict";
      e.d(n, {
        Z: function () {
          return d;
        },
      });
      var r = e(7294),
        o = e(3967),
        i = e.n(o),
        a = e(1946),
        u = e(5980),
        c = e(7346),
        l = e(5910),
        s = e(810);
      let f = (t) => {
        let {
          componentCls: n,
          sizePaddingEdgeHorizontal: e,
          colorSplit: r,
          lineWidth: o,
          textPaddingInline: i,
          orientationMargin: a,
          verticalMarginInline: l,
        } = t;
        return {
          [n]: Object.assign(Object.assign({}, (0, c.Wf)(t)), {
            borderBlockStart: "".concat((0, u.bf)(o), " solid ").concat(r),
            "&-vertical": {
              position: "relative",
              top: "-0.06em",
              display: "inline-block",
              height: "0.9em",
              marginInline: l,
              marginBlock: 0,
              verticalAlign: "middle",
              borderTop: 0,
              borderInlineStart: "".concat((0, u.bf)(o), " solid ").concat(r),
            },
            "&-horizontal": {
              display: "flex",
              clear: "both",
              width: "100%",
              minWidth: "100%",
              margin: "".concat(
                (0, u.bf)(t.dividerHorizontalGutterMargin),
                " 0"
              ),
            },
            ["&-horizontal".concat(n, "-with-text")]: {
              display: "flex",
              alignItems: "center",
              margin: "".concat(
                (0, u.bf)(t.dividerHorizontalWithTextGutterMargin),
                " 0"
              ),
              color: t.colorTextHeading,
              fontWeight: 500,
              fontSize: t.fontSizeLG,
              whiteSpace: "nowrap",
              textAlign: "center",
              borderBlockStart: "0 ".concat(r),
              "&::before, &::after": {
                position: "relative",
                width: "50%",
                borderBlockStart: "".concat((0, u.bf)(o), " solid transparent"),
                borderBlockStartColor: "inherit",
                borderBlockEnd: 0,
                transform: "translateY(50%)",
                content: "''",
              },
            },
            ["&-horizontal".concat(n, "-with-text-left")]: {
              "&::before": { width: "calc(".concat(a, " * 100%)") },
              "&::after": { width: "calc(100% - ".concat(a, " * 100%)") },
            },
            ["&-horizontal".concat(n, "-with-text-right")]: {
              "&::before": { width: "calc(100% - ".concat(a, " * 100%)") },
              "&::after": { width: "calc(".concat(a, " * 100%)") },
            },
            ["".concat(n, "-inner-text")]: {
              display: "inline-block",
              paddingBlock: 0,
              paddingInline: i,
            },
            "&-dashed": {
              background: "none",
              borderColor: r,
              borderStyle: "dashed",
              borderWidth: "".concat((0, u.bf)(o), " 0 0"),
            },
            ["&-horizontal".concat(n, "-with-text").concat(n, "-dashed")]: {
              "&::before, &::after": { borderStyle: "dashed none none" },
            },
            ["&-vertical".concat(n, "-dashed")]: {
              borderInlineStartWidth: o,
              borderInlineEnd: 0,
              borderBlockStart: 0,
              borderBlockEnd: 0,
            },
            ["&-plain".concat(n, "-with-text")]: {
              color: t.colorText,
              fontWeight: "normal",
              fontSize: t.fontSize,
            },
            ["&-horizontal"
              .concat(n, "-with-text-left")
              .concat(n, "-no-default-orientation-margin-left")]: {
              "&::before": { width: 0 },
              "&::after": { width: "100%" },
              ["".concat(n, "-inner-text")]: { paddingInlineStart: e },
            },
            ["&-horizontal"
              .concat(n, "-with-text-right")
              .concat(n, "-no-default-orientation-margin-right")]: {
              "&::before": { width: "100%" },
              "&::after": { width: 0 },
              ["".concat(n, "-inner-text")]: { paddingInlineEnd: e },
            },
          }),
        };
      };
      var p = (0, l.I$)(
          "Divider",
          (t) => [
            f(
              (0, s.TS)(t, {
                dividerHorizontalWithTextGutterMargin: t.margin,
                dividerHorizontalGutterMargin: t.marginLG,
                sizePaddingEdgeHorizontal: 0,
              })
            ),
          ],
          (t) => ({
            textPaddingInline: "1em",
            orientationMargin: 0.05,
            verticalMarginInline: t.marginXS,
          }),
          { unitless: { orientationMargin: !0 } }
        ),
        h = function (t, n) {
          var e = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              0 > n.indexOf(r) &&
              (e[r] = t[r]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, r = Object.getOwnPropertySymbols(t);
              o < r.length;
              o++
            )
              0 > n.indexOf(r[o]) &&
                Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
                (e[r[o]] = t[r[o]]);
          return e;
        },
        d = (t) => {
          let {
              getPrefixCls: n,
              direction: e,
              divider: o,
            } = r.useContext(a.E_),
            {
              prefixCls: u,
              type: c = "horizontal",
              orientation: l = "center",
              orientationMargin: s,
              className: f,
              rootClassName: d,
              children: v,
              dashed: g,
              plain: m,
              style: y,
            } = t,
            b = h(t, [
              "prefixCls",
              "type",
              "orientation",
              "orientationMargin",
              "className",
              "rootClassName",
              "children",
              "dashed",
              "plain",
              "style",
            ]),
            _ = n("divider", u),
            [w, E, x] = p(_),
            S = l.length > 0 ? "-".concat(l) : l,
            M = !!v,
            k = "left" === l && null != s,
            O = "right" === l && null != s,
            C = i()(
              _,
              null == o ? void 0 : o.className,
              E,
              x,
              "".concat(_, "-").concat(c),
              {
                ["".concat(_, "-with-text")]: M,
                ["".concat(_, "-with-text").concat(S)]: M,
                ["".concat(_, "-dashed")]: !!g,
                ["".concat(_, "-plain")]: !!m,
                ["".concat(_, "-rtl")]: "rtl" === e,
                ["".concat(_, "-no-default-orientation-margin-left")]: k,
                ["".concat(_, "-no-default-orientation-margin-right")]: O,
              },
              f,
              d
            ),
            P = r.useMemo(
              () =>
                "number" == typeof s ? s : /^\d+$/.test(s) ? Number(s) : s,
              [s]
            ),
            j = Object.assign(
              Object.assign({}, k && { marginLeft: P }),
              O && { marginRight: P }
            );
          return w(
            r.createElement(
              "div",
              Object.assign(
                {
                  className: C,
                  style: Object.assign(
                    Object.assign({}, null == o ? void 0 : o.style),
                    y
                  ),
                },
                b,
                { role: "separator" }
              ),
              v &&
                "vertical" !== c &&
                r.createElement(
                  "span",
                  { className: "".concat(_, "-inner-text"), style: j },
                  v
                )
            )
          );
        };
    },
    2703: function (t, n, e) {
      "use strict";
      var r = e(414);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (t.exports = function () {
          function t(t, n, e, o, i, a) {
            if (a !== r) {
              var u = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((u.name = "Invariant Violation"), u);
            }
          }
          function n() {
            return t;
          }
          t.isRequired = t;
          var e = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: n,
            element: t,
            elementType: t,
            instanceOf: n,
            node: t,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n,
            exact: n,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (e.PropTypes = e), e;
        });
    },
    5697: function (t, n, e) {
      t.exports = e(2703)();
    },
    414: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    8477: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, n) {
            for (var e = 0; e < n.length; e++) {
              var r = n[e];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (n, e, r) {
            return e && t(n.prototype, e), r && t(n, r), n;
          };
        })(),
        o = a(e(7294)),
        i = a(e(1093));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var u = (function (t) {
        function n() {
          return (
            !(function (t, n) {
              if (!(t instanceof n))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
            (function (t, n) {
              if (!t)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return n && ("object" == typeof n || "function" == typeof n)
                ? n
                : t;
            })(
              this,
              (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (t, n) {
            if ("function" != typeof n && null !== n)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof n
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              n &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, n)
                  : (t.__proto__ = n));
          })(n, t),
          r(n, [
            {
              key: "render",
              value: function () {
                return o.default.createElement(
                  "button",
                  this.props,
                  this.props.children
                );
              },
            },
          ]),
          n
        );
      })(o.default.Component);
      n.default = (0, i.default)(u);
    },
    5343: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = arguments[n];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }
            return t;
          },
        o = (function () {
          function t(t, n) {
            for (var e = 0; e < n.length; e++) {
              var r = n[e];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (n, e, r) {
            return e && t(n.prototype, e), r && t(n, r), n;
          };
        })(),
        i = c(e(7294)),
        a = c(e(8e3)),
        u = c(e(5697));
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var l = (function (t) {
        function n() {
          return (
            !(function (t, n) {
              if (!(t instanceof n))
                throw TypeError("Cannot call a class as a function");
            })(this, n),
            (function (t, n) {
              if (!t)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return n && ("object" == typeof n || "function" == typeof n)
                ? n
                : t;
            })(
              this,
              (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (t, n) {
            if ("function" != typeof n && null !== n)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof n
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              n &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, n)
                  : (t.__proto__ = n));
          })(n, t),
          o(n, [
            {
              key: "render",
              value: function () {
                var t = this,
                  n = r({}, this.props);
                return (
                  delete n.name,
                  n.parentBindings && delete n.parentBindings,
                  i.default.createElement(
                    "div",
                    r({}, n, {
                      ref: function (n) {
                        t.props.parentBindings.domNode = n;
                      },
                    }),
                    this.props.children
                  )
                );
              },
            },
          ]),
          n
        );
      })(i.default.Component);
      (l.propTypes = { name: u.default.string, id: u.default.string }),
        (n.default = (0, a.default)(l));
    },
    8939: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = i(e(7294)),
        o = i(e(1093));
      function i(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t, n) {
        if (!t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return n && ("object" == typeof n || "function" == typeof n) ? n : t;
      }
      var u = (function (t) {
        function n() {
          !(function (t, n) {
            if (!(t instanceof n))
              throw TypeError("Cannot call a class as a function");
          })(this, n);
          for (
            var t, e, o, i = arguments.length, u = Array(i), c = 0;
            c < i;
            c++
          )
            u[c] = arguments[c];
          return (
            (e = o =
              a(
                this,
                (t = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
                  t,
                  [this].concat(u)
                )
              )),
            (o.render = function () {
              return r.default.createElement("a", o.props, o.props.children);
            }),
            a(o, e)
          );
        }
        return (
          !(function (t, n) {
            if ("function" != typeof n && null !== n)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof n
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              n &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, n)
                  : (t.__proto__ = n));
          })(n, t),
          n
        );
      })(r.default.Component);
      n.default = (0, o.default)(u);
    },
    6261: function (t, n, e) {
      "use strict";
      n.OK = n.W_ = void 0;
      var r = h(e(8939)),
        o = h(e(8477)),
        i = h(e(5343)),
        a = h(e(2628)),
        u = h(e(4592)),
        c = h(e(7606)),
        l = h(e(3200)),
        s = h(e(1093)),
        f = h(e(8e3)),
        p = h(e(8482));
      function h(t) {
        return t && t.__esModule ? t : { default: t };
      }
      r.default,
        o.default,
        (n.W_ = i.default),
        (n.OK = a.default),
        u.default,
        c.default,
        l.default,
        s.default,
        f.default,
        p.default,
        r.default,
        o.default,
        i.default,
        a.default,
        u.default,
        c.default,
        l.default,
        s.default,
        f.default,
        p.default;
    },
    8482: function (t, n, e) {
      "use strict";
      var r =
          Object.assign ||
          function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = arguments[n];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }
            return t;
          },
        o = (function () {
          function t(t, n) {
            for (var e = 0; e < n.length; e++) {
              var r = n[e];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (n, e, r) {
            return e && t(n.prototype, e), r && t(n, r), n;
          };
        })();
      function i(t, n) {
        if (!(t instanceof n))
          throw TypeError("Cannot call a class as a function");
      }
      function a(t, n) {
        if (!t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return n && ("object" == typeof n || "function" == typeof n) ? n : t;
      }
      function u(t, n) {
        if ("function" != typeof n && null !== n)
          throw TypeError(
            "Super expression must either be null or a function, not " +
              typeof n
          );
        (t.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          n &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, n)
              : (t.__proto__ = n));
      }
      var c = e(7294);
      e(3935), e(4259);
      var l = e(7606),
        s = e(2628),
        f = e(5697),
        p = e(9678),
        h = {
          to: f.string.isRequired,
          containerId: f.string,
          container: f.object,
          activeClass: f.string,
          spy: f.bool,
          smooth: f.oneOfType([f.bool, f.string]),
          offset: f.number,
          delay: f.number,
          isDynamic: f.bool,
          onClick: f.func,
          duration: f.oneOfType([f.number, f.func]),
          absolute: f.bool,
          onSetActive: f.func,
          onSetInactive: f.func,
          ignoreCancelEvents: f.bool,
          hashSpy: f.bool,
          spyThrottle: f.number,
        };
      t.exports = {
        Scroll: function (t, n) {
          console.warn("Helpers.Scroll is deprecated since v1.7.0");
          var e = n || s,
            f = (function (n) {
              function s(t) {
                i(this, s);
                var n = a(
                  this,
                  (s.__proto__ || Object.getPrototypeOf(s)).call(this, t)
                );
                return d.call(n), (n.state = { active: !1 }), n;
              }
              return (
                u(s, n),
                o(s, [
                  {
                    key: "getScrollSpyContainer",
                    value: function () {
                      var t = this.props.containerId,
                        n = this.props.container;
                      return t
                        ? document.getElementById(t)
                        : n && n.nodeType
                        ? n
                        : document;
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      if (this.props.spy || this.props.hashSpy) {
                        var t = this.getScrollSpyContainer();
                        l.isMounted(t) || l.mount(t, this.props.spyThrottle),
                          this.props.hashSpy &&
                            (p.isMounted() || p.mount(e),
                            p.mapContainer(this.props.to, t)),
                          this.props.spy &&
                            l.addStateHandler(this.stateHandler),
                          l.addSpyHandler(this.spyHandler, t),
                          this.setState({ container: t });
                      }
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      l.unmount(this.stateHandler, this.spyHandler);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var n = "";
                      n =
                        this.state && this.state.active
                          ? (
                              (this.props.className || "") +
                              " " +
                              (this.props.activeClass || "active")
                            ).trim()
                          : this.props.className;
                      var e = r({}, this.props);
                      for (var o in h) e.hasOwnProperty(o) && delete e[o];
                      return (
                        (e.className = n),
                        (e.onClick = this.handleClick),
                        c.createElement(t, e)
                      );
                    },
                  },
                ]),
                s
              );
            })(c.Component),
            d = function () {
              var t = this;
              (this.scrollTo = function (n, o) {
                e.scrollTo(n, r({}, t.state, o));
              }),
                (this.handleClick = function (n) {
                  t.props.onClick && t.props.onClick(n),
                    n.stopPropagation && n.stopPropagation(),
                    n.preventDefault && n.preventDefault(),
                    t.scrollTo(t.props.to, t.props);
                }),
                (this.stateHandler = function () {
                  e.getActiveLink() !== t.props.to &&
                    (null !== t.state &&
                      t.state.active &&
                      t.props.onSetInactive &&
                      t.props.onSetInactive(),
                    t.setState({ active: !1 }));
                }),
                (this.spyHandler = function (n) {
                  var r = t.getScrollSpyContainer();
                  if (!p.isMounted() || p.isInitialized()) {
                    var o = t.props.to,
                      i = null,
                      a = 0,
                      u = 0,
                      c = 0;
                    if (
                      (r.getBoundingClientRect &&
                        (c = r.getBoundingClientRect().top),
                      !i || t.props.isDynamic)
                    ) {
                      if (!(i = e.get(o))) return;
                      var s = i.getBoundingClientRect();
                      u = (a = s.top - c + n) + s.height;
                    }
                    var f = n - t.props.offset,
                      h = f >= Math.floor(a) && f < Math.floor(u),
                      d = f < Math.floor(a) || f >= Math.floor(u),
                      v = e.getActiveLink();
                    return d
                      ? (o === v && e.setActiveLink(void 0),
                        t.props.hashSpy && p.getHash() === o && p.changeHash(),
                        t.props.spy &&
                          t.state.active &&
                          (t.setState({ active: !1 }),
                          t.props.onSetInactive && t.props.onSetInactive()),
                        l.updateStates())
                      : h && v !== o
                      ? (e.setActiveLink(o),
                        t.props.hashSpy && p.changeHash(o),
                        t.props.spy &&
                          (t.setState({ active: !0 }),
                          t.props.onSetActive && t.props.onSetActive(o)),
                        l.updateStates())
                      : void 0;
                  }
                });
            };
          return (f.propTypes = h), (f.defaultProps = { offset: 0 }), f;
        },
        Element: function (t) {
          console.warn("Helpers.Element is deprecated since v1.7.0");
          var n = (function (n) {
            function e(t) {
              i(this, e);
              var n = a(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
              );
              return (n.childBindings = { domNode: null }), n;
            }
            return (
              u(e, n),
              o(e, [
                {
                  key: "componentDidMount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (t) {
                    this.props.name !== t.name &&
                      this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    s.unregister(this.props.name);
                  },
                },
                {
                  key: "registerElems",
                  value: function (t) {
                    s.register(t, this.childBindings.domNode);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return c.createElement(
                      t,
                      r({}, this.props, { parentBindings: this.childBindings })
                    );
                  },
                },
              ]),
              e
            );
          })(c.Component);
          return (n.propTypes = { name: f.string, id: f.string }), n;
        },
      };
    },
    3200: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r =
        Object.assign ||
        function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          }
          return t;
        };
      u(e(4259));
      var o = u(e(9765)),
        i = u(e(140)),
        a = u(e(4592));
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var c = function (t) {
          return o.default[t.smooth] || o.default.defaultEasing;
        },
        l =
          (function () {
            if ("undefined" != typeof window)
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame
              );
          })() ||
          function (t, n, e) {
            window.setTimeout(t, e || 1e3 / 60, new Date().getTime());
          },
        s = function () {
          return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null,
          };
        },
        f = function (t) {
          var n = t.data.containerElement;
          if (n && n !== document && n !== document.body) return n.scrollLeft;
          var e = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (document.compatMode || "");
          return e
            ? window.pageXOffset
            : r
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
        },
        p = function (t) {
          var n = t.data.containerElement;
          if (n && n !== document && n !== document.body) return n.scrollTop;
          var e = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (document.compatMode || "");
          return e
            ? window.pageYOffset
            : r
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        },
        h = function (t) {
          var n = t.data.containerElement;
          if (n && n !== document && n !== document.body)
            return n.scrollWidth - n.offsetWidth;
          var e = document.body,
            r = document.documentElement;
          return Math.max(
            e.scrollWidth,
            e.offsetWidth,
            r.clientWidth,
            r.scrollWidth,
            r.offsetWidth
          );
        },
        d = function (t) {
          var n = t.data.containerElement;
          if (n && n !== document && n !== document.body)
            return n.scrollHeight - n.offsetHeight;
          var e = document.body,
            r = document.documentElement;
          return Math.max(
            e.scrollHeight,
            e.offsetHeight,
            r.clientHeight,
            r.scrollHeight,
            r.offsetHeight
          );
        },
        v = function t(n, e, r) {
          var o = e.data;
          if (!e.ignoreCancelEvents && o.cancel) {
            a.default.registered.end &&
              a.default.registered.end(o.to, o.target, o.currentPositionY);
            return;
          }
          if (
            ((o.delta = Math.round(o.targetPosition - o.startPosition)),
            null === o.start && (o.start = r),
            (o.progress = r - o.start),
            (o.percent =
              o.progress >= o.duration ? 1 : n(o.progress / o.duration)),
            (o.currentPosition =
              o.startPosition + Math.ceil(o.delta * o.percent)),
            o.containerElement &&
            o.containerElement !== document &&
            o.containerElement !== document.body
              ? e.horizontal
                ? (o.containerElement.scrollLeft = o.currentPosition)
                : (o.containerElement.scrollTop = o.currentPosition)
              : e.horizontal
              ? window.scrollTo(o.currentPosition, 0)
              : window.scrollTo(0, o.currentPosition),
            o.percent < 1)
          ) {
            var i = t.bind(null, n, e);
            l.call(window, i);
            return;
          }
          a.default.registered.end &&
            a.default.registered.end(o.to, o.target, o.currentPosition);
        },
        g = function (t) {
          t.data.containerElement = t
            ? t.containerId
              ? document.getElementById(t.containerId)
              : t.container && t.container.nodeType
              ? t.container
              : document
            : null;
        },
        m = function (t, n, e, r) {
          if (
            ((n.data = n.data || s()),
            window.clearTimeout(n.data.delayTimeout),
            i.default.subscribe(function () {
              n.data.cancel = !0;
            }),
            g(n),
            (n.data.start = null),
            (n.data.cancel = !1),
            (n.data.startPosition = n.horizontal ? f(n) : p(n)),
            (n.data.targetPosition = n.absolute ? t : t + n.data.startPosition),
            n.data.startPosition === n.data.targetPosition)
          ) {
            a.default.registered.end &&
              a.default.registered.end(
                n.data.to,
                n.data.target,
                n.data.currentPosition
              );
            return;
          }
          (n.data.delta = Math.round(
            n.data.targetPosition - n.data.startPosition
          )),
            (n.data.duration = (
              "function" == typeof (o = n.duration)
                ? o
                : function () {
                    return o;
                  }
            )(n.data.delta)),
            (n.data.duration = isNaN(parseFloat(n.data.duration))
              ? 1e3
              : parseFloat(n.data.duration)),
            (n.data.to = e),
            (n.data.target = r);
          var o,
            u = c(n),
            h = v.bind(null, u, n);
          if (n && n.delay > 0) {
            n.data.delayTimeout = window.setTimeout(function () {
              a.default.registered.begin &&
                a.default.registered.begin(n.data.to, n.data.target),
                l.call(window, h);
            }, n.delay);
            return;
          }
          a.default.registered.begin &&
            a.default.registered.begin(n.data.to, n.data.target),
            l.call(window, h);
        },
        y = function (t) {
          return ((t = r({}, t)).data = t.data || s()), (t.absolute = !0), t;
        };
      n.default = {
        animateTopScroll: m,
        getAnimationType: c,
        scrollToTop: function (t) {
          m(0, y(t));
        },
        scrollToBottom: function (t) {
          g((t = y(t))), m(t.horizontal ? h(t) : d(t), t);
        },
        scrollTo: function (t, n) {
          m(t, y(n));
        },
        scrollMore: function (t, n) {
          g((n = y(n))), m(t + (n.horizontal ? f(n) : p(n)), n);
        },
      };
    },
    140: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = e(5236),
        o = ["mousedown", "mousewheel", "touchmove", "keydown"];
      n.default = {
        subscribe: function (t) {
          return (
            "undefined" != typeof document &&
            o.forEach(function (n) {
              return (0, r.addPassiveEventListener)(document, n, t);
            })
          );
        },
      };
    },
    5236: function (t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.addPassiveEventListener = function (t, n, r) {
          var o = r.name;
          o || ((o = n), console.warn("Listener must be a named function.")),
            e.has(n) || e.set(n, new Set());
          var i = e.get(n);
          if (!i.has(o)) {
            var a = (function () {
              var t = !1;
              try {
                var n = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                window.addEventListener("test", null, n);
              } catch (t) {}
              return t;
            })();
            t.addEventListener(n, r, !!a && { passive: !0 }), i.add(o);
          }
        }),
        (n.removePassiveEventListener = function (t, n, r) {
          t.removeEventListener(n, r), e.get(n).delete(r.name || n);
        });
      var e = new Map();
    },
    8e3: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = arguments[n];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }
            return t;
          },
        o = (function () {
          function t(t, n) {
            for (var e = 0; e < n.length; e++) {
              var r = n[e];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (n, e, r) {
            return e && t(n.prototype, e), r && t(n, r), n;
          };
        })(),
        i = c(e(7294));
      c(e(3935));
      var a = c(e(2628)),
        u = c(e(5697));
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      n.default = function (t) {
        var n = (function (n) {
          function e(t) {
            !(function (t, n) {
              if (!(t instanceof n))
                throw TypeError("Cannot call a class as a function");
            })(this, e);
            var n = (function (t, n) {
              if (!t)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return n && ("object" == typeof n || "function" == typeof n)
                ? n
                : t;
            })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return (n.childBindings = { domNode: null }), n;
          }
          return (
            !(function (t, n) {
              if ("function" != typeof n && null !== n)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof n
                );
              (t.prototype = Object.create(n && n.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                n &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, n)
                    : (t.__proto__ = n));
            })(e, n),
            o(e, [
              {
                key: "componentDidMount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  this.registerElems(this.props.name);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (t) {
                  this.props.name !== t.name &&
                    this.registerElems(this.props.name);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  a.default.unregister(this.props.name);
                },
              },
              {
                key: "registerElems",
                value: function (t) {
                  a.default.register(t, this.childBindings.domNode);
                },
              },
              {
                key: "render",
                value: function () {
                  return i.default.createElement(
                    t,
                    r({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            e
          );
        })(i.default.Component);
        return (
          (n.propTypes = { name: u.default.string, id: u.default.string }), n
        );
      };
    },
    4592: function (t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var e = {
        registered: {},
        scrollEvent: {
          register: function (t, n) {
            e.registered[t] = n;
          },
          remove: function (t) {
            e.registered[t] = null;
          },
        },
      };
      n.default = e;
    },
    9678: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }), e(5236);
      var r,
        o = (r = e(4259)) && r.__esModule ? r : { default: r };
      n.default = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function (t) {
          (this.scroller = t),
            (this.handleHashChange = this.handleHashChange.bind(this)),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            (this.mountFlag = !0);
        },
        mapContainer: function (t, n) {
          this.containers[t] = n;
        },
        isMounted: function () {
          return this.mountFlag;
        },
        isInitialized: function () {
          return this.initialized;
        },
        initStateFromHash: function () {
          var t = this,
            n = this.getHash();
          n
            ? window.setTimeout(function () {
                t.scrollTo(n, !0), (t.initialized = !0);
              }, 10)
            : (this.initialized = !0);
        },
        scrollTo: function (t, n) {
          var e = this.scroller;
          if (e.get(t) && (n || t !== e.getActiveLink())) {
            var r = this.containers[t] || document;
            e.scrollTo(t, { container: r });
          }
        },
        getHash: function () {
          return o.default.getHash();
        },
        changeHash: function (t, n) {
          this.isInitialized() &&
            o.default.getHash() !== t &&
            o.default.updateHash(t, n);
        },
        handleHashChange: function () {
          this.scrollTo(this.getHash());
        },
        unmount: function () {
          (this.scroller = null),
            (this.containers = null),
            window.removeEventListener("hashchange", this.handleHashChange);
        },
      };
    },
    1093: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = arguments[n];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }
            return t;
          },
        o = (function () {
          function t(t, n) {
            for (var e = 0; e < n.length; e++) {
              var r = n[e];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (n, e, r) {
            return e && t(n.prototype, e), r && t(n, r), n;
          };
        })(),
        i = s(e(7294)),
        a = s(e(7606)),
        u = s(e(2628)),
        c = s(e(5697)),
        l = s(e(9678));
      function s(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var f = {
        to: c.default.string.isRequired,
        containerId: c.default.string,
        container: c.default.object,
        activeClass: c.default.string,
        activeStyle: c.default.object,
        spy: c.default.bool,
        horizontal: c.default.bool,
        smooth: c.default.oneOfType([c.default.bool, c.default.string]),
        offset: c.default.number,
        delay: c.default.number,
        isDynamic: c.default.bool,
        onClick: c.default.func,
        duration: c.default.oneOfType([c.default.number, c.default.func]),
        absolute: c.default.bool,
        onSetActive: c.default.func,
        onSetInactive: c.default.func,
        ignoreCancelEvents: c.default.bool,
        hashSpy: c.default.bool,
        saveHashHistory: c.default.bool,
        spyThrottle: c.default.number,
      };
      n.default = function (t, n) {
        var e = n || u.default,
          c = (function (n) {
            function u(t) {
              !(function (t, n) {
                if (!(t instanceof n))
                  throw TypeError("Cannot call a class as a function");
              })(this, u);
              var n = (function (t, n) {
                if (!t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return n && ("object" == typeof n || "function" == typeof n)
                  ? n
                  : t;
              })(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, t));
              return s.call(n), (n.state = { active: !1 }), n;
            }
            return (
              !(function (t, n) {
                if ("function" != typeof n && null !== n)
                  throw TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof n
                  );
                (t.prototype = Object.create(n && n.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  n &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, n)
                      : (t.__proto__ = n));
              })(u, n),
              o(u, [
                {
                  key: "getScrollSpyContainer",
                  value: function () {
                    var t = this.props.containerId,
                      n = this.props.container;
                    return t && !n
                      ? document.getElementById(t)
                      : n && n.nodeType
                      ? n
                      : document;
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var t = this.getScrollSpyContainer();
                      a.default.isMounted(t) ||
                        a.default.mount(t, this.props.spyThrottle),
                        this.props.hashSpy &&
                          (l.default.isMounted() || l.default.mount(e),
                          l.default.mapContainer(this.props.to, t)),
                        a.default.addSpyHandler(this.spyHandler, t),
                        this.setState({ container: t });
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    a.default.unmount(this.stateHandler, this.spyHandler);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var n = "";
                    n =
                      this.state && this.state.active
                        ? (
                            (this.props.className || "") +
                            " " +
                            (this.props.activeClass || "active")
                          ).trim()
                        : this.props.className;
                    var e = {};
                    e =
                      this.state && this.state.active
                        ? r({}, this.props.style, this.props.activeStyle)
                        : r({}, this.props.style);
                    var o = r({}, this.props);
                    for (var a in f) o.hasOwnProperty(a) && delete o[a];
                    return (
                      (o.className = n),
                      (o.style = e),
                      (o.onClick = this.handleClick),
                      i.default.createElement(t, o)
                    );
                  },
                },
              ]),
              u
            );
          })(i.default.PureComponent),
          s = function () {
            var t = this;
            (this.scrollTo = function (n, o) {
              e.scrollTo(n, r({}, t.state, o));
            }),
              (this.handleClick = function (n) {
                t.props.onClick && t.props.onClick(n),
                  n.stopPropagation && n.stopPropagation(),
                  n.preventDefault && n.preventDefault(),
                  t.scrollTo(t.props.to, t.props);
              }),
              (this.spyHandler = function (n, r) {
                var o = t.getScrollSpyContainer();
                if (!l.default.isMounted() || l.default.isInitialized()) {
                  var i = t.props.horizontal,
                    a = t.props.to,
                    u = null,
                    c = void 0,
                    s = void 0;
                  if (i) {
                    var f = 0,
                      p = 0,
                      h = 0;
                    if (
                      (o.getBoundingClientRect &&
                        (h = o.getBoundingClientRect().left),
                      !u || t.props.isDynamic)
                    ) {
                      if (!(u = e.get(a))) return;
                      var d = u.getBoundingClientRect();
                      p = (f = d.left - h + n) + d.width;
                    }
                    var v = n - t.props.offset;
                    (c = v >= Math.floor(f) && v < Math.floor(p)),
                      (s = v < Math.floor(f) || v >= Math.floor(p));
                  } else {
                    var g = 0,
                      m = 0,
                      y = 0;
                    if (
                      (o.getBoundingClientRect &&
                        (y = o.getBoundingClientRect().top),
                      !u || t.props.isDynamic)
                    ) {
                      if (!(u = e.get(a))) return;
                      var b = u.getBoundingClientRect();
                      m = (g = b.top - y + r) + b.height;
                    }
                    var _ = r - t.props.offset;
                    (c = _ >= Math.floor(g) && _ < Math.floor(m)),
                      (s = _ < Math.floor(g) || _ >= Math.floor(m));
                  }
                  var w = e.getActiveLink();
                  if (s) {
                    if (
                      (a === w && e.setActiveLink(void 0),
                      t.props.hashSpy && l.default.getHash() === a)
                    ) {
                      var E = t.props.saveHashHistory;
                      l.default.changeHash("", void 0 !== E && E);
                    }
                    t.props.spy &&
                      t.state.active &&
                      (t.setState({ active: !1 }),
                      t.props.onSetInactive && t.props.onSetInactive(a, u));
                  }
                  if (c && (w !== a || !1 === t.state.active)) {
                    e.setActiveLink(a);
                    var x = t.props.saveHashHistory;
                    t.props.hashSpy &&
                      l.default.changeHash(a, void 0 !== x && x),
                      t.props.spy &&
                        (t.setState({ active: !0 }),
                        t.props.onSetActive && t.props.onSetActive(a, u));
                  }
                }
              });
          };
        return (c.propTypes = f), (c.defaultProps = { offset: 0 }), c;
      };
    },
    7606: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r,
        o = (r = e(3096)) && r.__esModule ? r : { default: r },
        i = e(5236),
        a = function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 66;
          return (0, o.default)(t, n);
        },
        u = {
          spyCallbacks: [],
          spySetState: [],
          scrollSpyContainers: [],
          mount: function (t, n) {
            if (t) {
              var e = a(function (n) {
                u.scrollHandler(t);
              }, n);
              u.scrollSpyContainers.push(t),
                (0, i.addPassiveEventListener)(t, "scroll", e);
            }
          },
          isMounted: function (t) {
            return -1 !== u.scrollSpyContainers.indexOf(t);
          },
          currentPositionX: function (t) {
            if (t !== document) return t.scrollLeft;
            var n = void 0 !== window.pageYOffset,
              e = "CSS1Compat" === (document.compatMode || "");
            return n
              ? window.pageXOffset
              : e
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
          },
          currentPositionY: function (t) {
            if (t !== document) return t.scrollTop;
            var n = void 0 !== window.pageXOffset,
              e = "CSS1Compat" === (document.compatMode || "");
            return n
              ? window.pageYOffset
              : e
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          },
          scrollHandler: function (t) {
            (
              u.scrollSpyContainers[u.scrollSpyContainers.indexOf(t)]
                .spyCallbacks || []
            ).forEach(function (n) {
              return n(u.currentPositionX(t), u.currentPositionY(t));
            });
          },
          addStateHandler: function (t) {
            u.spySetState.push(t);
          },
          addSpyHandler: function (t, n) {
            var e = u.scrollSpyContainers[u.scrollSpyContainers.indexOf(n)];
            e.spyCallbacks || (e.spyCallbacks = []),
              e.spyCallbacks.push(t),
              t(u.currentPositionX(n), u.currentPositionY(n));
          },
          updateStates: function () {
            u.spySetState.forEach(function (t) {
              return t();
            });
          },
          unmount: function (t, n) {
            u.scrollSpyContainers.forEach(function (t) {
              return (
                t.spyCallbacks &&
                t.spyCallbacks.length &&
                t.spyCallbacks.indexOf(n) > -1 &&
                t.spyCallbacks.splice(t.spyCallbacks.indexOf(n), 1)
              );
            }),
              u.spySetState &&
                u.spySetState.length &&
                u.spySetState.indexOf(t) > -1 &&
                u.spySetState.splice(u.spySetState.indexOf(t), 1),
              document.removeEventListener("scroll", u.scrollHandler);
          },
          update: function () {
            return u.scrollSpyContainers.forEach(function (t) {
              return u.scrollHandler(t);
            });
          },
        };
      n.default = u;
    },
    2628: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (t) {
            for (var n = 1; n < arguments.length; n++) {
              var e = arguments[n];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }
            return t;
          },
        o = u(e(4259)),
        i = u(e(3200)),
        a = u(e(4592));
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var c = {},
        l = void 0;
      n.default = {
        unmount: function () {
          c = {};
        },
        register: function (t, n) {
          c[t] = n;
        },
        unregister: function (t) {
          delete c[t];
        },
        get: function (t) {
          return (
            c[t] ||
            document.getElementById(t) ||
            document.getElementsByName(t)[0] ||
            document.getElementsByClassName(t)[0]
          );
        },
        setActiveLink: function (t) {
          return (l = t);
        },
        getActiveLink: function () {
          return l;
        },
        scrollTo: function (t, n) {
          var e = this.get(t);
          if (!e) {
            console.warn("target Element not found");
            return;
          }
          var u = (n = r({}, n, { absolute: !1 })).containerId,
            c = n.container,
            l = void 0;
          (l = u ? document.getElementById(u) : c && c.nodeType ? c : document),
            (n.absolute = !0);
          var s = n.horizontal,
            f = o.default.scrollOffset(l, e, s) + (n.offset || 0);
          if (!n.smooth) {
            a.default.registered.begin && a.default.registered.begin(t, e),
              l === document
                ? n.horizontal
                  ? window.scrollTo(f, 0)
                  : window.scrollTo(0, f)
                : (l.scrollTop = f),
              a.default.registered.end && a.default.registered.end(t, e);
            return;
          }
          i.default.animateTopScroll(f, n, t, e);
        },
      };
    },
    9765: function (t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = {
          defaultEasing: function (t) {
            return t < 0.5
              ? Math.pow(2 * t, 2) / 2
              : 1 - Math.pow((1 - t) * 2, 2) / 2;
          },
          linear: function (t) {
            return t;
          },
          easeInQuad: function (t) {
            return t * t;
          },
          easeOutQuad: function (t) {
            return t * (2 - t);
          },
          easeInOutQuad: function (t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          },
          easeInCubic: function (t) {
            return t * t * t;
          },
          easeOutCubic: function (t) {
            return --t * t * t + 1;
          },
          easeInOutCubic: function (t) {
            return t < 0.5
              ? 4 * t * t * t
              : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          },
          easeInQuart: function (t) {
            return t * t * t * t;
          },
          easeOutQuart: function (t) {
            return 1 - --t * t * t * t;
          },
          easeInOutQuart: function (t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
          },
          easeInQuint: function (t) {
            return t * t * t * t * t;
          },
          easeOutQuint: function (t) {
            return 1 + --t * t * t * t * t;
          },
          easeInOutQuint: function (t) {
            return t < 0.5
              ? 16 * t * t * t * t * t
              : 1 + 16 * --t * t * t * t * t;
          },
        });
    },
    4259: function (t, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var e = function (t, n) {
        for (var e = t.offsetTop, r = t.offsetParent; r && !n(r); )
          (e += r.offsetTop), (r = r.offsetParent);
        return { offsetTop: e, offsetParent: r };
      };
      n.default = {
        updateHash: function (t, n) {
          var e = 0 === t.indexOf("#") ? t.substring(1) : t,
            r = e ? "#" + e : "",
            o = window && window.location,
            i = r ? o.pathname + o.search + r : o.pathname + o.search;
          n
            ? history.pushState(history.state, "", i)
            : history.replaceState(history.state, "", i);
        },
        getHash: function () {
          return window.location.hash.replace(/^#/, "");
        },
        filterElementInContainer: function (t) {
          return function (n) {
            return t.contains
              ? t != n && t.contains(n)
              : !!(16 & t.compareDocumentPosition(n));
          };
        },
        scrollOffset: function (t, n, r) {
          if (r)
            return t === document
              ? n.getBoundingClientRect().left +
                  (window.scrollX || window.pageXOffset)
              : "static" !== getComputedStyle(t).position
              ? n.offsetLeft
              : n.offsetLeft - t.offsetLeft;
          if (t === document)
            return (
              n.getBoundingClientRect().top +
              (window.scrollY || window.pageYOffset)
            );
          if ("static" !== getComputedStyle(t).position) {
            if (n.offsetParent !== t) {
              var o = e(n, function (n) {
                  return n === t || n === document;
                }),
                i = o.offsetTop;
              if (o.offsetParent !== t)
                throw Error(
                  "Seems containerElement is not an ancestor of the Element"
                );
              return i;
            }
            return n.offsetTop;
          }
          if (n.offsetParent === t.offsetParent)
            return n.offsetTop - t.offsetTop;
          var a = function (t) {
            return t === document;
          };
          return e(n, a).offsetTop - e(t, a).offsetTop;
        },
      };
    },
    7172: function (t, n, e) {
      !(function (t, n, e, r, o, i, a) {
        "use strict";
        function u(t) {
          return t && "object" == typeof t && "default" in t
            ? t
            : { default: t };
        }
        var c = u(n),
          l = u(e),
          s = (function (t) {
            if (t && t.__esModule) return t;
            var n = Object.create(null);
            return (
              t &&
                Object.keys(t).forEach(function (e) {
                  if ("default" !== e) {
                    var r = Object.getOwnPropertyDescriptor(t, e);
                    Object.defineProperty(
                      n,
                      e,
                      r.get
                        ? r
                        : {
                            enumerable: !0,
                            get: function () {
                              return t[e];
                            },
                          }
                    );
                  }
                }),
              (n.default = t),
              Object.freeze(n)
            );
          })(r);
        function f(t, n) {
          var e = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            n &&
              (r = r.filter(function (n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable;
              })),
              e.push.apply(e, r);
          }
          return e;
        }
        function p(t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? f(Object(e), !0).forEach(function (n) {
                  var r;
                  (r = e[n]),
                    n in t
                      ? Object.defineProperty(t, n, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[n] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
              : f(Object(e)).forEach(function (n) {
                  Object.defineProperty(
                    t,
                    n,
                    Object.getOwnPropertyDescriptor(e, n)
                  );
                });
          }
          return t;
        }
        function h(t) {
          return (h =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function d() {
          return (d = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var n = 1; n < arguments.length; n++) {
                  var e = arguments[n];
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }
                return t;
              }).apply(this, arguments);
        }
        function v(t, n) {
          if (null == t) return {};
          var e,
            r,
            o = (function (t, n) {
              if (null == t) return {};
              var e,
                r,
                o = {},
                i = Object.keys(t);
              for (r = 0; r < i.length; r++)
                (e = i[r]), n.indexOf(e) >= 0 || (o[e] = t[e]);
              return o;
            })(t, n);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (r = 0; r < i.length; r++)
              (e = i[r]),
                n.indexOf(e) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(t, e) &&
                    (o[e] = t[e]));
          }
          return o;
        }
        function g(t, n) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, n) {
              var e =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != e) {
                var r,
                  o,
                  i = [],
                  a = !0,
                  u = !1;
                try {
                  for (
                    e = e.call(t);
                    !(a = (r = e.next()).done) &&
                    (i.push(r.value), !n || i.length !== n);
                    a = !0
                  );
                } catch (t) {
                  (u = !0), (o = t);
                } finally {
                  try {
                    a || null == e.return || e.return();
                  } finally {
                    if (u) throw o;
                  }
                }
                return i;
              }
            })(t, n) ||
            (function (t, n) {
              if (t) {
                if ("string" == typeof t) return m(t, n);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === e && t.constructor && (e = t.constructor.name),
                  "Map" === e || "Set" === e)
                )
                  return Array.from(t);
                if (
                  "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                )
                  return m(t, n);
              }
            })(t, n) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function m(t, n) {
          (null == n || n > t.length) && (n = t.length);
          for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
          return r;
        }
        var y = ["width", "height", "projection", "projectionConfig"],
          b = s.geoPath,
          _ = v(s, ["geoPath"]),
          w = n.createContext(),
          E = function (t) {
            var e = t.width,
              r = t.height,
              o = t.projection,
              i = t.projectionConfig,
              a = v(t, y),
              u = g(i.center || [], 2),
              l = u[0],
              s = u[1],
              f = g(i.rotate || [], 3),
              p = f[0],
              h = f[1],
              m = f[2],
              E = g(i.parallels || [], 2),
              x = E[0],
              S = E[1],
              M = i.scale || null,
              k = n.useMemo(
                function () {
                  return (function (t) {
                    var n = t.projectionConfig,
                      e = void 0 === n ? {} : n,
                      r = t.projection,
                      o = void 0 === r ? "geoEqualEarth" : r,
                      i = t.width,
                      a = t.height;
                    if ("function" == typeof o) return o;
                    var u = _[o]().translate([
                      (void 0 === i ? 800 : i) / 2,
                      (void 0 === a ? 600 : a) / 2,
                    ]);
                    return (
                      [
                        u.center ? "center" : null,
                        u.rotate ? "rotate" : null,
                        u.scale ? "scale" : null,
                        u.parallels ? "parallels" : null,
                      ].forEach(function (t) {
                        t && (u = u[t](e[t] || u[t]()));
                      }),
                      u
                    );
                  })({
                    projectionConfig: {
                      center: l || 0 === l || s || 0 === s ? [l, s] : null,
                      rotate: p || 0 === p || h || 0 === h ? [p, h, m] : null,
                      parallels: x || 0 === x || S || 0 === S ? [x, S] : null,
                      scale: M,
                    },
                    projection: o,
                    width: e,
                    height: r,
                  });
                },
                [e, r, o, l, s, p, h, m, x, S, M]
              ),
              O = n.useCallback(k, [k]),
              C = n.useMemo(
                function () {
                  return {
                    width: e,
                    height: r,
                    projection: O,
                    path: b().projection(O),
                  };
                },
                [e, r, O]
              );
            return c.default.createElement(w.Provider, d({ value: C }, a));
          };
        E.propTypes = {
          width: l.default.number,
          height: l.default.number,
          projection: l.default.oneOfType([l.default.string, l.default.func]),
          projectionConfig: l.default.object,
        };
        var x = [
            "width",
            "height",
            "projection",
            "projectionConfig",
            "className",
          ],
          S = n.forwardRef(function (t, n) {
            var e = t.width,
              r = void 0 === e ? 800 : e,
              o = t.height,
              i = void 0 === o ? 600 : o,
              a = t.projection,
              u = t.projectionConfig,
              l = t.className,
              s = v(t, x);
            return c.default.createElement(
              E,
              {
                width: r,
                height: i,
                projection: void 0 === a ? "geoEqualEarth" : a,
                projectionConfig: void 0 === u ? {} : u,
              },
              c.default.createElement(
                "svg",
                d(
                  {
                    ref: n,
                    viewBox: "0 0 ".concat(r, " ").concat(i),
                    className: "rsm-svg ".concat(void 0 === l ? "" : l),
                  },
                  s
                )
              )
            );
          });
        function M(t, n, e) {
          var r = (t * e.k - t) / 2,
            o = (n * e.k - n) / 2;
          return [t / 2 - (r + e.x) / e.k, n / 2 - (o + e.y) / e.k];
        }
        function k(t, n) {
          if ("Topology" !== t.type)
            return n ? n(t.features || t) : t.features || t;
          var e = o.feature(t, t.objects[Object.keys(t.objects)[0]]).features;
          return n ? n(e) : e;
        }
        function O(t) {
          return "Topology" === t.type
            ? {
                outline: o.mesh(
                  t,
                  t.objects[Object.keys(t.objects)[0]],
                  function (t, n) {
                    return t === n;
                  }
                ),
                borders: o.mesh(
                  t,
                  t.objects[Object.keys(t.objects)[0]],
                  function (t, n) {
                    return t !== n;
                  }
                ),
              }
            : null;
        }
        function C(t) {
          var e = t.geography,
            r = t.parseGeographies,
            o = n.useContext(w).path,
            i = g(n.useState({}), 2),
            a = i[0],
            u = i[1];
          n.useEffect(
            function () {
              "undefined" !==
                ("undefined" == typeof window ? "undefined" : h(window)) &&
                e &&
                ("string" == typeof e
                  ? fetch(e)
                      .then(function (t) {
                        if (!t.ok) throw Error(t.statusText);
                        return t.json();
                      })
                      .catch(function (t) {
                        console.log(
                          "There was a problem when fetching the data: ",
                          t
                        );
                      })
                      .then(function (t) {
                        t && u({ geographies: k(t, r), mesh: O(t) });
                      })
                  : u({ geographies: k(e, r), mesh: O(e) }));
            },
            [e, r]
          );
          var c = n.useMemo(
            function () {
              var t,
                n,
                e,
                r = a.mesh || {},
                i =
                  ((t = r.outline),
                  (n = r.borders),
                  t && n
                    ? {
                        outline: p(
                          p({}, t),
                          {},
                          { rsmKey: "outline", svgPath: o(t) }
                        ),
                        borders: p(
                          p({}, n),
                          {},
                          { rsmKey: "borders", svgPath: o(n) }
                        ),
                      }
                    : {});
              return {
                geographies: (e = a.geographies)
                  ? e.map(function (t, n) {
                      return p(
                        p({}, t),
                        {},
                        { rsmKey: "geo-".concat(n), svgPath: o(t) }
                      );
                    })
                  : [],
                outline: i.outline,
                borders: i.borders,
              };
            },
            [a, o]
          );
          return {
            geographies: c.geographies,
            outline: c.outline,
            borders: c.borders,
          };
        }
        (S.displayName = "ComposableMap"),
          (S.propTypes = {
            width: l.default.number,
            height: l.default.number,
            projection: l.default.oneOfType([l.default.string, l.default.func]),
            projectionConfig: l.default.object,
            className: l.default.string,
          });
        var P = ["geography", "children", "parseGeographies", "className"],
          j = n.forwardRef(function (t, e) {
            var r = t.geography,
              o = t.children,
              i = t.parseGeographies,
              a = t.className,
              u = v(t, P),
              l = n.useContext(w),
              s = l.path,
              f = l.projection,
              p = C({ geography: r, parseGeographies: i }),
              h = p.geographies,
              g = p.outline,
              m = p.borders;
            return c.default.createElement(
              "g",
              d(
                {
                  ref: e,
                  className: "rsm-geographies ".concat(void 0 === a ? "" : a),
                },
                u
              ),
              h &&
                h.length > 0 &&
                o({
                  geographies: h,
                  outline: g,
                  borders: m,
                  path: s,
                  projection: f,
                })
            );
          });
        (j.displayName = "Geographies"),
          (j.propTypes = {
            geography: l.default.oneOfType([
              l.default.string,
              l.default.object,
              l.default.array,
            ]),
            children: l.default.func,
            parseGeographies: l.default.func,
            className: l.default.string,
          });
        var N = [
            "geography",
            "onMouseEnter",
            "onMouseLeave",
            "onMouseDown",
            "onMouseUp",
            "onFocus",
            "onBlur",
            "style",
            "className",
          ],
          T = n.forwardRef(function (t, e) {
            var r = t.geography,
              o = t.onMouseEnter,
              i = t.onMouseLeave,
              a = t.onMouseDown,
              u = t.onMouseUp,
              l = t.onFocus,
              s = t.onBlur,
              f = t.style,
              p = t.className,
              h = v(t, N),
              m = g(n.useState(!1), 2),
              y = m[0],
              b = m[1],
              _ = g(n.useState(!1), 2),
              w = _[0],
              E = _[1];
            return c.default.createElement(
              "path",
              d(
                {
                  ref: e,
                  tabIndex: "0",
                  className: "rsm-geography ".concat(void 0 === p ? "" : p),
                  d: r.svgPath,
                  onMouseEnter: function (t) {
                    E(!0), o && o(t);
                  },
                  onMouseLeave: function (t) {
                    E(!1), y && b(!1), i && i(t);
                  },
                  onFocus: function (t) {
                    E(!0), l && l(t);
                  },
                  onBlur: function (t) {
                    E(!1), y && b(!1), s && s(t);
                  },
                  onMouseDown: function (t) {
                    b(!0), a && a(t);
                  },
                  onMouseUp: function (t) {
                    b(!1), u && u(t);
                  },
                  style: (void 0 === f ? {} : f)[
                    y || w ? (y ? "pressed" : "hover") : "default"
                  ],
                },
                h
              )
            );
          });
        (T.displayName = "Geography"),
          (T.propTypes = {
            geography: l.default.object,
            onMouseEnter: l.default.func,
            onMouseLeave: l.default.func,
            onMouseDown: l.default.func,
            onMouseUp: l.default.func,
            onFocus: l.default.func,
            onBlur: l.default.func,
            style: l.default.object,
            className: l.default.string,
          });
        var A = n.memo(T),
          z = ["fill", "stroke", "step", "className"],
          I = n.forwardRef(function (t, e) {
            var o = t.fill,
              i = t.stroke,
              a = t.step,
              u = t.className,
              l = v(t, z),
              s = n.useContext(w).path;
            return c.default.createElement(
              "path",
              d(
                {
                  ref: e,
                  d: s(r.geoGraticule().step(void 0 === a ? [10, 10] : a)()),
                  fill: void 0 === o ? "transparent" : o,
                  stroke: void 0 === i ? "currentcolor" : i,
                  className: "rsm-graticule ".concat(void 0 === u ? "" : u),
                },
                l
              )
            );
          });
        (I.displayName = "Graticule"),
          (I.propTypes = {
            fill: l.default.string,
            stroke: l.default.string,
            step: l.default.array,
            className: l.default.string,
          });
        var Z = n.memo(I),
          R = ["value"],
          H = n.createContext(),
          L = { x: 0, y: 0, k: 1, transformString: "translate(0 0) scale(1)" },
          B = function (t) {
            var n = t.value,
              e = void 0 === n ? L : n,
              r = v(t, R);
            return c.default.createElement(H.Provider, d({ value: e }, r));
          };
        function D(t) {
          var e = t.center,
            r = t.filterZoomEvent,
            o = t.onMoveStart,
            u = t.onMoveEnd,
            c = t.onMove,
            l = t.translateExtent,
            s = t.scaleExtent,
            f = t.zoom,
            p = void 0 === f ? 1 : f,
            h = n.useContext(w),
            d = h.width,
            v = h.height,
            m = h.projection,
            y = g(e, 2),
            b = y[0],
            _ = y[1],
            E = g(n.useState({ x: 0, y: 0, k: 1 }), 2),
            x = E[0],
            S = E[1],
            k = n.useRef({ x: 0, y: 0, k: 1 }),
            O = n.useRef(),
            C = n.useRef(),
            P = n.useRef(!1),
            j = g(
              void 0 === l
                ? [
                    [-1 / 0, -1 / 0],
                    [1 / 0, 1 / 0],
                  ]
                : l,
              2
            ),
            N = j[0],
            T = j[1],
            A = g(N, 2),
            z = A[0],
            I = A[1],
            Z = g(T, 2),
            R = Z[0],
            H = Z[1],
            L = g(void 0 === s ? [1, 8] : s, 2),
            B = L[0],
            D = L[1];
          return (
            n.useEffect(
              function () {
                var t = a.select(O.current),
                  n = i
                    .zoom()
                    .filter(function (t) {
                      return r ? r(t) : !!t && !t.ctrlKey && !t.button;
                    })
                    .scaleExtent([B, D])
                    .translateExtent([
                      [z, I],
                      [R, H],
                    ])
                    .on("start", function (t) {
                      o &&
                        !P.current &&
                        o(
                          {
                            coordinates: m.invert(M(d, v, t.transform)),
                            zoom: t.transform.k,
                          },
                          t
                        );
                    })
                    .on("zoom", function (t) {
                      if (!P.current) {
                        var n = t.transform,
                          e = t.sourceEvent;
                        S({ x: n.x, y: n.y, k: n.k, dragging: e }),
                          c && c({ x: n.x, y: n.y, zoom: n.k, dragging: e }, t);
                      }
                    })
                    .on("end", function (t) {
                      if (P.current) P.current = !1;
                      else {
                        var n = g(m.invert(M(d, v, t.transform)), 2),
                          e = n[0],
                          r = n[1];
                        (k.current = { x: e, y: r, k: t.transform.k }),
                          u &&
                            u({ coordinates: [e, r], zoom: t.transform.k }, t);
                      }
                    });
                (C.current = n), t.call(n);
              },
              [d, v, z, I, R, H, B, D, m, o, c, u, r]
            ),
            n.useEffect(
              function () {
                if (
                  b !== k.current.x ||
                  _ !== k.current.y ||
                  p !== k.current.k
                ) {
                  var t = m([b, _]),
                    n = t[0] * p,
                    e = t[1] * p,
                    r = a.select(O.current);
                  (P.current = !0),
                    r.call(
                      C.current.transform,
                      i.zoomIdentity.translate(d / 2 - n, v / 2 - e).scale(p)
                    ),
                    S({ x: d / 2 - n, y: v / 2 - e, k: p }),
                    (k.current = { x: b, y: _, k: p });
                }
              },
              [b, _, p, d, v, m]
            ),
            {
              mapRef: O,
              position: x,
              transformString: "translate("
                .concat(x.x, " ")
                .concat(x.y, ") scale(")
                .concat(x.k, ")"),
            }
          );
        }
        B.propTypes = {
          x: l.default.number,
          y: l.default.number,
          k: l.default.number,
          transformString: l.default.string,
        };
        var q = [
            "center",
            "zoom",
            "minZoom",
            "maxZoom",
            "translateExtent",
            "filterZoomEvent",
            "onMoveStart",
            "onMove",
            "onMoveEnd",
            "className",
          ],
          G = n.forwardRef(function (t, e) {
            var r = t.center,
              o = t.zoom,
              i = t.minZoom,
              a = t.maxZoom,
              u = t.translateExtent,
              l = t.filterZoomEvent,
              s = t.onMoveStart,
              f = t.onMove,
              p = t.onMoveEnd,
              h = t.className,
              g = v(t, q),
              m = n.useContext(w),
              y = m.width,
              b = m.height,
              _ = D({
                center: void 0 === r ? [0, 0] : r,
                filterZoomEvent: l,
                onMoveStart: s,
                onMove: f,
                onMoveEnd: p,
                scaleExtent: [void 0 === i ? 1 : i, void 0 === a ? 8 : a],
                translateExtent: u,
                zoom: void 0 === o ? 1 : o,
              }),
              E = _.mapRef,
              x = _.transformString,
              S = _.position;
            return c.default.createElement(
              B,
              { value: { x: S.x, y: S.y, k: S.k, transformString: x } },
              c.default.createElement(
                "g",
                { ref: E },
                c.default.createElement("rect", {
                  width: y,
                  height: b,
                  fill: "transparent",
                }),
                c.default.createElement(
                  "g",
                  d(
                    {
                      ref: e,
                      transform: x,
                      className: "rsm-zoomable-group ".concat(h),
                    },
                    g
                  )
                )
              )
            );
          });
        (G.displayName = "ZoomableGroup"),
          (G.propTypes = {
            center: l.default.array,
            zoom: l.default.number,
            minZoom: l.default.number,
            maxZoom: l.default.number,
            translateExtent: l.default.arrayOf(l.default.array),
            onMoveStart: l.default.func,
            onMove: l.default.func,
            onMoveEnd: l.default.func,
            className: l.default.string,
          });
        var W = ["id", "fill", "stroke", "strokeWidth", "className"],
          X = n.forwardRef(function (t, e) {
            var r = t.id,
              o = t.fill,
              i = t.stroke,
              a = t.strokeWidth,
              u = t.className,
              l = v(t, W),
              s = n.useContext(w).path,
              f = n.useMemo(
                function () {
                  return s({ type: "Sphere" });
                },
                [s]
              );
            return c.default.createElement(
              n.Fragment,
              null,
              c.default.createElement(
                "defs",
                null,
                c.default.createElement(
                  "clipPath",
                  { id: void 0 === r ? "rsm-sphere" : r },
                  c.default.createElement("path", { d: f })
                )
              ),
              c.default.createElement(
                "path",
                d(
                  {
                    ref: e,
                    d: f,
                    fill: void 0 === o ? "transparent" : o,
                    stroke: void 0 === i ? "currentcolor" : i,
                    strokeWidth: void 0 === a ? 0.5 : a,
                    style: { pointerEvents: "none" },
                    className: "rsm-sphere ".concat(void 0 === u ? "" : u),
                  },
                  l
                )
              )
            );
          });
        (X.displayName = "Sphere"),
          (X.propTypes = {
            id: l.default.string,
            fill: l.default.string,
            stroke: l.default.string,
            strokeWidth: l.default.number,
            className: l.default.string,
          });
        var Y = n.memo(X),
          F = [
            "coordinates",
            "children",
            "onMouseEnter",
            "onMouseLeave",
            "onMouseDown",
            "onMouseUp",
            "onFocus",
            "onBlur",
            "style",
            "className",
          ],
          U = n.forwardRef(function (t, e) {
            var r = t.coordinates,
              o = t.children,
              i = t.onMouseEnter,
              a = t.onMouseLeave,
              u = t.onMouseDown,
              l = t.onMouseUp,
              s = t.onFocus,
              f = t.onBlur,
              p = t.style,
              h = t.className,
              m = v(t, F),
              y = n.useContext(w).projection,
              b = g(n.useState(!1), 2),
              _ = b[0],
              E = b[1],
              x = g(n.useState(!1), 2),
              S = x[0],
              M = x[1],
              k = g(y(r), 2),
              O = k[0],
              C = k[1];
            return c.default.createElement(
              "g",
              d(
                {
                  ref: e,
                  transform: "translate(".concat(O, ", ").concat(C, ")"),
                  className: "rsm-marker ".concat(void 0 === h ? "" : h),
                  onMouseEnter: function (t) {
                    M(!0), i && i(t);
                  },
                  onMouseLeave: function (t) {
                    M(!1), _ && E(!1), a && a(t);
                  },
                  onFocus: function (t) {
                    M(!0), s && s(t);
                  },
                  onBlur: function (t) {
                    M(!1), _ && E(!1), f && f(t);
                  },
                  onMouseDown: function (t) {
                    E(!0), u && u(t);
                  },
                  onMouseUp: function (t) {
                    E(!1), l && l(t);
                  },
                  style: (void 0 === p ? {} : p)[
                    _ || S ? (_ ? "pressed" : "hover") : "default"
                  ],
                },
                m
              ),
              o
            );
          });
        (U.displayName = "Marker"),
          (U.propTypes = {
            coordinates: l.default.array,
            children: l.default.oneOfType([
              l.default.node,
              l.default.arrayOf(l.default.node),
            ]),
            onMouseEnter: l.default.func,
            onMouseLeave: l.default.func,
            onMouseDown: l.default.func,
            onMouseUp: l.default.func,
            onFocus: l.default.func,
            onBlur: l.default.func,
            style: l.default.object,
            className: l.default.string,
          });
        var K = [
            "from",
            "to",
            "coordinates",
            "stroke",
            "strokeWidth",
            "fill",
            "className",
          ],
          V = n.forwardRef(function (t, e) {
            var r = t.from,
              o = t.to,
              i = t.coordinates,
              a = t.stroke,
              u = t.strokeWidth,
              l = t.fill,
              s = t.className,
              f = v(t, K),
              p = n.useContext(w).path;
            return c.default.createElement(
              "path",
              d(
                {
                  ref: e,
                  d: p({
                    type: "LineString",
                    coordinates: i || [
                      void 0 === r ? [0, 0] : r,
                      void 0 === o ? [0, 0] : o,
                    ],
                  }),
                  className: "rsm-line ".concat(void 0 === s ? "" : s),
                  stroke: void 0 === a ? "currentcolor" : a,
                  strokeWidth: void 0 === u ? 3 : u,
                  fill: void 0 === l ? "transparent" : l,
                },
                f
              )
            );
          });
        (V.displayName = "Line"),
          (V.propTypes = {
            from: l.default.array,
            to: l.default.array,
            coordinates: l.default.array,
            stroke: l.default.string,
            strokeWidth: l.default.number,
            fill: l.default.string,
            className: l.default.string,
          });
        var $ = [
            "subject",
            "children",
            "connectorProps",
            "dx",
            "dy",
            "curve",
            "className",
          ],
          Q = n.forwardRef(function (t, e) {
            var r = t.subject,
              o = t.children,
              i = t.connectorProps,
              a = t.dx,
              u = void 0 === a ? 30 : a,
              l = t.dy,
              s = void 0 === l ? 30 : l,
              f = t.curve,
              p = t.className,
              h = v(t, $),
              m = g((0, n.useContext(w).projection)(r), 2),
              y = m[0],
              b = m[1],
              _ = (function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 30,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 30,
                  e =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0.5,
                  r = Array.isArray(e) ? e : [e, e],
                  o = (t / 2) * r[0],
                  i = (n / 2) * r[1];
                return "M"
                  .concat(0, ",", 0, " Q", -t / 2 - o, ",")
                  .concat(-n / 2 + i, " ")
                  .concat(-t, ",")
                  .concat(-n);
              })(u, s, void 0 === f ? 0 : f);
            return c.default.createElement(
              "g",
              d(
                {
                  ref: e,
                  transform: "translate("
                    .concat(y + u, ", ")
                    .concat(b + s, ")"),
                  className: "rsm-annotation ".concat(void 0 === p ? "" : p),
                },
                h
              ),
              c.default.createElement(
                "path",
                d({ d: _, fill: "transparent", stroke: "#000" }, i)
              ),
              o
            );
          });
        (Q.displayName = "Annotation"),
          (Q.propTypes = {
            subject: l.default.array,
            children: l.default.oneOfType([
              l.default.node,
              l.default.arrayOf(l.default.node),
            ]),
            dx: l.default.number,
            dy: l.default.number,
            curve: l.default.number,
            connectorProps: l.default.object,
            className: l.default.string,
          }),
          (t.Annotation = Q),
          (t.ComposableMap = S),
          (t.Geographies = j),
          (t.Geography = A),
          (t.Graticule = Z),
          (t.Line = V),
          (t.MapContext = w),
          (t.MapProvider = E),
          (t.Marker = U),
          (t.Sphere = Y),
          (t.ZoomPanContext = H),
          (t.ZoomPanProvider = B),
          (t.ZoomableGroup = G),
          (t.useGeographies = C),
          (t.useMapContext = function () {
            return n.useContext(w);
          }),
          (t.useZoomPan = D),
          (t.useZoomPanContext = function () {
            return n.useContext(H);
          }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(n, e(7294), e(5697), e(7952), e(9936), e(9657), e(5387));
    },
    9936: function (t, n, e) {
      "use strict";
      function r(t) {
        return t;
      }
      function o(t) {
        if (null == t) return r;
        var n,
          e,
          o = t.scale[0],
          i = t.scale[1],
          a = t.translate[0],
          u = t.translate[1];
        return function (t, r) {
          r || (n = e = 0);
          var c = 2,
            l = t.length,
            s = Array(l);
          for (s[0] = (n += t[0]) * o + a, s[1] = (e += t[1]) * i + u; c < l; )
            (s[c] = t[c]), ++c;
          return s;
        };
      }
      function i(t) {
        var n,
          e = o(t.transform),
          r = 1 / 0,
          i = 1 / 0,
          a = -1 / 0,
          u = -1 / 0;
        function c(t) {
          (t = e(t))[0] < r && (r = t[0]),
            t[0] > a && (a = t[0]),
            t[1] < i && (i = t[1]),
            t[1] > u && (u = t[1]);
        }
        for (n in (t.arcs.forEach(function (t) {
          for (var n, o = -1, c = t.length; ++o < c; )
            (n = e(t[o], o))[0] < r && (r = n[0]),
              n[0] > a && (a = n[0]),
              n[1] < i && (i = n[1]),
              n[1] > u && (u = n[1]);
        }),
        t.objects))
          !(function t(n) {
            switch (n.type) {
              case "GeometryCollection":
                n.geometries.forEach(t);
                break;
              case "Point":
                c(n.coordinates);
                break;
              case "MultiPoint":
                n.coordinates.forEach(c);
            }
          })(t.objects[n]);
        return [r, i, a, u];
      }
      function a(t, n) {
        return (
          "string" == typeof n && (n = t.objects[n]),
          "GeometryCollection" === n.type
            ? {
                type: "FeatureCollection",
                features: n.geometries.map(function (n) {
                  return u(t, n);
                }),
              }
            : u(t, n)
        );
      }
      function u(t, n) {
        var e = n.id,
          r = n.bbox,
          o = null == n.properties ? {} : n.properties,
          i = c(t, n);
        return null == e && null == r
          ? { type: "Feature", properties: o, geometry: i }
          : null == r
          ? { type: "Feature", id: e, properties: o, geometry: i }
          : { type: "Feature", id: e, bbox: r, properties: o, geometry: i };
      }
      function c(t, n) {
        var e = o(t.transform),
          r = t.arcs;
        function i(t) {
          return e(t);
        }
        function a(t) {
          for (var n = [], o = 0, i = t.length; o < i; ++o)
            !(function (t, n) {
              n.length && n.pop();
              for (var o = r[t < 0 ? ~t : t], i = 0, a = o.length; i < a; ++i)
                n.push(e(o[i], i));
              t < 0 &&
                (function (t, n) {
                  for (var e, r = t.length, o = r - n; o < --r; )
                    (e = t[o]), (t[o++] = t[r]), (t[r] = e);
                })(n, a);
            })(t[o], n);
          return n.length < 2 && n.push(n[0]), n;
        }
        function u(t) {
          for (var n = a(t); n.length < 4; ) n.push(n[0]);
          return n;
        }
        function c(t) {
          return t.map(u);
        }
        return (function t(n) {
          var e,
            r = n.type;
          switch (r) {
            case "GeometryCollection":
              return { type: r, geometries: n.geometries.map(t) };
            case "Point":
              e = i(n.coordinates);
              break;
            case "MultiPoint":
              e = n.coordinates.map(i);
              break;
            case "LineString":
              e = a(n.arcs);
              break;
            case "MultiLineString":
              e = n.arcs.map(a);
              break;
            case "Polygon":
              e = c(n.arcs);
              break;
            case "MultiPolygon":
              e = n.arcs.map(c);
              break;
            default:
              return null;
          }
          return { type: r, coordinates: e };
        })(n);
      }
      function l(t, n) {
        var e = {},
          r = {},
          o = {},
          i = [],
          a = -1;
        function u(t, n) {
          for (var r in t) {
            var o = t[r];
            delete n[o.start],
              delete o.start,
              delete o.end,
              o.forEach(function (t) {
                e[t < 0 ? ~t : t] = 1;
              }),
              i.push(o);
          }
        }
        return (
          n.forEach(function (e, r) {
            var o,
              i = t.arcs[e < 0 ? ~e : e];
            !(i.length < 3) ||
              i[1][0] ||
              i[1][1] ||
              ((o = n[++a]), (n[a] = e), (n[r] = o));
          }),
          n.forEach(function (n) {
            var e,
              i,
              a,
              u,
              c,
              l =
                ((a = (i = t.arcs[n < 0 ? ~n : n])[0]),
                t.transform
                  ? ((e = [0, 0]),
                    i.forEach(function (t) {
                      (e[0] += t[0]), (e[1] += t[1]);
                    }))
                  : (e = i[i.length - 1]),
                n < 0 ? [e, a] : [a, e]),
              s = l[0],
              f = l[1];
            if ((u = o[s])) {
              if ((delete o[u.end], u.push(n), (u.end = f), (c = r[f]))) {
                delete r[c.start];
                var p = c === u ? u : u.concat(c);
                r[(p.start = u.start)] = o[(p.end = c.end)] = p;
              } else r[u.start] = o[u.end] = u;
            } else if ((u = r[f])) {
              if (
                (delete r[u.start], u.unshift(n), (u.start = s), (c = o[s]))
              ) {
                delete o[c.end];
                var h = c === u ? u : c.concat(u);
                r[(h.start = c.start)] = o[(h.end = u.end)] = h;
              } else r[u.start] = o[u.end] = u;
            } else r[((u = [n]).start = s)] = o[(u.end = f)] = u;
          }),
          u(o, r),
          u(r, o),
          n.forEach(function (t) {
            e[t < 0 ? ~t : t] || i.push([t]);
          }),
          i
        );
      }
      function s(t) {
        return c(t, f.apply(this, arguments));
      }
      function f(t, n, e) {
        var r, o, i;
        if (arguments.length > 1)
          r = (function (t, n, e) {
            var r,
              o = [],
              i = [];
            function a(t) {
              var n = t < 0 ? ~t : t;
              (i[n] || (i[n] = [])).push({ i: t, g: r });
            }
            function u(t) {
              t.forEach(a);
            }
            function c(t) {
              t.forEach(u);
            }
            return (
              !(function t(n) {
                switch (((r = n), n.type)) {
                  case "GeometryCollection":
                    n.geometries.forEach(t);
                    break;
                  case "LineString":
                    u(n.arcs);
                    break;
                  case "MultiLineString":
                  case "Polygon":
                    c(n.arcs);
                    break;
                  case "MultiPolygon":
                    !(function (t) {
                      t.forEach(c);
                    })(n.arcs);
                }
              })(n),
              i.forEach(
                null == e
                  ? function (t) {
                      o.push(t[0].i);
                    }
                  : function (t) {
                      e(t[0].g, t[t.length - 1].g) && o.push(t[0].i);
                    }
              ),
              o
            );
          })(0, n, e);
        else for (o = 0, r = Array((i = t.arcs.length)); o < i; ++o) r[o] = o;
        return { type: "MultiLineString", arcs: l(t, r) };
      }
      function p(t) {
        return c(t, h.apply(this, arguments));
      }
      function h(t, n) {
        var e = {},
          r = [],
          o = [];
        function i(t) {
          t.forEach(function (n) {
            n.forEach(function (n) {
              (e[(n = n < 0 ? ~n : n)] || (e[n] = [])).push(t);
            });
          }),
            r.push(t);
        }
        function a(n) {
          return (function (t) {
            for (var n, e = -1, r = t.length, o = t[r - 1], i = 0; ++e < r; )
              (n = o), (o = t[e]), (i += n[0] * o[1] - n[1] * o[0]);
            return Math.abs(i);
          })(c(t, { type: "Polygon", arcs: [n] }).coordinates[0]);
        }
        return (
          n.forEach(function t(n) {
            switch (n.type) {
              case "GeometryCollection":
                n.geometries.forEach(t);
                break;
              case "Polygon":
                i(n.arcs);
                break;
              case "MultiPolygon":
                n.arcs.forEach(i);
            }
          }),
          r.forEach(function (t) {
            if (!t._) {
              var n = [],
                r = [t];
              for (t._ = 1, o.push(n); (t = r.pop()); )
                n.push(t),
                  t.forEach(function (t) {
                    t.forEach(function (t) {
                      e[t < 0 ? ~t : t].forEach(function (t) {
                        t._ || ((t._ = 1), r.push(t));
                      });
                    });
                  });
            }
          }),
          r.forEach(function (t) {
            delete t._;
          }),
          {
            type: "MultiPolygon",
            arcs: o
              .map(function (n) {
                var r,
                  o = [];
                if (
                  (n.forEach(function (t) {
                    t.forEach(function (t) {
                      t.forEach(function (t) {
                        e[t < 0 ? ~t : t].length < 2 && o.push(t);
                      });
                    });
                  }),
                  (r = (o = l(t, o)).length) > 1)
                )
                  for (var i, u, c = 1, s = a(o[0]); c < r; ++c)
                    (i = a(o[c])) > s &&
                      ((u = o[0]), (o[0] = o[c]), (o[c] = u), (s = i));
                return o;
              })
              .filter(function (t) {
                return t.length > 0;
              }),
          }
        );
      }
      function d(t, n) {
        for (var e = 0, r = t.length; e < r; ) {
          var o = (e + r) >>> 1;
          t[o] < n ? (e = o + 1) : (r = o);
        }
        return e;
      }
      function v(t) {
        var n = {},
          e = t.map(function () {
            return [];
          });
        function r(t, e) {
          t.forEach(function (t) {
            t < 0 && (t = ~t);
            var r = n[t];
            r ? r.push(e) : (n[t] = [e]);
          });
        }
        function o(t, n) {
          t.forEach(function (t) {
            r(t, n);
          });
        }
        var i = {
          LineString: r,
          MultiLineString: o,
          Polygon: o,
          MultiPolygon: function (t, n) {
            t.forEach(function (t) {
              o(t, n);
            });
          },
        };
        for (var a in (t.forEach(function t(n, e) {
          "GeometryCollection" === n.type
            ? n.geometries.forEach(function (n) {
                t(n, e);
              })
            : n.type in i && i[n.type](n.arcs, e);
        }),
        n))
          for (var u = n[a], c = u.length, l = 0; l < c; ++l)
            for (var s = l + 1; s < c; ++s) {
              var f,
                p = u[l],
                h = u[s];
              (f = e[p])[(a = d(f, h))] !== h && f.splice(a, 0, h),
                (f = e[h])[(a = d(f, p))] !== p && f.splice(a, 0, p);
            }
        return e;
      }
      function g(t) {
        if (null == t) return r;
        var n,
          e,
          o = t.scale[0],
          i = t.scale[1],
          a = t.translate[0],
          u = t.translate[1];
        return function (t, r) {
          r || (n = e = 0);
          var c = 2,
            l = t.length,
            s = Array(l),
            f = Math.round((t[0] - a) / o),
            p = Math.round((t[1] - u) / i);
          for (s[0] = f - n, n = f, s[1] = p - e, e = p; c < l; )
            (s[c] = t[c]), ++c;
          return s;
        };
      }
      function m(t, n) {
        if (t.transform) throw Error("already quantized");
        if (n && n.scale) c = t.bbox;
        else {
          if (!((e = Math.floor(n)) >= 2)) throw Error("n must be ≥2");
          var e,
            r = (c = t.bbox || i(t))[0],
            o = c[1],
            a = c[2],
            u = c[3];
          n = {
            scale: [
              a - r ? (a - r) / (e - 1) : 1,
              u - o ? (u - o) / (e - 1) : 1,
            ],
            translate: [r, o],
          };
        }
        var c,
          l,
          s = g(n),
          f = t.objects,
          p = {};
        function h(t) {
          return s(t);
        }
        for (l in f)
          p[l] = (function t(n) {
            var e;
            switch (n.type) {
              case "GeometryCollection":
                e = {
                  type: "GeometryCollection",
                  geometries: n.geometries.map(t),
                };
                break;
              case "Point":
                e = { type: "Point", coordinates: h(n.coordinates) };
                break;
              case "MultiPoint":
                e = { type: "MultiPoint", coordinates: n.coordinates.map(h) };
                break;
              default:
                return n;
            }
            return (
              null != n.id && (e.id = n.id),
              null != n.bbox && (e.bbox = n.bbox),
              null != n.properties && (e.properties = n.properties),
              e
            );
          })(f[l]);
        return {
          type: "Topology",
          bbox: c,
          transform: n,
          objects: p,
          arcs: t.arcs.map(function (t) {
            var n,
              e = 0,
              r = 1,
              o = t.length,
              i = Array(o);
            for (i[0] = s(t[0], 0); ++e < o; )
              ((n = s(t[e], e))[0] || n[1]) && (i[r++] = n);
            return 1 === r && (i[r++] = [0, 0]), (i.length = r), i;
          }),
        };
      }
      e.r(n),
        e.d(n, {
          bbox: function () {
            return i;
          },
          feature: function () {
            return a;
          },
          merge: function () {
            return p;
          },
          mergeArcs: function () {
            return h;
          },
          mesh: function () {
            return s;
          },
          meshArcs: function () {
            return f;
          },
          neighbors: function () {
            return v;
          },
          quantize: function () {
            return m;
          },
          transform: function () {
            return o;
          },
          untransform: function () {
            return g;
          },
        });
    },
  },
]);
