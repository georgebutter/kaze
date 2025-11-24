import * as d from "react";
import W from "react";
var S = { exports: {} }, N = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oe;
function ke() {
  if (oe) return N;
  oe = 1;
  var i = W, l = 60103;
  if (N.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var u = Symbol.for;
    l = u("react.element"), N.Fragment = u("react.fragment");
  }
  var v = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = Object.prototype.hasOwnProperty, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function t(a, r, c) {
    var m, b = {}, O = null, w = null;
    c !== void 0 && (O = "" + c), r.key !== void 0 && (O = "" + r.key), r.ref !== void 0 && (w = r.ref);
    for (m in r) f.call(r, m) && !s.hasOwnProperty(m) && (b[m] = r[m]);
    if (a && a.defaultProps) for (m in r = a.defaultProps, r) b[m] === void 0 && (b[m] = r[m]);
    return { $$typeof: l, type: a, key: O, ref: w, props: b, _owner: v.current };
  }
  return N.jsx = t, N.jsxs = t, N;
}
var J = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function Ie() {
  return ce || (ce = 1, (function(i) {
    process.env.NODE_ENV !== "production" && (function() {
      var l = W, u = 60103, v = 60106;
      i.Fragment = 60107;
      var f = 60108, s = 60114, t = 60109, a = 60110, r = 60112, c = 60113, m = 60120, b = 60115, O = 60116, w = 60121, Y = 60122, F = 60117, K = 60129, G = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var R = Symbol.for;
        u = R("react.element"), v = R("react.portal"), i.Fragment = R("react.fragment"), f = R("react.strict_mode"), s = R("react.profiler"), t = R("react.provider"), a = R("react.context"), r = R("react.forward_ref"), c = R("react.suspense"), m = R("react.suspense_list"), b = R("react.memo"), O = R("react.lazy"), w = R("react.block"), Y = R("react.server.block"), F = R("react.fundamental"), R("react.scope"), R("react.opaque.id"), K = R("react.debug_trace_mode"), R("react.offscreen"), G = R("react.legacy_hidden");
      }
      var X = typeof Symbol == "function" && Symbol.iterator, ue = "@@iterator";
      function le(e) {
        if (e === null || typeof e != "object")
          return null;
        var n = X && e[X] || e[ue];
        return typeof n == "function" ? n : null;
      }
      var k = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function C(e) {
        {
          for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), p = 1; p < n; p++)
            o[p - 1] = arguments[p];
          fe("error", e, o);
        }
      }
      function fe(e, n, o) {
        {
          var p = k.ReactDebugCurrentFrame, x = "";
          if (y) {
            var $ = T(y.type), E = y._owner;
            x += me($, y._source, E && T(E.type));
          }
          x += p.getStackAddendum(), x !== "" && (n += "%s", o = o.concat([x]));
          var _ = o.map(function(g) {
            return "" + g;
          });
          _.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, _);
        }
      }
      var ve = !1;
      function de(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === i.Fragment || e === s || e === K || e === f || e === c || e === m || e === G || ve || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === b || e.$$typeof === t || e.$$typeof === a || e.$$typeof === r || e.$$typeof === F || e.$$typeof === w || e[0] === Y));
      }
      var U = /^(.*)[\\\/]/;
      function me(e, n, o) {
        var p = "";
        if (n) {
          var x = n.fileName, $ = x.replace(U, "");
          if (/^index\./.test($)) {
            var E = x.match(U);
            if (E) {
              var _ = E[1];
              if (_) {
                var g = _.replace(U, "");
                $ = g + "/" + $;
              }
            }
          }
          p = " (at " + $ + ":" + n.lineNumber + ")";
        } else o && (p = " (created by " + o + ")");
        return `
    in ` + (e || "Unknown") + p;
      }
      var pe = 1;
      function _e(e) {
        return e._status === pe ? e._result : null;
      }
      function Ee(e, n, o) {
        var p = n.displayName || n.name || "";
        return e.displayName || (p !== "" ? o + "(" + p + ")" : o);
      }
      function T(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && C("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case i.Fragment:
            return "Fragment";
          case v:
            return "Portal";
          case s:
            return "Profiler";
          case f:
            return "StrictMode";
          case c:
            return "Suspense";
          case m:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case a:
              return "Context.Consumer";
            case t:
              return "Context.Provider";
            case r:
              return Ee(e, e.render, "ForwardRef");
            case b:
              return T(e.type);
            case w:
              return T(e.render);
            case O: {
              var n = e, o = _e(n);
              if (o)
                return T(o);
              break;
            }
          }
        return null;
      }
      var Z = {};
      k.ReactDebugCurrentFrame;
      var y = null;
      function I(e) {
        y = e;
      }
      function $e(e, n, o, p, x) {
        {
          var $ = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var E in e)
            if ($(e, E)) {
              var _ = void 0;
              try {
                if (typeof e[E] != "function") {
                  var g = Error((p || "React class") + ": " + o + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw g.name = "Invariant Violation", g;
                }
                _ = e[E](n, E, p, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                _ = P;
              }
              _ && !(_ instanceof Error) && (I(x), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", o, E, typeof _), I(null)), _ instanceof Error && !(_.message in Z) && (Z[_.message] = !0, I(x), C("Failed %s type: %s", o, _.message), I(null));
            }
        }
      }
      var H = k.ReactCurrentOwner, V = Object.prototype.hasOwnProperty, xe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Q, ee;
      function Re(e) {
        if (V.call(e, "ref")) {
          var n = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (n && n.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function he(e) {
        if (V.call(e, "key")) {
          var n = Object.getOwnPropertyDescriptor(e, "key").get;
          if (n && n.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function be(e, n) {
        typeof e.ref == "string" && H.current;
      }
      function ge(e, n) {
        {
          var o = function() {
            Q || (Q = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
          };
          o.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: o,
            configurable: !0
          });
        }
      }
      function Ce(e, n) {
        {
          var o = function() {
            ee || (ee = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
          };
          o.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: o,
            configurable: !0
          });
        }
      }
      var Oe = function(e, n, o, p, x, $, E) {
        var _ = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: u,
          // Built-in properties that belong on the element
          type: e,
          key: n,
          ref: o,
          props: E,
          // Record the component responsible for creating this element.
          _owner: $
        };
        return _._store = {}, Object.defineProperty(_._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(_, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.defineProperty(_, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: x
        }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
      };
      function Te(e, n, o, p, x) {
        {
          var $, E = {}, _ = null, g = null;
          o !== void 0 && (_ = "" + o), he(n) && (_ = "" + n.key), Re(n) && (g = n.ref, be(n, x));
          for ($ in n)
            V.call(n, $) && !xe.hasOwnProperty($) && (E[$] = n[$]);
          if (e && e.defaultProps) {
            var P = e.defaultProps;
            for ($ in P)
              E[$] === void 0 && (E[$] = P[$]);
          }
          if (_ || g) {
            var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            _ && ge(E, j), g && Ce(E, j);
          }
          return Oe(e, _, g, x, p, H.current, E);
        }
      }
      var z = k.ReactCurrentOwner;
      k.ReactDebugCurrentFrame;
      function A(e) {
        y = e;
      }
      var M;
      M = !1;
      function q(e) {
        return typeof e == "object" && e !== null && e.$$typeof === u;
      }
      function te() {
        {
          if (z.current) {
            var e = T(z.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function Pe(e) {
        return "";
      }
      var ne = {};
      function we(e) {
        {
          var n = te();
          if (!n) {
            var o = typeof e == "string" ? e : e.displayName || e.name;
            o && (n = `

Check the top-level render call using <` + o + ">.");
          }
          return n;
        }
      }
      function re(e, n) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var o = we(n);
          if (ne[o])
            return;
          ne[o] = !0;
          var p = "";
          e && e._owner && e._owner !== z.current && (p = " It was passed a child from " + T(e._owner.type) + "."), A(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, p), A(null);
        }
      }
      function ae(e, n) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var o = 0; o < e.length; o++) {
              var p = e[o];
              q(p) && re(p, n);
            }
          else if (q(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var x = le(e);
            if (typeof x == "function" && x !== e.entries)
              for (var $ = x.call(e), E; !(E = $.next()).done; )
                q(E.value) && re(E.value, n);
          }
        }
      }
      function je(e) {
        {
          var n = e.type;
          if (n == null || typeof n == "string")
            return;
          var o;
          if (typeof n == "function")
            o = n.propTypes;
          else if (typeof n == "object" && (n.$$typeof === r || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          n.$$typeof === b))
            o = n.propTypes;
          else
            return;
          if (o) {
            var p = T(n);
            $e(o, e.props, "prop", p, e);
          } else if (n.PropTypes !== void 0 && !M) {
            M = !0;
            var x = T(n);
            C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
          }
          typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ye(e) {
        {
          for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
            var p = n[o];
            if (p !== "children" && p !== "key") {
              A(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), A(null);
              break;
            }
          }
          e.ref !== null && (A(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
        }
      }
      function se(e, n, o, p, x, $) {
        {
          var E = de(e);
          if (!E) {
            var _ = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var g = Pe();
            g ? _ += g : _ += te();
            var P;
            e === null ? P = "null" : Array.isArray(e) ? P = "array" : e !== void 0 && e.$$typeof === u ? (P = "<" + (T(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : P = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, _);
          }
          var j = Te(e, n, o, x, $);
          if (j == null)
            return j;
          if (E) {
            var D = n.children;
            if (D !== void 0)
              if (p)
                if (Array.isArray(D)) {
                  for (var B = 0; B < D.length; B++)
                    ae(D[B], e);
                  Object.freeze && Object.freeze(D);
                } else
                  C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                ae(D, e);
          }
          return e === i.Fragment ? ye(j) : je(j), j;
        }
      }
      function Ae(e, n, o) {
        return se(e, n, o, !0);
      }
      function De(e, n, o) {
        return se(e, n, o, !1);
      }
      var Ne = De, Ye = Ae;
      i.jsx = Ne, i.jsxs = Ye;
    })();
  })(J)), J;
}
var ie;
function Se() {
  return ie || (ie = 1, process.env.NODE_ENV === "production" ? S.exports = ke() : S.exports = Ie()), S.exports;
}
var L = Se();
const h = d.createContext({
  theme: {
    components: {}
  }
}), We = ({ children: i, theme: l }) => /* @__PURE__ */ L.jsx(h.Provider, { value: { theme: l }, children: i }), Ue = ({
  children: i,
  className: l,
  variant: u,
  ...v
}) => {
  var r;
  const { theme: f } = W.useContext(h), { Button: s } = f.components, a = `${(s == null ? void 0 : s.base) || ""} ${((r = s == null ? void 0 : s.variants) == null ? void 0 : r[u]) || ""} ${l || ""} block`;
  return /* @__PURE__ */ L.jsx("button", { className: a, ...v, children: i });
}, Ve = ({
  className: i,
  variant: l,
  options: u,
  ...v
}) => {
  var r;
  const { theme: f } = W.useContext(h), { Select: s } = f.components, a = `${(s == null ? void 0 : s.base) || ""} ${((r = s == null ? void 0 : s.variants) == null ? void 0 : r[l]) || ""} ${i || ""} `;
  return /* @__PURE__ */ L.jsx("select", { className: a, ...v, children: u == null ? void 0 : u.map((c) => /* @__PURE__ */ L.jsx("option", { value: c.value, children: c.label }, c.value)) });
}, ze = ({
  children: i,
  className: l,
  variant: u,
  w: v = "1",
  h: f = "1",
  as: s = "div",
  position: t = "center",
  fit: a = "cover"
}) => {
  var O;
  const { theme: r } = d.useContext(h), { AspectRatio: c } = r.components, m = `aspect-w-${v} aspect-h-${f}`, b = `${(c == null ? void 0 : c.base) || ""} ${((O = c == null ? void 0 : c.variants) == null ? void 0 : O[u]) || ""} ${l || ""} ${m}`;
  return d.createElement(
    s,
    {
      className: b
    },
    d.Children.map(i, (w) => {
      if (!["string", "number"].includes(typeof w)) {
        const Y = w;
        return d.cloneElement(Y, {
          className: `${Y.props.className} h-full w-full object-${t} object-${a}`
        });
      }
    })
  );
}, Me = ({
  children: i,
  padding: l = 0,
  className: u = "",
  as: v = "div",
  variant: f,
  ...s
}) => {
  var m;
  const { theme: t } = d.useContext(h), { Box: a } = t == null ? void 0 : t.components, r = `p-${l} m-0 w-auto`, c = `${(a == null ? void 0 : a.base) || ""} ${((m = a == null ? void 0 : a.variants) == null ? void 0 : m[f]) || ""} ${u || ""} ${r}`;
  return d.createElement(
    v,
    {
      ...s,
      className: c
    },
    i
  );
}, qe = ({
  children: i,
  className: l,
  variant: u,
  width: v = "none",
  padding: f = 0,
  as: s = "div"
}) => {
  var m;
  const { theme: t } = d.useContext(h), { Center: a } = t.components, r = `box-content max-w-${v} mx-auto px-${f} flex flex-col`, c = `${(a == null ? void 0 : a.base) || ""} ${((m = a == null ? void 0 : a.variants) == null ? void 0 : m[u]) || ""} ${l || ""} ${r}`;
  return d.createElement(
    s,
    {
      className: c
    },
    i
  );
}, Be = ({
  children: i,
  className: l = "",
  variant: u,
  gap: v = 0,
  items: f = "start",
  justify: s = "start",
  as: t = "div"
}) => {
  var b;
  const { theme: a } = d.useContext(h), { Cluster: r } = a.components, c = `flex flex-wrap gap-${v} items-${f} justify-${s}`, m = `${(r == null ? void 0 : r.base) || ""} ${((b = r == null ? void 0 : r.variants) == null ? void 0 : b[u]) || ""} ${l || ""} ${c}`;
  return d.createElement(
    t,
    {
      className: m
    },
    i
  );
}, Je = ({
  children: i,
  as: l = "div",
  className: u = "",
  variant: v,
  padding: f = 0
}) => {
  var c;
  const { theme: s } = d.useContext(h), { Cover: t } = s.components, a = `flex flex-col min-h-screen p-${f} justify-between`, r = `${(t == null ? void 0 : t.base) || ""} ${((c = t == null ? void 0 : t.variants) == null ? void 0 : c[v]) || ""} ${u || ""} ${a}`;
  return d.createElement(
    l,
    {
      className: r
    },
    i
  );
}, Fe = ({
  children: i,
  className: l,
  as: u = "div",
  variant: v,
  gap: f = 2,
  cols: s = "auto250"
}) => {
  var m;
  const { theme: t } = d.useContext(h), { Grid: a } = t.components, r = `grid grid-cols-${s} gap-${f}`, c = `${(a == null ? void 0 : a.base) || ""} ${((m = a == null ? void 0 : a.variants) == null ? void 0 : m[v]) || ""} ${l || ""} ${r}`;
  return d.createElement(
    u,
    {
      className: c
    },
    i
  );
}, Ke = ({
  children: i,
  space: l = 0,
  className: u = "",
  as: v = "div",
  variant: f
}) => {
  var c;
  const { theme: s } = d.useContext(h), { HStack: t } = s.components, a = `flex flex-row space-x-${l}`, r = `${(t == null ? void 0 : t.base) || ""} ${((c = t == null ? void 0 : t.variants) == null ? void 0 : c[f]) || ""} ${u || ""} ${a}`;
  return d.createElement(
    v,
    {
      className: r
    },
    i
  );
}, Ge = ({
  children: i,
  className: l = "",
  as: u = "div",
  space: v = 0,
  variant: f
}) => {
  var c;
  const { theme: s } = d.useContext(h), { Reel: t } = s.components, a = `flex h-auto overflow-x-auto overflow-y-hidden space-x-${v}`, r = `${(t == null ? void 0 : t.base) || ""} ${((c = t == null ? void 0 : t.variants) == null ? void 0 : c[f]) || ""} ${l || ""} ${a}`;
  return d.createElement(
    u,
    {
      className: r
    },
    d.Children.map(i, (m) => {
      if (!["string", "number"].includes(typeof m)) {
        const b = m;
        return d.cloneElement(b, {
          className: `${b.props.className} flex-none`
        });
      }
    })
  );
}, Xe = ({
  children: i,
  className: l,
  gap: u = 0,
  as: v = "div",
  variant: f
}) => {
  var c;
  const { theme: s } = d.useContext(h), { Sidebar: t } = s.components, a = `flex flex-wrap gap-${u}`, r = `${(t == null ? void 0 : t.base) || ""} ${(c = t == null ? void 0 : t.variants) == null ? void 0 : c[f]} ${l || ""} ${a}`;
  return d.createElement(
    v,
    {
      className: r
    },
    i
  );
}, Ze = ({
  children: i,
  className: l,
  as: u = "aside",
  variant: v
}) => {
  var a;
  const { theme: f } = d.useContext(h), { SidebarSide: s } = f.components, t = `${(s == null ? void 0 : s.base) || ""} ${((a = s == null ? void 0 : s.variants) == null ? void 0 : a[v]) || ""} ${l || ""} flex-grow`;
  return d.createElement(
    u,
    {
      className: t
    },
    i
  );
}, He = ({
  children: i,
  className: l,
  minWidth: u = "1/2",
  as: v = "main",
  variant: f
}) => {
  var c;
  const { theme: s } = d.useContext(h), { SidebarMain: t } = s.components, a = `w-0 min-w-${u} flex-grow-999`, r = `${(t == null ? void 0 : t.base) || ""} ${((c = t == null ? void 0 : t.variants) == null ? void 0 : c[f]) || ""} ${l || ""} ${a}`;
  return d.createElement(
    v,
    {
      className: r
    },
    i
  );
}, Qe = ({
  children: i,
  className: l = "",
  as: u = "div",
  variant: v,
  space: f = 0
}) => {
  var c;
  const { theme: s } = d.useContext(h), { VStack: t } = s.components, a = `flex flex-col space-y-${f}`, r = `${(t == null ? void 0 : t.base) || ""} ${((c = t == null ? void 0 : t.variants) == null ? void 0 : c[v]) || ""} ${l || ""} ${a}`;
  return d.createElement(
    u,
    {
      className: r
    },
    i
  );
}, et = ({
  children: i,
  className: l = "",
  as: u = "div",
  variant: v,
  direction: f = "row",
  justify: s
}) => {
  const { theme: t } = d.useContext(h), a = d.useMemo(() => {
    var m;
    const { Flex: r } = t.components, c = `flex flex-${f} ${s ? `justify-${s}` : ""}`;
    return `${(r == null ? void 0 : r.base) || ""} ${((m = r == null ? void 0 : r.variants) == null ? void 0 : m[v]) || ""} ${l || ""} ${c}`;
  }, [t.components]);
  return d.createElement(
    u,
    {
      className: a
    },
    i
  );
}, tt = ({
  children: i,
  className: l = "",
  as: u = "h2",
  variant: v,
  size: f
}) => {
  var r, c;
  const { theme: s } = d.useContext(h), { Heading: t } = s.components, a = `${(t == null ? void 0 : t.base) || ""} ${((r = t == null ? void 0 : t.variants) == null ? void 0 : r[v]) || ""} ${((c = t == null ? void 0 : t.sizes) == null ? void 0 : c[f]) || ""} ${l || ""}`;
  return d.createElement(u, {
    className: a
  }, i);
}, nt = ({
  children: i,
  className: l = "",
  as: u = "p",
  variant: v,
  size: f
}) => {
  var c, m;
  const { theme: s } = d.useContext(h), { P: t } = s.components, r = `${(t == null ? void 0 : t.base) || ""} ${((c = t == null ? void 0 : t.variants) == null ? void 0 : c[v]) || ""}  ${((m = t == null ? void 0 : t.sizes) == null ? void 0 : m[f]) || ""} ${l || ""} max-w-prose`;
  return d.createElement(u, {
    className: r
  }, i);
}, rt = ({
  children: i,
  className: l = "",
  as: u = "span",
  variant: v,
  size: f
}) => {
  var r, c;
  const { theme: s } = d.useContext(h), { Span: t } = s.components, a = `${(t == null ? void 0 : t.base) || ""} ${((r = t == null ? void 0 : t.variants) == null ? void 0 : r[v]) || ""}  ${((c = t == null ? void 0 : t.sizes) == null ? void 0 : c[f]) || ""} ${l || ""}`;
  return d.createElement(u, {
    className: a
  }, i);
};
export {
  ze as AspectRatio,
  Me as Box,
  Ue as Button,
  qe as Center,
  Be as Cluster,
  Je as Cover,
  et as Flex,
  Fe as Grid,
  Ke as HStack,
  tt as Heading,
  We as Kaze,
  h as KazeContext,
  nt as P,
  Ge as Reel,
  Ve as Select,
  Xe as Sidebar,
  He as SidebarMain,
  Ze as SidebarSide,
  rt as Span,
  Qe as VStack
};
