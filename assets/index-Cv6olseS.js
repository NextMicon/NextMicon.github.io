var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _t, _e, _n2, _a2, _t2, _e2, _n3, _b2, _t3, _c, _t4, _e3, _n4, _l, _a3, _r, _i, _Vv_instances, s_fn, _d, _t5, _e4, _t6, _e5, _n5, _Gv_instances, l_fn, _f2, _t7, _e6, _n6, _g2, _t8, _e7, _n7, _l2, _a4, _r2, _i2, _s, _h, _t9, _e8, _n8, _l3, _a5, _r3, _i3, _s2, _g3, _h2, _d2, _c2, _u, _o, _m2, _Kv_instances, f_fn, p_fn, y_fn, b_fn, v_fn, x_fn, S_fn, j_fn, __fn, _i4;
function ub(t, e) {
  for (var a = 0; a < e.length; a++) {
    const i = e[a];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const o in i) if (o !== "default" && !(o in t)) {
        const c = Object.getOwnPropertyDescriptor(i, o);
        c && Object.defineProperty(t, o, c.get ? c : { enumerable: true, get: () => i[o] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const c of o) if (c.type === "childList") for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && i(f);
  }).observe(document, { childList: true, subtree: true });
  function a(o) {
    const c = {};
    return o.integrity && (c.integrity = o.integrity), o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? c.credentials = "include" : o.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function i(o) {
    if (o.ep) return;
    o.ep = true;
    const c = a(o);
    fetch(o.href, c);
  }
})();
function fb(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Fu = { exports: {} }, qi = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var L1;
function hb() {
  if (L1) return qi;
  L1 = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function a(i, o, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      c = {};
      for (var u in o) u !== "key" && (c[u] = o[u]);
    } else c = o;
    return o = c.ref, { $$typeof: t, type: i, key: f, ref: o !== void 0 ? o : null, props: c };
  }
  return qi.Fragment = e, qi.jsx = a, qi.jsxs = a, qi;
}
var U1;
function db() {
  return U1 || (U1 = 1, Fu.exports = hb()), Fu.exports;
}
var m = db(), Zu = { exports: {} }, ke = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var $1;
function mb() {
  if ($1) return ke;
  $1 = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), f = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.iterator;
  function v(O) {
    return O === null || typeof O != "object" ? null : (O = b && O[b] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var x = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, S = Object.assign, j = {};
  function w(O, Y, re) {
    this.props = O, this.context = Y, this.refs = j, this.updater = re || x;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(O, Y) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, Y, "setState");
  }, w.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function N() {
  }
  N.prototype = w.prototype;
  function k(O, Y, re) {
    this.props = O, this.context = Y, this.refs = j, this.updater = re || x;
  }
  var M = k.prototype = new N();
  M.constructor = k, S(M, w.prototype), M.isPureReactComponent = true;
  var C = Array.isArray, E = { H: null, A: null, T: null, S: null, V: null }, L = Object.prototype.hasOwnProperty;
  function A(O, Y, re, te, ce, me) {
    return re = me.ref, { $$typeof: t, type: O, key: Y, ref: re !== void 0 ? re : null, props: me };
  }
  function z(O, Y) {
    return A(O.type, Y, void 0, void 0, void 0, O.props);
  }
  function q(O) {
    return typeof O == "object" && O !== null && O.$$typeof === t;
  }
  function B(O) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(re) {
      return Y[re];
    });
  }
  var J = /\/+/g;
  function W(O, Y) {
    return typeof O == "object" && O !== null && O.key != null ? B("" + O.key) : Y.toString(36);
  }
  function oe() {
  }
  function ae(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (typeof O.status == "string" ? O.then(oe, oe) : (O.status = "pending", O.then(function(Y) {
          O.status === "pending" && (O.status = "fulfilled", O.value = Y);
        }, function(Y) {
          O.status === "pending" && (O.status = "rejected", O.reason = Y);
        })), O.status) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function K(O, Y, re, te, ce) {
    var me = typeof O;
    (me === "undefined" || me === "boolean") && (O = null);
    var de = false;
    if (O === null) de = true;
    else switch (me) {
      case "bigint":
      case "string":
      case "number":
        de = true;
        break;
      case "object":
        switch (O.$$typeof) {
          case t:
          case e:
            de = true;
            break;
          case p:
            return de = O._init, K(de(O._payload), Y, re, te, ce);
        }
    }
    if (de) return ce = ce(O), de = te === "" ? "." + W(O, 0) : te, C(ce) ? (re = "", de != null && (re = de.replace(J, "$&/") + "/"), K(ce, Y, re, "", function(pe) {
      return pe;
    })) : ce != null && (q(ce) && (ce = z(ce, re + (ce.key == null || O && O.key === ce.key ? "" : ("" + ce.key).replace(J, "$&/") + "/") + de)), Y.push(ce)), 1;
    de = 0;
    var Ae = te === "" ? "." : te + ":";
    if (C(O)) for (var he = 0; he < O.length; he++) te = O[he], me = Ae + W(te, he), de += K(te, Y, re, me, ce);
    else if (he = v(O), typeof he == "function") for (O = he.call(O), he = 0; !(te = O.next()).done; ) te = te.value, me = Ae + W(te, he++), de += K(te, Y, re, me, ce);
    else if (me === "object") {
      if (typeof O.then == "function") return K(ae(O), Y, re, te, ce);
      throw Y = String(O), Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.");
    }
    return de;
  }
  function R(O, Y, re) {
    if (O == null) return O;
    var te = [], ce = 0;
    return K(O, te, "", "", function(me) {
      return Y.call(re, me, ce++);
    }), te;
  }
  function G(O) {
    if (O._status === -1) {
      var Y = O._result;
      Y = Y(), Y.then(function(re) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = re);
      }, function(re) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = re);
      }), O._status === -1 && (O._status = 0, O._result = Y);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var ne = typeof reportError == "function" ? reportError : function(O) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O), error: O });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", O);
      return;
    }
    console.error(O);
  };
  function ue() {
  }
  return ke.Children = { map: R, forEach: function(O, Y, re) {
    R(O, function() {
      Y.apply(this, arguments);
    }, re);
  }, count: function(O) {
    var Y = 0;
    return R(O, function() {
      Y++;
    }), Y;
  }, toArray: function(O) {
    return R(O, function(Y) {
      return Y;
    }) || [];
  }, only: function(O) {
    if (!q(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, ke.Component = w, ke.Fragment = a, ke.Profiler = o, ke.PureComponent = k, ke.StrictMode = i, ke.Suspense = d, ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E, ke.__COMPILER_RUNTIME = { __proto__: null, c: function(O) {
    return E.H.useMemoCache(O);
  } }, ke.cache = function(O) {
    return function() {
      return O.apply(null, arguments);
    };
  }, ke.cloneElement = function(O, Y, re) {
    if (O == null) throw Error("The argument must be a React element, but you passed " + O + ".");
    var te = S({}, O.props), ce = O.key, me = void 0;
    if (Y != null) for (de in Y.ref !== void 0 && (me = void 0), Y.key !== void 0 && (ce = "" + Y.key), Y) !L.call(Y, de) || de === "key" || de === "__self" || de === "__source" || de === "ref" && Y.ref === void 0 || (te[de] = Y[de]);
    var de = arguments.length - 2;
    if (de === 1) te.children = re;
    else if (1 < de) {
      for (var Ae = Array(de), he = 0; he < de; he++) Ae[he] = arguments[he + 2];
      te.children = Ae;
    }
    return A(O.type, ce, void 0, void 0, me, te);
  }, ke.createContext = function(O) {
    return O = { $$typeof: f, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null }, O.Provider = O, O.Consumer = { $$typeof: c, _context: O }, O;
  }, ke.createElement = function(O, Y, re) {
    var te, ce = {}, me = null;
    if (Y != null) for (te in Y.key !== void 0 && (me = "" + Y.key), Y) L.call(Y, te) && te !== "key" && te !== "__self" && te !== "__source" && (ce[te] = Y[te]);
    var de = arguments.length - 2;
    if (de === 1) ce.children = re;
    else if (1 < de) {
      for (var Ae = Array(de), he = 0; he < de; he++) Ae[he] = arguments[he + 2];
      ce.children = Ae;
    }
    if (O && O.defaultProps) for (te in de = O.defaultProps, de) ce[te] === void 0 && (ce[te] = de[te]);
    return A(O, me, void 0, void 0, null, ce);
  }, ke.createRef = function() {
    return { current: null };
  }, ke.forwardRef = function(O) {
    return { $$typeof: u, render: O };
  }, ke.isValidElement = q, ke.lazy = function(O) {
    return { $$typeof: p, _payload: { _status: -1, _result: O }, _init: G };
  }, ke.memo = function(O, Y) {
    return { $$typeof: g, type: O, compare: Y === void 0 ? null : Y };
  }, ke.startTransition = function(O) {
    var Y = E.T, re = {};
    E.T = re;
    try {
      var te = O(), ce = E.S;
      ce !== null && ce(re, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(ue, ne);
    } catch (me) {
      ne(me);
    } finally {
      E.T = Y;
    }
  }, ke.unstable_useCacheRefresh = function() {
    return E.H.useCacheRefresh();
  }, ke.use = function(O) {
    return E.H.use(O);
  }, ke.useActionState = function(O, Y, re) {
    return E.H.useActionState(O, Y, re);
  }, ke.useCallback = function(O, Y) {
    return E.H.useCallback(O, Y);
  }, ke.useContext = function(O) {
    return E.H.useContext(O);
  }, ke.useDebugValue = function() {
  }, ke.useDeferredValue = function(O, Y) {
    return E.H.useDeferredValue(O, Y);
  }, ke.useEffect = function(O, Y, re) {
    var te = E.H;
    if (typeof re == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return te.useEffect(O, Y);
  }, ke.useId = function() {
    return E.H.useId();
  }, ke.useImperativeHandle = function(O, Y, re) {
    return E.H.useImperativeHandle(O, Y, re);
  }, ke.useInsertionEffect = function(O, Y) {
    return E.H.useInsertionEffect(O, Y);
  }, ke.useLayoutEffect = function(O, Y) {
    return E.H.useLayoutEffect(O, Y);
  }, ke.useMemo = function(O, Y) {
    return E.H.useMemo(O, Y);
  }, ke.useOptimistic = function(O, Y) {
    return E.H.useOptimistic(O, Y);
  }, ke.useReducer = function(O, Y, re) {
    return E.H.useReducer(O, Y, re);
  }, ke.useRef = function(O) {
    return E.H.useRef(O);
  }, ke.useState = function(O) {
    return E.H.useState(O);
  }, ke.useSyncExternalStore = function(O, Y, re) {
    return E.H.useSyncExternalStore(O, Y, re);
  }, ke.useTransition = function() {
    return E.H.useTransition();
  }, ke.version = "19.1.0", ke;
}
var H1;
function nr() {
  return H1 || (H1 = 1, Zu.exports = mb()), Zu.exports;
}
var $ = nr();
const qt = fb($), gb = ub({ __proto__: null, default: qt }, [$]);
var Ku = { exports: {} }, Vi = {}, Iu = { exports: {} }, Pu = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var q1;
function pb() {
  return q1 || (q1 = 1, function(t) {
    function e(R, G) {
      var ne = R.length;
      R.push(G);
      e: for (; 0 < ne; ) {
        var ue = ne - 1 >>> 1, O = R[ue];
        if (0 < o(O, G)) R[ue] = G, R[ne] = O, ne = ue;
        else break e;
      }
    }
    function a(R) {
      return R.length === 0 ? null : R[0];
    }
    function i(R) {
      if (R.length === 0) return null;
      var G = R[0], ne = R.pop();
      if (ne !== G) {
        R[0] = ne;
        e: for (var ue = 0, O = R.length, Y = O >>> 1; ue < Y; ) {
          var re = 2 * (ue + 1) - 1, te = R[re], ce = re + 1, me = R[ce];
          if (0 > o(te, ne)) ce < O && 0 > o(me, te) ? (R[ue] = me, R[ce] = ne, ue = ce) : (R[ue] = te, R[re] = ne, ue = re);
          else if (ce < O && 0 > o(me, ne)) R[ue] = me, R[ce] = ne, ue = ce;
          else break e;
        }
      }
      return G;
    }
    function o(R, G) {
      var ne = R.sortIndex - G.sortIndex;
      return ne !== 0 ? ne : R.id - G.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      t.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, u = f.now();
      t.unstable_now = function() {
        return f.now() - u;
      };
    }
    var d = [], g = [], p = 1, b = null, v = 3, x = false, S = false, j = false, w = false, N = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    function C(R) {
      for (var G = a(g); G !== null; ) {
        if (G.callback === null) i(g);
        else if (G.startTime <= R) i(g), G.sortIndex = G.expirationTime, e(d, G);
        else break;
        G = a(g);
      }
    }
    function E(R) {
      if (j = false, C(R), !S) if (a(d) !== null) S = true, L || (L = true, W());
      else {
        var G = a(g);
        G !== null && K(E, G.startTime - R);
      }
    }
    var L = false, A = -1, z = 5, q = -1;
    function B() {
      return w ? true : !(t.unstable_now() - q < z);
    }
    function J() {
      if (w = false, L) {
        var R = t.unstable_now();
        q = R;
        var G = true;
        try {
          e: {
            S = false, j && (j = false, k(A), A = -1), x = true;
            var ne = v;
            try {
              t: {
                for (C(R), b = a(d); b !== null && !(b.expirationTime > R && B()); ) {
                  var ue = b.callback;
                  if (typeof ue == "function") {
                    b.callback = null, v = b.priorityLevel;
                    var O = ue(b.expirationTime <= R);
                    if (R = t.unstable_now(), typeof O == "function") {
                      b.callback = O, C(R), G = true;
                      break t;
                    }
                    b === a(d) && i(d), C(R);
                  } else i(d);
                  b = a(d);
                }
                if (b !== null) G = true;
                else {
                  var Y = a(g);
                  Y !== null && K(E, Y.startTime - R), G = false;
                }
              }
              break e;
            } finally {
              b = null, v = ne, x = false;
            }
            G = void 0;
          }
        } finally {
          G ? W() : L = false;
        }
      }
    }
    var W;
    if (typeof M == "function") W = function() {
      M(J);
    };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), ae = oe.port2;
      oe.port1.onmessage = J, W = function() {
        ae.postMessage(null);
      };
    } else W = function() {
      N(J, 0);
    };
    function K(R, G) {
      A = N(function() {
        R(t.unstable_now());
      }, G);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, t.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < R ? Math.floor(1e3 / R) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, t.unstable_next = function(R) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = v;
      }
      var ne = v;
      v = G;
      try {
        return R();
      } finally {
        v = ne;
      }
    }, t.unstable_requestPaint = function() {
      w = true;
    }, t.unstable_runWithPriority = function(R, G) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var ne = v;
      v = R;
      try {
        return G();
      } finally {
        v = ne;
      }
    }, t.unstable_scheduleCallback = function(R, G, ne) {
      var ue = t.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? ue + ne : ue) : ne = ue, R) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return O = ne + O, R = { id: p++, callback: G, priorityLevel: R, startTime: ne, expirationTime: O, sortIndex: -1 }, ne > ue ? (R.sortIndex = ne, e(g, R), a(d) === null && R === a(g) && (j ? (k(A), A = -1) : j = true, K(E, ne - ue))) : (R.sortIndex = O, e(d, R), S || x || (S = true, L || (L = true, W()))), R;
    }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(R) {
      var G = v;
      return function() {
        var ne = v;
        v = G;
        try {
          return R.apply(this, arguments);
        } finally {
          v = ne;
        }
      };
    };
  }(Pu)), Pu;
}
var V1;
function yb() {
  return V1 || (V1 = 1, Iu.exports = pb()), Iu.exports;
}
var Wu = { exports: {} }, Xt = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var B1;
function bb() {
  if (B1) return Xt;
  B1 = 1;
  var t = nr();
  function e(d) {
    var g = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++) g += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return "Minified React error #" + d + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function a() {
  }
  var i = { d: { f: a, r: function() {
    throw Error(e(522));
  }, D: a, C: a, L: a, m: a, X: a, S: a, M: a }, p: 0, findDOMNode: null }, o = Symbol.for("react.portal");
  function c(d, g, p) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: o, key: b == null ? null : "" + b, children: d, containerInfo: g, implementation: p };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function u(d, g) {
    if (d === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, Xt.createPortal = function(d, g) {
    var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(e(299));
    return c(d, g, null, p);
  }, Xt.flushSync = function(d) {
    var g = f.T, p = i.p;
    try {
      if (f.T = null, i.p = 2, d) return d();
    } finally {
      f.T = g, i.p = p, i.d.f();
    }
  }, Xt.preconnect = function(d, g) {
    typeof d == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, i.d.C(d, g));
  }, Xt.prefetchDNS = function(d) {
    typeof d == "string" && i.d.D(d);
  }, Xt.preinit = function(d, g) {
    if (typeof d == "string" && g && typeof g.as == "string") {
      var p = g.as, b = u(p, g.crossOrigin), v = typeof g.integrity == "string" ? g.integrity : void 0, x = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      p === "style" ? i.d.S(d, typeof g.precedence == "string" ? g.precedence : void 0, { crossOrigin: b, integrity: v, fetchPriority: x }) : p === "script" && i.d.X(d, { crossOrigin: b, integrity: v, fetchPriority: x, nonce: typeof g.nonce == "string" ? g.nonce : void 0 });
    }
  }, Xt.preinitModule = function(d, g) {
    if (typeof d == "string") if (typeof g == "object" && g !== null) {
      if (g.as == null || g.as === "script") {
        var p = u(g.as, g.crossOrigin);
        i.d.M(d, { crossOrigin: p, integrity: typeof g.integrity == "string" ? g.integrity : void 0, nonce: typeof g.nonce == "string" ? g.nonce : void 0 });
      }
    } else g == null && i.d.M(d);
  }, Xt.preload = function(d, g) {
    if (typeof d == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var p = g.as, b = u(p, g.crossOrigin);
      i.d.L(d, p, { crossOrigin: b, integrity: typeof g.integrity == "string" ? g.integrity : void 0, nonce: typeof g.nonce == "string" ? g.nonce : void 0, type: typeof g.type == "string" ? g.type : void 0, fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0, referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0, imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0, imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0, media: typeof g.media == "string" ? g.media : void 0 });
    }
  }, Xt.preloadModule = function(d, g) {
    if (typeof d == "string") if (g) {
      var p = u(g.as, g.crossOrigin);
      i.d.m(d, { as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0, crossOrigin: p, integrity: typeof g.integrity == "string" ? g.integrity : void 0 });
    } else i.d.m(d);
  }, Xt.requestFormReset = function(d) {
    i.d.r(d);
  }, Xt.unstable_batchedUpdates = function(d, g) {
    return d(g);
  }, Xt.useFormState = function(d, g, p) {
    return f.H.useFormState(d, g, p);
  }, Xt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Xt.version = "19.1.0", Xt;
}
var Y1;
function vb() {
  if (Y1) return Wu.exports;
  Y1 = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
    } catch (e) {
      console.error(e);
    }
  }
  return t(), Wu.exports = bb(), Wu.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var G1;
function xb() {
  if (G1) return Vi;
  G1 = 1;
  var t = yb(), e = nr(), a = vb();
  function i(n) {
    var l = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++) l += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function c(n) {
    var l = n, s = n;
    if (n.alternate) for (; l.return; ) l = l.return;
    else {
      n = l;
      do
        l = n, (l.flags & 4098) !== 0 && (s = l.return), n = l.return;
      while (n);
    }
    return l.tag === 3 ? s : null;
  }
  function f(n) {
    if (n.tag === 13) {
      var l = n.memoizedState;
      if (l === null && (n = n.alternate, n !== null && (l = n.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function u(n) {
    if (c(n) !== n) throw Error(i(188));
  }
  function d(n) {
    var l = n.alternate;
    if (!l) {
      if (l = c(n), l === null) throw Error(i(188));
      return l !== n ? null : n;
    }
    for (var s = n, r = l; ; ) {
      var h = s.return;
      if (h === null) break;
      var y = h.alternate;
      if (y === null) {
        if (r = h.return, r !== null) {
          s = r;
          continue;
        }
        break;
      }
      if (h.child === y.child) {
        for (y = h.child; y; ) {
          if (y === s) return u(h), n;
          if (y === r) return u(h), l;
          y = y.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== r.return) s = h, r = y;
      else {
        for (var _ = false, T = h.child; T; ) {
          if (T === s) {
            _ = true, s = h, r = y;
            break;
          }
          if (T === r) {
            _ = true, r = h, s = y;
            break;
          }
          T = T.sibling;
        }
        if (!_) {
          for (T = y.child; T; ) {
            if (T === s) {
              _ = true, s = y, r = h;
              break;
            }
            if (T === r) {
              _ = true, r = y, s = h;
              break;
            }
            T = T.sibling;
          }
          if (!_) throw Error(i(189));
        }
      }
      if (s.alternate !== r) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? n : l;
  }
  function g(n) {
    var l = n.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return n;
    for (n = n.child; n !== null; ) {
      if (l = g(n), l !== null) return l;
      n = n.sibling;
    }
    return null;
  }
  var p = Object.assign, b = Symbol.for("react.element"), v = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), k = Symbol.for("react.consumer"), M = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), B = Symbol.for("react.memo_cache_sentinel"), J = Symbol.iterator;
  function W(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var oe = Symbol.for("react.client.reference");
  function ae(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.$$typeof === oe ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case S:
        return "Fragment";
      case w:
        return "Profiler";
      case j:
        return "StrictMode";
      case E:
        return "Suspense";
      case L:
        return "SuspenseList";
      case q:
        return "Activity";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case x:
        return "Portal";
      case M:
        return (n.displayName || "Context") + ".Provider";
      case k:
        return (n._context.displayName || "Context") + ".Consumer";
      case C:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case A:
        return l = n.displayName || null, l !== null ? l : ae(n.type) || "Memo";
      case z:
        l = n._payload, n = n._init;
        try {
          return ae(n(l));
        } catch {
        }
    }
    return null;
  }
  var K = Array.isArray, R = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = { pending: false, data: null, method: null, action: null }, ue = [], O = -1;
  function Y(n) {
    return { current: n };
  }
  function re(n) {
    0 > O || (n.current = ue[O], ue[O] = null, O--);
  }
  function te(n, l) {
    O++, ue[O] = n.current, n.current = l;
  }
  var ce = Y(null), me = Y(null), de = Y(null), Ae = Y(null);
  function he(n, l) {
    switch (te(de, l), te(me, n), te(ce, null), l.nodeType) {
      case 9:
      case 11:
        n = (n = l.documentElement) && (n = n.namespaceURI) ? u1(n) : 0;
        break;
      default:
        if (n = l.tagName, l = l.namespaceURI) l = u1(l), n = f1(l, n);
        else switch (n) {
          case "svg":
            n = 1;
            break;
          case "math":
            n = 2;
            break;
          default:
            n = 0;
        }
    }
    re(ce), te(ce, n);
  }
  function pe() {
    re(ce), re(me), re(de);
  }
  function xe(n) {
    n.memoizedState !== null && te(Ae, n);
    var l = ce.current, s = f1(l, n.type);
    l !== s && (te(me, n), te(ce, s));
  }
  function ge(n) {
    me.current === n && (re(ce), re(me)), Ae.current === n && (re(Ae), Ri._currentValue = ne);
  }
  var He = Object.prototype.hasOwnProperty, Oe = t.unstable_scheduleCallback, Ve = t.unstable_cancelCallback, Je = t.unstable_shouldYield, tt = t.unstable_requestPaint, Qe = t.unstable_now, ct = t.unstable_getCurrentPriorityLevel, At = t.unstable_ImmediatePriority, wt = t.unstable_UserBlockingPriority, Yt = t.unstable_NormalPriority, Nn = t.unstable_LowPriority, Rt = t.unstable_IdlePriority, gt = t.log, Pt = t.unstable_setDisableYieldValue, Tn = null, ut = null;
  function Nt(n) {
    if (typeof gt == "function" && Pt(n), ut && typeof ut.setStrictMode == "function") try {
      ut.setStrictMode(Tn, n);
    } catch {
    }
  }
  var at = Math.clz32 ? Math.clz32 : Lt, Le = Math.log, nt = Math.LN2;
  function Lt(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Le(n) / nt | 0) | 0;
  }
  var Wt = 256, Vl = 4194304;
  function pl(n) {
    var l = n & 42;
    if (l !== 0) return l;
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return n & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return n;
    }
  }
  function Pa(n, l, s) {
    var r = n.pendingLanes;
    if (r === 0) return 0;
    var h = 0, y = n.suspendedLanes, _ = n.pingedLanes;
    n = n.warmLanes;
    var T = r & 134217727;
    return T !== 0 ? (r = T & ~y, r !== 0 ? h = pl(r) : (_ &= T, _ !== 0 ? h = pl(_) : s || (s = T & ~n, s !== 0 && (h = pl(s))))) : (T = r & ~y, T !== 0 ? h = pl(T) : _ !== 0 ? h = pl(_) : s || (s = r & ~n, s !== 0 && (h = pl(s)))), h === 0 ? 0 : l !== 0 && l !== h && (l & y) === 0 && (y = h & -h, s = l & -l, y >= s || y === 32 && (s & 4194048) !== 0) ? l : h;
  }
  function wa(n, l) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & l) === 0;
  }
  function Ko(n, l) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Vs() {
    var n = Wt;
    return Wt <<= 1, (Wt & 4194048) === 0 && (Wt = 256), n;
  }
  function Wa() {
    var n = Vl;
    return Vl <<= 1, (Vl & 62914560) === 0 && (Vl = 4194304), n;
  }
  function Yn(n) {
    for (var l = [], s = 0; 31 > s; s++) l.push(n);
    return l;
  }
  function Jt(n, l) {
    n.pendingLanes |= l, l !== 268435456 && (n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0);
  }
  function yl(n, l, s, r, h, y) {
    var _ = n.pendingLanes;
    n.pendingLanes = s, n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0, n.expiredLanes &= s, n.entangledLanes &= s, n.errorRecoveryDisabledLanes &= s, n.shellSuspendCounter = 0;
    var T = n.entanglements, D = n.expirationTimes, Z = n.hiddenUpdates;
    for (s = _ & ~s; 0 < s; ) {
      var le = 31 - at(s), ie = 1 << le;
      T[le] = 0, D[le] = -1;
      var I = Z[le];
      if (I !== null) for (Z[le] = null, le = 0; le < I.length; le++) {
        var P = I[le];
        P !== null && (P.lane &= -536870913);
      }
      s &= ~ie;
    }
    r !== 0 && Na(n, r, 0), y !== 0 && h === 0 && n.tag !== 0 && (n.suspendedLanes |= y & ~(_ & ~l));
  }
  function Na(n, l, s) {
    n.pendingLanes |= l, n.suspendedLanes &= ~l;
    var r = 31 - at(l);
    n.entangledLanes |= l, n.entanglements[r] = n.entanglements[r] | 1073741824 | s & 4194090;
  }
  function Gn(n, l) {
    var s = n.entangledLanes |= l;
    for (n = n.entanglements; s; ) {
      var r = 31 - at(s), h = 1 << r;
      h & l | n[r] & l && (n[r] |= l), s &= ~h;
    }
  }
  function Bs(n) {
    switch (n) {
      case 2:
        n = 1;
        break;
      case 8:
        n = 4;
        break;
      case 32:
        n = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        n = 128;
        break;
      case 268435456:
        n = 134217728;
        break;
      default:
        n = 0;
    }
    return n;
  }
  function Bl(n) {
    return n &= -n, 2 < n ? 8 < n ? (n & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Yl() {
    var n = G.p;
    return n !== 0 ? n : (n = window.event, n === void 0 ? 32 : C1(n.type));
  }
  function dr(n, l) {
    var s = G.p;
    try {
      return G.p = n, l();
    } finally {
      G.p = s;
    }
  }
  var Qn = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + Qn, Gt = "__reactProps$" + Qn, bl = "__reactContainer$" + Qn, Ja = "__reactEvents$" + Qn, es = "__reactListeners$" + Qn, Gl = "__reactHandles$" + Qn, mr = "__reactResources$" + Qn, ln = "__reactMarker$" + Qn;
  function Ys(n) {
    delete n[Ct], delete n[Gt], delete n[Ja], delete n[es], delete n[Gl];
  }
  function an(n) {
    var l = n[Ct];
    if (l) return l;
    for (var s = n.parentNode; s; ) {
      if (l = s[bl] || s[Ct]) {
        if (s = l.alternate, l.child !== null || s !== null && s.child !== null) for (n = g1(n); n !== null; ) {
          if (s = n[Ct]) return s;
          n = g1(n);
        }
        return l;
      }
      n = s, s = n.parentNode;
    }
    return null;
  }
  function vl(n) {
    if (n = n[Ct] || n[bl]) {
      var l = n.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3) return n;
    }
    return null;
  }
  function Ta(n) {
    var l = n.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return n.stateNode;
    throw Error(i(33));
  }
  function Xn(n) {
    var l = n[mr];
    return l || (l = n[mr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function ft(n) {
    n[ln] = true;
  }
  var Gs = /* @__PURE__ */ new Set(), Qs = {};
  function il(n, l) {
    kn(n, l), kn(n + "Capture", l);
  }
  function kn(n, l) {
    for (Qs[n] = l, n = 0; n < l.length; n++) Gs.add(l[n]);
  }
  var gr = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), pr = {}, H = {};
  function ee(n) {
    return He.call(H, n) ? true : He.call(pr, n) ? false : gr.test(n) ? H[n] = true : (pr[n] = true, false);
  }
  function fe(n, l, s) {
    if (ee(l)) if (s === null) n.removeAttribute(l);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
          n.removeAttribute(l);
          return;
        case "boolean":
          var r = l.toLowerCase().slice(0, 5);
          if (r !== "data-" && r !== "aria-") {
            n.removeAttribute(l);
            return;
          }
      }
      n.setAttribute(l, "" + s);
    }
  }
  function be(n, l, s) {
    if (s === null) n.removeAttribute(l);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(l);
          return;
      }
      n.setAttribute(l, "" + s);
    }
  }
  function $e(n, l, s, r) {
    if (r === null) n.removeAttribute(s);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(s);
          return;
      }
      n.setAttributeNS(l, s, "" + r);
    }
  }
  var Me, lt;
  function Pe(n) {
    if (Me === void 0) try {
      throw Error();
    } catch (s) {
      var l = s.stack.trim().match(/\n( *(at )?)/);
      Me = l && l[1] || "", lt = -1 < s.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < s.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Me + n + lt;
  }
  var en = false;
  function rt(n, l) {
    if (!n || en) return "";
    en = true;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = { DetermineComponentFrameRoot: function() {
        try {
          if (l) {
            var ie = function() {
              throw Error();
            };
            if (Object.defineProperty(ie.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ie, []);
              } catch (P) {
                var I = P;
              }
              Reflect.construct(n, [], ie);
            } else {
              try {
                ie.call();
              } catch (P) {
                I = P;
              }
              n.call(ie.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (P) {
              I = P;
            }
            (ie = n()) && typeof ie.catch == "function" && ie.catch(function() {
            });
          }
        } catch (P) {
          if (P && I && typeof P.stack == "string") return [P.stack, I.stack];
        }
        return [null, null];
      } };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var h = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
      h && h.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var y = r.DetermineComponentFrameRoot(), _ = y[0], T = y[1];
      if (_ && T) {
        var D = _.split(`
`), Z = T.split(`
`);
        for (h = r = 0; r < D.length && !D[r].includes("DetermineComponentFrameRoot"); ) r++;
        for (; h < Z.length && !Z[h].includes("DetermineComponentFrameRoot"); ) h++;
        if (r === D.length || h === Z.length) for (r = D.length - 1, h = Z.length - 1; 1 <= r && 0 <= h && D[r] !== Z[h]; ) h--;
        for (; 1 <= r && 0 <= h; r--, h--) if (D[r] !== Z[h]) {
          if (r !== 1 || h !== 1) do
            if (r--, h--, 0 > h || D[r] !== Z[h]) {
              var le = `
` + D[r].replace(" at new ", " at ");
              return n.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", n.displayName)), le;
            }
          while (1 <= r && 0 <= h);
          break;
        }
      }
    } finally {
      en = false, Error.prepareStackTrace = s;
    }
    return (s = n ? n.displayName || n.name : "") ? Pe(s) : "";
  }
  function pt(n) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return Pe(n.type);
      case 16:
        return Pe("Lazy");
      case 13:
        return Pe("Suspense");
      case 19:
        return Pe("SuspenseList");
      case 0:
      case 15:
        return rt(n.type, false);
      case 11:
        return rt(n.type.render, false);
      case 1:
        return rt(n.type, true);
      case 31:
        return Pe("Activity");
      default:
        return "";
    }
  }
  function dn(n) {
    try {
      var l = "";
      do
        l += pt(n), n = n.return;
      while (n);
      return l;
    } catch (s) {
      return `
Error generating stack: ` + s.message + `
` + s.stack;
    }
  }
  function ht(n) {
    switch (typeof n) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Et(n) {
    var l = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Fn(n) {
    var l = Et(n) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(n.constructor.prototype, l), r = "" + n[l];
    if (!n.hasOwnProperty(l) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var h = s.get, y = s.set;
      return Object.defineProperty(n, l, { configurable: true, get: function() {
        return h.call(this);
      }, set: function(_) {
        r = "" + _, y.call(this, _);
      } }), Object.defineProperty(n, l, { enumerable: s.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(_) {
        r = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[l];
      } };
    }
  }
  function Zn(n) {
    n._valueTracker || (n._valueTracker = Fn(n));
  }
  function ka(n) {
    if (!n) return false;
    var l = n._valueTracker;
    if (!l) return true;
    var s = l.getValue(), r = "";
    return n && (r = Et(n) ? n.checked ? "true" : "false" : n.value), n = r, n !== s ? (l.setValue(n), true) : false;
  }
  function Kn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var Ma = /[\n"\\]/g;
  function tn(n) {
    return n.replace(Ma, function(l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function Xs(n, l, s, r, h, y, _, T) {
    n.name = "", _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? n.type = _ : n.removeAttribute("type"), l != null ? _ === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + ht(l)) : n.value !== "" + ht(l) && (n.value = "" + ht(l)) : _ !== "submit" && _ !== "reset" || n.removeAttribute("value"), l != null ? Ye(n, _, ht(l)) : s != null ? Ye(n, _, ht(s)) : r != null && n.removeAttribute("value"), h == null && y != null && (n.defaultChecked = !!y), h != null && (n.checked = h && typeof h != "function" && typeof h != "symbol"), T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? n.name = "" + ht(T) : n.removeAttribute("name");
  }
  function yr(n, l, s, r, h, y, _, T) {
    if (y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (n.type = y), l != null || s != null) {
      if (!(y !== "submit" && y !== "reset" || l != null)) return;
      s = s != null ? "" + ht(s) : "", l = l != null ? "" + ht(l) : s, T || l === n.value || (n.value = l), n.defaultValue = l;
    }
    r = r ?? h, r = typeof r != "function" && typeof r != "symbol" && !!r, n.checked = T ? n.checked : !!r, n.defaultChecked = !!r, _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" && (n.name = _);
  }
  function Ye(n, l, s) {
    l === "number" && Kn(n.ownerDocument) === n || n.defaultValue === "" + s || (n.defaultValue = "" + s);
  }
  function Ue(n, l, s, r) {
    if (n = n.options, l) {
      l = {};
      for (var h = 0; h < s.length; h++) l["$" + s[h]] = true;
      for (s = 0; s < n.length; s++) h = l.hasOwnProperty("$" + n[s].value), n[s].selected !== h && (n[s].selected = h), h && r && (n[s].defaultSelected = true);
    } else {
      for (s = "" + ht(s), l = null, h = 0; h < n.length; h++) {
        if (n[h].value === s) {
          n[h].selected = true, r && (n[h].defaultSelected = true);
          return;
        }
        l !== null || n[h].disabled || (l = n[h]);
      }
      l !== null && (l.selected = true);
    }
  }
  function Aa(n, l, s) {
    if (l != null && (l = "" + ht(l), l !== n.value && (n.value = l), s == null)) {
      n.defaultValue !== l && (n.defaultValue = l);
      return;
    }
    n.defaultValue = s != null ? "" + ht(s) : "";
  }
  function In(n, l, s, r) {
    if (l == null) {
      if (r != null) {
        if (s != null) throw Error(i(92));
        if (K(r)) {
          if (1 < r.length) throw Error(i(93));
          r = r[0];
        }
        s = r;
      }
      s == null && (s = ""), l = s;
    }
    s = ht(l), n.defaultValue = s, r = n.textContent, r === s && r !== "" && r !== null && (n.value = r);
  }
  function rl(n, l) {
    if (l) {
      var s = n.firstChild;
      if (s && s === n.lastChild && s.nodeType === 3) {
        s.nodeValue = l;
        return;
      }
    }
    n.textContent = l;
  }
  var sn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Mn(n, l, s) {
    var r = l.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === "" ? r ? n.setProperty(l, "") : l === "float" ? n.cssFloat = "" : n[l] = "" : r ? n.setProperty(l, s) : typeof s != "number" || s === 0 || sn.has(l) ? l === "float" ? n.cssFloat = s : n[l] = ("" + s).trim() : n[l] = s + "px";
  }
  function Pn(n, l, s) {
    if (l != null && typeof l != "object") throw Error(i(62));
    if (n = n.style, s != null) {
      for (var r in s) !s.hasOwnProperty(r) || l != null && l.hasOwnProperty(r) || (r.indexOf("--") === 0 ? n.setProperty(r, "") : r === "float" ? n.cssFloat = "" : n[r] = "");
      for (var h in l) r = l[h], l.hasOwnProperty(h) && s[h] !== r && Mn(n, h, r);
    } else for (var y in l) l.hasOwnProperty(y) && Mn(n, y, l[y]);
  }
  function xl(n) {
    if (n.indexOf("-") === -1) return false;
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var ts = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Fs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Sl(n) {
    return Fs.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
  }
  var Wn = null;
  function ns(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Jn = null, ol = null;
  function Ca(n) {
    var l = vl(n);
    if (l && (n = l.stateNode)) {
      var s = n[Gt] || null;
      e: switch (n = l.stateNode, l.type) {
        case "input":
          if (Xs(n, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name), l = s.name, s.type === "radio" && l != null) {
            for (s = n; s.parentNode; ) s = s.parentNode;
            for (s = s.querySelectorAll('input[name="' + tn("" + l) + '"][type="radio"]'), l = 0; l < s.length; l++) {
              var r = s[l];
              if (r !== n && r.form === n.form) {
                var h = r[Gt] || null;
                if (!h) throw Error(i(90));
                Xs(r, h.value, h.defaultValue, h.defaultValue, h.checked, h.defaultChecked, h.type, h.name);
              }
            }
            for (l = 0; l < s.length; l++) r = s[l], r.form === n.form && ka(r);
          }
          break e;
        case "textarea":
          Aa(n, s.value, s.defaultValue);
          break e;
        case "select":
          l = s.value, l != null && Ue(n, !!s.multiple, l, false);
      }
    }
  }
  var Ql = false;
  function Zs(n, l, s) {
    if (Ql) return n(l, s);
    Ql = true;
    try {
      var r = n(l);
      return r;
    } finally {
      if (Ql = false, (Jn !== null || ol !== null) && (no(), Jn && (l = Jn, n = ol, ol = Jn = null, Ca(l), n))) for (l = 0; l < n.length; l++) Ca(n[l]);
    }
  }
  function cl(n, l) {
    var s = n.stateNode;
    if (s === null) return null;
    var r = s[Gt] || null;
    if (r === null) return null;
    s = r[l];
    e: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (n = n.type, r = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !r;
        break e;
      default:
        n = false;
    }
    if (n) return null;
    if (s && typeof s != "function") throw Error(i(231, l, typeof s));
    return s;
  }
  var rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Io = false;
  if (rn) try {
    var Ks = {};
    Object.defineProperty(Ks, "passive", { get: function() {
      Io = true;
    } }), window.addEventListener("test", Ks, Ks), window.removeEventListener("test", Ks, Ks);
  } catch {
    Io = false;
  }
  var Xl = null, Po = null, br = null;
  function mh() {
    if (br) return br;
    var n, l = Po, s = l.length, r, h = "value" in Xl ? Xl.value : Xl.textContent, y = h.length;
    for (n = 0; n < s && l[n] === h[n]; n++) ;
    var _ = s - n;
    for (r = 1; r <= _ && l[s - r] === h[y - r]; r++) ;
    return br = h.slice(n, 1 < r ? 1 - r : void 0);
  }
  function vr(n) {
    var l = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && l === 13 && (n = 13)) : n = l, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function xr() {
    return true;
  }
  function gh() {
    return false;
  }
  function on(n) {
    function l(s, r, h, y, _) {
      this._reactName = s, this._targetInst = h, this.type = r, this.nativeEvent = y, this.target = _, this.currentTarget = null;
      for (var T in n) n.hasOwnProperty(T) && (s = n[T], this[T] = s ? s(y) : y[T]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === false) ? xr : gh, this.isPropagationStopped = gh, this;
    }
    return p(l.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = false), this.isDefaultPrevented = xr);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = true), this.isPropagationStopped = xr);
    }, persist: function() {
    }, isPersistent: xr }), l;
  }
  var Ea = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Sr = on(Ea), Is = p({}, Ea, { view: 0, detail: 0 }), uy = on(Is), Wo, Jo, Ps, jr = p({}, Is, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: tc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Ps && (Ps && n.type === "mousemove" ? (Wo = n.screenX - Ps.screenX, Jo = n.screenY - Ps.screenY) : Jo = Wo = 0, Ps = n), Wo);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Jo;
  } }), ph = on(jr), fy = p({}, jr, { dataTransfer: 0 }), hy = on(fy), dy = p({}, Is, { relatedTarget: 0 }), ec = on(dy), my = p({}, Ea, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gy = on(my), py = p({}, Ea, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), yy = on(py), by = p({}, Ea, { data: 0 }), yh = on(by), vy = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, xy = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Sy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function jy(n) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(n) : (n = Sy[n]) ? !!l[n] : false;
  }
  function tc() {
    return jy;
  }
  var _y = p({}, Is, { key: function(n) {
    if (n.key) {
      var l = vy[n.key] || n.key;
      if (l !== "Unidentified") return l;
    }
    return n.type === "keypress" ? (n = vr(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? xy[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: tc, charCode: function(n) {
    return n.type === "keypress" ? vr(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? vr(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), wy = on(_y), Ny = p({}, jr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bh = on(Ny), Ty = p({}, Is, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: tc }), ky = on(Ty), My = p({}, Ea, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ay = on(My), Cy = p({}, jr, { deltaX: function(n) {
    return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
  }, deltaY: function(n) {
    return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Ey = on(Cy), Oy = p({}, Ea, { newState: 0, oldState: 0 }), zy = on(Oy), Dy = [9, 13, 27, 32], nc = rn && "CompositionEvent" in window, Ws = null;
  rn && "documentMode" in document && (Ws = document.documentMode);
  var Ry = rn && "TextEvent" in window && !Ws, vh = rn && (!nc || Ws && 8 < Ws && 11 >= Ws), xh = " ", Sh = false;
  function jh(n, l) {
    switch (n) {
      case "keyup":
        return Dy.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function _h3(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ls = false;
  function Ly(n, l) {
    switch (n) {
      case "compositionend":
        return _h3(l);
      case "keypress":
        return l.which !== 32 ? null : (Sh = true, xh);
      case "textInput":
        return n = l.data, n === xh && Sh ? null : n;
      default:
        return null;
    }
  }
  function Uy(n, l) {
    if (ls) return n === "compositionend" || !nc && jh(n, l) ? (n = mh(), br = Po = Xl = null, ls = false, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return vh && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var $y = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function wh(n) {
    var l = n && n.nodeName && n.nodeName.toLowerCase();
    return l === "input" ? !!$y[n.type] : l === "textarea";
  }
  function Nh(n, l, s, r) {
    Jn ? ol ? ol.push(r) : ol = [r] : Jn = r, l = oo(l, "onChange"), 0 < l.length && (s = new Sr("onChange", "change", null, s, r), n.push({ event: s, listeners: l }));
  }
  var Js = null, ei = null;
  function Hy(n) {
    s1(n, 0);
  }
  function _r4(n) {
    var l = Ta(n);
    if (ka(l)) return n;
  }
  function Th(n, l) {
    if (n === "change") return l;
  }
  var kh = false;
  if (rn) {
    var lc;
    if (rn) {
      var ac = "oninput" in document;
      if (!ac) {
        var Mh = document.createElement("div");
        Mh.setAttribute("oninput", "return;"), ac = typeof Mh.oninput == "function";
      }
      lc = ac;
    } else lc = false;
    kh = lc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ah() {
    Js && (Js.detachEvent("onpropertychange", Ch), ei = Js = null);
  }
  function Ch(n) {
    if (n.propertyName === "value" && _r4(ei)) {
      var l = [];
      Nh(l, ei, n, ns(n)), Zs(Hy, l);
    }
  }
  function qy(n, l, s) {
    n === "focusin" ? (Ah(), Js = l, ei = s, Js.attachEvent("onpropertychange", Ch)) : n === "focusout" && Ah();
  }
  function Vy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return _r4(ei);
  }
  function By(n, l) {
    if (n === "click") return _r4(l);
  }
  function Yy(n, l) {
    if (n === "input" || n === "change") return _r4(l);
  }
  function Gy(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var mn = typeof Object.is == "function" ? Object.is : Gy;
  function ti(n, l) {
    if (mn(n, l)) return true;
    if (typeof n != "object" || n === null || typeof l != "object" || l === null) return false;
    var s = Object.keys(n), r = Object.keys(l);
    if (s.length !== r.length) return false;
    for (r = 0; r < s.length; r++) {
      var h = s[r];
      if (!He.call(l, h) || !mn(n[h], l[h])) return false;
    }
    return true;
  }
  function Eh(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Oh(n, l) {
    var s = Eh(n);
    n = 0;
    for (var r; s; ) {
      if (s.nodeType === 3) {
        if (r = n + s.textContent.length, n <= l && r >= l) return { node: s, offset: l - n };
        n = r;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = Eh(s);
    }
  }
  function zh(n, l) {
    return n && l ? n === l ? true : n && n.nodeType === 3 ? false : l && l.nodeType === 3 ? zh(n, l.parentNode) : "contains" in n ? n.contains(l) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(l) & 16) : false : false;
  }
  function Dh(n) {
    n = n != null && n.ownerDocument != null && n.ownerDocument.defaultView != null ? n.ownerDocument.defaultView : window;
    for (var l = Kn(n.document); l instanceof n.HTMLIFrameElement; ) {
      try {
        var s = typeof l.contentWindow.location.href == "string";
      } catch {
        s = false;
      }
      if (s) n = l.contentWindow;
      else break;
      l = Kn(n.document);
    }
    return l;
  }
  function sc(n) {
    var l = n && n.nodeName && n.nodeName.toLowerCase();
    return l && (l === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || l === "textarea" || n.contentEditable === "true");
  }
  var Qy = rn && "documentMode" in document && 11 >= document.documentMode, as = null, ic = null, ni = null, rc = false;
  function Rh(n, l, s) {
    var r = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    rc || as == null || as !== Kn(r) || (r = as, "selectionStart" in r && sc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ni && ti(ni, r) || (ni = r, r = oo(ic, "onSelect"), 0 < r.length && (l = new Sr("onSelect", "select", null, l, s), n.push({ event: l, listeners: r }), l.target = as)));
  }
  function Oa(n, l) {
    var s = {};
    return s[n.toLowerCase()] = l.toLowerCase(), s["Webkit" + n] = "webkit" + l, s["Moz" + n] = "moz" + l, s;
  }
  var ss = { animationend: Oa("Animation", "AnimationEnd"), animationiteration: Oa("Animation", "AnimationIteration"), animationstart: Oa("Animation", "AnimationStart"), transitionrun: Oa("Transition", "TransitionRun"), transitionstart: Oa("Transition", "TransitionStart"), transitioncancel: Oa("Transition", "TransitionCancel"), transitionend: Oa("Transition", "TransitionEnd") }, oc = {}, Lh = {};
  rn && (Lh = document.createElement("div").style, "AnimationEvent" in window || (delete ss.animationend.animation, delete ss.animationiteration.animation, delete ss.animationstart.animation), "TransitionEvent" in window || delete ss.transitionend.transition);
  function za(n) {
    if (oc[n]) return oc[n];
    if (!ss[n]) return n;
    var l = ss[n], s;
    for (s in l) if (l.hasOwnProperty(s) && s in Lh) return oc[n] = l[s];
    return n;
  }
  var Uh = za("animationend"), $h = za("animationiteration"), Hh = za("animationstart"), Xy = za("transitionrun"), Fy = za("transitionstart"), Zy = za("transitioncancel"), qh = za("transitionend"), Vh = /* @__PURE__ */ new Map(), cc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  cc.push("scrollEnd");
  function el(n, l) {
    Vh.set(n, l), il(l, [n]);
  }
  var Bh = /* @__PURE__ */ new WeakMap();
  function An(n, l) {
    if (typeof n == "object" && n !== null) {
      var s = Bh.get(n);
      return s !== void 0 ? s : (l = { value: n, source: l, stack: dn(l) }, Bh.set(n, l), l);
    }
    return { value: n, source: l, stack: dn(l) };
  }
  var Cn = [], is = 0, uc = 0;
  function wr() {
    for (var n = is, l = uc = is = 0; l < n; ) {
      var s = Cn[l];
      Cn[l++] = null;
      var r = Cn[l];
      Cn[l++] = null;
      var h = Cn[l];
      Cn[l++] = null;
      var y = Cn[l];
      if (Cn[l++] = null, r !== null && h !== null) {
        var _ = r.pending;
        _ === null ? h.next = h : (h.next = _.next, _.next = h), r.pending = h;
      }
      y !== 0 && Yh(s, h, y);
    }
  }
  function Nr(n, l, s, r) {
    Cn[is++] = n, Cn[is++] = l, Cn[is++] = s, Cn[is++] = r, uc |= r, n.lanes |= r, n = n.alternate, n !== null && (n.lanes |= r);
  }
  function fc(n, l, s, r) {
    return Nr(n, l, s, r), Tr(n);
  }
  function rs(n, l) {
    return Nr(n, null, null, l), Tr(n);
  }
  function Yh(n, l, s) {
    n.lanes |= s;
    var r = n.alternate;
    r !== null && (r.lanes |= s);
    for (var h = false, y = n.return; y !== null; ) y.childLanes |= s, r = y.alternate, r !== null && (r.childLanes |= s), y.tag === 22 && (n = y.stateNode, n === null || n._visibility & 1 || (h = true)), n = y, y = y.return;
    return n.tag === 3 ? (y = n.stateNode, h && l !== null && (h = 31 - at(s), n = y.hiddenUpdates, r = n[h], r === null ? n[h] = [l] : r.push(l), l.lane = s | 536870912), y) : null;
  }
  function Tr(n) {
    if (50 < ki) throw ki = 0, yu = null, Error(i(185));
    for (var l = n.return; l !== null; ) n = l, l = n.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var os = {};
  function Ky(n, l, s, r) {
    this.tag = n, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function gn(n, l, s, r) {
    return new Ky(n, l, s, r);
  }
  function hc(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function jl(n, l) {
    var s = n.alternate;
    return s === null ? (s = gn(n.tag, l, n.key, n.mode), s.elementType = n.elementType, s.type = n.type, s.stateNode = n.stateNode, s.alternate = n, n.alternate = s) : (s.pendingProps = l, s.type = n.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = n.flags & 65011712, s.childLanes = n.childLanes, s.lanes = n.lanes, s.child = n.child, s.memoizedProps = n.memoizedProps, s.memoizedState = n.memoizedState, s.updateQueue = n.updateQueue, l = n.dependencies, s.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, s.sibling = n.sibling, s.index = n.index, s.ref = n.ref, s.refCleanup = n.refCleanup, s;
  }
  function Gh(n, l) {
    n.flags &= 65011714;
    var s = n.alternate;
    return s === null ? (n.childLanes = 0, n.lanes = l, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = s.childLanes, n.lanes = s.lanes, n.child = s.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = s.memoizedProps, n.memoizedState = s.memoizedState, n.updateQueue = s.updateQueue, n.type = s.type, l = s.dependencies, n.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }), n;
  }
  function kr(n, l, s, r, h, y) {
    var _ = 0;
    if (r = n, typeof n == "function") hc(n) && (_ = 1);
    else if (typeof n == "string") _ = P2(n, s, ce.current) ? 26 : n === "html" || n === "head" || n === "body" ? 27 : 5;
    else e: switch (n) {
      case q:
        return n = gn(31, s, l, h), n.elementType = q, n.lanes = y, n;
      case S:
        return Da(s.children, h, y, l);
      case j:
        _ = 8, h |= 24;
        break;
      case w:
        return n = gn(12, s, l, h | 2), n.elementType = w, n.lanes = y, n;
      case E:
        return n = gn(13, s, l, h), n.elementType = E, n.lanes = y, n;
      case L:
        return n = gn(19, s, l, h), n.elementType = L, n.lanes = y, n;
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case N:
          case M:
            _ = 10;
            break e;
          case k:
            _ = 9;
            break e;
          case C:
            _ = 11;
            break e;
          case A:
            _ = 14;
            break e;
          case z:
            _ = 16, r = null;
            break e;
        }
        _ = 29, s = Error(i(130, n === null ? "null" : typeof n, "")), r = null;
    }
    return l = gn(_, s, l, h), l.elementType = n, l.type = r, l.lanes = y, l;
  }
  function Da(n, l, s, r) {
    return n = gn(7, n, r, l), n.lanes = s, n;
  }
  function dc(n, l, s) {
    return n = gn(6, n, null, l), n.lanes = s, n;
  }
  function mc(n, l, s) {
    return l = gn(4, n.children !== null ? n.children : [], n.key, l), l.lanes = s, l.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, l;
  }
  var cs = [], us = 0, Mr = null, Ar = 0, En = [], On = 0, Ra = null, _l4 = 1, wl = "";
  function La(n, l) {
    cs[us++] = Ar, cs[us++] = Mr, Mr = n, Ar = l;
  }
  function Qh(n, l, s) {
    En[On++] = _l4, En[On++] = wl, En[On++] = Ra, Ra = n;
    var r = _l4;
    n = wl;
    var h = 32 - at(r) - 1;
    r &= ~(1 << h), s += 1;
    var y = 32 - at(l) + h;
    if (30 < y) {
      var _ = h - h % 5;
      y = (r & (1 << _) - 1).toString(32), r >>= _, h -= _, _l4 = 1 << 32 - at(l) + h | s << h | r, wl = y + n;
    } else _l4 = 1 << y | s << h | r, wl = n;
  }
  function gc(n) {
    n.return !== null && (La(n, 1), Qh(n, 1, 0));
  }
  function pc(n) {
    for (; n === Mr; ) Mr = cs[--us], cs[us] = null, Ar = cs[--us], cs[us] = null;
    for (; n === Ra; ) Ra = En[--On], En[On] = null, wl = En[--On], En[On] = null, _l4 = En[--On], En[On] = null;
  }
  var nn = null, dt = null, Ge = false, Ua = null, ul = false, yc = Error(i(519));
  function $a(n) {
    var l = Error(i(418, ""));
    throw si(An(l, n)), yc;
  }
  function Xh(n) {
    var l = n.stateNode, s = n.type, r = n.memoizedProps;
    switch (l[Ct] = n, l[Gt] = r, s) {
      case "dialog":
        Re("cancel", l), Re("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        Re("load", l);
        break;
      case "video":
      case "audio":
        for (s = 0; s < Ai.length; s++) Re(Ai[s], l);
        break;
      case "source":
        Re("error", l);
        break;
      case "img":
      case "image":
      case "link":
        Re("error", l), Re("load", l);
        break;
      case "details":
        Re("toggle", l);
        break;
      case "input":
        Re("invalid", l), yr(l, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, true), Zn(l);
        break;
      case "select":
        Re("invalid", l);
        break;
      case "textarea":
        Re("invalid", l), In(l, r.value, r.defaultValue, r.children), Zn(l);
    }
    s = r.children, typeof s != "string" && typeof s != "number" && typeof s != "bigint" || l.textContent === "" + s || r.suppressHydrationWarning === true || c1(l.textContent, s) ? (r.popover != null && (Re("beforetoggle", l), Re("toggle", l)), r.onScroll != null && Re("scroll", l), r.onScrollEnd != null && Re("scrollend", l), r.onClick != null && (l.onclick = co), l = true) : l = false, l || $a(n);
  }
  function Fh(n) {
    for (nn = n.return; nn; ) switch (nn.tag) {
      case 5:
      case 13:
        ul = false;
        return;
      case 27:
      case 3:
        ul = true;
        return;
      default:
        nn = nn.return;
    }
  }
  function li(n) {
    if (n !== nn) return false;
    if (!Ge) return Fh(n), Ge = true, false;
    var l = n.tag, s;
    if ((s = l !== 3 && l !== 27) && ((s = l === 5) && (s = n.type, s = !(s !== "form" && s !== "button") || zu(n.type, n.memoizedProps)), s = !s), s && dt && $a(n), Fh(n), l === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(i(317));
      e: {
        for (n = n.nextSibling, l = 0; n; ) {
          if (n.nodeType === 8) if (s = n.data, s === "/$") {
            if (l === 0) {
              dt = nl(n.nextSibling);
              break e;
            }
            l--;
          } else s !== "$" && s !== "$!" && s !== "$?" || l++;
          n = n.nextSibling;
        }
        dt = null;
      }
    } else l === 27 ? (l = dt, oa(n.type) ? (n = Uu, Uu = null, dt = n) : dt = l) : dt = nn ? nl(n.stateNode.nextSibling) : null;
    return true;
  }
  function ai() {
    dt = nn = null, Ge = false;
  }
  function Zh() {
    var n = Ua;
    return n !== null && (fn === null ? fn = n : fn.push.apply(fn, n), Ua = null), n;
  }
  function si(n) {
    Ua === null ? Ua = [n] : Ua.push(n);
  }
  var bc = Y(null), Ha = null, Nl = null;
  function Fl(n, l, s) {
    te(bc, l._currentValue), l._currentValue = s;
  }
  function Tl(n) {
    n._currentValue = bc.current, re(bc);
  }
  function vc(n, l, s) {
    for (; n !== null; ) {
      var r = n.alternate;
      if ((n.childLanes & l) !== l ? (n.childLanes |= l, r !== null && (r.childLanes |= l)) : r !== null && (r.childLanes & l) !== l && (r.childLanes |= l), n === s) break;
      n = n.return;
    }
  }
  function xc(n, l, s, r) {
    var h = n.child;
    for (h !== null && (h.return = n); h !== null; ) {
      var y = h.dependencies;
      if (y !== null) {
        var _ = h.child;
        y = y.firstContext;
        e: for (; y !== null; ) {
          var T = y;
          y = h;
          for (var D = 0; D < l.length; D++) if (T.context === l[D]) {
            y.lanes |= s, T = y.alternate, T !== null && (T.lanes |= s), vc(y.return, s, n), r || (_ = null);
            break e;
          }
          y = T.next;
        }
      } else if (h.tag === 18) {
        if (_ = h.return, _ === null) throw Error(i(341));
        _.lanes |= s, y = _.alternate, y !== null && (y.lanes |= s), vc(_, s, n), _ = null;
      } else _ = h.child;
      if (_ !== null) _.return = h;
      else for (_ = h; _ !== null; ) {
        if (_ === n) {
          _ = null;
          break;
        }
        if (h = _.sibling, h !== null) {
          h.return = _.return, _ = h;
          break;
        }
        _ = _.return;
      }
      h = _;
    }
  }
  function ii(n, l, s, r) {
    n = null;
    for (var h = l, y = false; h !== null; ) {
      if (!y) {
        if ((h.flags & 524288) !== 0) y = true;
        else if ((h.flags & 262144) !== 0) break;
      }
      if (h.tag === 10) {
        var _ = h.alternate;
        if (_ === null) throw Error(i(387));
        if (_ = _.memoizedProps, _ !== null) {
          var T = h.type;
          mn(h.pendingProps.value, _.value) || (n !== null ? n.push(T) : n = [T]);
        }
      } else if (h === Ae.current) {
        if (_ = h.alternate, _ === null) throw Error(i(387));
        _.memoizedState.memoizedState !== h.memoizedState.memoizedState && (n !== null ? n.push(Ri) : n = [Ri]);
      }
      h = h.return;
    }
    n !== null && xc(l, n, s, r), l.flags |= 262144;
  }
  function Cr(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!mn(n.context._currentValue, n.memoizedValue)) return true;
      n = n.next;
    }
    return false;
  }
  function qa(n) {
    Ha = n, Nl = null, n = n.dependencies, n !== null && (n.firstContext = null);
  }
  function Qt(n) {
    return Kh(Ha, n);
  }
  function Er(n, l) {
    return Ha === null && qa(n), Kh(n, l);
  }
  function Kh(n, l) {
    var s = l._currentValue;
    if (l = { context: l, memoizedValue: s, next: null }, Nl === null) {
      if (n === null) throw Error(i(308));
      Nl = l, n.dependencies = { lanes: 0, firstContext: l }, n.flags |= 524288;
    } else Nl = Nl.next = l;
    return s;
  }
  var Iy = typeof AbortController < "u" ? AbortController : function() {
    var n = [], l = this.signal = { aborted: false, addEventListener: function(s, r) {
      n.push(r);
    } };
    this.abort = function() {
      l.aborted = true, n.forEach(function(s) {
        return s();
      });
    };
  }, Py = t.unstable_scheduleCallback, Wy = t.unstable_NormalPriority, Tt = { $$typeof: M, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Sc() {
    return { controller: new Iy(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function ri(n) {
    n.refCount--, n.refCount === 0 && Py(Wy, function() {
      n.controller.abort();
    });
  }
  var oi = null, jc = 0, fs = 0, hs = null;
  function Jy(n, l) {
    if (oi === null) {
      var s = oi = [];
      jc = 0, fs = wu(), hs = { status: "pending", value: void 0, then: function(r) {
        s.push(r);
      } };
    }
    return jc++, l.then(Ih, Ih), l;
  }
  function Ih() {
    if (--jc === 0 && oi !== null) {
      hs !== null && (hs.status = "fulfilled");
      var n = oi;
      oi = null, fs = 0, hs = null;
      for (var l = 0; l < n.length; l++) (0, n[l])();
    }
  }
  function e2(n, l) {
    var s = [], r = { status: "pending", value: null, reason: null, then: function(h) {
      s.push(h);
    } };
    return n.then(function() {
      r.status = "fulfilled", r.value = l;
      for (var h = 0; h < s.length; h++) (0, s[h])(l);
    }, function(h) {
      for (r.status = "rejected", r.reason = h, h = 0; h < s.length; h++) (0, s[h])(void 0);
    }), r;
  }
  var Ph = R.S;
  R.S = function(n, l) {
    typeof l == "object" && l !== null && typeof l.then == "function" && Jy(n, l), Ph !== null && Ph(n, l);
  };
  var Va = Y(null);
  function _c3() {
    var n = Va.current;
    return n !== null ? n : et.pooledCache;
  }
  function Or(n, l) {
    l === null ? te(Va, Va.current) : te(Va, l.pool);
  }
  function Wh() {
    var n = _c3();
    return n === null ? null : { parent: Tt._currentValue, pool: n };
  }
  var ci = Error(i(460)), Jh = Error(i(474)), zr = Error(i(542)), wc = { then: function() {
  } };
  function ed(n) {
    return n = n.status, n === "fulfilled" || n === "rejected";
  }
  function Dr() {
  }
  function td(n, l, s) {
    switch (s = n[s], s === void 0 ? n.push(l) : s !== l && (l.then(Dr, Dr), l = s), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw n = l.reason, ld(n), n;
      default:
        if (typeof l.status == "string") l.then(Dr, Dr);
        else {
          if (n = et, n !== null && 100 < n.shellSuspendCounter) throw Error(i(482));
          n = l, n.status = "pending", n.then(function(r) {
            if (l.status === "pending") {
              var h = l;
              h.status = "fulfilled", h.value = r;
            }
          }, function(r) {
            if (l.status === "pending") {
              var h = l;
              h.status = "rejected", h.reason = r;
            }
          });
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw n = l.reason, ld(n), n;
        }
        throw ui = l, ci;
    }
  }
  var ui = null;
  function nd() {
    if (ui === null) throw Error(i(459));
    var n = ui;
    return ui = null, n;
  }
  function ld(n) {
    if (n === ci || n === zr) throw Error(i(483));
  }
  var Zl = false;
  function Nc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Tc(n, l) {
    n = n.updateQueue, l.updateQueue === n && (l.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, callbacks: null });
  }
  function Kl(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Il(n, l, s) {
    var r = n.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Xe & 2) !== 0) {
      var h = r.pending;
      return h === null ? l.next = l : (l.next = h.next, h.next = l), r.pending = l, l = Tr(n), Yh(n, null, s), l;
    }
    return Nr(n, r, l, s), Tr(n);
  }
  function fi(n, l, s) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (s & 4194048) !== 0)) {
      var r = l.lanes;
      r &= n.pendingLanes, s |= r, l.lanes = s, Gn(n, s);
    }
  }
  function kc(n, l) {
    var s = n.updateQueue, r = n.alternate;
    if (r !== null && (r = r.updateQueue, s === r)) {
      var h = null, y = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var _ = { lane: s.lane, tag: s.tag, payload: s.payload, callback: null, next: null };
          y === null ? h = y = _ : y = y.next = _, s = s.next;
        } while (s !== null);
        y === null ? h = y = l : y = y.next = l;
      } else h = y = l;
      s = { baseState: r.baseState, firstBaseUpdate: h, lastBaseUpdate: y, shared: r.shared, callbacks: r.callbacks }, n.updateQueue = s;
      return;
    }
    n = s.lastBaseUpdate, n === null ? s.firstBaseUpdate = l : n.next = l, s.lastBaseUpdate = l;
  }
  var Mc = false;
  function hi() {
    if (Mc) {
      var n = hs;
      if (n !== null) throw n;
    }
  }
  function di(n, l, s, r) {
    Mc = false;
    var h = n.updateQueue;
    Zl = false;
    var y = h.firstBaseUpdate, _ = h.lastBaseUpdate, T = h.shared.pending;
    if (T !== null) {
      h.shared.pending = null;
      var D = T, Z = D.next;
      D.next = null, _ === null ? y = Z : _.next = Z, _ = D;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, T = le.lastBaseUpdate, T !== _ && (T === null ? le.firstBaseUpdate = Z : T.next = Z, le.lastBaseUpdate = D));
    }
    if (y !== null) {
      var ie = h.baseState;
      _ = 0, le = Z = D = null, T = y;
      do {
        var I = T.lane & -536870913, P = I !== T.lane;
        if (P ? (qe & I) === I : (r & I) === I) {
          I !== 0 && I === fs && (Mc = true), le !== null && (le = le.next = { lane: 0, tag: T.tag, payload: T.payload, callback: null, next: null });
          e: {
            var Te = n, _e9 = T;
            I = l;
            var Ie = s;
            switch (_e9.tag) {
              case 1:
                if (Te = _e9.payload, typeof Te == "function") {
                  ie = Te.call(Ie, ie, I);
                  break e;
                }
                ie = Te;
                break e;
              case 3:
                Te.flags = Te.flags & -65537 | 128;
              case 0:
                if (Te = _e9.payload, I = typeof Te == "function" ? Te.call(Ie, ie, I) : Te, I == null) break e;
                ie = p({}, ie, I);
                break e;
              case 2:
                Zl = true;
            }
          }
          I = T.callback, I !== null && (n.flags |= 64, P && (n.flags |= 8192), P = h.callbacks, P === null ? h.callbacks = [I] : P.push(I));
        } else P = { lane: I, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, le === null ? (Z = le = P, D = ie) : le = le.next = P, _ |= I;
        if (T = T.next, T === null) {
          if (T = h.shared.pending, T === null) break;
          P = T, T = P.next, P.next = null, h.lastBaseUpdate = P, h.shared.pending = null;
        }
      } while (true);
      le === null && (D = ie), h.baseState = D, h.firstBaseUpdate = Z, h.lastBaseUpdate = le, y === null && (h.shared.lanes = 0), aa |= _, n.lanes = _, n.memoizedState = ie;
    }
  }
  function ad(n, l) {
    if (typeof n != "function") throw Error(i(191, n));
    n.call(l);
  }
  function sd(n, l) {
    var s = n.callbacks;
    if (s !== null) for (n.callbacks = null, n = 0; n < s.length; n++) ad(s[n], l);
  }
  var ds = Y(null), Rr = Y(0);
  function id(n, l) {
    n = zl, te(Rr, n), te(ds, l), zl = n | l.baseLanes;
  }
  function Ac() {
    te(Rr, zl), te(ds, ds.current);
  }
  function Cc() {
    zl = Rr.current, re(ds), re(Rr);
  }
  var Pl = 0, Ce = null, Ze = null, jt = null, Lr = false, ms = false, Ba = false, Ur = 0, mi = 0, gs = null, t2 = 0;
  function yt() {
    throw Error(i(321));
  }
  function Ec(n, l) {
    if (l === null) return false;
    for (var s = 0; s < l.length && s < n.length; s++) if (!mn(n[s], l[s])) return false;
    return true;
  }
  function Oc(n, l, s, r, h, y) {
    return Pl = y, Ce = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, R.H = n === null || n.memoizedState === null ? Yd : Gd, Ba = false, y = s(r, h), Ba = false, ms && (y = od(l, s, r, h)), rd(n), y;
  }
  function rd(n) {
    R.H = Yr;
    var l = Ze !== null && Ze.next !== null;
    if (Pl = 0, jt = Ze = Ce = null, Lr = false, mi = 0, gs = null, l) throw Error(i(300));
    n === null || Ot || (n = n.dependencies, n !== null && Cr(n) && (Ot = true));
  }
  function od(n, l, s, r) {
    Ce = n;
    var h = 0;
    do {
      if (ms && (gs = null), mi = 0, ms = false, 25 <= h) throw Error(i(301));
      if (h += 1, jt = Ze = null, n.updateQueue != null) {
        var y = n.updateQueue;
        y.lastEffect = null, y.events = null, y.stores = null, y.memoCache != null && (y.memoCache.index = 0);
      }
      R.H = o2, y = l(s, r);
    } while (ms);
    return y;
  }
  function n2() {
    var n = R.H, l = n.useState()[0];
    return l = typeof l.then == "function" ? gi(l) : l, n = n.useState()[0], (Ze !== null ? Ze.memoizedState : null) !== n && (Ce.flags |= 1024), l;
  }
  function zc() {
    var n = Ur !== 0;
    return Ur = 0, n;
  }
  function Dc(n, l, s) {
    l.updateQueue = n.updateQueue, l.flags &= -2053, n.lanes &= ~s;
  }
  function Rc(n) {
    if (Lr) {
      for (n = n.memoizedState; n !== null; ) {
        var l = n.queue;
        l !== null && (l.pending = null), n = n.next;
      }
      Lr = false;
    }
    Pl = 0, jt = Ze = Ce = null, ms = false, mi = Ur = 0, gs = null;
  }
  function cn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return jt === null ? Ce.memoizedState = jt = n : jt = jt.next = n, jt;
  }
  function _t10() {
    if (Ze === null) {
      var n = Ce.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ze.next;
    var l = jt === null ? Ce.memoizedState : jt.next;
    if (l !== null) jt = l, Ze = n;
    else {
      if (n === null) throw Ce.alternate === null ? Error(i(467)) : Error(i(310));
      Ze = n, n = { memoizedState: Ze.memoizedState, baseState: Ze.baseState, baseQueue: Ze.baseQueue, queue: Ze.queue, next: null }, jt === null ? Ce.memoizedState = jt = n : jt = jt.next = n;
    }
    return jt;
  }
  function Lc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function gi(n) {
    var l = mi;
    return mi += 1, gs === null && (gs = []), n = td(gs, n, l), l = Ce, (jt === null ? l.memoizedState : jt.next) === null && (l = l.alternate, R.H = l === null || l.memoizedState === null ? Yd : Gd), n;
  }
  function $r(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return gi(n);
      if (n.$$typeof === M) return Qt(n);
    }
    throw Error(i(438, String(n)));
  }
  function Uc(n) {
    var l = null, s = Ce.updateQueue;
    if (s !== null && (l = s.memoCache), l == null) {
      var r = Ce.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (l = { data: r.data.map(function(h) {
        return h.slice();
      }), index: 0 })));
    }
    if (l == null && (l = { data: [], index: 0 }), s === null && (s = Lc(), Ce.updateQueue = s), s.memoCache = l, s = l.data[l.index], s === void 0) for (s = l.data[l.index] = Array(n), r = 0; r < n; r++) s[r] = B;
    return l.index++, s;
  }
  function kl(n, l) {
    return typeof l == "function" ? l(n) : l;
  }
  function Hr(n) {
    var l = _t10();
    return $c(l, Ze, n);
  }
  function $c(n, l, s) {
    var r = n.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = s;
    var h = n.baseQueue, y = r.pending;
    if (y !== null) {
      if (h !== null) {
        var _ = h.next;
        h.next = y.next, y.next = _;
      }
      l.baseQueue = h = y, r.pending = null;
    }
    if (y = n.baseState, h === null) n.memoizedState = y;
    else {
      l = h.next;
      var T = _ = null, D = null, Z = l, le = false;
      do {
        var ie = Z.lane & -536870913;
        if (ie !== Z.lane ? (qe & ie) === ie : (Pl & ie) === ie) {
          var I = Z.revertLane;
          if (I === 0) D !== null && (D = D.next = { lane: 0, revertLane: 0, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }), ie === fs && (le = true);
          else if ((Pl & I) === I) {
            Z = Z.next, I === fs && (le = true);
            continue;
          } else ie = { lane: 0, revertLane: Z.revertLane, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }, D === null ? (T = D = ie, _ = y) : D = D.next = ie, Ce.lanes |= I, aa |= I;
          ie = Z.action, Ba && s(y, ie), y = Z.hasEagerState ? Z.eagerState : s(y, ie);
        } else I = { lane: ie, revertLane: Z.revertLane, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }, D === null ? (T = D = I, _ = y) : D = D.next = I, Ce.lanes |= ie, aa |= ie;
        Z = Z.next;
      } while (Z !== null && Z !== l);
      if (D === null ? _ = y : D.next = T, !mn(y, n.memoizedState) && (Ot = true, le && (s = hs, s !== null))) throw s;
      n.memoizedState = y, n.baseState = _, n.baseQueue = D, r.lastRenderedState = y;
    }
    return h === null && (r.lanes = 0), [n.memoizedState, r.dispatch];
  }
  function Hc(n) {
    var l = _t10(), s = l.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = n;
    var r = s.dispatch, h = s.pending, y = l.memoizedState;
    if (h !== null) {
      s.pending = null;
      var _ = h = h.next;
      do
        y = n(y, _.action), _ = _.next;
      while (_ !== h);
      mn(y, l.memoizedState) || (Ot = true), l.memoizedState = y, l.baseQueue === null && (l.baseState = y), s.lastRenderedState = y;
    }
    return [y, r];
  }
  function cd(n, l, s) {
    var r = Ce, h = _t10(), y = Ge;
    if (y) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else s = l();
    var _ = !mn((Ze || h).memoizedState, s);
    _ && (h.memoizedState = s, Ot = true), h = h.queue;
    var T = hd.bind(null, r, h, n);
    if (pi(2048, 8, T, [n]), h.getSnapshot !== l || _ || jt !== null && jt.memoizedState.tag & 1) {
      if (r.flags |= 2048, ps(9, qr(), fd.bind(null, r, h, s, l), null), et === null) throw Error(i(349));
      y || (Pl & 124) !== 0 || ud(r, l, s);
    }
    return s;
  }
  function ud(n, l, s) {
    n.flags |= 16384, n = { getSnapshot: l, value: s }, l = Ce.updateQueue, l === null ? (l = Lc(), Ce.updateQueue = l, l.stores = [n]) : (s = l.stores, s === null ? l.stores = [n] : s.push(n));
  }
  function fd(n, l, s, r) {
    l.value = s, l.getSnapshot = r, dd(l) && md(n);
  }
  function hd(n, l, s) {
    return s(function() {
      dd(l) && md(n);
    });
  }
  function dd(n) {
    var l = n.getSnapshot;
    n = n.value;
    try {
      var s = l();
      return !mn(n, s);
    } catch {
      return true;
    }
  }
  function md(n) {
    var l = rs(n, 2);
    l !== null && xn(l, n, 2);
  }
  function qc(n) {
    var l = cn();
    if (typeof n == "function") {
      var s = n;
      if (n = s(), Ba) {
        Nt(true);
        try {
          s();
        } finally {
          Nt(false);
        }
      }
    }
    return l.memoizedState = l.baseState = n, l.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: kl, lastRenderedState: n }, l;
  }
  function gd(n, l, s, r) {
    return n.baseState = s, $c(n, Ze, typeof r == "function" ? r : kl);
  }
  function l2(n, l, s, r, h) {
    if (Br(n)) throw Error(i(485));
    if (n = l.action, n !== null) {
      var y = { payload: h, action: n, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(_) {
        y.listeners.push(_);
      } };
      R.T !== null ? s(true) : y.isTransition = false, r(y), s = l.pending, s === null ? (y.next = l.pending = y, pd(l, y)) : (y.next = s.next, l.pending = s.next = y);
    }
  }
  function pd(n, l) {
    var s = l.action, r = l.payload, h = n.state;
    if (l.isTransition) {
      var y = R.T, _ = {};
      R.T = _;
      try {
        var T = s(h, r), D = R.S;
        D !== null && D(_, T), yd(n, l, T);
      } catch (Z) {
        Vc(n, l, Z);
      } finally {
        R.T = y;
      }
    } else try {
      y = s(h, r), yd(n, l, y);
    } catch (Z) {
      Vc(n, l, Z);
    }
  }
  function yd(n, l, s) {
    s !== null && typeof s == "object" && typeof s.then == "function" ? s.then(function(r) {
      bd(n, l, r);
    }, function(r) {
      return Vc(n, l, r);
    }) : bd(n, l, s);
  }
  function bd(n, l, s) {
    l.status = "fulfilled", l.value = s, vd(l), n.state = s, l = n.pending, l !== null && (s = l.next, s === l ? n.pending = null : (s = s.next, l.next = s, pd(n, s)));
  }
  function Vc(n, l, s) {
    var r = n.pending;
    if (n.pending = null, r !== null) {
      r = r.next;
      do
        l.status = "rejected", l.reason = s, vd(l), l = l.next;
      while (l !== r);
    }
    n.action = null;
  }
  function vd(n) {
    n = n.listeners;
    for (var l = 0; l < n.length; l++) (0, n[l])();
  }
  function xd(n, l) {
    return l;
  }
  function Sd(n, l) {
    if (Ge) {
      var s = et.formState;
      if (s !== null) {
        e: {
          var r = Ce;
          if (Ge) {
            if (dt) {
              t: {
                for (var h = dt, y = ul; h.nodeType !== 8; ) {
                  if (!y) {
                    h = null;
                    break t;
                  }
                  if (h = nl(h.nextSibling), h === null) {
                    h = null;
                    break t;
                  }
                }
                y = h.data, h = y === "F!" || y === "F" ? h : null;
              }
              if (h) {
                dt = nl(h.nextSibling), r = h.data === "F!";
                break e;
              }
            }
            $a(r);
          }
          r = false;
        }
        r && (l = s[0]);
      }
    }
    return s = cn(), s.memoizedState = s.baseState = l, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: xd, lastRenderedState: l }, s.queue = r, s = qd.bind(null, Ce, r), r.dispatch = s, r = qc(false), y = Xc.bind(null, Ce, false, r.queue), r = cn(), h = { state: l, dispatch: null, action: n, pending: null }, r.queue = h, s = l2.bind(null, Ce, h, y, s), h.dispatch = s, r.memoizedState = n, [l, s, false];
  }
  function jd(n) {
    var l = _t10();
    return _d3(l, Ze, n);
  }
  function _d3(n, l, s) {
    if (l = $c(n, l, xd)[0], n = Hr(kl)[0], typeof l == "object" && l !== null && typeof l.then == "function") try {
      var r = gi(l);
    } catch (_) {
      throw _ === ci ? zr : _;
    }
    else r = l;
    l = _t10();
    var h = l.queue, y = h.dispatch;
    return s !== l.memoizedState && (Ce.flags |= 2048, ps(9, qr(), a2.bind(null, h, s), null)), [r, y, n];
  }
  function a2(n, l) {
    n.action = l;
  }
  function wd(n) {
    var l = _t10(), s = Ze;
    if (s !== null) return _d3(l, s, n);
    _t10(), l = l.memoizedState, s = _t10();
    var r = s.queue.dispatch;
    return s.memoizedState = n, [l, r, false];
  }
  function ps(n, l, s, r) {
    return n = { tag: n, create: s, deps: r, inst: l, next: null }, l = Ce.updateQueue, l === null && (l = Lc(), Ce.updateQueue = l), s = l.lastEffect, s === null ? l.lastEffect = n.next = n : (r = s.next, s.next = n, n.next = r, l.lastEffect = n), n;
  }
  function qr() {
    return { destroy: void 0, resource: void 0 };
  }
  function Nd() {
    return _t10().memoizedState;
  }
  function Vr(n, l, s, r) {
    var h = cn();
    r = r === void 0 ? null : r, Ce.flags |= n, h.memoizedState = ps(1 | l, qr(), s, r);
  }
  function pi(n, l, s, r) {
    var h = _t10();
    r = r === void 0 ? null : r;
    var y = h.memoizedState.inst;
    Ze !== null && r !== null && Ec(r, Ze.memoizedState.deps) ? h.memoizedState = ps(l, y, s, r) : (Ce.flags |= n, h.memoizedState = ps(1 | l, y, s, r));
  }
  function Td(n, l) {
    Vr(8390656, 8, n, l);
  }
  function kd(n, l) {
    pi(2048, 8, n, l);
  }
  function Md(n, l) {
    return pi(4, 2, n, l);
  }
  function Ad(n, l) {
    return pi(4, 4, n, l);
  }
  function Cd(n, l) {
    if (typeof l == "function") {
      n = n();
      var s = l(n);
      return function() {
        typeof s == "function" ? s() : l(null);
      };
    }
    if (l != null) return n = n(), l.current = n, function() {
      l.current = null;
    };
  }
  function Ed(n, l, s) {
    s = s != null ? s.concat([n]) : null, pi(4, 4, Cd.bind(null, l, n), s);
  }
  function Bc() {
  }
  function Od(n, l) {
    var s = _t10();
    l = l === void 0 ? null : l;
    var r = s.memoizedState;
    return l !== null && Ec(l, r[1]) ? r[0] : (s.memoizedState = [n, l], n);
  }
  function zd(n, l) {
    var s = _t10();
    l = l === void 0 ? null : l;
    var r = s.memoizedState;
    if (l !== null && Ec(l, r[1])) return r[0];
    if (r = n(), Ba) {
      Nt(true);
      try {
        n();
      } finally {
        Nt(false);
      }
    }
    return s.memoizedState = [r, l], r;
  }
  function Yc(n, l, s) {
    return s === void 0 || (Pl & 1073741824) !== 0 ? n.memoizedState = l : (n.memoizedState = s, n = L0(), Ce.lanes |= n, aa |= n, s);
  }
  function Dd(n, l, s, r) {
    return mn(s, l) ? s : ds.current !== null ? (n = Yc(n, s, r), mn(n, l) || (Ot = true), n) : (Pl & 42) === 0 ? (Ot = true, n.memoizedState = s) : (n = L0(), Ce.lanes |= n, aa |= n, l);
  }
  function Rd(n, l, s, r, h) {
    var y = G.p;
    G.p = y !== 0 && 8 > y ? y : 8;
    var _ = R.T, T = {};
    R.T = T, Xc(n, false, l, s);
    try {
      var D = h(), Z = R.S;
      if (Z !== null && Z(T, D), D !== null && typeof D == "object" && typeof D.then == "function") {
        var le = e2(D, r);
        yi(n, l, le, vn(n));
      } else yi(n, l, r, vn(n));
    } catch (ie) {
      yi(n, l, { then: function() {
      }, status: "rejected", reason: ie }, vn());
    } finally {
      G.p = y, R.T = _;
    }
  }
  function s2() {
  }
  function Gc(n, l, s, r) {
    if (n.tag !== 5) throw Error(i(476));
    var h = Ld(n).queue;
    Rd(n, h, l, ne, s === null ? s2 : function() {
      return Ud(n), s(r);
    });
  }
  function Ld(n) {
    var l = n.memoizedState;
    if (l !== null) return l;
    l = { memoizedState: ne, baseState: ne, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: kl, lastRenderedState: ne }, next: null };
    var s = {};
    return l.next = { memoizedState: s, baseState: s, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: kl, lastRenderedState: s }, next: null }, n.memoizedState = l, n = n.alternate, n !== null && (n.memoizedState = l), l;
  }
  function Ud(n) {
    var l = Ld(n).next.queue;
    yi(n, l, {}, vn());
  }
  function Qc() {
    return Qt(Ri);
  }
  function $d() {
    return _t10().memoizedState;
  }
  function Hd() {
    return _t10().memoizedState;
  }
  function i2(n) {
    for (var l = n.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var s = vn();
          n = Kl(s);
          var r = Il(l, n, s);
          r !== null && (xn(r, l, s), fi(r, l, s)), l = { cache: Sc() }, n.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function r2(n, l, s) {
    var r = vn();
    s = { lane: r, revertLane: 0, action: s, hasEagerState: false, eagerState: null, next: null }, Br(n) ? Vd(l, s) : (s = fc(n, l, s, r), s !== null && (xn(s, n, r), Bd(s, l, r)));
  }
  function qd(n, l, s) {
    var r = vn();
    yi(n, l, s, r);
  }
  function yi(n, l, s, r) {
    var h = { lane: r, revertLane: 0, action: s, hasEagerState: false, eagerState: null, next: null };
    if (Br(n)) Vd(l, h);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = l.lastRenderedReducer, y !== null)) try {
        var _ = l.lastRenderedState, T = y(_, s);
        if (h.hasEagerState = true, h.eagerState = T, mn(T, _)) return Nr(n, l, h, 0), et === null && wr(), false;
      } catch {
      } finally {
      }
      if (s = fc(n, l, h, r), s !== null) return xn(s, n, r), Bd(s, l, r), true;
    }
    return false;
  }
  function Xc(n, l, s, r) {
    if (r = { lane: 2, revertLane: wu(), action: r, hasEagerState: false, eagerState: null, next: null }, Br(n)) {
      if (l) throw Error(i(479));
    } else l = fc(n, s, r, 2), l !== null && xn(l, n, 2);
  }
  function Br(n) {
    var l = n.alternate;
    return n === Ce || l !== null && l === Ce;
  }
  function Vd(n, l) {
    ms = Lr = true;
    var s = n.pending;
    s === null ? l.next = l : (l.next = s.next, s.next = l), n.pending = l;
  }
  function Bd(n, l, s) {
    if ((s & 4194048) !== 0) {
      var r = l.lanes;
      r &= n.pendingLanes, s |= r, l.lanes = s, Gn(n, s);
    }
  }
  var Yr = { readContext: Qt, use: $r, useCallback: yt, useContext: yt, useEffect: yt, useImperativeHandle: yt, useLayoutEffect: yt, useInsertionEffect: yt, useMemo: yt, useReducer: yt, useRef: yt, useState: yt, useDebugValue: yt, useDeferredValue: yt, useTransition: yt, useSyncExternalStore: yt, useId: yt, useHostTransitionStatus: yt, useFormState: yt, useActionState: yt, useOptimistic: yt, useMemoCache: yt, useCacheRefresh: yt }, Yd = { readContext: Qt, use: $r, useCallback: function(n, l) {
    return cn().memoizedState = [n, l === void 0 ? null : l], n;
  }, useContext: Qt, useEffect: Td, useImperativeHandle: function(n, l, s) {
    s = s != null ? s.concat([n]) : null, Vr(4194308, 4, Cd.bind(null, l, n), s);
  }, useLayoutEffect: function(n, l) {
    return Vr(4194308, 4, n, l);
  }, useInsertionEffect: function(n, l) {
    Vr(4, 2, n, l);
  }, useMemo: function(n, l) {
    var s = cn();
    l = l === void 0 ? null : l;
    var r = n();
    if (Ba) {
      Nt(true);
      try {
        n();
      } finally {
        Nt(false);
      }
    }
    return s.memoizedState = [r, l], r;
  }, useReducer: function(n, l, s) {
    var r = cn();
    if (s !== void 0) {
      var h = s(l);
      if (Ba) {
        Nt(true);
        try {
          s(l);
        } finally {
          Nt(false);
        }
      }
    } else h = l;
    return r.memoizedState = r.baseState = h, n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: h }, r.queue = n, n = n.dispatch = r2.bind(null, Ce, n), [r.memoizedState, n];
  }, useRef: function(n) {
    var l = cn();
    return n = { current: n }, l.memoizedState = n;
  }, useState: function(n) {
    n = qc(n);
    var l = n.queue, s = qd.bind(null, Ce, l);
    return l.dispatch = s, [n.memoizedState, s];
  }, useDebugValue: Bc, useDeferredValue: function(n, l) {
    var s = cn();
    return Yc(s, n, l);
  }, useTransition: function() {
    var n = qc(false);
    return n = Rd.bind(null, Ce, n.queue, true, false), cn().memoizedState = n, [false, n];
  }, useSyncExternalStore: function(n, l, s) {
    var r = Ce, h = cn();
    if (Ge) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else {
      if (s = l(), et === null) throw Error(i(349));
      (qe & 124) !== 0 || ud(r, l, s);
    }
    h.memoizedState = s;
    var y = { value: s, getSnapshot: l };
    return h.queue = y, Td(hd.bind(null, r, y, n), [n]), r.flags |= 2048, ps(9, qr(), fd.bind(null, r, y, s, l), null), s;
  }, useId: function() {
    var n = cn(), l = et.identifierPrefix;
    if (Ge) {
      var s = wl, r = _l4;
      s = (r & ~(1 << 32 - at(r) - 1)).toString(32) + s, l = "\xAB" + l + "R" + s, s = Ur++, 0 < s && (l += "H" + s.toString(32)), l += "\xBB";
    } else s = t2++, l = "\xAB" + l + "r" + s.toString(32) + "\xBB";
    return n.memoizedState = l;
  }, useHostTransitionStatus: Qc, useFormState: Sd, useActionState: Sd, useOptimistic: function(n) {
    var l = cn();
    l.memoizedState = l.baseState = n;
    var s = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return l.queue = s, l = Xc.bind(null, Ce, true, s), s.dispatch = l, [n, l];
  }, useMemoCache: Uc, useCacheRefresh: function() {
    return cn().memoizedState = i2.bind(null, Ce);
  } }, Gd = { readContext: Qt, use: $r, useCallback: Od, useContext: Qt, useEffect: kd, useImperativeHandle: Ed, useInsertionEffect: Md, useLayoutEffect: Ad, useMemo: zd, useReducer: Hr, useRef: Nd, useState: function() {
    return Hr(kl);
  }, useDebugValue: Bc, useDeferredValue: function(n, l) {
    var s = _t10();
    return Dd(s, Ze.memoizedState, n, l);
  }, useTransition: function() {
    var n = Hr(kl)[0], l = _t10().memoizedState;
    return [typeof n == "boolean" ? n : gi(n), l];
  }, useSyncExternalStore: cd, useId: $d, useHostTransitionStatus: Qc, useFormState: jd, useActionState: jd, useOptimistic: function(n, l) {
    var s = _t10();
    return gd(s, Ze, n, l);
  }, useMemoCache: Uc, useCacheRefresh: Hd }, o2 = { readContext: Qt, use: $r, useCallback: Od, useContext: Qt, useEffect: kd, useImperativeHandle: Ed, useInsertionEffect: Md, useLayoutEffect: Ad, useMemo: zd, useReducer: Hc, useRef: Nd, useState: function() {
    return Hc(kl);
  }, useDebugValue: Bc, useDeferredValue: function(n, l) {
    var s = _t10();
    return Ze === null ? Yc(s, n, l) : Dd(s, Ze.memoizedState, n, l);
  }, useTransition: function() {
    var n = Hc(kl)[0], l = _t10().memoizedState;
    return [typeof n == "boolean" ? n : gi(n), l];
  }, useSyncExternalStore: cd, useId: $d, useHostTransitionStatus: Qc, useFormState: wd, useActionState: wd, useOptimistic: function(n, l) {
    var s = _t10();
    return Ze !== null ? gd(s, Ze, n, l) : (s.baseState = n, [n, s.queue.dispatch]);
  }, useMemoCache: Uc, useCacheRefresh: Hd }, ys = null, bi = 0;
  function Gr(n) {
    var l = bi;
    return bi += 1, ys === null && (ys = []), td(ys, n, l);
  }
  function vi(n, l) {
    l = l.props.ref, n.ref = l !== void 0 ? l : null;
  }
  function Qr(n, l) {
    throw l.$$typeof === b ? Error(i(525)) : (n = Object.prototype.toString.call(l), Error(i(31, n === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : n)));
  }
  function Qd(n) {
    var l = n._init;
    return l(n._payload);
  }
  function Xd(n) {
    function l(V, U) {
      if (n) {
        var X = V.deletions;
        X === null ? (V.deletions = [U], V.flags |= 16) : X.push(U);
      }
    }
    function s(V, U) {
      if (!n) return null;
      for (; U !== null; ) l(V, U), U = U.sibling;
      return null;
    }
    function r(V) {
      for (var U = /* @__PURE__ */ new Map(); V !== null; ) V.key !== null ? U.set(V.key, V) : U.set(V.index, V), V = V.sibling;
      return U;
    }
    function h(V, U) {
      return V = jl(V, U), V.index = 0, V.sibling = null, V;
    }
    function y(V, U, X) {
      return V.index = X, n ? (X = V.alternate, X !== null ? (X = X.index, X < U ? (V.flags |= 67108866, U) : X) : (V.flags |= 67108866, U)) : (V.flags |= 1048576, U);
    }
    function _(V) {
      return n && V.alternate === null && (V.flags |= 67108866), V;
    }
    function T(V, U, X, se) {
      return U === null || U.tag !== 6 ? (U = dc(X, V.mode, se), U.return = V, U) : (U = h(U, X), U.return = V, U);
    }
    function D(V, U, X, se) {
      var ye = X.type;
      return ye === S ? le(V, U, X.props.children, se, X.key) : U !== null && (U.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === z && Qd(ye) === U.type) ? (U = h(U, X.props), vi(U, X), U.return = V, U) : (U = kr(X.type, X.key, X.props, null, V.mode, se), vi(U, X), U.return = V, U);
    }
    function Z(V, U, X, se) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== X.containerInfo || U.stateNode.implementation !== X.implementation ? (U = mc(X, V.mode, se), U.return = V, U) : (U = h(U, X.children || []), U.return = V, U);
    }
    function le(V, U, X, se, ye) {
      return U === null || U.tag !== 7 ? (U = Da(X, V.mode, se, ye), U.return = V, U) : (U = h(U, X), U.return = V, U);
    }
    function ie(V, U, X) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return U = dc("" + U, V.mode, X), U.return = V, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case v:
            return X = kr(U.type, U.key, U.props, null, V.mode, X), vi(X, U), X.return = V, X;
          case x:
            return U = mc(U, V.mode, X), U.return = V, U;
          case z:
            var se = U._init;
            return U = se(U._payload), ie(V, U, X);
        }
        if (K(U) || W(U)) return U = Da(U, V.mode, X, null), U.return = V, U;
        if (typeof U.then == "function") return ie(V, Gr(U), X);
        if (U.$$typeof === M) return ie(V, Er(V, U), X);
        Qr(V, U);
      }
      return null;
    }
    function I(V, U, X, se) {
      var ye = U !== null ? U.key : null;
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint") return ye !== null ? null : T(V, U, "" + X, se);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case v:
            return X.key === ye ? D(V, U, X, se) : null;
          case x:
            return X.key === ye ? Z(V, U, X, se) : null;
          case z:
            return ye = X._init, X = ye(X._payload), I(V, U, X, se);
        }
        if (K(X) || W(X)) return ye !== null ? null : le(V, U, X, se, null);
        if (typeof X.then == "function") return I(V, U, Gr(X), se);
        if (X.$$typeof === M) return I(V, U, Er(V, X), se);
        Qr(V, X);
      }
      return null;
    }
    function P(V, U, X, se, ye) {
      if (typeof se == "string" && se !== "" || typeof se == "number" || typeof se == "bigint") return V = V.get(X) || null, T(U, V, "" + se, ye);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case v:
            return V = V.get(se.key === null ? X : se.key) || null, D(U, V, se, ye);
          case x:
            return V = V.get(se.key === null ? X : se.key) || null, Z(U, V, se, ye);
          case z:
            var ze = se._init;
            return se = ze(se._payload), P(V, U, X, se, ye);
        }
        if (K(se) || W(se)) return V = V.get(X) || null, le(U, V, se, ye, null);
        if (typeof se.then == "function") return P(V, U, X, Gr(se), ye);
        if (se.$$typeof === M) return P(V, U, X, Er(U, se), ye);
        Qr(U, se);
      }
      return null;
    }
    function Te(V, U, X, se) {
      for (var ye = null, ze = null, ve = U, we = U = 0, Dt = null; ve !== null && we < X.length; we++) {
        ve.index > we ? (Dt = ve, ve = null) : Dt = ve.sibling;
        var Be = I(V, ve, X[we], se);
        if (Be === null) {
          ve === null && (ve = Dt);
          break;
        }
        n && ve && Be.alternate === null && l(V, ve), U = y(Be, U, we), ze === null ? ye = Be : ze.sibling = Be, ze = Be, ve = Dt;
      }
      if (we === X.length) return s(V, ve), Ge && La(V, we), ye;
      if (ve === null) {
        for (; we < X.length; we++) ve = ie(V, X[we], se), ve !== null && (U = y(ve, U, we), ze === null ? ye = ve : ze.sibling = ve, ze = ve);
        return Ge && La(V, we), ye;
      }
      for (ve = r(ve); we < X.length; we++) Dt = P(ve, V, we, X[we], se), Dt !== null && (n && Dt.alternate !== null && ve.delete(Dt.key === null ? we : Dt.key), U = y(Dt, U, we), ze === null ? ye = Dt : ze.sibling = Dt, ze = Dt);
      return n && ve.forEach(function(da) {
        return l(V, da);
      }), Ge && La(V, we), ye;
    }
    function _e9(V, U, X, se) {
      if (X == null) throw Error(i(151));
      for (var ye = null, ze = null, ve = U, we = U = 0, Dt = null, Be = X.next(); ve !== null && !Be.done; we++, Be = X.next()) {
        ve.index > we ? (Dt = ve, ve = null) : Dt = ve.sibling;
        var da = I(V, ve, Be.value, se);
        if (da === null) {
          ve === null && (ve = Dt);
          break;
        }
        n && ve && da.alternate === null && l(V, ve), U = y(da, U, we), ze === null ? ye = da : ze.sibling = da, ze = da, ve = Dt;
      }
      if (Be.done) return s(V, ve), Ge && La(V, we), ye;
      if (ve === null) {
        for (; !Be.done; we++, Be = X.next()) Be = ie(V, Be.value, se), Be !== null && (U = y(Be, U, we), ze === null ? ye = Be : ze.sibling = Be, ze = Be);
        return Ge && La(V, we), ye;
      }
      for (ve = r(ve); !Be.done; we++, Be = X.next()) Be = P(ve, V, we, Be.value, se), Be !== null && (n && Be.alternate !== null && ve.delete(Be.key === null ? we : Be.key), U = y(Be, U, we), ze === null ? ye = Be : ze.sibling = Be, ze = Be);
      return n && ve.forEach(function(cb) {
        return l(V, cb);
      }), Ge && La(V, we), ye;
    }
    function Ie(V, U, X, se) {
      if (typeof X == "object" && X !== null && X.type === S && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case v:
            e: {
              for (var ye = X.key; U !== null; ) {
                if (U.key === ye) {
                  if (ye = X.type, ye === S) {
                    if (U.tag === 7) {
                      s(V, U.sibling), se = h(U, X.props.children), se.return = V, V = se;
                      break e;
                    }
                  } else if (U.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === z && Qd(ye) === U.type) {
                    s(V, U.sibling), se = h(U, X.props), vi(se, X), se.return = V, V = se;
                    break e;
                  }
                  s(V, U);
                  break;
                } else l(V, U);
                U = U.sibling;
              }
              X.type === S ? (se = Da(X.props.children, V.mode, se, X.key), se.return = V, V = se) : (se = kr(X.type, X.key, X.props, null, V.mode, se), vi(se, X), se.return = V, V = se);
            }
            return _(V);
          case x:
            e: {
              for (ye = X.key; U !== null; ) {
                if (U.key === ye) if (U.tag === 4 && U.stateNode.containerInfo === X.containerInfo && U.stateNode.implementation === X.implementation) {
                  s(V, U.sibling), se = h(U, X.children || []), se.return = V, V = se;
                  break e;
                } else {
                  s(V, U);
                  break;
                }
                else l(V, U);
                U = U.sibling;
              }
              se = mc(X, V.mode, se), se.return = V, V = se;
            }
            return _(V);
          case z:
            return ye = X._init, X = ye(X._payload), Ie(V, U, X, se);
        }
        if (K(X)) return Te(V, U, X, se);
        if (W(X)) {
          if (ye = W(X), typeof ye != "function") throw Error(i(150));
          return X = ye.call(X), _e9(V, U, X, se);
        }
        if (typeof X.then == "function") return Ie(V, U, Gr(X), se);
        if (X.$$typeof === M) return Ie(V, U, Er(V, X), se);
        Qr(V, X);
      }
      return typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint" ? (X = "" + X, U !== null && U.tag === 6 ? (s(V, U.sibling), se = h(U, X), se.return = V, V = se) : (s(V, U), se = dc(X, V.mode, se), se.return = V, V = se), _(V)) : s(V, U);
    }
    return function(V, U, X, se) {
      try {
        bi = 0;
        var ye = Ie(V, U, X, se);
        return ys = null, ye;
      } catch (ve) {
        if (ve === ci || ve === zr) throw ve;
        var ze = gn(29, ve, null, V.mode);
        return ze.lanes = se, ze.return = V, ze;
      } finally {
      }
    };
  }
  var bs = Xd(true), Fd = Xd(false), zn = Y(null), fl = null;
  function Wl(n) {
    var l = n.alternate;
    te(kt, kt.current & 1), te(zn, n), fl === null && (l === null || ds.current !== null || l.memoizedState !== null) && (fl = n);
  }
  function Zd(n) {
    if (n.tag === 22) {
      if (te(kt, kt.current), te(zn, n), fl === null) {
        var l = n.alternate;
        l !== null && l.memoizedState !== null && (fl = n);
      }
    } else Jl();
  }
  function Jl() {
    te(kt, kt.current), te(zn, zn.current);
  }
  function Ml(n) {
    re(zn), fl === n && (fl = null), re(kt);
  }
  var kt = Y(0);
  function Xr(n) {
    for (var l = n; l !== null; ) {
      if (l.tag === 13) {
        var s = l.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || Lu(s))) return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === n) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === n) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  function Fc(n, l, s, r) {
    l = n.memoizedState, s = s(r, l), s = s == null ? l : p({}, l, s), n.memoizedState = s, n.lanes === 0 && (n.updateQueue.baseState = s);
  }
  var Zc = { enqueueSetState: function(n, l, s) {
    n = n._reactInternals;
    var r = vn(), h = Kl(r);
    h.payload = l, s != null && (h.callback = s), l = Il(n, h, r), l !== null && (xn(l, n, r), fi(l, n, r));
  }, enqueueReplaceState: function(n, l, s) {
    n = n._reactInternals;
    var r = vn(), h = Kl(r);
    h.tag = 1, h.payload = l, s != null && (h.callback = s), l = Il(n, h, r), l !== null && (xn(l, n, r), fi(l, n, r));
  }, enqueueForceUpdate: function(n, l) {
    n = n._reactInternals;
    var s = vn(), r = Kl(s);
    r.tag = 2, l != null && (r.callback = l), l = Il(n, r, s), l !== null && (xn(l, n, s), fi(l, n, s));
  } };
  function Kd(n, l, s, r, h, y, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(r, y, _) : l.prototype && l.prototype.isPureReactComponent ? !ti(s, r) || !ti(h, y) : true;
  }
  function Id(n, l, s, r) {
    n = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(s, r), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(s, r), l.state !== n && Zc.enqueueReplaceState(l, l.state, null);
  }
  function Ya(n, l) {
    var s = l;
    if ("ref" in l) {
      s = {};
      for (var r in l) r !== "ref" && (s[r] = l[r]);
    }
    if (n = n.defaultProps) {
      s === l && (s = p({}, s));
      for (var h in n) s[h] === void 0 && (s[h] = n[h]);
    }
    return s;
  }
  var Fr = typeof reportError == "function" ? reportError : function(n) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof n == "object" && n !== null && typeof n.message == "string" ? String(n.message) : String(n), error: n });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", n);
      return;
    }
    console.error(n);
  };
  function Pd(n) {
    Fr(n);
  }
  function Wd(n) {
    console.error(n);
  }
  function Jd(n) {
    Fr(n);
  }
  function Zr(n, l) {
    try {
      var s = n.onUncaughtError;
      s(l.value, { componentStack: l.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function e0(n, l, s) {
    try {
      var r = n.onCaughtError;
      r(s.value, { componentStack: s.stack, errorBoundary: l.tag === 1 ? l.stateNode : null });
    } catch (h) {
      setTimeout(function() {
        throw h;
      });
    }
  }
  function Kc(n, l, s) {
    return s = Kl(s), s.tag = 3, s.payload = { element: null }, s.callback = function() {
      Zr(n, l);
    }, s;
  }
  function t0(n) {
    return n = Kl(n), n.tag = 3, n;
  }
  function n0(n, l, s, r) {
    var h = s.type.getDerivedStateFromError;
    if (typeof h == "function") {
      var y = r.value;
      n.payload = function() {
        return h(y);
      }, n.callback = function() {
        e0(l, s, r);
      };
    }
    var _ = s.stateNode;
    _ !== null && typeof _.componentDidCatch == "function" && (n.callback = function() {
      e0(l, s, r), typeof h != "function" && (sa === null ? sa = /* @__PURE__ */ new Set([this]) : sa.add(this));
      var T = r.stack;
      this.componentDidCatch(r.value, { componentStack: T !== null ? T : "" });
    });
  }
  function c2(n, l, s, r, h) {
    if (s.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (l = s.alternate, l !== null && ii(l, s, h, true), s = zn.current, s !== null) {
        switch (s.tag) {
          case 13:
            return fl === null ? vu() : s.alternate === null && mt === 0 && (mt = 3), s.flags &= -257, s.flags |= 65536, s.lanes = h, r === wc ? s.flags |= 16384 : (l = s.updateQueue, l === null ? s.updateQueue = /* @__PURE__ */ new Set([r]) : l.add(r), Su(n, r, h)), false;
          case 22:
            return s.flags |= 65536, r === wc ? s.flags |= 16384 : (l = s.updateQueue, l === null ? (l = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r]) }, s.updateQueue = l) : (s = l.retryQueue, s === null ? l.retryQueue = /* @__PURE__ */ new Set([r]) : s.add(r)), Su(n, r, h)), false;
        }
        throw Error(i(435, s.tag));
      }
      return Su(n, r, h), vu(), false;
    }
    if (Ge) return l = zn.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = h, r !== yc && (n = Error(i(422), { cause: r }), si(An(n, s)))) : (r !== yc && (l = Error(i(423), { cause: r }), si(An(l, s))), n = n.current.alternate, n.flags |= 65536, h &= -h, n.lanes |= h, r = An(r, s), h = Kc(n.stateNode, r, h), kc(n, h), mt !== 4 && (mt = 2)), false;
    var y = Error(i(520), { cause: r });
    if (y = An(y, s), Ti === null ? Ti = [y] : Ti.push(y), mt !== 4 && (mt = 2), l === null) return true;
    r = An(r, s), s = l;
    do {
      switch (s.tag) {
        case 3:
          return s.flags |= 65536, n = h & -h, s.lanes |= n, n = Kc(s.stateNode, r, n), kc(s, n), false;
        case 1:
          if (l = s.type, y = s.stateNode, (s.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (sa === null || !sa.has(y)))) return s.flags |= 65536, h &= -h, s.lanes |= h, h = t0(h), n0(h, n, s, r), kc(s, h), false;
      }
      s = s.return;
    } while (s !== null);
    return false;
  }
  var l0 = Error(i(461)), Ot = false;
  function Ut(n, l, s, r) {
    l.child = n === null ? Fd(l, null, s, r) : bs(l, n.child, s, r);
  }
  function a0(n, l, s, r, h) {
    s = s.render;
    var y = l.ref;
    if ("ref" in r) {
      var _ = {};
      for (var T in r) T !== "ref" && (_[T] = r[T]);
    } else _ = r;
    return qa(l), r = Oc(n, l, s, _, y, h), T = zc(), n !== null && !Ot ? (Dc(n, l, h), Al(n, l, h)) : (Ge && T && gc(l), l.flags |= 1, Ut(n, l, r, h), l.child);
  }
  function s0(n, l, s, r, h) {
    if (n === null) {
      var y = s.type;
      return typeof y == "function" && !hc(y) && y.defaultProps === void 0 && s.compare === null ? (l.tag = 15, l.type = y, i0(n, l, y, r, h)) : (n = kr(s.type, null, r, l, l.mode, h), n.ref = l.ref, n.return = l, l.child = n);
    }
    if (y = n.child, !lu(n, h)) {
      var _ = y.memoizedProps;
      if (s = s.compare, s = s !== null ? s : ti, s(_, r) && n.ref === l.ref) return Al(n, l, h);
    }
    return l.flags |= 1, n = jl(y, r), n.ref = l.ref, n.return = l, l.child = n;
  }
  function i0(n, l, s, r, h) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (ti(y, r) && n.ref === l.ref) if (Ot = false, l.pendingProps = r = y, lu(n, h)) (n.flags & 131072) !== 0 && (Ot = true);
      else return l.lanes = n.lanes, Al(n, l, h);
    }
    return Ic(n, l, s, r, h);
  }
  function r0(n, l, s) {
    var r = l.pendingProps, h = r.children, y = n !== null ? n.memoizedState : null;
    if (r.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (r = y !== null ? y.baseLanes | s : s, n !== null) {
          for (h = l.child = n.child, y = 0; h !== null; ) y = y | h.lanes | h.childLanes, h = h.sibling;
          l.childLanes = y & ~r;
        } else l.childLanes = 0, l.child = null;
        return o0(n, l, r, s);
      }
      if ((s & 536870912) !== 0) l.memoizedState = { baseLanes: 0, cachePool: null }, n !== null && Or(l, y !== null ? y.cachePool : null), y !== null ? id(l, y) : Ac(), Zd(l);
      else return l.lanes = l.childLanes = 536870912, o0(n, l, y !== null ? y.baseLanes | s : s, s);
    } else y !== null ? (Or(l, y.cachePool), id(l, y), Jl(), l.memoizedState = null) : (n !== null && Or(l, null), Ac(), Jl());
    return Ut(n, l, h, s), l.child;
  }
  function o0(n, l, s, r) {
    var h = _c3();
    return h = h === null ? null : { parent: Tt._currentValue, pool: h }, l.memoizedState = { baseLanes: s, cachePool: h }, n !== null && Or(l, null), Ac(), Zd(l), n !== null && ii(n, l, r, true), null;
  }
  function Kr(n, l) {
    var s = l.ref;
    if (s === null) n !== null && n.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(i(284));
      (n === null || n.ref !== s) && (l.flags |= 4194816);
    }
  }
  function Ic(n, l, s, r, h) {
    return qa(l), s = Oc(n, l, s, r, void 0, h), r = zc(), n !== null && !Ot ? (Dc(n, l, h), Al(n, l, h)) : (Ge && r && gc(l), l.flags |= 1, Ut(n, l, s, h), l.child);
  }
  function c0(n, l, s, r, h, y) {
    return qa(l), l.updateQueue = null, s = od(l, r, s, h), rd(n), r = zc(), n !== null && !Ot ? (Dc(n, l, y), Al(n, l, y)) : (Ge && r && gc(l), l.flags |= 1, Ut(n, l, s, y), l.child);
  }
  function u0(n, l, s, r, h) {
    if (qa(l), l.stateNode === null) {
      var y = os, _ = s.contextType;
      typeof _ == "object" && _ !== null && (y = Qt(_)), y = new s(r, y), l.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, y.updater = Zc, l.stateNode = y, y._reactInternals = l, y = l.stateNode, y.props = r, y.state = l.memoizedState, y.refs = {}, Nc(l), _ = s.contextType, y.context = typeof _ == "object" && _ !== null ? Qt(_) : os, y.state = l.memoizedState, _ = s.getDerivedStateFromProps, typeof _ == "function" && (Fc(l, s, _, r), y.state = l.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (_ = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), _ !== y.state && Zc.enqueueReplaceState(y, y.state, null), di(l, r, y, h), hi(), y.state = l.memoizedState), typeof y.componentDidMount == "function" && (l.flags |= 4194308), r = true;
    } else if (n === null) {
      y = l.stateNode;
      var T = l.memoizedProps, D = Ya(s, T);
      y.props = D;
      var Z = y.context, le = s.contextType;
      _ = os, typeof le == "object" && le !== null && (_ = Qt(le));
      var ie = s.getDerivedStateFromProps;
      le = typeof ie == "function" || typeof y.getSnapshotBeforeUpdate == "function", T = l.pendingProps !== T, le || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (T || Z !== _) && Id(l, y, r, _), Zl = false;
      var I = l.memoizedState;
      y.state = I, di(l, r, y, h), hi(), Z = l.memoizedState, T || I !== Z || Zl ? (typeof ie == "function" && (Fc(l, s, ie, r), Z = l.memoizedState), (D = Zl || Kd(l, s, D, r, I, Z, _)) ? (le || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = r, l.memoizedState = Z), y.props = r, y.state = Z, y.context = _, r = D) : (typeof y.componentDidMount == "function" && (l.flags |= 4194308), r = false);
    } else {
      y = l.stateNode, Tc(n, l), _ = l.memoizedProps, le = Ya(s, _), y.props = le, ie = l.pendingProps, I = y.context, Z = s.contextType, D = os, typeof Z == "object" && Z !== null && (D = Qt(Z)), T = s.getDerivedStateFromProps, (Z = typeof T == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (_ !== ie || I !== D) && Id(l, y, r, D), Zl = false, I = l.memoizedState, y.state = I, di(l, r, y, h), hi();
      var P = l.memoizedState;
      _ !== ie || I !== P || Zl || n !== null && n.dependencies !== null && Cr(n.dependencies) ? (typeof T == "function" && (Fc(l, s, T, r), P = l.memoizedState), (le = Zl || Kd(l, s, le, r, I, P, D) || n !== null && n.dependencies !== null && Cr(n.dependencies)) ? (Z || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(r, P, D), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(r, P, D)), typeof y.componentDidUpdate == "function" && (l.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || _ === n.memoizedProps && I === n.memoizedState || (l.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && I === n.memoizedState || (l.flags |= 1024), l.memoizedProps = r, l.memoizedState = P), y.props = r, y.state = P, y.context = D, r = le) : (typeof y.componentDidUpdate != "function" || _ === n.memoizedProps && I === n.memoizedState || (l.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || _ === n.memoizedProps && I === n.memoizedState || (l.flags |= 1024), r = false);
    }
    return y = r, Kr(n, l), r = (l.flags & 128) !== 0, y || r ? (y = l.stateNode, s = r && typeof s.getDerivedStateFromError != "function" ? null : y.render(), l.flags |= 1, n !== null && r ? (l.child = bs(l, n.child, null, h), l.child = bs(l, null, s, h)) : Ut(n, l, s, h), l.memoizedState = y.state, n = l.child) : n = Al(n, l, h), n;
  }
  function f0(n, l, s, r) {
    return ai(), l.flags |= 256, Ut(n, l, s, r), l.child;
  }
  var Pc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Wc(n) {
    return { baseLanes: n, cachePool: Wh() };
  }
  function Jc(n, l, s) {
    return n = n !== null ? n.childLanes & ~s : 0, l && (n |= Dn), n;
  }
  function h0(n, l, s) {
    var r = l.pendingProps, h = false, y = (l.flags & 128) !== 0, _;
    if ((_ = y) || (_ = n !== null && n.memoizedState === null ? false : (kt.current & 2) !== 0), _ && (h = true, l.flags &= -129), _ = (l.flags & 32) !== 0, l.flags &= -33, n === null) {
      if (Ge) {
        if (h ? Wl(l) : Jl(), Ge) {
          var T = dt, D;
          if (D = T) {
            e: {
              for (D = T, T = ul; D.nodeType !== 8; ) {
                if (!T) {
                  T = null;
                  break e;
                }
                if (D = nl(D.nextSibling), D === null) {
                  T = null;
                  break e;
                }
              }
              T = D;
            }
            T !== null ? (l.memoizedState = { dehydrated: T, treeContext: Ra !== null ? { id: _l4, overflow: wl } : null, retryLane: 536870912, hydrationErrors: null }, D = gn(18, null, null, 0), D.stateNode = T, D.return = l, l.child = D, nn = l, dt = null, D = true) : D = false;
          }
          D || $a(l);
        }
        if (T = l.memoizedState, T !== null && (T = T.dehydrated, T !== null)) return Lu(T) ? l.lanes = 32 : l.lanes = 536870912, null;
        Ml(l);
      }
      return T = r.children, r = r.fallback, h ? (Jl(), h = l.mode, T = Ir({ mode: "hidden", children: T }, h), r = Da(r, h, s, null), T.return = l, r.return = l, T.sibling = r, l.child = T, h = l.child, h.memoizedState = Wc(s), h.childLanes = Jc(n, _, s), l.memoizedState = Pc, r) : (Wl(l), eu(l, T));
    }
    if (D = n.memoizedState, D !== null && (T = D.dehydrated, T !== null)) {
      if (y) l.flags & 256 ? (Wl(l), l.flags &= -257, l = tu(n, l, s)) : l.memoizedState !== null ? (Jl(), l.child = n.child, l.flags |= 128, l = null) : (Jl(), h = r.fallback, T = l.mode, r = Ir({ mode: "visible", children: r.children }, T), h = Da(h, T, s, null), h.flags |= 2, r.return = l, h.return = l, r.sibling = h, l.child = r, bs(l, n.child, null, s), r = l.child, r.memoizedState = Wc(s), r.childLanes = Jc(n, _, s), l.memoizedState = Pc, l = h);
      else if (Wl(l), Lu(T)) {
        if (_ = T.nextSibling && T.nextSibling.dataset, _) var Z = _.dgst;
        _ = Z, r = Error(i(419)), r.stack = "", r.digest = _, si({ value: r, source: null, stack: null }), l = tu(n, l, s);
      } else if (Ot || ii(n, l, s, false), _ = (s & n.childLanes) !== 0, Ot || _) {
        if (_ = et, _ !== null && (r = s & -s, r = (r & 42) !== 0 ? 1 : Bs(r), r = (r & (_.suspendedLanes | s)) !== 0 ? 0 : r, r !== 0 && r !== D.retryLane)) throw D.retryLane = r, rs(n, r), xn(_, n, r), l0;
        T.data === "$?" || vu(), l = tu(n, l, s);
      } else T.data === "$?" ? (l.flags |= 192, l.child = n.child, l = null) : (n = D.treeContext, dt = nl(T.nextSibling), nn = l, Ge = true, Ua = null, ul = false, n !== null && (En[On++] = _l4, En[On++] = wl, En[On++] = Ra, _l4 = n.id, wl = n.overflow, Ra = l), l = eu(l, r.children), l.flags |= 4096);
      return l;
    }
    return h ? (Jl(), h = r.fallback, T = l.mode, D = n.child, Z = D.sibling, r = jl(D, { mode: "hidden", children: r.children }), r.subtreeFlags = D.subtreeFlags & 65011712, Z !== null ? h = jl(Z, h) : (h = Da(h, T, s, null), h.flags |= 2), h.return = l, r.return = l, r.sibling = h, l.child = r, r = h, h = l.child, T = n.child.memoizedState, T === null ? T = Wc(s) : (D = T.cachePool, D !== null ? (Z = Tt._currentValue, D = D.parent !== Z ? { parent: Z, pool: Z } : D) : D = Wh(), T = { baseLanes: T.baseLanes | s, cachePool: D }), h.memoizedState = T, h.childLanes = Jc(n, _, s), l.memoizedState = Pc, r) : (Wl(l), s = n.child, n = s.sibling, s = jl(s, { mode: "visible", children: r.children }), s.return = l, s.sibling = null, n !== null && (_ = l.deletions, _ === null ? (l.deletions = [n], l.flags |= 16) : _.push(n)), l.child = s, l.memoizedState = null, s);
  }
  function eu(n, l) {
    return l = Ir({ mode: "visible", children: l }, n.mode), l.return = n, n.child = l;
  }
  function Ir(n, l) {
    return n = gn(22, n, null, l), n.lanes = 0, n.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, n;
  }
  function tu(n, l, s) {
    return bs(l, n.child, null, s), n = eu(l, l.pendingProps.children), n.flags |= 2, l.memoizedState = null, n;
  }
  function d0(n, l, s) {
    n.lanes |= l;
    var r = n.alternate;
    r !== null && (r.lanes |= l), vc(n.return, l, s);
  }
  function nu(n, l, s, r, h) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: l, rendering: null, renderingStartTime: 0, last: r, tail: s, tailMode: h } : (y.isBackwards = l, y.rendering = null, y.renderingStartTime = 0, y.last = r, y.tail = s, y.tailMode = h);
  }
  function m0(n, l, s) {
    var r = l.pendingProps, h = r.revealOrder, y = r.tail;
    if (Ut(n, l, r.children, s), r = kt.current, (r & 2) !== 0) r = r & 1 | 2, l.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = l.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && d0(n, s, l);
        else if (n.tag === 19) d0(n, s, l);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === l) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      r &= 1;
    }
    switch (te(kt, r), h) {
      case "forwards":
        for (s = l.child, h = null; s !== null; ) n = s.alternate, n !== null && Xr(n) === null && (h = s), s = s.sibling;
        s = h, s === null ? (h = l.child, l.child = null) : (h = s.sibling, s.sibling = null), nu(l, false, h, s, y);
        break;
      case "backwards":
        for (s = null, h = l.child, l.child = null; h !== null; ) {
          if (n = h.alternate, n !== null && Xr(n) === null) {
            l.child = h;
            break;
          }
          n = h.sibling, h.sibling = s, s = h, h = n;
        }
        nu(l, true, s, null, y);
        break;
      case "together":
        nu(l, false, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Al(n, l, s) {
    if (n !== null && (l.dependencies = n.dependencies), aa |= l.lanes, (s & l.childLanes) === 0) if (n !== null) {
      if (ii(n, l, s, false), (s & l.childLanes) === 0) return null;
    } else return null;
    if (n !== null && l.child !== n.child) throw Error(i(153));
    if (l.child !== null) {
      for (n = l.child, s = jl(n, n.pendingProps), l.child = s, s.return = l; n.sibling !== null; ) n = n.sibling, s = s.sibling = jl(n, n.pendingProps), s.return = l;
      s.sibling = null;
    }
    return l.child;
  }
  function lu(n, l) {
    return (n.lanes & l) !== 0 ? true : (n = n.dependencies, !!(n !== null && Cr(n)));
  }
  function u2(n, l, s) {
    switch (l.tag) {
      case 3:
        he(l, l.stateNode.containerInfo), Fl(l, Tt, n.memoizedState.cache), ai();
        break;
      case 27:
      case 5:
        xe(l);
        break;
      case 4:
        he(l, l.stateNode.containerInfo);
        break;
      case 10:
        Fl(l, l.type, l.memoizedProps.value);
        break;
      case 13:
        var r = l.memoizedState;
        if (r !== null) return r.dehydrated !== null ? (Wl(l), l.flags |= 128, null) : (s & l.child.childLanes) !== 0 ? h0(n, l, s) : (Wl(l), n = Al(n, l, s), n !== null ? n.sibling : null);
        Wl(l);
        break;
      case 19:
        var h = (n.flags & 128) !== 0;
        if (r = (s & l.childLanes) !== 0, r || (ii(n, l, s, false), r = (s & l.childLanes) !== 0), h) {
          if (r) return m0(n, l, s);
          l.flags |= 128;
        }
        if (h = l.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), te(kt, kt.current), r) break;
        return null;
      case 22:
      case 23:
        return l.lanes = 0, r0(n, l, s);
      case 24:
        Fl(l, Tt, n.memoizedState.cache);
    }
    return Al(n, l, s);
  }
  function g0(n, l, s) {
    if (n !== null) if (n.memoizedProps !== l.pendingProps) Ot = true;
    else {
      if (!lu(n, s) && (l.flags & 128) === 0) return Ot = false, u2(n, l, s);
      Ot = (n.flags & 131072) !== 0;
    }
    else Ot = false, Ge && (l.flags & 1048576) !== 0 && Qh(l, Ar, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        e: {
          n = l.pendingProps;
          var r = l.elementType, h = r._init;
          if (r = h(r._payload), l.type = r, typeof r == "function") hc(r) ? (n = Ya(r, n), l.tag = 1, l = u0(null, l, r, n, s)) : (l.tag = 0, l = Ic(null, l, r, n, s));
          else {
            if (r != null) {
              if (h = r.$$typeof, h === C) {
                l.tag = 11, l = a0(null, l, r, n, s);
                break e;
              } else if (h === A) {
                l.tag = 14, l = s0(null, l, r, n, s);
                break e;
              }
            }
            throw l = ae(r) || r, Error(i(306, l, ""));
          }
        }
        return l;
      case 0:
        return Ic(n, l, l.type, l.pendingProps, s);
      case 1:
        return r = l.type, h = Ya(r, l.pendingProps), u0(n, l, r, h, s);
      case 3:
        e: {
          if (he(l, l.stateNode.containerInfo), n === null) throw Error(i(387));
          r = l.pendingProps;
          var y = l.memoizedState;
          h = y.element, Tc(n, l), di(l, r, null, s);
          var _ = l.memoizedState;
          if (r = _.cache, Fl(l, Tt, r), r !== y.cache && xc(l, [Tt], s, true), hi(), r = _.element, y.isDehydrated) if (y = { element: r, isDehydrated: false, cache: _.cache }, l.updateQueue.baseState = y, l.memoizedState = y, l.flags & 256) {
            l = f0(n, l, r, s);
            break e;
          } else if (r !== h) {
            h = An(Error(i(424)), l), si(h), l = f0(n, l, r, s);
            break e;
          } else {
            switch (n = l.stateNode.containerInfo, n.nodeType) {
              case 9:
                n = n.body;
                break;
              default:
                n = n.nodeName === "HTML" ? n.ownerDocument.body : n;
            }
            for (dt = nl(n.firstChild), nn = l, Ge = true, Ua = null, ul = true, s = Fd(l, null, r, s), l.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          }
          else {
            if (ai(), r === h) {
              l = Al(n, l, s);
              break e;
            }
            Ut(n, l, r, s);
          }
          l = l.child;
        }
        return l;
      case 26:
        return Kr(n, l), n === null ? (s = v1(l.type, null, l.pendingProps, null)) ? l.memoizedState = s : Ge || (s = l.type, n = l.pendingProps, r = uo(de.current).createElement(s), r[Ct] = l, r[Gt] = n, Ht(r, s, n), ft(r), l.stateNode = r) : l.memoizedState = v1(l.type, n.memoizedProps, l.pendingProps, n.memoizedState), null;
      case 27:
        return xe(l), n === null && Ge && (r = l.stateNode = p1(l.type, l.pendingProps, de.current), nn = l, ul = true, h = dt, oa(l.type) ? (Uu = h, dt = nl(r.firstChild)) : dt = h), Ut(n, l, l.pendingProps.children, s), Kr(n, l), n === null && (l.flags |= 4194304), l.child;
      case 5:
        return n === null && Ge && ((h = r = dt) && (r = $2(r, l.type, l.pendingProps, ul), r !== null ? (l.stateNode = r, nn = l, dt = nl(r.firstChild), ul = false, h = true) : h = false), h || $a(l)), xe(l), h = l.type, y = l.pendingProps, _ = n !== null ? n.memoizedProps : null, r = y.children, zu(h, y) ? r = null : _ !== null && zu(h, _) && (l.flags |= 32), l.memoizedState !== null && (h = Oc(n, l, n2, null, null, s), Ri._currentValue = h), Kr(n, l), Ut(n, l, r, s), l.child;
      case 6:
        return n === null && Ge && ((n = s = dt) && (s = H2(s, l.pendingProps, ul), s !== null ? (l.stateNode = s, nn = l, dt = null, n = true) : n = false), n || $a(l)), null;
      case 13:
        return h0(n, l, s);
      case 4:
        return he(l, l.stateNode.containerInfo), r = l.pendingProps, n === null ? l.child = bs(l, null, r, s) : Ut(n, l, r, s), l.child;
      case 11:
        return a0(n, l, l.type, l.pendingProps, s);
      case 7:
        return Ut(n, l, l.pendingProps, s), l.child;
      case 8:
        return Ut(n, l, l.pendingProps.children, s), l.child;
      case 12:
        return Ut(n, l, l.pendingProps.children, s), l.child;
      case 10:
        return r = l.pendingProps, Fl(l, l.type, r.value), Ut(n, l, r.children, s), l.child;
      case 9:
        return h = l.type._context, r = l.pendingProps.children, qa(l), h = Qt(h), r = r(h), l.flags |= 1, Ut(n, l, r, s), l.child;
      case 14:
        return s0(n, l, l.type, l.pendingProps, s);
      case 15:
        return i0(n, l, l.type, l.pendingProps, s);
      case 19:
        return m0(n, l, s);
      case 31:
        return r = l.pendingProps, s = l.mode, r = { mode: r.mode, children: r.children }, n === null ? (s = Ir(r, s), s.ref = l.ref, l.child = s, s.return = l, l = s) : (s = jl(n.child, r), s.ref = l.ref, l.child = s, s.return = l, l = s), l;
      case 22:
        return r0(n, l, s);
      case 24:
        return qa(l), r = Qt(Tt), n === null ? (h = _c3(), h === null && (h = et, y = Sc(), h.pooledCache = y, y.refCount++, y !== null && (h.pooledCacheLanes |= s), h = y), l.memoizedState = { parent: r, cache: h }, Nc(l), Fl(l, Tt, h)) : ((n.lanes & s) !== 0 && (Tc(n, l), di(l, null, null, s), hi()), h = n.memoizedState, y = l.memoizedState, h.parent !== r ? (h = { parent: r, cache: r }, l.memoizedState = h, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = h), Fl(l, Tt, r)) : (r = y.cache, Fl(l, Tt, r), r !== h.cache && xc(l, [Tt], s, true))), Ut(n, l, l.pendingProps.children, s), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(i(156, l.tag));
  }
  function Cl(n) {
    n.flags |= 4;
  }
  function p0(n, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0) n.flags &= -16777217;
    else if (n.flags |= 16777216, !w1(l)) {
      if (l = zn.current, l !== null && ((qe & 4194048) === qe ? fl !== null : (qe & 62914560) !== qe && (qe & 536870912) === 0 || l !== fl)) throw ui = wc, Jh;
      n.flags |= 8192;
    }
  }
  function Pr(n, l) {
    l !== null && (n.flags |= 4), n.flags & 16384 && (l = n.tag !== 22 ? Wa() : 536870912, n.lanes |= l, js |= l);
  }
  function xi(n, l) {
    if (!Ge) switch (n.tailMode) {
      case "hidden":
        l = n.tail;
        for (var s = null; l !== null; ) l.alternate !== null && (s = l), l = l.sibling;
        s === null ? n.tail = null : s.sibling = null;
        break;
      case "collapsed":
        s = n.tail;
        for (var r = null; s !== null; ) s.alternate !== null && (r = s), s = s.sibling;
        r === null ? l || n.tail === null ? n.tail = null : n.tail.sibling = null : r.sibling = null;
    }
  }
  function ot(n) {
    var l = n.alternate !== null && n.alternate.child === n.child, s = 0, r = 0;
    if (l) for (var h = n.child; h !== null; ) s |= h.lanes | h.childLanes, r |= h.subtreeFlags & 65011712, r |= h.flags & 65011712, h.return = n, h = h.sibling;
    else for (h = n.child; h !== null; ) s |= h.lanes | h.childLanes, r |= h.subtreeFlags, r |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= r, n.childLanes = s, l;
  }
  function f2(n, l, s) {
    var r = l.pendingProps;
    switch (pc(l), l.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ot(l), null;
      case 1:
        return ot(l), null;
      case 3:
        return s = l.stateNode, r = null, n !== null && (r = n.memoizedState.cache), l.memoizedState.cache !== r && (l.flags |= 2048), Tl(Tt), pe(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (li(l) ? Cl(l) : n === null || n.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Zh())), ot(l), null;
      case 26:
        return s = l.memoizedState, n === null ? (Cl(l), s !== null ? (ot(l), p0(l, s)) : (ot(l), l.flags &= -16777217)) : s ? s !== n.memoizedState ? (Cl(l), ot(l), p0(l, s)) : (ot(l), l.flags &= -16777217) : (n.memoizedProps !== r && Cl(l), ot(l), l.flags &= -16777217), null;
      case 27:
        ge(l), s = de.current;
        var h = l.type;
        if (n !== null && l.stateNode != null) n.memoizedProps !== r && Cl(l);
        else {
          if (!r) {
            if (l.stateNode === null) throw Error(i(166));
            return ot(l), null;
          }
          n = ce.current, li(l) ? Xh(l) : (n = p1(h, r, s), l.stateNode = n, Cl(l));
        }
        return ot(l), null;
      case 5:
        if (ge(l), s = l.type, n !== null && l.stateNode != null) n.memoizedProps !== r && Cl(l);
        else {
          if (!r) {
            if (l.stateNode === null) throw Error(i(166));
            return ot(l), null;
          }
          if (n = ce.current, li(l)) Xh(l);
          else {
            switch (h = uo(de.current), n) {
              case 1:
                n = h.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                n = h.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    n = h.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    n = h.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof r.is == "string" ? h.createElement("select", { is: r.is }) : h.createElement("select"), r.multiple ? n.multiple = true : r.size && (n.size = r.size);
                    break;
                  default:
                    n = typeof r.is == "string" ? h.createElement(s, { is: r.is }) : h.createElement(s);
                }
            }
            n[Ct] = l, n[Gt] = r;
            e: for (h = l.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6) n.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
              if (h === l) break e;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === l) break e;
                h = h.return;
              }
              h.sibling.return = h.return, h = h.sibling;
            }
            l.stateNode = n;
            e: switch (Ht(n, s, r), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!r.autoFocus;
                break e;
              case "img":
                n = true;
                break e;
              default:
                n = false;
            }
            n && Cl(l);
          }
        }
        return ot(l), l.flags &= -16777217, null;
      case 6:
        if (n && l.stateNode != null) n.memoizedProps !== r && Cl(l);
        else {
          if (typeof r != "string" && l.stateNode === null) throw Error(i(166));
          if (n = de.current, li(l)) {
            if (n = l.stateNode, s = l.memoizedProps, r = null, h = nn, h !== null) switch (h.tag) {
              case 27:
              case 5:
                r = h.memoizedProps;
            }
            n[Ct] = l, n = !!(n.nodeValue === s || r !== null && r.suppressHydrationWarning === true || c1(n.nodeValue, s)), n || $a(l);
          } else n = uo(n).createTextNode(r), n[Ct] = l, l.stateNode = n;
        }
        return ot(l), null;
      case 13:
        if (r = l.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (h = li(l), r !== null && r.dehydrated !== null) {
            if (n === null) {
              if (!h) throw Error(i(318));
              if (h = l.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(i(317));
              h[Ct] = l;
            } else ai(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            ot(l), h = false;
          } else h = Zh(), n !== null && n.memoizedState !== null && (n.memoizedState.hydrationErrors = h), h = true;
          if (!h) return l.flags & 256 ? (Ml(l), l) : (Ml(l), null);
        }
        if (Ml(l), (l.flags & 128) !== 0) return l.lanes = s, l;
        if (s = r !== null, n = n !== null && n.memoizedState !== null, s) {
          r = l.child, h = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (h = r.alternate.memoizedState.cachePool.pool);
          var y = null;
          r.memoizedState !== null && r.memoizedState.cachePool !== null && (y = r.memoizedState.cachePool.pool), y !== h && (r.flags |= 2048);
        }
        return s !== n && s && (l.child.flags |= 8192), Pr(l, l.updateQueue), ot(l), null;
      case 4:
        return pe(), n === null && Mu(l.stateNode.containerInfo), ot(l), null;
      case 10:
        return Tl(l.type), ot(l), null;
      case 19:
        if (re(kt), h = l.memoizedState, h === null) return ot(l), null;
        if (r = (l.flags & 128) !== 0, y = h.rendering, y === null) if (r) xi(h, false);
        else {
          if (mt !== 0 || n !== null && (n.flags & 128) !== 0) for (n = l.child; n !== null; ) {
            if (y = Xr(n), y !== null) {
              for (l.flags |= 128, xi(h, false), n = y.updateQueue, l.updateQueue = n, Pr(l, n), l.subtreeFlags = 0, n = s, s = l.child; s !== null; ) Gh(s, n), s = s.sibling;
              return te(kt, kt.current & 1 | 2), l.child;
            }
            n = n.sibling;
          }
          h.tail !== null && Qe() > eo && (l.flags |= 128, r = true, xi(h, false), l.lanes = 4194304);
        }
        else {
          if (!r) if (n = Xr(y), n !== null) {
            if (l.flags |= 128, r = true, n = n.updateQueue, l.updateQueue = n, Pr(l, n), xi(h, true), h.tail === null && h.tailMode === "hidden" && !y.alternate && !Ge) return ot(l), null;
          } else 2 * Qe() - h.renderingStartTime > eo && s !== 536870912 && (l.flags |= 128, r = true, xi(h, false), l.lanes = 4194304);
          h.isBackwards ? (y.sibling = l.child, l.child = y) : (n = h.last, n !== null ? n.sibling = y : l.child = y, h.last = y);
        }
        return h.tail !== null ? (l = h.tail, h.rendering = l, h.tail = l.sibling, h.renderingStartTime = Qe(), l.sibling = null, n = kt.current, te(kt, r ? n & 1 | 2 : n & 1), l) : (ot(l), null);
      case 22:
      case 23:
        return Ml(l), Cc(), r = l.memoizedState !== null, n !== null ? n.memoizedState !== null !== r && (l.flags |= 8192) : r && (l.flags |= 8192), r ? (s & 536870912) !== 0 && (l.flags & 128) === 0 && (ot(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : ot(l), s = l.updateQueue, s !== null && Pr(l, s.retryQueue), s = null, n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (s = n.memoizedState.cachePool.pool), r = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (r = l.memoizedState.cachePool.pool), r !== s && (l.flags |= 2048), n !== null && re(Va), null;
      case 24:
        return s = null, n !== null && (s = n.memoizedState.cache), l.memoizedState.cache !== s && (l.flags |= 2048), Tl(Tt), ot(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, l.tag));
  }
  function h2(n, l) {
    switch (pc(l), l.tag) {
      case 1:
        return n = l.flags, n & 65536 ? (l.flags = n & -65537 | 128, l) : null;
      case 3:
        return Tl(Tt), pe(), n = l.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (l.flags = n & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return ge(l), null;
      case 13:
        if (Ml(l), n = l.memoizedState, n !== null && n.dehydrated !== null) {
          if (l.alternate === null) throw Error(i(340));
          ai();
        }
        return n = l.flags, n & 65536 ? (l.flags = n & -65537 | 128, l) : null;
      case 19:
        return re(kt), null;
      case 4:
        return pe(), null;
      case 10:
        return Tl(l.type), null;
      case 22:
      case 23:
        return Ml(l), Cc(), n !== null && re(Va), n = l.flags, n & 65536 ? (l.flags = n & -65537 | 128, l) : null;
      case 24:
        return Tl(Tt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function y0(n, l) {
    switch (pc(l), l.tag) {
      case 3:
        Tl(Tt), pe();
        break;
      case 26:
      case 27:
      case 5:
        ge(l);
        break;
      case 4:
        pe();
        break;
      case 13:
        Ml(l);
        break;
      case 19:
        re(kt);
        break;
      case 10:
        Tl(l.type);
        break;
      case 22:
      case 23:
        Ml(l), Cc(), n !== null && re(Va);
        break;
      case 24:
        Tl(Tt);
    }
  }
  function Si(n, l) {
    try {
      var s = l.updateQueue, r = s !== null ? s.lastEffect : null;
      if (r !== null) {
        var h = r.next;
        s = h;
        do {
          if ((s.tag & n) === n) {
            r = void 0;
            var y = s.create, _ = s.inst;
            r = y(), _.destroy = r;
          }
          s = s.next;
        } while (s !== h);
      }
    } catch (T) {
      We(l, l.return, T);
    }
  }
  function ea(n, l, s) {
    try {
      var r = l.updateQueue, h = r !== null ? r.lastEffect : null;
      if (h !== null) {
        var y = h.next;
        r = y;
        do {
          if ((r.tag & n) === n) {
            var _ = r.inst, T = _.destroy;
            if (T !== void 0) {
              _.destroy = void 0, h = l;
              var D = s, Z = T;
              try {
                Z();
              } catch (le) {
                We(h, D, le);
              }
            }
          }
          r = r.next;
        } while (r !== y);
      }
    } catch (le) {
      We(l, l.return, le);
    }
  }
  function b0(n) {
    var l = n.updateQueue;
    if (l !== null) {
      var s = n.stateNode;
      try {
        sd(l, s);
      } catch (r) {
        We(n, n.return, r);
      }
    }
  }
  function v0(n, l, s) {
    s.props = Ya(n.type, n.memoizedProps), s.state = n.memoizedState;
    try {
      s.componentWillUnmount();
    } catch (r) {
      We(n, l, r);
    }
  }
  function ji(n, l) {
    try {
      var s = n.ref;
      if (s !== null) {
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var r = n.stateNode;
            break;
          case 30:
            r = n.stateNode;
            break;
          default:
            r = n.stateNode;
        }
        typeof s == "function" ? n.refCleanup = s(r) : s.current = r;
      }
    } catch (h) {
      We(n, l, h);
    }
  }
  function hl(n, l) {
    var s = n.ref, r = n.refCleanup;
    if (s !== null) if (typeof r == "function") try {
      r();
    } catch (h) {
      We(n, l, h);
    } finally {
      n.refCleanup = null, n = n.alternate, n != null && (n.refCleanup = null);
    }
    else if (typeof s == "function") try {
      s(null);
    } catch (h) {
      We(n, l, h);
    }
    else s.current = null;
  }
  function x0(n) {
    var l = n.type, s = n.memoizedProps, r = n.stateNode;
    try {
      e: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && r.focus();
          break e;
        case "img":
          s.src ? r.src = s.src : s.srcSet && (r.srcset = s.srcSet);
      }
    } catch (h) {
      We(n, n.return, h);
    }
  }
  function au(n, l, s) {
    try {
      var r = n.stateNode;
      z2(r, n.type, s, l), r[Gt] = l;
    } catch (h) {
      We(n, n.return, h);
    }
  }
  function S0(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 26 || n.tag === 27 && oa(n.type) || n.tag === 4;
  }
  function su(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || S0(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.tag === 27 && oa(n.type) || n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function iu(n, l, s) {
    var r = n.tag;
    if (r === 5 || r === 6) n = n.stateNode, l ? (s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument.body : s).insertBefore(n, l) : (l = s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument.body : s, l.appendChild(n), s = s._reactRootContainer, s != null || l.onclick !== null || (l.onclick = co));
    else if (r !== 4 && (r === 27 && oa(n.type) && (s = n.stateNode, l = null), n = n.child, n !== null)) for (iu(n, l, s), n = n.sibling; n !== null; ) iu(n, l, s), n = n.sibling;
  }
  function Wr(n, l, s) {
    var r = n.tag;
    if (r === 5 || r === 6) n = n.stateNode, l ? s.insertBefore(n, l) : s.appendChild(n);
    else if (r !== 4 && (r === 27 && oa(n.type) && (s = n.stateNode), n = n.child, n !== null)) for (Wr(n, l, s), n = n.sibling; n !== null; ) Wr(n, l, s), n = n.sibling;
  }
  function j0(n) {
    var l = n.stateNode, s = n.memoizedProps;
    try {
      for (var r = n.type, h = l.attributes; h.length; ) l.removeAttributeNode(h[0]);
      Ht(l, r, s), l[Ct] = n, l[Gt] = s;
    } catch (y) {
      We(n, n.return, y);
    }
  }
  var El = false, bt = false, ru = false, _0 = typeof WeakSet == "function" ? WeakSet : Set, zt = null;
  function d2(n, l) {
    if (n = n.containerInfo, Eu = yo, n = Dh(n), sc(n)) {
      if ("selectionStart" in n) var s = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        s = (s = n.ownerDocument) && s.defaultView || window;
        var r = s.getSelection && s.getSelection();
        if (r && r.rangeCount !== 0) {
          s = r.anchorNode;
          var h = r.anchorOffset, y = r.focusNode;
          r = r.focusOffset;
          try {
            s.nodeType, y.nodeType;
          } catch {
            s = null;
            break e;
          }
          var _ = 0, T = -1, D = -1, Z = 0, le = 0, ie = n, I = null;
          t: for (; ; ) {
            for (var P; ie !== s || h !== 0 && ie.nodeType !== 3 || (T = _ + h), ie !== y || r !== 0 && ie.nodeType !== 3 || (D = _ + r), ie.nodeType === 3 && (_ += ie.nodeValue.length), (P = ie.firstChild) !== null; ) I = ie, ie = P;
            for (; ; ) {
              if (ie === n) break t;
              if (I === s && ++Z === h && (T = _), I === y && ++le === r && (D = _), (P = ie.nextSibling) !== null) break;
              ie = I, I = ie.parentNode;
            }
            ie = P;
          }
          s = T === -1 || D === -1 ? null : { start: T, end: D };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Ou = { focusedElem: n, selectionRange: s }, yo = false, zt = l; zt !== null; ) if (l = zt, n = l.child, (l.subtreeFlags & 1024) !== 0 && n !== null) n.return = l, zt = n;
    else for (; zt !== null; ) {
      switch (l = zt, y = l.alternate, n = l.flags, l.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((n & 1024) !== 0 && y !== null) {
            n = void 0, s = l, h = y.memoizedProps, y = y.memoizedState, r = s.stateNode;
            try {
              var Te = Ya(s.type, h, s.elementType === s.type);
              n = r.getSnapshotBeforeUpdate(Te, y), r.__reactInternalSnapshotBeforeUpdate = n;
            } catch (_e9) {
              We(s, s.return, _e9);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (n = l.stateNode.containerInfo, s = n.nodeType, s === 9) Ru(n);
            else if (s === 1) switch (n.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Ru(n);
                break;
              default:
                n.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((n & 1024) !== 0) throw Error(i(163));
      }
      if (n = l.sibling, n !== null) {
        n.return = l.return, zt = n;
        break;
      }
      zt = l.return;
    }
  }
  function w0(n, l, s) {
    var r = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        ta(n, s), r & 4 && Si(5, s);
        break;
      case 1:
        if (ta(n, s), r & 4) if (n = s.stateNode, l === null) try {
          n.componentDidMount();
        } catch (_) {
          We(s, s.return, _);
        }
        else {
          var h = Ya(s.type, l.memoizedProps);
          l = l.memoizedState;
          try {
            n.componentDidUpdate(h, l, n.__reactInternalSnapshotBeforeUpdate);
          } catch (_) {
            We(s, s.return, _);
          }
        }
        r & 64 && b0(s), r & 512 && ji(s, s.return);
        break;
      case 3:
        if (ta(n, s), r & 64 && (n = s.updateQueue, n !== null)) {
          if (l = null, s.child !== null) switch (s.child.tag) {
            case 27:
            case 5:
              l = s.child.stateNode;
              break;
            case 1:
              l = s.child.stateNode;
          }
          try {
            sd(n, l);
          } catch (_) {
            We(s, s.return, _);
          }
        }
        break;
      case 27:
        l === null && r & 4 && j0(s);
      case 26:
      case 5:
        ta(n, s), l === null && r & 4 && x0(s), r & 512 && ji(s, s.return);
        break;
      case 12:
        ta(n, s);
        break;
      case 13:
        ta(n, s), r & 4 && k0(n, s), r & 64 && (n = s.memoizedState, n !== null && (n = n.dehydrated, n !== null && (s = j2.bind(null, s), q2(n, s))));
        break;
      case 22:
        if (r = s.memoizedState !== null || El, !r) {
          l = l !== null && l.memoizedState !== null || bt, h = El;
          var y = bt;
          El = r, (bt = l) && !y ? na(n, s, (s.subtreeFlags & 8772) !== 0) : ta(n, s), El = h, bt = y;
        }
        break;
      case 30:
        break;
      default:
        ta(n, s);
    }
  }
  function N0(n) {
    var l = n.alternate;
    l !== null && (n.alternate = null, N0(l)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (l = n.stateNode, l !== null && Ys(l)), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  var st = null, un = false;
  function Ol(n, l, s) {
    for (s = s.child; s !== null; ) T0(n, l, s), s = s.sibling;
  }
  function T0(n, l, s) {
    if (ut && typeof ut.onCommitFiberUnmount == "function") try {
      ut.onCommitFiberUnmount(Tn, s);
    } catch {
    }
    switch (s.tag) {
      case 26:
        bt || hl(s, l), Ol(n, l, s), s.memoizedState ? s.memoizedState.count-- : s.stateNode && (s = s.stateNode, s.parentNode.removeChild(s));
        break;
      case 27:
        bt || hl(s, l);
        var r = st, h = un;
        oa(s.type) && (st = s.stateNode, un = false), Ol(n, l, s), Ei(s.stateNode), st = r, un = h;
        break;
      case 5:
        bt || hl(s, l);
      case 6:
        if (r = st, h = un, st = null, Ol(n, l, s), st = r, un = h, st !== null) if (un) try {
          (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(s.stateNode);
        } catch (y) {
          We(s, l, y);
        }
        else try {
          st.removeChild(s.stateNode);
        } catch (y) {
          We(s, l, y);
        }
        break;
      case 18:
        st !== null && (un ? (n = st, m1(n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, s.stateNode), Hi(n)) : m1(st, s.stateNode));
        break;
      case 4:
        r = st, h = un, st = s.stateNode.containerInfo, un = true, Ol(n, l, s), st = r, un = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bt || ea(2, s, l), bt || ea(4, s, l), Ol(n, l, s);
        break;
      case 1:
        bt || (hl(s, l), r = s.stateNode, typeof r.componentWillUnmount == "function" && v0(s, l, r)), Ol(n, l, s);
        break;
      case 21:
        Ol(n, l, s);
        break;
      case 22:
        bt = (r = bt) || s.memoizedState !== null, Ol(n, l, s), bt = r;
        break;
      default:
        Ol(n, l, s);
    }
  }
  function k0(n, l) {
    if (l.memoizedState === null && (n = l.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null)))) try {
      Hi(n);
    } catch (s) {
      We(l, l.return, s);
    }
  }
  function m2(n) {
    switch (n.tag) {
      case 13:
      case 19:
        var l = n.stateNode;
        return l === null && (l = n.stateNode = new _0()), l;
      case 22:
        return n = n.stateNode, l = n._retryCache, l === null && (l = n._retryCache = new _0()), l;
      default:
        throw Error(i(435, n.tag));
    }
  }
  function ou(n, l) {
    var s = m2(n);
    l.forEach(function(r) {
      var h = _2.bind(null, n, r);
      s.has(r) || (s.add(r), r.then(h, h));
    });
  }
  function pn(n, l) {
    var s = l.deletions;
    if (s !== null) for (var r = 0; r < s.length; r++) {
      var h = s[r], y = n, _ = l, T = _;
      e: for (; T !== null; ) {
        switch (T.tag) {
          case 27:
            if (oa(T.type)) {
              st = T.stateNode, un = false;
              break e;
            }
            break;
          case 5:
            st = T.stateNode, un = false;
            break e;
          case 3:
          case 4:
            st = T.stateNode.containerInfo, un = true;
            break e;
        }
        T = T.return;
      }
      if (st === null) throw Error(i(160));
      T0(y, _, h), st = null, un = false, y = h.alternate, y !== null && (y.return = null), h.return = null;
    }
    if (l.subtreeFlags & 13878) for (l = l.child; l !== null; ) M0(l, n), l = l.sibling;
  }
  var tl = null;
  function M0(n, l) {
    var s = n.alternate, r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pn(l, n), yn(n), r & 4 && (ea(3, n, n.return), Si(3, n), ea(5, n, n.return));
        break;
      case 1:
        pn(l, n), yn(n), r & 512 && (bt || s === null || hl(s, s.return)), r & 64 && El && (n = n.updateQueue, n !== null && (r = n.callbacks, r !== null && (s = n.shared.hiddenCallbacks, n.shared.hiddenCallbacks = s === null ? r : s.concat(r))));
        break;
      case 26:
        var h = tl;
        if (pn(l, n), yn(n), r & 512 && (bt || s === null || hl(s, s.return)), r & 4) {
          var y = s !== null ? s.memoizedState : null;
          if (r = n.memoizedState, s === null) if (r === null) if (n.stateNode === null) {
            e: {
              r = n.type, s = n.memoizedProps, h = h.ownerDocument || h;
              t: switch (r) {
                case "title":
                  y = h.getElementsByTagName("title")[0], (!y || y[ln] || y[Ct] || y.namespaceURI === "http://www.w3.org/2000/svg" || y.hasAttribute("itemprop")) && (y = h.createElement(r), h.head.insertBefore(y, h.querySelector("head > title"))), Ht(y, r, s), y[Ct] = n, ft(y), r = y;
                  break e;
                case "link":
                  var _ = j1("link", "href", h).get(r + (s.href || ""));
                  if (_) {
                    for (var T = 0; T < _.length; T++) if (y = _[T], y.getAttribute("href") === (s.href == null || s.href === "" ? null : s.href) && y.getAttribute("rel") === (s.rel == null ? null : s.rel) && y.getAttribute("title") === (s.title == null ? null : s.title) && y.getAttribute("crossorigin") === (s.crossOrigin == null ? null : s.crossOrigin)) {
                      _.splice(T, 1);
                      break t;
                    }
                  }
                  y = h.createElement(r), Ht(y, r, s), h.head.appendChild(y);
                  break;
                case "meta":
                  if (_ = j1("meta", "content", h).get(r + (s.content || ""))) {
                    for (T = 0; T < _.length; T++) if (y = _[T], y.getAttribute("content") === (s.content == null ? null : "" + s.content) && y.getAttribute("name") === (s.name == null ? null : s.name) && y.getAttribute("property") === (s.property == null ? null : s.property) && y.getAttribute("http-equiv") === (s.httpEquiv == null ? null : s.httpEquiv) && y.getAttribute("charset") === (s.charSet == null ? null : s.charSet)) {
                      _.splice(T, 1);
                      break t;
                    }
                  }
                  y = h.createElement(r), Ht(y, r, s), h.head.appendChild(y);
                  break;
                default:
                  throw Error(i(468, r));
              }
              y[Ct] = n, ft(y), r = y;
            }
            n.stateNode = r;
          } else _1(h, n.type, n.stateNode);
          else n.stateNode = S1(h, r, n.memoizedProps);
          else y !== r ? (y === null ? s.stateNode !== null && (s = s.stateNode, s.parentNode.removeChild(s)) : y.count--, r === null ? _1(h, n.type, n.stateNode) : S1(h, r, n.memoizedProps)) : r === null && n.stateNode !== null && au(n, n.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        pn(l, n), yn(n), r & 512 && (bt || s === null || hl(s, s.return)), s !== null && r & 4 && au(n, n.memoizedProps, s.memoizedProps);
        break;
      case 5:
        if (pn(l, n), yn(n), r & 512 && (bt || s === null || hl(s, s.return)), n.flags & 32) {
          h = n.stateNode;
          try {
            rl(h, "");
          } catch (P) {
            We(n, n.return, P);
          }
        }
        r & 4 && n.stateNode != null && (h = n.memoizedProps, au(n, h, s !== null ? s.memoizedProps : h)), r & 1024 && (ru = true);
        break;
      case 6:
        if (pn(l, n), yn(n), r & 4) {
          if (n.stateNode === null) throw Error(i(162));
          r = n.memoizedProps, s = n.stateNode;
          try {
            s.nodeValue = r;
          } catch (P) {
            We(n, n.return, P);
          }
        }
        break;
      case 3:
        if (mo = null, h = tl, tl = fo(l.containerInfo), pn(l, n), tl = h, yn(n), r & 4 && s !== null && s.memoizedState.isDehydrated) try {
          Hi(l.containerInfo);
        } catch (P) {
          We(n, n.return, P);
        }
        ru && (ru = false, A0(n));
        break;
      case 4:
        r = tl, tl = fo(n.stateNode.containerInfo), pn(l, n), yn(n), tl = r;
        break;
      case 12:
        pn(l, n), yn(n);
        break;
      case 13:
        pn(l, n), yn(n), n.child.flags & 8192 && n.memoizedState !== null != (s !== null && s.memoizedState !== null) && (mu = Qe()), r & 4 && (r = n.updateQueue, r !== null && (n.updateQueue = null, ou(n, r)));
        break;
      case 22:
        h = n.memoizedState !== null;
        var D = s !== null && s.memoizedState !== null, Z = El, le = bt;
        if (El = Z || h, bt = le || D, pn(l, n), bt = le, El = Z, yn(n), r & 8192) e: for (l = n.stateNode, l._visibility = h ? l._visibility & -2 : l._visibility | 1, h && (s === null || D || El || bt || Ga(n)), s = null, l = n; ; ) {
          if (l.tag === 5 || l.tag === 26) {
            if (s === null) {
              D = s = l;
              try {
                if (y = D.stateNode, h) _ = y.style, typeof _.setProperty == "function" ? _.setProperty("display", "none", "important") : _.display = "none";
                else {
                  T = D.stateNode;
                  var ie = D.memoizedProps.style, I = ie != null && ie.hasOwnProperty("display") ? ie.display : null;
                  T.style.display = I == null || typeof I == "boolean" ? "" : ("" + I).trim();
                }
              } catch (P) {
                We(D, D.return, P);
              }
            }
          } else if (l.tag === 6) {
            if (s === null) {
              D = l;
              try {
                D.stateNode.nodeValue = h ? "" : D.memoizedProps;
              } catch (P) {
                We(D, D.return, P);
              }
            }
          } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === n) && l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n) break e;
            s === l && (s = null), l = l.return;
          }
          s === l && (s = null), l.sibling.return = l.return, l = l.sibling;
        }
        r & 4 && (r = n.updateQueue, r !== null && (s = r.retryQueue, s !== null && (r.retryQueue = null, ou(n, s))));
        break;
      case 19:
        pn(l, n), yn(n), r & 4 && (r = n.updateQueue, r !== null && (n.updateQueue = null, ou(n, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pn(l, n), yn(n);
    }
  }
  function yn(n) {
    var l = n.flags;
    if (l & 2) {
      try {
        for (var s, r = n.return; r !== null; ) {
          if (S0(r)) {
            s = r;
            break;
          }
          r = r.return;
        }
        if (s == null) throw Error(i(160));
        switch (s.tag) {
          case 27:
            var h = s.stateNode, y = su(n);
            Wr(n, y, h);
            break;
          case 5:
            var _ = s.stateNode;
            s.flags & 32 && (rl(_, ""), s.flags &= -33);
            var T = su(n);
            Wr(n, T, _);
            break;
          case 3:
          case 4:
            var D = s.stateNode.containerInfo, Z = su(n);
            iu(n, Z, D);
            break;
          default:
            throw Error(i(161));
        }
      } catch (le) {
        We(n, n.return, le);
      }
      n.flags &= -3;
    }
    l & 4096 && (n.flags &= -4097);
  }
  function A0(n) {
    if (n.subtreeFlags & 1024) for (n = n.child; n !== null; ) {
      var l = n;
      A0(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), n = n.sibling;
    }
  }
  function ta(n, l) {
    if (l.subtreeFlags & 8772) for (l = l.child; l !== null; ) w0(n, l.alternate, l), l = l.sibling;
  }
  function Ga(n) {
    for (n = n.child; n !== null; ) {
      var l = n;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ea(4, l, l.return), Ga(l);
          break;
        case 1:
          hl(l, l.return);
          var s = l.stateNode;
          typeof s.componentWillUnmount == "function" && v0(l, l.return, s), Ga(l);
          break;
        case 27:
          Ei(l.stateNode);
        case 26:
        case 5:
          hl(l, l.return), Ga(l);
          break;
        case 22:
          l.memoizedState === null && Ga(l);
          break;
        case 30:
          Ga(l);
          break;
        default:
          Ga(l);
      }
      n = n.sibling;
    }
  }
  function na(n, l, s) {
    for (s = s && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var r = l.alternate, h = n, y = l, _ = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          na(h, y, s), Si(4, y);
          break;
        case 1:
          if (na(h, y, s), r = y, h = r.stateNode, typeof h.componentDidMount == "function") try {
            h.componentDidMount();
          } catch (Z) {
            We(r, r.return, Z);
          }
          if (r = y, h = r.updateQueue, h !== null) {
            var T = r.stateNode;
            try {
              var D = h.shared.hiddenCallbacks;
              if (D !== null) for (h.shared.hiddenCallbacks = null, h = 0; h < D.length; h++) ad(D[h], T);
            } catch (Z) {
              We(r, r.return, Z);
            }
          }
          s && _ & 64 && b0(y), ji(y, y.return);
          break;
        case 27:
          j0(y);
        case 26:
        case 5:
          na(h, y, s), s && r === null && _ & 4 && x0(y), ji(y, y.return);
          break;
        case 12:
          na(h, y, s);
          break;
        case 13:
          na(h, y, s), s && _ & 4 && k0(h, y);
          break;
        case 22:
          y.memoizedState === null && na(h, y, s), ji(y, y.return);
          break;
        case 30:
          break;
        default:
          na(h, y, s);
      }
      l = l.sibling;
    }
  }
  function cu(n, l) {
    var s = null;
    n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (s = n.memoizedState.cachePool.pool), n = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (n = l.memoizedState.cachePool.pool), n !== s && (n != null && n.refCount++, s != null && ri(s));
  }
  function uu(n, l) {
    n = null, l.alternate !== null && (n = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== n && (l.refCount++, n != null && ri(n));
  }
  function dl(n, l, s, r) {
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) C0(n, l, s, r), l = l.sibling;
  }
  function C0(n, l, s, r) {
    var h = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        dl(n, l, s, r), h & 2048 && Si(9, l);
        break;
      case 1:
        dl(n, l, s, r);
        break;
      case 3:
        dl(n, l, s, r), h & 2048 && (n = null, l.alternate !== null && (n = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== n && (l.refCount++, n != null && ri(n)));
        break;
      case 12:
        if (h & 2048) {
          dl(n, l, s, r), n = l.stateNode;
          try {
            var y = l.memoizedProps, _ = y.id, T = y.onPostCommit;
            typeof T == "function" && T(_, l.alternate === null ? "mount" : "update", n.passiveEffectDuration, -0);
          } catch (D) {
            We(l, l.return, D);
          }
        } else dl(n, l, s, r);
        break;
      case 13:
        dl(n, l, s, r);
        break;
      case 23:
        break;
      case 22:
        y = l.stateNode, _ = l.alternate, l.memoizedState !== null ? y._visibility & 2 ? dl(n, l, s, r) : _i5(n, l) : y._visibility & 2 ? dl(n, l, s, r) : (y._visibility |= 2, vs(n, l, s, r, (l.subtreeFlags & 10256) !== 0)), h & 2048 && cu(_, l);
        break;
      case 24:
        dl(n, l, s, r), h & 2048 && uu(l.alternate, l);
        break;
      default:
        dl(n, l, s, r);
    }
  }
  function vs(n, l, s, r, h) {
    for (h = h && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var y = n, _ = l, T = s, D = r, Z = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          vs(y, _, T, D, h), Si(8, _);
          break;
        case 23:
          break;
        case 22:
          var le = _.stateNode;
          _.memoizedState !== null ? le._visibility & 2 ? vs(y, _, T, D, h) : _i5(y, _) : (le._visibility |= 2, vs(y, _, T, D, h)), h && Z & 2048 && cu(_.alternate, _);
          break;
        case 24:
          vs(y, _, T, D, h), h && Z & 2048 && uu(_.alternate, _);
          break;
        default:
          vs(y, _, T, D, h);
      }
      l = l.sibling;
    }
  }
  function _i5(n, l) {
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) {
      var s = n, r = l, h = r.flags;
      switch (r.tag) {
        case 22:
          _i5(s, r), h & 2048 && cu(r.alternate, r);
          break;
        case 24:
          _i5(s, r), h & 2048 && uu(r.alternate, r);
          break;
        default:
          _i5(s, r);
      }
      l = l.sibling;
    }
  }
  var wi = 8192;
  function xs(n) {
    if (n.subtreeFlags & wi) for (n = n.child; n !== null; ) E0(n), n = n.sibling;
  }
  function E0(n) {
    switch (n.tag) {
      case 26:
        xs(n), n.flags & wi && n.memoizedState !== null && J2(tl, n.memoizedState, n.memoizedProps);
        break;
      case 5:
        xs(n);
        break;
      case 3:
      case 4:
        var l = tl;
        tl = fo(n.stateNode.containerInfo), xs(n), tl = l;
        break;
      case 22:
        n.memoizedState === null && (l = n.alternate, l !== null && l.memoizedState !== null ? (l = wi, wi = 16777216, xs(n), wi = l) : xs(n));
        break;
      default:
        xs(n);
    }
  }
  function O0(n) {
    var l = n.alternate;
    if (l !== null && (n = l.child, n !== null)) {
      l.child = null;
      do
        l = n.sibling, n.sibling = null, n = l;
      while (n !== null);
    }
  }
  function Ni(n) {
    var l = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (l !== null) for (var s = 0; s < l.length; s++) {
        var r = l[s];
        zt = r, D0(r, n);
      }
      O0(n);
    }
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) z0(n), n = n.sibling;
  }
  function z0(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ni(n), n.flags & 2048 && ea(9, n, n.return);
        break;
      case 3:
        Ni(n);
        break;
      case 12:
        Ni(n);
        break;
      case 22:
        var l = n.stateNode;
        n.memoizedState !== null && l._visibility & 2 && (n.return === null || n.return.tag !== 13) ? (l._visibility &= -3, Jr(n)) : Ni(n);
        break;
      default:
        Ni(n);
    }
  }
  function Jr(n) {
    var l = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (l !== null) for (var s = 0; s < l.length; s++) {
        var r = l[s];
        zt = r, D0(r, n);
      }
      O0(n);
    }
    for (n = n.child; n !== null; ) {
      switch (l = n, l.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, l, l.return), Jr(l);
          break;
        case 22:
          s = l.stateNode, s._visibility & 2 && (s._visibility &= -3, Jr(l));
          break;
        default:
          Jr(l);
      }
      n = n.sibling;
    }
  }
  function D0(n, l) {
    for (; zt !== null; ) {
      var s = zt;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, s, l);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var r = s.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          ri(s.memoizedState.cache);
      }
      if (r = s.child, r !== null) r.return = s, zt = r;
      else e: for (s = n; zt !== null; ) {
        r = zt;
        var h = r.sibling, y = r.return;
        if (N0(r), r === s) {
          zt = null;
          break e;
        }
        if (h !== null) {
          h.return = y, zt = h;
          break e;
        }
        zt = y;
      }
    }
  }
  var g2 = { getCacheForType: function(n) {
    var l = Qt(Tt), s = l.data.get(n);
    return s === void 0 && (s = n(), l.data.set(n, s)), s;
  } }, p2 = typeof WeakMap == "function" ? WeakMap : Map, Xe = 0, et = null, De = null, qe = 0, Fe = 0, bn = null, la = false, Ss = false, fu = false, zl = 0, mt = 0, aa = 0, Qa = 0, hu = 0, Dn = 0, js = 0, Ti = null, fn = null, du = false, mu = 0, eo = 1 / 0, to = null, sa = null, $t = 0, ia = null, _s3 = null, ws = 0, gu = 0, pu = null, R0 = null, ki = 0, yu = null;
  function vn() {
    if ((Xe & 2) !== 0 && qe !== 0) return qe & -qe;
    if (R.T !== null) {
      var n = fs;
      return n !== 0 ? n : wu();
    }
    return Yl();
  }
  function L0() {
    Dn === 0 && (Dn = (qe & 536870912) === 0 || Ge ? Vs() : 536870912);
    var n = zn.current;
    return n !== null && (n.flags |= 32), Dn;
  }
  function xn(n, l, s) {
    (n === et && (Fe === 2 || Fe === 9) || n.cancelPendingCommit !== null) && (Ns(n, 0), ra(n, qe, Dn, false)), Jt(n, s), ((Xe & 2) === 0 || n !== et) && (n === et && ((Xe & 2) === 0 && (Qa |= s), mt === 4 && ra(n, qe, Dn, false)), ml(n));
  }
  function U0(n, l, s) {
    if ((Xe & 6) !== 0) throw Error(i(327));
    var r = !s && (l & 124) === 0 && (l & n.expiredLanes) === 0 || wa(n, l), h = r ? v2(n, l) : xu(n, l, true), y = r;
    do {
      if (h === 0) {
        Ss && !r && ra(n, l, 0, false);
        break;
      } else {
        if (s = n.current.alternate, y && !y2(s)) {
          h = xu(n, l, false), y = false;
          continue;
        }
        if (h === 2) {
          if (y = l, n.errorRecoveryDisabledLanes & y) var _ = 0;
          else _ = n.pendingLanes & -536870913, _ = _ !== 0 ? _ : _ & 536870912 ? 536870912 : 0;
          if (_ !== 0) {
            l = _;
            e: {
              var T = n;
              h = Ti;
              var D = T.current.memoizedState.isDehydrated;
              if (D && (Ns(T, _).flags |= 256), _ = xu(T, _, false), _ !== 2) {
                if (fu && !D) {
                  T.errorRecoveryDisabledLanes |= y, Qa |= y, h = 4;
                  break e;
                }
                y = fn, fn = h, y !== null && (fn === null ? fn = y : fn.push.apply(fn, y));
              }
              h = _;
            }
            if (y = false, h !== 2) continue;
          }
        }
        if (h === 1) {
          Ns(n, 0), ra(n, l, 0, true);
          break;
        }
        e: {
          switch (r = n, y = h, y) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              ra(r, l, Dn, !la);
              break e;
            case 2:
              fn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((l & 62914560) === l && (h = mu + 300 - Qe(), 10 < h)) {
            if (ra(r, l, Dn, !la), Pa(r, 0, true) !== 0) break e;
            r.timeoutHandle = h1($0.bind(null, r, s, fn, to, du, l, Dn, Qa, js, la, y, 2, -0, 0), h);
            break e;
          }
          $0(r, s, fn, to, du, l, Dn, Qa, js, la, y, 0, -0, 0);
        }
      }
      break;
    } while (true);
    ml(n);
  }
  function $0(n, l, s, r, h, y, _, T, D, Z, le, ie, I, P) {
    if (n.timeoutHandle = -1, ie = l.subtreeFlags, (ie & 8192 || (ie & 16785408) === 16785408) && (Di = { stylesheets: null, count: 0, unsuspend: W2 }, E0(l), ie = eb(), ie !== null)) {
      n.cancelPendingCommit = ie(Q0.bind(null, n, l, y, s, r, h, _, T, D, le, 1, I, P)), ra(n, y, _, !Z);
      return;
    }
    Q0(n, l, y, s, r, h, _, T, D);
  }
  function y2(n) {
    for (var l = n; ; ) {
      var s = l.tag;
      if ((s === 0 || s === 11 || s === 15) && l.flags & 16384 && (s = l.updateQueue, s !== null && (s = s.stores, s !== null))) for (var r = 0; r < s.length; r++) {
        var h = s[r], y = h.getSnapshot;
        h = h.value;
        try {
          if (!mn(y(), h)) return false;
        } catch {
          return false;
        }
      }
      if (s = l.child, l.subtreeFlags & 16384 && s !== null) s.return = l, l = s;
      else {
        if (l === n) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n) return true;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return true;
  }
  function ra(n, l, s, r) {
    l &= ~hu, l &= ~Qa, n.suspendedLanes |= l, n.pingedLanes &= ~l, r && (n.warmLanes |= l), r = n.expirationTimes;
    for (var h = l; 0 < h; ) {
      var y = 31 - at(h), _ = 1 << y;
      r[y] = -1, h &= ~_;
    }
    s !== 0 && Na(n, s, l);
  }
  function no() {
    return (Xe & 6) === 0 ? (Mi(0), false) : true;
  }
  function bu() {
    if (De !== null) {
      if (Fe === 0) var n = De.return;
      else n = De, Nl = Ha = null, Rc(n), ys = null, bi = 0, n = De;
      for (; n !== null; ) y0(n.alternate, n), n = n.return;
      De = null;
    }
  }
  function Ns(n, l) {
    var s = n.timeoutHandle;
    s !== -1 && (n.timeoutHandle = -1, R2(s)), s = n.cancelPendingCommit, s !== null && (n.cancelPendingCommit = null, s()), bu(), et = n, De = s = jl(n.current, null), qe = l, Fe = 0, bn = null, la = false, Ss = wa(n, l), fu = false, js = Dn = hu = Qa = aa = mt = 0, fn = Ti = null, du = false, (l & 8) !== 0 && (l |= l & 32);
    var r = n.entangledLanes;
    if (r !== 0) for (n = n.entanglements, r &= l; 0 < r; ) {
      var h = 31 - at(r), y = 1 << h;
      l |= n[h], r &= ~y;
    }
    return zl = l, wr(), s;
  }
  function H0(n, l) {
    Ce = null, R.H = Yr, l === ci || l === zr ? (l = nd(), Fe = 3) : l === Jh ? (l = nd(), Fe = 4) : Fe = l === l0 ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, bn = l, De === null && (mt = 1, Zr(n, An(l, n.current)));
  }
  function q0() {
    var n = R.H;
    return R.H = Yr, n === null ? Yr : n;
  }
  function V0() {
    var n = R.A;
    return R.A = g2, n;
  }
  function vu() {
    mt = 4, la || (qe & 4194048) !== qe && zn.current !== null || (Ss = true), (aa & 134217727) === 0 && (Qa & 134217727) === 0 || et === null || ra(et, qe, Dn, false);
  }
  function xu(n, l, s) {
    var r = Xe;
    Xe |= 2;
    var h = q0(), y = V0();
    (et !== n || qe !== l) && (to = null, Ns(n, l)), l = false;
    var _ = mt;
    e: do
      try {
        if (Fe !== 0 && De !== null) {
          var T = De, D = bn;
          switch (Fe) {
            case 8:
              bu(), _ = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              zn.current === null && (l = true);
              var Z = Fe;
              if (Fe = 0, bn = null, Ts(n, T, D, Z), s && Ss) {
                _ = 0;
                break e;
              }
              break;
            default:
              Z = Fe, Fe = 0, bn = null, Ts(n, T, D, Z);
          }
        }
        b2(), _ = mt;
        break;
      } catch (le) {
        H0(n, le);
      }
    while (true);
    return l && n.shellSuspendCounter++, Nl = Ha = null, Xe = r, R.H = h, R.A = y, De === null && (et = null, qe = 0, wr()), _;
  }
  function b2() {
    for (; De !== null; ) B0(De);
  }
  function v2(n, l) {
    var s = Xe;
    Xe |= 2;
    var r = q0(), h = V0();
    et !== n || qe !== l ? (to = null, eo = Qe() + 500, Ns(n, l)) : Ss = wa(n, l);
    e: do
      try {
        if (Fe !== 0 && De !== null) {
          l = De;
          var y = bn;
          t: switch (Fe) {
            case 1:
              Fe = 0, bn = null, Ts(n, l, y, 1);
              break;
            case 2:
            case 9:
              if (ed(y)) {
                Fe = 0, bn = null, Y0(l);
                break;
              }
              l = function() {
                Fe !== 2 && Fe !== 9 || et !== n || (Fe = 7), ml(n);
              }, y.then(l, l);
              break e;
            case 3:
              Fe = 7;
              break e;
            case 4:
              Fe = 5;
              break e;
            case 7:
              ed(y) ? (Fe = 0, bn = null, Y0(l)) : (Fe = 0, bn = null, Ts(n, l, y, 7));
              break;
            case 5:
              var _ = null;
              switch (De.tag) {
                case 26:
                  _ = De.memoizedState;
                case 5:
                case 27:
                  var T = De;
                  if (!_ || w1(_)) {
                    Fe = 0, bn = null;
                    var D = T.sibling;
                    if (D !== null) De = D;
                    else {
                      var Z = T.return;
                      Z !== null ? (De = Z, lo(Z)) : De = null;
                    }
                    break t;
                  }
              }
              Fe = 0, bn = null, Ts(n, l, y, 5);
              break;
            case 6:
              Fe = 0, bn = null, Ts(n, l, y, 6);
              break;
            case 8:
              bu(), mt = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        x2();
        break;
      } catch (le) {
        H0(n, le);
      }
    while (true);
    return Nl = Ha = null, R.H = r, R.A = h, Xe = s, De !== null ? 0 : (et = null, qe = 0, wr(), mt);
  }
  function x2() {
    for (; De !== null && !Je(); ) B0(De);
  }
  function B0(n) {
    var l = g0(n.alternate, n, zl);
    n.memoizedProps = n.pendingProps, l === null ? lo(n) : De = l;
  }
  function Y0(n) {
    var l = n, s = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = c0(s, l, l.pendingProps, l.type, void 0, qe);
        break;
      case 11:
        l = c0(s, l, l.pendingProps, l.type.render, l.ref, qe);
        break;
      case 5:
        Rc(l);
      default:
        y0(s, l), l = De = Gh(l, zl), l = g0(s, l, zl);
    }
    n.memoizedProps = n.pendingProps, l === null ? lo(n) : De = l;
  }
  function Ts(n, l, s, r) {
    Nl = Ha = null, Rc(l), ys = null, bi = 0;
    var h = l.return;
    try {
      if (c2(n, h, l, s, qe)) {
        mt = 1, Zr(n, An(s, n.current)), De = null;
        return;
      }
    } catch (y) {
      if (h !== null) throw De = h, y;
      mt = 1, Zr(n, An(s, n.current)), De = null;
      return;
    }
    l.flags & 32768 ? (Ge || r === 1 ? n = true : Ss || (qe & 536870912) !== 0 ? n = false : (la = n = true, (r === 2 || r === 9 || r === 3 || r === 6) && (r = zn.current, r !== null && r.tag === 13 && (r.flags |= 16384))), G0(l, n)) : lo(l);
  }
  function lo(n) {
    var l = n;
    do {
      if ((l.flags & 32768) !== 0) {
        G0(l, la);
        return;
      }
      n = l.return;
      var s = f2(l.alternate, l, zl);
      if (s !== null) {
        De = s;
        return;
      }
      if (l = l.sibling, l !== null) {
        De = l;
        return;
      }
      De = l = n;
    } while (l !== null);
    mt === 0 && (mt = 5);
  }
  function G0(n, l) {
    do {
      var s = h2(n.alternate, n);
      if (s !== null) {
        s.flags &= 32767, De = s;
        return;
      }
      if (s = n.return, s !== null && (s.flags |= 32768, s.subtreeFlags = 0, s.deletions = null), !l && (n = n.sibling, n !== null)) {
        De = n;
        return;
      }
      De = n = s;
    } while (n !== null);
    mt = 6, De = null;
  }
  function Q0(n, l, s, r, h, y, _, T, D) {
    n.cancelPendingCommit = null;
    do
      ao();
    while ($t !== 0);
    if ((Xe & 6) !== 0) throw Error(i(327));
    if (l !== null) {
      if (l === n.current) throw Error(i(177));
      if (y = l.lanes | l.childLanes, y |= uc, yl(n, s, y, _, T, D), n === et && (De = et = null, qe = 0), _s3 = l, ia = n, ws = s, gu = y, pu = h, R0 = r, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (n.callbackNode = null, n.callbackPriority = 0, w2(Yt, function() {
        return I0(), null;
      })) : (n.callbackNode = null, n.callbackPriority = 0), r = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || r) {
        r = R.T, R.T = null, h = G.p, G.p = 2, _ = Xe, Xe |= 4;
        try {
          d2(n, l, s);
        } finally {
          Xe = _, G.p = h, R.T = r;
        }
      }
      $t = 1, X0(), F0(), Z0();
    }
  }
  function X0() {
    if ($t === 1) {
      $t = 0;
      var n = ia, l = _s3, s = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || s) {
        s = R.T, R.T = null;
        var r = G.p;
        G.p = 2;
        var h = Xe;
        Xe |= 4;
        try {
          M0(l, n);
          var y = Ou, _ = Dh(n.containerInfo), T = y.focusedElem, D = y.selectionRange;
          if (_ !== T && T && T.ownerDocument && zh(T.ownerDocument.documentElement, T)) {
            if (D !== null && sc(T)) {
              var Z = D.start, le = D.end;
              if (le === void 0 && (le = Z), "selectionStart" in T) T.selectionStart = Z, T.selectionEnd = Math.min(le, T.value.length);
              else {
                var ie = T.ownerDocument || document, I = ie && ie.defaultView || window;
                if (I.getSelection) {
                  var P = I.getSelection(), Te = T.textContent.length, _e9 = Math.min(D.start, Te), Ie = D.end === void 0 ? _e9 : Math.min(D.end, Te);
                  !P.extend && _e9 > Ie && (_ = Ie, Ie = _e9, _e9 = _);
                  var V = Oh(T, _e9), U = Oh(T, Ie);
                  if (V && U && (P.rangeCount !== 1 || P.anchorNode !== V.node || P.anchorOffset !== V.offset || P.focusNode !== U.node || P.focusOffset !== U.offset)) {
                    var X = ie.createRange();
                    X.setStart(V.node, V.offset), P.removeAllRanges(), _e9 > Ie ? (P.addRange(X), P.extend(U.node, U.offset)) : (X.setEnd(U.node, U.offset), P.addRange(X));
                  }
                }
              }
            }
            for (ie = [], P = T; P = P.parentNode; ) P.nodeType === 1 && ie.push({ element: P, left: P.scrollLeft, top: P.scrollTop });
            for (typeof T.focus == "function" && T.focus(), T = 0; T < ie.length; T++) {
              var se = ie[T];
              se.element.scrollLeft = se.left, se.element.scrollTop = se.top;
            }
          }
          yo = !!Eu, Ou = Eu = null;
        } finally {
          Xe = h, G.p = r, R.T = s;
        }
      }
      n.current = l, $t = 2;
    }
  }
  function F0() {
    if ($t === 2) {
      $t = 0;
      var n = ia, l = _s3, s = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || s) {
        s = R.T, R.T = null;
        var r = G.p;
        G.p = 2;
        var h = Xe;
        Xe |= 4;
        try {
          w0(n, l.alternate, l);
        } finally {
          Xe = h, G.p = r, R.T = s;
        }
      }
      $t = 3;
    }
  }
  function Z0() {
    if ($t === 4 || $t === 3) {
      $t = 0, tt();
      var n = ia, l = _s3, s = ws, r = R0;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? $t = 5 : ($t = 0, _s3 = ia = null, K0(n, n.pendingLanes));
      var h = n.pendingLanes;
      if (h === 0 && (sa = null), Bl(s), l = l.stateNode, ut && typeof ut.onCommitFiberRoot == "function") try {
        ut.onCommitFiberRoot(Tn, l, void 0, (l.current.flags & 128) === 128);
      } catch {
      }
      if (r !== null) {
        l = R.T, h = G.p, G.p = 2, R.T = null;
        try {
          for (var y = n.onRecoverableError, _ = 0; _ < r.length; _++) {
            var T = r[_];
            y(T.value, { componentStack: T.stack });
          }
        } finally {
          R.T = l, G.p = h;
        }
      }
      (ws & 3) !== 0 && ao(), ml(n), h = n.pendingLanes, (s & 4194090) !== 0 && (h & 42) !== 0 ? n === yu ? ki++ : (ki = 0, yu = n) : ki = 0, Mi(0);
    }
  }
  function K0(n, l) {
    (n.pooledCacheLanes &= l) === 0 && (l = n.pooledCache, l != null && (n.pooledCache = null, ri(l)));
  }
  function ao(n) {
    return X0(), F0(), Z0(), I0();
  }
  function I0() {
    if ($t !== 5) return false;
    var n = ia, l = gu;
    gu = 0;
    var s = Bl(ws), r = R.T, h = G.p;
    try {
      G.p = 32 > s ? 32 : s, R.T = null, s = pu, pu = null;
      var y = ia, _ = ws;
      if ($t = 0, _s3 = ia = null, ws = 0, (Xe & 6) !== 0) throw Error(i(331));
      var T = Xe;
      if (Xe |= 4, z0(y.current), C0(y, y.current, _, s), Xe = T, Mi(0, false), ut && typeof ut.onPostCommitFiberRoot == "function") try {
        ut.onPostCommitFiberRoot(Tn, y);
      } catch {
      }
      return true;
    } finally {
      G.p = h, R.T = r, K0(n, l);
    }
  }
  function P0(n, l, s) {
    l = An(s, l), l = Kc(n.stateNode, l, 2), n = Il(n, l, 2), n !== null && (Jt(n, 2), ml(n));
  }
  function We(n, l, s) {
    if (n.tag === 3) P0(n, n, s);
    else for (; l !== null; ) {
      if (l.tag === 3) {
        P0(l, n, s);
        break;
      } else if (l.tag === 1) {
        var r = l.stateNode;
        if (typeof l.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sa === null || !sa.has(r))) {
          n = An(s, n), s = t0(2), r = Il(l, s, 2), r !== null && (n0(s, r, l, n), Jt(r, 2), ml(r));
          break;
        }
      }
      l = l.return;
    }
  }
  function Su(n, l, s) {
    var r = n.pingCache;
    if (r === null) {
      r = n.pingCache = new p2();
      var h = /* @__PURE__ */ new Set();
      r.set(l, h);
    } else h = r.get(l), h === void 0 && (h = /* @__PURE__ */ new Set(), r.set(l, h));
    h.has(s) || (fu = true, h.add(s), n = S2.bind(null, n, l, s), l.then(n, n));
  }
  function S2(n, l, s) {
    var r = n.pingCache;
    r !== null && r.delete(l), n.pingedLanes |= n.suspendedLanes & s, n.warmLanes &= ~s, et === n && (qe & s) === s && (mt === 4 || mt === 3 && (qe & 62914560) === qe && 300 > Qe() - mu ? (Xe & 2) === 0 && Ns(n, 0) : hu |= s, js === qe && (js = 0)), ml(n);
  }
  function W0(n, l) {
    l === 0 && (l = Wa()), n = rs(n, l), n !== null && (Jt(n, l), ml(n));
  }
  function j2(n) {
    var l = n.memoizedState, s = 0;
    l !== null && (s = l.retryLane), W0(n, s);
  }
  function _2(n, l) {
    var s = 0;
    switch (n.tag) {
      case 13:
        var r = n.stateNode, h = n.memoizedState;
        h !== null && (s = h.retryLane);
        break;
      case 19:
        r = n.stateNode;
        break;
      case 22:
        r = n.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    r !== null && r.delete(l), W0(n, s);
  }
  function w2(n, l) {
    return Oe(n, l);
  }
  var so = null, ks = null, ju = false, io = false, _u2 = false, Xa = 0;
  function ml(n) {
    n !== ks && n.next === null && (ks === null ? so = ks = n : ks = ks.next = n), io = true, ju || (ju = true, T2());
  }
  function Mi(n, l) {
    if (!_u2 && io) {
      _u2 = true;
      do
        for (var s = false, r = so; r !== null; ) {
          if (n !== 0) {
            var h = r.pendingLanes;
            if (h === 0) var y = 0;
            else {
              var _ = r.suspendedLanes, T = r.pingedLanes;
              y = (1 << 31 - at(42 | n) + 1) - 1, y &= h & ~(_ & ~T), y = y & 201326741 ? y & 201326741 | 1 : y ? y | 2 : 0;
            }
            y !== 0 && (s = true, n1(r, y));
          } else y = qe, y = Pa(r, r === et ? y : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (y & 3) === 0 || wa(r, y) || (s = true, n1(r, y));
          r = r.next;
        }
      while (s);
      _u2 = false;
    }
  }
  function N2() {
    J0();
  }
  function J0() {
    io = ju = false;
    var n = 0;
    Xa !== 0 && (D2() && (n = Xa), Xa = 0);
    for (var l = Qe(), s = null, r = so; r !== null; ) {
      var h = r.next, y = e1(r, l);
      y === 0 ? (r.next = null, s === null ? so = h : s.next = h, h === null && (ks = s)) : (s = r, (n !== 0 || (y & 3) !== 0) && (io = true)), r = h;
    }
    Mi(n);
  }
  function e1(n, l) {
    for (var s = n.suspendedLanes, r = n.pingedLanes, h = n.expirationTimes, y = n.pendingLanes & -62914561; 0 < y; ) {
      var _ = 31 - at(y), T = 1 << _, D = h[_];
      D === -1 ? ((T & s) === 0 || (T & r) !== 0) && (h[_] = Ko(T, l)) : D <= l && (n.expiredLanes |= T), y &= ~T;
    }
    if (l = et, s = qe, s = Pa(n, n === l ? s : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), r = n.callbackNode, s === 0 || n === l && (Fe === 2 || Fe === 9) || n.cancelPendingCommit !== null) return r !== null && r !== null && Ve(r), n.callbackNode = null, n.callbackPriority = 0;
    if ((s & 3) === 0 || wa(n, s)) {
      if (l = s & -s, l === n.callbackPriority) return l;
      switch (r !== null && Ve(r), Bl(s)) {
        case 2:
        case 8:
          s = wt;
          break;
        case 32:
          s = Yt;
          break;
        case 268435456:
          s = Rt;
          break;
        default:
          s = Yt;
      }
      return r = t1.bind(null, n), s = Oe(s, r), n.callbackPriority = l, n.callbackNode = s, l;
    }
    return r !== null && r !== null && Ve(r), n.callbackPriority = 2, n.callbackNode = null, 2;
  }
  function t1(n, l) {
    if ($t !== 0 && $t !== 5) return n.callbackNode = null, n.callbackPriority = 0, null;
    var s = n.callbackNode;
    if (ao() && n.callbackNode !== s) return null;
    var r = qe;
    return r = Pa(n, n === et ? r : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), r === 0 ? null : (U0(n, r, l), e1(n, Qe()), n.callbackNode != null && n.callbackNode === s ? t1.bind(null, n) : null);
  }
  function n1(n, l) {
    if (ao()) return null;
    U0(n, l, true);
  }
  function T2() {
    L2(function() {
      (Xe & 6) !== 0 ? Oe(At, N2) : J0();
    });
  }
  function wu() {
    return Xa === 0 && (Xa = Vs()), Xa;
  }
  function l1(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean" ? null : typeof n == "function" ? n : Sl("" + n);
  }
  function a1(n, l) {
    var s = l.ownerDocument.createElement("input");
    return s.name = l.name, s.value = l.value, n.id && s.setAttribute("form", n.id), l.parentNode.insertBefore(s, l), n = new FormData(n), s.parentNode.removeChild(s), n;
  }
  function k2(n, l, s, r, h) {
    if (l === "submit" && s && s.stateNode === h) {
      var y = l1((h[Gt] || null).action), _ = r.submitter;
      _ && (l = (l = _[Gt] || null) ? l1(l.formAction) : _.getAttribute("formAction"), l !== null && (y = l, _ = null));
      var T = new Sr("action", "action", null, r, h);
      n.push({ event: T, listeners: [{ instance: null, listener: function() {
        if (r.defaultPrevented) {
          if (Xa !== 0) {
            var D = _ ? a1(h, _) : new FormData(h);
            Gc(s, { pending: true, data: D, method: h.method, action: y }, null, D);
          }
        } else typeof y == "function" && (T.preventDefault(), D = _ ? a1(h, _) : new FormData(h), Gc(s, { pending: true, data: D, method: h.method, action: y }, y, D));
      }, currentTarget: h }] });
    }
  }
  for (var Nu = 0; Nu < cc.length; Nu++) {
    var Tu = cc[Nu], M2 = Tu.toLowerCase(), A2 = Tu[0].toUpperCase() + Tu.slice(1);
    el(M2, "on" + A2);
  }
  el(Uh, "onAnimationEnd"), el($h, "onAnimationIteration"), el(Hh, "onAnimationStart"), el("dblclick", "onDoubleClick"), el("focusin", "onFocus"), el("focusout", "onBlur"), el(Xy, "onTransitionRun"), el(Fy, "onTransitionStart"), el(Zy, "onTransitionCancel"), el(qh, "onTransitionEnd"), kn("onMouseEnter", ["mouseout", "mouseover"]), kn("onMouseLeave", ["mouseout", "mouseover"]), kn("onPointerEnter", ["pointerout", "pointerover"]), kn("onPointerLeave", ["pointerout", "pointerover"]), il("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), il("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), il("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), il("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), il("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), il("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), C2 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ai));
  function s1(n, l) {
    l = (l & 4) !== 0;
    for (var s = 0; s < n.length; s++) {
      var r = n[s], h = r.event;
      r = r.listeners;
      e: {
        var y = void 0;
        if (l) for (var _ = r.length - 1; 0 <= _; _--) {
          var T = r[_], D = T.instance, Z = T.currentTarget;
          if (T = T.listener, D !== y && h.isPropagationStopped()) break e;
          y = T, h.currentTarget = Z;
          try {
            y(h);
          } catch (le) {
            Fr(le);
          }
          h.currentTarget = null, y = D;
        }
        else for (_ = 0; _ < r.length; _++) {
          if (T = r[_], D = T.instance, Z = T.currentTarget, T = T.listener, D !== y && h.isPropagationStopped()) break e;
          y = T, h.currentTarget = Z;
          try {
            y(h);
          } catch (le) {
            Fr(le);
          }
          h.currentTarget = null, y = D;
        }
      }
    }
  }
  function Re(n, l) {
    var s = l[Ja];
    s === void 0 && (s = l[Ja] = /* @__PURE__ */ new Set());
    var r = n + "__bubble";
    s.has(r) || (i1(l, n, 2, false), s.add(r));
  }
  function ku(n, l, s) {
    var r = 0;
    l && (r |= 4), i1(s, n, r, l);
  }
  var ro = "_reactListening" + Math.random().toString(36).slice(2);
  function Mu(n) {
    if (!n[ro]) {
      n[ro] = true, Gs.forEach(function(s) {
        s !== "selectionchange" && (C2.has(s) || ku(s, false, n), ku(s, true, n));
      });
      var l = n.nodeType === 9 ? n : n.ownerDocument;
      l === null || l[ro] || (l[ro] = true, ku("selectionchange", false, l));
    }
  }
  function i1(n, l, s, r) {
    switch (C1(l)) {
      case 2:
        var h = lb;
        break;
      case 8:
        h = ab;
        break;
      default:
        h = Bu;
    }
    s = h.bind(null, l, s, n), h = void 0, !Io || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (h = true), r ? h !== void 0 ? n.addEventListener(l, s, { capture: true, passive: h }) : n.addEventListener(l, s, true) : h !== void 0 ? n.addEventListener(l, s, { passive: h }) : n.addEventListener(l, s, false);
  }
  function Au(n, l, s, r, h) {
    var y = r;
    if ((l & 1) === 0 && (l & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var _ = r.tag;
      if (_ === 3 || _ === 4) {
        var T = r.stateNode.containerInfo;
        if (T === h) break;
        if (_ === 4) for (_ = r.return; _ !== null; ) {
          var D = _.tag;
          if ((D === 3 || D === 4) && _.stateNode.containerInfo === h) return;
          _ = _.return;
        }
        for (; T !== null; ) {
          if (_ = an(T), _ === null) return;
          if (D = _.tag, D === 5 || D === 6 || D === 26 || D === 27) {
            r = y = _;
            continue e;
          }
          T = T.parentNode;
        }
      }
      r = r.return;
    }
    Zs(function() {
      var Z = y, le = ns(s), ie = [];
      e: {
        var I = Vh.get(n);
        if (I !== void 0) {
          var P = Sr, Te = n;
          switch (n) {
            case "keypress":
              if (vr(s) === 0) break e;
            case "keydown":
            case "keyup":
              P = wy;
              break;
            case "focusin":
              Te = "focus", P = ec;
              break;
            case "focusout":
              Te = "blur", P = ec;
              break;
            case "beforeblur":
            case "afterblur":
              P = ec;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              P = ph;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              P = hy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              P = ky;
              break;
            case Uh:
            case $h:
            case Hh:
              P = gy;
              break;
            case qh:
              P = Ay;
              break;
            case "scroll":
            case "scrollend":
              P = uy;
              break;
            case "wheel":
              P = Ey;
              break;
            case "copy":
            case "cut":
            case "paste":
              P = yy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              P = bh;
              break;
            case "toggle":
            case "beforetoggle":
              P = zy;
          }
          var _e9 = (l & 4) !== 0, Ie = !_e9 && (n === "scroll" || n === "scrollend"), V = _e9 ? I !== null ? I + "Capture" : null : I;
          _e9 = [];
          for (var U = Z, X; U !== null; ) {
            var se = U;
            if (X = se.stateNode, se = se.tag, se !== 5 && se !== 26 && se !== 27 || X === null || V === null || (se = cl(U, V), se != null && _e9.push(Ci(U, se, X))), Ie) break;
            U = U.return;
          }
          0 < _e9.length && (I = new P(I, Te, null, s, le), ie.push({ event: I, listeners: _e9 }));
        }
      }
      if ((l & 7) === 0) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", P = n === "mouseout" || n === "pointerout", I && s !== Wn && (Te = s.relatedTarget || s.fromElement) && (an(Te) || Te[bl])) break e;
          if ((P || I) && (I = le.window === le ? le : (I = le.ownerDocument) ? I.defaultView || I.parentWindow : window, P ? (Te = s.relatedTarget || s.toElement, P = Z, Te = Te ? an(Te) : null, Te !== null && (Ie = c(Te), _e9 = Te.tag, Te !== Ie || _e9 !== 5 && _e9 !== 27 && _e9 !== 6) && (Te = null)) : (P = null, Te = Z), P !== Te)) {
            if (_e9 = ph, se = "onMouseLeave", V = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (_e9 = bh, se = "onPointerLeave", V = "onPointerEnter", U = "pointer"), Ie = P == null ? I : Ta(P), X = Te == null ? I : Ta(Te), I = new _e9(se, U + "leave", P, s, le), I.target = Ie, I.relatedTarget = X, se = null, an(le) === Z && (_e9 = new _e9(V, U + "enter", Te, s, le), _e9.target = X, _e9.relatedTarget = Ie, se = _e9), Ie = se, P && Te) t: {
              for (_e9 = P, V = Te, U = 0, X = _e9; X; X = Ms(X)) U++;
              for (X = 0, se = V; se; se = Ms(se)) X++;
              for (; 0 < U - X; ) _e9 = Ms(_e9), U--;
              for (; 0 < X - U; ) V = Ms(V), X--;
              for (; U--; ) {
                if (_e9 === V || V !== null && _e9 === V.alternate) break t;
                _e9 = Ms(_e9), V = Ms(V);
              }
              _e9 = null;
            }
            else _e9 = null;
            P !== null && r1(ie, I, P, _e9, false), Te !== null && Ie !== null && r1(ie, Ie, Te, _e9, true);
          }
        }
        e: {
          if (I = Z ? Ta(Z) : window, P = I.nodeName && I.nodeName.toLowerCase(), P === "select" || P === "input" && I.type === "file") var ye = Th;
          else if (wh(I)) if (kh) ye = Yy;
          else {
            ye = Vy;
            var ze = qy;
          }
          else P = I.nodeName, !P || P.toLowerCase() !== "input" || I.type !== "checkbox" && I.type !== "radio" ? Z && xl(Z.elementType) && (ye = Th) : ye = By;
          if (ye && (ye = ye(n, Z))) {
            Nh(ie, ye, s, le);
            break e;
          }
          ze && ze(n, I, Z), n === "focusout" && Z && I.type === "number" && Z.memoizedProps.value != null && Ye(I, "number", I.value);
        }
        switch (ze = Z ? Ta(Z) : window, n) {
          case "focusin":
            (wh(ze) || ze.contentEditable === "true") && (as = ze, ic = Z, ni = null);
            break;
          case "focusout":
            ni = ic = as = null;
            break;
          case "mousedown":
            rc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rc = false, Rh(ie, s, le);
            break;
          case "selectionchange":
            if (Qy) break;
          case "keydown":
          case "keyup":
            Rh(ie, s, le);
        }
        var ve;
        if (nc) e: {
          switch (n) {
            case "compositionstart":
              var we = "onCompositionStart";
              break e;
            case "compositionend":
              we = "onCompositionEnd";
              break e;
            case "compositionupdate":
              we = "onCompositionUpdate";
              break e;
          }
          we = void 0;
        }
        else ls ? jh(n, s) && (we = "onCompositionEnd") : n === "keydown" && s.keyCode === 229 && (we = "onCompositionStart");
        we && (vh && s.locale !== "ko" && (ls || we !== "onCompositionStart" ? we === "onCompositionEnd" && ls && (ve = mh()) : (Xl = le, Po = "value" in Xl ? Xl.value : Xl.textContent, ls = true)), ze = oo(Z, we), 0 < ze.length && (we = new yh(we, n, null, s, le), ie.push({ event: we, listeners: ze }), ve ? we.data = ve : (ve = _h3(s), ve !== null && (we.data = ve)))), (ve = Ry ? Ly(n, s) : Uy(n, s)) && (we = oo(Z, "onBeforeInput"), 0 < we.length && (ze = new yh("onBeforeInput", "beforeinput", null, s, le), ie.push({ event: ze, listeners: we }), ze.data = ve)), k2(ie, n, Z, s, le);
      }
      s1(ie, l);
    });
  }
  function Ci(n, l, s) {
    return { instance: n, listener: l, currentTarget: s };
  }
  function oo(n, l) {
    for (var s = l + "Capture", r = []; n !== null; ) {
      var h = n, y = h.stateNode;
      if (h = h.tag, h !== 5 && h !== 26 && h !== 27 || y === null || (h = cl(n, s), h != null && r.unshift(Ci(n, h, y)), h = cl(n, l), h != null && r.push(Ci(n, h, y))), n.tag === 3) return r;
      n = n.return;
    }
    return [];
  }
  function Ms(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function r1(n, l, s, r, h) {
    for (var y = l._reactName, _ = []; s !== null && s !== r; ) {
      var T = s, D = T.alternate, Z = T.stateNode;
      if (T = T.tag, D !== null && D === r) break;
      T !== 5 && T !== 26 && T !== 27 || Z === null || (D = Z, h ? (Z = cl(s, y), Z != null && _.unshift(Ci(s, Z, D))) : h || (Z = cl(s, y), Z != null && _.push(Ci(s, Z, D)))), s = s.return;
    }
    _.length !== 0 && n.push({ event: l, listeners: _ });
  }
  var E2 = /\r\n?/g, O2 = /\u0000|\uFFFD/g;
  function o1(n) {
    return (typeof n == "string" ? n : "" + n).replace(E2, `
`).replace(O2, "");
  }
  function c1(n, l) {
    return l = o1(l), o1(n) === l;
  }
  function co() {
  }
  function Ke(n, l, s, r, h, y) {
    switch (s) {
      case "children":
        typeof r == "string" ? l === "body" || l === "textarea" && r === "" || rl(n, r) : (typeof r == "number" || typeof r == "bigint") && l !== "body" && rl(n, "" + r);
        break;
      case "className":
        be(n, "class", r);
        break;
      case "tabIndex":
        be(n, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        be(n, s, r);
        break;
      case "style":
        Pn(n, r, y);
        break;
      case "data":
        if (l !== "object") {
          be(n, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (l !== "a" || s !== "href")) {
          n.removeAttribute(s);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          n.removeAttribute(s);
          break;
        }
        r = Sl("" + r), n.setAttribute(s, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          n.setAttribute(s, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof y == "function" && (s === "formAction" ? (l !== "input" && Ke(n, l, "name", h.name, h, null), Ke(n, l, "formEncType", h.formEncType, h, null), Ke(n, l, "formMethod", h.formMethod, h, null), Ke(n, l, "formTarget", h.formTarget, h, null)) : (Ke(n, l, "encType", h.encType, h, null), Ke(n, l, "method", h.method, h, null), Ke(n, l, "target", h.target, h, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          n.removeAttribute(s);
          break;
        }
        r = Sl("" + r), n.setAttribute(s, r);
        break;
      case "onClick":
        r != null && (n.onclick = co);
        break;
      case "onScroll":
        r != null && Re("scroll", n);
        break;
      case "onScrollEnd":
        r != null && Re("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
          if (s = r.__html, s != null) {
            if (h.children != null) throw Error(i(60));
            n.innerHTML = s;
          }
        }
        break;
      case "multiple":
        n.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        n.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          n.removeAttribute("xlink:href");
          break;
        }
        s = Sl("" + r), n.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol" ? n.setAttribute(s, "" + r) : n.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol" ? n.setAttribute(s, "") : n.removeAttribute(s);
        break;
      case "capture":
      case "download":
        r === true ? n.setAttribute(s, "") : r !== false && r != null && typeof r != "function" && typeof r != "symbol" ? n.setAttribute(s, r) : n.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? n.setAttribute(s, r) : n.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? n.removeAttribute(s) : n.setAttribute(s, r);
        break;
      case "popover":
        Re("beforetoggle", n), Re("toggle", n), fe(n, "popover", r);
        break;
      case "xlinkActuate":
        $e(n, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        $e(n, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        $e(n, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        $e(n, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        $e(n, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        $e(n, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        $e(n, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        $e(n, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        $e(n, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        fe(n, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (s = ts.get(s) || s, fe(n, s, r));
    }
  }
  function Cu(n, l, s, r, h, y) {
    switch (s) {
      case "style":
        Pn(n, r, y);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
          if (s = r.__html, s != null) {
            if (h.children != null) throw Error(i(60));
            n.innerHTML = s;
          }
        }
        break;
      case "children":
        typeof r == "string" ? rl(n, r) : (typeof r == "number" || typeof r == "bigint") && rl(n, "" + r);
        break;
      case "onScroll":
        r != null && Re("scroll", n);
        break;
      case "onScrollEnd":
        r != null && Re("scrollend", n);
        break;
      case "onClick":
        r != null && (n.onclick = co);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Qs.hasOwnProperty(s)) e: {
          if (s[0] === "o" && s[1] === "n" && (h = s.endsWith("Capture"), l = s.slice(2, h ? s.length - 7 : void 0), y = n[Gt] || null, y = y != null ? y[s] : null, typeof y == "function" && n.removeEventListener(l, y, h), typeof r == "function")) {
            typeof y != "function" && y !== null && (s in n ? n[s] = null : n.hasAttribute(s) && n.removeAttribute(s)), n.addEventListener(l, r, h);
            break e;
          }
          s in n ? n[s] = r : r === true ? n.setAttribute(s, "") : fe(n, s, r);
        }
    }
  }
  function Ht(n, l, s) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Re("error", n), Re("load", n);
        var r = false, h = false, y;
        for (y in s) if (s.hasOwnProperty(y)) {
          var _ = s[y];
          if (_ != null) switch (y) {
            case "src":
              r = true;
              break;
            case "srcSet":
              h = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(i(137, l));
            default:
              Ke(n, l, y, _, s, null);
          }
        }
        h && Ke(n, l, "srcSet", s.srcSet, s, null), r && Ke(n, l, "src", s.src, s, null);
        return;
      case "input":
        Re("invalid", n);
        var T = y = _ = h = null, D = null, Z = null;
        for (r in s) if (s.hasOwnProperty(r)) {
          var le = s[r];
          if (le != null) switch (r) {
            case "name":
              h = le;
              break;
            case "type":
              _ = le;
              break;
            case "checked":
              D = le;
              break;
            case "defaultChecked":
              Z = le;
              break;
            case "value":
              y = le;
              break;
            case "defaultValue":
              T = le;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (le != null) throw Error(i(137, l));
              break;
            default:
              Ke(n, l, r, le, s, null);
          }
        }
        yr(n, y, T, D, Z, _, h, false), Zn(n);
        return;
      case "select":
        Re("invalid", n), r = _ = y = null;
        for (h in s) if (s.hasOwnProperty(h) && (T = s[h], T != null)) switch (h) {
          case "value":
            y = T;
            break;
          case "defaultValue":
            _ = T;
            break;
          case "multiple":
            r = T;
          default:
            Ke(n, l, h, T, s, null);
        }
        l = y, s = _, n.multiple = !!r, l != null ? Ue(n, !!r, l, false) : s != null && Ue(n, !!r, s, true);
        return;
      case "textarea":
        Re("invalid", n), y = h = r = null;
        for (_ in s) if (s.hasOwnProperty(_) && (T = s[_], T != null)) switch (_) {
          case "value":
            r = T;
            break;
          case "defaultValue":
            h = T;
            break;
          case "children":
            y = T;
            break;
          case "dangerouslySetInnerHTML":
            if (T != null) throw Error(i(91));
            break;
          default:
            Ke(n, l, _, T, s, null);
        }
        In(n, r, h, y), Zn(n);
        return;
      case "option":
        for (D in s) if (s.hasOwnProperty(D) && (r = s[D], r != null)) switch (D) {
          case "selected":
            n.selected = r && typeof r != "function" && typeof r != "symbol";
            break;
          default:
            Ke(n, l, D, r, s, null);
        }
        return;
      case "dialog":
        Re("beforetoggle", n), Re("toggle", n), Re("cancel", n), Re("close", n);
        break;
      case "iframe":
      case "object":
        Re("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Ai.length; r++) Re(Ai[r], n);
        break;
      case "image":
        Re("error", n), Re("load", n);
        break;
      case "details":
        Re("toggle", n);
        break;
      case "embed":
      case "source":
      case "link":
        Re("error", n), Re("load", n);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Z in s) if (s.hasOwnProperty(Z) && (r = s[Z], r != null)) switch (Z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(137, l));
          default:
            Ke(n, l, Z, r, s, null);
        }
        return;
      default:
        if (xl(l)) {
          for (le in s) s.hasOwnProperty(le) && (r = s[le], r !== void 0 && Cu(n, l, le, r, s, void 0));
          return;
        }
    }
    for (T in s) s.hasOwnProperty(T) && (r = s[T], r != null && Ke(n, l, T, r, s, null));
  }
  function z2(n, l, s, r) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var h = null, y = null, _ = null, T = null, D = null, Z = null, le = null;
        for (P in s) {
          var ie = s[P];
          if (s.hasOwnProperty(P) && ie != null) switch (P) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              D = ie;
            default:
              r.hasOwnProperty(P) || Ke(n, l, P, null, r, ie);
          }
        }
        for (var I in r) {
          var P = r[I];
          if (ie = s[I], r.hasOwnProperty(I) && (P != null || ie != null)) switch (I) {
            case "type":
              y = P;
              break;
            case "name":
              h = P;
              break;
            case "checked":
              Z = P;
              break;
            case "defaultChecked":
              le = P;
              break;
            case "value":
              _ = P;
              break;
            case "defaultValue":
              T = P;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (P != null) throw Error(i(137, l));
              break;
            default:
              P !== ie && Ke(n, l, I, P, r, ie);
          }
        }
        Xs(n, _, T, D, Z, le, y, h);
        return;
      case "select":
        P = _ = T = I = null;
        for (y in s) if (D = s[y], s.hasOwnProperty(y) && D != null) switch (y) {
          case "value":
            break;
          case "multiple":
            P = D;
          default:
            r.hasOwnProperty(y) || Ke(n, l, y, null, r, D);
        }
        for (h in r) if (y = r[h], D = s[h], r.hasOwnProperty(h) && (y != null || D != null)) switch (h) {
          case "value":
            I = y;
            break;
          case "defaultValue":
            T = y;
            break;
          case "multiple":
            _ = y;
          default:
            y !== D && Ke(n, l, h, y, r, D);
        }
        l = T, s = _, r = P, I != null ? Ue(n, !!s, I, false) : !!r != !!s && (l != null ? Ue(n, !!s, l, true) : Ue(n, !!s, s ? [] : "", false));
        return;
      case "textarea":
        P = I = null;
        for (T in s) if (h = s[T], s.hasOwnProperty(T) && h != null && !r.hasOwnProperty(T)) switch (T) {
          case "value":
            break;
          case "children":
            break;
          default:
            Ke(n, l, T, null, r, h);
        }
        for (_ in r) if (h = r[_], y = s[_], r.hasOwnProperty(_) && (h != null || y != null)) switch (_) {
          case "value":
            I = h;
            break;
          case "defaultValue":
            P = h;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (h != null) throw Error(i(91));
            break;
          default:
            h !== y && Ke(n, l, _, h, r, y);
        }
        Aa(n, I, P);
        return;
      case "option":
        for (var Te in s) if (I = s[Te], s.hasOwnProperty(Te) && I != null && !r.hasOwnProperty(Te)) switch (Te) {
          case "selected":
            n.selected = false;
            break;
          default:
            Ke(n, l, Te, null, r, I);
        }
        for (D in r) if (I = r[D], P = s[D], r.hasOwnProperty(D) && I !== P && (I != null || P != null)) switch (D) {
          case "selected":
            n.selected = I && typeof I != "function" && typeof I != "symbol";
            break;
          default:
            Ke(n, l, D, I, r, P);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var _e9 in s) I = s[_e9], s.hasOwnProperty(_e9) && I != null && !r.hasOwnProperty(_e9) && Ke(n, l, _e9, null, r, I);
        for (Z in r) if (I = r[Z], P = s[Z], r.hasOwnProperty(Z) && I !== P && (I != null || P != null)) switch (Z) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (I != null) throw Error(i(137, l));
            break;
          default:
            Ke(n, l, Z, I, r, P);
        }
        return;
      default:
        if (xl(l)) {
          for (var Ie in s) I = s[Ie], s.hasOwnProperty(Ie) && I !== void 0 && !r.hasOwnProperty(Ie) && Cu(n, l, Ie, void 0, r, I);
          for (le in r) I = r[le], P = s[le], !r.hasOwnProperty(le) || I === P || I === void 0 && P === void 0 || Cu(n, l, le, I, r, P);
          return;
        }
    }
    for (var V in s) I = s[V], s.hasOwnProperty(V) && I != null && !r.hasOwnProperty(V) && Ke(n, l, V, null, r, I);
    for (ie in r) I = r[ie], P = s[ie], !r.hasOwnProperty(ie) || I === P || I == null && P == null || Ke(n, l, ie, I, r, P);
  }
  var Eu = null, Ou = null;
  function uo(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function u1(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function f1(n, l) {
    if (n === 0) switch (l) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return n === 1 && l === "foreignObject" ? 0 : n;
  }
  function zu(n, l) {
    return n === "textarea" || n === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Du = null;
  function D2() {
    var n = window.event;
    return n && n.type === "popstate" ? n === Du ? false : (Du = n, true) : (Du = null, false);
  }
  var h1 = typeof setTimeout == "function" ? setTimeout : void 0, R2 = typeof clearTimeout == "function" ? clearTimeout : void 0, d1 = typeof Promise == "function" ? Promise : void 0, L2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof d1 < "u" ? function(n) {
    return d1.resolve(null).then(n).catch(U2);
  } : h1;
  function U2(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function oa(n) {
    return n === "head";
  }
  function m1(n, l) {
    var s = l, r = 0, h = 0;
    do {
      var y = s.nextSibling;
      if (n.removeChild(s), y && y.nodeType === 8) if (s = y.data, s === "/$") {
        if (0 < r && 8 > r) {
          s = r;
          var _ = n.ownerDocument;
          if (s & 1 && Ei(_.documentElement), s & 2 && Ei(_.body), s & 4) for (s = _.head, Ei(s), _ = s.firstChild; _; ) {
            var T = _.nextSibling, D = _.nodeName;
            _[ln] || D === "SCRIPT" || D === "STYLE" || D === "LINK" && _.rel.toLowerCase() === "stylesheet" || s.removeChild(_), _ = T;
          }
        }
        if (h === 0) {
          n.removeChild(y), Hi(l);
          return;
        }
        h--;
      } else s === "$" || s === "$?" || s === "$!" ? h++ : r = s.charCodeAt(0) - 48;
      else r = 0;
      s = y;
    } while (s);
    Hi(l);
  }
  function Ru(n) {
    var l = n.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var s = l;
      switch (l = l.nextSibling, s.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ru(s), Ys(s);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(s);
    }
  }
  function $2(n, l, s, r) {
    for (; n.nodeType === 1; ) {
      var h = s;
      if (n.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!r && (n.nodeName !== "INPUT" || n.type !== "hidden")) break;
      } else if (r) {
        if (!n[ln]) switch (l) {
          case "meta":
            if (!n.hasAttribute("itemprop")) break;
            return n;
          case "link":
            if (y = n.getAttribute("rel"), y === "stylesheet" && n.hasAttribute("data-precedence")) break;
            if (y !== h.rel || n.getAttribute("href") !== (h.href == null || h.href === "" ? null : h.href) || n.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin) || n.getAttribute("title") !== (h.title == null ? null : h.title)) break;
            return n;
          case "style":
            if (n.hasAttribute("data-precedence")) break;
            return n;
          case "script":
            if (y = n.getAttribute("src"), (y !== (h.src == null ? null : h.src) || n.getAttribute("type") !== (h.type == null ? null : h.type) || n.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin)) && y && n.hasAttribute("async") && !n.hasAttribute("itemprop")) break;
            return n;
          default:
            return n;
        }
      } else if (l === "input" && n.type === "hidden") {
        var y = h.name == null ? null : "" + h.name;
        if (h.type === "hidden" && n.getAttribute("name") === y) return n;
      } else return n;
      if (n = nl(n.nextSibling), n === null) break;
    }
    return null;
  }
  function H2(n, l, s) {
    if (l === "") return null;
    for (; n.nodeType !== 3; ) if ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") && !s || (n = nl(n.nextSibling), n === null)) return null;
    return n;
  }
  function Lu(n) {
    return n.data === "$!" || n.data === "$?" && n.ownerDocument.readyState === "complete";
  }
  function q2(n, l) {
    var s = n.ownerDocument;
    if (n.data !== "$?" || s.readyState === "complete") l();
    else {
      var r = function() {
        l(), s.removeEventListener("DOMContentLoaded", r);
      };
      s.addEventListener("DOMContentLoaded", r), n._reactRetry = r;
    }
  }
  function nl(n) {
    for (; n != null; n = n.nextSibling) {
      var l = n.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = n.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F") break;
        if (l === "/$") return null;
      }
    }
    return n;
  }
  var Uu = null;
  function g1(n) {
    n = n.previousSibling;
    for (var l = 0; n; ) {
      if (n.nodeType === 8) {
        var s = n.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (l === 0) return n;
          l--;
        } else s === "/$" && l++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function p1(n, l, s) {
    switch (l = uo(s), n) {
      case "html":
        if (n = l.documentElement, !n) throw Error(i(452));
        return n;
      case "head":
        if (n = l.head, !n) throw Error(i(453));
        return n;
      case "body":
        if (n = l.body, !n) throw Error(i(454));
        return n;
      default:
        throw Error(i(451));
    }
  }
  function Ei(n) {
    for (var l = n.attributes; l.length; ) n.removeAttributeNode(l[0]);
    Ys(n);
  }
  var Rn = /* @__PURE__ */ new Map(), y1 = /* @__PURE__ */ new Set();
  function fo(n) {
    return typeof n.getRootNode == "function" ? n.getRootNode() : n.nodeType === 9 ? n : n.ownerDocument;
  }
  var Dl = G.d;
  G.d = { f: V2, r: B2, D: Y2, C: G2, L: Q2, m: X2, X: Z2, S: F2, M: K2 };
  function V2() {
    var n = Dl.f(), l = no();
    return n || l;
  }
  function B2(n) {
    var l = vl(n);
    l !== null && l.tag === 5 && l.type === "form" ? Ud(l) : Dl.r(n);
  }
  var As = typeof document > "u" ? null : document;
  function b1(n, l, s) {
    var r = As;
    if (r && typeof l == "string" && l) {
      var h = tn(l);
      h = 'link[rel="' + n + '"][href="' + h + '"]', typeof s == "string" && (h += '[crossorigin="' + s + '"]'), y1.has(h) || (y1.add(h), n = { rel: n, crossOrigin: s, href: l }, r.querySelector(h) === null && (l = r.createElement("link"), Ht(l, "link", n), ft(l), r.head.appendChild(l)));
    }
  }
  function Y2(n) {
    Dl.D(n), b1("dns-prefetch", n, null);
  }
  function G2(n, l) {
    Dl.C(n, l), b1("preconnect", n, l);
  }
  function Q2(n, l, s) {
    Dl.L(n, l, s);
    var r = As;
    if (r && n && l) {
      var h = 'link[rel="preload"][as="' + tn(l) + '"]';
      l === "image" && s && s.imageSrcSet ? (h += '[imagesrcset="' + tn(s.imageSrcSet) + '"]', typeof s.imageSizes == "string" && (h += '[imagesizes="' + tn(s.imageSizes) + '"]')) : h += '[href="' + tn(n) + '"]';
      var y = h;
      switch (l) {
        case "style":
          y = Cs(n);
          break;
        case "script":
          y = Es(n);
      }
      Rn.has(y) || (n = p({ rel: "preload", href: l === "image" && s && s.imageSrcSet ? void 0 : n, as: l }, s), Rn.set(y, n), r.querySelector(h) !== null || l === "style" && r.querySelector(Oi(y)) || l === "script" && r.querySelector(zi(y)) || (l = r.createElement("link"), Ht(l, "link", n), ft(l), r.head.appendChild(l)));
    }
  }
  function X2(n, l) {
    Dl.m(n, l);
    var s = As;
    if (s && n) {
      var r = l && typeof l.as == "string" ? l.as : "script", h = 'link[rel="modulepreload"][as="' + tn(r) + '"][href="' + tn(n) + '"]', y = h;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          y = Es(n);
      }
      if (!Rn.has(y) && (n = p({ rel: "modulepreload", href: n }, l), Rn.set(y, n), s.querySelector(h) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(zi(y))) return;
        }
        r = s.createElement("link"), Ht(r, "link", n), ft(r), s.head.appendChild(r);
      }
    }
  }
  function F2(n, l, s) {
    Dl.S(n, l, s);
    var r = As;
    if (r && n) {
      var h = Xn(r).hoistableStyles, y = Cs(n);
      l = l || "default";
      var _ = h.get(y);
      if (!_) {
        var T = { loading: 0, preload: null };
        if (_ = r.querySelector(Oi(y))) T.loading = 5;
        else {
          n = p({ rel: "stylesheet", href: n, "data-precedence": l }, s), (s = Rn.get(y)) && $u(n, s);
          var D = _ = r.createElement("link");
          ft(D), Ht(D, "link", n), D._p = new Promise(function(Z, le) {
            D.onload = Z, D.onerror = le;
          }), D.addEventListener("load", function() {
            T.loading |= 1;
          }), D.addEventListener("error", function() {
            T.loading |= 2;
          }), T.loading |= 4, ho(_, l, r);
        }
        _ = { type: "stylesheet", instance: _, count: 1, state: T }, h.set(y, _);
      }
    }
  }
  function Z2(n, l) {
    Dl.X(n, l);
    var s = As;
    if (s && n) {
      var r = Xn(s).hoistableScripts, h = Es(n), y = r.get(h);
      y || (y = s.querySelector(zi(h)), y || (n = p({ src: n, async: true }, l), (l = Rn.get(h)) && Hu(n, l), y = s.createElement("script"), ft(y), Ht(y, "link", n), s.head.appendChild(y)), y = { type: "script", instance: y, count: 1, state: null }, r.set(h, y));
    }
  }
  function K2(n, l) {
    Dl.M(n, l);
    var s = As;
    if (s && n) {
      var r = Xn(s).hoistableScripts, h = Es(n), y = r.get(h);
      y || (y = s.querySelector(zi(h)), y || (n = p({ src: n, async: true, type: "module" }, l), (l = Rn.get(h)) && Hu(n, l), y = s.createElement("script"), ft(y), Ht(y, "link", n), s.head.appendChild(y)), y = { type: "script", instance: y, count: 1, state: null }, r.set(h, y));
    }
  }
  function v1(n, l, s, r) {
    var h = (h = de.current) ? fo(h) : null;
    if (!h) throw Error(i(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string" ? (l = Cs(s.href), s = Xn(h).hoistableStyles, r = s.get(l), r || (r = { type: "style", instance: null, count: 0, state: null }, s.set(l, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (s.rel === "stylesheet" && typeof s.href == "string" && typeof s.precedence == "string") {
          n = Cs(s.href);
          var y = Xn(h).hoistableStyles, _ = y.get(n);
          if (_ || (h = h.ownerDocument || h, _ = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, y.set(n, _), (y = h.querySelector(Oi(n))) && !y._p && (_.instance = y, _.state.loading = 5), Rn.has(n) || (s = { rel: "preload", as: "style", href: s.href, crossOrigin: s.crossOrigin, integrity: s.integrity, media: s.media, hrefLang: s.hrefLang, referrerPolicy: s.referrerPolicy }, Rn.set(n, s), y || I2(h, n, s, _.state))), l && r === null) throw Error(i(528, ""));
          return _;
        }
        if (l && r !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return l = s.async, s = s.src, typeof s == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Es(s), s = Xn(h).hoistableScripts, r = s.get(l), r || (r = { type: "script", instance: null, count: 0, state: null }, s.set(l, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, n));
    }
  }
  function Cs(n) {
    return 'href="' + tn(n) + '"';
  }
  function Oi(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function x1(n) {
    return p({}, n, { "data-precedence": n.precedence, precedence: null });
  }
  function I2(n, l, s, r) {
    n.querySelector('link[rel="preload"][as="style"][' + l + "]") ? r.loading = 1 : (l = n.createElement("link"), r.preload = l, l.addEventListener("load", function() {
      return r.loading |= 1;
    }), l.addEventListener("error", function() {
      return r.loading |= 2;
    }), Ht(l, "link", s), ft(l), n.head.appendChild(l));
  }
  function Es(n) {
    return '[src="' + tn(n) + '"]';
  }
  function zi(n) {
    return "script[async]" + n;
  }
  function S1(n, l, s) {
    if (l.count++, l.instance === null) switch (l.type) {
      case "style":
        var r = n.querySelector('style[data-href~="' + tn(s.href) + '"]');
        if (r) return l.instance = r, ft(r), r;
        var h = p({}, s, { "data-href": s.href, "data-precedence": s.precedence, href: null, precedence: null });
        return r = (n.ownerDocument || n).createElement("style"), ft(r), Ht(r, "style", h), ho(r, s.precedence, n), l.instance = r;
      case "stylesheet":
        h = Cs(s.href);
        var y = n.querySelector(Oi(h));
        if (y) return l.state.loading |= 4, l.instance = y, ft(y), y;
        r = x1(s), (h = Rn.get(h)) && $u(r, h), y = (n.ownerDocument || n).createElement("link"), ft(y);
        var _ = y;
        return _._p = new Promise(function(T, D) {
          _.onload = T, _.onerror = D;
        }), Ht(y, "link", r), l.state.loading |= 4, ho(y, s.precedence, n), l.instance = y;
      case "script":
        return y = Es(s.src), (h = n.querySelector(zi(y))) ? (l.instance = h, ft(h), h) : (r = s, (h = Rn.get(y)) && (r = p({}, s), Hu(r, h)), n = n.ownerDocument || n, h = n.createElement("script"), ft(h), Ht(h, "link", r), n.head.appendChild(h), l.instance = h);
      case "void":
        return null;
      default:
        throw Error(i(443, l.type));
    }
    else l.type === "stylesheet" && (l.state.loading & 4) === 0 && (r = l.instance, l.state.loading |= 4, ho(r, s.precedence, n));
    return l.instance;
  }
  function ho(n, l, s) {
    for (var r = s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), h = r.length ? r[r.length - 1] : null, y = h, _ = 0; _ < r.length; _++) {
      var T = r[_];
      if (T.dataset.precedence === l) y = T;
      else if (y !== h) break;
    }
    y ? y.parentNode.insertBefore(n, y.nextSibling) : (l = s.nodeType === 9 ? s.head : s, l.insertBefore(n, l.firstChild));
  }
  function $u(n, l) {
    n.crossOrigin == null && (n.crossOrigin = l.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = l.referrerPolicy), n.title == null && (n.title = l.title);
  }
  function Hu(n, l) {
    n.crossOrigin == null && (n.crossOrigin = l.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = l.referrerPolicy), n.integrity == null && (n.integrity = l.integrity);
  }
  var mo = null;
  function j1(n, l, s) {
    if (mo === null) {
      var r = /* @__PURE__ */ new Map(), h = mo = /* @__PURE__ */ new Map();
      h.set(s, r);
    } else h = mo, r = h.get(s), r || (r = /* @__PURE__ */ new Map(), h.set(s, r));
    if (r.has(n)) return r;
    for (r.set(n, null), s = s.getElementsByTagName(n), h = 0; h < s.length; h++) {
      var y = s[h];
      if (!(y[ln] || y[Ct] || n === "link" && y.getAttribute("rel") === "stylesheet") && y.namespaceURI !== "http://www.w3.org/2000/svg") {
        var _ = y.getAttribute(l) || "";
        _ = n + _;
        var T = r.get(_);
        T ? T.push(y) : r.set(_, [y]);
      }
    }
    return r;
  }
  function _1(n, l, s) {
    n = n.ownerDocument || n, n.head.insertBefore(s, l === "title" ? n.querySelector("head > title") : null);
  }
  function P2(n, l, s) {
    if (s === 1 || l.itemProp != null) return false;
    switch (n) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "") break;
        return true;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError) break;
        switch (l.rel) {
          case "stylesheet":
            return n = l.disabled, typeof l.precedence == "string" && n == null;
          default:
            return true;
        }
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string") return true;
    }
    return false;
  }
  function w1(n) {
    return !(n.type === "stylesheet" && (n.state.loading & 3) === 0);
  }
  var Di = null;
  function W2() {
  }
  function J2(n, l, s) {
    if (Di === null) throw Error(i(475));
    var r = Di;
    if (l.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== false) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var h = Cs(s.href), y = n.querySelector(Oi(h));
        if (y) {
          n = y._p, n !== null && typeof n == "object" && typeof n.then == "function" && (r.count++, r = go.bind(r), n.then(r, r)), l.state.loading |= 4, l.instance = y, ft(y);
          return;
        }
        y = n.ownerDocument || n, s = x1(s), (h = Rn.get(h)) && $u(s, h), y = y.createElement("link"), ft(y);
        var _ = y;
        _._p = new Promise(function(T, D) {
          _.onload = T, _.onerror = D;
        }), Ht(y, "link", s), l.instance = y;
      }
      r.stylesheets === null && (r.stylesheets = /* @__PURE__ */ new Map()), r.stylesheets.set(l, n), (n = l.state.preload) && (l.state.loading & 3) === 0 && (r.count++, l = go.bind(r), n.addEventListener("load", l), n.addEventListener("error", l));
    }
  }
  function eb() {
    if (Di === null) throw Error(i(475));
    var n = Di;
    return n.stylesheets && n.count === 0 && qu(n, n.stylesheets), 0 < n.count ? function(l) {
      var s = setTimeout(function() {
        if (n.stylesheets && qu(n, n.stylesheets), n.unsuspend) {
          var r = n.unsuspend;
          n.unsuspend = null, r();
        }
      }, 6e4);
      return n.unsuspend = l, function() {
        n.unsuspend = null, clearTimeout(s);
      };
    } : null;
  }
  function go() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) qu(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        this.unsuspend = null, n();
      }
    }
  }
  var po = null;
  function qu(n, l) {
    n.stylesheets = null, n.unsuspend !== null && (n.count++, po = /* @__PURE__ */ new Map(), l.forEach(tb, n), po = null, go.call(n));
  }
  function tb(n, l) {
    if (!(l.state.loading & 4)) {
      var s = po.get(n);
      if (s) var r = s.get(null);
      else {
        s = /* @__PURE__ */ new Map(), po.set(n, s);
        for (var h = n.querySelectorAll("link[data-precedence],style[data-precedence]"), y = 0; y < h.length; y++) {
          var _ = h[y];
          (_.nodeName === "LINK" || _.getAttribute("media") !== "not all") && (s.set(_.dataset.precedence, _), r = _);
        }
        r && s.set(null, r);
      }
      h = l.instance, _ = h.getAttribute("data-precedence"), y = s.get(_) || r, y === r && s.set(null, h), s.set(_, h), this.count++, r = go.bind(this), h.addEventListener("load", r), h.addEventListener("error", r), y ? y.parentNode.insertBefore(h, y.nextSibling) : (n = n.nodeType === 9 ? n.head : n, n.insertBefore(h, n.firstChild)), l.state.loading |= 4;
    }
  }
  var Ri = { $$typeof: M, Provider: null, Consumer: null, _currentValue: ne, _currentValue2: ne, _threadCount: 0 };
  function nb(n, l, s, r, h, y, _, T) {
    this.tag = 1, this.containerInfo = n, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yn(0), this.hiddenUpdates = Yn(null), this.identifierPrefix = r, this.onUncaughtError = h, this.onCaughtError = y, this.onRecoverableError = _, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function N1(n, l, s, r, h, y, _, T, D, Z, le, ie) {
    return n = new nb(n, l, s, _, T, D, Z, ie), l = 1, y === true && (l |= 24), y = gn(3, null, null, l), n.current = y, y.stateNode = n, l = Sc(), l.refCount++, n.pooledCache = l, l.refCount++, y.memoizedState = { element: r, isDehydrated: s, cache: l }, Nc(y), n;
  }
  function T1(n) {
    return n ? (n = os, n) : os;
  }
  function k1(n, l, s, r, h, y) {
    h = T1(h), r.context === null ? r.context = h : r.pendingContext = h, r = Kl(l), r.payload = { element: s }, y = y === void 0 ? null : y, y !== null && (r.callback = y), s = Il(n, r, l), s !== null && (xn(s, n, l), fi(s, n, l));
  }
  function M1(n, l) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var s = n.retryLane;
      n.retryLane = s !== 0 && s < l ? s : l;
    }
  }
  function Vu(n, l) {
    M1(n, l), (n = n.alternate) && M1(n, l);
  }
  function A1(n) {
    if (n.tag === 13) {
      var l = rs(n, 67108864);
      l !== null && xn(l, n, 67108864), Vu(n, 67108864);
    }
  }
  var yo = true;
  function lb(n, l, s, r) {
    var h = R.T;
    R.T = null;
    var y = G.p;
    try {
      G.p = 2, Bu(n, l, s, r);
    } finally {
      G.p = y, R.T = h;
    }
  }
  function ab(n, l, s, r) {
    var h = R.T;
    R.T = null;
    var y = G.p;
    try {
      G.p = 8, Bu(n, l, s, r);
    } finally {
      G.p = y, R.T = h;
    }
  }
  function Bu(n, l, s, r) {
    if (yo) {
      var h = Yu(r);
      if (h === null) Au(n, l, r, bo, s), E1(n, r);
      else if (ib(h, n, l, s, r)) r.stopPropagation();
      else if (E1(n, r), l & 4 && -1 < sb.indexOf(n)) {
        for (; h !== null; ) {
          var y = vl(h);
          if (y !== null) switch (y.tag) {
            case 3:
              if (y = y.stateNode, y.current.memoizedState.isDehydrated) {
                var _ = pl(y.pendingLanes);
                if (_ !== 0) {
                  var T = y;
                  for (T.pendingLanes |= 2, T.entangledLanes |= 2; _; ) {
                    var D = 1 << 31 - at(_);
                    T.entanglements[1] |= D, _ &= ~D;
                  }
                  ml(y), (Xe & 6) === 0 && (eo = Qe() + 500, Mi(0));
                }
              }
              break;
            case 13:
              T = rs(y, 2), T !== null && xn(T, y, 2), no(), Vu(y, 2);
          }
          if (y = Yu(r), y === null && Au(n, l, r, bo, s), y === h) break;
          h = y;
        }
        h !== null && r.stopPropagation();
      } else Au(n, l, r, null, s);
    }
  }
  function Yu(n) {
    return n = ns(n), Gu(n);
  }
  var bo = null;
  function Gu(n) {
    if (bo = null, n = an(n), n !== null) {
      var l = c(n);
      if (l === null) n = null;
      else {
        var s = l.tag;
        if (s === 13) {
          if (n = f(l), n !== null) return n;
          n = null;
        } else if (s === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated) return l.tag === 3 ? l.stateNode.containerInfo : null;
          n = null;
        } else l !== n && (n = null);
      }
    }
    return bo = n, null;
  }
  function C1(n) {
    switch (n) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ct()) {
          case At:
            return 2;
          case wt:
            return 8;
          case Yt:
          case Nn:
            return 32;
          case Rt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qu = false, ca = null, ua = null, fa = null, Li = /* @__PURE__ */ new Map(), Ui = /* @__PURE__ */ new Map(), ha = [], sb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function E1(n, l) {
    switch (n) {
      case "focusin":
      case "focusout":
        ca = null;
        break;
      case "dragenter":
      case "dragleave":
        ua = null;
        break;
      case "mouseover":
      case "mouseout":
        fa = null;
        break;
      case "pointerover":
      case "pointerout":
        Li.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ui.delete(l.pointerId);
    }
  }
  function $i(n, l, s, r, h, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: l, domEventName: s, eventSystemFlags: r, nativeEvent: y, targetContainers: [h] }, l !== null && (l = vl(l), l !== null && A1(l)), n) : (n.eventSystemFlags |= r, l = n.targetContainers, h !== null && l.indexOf(h) === -1 && l.push(h), n);
  }
  function ib(n, l, s, r, h) {
    switch (l) {
      case "focusin":
        return ca = $i(ca, n, l, s, r, h), true;
      case "dragenter":
        return ua = $i(ua, n, l, s, r, h), true;
      case "mouseover":
        return fa = $i(fa, n, l, s, r, h), true;
      case "pointerover":
        var y = h.pointerId;
        return Li.set(y, $i(Li.get(y) || null, n, l, s, r, h)), true;
      case "gotpointercapture":
        return y = h.pointerId, Ui.set(y, $i(Ui.get(y) || null, n, l, s, r, h)), true;
    }
    return false;
  }
  function O1(n) {
    var l = an(n.target);
    if (l !== null) {
      var s = c(l);
      if (s !== null) {
        if (l = s.tag, l === 13) {
          if (l = f(s), l !== null) {
            n.blockedOn = l, dr(n.priority, function() {
              if (s.tag === 13) {
                var r = vn();
                r = Bs(r);
                var h = rs(s, r);
                h !== null && xn(h, s, r), Vu(s, r);
              }
            });
            return;
          }
        } else if (l === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function vo(n) {
    if (n.blockedOn !== null) return false;
    for (var l = n.targetContainers; 0 < l.length; ) {
      var s = Yu(n.nativeEvent);
      if (s === null) {
        s = n.nativeEvent;
        var r = new s.constructor(s.type, s);
        Wn = r, s.target.dispatchEvent(r), Wn = null;
      } else return l = vl(s), l !== null && A1(l), n.blockedOn = s, false;
      l.shift();
    }
    return true;
  }
  function z1(n, l, s) {
    vo(n) && s.delete(l);
  }
  function rb() {
    Qu = false, ca !== null && vo(ca) && (ca = null), ua !== null && vo(ua) && (ua = null), fa !== null && vo(fa) && (fa = null), Li.forEach(z1), Ui.forEach(z1);
  }
  function xo(n, l) {
    n.blockedOn === l && (n.blockedOn = null, Qu || (Qu = true, t.unstable_scheduleCallback(t.unstable_NormalPriority, rb)));
  }
  var So = null;
  function D1(n) {
    So !== n && (So = n, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
      So === n && (So = null);
      for (var l = 0; l < n.length; l += 3) {
        var s = n[l], r = n[l + 1], h = n[l + 2];
        if (typeof r != "function") {
          if (Gu(r || s) === null) continue;
          break;
        }
        var y = vl(s);
        y !== null && (n.splice(l, 3), l -= 3, Gc(y, { pending: true, data: h, method: s.method, action: r }, r, h));
      }
    }));
  }
  function Hi(n) {
    function l(D) {
      return xo(D, n);
    }
    ca !== null && xo(ca, n), ua !== null && xo(ua, n), fa !== null && xo(fa, n), Li.forEach(l), Ui.forEach(l);
    for (var s = 0; s < ha.length; s++) {
      var r = ha[s];
      r.blockedOn === n && (r.blockedOn = null);
    }
    for (; 0 < ha.length && (s = ha[0], s.blockedOn === null); ) O1(s), s.blockedOn === null && ha.shift();
    if (s = (n.ownerDocument || n).$$reactFormReplay, s != null) for (r = 0; r < s.length; r += 3) {
      var h = s[r], y = s[r + 1], _ = h[Gt] || null;
      if (typeof y == "function") _ || D1(s);
      else if (_) {
        var T = null;
        if (y && y.hasAttribute("formAction")) {
          if (h = y, _ = y[Gt] || null) T = _.formAction;
          else if (Gu(h) !== null) continue;
        } else T = _.action;
        typeof T == "function" ? s[r + 1] = T : (s.splice(r, 3), r -= 3), D1(s);
      }
    }
  }
  function Xu(n) {
    this._internalRoot = n;
  }
  jo.prototype.render = Xu.prototype.render = function(n) {
    var l = this._internalRoot;
    if (l === null) throw Error(i(409));
    var s = l.current, r = vn();
    k1(s, r, n, l, null, null);
  }, jo.prototype.unmount = Xu.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var l = n.containerInfo;
      k1(n.current, 2, null, n, null, null), no(), l[bl] = null;
    }
  };
  function jo(n) {
    this._internalRoot = n;
  }
  jo.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var l = Yl();
      n = { blockedOn: null, target: n, priority: l };
      for (var s = 0; s < ha.length && l !== 0 && l < ha[s].priority; s++) ;
      ha.splice(s, 0, n), s === 0 && O1(n);
    }
  };
  var R1 = e.version;
  if (R1 !== "19.1.0") throw Error(i(527, R1, "19.1.0"));
  G.findDOMNode = function(n) {
    var l = n._reactInternals;
    if (l === void 0) throw typeof n.render == "function" ? Error(i(188)) : (n = Object.keys(n).join(","), Error(i(268, n)));
    return n = d(l), n = n !== null ? g(n) : null, n = n === null ? null : n.stateNode, n;
  };
  var ob = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: R, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _o2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_o2.isDisabled && _o2.supportsFiber) try {
      Tn = _o2.inject(ob), ut = _o2;
    } catch {
    }
  }
  return Vi.createRoot = function(n, l) {
    if (!o(n)) throw Error(i(299));
    var s = false, r = "", h = Pd, y = Wd, _ = Jd, T = null;
    return l != null && (l.unstable_strictMode === true && (s = true), l.identifierPrefix !== void 0 && (r = l.identifierPrefix), l.onUncaughtError !== void 0 && (h = l.onUncaughtError), l.onCaughtError !== void 0 && (y = l.onCaughtError), l.onRecoverableError !== void 0 && (_ = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (T = l.unstable_transitionCallbacks)), l = N1(n, 1, false, null, null, s, r, h, y, _, T, null), n[bl] = l.current, Mu(n), new Xu(l);
  }, Vi.hydrateRoot = function(n, l, s) {
    if (!o(n)) throw Error(i(299));
    var r = false, h = "", y = Pd, _ = Wd, T = Jd, D = null, Z = null;
    return s != null && (s.unstable_strictMode === true && (r = true), s.identifierPrefix !== void 0 && (h = s.identifierPrefix), s.onUncaughtError !== void 0 && (y = s.onUncaughtError), s.onCaughtError !== void 0 && (_ = s.onCaughtError), s.onRecoverableError !== void 0 && (T = s.onRecoverableError), s.unstable_transitionCallbacks !== void 0 && (D = s.unstable_transitionCallbacks), s.formState !== void 0 && (Z = s.formState)), l = N1(n, 1, true, l, s ?? null, r, h, y, _, T, D, Z), l.context = T1(null), s = l.current, r = vn(), r = Bs(r), h = Kl(r), h.callback = null, Il(s, h, r), s = r, l.current.lanes = s, Jt(l, s), ml(l), n[bl] = l.current, Mu(n), new jo(l);
  }, Vi.version = "19.1.0", Vi;
}
var Q1;
function Sb() {
  if (Q1) return Ku.exports;
  Q1 = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
    } catch (e) {
      console.error(e);
    }
  }
  return t(), Ku.exports = xb(), Ku.exports;
}
var jb = Sb(), Ju = { exports: {} }, ef = {};
/**
* @license React
* react-compiler-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var X1;
function _b() {
  if (X1) return ef;
  X1 = 1;
  var t = nr().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return ef.c = function(e) {
    return t.H.useMemoCache(e);
  }, ef;
}
var F1;
function wb() {
  return F1 || (F1 = 1, Ju.exports = _b()), Ju.exports;
}
var F = wb();
function Nb(t, e) {
  if (t instanceof RegExp) return { keys: false, pattern: t };
  var a, i, o, c, f = [], u = "", d = t.split("/");
  for (d[0] || d.shift(); o = d.shift(); ) a = o[0], a === "*" ? (f.push(a), u += o[1] === "?" ? "(?:/(.*))?" : "/(.*)") : a === ":" ? (i = o.indexOf("?", 1), c = o.indexOf(".", 1), f.push(o.substring(1, ~i ? i : ~c ? c : o.length)), u += ~i && !~c ? "(?:/([^/]+?))?" : "/([^/]+?)", ~c && (u += (~i ? "?" : "") + "\\" + o.substring(c))) : u += "/" + o;
  return { keys: f, pattern: new RegExp("^" + u + (e ? "(?=$|/)" : "/?$"), "i") };
}
var tf = { exports: {} }, nf = {};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Z1;
function Tb() {
  if (Z1) return nf;
  Z1 = 1;
  var t = nr();
  function e(b, v) {
    return b === v && (b !== 0 || 1 / b === 1 / v) || b !== b && v !== v;
  }
  var a = typeof Object.is == "function" ? Object.is : e, i = t.useState, o = t.useEffect, c = t.useLayoutEffect, f = t.useDebugValue;
  function u(b, v) {
    var x = v(), S = i({ inst: { value: x, getSnapshot: v } }), j = S[0].inst, w = S[1];
    return c(function() {
      j.value = x, j.getSnapshot = v, d(j) && w({ inst: j });
    }, [b, x, v]), o(function() {
      return d(j) && w({ inst: j }), b(function() {
        d(j) && w({ inst: j });
      });
    }, [b]), f(x), x;
  }
  function d(b) {
    var v = b.getSnapshot;
    b = b.value;
    try {
      var x = v();
      return !a(b, x);
    } catch {
      return true;
    }
  }
  function g(b, v) {
    return v();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? g : u;
  return nf.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : p, nf;
}
var K1;
function kb() {
  return K1 || (K1 = 1, tf.exports = Tb()), tf.exports;
}
var Mb = kb();
const Ab = gb.useInsertionEffect, Cb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Eb = Cb ? $.useLayoutEffect : $.useEffect, Ob = Ab || Eb, ng = (t) => {
  const e = $.useRef([t, (...a) => e[0](...a)]).current;
  return Ob(() => {
    e[0] = t;
  }), e[1];
}, zb = "popstate", Bf = "pushState", Yf = "replaceState", Db = "hashchange", I1 = [zb, Bf, Yf, Db], Rb = (t) => {
  for (const e of I1) addEventListener(e, t);
  return () => {
    for (const e of I1) removeEventListener(e, t);
  };
}, lg = (t, e) => Mb.useSyncExternalStore(Rb, t, e), Lb = () => location.search, Ub = ({ ssrSearch: t = "" } = {}) => lg(Lb, () => t), P1 = () => location.pathname, $b = ({ ssrPath: t } = {}) => lg(P1, t ? () => t : P1), Hb = (t, { replace: e = false, state: a = null } = {}) => history[e ? Yf : Bf](a, "", t), qb = (t = {}) => [$b(t), Hb], W1 = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[W1] > "u") {
  for (const t of [Bf, Yf]) {
    const e = history[t];
    history[t] = function() {
      const a = e.apply(this, arguments), i = new Event(t);
      return i.arguments = arguments, dispatchEvent(i), a;
    };
  }
  Object.defineProperty(window, W1, { value: true });
}
const Vb = (t, e) => e.toLowerCase().indexOf(t.toLowerCase()) ? "~" + e : e.slice(t.length) || "/", ag = (t = "") => t === "/" ? "" : t, Bb = (t, e) => t[0] === "~" ? t.slice(1) : ag(e) + t, Yb = (t = "", e) => Vb(J1(ag(t)), J1(e)), J1 = (t) => {
  try {
    return decodeURI(t);
  } catch {
    return t;
  }
}, sg = { hook: qb, searchHook: Ub, parser: Nb, base: "", ssrPath: void 0, ssrSearch: void 0, ssrContext: void 0, hrefs: (t) => t }, ig = $.createContext(sg), lr = () => $.useContext(ig), rg = {}, og = $.createContext(rg), Gb = () => $.useContext(og), $o = (t) => {
  const [e, a] = t.hook(t);
  return [Yb(t.base, e), ng((i, o) => a(Bb(i, t.base), o))];
}, Ho = () => $o(lr()), cg = (t, e, a, i) => {
  const { pattern: o, keys: c } = e instanceof RegExp ? { keys: false, pattern: e } : t(e || "*", i), f = o.exec(a) || [], [u, ...d] = f;
  return u !== void 0 ? [true, (() => {
    const g = c !== false ? Object.fromEntries(c.map((b, v) => [b, d[v]])) : f.groups;
    let p = { ...d };
    return g && Object.assign(p, g), p;
  })(), ...i ? [u] : []] : [false, null];
}, ug = ({ children: t, ...e }) => {
  var _a6, _b3;
  const a = lr(), i = e.hook ? sg : a;
  let o = i;
  const [c, f] = ((_a6 = e.ssrPath) == null ? void 0 : _a6.split("?")) ?? [];
  f && (e.ssrSearch = f, e.ssrPath = c), e.hrefs = e.hrefs ?? ((_b3 = e.hook) == null ? void 0 : _b3.hrefs);
  let u = $.useRef({}), d = u.current, g = d;
  for (let p in i) {
    const b = p === "base" ? i[p] + (e[p] || "") : e[p] || i[p];
    d === g && b !== g[p] && (u.current = g = { ...g }), g[p] = b, (b !== i[p] || b !== o[p]) && (o = g);
  }
  return $.createElement(ig.Provider, { value: o, children: t });
}, em = ({ children: t, component: e }, a) => e ? $.createElement(e, { params: a }) : typeof t == "function" ? t(a) : t, Qb = (t) => {
  let e = $.useRef(rg);
  const a = e.current;
  return e.current = Object.keys(t).length !== Object.keys(a).length || Object.entries(t).some(([i, o]) => o !== a[i]) ? t : a;
}, Rl = ({ path: t, nest: e, match: a, ...i }) => {
  const o = lr(), [c] = $o(o), [f, u, d] = a ?? cg(o.parser, t, c, e), g = Qb({ ...Gb(), ...u });
  if (!f) return null;
  const p = d ? $.createElement(ug, { base: d }, em(i, g)) : em(i, g);
  return $.createElement(og.Provider, { value: g, children: p });
}, al = $.forwardRef((t, e) => {
  const a = lr(), [i, o] = $o(a), { to: c = "", href: f = c, onClick: u, asChild: d, children: g, className: p, replace: b, state: v, ...x } = t, S = ng((w) => {
    w.ctrlKey || w.metaKey || w.altKey || w.shiftKey || w.button !== 0 || (u == null ? void 0 : u(w), w.defaultPrevented || (w.preventDefault(), o(f, t)));
  }), j = a.hrefs(f[0] === "~" ? f.slice(1) : a.base + f, a);
  return d && $.isValidElement(g) ? $.cloneElement(g, { onClick: S, href: j }) : $.createElement("a", { ...x, onClick: S, href: j, className: (p == null ? void 0 : p.call) ? p(i === f) : p, children: g, ref: e });
}), fg = (t) => Array.isArray(t) ? t.flatMap((e) => fg(e && e.type === $.Fragment ? e.props.children : e)) : [t], Xb = ({ children: t, location: e }) => {
  const a = lr(), [i] = $o(a);
  for (const o of fg(t)) {
    let c = 0;
    if ($.isValidElement(o) && (c = cg(a.parser, o.props.path, e || i, o.props.nest))[0]) return $.cloneElement(o, { match: c });
  }
  return null;
}, Gi = {}, tm = (t, e) => t.unstable_is ? t.unstable_is(e) : e === t, nm = (t) => "init" in t, lf = (t) => !!t.write, lm = (t) => "v" in t || "e" in t, wo = (t) => {
  if ("e" in t) throw t.e;
  if ((Gi ? "production" : void 0) !== "production" && !("v" in t)) throw new Error("[Bug] atom state is not initialized");
  return t.v;
}, Eo = /* @__PURE__ */ new WeakMap(), am = (t) => {
  var e;
  return Oo(t) && !!((e = Eo.get(t)) != null && e[0]);
}, Fb = (t) => {
  const e = Eo.get(t);
  (e == null ? void 0 : e[0]) && (e[0] = false, e[1].forEach((a) => a()));
}, hg = (t, e) => {
  let a = Eo.get(t);
  if (!a) {
    a = [true, /* @__PURE__ */ new Set()], Eo.set(t, a);
    const i = () => {
      a[0] = false;
    };
    t.then(i, i);
  }
  a[1].add(e);
}, Oo = (t) => typeof (t == null ? void 0 : t.then) == "function", dg = (t, e, a) => {
  a.p.has(t) || (a.p.add(t), e.then(() => {
    a.p.delete(t);
  }, () => {
    a.p.delete(t);
  }));
}, af = (t, e, a) => {
  const i = a(t), o = "v" in i, c = i.v;
  if (Oo(e)) for (const f of i.d.keys()) dg(t, e, a(f));
  i.v = e, delete i.e, (!o || !Object.is(c, i.v)) && (++i.n, Oo(c) && Fb(c));
}, sm = (t, e, a) => {
  var i;
  const o = /* @__PURE__ */ new Set();
  for (const c of ((i = a.get(t)) == null ? void 0 : i.t) || []) a.has(c) && o.add(c);
  for (const c of e.p) o.add(c);
  return o;
}, Zb = () => {
  const t = /* @__PURE__ */ new Set(), e = () => {
    t.forEach((a) => a());
  };
  return e.add = (a) => (t.add(a), () => {
    t.delete(a);
  }), e;
}, sf = () => {
  const t = {}, e = /* @__PURE__ */ new WeakMap(), a = (i) => {
    var o, c;
    (o = e.get(t)) == null || o.forEach((f) => f(i)), (c = e.get(i)) == null || c.forEach((f) => f());
  };
  return a.add = (i, o) => {
    const c = i || t, f = (e.has(c) ? e : e.set(c, /* @__PURE__ */ new Set())).get(c);
    return f.add(o), () => {
      f == null ? void 0 : f.delete(o), f.size || e.delete(c);
    };
  }, a;
}, Kb = (t) => (t.c || (t.c = sf()), t.m || (t.m = sf()), t.u || (t.u = sf()), t.f || (t.f = Zb()), t), Ib = Symbol(), Pb = (t = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), f = {}, u = (v, ...x) => v.read(...x), d = (v, ...x) => v.write(...x), g = (v, x) => {
  var S;
  return (S = v.unstable_onInit) == null ? void 0 : S.call(v, x);
}, p = (v, x) => {
  var S;
  return (S = v.onMount) == null ? void 0 : S.call(v, x);
}, ...b) => {
  const v = b[0] || ((A) => {
    if ((Gi ? "production" : void 0) !== "production" && !A) throw new Error("Atom is undefined or null");
    let z = t.get(A);
    return z || (z = { d: /* @__PURE__ */ new Map(), p: /* @__PURE__ */ new Set(), n: 0 }, t.set(A, z), g == null ? void 0 : g(A, L)), z;
  }), x = b[1] || (() => {
    const A = [], z = (q) => {
      try {
        q();
      } catch (B) {
        A.push(B);
      }
    };
    do {
      f.f && z(f.f);
      const q = /* @__PURE__ */ new Set(), B = q.add.bind(q);
      i.forEach((J) => {
        var W;
        return (W = e.get(J)) == null ? void 0 : W.l.forEach(B);
      }), i.clear(), c.forEach(B), c.clear(), o.forEach(B), o.clear(), q.forEach(z), i.size && S();
    } while (i.size || c.size || o.size);
    if (A.length) throw new AggregateError(A);
  }), S = b[2] || (() => {
    const A = [], z = /* @__PURE__ */ new WeakSet(), q = /* @__PURE__ */ new WeakSet(), B = Array.from(i);
    for (; B.length; ) {
      const J = B[B.length - 1], W = v(J);
      if (q.has(J)) {
        B.pop();
        continue;
      }
      if (z.has(J)) {
        if (a.get(J) === W.n) A.push([J, W]);
        else if ((Gi ? "production" : void 0) !== "production" && a.has(J)) throw new Error("[Bug] invalidated atom exists");
        q.add(J), B.pop();
        continue;
      }
      z.add(J);
      for (const oe of sm(J, W, e)) z.has(oe) || B.push(oe);
    }
    for (let J = A.length - 1; J >= 0; --J) {
      const [W, oe] = A[J];
      let ae = false;
      for (const K of oe.d.keys()) if (K !== W && i.has(K)) {
        ae = true;
        break;
      }
      ae && (j(W), k(W)), a.delete(W);
    }
  }), j = b[3] || ((A) => {
    var z;
    const q = v(A);
    if (lm(q) && (e.has(A) && a.get(A) !== q.n || Array.from(q.d).every(([G, ne]) => j(G).n === ne))) return q;
    q.d.clear();
    let B = true;
    const J = () => {
      e.has(A) && (k(A), S(), x());
    }, W = (G) => {
      var ne;
      if (tm(A, G)) {
        const O = v(G);
        if (!lm(O)) if (nm(G)) af(G, G.init, v);
        else throw new Error("no atom init");
        return wo(O);
      }
      const ue = j(G);
      try {
        return wo(ue);
      } finally {
        q.d.set(G, ue.n), am(q.v) && dg(A, q.v, ue), (ne = e.get(G)) == null || ne.t.add(A), B || J();
      }
    };
    let oe, ae;
    const K = { get signal() {
      return oe || (oe = new AbortController()), oe.signal;
    }, get setSelf() {
      return (Gi ? "production" : void 0) !== "production" && !lf(A) && console.warn("setSelf function cannot be used with read-only atom"), !ae && lf(A) && (ae = (...G) => {
        if ((Gi ? "production" : void 0) !== "production" && B && console.warn("setSelf function cannot be called in sync"), !B) try {
          return N(A, ...G);
        } finally {
          S(), x();
        }
      }), ae;
    } }, R = q.n;
    try {
      const G = u(A, W, K);
      return af(A, G, v), Oo(G) && (hg(G, () => oe == null ? void 0 : oe.abort()), G.then(J, J)), q;
    } catch (G) {
      return delete q.v, q.e = G, ++q.n, q;
    } finally {
      B = false, R !== q.n && a.get(A) === R && (a.set(A, q.n), i.add(A), (z = f.c) == null || z.call(f, A));
    }
  }), w = b[4] || ((A) => {
    const z = [A];
    for (; z.length; ) {
      const q = z.pop(), B = v(q);
      for (const J of sm(q, B, e)) {
        const W = v(J);
        a.set(J, W.n), z.push(J);
      }
    }
  }), N = b[5] || ((A, ...z) => {
    let q = true;
    const B = (W) => wo(j(W)), J = (W, ...oe) => {
      var ae;
      const K = v(W);
      try {
        if (tm(A, W)) {
          if (!nm(W)) throw new Error("atom not writable");
          const R = K.n, G = oe[0];
          af(W, G, v), k(W), R !== K.n && (i.add(W), (ae = f.c) == null || ae.call(f, W), w(W));
          return;
        } else return N(W, ...oe);
      } finally {
        q || (S(), x());
      }
    };
    try {
      return d(A, B, J, ...z);
    } finally {
      q = false;
    }
  }), k = b[6] || ((A) => {
    var z;
    const q = v(A), B = e.get(A);
    if (B && !am(q.v)) {
      for (const [J, W] of q.d) if (!B.d.has(J)) {
        const oe = v(J);
        M(J).t.add(A), B.d.add(J), W !== oe.n && (i.add(J), (z = f.c) == null || z.call(f, J), w(J));
      }
      for (const J of B.d || []) if (!q.d.has(J)) {
        B.d.delete(J);
        const W = C(J);
        W == null ? void 0 : W.t.delete(A);
      }
    }
  }), M = b[7] || ((A) => {
    var z;
    const q = v(A);
    let B = e.get(A);
    if (!B) {
      j(A);
      for (const J of q.d.keys()) M(J).t.add(A);
      if (B = { l: /* @__PURE__ */ new Set(), d: new Set(q.d.keys()), t: /* @__PURE__ */ new Set() }, e.set(A, B), (z = f.m) == null || z.call(f, A), lf(A)) {
        const J = () => {
          let W = true;
          const oe = (...ae) => {
            try {
              return N(A, ...ae);
            } finally {
              W || (S(), x());
            }
          };
          try {
            const ae = p(A, oe);
            ae && (B.u = () => {
              W = true;
              try {
                ae();
              } finally {
                W = false;
              }
            });
          } finally {
            W = false;
          }
        };
        o.add(J);
      }
    }
    return B;
  }), C = b[8] || ((A) => {
    var z;
    const q = v(A);
    let B = e.get(A);
    if (B && !B.l.size && !Array.from(B.t).some((J) => {
      var W;
      return (W = e.get(J)) == null ? void 0 : W.d.has(A);
    })) {
      B.u && c.add(B.u), B = void 0, e.delete(A), (z = f.u) == null || z.call(f, A);
      for (const J of q.d.keys()) {
        const W = C(J);
        W == null ? void 0 : W.t.delete(A);
      }
      return;
    }
    return B;
  }), E = [t, e, a, i, o, c, f, u, d, g, p, v, x, S, j, w, N, k, M, C], L = { get: (A) => wo(j(A)), set: (A, ...z) => {
    try {
      return N(A, ...z);
    } finally {
      S(), x();
    }
  }, sub: (A, z) => {
    const B = M(A).l;
    return B.add(z), x(), () => {
      B.delete(z), C(A), x();
    };
  } };
  return Object.defineProperty(L, Ib, { value: E }), L;
}, mg = Pb, Wb = Kb, im = hg, Gf = {};
let Jb = 0;
function Se(t, e) {
  const a = `atom${++Jb}`, i = { toString() {
    return (Gf ? "production" : void 0) !== "production" && this.debugLabel ? a + ":" + this.debugLabel : a;
  } };
  return typeof t == "function" ? i.read = t : (i.init = t, i.read = ev, i.write = tv), e && (i.write = e), i;
}
function ev(t) {
  return t(this);
}
function tv(t, e, a) {
  return e(this, typeof a == "function" ? a(t(this)) : a);
}
const nv = () => {
  let t = 0;
  const e = Wb({}), a = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), o = mg(a, i, void 0, void 0, void 0, void 0, e, void 0, (u, d, g, ...p) => t ? g(u, ...p) : u.write(d, g, ...p)), c = /* @__PURE__ */ new Set();
  return e.m.add(void 0, (u) => {
    c.add(u);
    const d = a.get(u);
    d.m = i.get(u);
  }), e.u.add(void 0, (u) => {
    c.delete(u);
    const d = a.get(u);
    delete d.m;
  }), Object.assign(o, { dev4_get_internal_weak_map: () => a, dev4_get_mounted_atoms: () => c, dev4_restore_atoms: (u) => {
    const d = { read: () => null, write: (g, p) => {
      ++t;
      try {
        for (const [b, v] of u) "init" in b && p(b, v);
      } finally {
        --t;
      }
    } };
    o.set(d);
  } });
};
function lv() {
  return (Gf ? "production" : void 0) !== "production" ? nv() : mg();
}
let Bi;
function av() {
  return Bi || (Bi = lv(), (Gf ? "production" : void 0) !== "production" && (globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = Bi), globalThis.__JOTAI_DEFAULT_STORE__ !== Bi && console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"))), Bi;
}
const sv = {}, iv = $.createContext(void 0);
function gg(t) {
  return $.useContext(iv) || av();
}
const pg = (t) => typeof (t == null ? void 0 : t.then) == "function", rv = (t) => {
  t.status = "pending", t.then((e) => {
    t.status = "fulfilled", t.value = e;
  }, (e) => {
    t.status = "rejected", t.reason = e;
  });
}, ov = qt.use || ((t) => {
  if (t.status === "pending") throw t;
  if (t.status === "fulfilled") return t.value;
  throw t.status === "rejected" ? t.reason : (rv(t), t);
}), rf = /* @__PURE__ */ new WeakMap(), cv = (t, e) => {
  let a = rf.get(t);
  return a || (a = new Promise((i, o) => {
    let c = t;
    const f = (g) => (p) => {
      c === g && i(p);
    }, u = (g) => (p) => {
      c === g && o(p);
    }, d = () => {
      try {
        const g = e();
        pg(g) ? (rf.set(g, a), c = g, g.then(f(g), u(g)), im(g, d)) : i(g);
      } catch (g) {
        o(g);
      }
    };
    t.then(f(t), u(t)), im(t, d);
  }), rf.set(t, a)), a;
};
function Ne(t, e) {
  const a = gg(), [[i, o, c], f] = $.useReducer((g) => {
    const p = a.get(t);
    return Object.is(g[0], p) && g[1] === a && g[2] === t ? g : [p, a, t];
  }, void 0, () => [a.get(t), a, t]);
  let u = i;
  if ((o !== a || c !== t) && (f(), u = a.get(t)), $.useEffect(() => {
    const g = a.sub(t, () => {
      f();
    });
    return f(), g;
  }, [a, t, void 0]), $.useDebugValue(u), pg(u)) {
    const g = cv(u, () => a.get(t));
    return ov(g);
  }
  return u;
}
function Zt(t, e) {
  const a = gg();
  return $.useCallback((...o) => {
    if ((sv ? "production" : void 0) !== "production" && !("write" in t)) throw new Error("not writable atom");
    return a.set(t, ...o);
  }, [a, t]);
}
function Ee(t, e) {
  return [Ne(t), Zt(t)];
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Ls = (t) => [...Array(t).keys()];
function of(t, e) {
  return t.length > e ? t.slice(0, e) : t;
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const yg = (t, e, a, i) => ({ x: (t + a) / 2, y: (e + i) / 2, width: Math.abs(t - a), height: Math.abs(e - i) }), uv = (t, e) => Math.abs(t.x - e.x) < t.width / 2 + e.width / 2 && Math.abs(t.y - e.y) < t.height / 2 + e.height / 2, Sf = (t, e) => e.x - e.width / 2 <= t[0] && t[0] <= e.x + e.width / 2 && e.y - e.height / 2 <= t[1] && t[1] <= e.y + e.height / 2;
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const qo = (t, e, a) => {
  const i = URL.createObjectURL(new Blob([t], { type: a }));
  {
    const o = document.createElement("a");
    o.href = i, o.download = e, document.body.appendChild(o), o.click(), document.body.removeChild(o);
  }
  URL.revokeObjectURL(i);
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const va = (t, e) => [t[0] + e[0], t[1] + e[1]], ar = (t, e) => [t[0] - e[0], t[1] - e[1]], fv = (t, e) => [t[0] / e, t[1] / e], hv = (t, e) => t[0] === e[0] && t[1] === e[1], dv = (t, e) => [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2], bg = (t, e = t[0]) => [2 * e - t[0], t[1]], $l = ([t, e], a = 10) => [Math.round(t / a) * a, Math.round(e / a) * a];
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const mv = (t, e) => t.toString(16).padStart(e / 4, "0");
let gv = (t) => crypto.getRandomValues(new Uint8Array(t)), pv = (t, e, a) => {
  let i = (2 << Math.log2(t.length - 1)) - 1, o = -~(1.6 * i * e / t.length);
  return (c = e) => {
    let f = "";
    for (; ; ) {
      let u = a(o), d = o | 0;
      for (; d--; ) if (f += t[u[d] & i] || "", f.length >= c) return f;
    }
  };
}, yv = (t, e = 21) => pv(t, e | 0, gv);
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const vg = yv("0123456789ABCDEF", 10), jf = () => `w${vg()}`, vt = (t) => `${t}_${vg()}`;
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const bv = (t) => {
  const e = t.getFullYear(), a = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0"), o = String(t.getHours()).padStart(2, "0"), c = String(t.getMinutes()).padStart(2, "0"), f = String(t.getSeconds()).padStart(2, "0");
  return `${e}.${a}.${i}-${o}.${c}.${f}`;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
function xg(t, e) {
  const [a, i] = t, [o, c] = e;
  if (a === o || i === c) return [];
  const f = [], u = a + (o - a) / 2;
  return Math.abs(o - a) > 50 ? (f.push([u, i]), f.push([u, c])) : f.push([o, i]), f;
}
const vv = Object.freeze(Object.defineProperty({ __proto__: null, generateOrthogonalPath: xg }, Symbol.toStringTag, { value: "Module" })), xv = "modulepreload", Sv = function(t) {
  return "/" + t;
}, rm = {}, jv = function(e, a, i) {
  let o = Promise.resolve();
  if (a && a.length > 0) {
    document.getElementsByTagName("link");
    const f = document.querySelector("meta[property=csp-nonce]"), u = (f == null ? void 0 : f.nonce) || (f == null ? void 0 : f.getAttribute("nonce"));
    o = Promise.allSettled(a.map((d) => {
      if (d = Sv(d), d in rm) return;
      rm[d] = true;
      const g = d.endsWith(".css"), p = g ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${d}"]${p}`)) return;
      const b = document.createElement("link");
      if (b.rel = g ? "stylesheet" : xv, g || (b.as = "script"), b.crossOrigin = "", b.href = d, u && b.setAttribute("nonce", u), document.head.appendChild(b), g) return new Promise((v, x) => {
        b.addEventListener("load", v), b.addEventListener("error", () => x(new Error(`Unable to preload CSS for ${d}`)));
      });
    }));
  }
  function c(f) {
    const u = new Event("vite:preloadError", { cancelable: true });
    if (u.payload = f, window.dispatchEvent(u), !u.defaultPrevented) throw f;
  }
  return o.then((f) => {
    for (const u of f || []) u.status === "rejected" && c(u.reason);
    return e().catch(c);
  });
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
async function _v(t, e, a) {
  try {
    const i = await fetch("/api/route-wire", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ start: t, end: e, obstacles: a }) });
    if (!i.ok) throw new Error(`API error: ${i.statusText}`);
    const o = await i.json();
    if (!o.success) throw new Error(o.error || "Unknown routing error");
    return o.path;
  } catch (i) {
    console.error("Wire routing API error:", i);
    const { generateOrthogonalPath: o } = await jv(async () => {
      const { generateOrthogonalPath: c } = await Promise.resolve().then(() => vv);
      return { generateOrthogonalPath: c };
    }, void 0);
    return o(t, e);
  }
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Qf = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/canvas.ts/containerSizeState", Se([0, 0]));
Qf.debugLabel = "containerSizeState";
const Xf = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/canvas.ts/mousePosInContainerState", Se([0, 0]));
Xf.debugLabel = "mousePosInContainerState";
const sr = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/canvas.ts/canvasViewboxState", Se({ scale: 1, offset: [0, 0] }));
sr.debugLabel = "canvasViewboxState";
const Sg = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/canvas.ts/svgViewboxState", Se((t) => {
  const e = t(Qf), { scale: a, offset: i } = t(sr);
  return [i[0], i[1], e[0] * a, e[1] * a].join(" ");
}));
Sg.debugLabel = "svgViewboxState";
const sl = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/canvas.ts/mousePosState", Se((t) => {
  const e = t(Xf), { scale: a, offset: i } = t(sr);
  return [e[0] * a + i[0], e[1] * a + i[1]];
}));
sl.debugLabel = "mousePosState";
const Ff = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/canvas.ts/mouseGridState", Se((t) => {
  const e = t(sl);
  return $l(e);
}));
Ff.debugLabel = "mouseGridState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const jg = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/channel.ts/channelsState", Se([{ name: "io0", proto: { kind: "out", pin: ["pin0"] } }, { name: "io1", proto: { kind: "out", pin: ["pin0", "pin1", "pin2"] } }, { name: "io2", proto: { kind: "out", pin: ["pin0"] } }, { name: "b", proto: { kind: "in", pin: ["pin1", "pin2"] } }, { name: "c", proto: { kind: "uart", tx: "pin3", rx: "pin4" } }]));
jg.debugLabel = "channelsState";
const _g = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/channel.ts/tmpChannelsState", Se([{ name: "hoge", proto: { kind: "in", pin: ["hoge"] } }, { name: "fuga", proto: { kind: "out", pin: ["fuga"] } }]));
_g.debugLabel = "tmpChannelsState";
const Vo = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/channel.ts/mergedChannelsState", Se((t) => {
  const e = t(jg), a = t(_g), i = [], o = new Set(a.map((c) => c.name));
  for (const c of a) {
    const f = e.find((u) => u.name === c.name);
    f ? JSON.stringify(f.proto) !== JSON.stringify(c.proto) ? (i.push({ ...f, edit: "removed" }), i.push({ ...c, edit: "created" })) : i.push({ ...c, edit: "created" }) : i.push({ ...c, edit: "created" });
  }
  for (const c of e) o.has(c.name) || i.push({ ...c, edit: "removed" });
  return i;
}));
Vo.debugLabel = "mergedChannelsState";
const Zf = {}, Kf = Symbol((Zf ? "production" : void 0) !== "production" ? "RESET" : "");
function wv(t) {
  const e = Se(t, (a, i, o) => {
    const c = typeof o == "function" ? o(a(e)) : o;
    i(e, c === Kf ? t : c);
  });
  return e;
}
function Nv(t, e) {
  let a = null;
  const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), c = (u) => {
    let d;
    if (d = i.get(u), d !== void 0) if (a == null ? void 0 : a(d[1], u)) c.remove(u);
    else return d[0];
    const g = t(u);
    return i.set(u, [g, Date.now()]), f("CREATE", u, g), g;
  }, f = (u, d, g) => {
    for (const p of o) p({ type: u, param: d, atom: g });
  };
  return c.unstable_listen = (u) => (o.add(u), () => {
    o.delete(u);
  }), c.getParams = () => i.keys(), c.remove = (u) => {
    {
      if (!i.has(u)) return;
      const [d] = i.get(u);
      i.delete(u), f("REMOVE", u, d);
    }
  }, c.setShouldRemove = (u) => {
    if (a = u, !!a) for (const [d, [g, p]] of i) a(p, d) && (i.delete(d), f("REMOVE", d, g));
  }, c;
}
const Tv = (t) => typeof (t == null ? void 0 : t.then) == "function";
function kv(t = () => {
  try {
    return window.localStorage;
  } catch (a) {
    (Zf ? "production" : void 0) !== "production" && typeof window < "u" && console.warn(a);
    return;
  }
}, e) {
  var a;
  let i, o;
  const c = { getItem: (d, g) => {
    var p, b;
    const v = (S) => {
      if (S = S || "", i !== S) {
        try {
          o = JSON.parse(S, e == null ? void 0 : e.reviver);
        } catch {
          return g;
        }
        i = S;
      }
      return o;
    }, x = (b = (p = t()) == null ? void 0 : p.getItem(d)) != null ? b : null;
    return Tv(x) ? x.then(v) : v(x);
  }, setItem: (d, g) => {
    var p;
    return (p = t()) == null ? void 0 : p.setItem(d, JSON.stringify(g, void 0));
  }, removeItem: (d) => {
    var g;
    return (g = t()) == null ? void 0 : g.removeItem(d);
  } }, f = (d) => (g, p, b) => d(g, (v) => {
    let x;
    try {
      x = JSON.parse(v || "");
    } catch {
      x = b;
    }
    p(x);
  });
  let u;
  try {
    u = (a = t()) == null ? void 0 : a.subscribe;
  } catch {
  }
  return !u && typeof window < "u" && typeof window.addEventListener == "function" && window.Storage && (u = (d, g) => {
    if (!(t() instanceof window.Storage)) return () => {
    };
    const p = (b) => {
      b.storageArea === t() && b.key === d && g(b.newValue);
    };
    return window.addEventListener("storage", p), () => {
      window.removeEventListener("storage", p);
    };
  }), u && (c.subscribe = f(u)), c;
}
const Mv = kv();
function If(t, e, a = Mv, i) {
  const o = Se(e);
  return (Zf ? "production" : void 0) !== "production" && (o.debugPrivate = true), o.onMount = (f) => {
    f(a.getItem(t, e));
    let u;
    return a.subscribe && (u = a.subscribe(t, f, e)), u;
  }, Se((f) => f(o), (f, u, d) => {
    const g = typeof d == "function" ? d(f(o)) : d;
    return g === Kf ? (u(o, e), a.removeItem(t)) : g instanceof Promise ? g.then((p) => (u(o, p), a.setItem(t, p))) : (u(o, g), a.setItem(t, g));
  });
}
function Av(t, e) {
  const a = Zt(t);
  return $.useCallback(() => a(Kf), [a]);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Kt = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/editor.ts/editorState", wv({ state: "Default", value: void 0 }));
Kt.debugLabel = "editorState";
const ir = (t) => t.elems.length === 0 && t.wires.length === 0 && t.paths.length === 0, xt = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/editor.ts/selectsState", Se({ elems: [], wires: [], paths: [] }));
xt.debugLabel = "selectsState";
const Pf = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/editor.ts/clipState", Se({ elems: [], wires: [] }));
Pf.debugLabel = "clipState";
const Cv = (t) => t.elems.length === 0 && t.wires.length === 0, wg = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/editor.ts/editorLayoutState", If("editor-layout", { horizontal: [1, 3, 1], vertical: [2, 1] }));
wg.debugLabel = "editorLayoutState";
const Wf = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/editor.ts/listTabState", Se("proj"));
Wf.debugLabel = "listTabState";
const Bo = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/editor.ts/editorTabsState", Se([]));
Bo.debugLabel = "editorTabsState";
const Yo = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/editor.ts/activeTabState", Se(0));
Yo.debugLabel = "activeTabState";
const Ng = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/editor.ts/deviceTabState", Se("compiler"));
Ng.debugLabel = "deviceTabState";
var rr = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    return this.listeners.add(t), this.onSubscribe(), () => {
      this.listeners.delete(t), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Hs = typeof window > "u" || "Deno" in globalThis;
function $n() {
}
function Ev(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function _f(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Tg(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function ya(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Hn(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function om(t, e) {
  const { type: a = "all", exact: i, fetchStatus: o, predicate: c, queryKey: f, stale: u } = t;
  if (f) {
    if (i) {
      if (e.queryHash !== Jf(f, e.options)) return false;
    } else if (!Ii(e.queryKey, f)) return false;
  }
  if (a !== "all") {
    const d = e.isActive();
    if (a === "active" && !d || a === "inactive" && d) return false;
  }
  return !(typeof u == "boolean" && e.isStale() !== u || o && o !== e.state.fetchStatus || c && !c(e));
}
function cm(t, e) {
  const { exact: a, status: i, predicate: o, mutationKey: c } = t;
  if (c) {
    if (!e.options.mutationKey) return false;
    if (a) {
      if (Ki(e.options.mutationKey) !== Ki(c)) return false;
    } else if (!Ii(e.options.mutationKey, c)) return false;
  }
  return !(i && e.state.status !== i || o && !o(e));
}
function Jf(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Ki)(t);
}
function Ki(t) {
  return JSON.stringify(t, (e, a) => Nf(a) ? Object.keys(a).sort().reduce((i, o) => (i[o] = a[o], i), {}) : a);
}
function Ii(t, e) {
  return t === e ? true : typeof t != typeof e ? false : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every((a) => Ii(t[a], e[a])) : false;
}
var Ov = Object.prototype.hasOwnProperty;
function kg(t, e) {
  if (t === e) return t;
  const a = um(t) && um(e);
  if (!a && !(Nf(t) && Nf(e))) return e;
  const o = (a ? t : Object.keys(t)).length, c = a ? e : Object.keys(e), f = c.length, u = a ? new Array(f) : {};
  let d = 0;
  for (let g = 0; g < f; g++) {
    const p = a ? g : c[g], b = t[p], v = e[p];
    if (b === v) {
      u[p] = b, (a ? g < o : Ov.call(t, p)) && d++;
      continue;
    }
    if (b === null || v === null || typeof b != "object" || typeof v != "object") {
      u[p] = v;
      continue;
    }
    const x = kg(b, v);
    u[p] = x, x === b && d++;
  }
  return o === f && d === o ? t : u;
}
function wf(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length) return false;
  for (const a in t) if (t[a] !== e[a]) return false;
  return true;
}
function um(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Nf(t) {
  if (!fm(t)) return false;
  const e = t.constructor;
  if (e === void 0) return true;
  const a = e.prototype;
  return !(!fm(a) || !a.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function fm(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function zv(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Tf(t, e, a) {
  return typeof a.structuralSharing == "function" ? a.structuralSharing(t, e) : a.structuralSharing !== false ? kg(t, e) : e;
}
function Dv(t, e, a = 0) {
  const i = [...t, e];
  return a && i.length > a ? i.slice(1) : i;
}
function Rv(t, e, a = 0) {
  const i = [e, ...t];
  return a && i.length > a ? i.slice(0, -1) : i;
}
var eh = Symbol();
function Mg(t, e) {
  return !t.queryFn && (e == null ? void 0 : e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === eh ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
var Lv = (_a2 = class extends rr {
  constructor() {
    super();
    __privateAdd(this, _t);
    __privateAdd(this, _e);
    __privateAdd(this, _n2);
    __privateSet(this, _n2, (t) => {
      if (!Hs && window.addEventListener) {
        const e = () => t();
        return window.addEventListener("visibilitychange", e, false), () => {
          window.removeEventListener("visibilitychange", e);
        };
      }
    });
  }
  onSubscribe() {
    __privateGet(this, _e) || this.setEventListener(__privateGet(this, _n2));
  }
  onUnsubscribe() {
    var _a6;
    this.hasListeners() || ((_a6 = __privateGet(this, _e)) == null ? void 0 : _a6.call(this), __privateSet(this, _e, void 0));
  }
  setEventListener(t) {
    var _a6;
    __privateSet(this, _n2, t), (_a6 = __privateGet(this, _e)) == null ? void 0 : _a6.call(this), __privateSet(this, _e, t((e) => {
      typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
    }));
  }
  setFocused(t) {
    __privateGet(this, _t) !== t && (__privateSet(this, _t, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((e) => {
      e(t);
    });
  }
  isFocused() {
    var _a6;
    return typeof __privateGet(this, _t) == "boolean" ? __privateGet(this, _t) : ((_a6 = globalThis.document) == null ? void 0 : _a6.visibilityState) !== "hidden";
  }
}, _t = new WeakMap(), _e = new WeakMap(), _n2 = new WeakMap(), _a2), th = new Lv(), Uv = (_b2 = class extends rr {
  constructor() {
    super();
    __privateAdd(this, _t2, true);
    __privateAdd(this, _e2);
    __privateAdd(this, _n3);
    __privateSet(this, _n3, (t) => {
      if (!Hs && window.addEventListener) {
        const e = () => t(true), a = () => t(false);
        return window.addEventListener("online", e, false), window.addEventListener("offline", a, false), () => {
          window.removeEventListener("online", e), window.removeEventListener("offline", a);
        };
      }
    });
  }
  onSubscribe() {
    __privateGet(this, _e2) || this.setEventListener(__privateGet(this, _n3));
  }
  onUnsubscribe() {
    var _a6;
    this.hasListeners() || ((_a6 = __privateGet(this, _e2)) == null ? void 0 : _a6.call(this), __privateSet(this, _e2, void 0));
  }
  setEventListener(t) {
    var _a6;
    __privateSet(this, _n3, t), (_a6 = __privateGet(this, _e2)) == null ? void 0 : _a6.call(this), __privateSet(this, _e2, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    __privateGet(this, _t2) !== t && (__privateSet(this, _t2, t), this.listeners.forEach((a) => {
      a(t);
    }));
  }
  isOnline() {
    return __privateGet(this, _t2);
  }
}, _t2 = new WeakMap(), _e2 = new WeakMap(), _n3 = new WeakMap(), _b2), zo = new Uv();
function kf() {
  let t, e;
  const a = new Promise((o, c) => {
    t = o, e = c;
  });
  a.status = "pending", a.catch(() => {
  });
  function i(o) {
    Object.assign(a, o), delete a.resolve, delete a.reject;
  }
  return a.resolve = (o) => {
    i({ status: "fulfilled", value: o }), t(o);
  }, a.reject = (o) => {
    i({ status: "rejected", reason: o }), e(o);
  }, a;
}
function $v(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Ag(t) {
  return (t ?? "online") === "online" ? zo.isOnline() : true;
}
var Mf = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function Cg(t) {
  let e = false, a = 0, i;
  const o = kf(), c = () => o.status !== "pending", f = (j) => {
    var _a6;
    if (!c()) {
      const w = new Mf(j);
      v(w), (_a6 = t.onCancel) == null ? void 0 : _a6.call(t, w);
    }
  }, u = () => {
    e = true;
  }, d = () => {
    e = false;
  }, g = () => th.isFocused() && (t.networkMode === "always" || zo.isOnline()) && t.canRun(), p = () => Ag(t.networkMode) && t.canRun(), b = (j) => {
    c() || (i == null ? void 0 : i(), o.resolve(j));
  }, v = (j) => {
    c() || (i == null ? void 0 : i(), o.reject(j));
  }, x = () => new Promise((j) => {
    var _a6;
    i = (w) => {
      (c() || g()) && j(w);
    }, (_a6 = t.onPause) == null ? void 0 : _a6.call(t);
  }).then(() => {
    var _a6;
    i = void 0, c() || ((_a6 = t.onContinue) == null ? void 0 : _a6.call(t));
  }), S = () => {
    if (c()) return;
    let j;
    const w = a === 0 ? t.initialPromise : void 0;
    try {
      j = w ?? t.fn();
    } catch (N) {
      j = Promise.reject(N);
    }
    Promise.resolve(j).then(b).catch((N) => {
      var _a6;
      if (c()) return;
      const k = t.retry ?? (Hs ? 0 : 3), M = t.retryDelay ?? $v, C = typeof M == "function" ? M(a, N) : M, E = k === true || typeof k == "number" && a < k || typeof k == "function" && k(a, N);
      if (e || !E) {
        v(N);
        return;
      }
      a++, (_a6 = t.onFail) == null ? void 0 : _a6.call(t, a, N), zv(C).then(() => g() ? void 0 : x()).then(() => {
        e ? v(N) : S();
      });
    });
  };
  return { promise: o, status: () => o.status, cancel: f, continue: () => (i == null ? void 0 : i(), o), cancelRetry: u, continueRetry: d, canStart: p, start: () => (p() ? S() : x().then(S), o) };
}
var Hv = (t) => setTimeout(t, 0);
function qv() {
  let t = [], e = 0, a = (u) => {
    u();
  }, i = (u) => {
    u();
  }, o = Hv;
  const c = (u) => {
    e ? t.push(u) : o(() => {
      a(u);
    });
  }, f = () => {
    const u = t;
    t = [], u.length && o(() => {
      i(() => {
        u.forEach((d) => {
          a(d);
        });
      });
    });
  };
  return { batch: (u) => {
    let d;
    e++;
    try {
      d = u();
    } finally {
      e--, e || f();
    }
    return d;
  }, batchCalls: (u) => (...d) => {
    c(() => {
      u(...d);
    });
  }, schedule: c, setNotifyFunction: (u) => {
    a = u;
  }, setBatchNotifyFunction: (u) => {
    i = u;
  }, setScheduler: (u) => {
    o = u;
  } };
}
var Bt = qv(), Eg = (_c = class {
  constructor() {
    __privateAdd(this, _t3);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), _f(this.gcTime) && __privateSet(this, _t3, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(this.gcTime || 0, t ?? (Hs ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    __privateGet(this, _t3) && (clearTimeout(__privateGet(this, _t3)), __privateSet(this, _t3, void 0));
  }
}, _t3 = new WeakMap(), _c), Vv = (_d = class extends Eg {
  constructor(t) {
    super();
    __privateAdd(this, _Vv_instances);
    __privateAdd(this, _t4);
    __privateAdd(this, _e3);
    __privateAdd(this, _n4);
    __privateAdd(this, _l);
    __privateAdd(this, _a3);
    __privateAdd(this, _r);
    __privateAdd(this, _i);
    __privateSet(this, _i, false), __privateSet(this, _r, t.defaultOptions), this.setOptions(t.options), this.observers = [], __privateSet(this, _l, t.client), __privateSet(this, _n4, __privateGet(this, _l).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, __privateSet(this, _t4, Bv(this.options)), this.state = t.state ?? __privateGet(this, _t4), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var _a6;
    return (_a6 = __privateGet(this, _a3)) == null ? void 0 : _a6.promise;
  }
  setOptions(t) {
    this.options = { ...__privateGet(this, _r), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && __privateGet(this, _n4).remove(this);
  }
  setData(t, e) {
    const a = Tf(this.state.data, t, this.options);
    return __privateMethod(this, _Vv_instances, s_fn).call(this, { data: a, type: "success", dataUpdatedAt: e == null ? void 0 : e.updatedAt, manual: e == null ? void 0 : e.manual }), a;
  }
  setState(t, e) {
    __privateMethod(this, _Vv_instances, s_fn).call(this, { type: "setState", state: t, setStateOptions: e });
  }
  cancel(t) {
    var _a6, _b3;
    const e = (_a6 = __privateGet(this, _a3)) == null ? void 0 : _a6.promise;
    return (_b3 = __privateGet(this, _a3)) == null ? void 0 : _b3.cancel(t), e ? e.then($n).catch($n) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: true });
  }
  reset() {
    this.destroy(), this.setState(__privateGet(this, _t4));
  }
  isActive() {
    return this.observers.some((t) => Hn(t.options.enabled, this) !== false);
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === eh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some((t) => ya(t.options.staleTime, this) === "static") : false;
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(t = 0) {
    return this.state.data === void 0 ? true : t === "static" ? false : this.state.isInvalidated ? true : !Tg(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var _a6, _b3;
    (_a6 = this.observers.find((e) => e.shouldFetchOnWindowFocus())) == null ? void 0 : _a6.refetch({ cancelRefetch: false }), (_b3 = __privateGet(this, _a3)) == null ? void 0 : _b3.continue();
  }
  onOnline() {
    var _a6, _b3;
    (_a6 = this.observers.find((e) => e.shouldFetchOnReconnect())) == null ? void 0 : _a6.refetch({ cancelRefetch: false }), (_b3 = __privateGet(this, _a3)) == null ? void 0 : _b3.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), __privateGet(this, _n4).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((e) => e !== t), this.observers.length || (__privateGet(this, _a3) && (__privateGet(this, _i) ? __privateGet(this, _a3).cancel({ revert: true }) : __privateGet(this, _a3).cancelRetry()), this.scheduleGc()), __privateGet(this, _n4).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || __privateMethod(this, _Vv_instances, s_fn).call(this, { type: "invalidate" });
  }
  async fetch(t, e) {
    var _a6, _b3, _c3, _d3, _e9, _f3, _g4, _h3, _i5, _j2, _k, _l4;
    if (this.state.fetchStatus !== "idle" && ((_a6 = __privateGet(this, _a3)) == null ? void 0 : _a6.status()) !== "rejected") {
      if (this.state.data !== void 0 && (e == null ? void 0 : e.cancelRefetch)) this.cancel({ silent: true });
      else if (__privateGet(this, _a3)) return __privateGet(this, _a3).continueRetry(), __privateGet(this, _a3).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const u = this.observers.find((d) => d.options.queryFn);
      u && this.setOptions(u.options);
    }
    const a = new AbortController(), i = (u) => {
      Object.defineProperty(u, "signal", { enumerable: true, get: () => (__privateSet(this, _i, true), a.signal) });
    }, o = () => {
      const u = Mg(this.options, e), g = (() => {
        const p = { client: __privateGet(this, _l), queryKey: this.queryKey, meta: this.meta };
        return i(p), p;
      })();
      return __privateSet(this, _i, false), this.options.persister ? this.options.persister(u, g, this) : u(g);
    }, f = (() => {
      const u = { fetchOptions: e, options: this.options, queryKey: this.queryKey, client: __privateGet(this, _l), state: this.state, fetchFn: o };
      return i(u), u;
    })();
    (_b3 = this.options.behavior) == null ? void 0 : _b3.onFetch(f, this), __privateSet(this, _e3, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_c3 = f.fetchOptions) == null ? void 0 : _c3.meta)) && __privateMethod(this, _Vv_instances, s_fn).call(this, { type: "fetch", meta: (_d3 = f.fetchOptions) == null ? void 0 : _d3.meta }), __privateSet(this, _a3, Cg({ initialPromise: e == null ? void 0 : e.initialPromise, fn: f.fetchFn, onCancel: (u) => {
      u instanceof Mf && u.revert && this.setState({ ...__privateGet(this, _e3), fetchStatus: "idle" }), a.abort();
    }, onFail: (u, d) => {
      __privateMethod(this, _Vv_instances, s_fn).call(this, { type: "failed", failureCount: u, error: d });
    }, onPause: () => {
      __privateMethod(this, _Vv_instances, s_fn).call(this, { type: "pause" });
    }, onContinue: () => {
      __privateMethod(this, _Vv_instances, s_fn).call(this, { type: "continue" });
    }, retry: f.options.retry, retryDelay: f.options.retryDelay, networkMode: f.options.networkMode, canRun: () => true }));
    try {
      const u = await __privateGet(this, _a3).start();
      if (u === void 0) throw new Error(`${this.queryHash} data is undefined`);
      return this.setData(u), (_f3 = (_e9 = __privateGet(this, _n4).config).onSuccess) == null ? void 0 : _f3.call(_e9, u, this), (_h3 = (_g4 = __privateGet(this, _n4).config).onSettled) == null ? void 0 : _h3.call(_g4, u, this.state.error, this), u;
    } catch (u) {
      if (u instanceof Mf) {
        if (u.silent) return __privateGet(this, _a3).promise;
        if (u.revert) {
          if (this.state.data === void 0) throw u;
          return this.state.data;
        }
      }
      throw __privateMethod(this, _Vv_instances, s_fn).call(this, { type: "error", error: u }), (_j2 = (_i5 = __privateGet(this, _n4).config).onError) == null ? void 0 : _j2.call(_i5, u, this), (_l4 = (_k = __privateGet(this, _n4).config).onSettled) == null ? void 0 : _l4.call(_k, this.state.data, u, this), u;
    } finally {
      this.scheduleGc();
    }
  }
}, _t4 = new WeakMap(), _e3 = new WeakMap(), _n4 = new WeakMap(), _l = new WeakMap(), _a3 = new WeakMap(), _r = new WeakMap(), _i = new WeakMap(), _Vv_instances = new WeakSet(), s_fn = function(t) {
  const e = (a) => {
    switch (t.type) {
      case "failed":
        return { ...a, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
      case "pause":
        return { ...a, fetchStatus: "paused" };
      case "continue":
        return { ...a, fetchStatus: "fetching" };
      case "fetch":
        return { ...a, ...Og(a.data, this.options), fetchMeta: t.meta ?? null };
      case "success":
        const i = { ...a, data: t.data, dataUpdateCount: a.dataUpdateCount + 1, dataUpdatedAt: t.dataUpdatedAt ?? Date.now(), error: null, isInvalidated: false, status: "success", ...!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null } };
        return __privateSet(this, _e3, t.manual ? i : void 0), i;
      case "error":
        const o = t.error;
        return { ...a, error: o, errorUpdateCount: a.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: a.fetchFailureCount + 1, fetchFailureReason: o, fetchStatus: "idle", status: "error" };
      case "invalidate":
        return { ...a, isInvalidated: true };
      case "setState":
        return { ...a, ...t.state };
    }
  };
  this.state = e(this.state), Bt.batch(() => {
    this.observers.forEach((a) => {
      a.onQueryUpdate();
    }), __privateGet(this, _n4).notify({ query: this, type: "updated", action: t });
  });
}, _d);
function Og(t, e) {
  return { fetchFailureCount: 0, fetchFailureReason: null, fetchStatus: Ag(e.networkMode) ? "fetching" : "paused", ...t === void 0 && { error: null, status: "pending" } };
}
function Bv(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, a = e !== void 0, i = a ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return { data: e, dataUpdateCount: 0, dataUpdatedAt: a ? i ?? Date.now() : 0, error: null, errorUpdateCount: 0, errorUpdatedAt: 0, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: null, isInvalidated: false, status: a ? "success" : "pending", fetchStatus: "idle" };
}
var Yv = (_e4 = class extends rr {
  constructor(t = {}) {
    super();
    __privateAdd(this, _t5);
    this.config = t, __privateSet(this, _t5, /* @__PURE__ */ new Map());
  }
  build(t, e, a) {
    const i = e.queryKey, o = e.queryHash ?? Jf(i, e);
    let c = this.get(o);
    return c || (c = new Vv({ client: t, queryKey: i, queryHash: o, options: t.defaultQueryOptions(e), state: a, defaultOptions: t.getQueryDefaults(i) }), this.add(c)), c;
  }
  add(t) {
    __privateGet(this, _t5).has(t.queryHash) || (__privateGet(this, _t5).set(t.queryHash, t), this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const e = __privateGet(this, _t5).get(t.queryHash);
    e && (t.destroy(), e === t && __privateGet(this, _t5).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Bt.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return __privateGet(this, _t5).get(t);
  }
  getAll() {
    return [...__privateGet(this, _t5).values()];
  }
  find(t) {
    const e = { exact: true, ...t };
    return this.getAll().find((a) => om(e, a));
  }
  findAll(t = {}) {
    const e = this.getAll();
    return Object.keys(t).length > 0 ? e.filter((a) => om(t, a)) : e;
  }
  notify(t) {
    Bt.batch(() => {
      this.listeners.forEach((e) => {
        e(t);
      });
    });
  }
  onFocus() {
    Bt.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Bt.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, _t5 = new WeakMap(), _e4), Gv = (_f2 = class extends Eg {
  constructor(t) {
    super();
    __privateAdd(this, _Gv_instances);
    __privateAdd(this, _t6);
    __privateAdd(this, _e5);
    __privateAdd(this, _n5);
    this.mutationId = t.mutationId, __privateSet(this, _e5, t.mutationCache), __privateSet(this, _t6, []), this.state = t.state || Qv(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    __privateGet(this, _t6).includes(t) || (__privateGet(this, _t6).push(t), this.clearGcTimeout(), __privateGet(this, _e5).notify({ type: "observerAdded", mutation: this, observer: t }));
  }
  removeObserver(t) {
    __privateSet(this, _t6, __privateGet(this, _t6).filter((e) => e !== t)), this.scheduleGc(), __privateGet(this, _e5).notify({ type: "observerRemoved", mutation: this, observer: t });
  }
  optionalRemove() {
    __privateGet(this, _t6).length || (this.state.status === "pending" ? this.scheduleGc() : __privateGet(this, _e5).remove(this));
  }
  continue() {
    var _a6;
    return ((_a6 = __privateGet(this, _n5)) == null ? void 0 : _a6.continue()) ?? this.execute(this.state.variables);
  }
  async execute(t) {
    var _a6, _b3, _c3, _d3, _e9, _f3, _g4, _h3, _i5, _j2, _k, _l4, _m3, _n9, _o2, _p2, _q, _r4, _s3, _t10;
    const e = () => {
      __privateMethod(this, _Gv_instances, l_fn).call(this, { type: "continue" });
    };
    __privateSet(this, _n5, Cg({ fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")), onFail: (o, c) => {
      __privateMethod(this, _Gv_instances, l_fn).call(this, { type: "failed", failureCount: o, error: c });
    }, onPause: () => {
      __privateMethod(this, _Gv_instances, l_fn).call(this, { type: "pause" });
    }, onContinue: e, retry: this.options.retry ?? 0, retryDelay: this.options.retryDelay, networkMode: this.options.networkMode, canRun: () => __privateGet(this, _e5).canRun(this) }));
    const a = this.state.status === "pending", i = !__privateGet(this, _n5).canStart();
    try {
      if (a) e();
      else {
        __privateMethod(this, _Gv_instances, l_fn).call(this, { type: "pending", variables: t, isPaused: i }), await ((_b3 = (_a6 = __privateGet(this, _e5).config).onMutate) == null ? void 0 : _b3.call(_a6, t, this));
        const c = await ((_d3 = (_c3 = this.options).onMutate) == null ? void 0 : _d3.call(_c3, t));
        c !== this.state.context && __privateMethod(this, _Gv_instances, l_fn).call(this, { type: "pending", context: c, variables: t, isPaused: i });
      }
      const o = await __privateGet(this, _n5).start();
      return await ((_f3 = (_e9 = __privateGet(this, _e5).config).onSuccess) == null ? void 0 : _f3.call(_e9, o, t, this.state.context, this)), await ((_h3 = (_g4 = this.options).onSuccess) == null ? void 0 : _h3.call(_g4, o, t, this.state.context)), await ((_j2 = (_i5 = __privateGet(this, _e5).config).onSettled) == null ? void 0 : _j2.call(_i5, o, null, this.state.variables, this.state.context, this)), await ((_l4 = (_k = this.options).onSettled) == null ? void 0 : _l4.call(_k, o, null, t, this.state.context)), __privateMethod(this, _Gv_instances, l_fn).call(this, { type: "success", data: o }), o;
    } catch (o) {
      try {
        throw await ((_n9 = (_m3 = __privateGet(this, _e5).config).onError) == null ? void 0 : _n9.call(_m3, o, t, this.state.context, this)), await ((_p2 = (_o2 = this.options).onError) == null ? void 0 : _p2.call(_o2, o, t, this.state.context)), await ((_r4 = (_q = __privateGet(this, _e5).config).onSettled) == null ? void 0 : _r4.call(_q, void 0, o, this.state.variables, this.state.context, this)), await ((_t10 = (_s3 = this.options).onSettled) == null ? void 0 : _t10.call(_s3, void 0, o, t, this.state.context)), o;
      } finally {
        __privateMethod(this, _Gv_instances, l_fn).call(this, { type: "error", error: o });
      }
    } finally {
      __privateGet(this, _e5).runNext(this);
    }
  }
}, _t6 = new WeakMap(), _e5 = new WeakMap(), _n5 = new WeakMap(), _Gv_instances = new WeakSet(), l_fn = function(t) {
  const e = (a) => {
    switch (t.type) {
      case "failed":
        return { ...a, failureCount: t.failureCount, failureReason: t.error };
      case "pause":
        return { ...a, isPaused: true };
      case "continue":
        return { ...a, isPaused: false };
      case "pending":
        return { ...a, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t.isPaused, status: "pending", variables: t.variables, submittedAt: Date.now() };
      case "success":
        return { ...a, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: false };
      case "error":
        return { ...a, data: void 0, error: t.error, failureCount: a.failureCount + 1, failureReason: t.error, isPaused: false, status: "error" };
    }
  };
  this.state = e(this.state), Bt.batch(() => {
    __privateGet(this, _t6).forEach((a) => {
      a.onMutationUpdate(t);
    }), __privateGet(this, _e5).notify({ mutation: this, type: "updated", action: t });
  });
}, _f2);
function Qv() {
  return { context: void 0, data: void 0, error: null, failureCount: 0, failureReason: null, isPaused: false, status: "idle", variables: void 0, submittedAt: 0 };
}
var Xv = (_g2 = class extends rr {
  constructor(t = {}) {
    super();
    __privateAdd(this, _t7);
    __privateAdd(this, _e6);
    __privateAdd(this, _n6);
    this.config = t, __privateSet(this, _t7, /* @__PURE__ */ new Set()), __privateSet(this, _e6, /* @__PURE__ */ new Map()), __privateSet(this, _n6, 0);
  }
  build(t, e, a) {
    const i = new Gv({ mutationCache: this, mutationId: ++__privateWrapper(this, _n6)._, options: t.defaultMutationOptions(e), state: a });
    return this.add(i), i;
  }
  add(t) {
    __privateGet(this, _t7).add(t);
    const e = No(t);
    if (typeof e == "string") {
      const a = __privateGet(this, _e6).get(e);
      a ? a.push(t) : __privateGet(this, _e6).set(e, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (__privateGet(this, _t7).delete(t)) {
      const e = No(t);
      if (typeof e == "string") {
        const a = __privateGet(this, _e6).get(e);
        if (a) if (a.length > 1) {
          const i = a.indexOf(t);
          i !== -1 && a.splice(i, 1);
        } else a[0] === t && __privateGet(this, _e6).delete(e);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var _a6;
    const e = No(t);
    if (typeof e == "string") {
      const i = (_a6 = __privateGet(this, _e6).get(e)) == null ? void 0 : _a6.find((o) => o.state.status === "pending");
      return !i || i === t;
    } else return true;
  }
  runNext(t) {
    var _a6, _b3;
    const e = No(t);
    return typeof e == "string" ? ((_b3 = (_a6 = __privateGet(this, _e6).get(e)) == null ? void 0 : _a6.find((i) => i !== t && i.state.isPaused)) == null ? void 0 : _b3.continue()) ?? Promise.resolve() : Promise.resolve();
  }
  clear() {
    Bt.batch(() => {
      __privateGet(this, _t7).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), __privateGet(this, _t7).clear(), __privateGet(this, _e6).clear();
    });
  }
  getAll() {
    return Array.from(__privateGet(this, _t7));
  }
  find(t) {
    const e = { exact: true, ...t };
    return this.getAll().find((a) => cm(e, a));
  }
  findAll(t = {}) {
    return this.getAll().filter((e) => cm(t, e));
  }
  notify(t) {
    Bt.batch(() => {
      this.listeners.forEach((e) => {
        e(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((e) => e.state.isPaused);
    return Bt.batch(() => Promise.all(t.map((e) => e.continue().catch($n))));
  }
}, _t7 = new WeakMap(), _e6 = new WeakMap(), _n6 = new WeakMap(), _g2);
function No(t) {
  var _a6;
  return (_a6 = t.options.scope) == null ? void 0 : _a6.id;
}
function hm(t) {
  return { onFetch: (e, a) => {
    var _a6, _b3, _c3, _d3, _e9;
    const i = e.options, o = (_c3 = (_b3 = (_a6 = e.fetchOptions) == null ? void 0 : _a6.meta) == null ? void 0 : _b3.fetchMore) == null ? void 0 : _c3.direction, c = ((_d3 = e.state.data) == null ? void 0 : _d3.pages) || [], f = ((_e9 = e.state.data) == null ? void 0 : _e9.pageParams) || [];
    let u = { pages: [], pageParams: [] }, d = 0;
    const g = async () => {
      let p = false;
      const b = (S) => {
        Object.defineProperty(S, "signal", { enumerable: true, get: () => (e.signal.aborted ? p = true : e.signal.addEventListener("abort", () => {
          p = true;
        }), e.signal) });
      }, v = Mg(e.options, e.fetchOptions), x = async (S, j, w) => {
        if (p) return Promise.reject();
        if (j == null && S.pages.length) return Promise.resolve(S);
        const k = (() => {
          const L = { client: e.client, queryKey: e.queryKey, pageParam: j, direction: w ? "backward" : "forward", meta: e.options.meta };
          return b(L), L;
        })(), M = await v(k), { maxPages: C } = e.options, E = w ? Rv : Dv;
        return { pages: E(S.pages, M, C), pageParams: E(S.pageParams, j, C) };
      };
      if (o && c.length) {
        const S = o === "backward", j = S ? Fv : dm, w = { pages: c, pageParams: f }, N = j(i, w);
        u = await x(w, N, S);
      } else {
        const S = t ?? c.length;
        do {
          const j = d === 0 ? f[0] ?? i.initialPageParam : dm(i, u);
          if (d > 0 && j == null) break;
          u = await x(u, j), d++;
        } while (d < S);
      }
      return u;
    };
    e.options.persister ? e.fetchFn = () => {
      var _a7, _b4;
      return (_b4 = (_a7 = e.options).persister) == null ? void 0 : _b4.call(_a7, g, { client: e.client, queryKey: e.queryKey, meta: e.options.meta, signal: e.signal }, a);
    } : e.fetchFn = g;
  } };
}
function dm(t, { pages: e, pageParams: a }) {
  const i = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(e[i], e, a[i], a) : void 0;
}
function Fv(t, { pages: e, pageParams: a }) {
  var _a6;
  return e.length > 0 ? (_a6 = t.getPreviousPageParam) == null ? void 0 : _a6.call(t, e[0], e, a[0], a) : void 0;
}
var Zv = (_h = class {
  constructor(t = {}) {
    __privateAdd(this, _t8);
    __privateAdd(this, _e7);
    __privateAdd(this, _n7);
    __privateAdd(this, _l2);
    __privateAdd(this, _a4);
    __privateAdd(this, _r2);
    __privateAdd(this, _i2);
    __privateAdd(this, _s);
    __privateSet(this, _t8, t.queryCache || new Yv()), __privateSet(this, _e7, t.mutationCache || new Xv()), __privateSet(this, _n7, t.defaultOptions || {}), __privateSet(this, _l2, /* @__PURE__ */ new Map()), __privateSet(this, _a4, /* @__PURE__ */ new Map()), __privateSet(this, _r2, 0);
  }
  mount() {
    __privateWrapper(this, _r2)._++, __privateGet(this, _r2) === 1 && (__privateSet(this, _i2, th.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), __privateGet(this, _t8).onFocus());
    })), __privateSet(this, _s, zo.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), __privateGet(this, _t8).onOnline());
    })));
  }
  unmount() {
    var _a6, _b3;
    __privateWrapper(this, _r2)._--, __privateGet(this, _r2) === 0 && ((_a6 = __privateGet(this, _i2)) == null ? void 0 : _a6.call(this), __privateSet(this, _i2, void 0), (_b3 = __privateGet(this, _s)) == null ? void 0 : _b3.call(this), __privateSet(this, _s, void 0));
  }
  isFetching(t) {
    return __privateGet(this, _t8).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return __privateGet(this, _e7).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var _a6;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (_a6 = __privateGet(this, _t8).get(e.queryHash)) == null ? void 0 : _a6.state.data;
  }
  ensureQueryData(t) {
    const e = this.defaultQueryOptions(t), a = __privateGet(this, _t8).build(this, e), i = a.state.data;
    return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && a.isStaleByTime(ya(e.staleTime, a)) && this.prefetchQuery(e), Promise.resolve(i));
  }
  getQueriesData(t) {
    return __privateGet(this, _t8).findAll(t).map(({ queryKey: e, state: a }) => {
      const i = a.data;
      return [e, i];
    });
  }
  setQueryData(t, e, a) {
    var _a6;
    const i = this.defaultQueryOptions({ queryKey: t }), c = (_a6 = __privateGet(this, _t8).get(i.queryHash)) == null ? void 0 : _a6.state.data, f = Ev(e, c);
    if (f !== void 0) return __privateGet(this, _t8).build(this, i).setData(f, { ...a, manual: true });
  }
  setQueriesData(t, e, a) {
    return Bt.batch(() => __privateGet(this, _t8).findAll(t).map(({ queryKey: i }) => [i, this.setQueryData(i, e, a)]));
  }
  getQueryState(t) {
    var _a6;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (_a6 = __privateGet(this, _t8).get(e.queryHash)) == null ? void 0 : _a6.state;
  }
  removeQueries(t) {
    const e = __privateGet(this, _t8);
    Bt.batch(() => {
      e.findAll(t).forEach((a) => {
        e.remove(a);
      });
    });
  }
  resetQueries(t, e) {
    const a = __privateGet(this, _t8);
    return Bt.batch(() => (a.findAll(t).forEach((i) => {
      i.reset();
    }), this.refetchQueries({ type: "active", ...t }, e)));
  }
  cancelQueries(t, e = {}) {
    const a = { revert: true, ...e }, i = Bt.batch(() => __privateGet(this, _t8).findAll(t).map((o) => o.cancel(a)));
    return Promise.all(i).then($n).catch($n);
  }
  invalidateQueries(t, e = {}) {
    return Bt.batch(() => (__privateGet(this, _t8).findAll(t).forEach((a) => {
      a.invalidate();
    }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...t, type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active" }, e)));
  }
  refetchQueries(t, e = {}) {
    const a = { ...e, cancelRefetch: e.cancelRefetch ?? true }, i = Bt.batch(() => __privateGet(this, _t8).findAll(t).filter((o) => !o.isDisabled() && !o.isStatic()).map((o) => {
      let c = o.fetch(void 0, a);
      return a.throwOnError || (c = c.catch($n)), o.state.fetchStatus === "paused" ? Promise.resolve() : c;
    }));
    return Promise.all(i).then($n);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = false);
    const a = __privateGet(this, _t8).build(this, e);
    return a.isStaleByTime(ya(e.staleTime, a)) ? a.fetch(e) : Promise.resolve(a.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then($n).catch($n);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = hm(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then($n).catch($n);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = hm(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return zo.isOnline() ? __privateGet(this, _e7).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return __privateGet(this, _t8);
  }
  getMutationCache() {
    return __privateGet(this, _e7);
  }
  getDefaultOptions() {
    return __privateGet(this, _n7);
  }
  setDefaultOptions(t) {
    __privateSet(this, _n7, t);
  }
  setQueryDefaults(t, e) {
    __privateGet(this, _l2).set(Ki(t), { queryKey: t, defaultOptions: e });
  }
  getQueryDefaults(t) {
    const e = [...__privateGet(this, _l2).values()], a = {};
    return e.forEach((i) => {
      Ii(t, i.queryKey) && Object.assign(a, i.defaultOptions);
    }), a;
  }
  setMutationDefaults(t, e) {
    __privateGet(this, _a4).set(Ki(t), { mutationKey: t, defaultOptions: e });
  }
  getMutationDefaults(t) {
    const e = [...__privateGet(this, _a4).values()], a = {};
    return e.forEach((i) => {
      Ii(t, i.mutationKey) && Object.assign(a, i.defaultOptions);
    }), a;
  }
  defaultQueryOptions(t) {
    if (t._defaulted) return t;
    const e = { ...__privateGet(this, _n7).queries, ...this.getQueryDefaults(t.queryKey), ...t, _defaulted: true };
    return e.queryHash || (e.queryHash = Jf(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === eh && (e.enabled = false), e;
  }
  defaultMutationOptions(t) {
    return (t == null ? void 0 : t._defaulted) ? t : { ...__privateGet(this, _n7).mutations, ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey), ...t, _defaulted: true };
  }
  clear() {
    __privateGet(this, _t8).clear(), __privateGet(this, _e7).clear();
  }
}, _t8 = new WeakMap(), _e7 = new WeakMap(), _n7 = new WeakMap(), _l2 = new WeakMap(), _a4 = new WeakMap(), _r2 = new WeakMap(), _i2 = new WeakMap(), _s = new WeakMap(), _h), Kv = (_i4 = class extends rr {
  constructor(t, e) {
    super();
    __privateAdd(this, _Kv_instances);
    __privateAdd(this, _t9);
    __privateAdd(this, _e8);
    __privateAdd(this, _n8);
    __privateAdd(this, _l3);
    __privateAdd(this, _a5);
    __privateAdd(this, _r3);
    __privateAdd(this, _i3);
    __privateAdd(this, _s2);
    __privateAdd(this, _g3);
    __privateAdd(this, _h2);
    __privateAdd(this, _d2);
    __privateAdd(this, _c2);
    __privateAdd(this, _u);
    __privateAdd(this, _o);
    __privateAdd(this, _m2, /* @__PURE__ */ new Set());
    this.options = e, __privateSet(this, _t9, t), __privateSet(this, _s2, null), __privateSet(this, _i3, kf()), this.bindMethods(), this.setOptions(e);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (__privateGet(this, _e8).addObserver(this), mm(__privateGet(this, _e8), this.options) ? __privateMethod(this, _Kv_instances, f_fn).call(this) : this.updateResult(), __privateMethod(this, _Kv_instances, v_fn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Af(__privateGet(this, _e8), this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Af(__privateGet(this, _e8), this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), __privateMethod(this, _Kv_instances, x_fn).call(this), __privateMethod(this, _Kv_instances, S_fn).call(this), __privateGet(this, _e8).removeObserver(this);
  }
  setOptions(t) {
    const e = this.options, a = __privateGet(this, _e8);
    if (this.options = __privateGet(this, _t9).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Hn(this.options.enabled, __privateGet(this, _e8)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
    __privateMethod(this, _Kv_instances, j_fn).call(this), __privateGet(this, _e8).setOptions(this.options), e._defaulted && !wf(this.options, e) && __privateGet(this, _t9).getQueryCache().notify({ type: "observerOptionsUpdated", query: __privateGet(this, _e8), observer: this });
    const i = this.hasListeners();
    i && gm(__privateGet(this, _e8), a, this.options, e) && __privateMethod(this, _Kv_instances, f_fn).call(this), this.updateResult(), i && (__privateGet(this, _e8) !== a || Hn(this.options.enabled, __privateGet(this, _e8)) !== Hn(e.enabled, __privateGet(this, _e8)) || ya(this.options.staleTime, __privateGet(this, _e8)) !== ya(e.staleTime, __privateGet(this, _e8))) && __privateMethod(this, _Kv_instances, p_fn).call(this);
    const o = __privateMethod(this, _Kv_instances, y_fn).call(this);
    i && (__privateGet(this, _e8) !== a || Hn(this.options.enabled, __privateGet(this, _e8)) !== Hn(e.enabled, __privateGet(this, _e8)) || o !== __privateGet(this, _o)) && __privateMethod(this, _Kv_instances, b_fn).call(this, o);
  }
  getOptimisticResult(t) {
    const e = __privateGet(this, _t9).getQueryCache().build(__privateGet(this, _t9), t), a = this.createResult(e, t);
    return Pv(this, a) && (__privateSet(this, _l3, a), __privateSet(this, _r3, this.options), __privateSet(this, _a5, __privateGet(this, _e8).state)), a;
  }
  getCurrentResult() {
    return __privateGet(this, _l3);
  }
  trackResult(t, e) {
    return new Proxy(t, { get: (a, i) => (this.trackProp(i), e == null ? void 0 : e(i), i === "promise" && !this.options.experimental_prefetchInRender && __privateGet(this, _i3).status === "pending" && __privateGet(this, _i3).reject(new Error("experimental_prefetchInRender feature flag is not enabled")), Reflect.get(a, i)) });
  }
  trackProp(t) {
    __privateGet(this, _m2).add(t);
  }
  getCurrentQuery() {
    return __privateGet(this, _e8);
  }
  refetch({ ...t } = {}) {
    return this.fetch({ ...t });
  }
  fetchOptimistic(t) {
    const e = __privateGet(this, _t9).defaultQueryOptions(t), a = __privateGet(this, _t9).getQueryCache().build(__privateGet(this, _t9), e);
    return a.fetch().then(() => this.createResult(a, e));
  }
  fetch(t) {
    return __privateMethod(this, _Kv_instances, f_fn).call(this, { ...t, cancelRefetch: t.cancelRefetch ?? true }).then(() => (this.updateResult(), __privateGet(this, _l3)));
  }
  createResult(t, e) {
    var _a6;
    const a = __privateGet(this, _e8), i = this.options, o = __privateGet(this, _l3), c = __privateGet(this, _a5), f = __privateGet(this, _r3), d = t !== a ? t.state : __privateGet(this, _n8), { state: g } = t;
    let p = { ...g }, b = false, v;
    if (e._optimisticResults) {
      const z = this.hasListeners(), q = !z && mm(t, e), B = z && gm(t, a, e, i);
      (q || B) && (p = { ...p, ...Og(g.data, t.options) }), e._optimisticResults === "isRestoring" && (p.fetchStatus = "idle");
    }
    let { error: x, errorUpdatedAt: S, status: j } = p;
    v = p.data;
    let w = false;
    if (e.placeholderData !== void 0 && v === void 0 && j === "pending") {
      let z;
      (o == null ? void 0 : o.isPlaceholderData) && e.placeholderData === (f == null ? void 0 : f.placeholderData) ? (z = o.data, w = true) : z = typeof e.placeholderData == "function" ? e.placeholderData((_a6 = __privateGet(this, _d2)) == null ? void 0 : _a6.state.data, __privateGet(this, _d2)) : e.placeholderData, z !== void 0 && (j = "success", v = Tf(o == null ? void 0 : o.data, z, e), b = true);
    }
    if (e.select && v !== void 0 && !w) if (o && v === (c == null ? void 0 : c.data) && e.select === __privateGet(this, _g3)) v = __privateGet(this, _h2);
    else try {
      __privateSet(this, _g3, e.select), v = e.select(v), v = Tf(o == null ? void 0 : o.data, v, e), __privateSet(this, _h2, v), __privateSet(this, _s2, null);
    } catch (z) {
      __privateSet(this, _s2, z);
    }
    __privateGet(this, _s2) && (x = __privateGet(this, _s2), v = __privateGet(this, _h2), S = Date.now(), j = "error");
    const N = p.fetchStatus === "fetching", k = j === "pending", M = j === "error", C = k && N, E = v !== void 0, A = { status: j, fetchStatus: p.fetchStatus, isPending: k, isSuccess: j === "success", isError: M, isInitialLoading: C, isLoading: C, data: v, dataUpdatedAt: p.dataUpdatedAt, error: x, errorUpdatedAt: S, failureCount: p.fetchFailureCount, failureReason: p.fetchFailureReason, errorUpdateCount: p.errorUpdateCount, isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0, isFetchedAfterMount: p.dataUpdateCount > d.dataUpdateCount || p.errorUpdateCount > d.errorUpdateCount, isFetching: N, isRefetching: N && !k, isLoadingError: M && !E, isPaused: p.fetchStatus === "paused", isPlaceholderData: b, isRefetchError: M && E, isStale: nh(t, e), refetch: this.refetch, promise: __privateGet(this, _i3), isEnabled: Hn(e.enabled, t) !== false };
    if (this.options.experimental_prefetchInRender) {
      const z = (J) => {
        A.status === "error" ? J.reject(A.error) : A.data !== void 0 && J.resolve(A.data);
      }, q = () => {
        const J = __privateSet(this, _i3, A.promise = kf());
        z(J);
      }, B = __privateGet(this, _i3);
      switch (B.status) {
        case "pending":
          t.queryHash === a.queryHash && z(B);
          break;
        case "fulfilled":
          (A.status === "error" || A.data !== B.value) && q();
          break;
        case "rejected":
          (A.status !== "error" || A.error !== B.reason) && q();
          break;
      }
    }
    return A;
  }
  updateResult() {
    const t = __privateGet(this, _l3), e = this.createResult(__privateGet(this, _e8), this.options);
    if (__privateSet(this, _a5, __privateGet(this, _e8).state), __privateSet(this, _r3, this.options), __privateGet(this, _a5).data !== void 0 && __privateSet(this, _d2, __privateGet(this, _e8)), wf(e, t)) return;
    __privateSet(this, _l3, e);
    const a = () => {
      if (!t) return true;
      const { notifyOnChangeProps: i } = this.options, o = typeof i == "function" ? i() : i;
      if (o === "all" || !o && !__privateGet(this, _m2).size) return true;
      const c = new Set(o ?? __privateGet(this, _m2));
      return this.options.throwOnError && c.add("error"), Object.keys(__privateGet(this, _l3)).some((f) => {
        const u = f;
        return __privateGet(this, _l3)[u] !== t[u] && c.has(u);
      });
    };
    __privateMethod(this, _Kv_instances, __fn).call(this, { listeners: a() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && __privateMethod(this, _Kv_instances, v_fn).call(this);
  }
}, _t9 = new WeakMap(), _e8 = new WeakMap(), _n8 = new WeakMap(), _l3 = new WeakMap(), _a5 = new WeakMap(), _r3 = new WeakMap(), _i3 = new WeakMap(), _s2 = new WeakMap(), _g3 = new WeakMap(), _h2 = new WeakMap(), _d2 = new WeakMap(), _c2 = new WeakMap(), _u = new WeakMap(), _o = new WeakMap(), _m2 = new WeakMap(), _Kv_instances = new WeakSet(), f_fn = function(t) {
  __privateMethod(this, _Kv_instances, j_fn).call(this);
  let e = __privateGet(this, _e8).fetch(this.options, t);
  return (t == null ? void 0 : t.throwOnError) || (e = e.catch($n)), e;
}, p_fn = function() {
  __privateMethod(this, _Kv_instances, x_fn).call(this);
  const t = ya(this.options.staleTime, __privateGet(this, _e8));
  if (Hs || __privateGet(this, _l3).isStale || !_f(t)) return;
  const a = Tg(__privateGet(this, _l3).dataUpdatedAt, t) + 1;
  __privateSet(this, _c2, setTimeout(() => {
    __privateGet(this, _l3).isStale || this.updateResult();
  }, a));
}, y_fn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(__privateGet(this, _e8)) : this.options.refetchInterval) ?? false;
}, b_fn = function(t) {
  __privateMethod(this, _Kv_instances, S_fn).call(this), __privateSet(this, _o, t), !(Hs || Hn(this.options.enabled, __privateGet(this, _e8)) === false || !_f(__privateGet(this, _o)) || __privateGet(this, _o) === 0) && __privateSet(this, _u, setInterval(() => {
    (this.options.refetchIntervalInBackground || th.isFocused()) && __privateMethod(this, _Kv_instances, f_fn).call(this);
  }, __privateGet(this, _o)));
}, v_fn = function() {
  __privateMethod(this, _Kv_instances, p_fn).call(this), __privateMethod(this, _Kv_instances, b_fn).call(this, __privateMethod(this, _Kv_instances, y_fn).call(this));
}, x_fn = function() {
  __privateGet(this, _c2) && (clearTimeout(__privateGet(this, _c2)), __privateSet(this, _c2, void 0));
}, S_fn = function() {
  __privateGet(this, _u) && (clearInterval(__privateGet(this, _u)), __privateSet(this, _u, void 0));
}, j_fn = function() {
  const t = __privateGet(this, _t9).getQueryCache().build(__privateGet(this, _t9), this.options);
  if (t === __privateGet(this, _e8)) return;
  const e = __privateGet(this, _e8);
  __privateSet(this, _e8, t), __privateSet(this, _n8, t.state), this.hasListeners() && (e == null ? void 0 : e.removeObserver(this), t.addObserver(this));
}, __fn = function(t) {
  Bt.batch(() => {
    t.listeners && this.listeners.forEach((e) => {
      e(__privateGet(this, _l3));
    }), __privateGet(this, _t9).getQueryCache().notify({ query: __privateGet(this, _e8), type: "observerResultsUpdated" });
  });
}, _i4);
function Iv(t, e) {
  return Hn(e.enabled, t) !== false && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === false);
}
function mm(t, e) {
  return Iv(t, e) || t.state.data !== void 0 && Af(t, e, e.refetchOnMount);
}
function Af(t, e, a) {
  if (Hn(e.enabled, t) !== false && ya(e.staleTime, t) !== "static") {
    const i = typeof a == "function" ? a(t) : a;
    return i === "always" || i !== false && nh(t, e);
  }
  return false;
}
function gm(t, e, a, i) {
  return (t !== e || Hn(i.enabled, t) === false) && (!a.suspense || t.state.status !== "error") && nh(t, a);
}
function nh(t, e) {
  return Hn(e.enabled, t) !== false && t.isStaleByTime(ya(e.staleTime, t));
}
function Pv(t, e) {
  return !wf(t.getCurrentResult(), e);
}
const zg = Se(new Zv()), Wv = (t, e, a) => (t == null ? void 0 : t.suspense) && Jv(e), Jv = (t, e) => t.isPending && true, ex = ({ result: t, throwOnError: e, query: a }) => t.isError && !t.isFetching && tx(e, [t.error, a]);
function tx(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
const nx = (t) => t.suspense && typeof t.staleTime != "number" ? { ...t, staleTime: 1e3 } : t;
function lx(t, e, a = (i) => i(zg)) {
  const i = Se(0), o = Se(a), c = Se(() => /* @__PURE__ */ new WeakMap()), f = Se((g) => {
    const p = g(o), b = t(g), v = p.defaultQueryOptions(b), S = g(c).get(p);
    return v._optimisticResults = "optimistic", S && S.setOptions(v), nx(v);
  }), u = Se((g) => {
    const p = g(o), b = g(f), v = g(c), x = v.get(p);
    if (x) return x;
    const S = new e(p, b);
    return v.set(p, S), S;
  }), d = Se((g) => {
    const p = g(u), b = g(f), v = p.getOptimisticResult(b), x = Se(v);
    return x.onMount = (S) => {
      const j = p.subscribe(Bt.batchCalls(S));
      return () => {
        p.getCurrentResult().isError && p.getCurrentQuery().reset(), j();
      };
    }, x;
  });
  return Se((g) => {
    g(i);
    const p = g(u), b = g(f), v = g(g(d));
    if (Wv(b, v)) return p.fetchOptimistic(b);
    if (ex({ result: v, query: p.getCurrentQuery(), throwOnError: b.throwOnError })) throw v.error;
    return v;
  }, (g, p) => {
    p(i, (b) => b + 1);
  });
}
function Dg(t, e = (a) => a(zg)) {
  return lx(t, Kv, e);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Rg = "/api/files", Lg = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/server/file.ts/selectedFilePathAtom", Se(null));
Lg.debugLabel = "selectedFilePathAtom";
const Ug = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/server/file.ts/openedFilesAtom", Se([]));
Ug.debugLabel = "openedFilesAtom";
const $g = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/server/file.ts/fileTreeAtom", Dg(() => ({ queryKey: ["fileTree"], queryFn: async () => {
  const t = await fetch(`${Rg}/`);
  if (!t.ok) throw new Error(`Failed to get tree: ${t.statusText}`);
  return t.json();
}, staleTime: 1e3 * 30 })));
$g.debugLabel = "fileTreeAtom";
const ax = (t) => Dg(() => ({ queryKey: ["fileContent", t], queryFn: async () => {
  const e = await fetch(`${Rg}/${t}`);
  if (!e.ok) throw new Error(`Failed to get file: ${e.statusText}`);
  return (await e.json()).content;
}, enabled: !!t }));
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const sx = { name: "micon", elems: [{ name: "btn1", type: "PortIn", pos: [100, 40], flip: true }, { name: "led1", type: "PortOut", pos: [260, 40], flip: false }, { name: "btn2", type: "PortIn", pos: [100, 80], flip: true }, { name: "led2", type: "PortOut", pos: [260, 80], flip: false }, { name: "btn3", type: "PortIn", pos: [100, 120], flip: true }, { name: "led3", type: "PortOut", pos: [260, 120], flip: false }, { name: "btn4", type: "PortIn", pos: [100, 170], flip: true }, { name: "intr", type: "Intr", src: "irq.c:32", pos: [260, 170], flip: false }, { name: "i2c", type: "Inst", modn: "i2c", pos: [900, 90], flip: true }, { name: "scl", type: "PortOut", pos: [1120, 30], flip: false }, { name: "sda", type: "PortInOut", pos: [1120, 110], flip: false }, { name: "uart", type: "Inst", modn: "uart", pos: [900, 220], flip: true }, { name: "tx0", type: "PortOut", pos: [1120, 240], flip: false }, { name: "rx0", type: "PortIn", pos: [1120, 200], flip: false }, { name: "gpo0", type: "RegWrite", bit: 1, pos: [100, 220], flip: true }, { name: "pin0", type: "PortOut", pos: [260, 220], flip: false }, { name: "gpi0", type: "RegRead", bit: 1, pos: [100, 260], flip: true }, { name: "pin1", type: "PortIn", pos: [260, 260], flip: false }, { name: "trig", type: "RegTrig", pos: [100, 300], flip: true }, { name: "pin2", type: "PortIn", pos: [260, 300], flip: false }, { name: "gpios", type: "RegWrite", bit: 1, pos: [100, 350], flip: true }, { name: "gpioi", type: "RegRead", bit: 1, pos: [100, 390], flip: true }, { name: "gpioo", type: "RegWrite", bit: 1, pos: [100, 430], flip: true }, { name: "gpio", type: "PortInOut", pos: [260, 390], flip: false }, { name: "ff1", type: "FlipFlop", bit: 4, pos: [880, 580], flip: false }, { name: "mux1", type: "Mux", bit: 1, opts: 2, pos: [160, 540], flip: false }, { name: "demux1", type: "Demux", bit: 1, opts: 2, pos: [80, 540], flip: false }, { name: "pack1", type: "Pack", bits: [1, 1], pos: [760, 560], flip: false }, { name: "unpack1", type: "Unpack", bits: [1, 1], pos: [680, 560], flip: false }, { name: "hoge", type: "Verilog", ports: [{ name: "a", bit: 4, direct: "in", relative: ["left", 20] }, { name: "b", bit: 4, direct: "in", relative: ["left", -20] }, { name: "c", bit: 4, direct: "out", relative: ["right", 0] }], code: "always_comb c = a + b;", pos: [900, 330], flip: false }, { name: "op_add", type: "ArithOp", op: "add", bit: 8, inputs: 2, pos: [550, 60], flip: false }, { type: "BitOp", name: "op_bit", op: "and", bit: 8, inputs: 2, pos: [550, 260], flip: false }, { type: "ReduceOp", name: "op_or", op: "or", bit: 8, pos: [550, 320], flip: false }, { type: "RegWrite", name: "add0", bit: 8, pos: [420, 40], flip: true }, { type: "RegWrite", name: "add1", bit: 8, pos: [420, 80], flip: true }, { type: "RegRead", name: "add", bit: 8, pos: [680, 60], flip: false }, { type: "RegWrite", name: "and0", bit: 8, pos: [420, 240], flip: true }, { type: "RegWrite", name: "and1", bit: 8, pos: [420, 280], flip: true }, { type: "RegRead", name: "and", bit: 8, pos: [680, 260], flip: false }, { type: "RegWrite", name: "ori", bit: 8, pos: [420, 320], flip: true }, { type: "RegRead", name: "oro", bit: 1, pos: [680, 320], flip: false }, { type: "ArithOp", name: "op_mul", op: "mul", bit: 8, inputs: 3, pos: [550, 160], flip: false }, { type: "RegWrite", name: "mul0", bit: 8, pos: [420, 120], flip: true }, { type: "RegWrite", name: "mul1", bit: 8, pos: [420, 160], flip: true }, { type: "RegWrite", name: "mul2", bit: 8, pos: [420, 200], flip: true }, { type: "RegRead", name: "mul", bit: 8, pos: [680, 160], flip: false }, { name: "mux2", type: "Mux", bit: 1, opts: 3, pos: [560, 520], flip: false }, { name: "demux2", type: "Demux", bit: 1, opts: 3, pos: [480, 520], flip: false }, { name: "pack2", type: "Pack", bits: [1, 1, 1], pos: [360, 540], flip: false }, { name: "unpack2", type: "Unpack", bits: [1, 1, 1], pos: [280, 540], flip: false }], wires: [{ name: "hoge", src: { elem: "btn1", port: "in" }, dst: { elem: "led1", port: "out" }, path: [] }, { name: "irq", src: { elem: "btn4", port: "in" }, dst: { elem: "intr", port: "intr" }, path: [] }, { name: "a", src: { elem: "i2c", port: "clk" }, dst: { elem: "scl", port: "out" }, path: [] }, { name: "b", src: { elem: "i2c", port: "iosel" }, dst: { elem: "sda", port: "iosel" }, path: [] }, { name: "c", src: { elem: "sda", port: "in" }, dst: { elem: "i2c", port: "rx" }, path: [] }, { name: "d", src: { elem: "i2c", port: "tx" }, dst: { elem: "sda", port: "out" }, path: [] }, { name: "e", src: { elem: "rx0", port: "in" }, dst: { elem: "uart", port: "rx" }, path: [] }, { name: "f", src: { elem: "uart", port: "tx" }, dst: { elem: "tx0", port: "out" }, path: [] }, { name: "g", src: { elem: "gpo0", port: "out" }, dst: { elem: "pin0", port: "out" }, path: [] }, { name: "h", src: { elem: "pin1", port: "in" }, dst: { elem: "gpi0", port: "in" }, path: [] }, { name: "i", src: { elem: "pin2", port: "in" }, dst: { elem: "trig", port: "trig" }, path: [] }, { name: "j", src: { elem: "gpios", port: "out" }, dst: { elem: "gpio", port: "iosel" }, path: [] }, { name: "k", src: { elem: "gpio", port: "in" }, dst: { elem: "gpioi", port: "in" }, path: [] }, { name: "l", src: { elem: "gpioo", port: "out" }, dst: { elem: "gpio", port: "out" }, path: [] }, { name: "m", src: { elem: "pack1", port: "out" }, dst: { elem: "unpack1", port: "in" }, path: [[800, 560], [800, 610], [640, 610], [640, 560]] }, { name: "n", src: { elem: "unpack1", port: "out0" }, dst: { elem: "pack1", port: "in0" }, path: [] }, { name: "o", src: { elem: "unpack1", port: "out1" }, dst: { elem: "pack1", port: "in1" }, path: [] }, { name: "p", src: { elem: "demux1", port: "out0" }, dst: { elem: "mux1", port: "in0" }, path: [] }, { name: "q", src: { elem: "demux1", port: "out1" }, dst: { elem: "mux1", port: "in1" }, path: [] }, { name: "r", src: { elem: "mux1", port: "out" }, dst: { elem: "demux1", port: "in" }, path: [[200, 560], [200, 610], [40, 610], [40, 560]] }, { name: "s", src: { elem: "ff1", port: "out" }, dst: { elem: "ff1", port: "in" }, path: [[920, 580], [920, 610], [840, 610], [840, 580]] }, { name: "w4EAD8D9F3E", src: { elem: "add0", port: "out" }, dst: { elem: "op_add", port: "in0" }, path: [] }, { name: "w0E64BB14DA", src: { elem: "add1", port: "out" }, dst: { elem: "op_add", port: "in1" }, path: [] }, { name: "wBD36203C34", src: { elem: "op_add", port: "out" }, dst: { elem: "add", port: "in" }, path: [] }, { name: "w34E5906A4C", src: { elem: "ori", port: "out" }, dst: { elem: "op_or", port: "in" }, path: [] }, { name: "w0A27E69972", src: { elem: "and0", port: "out" }, dst: { elem: "op_bit", port: "in0" }, path: [] }, { name: "w8E8614EBAC", src: { elem: "and1", port: "out" }, dst: { elem: "op_bit", port: "in1" }, path: [] }, { name: "w04577D6ABD", src: { elem: "op_bit", port: "out" }, dst: { elem: "and", port: "in" }, path: [] }, { name: "w91196402DA", src: { elem: "op_or", port: "out" }, dst: { elem: "oro", port: "in" }, path: [] }, { name: "w3CEAC64B49", src: { elem: "mul0", port: "out" }, dst: { elem: "op_mul", port: "in0" }, path: [] }, { name: "wAE56F6212F", src: { elem: "mul1", port: "out" }, dst: { elem: "op_mul", port: "in1" }, path: [] }, { name: "wF7905CA7CF", src: { elem: "mul2", port: "out" }, dst: { elem: "op_mul", port: "in2" }, path: [] }, { name: "wAA51C50B32", src: { elem: "op_mul", port: "out" }, dst: { elem: "mul", port: "in" }, path: [] }, { name: "wCF238FA751", src: { elem: "demux2", port: "out0" }, dst: { elem: "mux2", port: "in0" }, path: [] }, { name: "w9E13AE540A", src: { elem: "demux2", port: "out1" }, dst: { elem: "mux2", port: "in1" }, path: [] }, { name: "wE52C8173DE", src: { elem: "mux2", port: "out" }, dst: { elem: "demux2", port: "in" }, path: [[600, 540], [600, 610], [440, 610], [440, 540]] }, { name: "w33D319BC1B", src: { elem: "pack2", port: "out" }, dst: { elem: "unpack2", port: "in" }, path: [[400, 540], [400, 610], [240, 610], [240, 540]] }, { name: "wD4C4F0902F", src: { elem: "unpack2", port: "out0" }, dst: { elem: "pack2", port: "in0" }, path: [] }, { name: "wCC47072DB2", src: { elem: "unpack2", port: "out1" }, dst: { elem: "pack2", port: "in1" }, path: [] }, { name: "w4807D8D626", src: { elem: "demux2", port: "out2" }, dst: { elem: "mux2", port: "in2" }, path: [] }] }, Hg = { uart: { name: "uart", params: [], ports: [{ name: "rx", bit: 1, direct: "in", relative: ["left", -20] }, { name: "tx", bit: 1, direct: "out", relative: ["left", 20] }], software: { class: "UART", methods: [] } }, i2c: { name: "i2c", params: [], ports: [{ name: "clk", bit: 1, direct: "out", relative: ["left", -60] }, { name: "iosel", bit: 1, direct: "out", relative: ["left", -20] }, { name: "rx", bit: 1, direct: "in", relative: ["left", 20] }, { name: "tx", bit: 1, direct: "out", relative: ["left", 60] }], software: { class: "UART", methods: [] } } };
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const ix = { board: { name: "TinyFPGABX", ports: [] }, server: { host: "localhost", port: 3e3 } };
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const lh = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/module.ts/moduleListState", Se(Object.keys(Hg)));
lh.debugLabel = "moduleListState";
const qg = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/module.ts/moduleState", Nv((t) => Se(Hg[t])));
qg.debugLabel = "moduleState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const it = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/project.ts/projState", Se(sx));
it.debugLabel = "projState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const cf = 50, Vg = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/history.ts/historyBufferState", Se({ undo: [], redo: [] }));
Vg.debugLabel = "historyBufferState";
const wn = () => {
  const t = F.c(14), [e, a] = Ee(Vg), [i, o] = Ee(it);
  let c, f;
  t[0] !== e || t[1] !== i || t[2] !== a || t[3] !== o ? (c = () => {
    if (e.undo.length === 0) return;
    console.log("Undo:", e);
    const [g, ...p] = e.undo;
    a({ undo: p, redo: of([i, ...e.redo], cf) }), o(g);
  }, f = () => {
    if (e.redo.length === 0) return;
    console.log("Redo:", e);
    const [g, ...p] = e.redo;
    a({ undo: of([i, ...e.undo], cf), redo: p }), o(g);
  }, t[0] = e, t[1] = i, t[2] = a, t[3] = o, t[4] = c, t[5] = f) : (c = t[4], f = t[5]);
  let u;
  t[6] !== e || t[7] !== i || t[8] !== a ? (u = () => {
    a({ undo: of([i, ...e.undo], cf), redo: [] }), console.log("*", [i, ...e.undo]);
  }, t[6] = e, t[7] = i, t[8] = a, t[9] = u) : u = t[9];
  let d;
  return t[10] !== c || t[11] !== f || t[12] !== u ? (d = { undo: c, redo: f, commit: u }, t[10] = c, t[11] = f, t[12] = u, t[13] = d) : d = t[13], d;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Bg = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/target.ts/targetState", Se(ix));
Bg.debugLabel = "targetState";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Cf = function(t, e) {
  return Cf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, i) {
    a.__proto__ = i;
  } || function(a, i) {
    for (var o in i) i.hasOwnProperty(o) && (a[o] = i[o]);
  }, Cf(t, e);
};
function Yg(t, e) {
  Cf(t, e);
  function a() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (a.prototype = e.prototype, new a());
}
function rx(t) {
  var e = typeof Symbol == "function" && t[Symbol.iterator], a = 0;
  return e ? e.call(t) : { next: function() {
    return t && a >= t.length && (t = void 0), { value: t && t[a++], done: !t };
  } };
}
function ox(t, e) {
  var a = typeof Symbol == "function" && t[Symbol.iterator];
  if (!a) return t;
  var i = a.call(t), o, c = [], f;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = i.next()).done; ) c.push(o.value);
  } catch (u) {
    f = { error: u };
  } finally {
    try {
      o && !o.done && (a = i.return) && a.call(i);
    } finally {
      if (f) throw f.error;
    }
  }
  return c;
}
function cx() {
  for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(ox(arguments[e]));
  return t;
}
var Gg = /* @__PURE__ */ function() {
  function t(e, a) {
    this.target = a, this.type = e;
  }
  return t;
}(), ux = function(t) {
  Yg(e, t);
  function e(a, i) {
    var o = t.call(this, "error", i) || this;
    return o.message = a.message, o.error = a, o;
  }
  return e;
}(Gg), fx = function(t) {
  Yg(e, t);
  function e(a, i, o) {
    a === void 0 && (a = 1e3), i === void 0 && (i = "");
    var c = t.call(this, "close", o) || this;
    return c.wasClean = true, c.code = a, c.reason = i, c;
  }
  return e;
}(Gg);
/*!
* Reconnecting WebSocket
* by Pedro Ladaria <pedro.ladaria@gmail.com>
* https://github.com/pladaria/reconnecting-websocket
* License MIT
*/
var hx = function() {
  if (typeof WebSocket < "u") return WebSocket;
}, dx = function(t) {
  return typeof t < "u" && !!t && t.CLOSING === 2;
}, Fa = { maxReconnectionDelay: 1e4, minReconnectionDelay: 1e3 + Math.random() * 4e3, minUptime: 5e3, reconnectionDelayGrowFactor: 1.3, connectionTimeout: 4e3, maxRetries: 1 / 0, maxEnqueuedMessages: 1 / 0 }, Qg = function() {
  function t(e, a, i) {
    var o = this;
    i === void 0 && (i = {}), this._listeners = { error: [], message: [], open: [], close: [] }, this._retryCount = -1, this._shouldReconnect = true, this._connectLock = false, this._binaryType = "blob", this._closeCalled = false, this._messageQueue = [], this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this._handleOpen = function(c) {
      o._debug("open event");
      var f = o._options.minUptime, u = f === void 0 ? Fa.minUptime : f;
      clearTimeout(o._connectTimeout), o._uptimeTimeout = setTimeout(function() {
        return o._acceptOpen();
      }, u), o._ws.binaryType = o._binaryType, o._messageQueue.forEach(function(d) {
        return o._ws.send(d);
      }), o._messageQueue = [], o.onopen && o.onopen(c), o._listeners.open.forEach(function(d) {
        return o._callEventListener(c, d);
      });
    }, this._handleMessage = function(c) {
      o._debug("message event"), o.onmessage && o.onmessage(c), o._listeners.message.forEach(function(f) {
        return o._callEventListener(c, f);
      });
    }, this._handleError = function(c) {
      o._debug("error event", c.message), o._disconnect(void 0, c.message === "TIMEOUT" ? "timeout" : void 0), o.onerror && o.onerror(c), o._debug("exec error listeners"), o._listeners.error.forEach(function(f) {
        return o._callEventListener(c, f);
      }), o._connect();
    }, this._handleClose = function(c) {
      o._debug("close event"), o._clearTimeouts(), o._shouldReconnect && o._connect(), o.onclose && o.onclose(c), o._listeners.close.forEach(function(f) {
        return o._callEventListener(c, f);
      });
    }, this._url = e, this._protocols = a, this._options = i, this._options.startClosed && (this._shouldReconnect = false), this._connect();
  }
  return Object.defineProperty(t, "CONNECTING", { get: function() {
    return 0;
  }, enumerable: true, configurable: true }), Object.defineProperty(t, "OPEN", { get: function() {
    return 1;
  }, enumerable: true, configurable: true }), Object.defineProperty(t, "CLOSING", { get: function() {
    return 2;
  }, enumerable: true, configurable: true }), Object.defineProperty(t, "CLOSED", { get: function() {
    return 3;
  }, enumerable: true, configurable: true }), Object.defineProperty(t.prototype, "CONNECTING", { get: function() {
    return t.CONNECTING;
  }, enumerable: true, configurable: true }), Object.defineProperty(t.prototype, "OPEN", { get: function() {
    return t.OPEN;
  }, enumerable: true, configurable: true }), Object.defineProperty(t.prototype, "CLOSING", { get: function() {
    return t.CLOSING;
  }, enumerable: true, configurable: true }), Object.defineProperty(t.prototype, "CLOSED", { get: function() {
    return t.CLOSED;
  }, enumerable: true, configurable: true }), Object.defineProperty(t.prototype, "binaryType", { get: function() {
    return this._ws ? this._ws.binaryType : this._binaryType;
  }, set: function(e) {
    this._binaryType = e, this._ws && (this._ws.binaryType = e);
  }, enumerable: true, configurable: true }), Object.defineProperty(t.prototype, "retryCount", { get: function() {
    return Math.max(this._retryCount, 0);
  }, enumerable: true, configurable: true }), Object.defineProperty(t.prototype, "bufferedAmount", { get: function() {
    var e = this._messageQueue.reduce(function(a, i) {
      return typeof i == "string" ? a += i.length : i instanceof Blob ? a += i.size : a += i.byteLength, a;
    }, 0);
    return e + (this._ws ? this._ws.bufferedAmount : 0);
  }, enumerable: true, configurable: true }), Object.defineProperty(t.prototype, "extensions", { get: function() {
    return this._ws ? this._ws.extensions : "";
  }, enumerable: true, configurable: true }), Object.defineProperty(t.prototype, "protocol", { get: function() {
    return this._ws ? this._ws.protocol : "";
  }, enumerable: true, configurable: true }), Object.defineProperty(t.prototype, "readyState", { get: function() {
    return this._ws ? this._ws.readyState : this._options.startClosed ? t.CLOSED : t.CONNECTING;
  }, enumerable: true, configurable: true }), Object.defineProperty(t.prototype, "url", { get: function() {
    return this._ws ? this._ws.url : "";
  }, enumerable: true, configurable: true }), t.prototype.close = function(e, a) {
    if (e === void 0 && (e = 1e3), this._closeCalled = true, this._shouldReconnect = false, this._clearTimeouts(), !this._ws) {
      this._debug("close enqueued: no ws instance");
      return;
    }
    if (this._ws.readyState === this.CLOSED) {
      this._debug("close: already closed");
      return;
    }
    this._ws.close(e, a);
  }, t.prototype.reconnect = function(e, a) {
    this._shouldReconnect = true, this._closeCalled = false, this._retryCount = -1, !this._ws || this._ws.readyState === this.CLOSED ? this._connect() : (this._disconnect(e, a), this._connect());
  }, t.prototype.send = function(e) {
    if (this._ws && this._ws.readyState === this.OPEN) this._debug("send", e), this._ws.send(e);
    else {
      var a = this._options.maxEnqueuedMessages, i = a === void 0 ? Fa.maxEnqueuedMessages : a;
      this._messageQueue.length < i && (this._debug("enqueue", e), this._messageQueue.push(e));
    }
  }, t.prototype.addEventListener = function(e, a) {
    this._listeners[e] && this._listeners[e].push(a);
  }, t.prototype.dispatchEvent = function(e) {
    var a, i, o = this._listeners[e.type];
    if (o) try {
      for (var c = rx(o), f = c.next(); !f.done; f = c.next()) {
        var u = f.value;
        this._callEventListener(e, u);
      }
    } catch (d) {
      a = { error: d };
    } finally {
      try {
        f && !f.done && (i = c.return) && i.call(c);
      } finally {
        if (a) throw a.error;
      }
    }
    return true;
  }, t.prototype.removeEventListener = function(e, a) {
    this._listeners[e] && (this._listeners[e] = this._listeners[e].filter(function(i) {
      return i !== a;
    }));
  }, t.prototype._debug = function() {
    for (var e = [], a = 0; a < arguments.length; a++) e[a] = arguments[a];
    this._options.debug && console.log.apply(console, cx(["RWS>"], e));
  }, t.prototype._getNextDelay = function() {
    var e = this._options, a = e.reconnectionDelayGrowFactor, i = a === void 0 ? Fa.reconnectionDelayGrowFactor : a, o = e.minReconnectionDelay, c = o === void 0 ? Fa.minReconnectionDelay : o, f = e.maxReconnectionDelay, u = f === void 0 ? Fa.maxReconnectionDelay : f, d = 0;
    return this._retryCount > 0 && (d = c * Math.pow(i, this._retryCount - 1), d > u && (d = u)), this._debug("next delay", d), d;
  }, t.prototype._wait = function() {
    var e = this;
    return new Promise(function(a) {
      setTimeout(a, e._getNextDelay());
    });
  }, t.prototype._getNextUrl = function(e) {
    if (typeof e == "string") return Promise.resolve(e);
    if (typeof e == "function") {
      var a = e();
      if (typeof a == "string") return Promise.resolve(a);
      if (a.then) return a;
    }
    throw Error("Invalid URL");
  }, t.prototype._connect = function() {
    var e = this;
    if (!(this._connectLock || !this._shouldReconnect)) {
      this._connectLock = true;
      var a = this._options, i = a.maxRetries, o = i === void 0 ? Fa.maxRetries : i, c = a.connectionTimeout, f = c === void 0 ? Fa.connectionTimeout : c, u = a.WebSocket, d = u === void 0 ? hx() : u;
      if (this._retryCount >= o) {
        this._debug("max retries reached", this._retryCount, ">=", o);
        return;
      }
      if (this._retryCount++, this._debug("connect", this._retryCount), this._removeListeners(), !dx(d)) throw Error("No valid WebSocket class provided");
      this._wait().then(function() {
        return e._getNextUrl(e._url);
      }).then(function(g) {
        e._closeCalled || (e._debug("connect", { url: g, protocols: e._protocols }), e._ws = e._protocols ? new d(g, e._protocols) : new d(g), e._ws.binaryType = e._binaryType, e._connectLock = false, e._addListeners(), e._connectTimeout = setTimeout(function() {
          return e._handleTimeout();
        }, f));
      });
    }
  }, t.prototype._handleTimeout = function() {
    this._debug("timeout event"), this._handleError(new ux(Error("TIMEOUT"), this));
  }, t.prototype._disconnect = function(e, a) {
    if (e === void 0 && (e = 1e3), this._clearTimeouts(), !!this._ws) {
      this._removeListeners();
      try {
        this._ws.close(e, a), this._handleClose(new fx(e, a, this));
      } catch {
      }
    }
  }, t.prototype._acceptOpen = function() {
    this._debug("accept open"), this._retryCount = 0;
  }, t.prototype._callEventListener = function(e, a) {
    "handleEvent" in a ? a.handleEvent(e) : a(e);
  }, t.prototype._removeListeners = function() {
    this._ws && (this._debug("removeListeners"), this._ws.removeEventListener("open", this._handleOpen), this._ws.removeEventListener("close", this._handleClose), this._ws.removeEventListener("message", this._handleMessage), this._ws.removeEventListener("error", this._handleError));
  }, t.prototype._addListeners = function() {
    this._ws && (this._debug("addListeners"), this._ws.addEventListener("open", this._handleOpen), this._ws.addEventListener("close", this._handleClose), this._ws.addEventListener("message", this._handleMessage), this._ws.addEventListener("error", this._handleError));
  }, t.prototype._clearTimeouts = function() {
    clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout);
  }, t;
}();
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Xg = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/ws-terminal.ts/terminalState", Se([]));
Xg.debugLabel = "terminalState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Go = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/ws-serial.ts/deviceServerHostState", Se(""));
Go.debugLabel = "deviceServerHostState";
const mx = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/ws-serial.ts/deviceInfoState", Se(async (t) => {
  const e = t(Go);
  return await fetch(`http://${e}`).then((i) => i.json()).catch(() => null);
}));
mx.debugLabel = "deviceInfoState";
const Fg = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/ws-serial.ts/serialConfigState", Se({ com: "ttyUSB0", dataBits: 8, stopBits: 1, parity: "none" }));
Fg.debugLabel = "serialConfigState";
const Zg = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/ws-serial.ts/baudRateState", Se(9600));
Zg.debugLabel = "baudRateState";
const Kg = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/ws-serial.ts/serialMessageState", Se([]));
Kg.debugLabel = "serialMessageState";
const gx = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/ws-serial.ts/wsState", Se((t) => {
  const e = t(Go), a = t(Fg), i = t(Zg), o = Zt(Xg), c = Zt(Kg);
  if (e && a) {
    const f = `ws://${e}/${a.com}`, u = new URLSearchParams({ baud_rate: i.toString(), data_bits: a.dataBits.toString(), stop_bits: a.stopBits.toString(), parity: a.parity }).toString(), d = new Qg(`${f}?${u}`);
    return d.binaryType = "arraybuffer", d.onopen = () => {
      o((g) => [...g, `Connected to server: ${f}`]);
    }, d.onclose = () => {
      o((g) => [...g, `Disconnected from server: ${f}`]);
    }, d.onmessage = (g) => {
      const b = new TextDecoder("utf-8").decode(g.data);
      c((v) => [...v, b]);
    }, d;
  }
  return null;
}));
gx.debugLabel = "wsState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const px = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/ws-gpio.ts/gpioPinsState", Se([]));
px.debugLabel = "gpioPinsState";
const yx = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/ws-gpio.ts/gpioConnectedState", Se(false));
yx.debugLabel = "gpioConnectedState";
const bx = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/ws-gpio.ts/gpioErrorState", Se(""));
bx.debugLabel = "gpioErrorState";
const vx = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/ws-gpio.ts/gpioWsState", Se((t) => {
  const e = t(Go);
  if (!e) return null;
  const a = `ws://${e}/gpio`, i = new Qg(a);
  return i.onopen = () => {
    console.log("GPIO WebSocket connected"), i.send(JSON.stringify({ type: "status" }));
  }, i.onclose = () => {
    console.log("GPIO WebSocket disconnected");
  }, i.onerror = (o) => {
    console.error("GPIO WebSocket error:", o);
  }, i.onmessage = (o) => {
    try {
      const c = JSON.parse(o.data);
      console.log("GPIO response:", c);
    } catch (c) {
      console.error("Failed to parse GPIO response:", c);
    }
  }, i;
}));
vx.debugLabel = "gpioWsState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const xx = () => typeof window > "u" ? false : window.matchMedia("(prefers-color-scheme: dark)").matches, Qo = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/local/theme.ts/darkModeAtom", If("darkMode", xx()));
Qo.debugLabel = "darkModeAtom";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Sx = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/server/connection.ts/connectionState", Se({ status: "disconnected", serverUrl: null, serverName: null }));
Sx.debugLabel = "connectionState";
const jx = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/server/connection.ts/lastConnectedServerState", If("last-connected-server", null));
jx.debugLabel = "lastConnectedServerState";
const _x = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/server/connection.ts/connectionTimeoutState", Se(5e3));
_x.debugLabel = "connectionTimeoutState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const wx = () => {
  const t = F.c(2), e = Ne(Vo);
  let a;
  return t[0] !== e ? (a = { channels: e }, t[0] = e, t[1] = a) : a = t[1], a;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Nx = () => {
  const t = F.c(2), e = Ne(Vo);
  let a;
  return t[0] !== e ? (a = { channels: e }, t[0] = e, t[1] = a) : a = t[1], a;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Tx = () => {
  const t = F.c(2), e = Ne(Vo), a = kx, i = Mx;
  let o;
  return t[0] !== e ? (o = { channels: e, edit: a, add: i }, t[0] = e, t[1] = o) : o = t[1], o;
};
function kx() {
}
function Mx() {
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Ln = (t) => t === 0 ? 40 : Math.max(t * 40 - 6), ja = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/collect/elem.ts/elemsState", Se((t) => {
  const e = t(it).elems, a = t(xt), i = t(Kt), o = t(sl);
  let c = [];
  return { valid: e.flatMap((u) => {
    const d = i.state === "Moving" && ep(a, u.name) ? va(u.pos, $l(ar(o, i.value.start))) : u.pos, g = 240;
    switch (u.type) {
      case "Inst": {
        if (t(lh).find((x) => x === u.modn) === void 0) return c.push(`Module ${u.modn} not found`), [];
        const b = t(qg(u.modn)), v = Ln(b.ports.length);
        return [{ ...u, pos: d, module: b, size: [g, v], flip: u.flip, ports: b.ports.map((x) => {
          if (x.relative[0] === "left") return { ...x, pos: [u.flip ? g / 2 : -240 / 2, x.relative[1]] };
          if (x.relative[0] === "right") return { ...x, pos: [u.flip ? -240 / 2 : g / 2, x.relative[1]] };
        }) }];
      }
      case "RegWrite":
        return [{ ...u, pos: d, ports: [{ name: "out", direct: "out", bit: u.bit, pos: [u.flip ? 60 : -60, 0] }], size: [120, Ln(1)] }];
      case "RegRead":
        return [{ ...u, pos: d, ports: [{ name: "in", direct: "in", bit: u.bit, pos: [u.flip ? 60 : -60, 0] }], size: [120, Ln(1)] }];
      case "RegTrig":
        return [{ ...u, pos: d, ports: [{ name: "trig", direct: "in", bit: 1, pos: [u.flip ? 60 : -60, 0] }], size: [120, Ln(1)] }];
      case "Intr":
        return [{ ...u, pos: d, ports: [{ name: "intr", direct: "in", bit: 1, pos: [u.flip ? 60 : -60, 0] }], size: [120, Ln(1)] }];
      case "PortIn":
        return [{ ...u, pos: d, ports: [{ name: "in", direct: "out", bit: 1, pos: [u.flip ? 60 : -60, 0] }], size: [120, Ln(1)] }];
      case "PortOut":
        return [{ ...u, pos: d, ports: [{ name: "out", direct: "in", bit: 1, pos: [u.flip ? 60 : -60, 0] }], size: [120, Ln(1)] }];
      case "PortInOut":
        return [{ ...u, pos: d, ports: [{ name: "iosel", direct: "in", bit: 1, pos: [u.flip ? 60 : -60, -40] }, { name: "in", direct: "out", bit: 1, pos: [u.flip ? 60 : -60, 0] }, { name: "out", direct: "in", bit: 1, pos: [u.flip ? 60 : -60, 40] }], size: [120, Ln(3)] }];
      case "Verilog":
        return [{ ...u, pos: d, size: [g, Ln(u.ports.length)], ports: u.ports.map((p) => {
          if (p.relative[0] === "left") return { ...p, pos: [-240 / 2, p.relative[1]] };
          if (p.relative[0] === "right") return { ...p, pos: [g / 2, p.relative[1]] };
        }) }];
      case "Const":
        return [{ ...u, pos: d, ports: [{ name: "out", bit: u.bit, direct: "out", pos: [u.flip ? 60 : -60, 0] }], size: [120, Ln(1)] }];
      case "ArithOp":
        return [{ ...u, pos: d, ports: [...Ls(u.inputs).map((p, b, { length: v }) => ({ name: `in${p}`, bit: u.bit, direct: "in", pos: [u.flip ? 30 : -30, p * 20 - v * 10 + 10] })), { name: "out", bit: u.bit, direct: "out", pos: [u.flip ? -30 : 30, 0] }], size: [60, u.inputs * 20] }];
      case "BitOp":
        return [{ ...u, pos: d, ports: [...Ls(u.inputs).map((p, b, { length: v }) => ({ name: `in${p}`, bit: u.bit, direct: "in", pos: [u.flip ? 30 : -30, p * 20 - v * 10 + 10] })), { name: "out", bit: u.bit, direct: "out", pos: [u.flip ? -30 : 30, 0] }], size: [60, u.inputs * 20] }];
      case "ReduceOp":
        return [{ ...u, pos: d, ports: [{ name: "in", bit: u.bit, direct: "in", pos: [-30, 0] }, { name: "out", bit: 1, direct: "out", pos: [30, 0] }], size: [60, 40] }];
      case "Mux":
        return [{ ...u, pos: d, ports: [{ name: "sel", bit: Math.ceil(Math.log2(u.opts)), direct: "in", pos: [-20, -20 * u.opts] }, ...Ls(u.opts).map((p, b, { length: v }) => ({ name: `in${b}`, bit: u.bit, direct: "in", pos: [-20, 40 * b - 20 * v + 40] })), { name: "out", bit: u.bit, direct: "out", pos: [20, 20] }], size: [40, (u.opts + 1) * 40] }];
      case "Demux":
        return [{ ...u, pos: d, ports: [{ name: "sel", bit: Math.ceil(Math.log2(u.opts)), direct: "in", pos: [-20, -20 * u.opts] }, { name: "in", bit: u.bit, direct: "in", pos: [-20, 20] }, ...Ls(u.opts).map((p, b, { length: v }) => ({ name: `out${b}`, bit: u.bit, direct: "out", pos: [20, 40 * b - 20 * v + 40] }))], size: [40, (u.opts + 1) * 40] }];
      case "Pack":
        return [{ ...u, pos: d, ports: [...u.bits.map((p, b, { length: v }) => ({ name: `in${b}`, bit: p, direct: "in", pos: [-20, b * 40 - v * 20 + 20] })), { name: "out", bit: u.bits.reduce((p, b) => p + b, 0), direct: "out", pos: [20, 0] }], size: [40, u.bits.length * 40] }];
      case "Unpack":
        return [{ ...u, pos: d, ports: [{ name: "in", bit: u.bits.reduce((p, b) => p + b, 0), direct: "in", pos: [-20, 0] }, ...u.bits.map((p, b, { length: v }) => ({ name: `out${b}`, bit: p, direct: "out", pos: [20, b * 40 - v * 20 + 20] }))], size: [40, u.bits.length * 40] }];
      case "FlipFlop":
        return [{ ...u, pos: d, ports: [{ name: "in", bit: u.bit, direct: "in", pos: [u.flip ? 20 : -20, 0] }, { name: "out", bit: u.bit, direct: "out", pos: [u.flip ? -20 : 20, 0] }], size: [40, 40] }];
      case "CombCircuit":
        return [{ ...u, pos: d, ports: [...u.inputs.map(({ name: p, bit: b }, v, { length: x }) => ({ name: p, bit: b, direct: "in", pos: [u.flip ? g / 2 : -240 / 2, v * 40 - x * 20 + 20] })), ...u.outputs.map(({ name: p, bit: b }, v, { length: x }) => ({ name: p, bit: b, direct: "out", pos: [u.flip ? -240 / 2 : g / 2, v * 40 - x * 20 + 20] }))], size: [g, Ln(Math.max(u.inputs.length, u.outputs.length))] }];
      case "StateMachine":
        return [{ ...u, pos: d, ports: [...u.inputs.map(({ name: p, bit: b }, v, { length: x }) => ({ name: p, bit: b, direct: "in", pos: [u.flip ? g / 2 : -240 / 2, v * 40 - x * 20 + 20] })), ...u.outputs.map(({ name: p, bit: b }, v, { length: x }) => ({ name: p, bit: b, direct: "out", pos: [u.flip ? -240 / 2 : g / 2, v * 40 - x * 20 + 20] }))], size: [g, Ln(Math.max(u.inputs.length, u.outputs.length))] }];
    }
  }), error: c };
}));
ja.debugLabel = "elemsState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const or = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/collect/port.ts/portsState", Se((t) => {
  const e = t(ja).valid;
  let a = [];
  return { valid: e.flatMap((o) => o.ports.map((c) => ({ ...c, elem: o.name, pos: va(o.pos, c.pos) }))), error: a };
}));
or.debugLabel = "portsState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Za = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/collect/wires.ts/wiresState", Se((t) => {
  const e = t(or).valid, a = t(it).wires, i = t(xt), o = t(Kt), c = t(sl);
  let f = [];
  return { valid: a.flatMap((d) => {
    const g = e.find((v) => v.elem === d.src.elem && v.name === d.src.port), p = e.find((v) => v.elem === d.dst.elem && v.name === d.dst.port);
    if (g === void 0 || p === void 0) return g === void 0 && f.push(`${d.name}.src: ${d.src.elem}.${d.src.port} is invalid port`), p === void 0 && f.push(`${d.name}.dst: ${d.dst.elem}.${d.dst.port} is invalid port`), [];
    if (g.bit !== p.bit) return f.push(`${d.name}: Width do not match (src: ${g.bit}, dst: ${p.bit})`), [];
    let b = d.path;
    if (o.state === "Moving") {
      const v = i.paths.filter((x) => x.wire === d.name).map(({ idx: x }) => x);
      b = b.map((x, S) => v.includes(S) ? va(x, $l(ar(c, o.value.start))) : x);
    }
    return [{ name: d.name, src: { ...d.src, pos: g.pos }, dst: { ...d.dst, pos: p.pos }, path: b, bit: g.bit }];
  }), error: f };
}));
Za.debugLabel = "wiresState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Ax = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/collect/error.ts/errorState", Se((t) => {
  const e = t(ja).error, a = t(or).error, i = t(Za).error;
  return [...e, ...a, ...i];
}));
Ax.debugLabel = "errorState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Cx = () => {
  const t = F.c(5), e = Zt(Pf), a = Ne(ja).valid, i = Ne(Za).valid, o = Ne(xt);
  let c;
  return t[0] !== a || t[1] !== o || t[2] !== e || t[3] !== i ? (c = () => {
    if (!ir(o)) {
      console.log("Copy", o);
      const f = { elems: o.elems.flatMap((u) => {
        const d = a.find((g) => g.name === u);
        return d ? [d] : [];
      }), wires: o.wires.flatMap((u) => {
        const d = i.find((g) => g.name === u);
        return d ? [d] : [];
      }) };
      e(f);
    }
  }, t[0] = a, t[1] = o, t[2] = e, t[3] = i, t[4] = c) : c = t[4], c;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Ex = (t) => ({ elems: [t], wires: [], paths: [] }), Ox = (t) => ({ elems: [], wires: [t], paths: [] }), zx = (t) => ({ elems: [], wires: [], paths: [t] }), Ig = () => {
  const t = F.c(2), e = Zt(xt);
  let a;
  return t[0] !== e ? (a = (i) => e(Ex(i)), t[0] = e, t[1] = a) : a = t[1], a;
}, Dx = () => {
  const t = F.c(2), e = Zt(xt);
  let a;
  return t[0] !== e ? (a = (i) => e(Ox(i)), t[0] = e, t[1] = a) : a = t[1], a;
}, Rx = () => {
  const t = F.c(2), e = Zt(xt);
  let a;
  return t[0] !== e ? (a = (i) => e(zx(i)), t[0] = e, t[1] = a) : a = t[1], a;
}, Lx = (t) => ({ elems: t.elems.map(({ name: e }) => e), wires: t.wires.map(({ name: e }) => e), paths: t.wires.flatMap((e) => e.path.map((a, i) => ({ wire: e.name, idx: i }))) }), Ux = () => {
  const t = F.c(3), e = Zt(xt), a = Ne(it);
  let i;
  return t[0] !== a || t[1] !== e ? (i = () => e(Lx(a)), t[0] = a, t[1] = e, t[2] = i) : i = t[2], i;
}, Pg = (t, e) => t.filter((a) => uv({ x: a.pos[0], y: a.pos[1], width: a.size[0], height: a.size[1] }, e)).map(({ name: a }) => a), $x = (t, e) => t.flatMap((a) => Sf(a.src.pos, e) || Sf(a.dst.pos, e) ? [a.name] : []), Wg = (t, e) => t.flatMap((a) => a.path.flatMap((i, o) => Sf(i, e) ? [{ wire: a.name, idx: o }] : [])), Jg = () => {
  const t = F.c(4), e = Ne(ja).valid, a = Ne(Za).valid, i = Zt(xt);
  let o;
  return t[0] !== e || t[1] !== i || t[2] !== a ? (o = (c, f) => {
    const u = yg(c[0], c[1], f[0], f[1]);
    i({ elems: Pg(e, u), wires: $x(a, u), paths: Wg(a, u) });
  }, t[0] = e, t[1] = i, t[2] = a, t[3] = o) : o = t[3], o;
}, Hx = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/action/select.ts/selectingState", Se((t) => {
  const e = t(Kt), a = t(ja).valid, i = t(Za).valid, o = t(sl), c = t(xt);
  if (e.state === "Selecting") {
    const f = yg(e.value.start[0], e.value.start[1], o[0], o[1]);
    return { elems: Pg(a, f), wires: [], paths: Wg(i, f) };
  } else return c;
}));
Hx.debugLabel = "selectingState";
const qx = (t, e) => ({ ...t, elems: [...t.elems, e] }), Vx = (t, e) => ({ ...t, wires: [...t.wires, e] }), Bx = (t, e) => ({ ...t, paths: [...t.paths, e] }), Yx = () => {
  const t = F.c(3), [e, a] = Ee(xt);
  let i;
  return t[0] !== e || t[1] !== a ? (i = (o) => a(qx(e, o)), t[0] = e, t[1] = a, t[2] = i) : i = t[2], i;
}, Gx = () => {
  const t = F.c(3), [e, a] = Ee(xt);
  let i;
  return t[0] !== e || t[1] !== a ? (i = (o) => a(Vx(e, o)), t[0] = e, t[1] = a, t[2] = i) : i = t[2], i;
}, Qx = () => {
  const t = F.c(3), [e, a] = Ee(xt);
  let i;
  return t[0] !== e || t[1] !== a ? (i = (o) => a(Bx(e, o)), t[0] = e, t[1] = a, t[2] = i) : i = t[2], i;
}, ep = (t, e) => t.elems.find((a) => a === e) !== void 0, Xx = (t, e) => t.wires.find((a) => a === e) !== void 0, Fx = (t, e) => t.paths.find((a) => a.wire === e.wire && a.idx === e.idx) !== void 0, Zx = (t) => {
  const e = F.c(3), a = Ne(xt);
  let i;
  return e[0] !== t || e[1] !== a ? (i = ep(a, t), e[0] = t, e[1] = a, e[2] = i) : i = e[2], i;
}, Kx = (t) => {
  const e = F.c(3), a = Ne(xt);
  let i;
  return e[0] !== t || e[1] !== a ? (i = Xx(a, t), e[0] = t, e[1] = a, e[2] = i) : i = e[2], i;
}, Ix = (t) => {
  const e = F.c(3), a = Ne(xt);
  let i;
  return e[0] !== t || e[1] !== a ? (i = Fx(a, t), e[0] = t, e[1] = a, e[2] = i) : i = e[2], i;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Px = (t, e) => t.elems.find((a) => a.name === e) !== void 0, Wx = (t, e) => Px(t, e.name) ? (console.log("Element name duplicate:", e.name), t) : { ...t, elems: [...t.elems, e] }, Jx = () => {
  const t = F.c(5), { commit: e } = wn(), [a, i] = Ee(it), o = Ig();
  let c;
  return t[0] !== e || t[1] !== a || t[2] !== o || t[3] !== i ? (c = (f) => {
    i(Wx(a, f)), e(), o(f.name);
  }, t[0] = e, t[1] = a, t[2] = o, t[3] = i, t[4] = c) : c = t[4], c;
}, e3 = (t, e) => ({ ...t, wires: [...t.wires, e] }), t3 = (t, e, a) => {
  const i = a.find((f) => f.elem === e.src.elem && f.name === e.src.port), o = a.find((f) => f.elem === e.dst.elem && f.name === e.dst.port);
  if (i === void 0) throw `Undefined port: ${e.src}`;
  if (o === void 0) throw `Undefined port: ${e.dst}`;
  if (i.direct !== "out") throw "Invalid wire direction";
  if (o.direct !== "in") throw "Invalid wire directon";
  if (i.bit !== o.bit) throw "Invalid wire width";
  if (t.wires.find((f) => f.dst.elem === e.dst.elem && f.dst.port === e.dst.port) !== void 0) throw `Port already connected: ${e.dst}`;
  return true;
}, n3 = () => {
  const t = F.c(5), { commit: e } = wn(), [a, i] = Ee(it), o = Ne(or).valid;
  let c;
  return t[0] !== e || t[1] !== o || t[2] !== a || t[3] !== i ? (c = (f) => {
    try {
      t3(a, f, o), console.log("Create wire: ", f.src, "->", f.dst), i(e3(a, f)), e();
    } catch (u) {
      console.error(u);
    }
  }, t[0] = e, t[1] = o, t[2] = a, t[3] = i, t[4] = c) : c = t[4], c;
}, l3 = (t, e, a, i) => ({ ...t, wires: t.wires.map((o) => o.name === e ? { ...o, path: [...o.path.slice(0, a), i, ...o.path.slice(a)] } : o) }), tp = () => {
  const t = F.c(4), { commit: e } = wn(), [a, i] = Ee(it);
  let o;
  return t[0] !== e || t[1] !== a || t[2] !== i ? (o = (c, f, u) => {
    i(l3(a, c, f, u)), e();
  }, t[0] = e, t[1] = a, t[2] = i, t[3] = o) : o = t[3], o;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const a3 = (t, e) => ({ ...t, elems: t.elems.filter((a) => a.name !== e), wires: t.wires.filter((a) => a.src.elem !== e && a.dst.elem !== e) }), s3 = (t, e) => ({ ...t, wires: t.wires.filter((a) => a.name !== e) }), i3 = (t, e) => ({ ...t, wires: t.wires.map((a) => a.name === e.wire ? { ...a, path: [...a.path.slice(0, e.idx), ...a.path.slice(e.idx + 1)] } : a) }), np = () => {
  const t = F.c(6), { commit: e } = wn(), [a, i] = Ee(it), [o, c] = Ee(xt);
  let f;
  return t[0] !== e || t[1] !== a || t[2] !== o || t[3] !== i || t[4] !== c ? (f = () => {
    if (!ir(o)) {
      console.log("Delete", o);
      let u = a;
      u = o.elems.reduce(a3, u), u = o.wires.reduce(s3, u), u = o.paths.reduce(i3, u), i(u), c({ elems: [], wires: [], paths: [] }), e();
    }
  }, t[0] = e, t[1] = a, t[2] = o, t[3] = i, t[4] = c, t[5] = f) : f = t[5], f;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const r3 = (t, e, a) => ({ ...t, elems: t.elems.map((i) => i.name === e ? a : i) }), o3 = () => {
  const t = F.c(4), [e, a] = Ee(it), { commit: i } = wn();
  let o;
  return t[0] !== i || t[1] !== e || t[2] !== a ? (o = (c, f) => {
    if (console.log("Edit", c, f), c !== f.name) {
      console.error("Do not change name: ", c, f);
      return;
    }
    a(r3(e, c, f)), i();
  }, t[0] = i, t[1] = e, t[2] = a, t[3] = o) : o = t[3], o;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const c3 = (t, e, a) => ({ ...t, elems: t.elems.map((i) => i.name === e ? { ...i, flip: !i.flip, pos: bg((i == null ? void 0 : i.pos) ?? [0, 0], a) } : i) }), u3 = (t, e, a) => ({ ...t, wires: t.wires.map((i) => i.name === e ? { ...i, path: i.path.map((o) => bg(o, a)) } : i) }), f3 = (t, e) => {
  const a = e.elems.map((u) => t.find((d) => d.name === u)).filter((u) => u !== void 0), i = a.map((u) => u.pos[0]), o = a.map((u) => u.pos[1]), c = [Math.max(...i), Math.max(...o)], f = [Math.min(...i), Math.min(...o)];
  return va(f, fv(ar(c, f), 2));
}, lp = () => {
  const t = F.c(6), { commit: e } = wn(), [a, i] = Ee(it), o = Ne(ja).valid, c = Ne(xt);
  let f;
  return t[0] !== e || t[1] !== o || t[2] !== a || t[3] !== c || t[4] !== i ? (f = () => {
    if (!ir(c)) {
      console.log("Flip", c);
      const [u] = f3(o, c);
      let d = a;
      d = c.elems.reduce((g, p) => c3(g, p, u), d), d = c.wires.reduce((g, p) => u3(g, p, u), d), i(d), e();
    }
  }, t[0] = e, t[1] = o, t[2] = a, t[3] = c, t[4] = i, t[5] = f) : f = t[5], f;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const h3 = (t, e) => t, d3 = () => {
  const t = F.c(5), { commit: e } = wn(), [a, i] = Ee(it), o = Ne(xt);
  let c;
  return t[0] !== e || t[1] !== a || t[2] !== o || t[3] !== i ? (c = () => {
    if (!ir(o)) {
      console.log("Format", o);
      const f = h3(a);
      i(f), e();
    }
  }, t[0] = e, t[1] = a, t[2] = o, t[3] = i, t[4] = c) : c = t[4], c;
};
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function ap(t) {
  return typeof t > "u" || t === null;
}
function m3(t) {
  return typeof t == "object" && t !== null;
}
function g3(t) {
  return Array.isArray(t) ? t : ap(t) ? [] : [t];
}
function p3(t, e) {
  var a, i, o, c;
  if (e) for (c = Object.keys(e), a = 0, i = c.length; a < i; a += 1) o = c[a], t[o] = e[o];
  return t;
}
function y3(t, e) {
  var a = "", i;
  for (i = 0; i < e; i += 1) a += t;
  return a;
}
function b3(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}
var v3 = ap, x3 = m3, S3 = g3, j3 = y3, _3 = b3, w3 = p3, Ka = { isNothing: v3, isObject: x3, toArray: S3, repeat: j3, isNegativeZero: _3, extend: w3 };
function sp(t, e) {
  var a = "", i = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (a += 'in "' + t.mark.name + '" '), a += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (a += `

` + t.mark.snippet), i + " " + a) : i;
}
function Pi(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = sp(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Pi.prototype = Object.create(Error.prototype);
Pi.prototype.constructor = Pi;
Pi.prototype.toString = function(e) {
  return this.name + ": " + sp(this, e);
};
var Bn = Pi, N3 = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], T3 = ["scalar", "sequence", "mapping"];
function k3(t) {
  var e = {};
  return t !== null && Object.keys(t).forEach(function(a) {
    t[a].forEach(function(i) {
      e[String(i)] = a;
    });
  }), e;
}
function M3(t, e) {
  if (e = e || {}, Object.keys(e).forEach(function(a) {
    if (N3.indexOf(a) === -1) throw new Bn('Unknown option "' + a + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return true;
  }, this.construct = e.construct || function(a) {
    return a;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || false, this.styleAliases = k3(e.styleAliases || null), T3.indexOf(this.kind) === -1) throw new Bn('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
}
var Ft = M3;
function pm(t, e) {
  var a = [];
  return t[e].forEach(function(i) {
    var o = a.length;
    a.forEach(function(c, f) {
      c.tag === i.tag && c.kind === i.kind && c.multi === i.multi && (o = f);
    }), a[o] = i;
  }), a;
}
function A3() {
  var t = { scalar: {}, sequence: {}, mapping: {}, fallback: {}, multi: { scalar: [], sequence: [], mapping: [], fallback: [] } }, e, a;
  function i(o) {
    o.multi ? (t.multi[o.kind].push(o), t.multi.fallback.push(o)) : t[o.kind][o.tag] = t.fallback[o.tag] = o;
  }
  for (e = 0, a = arguments.length; e < a; e += 1) arguments[e].forEach(i);
  return t;
}
function Ef(t) {
  return this.extend(t);
}
Ef.prototype.extend = function(e) {
  var a = [], i = [];
  if (e instanceof Ft) i.push(e);
  else if (Array.isArray(e)) i = i.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit))) e.implicit && (a = a.concat(e.implicit)), e.explicit && (i = i.concat(e.explicit));
  else throw new Bn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  a.forEach(function(c) {
    if (!(c instanceof Ft)) throw new Bn("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (c.loadKind && c.loadKind !== "scalar") throw new Bn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (c.multi) throw new Bn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(c) {
    if (!(c instanceof Ft)) throw new Bn("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var o = Object.create(Ef.prototype);
  return o.implicit = (this.implicit || []).concat(a), o.explicit = (this.explicit || []).concat(i), o.compiledImplicit = pm(o, "implicit"), o.compiledExplicit = pm(o, "explicit"), o.compiledTypeMap = A3(o.compiledImplicit, o.compiledExplicit), o;
};
var C3 = Ef, E3 = new Ft("tag:yaml.org,2002:str", { kind: "scalar", construct: function(t) {
  return t !== null ? t : "";
} }), O3 = new Ft("tag:yaml.org,2002:seq", { kind: "sequence", construct: function(t) {
  return t !== null ? t : [];
} }), z3 = new Ft("tag:yaml.org,2002:map", { kind: "mapping", construct: function(t) {
  return t !== null ? t : {};
} }), D3 = new C3({ explicit: [E3, O3, z3] });
function R3(t) {
  if (t === null) return true;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}
function L3() {
  return null;
}
function U3(t) {
  return t === null;
}
var $3 = new Ft("tag:yaml.org,2002:null", { kind: "scalar", resolve: R3, construct: L3, predicate: U3, represent: { canonical: function() {
  return "~";
}, lowercase: function() {
  return "null";
}, uppercase: function() {
  return "NULL";
}, camelcase: function() {
  return "Null";
}, empty: function() {
  return "";
} }, defaultStyle: "lowercase" });
function H3(t) {
  if (t === null) return false;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}
function q3(t) {
  return t === "true" || t === "True" || t === "TRUE";
}
function V3(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}
var B3 = new Ft("tag:yaml.org,2002:bool", { kind: "scalar", resolve: H3, construct: q3, predicate: V3, represent: { lowercase: function(t) {
  return t ? "true" : "false";
}, uppercase: function(t) {
  return t ? "TRUE" : "FALSE";
}, camelcase: function(t) {
  return t ? "True" : "False";
} }, defaultStyle: "lowercase" });
function Y3(t) {
  return 48 <= t && t <= 57 || 65 <= t && t <= 70 || 97 <= t && t <= 102;
}
function G3(t) {
  return 48 <= t && t <= 55;
}
function Q3(t) {
  return 48 <= t && t <= 57;
}
function X3(t) {
  if (t === null) return false;
  var e = t.length, a = 0, i = false, o;
  if (!e) return false;
  if (o = t[a], (o === "-" || o === "+") && (o = t[++a]), o === "0") {
    if (a + 1 === e) return true;
    if (o = t[++a], o === "b") {
      for (a++; a < e; a++) if (o = t[a], o !== "_") {
        if (o !== "0" && o !== "1") return false;
        i = true;
      }
      return i && o !== "_";
    }
    if (o === "x") {
      for (a++; a < e; a++) if (o = t[a], o !== "_") {
        if (!Y3(t.charCodeAt(a))) return false;
        i = true;
      }
      return i && o !== "_";
    }
    if (o === "o") {
      for (a++; a < e; a++) if (o = t[a], o !== "_") {
        if (!G3(t.charCodeAt(a))) return false;
        i = true;
      }
      return i && o !== "_";
    }
  }
  if (o === "_") return false;
  for (; a < e; a++) if (o = t[a], o !== "_") {
    if (!Q3(t.charCodeAt(a))) return false;
    i = true;
  }
  return !(!i || o === "_");
}
function F3(t) {
  var e = t, a = 1, i;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), i = e[0], (i === "-" || i === "+") && (i === "-" && (a = -1), e = e.slice(1), i = e[0]), e === "0") return 0;
  if (i === "0") {
    if (e[1] === "b") return a * parseInt(e.slice(2), 2);
    if (e[1] === "x") return a * parseInt(e.slice(2), 16);
    if (e[1] === "o") return a * parseInt(e.slice(2), 8);
  }
  return a * parseInt(e, 10);
}
function Z3(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 === 0 && !Ka.isNegativeZero(t);
}
var K3 = new Ft("tag:yaml.org,2002:int", { kind: "scalar", resolve: X3, construct: F3, predicate: Z3, represent: { binary: function(t) {
  return t >= 0 ? "0b" + t.toString(2) : "-0b" + t.toString(2).slice(1);
}, octal: function(t) {
  return t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1);
}, decimal: function(t) {
  return t.toString(10);
}, hexadecimal: function(t) {
  return t >= 0 ? "0x" + t.toString(16).toUpperCase() : "-0x" + t.toString(16).toUpperCase().slice(1);
} }, defaultStyle: "decimal", styleAliases: { binary: [2, "bin"], octal: [8, "oct"], decimal: [10, "dec"], hexadecimal: [16, "hex"] } }), I3 = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function P3(t) {
  return !(t === null || !I3.test(t) || t[t.length - 1] === "_");
}
function W3(t) {
  var e, a;
  return e = t.replace(/_/g, "").toLowerCase(), a = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? a === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : a * parseFloat(e, 10);
}
var J3 = /^[-+]?[0-9]+e/;
function e4(t, e) {
  var a;
  if (isNaN(t)) switch (e) {
    case "lowercase":
      return ".nan";
    case "uppercase":
      return ".NAN";
    case "camelcase":
      return ".NaN";
  }
  else if (Number.POSITIVE_INFINITY === t) switch (e) {
    case "lowercase":
      return ".inf";
    case "uppercase":
      return ".INF";
    case "camelcase":
      return ".Inf";
  }
  else if (Number.NEGATIVE_INFINITY === t) switch (e) {
    case "lowercase":
      return "-.inf";
    case "uppercase":
      return "-.INF";
    case "camelcase":
      return "-.Inf";
  }
  else if (Ka.isNegativeZero(t)) return "-0.0";
  return a = t.toString(10), J3.test(a) ? a.replace("e", ".e") : a;
}
function t4(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 !== 0 || Ka.isNegativeZero(t));
}
var n4 = new Ft("tag:yaml.org,2002:float", { kind: "scalar", resolve: P3, construct: W3, predicate: t4, represent: e4, defaultStyle: "lowercase" }), l4 = D3.extend({ implicit: [$3, B3, K3, n4] }), a4 = l4, ip = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), rp = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function s4(t) {
  return t === null ? false : ip.exec(t) !== null || rp.exec(t) !== null;
}
function i4(t) {
  var e, a, i, o, c, f, u, d = 0, g = null, p, b, v;
  if (e = ip.exec(t), e === null && (e = rp.exec(t)), e === null) throw new Error("Date resolve error");
  if (a = +e[1], i = +e[2] - 1, o = +e[3], !e[4]) return new Date(Date.UTC(a, i, o));
  if (c = +e[4], f = +e[5], u = +e[6], e[7]) {
    for (d = e[7].slice(0, 3); d.length < 3; ) d += "0";
    d = +d;
  }
  return e[9] && (p = +e[10], b = +(e[11] || 0), g = (p * 60 + b) * 6e4, e[9] === "-" && (g = -g)), v = new Date(Date.UTC(a, i, o, c, f, u, d)), g && v.setTime(v.getTime() - g), v;
}
function r4(t) {
  return t.toISOString();
}
var o4 = new Ft("tag:yaml.org,2002:timestamp", { kind: "scalar", resolve: s4, construct: i4, instanceOf: Date, represent: r4 });
function c4(t) {
  return t === "<<" || t === null;
}
var u4 = new Ft("tag:yaml.org,2002:merge", { kind: "scalar", resolve: c4 }), ah = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function f4(t) {
  if (t === null) return false;
  var e, a, i = 0, o = t.length, c = ah;
  for (a = 0; a < o; a++) if (e = c.indexOf(t.charAt(a)), !(e > 64)) {
    if (e < 0) return false;
    i += 6;
  }
  return i % 8 === 0;
}
function h4(t) {
  var e, a, i = t.replace(/[\r\n=]/g, ""), o = i.length, c = ah, f = 0, u = [];
  for (e = 0; e < o; e++) e % 4 === 0 && e && (u.push(f >> 16 & 255), u.push(f >> 8 & 255), u.push(f & 255)), f = f << 6 | c.indexOf(i.charAt(e));
  return a = o % 4 * 6, a === 0 ? (u.push(f >> 16 & 255), u.push(f >> 8 & 255), u.push(f & 255)) : a === 18 ? (u.push(f >> 10 & 255), u.push(f >> 2 & 255)) : a === 12 && u.push(f >> 4 & 255), new Uint8Array(u);
}
function d4(t) {
  var e = "", a = 0, i, o, c = t.length, f = ah;
  for (i = 0; i < c; i++) i % 3 === 0 && i && (e += f[a >> 18 & 63], e += f[a >> 12 & 63], e += f[a >> 6 & 63], e += f[a & 63]), a = (a << 8) + t[i];
  return o = c % 3, o === 0 ? (e += f[a >> 18 & 63], e += f[a >> 12 & 63], e += f[a >> 6 & 63], e += f[a & 63]) : o === 2 ? (e += f[a >> 10 & 63], e += f[a >> 4 & 63], e += f[a << 2 & 63], e += f[64]) : o === 1 && (e += f[a >> 2 & 63], e += f[a << 4 & 63], e += f[64], e += f[64]), e;
}
function m4(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}
var g4 = new Ft("tag:yaml.org,2002:binary", { kind: "scalar", resolve: f4, construct: h4, predicate: m4, represent: d4 }), p4 = Object.prototype.hasOwnProperty, y4 = Object.prototype.toString;
function b4(t) {
  if (t === null) return true;
  var e = [], a, i, o, c, f, u = t;
  for (a = 0, i = u.length; a < i; a += 1) {
    if (o = u[a], f = false, y4.call(o) !== "[object Object]") return false;
    for (c in o) if (p4.call(o, c)) if (!f) f = true;
    else return false;
    if (!f) return false;
    if (e.indexOf(c) === -1) e.push(c);
    else return false;
  }
  return true;
}
function v4(t) {
  return t !== null ? t : [];
}
var x4 = new Ft("tag:yaml.org,2002:omap", { kind: "sequence", resolve: b4, construct: v4 }), S4 = Object.prototype.toString;
function j4(t) {
  if (t === null) return true;
  var e, a, i, o, c, f = t;
  for (c = new Array(f.length), e = 0, a = f.length; e < a; e += 1) {
    if (i = f[e], S4.call(i) !== "[object Object]" || (o = Object.keys(i), o.length !== 1)) return false;
    c[e] = [o[0], i[o[0]]];
  }
  return true;
}
function _4(t) {
  if (t === null) return [];
  var e, a, i, o, c, f = t;
  for (c = new Array(f.length), e = 0, a = f.length; e < a; e += 1) i = f[e], o = Object.keys(i), c[e] = [o[0], i[o[0]]];
  return c;
}
var w4 = new Ft("tag:yaml.org,2002:pairs", { kind: "sequence", resolve: j4, construct: _4 }), N4 = Object.prototype.hasOwnProperty;
function T4(t) {
  if (t === null) return true;
  var e, a = t;
  for (e in a) if (N4.call(a, e) && a[e] !== null) return false;
  return true;
}
function k4(t) {
  return t !== null ? t : {};
}
var M4 = new Ft("tag:yaml.org,2002:set", { kind: "mapping", resolve: T4, construct: k4 }), A4 = a4.extend({ implicit: [o4, u4], explicit: [g4, x4, w4, M4] });
function ym(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "\x85" : t === 95 ? "\xA0" : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
var C4 = new Array(256), E4 = new Array(256);
for (var Os = 0; Os < 256; Os++) C4[Os] = ym(Os) ? 1 : 0, E4[Os] = ym(Os);
var op = Object.prototype.toString, cp = Object.prototype.hasOwnProperty, sh = 65279, O4 = 9, Wi = 10, z4 = 13, D4 = 32, R4 = 33, L4 = 34, Of = 35, U4 = 37, $4 = 38, H4 = 39, q4 = 42, up = 44, V4 = 45, Do = 58, B4 = 61, Y4 = 62, G4 = 63, Q4 = 64, fp = 91, hp = 93, X4 = 96, dp = 123, F4 = 124, mp = 125, It = {};
It[0] = "\\0";
It[7] = "\\a";
It[8] = "\\b";
It[9] = "\\t";
It[10] = "\\n";
It[11] = "\\v";
It[12] = "\\f";
It[13] = "\\r";
It[27] = "\\e";
It[34] = '\\"';
It[92] = "\\\\";
It[133] = "\\N";
It[160] = "\\_";
It[8232] = "\\L";
It[8233] = "\\P";
var Z4 = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"], K4 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function I4(t, e) {
  var a, i, o, c, f, u, d;
  if (e === null) return {};
  for (a = {}, i = Object.keys(e), o = 0, c = i.length; o < c; o += 1) f = i[o], u = String(e[f]), f.slice(0, 2) === "!!" && (f = "tag:yaml.org,2002:" + f.slice(2)), d = t.compiledTypeMap.fallback[f], d && cp.call(d.styleAliases, u) && (u = d.styleAliases[u]), a[f] = u;
  return a;
}
function P4(t) {
  var e, a, i;
  if (e = t.toString(16).toUpperCase(), t <= 255) a = "x", i = 2;
  else if (t <= 65535) a = "u", i = 4;
  else if (t <= 4294967295) a = "U", i = 8;
  else throw new Bn("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + a + Ka.repeat("0", i - e.length) + e;
}
var W4 = 1, Ji = 2;
function J4(t) {
  this.schema = t.schema || A4, this.indent = Math.max(1, t.indent || 2), this.noArrayIndent = t.noArrayIndent || false, this.skipInvalid = t.skipInvalid || false, this.flowLevel = Ka.isNothing(t.flowLevel) ? -1 : t.flowLevel, this.styleMap = I4(this.schema, t.styles || null), this.sortKeys = t.sortKeys || false, this.lineWidth = t.lineWidth || 80, this.noRefs = t.noRefs || false, this.noCompatMode = t.noCompatMode || false, this.condenseFlow = t.condenseFlow || false, this.quotingType = t.quotingType === '"' ? Ji : W4, this.forceQuotes = t.forceQuotes || false, this.replacer = typeof t.replacer == "function" ? t.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function bm(t, e) {
  for (var a = Ka.repeat(" ", e), i = 0, o = -1, c = "", f, u = t.length; i < u; ) o = t.indexOf(`
`, i), o === -1 ? (f = t.slice(i), i = u) : (f = t.slice(i, o + 1), i = o + 1), f.length && f !== `
` && (c += a), c += f;
  return c;
}
function zf(t, e) {
  return `
` + Ka.repeat(" ", t.indent * e);
}
function eS(t, e) {
  var a, i, o;
  for (a = 0, i = t.implicitTypes.length; a < i; a += 1) if (o = t.implicitTypes[a], o.resolve(e)) return true;
  return false;
}
function Ro(t) {
  return t === D4 || t === O4;
}
function er(t) {
  return 32 <= t && t <= 126 || 161 <= t && t <= 55295 && t !== 8232 && t !== 8233 || 57344 <= t && t <= 65533 && t !== sh || 65536 <= t && t <= 1114111;
}
function vm(t) {
  return er(t) && t !== sh && t !== z4 && t !== Wi;
}
function xm(t, e, a) {
  var i = vm(t), o = i && !Ro(t);
  return (a ? i : i && t !== up && t !== fp && t !== hp && t !== dp && t !== mp) && t !== Of && !(e === Do && !o) || vm(e) && !Ro(e) && t === Of || e === Do && o;
}
function tS(t) {
  return er(t) && t !== sh && !Ro(t) && t !== V4 && t !== G4 && t !== Do && t !== up && t !== fp && t !== hp && t !== dp && t !== mp && t !== Of && t !== $4 && t !== q4 && t !== R4 && t !== F4 && t !== B4 && t !== Y4 && t !== H4 && t !== L4 && t !== U4 && t !== Q4 && t !== X4;
}
function nS(t) {
  return !Ro(t) && t !== Do;
}
function Qi(t, e) {
  var a = t.charCodeAt(e), i;
  return a >= 55296 && a <= 56319 && e + 1 < t.length && (i = t.charCodeAt(e + 1), i >= 56320 && i <= 57343) ? (a - 55296) * 1024 + i - 56320 + 65536 : a;
}
function gp(t) {
  var e = /^\n* /;
  return e.test(t);
}
var pp = 1, Df = 2, yp = 3, bp = 4, Rs = 5;
function lS(t, e, a, i, o, c, f, u) {
  var d, g = 0, p = null, b = false, v = false, x = i !== -1, S = -1, j = tS(Qi(t, 0)) && nS(Qi(t, t.length - 1));
  if (e || f) for (d = 0; d < t.length; g >= 65536 ? d += 2 : d++) {
    if (g = Qi(t, d), !er(g)) return Rs;
    j = j && xm(g, p, u), p = g;
  }
  else {
    for (d = 0; d < t.length; g >= 65536 ? d += 2 : d++) {
      if (g = Qi(t, d), g === Wi) b = true, x && (v = v || d - S - 1 > i && t[S + 1] !== " ", S = d);
      else if (!er(g)) return Rs;
      j = j && xm(g, p, u), p = g;
    }
    v = v || x && d - S - 1 > i && t[S + 1] !== " ";
  }
  return !b && !v ? j && !f && !o(t) ? pp : c === Ji ? Rs : Df : a > 9 && gp(t) ? Rs : f ? c === Ji ? Rs : Df : v ? bp : yp;
}
function aS(t, e, a, i, o) {
  t.dump = function() {
    if (e.length === 0) return t.quotingType === Ji ? '""' : "''";
    if (!t.noCompatMode && (Z4.indexOf(e) !== -1 || K4.test(e))) return t.quotingType === Ji ? '"' + e + '"' : "'" + e + "'";
    var c = t.indent * Math.max(1, a), f = t.lineWidth === -1 ? -1 : Math.max(Math.min(t.lineWidth, 40), t.lineWidth - c), u = i || t.flowLevel > -1 && a >= t.flowLevel;
    function d(g) {
      return eS(t, g);
    }
    switch (lS(e, u, t.indent, f, d, t.quotingType, t.forceQuotes && !i, o)) {
      case pp:
        return e;
      case Df:
        return "'" + e.replace(/'/g, "''") + "'";
      case yp:
        return "|" + Sm(e, t.indent) + jm(bm(e, c));
      case bp:
        return ">" + Sm(e, t.indent) + jm(bm(sS(e, f), c));
      case Rs:
        return '"' + iS(e) + '"';
      default:
        throw new Bn("impossible error: invalid scalar style");
    }
  }();
}
function Sm(t, e) {
  var a = gp(t) ? String(e) : "", i = t[t.length - 1] === `
`, o = i && (t[t.length - 2] === `
` || t === `
`), c = o ? "+" : i ? "" : "-";
  return a + c + `
`;
}
function jm(t) {
  return t[t.length - 1] === `
` ? t.slice(0, -1) : t;
}
function sS(t, e) {
  for (var a = /(\n+)([^\n]*)/g, i = function() {
    var g = t.indexOf(`
`);
    return g = g !== -1 ? g : t.length, a.lastIndex = g, _m(t.slice(0, g), e);
  }(), o = t[0] === `
` || t[0] === " ", c, f; f = a.exec(t); ) {
    var u = f[1], d = f[2];
    c = d[0] === " ", i += u + (!o && !c && d !== "" ? `
` : "") + _m(d, e), o = c;
  }
  return i;
}
function _m(t, e) {
  if (t === "" || t[0] === " ") return t;
  for (var a = / [^ ]/g, i, o = 0, c, f = 0, u = 0, d = ""; i = a.exec(t); ) u = i.index, u - o > e && (c = f > o ? f : u, d += `
` + t.slice(o, c), o = c + 1), f = u;
  return d += `
`, t.length - o > e && f > o ? d += t.slice(o, f) + `
` + t.slice(f + 1) : d += t.slice(o), d.slice(1);
}
function iS(t) {
  for (var e = "", a = 0, i, o = 0; o < t.length; a >= 65536 ? o += 2 : o++) a = Qi(t, o), i = It[a], !i && er(a) ? (e += t[o], a >= 65536 && (e += t[o + 1])) : e += i || P4(a);
  return e;
}
function rS(t, e, a) {
  var i = "", o = t.tag, c, f, u;
  for (c = 0, f = a.length; c < f; c += 1) u = a[c], t.replacer && (u = t.replacer.call(a, String(c), u)), (Hl(t, e, u, false, false) || typeof u > "u" && Hl(t, e, null, false, false)) && (i !== "" && (i += "," + (t.condenseFlow ? "" : " ")), i += t.dump);
  t.tag = o, t.dump = "[" + i + "]";
}
function wm(t, e, a, i) {
  var o = "", c = t.tag, f, u, d;
  for (f = 0, u = a.length; f < u; f += 1) d = a[f], t.replacer && (d = t.replacer.call(a, String(f), d)), (Hl(t, e + 1, d, true, true, false, true) || typeof d > "u" && Hl(t, e + 1, null, true, true, false, true)) && ((!i || o !== "") && (o += zf(t, e)), t.dump && Wi === t.dump.charCodeAt(0) ? o += "-" : o += "- ", o += t.dump);
  t.tag = c, t.dump = o || "[]";
}
function oS(t, e, a) {
  var i = "", o = t.tag, c = Object.keys(a), f, u, d, g, p;
  for (f = 0, u = c.length; f < u; f += 1) p = "", i !== "" && (p += ", "), t.condenseFlow && (p += '"'), d = c[f], g = a[d], t.replacer && (g = t.replacer.call(a, d, g)), Hl(t, e, d, false, false) && (t.dump.length > 1024 && (p += "? "), p += t.dump + (t.condenseFlow ? '"' : "") + ":" + (t.condenseFlow ? "" : " "), Hl(t, e, g, false, false) && (p += t.dump, i += p));
  t.tag = o, t.dump = "{" + i + "}";
}
function cS(t, e, a, i) {
  var o = "", c = t.tag, f = Object.keys(a), u, d, g, p, b, v;
  if (t.sortKeys === true) f.sort();
  else if (typeof t.sortKeys == "function") f.sort(t.sortKeys);
  else if (t.sortKeys) throw new Bn("sortKeys must be a boolean or a function");
  for (u = 0, d = f.length; u < d; u += 1) v = "", (!i || o !== "") && (v += zf(t, e)), g = f[u], p = a[g], t.replacer && (p = t.replacer.call(a, g, p)), Hl(t, e + 1, g, true, true, true) && (b = t.tag !== null && t.tag !== "?" || t.dump && t.dump.length > 1024, b && (t.dump && Wi === t.dump.charCodeAt(0) ? v += "?" : v += "? "), v += t.dump, b && (v += zf(t, e)), Hl(t, e + 1, p, true, b) && (t.dump && Wi === t.dump.charCodeAt(0) ? v += ":" : v += ": ", v += t.dump, o += v));
  t.tag = c, t.dump = o || "{}";
}
function Nm(t, e, a) {
  var i, o, c, f, u, d;
  for (o = a ? t.explicitTypes : t.implicitTypes, c = 0, f = o.length; c < f; c += 1) if (u = o[c], (u.instanceOf || u.predicate) && (!u.instanceOf || typeof e == "object" && e instanceof u.instanceOf) && (!u.predicate || u.predicate(e))) {
    if (a ? u.multi && u.representName ? t.tag = u.representName(e) : t.tag = u.tag : t.tag = "?", u.represent) {
      if (d = t.styleMap[u.tag] || u.defaultStyle, op.call(u.represent) === "[object Function]") i = u.represent(e, d);
      else if (cp.call(u.represent, d)) i = u.represent[d](e, d);
      else throw new Bn("!<" + u.tag + '> tag resolver accepts not "' + d + '" style');
      t.dump = i;
    }
    return true;
  }
  return false;
}
function Hl(t, e, a, i, o, c, f) {
  t.tag = null, t.dump = a, Nm(t, a, false) || Nm(t, a, true);
  var u = op.call(t.dump), d = i, g;
  i && (i = t.flowLevel < 0 || t.flowLevel > e);
  var p = u === "[object Object]" || u === "[object Array]", b, v;
  if (p && (b = t.duplicates.indexOf(a), v = b !== -1), (t.tag !== null && t.tag !== "?" || v || t.indent !== 2 && e > 0) && (o = false), v && t.usedDuplicates[b]) t.dump = "*ref_" + b;
  else {
    if (p && v && !t.usedDuplicates[b] && (t.usedDuplicates[b] = true), u === "[object Object]") i && Object.keys(t.dump).length !== 0 ? (cS(t, e, t.dump, o), v && (t.dump = "&ref_" + b + t.dump)) : (oS(t, e, t.dump), v && (t.dump = "&ref_" + b + " " + t.dump));
    else if (u === "[object Array]") i && t.dump.length !== 0 ? (t.noArrayIndent && !f && e > 0 ? wm(t, e - 1, t.dump, o) : wm(t, e, t.dump, o), v && (t.dump = "&ref_" + b + t.dump)) : (rS(t, e, t.dump), v && (t.dump = "&ref_" + b + " " + t.dump));
    else if (u === "[object String]") t.tag !== "?" && aS(t, t.dump, e, c, d);
    else {
      if (u === "[object Undefined]") return false;
      if (t.skipInvalid) return false;
      throw new Bn("unacceptable kind of an object to dump " + u);
    }
    t.tag !== null && t.tag !== "?" && (g = encodeURI(t.tag[0] === "!" ? t.tag.slice(1) : t.tag).replace(/!/g, "%21"), t.tag[0] === "!" ? g = "!" + g : g.slice(0, 18) === "tag:yaml.org,2002:" ? g = "!!" + g.slice(18) : g = "!<" + g + ">", t.dump = g + " " + t.dump);
  }
  return true;
}
function uS(t, e) {
  var a = [], i = [], o, c;
  for (Rf(t, a, i), o = 0, c = i.length; o < c; o += 1) e.duplicates.push(a[i[o]]);
  e.usedDuplicates = new Array(c);
}
function Rf(t, e, a) {
  var i, o, c;
  if (t !== null && typeof t == "object") if (o = e.indexOf(t), o !== -1) a.indexOf(o) === -1 && a.push(o);
  else if (e.push(t), Array.isArray(t)) for (o = 0, c = t.length; o < c; o += 1) Rf(t[o], e, a);
  else for (i = Object.keys(t), o = 0, c = i.length; o < c; o += 1) Rf(t[i[o]], e, a);
}
function fS(t, e) {
  e = e || {};
  var a = new J4(e);
  a.noRefs || uS(t, a);
  var i = t;
  return a.replacer && (i = a.replacer.call({ "": i }, "", i)), Hl(a, 0, i, true, true) ? a.dump + `
` : "";
}
var hS = fS, dS = { dump: hS }, vp = dS.dump;
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const mS = () => {
  const t = F.c(2), e = Ne(it);
  let a;
  return t[0] !== e ? (a = () => {
    const i = vp(e, { indent: 2, noRefs: true, flowLevel: 2, sortKeys: true });
    qo(i, `${e.name}.nm`, "application/micon");
  }, t[0] = e, t[1] = a) : a = t[1], a;
}, gS = () => {
  const t = F.c(2), e = Ne(it);
  let a;
  return t[0] !== e.name ? (a = () => {
    const i = `// Hardware generation is not available in this version
// Project: ${e.name}
// Please use the server-side compiler for hardware generation
`;
    return qo(i, `${e.name}.sv`, "application/verilog");
  }, t[0] = e.name, t[1] = a) : a = t[1], a;
}, pS = () => {
  const t = F.c(2), e = Ne(it);
  let a;
  return t[0] !== e.name ? (a = () => {
    const i = `// Firmware generation is not available in this version
// Project: ${e.name}
// Please use the server-side compiler for firmware generation
`;
    return qo(i, `${e.name}.hpp`, "application/cpp");
  }, t[0] = e.name, t[1] = a) : a = t[1], a;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const yS = (t, e, a) => ({ ...t, elems: t.elems.map((i) => i.name === e ? { ...i, pos: va((i == null ? void 0 : i.pos) ?? [0, 0], a) } : i) }), bS = (t, e, a) => ({ ...t, wires: t.wires.map((i) => i.name === e.wire ? { ...i, path: i.path.map((o, c) => c === e.idx ? va(o, a) : o) } : i) }), vS = () => {
  const t = F.c(5), { commit: e } = wn(), [a, i] = Ee(it), o = Ne(xt);
  let c;
  return t[0] !== e || t[1] !== a || t[2] !== o || t[3] !== i ? (c = (f) => {
    if (!hv(f, [0, 0]) && !ir(o)) {
      console.log("Move", o, f);
      let u = a;
      u = o.elems.reduce((d, g) => yS(d, g, f), u), u = o.paths.reduce((d, g) => bS(d, g, f), u), i(u), e();
    }
  }, t[0] = e, t[1] = a, t[2] = o, t[3] = i, t[4] = c) : c = t[4], c;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const xS = (t, e, a) => {
  const i = e.elems.map((c) => ({ ...c, from: c.name, name: vt(c.name), pos: va(c.pos, a) })), o = e.wires.flatMap((c) => {
    const f = i.find(({ from: d }) => d === c.src.elem), u = i.find(({ from: d }) => d === c.dst.elem);
    return f && u ? [{ ...c, name: jf(), src: { elem: f.name, port: c.src.port }, dst: { elem: u.name, port: c.dst.port }, path: c.path.map((d) => va(d, a)) }] : [];
  });
  return [{ ...t, elems: [...t.elems, ...i.map((c) => ({ ...c, from: void 0 }))], wires: [...t.wires, ...o.map((c) => ({ ...c, bit: void 0 }))] }, { elems: i.map(({ name: c }) => c), wires: o.map(({ name: c }) => c), paths: o.flatMap((c) => c.path.map((f, u) => ({ wire: c.name, idx: u }))) }];
}, SS = (t) => {
  const e = t.elems.map((f) => f.pos), a = e.map((f) => f[0]), i = e.map((f) => f[1]), o = [Math.max(...a), Math.max(...i)], c = [Math.min(...a), Math.min(...i)];
  return dv(o, c);
}, jS = () => {
  const t = F.c(7), { commit: e } = wn(), a = Ne(Pf), i = Ne(sl), [o, c] = Ee(it), f = Zt(xt);
  let u;
  return t[0] !== a || t[1] !== e || t[2] !== i || t[3] !== o || t[4] !== c || t[5] !== f ? (u = () => {
    if (!Cv(a)) {
      console.log("Paste", a, i);
      const d = $l(ar(i, SS(a))), [g, p] = xS(o, a, d);
      c(g), f(p), e();
    }
  }, t[0] = a, t[1] = e, t[2] = i, t[3] = o, t[4] = c, t[5] = f, t[6] = u) : u = t[6], u;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const _S = (t, e, a) => t.elems.find((o) => o.name === a) ? (console.error(`Instance name duplicate: ${a}`), t) : { ...t, elems: t.elems.map((o) => o.name === e ? { ...o, name: a } : o), wires: t.wires.map((o) => ({ ...o, src: o.src.elem === e ? { elem: a, port: o.src.port } : o.src, dst: o.dst.elem === e ? { elem: a, port: o.dst.port } : o.dst })) }, wS = () => {
  const t = F.c(4), [e, a] = Ee(it), { commit: i } = wn();
  let o;
  return t[0] !== i || t[1] !== e || t[2] !== a ? (o = (c, f) => {
    console.log("Rename", c, f), a(_S(e, c, f)), i();
  }, t[0] = i, t[1] = e, t[2] = a, t[3] = o) : o = t[3], o;
}, NS = (t, e, a) => t.elems.find((o) => o.name === a) ? (console.error(`Instance name duplicate: ${a}`), t) : { ...t, wires: t.wires.map((o) => o.name === e ? { ...o, name: a } : o) }, TS = () => {
  const t = F.c(4), [e, a] = Ee(it), { commit: i } = wn();
  let o;
  return t[0] !== i || t[1] !== e || t[2] !== a ? (o = (c, f) => {
    console.log("Rename", c, f), a(NS(e, c, f)), i();
  }, t[0] = i, t[1] = e, t[2] = a, t[3] = o) : o = t[3], o;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const kS = () => {
  const t = F.c(3), e = Ee(it), a = Ne(Bg), i = `https://${a.server.host}:${a.server.port}/run`;
  let o;
  return t[0] !== e || t[1] !== i ? (o = async () => {
    console.log("Run ...");
    const c = await fetch(i, { method: "POST", body: JSON.stringify(e) });
    console.log(c);
  }, t[0] = e, t[1] = i, t[2] = o) : o = t[2], o;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const xp = () => {
  const t = F.c(2), e = Ne(it);
  let a;
  return t[0] !== e ? (a = () => {
    qo(vp(e, { indent: 2, noRefs: true, flowLevel: 2, sortKeys: true }), `${e.name}--${bv(/* @__PURE__ */ new Date())}.yaml`, "application/yaml");
  }, t[0] = e, t[1] = a) : a = t[1], a;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const MS = () => {
  const t = F.c(15), e = Ne(sl), [a, i] = Ee(Kt), o = Jx(), c = tp(), f = Jg(), u = vS();
  let d;
  t[0] !== c || t[1] !== a || t[2] !== e || t[3] !== u || t[4] !== f || t[5] !== i ? (d = (b) => {
    if (a.state === "Selecting" && (f(a.value.start, e), i({ state: "Default", value: void 0 })), a.state === "Moving") {
      b.stopPropagation();
      const v = $l(ar(e, a.value.start));
      setTimeout(() => {
        u(v), i({ state: "Default", value: void 0 });
      });
    }
    a.state === "AddPath" && (c(a.value.wire, a.value.idx, $l(e)), i({ state: "Default", value: void 0 }));
  }, t[0] = c, t[1] = a, t[2] = e, t[3] = u, t[4] = f, t[5] = i, t[6] = d) : d = t[6];
  let g;
  t[7] !== o || t[8] !== a || t[9] !== e || t[10] !== i ? (g = (b) => {
    if (a.state === "AddElem") {
      const v = { ...a.value.elem, pos: $l(e), flip: false };
      o(v), i({ state: "Default", value: void 0 });
    }
    if (a.state === "AddWire") {
      const v = [...a.value.path, $l(e)];
      i({ state: "AddWire", value: { ...a.value, path: v } });
    }
  }, t[7] = o, t[8] = a, t[9] = e, t[10] = i, t[11] = g) : g = t[11];
  let p;
  return t[12] !== d || t[13] !== g ? (p = { onMouseUp: d, onClick: g }, t[12] = d, t[13] = g, t[14] = p) : p = t[14], p;
}, AS = () => {
  const t = F.c(12), e = Ne(sl), [a, i] = Ee(Kt), o = Jg();
  let c;
  t[0] !== a || t[1] !== e || t[2] !== i ? (c = () => {
    a.state === "Default" && i({ state: "Selecting", value: { start: e } });
  }, t[0] = a, t[1] = e, t[2] = i, t[3] = c) : c = t[3];
  let f;
  t[4] !== a || t[5] !== e || t[6] !== o || t[7] !== i ? (f = () => {
    a.state === "Selecting" && (o(a.value.start, e), i({ state: "Default", value: void 0 }));
  }, t[4] = a, t[5] = e, t[6] = o, t[7] = i, t[8] = f) : f = t[8];
  let u;
  return t[9] !== c || t[10] !== f ? (u = { onMouseDown: c, onClick: f }, t[9] = c, t[10] = f, t[11] = u) : u = t[11], u;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const St = (t) => {
  const e = F.c(32), [a, i] = Ee(Kt), o = Ne(sl), [c, f] = Ee(Bo), u = Zt(Yo), d = Ig(), g = Yx(), p = wS(), b = o3(), v = Zx(t.name);
  let x;
  e[0] !== t.name || e[1] !== d ? (x = () => d(t.name), e[0] = t.name, e[1] = d, e[2] = x) : x = e[2];
  const S = x;
  let j;
  e[3] !== g || e[4] !== t.name ? (j = () => g(t.name), e[3] = g, e[4] = t.name, e[5] = j) : j = e[5];
  const w = j;
  let N;
  e[6] !== t.name || e[7] !== p ? (N = (J) => p(t.name, J), e[6] = t.name, e[7] = p, e[8] = N) : N = e[8];
  const k = N;
  let M;
  e[9] !== b || e[10] !== t.name ? (M = (J) => b(t.name, J), e[9] = b, e[10] = t.name, e[11] = M) : M = e[11];
  const C = M;
  let E;
  e[12] !== w || e[13] !== a || e[14] !== o || e[15] !== S || e[16] !== v || e[17] !== i ? (E = (J) => {
    a.state === "Default" && (v || (J.ctrlKey ? w() : S()), i({ state: "Moving", value: { start: o } }));
  }, e[12] = w, e[13] = a, e[14] = o, e[15] = S, e[16] = v, e[17] = i, e[18] = E) : E = e[18];
  const L = E, A = CS;
  let z;
  e[19] !== c || e[20] !== t.name || e[21] !== u || e[22] !== f ? (z = () => {
    const J = c.findIndex((W) => W.id === t.name);
    if (J === -1) {
      const W = { type: "elem", id: t.name, name: t.name, objectType: "elem" };
      f([...c, W]), u(c.length);
    } else u(J);
  }, e[19] = c, e[20] = t.name, e[21] = u, e[22] = f, e[23] = z) : z = e[23];
  const q = z;
  let B;
  return e[24] !== w || e[25] !== C || e[26] !== q || e[27] !== L || e[28] !== k || e[29] !== S || e[30] !== v ? (B = { selected: v, select: S, append: w, rename: k, edit: C, onMouseDown: L, onClick: A, onDoubleClick: q }, e[24] = w, e[25] = C, e[26] = q, e[27] = L, e[28] = k, e[29] = S, e[30] = v, e[31] = B) : B = e[31], B;
};
function CS() {
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const ES = () => {
  const t = F.c(23), e = Zt(Kt), a = Zt(Wf), i = xp(), { undo: o, redo: c } = wn(), f = Cx(), u = jS(), d = lp(), g = np(), p = Ux(), b = kS(), v = pS(), x = gS(), S = mS();
  let j, w, N;
  t[0] !== a ? (j = () => a("proj"), w = () => a("mod"), N = () => a("prim"), t[0] = a, t[1] = j, t[2] = w, t[3] = N) : (j = t[1], w = t[2], N = t[3]);
  let k;
  t[4] !== p || t[5] !== f || t[6] !== g || t[7] !== i || t[8] !== d || t[9] !== v || t[10] !== x || t[11] !== u || t[12] !== S || t[13] !== c || t[14] !== b || t[15] !== j || t[16] !== w || t[17] !== N || t[18] !== o ? (k = { s: i, z: o, y: c, c: f, v: u, f: d, d: g, a: p, r: b, p: S, o: x, i: v, 1: j, 2: w, 3: N }, t[4] = p, t[5] = f, t[6] = g, t[7] = i, t[8] = d, t[9] = v, t[10] = x, t[11] = u, t[12] = S, t[13] = c, t[14] = b, t[15] = j, t[16] = w, t[17] = N, t[18] = o, t[19] = k) : k = t[19];
  const M = k;
  let C;
  return t[20] !== M || t[21] !== e ? (C = (E) => {
    E.key === "Escape" && e({ state: "Default", value: void 0 }), E.ctrlKey && M[E.key] && (E.preventDefault(), M[E.key]());
  }, t[20] = M, t[21] = e, t[22] = C) : C = t[22], C;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Sp = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/compiler.ts/compilerTasksState", Se([{ name: "Task 1", cmd: "echo 'Running Task 1'" }, { name: "Task 2", cmd: "echo 'Running Task 2'" }, { name: "Task 3", cmd: "echo 'Running Task 3'" }]));
Sp.debugLabel = "compilerTasksState";
const jp = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/compiler.ts/compilerStatesState", Se(["completed", "running", "idle"]));
jp.debugLabel = "compilerStatesState";
const _p = globalThis.jotaiAtomCache.get("/home/turing/NextMicon/NextMiconWeb/web/src/state/compiler.ts/compilerLogState", Se([["aa", "bb"], ["cc"], []]));
_p.debugLabel = "compilerLogState";
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const OS = () => {
  const t = F.c(15), e = Ne(Sp), a = Ne(jp), i = Ne(_p);
  let o;
  t[0] !== e ? (o = (b) => {
    console.log(`Running task: ${e[b].name}`);
  }, t[0] = e, t[1] = o) : o = t[1];
  const c = o;
  let f;
  t[2] !== e ? (f = (b) => {
    console.log(`Stopping task: ${e[b].name}`);
  }, t[2] = e, t[3] = f) : f = t[3];
  const u = f;
  let d;
  if (t[4] !== i || t[5] !== a || t[6] !== e) {
    let b;
    t[8] !== i || t[9] !== a ? (b = (v, x) => ({ name: v.name, cmd: v.cmd, state: a[x] || "idle", logs: i[x] || [] }), t[8] = i, t[9] = a, t[10] = b) : b = t[10], d = e.map(b), t[4] = i, t[5] = a, t[6] = e, t[7] = d;
  } else d = t[7];
  const g = d;
  let p;
  return t[11] !== c || t[12] !== u || t[13] !== g ? (p = { run: c, stop: u, tasks: g }, t[11] = c, t[12] = u, t[13] = g, t[14] = p) : p = t[14], p;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const wp = (t) => {
  const e = F.c(24), a = Ne(Kt), i = Dx(), o = Gx(), c = TS(), f = tp(), u = Kx(t);
  let d;
  e[0] !== i || e[1] !== t ? (d = () => i(t), e[0] = i, e[1] = t, e[2] = d) : d = e[2];
  const g = d;
  let p;
  e[3] !== o || e[4] !== t ? (p = () => o(t), e[3] = o, e[4] = t, e[5] = p) : p = e[5];
  const b = p;
  let v;
  e[6] !== c || e[7] !== t ? (v = (C) => c(t, C), e[6] = c, e[7] = t, e[8] = v) : v = e[8];
  const x = v;
  let S;
  e[9] !== f || e[10] !== t ? (S = (C, E) => f(t, C, E), e[9] = f, e[10] = t, e[11] = S) : S = e[11];
  const j = S;
  let w;
  e[12] !== b || e[13] !== a || e[14] !== g || e[15] !== u ? (w = (C) => {
    a.state === "Default" && (u || (C.ctrlKey ? b() : g()));
  }, e[12] = b, e[13] = a, e[14] = g, e[15] = u, e[16] = w) : w = e[16];
  const N = w, k = DS;
  let M;
  return e[17] !== j || e[18] !== b || e[19] !== N || e[20] !== x || e[21] !== g || e[22] !== u ? (M = { selected: u, select: g, append: b, rename: x, addPath: j, onMouseDown: N, onClick: k }, e[17] = j, e[18] = b, e[19] = N, e[20] = x, e[21] = g, e[22] = u, e[23] = M) : M = e[23], M;
}, zS = (t) => {
  const e = F.c(16), [a, i] = Ee(Kt), o = Ne(sl), c = Rx(), f = Qx(), u = Ix(t);
  let d;
  e[0] !== t || e[1] !== c ? (d = () => c(t), e[0] = t, e[1] = c, e[2] = d) : d = e[2];
  const g = d;
  let p;
  e[3] !== f || e[4] !== t ? (p = () => f(t), e[3] = f, e[4] = t, e[5] = p) : p = e[5];
  const b = p;
  let v;
  e[6] !== b || e[7] !== a || e[8] !== o || e[9] !== g || e[10] !== u || e[11] !== i ? (v = (w) => {
    a.state === "Default" && (u || (w.ctrlKey ? b() : g()), i({ state: "Moving", value: { start: o } }));
  }, e[6] = b, e[7] = a, e[8] = o, e[9] = g, e[10] = u, e[11] = i, e[12] = v) : v = e[12];
  const x = v, S = RS;
  let j;
  return e[13] !== x || e[14] !== u ? (j = { selected: u, onMouseDown: x, onClick: S }, e[13] = x, e[14] = u, e[15] = j) : j = e[15], j;
};
function DS() {
}
function RS() {
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Np = () => {
  const t = F.c(5), [, e] = Ho();
  let a;
  t[0] !== e ? (a = () => {
    const f = document.createElement("input");
    f.type = "file", f.click(), f.addEventListener("change", () => {
      const u = f.files;
      if (u && u.length > 0) {
        const d = u[0], g = new FileReader();
        g.onload = (p) => {
          var _a6;
          ((_a6 = p.target) == null ? void 0 : _a6.result) && e("/edit/default");
        }, d && g.readAsText(d);
      }
    }, { once: true });
  }, t[0] = e, t[1] = a) : a = t[1];
  const i = a;
  let o;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (o = ["test0", "test1", "test2"], t[2] = o) : o = t[2];
  let c;
  return t[3] !== i ? (c = { status: "connected", projs: o, upload: i }, t[3] = i, t[4] = c) : c = t[4], c;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const LS = () => {
  const t = F.c(5), e = Ne(Qo);
  let a, i;
  t[0] !== e ? (a = () => {
    const c = document.documentElement;
    e ? c.classList.add("dark") : c.classList.remove("dark");
  }, i = [e], t[0] = e, t[1] = a, t[2] = i) : (a = t[1], i = t[2]), $.useLayoutEffect(a, i);
  let o;
  return t[3] !== e ? (o = { dark: e }, t[3] = e, t[4] = o) : o = t[4], o;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const US = () => ({ modules: [{ name: "ALU", description: "Arithmetic Logic Unit", type: "Core", status: "Active" }, { name: "Memory", description: "Memory Controller", type: "Storage", status: "Active" }, { name: "UART", description: "Universal Asynchronous Receiver-Transmitter", type: "IO", status: "Active" }, { name: "SPI", description: "Serial Peripheral Interface", type: "IO", status: "Beta" }, { name: "Timer", description: "Programmable Timer Module", type: "Control", status: "Active" }] });
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const $S = () => {
  const t = F.c(6), [e] = Ee($g), { data: a, isLoading: i, isError: o, error: c, refetch: f } = e;
  let u;
  return t[0] !== a || t[1] !== c || t[2] !== o || t[3] !== i || t[4] !== f ? (u = { tree: a, isLoading: i, isError: o, error: c, refetch: f }, t[0] = a, t[1] = c, t[2] = o, t[3] = i, t[4] = f, t[5] = u) : u = t[5], u;
}, HS = (t) => {
  const e = F.c(8);
  let a, i;
  e[0] !== t ? (i = ax(t), e[0] = t, e[1] = i) : i = e[1], a = i;
  const o = a, [c] = Ee(o), { data: f, isLoading: u, isError: d, error: g, refetch: p } = c;
  let b;
  return e[2] !== f || e[3] !== g || e[4] !== d || e[5] !== u || e[6] !== p ? (b = { content: f, isLoading: u, isError: d, error: g, refetch: p }, e[2] = f, e[3] = g, e[4] = d, e[5] = u, e[6] = p, e[7] = b) : b = e[7], b;
}, qS = () => {
  const [t, e] = $.useState({ isPending: false, error: null }), [a, i] = $.useState({ isPending: false, error: null }), [o, c] = $.useState({ isPending: false, error: null }), [f, u] = $.useState({ isPending: false, error: null }), d = $.useCallback(async (v, x) => {
    e({ isPending: true, error: null });
    try {
      const S = await fetch(`/api/files/${v}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: x }) });
      if (!S.ok) throw new Error(`Failed to write file: ${S.statusText}`);
      const j = await S.json();
      return e({ isPending: false, error: null }), j;
    } catch (S) {
      const j = S instanceof Error ? S : new Error("Unknown error");
      throw e({ isPending: false, error: j }), j;
    }
  }, []), g = $.useCallback(async (v, x) => {
    i({ isPending: true, error: null });
    try {
      const S = await fetch(`/api/files/${v}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: x || "" }) });
      if (!S.ok) throw new Error(`Failed to create file: ${S.statusText}`);
      const j = await S.json();
      return i({ isPending: false, error: null }), j;
    } catch (S) {
      const j = S instanceof Error ? S : new Error("Unknown error");
      throw i({ isPending: false, error: j }), j;
    }
  }, []), p = $.useCallback(async (v) => {
    c({ isPending: true, error: null });
    try {
      const x = await fetch(`/api/files/${v}`, { method: "DELETE" });
      if (!x.ok) throw new Error(`Failed to delete: ${x.statusText}`);
      const S = await x.json();
      return c({ isPending: false, error: null }), S;
    } catch (x) {
      const S = x instanceof Error ? x : new Error("Unknown error");
      throw c({ isPending: false, error: S }), S;
    }
  }, []), b = $.useCallback(async (v) => {
    u({ isPending: true, error: null });
    try {
      const x = await fetch(`/api/files/${v}/`, { method: "PUT", headers: { "Content-Type": "application/json" } });
      if (!x.ok) throw new Error(`Failed to create directory: ${x.statusText}`);
      const S = await x.json();
      return u({ isPending: false, error: null }), S;
    } catch (x) {
      const S = x instanceof Error ? x : new Error("Unknown error");
      throw u({ isPending: false, error: S }), S;
    }
  }, []);
  return { writeFile: d, createFile: g, deleteFile: p, createDirectory: b, isWriting: t.isPending, isCreating: a.isPending, isDeleting: o.isPending, isCreatingDirectory: f.isPending, writeError: t.error, createError: a.error, deleteError: o.error, createDirectoryError: f.error };
}, Tp = () => {
  const t = F.c(16), [e, a] = Ee(Lg), [i, o] = Ee(Ug);
  let c;
  t[0] !== o || t[1] !== a ? (c = (v) => {
    a(v), o((x) => x.includes(v) ? x : [...x, v]);
  }, t[0] = o, t[1] = a, t[2] = c) : c = t[2];
  const f = c;
  let u;
  t[3] !== i || t[4] !== o || t[5] !== a ? (u = (v) => {
    o((x) => x.filter((S) => S !== v)), a((x) => {
      if (x === v) {
        const S = i.filter((j) => j !== v);
        return S.length > 0 ? S[S.length - 1] : null;
      }
      return x;
    });
  }, t[3] = i, t[4] = o, t[5] = a, t[6] = u) : u = t[6];
  const d = u;
  let g;
  t[7] !== i || t[8] !== a ? (g = (v) => {
    i.includes(v) && a(v);
  }, t[7] = i, t[8] = a, t[9] = g) : g = t[9];
  const p = g;
  let b;
  return t[10] !== d || t[11] !== f || t[12] !== i || t[13] !== p || t[14] !== e ? (b = { selectedPath: e, openedFiles: i, openFile: f, closeFile: d, selectFile: p }, t[10] = d, t[11] = f, t[12] = i, t[13] = p, t[14] = e, t[15] = b) : b = t[15], b;
}, VS = () => {
  const t = F.c(14), { writeFile: e, createFile: a, deleteFile: i, createDirectory: o } = qS(), { openFile: c } = Tp();
  let f;
  t[0] !== e ? (f = async (j, w) => {
    try {
      return await e(j, w), { success: true };
    } catch (N) {
      const k = N;
      return console.error("Failed to save file:", k), { success: false, error: k };
    }
  }, t[0] = e, t[1] = f) : f = t[1];
  const u = f;
  let d;
  t[2] !== a || t[3] !== c ? (d = async (j, w, N) => {
    const k = N === void 0 ? true : N;
    try {
      return await a(j, w), k && c(j), { success: true };
    } catch (M) {
      const C = M;
      return console.error("Failed to create file:", C), { success: false, error: C };
    }
  }, t[2] = a, t[3] = c, t[4] = d) : d = t[4];
  const g = d;
  let p;
  t[5] !== i ? (p = async (j) => {
    try {
      return await i(j), { success: true };
    } catch (w) {
      const N = w;
      return console.error("Failed to delete file:", N), { success: false, error: N };
    }
  }, t[5] = i, t[6] = p) : p = t[6];
  const b = p;
  let v;
  t[7] !== o ? (v = async (j) => {
    try {
      return await o(j), { success: true };
    } catch (w) {
      const N = w;
      return console.error("Failed to create directory:", N), { success: false, error: N };
    }
  }, t[7] = o, t[8] = v) : v = t[8];
  const x = v;
  let S;
  return t[9] !== x || t[10] !== g || t[11] !== b || t[12] !== u ? (S = { saveFile: u, createNewFile: g, removeFile: b, createNewDirectory: x }, t[9] = x, t[10] = g, t[11] = b, t[12] = u, t[13] = S) : S = t[13], S;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const kp = (t) => t.map((e) => Array.isArray(e) && e.length === 2 && Array.isArray(e[1]) ? [e[0], kp(e[1])] : Array.isArray(e) && e.length === 1 ? [e[0], null] : [String(e), null]), BS = (t) => {
  const [e, a] = $.useState(/* @__PURE__ */ new Map()), [i, o] = $.useState(null), { tree: c, isLoading: f, error: u, refetch: d } = $S(), { content: g, isLoading: p, error: b, refetch: v } = HS(t || ""), { saveFile: x, createNewFile: S, removeFile: j, createNewDirectory: w } = VS(), { openedFiles: N, openFile: k, closeFile: M } = Tp(), C = $.useMemo(() => c ? kp(c) : [], [c]), E = $.useCallback((K, R) => {
    if (R.length === 0) return null;
    for (const G of K) {
      const [ne, ue] = G;
      if (ne === R[0]) {
        if (R.length === 1) return G;
        if (Array.isArray(ue)) return E(ue, R.slice(1));
      }
    }
    return null;
  }, []), L = $.useCallback(async (K) => {
    try {
      const R = E(C, K.split("/").filter(Boolean));
      return R && Array.isArray(R[1]) ? R[1] : [];
    } catch (R) {
      return console.error(`Error loading directory ${K}:`, R), [];
    }
  }, [C, E]), A = $.useCallback(async (K) => {
    if (K) {
      if (e.has(K)) {
        k(K);
        return;
      }
      k(K);
    }
  }, [e, k]);
  $.useEffect(() => {
    t && g !== void 0 && a((K) => {
      const R = new Map(K);
      return R.set(t, g), R;
    });
  }, [t, g]);
  const z = $.useCallback(async (K) => {
    if (t) {
      o(null);
      try {
        const R = await x(t, K);
        if (!R.success) throw R.error || new Error("Failed to save file");
        a((G) => {
          const ne = new Map(G);
          return ne.set(t, K), ne;
        }), await v();
      } catch (R) {
        throw o(R instanceof Error ? R.message : "Failed to save file"), R;
      }
    }
  }, [t, x, v]), q = $.useCallback(async (K) => {
    o(null);
    try {
      const R = await S(K, "", true);
      if (!R.success) throw R.error || new Error("Failed to create file");
      a((G) => {
        const ne = new Map(G);
        return ne.set(K, ""), ne;
      }), await d();
    } catch (R) {
      throw o(R instanceof Error ? R.message : "Failed to create file"), R;
    }
  }, [S, d]), B = $.useCallback(async (K) => {
    o(null);
    try {
      const R = await j(K);
      if (!R.success) throw R.error || new Error("Failed to delete file");
      a((G) => {
        const ne = new Map(G);
        return ne.delete(K), ne;
      }), N.includes(K) && M(K), await d();
    } catch (R) {
      throw o(R instanceof Error ? R.message : "Failed to delete file"), R;
    }
  }, [j, d, N, M]), J = $.useCallback(async () => {
    o(null), await d(), t && await v();
  }, [d, t, v]), W = f || p, oe = i || (u == null ? void 0 : u.message) || (b == null ? void 0 : b.message) || null, ae = t ? e.get(t) ?? g ?? null : null;
  return { tree: C, content: ae, files: e, open: A, write: z, create: q, remove: B, refresh: J, loading: W, error: oe, loadDirectory: L, createDirectory: async (K) => {
    const R = await w(K);
    return R.success && await d(), R;
  } };
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
function Mp(t) {
  var e, a, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (a = Mp(t[e])) && (i && (i += " "), i += a);
  } else for (a in t) t[a] && (i && (i += " "), i += a);
  return i;
}
function Q() {
  for (var t, e, a = 0, i = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (e = Mp(t)) && (i && (i += " "), i += e);
  return i;
}
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const YS = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), GS = (t) => t.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, a, i) => i ? i.toUpperCase() : a.toLowerCase()), Tm = (t) => {
  const e = GS(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ap = (...t) => t.filter((e, a, i) => !!e && e.trim() !== "" && i.indexOf(e) === a).join(" ").trim(), QS = (t) => {
  for (const e in t) if (e.startsWith("aria-") || e === "role" || e === "title") return true;
};
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var XS = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const FS = $.forwardRef(({ color: t = "currentColor", size: e = 24, strokeWidth: a = 2, absoluteStrokeWidth: i, className: o = "", children: c, iconNode: f, ...u }, d) => $.createElement("svg", { ref: d, ...XS, width: e, height: e, stroke: t, strokeWidth: i ? Number(a) * 24 / Number(e) : a, className: Ap("lucide", o), ...!c && !QS(u) && { "aria-hidden": "true" }, ...u }, [...f.map(([g, p]) => $.createElement(g, p)), ...Array.isArray(c) ? c : [c]]));
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const je = (t, e) => {
  const a = $.forwardRef(({ className: i, ...o }, c) => $.createElement(FS, { ref: c, iconNode: e, className: Ap(`lucide-${YS(Tm(t))}`, `lucide-${t}`, i), ...o }));
  return a.displayName = Tm(t), a;
};
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ZS = [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]], KS = je("activity", ZS);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const IS = [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]], Cp = je("arrow-left", IS);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const PS = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]], Ep = je("arrow-right", PS);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const WS = [["path", { d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z", key: "trhst0" }], ["path", { d: "M17 21v-2", key: "ds4u3f" }], ["path", { d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10", key: "1mo9zo" }], ["path", { d: "M21 21v-2", key: "eo0ou" }], ["path", { d: "M3 5V3", key: "1k5hjh" }], ["path", { d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z", key: "1dd30t" }], ["path", { d: "M7 5V3", key: "1t1388" }]], JS = je("cable", WS);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ej = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ih = je("chevron-down", ej);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const tj = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Xo = je("chevron-right", tj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const nj = [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]], lj = je("circle-check-big", nj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const aj = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], Lf = je("circle-question-mark", aj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const sj = [["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }], ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]], Op = je("code", sj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ij = [["path", { d: "M12 15V3", key: "m9g1x1" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]], rj = je("download", ij);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const oj = [["path", { d: "M10 12.5 8 15l2 2.5", key: "1tg20x" }], ["path", { d: "m14 12.5 2 2.5-2 2.5", key: "yinavb" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z", key: "1mlx9k" }]], cj = je("file-code", oj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const uj = [["path", { d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5", key: "1couwa" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z", key: "1y4qbx" }]], zp = je("file-pen", uj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fj = [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M9 15h6", key: "cctwl0" }], ["path", { d: "M12 18v-6", key: "17g6i2" }]], hj = je("file-plus", fj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const dj = [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]], mj = je("file-text", dj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gj = [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]], Dp = je("file", gj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pj = [["path", { d: "M15 2a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 21 8v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z", key: "1vo8kb" }], ["path", { d: "M15 2v4a2 2 0 0 0 2 2h4", key: "sud9ri" }], ["path", { d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1", key: "l4dndm" }]], yj = je("files", pj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bj = [["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3", key: "1i73f7" }], ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3", key: "saxlbk" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "M12 14v2", key: "8jcxud" }], ["path", { d: "M12 8v2", key: "1woqiv" }], ["path", { d: "M12 2v2", key: "tus03m" }]], vj = je("flip-horizontal", bj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xj = [["path", { d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2", key: "usdka0" }]], Rp = je("folder-open", xj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sj = [["path", { d: "M12 10v6", key: "1bos4e" }], ["path", { d: "M9 13h6", key: "1uhe8q" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }]], jj = je("folder-plus", Sj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _j = [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }]], wj = je("folder", _j);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nj = [["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }], ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }], ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }]], Tj = je("git-commit-horizontal", Nj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kj = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["path", { d: "M3 15h18", key: "5xshup" }], ["path", { d: "M9 3v18", key: "fh3hqa" }], ["path", { d: "M15 3v18", key: "14nvp0" }]], Lp = je("grid-3x3", kj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Mj = [["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }], ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }], ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }], ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]], Us = je("hash", Mj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Aj = [["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "1d0kgt" }]], Cj = je("house", Aj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ej = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]], rh = je("info", Ej);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Oj = [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]], Uf = je("layers", Oj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const zj = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Up = je("loader-circle", zj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Dj = [["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }], ["path", { d: "M15 12H3", key: "6jk70r" }], ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]], Rj = je("log-in", Dj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Lj = [["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }], ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }], ["path", { d: "m20 22-5-5", key: "1m27yz" }]], $f = je("merge", Lj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Uj = [["path", { d: "M5 12h14", key: "1ays0h" }]], $j = je("minus", Uj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hj = [["path", { d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z", key: "1a0edw" }], ["path", { d: "M12 22V12", key: "d0xqtd" }], ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }], ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]], $p = je("package", Hj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qj = [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }]], Vj = je("pen", qj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bj = [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]], oh = je("play", Bj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Yj = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]], gl = je("plus", Yj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gj = [["path", { d: "M12 2v10", key: "mnfbl" }], ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]], Qj = je("power", Gj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Xj = [["path", { d: "M21 7v6h-6", key: "3ptur4" }], ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]], Fj = je("redo", Xj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Zj = [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]], Kj = je("refresh-cw", Zj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ij = [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }]], Hf = je("rotate-ccw", Ij);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pj = [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", key: "1c8476" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]], Wj = je("save", Pj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Jj = [["path", { d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915", key: "1i5ecw" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], xa = je("settings", Jj);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const e_ = [["line", { x1: "4", x2: "4", y1: "21", y2: "14", key: "1p332r" }], ["line", { x1: "4", x2: "4", y1: "10", y2: "3", key: "gb41h5" }], ["line", { x1: "12", x2: "12", y1: "21", y2: "12", key: "hf2csr" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "3", key: "1kfi7u" }], ["line", { x1: "20", x2: "20", y1: "21", y2: "16", key: "1lhrwl" }], ["line", { x1: "20", x2: "20", y1: "12", y2: "3", key: "16vvfq" }], ["line", { x1: "2", x2: "6", y1: "14", y2: "14", key: "1uebub" }], ["line", { x1: "10", x2: "14", y1: "8", y2: "8", key: "1yglbp" }], ["line", { x1: "18", x2: "22", y1: "16", y2: "16", key: "1jxqpz" }]], t_ = je("sliders-vertical", e_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const n_ = [["path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", key: "1s2grr" }], ["path", { d: "M20 2v4", key: "1rf3ol" }], ["path", { d: "M22 4h-4", key: "gwowj6" }], ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]], l_ = je("sparkles", n_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const a_ = [["path", { d: "M16 3h5v5", key: "1806ms" }], ["path", { d: "M8 3H3v5", key: "15dfkv" }], ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3", key: "1qrqzj" }], ["path", { d: "m15 9 6-6", key: "ko1vev" }]], qf = je("split", a_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const s_ = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]], Hp = je("square", s_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const i_ = [["path", { d: "M12 19h8", key: "baeox8" }], ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]], r_ = je("terminal", i_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const o_ = [["circle", { cx: "9", cy: "12", r: "3", key: "u3jwor" }], ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]], c_ = je("toggle-left", o_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const u_ = [["circle", { cx: "15", cy: "12", r: "3", key: "1afu0r" }], ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]], f_ = je("toggle-right", u_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const h_ = [["path", { d: "M10 11v6", key: "nco0om" }], ["path", { d: "M14 11v6", key: "outv1u" }], ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }], ["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]], ch = je("trash-2", h_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const d_ = [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", key: "wmoenq" }], ["path", { d: "M12 9v4", key: "juzpu7" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], qp = je("triangle-alert", d_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const m_ = [["path", { d: "M3 7v6h6", key: "1v2h90" }], ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]], g_ = je("undo", m_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const p_ = [["path", { d: "M12 3v12", key: "1x0j5s" }], ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]], y_ = je("upload", p_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const b_ = [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }], ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }], ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }], ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }], ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]], Vp = je("wifi-off", b_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const v_ = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], x_ = je("x", v_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const S_ = [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }], ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }], ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]], j_ = je("zoom-in", S_);
/**
* @license lucide-react v0.536.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const __ = [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }], ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]], w_ = je("zoom-out", __);
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const uh = (t) => {
  const e = F.c(9), { children: a, className: i } = t, o = i === void 0 ? "" : i, c = $.useRef(null);
  let f;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (f = () => {
    if (!c.current) return;
    const v = c.current, x = v.querySelector('[data-tab-active="true"]');
    if (x) {
      const S = v.getBoundingClientRect(), j = x.getBoundingClientRect();
      j.left < S.left ? v.scrollLeft = v.scrollLeft - (S.left - j.left + 10) : j.right > S.right && (v.scrollLeft = v.scrollLeft + (j.right - S.right + 10));
    }
  }, e[0] = f) : f = e[0], $.useEffect(f);
  let u, d;
  e[1] === Symbol.for("react.memo_cache_sentinel") ? (u = () => {
    const v = c.current;
    if (!v) return;
    const x = (S) => {
      Math.abs(S.deltaY) > Math.abs(S.deltaX) && (S.preventDefault(), v.scrollLeft = v.scrollLeft + S.deltaY);
    };
    return v.addEventListener("wheel", x, { passive: false }), () => {
      v.removeEventListener("wheel", x);
    };
  }, d = [], e[1] = u, e[2] = d) : (u = e[1], d = e[2]), $.useEffect(u, d);
  let g;
  e[3] !== o ? (g = Q(o, "flex items-stretch overflow-x-auto", "bg-gray-300 dark:bg-gray-950", "border-b border-gray-200 dark:border-gray-800"), e[3] = o, e[4] = g) : g = e[4];
  let p;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (p = { scrollBehavior: "smooth" }, e[5] = p) : p = e[5];
  let b;
  return e[6] !== a || e[7] !== g ? (b = m.jsx("div", { className: g, ref: c, style: p, children: a }), e[6] = a, e[7] = g, e[8] = b) : b = e[8], b;
}, ga = (t) => {
  const e = F.c(16), { name: a, icon: i, isActive: o, onClick: c, onDoubleClick: f, onClose: u } = t, d = o ? "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100" : "bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900";
  let g;
  e[0] !== d ? (g = Q("relative flex items-center justify-center gap-2 px-3 cursor-pointer", "transition-all duration-150 min-w-0 flex-shrink-0", d), e[0] = d, e[1] = g) : g = e[1];
  let p;
  e[2] !== i ? (p = i && m.jsx("div", { className: "flex-shrink-0", children: i }), e[2] = i, e[3] = p) : p = e[3];
  let b;
  e[4] !== a ? (b = m.jsx("span", { className: "text-sm font-medium truncate min-w-0", children: a }), e[4] = a, e[5] = b) : b = e[5];
  let v;
  e[6] !== u ? (v = u && m.jsx("button", { onClick: (S) => {
    S.stopPropagation(), u();
  }, className: "flex-shrink-0 w-4 h-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 opacity-60 hover:opacity-100 transition-all cursor-pointer", children: m.jsx("svg", { viewBox: "0 0 16 16", className: "w-full h-full", children: m.jsx("path", { fill: "currentColor", d: "M12.854 4.854a.5.5 0 0 0-.708-.708L8 8.293 3.854 4.146a.5.5 0 1 0-.708.708L7.293 9l-4.147 4.146a.5.5 0 0 0 .708.708L8 9.707l4.146 4.147a.5.5 0 0 0 .708-.708L8.707 9l4.147-4.146z" }) }) }), e[6] = u, e[7] = v) : v = e[7];
  let x;
  return e[8] !== o || e[9] !== c || e[10] !== f || e[11] !== g || e[12] !== p || e[13] !== b || e[14] !== v ? (x = m.jsxs("div", { className: g, onClick: c, onDoubleClick: f, "data-tab-active": o, children: [p, b, v] }), e[8] = o, e[9] = c, e[10] = f, e[11] = g, e[12] = p, e[13] = b, e[14] = v, e[15] = x) : x = e[15], x;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Ia = (t) => {
  const e = F.c(14), { path: a } = t, [, i] = Ho();
  let o;
  e[0] !== i ? (o = () => i("/"), e[0] = i, e[1] = o) : o = e[1];
  let c, f;
  e[2] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsx(Cj, { className: "h-4 w-4 mx-1" }), f = m.jsx("div", { children: "Home" }), e[2] = c, e[3] = f) : (c = e[2], f = e[3]);
  let u;
  e[4] !== o ? (u = m.jsxs("div", { className: "flex items-center hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors", onClick: o, children: [c, f] }), e[4] = o, e[5] = u) : u = e[5];
  let d;
  if (e[6] !== a || e[7] !== i) {
    let p;
    e[9] !== i ? (p = (b, v, x) => {
      const [S, j] = b, { length: w } = x;
      return m.jsxs("div", { className: "flex items-center", children: [m.jsx(Xo, { className: "h-4 w-4 mx-1 text-gray-500" }), m.jsx("div", { className: Q("cursor-pointer transition-colors", v === w - 1 ? "font-bold text-gray-900 dark:text-gray-100" : "hover:text-blue-600 dark:hover:text-blue-400"), onClick: () => j && i(j), children: S })] }, v);
    }, e[9] = i, e[10] = p) : p = e[10], d = a.map(p), e[6] = a, e[7] = i, e[8] = d;
  } else d = e[8];
  let g;
  return e[11] !== u || e[12] !== d ? (g = m.jsxs("nav", { className: "flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-200", children: [u, d] }), e[11] = u, e[12] = d, e[13] = g) : g = e[13], g;
};
function N_(t, e, a) {
  return e in t ? Object.defineProperty(t, e, { value: a, enumerable: true, configurable: true, writable: true }) : t[e] = a, t;
}
function km(t, e) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), a.push.apply(a, i);
  }
  return a;
}
function Mm(t) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? km(Object(a), true).forEach(function(i) {
      N_(t, i, a[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : km(Object(a)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(a, i));
    });
  }
  return t;
}
function T_(t, e) {
  if (t == null) return {};
  var a = {}, i = Object.keys(t), o, c;
  for (c = 0; c < i.length; c++) o = i[c], !(e.indexOf(o) >= 0) && (a[o] = t[o]);
  return a;
}
function k_(t, e) {
  if (t == null) return {};
  var a = T_(t, e), i, o;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    for (o = 0; o < c.length; o++) i = c[o], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (a[i] = t[i]);
  }
  return a;
}
function M_(t, e) {
  return A_(t) || C_(t, e) || E_(t, e) || O_();
}
function A_(t) {
  if (Array.isArray(t)) return t;
}
function C_(t, e) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(t)))) {
    var a = [], i = true, o = false, c = void 0;
    try {
      for (var f = t[Symbol.iterator](), u; !(i = (u = f.next()).done) && (a.push(u.value), !(e && a.length === e)); i = true) ;
    } catch (d) {
      o = true, c = d;
    } finally {
      try {
        !i && f.return != null && f.return();
      } finally {
        if (o) throw c;
      }
    }
    return a;
  }
}
function E_(t, e) {
  if (t) {
    if (typeof t == "string") return Am(t, e);
    var a = Object.prototype.toString.call(t).slice(8, -1);
    if (a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set") return Array.from(t);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Am(t, e);
  }
}
function Am(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var a = 0, i = new Array(e); a < e; a++) i[a] = t[a];
  return i;
}
function O_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z_(t, e, a) {
  return e in t ? Object.defineProperty(t, e, { value: a, enumerable: true, configurable: true, writable: true }) : t[e] = a, t;
}
function Cm(t, e) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), a.push.apply(a, i);
  }
  return a;
}
function Em(t) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Cm(Object(a), true).forEach(function(i) {
      z_(t, i, a[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Cm(Object(a)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(a, i));
    });
  }
  return t;
}
function D_() {
  for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
  return function(i) {
    return e.reduceRight(function(o, c) {
      return c(o);
    }, i);
  };
}
function Xi(t) {
  return function e() {
    for (var a = this, i = arguments.length, o = new Array(i), c = 0; c < i; c++) o[c] = arguments[c];
    return o.length >= t.length ? t.apply(this, o) : function() {
      for (var f = arguments.length, u = new Array(f), d = 0; d < f; d++) u[d] = arguments[d];
      return e.apply(a, [].concat(o, u));
    };
  };
}
function Lo(t) {
  return {}.toString.call(t).includes("Object");
}
function R_(t) {
  return !Object.keys(t).length;
}
function tr(t) {
  return typeof t == "function";
}
function L_(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function U_(t, e) {
  return Lo(e) || ba("changeType"), Object.keys(e).some(function(a) {
    return !L_(t, a);
  }) && ba("changeField"), e;
}
function $_(t) {
  tr(t) || ba("selectorType");
}
function H_(t) {
  tr(t) || Lo(t) || ba("handlerType"), Lo(t) && Object.values(t).some(function(e) {
    return !tr(e);
  }) && ba("handlersType");
}
function q_(t) {
  t || ba("initialIsRequired"), Lo(t) || ba("initialType"), R_(t) && ba("initialContent");
}
function V_(t, e) {
  throw new Error(t[e] || t.default);
}
var B_ = { initialIsRequired: "initial state is required", initialType: "initial state should be an object", initialContent: "initial state shouldn't be an empty object", handlerType: "handler should be an object or a function", handlersType: "all handlers should be a functions", selectorType: "selector should be a function", changeType: "provided value of changes should be an object", changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state', default: "an unknown error accured in `state-local` package" }, ba = Xi(V_)(B_), To = { changes: U_, selector: $_, handler: H_, initial: q_ };
function Y_(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  To.initial(t), To.handler(e);
  var a = { current: t }, i = Xi(X_)(a, e), o = Xi(Q_)(a), c = Xi(To.changes)(t), f = Xi(G_)(a);
  function u() {
    var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(p) {
      return p;
    };
    return To.selector(g), g(a.current);
  }
  function d(g) {
    D_(i, o, c, f)(g);
  }
  return [u, d];
}
function G_(t, e) {
  return tr(e) ? e(t.current) : e;
}
function Q_(t, e) {
  return t.current = Em(Em({}, t.current), e), e;
}
function X_(t, e, a) {
  return tr(e) ? e(t.current) : Object.keys(a).forEach(function(i) {
    var o;
    return (o = e[i]) === null || o === void 0 ? void 0 : o.call(e, t.current[i]);
  }), a;
}
var F_ = { create: Y_ }, Z_ = { paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs" } };
function K_(t) {
  return function e() {
    for (var a = this, i = arguments.length, o = new Array(i), c = 0; c < i; c++) o[c] = arguments[c];
    return o.length >= t.length ? t.apply(this, o) : function() {
      for (var f = arguments.length, u = new Array(f), d = 0; d < f; d++) u[d] = arguments[d];
      return e.apply(a, [].concat(o, u));
    };
  };
}
function I_(t) {
  return {}.toString.call(t).includes("Object");
}
function P_(t) {
  return t || Om("configIsRequired"), I_(t) || Om("configType"), t.urls ? (W_(), { paths: { vs: t.urls.monacoBase } }) : t;
}
function W_() {
  console.warn(Bp.deprecation);
}
function J_(t, e) {
  throw new Error(t[e] || t.default);
}
var Bp = { configIsRequired: "the configuration object is required", configType: "the configuration object should be an object", default: "an unknown error accured in `@monaco-editor/loader` package", deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  ` }, Om = K_(J_)(Bp), e6 = { config: P_ }, t6 = function() {
  for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++) a[i] = arguments[i];
  return function(o) {
    return a.reduceRight(function(c, f) {
      return f(c);
    }, o);
  };
};
function Yp(t, e) {
  return Object.keys(e).forEach(function(a) {
    e[a] instanceof Object && t[a] && Object.assign(e[a], Yp(t[a], e[a]));
  }), Mm(Mm({}, t), e);
}
var n6 = { type: "cancelation", msg: "operation is manually canceled" };
function uf(t) {
  var e = false, a = new Promise(function(i, o) {
    t.then(function(c) {
      return e ? o(n6) : i(c);
    }), t.catch(o);
  });
  return a.cancel = function() {
    return e = true;
  }, a;
}
var l6 = F_.create({ config: Z_, isInitialized: false, resolve: null, reject: null, monaco: null }), Gp = M_(l6, 2), cr = Gp[0], Fo = Gp[1];
function a6(t) {
  var e = e6.config(t), a = e.monaco, i = k_(e, ["monaco"]);
  Fo(function(o) {
    return { config: Yp(o.config, i), monaco: a };
  });
}
function s6() {
  var t = cr(function(e) {
    var a = e.monaco, i = e.isInitialized, o = e.resolve;
    return { monaco: a, isInitialized: i, resolve: o };
  });
  if (!t.isInitialized) {
    if (Fo({ isInitialized: true }), t.monaco) return t.resolve(t.monaco), uf(ff);
    if (window.monaco && window.monaco.editor) return Qp(window.monaco), t.resolve(window.monaco), uf(ff);
    t6(i6, o6)(c6);
  }
  return uf(ff);
}
function i6(t) {
  return document.body.appendChild(t);
}
function r6(t) {
  var e = document.createElement("script");
  return t && (e.src = t), e;
}
function o6(t) {
  var e = cr(function(i) {
    var o = i.config, c = i.reject;
    return { config: o, reject: c };
  }), a = r6("".concat(e.config.paths.vs, "/loader.js"));
  return a.onload = function() {
    return t();
  }, a.onerror = e.reject, a;
}
function c6() {
  var t = cr(function(a) {
    var i = a.config, o = a.resolve, c = a.reject;
    return { config: i, resolve: o, reject: c };
  }), e = window.require;
  e.config(t.config), e(["vs/editor/editor.main"], function(a) {
    Qp(a), t.resolve(a);
  }, function(a) {
    t.reject(a);
  });
}
function Qp(t) {
  cr().monaco || Fo({ monaco: t });
}
function u6() {
  return cr(function(t) {
    var e = t.monaco;
    return e;
  });
}
var ff = new Promise(function(t, e) {
  return Fo({ resolve: t, reject: e });
}), Xp = { config: a6, init: s6, __getMonacoInstance: u6 }, f6 = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, hf = f6, h6 = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, d6 = h6;
function m6({ children: t }) {
  return qt.createElement("div", { style: d6.container }, t);
}
var g6 = m6, p6 = g6;
function y6({ width: t, height: e, isEditorReady: a, loading: i, _ref: o, className: c, wrapperProps: f }) {
  return qt.createElement("section", { style: { ...hf.wrapper, width: t, height: e }, ...f }, !a && qt.createElement(p6, null, i), qt.createElement("div", { ref: o, style: { ...hf.fullWidth, ...!a && hf.hide }, className: c }));
}
var b6 = y6, Fp = $.memo(b6);
function v6(t) {
  $.useEffect(t, []);
}
var Zp = v6;
function x6(t, e, a = true) {
  let i = $.useRef(true);
  $.useEffect(i.current || !a ? () => {
    i.current = false;
  } : t, e);
}
var Sn = x6;
function Fi() {
}
function $s(t, e, a, i) {
  return S6(t, i) || j6(t, e, a, i);
}
function S6(t, e) {
  return t.editor.getModel(Kp(t, e));
}
function j6(t, e, a, i) {
  return t.editor.createModel(e, a, i ? Kp(t, i) : void 0);
}
function Kp(t, e) {
  return t.Uri.parse(e);
}
function _6({ original: t, modified: e, language: a, originalLanguage: i, modifiedLanguage: o, originalModelPath: c, modifiedModelPath: f, keepCurrentOriginalModel: u = false, keepCurrentModifiedModel: d = false, theme: g = "light", loading: p = "Loading...", options: b = {}, height: v = "100%", width: x = "100%", className: S, wrapperProps: j = {}, beforeMount: w = Fi, onMount: N = Fi }) {
  let [k, M] = $.useState(false), [C, E] = $.useState(true), L = $.useRef(null), A = $.useRef(null), z = $.useRef(null), q = $.useRef(N), B = $.useRef(w), J = $.useRef(false);
  Zp(() => {
    let K = Xp.init();
    return K.then((R) => (A.current = R) && E(false)).catch((R) => (R == null ? void 0 : R.type) !== "cancelation" && console.error("Monaco initialization: error:", R)), () => L.current ? ae() : K.cancel();
  }), Sn(() => {
    if (L.current && A.current) {
      let K = L.current.getOriginalEditor(), R = $s(A.current, t || "", i || a || "text", c || "");
      R !== K.getModel() && K.setModel(R);
    }
  }, [c], k), Sn(() => {
    if (L.current && A.current) {
      let K = L.current.getModifiedEditor(), R = $s(A.current, e || "", o || a || "text", f || "");
      R !== K.getModel() && K.setModel(R);
    }
  }, [f], k), Sn(() => {
    let K = L.current.getModifiedEditor();
    K.getOption(A.current.editor.EditorOption.readOnly) ? K.setValue(e || "") : e !== K.getValue() && (K.executeEdits("", [{ range: K.getModel().getFullModelRange(), text: e || "", forceMoveMarkers: true }]), K.pushUndoStop());
  }, [e], k), Sn(() => {
    var _a6, _b3;
    (_b3 = (_a6 = L.current) == null ? void 0 : _a6.getModel()) == null ? void 0 : _b3.original.setValue(t || "");
  }, [t], k), Sn(() => {
    let { original: K, modified: R } = L.current.getModel();
    A.current.editor.setModelLanguage(K, i || a || "text"), A.current.editor.setModelLanguage(R, o || a || "text");
  }, [a, i, o], k), Sn(() => {
    var _a6;
    (_a6 = A.current) == null ? void 0 : _a6.editor.setTheme(g);
  }, [g], k), Sn(() => {
    var _a6;
    (_a6 = L.current) == null ? void 0 : _a6.updateOptions(b);
  }, [b], k);
  let W = $.useCallback(() => {
    var _a6;
    if (!A.current) return;
    B.current(A.current);
    let K = $s(A.current, t || "", i || a || "text", c || ""), R = $s(A.current, e || "", o || a || "text", f || "");
    (_a6 = L.current) == null ? void 0 : _a6.setModel({ original: K, modified: R });
  }, [a, e, o, t, i, c, f]), oe = $.useCallback(() => {
    var _a6;
    !J.current && z.current && (L.current = A.current.editor.createDiffEditor(z.current, { automaticLayout: true, ...b }), W(), (_a6 = A.current) == null ? void 0 : _a6.editor.setTheme(g), M(true), J.current = true);
  }, [b, g, W]);
  $.useEffect(() => {
    k && q.current(L.current, A.current);
  }, [k]), $.useEffect(() => {
    !C && !k && oe();
  }, [C, k, oe]);
  function ae() {
    var _a6, _b3, _c3, _d3;
    let K = (_a6 = L.current) == null ? void 0 : _a6.getModel();
    u || ((_b3 = K == null ? void 0 : K.original) == null ? void 0 : _b3.dispose()), d || ((_c3 = K == null ? void 0 : K.modified) == null ? void 0 : _c3.dispose()), (_d3 = L.current) == null ? void 0 : _d3.dispose();
  }
  return qt.createElement(Fp, { width: x, height: v, isEditorReady: k, loading: p, _ref: z, className: S, wrapperProps: j });
}
var w6 = _6;
$.memo(w6);
function N6(t) {
  let e = $.useRef();
  return $.useEffect(() => {
    e.current = t;
  }, [t]), e.current;
}
var T6 = N6, ko = /* @__PURE__ */ new Map();
function k6({ defaultValue: t, defaultLanguage: e, defaultPath: a, value: i, language: o, path: c, theme: f = "light", line: u, loading: d = "Loading...", options: g = {}, overrideServices: p = {}, saveViewState: b = true, keepCurrentModel: v = false, width: x = "100%", height: S = "100%", className: j, wrapperProps: w = {}, beforeMount: N = Fi, onMount: k = Fi, onChange: M, onValidate: C = Fi }) {
  let [E, L] = $.useState(false), [A, z] = $.useState(true), q = $.useRef(null), B = $.useRef(null), J = $.useRef(null), W = $.useRef(k), oe = $.useRef(N), ae = $.useRef(), K = $.useRef(i), R = T6(c), G = $.useRef(false), ne = $.useRef(false);
  Zp(() => {
    let Y = Xp.init();
    return Y.then((re) => (q.current = re) && z(false)).catch((re) => (re == null ? void 0 : re.type) !== "cancelation" && console.error("Monaco initialization: error:", re)), () => B.current ? O() : Y.cancel();
  }), Sn(() => {
    var _a6, _b3, _c3, _d3;
    let Y = $s(q.current, t || i || "", e || o || "", c || a || "");
    Y !== ((_a6 = B.current) == null ? void 0 : _a6.getModel()) && (b && ko.set(R, (_b3 = B.current) == null ? void 0 : _b3.saveViewState()), (_c3 = B.current) == null ? void 0 : _c3.setModel(Y), b && ((_d3 = B.current) == null ? void 0 : _d3.restoreViewState(ko.get(c))));
  }, [c], E), Sn(() => {
    var _a6;
    (_a6 = B.current) == null ? void 0 : _a6.updateOptions(g);
  }, [g], E), Sn(() => {
    !B.current || i === void 0 || (B.current.getOption(q.current.editor.EditorOption.readOnly) ? B.current.setValue(i) : i !== B.current.getValue() && (ne.current = true, B.current.executeEdits("", [{ range: B.current.getModel().getFullModelRange(), text: i, forceMoveMarkers: true }]), B.current.pushUndoStop(), ne.current = false));
  }, [i], E), Sn(() => {
    var _a6, _b3;
    let Y = (_a6 = B.current) == null ? void 0 : _a6.getModel();
    Y && o && ((_b3 = q.current) == null ? void 0 : _b3.editor.setModelLanguage(Y, o));
  }, [o], E), Sn(() => {
    var _a6;
    u !== void 0 && ((_a6 = B.current) == null ? void 0 : _a6.revealLine(u));
  }, [u], E), Sn(() => {
    var _a6;
    (_a6 = q.current) == null ? void 0 : _a6.editor.setTheme(f);
  }, [f], E);
  let ue = $.useCallback(() => {
    var _a6;
    if (!(!J.current || !q.current) && !G.current) {
      oe.current(q.current);
      let Y = c || a, re = $s(q.current, i || t || "", e || o || "", Y || "");
      B.current = (_a6 = q.current) == null ? void 0 : _a6.editor.create(J.current, { model: re, automaticLayout: true, ...g }, p), b && B.current.restoreViewState(ko.get(Y)), q.current.editor.setTheme(f), u !== void 0 && B.current.revealLine(u), L(true), G.current = true;
    }
  }, [t, e, a, i, o, c, g, p, b, f, u]);
  $.useEffect(() => {
    E && W.current(B.current, q.current);
  }, [E]), $.useEffect(() => {
    !A && !E && ue();
  }, [A, E, ue]), K.current = i, $.useEffect(() => {
    var _a6, _b3;
    E && M && ((_a6 = ae.current) == null ? void 0 : _a6.dispose(), ae.current = (_b3 = B.current) == null ? void 0 : _b3.onDidChangeModelContent((Y) => {
      ne.current || M(B.current.getValue(), Y);
    }));
  }, [E, M]), $.useEffect(() => {
    if (E) {
      let Y = q.current.editor.onDidChangeMarkers((re) => {
        var _a6;
        let te = (_a6 = B.current.getModel()) == null ? void 0 : _a6.uri;
        if (te && re.find((ce) => ce.path === te.path)) {
          let ce = q.current.editor.getModelMarkers({ resource: te });
          C == null ? void 0 : C(ce);
        }
      });
      return () => {
        Y == null ? void 0 : Y.dispose();
      };
    }
    return () => {
    };
  }, [E, C]);
  function O() {
    var _a6, _b3;
    (_a6 = ae.current) == null ? void 0 : _a6.dispose(), v ? b && ko.set(c, B.current.saveViewState()) : (_b3 = B.current.getModel()) == null ? void 0 : _b3.dispose(), B.current.dispose();
  }
  return qt.createElement(Fp, { width: x, height: S, isEditorReady: E, loading: d, _ref: J, className: j, wrapperProps: w });
}
var M6 = k6, A6 = $.memo(M6), C6 = A6;
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Ip = (t) => {
  const e = F.c(16), { value: a, language: i, readOnly: o, onChange: c, height: f } = t, u = i === void 0 ? "verilog" : i, d = o === void 0 ? false : o, g = f === void 0 ? "200px" : f, p = Ne(Qo), b = $.useRef(null), v = $.useRef(null);
  let x;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (x = (L) => {
    v.current = L, L.languages.register({ id: "verilog" }), L.languages.setMonarchTokensProvider("verilog", { keywords: ["module", "endmodule", "input", "output", "inout", "wire", "reg", "always", "initial", "begin", "end", "if", "else", "case", "endcase", "for", "while", "function", "endfunction", "task", "endtask", "parameter", "localparam", "assign", "posedge", "negedge", "genvar", "generate", "endgenerate", "typedef", "enum", "struct", "logic", "bit", "byte", "int", "integer", "real", "time"], operators: ["=", "<=", "==", "!=", "===", "!==", ">", "<", ">=", "<=", "&", "|", "^", "~", "<<", ">>", ">>>", "<<<", "+", "-", "*", "/", "%", "**", "&&", "||", "!", "?", ":"], tokenizer: { root: [[/[a-z_$][\w$]*/, { cases: { "@keywords": "keyword", "@default": "identifier" } }], [/[A-Z][\w$]*/, "type.identifier"], [/\d+'[bdoh][\da-fA-F_]+/, "number.hex"], [/\d+'[bdoh][\dxzXZ_]+/, "number.hex"], [/\d+/, "number"], [/"([^"\\]|\\.)*$/, "string.invalid"], [/"/, { token: "string.quote", bracket: "@open", next: "@string" }], [/\/\/.*$/, "comment"], [/\/\*/, "comment", "@comment"]], string: [[/[^\\"]+/, "string"], [/\\./, "string.escape.invalid"], [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]], comment: [[/[^/*]+/, "comment"], [/\/\*/, "comment", "@push"], ["\\*/", "comment", "@pop"], [/[/*]/, "comment"]] } });
  }, e[0] = x) : x = e[0];
  const S = x;
  let j;
  e[1] !== d ? (j = (L, A) => {
    b.current = L, L.updateOptions({ minimap: { enabled: false }, scrollBeyondLastLine: false, wordWrap: "on", fontSize: 13, fontFamily: "'Fira Code', 'Courier New', monospace", lineNumbers: "on", renderWhitespace: "selection", tabSize: 2, readOnly: d });
  }, e[1] = d, e[2] = j) : j = e[2];
  const w = j, N = p ? "vs-dark" : "light";
  let k;
  e[3] !== c ? (k = (L) => c == null ? void 0 : c(L || ""), e[3] = c, e[4] = k) : k = e[4];
  let M;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (M = { enabled: false }, e[5] = M) : M = e[5];
  let C;
  e[6] !== d ? (C = { readOnly: d, minimap: M, scrollBeyondLastLine: false, wordWrap: "on", fontSize: 13, lineNumbers: "on", renderWhitespace: "selection", tabSize: 2, automaticLayout: true }, e[6] = d, e[7] = C) : C = e[7];
  let E;
  return e[8] !== w || e[9] !== g || e[10] !== u || e[11] !== N || e[12] !== k || e[13] !== C || e[14] !== a ? (E = m.jsx("div", { className: "relative overflow-hidden", children: m.jsx(C6, { height: g, language: u, value: a, theme: N, onChange: k, beforeMount: S, onMount: w, options: C }) }), e[8] = w, e[9] = g, e[10] = u, e[11] = N, e[12] = k, e[13] = C, e[14] = a, e[15] = E) : E = e[15], E;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const E6 = () => {
  const t = F.c(6), { upload: e } = Np();
  let a;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = m.jsx(Ia, { path: [["Create", null]] }), t[0] = a) : a = t[0];
  let i;
  t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsxs("div", { className: "flex items-center justify-between", children: [a, m.jsx(al, { href: "/settings", className: Q("p-2 rounded-lg transition-all", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "hover:bg-gray-100 dark:hover:bg-gray-800", "focus:outline-none focus:ring-2 focus:ring-blue-500/20"), children: m.jsx(xa, { className: "w-5 h-5" }) })] }), t[1] = i) : i = t[1];
  let o, c;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (o = m.jsxs("div", { className: "text-2xl font-bold text-black dark:text-white flex items-center gap-2", children: [m.jsx(gl, { className: "w-6 h-6" }), "Create"] }), c = m.jsx(O6, {}), t[2] = o, t[3] = c) : (o = t[2], c = t[3]);
  let f;
  return t[4] !== e ? (f = m.jsxs("div", { className: "max-w-3xl mx-auto flex flex-col gap-4 p-4", children: [i, o, c, m.jsx(z6, { upload: e })] }), t[4] = e, t[5] = f) : f = t[5], f;
}, O6 = () => {
  const t = F.c(26), [e, a] = $.useState(""), [i, o] = $.useState("verilog");
  let c;
  t[0] !== e || t[1] !== i ? (c = () => {
    console.log("Creating project:", e, i), a(""), o("verilog");
  }, t[0] = e, t[1] = i, t[2] = c) : c = t[2];
  const f = c;
  let u;
  t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = Q("rounded-lg shadow-md border", "bg-white dark:bg-gray-900", "border-gray-200 dark:border-gray-700"), t[3] = u) : u = t[3];
  let d, g, p;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = m.jsx("div", { className: "p-4 border-b border-gray-200 dark:border-gray-700", children: m.jsxs("div", { className: "flex items-center gap-3", children: [m.jsx(gl, { className: "w-5 h-5" }), m.jsx("h2", { className: Q("text-lg font-semibold", "text-gray-900 dark:text-gray-100"), children: "Create New Project" })] }) }), g = Q("p-4 space-y-4"), p = m.jsx("label", { className: Q("block text-sm mb-2", "text-gray-600 dark:text-gray-400"), children: "Project Name" }), t[4] = d, t[5] = g, t[6] = p) : (d = t[4], g = t[5], p = t[6]);
  let b;
  t[7] === Symbol.for("react.memo_cache_sentinel") ? (b = (z) => a(z.target.value), t[7] = b) : b = t[7];
  let v;
  t[8] === Symbol.for("react.memo_cache_sentinel") ? (v = Q("w-full px-3 py-2 border rounded outline-none transition-all", "bg-white dark:bg-gray-800 text-black dark:text-white", "border-gray-300 dark:border-gray-600", "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"), t[8] = v) : v = t[8];
  let x;
  t[9] !== e ? (x = m.jsxs("div", { children: [p, m.jsx("input", { type: "text", value: e, onChange: b, placeholder: "Enter project name", className: v })] }), t[9] = e, t[10] = x) : x = t[10];
  let S;
  t[11] === Symbol.for("react.memo_cache_sentinel") ? (S = m.jsx("label", { className: Q("block text-sm mb-2", "text-gray-600 dark:text-gray-400"), children: "Project Type" }), t[11] = S) : S = t[11];
  let j, w, N, k, M;
  t[12] === Symbol.for("react.memo_cache_sentinel") ? (M = (z) => o(z.target.value), j = Q("w-full px-3 py-2 border rounded outline-none", "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", "border-gray-300 dark:border-gray-600", "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"), w = m.jsx("option", { value: "verilog", children: "Verilog" }), N = m.jsx("option", { value: "vhdl", children: "VHDL" }), k = m.jsx("option", { value: "systemverilog", children: "SystemVerilog" }), t[12] = j, t[13] = w, t[14] = N, t[15] = k, t[16] = M) : (j = t[12], w = t[13], N = t[14], k = t[15], M = t[16]);
  let C;
  t[17] !== i ? (C = m.jsxs("div", { children: [S, m.jsxs("select", { value: i, onChange: M, className: j, children: [w, N, k] })] }), t[17] = i, t[18] = C) : C = t[18];
  let E;
  t[19] === Symbol.for("react.memo_cache_sentinel") ? (E = Q("w-full px-4 py-2 rounded-lg transition-all", "bg-blue-600 hover:bg-blue-700 text-white", "focus:outline-none focus:ring-2 focus:ring-blue-500/20"), t[19] = E) : E = t[19];
  let L;
  t[20] !== f ? (L = m.jsx("button", { onClick: f, className: E, children: "Create Project" }), t[20] = f, t[21] = L) : L = t[21];
  let A;
  return t[22] !== C || t[23] !== L || t[24] !== x ? (A = m.jsxs("div", { className: u, children: [d, m.jsxs("div", { className: g, children: [x, C, L] })] }), t[22] = C, t[23] = L, t[24] = x, t[25] = A) : A = t[25], A;
}, z6 = (t) => {
  const e = F.c(9), { upload: a } = t;
  let i;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = Q("rounded-lg shadow-md border", "bg-white dark:bg-gray-900", "border-gray-200 dark:border-gray-700"), e[0] = i) : i = e[0];
  let o, c, f;
  e[1] === Symbol.for("react.memo_cache_sentinel") ? (o = m.jsx("div", { className: "p-4 border-b border-gray-200 dark:border-gray-700", children: m.jsxs("div", { className: "flex items-center gap-3", children: [m.jsx(Rp, { className: "w-5 h-5" }), m.jsx("h2", { className: Q("text-lg font-semibold", "text-gray-900 dark:text-gray-100"), children: "Upload Project" })] }) }), c = Q("p-4"), f = m.jsx("p", { className: Q("text-sm mb-4", "text-gray-600 dark:text-gray-400"), children: "Select a project folder from your local file system to upload to the server." }), e[1] = o, e[2] = c, e[3] = f) : (o = e[1], c = e[2], f = e[3]);
  let u;
  e[4] !== a ? (u = () => a(), e[4] = a, e[5] = u) : u = e[5];
  let d;
  e[6] === Symbol.for("react.memo_cache_sentinel") ? (d = Q("w-full px-4 py-2 rounded-lg transition-all", "bg-blue-600 hover:bg-blue-700 text-white", "focus:outline-none focus:ring-2 focus:ring-blue-500/20"), e[6] = d) : d = e[6];
  let g;
  return e[7] !== u ? (g = m.jsxs("div", { className: i, children: [o, m.jsxs("div", { className: c, children: [f, m.jsx("button", { onClick: u, className: d, children: "Select Folder to Upload" })] })] }), e[7] = u, e[8] = g) : g = e[8], g;
};
function Zi() {
  return Zi = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var a = arguments[e];
      for (var i in a) ({}).hasOwnProperty.call(a, i) && (t[i] = a[i]);
    }
    return t;
  }, Zi.apply(null, arguments);
}
var pa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ur(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var zm, Dm = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
var df, Rm, Lm, D6 = (zm || (zm = 1, df = Dm, function() {
  var t = {}.hasOwnProperty;
  function e() {
    for (var a = [], i = 0; i < arguments.length; i++) {
      var o = arguments[i];
      if (o) {
        var c = typeof o;
        if (c === "string" || c === "number") a.push(o);
        else if (Array.isArray(o)) {
          if (o.length) {
            var f = e.apply(null, o);
            f && a.push(f);
          }
        } else if (c === "object") if (o.toString === Object.prototype.toString) for (var u in o) t.call(o, u) && o[u] && a.push(u);
        else a.push(o.toString());
      }
    }
    return a.join(" ");
  }
  df.exports ? (e.default = e, df.exports = e) : window.classNames = e;
}()), Dm.exports), Vf = ur(D6), Um, ll = ur(function() {
  if (Lm) return Rm;
  Lm = 1;
  var t = NaN, e = "[object Symbol]", a = /^\s+|\s+$/g, i = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, c = /^0o[0-7]+$/i, f = parseInt, u = Object.prototype.toString;
  function d(p) {
    var b = typeof p;
    return !!p && (b == "object" || b == "function");
  }
  function g(p) {
    if (typeof p == "number") return p;
    if (function(x) {
      return typeof x == "symbol" || /* @__PURE__ */ function(S) {
        return !!S && typeof S == "object";
      }(x) && u.call(x) == e;
    }(p)) return t;
    if (d(p)) {
      var b = typeof p.valueOf == "function" ? p.valueOf() : p;
      p = d(b) ? b + "" : b;
    }
    if (typeof p != "string") return p === 0 ? p : +p;
    p = p.replace(a, "");
    var v = o.test(p);
    return v || c.test(p) ? f(p.slice(2), v ? 2 : 8) : i.test(p) ? t : +p;
  }
  return Rm = function(p, b, v) {
    return v === void 0 && (v = b, b = void 0), v !== void 0 && (v = (v = g(v)) == v ? v : 0), b !== void 0 && (b = (b = g(b)) == b ? b : 0), function(x, S, j) {
      return x == x && (j !== void 0 && (x = x <= j ? x : j), S !== void 0 && (x = x >= S ? x : S)), x;
    }(g(p), b, v);
  };
}()), mf = { exports: {} }, R6 = (Um || (Um = 1, function(t, e) {
  var a = "__lodash_hash_undefined__", i = 1, o = 2, c = 9007199254740991, f = "[object Arguments]", u = "[object Array]", d = "[object AsyncFunction]", g = "[object Boolean]", p = "[object Date]", b = "[object Error]", v = "[object Function]", x = "[object GeneratorFunction]", S = "[object Map]", j = "[object Number]", w = "[object Null]", N = "[object Object]", k = "[object Promise]", M = "[object Proxy]", C = "[object RegExp]", E = "[object Set]", L = "[object String]", A = "[object Symbol]", z = "[object Undefined]", q = "[object WeakMap]", B = "[object ArrayBuffer]", J = "[object DataView]", W = /^\[object .+?Constructor\]$/, oe = /^(?:0|[1-9]\d*)$/, ae = {};
  ae["[object Float32Array]"] = ae["[object Float64Array]"] = ae["[object Int8Array]"] = ae["[object Int16Array]"] = ae["[object Int32Array]"] = ae["[object Uint8Array]"] = ae["[object Uint8ClampedArray]"] = ae["[object Uint16Array]"] = ae["[object Uint32Array]"] = true, ae[f] = ae[u] = ae[B] = ae[g] = ae[J] = ae[p] = ae[b] = ae[v] = ae[S] = ae[j] = ae[N] = ae[C] = ae[E] = ae[L] = ae[q] = false;
  var K = typeof pa == "object" && pa && pa.Object === Object && pa, R = typeof self == "object" && self && self.Object === Object && self, G = K || R || Function("return this")(), ne = e && !e.nodeType && e, ue = ne && t && !t.nodeType && t, O = ue && ue.exports === ne, Y = O && K.process, re = function() {
    try {
      return Y && Y.binding && Y.binding("util");
    } catch {
    }
  }(), te = re && re.isTypedArray;
  function ce(H, ee) {
    for (var fe = -1, be = H == null ? 0 : H.length; ++fe < be; ) if (ee(H[fe], fe, H)) return true;
    return false;
  }
  function me(H) {
    var ee = -1, fe = Array(H.size);
    return H.forEach(function(be, $e) {
      fe[++ee] = [$e, be];
    }), fe;
  }
  function de(H) {
    var ee = -1, fe = Array(H.size);
    return H.forEach(function(be) {
      fe[++ee] = be;
    }), fe;
  }
  var Ae, he, pe, xe = Array.prototype, ge = Function.prototype, He = Object.prototype, Oe = G["__core-js_shared__"], Ve = ge.toString, Je = He.hasOwnProperty, tt = (Ae = /[^.]+$/.exec(Oe && Oe.keys && Oe.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ae : "", Qe = He.toString, ct = RegExp("^" + Ve.call(Je).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), At = O ? G.Buffer : void 0, wt = G.Symbol, Yt = G.Uint8Array, Nn = He.propertyIsEnumerable, Rt = xe.splice, gt = wt ? wt.toStringTag : void 0, Pt = Object.getOwnPropertySymbols, Tn = At ? At.isBuffer : void 0, ut = (he = Object.keys, pe = Object, function(H) {
    return he(pe(H));
  }), Nt = Gl(G, "DataView"), at = Gl(G, "Map"), Le = Gl(G, "Promise"), nt = Gl(G, "Set"), Lt = Gl(G, "WeakMap"), Wt = Gl(Object, "create"), Vl = an(Nt), pl = an(at), Pa = an(Le), wa = an(nt), Ko = an(Lt), Vs = wt ? wt.prototype : void 0, Wa = Vs ? Vs.valueOf : void 0;
  function Yn(H) {
    var ee = -1, fe = H == null ? 0 : H.length;
    for (this.clear(); ++ee < fe; ) {
      var be = H[ee];
      this.set(be[0], be[1]);
    }
  }
  function Jt(H) {
    var ee = -1, fe = H == null ? 0 : H.length;
    for (this.clear(); ++ee < fe; ) {
      var be = H[ee];
      this.set(be[0], be[1]);
    }
  }
  function yl(H) {
    var ee = -1, fe = H == null ? 0 : H.length;
    for (this.clear(); ++ee < fe; ) {
      var be = H[ee];
      this.set(be[0], be[1]);
    }
  }
  function Na(H) {
    var ee = -1, fe = H == null ? 0 : H.length;
    for (this.__data__ = new yl(); ++ee < fe; ) this.add(H[ee]);
  }
  function Gn(H) {
    var ee = this.__data__ = new Jt(H);
    this.size = ee.size;
  }
  function Bs(H, ee) {
    var fe = Xn(H), be = !fe && Ta(H), $e = !fe && !be && ft(H), Me = !fe && !be && !$e && gr(H), lt = fe || be || $e || Me, Pe = lt ? function(pt, dn) {
      for (var ht = -1, Et = Array(pt); ++ht < pt; ) Et[ht] = dn(ht);
      return Et;
    }(H.length, String) : [], en = Pe.length;
    for (var rt in H) !Je.call(H, rt) || lt && (rt == "length" || $e && (rt == "offset" || rt == "parent") || Me && (rt == "buffer" || rt == "byteLength" || rt == "byteOffset") || Ys(rt, en)) || Pe.push(rt);
    return Pe;
  }
  function Bl(H, ee) {
    for (var fe = H.length; fe--; ) if (vl(H[fe][0], ee)) return fe;
    return -1;
  }
  function Yl(H) {
    return H == null ? H === void 0 ? z : w : gt && gt in Object(H) ? function(ee) {
      var fe = Je.call(ee, gt), be = ee[gt];
      try {
        ee[gt] = void 0;
        var $e = true;
      } catch {
      }
      var Me = Qe.call(ee);
      return $e && (fe ? ee[gt] = be : delete ee[gt]), Me;
    }(H) : function(ee) {
      return Qe.call(ee);
    }(H);
  }
  function dr(H) {
    return kn(H) && Yl(H) == f;
  }
  function Qn(H, ee, fe, be, $e) {
    return H === ee || (H == null || ee == null || !kn(H) && !kn(ee) ? H != H && ee != ee : function(Me, lt, Pe, en, rt, pt) {
      var dn = Xn(Me), ht = Xn(lt), Et = dn ? u : ln(Me), Fn = ht ? u : ln(lt), Zn = (Et = Et == f ? N : Et) == N, ka = (Fn = Fn == f ? N : Fn) == N, Kn = Et == Fn;
      if (Kn && ft(Me)) {
        if (!ft(lt)) return false;
        dn = true, Zn = false;
      }
      if (Kn && !Zn) return pt || (pt = new Gn()), dn || gr(Me) ? bl(Me, lt, Pe, en, rt, pt) : function(Ye, Ue, Aa, In, rl, sn, Mn) {
        switch (Aa) {
          case J:
            if (Ye.byteLength != Ue.byteLength || Ye.byteOffset != Ue.byteOffset) return false;
            Ye = Ye.buffer, Ue = Ue.buffer;
          case B:
            return !(Ye.byteLength != Ue.byteLength || !sn(new Yt(Ye), new Yt(Ue)));
          case g:
          case p:
          case j:
            return vl(+Ye, +Ue);
          case b:
            return Ye.name == Ue.name && Ye.message == Ue.message;
          case C:
          case L:
            return Ye == Ue + "";
          case S:
            var Pn = me;
          case E:
            var xl = In & i;
            if (Pn || (Pn = de), Ye.size != Ue.size && !xl) return false;
            var ts = Mn.get(Ye);
            if (ts) return ts == Ue;
            In |= o, Mn.set(Ye, Ue);
            var Fs = bl(Pn(Ye), Pn(Ue), In, rl, sn, Mn);
            return Mn.delete(Ye), Fs;
          case A:
            if (Wa) return Wa.call(Ye) == Wa.call(Ue);
        }
        return false;
      }(Me, lt, Et, Pe, en, rt, pt);
      if (!(Pe & i)) {
        var Ma = Zn && Je.call(Me, "__wrapped__"), tn = ka && Je.call(lt, "__wrapped__");
        if (Ma || tn) {
          var Xs = Ma ? Me.value() : Me, yr = tn ? lt.value() : lt;
          return pt || (pt = new Gn()), rt(Xs, yr, Pe, en, pt);
        }
      }
      return !!Kn && (pt || (pt = new Gn()), function(Ye, Ue, Aa, In, rl, sn) {
        var Mn = Aa & i, Pn = Ja(Ye), xl = Pn.length, ts = Ja(Ue), Fs = ts.length;
        if (xl != Fs && !Mn) return false;
        for (var Sl = xl; Sl--; ) {
          var Wn = Pn[Sl];
          if (!(Mn ? Wn in Ue : Je.call(Ue, Wn))) return false;
        }
        var ns = sn.get(Ye);
        if (ns && sn.get(Ue)) return ns == Ue;
        var Jn = true;
        sn.set(Ye, Ue), sn.set(Ue, Ye);
        for (var ol = Mn; ++Sl < xl; ) {
          var Ca = Ye[Wn = Pn[Sl]], Ql = Ue[Wn];
          if (In) var Zs = Mn ? In(Ql, Ca, Wn, Ue, Ye, sn) : In(Ca, Ql, Wn, Ye, Ue, sn);
          if (!(Zs === void 0 ? Ca === Ql || rl(Ca, Ql, Aa, In, sn) : Zs)) {
            Jn = false;
            break;
          }
          ol || (ol = Wn == "constructor");
        }
        if (Jn && !ol) {
          var cl = Ye.constructor, rn = Ue.constructor;
          cl == rn || !("constructor" in Ye) || !("constructor" in Ue) || typeof cl == "function" && cl instanceof cl && typeof rn == "function" && rn instanceof rn || (Jn = false);
        }
        return sn.delete(Ye), sn.delete(Ue), Jn;
      }(Me, lt, Pe, en, rt, pt));
    }(H, ee, fe, be, Qn, $e));
  }
  function Ct(H) {
    return !(!il(H) || function(ee) {
      return !!tt && tt in ee;
    }(H)) && (Gs(H) ? ct : W).test(an(H));
  }
  function Gt(H) {
    if (fe = (ee = H) && ee.constructor, be = typeof fe == "function" && fe.prototype || He, ee !== be) return ut(H);
    var ee, fe, be, $e = [];
    for (var Me in Object(H)) Je.call(H, Me) && Me != "constructor" && $e.push(Me);
    return $e;
  }
  function bl(H, ee, fe, be, $e, Me) {
    var lt = fe & i, Pe = H.length, en = ee.length;
    if (Pe != en && !(lt && en > Pe)) return false;
    var rt = Me.get(H);
    if (rt && Me.get(ee)) return rt == ee;
    var pt = -1, dn = true, ht = fe & o ? new Na() : void 0;
    for (Me.set(H, ee), Me.set(ee, H); ++pt < Pe; ) {
      var Et = H[pt], Fn = ee[pt];
      if (be) var Zn = lt ? be(Fn, Et, pt, ee, H, Me) : be(Et, Fn, pt, H, ee, Me);
      if (Zn !== void 0) {
        if (Zn) continue;
        dn = false;
        break;
      }
      if (ht) {
        if (!ce(ee, function(ka, Kn) {
          if (Ma = Kn, !ht.has(Ma) && (Et === ka || $e(Et, ka, fe, be, Me))) return ht.push(Kn);
          var Ma;
        })) {
          dn = false;
          break;
        }
      } else if (Et !== Fn && !$e(Et, Fn, fe, be, Me)) {
        dn = false;
        break;
      }
    }
    return Me.delete(H), Me.delete(ee), dn;
  }
  function Ja(H) {
    return function(ee, fe, be) {
      var $e = fe(ee);
      return Xn(ee) ? $e : function(Me, lt) {
        for (var Pe = -1, en = lt.length, rt = Me.length; ++Pe < en; ) Me[rt + Pe] = lt[Pe];
        return Me;
      }($e, be(ee));
    }(H, pr, mr);
  }
  function es(H, ee) {
    var fe, be, $e = H.__data__;
    return ((be = typeof (fe = ee)) == "string" || be == "number" || be == "symbol" || be == "boolean" ? fe !== "__proto__" : fe === null) ? $e[typeof ee == "string" ? "string" : "hash"] : $e.map;
  }
  function Gl(H, ee) {
    var fe = function(be, $e) {
      return be == null ? void 0 : be[$e];
    }(H, ee);
    return Ct(fe) ? fe : void 0;
  }
  Yn.prototype.clear = function() {
    this.__data__ = Wt ? Wt(null) : {}, this.size = 0;
  }, Yn.prototype.delete = function(H) {
    var ee = this.has(H) && delete this.__data__[H];
    return this.size -= ee ? 1 : 0, ee;
  }, Yn.prototype.get = function(H) {
    var ee = this.__data__;
    if (Wt) {
      var fe = ee[H];
      return fe === a ? void 0 : fe;
    }
    return Je.call(ee, H) ? ee[H] : void 0;
  }, Yn.prototype.has = function(H) {
    var ee = this.__data__;
    return Wt ? ee[H] !== void 0 : Je.call(ee, H);
  }, Yn.prototype.set = function(H, ee) {
    var fe = this.__data__;
    return this.size += this.has(H) ? 0 : 1, fe[H] = Wt && ee === void 0 ? a : ee, this;
  }, Jt.prototype.clear = function() {
    this.__data__ = [], this.size = 0;
  }, Jt.prototype.delete = function(H) {
    var ee = this.__data__, fe = Bl(ee, H);
    return !(fe < 0 || (fe == ee.length - 1 ? ee.pop() : Rt.call(ee, fe, 1), --this.size, 0));
  }, Jt.prototype.get = function(H) {
    var ee = this.__data__, fe = Bl(ee, H);
    return fe < 0 ? void 0 : ee[fe][1];
  }, Jt.prototype.has = function(H) {
    return Bl(this.__data__, H) > -1;
  }, Jt.prototype.set = function(H, ee) {
    var fe = this.__data__, be = Bl(fe, H);
    return be < 0 ? (++this.size, fe.push([H, ee])) : fe[be][1] = ee, this;
  }, yl.prototype.clear = function() {
    this.size = 0, this.__data__ = { hash: new Yn(), map: new (at || Jt)(), string: new Yn() };
  }, yl.prototype.delete = function(H) {
    var ee = es(this, H).delete(H);
    return this.size -= ee ? 1 : 0, ee;
  }, yl.prototype.get = function(H) {
    return es(this, H).get(H);
  }, yl.prototype.has = function(H) {
    return es(this, H).has(H);
  }, yl.prototype.set = function(H, ee) {
    var fe = es(this, H), be = fe.size;
    return fe.set(H, ee), this.size += fe.size == be ? 0 : 1, this;
  }, Na.prototype.add = Na.prototype.push = function(H) {
    return this.__data__.set(H, a), this;
  }, Na.prototype.has = function(H) {
    return this.__data__.has(H);
  }, Gn.prototype.clear = function() {
    this.__data__ = new Jt(), this.size = 0;
  }, Gn.prototype.delete = function(H) {
    var ee = this.__data__, fe = ee.delete(H);
    return this.size = ee.size, fe;
  }, Gn.prototype.get = function(H) {
    return this.__data__.get(H);
  }, Gn.prototype.has = function(H) {
    return this.__data__.has(H);
  }, Gn.prototype.set = function(H, ee) {
    var fe = this.__data__;
    if (fe instanceof Jt) {
      var be = fe.__data__;
      if (!at || be.length < 199) return be.push([H, ee]), this.size = ++fe.size, this;
      fe = this.__data__ = new yl(be);
    }
    return fe.set(H, ee), this.size = fe.size, this;
  };
  var mr = Pt ? function(H) {
    return H == null ? [] : (H = Object(H), function(ee, fe) {
      for (var be = -1, $e = ee == null ? 0 : ee.length, Me = 0, lt = []; ++be < $e; ) {
        var Pe = ee[be];
        fe(Pe, be, ee) && (lt[Me++] = Pe);
      }
      return lt;
    }(Pt(H), function(ee) {
      return Nn.call(H, ee);
    }));
  } : function() {
    return [];
  }, ln = Yl;
  function Ys(H, ee) {
    return !!(ee = ee ?? c) && (typeof H == "number" || oe.test(H)) && H > -1 && H % 1 == 0 && H < ee;
  }
  function an(H) {
    if (H != null) {
      try {
        return Ve.call(H);
      } catch {
      }
      try {
        return H + "";
      } catch {
      }
    }
    return "";
  }
  function vl(H, ee) {
    return H === ee || H != H && ee != ee;
  }
  (Nt && ln(new Nt(new ArrayBuffer(1))) != J || at && ln(new at()) != S || Le && ln(Le.resolve()) != k || nt && ln(new nt()) != E || Lt && ln(new Lt()) != q) && (ln = function(H) {
    var ee = Yl(H), fe = ee == N ? H.constructor : void 0, be = fe ? an(fe) : "";
    if (be) switch (be) {
      case Vl:
        return J;
      case pl:
        return S;
      case Pa:
        return k;
      case wa:
        return E;
      case Ko:
        return q;
    }
    return ee;
  });
  var Ta = dr(/* @__PURE__ */ function() {
    return arguments;
  }()) ? dr : function(H) {
    return kn(H) && Je.call(H, "callee") && !Nn.call(H, "callee");
  }, Xn = Array.isArray, ft = Tn || function() {
    return false;
  };
  function Gs(H) {
    if (!il(H)) return false;
    var ee = Yl(H);
    return ee == v || ee == x || ee == d || ee == M;
  }
  function Qs(H) {
    return typeof H == "number" && H > -1 && H % 1 == 0 && H <= c;
  }
  function il(H) {
    var ee = typeof H;
    return H != null && (ee == "object" || ee == "function");
  }
  function kn(H) {
    return H != null && typeof H == "object";
  }
  var gr = te ? /* @__PURE__ */ function(H) {
    return function(ee) {
      return H(ee);
    };
  }(te) : function(H) {
    return kn(H) && Qs(H.length) && !!ae[Yl(H)];
  };
  function pr(H) {
    return (ee = H) != null && Qs(ee.length) && !Gs(ee) ? Bs(H) : Gt(H);
    var ee;
  }
  t.exports = function(H, ee) {
    return Qn(H, ee);
  };
}(mf, mf.exports)), mf.exports), L6 = ur(R6);
function $m(t, e, a) {
  return t[e] ? t[e][0] ? t[e][0][a] : t[e][a] : e === "contentBoxSize" ? t.contentRect[a === "inlineSize" ? "width" : "height"] : void 0;
}
function U6(t) {
  t === void 0 && (t = {});
  var e = t.onResize, a = $.useRef(void 0);
  a.current = e;
  var i = t.round || Math.round, o = $.useRef(), c = $.useState({ width: void 0, height: void 0 }), f = c[0], u = c[1], d = $.useRef(false);
  $.useEffect(function() {
    return d.current = false, function() {
      d.current = true;
    };
  }, []);
  var g = $.useRef({ width: void 0, height: void 0 }), p = function(b, v) {
    var x = $.useRef(null), S = $.useRef(null);
    S.current = v;
    var j = $.useRef(null);
    $.useEffect(function() {
      w();
    });
    var w = $.useCallback(function() {
      var N = j.current, k = S.current, M = N || (k ? k instanceof Element ? k : k.current : null);
      x.current && x.current.element === M && x.current.subscriber === b || (x.current && x.current.cleanup && x.current.cleanup(), x.current = { element: M, subscriber: b, cleanup: M ? b(M) : void 0 });
    }, [b]);
    return $.useEffect(function() {
      return function() {
        x.current && x.current.cleanup && (x.current.cleanup(), x.current = null);
      };
    }, []), $.useCallback(function(N) {
      j.current = N, w();
    }, [w]);
  }($.useCallback(function(b) {
    return o.current && o.current.box === t.box && o.current.round === i || (o.current = { box: t.box, round: i, instance: new ResizeObserver(function(v) {
      var x = v[0], S = t.box === "border-box" ? "borderBoxSize" : t.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", j = $m(x, S, "inlineSize"), w = $m(x, S, "blockSize"), N = j ? i(j) : void 0, k = w ? i(w) : void 0;
      if (g.current.width !== N || g.current.height !== k) {
        var M = { width: N, height: k };
        g.current.width = N, g.current.height = k, a.current ? a.current(M) : d.current || u(M);
      }
    }) }), o.current.instance.observe(b, { box: t.box }), function() {
      o.current && o.current.instance.unobserve(b);
    };
  }, [t.box, i]), t.ref);
  return $.useMemo(function() {
    return { ref: p, width: f.width, height: f.height };
  }, [p, f.width, f.height]);
}
var $6 = "allotment-module_splitView__L-yRc", H6 = "allotment-module_sashContainer__fzwJF", q6 = "allotment-module_splitViewContainer__rQnVa", Pp = "allotment-module_splitViewView__MGZ6O", V6 = "allotment-module_vertical__WSwwa", B6 = "allotment-module_horizontal__7doS8", Y6 = "allotment-module_separatorBorder__x-rDS";
let Yi, Wp = false, Jp = false;
typeof navigator == "object" && (Yi = navigator.userAgent, Jp = Yi.indexOf("Macintosh") >= 0, Wp = (Yi.indexOf("Macintosh") >= 0 || Yi.indexOf("iPad") >= 0 || Yi.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
const ey = Wp, G6 = Jp, Hm = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? $.useLayoutEffect : $.useEffect;
class Q6 {
  constructor() {
    this._size = void 0;
  }
  getSize() {
    return this._size;
  }
  setSize(e) {
    this._size = e;
  }
}
function Mo(t, e) {
  const a = t.length, i = a - e.length;
  return i >= 0 && t.slice(i, a) === e;
}
var qm, Vm = { exports: {} }, Bm, Ym, X6 = (qm || (qm = 1, function(t) {
  var e = Object.prototype.hasOwnProperty, a = "~";
  function i() {
  }
  function o(d, g, p) {
    this.fn = d, this.context = g, this.once = p || false;
  }
  function c(d, g, p, b, v) {
    if (typeof p != "function") throw new TypeError("The listener must be a function");
    var x = new o(p, b || d, v), S = a ? a + g : g;
    return d._events[S] ? d._events[S].fn ? d._events[S] = [d._events[S], x] : d._events[S].push(x) : (d._events[S] = x, d._eventsCount++), d;
  }
  function f(d, g) {
    --d._eventsCount == 0 ? d._events = new i() : delete d._events[g];
  }
  function u() {
    this._events = new i(), this._eventsCount = 0;
  }
  Object.create && (i.prototype = /* @__PURE__ */ Object.create(null), new i().__proto__ || (a = false)), u.prototype.eventNames = function() {
    var d, g, p = [];
    if (this._eventsCount === 0) return p;
    for (g in d = this._events) e.call(d, g) && p.push(a ? g.slice(1) : g);
    return Object.getOwnPropertySymbols ? p.concat(Object.getOwnPropertySymbols(d)) : p;
  }, u.prototype.listeners = function(d) {
    var g = a ? a + d : d, p = this._events[g];
    if (!p) return [];
    if (p.fn) return [p.fn];
    for (var b = 0, v = p.length, x = new Array(v); b < v; b++) x[b] = p[b].fn;
    return x;
  }, u.prototype.listenerCount = function(d) {
    var g = a ? a + d : d, p = this._events[g];
    return p ? p.fn ? 1 : p.length : 0;
  }, u.prototype.emit = function(d, g, p, b, v, x) {
    var S = a ? a + d : d;
    if (!this._events[S]) return false;
    var j, w, N = this._events[S], k = arguments.length;
    if (N.fn) {
      switch (N.once && this.removeListener(d, N.fn, void 0, true), k) {
        case 1:
          return N.fn.call(N.context), true;
        case 2:
          return N.fn.call(N.context, g), true;
        case 3:
          return N.fn.call(N.context, g, p), true;
        case 4:
          return N.fn.call(N.context, g, p, b), true;
        case 5:
          return N.fn.call(N.context, g, p, b, v), true;
        case 6:
          return N.fn.call(N.context, g, p, b, v, x), true;
      }
      for (w = 1, j = new Array(k - 1); w < k; w++) j[w - 1] = arguments[w];
      N.fn.apply(N.context, j);
    } else {
      var M, C = N.length;
      for (w = 0; w < C; w++) switch (N[w].once && this.removeListener(d, N[w].fn, void 0, true), k) {
        case 1:
          N[w].fn.call(N[w].context);
          break;
        case 2:
          N[w].fn.call(N[w].context, g);
          break;
        case 3:
          N[w].fn.call(N[w].context, g, p);
          break;
        case 4:
          N[w].fn.call(N[w].context, g, p, b);
          break;
        default:
          if (!j) for (M = 1, j = new Array(k - 1); M < k; M++) j[M - 1] = arguments[M];
          N[w].fn.apply(N[w].context, j);
      }
    }
    return true;
  }, u.prototype.on = function(d, g, p) {
    return c(this, d, g, p, false);
  }, u.prototype.once = function(d, g, p) {
    return c(this, d, g, p, true);
  }, u.prototype.removeListener = function(d, g, p, b) {
    var v = a ? a + d : d;
    if (!this._events[v]) return this;
    if (!g) return f(this, v), this;
    var x = this._events[v];
    if (x.fn) x.fn !== g || b && !x.once || p && x.context !== p || f(this, v);
    else {
      for (var S = 0, j = [], w = x.length; S < w; S++) (x[S].fn !== g || b && !x[S].once || p && x[S].context !== p) && j.push(x[S]);
      j.length ? this._events[v] = j.length === 1 ? j[0] : j : f(this, v);
    }
    return this;
  }, u.prototype.removeAllListeners = function(d) {
    var g;
    return d ? (g = a ? a + d : d, this._events[g] && f(this, g)) : (this._events = new i(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = a, u.EventEmitter = u, t.exports = u;
}(Vm)), Vm.exports), fh = ur(X6);
function Gm(t, e) {
  const a = t.indexOf(e);
  a > -1 && (t.splice(a, 1), t.unshift(e));
}
function gf(t, e) {
  const a = t.indexOf(e);
  a > -1 && (t.splice(a, 1), t.push(e));
}
function Un(t, e, a = 1) {
  const i = Math.max(0, Math.ceil((e - t) / a)), o = new Array(i);
  let c = -1;
  for (; ++c < i; ) o[c] = t + c * a;
  return o;
}
var F6 = ur(function() {
  if (Ym) return Bm;
  Ym = 1;
  var t = NaN, e = "[object Symbol]", a = /^\s+|\s+$/g, i = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, c = /^0o[0-7]+$/i, f = parseInt, u = typeof pa == "object" && pa && pa.Object === Object && pa, d = typeof self == "object" && self && self.Object === Object && self, g = u || d || Function("return this")(), p = Object.prototype.toString, b = Math.max, v = Math.min, x = function() {
    return g.Date.now();
  };
  function S(w) {
    var N = typeof w;
    return !!w && (N == "object" || N == "function");
  }
  function j(w) {
    if (typeof w == "number") return w;
    if (function(M) {
      return typeof M == "symbol" || /* @__PURE__ */ function(C) {
        return !!C && typeof C == "object";
      }(M) && p.call(M) == e;
    }(w)) return t;
    if (S(w)) {
      var N = typeof w.valueOf == "function" ? w.valueOf() : w;
      w = S(N) ? N + "" : N;
    }
    if (typeof w != "string") return w === 0 ? w : +w;
    w = w.replace(a, "");
    var k = o.test(w);
    return k || c.test(w) ? f(w.slice(2), k ? 2 : 8) : i.test(w) ? t : +w;
  }
  return Bm = function(w, N, k) {
    var M, C, E, L, A, z, q = 0, B = false, J = false, W = true;
    if (typeof w != "function") throw new TypeError("Expected a function");
    function oe(ne) {
      var ue = M, O = C;
      return M = C = void 0, q = ne, L = w.apply(O, ue);
    }
    function ae(ne) {
      var ue = ne - z;
      return z === void 0 || ue >= N || ue < 0 || J && ne - q >= E;
    }
    function K() {
      var ne = x();
      if (ae(ne)) return R(ne);
      A = setTimeout(K, function(ue) {
        var O = N - (ue - z);
        return J ? v(O, E - (ue - q)) : O;
      }(ne));
    }
    function R(ne) {
      return A = void 0, W && M ? oe(ne) : (M = C = void 0, L);
    }
    function G() {
      var ne = x(), ue = ae(ne);
      if (M = arguments, C = this, z = ne, ue) {
        if (A === void 0) return function(O) {
          return q = O, A = setTimeout(K, N), B ? oe(O) : L;
        }(z);
        if (J) return A = setTimeout(K, N), oe(z);
      }
      return A === void 0 && (A = setTimeout(K, N)), L;
    }
    return N = j(N) || 0, S(k) && (B = !!k.leading, E = (J = "maxWait" in k) ? b(j(k.maxWait) || 0, N) : E, W = "trailing" in k ? !!k.trailing : W), G.cancel = function() {
      A !== void 0 && clearTimeout(A), q = 0, M = z = C = A = void 0;
    }, G.flush = function() {
      return A === void 0 ? L : R(x());
    }, G;
  };
}()), Z6 = "sash-module_sash__K-9lB", K6 = "sash-module_disabled__Hm-wx", I6 = "sash-module_mac__Jf6OJ", Qm = "sash-module_vertical__pB-rs", P6 = "sash-module_minimum__-UKxp", W6 = "sash-module_maximum__TCWxD", Xm = "sash-module_horizontal__kFbiw", pf = "sash-module_hover__80W6I", yf = "sash-module_active__bJspD";
let Vn = function(t) {
  return t.Vertical = "VERTICAL", t.Horizontal = "HORIZONTAL", t;
}({}), jn = function(t) {
  return t.Disabled = "DISABLED", t.Minimum = "MINIMUM", t.Maximum = "MAXIMUM", t.Enabled = "ENABLED", t;
}({}), ty = ey ? 20 : 8;
const ny = new fh();
class Fm extends fh {
  get state() {
    return this._state;
  }
  set state(e) {
    this._state !== e && (this.el.classList.toggle(K6, e === jn.Disabled), this.el.classList.toggle("sash-disabled", e === jn.Disabled), this.el.classList.toggle(P6, e === jn.Minimum), this.el.classList.toggle("sash-minimum", e === jn.Minimum), this.el.classList.toggle(W6, e === jn.Maximum), this.el.classList.toggle("sash-maximum", e === jn.Maximum), this._state = e, this.emit("enablementChange", e));
  }
  constructor(e, a, i) {
    var o;
    super(), this.el = void 0, this.layoutProvider = void 0, this.orientation = void 0, this.size = void 0, this.hoverDelay = 300, this.hoverDelayer = F6((c) => c.classList.add("sash-hover", pf), this.hoverDelay), this._state = jn.Enabled, this.onPointerStart = (c) => {
      const f = c.pageX, u = c.pageY, d = { startX: f, currentX: f, startY: u, currentY: u };
      this.el.classList.add("sash-active", yf), this.emit("start", d), this.el.setPointerCapture(c.pointerId);
      const g = (b) => {
        b.preventDefault();
        const v = { startX: f, currentX: b.pageX, startY: u, currentY: b.pageY };
        this.emit("change", v);
      }, p = (b) => {
        b.preventDefault(), this.el.classList.remove("sash-active", yf), this.hoverDelayer.cancel(), this.emit("end"), this.el.releasePointerCapture(b.pointerId), window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", p);
      };
      window.addEventListener("pointermove", g), window.addEventListener("pointerup", p);
    }, this.onPointerDoublePress = () => {
      this.emit("reset");
    }, this.onMouseEnter = () => {
      this.el.classList.contains(yf) ? (this.hoverDelayer.cancel(), this.el.classList.add("sash-hover", pf)) : this.hoverDelayer(this.el);
    }, this.onMouseLeave = () => {
      this.hoverDelayer.cancel(), this.el.classList.remove("sash-hover", pf);
    }, this.el = document.createElement("div"), this.el.classList.add("sash", Z6), this.el.dataset.testid = "sash", e.append(this.el), G6 && this.el.classList.add("sash-mac", I6), this.el.addEventListener("pointerdown", this.onPointerStart), this.el.addEventListener("dblclick", this.onPointerDoublePress), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), typeof i.size == "number" ? (this.size = i.size, i.orientation === Vn.Vertical ? this.el.style.width = `${this.size}px` : this.el.style.height = `${this.size}px`) : (this.size = ty, ny.on("onDidChangeGlobalSize", (c) => {
      this.size = c, this.layout();
    })), this.layoutProvider = a, this.orientation = (o = i.orientation) != null ? o : Vn.Vertical, this.orientation === Vn.Horizontal ? (this.el.classList.add("sash-horizontal", Xm), this.el.classList.remove("sash-vertical", Qm)) : (this.el.classList.remove("sash-horizontal", Xm), this.el.classList.add("sash-vertical", Qm)), this.layout();
  }
  layout() {
    if (this.orientation === Vn.Vertical) {
      const e = this.layoutProvider;
      this.el.style.left = e.getVerticalSashLeft(this) - this.size / 2 + "px", e.getVerticalSashTop && (this.el.style.top = e.getVerticalSashTop(this) + "px"), e.getVerticalSashHeight && (this.el.style.height = e.getVerticalSashHeight(this) + "px");
    } else {
      const e = this.layoutProvider;
      this.el.style.top = e.getHorizontalSashTop(this) - this.size / 2 + "px", e.getHorizontalSashLeft && (this.el.style.left = e.getHorizontalSashLeft(this) + "px"), e.getHorizontalSashWidth && (this.el.style.width = e.getHorizontalSashWidth(this) + "px");
    }
  }
  dispose() {
    this.el.removeEventListener("pointerdown", this.onPointerStart), this.el.removeEventListener("dblclick", this.onPointerDoublePress), this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("mouseleave", () => this.onMouseLeave), this.el.remove();
  }
}
let Uo;
var bf;
(bf = Uo || (Uo = {})).Distribute = { type: "distribute" }, bf.Split = function(t) {
  return { type: "split", index: t };
}, bf.Invisible = function(t) {
  return { type: "invisible", cachedVisibleSize: t };
};
let Ll = function(t) {
  return t.Normal = "NORMAL", t.Low = "LOW", t.High = "HIGH", t;
}({});
class ly {
  constructor(e, a, i) {
    this.container = void 0, this.view = void 0, this._size = void 0, this._cachedVisibleSize = void 0, this.container = e, this.view = a, this.container.classList.add("split-view-view", Pp), this.container.dataset.testid = "split-view-view", typeof i == "number" ? (this._size = i, this._cachedVisibleSize = void 0, e.classList.add("split-view-view-visible")) : (this._size = 0, this._cachedVisibleSize = i.cachedVisibleSize);
  }
  set size(e) {
    this._size = e;
  }
  get size() {
    return this._size;
  }
  get priority() {
    return this.view.priority;
  }
  get snap() {
    return !!this.view.snap;
  }
  get cachedVisibleSize() {
    return this._cachedVisibleSize;
  }
  get visible() {
    return this._cachedVisibleSize === void 0;
  }
  setVisible(e, a) {
    e !== this.visible && (e ? (this.size = ll(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize), this._cachedVisibleSize = void 0) : (this._cachedVisibleSize = typeof a == "number" ? a : this.size, this.size = 0), this.container.classList.toggle("split-view-view-visible", e), this.view.setVisible && this.view.setVisible(e));
  }
  get minimumSize() {
    return this.visible ? this.view.minimumSize : 0;
  }
  get viewMinimumSize() {
    return this.view.minimumSize;
  }
  get maximumSize() {
    return this.visible ? this.view.maximumSize : 0;
  }
  get viewMaximumSize() {
    return this.view.maximumSize;
  }
  set enabled(e) {
    this.container.style.pointerEvents = e ? "" : "none";
  }
  layout(e) {
    this.layoutContainer(e), this.view.layout(this.size, e);
  }
}
class J6 extends ly {
  layoutContainer(e) {
    this.container.style.left = `${e}px`, this.container.style.width = `${this.size}px`;
  }
}
class ew extends ly {
  layoutContainer(e) {
    this.container.style.top = `${e}px`, this.container.style.height = `${this.size}px`;
  }
}
class tw extends fh {
  get startSnappingEnabled() {
    return this._startSnappingEnabled;
  }
  set startSnappingEnabled(e) {
    this._startSnappingEnabled !== e && (this._startSnappingEnabled = e, this.updateSashEnablement());
  }
  get endSnappingEnabled() {
    return this._endSnappingEnabled;
  }
  set endSnappingEnabled(e) {
    this._endSnappingEnabled !== e && (this._endSnappingEnabled = e, this.updateSashEnablement());
  }
  constructor(e, a = {}, i, o, c) {
    var f, u;
    if (super(), this.onDidChange = void 0, this.onDidDragStart = void 0, this.onDidDragEnd = void 0, this.orientation = void 0, this.sashContainer = void 0, this.size = 0, this.contentSize = 0, this.proportions = void 0, this.viewItems = [], this.sashItems = [], this.sashDragState = void 0, this.proportionalLayout = void 0, this.getSashOrthogonalSize = void 0, this._startSnappingEnabled = true, this._endSnappingEnabled = true, this.onSashEnd = (d) => {
      this.emit("sashchange", d), this.saveProportions();
      for (const g of this.viewItems) g.enabled = true;
    }, this.orientation = (f = a.orientation) != null ? f : Vn.Vertical, this.proportionalLayout = (u = a.proportionalLayout) != null ? u : true, this.getSashOrthogonalSize = a.getSashOrthogonalSize, i && (this.onDidChange = i), o && (this.onDidDragStart = o), c && (this.onDidDragEnd = c), this.sashContainer = document.createElement("div"), this.sashContainer.classList.add("sash-container", H6), e.prepend(this.sashContainer), a.descriptor) {
      this.size = a.descriptor.size;
      for (const [d, g] of a.descriptor.views.entries()) {
        const p = g.size, b = g.container, v = g.view;
        this.addView(b, v, p, d, true);
      }
      this.contentSize = this.viewItems.reduce((d, g) => d + g.size, 0), this.saveProportions();
    }
  }
  addView(e, a, i, o = this.viewItems.length, c) {
    let f;
    f = typeof i == "number" ? i : i.type === "split" ? this.getViewSize(i.index) / 2 : i.type === "invisible" ? { cachedVisibleSize: i.cachedVisibleSize } : a.minimumSize;
    const u = this.orientation === Vn.Vertical ? new ew(e, a, f) : new J6(e, a, f);
    if (this.viewItems.splice(o, 0, u), this.viewItems.length > 1) {
      const d = this.orientation === Vn.Vertical ? new Fm(this.sashContainer, { getHorizontalSashTop: (b) => this.getSashPosition(b), getHorizontalSashWidth: this.getSashOrthogonalSize }, { orientation: Vn.Horizontal }) : new Fm(this.sashContainer, { getVerticalSashLeft: (b) => this.getSashPosition(b), getVerticalSashHeight: this.getSashOrthogonalSize }, { orientation: Vn.Vertical }), g = this.orientation === Vn.Vertical ? (b) => ({ sash: d, start: b.startY, current: b.currentY }) : (b) => ({ sash: d, start: b.startX, current: b.currentX });
      d.on("start", (b) => {
        var v;
        this.emit("sashDragStart"), this.onSashStart(g(b));
        const x = this.viewItems.map((S) => S.size);
        (v = this.onDidDragStart) == null || v.call(this, x);
      }), d.on("change", (b) => this.onSashChange(g(b))), d.on("end", () => {
        var b;
        this.emit("sashDragEnd"), this.onSashEnd(this.sashItems.findIndex((x) => x.sash === d));
        const v = this.viewItems.map((x) => x.size);
        (b = this.onDidDragEnd) == null || b.call(this, v);
      }), d.on("reset", () => {
        const b = this.sashItems.findIndex((w) => w.sash === d), v = Un(b, -1, -1), x = Un(b + 1, this.viewItems.length), S = this.findFirstSnapIndex(v), j = this.findFirstSnapIndex(x);
        (typeof S != "number" || this.viewItems[S].visible) && (typeof j != "number" || this.viewItems[j].visible) && this.emit("sashreset", b);
      });
      const p = { sash: d };
      this.sashItems.splice(o - 1, 0, p);
    }
    c || this.relayout(), c || typeof i == "number" || i.type !== "distribute" || this.distributeViewSizes();
  }
  removeView(e, a) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    const i = this.viewItems.splice(e, 1)[0].view;
    if (this.viewItems.length >= 1) {
      const o = Math.max(e - 1, 0);
      this.sashItems.splice(o, 1)[0].sash.dispose();
    }
    return this.relayout(), a && a.type === "distribute" && this.distributeViewSizes(), i;
  }
  moveView(e, a, i) {
    const o = this.getViewCachedVisibleSize(a), c = o === void 0 ? this.getViewSize(a) : Uo.Invisible(o), f = this.removeView(a);
    this.addView(e, f, c, i);
  }
  getViewCachedVisibleSize(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].cachedVisibleSize;
  }
  layout(e = this.size) {
    const a = Math.max(this.size, this.contentSize);
    if (this.size = e, this.proportions) for (let i = 0; i < this.viewItems.length; i++) {
      const o = this.viewItems[i];
      o.size = ll(Math.round(this.proportions[i] * e), o.minimumSize, o.maximumSize);
    }
    else {
      const i = Un(0, this.viewItems.length), o = i.filter((f) => this.viewItems[f].priority === Ll.Low), c = i.filter((f) => this.viewItems[f].priority === Ll.High);
      this.resize(this.viewItems.length - 1, e - a, void 0, o, c);
    }
    this.distributeEmptySpace(), this.layoutViews();
  }
  resizeView(e, a) {
    if (e < 0 || e >= this.viewItems.length) return;
    const i = Un(0, this.viewItems.length).filter((u) => u !== e), o = [...i.filter((u) => this.viewItems[u].priority === Ll.Low), e], c = i.filter((u) => this.viewItems[u].priority === Ll.High), f = this.viewItems[e];
    a = Math.round(a), a = ll(a, f.minimumSize, Math.min(f.maximumSize, this.size)), f.size = a, this.relayout(o, c);
  }
  resizeViews(e) {
    for (let a = 0; a < e.length; a++) {
      const i = this.viewItems[a];
      let o = e[a];
      o = Math.round(o), o = ll(o, i.minimumSize, Math.min(i.maximumSize, this.size)), i.size = o;
    }
    this.contentSize = this.viewItems.reduce((a, i) => a + i.size, 0), this.saveProportions(), this.layout(this.size);
  }
  getViewSize(e) {
    return e < 0 || e >= this.viewItems.length ? -1 : this.viewItems[e].size;
  }
  isViewVisible(e) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    return this.viewItems[e].visible;
  }
  setViewVisible(e, a) {
    if (e < 0 || e >= this.viewItems.length) throw new Error("Index out of bounds");
    this.viewItems[e].setVisible(a), this.distributeEmptySpace(e), this.layoutViews(), this.saveProportions();
  }
  distributeViewSizes() {
    const e = [];
    let a = 0;
    for (const u of this.viewItems) u.maximumSize - u.minimumSize > 0 && (e.push(u), a += u.size);
    const i = Math.floor(a / e.length);
    for (const u of e) u.size = ll(i, u.minimumSize, u.maximumSize);
    const o = Un(0, this.viewItems.length), c = o.filter((u) => this.viewItems[u].priority === Ll.Low), f = o.filter((u) => this.viewItems[u].priority === Ll.High);
    this.relayout(c, f);
  }
  dispose() {
    this.sashItems.forEach((e) => e.sash.dispose()), this.sashItems = [], this.sashContainer.remove();
  }
  relayout(e, a) {
    const i = this.viewItems.reduce((o, c) => o + c.size, 0);
    this.resize(this.viewItems.length - 1, this.size - i, void 0, e, a), this.distributeEmptySpace(), this.layoutViews(), this.saveProportions();
  }
  onSashStart({ sash: e, start: a }) {
    const i = this.sashItems.findIndex((o) => o.sash === e);
    ((o) => {
      const c = this.viewItems.map((k) => k.size);
      let f, u, d = Number.NEGATIVE_INFINITY, g = Number.POSITIVE_INFINITY;
      const p = Un(i, -1, -1), b = Un(i + 1, this.viewItems.length), v = p.reduce((k, M) => k + (this.viewItems[M].minimumSize - c[M]), 0), x = p.reduce((k, M) => k + (this.viewItems[M].viewMaximumSize - c[M]), 0), S = b.length === 0 ? Number.POSITIVE_INFINITY : b.reduce((k, M) => k + (c[M] - this.viewItems[M].minimumSize), 0), j = b.length === 0 ? Number.NEGATIVE_INFINITY : b.reduce((k, M) => k + (c[M] - this.viewItems[M].viewMaximumSize), 0);
      d = Math.max(v, j), g = Math.min(S, x);
      const w = this.findFirstSnapIndex(p), N = this.findFirstSnapIndex(b);
      if (typeof w == "number") {
        const k = this.viewItems[w], M = Math.floor(k.viewMinimumSize / 2);
        f = { index: w, limitDelta: k.visible ? d - M : d + M, size: k.size };
      }
      if (typeof N == "number") {
        const k = this.viewItems[N], M = Math.floor(k.viewMinimumSize / 2);
        u = { index: N, limitDelta: k.visible ? g + M : g - M, size: k.size };
      }
      this.sashDragState = { start: o, current: o, index: i, sizes: c, minDelta: d, maxDelta: g, snapBefore: f, snapAfter: u };
    })(a);
  }
  onSashChange({ current: e }) {
    const { index: a, start: i, sizes: o, minDelta: c, maxDelta: f, snapBefore: u, snapAfter: d } = this.sashDragState;
    this.sashDragState.current = e;
    const g = e - i;
    this.resize(a, g, o, void 0, void 0, c, f, u, d), this.distributeEmptySpace(), this.layoutViews();
  }
  getSashPosition(e) {
    let a = 0;
    for (let i = 0; i < this.sashItems.length; i++) if (a += this.viewItems[i].size, this.sashItems[i].sash === e) return a;
    return 0;
  }
  resize(e, a, i = this.viewItems.map((p) => p.size), o, c, f = Number.NEGATIVE_INFINITY, u = Number.POSITIVE_INFINITY, d, g) {
    if (e < 0 || e >= this.viewItems.length) return 0;
    const p = Un(e, -1, -1), b = Un(e + 1, this.viewItems.length);
    if (c) for (const A of c) Gm(p, A), Gm(b, A);
    if (o) for (const A of o) gf(p, A), gf(b, A);
    const v = p.map((A) => this.viewItems[A]), x = p.map((A) => i[A]), S = b.map((A) => this.viewItems[A]), j = b.map((A) => i[A]), w = p.reduce((A, z) => A + (this.viewItems[z].minimumSize - i[z]), 0), N = p.reduce((A, z) => A + (this.viewItems[z].maximumSize - i[z]), 0), k = b.length === 0 ? Number.POSITIVE_INFINITY : b.reduce((A, z) => A + (i[z] - this.viewItems[z].minimumSize), 0), M = b.length === 0 ? Number.NEGATIVE_INFINITY : b.reduce((A, z) => A + (i[z] - this.viewItems[z].maximumSize), 0), C = Math.max(w, M, f), E = Math.min(k, N, u);
    let L = false;
    if (d) {
      const A = this.viewItems[d.index], z = a >= d.limitDelta;
      L = z !== A.visible, A.setVisible(z, d.size);
    }
    if (!L && g) {
      const A = this.viewItems[g.index], z = a < g.limitDelta;
      L = z !== A.visible, A.setVisible(z, g.size);
    }
    if (L) return this.resize(e, a, i, o, c, f, u);
    for (let A = 0, z = a = ll(a, C, E); A < v.length; A++) {
      const q = v[A], B = ll(x[A] + z, q.minimumSize, q.maximumSize);
      z -= B - x[A], q.size = B;
    }
    for (let A = 0, z = a; A < S.length; A++) {
      const q = S[A], B = ll(j[A] - z, q.minimumSize, q.maximumSize);
      z += B - j[A], q.size = B;
    }
    return a;
  }
  distributeEmptySpace(e) {
    const a = this.viewItems.reduce((c, f) => c + f.size, 0);
    let i = this.size - a;
    const o = Un(this.viewItems.length - 1, -1, -1);
    typeof e == "number" && gf(o, e);
    for (let c = 0; i !== 0 && c < o.length; c++) {
      const f = this.viewItems[o[c]], u = ll(f.size + i, f.minimumSize, f.maximumSize);
      i -= u - f.size, f.size = u;
    }
  }
  layoutViews() {
    var e;
    this.contentSize = this.viewItems.reduce((i, o) => i + o.size, 0);
    let a = 0;
    for (const i of this.viewItems) i.layout(a), a += i.size;
    (e = this.onDidChange) != null && e.call(this, this.viewItems.map((i) => i.size)), this.sashItems.forEach((i) => i.sash.layout()), this.updateSashEnablement();
  }
  saveProportions() {
    this.proportionalLayout && this.contentSize > 0 && (this.proportions = this.viewItems.map((e) => e.size / this.contentSize));
  }
  updateSashEnablement() {
    let e = false;
    const a = this.viewItems.map((d) => e = d.size - d.minimumSize > 0 || e);
    e = false;
    const i = this.viewItems.map((d) => e = d.maximumSize - d.size > 0 || e), o = [...this.viewItems].reverse();
    e = false;
    const c = o.map((d) => e = d.size - d.minimumSize > 0 || e).reverse();
    e = false;
    const f = o.map((d) => e = d.maximumSize - d.size > 0 || e).reverse();
    let u = 0;
    for (let d = 0; d < this.sashItems.length; d++) {
      const { sash: g } = this.sashItems[d];
      u += this.viewItems[d].size;
      const p = !(a[d] && f[d + 1]), b = !(i[d] && c[d + 1]);
      if (p && b) {
        const v = Un(d, -1, -1), x = Un(d + 1, this.viewItems.length), S = this.findFirstSnapIndex(v), j = this.findFirstSnapIndex(x), w = typeof S == "number" && !this.viewItems[S].visible, N = typeof j == "number" && !this.viewItems[j].visible;
        w && c[d] && (u > 0 || this.startSnappingEnabled) ? g.state = jn.Minimum : N && a[d] && (u < this.contentSize || this.endSnappingEnabled) ? g.state = jn.Maximum : g.state = jn.Disabled;
      } else g.state = p && !b ? jn.Minimum : !p && b ? jn.Maximum : jn.Enabled;
    }
  }
  findFirstSnapIndex(e) {
    for (const a of e) {
      const i = this.viewItems[a];
      if (i.visible && i.snap) return a;
    }
    for (const a of e) {
      const i = this.viewItems[a];
      if (i.visible && i.maximumSize - i.minimumSize > 0) return;
      if (!i.visible && i.snap) return a;
    }
  }
}
class zs {
  constructor(e) {
    this.size = void 0, this.size = e;
  }
  getPreferredSize() {
    return this.size;
  }
}
class Zm {
  constructor(e, a) {
    this.proportion = void 0, this.layoutService = void 0, this.proportion = e, this.layoutService = a;
  }
  getPreferredSize() {
    return this.proportion * this.layoutService.getSize();
  }
}
class Ao {
  getPreferredSize() {
  }
}
class Km {
  get preferredSize() {
    return this.layoutStrategy.getPreferredSize();
  }
  set preferredSize(e) {
    if (typeof e == "number") this.layoutStrategy = new zs(e);
    else if (typeof e == "string") {
      const a = e.trim();
      if (Mo(a, "%")) {
        const i = Number(a.slice(0, -1)) / 100;
        this.layoutStrategy = new Zm(i, this.layoutService);
      } else if (Mo(a, "px")) {
        const i = Number(a.slice(0, -2)) / 100;
        this.layoutStrategy = new zs(i);
      } else if (typeof Number.parseFloat(a) == "number") {
        const i = Number.parseFloat(a);
        this.layoutStrategy = new zs(i);
      } else this.layoutStrategy = new Ao();
    } else this.layoutStrategy = new Ao();
  }
  constructor(e, a) {
    var i;
    if (this.minimumSize = 0, this.maximumSize = Number.POSITIVE_INFINITY, this.element = void 0, this.priority = void 0, this.snap = void 0, this.layoutService = void 0, this.layoutStrategy = void 0, this.layoutService = e, this.element = a.element, this.minimumSize = typeof a.minimumSize == "number" ? a.minimumSize : 30, this.maximumSize = typeof a.maximumSize == "number" ? a.maximumSize : Number.POSITIVE_INFINITY, typeof a.preferredSize == "number") this.layoutStrategy = new zs(a.preferredSize);
    else if (typeof a.preferredSize == "string") {
      const o = a.preferredSize.trim();
      if (Mo(o, "%")) {
        const c = Number(o.slice(0, -1)) / 100;
        this.layoutStrategy = new Zm(c, this.layoutService);
      } else if (Mo(o, "px")) {
        const c = Number(o.slice(0, -2));
        this.layoutStrategy = new zs(c);
      } else if (typeof Number.parseFloat(o) == "number") {
        const c = Number.parseFloat(o);
        this.layoutStrategy = new zs(c);
      } else this.layoutStrategy = new Ao();
    } else this.layoutStrategy = new Ao();
    this.priority = (i = a.priority) != null ? i : Ll.Normal, this.snap = typeof a.snap == "boolean" && a.snap;
  }
  layout(e) {
  }
}
function Im(t) {
  return t.minSize !== void 0 || t.maxSize !== void 0 || t.preferredSize !== void 0 || t.priority !== void 0 || t.visible !== void 0;
}
const hh = $.forwardRef(({ className: t, children: e }, a) => qt.createElement("div", { ref: a, className: Vf("split-view-view", Pp, t) }, e));
hh.displayName = "Allotment.Pane";
const ay = $.forwardRef(({ children: t, className: e, id: a, maxSize: i = 1 / 0, minSize: o = 30, proportionalLayout: c = true, separator: f = true, sizes: u, defaultSizes: d = u, snap: g = false, vertical: p = false, onChange: b, onReset: v, onVisibleChange: x, onDragStart: S, onDragEnd: j }, w) => {
  const N = $.useRef(null), k = $.useRef([]), M = $.useRef(/* @__PURE__ */ new Map()), C = $.useRef(null), E = $.useRef(/* @__PURE__ */ new Map()), L = $.useRef(new Q6()), A = $.useRef([]), [z, q] = $.useState(false), B = $.useMemo(() => qt.Children.toArray(t).filter(qt.isValidElement), [t]), J = $.useCallback((W) => {
    var oe, ae;
    const K = (oe = A.current) == null ? void 0 : oe[W];
    return typeof (K == null ? void 0 : K.preferredSize) == "number" && ((ae = C.current) != null && ae.resizeView(W, Math.round(K.preferredSize)), true);
  }, []);
  return $.useImperativeHandle(w, () => ({ reset: () => {
    if (v) v();
    else {
      var W;
      (W = C.current) == null || W.distributeViewSizes();
      for (let oe = 0; oe < A.current.length; oe++) J(oe);
    }
  }, resize: (W) => {
    var oe;
    (oe = C.current) == null || oe.resizeViews(W);
  } })), Hm(() => {
    let W = true;
    d && E.current.size !== d.length && (W = false, console.warn(`Expected ${d.length} children based on defaultSizes but found ${E.current.size}`)), W && d && (k.current = B.map((K) => K.key));
    const oe = Zi({ orientation: p ? Vn.Vertical : Vn.Horizontal, proportionalLayout: c }, W && d && { descriptor: { size: d.reduce((K, R) => K + R, 0), views: d.map((K, R) => {
      var G, ne, ue, O;
      const Y = M.current.get(k.current[R]), re = new Km(L.current, Zi({ element: document.createElement("div"), minimumSize: (G = Y == null ? void 0 : Y.minSize) != null ? G : o, maximumSize: (ne = Y == null ? void 0 : Y.maxSize) != null ? ne : i, priority: (ue = Y == null ? void 0 : Y.priority) != null ? ue : Ll.Normal }, (Y == null ? void 0 : Y.preferredSize) && { preferredSize: Y == null ? void 0 : Y.preferredSize }, { snap: (O = Y == null ? void 0 : Y.snap) != null ? O : g }));
      return A.current.push(re), { container: [...E.current.values()][R], size: K, view: re };
    }) } });
    C.current = new tw(N.current, oe, b, S, j), C.current.on("sashDragStart", () => {
      var K;
      (K = N.current) == null || K.classList.add("split-view-sash-dragging");
    }), C.current.on("sashDragEnd", () => {
      var K;
      (K = N.current) == null || K.classList.remove("split-view-sash-dragging");
    }), C.current.on("sashchange", (K) => {
      if (x && C.current) {
        const R = B.map((G) => G.key);
        for (let G = 0; G < R.length; G++) {
          const ne = M.current.get(R[G]);
          (ne == null ? void 0 : ne.visible) !== void 0 && ne.visible !== C.current.isViewVisible(G) && x(G, C.current.isViewVisible(G));
        }
      }
    }), C.current.on("sashreset", (K) => {
      if (v) v();
      else {
        var R;
        if (J(K) || J(K + 1)) return;
        (R = C.current) == null || R.distributeViewSizes();
      }
    });
    const ae = C.current;
    return () => {
      ae.dispose();
    };
  }, []), Hm(() => {
    if (z) {
      const te = B.map((he) => he.key), ce = [...k.current], me = te.filter((he) => !k.current.includes(he)), de = te.filter((he) => k.current.includes(he)), Ae = k.current.map((he) => !te.includes(he));
      for (let he = Ae.length - 1; he >= 0; he--) {
        var W;
        Ae[he] && ((W = C.current) != null && W.removeView(he), ce.splice(he, 1), A.current.splice(he, 1));
      }
      for (const he of me) {
        var oe, ae, K, R, G;
        const pe = M.current.get(he), xe = new Km(L.current, Zi({ element: document.createElement("div"), minimumSize: (oe = pe == null ? void 0 : pe.minSize) != null ? oe : o, maximumSize: (ae = pe == null ? void 0 : pe.maxSize) != null ? ae : i, priority: (K = pe == null ? void 0 : pe.priority) != null ? K : Ll.Normal }, (pe == null ? void 0 : pe.preferredSize) && { preferredSize: pe == null ? void 0 : pe.preferredSize }, { snap: (R = pe == null ? void 0 : pe.snap) != null ? R : g }));
        (G = C.current) != null && G.addView(E.current.get(he), xe, Uo.Distribute, te.findIndex((ge) => ge === he)), ce.splice(te.findIndex((ge) => ge === he), 0, he), A.current.splice(te.findIndex((ge) => ge === he), 0, xe);
      }
      for (; !L6(te, ce); ) for (const [he, pe] of te.entries()) {
        const xe = ce.findIndex((ge) => ge === pe);
        if (xe !== he) {
          var ne;
          (ne = C.current) == null || ne.moveView(E.current.get(pe), xe, he);
          const ge = ce[xe];
          ce.splice(xe, 1), ce.splice(he, 0, ge);
          break;
        }
      }
      for (const he of me) {
        var ue;
        const pe = te.findIndex((ge) => ge === he), xe = A.current[pe].preferredSize;
        xe !== void 0 && ((ue = C.current) == null || ue.resizeView(pe, xe));
      }
      for (const he of [...me, ...de]) {
        var O, Y;
        const pe = M.current.get(he), xe = te.findIndex((ge) => ge === he);
        pe && Im(pe) && pe.visible !== void 0 && ((O = C.current) == null ? void 0 : O.isViewVisible(xe)) !== pe.visible && ((Y = C.current) == null || Y.setViewVisible(xe, pe.visible));
      }
      for (const he of de) {
        const pe = M.current.get(he), xe = te.findIndex((ge) => ge === he);
        if (pe && Im(pe)) {
          var re;
          pe.preferredSize !== void 0 && A.current[xe].preferredSize !== pe.preferredSize && (A.current[xe].preferredSize = pe.preferredSize);
          let ge = false;
          pe.minSize !== void 0 && A.current[xe].minimumSize !== pe.minSize && (A.current[xe].minimumSize = pe.minSize, ge = true), pe.maxSize !== void 0 && A.current[xe].maximumSize !== pe.maxSize && (A.current[xe].maximumSize = pe.maxSize, ge = true), ge && ((re = C.current) == null || re.layout());
        }
      }
      (me.length > 0 || Ae.length > 0) && (k.current = te);
    }
  }, [B, z, i, o, g]), $.useEffect(() => {
    C.current && (C.current.onDidChange = b);
  }, [b]), $.useEffect(() => {
    C.current && (C.current.onDidDragStart = S);
  }, [S]), $.useEffect(() => {
    C.current && (C.current.onDidDragEnd = j);
  }, [j]), U6({ ref: N, onResize: ({ width: W, height: oe }) => {
    var ae;
    W && oe && ((ae = C.current) != null && ae.layout(p ? oe : W), L.current.setSize(p ? oe : W), q(true));
  } }), $.useEffect(() => {
    ey && nw(20);
  }, []), qt.createElement("div", { ref: N, className: Vf("split-view", p ? "split-view-vertical" : "split-view-horizontal", { "split-view-separator-border": f }, $6, p ? V6 : B6, { [Y6]: f }, e), id: a }, qt.createElement("div", { className: Vf("split-view-container", q6) }, qt.Children.toArray(t).map((W) => {
    if (!qt.isValidElement(W)) return null;
    const oe = W.key;
    return W.type.displayName === "Allotment.Pane" ? (M.current.set(oe, W.props), qt.cloneElement(W, { key: oe, ref: (ae) => {
      const K = W.ref;
      K && (K.current = ae), ae ? E.current.set(oe, ae) : E.current.delete(oe);
    } })) : qt.createElement(hh, { key: oe, ref: (ae) => {
      ae ? E.current.set(oe, ae) : E.current.delete(oe);
    } }, W);
  })));
});
function nw(t) {
  const e = ll(t, 4, 20), a = ll(t, 1, 8);
  document.documentElement.style.setProperty("--sash-size", e + "px"), document.documentElement.style.setProperty("--sash-hover-size", a + "px"), function(i) {
    ty = i, ny.emit("onDidChangeGlobalSize", i);
  }(e);
}
ay.displayName = "Allotment";
var qn = Object.assign(ay, { Pane: hh });
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const lw = (t) => {
  const e = F.c(9), { onMouseUp: a, onMouseDown: i, onClick: o } = t, { offset: c } = Ne(sr);
  let f;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (f = [40, 10], e[0] = f) : f = e[0];
  const [u, d] = f;
  let g;
  e[1] === Symbol.for("react.memo_cache_sentinel") ? (g = m.jsx("pattern", { id: "subgrid", width: d, height: d, patternUnits: "userSpaceOnUse", children: m.jsx("path", { className: "stroke-width-0_5 fill-none", stroke: "hsl(0, 0%, 30%)", d: `M ${d} 0 L 0 0 0 ${d}` }) }), e[1] = g) : g = e[1];
  let p;
  e[2] === Symbol.for("react.memo_cache_sentinel") ? (p = m.jsxs("defs", { children: [g, m.jsxs("pattern", { id: "grid", width: u, height: u, patternUnits: "userSpaceOnUse", children: [m.jsx("rect", { width: u, height: u, fill: "url(#subgrid)" }), m.jsx("path", { className: "stroke-1 fill-none", stroke: "hsl(0, 0%, 40%)", d: `M ${u} 0 L 0 0 0 ${u}` })] })] }), e[2] = p) : p = e[2];
  let b;
  return e[3] !== c[0] || e[4] !== c[1] || e[5] !== o || e[6] !== i || e[7] !== a ? (b = m.jsxs(m.Fragment, { children: [p, m.jsx("rect", { width: "100%", height: "100%", x: c[0], y: c[1], fill: "url(#grid)", onMouseUp: a, onMouseDown: i, onClick: o })] }), e[3] = c[0], e[4] = c[1], e[5] = o, e[6] = i, e[7] = a, e[8] = b) : b = e[8], b;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const aw = (t) => {
  const e = F.c(36), { children: a, onMouseUp: i, onMouseDown: o, onClick: c } = t, f = Zt(Qf), u = $.useRef(null);
  let d, g;
  e[0] !== f ? (d = () => {
    const te = new ResizeObserver((ce) => {
      const me = ce[0];
      me && f([me.contentRect.width, me.contentRect.height]);
    });
    return u.current && te.observe(u.current), () => te.disconnect();
  }, g = [f], e[0] = f, e[1] = d, e[2] = g) : (d = e[1], g = e[2]), $.useEffect(d, g);
  const [p, b] = Ee(Xf), v = (te) => {
    var _a6;
    const { x: ce, y: me } = ((_a6 = u.current) == null ? void 0 : _a6.getBoundingClientRect()) ?? { x: 0, y: 0 }, de = [te.clientX - ce, te.clientY - me];
    b(de), C && w({ scale: j.scale, offset: [(z[0] - de[0]) * j.scale + W[0], (z[1] - de[1]) * j.scale + W[1]] });
  }, [x, S] = Ee(sr), j = x, w = S, N = Ne(Sg), [k, M] = $.useState(false), C = k;
  let E;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (E = [0, 0], e[3] = E) : E = e[3];
  const [L, A] = $.useState(E), z = L;
  let q;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (q = [0, 0], e[4] = q) : q = e[4];
  const [B, J] = $.useState(q), W = B;
  let oe;
  e[5] !== j.offset || e[6] !== p || e[7] !== J || e[8] !== A || e[9] !== M ? (oe = () => {
    A(p), J(j.offset), M(true);
  }, e[5] = j.offset, e[6] = p, e[7] = J, e[8] = A, e[9] = M, e[10] = oe) : oe = e[10];
  const ae = oe;
  let K;
  e[11] !== M ? (K = () => M(false), e[11] = M, e[12] = K) : K = e[12];
  const R = K;
  let G;
  e[13] !== j.offset[0] || e[14] !== j.offset[1] || e[15] !== j.scale || e[16] !== p[0] || e[17] !== p[1] || e[18] !== w ? (G = (te) => {
    const ce = te.deltaY > 0 ? 0.1 : j.scale > 0.15000000000000002 ? -0.1 : 0;
    w({ scale: j.scale + ce, offset: [j.offset[0] - p[0] * ce, j.offset[1] - p[1] * ce] });
  }, e[13] = j.offset[0], e[14] = j.offset[1], e[15] = j.scale, e[16] = p[0], e[17] = p[1], e[18] = w, e[19] = G) : G = e[19];
  const ne = G;
  let ue;
  e[20] !== v ? (ue = (te) => v(te), e[20] = v, e[21] = ue) : ue = e[21];
  let O;
  e[22] !== o || e[23] !== ae ? (O = (te) => {
    te.button === 1 && ae(), o && o(te);
  }, e[22] = o, e[23] = ae, e[24] = O) : O = e[24];
  let Y;
  e[25] !== R || e[26] !== i ? (Y = (te) => {
    te.button === 1 && R(), i && i(te);
  }, e[25] = R, e[26] = i, e[27] = Y) : Y = e[27];
  let re;
  return e[28] !== ne || e[29] !== a || e[30] !== c || e[31] !== N || e[32] !== ue || e[33] !== O || e[34] !== Y ? (re = m.jsx("div", { ref: u, className: "h-full w-full bg-gray-black", children: m.jsx("svg", { className: "select-none", viewBox: N, onMouseMove: ue, onMouseDown: O, onMouseUp: Y, onClick: c, onWheel: ne, children: a }) }), e[28] = ne, e[29] = a, e[30] = c, e[31] = N, e[32] = ue, e[33] = O, e[34] = Y, e[35] = re) : re = e[35], re;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const sw = (t) => {
  switch (t) {
    case ">":
      return "<";
    case "<":
      return ">";
    case ">]":
      return "[<";
    case "<]":
      return "[>";
    case "[>":
      return "<]";
    case "[<":
      return ">]";
    case "[>!":
      return "!<]";
    case "!<]":
      return "[>!";
  }
  return t;
}, iw = () => {
  const t = F.c(11);
  let e;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = m.jsxs("g", { id: "port-icon-question", children: [m.jsx("path", { className: "fill-none stroke-3", d: "M-4,-4 A4,4 0 1,1 0,0 L0,2" }), m.jsx("circle", { className: "stroke-none", cx: 0, cy: 7, r: 2 })] }), t[0] = e) : e = t[0];
  let a;
  t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = m.jsxs("g", { id: "port-icon-exclamation", children: [m.jsx("line", { className: "[stroke-linecap:butt] stroke-4", x1: 0, y1: -10, x2: 0, y2: 3 }), m.jsx("circle", { className: "stroke-none", cx: 0, cy: 7, r: 2 })] }), t[1] = a) : a = t[1];
  let i;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsx("g", { id: "port-icon-greater", children: m.jsx("path", { className: "fill-none stroke-3", d: "M-4,-8 L6,0 L-4,8" }) }), t[2] = i) : i = t[2];
  let o;
  t[3] === Symbol.for("react.memo_cache_sentinel") ? (o = m.jsx("g", { id: "port-icon-less", children: m.jsx("path", { className: "fill-none stroke-3", d: "M4,-8 L-6,0 L4,8" }) }), t[3] = o) : o = t[3];
  let c;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsxs("g", { id: "port-icon-hash", className: "stroke-3", children: [m.jsx("line", { x1: -2, y1: -8, x2: -4, y2: 8 }), m.jsx("line", { x1: 4, y1: -8, x2: 2, y2: 8 }), m.jsx("line", { x1: -6, y1: -4, x2: 7, y2: -4 }), m.jsx("line", { x1: -7, y1: 4, x2: 6, y2: 4 })] }), t[4] = c) : c = t[4];
  let f;
  t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = m.jsxs("g", { id: "port-icon-greater-bracket", children: [m.jsx("line", { x1: -8, y1: -5, x2: 0, y2: 0 }), m.jsx("line", { x1: -8, y1: 5, x2: 0, y2: 0 }), m.jsx("line", { x1: 5, y1: -7, x2: 5, y2: 7 }), m.jsx("line", { x1: 5, y1: -7, x2: -2, y2: -7 }), m.jsx("line", { x1: 5, y1: 7, x2: -2, y2: 7 })] }), t[5] = f) : f = t[5];
  let u;
  t[6] === Symbol.for("react.memo_cache_sentinel") ? (u = m.jsxs("g", { id: "port-icon-bracket-less", children: [m.jsx("line", { x1: 8, y1: -5, x2: 0, y2: 0 }), m.jsx("line", { x1: 8, y1: 5, x2: 0, y2: 0 }), m.jsx("line", { x1: -5, y1: -7, x2: -5, y2: 7 }), m.jsx("line", { x1: -5, y1: -7, x2: 2, y2: -7 }), m.jsx("line", { x1: -5, y1: 7, x2: 2, y2: 7 })] }), t[6] = u) : u = t[6];
  let d;
  t[7] === Symbol.for("react.memo_cache_sentinel") ? (d = m.jsxs("g", { id: "port-icon-less-bracket", children: [m.jsx("line", { x1: 0, y1: -4, x2: -8, y2: 0 }), m.jsx("line", { x1: 0, y1: 4, x2: -8, y2: 0 }), m.jsx("line", { x1: 5, y1: -8, x2: 5, y2: 8 }), m.jsx("line", { x1: 5, y1: -8, x2: -2, y2: -8 }), m.jsx("line", { x1: 5, y1: 8, x2: -2, y2: 8 })] }), t[7] = d) : d = t[7];
  let g;
  t[8] === Symbol.for("react.memo_cache_sentinel") ? (g = m.jsxs("g", { id: "port-icon-bracket-greater", children: [m.jsx("line", { x1: 0, y1: -4, x2: 8, y2: 0 }), m.jsx("line", { x1: 0, y1: 4, x2: 8, y2: 0 }), m.jsx("line", { x1: -5, y1: -8, x2: -5, y2: 8 }), m.jsx("line", { x1: -5, y1: -8, x2: 2, y2: -8 }), m.jsx("line", { x1: -5, y1: 8, x2: 2, y2: 8 })] }), t[8] = g) : g = t[8];
  let p;
  t[9] === Symbol.for("react.memo_cache_sentinel") ? (p = m.jsxs("g", { id: "port-icon-bracket-greater-exclamation", children: [m.jsx("line", { className: "[stroke-linecap:butt] stroke-4", x1: 8, y1: -8, x2: 8, y2: 3 }), m.jsx("circle", { className: "stroke-none", cx: 8, cy: 7, r: 2 }), m.jsx("line", { x1: -3, y1: -4, x2: 3, y2: 0 }), m.jsx("line", { x1: -3, y1: 4, x2: 3, y2: 0 }), m.jsx("line", { x1: -7, y1: -8, x2: -7, y2: 8 }), m.jsx("line", { x1: -7, y1: -8, x2: 0, y2: -8 }), m.jsx("line", { x1: -7, y1: 8, x2: 0, y2: 8 })] }), t[9] = p) : p = t[9];
  let b;
  return t[10] === Symbol.for("react.memo_cache_sentinel") ? (b = m.jsxs("defs", { children: [e, a, i, o, c, f, u, d, g, p, m.jsxs("g", { id: "port-icon-exclamation-less-bracket", children: [m.jsx("line", { className: "[stroke-linecap:butt] stroke-4", x1: -8, y1: -8, x2: -8, y2: 3 }), m.jsx("circle", { className: "stroke-none", cx: -8, cy: 7, r: 2 }), m.jsx("line", { x1: 3, y1: -4, x2: -3, y2: 0 }), m.jsx("line", { x1: 3, y1: 4, x2: -3, y2: 0 }), m.jsx("line", { x1: 7, y1: -8, x2: 7, y2: 8 }), m.jsx("line", { x1: 7, y1: -8, x2: 0, y2: -8 }), m.jsx("line", { x1: 7, y1: 8, x2: 0, y2: 8 })] })] }), t[10] = b) : b = t[10], b;
}, rw = (t, e) => {
  const a = e && typeof t == "string" ? sw(t) : t;
  if (typeof a == "number") return null;
  switch (a) {
    case "?":
      return "port-icon-question";
    case "!":
      return "port-icon-exclamation";
    case ">":
      return "port-icon-greater";
    case "<":
      return "port-icon-less";
    case "#":
      return "port-icon-hash";
    case ">]":
      return "port-icon-greater-bracket";
    case "[<":
      return "port-icon-bracket-less";
    case "<]":
      return "port-icon-less-bracket";
    case "[>":
      return "port-icon-bracket-greater";
    case "[>!":
      return "port-icon-bracket-greater-exclamation";
    case "!<]":
      return "port-icon-exclamation-less-bracket";
    default:
      return null;
  }
}, Sa = (t) => {
  const e = F.c(25), { x: a, y: i, icon: o, flip: c, color: f } = t, u = f === void 0 ? "neutral" : f, d = `stroke-${u}-700 fill-${u}-700`;
  let g;
  e[0] !== d ? (g = Q(d, "stroke-2 [stroke-linecap:round] [stroke-linejoin:round]", "text-4 font-mono [text-anchor:middle] [dominant-baseline:middle]"), e[0] = d, e[1] = g) : g = e[1];
  const p = g;
  if (typeof o == "number") {
    let w;
    e[2] !== a || e[3] !== i ? (w = m.jsx("circle", { className: "fill-white/70 stroke-none", cx: a, cy: i, r: 14 }), e[2] = a, e[3] = i, e[4] = w) : w = e[4];
    let N;
    e[5] !== o || e[6] !== a || e[7] !== i ? (N = m.jsx("text", { x: a, y: i, className: "stroke-none", children: o }), e[5] = o, e[6] = a, e[7] = i, e[8] = N) : N = e[8];
    let k;
    return e[9] !== p || e[10] !== w || e[11] !== N ? (k = m.jsxs("g", { className: p, children: [w, N] }), e[9] = p, e[10] = w, e[11] = N, e[12] = k) : k = e[12], k;
  }
  const b = rw(o, c);
  if (!b) {
    let w;
    return e[13] === Symbol.for("react.memo_cache_sentinel") ? (w = m.jsx(m.Fragment, {}), e[13] = w) : w = e[13], w;
  }
  let v;
  e[14] !== a || e[15] !== i ? (v = m.jsx("circle", { className: "fill-white/70 stroke-none", cx: a, cy: i, r: 14 }), e[14] = a, e[15] = i, e[16] = v) : v = e[16];
  const x = `#${b}`;
  let S;
  e[17] !== x || e[18] !== a || e[19] !== i ? (S = m.jsx("use", { href: x, x: a, y: i }), e[17] = x, e[18] = a, e[19] = i, e[20] = S) : S = e[20];
  let j;
  return e[21] !== p || e[22] !== v || e[23] !== S ? (j = m.jsxs("g", { className: p, children: [v, S] }), e[21] = p, e[22] = v, e[23] = S, e[24] = j) : j = e[24], j;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const fr = (t) => ({ rose: "fill-rose-300 stroke-rose-700 group-hover:fill-rose-400", red: "fill-red-300 stroke-red-700 group-hover:fill-red-400", blue: "fill-blue-300 stroke-blue-700 group-hover:fill-blue-400", green: "fill-green-300 stroke-green-700 group-hover:fill-green-400", yellow: "fill-yellow-300 stroke-yellow-700 group-hover:fill-yellow-400", violet: "fill-violet-300 stroke-violet-700 group-hover:fill-violet-400", zinc: "fill-zinc-300 stroke-zinc-700 group-hover:fill-zinc-400", amber: "fill-amber-300 stroke-amber-700 group-hover:fill-amber-400" })[t] || "fill-zinc-300 stroke-zinc-700 group-hover:fill-zinc-400", hr = (t) => ({ rose: "!fill-rose-400", red: "!fill-red-400", blue: "!fill-blue-400", green: "!fill-green-400", yellow: "!fill-yellow-400", violet: "!fill-violet-400", zinc: "!fill-zinc-400", amber: "!fill-amber-400" })[t] || "!fill-zinc-400", ow = (t) => ({ rose: "stroke-rose-700", red: "stroke-red-700", blue: "stroke-blue-700", green: "stroke-green-700", yellow: "stroke-yellow-700", violet: "stroke-violet-700", zinc: "stroke-zinc-700", amber: "stroke-amber-700" })[t] || "stroke-zinc-700", cw = (t) => {
  const e = F.c(40), { elem: a } = t;
  switch (a.type) {
    case "Inst": {
      let i;
      return e[0] !== a ? (i = m.jsx(uw, { elem: a, color: "rose" }), e[0] = a, e[1] = i) : i = e[1], i;
    }
    case "Intr": {
      let i;
      return e[2] !== a ? (i = m.jsx(fw, { elem: a, color: "red" }), e[2] = a, e[3] = i) : i = e[3], i;
    }
    case "PortIn": {
      let i;
      return e[4] !== a ? (i = m.jsx(hw, { elem: a, color: "blue" }), e[4] = a, e[5] = i) : i = e[5], i;
    }
    case "PortOut": {
      let i;
      return e[6] !== a ? (i = m.jsx(dw, { elem: a, color: "blue" }), e[6] = a, e[7] = i) : i = e[7], i;
    }
    case "PortInOut": {
      let i;
      return e[8] !== a ? (i = m.jsx(mw, { elem: a, color: "blue" }), e[8] = a, e[9] = i) : i = e[9], i;
    }
    case "RegWrite": {
      let i;
      return e[10] !== a ? (i = m.jsx(gw, { elem: a, color: "green" }), e[10] = a, e[11] = i) : i = e[11], i;
    }
    case "RegRead": {
      let i;
      return e[12] !== a ? (i = m.jsx(pw, { elem: a, color: "green" }), e[12] = a, e[13] = i) : i = e[13], i;
    }
    case "RegTrig": {
      let i;
      return e[14] !== a ? (i = m.jsx(yw, { elem: a, color: "green" }), e[14] = a, e[15] = i) : i = e[15], i;
    }
    case "Verilog": {
      let i;
      return e[16] !== a ? (i = m.jsx(bw, { elem: a, color: "yellow" }), e[16] = a, e[17] = i) : i = e[17], i;
    }
    case "ArithOp": {
      let i;
      return e[18] !== a ? (i = m.jsx(vw, { elem: a, color: "violet" }), e[18] = a, e[19] = i) : i = e[19], i;
    }
    case "BitOp": {
      let i;
      return e[20] !== a ? (i = m.jsx(xw, { elem: a, color: "violet" }), e[20] = a, e[21] = i) : i = e[21], i;
    }
    case "ReduceOp": {
      let i;
      return e[22] !== a ? (i = m.jsx(Sw, { elem: a, color: "violet" }), e[22] = a, e[23] = i) : i = e[23], i;
    }
    case "Const": {
      let i;
      return e[24] !== a ? (i = m.jsx(jw, { elem: a, color: "violet" }), e[24] = a, e[25] = i) : i = e[25], i;
    }
    case "Pack": {
      let i;
      return e[26] !== a ? (i = m.jsx(_w, { elem: a, color: "zinc" }), e[26] = a, e[27] = i) : i = e[27], i;
    }
    case "Unpack": {
      let i;
      return e[28] !== a ? (i = m.jsx(ww, { elem: a, color: "zinc" }), e[28] = a, e[29] = i) : i = e[29], i;
    }
    case "Mux": {
      let i;
      return e[30] !== a ? (i = m.jsx(Nw, { elem: a, color: "zinc" }), e[30] = a, e[31] = i) : i = e[31], i;
    }
    case "Demux": {
      let i;
      return e[32] !== a ? (i = m.jsx(Tw, { elem: a, color: "zinc" }), e[32] = a, e[33] = i) : i = e[33], i;
    }
    case "FlipFlop": {
      let i;
      return e[34] !== a ? (i = m.jsx(kw, { elem: a, color: "amber" }), e[34] = a, e[35] = i) : i = e[35], i;
    }
    case "StateMachine": {
      let i;
      return e[36] !== a ? (i = m.jsx(Mw, { elem: a, color: "amber" }), e[36] = a, e[37] = i) : i = e[37], i;
    }
    case "CombCircuit": {
      let i;
      return e[38] !== a ? (i = m.jsx(Aw, { elem: a, color: "amber" }), e[38] = a, e[39] = i) : i = e[39], i;
    }
  }
}, uw = (t) => {
  const e = F.c(16), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a), d = a.pos, g = a.size, p = a.flip;
  let b;
  e[0] !== a.ports ? (b = a.ports.filter(Cw).map(Ew), e[0] = a.ports, e[1] = b) : b = e[1];
  let v;
  e[2] !== a.ports ? (v = a.ports.filter(Ow).map(zw), e[2] = a.ports, e[3] = v) : v = e[3];
  let x;
  return e[4] !== i || e[5] !== a.flip || e[6] !== a.name || e[7] !== a.pos || e[8] !== a.size || e[9] !== o || e[10] !== f || e[11] !== c || e[12] !== u || e[13] !== b || e[14] !== v ? (x = m.jsx(Zo, { pos: d, size: g, flip: p, leftPorts: b, rightPorts: v, name: a.name, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[4] = i, e[5] = a.flip, e[6] = a.name, e[7] = a.pos, e[8] = a.size, e[9] = o, e[10] = f, e[11] = c, e[12] = u, e[13] = b, e[14] = v, e[15] = x) : x = e[15], x;
}, fw = (t) => {
  const e = F.c(11), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a);
  let d;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [["intr", "!"]], e[0] = d) : d = e[0];
  let g;
  return e[1] !== i || e[2] !== a.flip || e[3] !== a.name || e[4] !== a.pos || e[5] !== a.size || e[6] !== o || e[7] !== f || e[8] !== c || e[9] !== u ? (g = m.jsx(_a, { pos: a.pos, size: a.size, flip: a.flip, ports: d, name: a.name, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[1] = i, e[2] = a.flip, e[3] = a.name, e[4] = a.pos, e[5] = a.size, e[6] = o, e[7] = f, e[8] = c, e[9] = u, e[10] = g) : g = e[10], g;
}, hw = (t) => {
  const e = F.c(13), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a);
  let d;
  e[0] !== a.name ? (d = [[a.name, "<"]], e[0] = a.name, e[1] = d) : d = e[1];
  let g;
  return e[2] !== i || e[3] !== a.flip || e[4] !== a.name || e[5] !== a.pos || e[6] !== a.size || e[7] !== o || e[8] !== f || e[9] !== c || e[10] !== u || e[11] !== d ? (g = m.jsx(_a, { pos: a.pos, size: a.size, flip: a.flip, ports: d, name: a.name, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[2] = i, e[3] = a.flip, e[4] = a.name, e[5] = a.pos, e[6] = a.size, e[7] = o, e[8] = f, e[9] = c, e[10] = u, e[11] = d, e[12] = g) : g = e[12], g;
}, dw = (t) => {
  const e = F.c(11), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a);
  let d;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [["out", ">"]], e[0] = d) : d = e[0];
  let g;
  return e[1] !== i || e[2] !== a.flip || e[3] !== a.name || e[4] !== a.pos || e[5] !== a.size || e[6] !== o || e[7] !== f || e[8] !== c || e[9] !== u ? (g = m.jsx(_a, { pos: a.pos, size: a.size, flip: a.flip, ports: d, name: a.name, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[1] = i, e[2] = a.flip, e[3] = a.name, e[4] = a.pos, e[5] = a.size, e[6] = o, e[7] = f, e[8] = c, e[9] = u, e[10] = g) : g = e[10], g;
}, mw = (t) => {
  const e = F.c(11), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a);
  let d;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [["iosel", "?"], ["in", "<"], ["out", ">"]], e[0] = d) : d = e[0];
  let g;
  return e[1] !== i || e[2] !== a.flip || e[3] !== a.name || e[4] !== a.pos || e[5] !== a.size || e[6] !== o || e[7] !== f || e[8] !== c || e[9] !== u ? (g = m.jsx(_a, { pos: a.pos, size: a.size, flip: a.flip, name: a.name, ports: d, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[1] = i, e[2] = a.flip, e[3] = a.name, e[4] = a.pos, e[5] = a.size, e[6] = o, e[7] = f, e[8] = c, e[9] = u, e[10] = g) : g = e[10], g;
}, gw = (t) => {
  const e = F.c(11), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a);
  let d;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [["out", "<]"]], e[0] = d) : d = e[0];
  let g;
  return e[1] !== i || e[2] !== a.flip || e[3] !== a.name || e[4] !== a.pos || e[5] !== a.size || e[6] !== o || e[7] !== f || e[8] !== c || e[9] !== u ? (g = m.jsx(_a, { pos: a.pos, size: a.size, flip: a.flip, ports: d, name: a.name, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[1] = i, e[2] = a.flip, e[3] = a.name, e[4] = a.pos, e[5] = a.size, e[6] = o, e[7] = f, e[8] = c, e[9] = u, e[10] = g) : g = e[10], g;
}, pw = (t) => {
  const e = F.c(11), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a);
  let d;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [["in", ">]"]], e[0] = d) : d = e[0];
  let g;
  return e[1] !== i || e[2] !== a.flip || e[3] !== a.name || e[4] !== a.pos || e[5] !== a.size || e[6] !== o || e[7] !== f || e[8] !== c || e[9] !== u ? (g = m.jsx(_a, { pos: a.pos, size: a.size, flip: a.flip, ports: d, name: a.name, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[1] = i, e[2] = a.flip, e[3] = a.name, e[4] = a.pos, e[5] = a.size, e[6] = o, e[7] = f, e[8] = c, e[9] = u, e[10] = g) : g = e[10], g;
}, yw = (t) => {
  const e = F.c(11), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a);
  let d;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [["out", "!<]"]], e[0] = d) : d = e[0];
  let g;
  return e[1] !== i || e[2] !== a.flip || e[3] !== a.name || e[4] !== a.pos || e[5] !== a.size || e[6] !== o || e[7] !== f || e[8] !== c || e[9] !== u ? (g = m.jsx(_a, { pos: a.pos, size: a.size, flip: a.flip, ports: d, name: a.name, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[1] = i, e[2] = a.flip, e[3] = a.name, e[4] = a.pos, e[5] = a.size, e[6] = o, e[7] = f, e[8] = c, e[9] = u, e[10] = g) : g = e[10], g;
}, bw = (t) => {
  const e = F.c(16), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a), d = a.pos, g = a.size, p = a.flip;
  let b;
  e[0] !== a.ports ? (b = a.ports.filter(Dw).map(Rw), e[0] = a.ports, e[1] = b) : b = e[1];
  let v;
  e[2] !== a.ports ? (v = a.ports.filter(Lw).map(Uw), e[2] = a.ports, e[3] = v) : v = e[3];
  let x;
  return e[4] !== i || e[5] !== a.flip || e[6] !== a.name || e[7] !== a.pos || e[8] !== a.size || e[9] !== o || e[10] !== f || e[11] !== c || e[12] !== u || e[13] !== b || e[14] !== v ? (x = m.jsx(Zo, { pos: d, size: g, flip: p, leftPorts: b, rightPorts: v, name: a.name, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[4] = i, e[5] = a.flip, e[6] = a.name, e[7] = a.pos, e[8] = a.size, e[9] = o, e[10] = f, e[11] = c, e[12] = u, e[13] = b, e[14] = v, e[15] = x) : x = e[15], x;
}, vw = (t) => {
  const e = F.c(37), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a), [d, g] = a.size;
  let p, b, v, x, S, j, w;
  if (e[0] !== i || e[1] !== a.flip || e[2] !== a.pos[0] || e[3] !== a.pos[1] || e[4] !== g || e[5] !== o || e[6] !== f || e[7] !== c || e[8] !== u || e[9] !== d) {
    const A = a.flip ? [[-d / 2, 0], [-20, -g / 2], [d / 2, -g / 2], [d / 2, g / 2], [-20, g / 2]] : [[d / 2, 0], [20, -g / 2], [-d / 2, -g / 2], [-d / 2, g / 2], [20, g / 2]];
    v = `translate(${a.pos[0]}, ${a.pos[1]})`, x = o, S = c, j = f;
    const z = u && "selected";
    e[17] !== z ? (w = Q("cursor-pointer group", z), e[17] = z, e[18] = w) : w = e[18], e[19] !== i || e[20] !== u ? (b = Q(fr(i), "stroke-2 stroke-linecap-round stroke-linejoin-round", u && hr(i)), e[19] = i, e[20] = u, e[21] = b) : b = e[21], p = A.map($w), e[0] = i, e[1] = a.flip, e[2] = a.pos[0], e[3] = a.pos[1], e[4] = g, e[5] = o, e[6] = f, e[7] = c, e[8] = u, e[9] = d, e[10] = p, e[11] = b, e[12] = v, e[13] = x, e[14] = S, e[15] = j, e[16] = w;
  } else p = e[10], b = e[11], v = e[12], x = e[13], S = e[14], j = e[15], w = e[16];
  const N = p.join(" ");
  let k;
  e[22] !== b || e[23] !== N ? (k = m.jsx("polygon", { className: b, points: N }), e[22] = b, e[23] = N, e[24] = k) : k = e[24];
  const M = a.flip ? 3 : -3, C = d - 6;
  let E;
  e[25] !== a.op || e[26] !== M || e[27] !== C ? (E = m.jsx(qs, { className: "fill-black", text: a.op, x: M, y: 0, width: C, font: 24, align: "center" }), e[25] = a.op, e[26] = M, e[27] = C, e[28] = E) : E = e[28];
  let L;
  return e[29] !== E || e[30] !== v || e[31] !== x || e[32] !== S || e[33] !== j || e[34] !== w || e[35] !== k ? (L = m.jsxs("g", { transform: v, onClick: x, onMouseDown: S, onDoubleClick: j, className: w, children: [k, E] }), e[29] = E, e[30] = v, e[31] = x, e[32] = S, e[33] = j, e[34] = w, e[35] = k, e[36] = L) : L = e[36], L;
}, xw = (t) => {
  const e = F.c(37), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a), [d, g] = a.size;
  let p, b, v, x, S, j, w;
  if (e[0] !== i || e[1] !== a.flip || e[2] !== a.pos[0] || e[3] !== a.pos[1] || e[4] !== g || e[5] !== o || e[6] !== f || e[7] !== c || e[8] !== u || e[9] !== d) {
    const A = a.flip ? [[-d / 2, 0], [-20, -g / 2], [d / 2, -g / 2], [d / 2, g / 2], [-20, g / 2]] : [[d / 2, 0], [20, -g / 2], [-d / 2, -g / 2], [-d / 2, g / 2], [20, g / 2]];
    v = `translate(${a.pos[0]}, ${a.pos[1]})`, x = o, S = c, j = f;
    const z = u && "selected";
    e[17] !== z ? (w = Q("cursor-pointer group", z), e[17] = z, e[18] = w) : w = e[18], e[19] !== i || e[20] !== u ? (b = Q(fr(i), "stroke-2 stroke-linecap-round stroke-linejoin-round", u && hr(i)), e[19] = i, e[20] = u, e[21] = b) : b = e[21], p = A.map(Hw), e[0] = i, e[1] = a.flip, e[2] = a.pos[0], e[3] = a.pos[1], e[4] = g, e[5] = o, e[6] = f, e[7] = c, e[8] = u, e[9] = d, e[10] = p, e[11] = b, e[12] = v, e[13] = x, e[14] = S, e[15] = j, e[16] = w;
  } else p = e[10], b = e[11], v = e[12], x = e[13], S = e[14], j = e[15], w = e[16];
  const N = p.join(" ");
  let k;
  e[22] !== b || e[23] !== N ? (k = m.jsx("polygon", { className: b, points: N }), e[22] = b, e[23] = N, e[24] = k) : k = e[24];
  const M = a.flip ? 3 : -3, C = d - 6;
  let E;
  e[25] !== a.op || e[26] !== M || e[27] !== C ? (E = m.jsx(qs, { className: "fill-black", text: a.op, x: M, y: 0, width: C, font: 24, align: "center" }), e[25] = a.op, e[26] = M, e[27] = C, e[28] = E) : E = e[28];
  let L;
  return e[29] !== E || e[30] !== v || e[31] !== x || e[32] !== S || e[33] !== j || e[34] !== w || e[35] !== k ? (L = m.jsxs("g", { transform: v, onClick: x, onMouseDown: S, onDoubleClick: j, className: w, children: [k, E] }), e[29] = E, e[30] = v, e[31] = x, e[32] = S, e[33] = j, e[34] = w, e[35] = k, e[36] = L) : L = e[36], L;
}, Sw = (t) => {
  const e = F.c(37), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a), [d, g] = a.size;
  let p, b, v, x, S, j, w;
  if (e[0] !== i || e[1] !== a.flip || e[2] !== a.pos[0] || e[3] !== a.pos[1] || e[4] !== g || e[5] !== o || e[6] !== f || e[7] !== c || e[8] !== u || e[9] !== d) {
    const A = a.flip ? [[-d / 2, 0], [-20, -g / 2], [d / 2, -g / 2], [d / 2, g / 2], [-20, g / 2]] : [[d / 2, 0], [20, -g / 2], [-d / 2, -g / 2], [-d / 2, g / 2], [20, g / 2]];
    v = `translate(${a.pos[0]}, ${a.pos[1]})`, x = o, S = c, j = f;
    const z = u && "selected";
    e[17] !== z ? (w = Q("cursor-pointer group", z), e[17] = z, e[18] = w) : w = e[18], e[19] !== i || e[20] !== u ? (b = Q(fr(i), "stroke-2 stroke-linecap-round stroke-linejoin-round", u && hr(i)), e[19] = i, e[20] = u, e[21] = b) : b = e[21], p = A.map(qw), e[0] = i, e[1] = a.flip, e[2] = a.pos[0], e[3] = a.pos[1], e[4] = g, e[5] = o, e[6] = f, e[7] = c, e[8] = u, e[9] = d, e[10] = p, e[11] = b, e[12] = v, e[13] = x, e[14] = S, e[15] = j, e[16] = w;
  } else p = e[10], b = e[11], v = e[12], x = e[13], S = e[14], j = e[15], w = e[16];
  const N = p.join(" ");
  let k;
  e[22] !== b || e[23] !== N ? (k = m.jsx("polygon", { className: b, points: N }), e[22] = b, e[23] = N, e[24] = k) : k = e[24];
  const M = a.flip ? 3 : -3, C = d - 6;
  let E;
  e[25] !== a.op || e[26] !== M || e[27] !== C ? (E = m.jsx(qs, { className: "fill-black", text: a.op, x: M, y: 0, width: C, font: 24, align: "center" }), e[25] = a.op, e[26] = M, e[27] = C, e[28] = E) : E = e[28];
  let L;
  return e[29] !== E || e[30] !== v || e[31] !== x || e[32] !== S || e[33] !== j || e[34] !== w || e[35] !== k ? (L = m.jsxs("g", { transform: v, onClick: x, onMouseDown: S, onDoubleClick: j, className: w, children: [k, E] }), e[29] = E, e[30] = v, e[31] = x, e[32] = S, e[33] = j, e[34] = w, e[35] = k, e[36] = L) : L = e[36], L;
}, jw = (t) => {
  const e = F.c(11), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a);
  let d;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [["out", "#"]], e[0] = d) : d = e[0];
  const g = `${a.name}: ${a.bit}'h${mv(a.value, Math.ceil(a.bit / 4))}`;
  let p;
  return e[1] !== i || e[2] !== a.flip || e[3] !== a.pos || e[4] !== a.size || e[5] !== o || e[6] !== f || e[7] !== c || e[8] !== u || e[9] !== g ? (p = m.jsx(_a, { pos: a.pos, size: a.size, flip: a.flip, ports: d, name: g, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[1] = i, e[2] = a.flip, e[3] = a.pos, e[4] = a.size, e[5] = o, e[6] = f, e[7] = c, e[8] = u, e[9] = g, e[10] = p) : p = e[10], p;
}, _w = (t) => {
  const e = F.c(25), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a), [d, g] = a.size, p = `translate(${a.pos[0]}, ${a.pos[1]})`, b = u && "selected";
  let v;
  e[0] !== b ? (v = Q("cursor-pointer group", b), e[0] = b, e[1] = v) : v = e[1];
  const x = `fill-${i}-300 stroke-${i}-700 stroke-2`, S = `group-hover:fill-${i}-400`, j = u && `!fill-${i}-400`;
  let w;
  e[2] !== x || e[3] !== S || e[4] !== j ? (w = Q(x, "stroke-linecap-round stroke-linejoin-round", S, j), e[2] = x, e[3] = S, e[4] = j, e[5] = w) : w = e[5];
  const N = -d / 2, k = -g / 2;
  let M;
  e[6] !== g || e[7] !== w || e[8] !== N || e[9] !== k || e[10] !== d ? (M = m.jsx("rect", { className: w, x: N, y: k, rx: 5, width: d, height: g }), e[6] = g, e[7] = w, e[8] = N, e[9] = k, e[10] = d, e[11] = M) : M = e[11];
  let C;
  if (e[12] !== a.bits || e[13] !== g) {
    let L;
    e[15] !== g ? (L = (A, z) => m.jsx(Sa, { x: 0, y: -g / 2 + z * 40 + 20, icon: A }, z), e[15] = g, e[16] = L) : L = e[16], C = a.bits.map(L), e[12] = a.bits, e[13] = g, e[14] = C;
  } else C = e[14];
  let E;
  return e[17] !== o || e[18] !== f || e[19] !== c || e[20] !== p || e[21] !== M || e[22] !== C || e[23] !== v ? (E = m.jsxs("g", { transform: p, onClick: o, onMouseDown: c, onDoubleClick: f, className: v, children: [M, C] }), e[17] = o, e[18] = f, e[19] = c, e[20] = p, e[21] = M, e[22] = C, e[23] = v, e[24] = E) : E = e[24], E;
}, ww = (t) => {
  const e = F.c(25), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a), [d, g] = a.size, p = `translate(${a.pos[0]}, ${a.pos[1]})`, b = u && "selected";
  let v;
  e[0] !== b ? (v = Q("cursor-pointer group", b), e[0] = b, e[1] = v) : v = e[1];
  const x = `fill-${i}-300 stroke-${i}-700 stroke-2`, S = `group-hover:fill-${i}-400`, j = u && `!fill-${i}-400`;
  let w;
  e[2] !== x || e[3] !== S || e[4] !== j ? (w = Q(x, "stroke-linecap-round stroke-linejoin-round", S, j), e[2] = x, e[3] = S, e[4] = j, e[5] = w) : w = e[5];
  const N = -d / 2, k = -g / 2;
  let M;
  e[6] !== g || e[7] !== w || e[8] !== N || e[9] !== k || e[10] !== d ? (M = m.jsx("rect", { className: w, x: N, y: k, rx: 5, width: d, height: g }), e[6] = g, e[7] = w, e[8] = N, e[9] = k, e[10] = d, e[11] = M) : M = e[11];
  let C;
  if (e[12] !== a.bits || e[13] !== g) {
    let L;
    e[15] !== g ? (L = (A, z) => m.jsx(Sa, { x: 0, y: -g / 2 + z * 40 + 20, icon: A }, z), e[15] = g, e[16] = L) : L = e[16], C = a.bits.map(L), e[12] = a.bits, e[13] = g, e[14] = C;
  } else C = e[14];
  let E;
  return e[17] !== o || e[18] !== f || e[19] !== c || e[20] !== p || e[21] !== M || e[22] !== C || e[23] !== v ? (E = m.jsxs("g", { transform: p, onClick: o, onMouseDown: c, onDoubleClick: f, className: v, children: [M, C] }), e[17] = o, e[18] = f, e[19] = c, e[20] = p, e[21] = M, e[22] = C, e[23] = v, e[24] = E) : E = e[24], E;
}, Nw = (t) => {
  const e = F.c(29), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a), [d, g] = a.size, p = `translate(${a.pos[0]}, ${a.pos[1]})`, b = u && "selected";
  let v;
  e[0] !== b ? (v = Q("cursor-pointer group", b), e[0] = b, e[1] = v) : v = e[1];
  const x = `fill-${i}-300 stroke-${i}-700 stroke-2`, S = `group-hover:fill-${i}-400`, j = u && `!fill-${i}-400`;
  let w;
  e[2] !== x || e[3] !== S || e[4] !== j ? (w = Q(x, "stroke-linecap-round stroke-linejoin-round", S, j), e[2] = x, e[3] = S, e[4] = j, e[5] = w) : w = e[5];
  const N = -d / 2, k = -g / 2, M = d / 2;
  let C;
  e[6] !== g || e[7] !== M || e[8] !== w || e[9] !== N || e[10] !== k || e[11] !== d ? (C = m.jsx("rect", { className: w, x: N, y: k, rx: M, width: d, height: g }), e[6] = g, e[7] = M, e[8] = w, e[9] = N, e[10] = k, e[11] = d, e[12] = C) : C = e[12];
  const E = -g / 2 + 20;
  let L;
  e[13] !== E ? (L = m.jsx(Sa, { x: 0, y: E, icon: "?" }), e[13] = E, e[14] = L) : L = e[14];
  let A;
  if (e[15] !== a.opts || e[16] !== g) {
    let q;
    e[18] !== g ? (q = (B) => m.jsx(Sa, { x: 0, y: -g / 2 + B * 40 + 60, icon: B }, B), e[18] = g, e[19] = q) : q = e[19], A = Ls(a.opts).map(q), e[15] = a.opts, e[16] = g, e[17] = A;
  } else A = e[17];
  let z;
  return e[20] !== o || e[21] !== f || e[22] !== c || e[23] !== p || e[24] !== C || e[25] !== L || e[26] !== A || e[27] !== v ? (z = m.jsxs("g", { transform: p, onClick: o, onMouseDown: c, onDoubleClick: f, className: v, children: [C, L, A] }), e[20] = o, e[21] = f, e[22] = c, e[23] = p, e[24] = C, e[25] = L, e[26] = A, e[27] = v, e[28] = z) : z = e[28], z;
}, Tw = (t) => {
  const e = F.c(29), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a), [d, g] = a.size, p = `translate(${a.pos[0]}, ${a.pos[1]})`, b = u && "selected";
  let v;
  e[0] !== b ? (v = Q("cursor-pointer group", b), e[0] = b, e[1] = v) : v = e[1];
  const x = `fill-${i}-300 stroke-${i}-700 stroke-2`, S = `group-hover:fill-${i}-400`, j = u && `!fill-${i}-400`;
  let w;
  e[2] !== x || e[3] !== S || e[4] !== j ? (w = Q(x, "stroke-linecap-round stroke-linejoin-round", S, j), e[2] = x, e[3] = S, e[4] = j, e[5] = w) : w = e[5];
  const N = -d / 2, k = -g / 2, M = d / 2;
  let C;
  e[6] !== g || e[7] !== M || e[8] !== w || e[9] !== N || e[10] !== k || e[11] !== d ? (C = m.jsx("rect", { className: w, x: N, y: k, rx: M, width: d, height: g }), e[6] = g, e[7] = M, e[8] = w, e[9] = N, e[10] = k, e[11] = d, e[12] = C) : C = e[12];
  const E = -g / 2 + 20;
  let L;
  e[13] !== E ? (L = m.jsx(Sa, { x: 0, y: E, icon: "?" }), e[13] = E, e[14] = L) : L = e[14];
  let A;
  if (e[15] !== a.opts || e[16] !== g) {
    let q;
    e[18] !== g ? (q = (B) => m.jsx(Sa, { x: 0, y: -g / 2 + B * 40 + 60, icon: B }, B), e[18] = g, e[19] = q) : q = e[19], A = Ls(a.opts).map(q), e[15] = a.opts, e[16] = g, e[17] = A;
  } else A = e[17];
  let z;
  return e[20] !== o || e[21] !== f || e[22] !== c || e[23] !== p || e[24] !== C || e[25] !== L || e[26] !== A || e[27] !== v ? (z = m.jsxs("g", { transform: p, onClick: o, onMouseDown: c, onDoubleClick: f, className: v, children: [C, L, A] }), e[20] = o, e[21] = f, e[22] = c, e[23] = p, e[24] = C, e[25] = L, e[26] = A, e[27] = v, e[28] = z) : z = e[28], z;
}, kw = (t) => {
  const e = F.c(41), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a);
  let d, g, p, b, v, x, S, j;
  if (e[0] !== i || e[1] !== a.pos[0] || e[2] !== a.pos[1] || e[3] !== a.size[0] || e[4] !== a.size[1] || e[5] !== o || e[6] !== f || e[7] !== c || e[8] !== u) {
    const k = [[-10, 20], [0, 2], [10, 20]];
    p = `translate(${a.pos[0]}, ${a.pos[1]})`, b = o, v = c, x = f;
    const M = u && "selected";
    e[17] !== M ? (S = Q("cursor-pointer group", M), e[17] = M, e[18] = S) : S = e[18];
    const C = `fill-${i}-300 stroke-${i}-700 stroke-2`, E = `group-hover:fill-${i}-400`, L = u && `!fill-${i}-400`;
    let A;
    e[19] !== C || e[20] !== E || e[21] !== L ? (A = Q(C, "stroke-linecap-round stroke-linejoin-round", E, L), e[19] = C, e[20] = E, e[21] = L, e[22] = A) : A = e[22];
    const z = -a.size[0] / 2, q = -a.size[1] / 2;
    e[23] !== a.size[0] || e[24] !== a.size[1] || e[25] !== A || e[26] !== z || e[27] !== q ? (j = m.jsx("rect", { className: A, x: z, y: q, rx: 5, width: a.size[0], height: a.size[1] }), e[23] = a.size[0], e[24] = a.size[1], e[25] = A, e[26] = z, e[27] = q, e[28] = j) : j = e[28], e[29] !== i ? (g = Q("fill-none stroke-2 stroke-linecap-round stroke-linejoin-round", ow(i)), e[29] = i, e[30] = g) : g = e[30], d = k.map(Vw), e[0] = i, e[1] = a.pos[0], e[2] = a.pos[1], e[3] = a.size[0], e[4] = a.size[1], e[5] = o, e[6] = f, e[7] = c, e[8] = u, e[9] = d, e[10] = g, e[11] = p, e[12] = b, e[13] = v, e[14] = x, e[15] = S, e[16] = j;
  } else d = e[9], g = e[10], p = e[11], b = e[12], v = e[13], x = e[14], S = e[15], j = e[16];
  let w;
  e[31] !== g ? (w = m.jsx("polyline", { className: g, points: d.join(" ") }), e[31] = g, e[32] = w) : w = e[32];
  let N;
  return e[33] !== p || e[34] !== b || e[35] !== v || e[36] !== x || e[37] !== S || e[38] !== j || e[39] !== w ? (N = m.jsxs("g", { transform: p, onClick: b, onMouseDown: v, onDoubleClick: x, className: S, children: [j, w] }), e[33] = p, e[34] = b, e[35] = v, e[36] = x, e[37] = S, e[38] = j, e[39] = w, e[40] = N) : N = e[40], N;
}, Mw = (t) => {
  const e = F.c(16), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a), d = a.pos, g = a.size, p = a.flip;
  let b;
  e[0] !== a.inputs ? (b = a.inputs.map(Bw), e[0] = a.inputs, e[1] = b) : b = e[1];
  let v;
  e[2] !== a.outputs ? (v = a.outputs.map(Yw), e[2] = a.outputs, e[3] = v) : v = e[3];
  let x;
  return e[4] !== i || e[5] !== a.flip || e[6] !== a.name || e[7] !== a.pos || e[8] !== a.size || e[9] !== o || e[10] !== f || e[11] !== c || e[12] !== u || e[13] !== b || e[14] !== v ? (x = m.jsx(Zo, { pos: d, size: g, flip: p, leftPorts: b, rightPorts: v, name: a.name, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[4] = i, e[5] = a.flip, e[6] = a.name, e[7] = a.pos, e[8] = a.size, e[9] = o, e[10] = f, e[11] = c, e[12] = u, e[13] = b, e[14] = v, e[15] = x) : x = e[15], x;
}, Aw = (t) => {
  const e = F.c(16), { elem: a, color: i } = t, { onClick: o, onMouseDown: c, onDoubleClick: f, selected: u } = St(a), d = a.pos, g = a.size, p = a.flip;
  let b;
  e[0] !== a.inputs ? (b = a.inputs.map(Gw), e[0] = a.inputs, e[1] = b) : b = e[1];
  let v;
  e[2] !== a.outputs ? (v = a.outputs.map(Qw), e[2] = a.outputs, e[3] = v) : v = e[3];
  let x;
  return e[4] !== i || e[5] !== a.flip || e[6] !== a.name || e[7] !== a.pos || e[8] !== a.size || e[9] !== o || e[10] !== f || e[11] !== c || e[12] !== u || e[13] !== b || e[14] !== v ? (x = m.jsx(Zo, { pos: d, size: g, flip: p, leftPorts: b, rightPorts: v, name: a.name, color: i, highlight: u, onClick: o, onMouseDown: c, onDoubleClick: f }), e[4] = i, e[5] = a.flip, e[6] = a.name, e[7] = a.pos, e[8] = a.size, e[9] = o, e[10] = f, e[11] = c, e[12] = u, e[13] = b, e[14] = v, e[15] = x) : x = e[15], x;
}, Zo = (t) => {
  const e = F.c(36), { leftPorts: a, rightPorts: i, name: o, pos: c, flip: f, size: u, highlight: d, color: g, onClick: p, onMouseDown: b, onDoubleClick: v } = t, [x, S] = u;
  let j;
  if (e[0] !== g || e[1] !== f || e[2] !== S || e[3] !== d || e[4] !== a || e[5] !== o || e[6] !== p || e[7] !== v || e[8] !== b || e[9] !== c[0] || e[10] !== c[1] || e[11] !== i || e[12] !== x) {
    const [w, N] = f ? [i, a] : [a, i], k = d && "selected";
    let M;
    e[14] !== k ? (M = Q("cursor-pointer group", k), e[14] = k, e[15] = M) : M = e[15];
    let C;
    e[16] !== g || e[17] !== d ? (C = Q(fr(g), "stroke-2 stroke-linecap-round stroke-linejoin-round", d && hr(g)), e[16] = g, e[17] = d, e[18] = C) : C = e[18];
    const E = -x / 2, L = -S / 2;
    let A;
    e[19] !== S || e[20] !== C || e[21] !== E || e[22] !== L || e[23] !== x ? (A = m.jsx("rect", { className: C, x: E, y: L, rx: 17, width: x, height: S }), e[19] = S, e[20] = C, e[21] = E, e[22] = L, e[23] = x, e[24] = A) : A = e[24];
    const z = x - 148;
    let q;
    e[25] !== o || e[26] !== z ? (q = m.jsx(qs, { className: "fill-black", text: o, x: 0, y: 0, width: z, font: 24, align: "center" }), e[25] = o, e[26] = z, e[27] = q) : q = e[27];
    let B;
    e[28] !== g || e[29] !== f || e[30] !== x ? (B = (W, oe, ae) => {
      const [K, R] = W;
      return m.jsx(Pm, { side: "left", name: K, pos: [-x / 2 + 18, (oe - (ae.length - 1) / 2) * 40], icon: R, flip: f, color: g }, K);
    }, e[28] = g, e[29] = f, e[30] = x, e[31] = B) : B = e[31];
    let J;
    e[32] !== g || e[33] !== f || e[34] !== x ? (J = (W, oe, ae) => {
      const [K, R] = W;
      return m.jsx(Pm, { side: "right", name: K, pos: [x / 2 - 18, (oe - (ae.length - 1) / 2) * 40], icon: R, flip: f, color: g }, K);
    }, e[32] = g, e[33] = f, e[34] = x, e[35] = J) : J = e[35], j = m.jsxs("g", { transform: `translate(${c[0]}, ${c[1]})`, onClick: p, onMouseDown: b, onDoubleClick: v, className: M, children: [A, q, w.map(B), N.map(J)] }), e[0] = g, e[1] = f, e[2] = S, e[3] = d, e[4] = a, e[5] = o, e[6] = p, e[7] = v, e[8] = b, e[9] = c[0], e[10] = c[1], e[11] = i, e[12] = x, e[13] = j;
  } else j = e[13];
  return j;
}, _a = (t) => {
  const e = F.c(33), { ports: a, name: i, pos: o, flip: c, size: f, highlight: u, color: d, onClick: g, onMouseDown: p, onDoubleClick: b } = t, [v, x] = f, S = `translate(${o[0]}, ${o[1]})`, j = u && "selected";
  let w;
  e[0] !== j ? (w = Q("cursor-pointer group", j), e[0] = j, e[1] = w) : w = e[1];
  let N;
  e[2] !== d || e[3] !== u ? (N = Q(fr(d), "stroke-2 stroke-linecap-round stroke-linejoin-round", u && hr(d)), e[2] = d, e[3] = u, e[4] = N) : N = e[4];
  const k = -v / 2, M = -x / 2;
  let C;
  e[5] !== x || e[6] !== N || e[7] !== k || e[8] !== M || e[9] !== v ? (C = m.jsx("rect", { className: N, x: k, y: M, rx: 5, width: v, height: x }), e[5] = x, e[6] = N, e[7] = k, e[8] = M, e[9] = v, e[10] = C) : C = e[10];
  const E = v - 40, L = c ? "left" : "right";
  let A;
  e[11] !== i || e[12] !== E || e[13] !== L ? (A = m.jsx(qs, { className: "fill-black", text: i, x: 0, y: 0, width: E, font: 24, align: L }), e[11] = i, e[12] = E, e[13] = L, e[14] = A) : A = e[14];
  let z;
  if (e[15] !== d || e[16] !== c || e[17] !== a || e[18] !== v) {
    let B;
    e[20] !== d || e[21] !== c || e[22] !== v ? (B = (J, W, oe) => {
      const [, ae] = J, { length: K } = oe;
      return m.jsx(Sa, { color: d, x: c ? v / 2 - 18.5 : -v / 2 + 18.5, y: (W - (K - 1) / 2) * 40, icon: ae, flip: c });
    }, e[20] = d, e[21] = c, e[22] = v, e[23] = B) : B = e[23], z = a.map(B), e[15] = d, e[16] = c, e[17] = a, e[18] = v, e[19] = z;
  } else z = e[19];
  let q;
  return e[24] !== g || e[25] !== b || e[26] !== p || e[27] !== S || e[28] !== A || e[29] !== z || e[30] !== w || e[31] !== C ? (q = m.jsxs("g", { transform: S, onClick: g, onMouseDown: p, onDoubleClick: b, className: w, children: [C, A, z] }), e[24] = g, e[25] = b, e[26] = p, e[27] = S, e[28] = A, e[29] = z, e[30] = w, e[31] = C, e[32] = q) : q = e[32], q;
}, Pm = (t) => {
  const e = F.c(14), { name: a, color: i, pos: o, side: c, icon: f, flip: u } = t, [d, g] = o, p = c === "left" ? d + 36 : d - 36;
  let b;
  e[0] !== i || e[1] !== d || e[2] !== g || e[3] !== u || e[4] !== f ? (b = m.jsx(Sa, { x: d, y: g, icon: f, flip: u, color: i }), e[0] = i, e[1] = d, e[2] = g, e[3] = u, e[4] = f, e[5] = b) : b = e[5];
  let v;
  e[6] !== g || e[7] !== a || e[8] !== c || e[9] !== p ? (v = a && m.jsx(qs, { className: "fill-black", text: a, x: p, y: g, width: 40, font: 24, align: c }), e[6] = g, e[7] = a, e[8] = c, e[9] = p, e[10] = v) : v = e[10];
  let x;
  return e[11] !== b || e[12] !== v ? (x = m.jsxs("g", { className: "cursor-pointer", children: [b, v] }), e[11] = b, e[12] = v, e[13] = x) : x = e[13], x;
}, qs = (t) => {
  const e = F.c(14), { className: a, text: i, x: o, y: c, width: f, font: u, align: d } = t, g = a === void 0 ? "" : a, p = d === void 0 ? "center" : d, [b, v] = $.useState(u), x = $.useRef(null);
  let S;
  e[0] !== b || e[1] !== f ? (S = () => {
    if (x.current) {
      const C = x.current.getBBox();
      if (C.width > f) {
        const E = b * (f / C.width);
        v(E);
      }
    }
  }, e[0] = b, e[1] = f, e[2] = S) : S = e[2];
  let j;
  e[3] !== b || e[4] !== i || e[5] !== f ? (j = [i, b, f], e[3] = b, e[4] = i, e[5] = f, e[6] = j) : j = e[6], $.useEffect(S, j);
  const w = p === "center" ? "middle" : p === "left" ? "start" : "end", N = `fill-black font-mono ${g}`, k = p === "center" ? o : p === "left" ? o - f / 2 : o + f / 2;
  let M;
  return e[7] !== b || e[8] !== N || e[9] !== k || e[10] !== i || e[11] !== w || e[12] !== c ? (M = m.jsx("text", { ref: x, className: N, dominantBaseline: "middle", textAnchor: w, fontSize: b, x: k, y: c, children: i }), e[7] = b, e[8] = N, e[9] = k, e[10] = i, e[11] = w, e[12] = c, e[13] = M) : M = e[13], M;
};
function Cw(t) {
  const { relative: e } = t;
  return e[0] === "left";
}
function Ew(t) {
  const { name: e, direct: a } = t;
  return [e, a === "in" ? ">" : "<"];
}
function Ow(t) {
  const { relative: e } = t;
  return e[0] === "right";
}
function zw(t) {
  const { name: e, direct: a } = t;
  return [e, a === "in" ? ">" : "<"];
}
function Dw(t) {
  const { direct: e } = t;
  return e === "in";
}
function Rw(t) {
  const { name: e } = t;
  return [e, ">"];
}
function Lw(t) {
  const { direct: e } = t;
  return e === "out";
}
function Uw(t) {
  const { name: e } = t;
  return [e, ">"];
}
function $w(t) {
  return t.join(",");
}
function Hw(t) {
  return t.join(",");
}
function qw(t) {
  return t.join(",");
}
function Vw(t) {
  return t.join(",");
}
function Bw(t) {
  const { name: e } = t;
  return [e, ">"];
}
function Yw(t) {
  const { name: e } = t;
  return [e, "<"];
}
function Gw(t) {
  const { name: e } = t;
  return [e, ">"];
}
function Qw(t) {
  const { name: e } = t;
  return [e, "<"];
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Xw = (t) => {
  const e = F.c(16), { port: a } = t, [i, o] = Ee(Kt), c = n3(), [f, u] = a.pos;
  let d;
  e[0] !== c || e[1] !== i.state || e[2] !== i.value || e[3] !== a.elem || e[4] !== a.name || e[5] !== a.pos || e[6] !== o ? (d = async () => {
    if (i.state === "Default" && o({ state: "AddWire", value: { start: { elem: a.elem, port: a.name, pos: a.pos }, path: [] } }), i.state === "AddWire") {
      const x = i.value;
      try {
        const S = await _v(x.start.pos, a.pos);
        c({ name: jf(), src: { elem: x.start.elem, port: x.start.port }, dst: { elem: a.elem, port: a.name }, path: S });
      } catch (S) {
        console.warn("API routing failed, using frontend routing:", S);
        const w = xg(x.start.pos, a.pos);
        c({ name: jf(), src: { elem: x.start.elem, port: x.start.port }, dst: { elem: a.elem, port: a.name }, path: w });
      }
      setTimeout(() => o({ state: "Default", value: void 0 }));
    }
  }, e[0] = c, e[1] = i.state, e[2] = i.value, e[3] = a.elem, e[4] = a.name, e[5] = a.pos, e[6] = o, e[7] = d) : d = e[7];
  const g = d;
  let p, b;
  e[8] !== f || e[9] !== u ? (p = m.jsx("circle", { cx: f, cy: u, r: 3, className: "fill-gray-700 dark:fill-gray-300" }), b = m.jsx("circle", { cx: f, cy: u, r: 9, className: "hover:fill-black/50 dark:hover:fill-white/50 fill-white/0" }), e[8] = f, e[9] = u, e[10] = p, e[11] = b) : (p = e[10], b = e[11]);
  let v;
  return e[12] !== g || e[13] !== p || e[14] !== b ? (v = m.jsxs("g", { className: "cursor-pointer group", onClick: g, children: [p, b] }), e[12] = g, e[13] = p, e[14] = b, e[15] = v) : v = e[15], v;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Fw = (t) => {
  const e = F.c(27), { wire: a } = t, { selected: i, onClick: o, onMouseDown: c, addPath: f } = wp(a.name), [u, d] = $.useState(false);
  let g, p;
  if (e[0] !== a.dst.pos || e[1] !== a.path || e[2] !== a.src.pos) {
    const L = [a.src.pos, ...a.path, a.dst.pos];
    g = L.slice(1).map((A, z) => [(L[z][0] + A[0]) / 2, (L[z][1] + A[1]) / 2]), p = L.reduce(Pw, ""), e[0] = a.dst.pos, e[1] = a.path, e[2] = a.src.pos, e[3] = g, e[4] = p;
  } else g = e[3], p = e[4];
  const b = p, v = i || u;
  let x, S;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (x = () => d(true), S = () => d(false), e[5] = x, e[6] = S) : (x = e[5], S = e[6]);
  const j = v ? 0.5 : 0;
  let w;
  e[7] !== b || e[8] !== j ? (w = m.jsx("polyline", { points: b, className: "cursor-pointer stroke-[12px] stroke-gray-700 dark:stroke-gray-500", opacity: j }), e[7] = b, e[8] = j, e[9] = w) : w = e[9];
  let N;
  e[10] !== b ? (N = m.jsx("polyline", { points: b, className: "stroke-black dark:stroke-white stroke-[3px]" }), e[10] = b, e[11] = N) : N = e[11];
  let k;
  e[12] !== f || e[13] !== g || e[14] !== a ? (k = g.map((L, A) => m.jsx(Kw, { wire: a, idx: A, pos: L, onMouseDown: () => f(A, $l(L)) }, A)), e[12] = f, e[13] = g, e[14] = a, e[15] = k) : k = e[15];
  let M;
  e[16] !== o || e[17] !== c || e[18] !== w || e[19] !== N || e[20] !== k ? (M = m.jsxs("g", { className: "cursor-pointer fill-none [stroke-linecap:round] [stroke-linejoin:round]", onMouseOver: x, onMouseLeave: S, onMouseDown: c, onClick: o, onDoubleClick: Ww, children: [w, N, k] }), e[16] = o, e[17] = c, e[18] = w, e[19] = N, e[20] = k, e[21] = M) : M = e[21];
  let C;
  e[22] !== a ? (C = a.path.map((L, A) => m.jsx(Zw, { wire: a, idx: A, pos: L }, A)), e[22] = a, e[23] = C) : C = e[23];
  let E;
  return e[24] !== M || e[25] !== C ? (E = m.jsxs(m.Fragment, { children: [M, C] }), e[24] = M, e[25] = C, e[26] = E) : E = e[26], E;
}, Zw = (t) => {
  const e = F.c(17), { wire: a, idx: i, pos: o } = t;
  let c;
  e[0] !== i || e[1] !== a.name ? (c = { wire: a.name, idx: i }, e[0] = i, e[1] = a.name, e[2] = c) : c = e[2];
  const { selected: f, onMouseDown: u } = zS(c), [d, g] = $.useState(false), [p, b] = o, v = d || f;
  let x, S;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (x = () => g(true), S = () => g(false), e[3] = x, e[4] = S) : (x = e[3], S = e[4]);
  const j = v ? 1 : 0;
  let w;
  e[5] !== j || e[6] !== p || e[7] !== b ? (w = m.jsx("circle", { cx: p, cy: b, r: 4, fillOpacity: j, className: "fill-gray-600/50 dark:fill-gray-400/50" }), e[5] = j, e[6] = p, e[7] = b, e[8] = w) : w = e[8];
  const N = v ? 0.3 : 0;
  let k;
  e[9] !== N || e[10] !== p || e[11] !== b ? (k = m.jsx("circle", { cx: p, cy: b, r: 10, fillOpacity: N, className: "fill-gray-600/30 dark:fill-gray-400/30" }), e[9] = N, e[10] = p, e[11] = b, e[12] = k) : k = e[12];
  let M;
  return e[13] !== u || e[14] !== w || e[15] !== k ? (M = m.jsxs("g", { onClick: Jw, onMouseDown: u, onMouseEnter: x, onMouseLeave: S, className: "cursor-pointer", children: [w, k] }), e[13] = u, e[14] = w, e[15] = k, e[16] = M) : M = e[16], M;
}, Kw = (t) => {
  const e = F.c(14), { pos: a, onMouseDown: i } = t, [o, c] = $.useState(false), [f, u] = a;
  let d, g;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (d = () => c(true), g = () => c(false), e[0] = d, e[1] = g) : (d = e[0], g = e[1]);
  const p = o ? 1 : 0;
  let b;
  e[2] !== p || e[3] !== f || e[4] !== u ? (b = m.jsx("circle", { cx: f, cy: u, r: 4, opacity: p, className: "fill-gray-600/50 dark:fill-gray-400/50" }), e[2] = p, e[3] = f, e[4] = u, e[5] = b) : b = e[5];
  const v = o ? 0.3 : 0;
  let x;
  e[6] !== v || e[7] !== f || e[8] !== u ? (x = m.jsx("circle", { cx: f, cy: u, r: 10, opacity: v, className: "fill-gray-600/30 dark:fill-gray-400/30 stroke-gray-600/30 dark:stroke-gray-400/30 stroke-dasharray-[2,2]" }), e[6] = v, e[7] = f, e[8] = u, e[9] = x) : x = e[9];
  let S;
  return e[10] !== i || e[11] !== b || e[12] !== x ? (S = m.jsxs("g", { onMouseDown: i, onMouseEnter: d, onMouseLeave: g, className: "cursor-pointer", children: [b, x] }), e[10] = i, e[11] = b, e[12] = x, e[13] = S) : S = e[13], S;
}, Iw = (t) => {
  const e = F.c(5), { path: a } = t, i = Ne(Ff);
  let o;
  e[0] !== i || e[1] !== a ? (o = [...a, i].map(e5).reduce(t5, ""), e[0] = i, e[1] = a, e[2] = o) : o = e[2];
  const c = o;
  let f;
  return e[3] !== c ? (f = m.jsx("polyline", { className: "fill-none stroke-black dark:stroke-white stroke-[3px] [stroke-linecap:round] [stroke-linejoin:round]", points: c }), e[3] = c, e[4] = f) : f = e[4], f;
};
function Pw(t, e) {
  const [a, i] = e;
  return `${t} ${a},${i}`;
}
function Ww() {
}
function Jw() {
}
function e5(t) {
  const [e, a] = t;
  return `${e},${a}`;
}
function t5(t, e) {
  return `${t} ${e}`;
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const n5 = (t) => {
  const e = F.c(17), { start: a, end: i } = t, o = Ne(sl), [c, f] = a, [u, d] = i ?? o, g = Math.min(c, u), p = Math.min(f, d);
  let b;
  e[0] !== g || e[1] !== p ? (b = [g, p], e[0] = g, e[1] = p, e[2] = b) : b = e[2];
  const [v, x] = b;
  let S;
  e[3] !== c || e[4] !== u ? (S = Math.abs(c - u), e[3] = c, e[4] = u, e[5] = S) : S = e[5];
  let j;
  e[6] !== f || e[7] !== d ? (j = Math.abs(f - d), e[6] = f, e[7] = d, e[8] = j) : j = e[8];
  let w;
  e[9] !== S || e[10] !== j ? (w = [S, j], e[9] = S, e[10] = j, e[11] = w) : w = e[11];
  const [N, k] = w;
  let M;
  return e[12] !== k || e[13] !== N || e[14] !== v || e[15] !== x ? (M = m.jsx("rect", { x: v, y: x, width: N, height: k, className: "fill-blue-500/20 dark:fill-blue-400/20 stroke-2 stroke-blue-600 dark:stroke-blue-400" }), e[12] = k, e[13] = N, e[14] = v, e[15] = x, e[16] = M) : M = e[16], M;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const l5 = () => {
  const t = F.c(25), e = Ne(Kt), { onMouseDown: a, onClick: i } = AS(), { onMouseUp: o, onClick: c } = MS(), f = Ne(ja).valid, u = Ne(or).valid, d = Ne(Za).valid;
  let g;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = m.jsx(iw, {}), t[0] = g) : g = t[0];
  let p;
  t[1] !== i || t[2] !== a ? (p = m.jsx(lw, { onMouseDown: a, onMouseUp: s5, onClick: i }), t[1] = i, t[2] = a, t[3] = p) : p = t[3];
  let b;
  t[4] !== e.state || t[5] !== e.value ? (b = e.state === "Selecting" && m.jsx(n5, { start: e.value.start }), t[4] = e.state, t[5] = e.value, t[6] = b) : b = t[6];
  let v;
  t[7] !== f ? (v = f.map(i5), t[7] = f, t[8] = v) : v = t[8];
  let x;
  t[9] !== e.state || t[10] !== e.value ? (x = e.state === "AddWire" && m.jsx(Iw, { path: [e.value.start.pos, ...e.value.path] }), t[9] = e.state, t[10] = e.value, t[11] = x) : x = t[11];
  let S;
  t[12] !== d ? (S = d.map(r5), t[12] = d, t[13] = S) : S = t[13];
  let j;
  t[14] !== u ? (j = u.map(o5), t[14] = u, t[15] = j) : j = t[15];
  let w;
  return t[16] !== c || t[17] !== o || t[18] !== p || t[19] !== b || t[20] !== v || t[21] !== x || t[22] !== S || t[23] !== j ? (w = m.jsxs(aw, { onMouseDown: a5, onMouseUp: o, onClick: c, children: [g, p, b, v, x, S, j] }), t[16] = c, t[17] = o, t[18] = p, t[19] = b, t[20] = v, t[21] = x, t[22] = S, t[23] = j, t[24] = w) : w = t[24], w;
};
function a5() {
}
function s5() {
}
function i5(t, e) {
  return m.jsx(cw, { elem: t }, e);
}
function r5(t, e) {
  return m.jsx(Fw, { wire: t }, e);
}
function o5(t) {
  return m.jsx(Xw, { port: t }, `${t.elem}_${t.name}`);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const c5 = (t) => {
  const e = F.c(14), { className: a } = t, i = Ne(it), o = Ne(Ff), c = Ne(Kt);
  let f;
  e[0] !== a ? (f = Q(a, "h-8 flex items-center bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200 border-t border-gray-300 dark:border-gray-700 px-4"), e[0] = a, e[1] = f) : f = e[1];
  let u;
  e[2] !== i.name ? (u = m.jsx("div", { className: "flex-1 text-sm font-medium", children: i.name }), e[2] = i.name, e[3] = u) : u = e[3];
  let d;
  e[4] !== c.state ? (d = m.jsx("div", { className: "w-[100px] text-sm", children: c.state }), e[4] = c.state, e[5] = d) : d = e[5];
  const g = `(${o[0]},${o[1]})`;
  let p;
  e[6] !== g ? (p = m.jsx("div", { className: "w-[300px] text-sm font-mono", children: g }), e[6] = g, e[7] = p) : p = e[7];
  let b;
  e[8] === Symbol.for("react.memo_cache_sentinel") ? (b = m.jsx("div", { className: "w-[100px]" }), e[8] = b) : b = e[8];
  let v;
  return e[9] !== f || e[10] !== u || e[11] !== d || e[12] !== p ? (v = m.jsxs("div", { className: f, children: [u, d, p, b] }), e[9] = f, e[10] = u, e[11] = d, e[12] = p, e[13] = v) : v = e[13], v;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const u5 = (t) => {
  const e = F.c(12), { className: a, proj: i } = t;
  let o;
  e[0] !== a ? (o = Q(a, "p-2 grid grid-cols-3 items-center dark:bg-gray-950 border-b-1 border-gray-500"), e[0] = a, e[1] = o) : o = e[1];
  let c;
  e[2] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsx("div", { className: "justify-self-start", children: m.jsx(Ia, { path: [["Project", null]] }) }), e[2] = c) : c = e[2];
  let f;
  e[3] !== i ? (f = m.jsx("div", { className: "justify-self-center text-lg font-semibold text-gray-900 dark:text-gray-100", children: i }), e[3] = i, e[4] = f) : f = e[4];
  let u, d;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (u = Q("flex items-center gap-2 px-3 py-1 text-sm rounded transition-all cursor-pointer", "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"), d = m.jsx(Vp, { className: "w-4 h-4" }), e[5] = u, e[6] = d) : (u = e[5], d = e[6]);
  let g;
  e[7] === Symbol.for("react.memo_cache_sentinel") ? (g = m.jsx(al, { href: "/info", children: m.jsxs("button", { className: u, children: [d, "Disconnected"] }) }), e[7] = g) : g = e[7];
  let p;
  e[8] === Symbol.for("react.memo_cache_sentinel") ? (p = m.jsxs("div", { className: "justify-self-end flex items-center gap-2", children: [g, m.jsx(al, { href: "/settings", className: Q("p-2 rounded-lg transition-all", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "hover:bg-gray-100 dark:hover:bg-gray-800", "focus:outline-none focus:ring-2 focus:ring-blue-500/20"), children: m.jsx(xa, { className: "w-5 h-5" }) })] }), e[8] = p) : p = e[8];
  let b;
  return e[9] !== o || e[10] !== f ? (b = m.jsxs("div", { className: o, children: [c, f, p] }), e[9] = o, e[10] = f, e[11] = b) : b = e[11], b;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const f5 = () => {
  const t = F.c(4), e = Ne(lh);
  let a;
  t[0] !== e ? (a = e.map(d5), t[0] = e, t[1] = a) : a = t[1];
  let i;
  return t[2] !== a ? (i = m.jsx("div", { className: "flex flex-col gap-2 p-2", children: a }), t[2] = a, t[3] = i) : i = t[3], i;
}, h5 = (t) => {
  const e = F.c(9), { name: a } = t, [i, o] = Ee(Kt), c = i.state === "AddElem" && i.value.elem.type === "Inst" && i.value.elem.modn === a;
  let f;
  e[0] !== a || e[1] !== o ? (f = () => {
    o({ state: "AddElem", value: { elem: { type: "Inst", modn: a, name: vt(a), pos: [0, 0], flip: false } } });
  }, e[0] = a, e[1] = o, e[2] = f) : f = e[2];
  const u = f, d = c ? "bg-blue-600 border-blue-700 hover:bg-blue-600 hover:border-blue-700" : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-600";
  let g;
  e[3] !== d ? (g = Q("flex h-8 items-center cursor-pointer border-b px-2 overflow-hidden transition-all duration-150", d), e[3] = d, e[4] = g) : g = e[4];
  let p;
  return e[5] !== a || e[6] !== u || e[7] !== g ? (p = m.jsx("div", { className: g, onClick: u, children: a }), e[5] = a, e[6] = u, e[7] = g, e[8] = p) : p = e[8], p;
};
function d5(t) {
  return m.jsx(h5, { name: t }, t);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const m5 = () => {
  const t = F.c(35);
  let e;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = vt("regwrite"), t[0] = e) : e = t[0];
  let a;
  t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = m.jsx(Mt, { name: "Read Write Registor", Icon: Us, init: { type: "RegWrite", name: e, bit: 1, pos: [0, 0], flip: false }, color: "green" }), t[1] = a) : a = t[1];
  let i;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = vt("regread"), t[2] = i) : i = t[2];
  let o;
  t[3] === Symbol.for("react.memo_cache_sentinel") ? (o = m.jsx(Mt, { name: "Read Only Registor", Icon: Us, init: { type: "RegRead", name: i, bit: 1, pos: [0, 0], flip: false }, color: "green" }), t[3] = o) : o = t[3];
  let c;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsx(Mt, { name: "Trigger Registor", Icon: Us, init: { type: "RegTrig", name: vt("regtrig"), pos: [0, 0], flip: false }, color: "green" }), t[4] = c) : c = t[4];
  let f;
  t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = vt("intr"), t[5] = f) : f = t[5];
  let u;
  t[6] === Symbol.for("react.memo_cache_sentinel") ? (u = m.jsx(Mt, { name: "Interruption", Icon: qp, init: { type: "Intr", name: f, src: "main.cpp:0", pos: [0, 0], flip: false }, color: "red" }), t[6] = u) : u = t[6];
  let d;
  t[7] === Symbol.for("react.memo_cache_sentinel") ? (d = m.jsx(Mt, { name: "Input Port", Icon: Cp, init: { type: "PortIn", name: vt("portin"), pos: [0, 0], flip: false }, color: "blue" }), t[7] = d) : d = t[7];
  let g;
  t[8] === Symbol.for("react.memo_cache_sentinel") ? (g = m.jsx(Mt, { name: "Output Port", Icon: Ep, init: { type: "PortOut", name: vt("portout"), pos: [0, 0], flip: false }, color: "blue" }), t[8] = g) : g = t[8];
  let p;
  t[9] === Symbol.for("react.memo_cache_sentinel") ? (p = m.jsx(Mt, { name: "InOut Port", Icon: Op, init: { type: "PortInOut", name: vt("portinout"), pos: [0, 0], flip: false }, color: "blue" }), t[9] = p) : p = t[9];
  let b;
  t[10] === Symbol.for("react.memo_cache_sentinel") ? (b = vt("const"), t[10] = b) : b = t[10];
  let v;
  t[11] === Symbol.for("react.memo_cache_sentinel") ? (v = m.jsx(Mt, { name: "Const", Icon: Us, init: { type: "Const", name: b, bit: 1, value: 0, pos: [0, 0], flip: false }, color: "violet" }), t[11] = v) : v = t[11];
  let x;
  t[12] === Symbol.for("react.memo_cache_sentinel") ? (x = vt("op"), t[12] = x) : x = t[12];
  let S;
  t[13] === Symbol.for("react.memo_cache_sentinel") ? (S = m.jsx(Mt, { name: "Arith Op", Icon: gl, init: { type: "ArithOp", name: x, op: "add", bit: 8, inputs: 2, pos: [0, 0], flip: false }, color: "violet" }), t[13] = S) : S = t[13];
  let j;
  t[14] === Symbol.for("react.memo_cache_sentinel") ? (j = vt("op"), t[14] = j) : j = t[14];
  let w;
  t[15] === Symbol.for("react.memo_cache_sentinel") ? (w = m.jsx(Mt, { name: "Bit Op", Icon: Uf, init: { type: "BitOp", name: j, op: "and", bit: 1, inputs: 2, pos: [0, 0], flip: false }, color: "violet" }), t[15] = w) : w = t[15];
  let N;
  t[16] === Symbol.for("react.memo_cache_sentinel") ? (N = vt("op"), t[16] = N) : N = t[16];
  let k;
  t[17] === Symbol.for("react.memo_cache_sentinel") ? (k = m.jsx(Mt, { name: "Reduce OP", Icon: Uf, init: { type: "ReduceOp", name: N, op: "or", bit: 8, pos: [0, 0], flip: false }, color: "violet" }), t[17] = k) : k = t[17];
  let M;
  t[18] === Symbol.for("react.memo_cache_sentinel") ? (M = vt("mux"), t[18] = M) : M = t[18];
  let C;
  t[19] === Symbol.for("react.memo_cache_sentinel") ? (C = m.jsx(Mt, { name: "Multiplexer", Icon: $f, init: { type: "Mux", name: M, bit: 1, opts: 2, pos: [0, 0], flip: false }, color: "zinc" }), t[19] = C) : C = t[19];
  let E;
  t[20] === Symbol.for("react.memo_cache_sentinel") ? (E = vt("demux"), t[20] = E) : E = t[20];
  let L;
  t[21] === Symbol.for("react.memo_cache_sentinel") ? (L = m.jsx(Mt, { name: "De-Multiplexer", Icon: qf, init: { type: "Demux", name: E, bit: 1, opts: 2, pos: [0, 0], flip: false }, color: "zinc" }), t[21] = L) : L = t[21];
  let A;
  t[22] === Symbol.for("react.memo_cache_sentinel") ? (A = m.jsx(Mt, { name: "Packer", Icon: $f, init: { type: "Pack", name: vt("pack"), bits: [1, 1], pos: [0, 0], flip: false }, color: "zinc" }), t[22] = A) : A = t[22];
  let z;
  t[23] === Symbol.for("react.memo_cache_sentinel") ? (z = m.jsx(Mt, { name: "Unpacker", Icon: qf, init: { type: "Unpack", name: vt("unpack"), bits: [1, 1], pos: [0, 0], flip: false }, color: "zinc" }), t[23] = z) : z = t[23];
  let q;
  t[24] === Symbol.for("react.memo_cache_sentinel") ? (q = vt("ff"), t[24] = q) : q = t[24];
  let B;
  t[25] === Symbol.for("react.memo_cache_sentinel") ? (B = m.jsx(Mt, { name: "Flip-Flop", Icon: Hf, init: { type: "FlipFlop", name: q, bit: 1, pos: [0, 0], flip: false }, color: "amber" }), t[25] = B) : B = t[25];
  let J, W;
  t[26] === Symbol.for("react.memo_cache_sentinel") ? (J = vt("fsm"), W = [0, 0], t[26] = J, t[27] = W) : (J = t[26], W = t[27]);
  let oe;
  t[28] === Symbol.for("react.memo_cache_sentinel") ? (oe = m.jsx(Mt, { name: "State Machine", Icon: Hf, init: { type: "StateMachine", name: J, pos: W, flip: false, inputs: [], outputs: [], states: [], transitions: [] }, color: "amber" }), t[28] = oe) : oe = t[28];
  let ae, K;
  t[29] === Symbol.for("react.memo_cache_sentinel") ? (ae = vt("comb"), K = [0, 0], t[29] = ae, t[30] = K) : (ae = t[29], K = t[30]);
  let R;
  t[31] === Symbol.for("react.memo_cache_sentinel") ? (R = m.jsx(Mt, { name: "Comb Circuit", Icon: Lf, init: { type: "CombCircuit", name: ae, pos: K, flip: false, inputs: [], outputs: [], arms: [] }, color: "amber" }), t[31] = R) : R = t[31];
  let G, ne;
  t[32] === Symbol.for("react.memo_cache_sentinel") ? (G = vt("verilog"), ne = [], t[32] = G, t[33] = ne) : (G = t[32], ne = t[33]);
  let ue;
  return t[34] === Symbol.for("react.memo_cache_sentinel") ? (ue = m.jsxs("div", { className: "p-2 space-y-1", children: [a, o, c, u, d, g, p, v, S, w, k, C, L, A, z, B, oe, R, m.jsx(Mt, { name: "Verilog", Icon: zp, init: { type: "Verilog", name: G, ports: ne, code: "", pos: [0, 0], flip: false }, color: "yellow" })] }), t[34] = ue) : ue = t[34], ue;
}, Mt = (t) => {
  const e = F.c(21), { name: a, init: i, Icon: o, color: c } = t, f = c === void 0 ? "gray" : c, [u, d] = Ee(Kt), g = u.state === "AddElem" && u.value.elem.type === i.type;
  let p;
  e[0] !== i || e[1] !== g || e[2] !== d ? (p = () => {
    g ? d({ state: "Default", value: void 0 }) : (console.log(i), d({ state: "AddElem", value: { elem: i } }));
  }, e[0] = i, e[1] = g, e[2] = d, e[3] = p) : p = e[3];
  const b = p;
  let v;
  e[4] !== f || e[5] !== g ? (v = () => {
    if (g) return "bg-blue-600 border-blue-700 hover:bg-blue-600 hover:border-blue-700 text-white";
    switch (f) {
      case "rose":
        return "bg-rose-100 dark:bg-rose-900/30 border-rose-300 dark:border-rose-700 hover:bg-rose-200 dark:hover:bg-rose-800/40 text-rose-900 dark:text-rose-100";
      case "red":
        return "bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700 hover:bg-red-200 dark:hover:bg-red-800/40 text-red-900 dark:text-red-100";
      case "blue":
        return "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800/40 text-blue-900 dark:text-blue-100";
      case "green":
        return "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-800/40 text-green-900 dark:text-green-100";
      case "yellow":
        return "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-200 dark:hover:bg-yellow-800/40 text-yellow-900 dark:text-yellow-100";
      case "violet":
        return "bg-violet-100 dark:bg-violet-900/30 border-violet-300 dark:border-violet-700 hover:bg-violet-200 dark:hover:bg-violet-800/40 text-violet-900 dark:text-violet-100";
      case "zinc":
        return "bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100";
      case "amber":
        return "bg-amber-100 dark:bg-amber-900/30 border-amber-300 dark:border-amber-700 hover:bg-amber-200 dark:hover:bg-amber-800/40 text-amber-900 dark:text-amber-100";
      default:
        return "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100";
    }
  }, e[4] = f, e[5] = g, e[6] = v) : v = e[6];
  const x = v;
  let S;
  e[7] !== x ? (S = Q("grid grid-cols-[30px_1fr] items-center cursor-pointer h-8 border-b transition-all duration-150", x()), e[7] = x, e[8] = S) : S = e[8];
  let j;
  e[9] === Symbol.for("react.memo_cache_sentinel") ? (j = Q("flex items-center justify-center overflow-hidden"), e[9] = j) : j = e[9];
  let w;
  e[10] === Symbol.for("react.memo_cache_sentinel") ? (w = Q("w-5 h-5"), e[10] = w) : w = e[10];
  let N;
  e[11] !== o ? (N = m.jsx("div", { className: j, children: m.jsx(o, { className: w }) }), e[11] = o, e[12] = N) : N = e[12];
  let k;
  e[13] === Symbol.for("react.memo_cache_sentinel") ? (k = Q("flex items-center justify-start overflow-hidden font-bold whitespace-nowrap text-ellipsis text-sm px-2"), e[13] = k) : k = e[13];
  let M;
  e[14] !== a ? (M = m.jsx("div", { className: k, children: a }), e[14] = a, e[15] = M) : M = e[15];
  let C;
  return e[16] !== b || e[17] !== S || e[18] !== N || e[19] !== M ? (C = m.jsxs("div", { className: S, onClick: b, children: [N, M] }), e[16] = b, e[17] = S, e[18] = N, e[19] = M, e[20] = C) : C = e[20], C;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const g5 = () => {
  const t = F.c(25), { undo: e, redo: a } = wn(), i = np(), o = xp(), c = lp(), f = d3();
  let u;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = m.jsx(g_, {}), t[0] = u) : u = t[0];
  let d;
  t[1] !== e ? (d = m.jsx(Ds, { onClick: e, icon: u, text: "Undo" }), t[1] = e, t[2] = d) : d = t[2];
  let g;
  t[3] === Symbol.for("react.memo_cache_sentinel") ? (g = m.jsx(Fj, {}), t[3] = g) : g = t[3];
  let p;
  t[4] !== a ? (p = m.jsx(Ds, { onClick: a, icon: g, text: "Redo" }), t[4] = a, t[5] = p) : p = t[5];
  let b;
  t[6] === Symbol.for("react.memo_cache_sentinel") ? (b = m.jsx(Wj, {}), t[6] = b) : b = t[6];
  let v;
  t[7] !== o ? (v = m.jsx(Ds, { onClick: o, icon: b, text: "Save" }), t[7] = o, t[8] = v) : v = t[8];
  let x;
  t[9] === Symbol.for("react.memo_cache_sentinel") ? (x = m.jsx(vj, {}), t[9] = x) : x = t[9];
  let S;
  t[10] !== c ? (S = m.jsx(Ds, { onClick: c, icon: x, text: "Flip" }), t[10] = c, t[11] = S) : S = t[11];
  let j;
  t[12] === Symbol.for("react.memo_cache_sentinel") ? (j = m.jsx(ch, {}), t[12] = j) : j = t[12];
  let w;
  t[13] !== i ? (w = m.jsx(Ds, { onClick: i, icon: j, text: "Delete" }), t[13] = i, t[14] = w) : w = t[14];
  let N;
  t[15] === Symbol.for("react.memo_cache_sentinel") ? (N = m.jsx(l_, {}), t[15] = N) : N = t[15];
  let k;
  t[16] !== f ? (k = m.jsx(Ds, { onClick: f, icon: N, text: "Format" }), t[16] = f, t[17] = k) : k = t[17];
  let M;
  return t[18] !== d || t[19] !== k || t[20] !== p || t[21] !== v || t[22] !== S || t[23] !== w ? (M = m.jsx("div", { className: "overflow-y-scroll bg-gray-100 dark:bg-gray-800", children: m.jsxs("div", { className: "flex flex-col gap-2 p-2 [&>button]:w-full [&>button]:aspect-square", children: [d, p, v, S, w, k] }) }), t[18] = d, t[19] = k, t[20] = p, t[21] = v, t[22] = S, t[23] = w, t[24] = M) : M = t[24], M;
}, Ds = (t) => {
  const e = F.c(9), { onClick: a, icon: i, text: o } = t;
  let c;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (c = Q("cursor-pointer rounded-md border-2 border-solid", "bg-gray-500 dark:bg-gray-600 border-gray-600 dark:border-gray-700", "hover:bg-gray-600 dark:hover:bg-gray-700 hover:border-gray-700 dark:hover:border-gray-800", "text-white", "aspect-square w-full p-1 flex flex-col justify-center items-center"), e[0] = c) : c = e[0];
  let f;
  e[1] !== i ? (f = m.jsx("div", { className: "h-[70%] flex items-center justify-center", children: i }), e[1] = i, e[2] = f) : f = e[2];
  let u;
  e[3] !== o ? (u = m.jsx("div", { className: "h-[30%] text-[10px] leading-tight flex items-center", children: o }), e[3] = o, e[4] = u) : u = e[4];
  let d;
  return e[5] !== a || e[6] !== f || e[7] !== u ? (d = m.jsxs("button", { className: c, onClick: a, children: [f, u] }), e[5] = a, e[6] = f, e[7] = u, e[8] = d) : d = e[8], d;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const p5 = () => {
  const t = F.c(5), e = Ne(Za).valid;
  let a;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = Q("p-2 space-y-2"), t[0] = a) : a = t[0];
  let i;
  t[1] !== e ? (i = e.map(b5), t[1] = e, t[2] = i) : i = t[2];
  let o;
  return t[3] !== i ? (o = m.jsx("div", { className: a, children: i }), t[3] = i, t[4] = o) : o = t[4], o;
}, y5 = (t) => {
  const e = F.c(33), { wire: a } = t, { selected: i, select: o, append: c } = wp(a.name), f = $.useRef(null);
  let u, d;
  e[0] !== i ? (u = () => {
    i && f.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, d = [i], e[0] = i, e[1] = u, e[2] = d) : (u = e[1], d = e[2]), $.useEffect(u, d);
  const g = i ? "bg-blue-600 border-blue-700 hover:bg-blue-600 hover:border-blue-700" : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-600";
  let p;
  e[3] !== g ? (p = Q("grid grid-cols-4 gap-2 px-3 py-2 border-b cursor-pointer transition-all duration-150", g), e[3] = g, e[4] = p) : p = e[4];
  let b;
  e[5] !== c || e[6] !== o ? (b = (q) => q.ctrlKey ? c() : o(), e[5] = c, e[6] = o, e[7] = b) : b = e[7];
  let v;
  e[8] === Symbol.for("react.memo_cache_sentinel") ? (v = Q("text-sm font-medium"), e[8] = v) : v = e[8];
  let x;
  e[9] !== a.name ? (x = m.jsx("div", { className: v, children: a.name }), e[9] = a.name, e[10] = x) : x = e[10];
  let S;
  e[11] === Symbol.for("react.memo_cache_sentinel") ? (S = Q("text-sm text-center"), e[11] = S) : S = e[11];
  let j;
  e[12] !== a.bit ? (j = m.jsx("div", { className: S, children: a.bit }), e[12] = a.bit, e[13] = j) : j = e[13];
  let w;
  e[14] === Symbol.for("react.memo_cache_sentinel") ? (w = Q("text-sm text-right"), e[14] = w) : w = e[14];
  let N;
  e[15] !== a.src.elem || e[16] !== a.src.port ? (N = [a.src.elem, a.src.port], e[15] = a.src.elem, e[16] = a.src.port, e[17] = N) : N = e[17];
  const k = N.join(".");
  let M;
  e[18] !== k ? (M = m.jsx("div", { className: w, children: k }), e[18] = k, e[19] = M) : M = e[19];
  let C;
  e[20] === Symbol.for("react.memo_cache_sentinel") ? (C = Q("text-sm text-right"), e[20] = C) : C = e[20];
  let E;
  e[21] !== a.dst.elem || e[22] !== a.dst.port ? (E = [a.dst.elem, a.dst.port], e[21] = a.dst.elem, e[22] = a.dst.port, e[23] = E) : E = e[23];
  const L = E.join(".");
  let A;
  e[24] !== L ? (A = m.jsx("div", { className: C, children: L }), e[24] = L, e[25] = A) : A = e[25];
  let z;
  return e[26] !== M || e[27] !== A || e[28] !== p || e[29] !== b || e[30] !== x || e[31] !== j ? (z = m.jsxs("div", { ref: f, className: p, onClick: b, children: [x, j, M, A] }), e[26] = M, e[27] = A, e[28] = p, e[29] = b, e[30] = x, e[31] = j, e[32] = z) : z = e[32], z;
};
function b5(t) {
  return m.jsx(y5, { wire: t }, t.name);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const v5 = (t) => {
  switch (t) {
    case "RegWrite":
    case "RegRead":
    case "Const":
      return Us;
    case "RegTrig":
      return Us;
    case "Intr":
      return qp;
    case "PortIn":
      return Cp;
    case "PortOut":
      return Ep;
    case "PortInOut":
      return Op;
    case "ArithOp":
      return gl;
    case "BitOp":
    case "ReduceOp":
      return Uf;
    case "Mux":
    case "Pack":
      return $f;
    case "Demux":
    case "Unpack":
      return qf;
    case "FlipFlop":
    case "StateMachine":
      return Hf;
    case "Verilog":
      return zp;
    case "CombCircuit":
      return Lf;
    default:
      return Lf;
  }
}, x5 = (t) => {
  switch (t) {
    case "Inst":
      return "rose";
    case "Intr":
      return "red";
    case "PortIn":
    case "PortOut":
    case "PortInOut":
      return "blue";
    case "RegWrite":
    case "RegRead":
    case "RegTrig":
      return "green";
    case "Verilog":
      return "yellow";
    case "ArithOp":
    case "BitOp":
    case "ReduceOp":
    case "Const":
      return "violet";
    case "Pack":
    case "Unpack":
    case "Mux":
    case "Demux":
      return "zinc";
    case "FlipFlop":
    case "StateMachine":
    case "CombCircuit":
      return "amber";
    default:
      return "gray";
  }
}, S5 = () => {
  const t = F.c(5), { elems: e } = Ne(it);
  let a;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = Q("p-2 space-y-1"), t[0] = a) : a = t[0];
  let i;
  t[1] !== e ? (i = e.map(_5), t[1] = e, t[2] = i) : i = t[2];
  let o;
  return t[3] !== i ? (o = m.jsx("div", { className: a, children: i }), t[3] = i, t[4] = o) : o = t[4], o;
}, j5 = (t) => {
  const e = F.c(25), { elem: a } = t, { selected: i, select: o, append: c, onDoubleClick: f } = St(a), u = $.useRef(null);
  let d, g;
  e[0] !== i ? (d = () => {
    i && u.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, g = [i], e[0] = i, e[1] = d, e[2] = g) : (d = e[1], g = e[2]), $.useEffect(d, g);
  let p;
  e[3] !== a.type ? (p = v5(a.type), e[3] = a.type, e[4] = p) : p = e[4];
  const b = p;
  let v;
  e[5] !== a.type ? (v = x5(a.type), e[5] = a.type, e[6] = v) : v = e[6];
  const x = v;
  let S;
  e[7] !== x || e[8] !== i ? (S = () => {
    if (i) return "bg-blue-600 border-blue-700 hover:bg-blue-600 hover:border-blue-700 text-white";
    switch (x) {
      case "rose":
        return "bg-rose-100 dark:bg-rose-900/30 border-rose-300 dark:border-rose-700 hover:bg-rose-200 dark:hover:bg-rose-800/40 text-rose-900 dark:text-rose-100";
      case "red":
        return "bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700 hover:bg-red-200 dark:hover:bg-red-800/40 text-red-900 dark:text-red-100";
      case "blue":
        return "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800/40 text-blue-900 dark:text-blue-100";
      case "green":
        return "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-800/40 text-green-900 dark:text-green-100";
      case "yellow":
        return "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-200 dark:hover:bg-yellow-800/40 text-yellow-900 dark:text-yellow-100";
      case "violet":
        return "bg-violet-100 dark:bg-violet-900/30 border-violet-300 dark:border-violet-700 hover:bg-violet-200 dark:hover:bg-violet-800/40 text-violet-900 dark:text-violet-100";
      case "zinc":
        return "bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100";
      case "amber":
        return "bg-amber-100 dark:bg-amber-900/30 border-amber-300 dark:border-amber-700 hover:bg-amber-200 dark:hover:bg-amber-800/40 text-amber-900 dark:text-amber-100";
      default:
        return "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100";
    }
  }, e[7] = x, e[8] = i, e[9] = S) : S = e[9];
  const j = S;
  let w;
  e[10] !== j ? (w = Q("grid grid-cols-[30px_1fr] items-center cursor-pointer h-8 border-b transition-all duration-150", j()), e[10] = j, e[11] = w) : w = e[11];
  let N;
  e[12] !== c || e[13] !== o ? (N = (E) => E.ctrlKey ? c() : o(), e[12] = c, e[13] = o, e[14] = N) : N = e[14];
  let k;
  e[15] !== b ? (k = m.jsx("div", { className: "flex items-center justify-center overflow-hidden", children: m.jsx(b, { className: "w-5 h-5" }) }), e[15] = b, e[16] = k) : k = e[16];
  let M;
  e[17] !== a.name ? (M = m.jsx("div", { className: "flex items-center justify-start overflow-hidden font-bold whitespace-nowrap text-ellipsis text-sm px-2", children: a.name }), e[17] = a.name, e[18] = M) : M = e[18];
  let C;
  return e[19] !== f || e[20] !== w || e[21] !== N || e[22] !== k || e[23] !== M ? (C = m.jsxs("div", { ref: u, className: w, onClick: N, onDoubleClick: f, children: [k, M] }), e[19] = f, e[20] = w, e[21] = N, e[22] = k, e[23] = M, e[24] = C) : C = e[24], C;
};
function _5(t) {
  return m.jsx(j5, { elem: t }, t.name);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const w5 = () => {
  const t = F.c(22), [e, a] = Ee(Bo), i = Zt(Yo);
  let o;
  t[0] !== i || t[1] !== a || t[2] !== e ? (o = () => {
    const w = `module_${Date.now()}.v`, N = { type: "elem", id: w, name: w, objectType: "elem" }, k = e.findIndex((M) => M.id === w);
    k === -1 ? (a([...e, N]), i(e.length)) : i(k);
  }, t[0] = i, t[1] = a, t[2] = e, t[3] = o) : o = t[3];
  const c = o;
  let f, u, d, g;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (f = m.jsx(Wm, { Icon: Lp, text: "Elems" }), u = m.jsx(S5, {}), d = m.jsx(Wm, { Icon: KS, text: "Wires" }), g = m.jsx(p5, {}), t[4] = f, t[5] = u, t[6] = d, t[7] = g) : (f = t[4], u = t[5], d = t[6], g = t[7]);
  let p;
  t[8] === Symbol.for("react.memo_cache_sentinel") ? (p = m.jsxs("div", { className: "flex items-center gap-2", children: [m.jsx(cj, { className: "text-gray-700 dark:text-gray-300 w-5 h-5" }), m.jsx("span", { className: "text-gray-700 dark:text-gray-300 font-medium", children: "Verilog Files" })] }), t[8] = p) : p = t[8];
  let b;
  t[9] === Symbol.for("react.memo_cache_sentinel") ? (b = m.jsx(gl, { className: "w-4 h-4 text-gray-700 dark:text-gray-300" }), t[9] = b) : b = t[9];
  let v;
  t[10] !== c ? (v = m.jsxs("div", { className: "flex items-center justify-between px-4 py-2 border-b border-gray-300 dark:border-gray-700", children: [p, m.jsx("button", { onClick: c, className: "p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors", title: "\u65B0\u3057\u3044Verilog\u30D5\u30A1\u30A4\u30EB\u3092\u8FFD\u52A0", children: b })] }), t[10] = c, t[11] = v) : v = t[11];
  let x;
  if (t[12] !== i || t[13] !== e) {
    let w;
    t[15] !== i ? (w = (N, k) => m.jsx("div", { className: "py-1 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer", onClick: () => i(k), children: m.jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: N.name }) }, N.id), t[15] = i, t[16] = w) : w = t[16], x = e.filter(N5).map(w), t[12] = i, t[13] = e, t[14] = x;
  } else x = t[14];
  let S;
  t[17] !== x ? (S = m.jsx("div", { className: "px-4 py-2", children: x }), t[17] = x, t[18] = S) : S = t[18];
  let j;
  return t[19] !== v || t[20] !== S ? (j = m.jsxs("div", { children: [f, u, d, g, v, S] }), t[19] = v, t[20] = S, t[21] = j) : j = t[21], j;
}, Wm = (t) => {
  const e = F.c(11), { Icon: a, text: i } = t;
  let o, c;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (o = Q("grid grid-cols-[40px_1fr] items-center gap-1 w-full h-10", "border-b border-gray-300 dark:border-gray-700"), c = Q("flex items-center justify-center"), e[0] = o, e[1] = c) : (o = e[0], c = e[1]);
  let f;
  e[2] === Symbol.for("react.memo_cache_sentinel") ? (f = Q("text-gray-700 dark:text-gray-300 w-6 h-6"), e[2] = f) : f = e[2];
  let u;
  e[3] !== a ? (u = m.jsx("div", { className: c, children: m.jsx(a, { className: f }) }), e[3] = a, e[4] = u) : u = e[4];
  let d;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (d = Q("text-gray-700 dark:text-gray-300 font-medium"), e[5] = d) : d = e[5];
  let g;
  e[6] !== i ? (g = m.jsx("div", { className: d, children: i }), e[6] = i, e[7] = g) : g = e[7];
  let p;
  return e[8] !== u || e[9] !== g ? (p = m.jsxs("div", { className: o, children: [u, g] }), e[8] = u, e[9] = g, e[10] = p) : p = e[10], p;
};
function N5(t) {
  return t.type === "gensw" || t.type === "genhw";
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const T5 = () => {
  const t = F.c(39), [e, a] = Ee(Wf), i = Av(Kt);
  let o;
  t[0] !== i || t[1] !== a ? (o = (q) => {
    i(), a(q);
  }, t[0] = i, t[1] = a, t[2] = o) : o = t[2];
  const c = o;
  let f;
  t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = m.jsx(g5, {}), t[3] = f) : f = t[3];
  let u;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (u = m.jsx(rh, { size: 20 }), t[4] = u) : u = t[4];
  const d = e === "proj";
  let g;
  t[5] !== c ? (g = () => c("proj"), t[5] = c, t[6] = g) : g = t[6];
  let p;
  t[7] !== d || t[8] !== g ? (p = m.jsx(ga, { name: "Info", icon: u, isActive: d, onClick: g }), t[7] = d, t[8] = g, t[9] = p) : p = t[9];
  let b;
  t[10] === Symbol.for("react.memo_cache_sentinel") ? (b = m.jsx(Tj, { size: 20 }), t[10] = b) : b = t[10];
  const v = e === "prim";
  let x;
  t[11] !== c ? (x = () => c("prim"), t[11] = c, t[12] = x) : x = t[12];
  let S;
  t[13] !== v || t[14] !== x ? (S = m.jsx(ga, { name: "Primitives", icon: b, isActive: v, onClick: x }), t[13] = v, t[14] = x, t[15] = S) : S = t[15];
  let j;
  t[16] === Symbol.for("react.memo_cache_sentinel") ? (j = m.jsx(Lp, { size: 20 }), t[16] = j) : j = t[16];
  const w = e === "mod";
  let N;
  t[17] !== c ? (N = () => c("mod"), t[17] = c, t[18] = N) : N = t[18];
  let k;
  t[19] !== w || t[20] !== N ? (k = m.jsx(ga, { name: "Modules", icon: j, isActive: w, onClick: N }), t[19] = w, t[20] = N, t[21] = k) : k = t[21];
  let M;
  t[22] !== k || t[23] !== p || t[24] !== S ? (M = m.jsxs(uh, { className: "h-10 overflow-x-auto flex-shrink-0", children: [p, S, k] }), t[22] = k, t[23] = p, t[24] = S, t[25] = M) : M = t[25];
  let C;
  t[26] !== e ? (C = e === "proj" && m.jsx(w5, {}), t[26] = e, t[27] = C) : C = t[27];
  let E;
  t[28] !== e ? (E = e === "prim" && m.jsx(m5, {}), t[28] = e, t[29] = E) : E = t[29];
  let L;
  t[30] !== e ? (L = e === "mod" && m.jsx(f5, {}), t[30] = e, t[31] = L) : L = t[31];
  let A;
  t[32] !== C || t[33] !== E || t[34] !== L ? (A = m.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto overflow-x-hidden", children: [C, E, L] }), t[32] = C, t[33] = E, t[34] = L, t[35] = A) : A = t[35];
  let z;
  return t[36] !== M || t[37] !== A ? (z = m.jsxs("div", { className: "flex flex-row h-full", children: [f, m.jsxs("div", { className: "flex-1 min-w-0 flex flex-col", children: [M, A] })] }), t[36] = M, t[37] = A, t[38] = z) : z = t[38], z;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const _n = (t) => {
  const e = F.c(12), { label: a, children: i, description: o } = t;
  let c;
  e[0] !== a ? (c = m.jsx("label", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: a }), e[0] = a, e[1] = c) : c = e[1];
  let f;
  e[2] !== o ? (f = o && m.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5", children: o }), e[2] = o, e[3] = f) : f = e[3];
  let u;
  e[4] !== c || e[5] !== f ? (u = m.jsxs("div", { className: "w-32 flex-shrink-0", children: [c, f] }), e[4] = c, e[5] = f, e[6] = u) : u = e[6];
  let d;
  e[7] !== i ? (d = m.jsx("div", { className: "flex-1", children: i }), e[7] = i, e[8] = d) : d = e[8];
  let g;
  return e[9] !== u || e[10] !== d ? (g = m.jsxs("div", { className: "flex items-start gap-4 py-2", children: [u, d] }), e[9] = u, e[10] = d, e[11] = g) : g = e[11], g;
}, ql = (t) => {
  const e = F.c(9), { value: a, type: i, readOnly: o, onChange: c, className: f } = t, u = i === void 0 ? "text" : i, d = o === void 0 ? true : o, g = f === void 0 ? "" : f;
  let p;
  e[0] !== c || e[1] !== u ? (p = (x) => c == null ? void 0 : c(u === "number" ? Number(x.target.value) : x.target.value), e[0] = c, e[1] = u, e[2] = p) : p = e[2];
  const b = `px-3 py-1.5 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 ${g}`;
  let v;
  return e[3] !== d || e[4] !== p || e[5] !== b || e[6] !== u || e[7] !== a ? (v = m.jsx("input", { type: u, value: a, onChange: p, className: b, readOnly: d }), e[3] = d, e[4] = p, e[5] = b, e[6] = u, e[7] = a, e[8] = v) : v = e[8], v;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const k5 = (t) => {
  const e = F.c(10), { elem: a } = t;
  let i;
  e[0] !== a.name ? (i = m.jsx("input", { type: "text", value: a.name, className: "flex-1 px-3 py-1.5 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600", readOnly: true }), e[0] = a.name, e[1] = i) : i = e[1];
  let o;
  e[2] !== a.modn || e[3] !== i ? (o = m.jsxs("div", { className: "font-semibold text-gray-800 dark:text-gray-200", children: [a.modn, i] }), e[2] = a.modn, e[3] = i, e[4] = o) : o = e[4];
  let c;
  e[5] !== a.modn ? (c = m.jsx(_n, { label: "Module", description: "Module to instantiate", children: m.jsx(ql, { value: a.modn, readOnly: true }) }), e[5] = a.modn, e[6] = c) : c = e[6];
  let f;
  return e[7] !== o || e[8] !== c ? (f = m.jsxs("div", { className: "flex flex-col gap-y-4 p-4", children: [o, c] }), e[7] = o, e[8] = c, e[9] = f) : f = e[9], f;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const M5 = (t) => {
  const e = F.c(10), { elem: a } = t;
  let i;
  e[0] !== a.name ? (i = m.jsx("input", { type: "text", value: a.name, className: "flex-1 px-3 py-1.5 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600", readOnly: true }), e[0] = a.name, e[1] = i) : i = e[1];
  let o;
  e[2] !== a.type || e[3] !== i ? (o = m.jsxs("div", { className: "font-semibold text-gray-800 dark:text-gray-200", children: [a.type, i] }), e[2] = a.type, e[3] = i, e[4] = o) : o = e[4];
  let c;
  e[5] !== a ? (c = "bit" in a && m.jsx(_n, { label: "Bit Width", description: "Register data width", children: m.jsx(ql, { value: a.bit, type: "number", readOnly: true }) }), e[5] = a, e[6] = c) : c = e[6];
  let f;
  return e[7] !== o || e[8] !== c ? (f = m.jsxs("div", { className: "flex flex-col gap-y-4 p-4", children: [o, c] }), e[7] = o, e[8] = c, e[9] = f) : f = e[9], f;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const A5 = (t) => {
  const e = F.c(5), { elem: a } = t;
  let i;
  e[0] !== a.name ? (i = m.jsx("input", { type: "text", value: a.name, className: "flex-1 px-3 py-1.5 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600", readOnly: true }), e[0] = a.name, e[1] = i) : i = e[1];
  let o;
  return e[2] !== a.type || e[3] !== i ? (o = m.jsx("div", { className: "flex flex-col gap-y-4 p-4", children: m.jsxs("div", { className: "font-semibold text-gray-800 dark:text-gray-200", children: [a.type, i] }) }), e[2] = a.type, e[3] = i, e[4] = o) : o = e[4], o;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const dh = (t) => {
  const e = F.c(57), { inputs: a, outputs: i, editable: o, onAddInput: c, onAddOutput: f, onDeleteInput: u, onDeleteOutput: d, onUpdateInput: g, onUpdateOutput: p } = t;
  let b;
  e[0] !== a ? (b = a === void 0 ? [] : a, e[0] = a, e[1] = b) : b = e[1];
  const v = b;
  let x;
  e[2] !== i ? (x = i === void 0 ? [] : i, e[2] = i, e[3] = x) : x = e[3];
  const S = x, j = o === void 0 ? false : o, w = j ? "grid-cols-[1fr_60px_28px]" : "grid-cols-[1fr_60px]";
  let N;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (N = m.jsx("h4", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Inputs" }), e[4] = N) : N = e[4];
  let k;
  e[5] !== j || e[6] !== c ? (k = j && m.jsx("button", { onClick: c, className: "p-0.5 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded", children: m.jsx(gl, { size: 14 }) }), e[5] = j, e[6] = c, e[7] = k) : k = e[7];
  let M;
  e[8] !== k ? (M = m.jsxs("div", { className: "flex items-center justify-between mb-1", children: [N, k] }), e[8] = k, e[9] = M) : M = e[9];
  const C = `grid ${w} gap-0 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400`;
  let E, L;
  e[10] === Symbol.for("react.memo_cache_sentinel") ? (E = m.jsx("div", { className: "px-2 py-1", children: "Name" }), L = m.jsx("div", { className: "px-2 py-1 text-center", children: "Bits" }), e[10] = E, e[11] = L) : (E = e[10], L = e[11]);
  let A;
  e[12] !== j ? (A = j && m.jsx("div", {}), e[12] = j, e[13] = A) : A = e[13];
  let z;
  e[14] !== A || e[15] !== C ? (z = m.jsxs("div", { className: C, children: [E, L, A] }), e[14] = A, e[15] = C, e[16] = z) : z = e[16];
  let q;
  e[17] !== j || e[18] !== w || e[19] !== v || e[20] !== u || e[21] !== g ? (q = v.length === 0 ? m.jsx("div", { className: "px-2 py-2 text-center text-xs text-gray-500 dark:text-gray-400", children: "No inputs" }) : m.jsx("div", { className: "max-h-48 overflow-y-auto", children: v.map((ce, me) => m.jsx(Jm, { port: ce, type: "input", editable: j, gridCols: w, onDelete: () => u == null ? void 0 : u(me), onUpdate: (de) => g == null ? void 0 : g(me, de) }, me)) }), e[17] = j, e[18] = w, e[19] = v, e[20] = u, e[21] = g, e[22] = q) : q = e[22];
  let B;
  e[23] !== z || e[24] !== q ? (B = m.jsxs("div", { className: "border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden", children: [z, q] }), e[23] = z, e[24] = q, e[25] = B) : B = e[25];
  let J;
  e[26] !== B || e[27] !== M ? (J = m.jsxs("div", { children: [M, B] }), e[26] = B, e[27] = M, e[28] = J) : J = e[28];
  let W;
  e[29] === Symbol.for("react.memo_cache_sentinel") ? (W = m.jsx("h4", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Outputs" }), e[29] = W) : W = e[29];
  let oe;
  e[30] !== j || e[31] !== f ? (oe = j && m.jsx("button", { onClick: f, className: "p-0.5 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/20 rounded", children: m.jsx(gl, { size: 14 }) }), e[30] = j, e[31] = f, e[32] = oe) : oe = e[32];
  let ae;
  e[33] !== oe ? (ae = m.jsxs("div", { className: "flex items-center justify-between mb-1", children: [W, oe] }), e[33] = oe, e[34] = ae) : ae = e[34];
  const K = `grid ${w} gap-0 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400`;
  let R, G;
  e[35] === Symbol.for("react.memo_cache_sentinel") ? (R = m.jsx("div", { className: "px-2 py-1", children: "Name" }), G = m.jsx("div", { className: "px-2 py-1 text-center", children: "Bits" }), e[35] = R, e[36] = G) : (R = e[35], G = e[36]);
  let ne;
  e[37] !== j ? (ne = j && m.jsx("div", {}), e[37] = j, e[38] = ne) : ne = e[38];
  let ue;
  e[39] !== K || e[40] !== ne ? (ue = m.jsxs("div", { className: K, children: [R, G, ne] }), e[39] = K, e[40] = ne, e[41] = ue) : ue = e[41];
  let O;
  e[42] !== j || e[43] !== w || e[44] !== d || e[45] !== p || e[46] !== S ? (O = S.length === 0 ? m.jsx("div", { className: "px-2 py-2 text-center text-xs text-gray-500 dark:text-gray-400", children: "No outputs" }) : m.jsx("div", { className: "max-h-48 overflow-y-auto", children: S.map((ce, me) => m.jsx(Jm, { port: ce, type: "output", editable: j, gridCols: w, onDelete: () => d == null ? void 0 : d(me), onUpdate: (de) => p == null ? void 0 : p(me, de) }, me)) }), e[42] = j, e[43] = w, e[44] = d, e[45] = p, e[46] = S, e[47] = O) : O = e[47];
  let Y;
  e[48] !== ue || e[49] !== O ? (Y = m.jsxs("div", { className: "border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden", children: [ue, O] }), e[48] = ue, e[49] = O, e[50] = Y) : Y = e[50];
  let re;
  e[51] !== ae || e[52] !== Y ? (re = m.jsxs("div", { children: [ae, Y] }), e[51] = ae, e[52] = Y, e[53] = re) : re = e[53];
  let te;
  return e[54] !== J || e[55] !== re ? (te = m.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [J, re] }), e[54] = J, e[55] = re, e[56] = te) : te = e[56], te;
}, Jm = (t) => {
  const e = F.c(22), { port: a, type: i, editable: o, gridCols: c, onDelete: f, onUpdate: u } = t, g = `grid ${c} gap-0 border-b border-gray-100 dark:border-gray-800 ${i === "input" ? "hover:bg-blue-50 dark:hover:bg-blue-900/10" : "hover:bg-green-50 dark:hover:bg-green-900/10"}`;
  let p;
  e[0] !== u || e[1] !== a ? (p = (k) => u == null ? void 0 : u({ ...a, name: k.target.value }), e[0] = u, e[1] = a, e[2] = p) : p = e[2];
  const b = !o;
  let v;
  e[3] !== a.name || e[4] !== p || e[5] !== b ? (v = m.jsx("div", { className: "px-2 py-0.5", children: m.jsx("input", { type: "text", value: a.name, onChange: p, className: "w-full px-1 py-0.5 text-xs bg-transparent border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded", readOnly: b, placeholder: "port_name" }) }), e[3] = a.name, e[4] = p, e[5] = b, e[6] = v) : v = e[6];
  let x;
  e[7] !== u || e[8] !== a ? (x = (k) => u == null ? void 0 : u({ ...a, bit: parseInt(k.target.value) || 1 }), e[7] = u, e[8] = a, e[9] = x) : x = e[9];
  const S = !o;
  let j;
  e[10] !== a.bit || e[11] !== x || e[12] !== S ? (j = m.jsx("div", { className: "px-2 py-0.5", children: m.jsx("input", { type: "number", value: a.bit, onChange: x, className: "w-full px-1 py-0.5 text-xs text-center bg-transparent border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded", readOnly: S, min: "1", max: "64" }) }), e[10] = a.bit, e[11] = x, e[12] = S, e[13] = j) : j = e[13];
  let w;
  e[14] !== o || e[15] !== f ? (w = o && m.jsx("div", { className: "px-0.5 py-0.5 flex items-center justify-center", children: m.jsx("button", { onClick: f, className: "p-0.5 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 rounded", children: m.jsx(ch, { size: 12 }) }) }), e[14] = o, e[15] = f, e[16] = w) : w = e[16];
  let N;
  return e[17] !== g || e[18] !== v || e[19] !== j || e[20] !== w ? (N = m.jsxs("div", { className: g, children: [v, j, w] }), e[17] = g, e[18] = v, e[19] = j, e[20] = w, e[21] = N) : N = e[21], N;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const C5 = (t) => {
  var _a6, _b3;
  const e = F.c(27), { elem: a } = t;
  let i;
  e[0] !== a.name ? (i = m.jsxs("div", { className: "font-semibold text-gray-800 dark:text-gray-200", children: ["Verilog", m.jsx("input", { type: "text", value: a.name, className: "flex-1 px-3 py-1.5 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600", readOnly: true })] }), e[0] = a.name, e[1] = i) : i = e[1];
  let o;
  e[2] !== a.ports ? (o = (_a6 = a.ports) == null ? void 0 : _a6.filter(E5).map(O5), e[2] = a.ports, e[3] = o) : o = e[3];
  let c;
  e[4] !== a.ports ? (c = (_b3 = a.ports) == null ? void 0 : _b3.filter(z5).map(D5), e[4] = a.ports, e[5] = c) : c = e[5];
  let f;
  e[6] !== o || e[7] !== c ? (f = m.jsx(dh, { editable: true, inputs: o, outputs: c }), e[6] = o, e[7] = c, e[8] = f) : f = e[8];
  const u = `module ${a.name} (`;
  let d;
  e[9] !== u ? (d = m.jsx("div", { children: u }), e[9] = u, e[10] = d) : d = e[10];
  let g;
  e[11] !== a.ports ? (g = a.ports.map(R5), e[11] = a.ports, e[12] = g) : g = e[12];
  let p;
  e[13] === Symbol.for("react.memo_cache_sentinel") ? (p = m.jsx("div", { children: ");" }), e[13] = p) : p = e[13];
  let b;
  e[14] !== d || e[15] !== g ? (b = m.jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: [d, g, p] }), e[14] = d, e[15] = g, e[16] = b) : b = e[16];
  let v;
  e[17] !== a.code ? (v = m.jsx(Ip, { value: a.code, language: "verilog", height: "300px" }), e[17] = a.code, e[18] = v) : v = e[18];
  let x;
  e[19] === Symbol.for("react.memo_cache_sentinel") ? (x = m.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "endmodule;" }), e[19] = x) : x = e[19];
  let S;
  e[20] !== v || e[21] !== b ? (S = m.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 space-y-2", children: [b, v, x] }), e[20] = v, e[21] = b, e[22] = S) : S = e[22];
  let j;
  return e[23] !== i || e[24] !== S || e[25] !== f ? (j = m.jsxs("div", { className: "flex flex-col gap-y-4 p-4", children: [i, f, S] }), e[23] = i, e[24] = S, e[25] = f, e[26] = j) : j = e[26], j;
};
function E5(t) {
  return t.direct === "in";
}
function O5(t) {
  return { name: t.name, bit: t.bit };
}
function z5(t) {
  return t.direct === "out";
}
function D5(t) {
  return { name: t.name, bit: t.bit };
}
function R5(t) {
  return m.jsx("div", { children: `${t.direct === "in" ? "input" : "output"} ${t.name} [${t.bit - 1}:0],` }, t.name);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const L5 = (t) => {
  const e = F.c(13), { elem: a } = t;
  let i;
  e[0] !== a.name ? (i = m.jsxs("div", { className: "font-semibold text-gray-800 dark:text-gray-200", children: ["Const", m.jsx("input", { type: "text", value: a.name, className: "flex-1 px-3 py-1.5 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600", readOnly: true })] }), e[0] = a.name, e[1] = i) : i = e[1];
  let o;
  e[2] === Symbol.for("react.memo_cache_sentinel") ? (o = m.jsx("h4", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3", children: "Constant Configuration" }), e[2] = o) : o = e[2];
  let c;
  e[3] !== a.value ? (c = m.jsx(_n, { label: "Value", description: "Constant value (decimal, hex: 0x, binary: 0b)", children: m.jsx(ql, { value: a.value, readOnly: true, className: "font-mono" }) }), e[3] = a.value, e[4] = c) : c = e[4];
  let f;
  e[5] !== a.bit ? (f = m.jsx(_n, { label: "Bit Width", description: "Output bit width", children: m.jsx(ql, { value: a.bit, type: "number", readOnly: true, className: "w-24" }) }), e[5] = a.bit, e[6] = f) : f = e[6];
  let u;
  e[7] !== c || e[8] !== f ? (u = m.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700", children: [o, c, f] }), e[7] = c, e[8] = f, e[9] = u) : u = e[9];
  let d;
  return e[10] !== i || e[11] !== u ? (d = m.jsxs("div", { className: "flex flex-col gap-y-4 p-4", children: [i, u] }), e[10] = i, e[11] = u, e[12] = d) : d = e[12], d;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const U5 = (t) => {
  const e = F.c(23), { elem: a } = t, i = $5;
  let o;
  e[0] !== a.name ? (o = m.jsx("input", { type: "text", value: a.name, className: "flex-1 px-3 py-1.5 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600", readOnly: true }), e[0] = a.name, e[1] = o) : o = e[1];
  let c;
  e[2] !== a.type || e[3] !== o ? (c = m.jsxs("div", { className: "font-semibold text-gray-800 dark:text-gray-200", children: [a.type, o] }), e[2] = a.type, e[3] = o, e[4] = c) : c = e[4];
  let f;
  e[5] !== a.op ? (f = i(a.op), e[5] = a.op, e[6] = f) : f = e[6];
  let u;
  e[7] !== f ? (u = m.jsx("span", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: f }), e[7] = f, e[8] = u) : u = e[8];
  let d;
  e[9] !== a.op ? (d = m.jsxs("span", { className: "text-sm font-mono text-gray-600 dark:text-gray-400", children: ["(", a.op, ")"] }), e[9] = a.op, e[10] = d) : d = e[10];
  let g;
  e[11] !== u || e[12] !== d ? (g = m.jsx(_n, { label: "Operation", children: m.jsxs("div", { className: "flex items-center gap-3", children: [u, d] }) }), e[11] = u, e[12] = d, e[13] = g) : g = e[13];
  let p;
  e[14] !== a.bit ? (p = m.jsx(_n, { label: "Bit Width", description: "Data width for operation", children: m.jsx(ql, { value: a.bit, type: "number", readOnly: true, className: "w-24" }) }), e[14] = a.bit, e[15] = p) : p = e[15];
  let b;
  e[16] !== a ? (b = "inputs" in a && m.jsx(_n, { label: "Input Count", description: "Number of inputs", children: m.jsx(ql, { value: a.inputs, type: "number", readOnly: true, className: "w-24" }) }), e[16] = a, e[17] = b) : b = e[17];
  let v;
  return e[18] !== c || e[19] !== g || e[20] !== p || e[21] !== b ? (v = m.jsxs("div", { className: "flex flex-col gap-y-4 p-4", children: [c, g, p, b] }), e[18] = c, e[19] = g, e[20] = p, e[21] = b, e[22] = v) : v = e[22], v;
};
function $5(t) {
  return { add: "+", sub: "-", mul: "\xD7", div: "\xF7", mod: "%", shl: "<<", shr: ">>", and: "&", or: "|", xor: "^", nand: "~&", nor: "~|", xnor: "~^", not: "~" }[t] || t;
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const H5 = (t) => {
  const e = F.c(21), { elem: a } = t, i = a.type === "Mux";
  let o;
  e[0] !== a.name ? (o = m.jsx("input", { type: "text", value: a.name, className: "flex-1 px-3 py-1.5 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600", readOnly: true }), e[0] = a.name, e[1] = o) : o = e[1];
  let c;
  e[2] !== a.type || e[3] !== o ? (c = m.jsxs("div", { className: "font-semibold text-gray-800 dark:text-gray-200", children: [a.type, o] }), e[2] = a.type, e[3] = o, e[4] = c) : c = e[4];
  const f = `Number of ${i ? "inputs" : "outputs"}`;
  let u;
  e[5] !== a.opts ? (u = m.jsx(ql, { value: a.opts, type: "number", readOnly: true, className: "w-24" }), e[5] = a.opts, e[6] = u) : u = e[6];
  let d;
  e[7] !== f || e[8] !== u ? (d = m.jsx(_n, { label: "Options", description: f, children: u }), e[7] = f, e[8] = u, e[9] = d) : d = e[9];
  let g;
  e[10] !== a.bit ? (g = m.jsx(_n, { label: "Bit Width", description: "Data bus width", children: m.jsx(ql, { value: a.bit, type: "number", readOnly: true, className: "w-24" }) }), e[10] = a.bit, e[11] = g) : g = e[11];
  let p;
  e[12] !== a.opts ? (p = Math.log2(a.opts), e[12] = a.opts, e[13] = p) : p = e[13];
  const b = Math.ceil(p);
  let v;
  e[14] !== b ? (v = m.jsx(_n, { label: "Select Bits", description: "Calculated from options", children: m.jsxs("span", { className: "text-sm font-mono text-gray-600 dark:text-gray-400", children: [b, " bits"] }) }), e[14] = b, e[15] = v) : v = e[15];
  let x;
  return e[16] !== c || e[17] !== d || e[18] !== g || e[19] !== v ? (x = m.jsxs("div", { className: "flex flex-col gap-y-4 p-4", children: [c, d, g, v] }), e[16] = c, e[17] = d, e[18] = g, e[19] = v, e[20] = x) : x = e[20], x;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const q5 = (t) => {
  var _a6, _b3;
  const e = F.c(20), { elem: a } = t, i = a.type === "Pack";
  let o;
  e[0] !== a.bits ? (o = ((_a6 = a.bits) == null ? void 0 : _a6.reduce(V5, 0)) || 0, e[0] = a.bits, e[1] = o) : o = e[1];
  const c = o;
  let f;
  e[2] !== a.name ? (f = m.jsx("input", { type: "text", value: a.name, className: "flex-1 px-3 py-1.5 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600", readOnly: true }), e[2] = a.name, e[3] = f) : f = e[3];
  let u;
  e[4] !== a.type || e[5] !== f ? (u = m.jsxs("div", { className: "font-semibold text-gray-800 dark:text-gray-200", children: [a.type, f] }), e[4] = a.type, e[5] = f, e[6] = u) : u = e[6];
  const d = i ? "Bits to pack together" : "Bits to unpack into";
  let g;
  e[7] !== a.bits ? (g = (_b3 = a.bits) == null ? void 0 : _b3.map(B5), e[7] = a.bits, e[8] = g) : g = e[8];
  let p;
  e[9] !== g ? (p = m.jsx("div", { className: "space-y-2", children: g }), e[9] = g, e[10] = p) : p = e[10];
  let b;
  e[11] !== d || e[12] !== p ? (b = m.jsx(_n, { label: "Bit Fields", description: d, children: p }), e[11] = d, e[12] = p, e[13] = b) : b = e[13];
  let v;
  e[14] !== c ? (v = m.jsx(_n, { label: "Total Bits", children: m.jsxs("span", { className: "text-sm font-mono text-gray-600 dark:text-gray-400", children: [c, " bits"] }) }), e[14] = c, e[15] = v) : v = e[15];
  let x;
  return e[16] !== u || e[17] !== b || e[18] !== v ? (x = m.jsxs("div", { className: "flex flex-col gap-y-4 p-4", children: [u, b, v] }), e[16] = u, e[17] = b, e[18] = v, e[19] = x) : x = e[19], x;
};
function V5(t, e) {
  return t + e;
}
function B5(t, e) {
  return m.jsxs("div", { className: "flex items-center gap-2", children: [m.jsxs("span", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: ["Field ", e + 1, ":"] }), m.jsxs("span", { className: "px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm font-mono", children: [t, " bit", t > 1 && "s"] })] }, e);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Y5 = (t) => {
  const e = F.c(7), { elem: a } = t;
  let i;
  e[0] !== a.name ? (i = m.jsxs("div", { className: "font-semibold text-gray-800 dark:text-gray-200", children: ["FlipFlop", m.jsx("input", { type: "text", value: a.name, className: "flex-1 px-3 py-1.5 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600", readOnly: true })] }), e[0] = a.name, e[1] = i) : i = e[1];
  let o;
  e[2] !== a.bit ? (o = m.jsx(_n, { label: "Bit Width", description: "Register width", children: m.jsx(ql, { value: a.bit, type: "number", readOnly: true, className: "w-24" }) }), e[2] = a.bit, e[3] = o) : o = e[3];
  let c;
  return e[4] !== i || e[5] !== o ? (c = m.jsxs("div", { className: "flex flex-col gap-y-4 p-4", children: [i, o] }), e[4] = i, e[5] = o, e[6] = c) : c = e[6], c;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const G5 = (t) => {
  const e = F.c(14), { elem: a } = t;
  let i;
  e[0] !== a.name ? (i = m.jsxs("div", { className: "font-semibold text-gray-800 dark:text-gray-200", children: ["FlipFlop", m.jsx("input", { type: "text", value: a.name, className: "flex-1 px-3 py-1.5 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600", readOnly: true })] }), e[0] = a.name, e[1] = i) : i = e[1];
  let o;
  e[2] !== a.inputs || e[3] !== a.outputs ? (o = m.jsx(dh, { inputs: a.inputs, outputs: a.outputs }), e[2] = a.inputs, e[3] = a.outputs, e[4] = o) : o = e[4];
  let c;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsx("h4", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3", children: "Match Arms" }), e[5] = c) : c = e[5];
  let f;
  e[6] !== a.arms ? (f = a.arms.map(F5), e[6] = a.arms, e[7] = f) : f = e[7];
  let u;
  e[8] !== f ? (u = m.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700", children: [c, m.jsx("div", { className: "space-y-3", children: f })] }), e[8] = f, e[9] = u) : u = e[9];
  let d;
  return e[10] !== i || e[11] !== o || e[12] !== u ? (d = m.jsxs("div", { className: "flex flex-col gap-y-4 p-4", children: [i, o, u] }), e[10] = i, e[11] = o, e[12] = u, e[13] = d) : d = e[13], d;
};
function Q5(t, e) {
  return m.jsxs("div", { className: "text-xs font-mono bg-white dark:bg-gray-800 p-1 rounded", children: [t.input, ": ", JSON.stringify(t.cond)] }, e);
}
function X5(t, e) {
  return m.jsx("div", { className: "text-xs font-mono bg-white dark:bg-gray-800 p-1 rounded", children: t.expr }, e);
}
function F5(t, e) {
  return m.jsxs("div", { className: "p-3 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700", children: [m.jsxs("div", { className: "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2", children: ["Arm ", e + 1] }), t.cond && t.cond.length > 0 && m.jsxs("div", { className: "mb-2", children: [m.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Conditions:" }), m.jsx("div", { className: "mt-1 space-y-1", children: t.cond.map(Q5) })] }), t.outputs && t.outputs.length > 0 && m.jsxs("div", { children: [m.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Outputs:" }), m.jsx("div", { className: "mt-1 space-y-1", children: t.outputs.map(X5) })] })] }, e);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Z5 = (t) => {
  const e = F.c(17), { elem: a } = t;
  let i;
  e[0] !== a.name ? (i = m.jsxs("div", { className: "font-semibold text-gray-800 dark:text-gray-200", children: ["StateMachine", m.jsx("input", { type: "text", value: a.name, className: "flex-1 px-3 py-1.5 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600", readOnly: true })] }), e[0] = a.name, e[1] = i) : i = e[1];
  let o;
  e[2] !== a.inputs || e[3] !== a.outputs ? (o = m.jsx(dh, { inputs: a.inputs, outputs: a.outputs }), e[2] = a.inputs, e[3] = a.outputs, e[4] = o) : o = e[4];
  let c;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsx("h4", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3", children: "States" }), e[5] = c) : c = e[5];
  let f;
  e[6] !== a.states ? (f = a.states.map(P5), e[6] = a.states, e[7] = f) : f = e[7];
  let u;
  e[8] !== f ? (u = m.jsxs("div", { children: [c, m.jsx("div", { className: "grid grid-cols-2 gap-3", children: f })] }), e[8] = f, e[9] = u) : u = e[9];
  let d;
  e[10] !== a.transitions ? (d = a.transitions && a.transitions.length > 0 && m.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700", children: [m.jsx("h4", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3", children: "Transitions" }), m.jsx("div", { className: "space-y-2 max-h-64 overflow-y-auto", children: a.transitions.map(W5) })] }), e[10] = a.transitions, e[11] = d) : d = e[11];
  let g;
  return e[12] !== i || e[13] !== o || e[14] !== u || e[15] !== d ? (g = m.jsxs("div", { className: "flex flex-col gap-y-4 p-4", children: [i, o, u, d] }), e[12] = i, e[13] = o, e[14] = u, e[15] = d, e[16] = g) : g = e[16], g;
};
function K5(t, e) {
  return m.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [t.name, ": ", t.bit, " bit", t.bit > 1 && "s"] }, e);
}
function I5(t, e) {
  return m.jsxs("div", { className: "text-xs font-mono text-gray-600 dark:text-gray-400", children: [t.name, " = ", t.expr] }, e);
}
function P5(t, e) {
  return m.jsxs("div", { className: "p-3 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700", children: [m.jsx("div", { className: "font-medium text-sm text-gray-800 dark:text-gray-200", children: t.name }), t.fields && t.fields.length > 0 && m.jsxs("div", { className: "mt-2", children: [m.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Fields:" }), m.jsx("div", { className: "mt-1 space-y-0.5", children: t.fields.map(K5) })] }), t.outputs && t.outputs.length > 0 && m.jsxs("div", { className: "mt-2", children: [m.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Outputs:" }), m.jsx("div", { className: "mt-1 space-y-0.5", children: t.outputs.map(I5) })] })] }, e);
}
function W5(t, e) {
  var _a6;
  return m.jsxs("div", { className: "flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-900 rounded", children: [m.jsx("span", { className: "font-mono text-sm text-blue-600 dark:text-blue-400", children: t.from }), m.jsx("span", { className: "text-gray-400", children: "\u2192" }), m.jsx("span", { className: "font-mono text-sm text-green-600 dark:text-green-400", children: (_a6 = t.to) == null ? void 0 : _a6.state }), t.conditions && t.conditions.length > 0 && m.jsxs("div", { className: "ml-auto text-xs text-gray-500 dark:text-gray-400", children: [t.conditions.length, " condition", t.conditions.length > 1 && "s"] })] }, e);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const J5 = (t) => {
  const e = F.c(13), { tab: a } = t, i = Ne(it), [o, c] = $.useState(null);
  let f;
  e[0] !== (i == null ? void 0 : i.elems) || e[1] !== a.id ? (f = () => {
    var _a6;
    const b = (_a6 = i == null ? void 0 : i.elems) == null ? void 0 : _a6.find((v) => v.name === a.id);
    c(b || null);
  }, e[0] = i == null ? void 0 : i.elems, e[1] = a.id, e[2] = f) : f = e[2];
  let u;
  if (e[3] !== i || e[4] !== a.id ? (u = [a.id, i], e[3] = i, e[4] = a.id, e[5] = u) : u = e[5], $.useEffect(f, u), !o) {
    let b;
    e[6] === Symbol.for("react.memo_cache_sentinel") ? (b = m.jsx("p", { className: "text-lg mb-2", children: "Element not found" }), e[6] = b) : b = e[6];
    let v;
    return e[7] !== a.id ? (v = m.jsx("div", { className: "h-full flex items-center justify-center text-gray-500 dark:text-gray-400", children: m.jsxs("div", { className: "text-center", children: [b, m.jsx("p", { className: "text-sm", children: a.id })] }) }), e[7] = a.id, e[8] = v) : v = e[8], v;
  }
  let d;
  e[9] !== o ? (d = () => {
    switch (o.type) {
      case "Inst":
        return m.jsx(k5, { elem: o });
      case "RegWrite":
      case "RegRead":
      case "RegTrig":
        return m.jsx(M5, { elem: o });
      case "PortIn":
      case "PortOut":
      case "PortInOut":
        return m.jsx(A5, { elem: o });
      case "Verilog":
        return m.jsx(C5, { elem: o });
      case "Const":
        return m.jsx(L5, { elem: o });
      case "ArithOp":
      case "BitOp":
      case "ReduceOp":
        return m.jsx(U5, { elem: o });
      case "Mux":
      case "Demux":
        return m.jsx(H5, { elem: o });
      case "Pack":
      case "Unpack":
        return m.jsx(q5, { elem: o });
      case "FlipFlop":
        return m.jsx(Y5, { elem: o });
      case "CombCircuit":
        return m.jsx(G5, { elem: o });
      case "StateMachine":
        return m.jsx(Z5, { elem: o });
      default:
        return m.jsx("div", { className: "p-4", children: m.jsxs("p", { className: "text-gray-500 dark:text-gray-400", children: ["No editor available for element type: ", o.type] }) });
    }
  }, e[9] = o, e[10] = d) : d = e[10];
  const g = d;
  let p;
  return e[11] !== g ? (p = m.jsx("div", { className: "h-full overflow-auto bg-gray-50 dark:bg-gray-900", children: g() }), e[11] = g, e[12] = p) : p = e[12], p;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const e8 = () => {
  const t = F.c(20), [e, a] = Ee(Bo), [i, o] = Ee(Yo), c = e[i] ?? null;
  let f;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = Q("h-full flex flex-col bg-gray-light dark:bg-gray-dark"), t[0] = f) : f = t[0];
  let u;
  if (t[1] !== i || t[2] !== o || t[3] !== a || t[4] !== e) {
    let x;
    t[6] !== i || t[7] !== o || t[8] !== a ? (x = (S, j) => m.jsx(ga, { name: S.name, isActive: j === i, onClick: () => o(j), onClose: () => {
      a((w) => w.filter((N, k) => k !== j)), o((w) => w >= j ? Math.max(0, w - 1) : w);
    } }, j), t[6] = i, t[7] = o, t[8] = a, t[9] = x) : x = t[9], u = e.map(x), t[1] = i, t[2] = o, t[3] = a, t[4] = e, t[5] = u;
  } else u = t[5];
  let d;
  t[10] !== u ? (d = m.jsx(uh, { className: "h-10", children: u }), t[10] = u, t[11] = d) : d = t[11];
  let g;
  t[12] === Symbol.for("react.memo_cache_sentinel") ? (g = Q("flex-1 overflow-hidden"), t[12] = g) : g = t[12];
  let p;
  t[13] !== c ? (p = c && c.type === "elem" && m.jsx(J5, { tab: c }), t[13] = c, t[14] = p) : p = t[14];
  let b;
  t[15] !== p ? (b = m.jsx("div", { className: g, children: p }), t[15] = p, t[16] = b) : b = t[16];
  let v;
  return t[17] !== d || t[18] !== b ? (v = m.jsxs("div", { className: f, children: [d, b] }), t[17] = d, t[18] = b, t[19] = v) : v = t[19], v;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const t8 = () => {
  const t = F.c(9), { run: e, stop: a, tasks: i } = OS();
  let o;
  if (t[0] !== e || t[1] !== a || t[2] !== i) {
    let f;
    t[4] !== e || t[5] !== a ? (f = (u, d) => m.jsx(n8, { task: u, run: () => e(d), stop: () => a(d) }, d), t[4] = e, t[5] = a, t[6] = f) : f = t[6], o = i.map(f), t[0] = e, t[1] = a, t[2] = i, t[3] = o;
  } else o = t[3];
  let c;
  return t[7] !== o ? (c = m.jsx("div", { className: "flex flex-col h-full w-full p-4 bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 gap-6", children: o }), t[7] = o, t[8] = c) : c = t[8], c;
}, n8 = (t) => {
  const e = F.c(21), { task: a, run: i, stop: o } = t, [c, f] = $.useState(false);
  let u;
  e[0] !== i || e[1] !== o || e[2] !== a.state ? (u = m.jsx(l8, { state: a.state, onRun: i, onStop: o }), e[0] = i, e[1] = o, e[2] = a.state, e[3] = u) : u = e[3];
  let d;
  e[4] !== a.name ? (d = m.jsx("span", { className: "font-medium", children: a.name }), e[4] = a.name, e[5] = d) : d = e[5];
  let g;
  e[6] !== a.state ? (g = a.state === "running" && m.jsx(Up, { size: 14, className: "animate-spin text-blue-500" }), e[6] = a.state, e[7] = g) : g = e[7];
  let p;
  e[8] !== u || e[9] !== d || e[10] !== g ? (p = m.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [u, d, g] }), e[8] = u, e[9] = d, e[10] = g, e[11] = p) : p = e[11];
  let b;
  e[12] !== a.cmd ? (b = m.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3 ml-11 font-mono", children: a.cmd }), e[12] = a.cmd, e[13] = b) : b = e[13];
  let v;
  e[14] !== c || e[15] !== a.logs ? (v = a.logs && a.logs.length > 0 && m.jsxs("div", { className: "ml-11", children: [m.jsxs("button", { className: "flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors cursor-pointer bg-transparent border-none p-0", onClick: () => f(a8), children: [c ? m.jsx(ih, { size: 14 }) : m.jsx(Xo, { size: 14 }), "\u30ED\u30B0 (", a.logs.length, ")"] }), c && m.jsx("div", { className: "mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono", children: a.logs.map(s8) })] }), e[14] = c, e[15] = a.logs, e[16] = v) : v = e[16];
  let x;
  return e[17] !== p || e[18] !== b || e[19] !== v ? (x = m.jsxs("div", { className: "border border-gray-300 dark:border-gray-800 rounded-lg p-4 bg-white dark:bg-gray-900", children: [p, b, v] }), e[17] = p, e[18] = b, e[19] = v, e[20] = x) : x = e[20], x;
}, l8 = (t) => {
  const e = F.c(9), { state: a, onRun: i, onStop: o } = t;
  switch (a) {
    case "idle": {
      let c;
      e[0] === Symbol.for("react.memo_cache_sentinel") ? (c = Q("flex items-center justify-center w-8 h-8 rounded-full", "bg-blue-600 hover:bg-blue-700 text-white", "cursor-pointer border-none transition-colors"), e[0] = c) : c = e[0];
      let f;
      e[1] === Symbol.for("react.memo_cache_sentinel") ? (f = m.jsx(oh, { size: 14, fill: "currentColor" }), e[1] = f) : f = e[1];
      let u;
      return e[2] !== i ? (u = m.jsx("button", { className: c, onClick: i, children: f }), e[2] = i, e[3] = u) : u = e[3], u;
    }
    case "running": {
      let c;
      e[4] === Symbol.for("react.memo_cache_sentinel") ? (c = Q("flex items-center justify-center w-8 h-8 rounded-full", "bg-red-600 hover:bg-red-700 text-white", "cursor-pointer border-none transition-colors"), e[4] = c) : c = e[4];
      let f;
      e[5] === Symbol.for("react.memo_cache_sentinel") ? (f = m.jsx(Hp, { size: 14, fill: "currentColor" }), e[5] = f) : f = e[5];
      let u;
      return e[6] !== o ? (u = m.jsx("button", { className: c, onClick: o, children: f }), e[6] = o, e[7] = u) : u = e[7], u;
    }
    case "completed": {
      let c;
      return e[8] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsx("div", { className: Q("flex items-center justify-center w-8 h-8 rounded-full", "bg-green-600 text-white"), children: m.jsx(lj, { size: 16 }) }), e[8] = c) : c = e[8], c;
    }
    default:
      return null;
  }
};
function a8(t) {
  return !t;
}
function s8(t, e) {
  return m.jsx("div", { className: "text-gray-700 dark:text-gray-300", children: t }, e);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const i8 = $.memo((t) => {
  const e = F.c(25), { className: a, duration: i, unitPixel: o, snapInterval: c, onAppendTime: f, onDeleteTime: u } = t;
  let d;
  d = r8;
  const g = d, p = i / c * o;
  let b, v;
  if (e[0] !== i || e[1] !== o || e[2] !== c) {
    v = [];
    for (let z = 0; z <= 100; z++) {
      const q = i * z / 100, B = q / c * o;
      if (z % 10 === 0) {
        const J = g(q);
        v.push(m.jsx(vf, { position: B, type: "major", label: J }, z));
      } else z % 5 === 0 ? v.push(m.jsx(vf, { position: B, type: "sub" }, z)) : v.push(m.jsx(vf, { position: B, type: "minor" }, z));
    }
    e[0] = i, e[1] = o, e[2] = c, e[3] = v;
  } else v = e[3];
  b = v;
  const x = b;
  let S;
  e[4] !== a ? (S = Q(a, "relative h-full border-t border-gray-300 dark:border-gray-600"), e[4] = a, e[5] = S) : S = e[5];
  const j = p + 60;
  let w;
  e[6] !== j ? (w = { width: j }, e[6] = j, e[7] = w) : w = e[7];
  let N;
  e[8] !== p ? (N = { left: p }, e[8] = p, e[9] = N) : N = e[9];
  let k;
  e[10] === Symbol.for("react.memo_cache_sentinel") ? (k = m.jsx(gl, { size: 14 }), e[10] = k) : k = e[10];
  let M;
  e[11] !== f ? (M = m.jsx("button", { onClick: f, className: "p-1 bg-green-500 hover:bg-green-600 text-white rounded-sm transition-colors cursor-pointer", children: k }), e[11] = f, e[12] = M) : M = e[12];
  let C;
  e[13] === Symbol.for("react.memo_cache_sentinel") ? (C = m.jsx($j, { size: 14 }), e[13] = C) : C = e[13];
  let E;
  e[14] !== u ? (E = m.jsx("button", { onClick: u, className: "p-1 bg-red-500 hover:bg-red-600 text-white rounded-sm transition-colors cursor-pointer", children: C }), e[14] = u, e[15] = E) : E = e[15];
  let L;
  e[16] !== E || e[17] !== N || e[18] !== M ? (L = m.jsxs("div", { className: "absolute right-0 top-0 h-full flex flex-col justify-center gap-1", style: N, children: [M, E] }), e[16] = E, e[17] = N, e[18] = M, e[19] = L) : L = e[19];
  let A;
  return e[20] !== L || e[21] !== S || e[22] !== w || e[23] !== x ? (A = m.jsxs("div", { className: S, style: w, children: [x, L] }), e[20] = L, e[21] = S, e[22] = w, e[23] = x, e[24] = A) : A = e[24], A;
}), vf = $.memo((t) => {
  const e = F.c(18), { position: a, type: i, label: o } = t;
  if (i === "major") {
    const p = o8;
    let b;
    e[0] !== o ? (b = o ? p(o) : {}, e[0] = o, e[1] = b) : b = e[1];
    const v = b;
    let x;
    e[2] !== a ? (x = { left: a }, e[2] = a, e[3] = x) : x = e[3];
    let S;
    e[4] === Symbol.for("react.memo_cache_sentinel") ? (S = m.jsx("div", { className: "w-px h-full bg-gray-600 dark:bg-gray-400" }), e[4] = S) : S = e[4];
    let j;
    e[5] !== o || e[6] !== v ? (j = o && m.jsxs("div", { className: "absolute top-0 left-1 flex flex-col text-xs", children: [v.sec && m.jsx("span", { className: "text-gray-700 dark:text-gray-300 font-medium leading-tight", children: v.sec }), v.msec && m.jsx("span", { className: "text-gray-600 dark:text-gray-400 leading-tight", children: v.msec }), v.usec && m.jsx("span", { className: "text-gray-500 dark:text-gray-500 text-[10px] leading-tight", children: v.usec })] }), e[5] = o, e[6] = v, e[7] = j) : j = e[7];
    let w;
    return e[8] !== x || e[9] !== j ? (w = m.jsxs("div", { className: "absolute top-0 bottom-0", style: x, children: [S, j] }), e[8] = x, e[9] = j, e[10] = w) : w = e[10], w;
  }
  const c = () => {
    switch (i) {
      case "sub":
        return "h-2 bg-gray-500 dark:bg-gray-500";
      case "minor":
        return "h-1 bg-gray-400 dark:bg-gray-600";
      default:
        return "";
    }
  };
  let f;
  e[11] !== a ? (f = { left: a }, e[11] = a, e[12] = f) : f = e[12];
  const u = `w-px ${c()}`;
  let d;
  e[13] !== u ? (d = m.jsx("div", { className: u }), e[13] = u, e[14] = d) : d = e[14];
  let g;
  return e[15] !== f || e[16] !== d ? (g = m.jsx("div", { className: "absolute bottom-0", style: f, children: d }), e[15] = f, e[16] = d, e[17] = g) : g = e[17], g;
});
function r8(t) {
  const e = t / 1e6;
  return e >= 1e3 ? `${(e / 1e3).toFixed(1)}s` : `${e.toFixed(0)}ms`;
}
function o8(t) {
  const e = t.match(/^(\d+(?:\.\d+)?)(s|ms)$/);
  if (!e) return {};
  const [, a, i] = e, o = parseFloat(a);
  if (i === "s") {
    const c = o * 1e3, f = Math.floor(o), u = Math.floor(c % 1e3), d = Math.floor(c * 1e3 % 1e3);
    return { sec: f > 0 ? `${f}s` : void 0, msec: u > 0 ? `${u}ms` : void 0, usec: d > 0 ? `${d}\u03BCs` : void 0 };
  } else {
    const c = Math.floor(o / 1e3), f = Math.floor(o % 1e3), u = Math.floor(o * 1e3 % 1e3);
    return { sec: c > 0 ? `${c}s` : void 0, msec: f > 0 || c === 0 ? `${f}ms` : void 0, usec: u > 0 ? `${u}\u03BCs` : void 0 };
  }
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const c8 = $.memo((t) => {
  const e = F.c(7), { name: a, state: i } = t;
  let o;
  e[0] !== a ? (o = m.jsx("div", { className: "flex items-center gap-2 flex-1 min-w-0 cursor-pointer", children: m.jsx("div", { className: "flex flex-col gap-1", children: m.jsx("span", { className: "text-sm font-medium truncate", children: a }) }) }), e[0] = a, e[1] = o) : o = e[1];
  let c;
  e[2] !== i ? (c = m.jsx("div", { className: "flex-shrink-0", children: m.jsx(u8, { state: i }) }), e[2] = i, e[3] = c) : c = e[3];
  let f;
  return e[4] !== o || e[5] !== c ? (f = m.jsx("div", { className: "flex items-center px-3 py-1 h-full", children: m.jsxs("div", { className: "flex items-center gap-3 flex-1", children: [o, c] }) }), e[4] = o, e[5] = c, e[6] = f) : f = e[6], f;
}), u8 = $.memo((t) => {
  const e = F.c(5), { state: a } = t, i = a ? "bg-green-400" : "bg-gray-300 dark:bg-gray-600";
  let o;
  e[0] !== i ? (o = Q("w-6 h-6 rounded-full flex flex-col items-center justify-center text-xs", i), e[0] = i, e[1] = o) : o = e[1];
  const c = a ? "H" : "L";
  let f;
  return e[2] !== o || e[3] !== c ? (f = m.jsx("div", { className: "w-6 h-10 flex items-center justify-center", children: m.jsx("div", { className: o, children: c }) }), e[2] = o, e[3] = c, e[4] = f) : f = e[4], f;
});
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const sy = (t, e) => {
  let a = 0, i = t.length;
  for (; a < i; ) {
    const o = Math.floor((a + i) / 2);
    t[o][0] < e ? a = o + 1 : i = o;
  }
  return a;
}, xf = (t, e, a) => {
  const i = [...t], o = sy(i, e);
  return o < i.length && i[o][0] === e ? i[o] = [e, a] : i.splice(o, 0, [e, a]), i;
}, eg = (t, e) => {
  const a = [...t], i = sy(a, e);
  return i < a.length && a[i][0] === e && a.splice(i, 1), a;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const [f8, Vt, hn, iy] = [0, 10, 40, 50], h8 = $.memo((t) => {
  const e = F.c(93), { wave: a, duration: i, px: o, dt: c, time: f, minSnapUnit: u, onUpdate: d } = t, g = d !== void 0;
  let p;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (p = { state: "none" }, e[0] = p) : p = e[0];
  const [b, v] = $.useState(p);
  let x;
  e[1] !== c || e[2] !== o ? (x = (ge) => ge / c * o, e[1] = c, e[2] = o, e[3] = x) : x = e[3];
  const S = x;
  let j;
  e[4] !== c || e[5] !== o ? (j = (ge) => ge / o * c, e[4] = c, e[5] = o, e[6] = j) : j = e[6];
  const w = j;
  let N;
  e[7] !== u ? (N = (ge) => Math.round(ge / u) * u, e[7] = u, e[8] = N) : N = e[8];
  const k = N, M = $.useRef(null);
  let C;
  e[9] !== b.state || e[10] !== g || e[11] !== u || e[12] !== d || e[13] !== w || e[14] !== k || e[15] !== a ? (C = (ge) => {
    if (!g || b.state === "dragging" || ge.target.closest("g[data-changeline]")) return;
    const Oe = M.current;
    if (!Oe) return;
    const Ve = Oe.getBoundingClientRect(), Je = ge.clientX - Ve.left, tt = w(Je), ct = ge.clientY - Ve.top < Ve.height / 2 ? 1 : 0, At = k(tt), wt = At + u, Yt = a.some((gt) => {
      const [Pt] = gt;
      return Math.abs(Pt - At) < u / 100;
    }), Nn = a.some((gt) => {
      const [Pt] = gt;
      return Math.abs(Pt - wt) < u / 100;
    });
    let Rt = [...a];
    Yt || (Rt = xf(Rt, At, ct)), Nn || (Rt = xf(Rt, wt, ct === 1 ? 0 : 1)), d(Rt);
  }, e[9] = b.state, e[10] = g, e[11] = u, e[12] = d, e[13] = w, e[14] = k, e[15] = a, e[16] = C) : C = e[16];
  const E = C;
  let L;
  e[17] !== b || e[18] !== g || e[19] !== w || e[20] !== k ? (L = (ge) => {
    if (b.state !== "dragging" || !g) return;
    const He = M.current;
    if (!He) return;
    const Oe = He.getBoundingClientRect(), Ve = ge.clientX - Oe.left, Je = k(w(Ve)), tt = Math.max(b.minTime, Math.min(b.maxTime, Je));
    tt !== b.currentTime && v({ ...b, currentTime: tt });
  }, e[17] = b, e[18] = g, e[19] = w, e[20] = k, e[21] = L) : L = e[21];
  const A = L;
  let z;
  e[22] !== b.currentTime || e[23] !== b.originalTime || e[24] !== b.state || e[25] !== b.value || e[26] !== g || e[27] !== d || e[28] !== a ? (z = () => {
    if (b.state === "dragging") {
      if (g && d) {
        let ge = eg(a, b.originalTime);
        ge = xf(ge, b.currentTime, b.value), d(ge);
      }
      v({ state: "none" });
    }
  }, e[22] = b.currentTime, e[23] = b.originalTime, e[24] = b.state, e[25] = b.value, e[26] = g, e[27] = d, e[28] = a, e[29] = z) : z = e[29];
  const q = z;
  let B;
  e: {
    let ge;
    if (e[30] !== c || e[31] !== i || e[32] !== o || e[33] !== S || e[34] !== a) {
      ge = [];
      const He = i / c * o;
      if (a.length === 0) {
        ge.push({ value: 0, start: 0, end: He }), B = ge;
        break e;
      }
      let Oe;
      Oe = 0;
      let Ve;
      Ve = 0, a.forEach((Je) => {
        const [tt, Qe] = Je, ct = S(tt);
        ct > Ve && ge.push({ value: Oe, start: Ve, end: ct }), Ve = ct, Oe = Qe;
      }), Ve < He && ge.push({ value: Oe, start: Ve, end: He }), e[30] = c, e[31] = i, e[32] = o, e[33] = S, e[34] = a, e[35] = ge, e[36] = B;
    } else ge = e[35], B = e[36];
    B = ge;
  }
  const J = B, W = g && "hover:bg-gray-900 dark:hover:bg-gray-900";
  let oe;
  e[37] !== W ? (oe = Q("relative h-12 dark:border-gray-700 bg-black", W), e[37] = W, e[38] = oe) : oe = e[38];
  const ae = i / c * o;
  let K;
  e[39] !== ae ? (K = { width: ae }, e[39] = ae, e[40] = K) : K = e[40];
  const R = b.state === "dragging" ? "ew-resize" : g ? "crosshair" : "default";
  let G;
  e[41] !== R ? (G = { cursor: R }, e[41] = R, e[42] = G) : G = e[42];
  const ne = i / c * o;
  let ue;
  e[43] !== c || e[44] !== i || e[45] !== o || e[46] !== ne ? (ue = m.jsx(y8, { width: ne, height: iy, gridPixel: o, timeGrid: c, duration: i }), e[43] = c, e[44] = i, e[45] = o, e[46] = ne, e[47] = ue) : ue = e[47];
  const O = i / c * o;
  let Y;
  e[48] !== O ? (Y = m.jsx("line", { x1: "0", y1: Vt, x2: O, y2: Vt, stroke: "currentColor", strokeWidth: "1", opacity: "0.3", strokeDasharray: "4 2" }), e[48] = O, e[49] = Y) : Y = e[49];
  const re = i / c * o;
  let te;
  e[50] !== re ? (te = m.jsx("line", { x1: "0", y1: hn, x2: re, y2: hn, stroke: "currentColor", strokeWidth: "1", opacity: "0.3", strokeDasharray: "4 2" }), e[50] = re, e[51] = te) : te = e[51];
  let ce;
  e[52] !== Y || e[53] !== te ? (ce = m.jsxs("g", { pointerEvents: "none", children: [Y, te] }), e[52] = Y, e[53] = te, e[54] = ce) : ce = e[54];
  let me;
  e[55] !== J ? (me = m.jsx("g", { pointerEvents: "none", children: J.map(b8) }), e[55] = J, e[56] = me) : me = e[56];
  let de;
  e[57] !== c || e[58] !== i || e[59] !== b.currentTime || e[60] !== b.originalTime || e[61] !== b.state || e[62] !== g || e[63] !== u || e[64] !== d || e[65] !== o || e[66] !== S || e[67] !== a ? (de = a.map((ge, He) => {
    const [Oe, Ve] = ge, Je = b.state === "dragging" && b.originalTime === Oe ? b.currentTime : Oe;
    return m.jsx(m8, { x: S(Je), isDragging: b.state === "dragging" && b.originalTime === Oe, onMouseDown: (tt) => {
      if (!g) return;
      tt.stopPropagation();
      const Qe = [...a].sort(v8), ct = Qe.findIndex((Yt) => {
        const [Nn] = Yt;
        return Nn === Oe;
      }), At = ct > 0 ? Qe[ct - 1][0] + u : 0, wt = ct < Qe.length - 1 ? Qe[ct + 1][0] - u : i / c * o * c;
      v({ state: "dragging", originalTime: Oe, currentTime: Oe, value: Ve, minTime: At, maxTime: wt });
    }, onDoubleClick: () => {
      if (g && d) {
        const tt = eg(a, Oe);
        d(tt);
      }
    } }, `line-${He}`);
  }), e[57] = c, e[58] = i, e[59] = b.currentTime, e[60] = b.originalTime, e[61] = b.state, e[62] = g, e[63] = u, e[64] = d, e[65] = o, e[66] = S, e[67] = a, e[68] = de) : de = e[68];
  let Ae;
  e[69] !== b.currentTime || e[70] !== b.maxTime || e[71] !== b.minTime || e[72] !== b.state || e[73] !== S ? (Ae = b.state === "dragging" && m.jsxs("g", { pointerEvents: "none", children: [m.jsx("rect", { x: S(b.minTime), y: Vt - 5, width: S(b.maxTime) - S(b.minTime), height: hn - Vt + 10, fill: "green", opacity: "0.05" }), m.jsx("line", { x1: S(b.minTime), y1: Vt - 5, x2: S(b.minTime), y2: hn + 5, className: "stroke-red-400", strokeWidth: "1", strokeDasharray: "4 2", opacity: "0.5" }), m.jsx("line", { x1: S(b.maxTime), y1: Vt - 5, x2: S(b.maxTime), y2: hn + 5, className: "stroke-red-400", strokeWidth: "1", strokeDasharray: "4 2", opacity: "0.5" }), m.jsx("line", { x1: S(b.currentTime), y1: Vt, x2: S(b.currentTime), y2: hn, className: "stroke-green-300 stroke-2", strokeDasharray: "2 2", opacity: "0.8" })] }), e[69] = b.currentTime, e[70] = b.maxTime, e[71] = b.minTime, e[72] = b.state, e[73] = S, e[74] = Ae) : Ae = e[74];
  let he;
  e[75] !== f || e[76] !== S ? (he = f && m.jsx("g", { pointerEvents: "none", children: m.jsx(d8, { x: S(f) }) }), e[75] = f, e[76] = S, e[77] = he) : he = e[77];
  let pe;
  e[78] !== E || e[79] !== A || e[80] !== q || e[81] !== G || e[82] !== ue || e[83] !== ce || e[84] !== me || e[85] !== de || e[86] !== Ae || e[87] !== he ? (pe = m.jsxs("svg", { ref: M, className: "absolute inset-0 w-full h-full", onClick: E, onMouseMove: A, onMouseUp: q, style: G, children: [ue, ce, me, de, Ae, he] }), e[78] = E, e[79] = A, e[80] = q, e[81] = G, e[82] = ue, e[83] = ce, e[84] = me, e[85] = de, e[86] = Ae, e[87] = he, e[88] = pe) : pe = e[88];
  let xe;
  return e[89] !== oe || e[90] !== K || e[91] !== pe ? (xe = m.jsx("div", { className: oe, style: K, children: pe }), e[89] = oe, e[90] = K, e[91] = pe, e[92] = xe) : xe = e[92], xe;
}), d8 = $.memo((t) => {
  const e = F.c(2), { x: a } = t;
  let i;
  return e[0] !== a ? (i = m.jsx("line", { x1: a, y1: f8, x2: a, y2: iy, className: "stroke-yellow-500 stroke-2" }), e[0] = a, e[1] = i) : i = e[1], i;
}), m8 = $.memo((t) => {
  const e = F.c(19), { x: a, isDragging: i, onMouseDown: o, onDoubleClick: c } = t, f = i === void 0 ? false : i, [u, d] = $.useState(false);
  let g, p;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (g = () => d(true), p = () => d(false), e[0] = g, e[1] = p) : (g = e[0], p = e[1]);
  let b;
  e[2] !== c ? (b = (C) => {
    C.stopPropagation(), c == null ? void 0 : c();
  }, e[2] = c, e[3] = b) : b = e[3];
  let v;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (v = { cursor: "ew-resize" }, e[4] = v) : v = e[4];
  const x = u || f ? 0.4 : 0;
  let S;
  e[5] !== x || e[6] !== a ? (S = m.jsx("line", { x1: a, y1: Vt, x2: a, y2: hn, className: "stroke-green-400 transition-opacity", strokeWidth: "8", strokeLinecap: "round", strokeLinejoin: "round", opacity: x, pointerEvents: "stroke" }), e[5] = x, e[6] = a, e[7] = S) : S = e[7];
  const j = f ? "stroke-green-600 stroke-2" : "stroke-green-500 stroke-2";
  let w;
  e[8] !== j || e[9] !== a ? (w = m.jsx("line", { x1: a, y1: Vt, x2: a, y2: hn, className: j, strokeLinecap: "round", strokeLinejoin: "round", pointerEvents: "none" }), e[8] = j, e[9] = a, e[10] = w) : w = e[10];
  const N = a - 6;
  let k;
  e[11] !== N ? (k = m.jsx("rect", { x: N, y: Vt, width: 12, height: hn - Vt, fill: "transparent", pointerEvents: "all" }), e[11] = N, e[12] = k) : k = e[12];
  let M;
  return e[13] !== o || e[14] !== k || e[15] !== b || e[16] !== S || e[17] !== w ? (M = m.jsxs("g", { "data-changeline": "true", onMouseEnter: g, onMouseLeave: p, onMouseDown: o, onDoubleClick: b, style: v, children: [S, w, k] }), e[13] = o, e[14] = k, e[15] = b, e[16] = S, e[17] = w, e[18] = M) : M = e[18], M;
}), g8 = $.memo((t) => {
  const e = F.c(9), { start: a, end: i } = t;
  let o;
  e[0] !== i || e[1] !== a ? (o = m.jsx("line", { x1: a, y1: hn, x2: i, y2: hn, className: "stroke-green-500 stroke-2", strokeLinecap: "round", strokeLinejoin: "round" }), e[0] = i, e[1] = a, e[2] = o) : o = e[2];
  const c = a + 4;
  let f;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (f = { userSelect: "none" }, e[3] = f) : f = e[3];
  let u;
  e[4] !== c ? (u = m.jsx("text", { x: c, y: (Vt + hn) / 2, className: "fill-green-500 text-xl font-mono", style: f, children: "0" }), e[4] = c, e[5] = u) : u = e[5];
  let d;
  return e[6] !== o || e[7] !== u ? (d = m.jsxs(m.Fragment, { children: [o, u] }), e[6] = o, e[7] = u, e[8] = d) : d = e[8], d;
}), p8 = $.memo((t) => {
  const e = F.c(13), { start: a, end: i } = t, o = i - a;
  let c;
  e[0] !== a || e[1] !== o ? (c = m.jsx("rect", { x: a, y: Vt, width: o, height: hn - Vt, className: "fill-green-500 opacity-30" }), e[0] = a, e[1] = o, e[2] = c) : c = e[2];
  let f;
  e[3] !== i || e[4] !== a ? (f = m.jsx("line", { x1: a, y1: Vt, x2: i, y2: Vt, className: "stroke-green-500 stroke-2", strokeLinecap: "round", strokeLinejoin: "round" }), e[3] = i, e[4] = a, e[5] = f) : f = e[5];
  const u = a + 4;
  let d;
  e[6] === Symbol.for("react.memo_cache_sentinel") ? (d = { userSelect: "none" }, e[6] = d) : d = e[6];
  let g;
  e[7] !== u ? (g = m.jsx("text", { x: u, y: (Vt + hn) / 2, className: "fill-green-500 text-xl font-mono", style: d, children: "1" }), e[7] = u, e[8] = g) : g = e[8];
  let p;
  return e[9] !== c || e[10] !== f || e[11] !== g ? (p = m.jsxs(m.Fragment, { children: [c, f, g] }), e[9] = c, e[10] = f, e[11] = g, e[12] = p) : p = e[12], p;
}), y8 = $.memo((t) => {
  const e = F.c(25), { width: a, height: i, gridPixel: o } = t, c = o, f = o * 10;
  let u;
  e[0] !== i || e[1] !== c ? (u = m.jsx("line", { x1: c, y1: "0", x2: c, y2: i, className: "stroke-gray-200 dark:stroke-gray-700", strokeWidth: "1", opacity: "0.3" }), e[0] = i, e[1] = c, e[2] = u) : u = e[2];
  let d;
  e[3] !== i || e[4] !== c || e[5] !== u ? (d = m.jsx("pattern", { id: "signal-minor-grid", width: c, height: i, patternUnits: "userSpaceOnUse", children: u }), e[3] = i, e[4] = c, e[5] = u, e[6] = d) : d = e[6];
  let g, p;
  e[7] !== i || e[8] !== f ? (g = m.jsx("rect", { width: f, height: i, fill: "url(#signal-minor-grid)" }), p = m.jsx("line", { x1: f, y1: "0", x2: f, y2: i, className: "stroke-gray-400 dark:stroke-gray-600", strokeWidth: "1", opacity: "0.6" }), e[7] = i, e[8] = f, e[9] = g, e[10] = p) : (g = e[9], p = e[10]);
  let b;
  e[11] !== i || e[12] !== f || e[13] !== g || e[14] !== p ? (b = m.jsxs("pattern", { id: "signal-major-grid", width: f, height: i, patternUnits: "userSpaceOnUse", children: [g, p] }), e[11] = i, e[12] = f, e[13] = g, e[14] = p, e[15] = b) : b = e[15];
  let v;
  e[16] !== d || e[17] !== b ? (v = m.jsxs("defs", { children: [d, b] }), e[16] = d, e[17] = b, e[18] = v) : v = e[18];
  let x;
  e[19] !== i || e[20] !== a ? (x = m.jsx("rect", { width: a, height: i, fill: "url(#signal-major-grid)" }), e[19] = i, e[20] = a, e[21] = x) : x = e[21];
  let S;
  return e[22] !== v || e[23] !== x ? (S = m.jsxs(m.Fragment, { children: [v, x] }), e[22] = v, e[23] = x, e[24] = S) : S = e[24], S;
});
function b8(t, e) {
  return t.value === 0 ? m.jsx(g8, { start: t.start, end: t.end }, `segment-${e}`) : m.jsx(p8, { start: t.start, end: t.end }, `segment-${e}`);
}
function v8(t, e) {
  return t[0] - e[0];
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const [x8, Ul, ma, ry] = [0, 10, 40, 50], S8 = (t) => {
  const e = F.c(81), { packets: a, duration: i, px: o, unit: c, cursor: f, update: u } = t, d = u !== void 0;
  let g;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (g = { state: "none" }, e[0] = g) : g = e[0];
  const [p, b] = $.useState(g);
  let v;
  e[1] !== o || e[2] !== c ? (v = (xe) => xe / c * o, e[1] = o, e[2] = c, e[3] = v) : v = e[3];
  const x = v;
  let S;
  e[4] !== o || e[5] !== c ? (S = (xe) => xe / o * c, e[4] = o, e[5] = c, e[6] = S) : S = e[6];
  const j = S, w = $.useRef(null);
  let N;
  e[7] !== d || e[8] !== a ? (N = (xe, ge) => {
    var _a6;
    if (!d) return;
    xe.preventDefault();
    const He = (_a6 = w.current) == null ? void 0 : _a6.getBoundingClientRect();
    if (!He) return;
    const Oe = xe.clientX - He.left, Ve = a[ge][0];
    b({ state: "dragging", index: ge, startX: Oe, startTime: Ve, currentTime: Ve });
  }, e[7] = d, e[8] = a, e[9] = N) : N = e[9];
  const k = N;
  let M;
  e[10] !== i || e[11] !== a || e[12] !== j || e[13] !== p.index || e[14] !== p.startTime || e[15] !== p.startX || e[16] !== p.state ? (M = (xe) => {
    var _a6;
    if (p.state !== "dragging") return;
    const ge = (_a6 = w.current) == null ? void 0 : _a6.getBoundingClientRect();
    if (!ge) return;
    const Oe = xe.clientX - ge.left - p.startX, Ve = j(Oe), Je = Math.max(0, Math.min(i - a[p.index][1], p.startTime + Ve));
    b((tt) => tt.state === "dragging" ? { ...tt, currentTime: Je } : tt);
  }, e[10] = i, e[11] = a, e[12] = j, e[13] = p.index, e[14] = p.startTime, e[15] = p.startX, e[16] = p.state, e[17] = M) : M = e[17];
  const C = M;
  let E;
  e[18] !== a || e[19] !== p.currentTime || e[20] !== p.index || e[21] !== p.state || e[22] !== u ? (E = () => {
    if (p.state !== "dragging" || !u) return;
    const xe = [...a];
    xe[p.index] = [p.currentTime, a[p.index][1], a[p.index][2]], u(xe), b({ state: "none" });
  }, e[18] = a, e[19] = p.currentTime, e[20] = p.index, e[21] = p.state, e[22] = u, e[23] = E) : E = e[23];
  const L = E, A = d && "hover:bg-gray-900 dark:hover:bg-gray-900";
  let z;
  e[24] !== A ? (z = Q("relative h-12 dark:border-gray-700 bg-black", A), e[24] = A, e[25] = z) : z = e[25];
  const q = x(i);
  let B;
  e[26] !== q ? (B = { width: q }, e[26] = q, e[27] = B) : B = e[27];
  const J = p.state === "dragging" && "cursor-ew-resize", W = d && "cursor-crosshair";
  let oe;
  e[28] !== J || e[29] !== W ? (oe = Q("absolute inset-0 w-full h-full", J, W), e[28] = J, e[29] = W, e[30] = oe) : oe = e[30];
  const ae = x(i);
  let K;
  e[31] !== i || e[32] !== o || e[33] !== ae || e[34] !== c ? (K = m.jsx(w8, { width: ae, height: ry, gridPixel: o, timeGrid: c, duration: i }), e[31] = i, e[32] = o, e[33] = ae, e[34] = c, e[35] = K) : K = e[35];
  const R = x(i);
  let G;
  e[36] !== R ? (G = m.jsx("rect", { x: 0, y: Ul, width: R, height: ma - Ul, className: "fill-gray-50 dark:fill-gray-700", opacity: "0.5" }), e[36] = R, e[37] = G) : G = e[37];
  const ne = x(i);
  let ue;
  e[38] !== ne ? (ue = m.jsx("line", { x1: "0", y1: Ul, x2: ne, y2: Ul, stroke: "currentColor", strokeWidth: "1", opacity: "0.3", strokeDasharray: "4 2" }), e[38] = ne, e[39] = ue) : ue = e[39];
  const O = x(i);
  let Y;
  e[40] !== O ? (Y = m.jsx("line", { x1: "0", y1: (Ul + ma) / 2, x2: O, y2: (Ul + ma) / 2, className: "stroke-green-500 stroke-2" }), e[40] = O, e[41] = Y) : Y = e[41];
  const re = x(i);
  let te;
  e[42] !== re ? (te = m.jsx("line", { x1: "0", y1: ma, x2: re, y2: ma, stroke: "currentColor", strokeWidth: "1", opacity: "0.3", strokeDasharray: "4 2" }), e[42] = re, e[43] = te) : te = e[43];
  let ce;
  e[44] !== ue || e[45] !== Y || e[46] !== te ? (ce = m.jsxs("g", { pointerEvents: "none", children: [ue, Y, te] }), e[44] = ue, e[45] = Y, e[46] = te, e[47] = ce) : ce = e[47];
  let me;
  if (e[48] !== d || e[49] !== k || e[50] !== a || e[51] !== p.currentTime || e[52] !== p.index || e[53] !== p.state || e[54] !== x) {
    let xe;
    e[56] !== d || e[57] !== k || e[58] !== p.currentTime || e[59] !== p.index || e[60] !== p.state || e[61] !== x ? (xe = (ge, He) => {
      const [Oe, Ve, Je] = ge, tt = p.state === "dragging" && p.index === He ? p.currentTime : Oe;
      return m.jsx(_8, { time: x(tt), length: x(Ve), value: Je, isDragging: p.state === "dragging" && p.index === He, onMouseDown: (Qe) => k(Qe, He), edittable: d }, `segment-${He}`);
    }, e[56] = d, e[57] = k, e[58] = p.currentTime, e[59] = p.index, e[60] = p.state, e[61] = x, e[62] = xe) : xe = e[62], me = a.map(xe), e[48] = d, e[49] = k, e[50] = a, e[51] = p.currentTime, e[52] = p.index, e[53] = p.state, e[54] = x, e[55] = me;
  } else me = e[55];
  let de;
  e[63] !== me ? (de = m.jsx("g", { children: me }), e[63] = me, e[64] = de) : de = e[64];
  let Ae;
  e[65] !== f || e[66] !== x ? (Ae = f && m.jsx("g", { pointerEvents: "none", children: m.jsx(j8, { x: x(f) }) }), e[65] = f, e[66] = x, e[67] = Ae) : Ae = e[67];
  let he;
  e[68] !== C || e[69] !== L || e[70] !== oe || e[71] !== K || e[72] !== G || e[73] !== ce || e[74] !== de || e[75] !== Ae ? (he = m.jsxs("svg", { ref: w, className: oe, onMouseMove: C, onMouseUp: L, onMouseLeave: L, children: [K, G, ce, de, Ae] }), e[68] = C, e[69] = L, e[70] = oe, e[71] = K, e[72] = G, e[73] = ce, e[74] = de, e[75] = Ae, e[76] = he) : he = e[76];
  let pe;
  return e[77] !== he || e[78] !== z || e[79] !== B ? (pe = m.jsx("div", { className: z, style: B, children: he }), e[77] = he, e[78] = z, e[79] = B, e[80] = pe) : pe = e[80], pe;
}, j8 = $.memo((t) => {
  const e = F.c(2), { x: a } = t;
  let i;
  return e[0] !== a ? (i = m.jsx("line", { x1: a, y1: x8, x2: a, y2: ry, className: "stroke-yellow-500 stroke-2" }), e[0] = a, e[1] = i) : i = e[1], i;
}), _8 = $.memo((t) => {
  const e = F.c(18), { time: a, length: i, value: o, isDragging: c, onMouseDown: f, edittable: u } = t, d = c === void 0 ? false : c, g = u === void 0 ? false : u, p = Math.min(10, i / 4), b = (Ul + ma) / 2, v = `
    M ${a} ${b}
    L ${a + p} ${Ul}
    L ${a + i - p} ${Ul}
    L ${a + i} ${b}
    L ${a + i - p} ${ma}
    L ${a + p} ${ma}
    Z
  `, x = g ? "group" : "", S = g ? d ? "ew-resize" : "pointer" : "default";
  let j;
  e[0] !== S ? (j = { cursor: S }, e[0] = S, e[1] = j) : j = e[1];
  const w = d ? "fill-green-700" : "fill-green-950", N = g && "group-hover:fill-green-800";
  let k;
  e[2] !== w || e[3] !== N ? (k = Q("stroke-green-500 stroke-2 transition-colors", w, N), e[2] = w, e[3] = N, e[4] = k) : k = e[4];
  let M;
  e[5] !== v || e[6] !== k ? (M = m.jsx("path", { d: v, className: k, strokeLinecap: "round", strokeLinejoin: "round" }), e[5] = v, e[6] = k, e[7] = M) : M = e[7];
  const C = a + i / 2;
  let E;
  e[8] === Symbol.for("react.memo_cache_sentinel") ? (E = { userSelect: "none", pointerEvents: "none" }, e[8] = E) : E = e[8];
  const L = String(o);
  let A;
  e[9] !== C || e[10] !== L ? (A = m.jsx("text", { x: C, y: b + 5, className: "fill-white text-sm font-mono", textAnchor: "middle", style: E, children: L }), e[9] = C, e[10] = L, e[11] = A) : A = e[11];
  let z;
  return e[12] !== f || e[13] !== A || e[14] !== x || e[15] !== j || e[16] !== M ? (z = m.jsxs("g", { onMouseDown: f, className: x, style: j, children: [M, A] }), e[12] = f, e[13] = A, e[14] = x, e[15] = j, e[16] = M, e[17] = z) : z = e[17], z;
}), w8 = $.memo((t) => {
  const e = F.c(25), { width: a, height: i, gridPixel: o } = t, c = o, f = o * 10;
  let u;
  e[0] !== i || e[1] !== c ? (u = m.jsx("line", { x1: c, y1: "0", x2: c, y2: i, className: "stroke-gray-200 dark:stroke-gray-700", strokeWidth: "1", opacity: "0.3" }), e[0] = i, e[1] = c, e[2] = u) : u = e[2];
  let d;
  e[3] !== i || e[4] !== c || e[5] !== u ? (d = m.jsx("pattern", { id: "signal-minor-grid", width: c, height: i, patternUnits: "userSpaceOnUse", children: u }), e[3] = i, e[4] = c, e[5] = u, e[6] = d) : d = e[6];
  let g, p;
  e[7] !== i || e[8] !== f ? (g = m.jsx("rect", { width: f, height: i, fill: "url(#signal-minor-grid)" }), p = m.jsx("line", { x1: f, y1: "0", x2: f, y2: i, className: "stroke-gray-400 dark:stroke-gray-600", strokeWidth: "1", opacity: "0.6" }), e[7] = i, e[8] = f, e[9] = g, e[10] = p) : (g = e[9], p = e[10]);
  let b;
  e[11] !== i || e[12] !== f || e[13] !== g || e[14] !== p ? (b = m.jsxs("pattern", { id: "signal-major-grid", width: f, height: i, patternUnits: "userSpaceOnUse", children: [g, p] }), e[11] = i, e[12] = f, e[13] = g, e[14] = p, e[15] = b) : b = e[15];
  let v;
  e[16] !== d || e[17] !== b ? (v = m.jsxs("defs", { children: [d, b] }), e[16] = d, e[17] = b, e[18] = v) : v = e[18];
  let x;
  e[19] !== i || e[20] !== a ? (x = m.jsx("rect", { width: a, height: i, fill: "url(#signal-major-grid)" }), e[19] = i, e[20] = a, e[21] = x) : x = e[21];
  let S;
  return e[22] !== v || e[23] !== x ? (S = m.jsxs(m.Fragment, { children: [v, x] }), e[22] = v, e[23] = x, e[24] = S) : S = e[24], S;
});
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const N8 = $.memo((t) => {
  const e = F.c(22), { className: a, isPlaying: i, unitPixel: o, onRun: c, onUnitPixelChange: f, onExport: u, onImport: d, snapInterval: g, onSnapIntervalChange: p } = t;
  let b;
  e[0] !== a ? (b = Q(a, "flex items-center gap-4 p-2", "border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"), e[0] = a, e[1] = b) : b = e[1];
  let v;
  e[2] !== i || e[3] !== c ? (v = m.jsx(T8, { state: i, onToggle: c }), e[2] = i, e[3] = c, e[4] = v) : v = e[4];
  let x;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (x = [1, 2, 5, 10, 15, 20, 30, 50, 70, 100], e[5] = x) : x = e[5];
  let S;
  e[6] !== f || e[7] !== o ? (S = m.jsx(tg, { value: o, candidates: x, onChange: f, formatValue: M8 }), e[6] = f, e[7] = o, e[8] = S) : S = e[8];
  let j;
  e[9] === Symbol.for("react.memo_cache_sentinel") ? (j = [1e5, 1e6, 1e7, 1e8, 1e9], e[9] = j) : j = e[9];
  let w;
  e[10] !== p || e[11] !== g ? (w = m.jsx(tg, { value: g, candidates: j, onChange: p, formatValue: A8 }), e[10] = p, e[11] = g, e[12] = w) : w = e[12];
  let N;
  e[13] !== u || e[14] !== d ? (N = m.jsx(k8, { onExport: u, onImport: d }), e[13] = u, e[14] = d, e[15] = N) : N = e[15];
  let k;
  return e[16] !== b || e[17] !== v || e[18] !== S || e[19] !== w || e[20] !== N ? (k = m.jsxs("div", { className: b, children: [v, S, w, N] }), e[16] = b, e[17] = v, e[18] = S, e[19] = w, e[20] = N, e[21] = k) : k = e[21], k;
}), T8 = $.memo((t) => {
  const e = F.c(6), { state: a, onToggle: i } = t;
  let o;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (o = Q("flex items-center gap-2 px-6 py-1 cursor-pointer", "bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"), e[0] = o) : o = e[0];
  let c;
  e[1] !== a ? (c = a ? m.jsxs(m.Fragment, { children: [m.jsx(Hp, { size: 16 }), "Running..."] }) : m.jsxs(m.Fragment, { children: [m.jsx(oh, { size: 16 }), "Run"] }), e[1] = a, e[2] = c) : c = e[2];
  let f;
  return e[3] !== i || e[4] !== c ? (f = m.jsx("button", { onClick: i, className: o, children: c }), e[3] = i, e[4] = c, e[5] = f) : f = e[5], f;
}), tg = $.memo((t) => {
  const e = F.c(25), { value: a, candidates: i, onChange: o, formatValue: c } = t, f = i.indexOf(a);
  let u;
  e[0] !== i || e[1] !== f || e[2] !== o ? (u = () => {
    f > 0 && o(i[f - 1]);
  }, e[0] = i, e[1] = f, e[2] = o, e[3] = u) : u = e[3];
  const d = u;
  let g;
  e[4] !== i || e[5] !== f || e[6] !== o ? (g = () => {
    f < i.length - 1 && o(i[f + 1]);
  }, e[4] = i, e[5] = f, e[6] = o, e[7] = g) : g = e[7];
  const p = g;
  let b;
  e[8] !== a || e[9] !== c ? (b = c ? c(a) : a.toString(), e[8] = a, e[9] = c, e[10] = b) : b = e[10];
  const v = b, x = f <= 0;
  let S;
  e[11] === Symbol.for("react.memo_cache_sentinel") ? (S = m.jsx(w_, { size: 14 }), e[11] = S) : S = e[11];
  let j;
  e[12] !== d || e[13] !== x ? (j = m.jsx("button", { onClick: d, disabled: x, className: "px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer", children: S }), e[12] = d, e[13] = x, e[14] = j) : j = e[14];
  let w;
  e[15] !== v ? (w = m.jsx("div", { className: "flex items-center px-3 py-1 border-x border-gray-300 dark:border-gray-600", children: m.jsx("span", { className: "text-xs text-gray-900 dark:text-gray-100 font-medium min-w-[60px] text-center", children: v }) }), e[15] = v, e[16] = w) : w = e[16];
  const N = f >= i.length - 1;
  let k;
  e[17] === Symbol.for("react.memo_cache_sentinel") ? (k = m.jsx(j_, { size: 14 }), e[17] = k) : k = e[17];
  let M;
  e[18] !== p || e[19] !== N ? (M = m.jsx("button", { onClick: p, disabled: N, className: "px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer", children: k }), e[18] = p, e[19] = N, e[20] = M) : M = e[20];
  let C;
  return e[21] !== M || e[22] !== j || e[23] !== w ? (C = m.jsxs("div", { className: "flex items-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 overflow-hidden", children: [j, w, M] }), e[21] = M, e[22] = j, e[23] = w, e[24] = C) : C = e[24], C;
}), k8 = $.memo((t) => {
  const e = F.c(9), { onExport: a, onImport: i } = t;
  let o;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (o = m.jsx(rj, { size: 16 }), e[0] = o) : o = e[0];
  let c;
  e[1] !== a ? (c = m.jsx("button", { onClick: a, className: "p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors", title: "Export Waveforms", children: o }), e[1] = a, e[2] = c) : c = e[2];
  let f;
  e[3] === Symbol.for("react.memo_cache_sentinel") ? (f = m.jsx(y_, { size: 16 }), e[3] = f) : f = e[3];
  let u;
  e[4] !== i ? (u = m.jsx("button", { onClick: i, className: "p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors", title: "Import Waveforms", children: f }), e[4] = i, e[5] = u) : u = e[5];
  let d;
  return e[6] !== c || e[7] !== u ? (d = m.jsxs("div", { className: "flex items-center gap-1", children: [c, u] }), e[6] = c, e[7] = u, e[8] = d) : d = e[8], d;
});
function M8(t) {
  return `${t < 1 ? t.toFixed(1) : t.toFixed(0)}px`;
}
function A8(t) {
  return t < 1e3 ? `${t}ns` : t < 1e6 ? `${t / 1e3}\u03BCs` : t < 1e9 ? `${t / 1e6}ms` : `${t / 1e9}s`;
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const C8 = () => {
  const t = F.c(38), { channels: e } = wx(), [a, i] = $.useState(1e4), [o, c] = $.useState(10), [f, u] = $.useState(10), [d] = $.useState(null);
  let g;
  t[0] !== f ? (g = () => {
    i((A) => A + f);
  }, t[0] = f, t[1] = g) : g = t[1];
  const p = g;
  let b;
  t[2] !== f ? (b = () => {
    i((A) => Math.max(0, A - f));
  }, t[2] = f, t[3] = b) : b = t[3];
  const v = b;
  let x;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (x = m.jsx("div", { className: "sticky left-0 z-30 bg-gray-50 dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700 flex items-center px-3 h-12 w-[160px]", children: m.jsx("span", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: "Channels" }) }), t[4] = x) : x = t[4];
  const S = a / f * o + 100;
  let j;
  t[5] !== S ? (j = { width: S }, t[5] = S, t[6] = j) : j = t[6];
  let w;
  t[7] !== a || t[8] !== p || t[9] !== o || t[10] !== v || t[11] !== f ? (w = m.jsx(i8, { duration: a, unitPixel: o, snapInterval: f, onAppendTime: p, onDeleteTime: v }), t[7] = a, t[8] = p, t[9] = o, t[10] = v, t[11] = f, t[12] = w) : w = t[12];
  let N;
  t[13] !== j || t[14] !== w ? (N = m.jsxs("div", { className: "sticky top-0 z-20 flex bg-white dark:bg-gray-900", children: [x, m.jsx("div", { className: "h-12 border-b border-gray-200 dark:border-gray-700", style: j, children: w })] }), t[13] = j, t[14] = w, t[15] = N) : N = t[15];
  let k;
  if (t[16] !== e || t[17] !== a || t[18] !== o || t[19] !== d || t[20] !== f) {
    let A;
    t[22] !== a || t[23] !== o || t[24] !== d || t[25] !== f ? (A = (z) => m.jsx(E8, { channel: z, duration: a, px: o, dt: f, time: d }, z.name), t[22] = a, t[23] = o, t[24] = d, t[25] = f, t[26] = A) : A = t[26], k = e.map(A), t[16] = e, t[17] = a, t[18] = o, t[19] = d, t[20] = f, t[21] = k;
  } else k = t[21];
  let M;
  t[27] !== k ? (M = m.jsx("div", { className: "flex flex-col gap-1", children: k }), t[27] = k, t[28] = M) : M = t[28];
  let C;
  t[29] !== N || t[30] !== M ? (C = m.jsx("div", { className: "flex-1 min-h-0 overflow-auto relative", children: m.jsxs("div", { className: "inline-block min-w-full", children: [N, M] }) }), t[29] = N, t[30] = M, t[31] = C) : C = t[31];
  let E;
  t[32] !== o || t[33] !== f ? (E = m.jsx(N8, { isPlaying: false, onRun: O8, unitPixel: o, snapInterval: f, onUnitPixelChange: c, onSnapIntervalChange: u, onExport: z8, onImport: D8 }), t[32] = o, t[33] = f, t[34] = E) : E = t[34];
  let L;
  return t[35] !== E || t[36] !== C ? (L = m.jsxs("div", { className: "h-full flex flex-col", children: [C, E] }), t[35] = E, t[36] = C, t[37] = L) : L = t[37], L;
}, E8 = (t) => {
  const e = F.c(41), { channel: a, duration: i, px: o, dt: c, time: f } = t, [u, d] = $.useState(false), g = a.name;
  let p, b;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (p = Q("sticky left-0 z-10 w-40", "flex items-center", "cursor-pointer bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-700"), b = () => d(R8), e[0] = p, e[1] = b) : (p = e[0], b = e[1]);
  let v;
  e[2] !== u ? (v = u ? m.jsx(ih, { className: "w-4 h-4 text-gray-600 dark:text-gray-400" }) : m.jsx(Xo, { className: "w-4 h-4 text-gray-600 dark:text-gray-400" }), e[2] = u, e[3] = v) : v = e[3];
  let x;
  e[4] !== a.name ? (x = m.jsx("span", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300 select-none", children: a.name }), e[4] = a.name, e[5] = x) : x = e[5];
  let S;
  e[6] !== v || e[7] !== x ? (S = m.jsx("div", { className: p, onClick: b, children: m.jsxs("div", { className: "px-3 flex items-center gap-1", children: [v, x] }) }), e[6] = v, e[7] = x, e[8] = S) : S = e[8];
  const j = i / c * o + 100;
  let w;
  e[9] !== j ? (w = { width: j }, e[9] = j, e[10] = w) : w = e[10];
  let N;
  e[11] !== a.name ? (N = [100, 200, a.name], e[11] = a.name, e[12] = N) : N = e[12];
  let k, M;
  e[13] === Symbol.for("react.memo_cache_sentinel") ? (k = [400, 300, "test"], M = [800, 150, "data"], e[13] = k, e[14] = M) : (k = e[13], M = e[14]);
  let C;
  e[15] !== N ? (C = [N, k, M], e[15] = N, e[16] = C) : C = e[16];
  const E = C;
  let L;
  e[17] !== c || e[18] !== i || e[19] !== o || e[20] !== E || e[21] !== f ? (L = m.jsx(S8, { packets: E, duration: i, px: o, unit: c, cursor: f }), e[17] = c, e[18] = i, e[19] = o, e[20] = E, e[21] = f, e[22] = L) : L = e[22];
  let A;
  e[23] !== L || e[24] !== w ? (A = m.jsx("div", { className: "border-b border-gray-200 dark:border-gray-700 flex items-center", style: w, children: L }), e[23] = L, e[24] = w, e[25] = A) : A = e[25];
  let z;
  e[26] !== A || e[27] !== S ? (z = m.jsxs("div", { className: "flex", children: [S, A] }), e[26] = A, e[27] = S, e[28] = z) : z = e[28];
  let q;
  e[29] !== a.name || e[30] !== a.proto || e[31] !== c || e[32] !== i || e[33] !== u || e[34] !== o || e[35] !== f ? (q = u && (a.proto.kind === "in" || a.proto.kind === "out") ? a.proto.pin.map((J) => m.jsxs("div", { className: "flex", children: [m.jsxs("div", { className: Q("sticky left-0 z-10 w-[160px] h-[50px]", "border-r border-b border-gray-200 dark:border-gray-700 flex"), children: [m.jsx("div", { className: "w-6 bg-gray-100 dark:bg-gray-700 h-full" }), m.jsx("div", { className: "flex-1 bg-gray-50 dark:bg-gray-800", children: m.jsx(c8, { name: J, input: a.proto.kind === "in", state: false }) })] }), m.jsx("div", { className: Q("flex items-center h-[50px] border-b border-gray-200 dark:border-gray-700"), style: { width: i / c * o }, children: m.jsx(h8, { wave: [], duration: i, px: o, dt: c, time: f || 0, minSnapUnit: c, onUpdate: L8 }) })] }, `${a.name}-${J}`)) : null, e[29] = a.name, e[30] = a.proto, e[31] = c, e[32] = i, e[33] = u, e[34] = o, e[35] = f, e[36] = q) : q = e[36];
  let B;
  return e[37] !== a.name || e[38] !== z || e[39] !== q ? (B = m.jsxs("div", { children: [z, q] }, g), e[37] = a.name, e[38] = z, e[39] = q, e[40] = B) : B = e[40], B;
};
function O8() {
  return console.log("Run");
}
function z8() {
  return console.log("Export");
}
function D8() {
  return console.log("Import");
}
function R8(t) {
  return !t;
}
function L8() {
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const U8 = () => {
  const t = F.c(9), { channels: e } = Tx();
  let a;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = m.jsx("div", { className: "flex-1 px-4 py-3", children: m.jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Channel" }) }), t[0] = a) : a = t[0];
  let i;
  t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsxs("div", { className: "flex bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 sticky top-0", children: [a, m.jsx("div", { className: "flex-1 px-4 py-3", children: m.jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Protocol" }) }), m.jsx("div", { className: "w-24 px-4 py-3" })] }), t[1] = i) : i = t[1];
  let o;
  t[2] !== e ? (o = e.map(H8), t[2] = e, t[3] = o) : o = t[3];
  let c;
  t[4] !== o ? (c = m.jsxs("div", { className: "flex-1 overflow-y-auto w-full", children: [i, o] }), t[4] = o, t[5] = c) : c = t[5];
  let f;
  t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = m.jsx("div", { className: "flex-shrink-0 p-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700", children: m.jsx("div", { className: "flex gap-2", children: m.jsxs("button", { className: "flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed rounded text-white", children: [m.jsx(gl, { size: 16 }), " Add Channel"] }) }) }), t[6] = f) : f = t[6];
  let u;
  return t[7] !== c ? (u = m.jsxs("div", { className: "h-full flex flex-col", children: [c, f] }), t[7] = c, t[8] = u) : u = t[8], u;
}, $8 = (t) => {
  const e = F.c(64), { proto: a } = t;
  switch (a.kind) {
    case "out": {
      let i;
      e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: "GPIO Output" }), e[0] = i) : i = e[0];
      let o;
      e[1] !== a.pin ? (o = a.pin.join(", "), e[1] = a.pin, e[2] = o) : o = e[2];
      let c;
      return e[3] !== o ? (c = m.jsxs("div", { className: "space-y-1", children: [i, m.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: ["pins: ", o] })] }), e[3] = o, e[4] = c) : c = e[4], c;
    }
    case "in": {
      let i;
      e[5] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: "GPIO Input" }), e[5] = i) : i = e[5];
      let o;
      e[6] !== a.pin ? (o = a.pin.join(", "), e[6] = a.pin, e[7] = o) : o = e[7];
      let c;
      return e[8] !== o ? (c = m.jsxs("div", { className: "space-y-1", children: [i, m.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: ["pins: ", o] })] }), e[8] = o, e[9] = c) : c = e[9], c;
    }
    case "uart": {
      let i;
      e[10] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: "UART" }), e[10] = i) : i = e[10];
      let o;
      e[11] !== a.tx ? (o = m.jsxs("div", { children: ["TX: ", a.tx] }), e[11] = a.tx, e[12] = o) : o = e[12];
      let c;
      e[13] !== a.rx ? (c = m.jsxs("div", { children: ["RX: ", a.rx] }), e[13] = a.rx, e[14] = c) : c = e[14];
      let f;
      return e[15] !== o || e[16] !== c ? (f = m.jsxs("div", { className: "space-y-1", children: [i, m.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [o, c] })] }), e[15] = o, e[16] = c, e[17] = f) : f = e[17], f;
    }
    case "i2cm": {
      let i;
      e[18] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: "I2C Master" }), e[18] = i) : i = e[18];
      let o;
      e[19] !== a.scl ? (o = m.jsxs("div", { children: ["SCL: ", a.scl] }), e[19] = a.scl, e[20] = o) : o = e[20];
      let c;
      e[21] !== a.sda ? (c = m.jsxs("div", { children: ["SDA: ", a.sda] }), e[21] = a.sda, e[22] = c) : c = e[22];
      let f;
      return e[23] !== o || e[24] !== c ? (f = m.jsxs("div", { className: "space-y-1", children: [i, m.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [o, c] })] }), e[23] = o, e[24] = c, e[25] = f) : f = e[25], f;
    }
    case "i2cs": {
      let i;
      e[26] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: "I2C Slave" }), e[26] = i) : i = e[26];
      let o;
      e[27] !== a.scl ? (o = m.jsxs("div", { children: ["SCL: ", a.scl] }), e[27] = a.scl, e[28] = o) : o = e[28];
      let c;
      e[29] !== a.sda ? (c = m.jsxs("div", { children: ["SDA: ", a.sda] }), e[29] = a.sda, e[30] = c) : c = e[30];
      let f;
      return e[31] !== o || e[32] !== c ? (f = m.jsxs("div", { className: "space-y-1", children: [i, m.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [o, c] })] }), e[31] = o, e[32] = c, e[33] = f) : f = e[33], f;
    }
    case "spim": {
      let i;
      e[34] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: "SPI Master" }), e[34] = i) : i = e[34];
      let o;
      e[35] !== a.clk ? (o = m.jsxs("div", { children: ["CLK: ", a.clk] }), e[35] = a.clk, e[36] = o) : o = e[36];
      let c;
      e[37] !== a.mosi ? (c = m.jsxs("div", { children: ["MOSI: ", a.mosi] }), e[37] = a.mosi, e[38] = c) : c = e[38];
      let f;
      e[39] !== a.miso ? (f = m.jsxs("div", { children: ["MISO: ", a.miso] }), e[39] = a.miso, e[40] = f) : f = e[40];
      let u;
      e[41] !== a.ss ? (u = a.ss.join(", "), e[41] = a.ss, e[42] = u) : u = e[42];
      let d;
      e[43] !== u ? (d = m.jsxs("div", { children: ["SS: ", u] }), e[43] = u, e[44] = d) : d = e[44];
      let g;
      return e[45] !== o || e[46] !== c || e[47] !== f || e[48] !== d ? (g = m.jsxs("div", { className: "space-y-1", children: [i, m.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [o, c, f, d] })] }), e[45] = o, e[46] = c, e[47] = f, e[48] = d, e[49] = g) : g = e[49], g;
    }
    case "spis": {
      let i;
      e[50] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100", children: "SPI Slave" }), e[50] = i) : i = e[50];
      let o;
      e[51] !== a.clk ? (o = m.jsxs("div", { children: ["CLK: ", a.clk] }), e[51] = a.clk, e[52] = o) : o = e[52];
      let c;
      e[53] !== a.mosi ? (c = m.jsxs("div", { children: ["MOSI: ", a.mosi] }), e[53] = a.mosi, e[54] = c) : c = e[54];
      let f;
      e[55] !== a.miso ? (f = m.jsxs("div", { children: ["MISO: ", a.miso] }), e[55] = a.miso, e[56] = f) : f = e[56];
      let u;
      e[57] !== a.ss ? (u = m.jsxs("div", { children: ["SS: ", a.ss] }), e[57] = a.ss, e[58] = u) : u = e[58];
      let d;
      return e[59] !== o || e[60] !== c || e[61] !== f || e[62] !== u ? (d = m.jsxs("div", { className: "space-y-1", children: [i, m.jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [o, c, f, u] })] }), e[59] = o, e[60] = c, e[61] = f, e[62] = u, e[63] = d) : d = e[63], d;
    }
  }
};
function H8(t) {
  return m.jsxs("div", { className: "flex border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50", children: [m.jsx("div", { className: "flex-1 px-4 py-3 flex items-center", children: m.jsx("span", { className: "font-mono text-gray-800 dark:text-gray-200", children: t.name }) }), m.jsx("div", { className: "flex-1 px-4 py-3", children: m.jsx($8, { proto: t.proto }) }), m.jsxs("div", { className: "w-24 px-4 py-3 flex items-center justify-end gap-1", children: [m.jsx("button", { className: "p-1 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded cursor-pointer", children: m.jsx(Vj, { size: 14 }) }), m.jsx("button", { className: "p-1 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 rounded cursor-pointer", children: m.jsx(ch, { size: 14 }) })] })] }, t.name);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const q8 = () => {
  const t = F.c(4), { channels: e } = Nx();
  let a;
  t[0] !== e ? (a = e.map(Y8), t[0] = e, t[1] = a) : a = t[1];
  let i;
  return t[2] !== a ? (i = m.jsx("div", { className: "h-full", children: m.jsx(qn, { children: a }) }), t[2] = a, t[3] = i) : i = t[3], i;
}, V8 = (t) => {
  const e = F.c(18), { channel: a } = t, i = a.proto;
  let o;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (o = {}, e[0] = o) : o = e[0];
  const [c] = $.useState(o);
  let f;
  e[1] === Symbol.for("react.memo_cache_sentinel") ? (f = m.jsx(Qj, { className: "text-green-400", size: 16 }), e[1] = f) : f = e[1];
  let u;
  e[2] !== a.name ? (u = m.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [f, m.jsx("h3", { className: "font-semibold text-sm text-gray-900 dark:text-gray-100", children: a.name })] }), e[2] = a.name, e[3] = u) : u = e[3];
  let d;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (d = m.jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "GPIO Output" }), e[4] = d) : d = e[4];
  let g;
  e[5] !== u ? (g = m.jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700", children: [u, d] }), e[5] = u, e[6] = g) : g = e[6];
  let p;
  if (e[7] !== i.pin || e[8] !== c) {
    let S;
    e[10] !== c ? (S = (j) => m.jsxs("div", { className: "flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700", children: [m.jsx("span", { className: "text-sm text-gray-900 dark:text-gray-100", children: j }), m.jsx("button", { className: `p-1 rounded transition-colors ${c[j] ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-700"} disabled:opacity-50 disabled:cursor-not-allowed`, children: c[j] ? m.jsx(f_, { size: 20 }) : m.jsx(c_, { size: 20 }) })] }, j), e[10] = c, e[11] = S) : S = e[11], p = i.pin.map(S), e[7] = i.pin, e[8] = c, e[9] = p;
  } else p = e[9];
  let b;
  e[12] !== p ? (b = m.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-2", children: p }), e[12] = p, e[13] = b) : b = e[13];
  let v;
  e[14] === Symbol.for("react.memo_cache_sentinel") ? (v = m.jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 space-y-2", children: [m.jsx("button", { className: "w-full px-3 py-1 text-sm bg-green-600 hover:bg-green-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed rounded text-white", children: "All High" }), m.jsx("button", { className: "w-full px-3 py-1 text-sm bg-red-600 hover:bg-red-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed rounded text-white", children: "All Low" })] }), e[14] = v) : v = e[14];
  let x;
  return e[15] !== g || e[16] !== b ? (x = m.jsxs("div", { className: "flex flex-col h-full bg-gray-50 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700", children: [g, b, v] }), e[15] = g, e[16] = b, e[17] = x) : x = e[17], x;
};
function B8() {
  return null;
}
function Y8(t) {
  switch (t.proto.kind) {
    case "out":
      return m.jsx(qn.Pane, { minSize: 150, children: m.jsx(V8, { channel: t, onSend: B8 }) }, t.name);
    default:
      return null;
  }
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const G8 = () => {
  const t = F.c(45), [e, a] = Ee(Ng);
  let i;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsx(oh, { size: 16 }), t[0] = i) : i = t[0];
  const o = e === "compiler";
  let c;
  t[1] !== a ? (c = () => a("compiler"), t[1] = a, t[2] = c) : c = t[2];
  let f;
  t[3] !== o || t[4] !== c ? (f = m.jsx(ga, { name: "Run", icon: i, isActive: o, onClick: c }), t[3] = o, t[4] = c, t[5] = f) : f = t[5];
  let u;
  t[6] === Symbol.for("react.memo_cache_sentinel") ? (u = m.jsx(JS, { size: 16 }), t[6] = u) : u = t[6];
  const d = e === "channel";
  let g;
  t[7] !== a ? (g = () => a("channel"), t[7] = a, t[8] = g) : g = t[8];
  let p;
  t[9] !== d || t[10] !== g ? (p = m.jsx(ga, { name: "Channel", icon: u, isActive: d, onClick: g }), t[9] = d, t[10] = g, t[11] = p) : p = t[11];
  let b;
  t[12] === Symbol.for("react.memo_cache_sentinel") ? (b = m.jsx(r_, { size: 16 }), t[12] = b) : b = t[12];
  const v = e === "terminal";
  let x;
  t[13] !== a ? (x = () => a("terminal"), t[13] = a, t[14] = x) : x = t[14];
  let S;
  t[15] !== x || t[16] !== v ? (S = m.jsx(ga, { name: "Terminal", icon: b, isActive: v, onClick: x }), t[15] = x, t[16] = v, t[17] = S) : S = t[17];
  let j;
  t[18] === Symbol.for("react.memo_cache_sentinel") ? (j = m.jsx(t_, { size: 16 }), t[18] = j) : j = t[18];
  const w = e === "signal";
  let N;
  t[19] !== a ? (N = () => a("signal"), t[19] = a, t[20] = N) : N = t[20];
  let k;
  t[21] !== w || t[22] !== N ? (k = m.jsx(ga, { name: "Signal", icon: j, isActive: w, onClick: N }), t[21] = w, t[22] = N, t[23] = k) : k = t[23];
  let M;
  t[24] !== S || t[25] !== k || t[26] !== f || t[27] !== p ? (M = m.jsxs(uh, { className: "h-10 overflow-x-auto flex-shrink-0", children: [f, p, S, k] }), t[24] = S, t[25] = k, t[26] = f, t[27] = p, t[28] = M) : M = t[28];
  let C;
  t[29] !== e ? (C = e === "compiler" && m.jsx(t8, {}), t[29] = e, t[30] = C) : C = t[30];
  let E;
  t[31] !== e ? (E = e === "channel" && m.jsx(U8, {}), t[31] = e, t[32] = E) : E = t[32];
  let L;
  t[33] !== e ? (L = e === "terminal" && m.jsx(q8, {}), t[33] = e, t[34] = L) : L = t[34];
  let A;
  t[35] !== e ? (A = e === "signal" && m.jsx(C8, {}), t[35] = e, t[36] = A) : A = t[36];
  let z;
  t[37] !== C || t[38] !== E || t[39] !== L || t[40] !== A ? (z = m.jsxs("div", { className: "flex-1 min-h-0 overflow-y-auto overflow-x-hidden", children: [C, E, L, A] }), t[37] = C, t[38] = E, t[39] = L, t[40] = A, t[41] = z) : z = t[41];
  let q;
  return t[42] !== M || t[43] !== z ? (q = m.jsxs("div", { className: "flex flex-col h-full", children: [M, z] }), t[42] = M, t[43] = z, t[44] = q) : q = t[44], q;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const Q8 = (t) => {
  const e = F.c(27), { project: a } = t, i = ES();
  let o, c;
  e[0] !== i ? (o = () => (document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i)), c = [i], e[0] = i, e[1] = o, e[2] = c) : (o = e[1], c = e[2]), $.useEffect(o, c);
  const [f, u] = Ee(wg);
  let d;
  e[3] !== u ? (d = (L) => {
    u((A) => ({ ...A, ...L }));
  }, e[3] = u, e[4] = d) : d = e[4];
  const g = d;
  let p;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (p = Q("w-screen h-screen flex flex-col overflow-hidden", "bg-white dark:bg-gray-900 text-black dark:text-white"), e[5] = p) : p = e[5];
  let b;
  e[6] !== a ? (b = m.jsx(u5, { proj: a }), e[6] = a, e[7] = b) : b = e[7];
  let v;
  e[8] !== g ? (v = (L) => g({ horizontal: L }), e[8] = g, e[9] = v) : v = e[9];
  let x;
  e[10] === Symbol.for("react.memo_cache_sentinel") ? (x = m.jsx(qn.Pane, { minSize: 50, preferredSize: 200, children: m.jsx(T5, {}) }), e[10] = x) : x = e[10];
  let S;
  e[11] !== g ? (S = (L) => g({ vertical: L }), e[11] = g, e[12] = S) : S = e[12];
  let j;
  e[13] === Symbol.for("react.memo_cache_sentinel") ? (j = m.jsx(qn.Pane, { children: m.jsx(l5, {}) }), e[13] = j) : j = e[13];
  let w;
  e[14] === Symbol.for("react.memo_cache_sentinel") ? (w = m.jsx(qn.Pane, { minSize: 50, preferredSize: 300, children: m.jsx(G8, {}) }), e[14] = w) : w = e[14];
  let N;
  e[15] !== f.vertical || e[16] !== S ? (N = m.jsx(qn.Pane, { children: m.jsxs(qn, { vertical: true, defaultSizes: f.vertical, onDragEnd: S, children: [j, w] }) }), e[15] = f.vertical, e[16] = S, e[17] = N) : N = e[17];
  let k;
  e[18] === Symbol.for("react.memo_cache_sentinel") ? (k = m.jsx(qn.Pane, { minSize: 50, preferredSize: 200, children: m.jsx(e8, {}) }), e[18] = k) : k = e[18];
  let M;
  e[19] !== f.horizontal || e[20] !== N || e[21] !== v ? (M = m.jsxs(qn, { className: "flex-1", defaultSizes: f.horizontal, onDragEnd: v, children: [x, N, k] }), e[19] = f.horizontal, e[20] = N, e[21] = v, e[22] = M) : M = e[22];
  let C;
  e[23] === Symbol.for("react.memo_cache_sentinel") ? (C = m.jsx(c5, {}), e[23] = C) : C = e[23];
  let E;
  return e[24] !== M || e[25] !== b ? (E = m.jsxs("div", { className: p, children: [b, M, C] }), e[24] = M, e[25] = b, e[26] = E) : E = e[26], E;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const oy = (t) => {
  const e = F.c(83), { path: a } = t, { tree: i, content: o, files: c, open: f, write: u, create: d, refresh: g } = BS(a), [p, b] = $.useState("");
  let v;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (v = /* @__PURE__ */ new Map(), e[0] = v) : v = e[0];
  const [x, S] = $.useState(v), [j, w] = $.useState(false), [, N] = Ho(), k = Array.from(c.keys());
  let M;
  e[1] !== N ? (M = (Le) => {
    N(Le ? `/file/${Le}` : "/file/");
  }, e[1] = N, e[2] = M) : M = e[2];
  const C = M;
  let E, L;
  e[3] !== f || e[4] !== a ? (E = () => {
    a && f(a);
  }, L = [a, f], e[3] = f, e[4] = a, e[5] = E, e[6] = L) : (E = e[5], L = e[6]), $.useEffect(E, L);
  let A, z;
  e[7] !== o || e[8] !== a || e[9] !== x ? (A = () => {
    if (a) {
      const Le = x.get(a);
      Le !== void 0 ? b(Le) : o != null ? b(o) : b("");
    }
  }, z = [a, o, x], e[7] = o, e[8] = a, e[9] = x, e[10] = A, e[11] = z) : (A = e[10], z = e[11]), $.useEffect(A, z);
  let q, B;
  e[12] !== p || e[13] !== a || e[14] !== x || e[15] !== u ? (q = () => {
    const Le = (nt) => {
      (nt.ctrlKey || nt.metaKey) && nt.key === "s" && (nt.preventDefault(), a && x.has(a) && (u(p), S((Lt) => {
        const Wt = new Map(Lt);
        return Wt.delete(a), Wt;
      })));
    };
    return window.addEventListener("keydown", Le), () => {
      window.removeEventListener("keydown", Le);
    };
  }, B = [a, p, x, u], e[12] = p, e[13] = a, e[14] = x, e[15] = u, e[16] = q, e[17] = B) : (q = e[16], B = e[17]), $.useEffect(q, B);
  let J;
  e[18] !== o || e[19] !== a ? (J = (Le) => {
    b(Le), a && S(Le === o ? (nt) => {
      const Lt = new Map(nt);
      return Lt.delete(a), Lt;
    } : (nt) => new Map(nt).set(a, Le));
  }, e[18] = o, e[19] = a, e[20] = J) : J = e[20];
  const W = J, oe = (Le) => {
    if (S((nt) => {
      const Lt = new Map(nt);
      return Lt.delete(Le), Lt;
    }), c.delete(Le), a === Le) {
      const nt = k.filter((Lt) => Lt !== Le);
      nt.length > 0 ? C(nt[nt.length - 1]) : C(null);
    }
  };
  let ae;
  e[21] !== a || e[22] !== x ? (ae = a ? x.has(a) : false, e[21] = a, e[22] = x, e[23] = ae) : ae = e[23];
  const K = ae, R = "h-screen flex flex-col bg-gray-50 dark:bg-gray-950";
  let G;
  e[24] === Symbol.for("react.memo_cache_sentinel") ? (G = m.jsx(Ia, { path: [["File", null]] }), e[24] = G) : G = e[24];
  let ne;
  e[25] === Symbol.for("react.memo_cache_sentinel") ? (ne = m.jsx("div", { className: "border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-2", children: m.jsxs("div", { className: "flex items-center justify-between", children: [G, m.jsx(al, { href: "/settings", className: Q("p-2 rounded-lg transition-all", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "hover:bg-gray-100 dark:hover:bg-gray-800", "focus:outline-none focus:ring-2 focus:ring-blue-500/20"), children: m.jsx(xa, { className: "w-5 h-5" }) })] }) }), e[25] = ne) : ne = e[25];
  const ue = qn, O = "flex-1";
  let Y;
  e[26] === Symbol.for("react.memo_cache_sentinel") ? (Y = Q("h-full flex flex-col", "bg-gray-50 dark:bg-gray-950", "border-r border-gray-200 dark:border-gray-800"), e[26] = Y) : Y = e[26];
  let re;
  e[27] === Symbol.for("react.memo_cache_sentinel") ? (re = m.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400", children: "Explorer" }), e[27] = re) : re = e[27];
  let te, ce;
  e[28] === Symbol.for("react.memo_cache_sentinel") ? (te = () => w(true), ce = Q("p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700", "text-gray-600 dark:text-gray-400"), e[28] = te, e[29] = ce) : (te = e[28], ce = e[29]);
  let me, de;
  e[30] === Symbol.for("react.memo_cache_sentinel") ? (me = m.jsx("button", { onClick: te, className: ce, title: "New File", children: m.jsx(hj, { className: "w-4 h-4" }) }), de = Q("p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700", "text-gray-600 dark:text-gray-400"), e[30] = me, e[31] = de) : (me = e[30], de = e[31]);
  let Ae;
  e[32] === Symbol.for("react.memo_cache_sentinel") ? (Ae = m.jsx("button", { className: de, title: "New Folder", children: m.jsx(jj, { className: "w-4 h-4" }) }), e[32] = Ae) : Ae = e[32];
  let he;
  e[33] === Symbol.for("react.memo_cache_sentinel") ? (he = Q("p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700", "text-gray-600 dark:text-gray-400"), e[33] = he) : he = e[33];
  let pe;
  e[34] === Symbol.for("react.memo_cache_sentinel") ? (pe = m.jsx(Kj, { className: "w-4 h-4" }), e[34] = pe) : pe = e[34];
  let xe;
  e[35] !== g ? (xe = m.jsx("div", { className: "px-3 py-2 border-b border-gray-200 dark:border-gray-800", children: m.jsxs("div", { className: "flex items-center justify-between", children: [re, m.jsxs("div", { className: "flex items-center gap-1", children: [me, Ae, m.jsx("button", { onClick: g, className: he, title: "Refresh", children: pe })] })] }) }), e[35] = g, e[36] = xe) : xe = e[36];
  let ge;
  if (e[37] !== C || e[38] !== a || e[39] !== i) {
    let Le;
    e[41] !== C || e[42] !== a ? (Le = (nt) => m.jsx(cy, { path: "", node: nt, level: 0, selectedFile: a, onOpen: C }, nt[0]), e[41] = C, e[42] = a, e[43] = Le) : Le = e[43], ge = i.map(Le), e[37] = C, e[38] = a, e[39] = i, e[40] = ge;
  } else ge = e[40];
  let He;
  e[44] !== ge ? (He = m.jsx("div", { className: "flex-1 overflow-y-auto", children: ge }), e[44] = ge, e[45] = He) : He = e[45];
  let Oe;
  e[46] !== xe || e[47] !== He ? (Oe = m.jsx(qn.Pane, { minSize: 200, preferredSize: 256, children: m.jsxs("div", { className: Y, children: [xe, He] }) }), e[46] = xe, e[47] = He, e[48] = Oe) : Oe = e[48];
  const Ve = qn, Je = "h-full flex flex-col bg-white dark:bg-gray-950", tt = k.length > 0 && m.jsx("div", { className: "flex bg-gray-100 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 overflow-x-auto", children: k.map((Le) => {
    const nt = a === Le, Lt = x.has(Le), Wt = Le.split("/").pop() || Le;
    return m.jsxs("div", { className: Q("flex items-center gap-2 px-3 py-2 border-r cursor-pointer group", "border-gray-200 dark:border-gray-800", nt ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" : "bg-gray-100 dark:bg-gray-950 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"), onClick: () => C(Le), children: [m.jsx(Dp, { className: "w-3.5 h-3.5" }), m.jsx("span", { className: "text-sm", children: Wt }), Lt && m.jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full", title: "Unsaved changes" }), m.jsx("button", { onClick: (Vl) => {
      Vl.stopPropagation(), oe(Le);
    }, className: Q("ml-1 p-0.5 rounded", "hover:bg-gray-200 dark:hover:bg-gray-700"), children: m.jsx(x_, { className: "w-3 h-3" }) })] }, Le);
  }) });
  let Qe;
  e[49] !== p || e[50] !== W || e[51] !== a ? (Qe = a ? m.jsx("div", { className: "flex-1 p-0", children: m.jsx(Ip, { value: p, onChange: W, language: "plaintext", height: "calc(100vh - 160px)" }) }) : m.jsx("div", { className: "flex-1 flex items-center justify-center", children: m.jsxs("div", { className: "text-center", children: [m.jsx(mj, { className: "w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" }), m.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "Select a file to edit or create a new one" })] }) }), e[49] = p, e[50] = W, e[51] = a, e[52] = Qe) : Qe = e[52];
  let ct;
  e[53] !== tt || e[54] !== Qe ? (ct = m.jsxs("div", { className: Je, children: [tt, Qe] }), e[53] = tt, e[54] = Qe, e[55] = ct) : ct = e[55];
  let At;
  e[56] !== Ve.Pane || e[57] !== ct ? (At = m.jsx(Ve.Pane, { children: ct }), e[56] = Ve.Pane, e[57] = ct, e[58] = At) : At = e[58];
  let wt;
  e[59] !== ue || e[60] !== Oe || e[61] !== At ? (wt = m.jsxs(ue, { className: O, children: [Oe, At] }), e[59] = ue, e[60] = Oe, e[61] = At, e[62] = wt) : wt = e[62];
  let Yt;
  e[63] === Symbol.for("react.memo_cache_sentinel") ? (Yt = Q("flex items-center justify-between px-4 py-2 border-t", "bg-gray-50 dark:bg-gray-950", "border-gray-200 dark:border-gray-800"), e[63] = Yt) : Yt = e[63];
  const Nn = a ? `Editing: ${a}` : "No file selected";
  let Rt;
  e[64] !== Nn ? (Rt = m.jsx("span", { children: Nn }), e[64] = Nn, e[65] = Rt) : Rt = e[65];
  let gt;
  e[66] !== K || e[67] !== a ? (gt = a && m.jsx("span", { children: K ? "Modified" : "Saved" }), e[66] = K, e[67] = a, e[68] = gt) : gt = e[68];
  let Pt;
  e[69] !== Rt || e[70] !== gt ? (Pt = m.jsxs("div", { className: "flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400", children: [Rt, gt] }), e[69] = Rt, e[70] = gt, e[71] = Pt) : Pt = e[71];
  let Tn;
  e[72] === Symbol.for("react.memo_cache_sentinel") ? (Tn = m.jsx("div", { className: "flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400", children: m.jsx("span", { children: "UTF-8" }) }), e[72] = Tn) : Tn = e[72];
  let ut;
  e[73] !== Pt ? (ut = m.jsxs("div", { className: Yt, children: [Pt, Tn] }), e[73] = Pt, e[74] = ut) : ut = e[74];
  let Nt;
  e[75] !== d || e[76] !== j ? (Nt = j && m.jsx(Z8, { close: () => w(false), create: d }), e[75] = d, e[76] = j, e[77] = Nt) : Nt = e[77];
  let at;
  return e[78] !== ne || e[79] !== wt || e[80] !== ut || e[81] !== Nt ? (at = m.jsxs("div", { className: R, children: [ne, wt, ut, Nt] }), e[78] = ne, e[79] = wt, e[80] = ut, e[81] = Nt, e[82] = at) : at = e[82], at;
}, cy = (t) => {
  const e = F.c(13), { node: a, path: i, level: o, selectedFile: c, onOpen: f } = t, u = a[0], d = a.length > 1 && Array.isArray(a[1]) ? a[1] : void 0, g = i ? `${i}/${u}` : u;
  if (d !== void 0) {
    let p;
    return e[0] !== d || e[1] !== g || e[2] !== o || e[3] !== u || e[4] !== f || e[5] !== c ? (p = m.jsx(X8, { path: g, name: u, children: d, level: o, selectedFile: c, onOpen: f }), e[0] = d, e[1] = g, e[2] = o, e[3] = u, e[4] = f, e[5] = c, e[6] = p) : p = e[6], p;
  } else {
    const p = c === g;
    let b;
    return e[7] !== g || e[8] !== o || e[9] !== u || e[10] !== f || e[11] !== p ? (b = m.jsx(F8, { path: g, name: u, level: o, isSelected: p, onOpen: f }), e[7] = g, e[8] = o, e[9] = u, e[10] = f, e[11] = p, e[12] = b) : b = e[12], b;
  }
}, X8 = (t) => {
  const e = F.c(26), { path: a, name: i, children: o, level: c, selectedFile: f, onOpen: u } = t, [d, g] = $.useState(false);
  let p;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (p = Q("flex items-center gap-1 py-1 px-2 cursor-pointer transition-all", "hover:bg-gray-100 dark:hover:bg-gray-800"), e[0] = p) : p = e[0];
  const b = `${c * 12 + 8}px`;
  let v;
  e[1] !== b ? (v = { paddingLeft: b }, e[1] = b, e[2] = v) : v = e[2];
  let x;
  e[3] !== d ? (x = () => g(!d), e[3] = d, e[4] = x) : x = e[4];
  let S, j;
  e[5] !== d ? (S = m.jsx("span", { className: "w-4 h-4 flex items-center justify-center", children: d ? m.jsx(ih, { className: "w-3 h-3 text-gray-500" }) : m.jsx(Xo, { className: "w-3 h-3 text-gray-500" }) }), j = d ? m.jsx(Rp, { className: "w-4 h-4 text-gray-500" }) : m.jsx(wj, { className: "w-4 h-4 text-gray-500" }), e[5] = d, e[6] = S, e[7] = j) : (S = e[6], j = e[7]);
  let w;
  e[8] !== i ? (w = m.jsx("span", { className: "text-sm select-none text-gray-700 dark:text-gray-300", children: i }), e[8] = i, e[9] = w) : w = e[9];
  let N;
  e[10] !== v || e[11] !== x || e[12] !== S || e[13] !== j || e[14] !== w ? (N = m.jsxs("div", { className: p, style: v, onClick: x, children: [S, j, w] }), e[10] = v, e[11] = x, e[12] = S, e[13] = j, e[14] = w, e[15] = N) : N = e[15];
  let k;
  e[16] !== o || e[17] !== d || e[18] !== c || e[19] !== u || e[20] !== a || e[21] !== f ? (k = d && m.jsx(m.Fragment, { children: o.map((C) => m.jsx(cy, { node: C, path: a, level: c + 1, selectedFile: f, onOpen: u }, C[0])) }), e[16] = o, e[17] = d, e[18] = c, e[19] = u, e[20] = a, e[21] = f, e[22] = k) : k = e[22];
  let M;
  return e[23] !== N || e[24] !== k ? (M = m.jsxs(m.Fragment, { children: [N, k] }), e[23] = N, e[24] = k, e[25] = M) : M = e[25], M;
}, F8 = (t) => {
  const e = F.c(19), { path: a, name: i, level: o, isSelected: c, onOpen: f } = t, u = c && "bg-blue-100 dark:bg-blue-900/30";
  let d;
  e[0] !== u ? (d = Q("flex items-center gap-1 py-1 px-2 cursor-pointer transition-all", "hover:bg-gray-100 dark:hover:bg-gray-800", u), e[0] = u, e[1] = d) : d = e[1];
  const g = `${o * 12 + 8}px`;
  let p;
  e[2] !== g ? (p = { paddingLeft: g }, e[2] = g, e[3] = p) : p = e[3];
  let b;
  e[4] !== f || e[5] !== a ? (b = () => f(a), e[4] = f, e[5] = a, e[6] = b) : b = e[6];
  let v, x;
  e[7] === Symbol.for("react.memo_cache_sentinel") ? (v = m.jsx("span", { className: "w-4 h-4" }), x = m.jsx(Dp, { className: "w-4 h-4 text-gray-500" }), e[7] = v, e[8] = x) : (v = e[7], x = e[8]);
  const S = c ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300";
  let j;
  e[9] !== S ? (j = Q("text-sm select-none", S), e[9] = S, e[10] = j) : j = e[10];
  let w;
  e[11] !== i || e[12] !== j ? (w = m.jsx("span", { className: j, children: i }), e[11] = i, e[12] = j, e[13] = w) : w = e[13];
  let N;
  return e[14] !== w || e[15] !== d || e[16] !== p || e[17] !== b ? (N = m.jsxs("div", { className: d, style: p, onClick: b, children: [v, x, w] }), e[14] = w, e[15] = d, e[16] = p, e[17] = b, e[18] = N) : N = e[18], N;
}, Z8 = (t) => {
  const e = F.c(26), { close: a, create: i } = t, [o, c] = $.useState("");
  let f;
  e[0] !== a || e[1] !== i || e[2] !== o ? (f = () => {
    o && (i(o), c(""), a());
  }, e[0] = a, e[1] = i, e[2] = o, e[3] = f) : f = e[3];
  const u = f;
  let d;
  e[4] === Symbol.for("react.memo_cache_sentinel") ? (d = m.jsx("h3", { className: "text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100", children: "Create New File" }), e[4] = d) : d = e[4];
  let g;
  e[5] === Symbol.for("react.memo_cache_sentinel") ? (g = (C) => c(C.target.value), e[5] = g) : g = e[5];
  let p;
  e[6] === Symbol.for("react.memo_cache_sentinel") ? (p = Q("w-full px-3 py-2 border rounded outline-none", "bg-white dark:bg-gray-900", "text-gray-900 dark:text-gray-100", "border-gray-300 dark:border-gray-600", "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"), e[6] = p) : p = e[6];
  let b;
  e[7] !== a || e[8] !== u ? (b = (C) => {
    C.key === "Enter" && u(), C.key === "Escape" && a();
  }, e[7] = a, e[8] = u, e[9] = b) : b = e[9];
  let v;
  e[10] !== o || e[11] !== b ? (v = m.jsx("input", { type: "text", value: o, onChange: g, placeholder: "Enter file name...", className: p, autoFocus: true, onKeyDown: b }), e[10] = o, e[11] = b, e[12] = v) : v = e[12];
  let x;
  e[13] === Symbol.for("react.memo_cache_sentinel") ? (x = Q("px-4 py-2 rounded", "bg-gray-200 dark:bg-gray-700", "text-gray-700 dark:text-gray-300", "hover:bg-gray-300 dark:hover:bg-gray-600"), e[13] = x) : x = e[13];
  let S;
  e[14] !== a ? (S = m.jsx("button", { onClick: a, className: x, children: "Cancel" }), e[14] = a, e[15] = S) : S = e[15];
  const j = !o;
  let w;
  e[16] === Symbol.for("react.memo_cache_sentinel") ? (w = Q("px-4 py-2 rounded", "bg-blue-600 hover:bg-blue-700 text-white", "disabled:bg-gray-400 disabled:cursor-not-allowed"), e[16] = w) : w = e[16];
  let N;
  e[17] !== u || e[18] !== j ? (N = m.jsx("button", { onClick: u, disabled: j, className: w, children: "Create" }), e[17] = u, e[18] = j, e[19] = N) : N = e[19];
  let k;
  e[20] !== N || e[21] !== S ? (k = m.jsxs("div", { className: "flex justify-end gap-2 mt-4", children: [S, N] }), e[20] = N, e[21] = S, e[22] = k) : k = e[22];
  let M;
  return e[23] !== k || e[24] !== v ? (M = m.jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50", children: m.jsxs("div", { className: "w-96 p-6 rounded-lg shadow-xl bg-white dark:bg-gray-800", children: [d, v, k] }) }), e[23] = k, e[24] = v, e[25] = M) : M = e[25], M;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const K8 = () => {
  const t = F.c(2);
  let e;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = Q("flex flex-col justify-center items-center h-screen", "bg-white dark:bg-gray-900"), t[0] = e) : e = t[0];
  let a;
  return t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = m.jsx("div", { className: e, children: m.jsxs("div", { className: "text-2xl font-bold text-black dark:text-white flex items-center gap-2", children: [m.jsx(Rj, { className: "w-6 h-6" }), "Login"] }) }), t[1] = a) : a = t[1], a;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const I8 = () => {
  const t = F.c(7), { modules: e } = US();
  let a;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = m.jsx(Ia, { path: [["Modules", null]] }), t[0] = a) : a = t[0];
  let i;
  t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsxs("div", { className: "flex items-center justify-between", children: [a, m.jsx(al, { href: "/settings", className: Q("p-2 rounded-lg transition-all", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "hover:bg-gray-100 dark:hover:bg-gray-800", "focus:outline-none focus:ring-2 focus:ring-blue-500/20"), children: m.jsx(xa, { className: "w-5 h-5" }) })] }), t[1] = i) : i = t[1];
  let o;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (o = m.jsxs("div", { className: "text-2xl font-bold text-black dark:text-white flex items-center gap-2", children: [m.jsx($p, { className: "w-6 h-6" }), "Modules"] }), t[2] = o) : o = t[2];
  let c;
  t[3] !== e ? (c = e.map(P8), t[3] = e, t[4] = c) : c = t[4];
  let f;
  return t[5] !== c ? (f = m.jsxs("div", { className: "max-w-3xl mx-auto h-full overflow-hidden flex flex-col gap-4 p-4", children: [i, o, m.jsx("div", { className: "flex flex-col gap-4 overflow-y-auto flex-1", children: c })] }), t[5] = c, t[6] = f) : f = t[6], f;
};
function P8(t) {
  return m.jsx(al, { href: `/module/${t.name}`, className: Q("block p-4 border rounded-lg transition-all", "bg-gray-50 dark:bg-gray-900", "border-gray-300 dark:border-gray-600", "hover:border-blue-500 hover:shadow-md"), children: m.jsxs("div", { className: "flex items-start justify-between", children: [m.jsxs("div", { className: "flex-1", children: [m.jsx("div", { className: "text-lg font-semibold mb-1 text-black dark:text-white", children: t.name }), m.jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: t.description })] }), m.jsx("div", { className: "ml-4 text-black dark:text-white", children: m.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: m.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) })] }) }, t.name);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const W8 = () => {
  const t = F.c(10), { status: e, projs: a } = Np();
  if (e === "connecting") {
    let g;
    return t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = m.jsx("div", { className: "h-screen flex items-center justify-center bg-white dark:bg-gray-950", children: m.jsxs("div", { className: "flex flex-col items-center gap-4", children: [m.jsx(Up, { className: "w-12 h-12 animate-spin text-blue-500" }), m.jsx("div", { className: "text-lg text-gray-600 dark:text-gray-400", children: "Connecting to server..." })] }) }), t[0] = g) : g = t[0], g;
  }
  if (e === "error") {
    let g;
    return t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = m.jsx("div", { className: "h-screen flex items-center justify-center bg-white dark:bg-gray-950", children: m.jsxs("div", { className: "flex flex-col items-center gap-4", children: [m.jsx(Vp, { className: "w-12 h-12 text-red-500" }), m.jsx("div", { className: "text-lg text-gray-600 dark:text-gray-400", children: "Failed to connect to server" }), m.jsx("div", { className: "text-sm text-gray-500", children: "Connection timeout" }), m.jsx("div", { className: "text-sm text-gray-500", children: "Returning to server list in 5 seconds..." })] }) }), t[1] = g) : g = t[1], g;
  }
  if (e === "failed") {
    let g;
    return t[2] === Symbol.for("react.memo_cache_sentinel") ? (g = m.jsx("div", { className: "h-screen flex items-center justify-center bg-white dark:bg-gray-950", children: m.jsxs("div", { className: "flex flex-col items-center gap-4", children: [m.jsx("div", { className: "text-lg text-gray-600 dark:text-gray-400", children: "Not connected to server" }), m.jsx(al, { to: "/", className: "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600", children: "Back to Server List" })] }) }), t[2] = g) : g = t[2], g;
  }
  let i;
  t[3] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsx(Ia, { path: [] }), t[3] = i) : i = t[3];
  let o, c;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (o = m.jsxs("div", { className: "flex items-center justify-between", children: [i, m.jsx(al, { href: "/settings", className: Q("p-2 rounded-lg transition-all", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "hover:bg-gray-100 dark:hover:bg-gray-800", "focus:outline-none focus:ring-2 focus:ring-blue-500/20"), children: m.jsx(xa, { className: "w-5 h-5" }) })] }), c = m.jsx("div", { className: "text-5xl font-bold text-center py-12 text-black dark:text-white", children: "Next Micon IDE" }), t[4] = o, t[5] = c) : (o = t[4], c = t[5]);
  let f, u;
  t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = m.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [m.jsx(Co, { href: "/info", icon: rh, title: "Device Info" }), m.jsx(Co, { href: "/create", icon: gl, title: "New Project" }), m.jsx(Co, { href: "/modules", icon: $p, title: "Modules" }), m.jsx(Co, { href: "/file/", icon: yj, title: "File" })] }), u = m.jsx("div", { className: "text-lg font-semibold text-black dark:text-white", children: "Projects" }), t[6] = f, t[7] = u) : (f = t[6], u = t[7]);
  let d;
  return t[8] !== a ? (d = m.jsxs("div", { className: "max-w-3xl mx-auto h-full overflow-hidden flex flex-col gap-4 p-4 bg-gray-50 dark:bg-gray-950", children: [o, c, f, u, m.jsx(J8, { projs: a })] }), t[8] = a, t[9] = d) : d = t[9], d;
}, Co = (t) => {
  const e = F.c(9), { href: a, icon: i, title: o } = t;
  let c;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (c = Q("rounded-lg p-4 shadow-md border flex items-center gap-3", "bg-gray-100 dark:bg-gray-900", "text-gray-900 dark:text-gray-100", "border-gray-200 dark:border-gray-700", "hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer"), e[0] = c) : c = e[0];
  let f;
  e[1] !== i ? (f = m.jsx(i, { className: "w-5 h-5" }), e[1] = i, e[2] = f) : f = e[2];
  let u;
  e[3] !== o ? (u = m.jsx("div", { className: "text-base font-semibold", children: o }), e[3] = o, e[4] = u) : u = e[4];
  let d;
  return e[5] !== a || e[6] !== f || e[7] !== u ? (d = m.jsxs(al, { href: a, className: c, children: [f, u] }), e[5] = a, e[6] = f, e[7] = u, e[8] = d) : d = e[8], d;
}, J8 = (t) => {
  const e = F.c(4), { projs: a } = t;
  let i;
  e[0] !== a ? (i = a.map(t7), e[0] = a, e[1] = i) : i = e[1];
  let o;
  return e[2] !== i ? (o = m.jsx("div", { className: "flex flex-col gap-4 overflow-y-auto flex-1", children: i }), e[2] = i, e[3] = o) : o = e[3], o;
}, e7 = (t) => {
  const e = F.c(9), { name: a } = t, [, i] = Ho();
  let o;
  e[0] === Symbol.for("react.memo_cache_sentinel") ? (o = Q("py-3 px-4 border shadow-md rounded-lg transition-all cursor-pointer", "bg-gray-100 dark:bg-gray-900", "border-gray-300 dark:border-gray-600", "hover:border-blue-500 hover:shadow-md"), e[0] = o) : o = e[0];
  let c;
  e[1] !== a || e[2] !== i ? (c = () => i(`/project/${a}`), e[1] = a, e[2] = i, e[3] = c) : c = e[3];
  let f;
  e[4] !== a ? (f = m.jsx("div", { className: "text-black dark:text-white", children: a }), e[4] = a, e[5] = f) : f = e[5];
  let u;
  return e[6] !== c || e[7] !== f ? (u = m.jsx("div", { className: o, onClick: c, children: f }), e[6] = c, e[7] = f, e[8] = u) : u = e[8], u;
};
function t7(t, e) {
  return m.jsx(e7, { name: t }, e);
}
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const n7 = () => {
  const t = F.c(13);
  let e;
  t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = m.jsx(Ia, { path: [["Info", null]] }), t[0] = e) : e = t[0];
  let a;
  t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = m.jsxs("div", { className: "flex items-center justify-between", children: [e, m.jsx(al, { href: "/settings", className: Q("p-2 rounded-lg transition-all", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "hover:bg-gray-100 dark:hover:bg-gray-800", "focus:outline-none focus:ring-2 focus:ring-blue-500/20"), children: m.jsx(xa, { className: "w-5 h-5" }) })] }), t[1] = a) : a = t[1];
  let i, o;
  t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = m.jsxs("div", { className: "text-2xl font-bold text-black dark:text-white flex items-center gap-2", children: [m.jsx(rh, { className: "w-6 h-6" }), "Server Information"] }), o = Q("rounded-lg p-5 shadow-md border", "bg-white dark:bg-gray-900", "border-gray-200 dark:border-gray-700"), t[2] = i, t[3] = o) : (i = t[2], o = t[3]);
  let c, f, u, d;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsxs("div", { children: [m.jsx("h2", { className: Q("text-xl font-semibold mb-4", "text-gray-900 dark:text-gray-100"), children: "Server Details" }), m.jsxs("div", { className: Q("grid grid-cols-2 gap-4"), children: [m.jsxs("div", { children: [m.jsx("p", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "Server Type" }), m.jsx("p", { className: Q("font-medium", "text-gray-900 dark:text-gray-100"), children: "NextMicon Server" })] }), m.jsxs("div", { children: [m.jsx("p", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "Version" }), m.jsx("p", { className: Q("font-medium", "text-gray-900 dark:text-gray-100"), children: "v2.1.0" })] }), m.jsxs("div", { children: [m.jsx("p", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "Protocol" }), m.jsx("p", { className: Q("font-medium", "text-gray-900 dark:text-gray-100"), children: "WebSocket" })] }), m.jsxs("div", { children: [m.jsx("p", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "Status" }), m.jsx("p", { className: Q("font-medium", "text-green-600 dark:text-green-400"), children: "Connected" })] })] })] }), f = m.jsx("h3", { className: Q("text-lg font-semibold mb-3", "text-gray-900 dark:text-gray-100"), children: "Resources" }), u = Q("grid grid-cols-2 gap-4"), d = m.jsx("p", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "CPU Usage" }), t[4] = c, t[5] = f, t[6] = u, t[7] = d) : (c = t[4], f = t[5], u = t[6], d = t[7]);
  let g, p;
  t[8] === Symbol.for("react.memo_cache_sentinel") ? (g = m.jsxs("div", { children: [d, m.jsxs("div", { className: "mt-1", children: [m.jsx("div", { className: Q("w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"), children: m.jsx("div", { className: Q("bg-blue-600 h-2 rounded-full"), style: { width: "12%" } }) }), m.jsx("p", { className: Q("text-xs mt-1", "text-gray-900 dark:text-gray-100"), children: "12%" })] })] }), p = m.jsx("p", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "Memory" }), t[8] = g, t[9] = p) : (g = t[8], p = t[9]);
  let b, v;
  t[10] === Symbol.for("react.memo_cache_sentinel") ? (b = m.jsxs("div", { children: [p, m.jsxs("div", { className: "mt-1", children: [m.jsx("div", { className: Q("w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"), children: m.jsx("div", { className: Q("bg-green-600 h-2 rounded-full"), style: { width: "12.8%" } }) }), m.jsx("p", { className: Q("text-xs mt-1", "text-gray-900 dark:text-gray-100"), children: "256 MB / 2 GB" })] })] }), v = m.jsx("p", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "Storage" }), t[10] = b, t[11] = v) : (b = t[10], v = t[11]);
  let x;
  return t[12] === Symbol.for("react.memo_cache_sentinel") ? (x = m.jsxs("div", { className: "max-w-3xl mx-auto flex flex-col gap-4 p-4", children: [a, i, m.jsx("div", { className: o, children: m.jsxs("div", { className: "space-y-6", children: [c, m.jsxs("div", { children: [f, m.jsxs("div", { className: u, children: [g, b, m.jsxs("div", { children: [v, m.jsxs("div", { className: "mt-1", children: [m.jsx("div", { className: Q("w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"), children: m.jsx("div", { className: Q("bg-yellow-600 h-2 rounded-full"), style: { width: "12%" } }) }), m.jsx("p", { className: Q("text-xs mt-1", "text-gray-900 dark:text-gray-100"), children: "1.2 GB / 10 GB" })] })] }), m.jsxs("div", { children: [m.jsx("p", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "Active Projects" }), m.jsx("p", { className: Q("text-2xl font-bold mt-1", "text-gray-900 dark:text-gray-100"), children: "3" })] })] })] }), m.jsxs("div", { children: [m.jsx("h3", { className: Q("text-lg font-semibold mb-3", "text-gray-900 dark:text-gray-100"), children: "Compiler Settings" }), m.jsxs("div", { className: Q("space-y-3"), children: [m.jsxs("div", { className: Q("flex items-center justify-between p-3 rounded-lg", "bg-gray-50 dark:bg-gray-800"), children: [m.jsx("span", { className: Q("font-medium", "text-gray-700 dark:text-gray-300"), children: "Target Device" }), m.jsxs("select", { className: Q("px-3 py-1.5 border rounded outline-none", "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", "border-gray-300 dark:border-gray-600", "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"), children: [m.jsx("option", { children: "iCE40LP8K" }), m.jsx("option", { children: "iCE40HX1K" }), m.jsx("option", { children: "iCE40HX4K" }), m.jsx("option", { selected: true, children: "iCE40HX8K" })] })] }), m.jsxs("div", { className: Q("flex items-center justify-between p-3 rounded-lg", "bg-gray-50 dark:bg-gray-800"), children: [m.jsx("span", { className: Q("font-medium", "text-gray-700 dark:text-gray-300"), children: "Optimization Level" }), m.jsxs("select", { className: Q("px-3 py-1.5 border rounded outline-none", "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", "border-gray-300 dark:border-gray-600", "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"), children: [m.jsx("option", { children: "None" }), m.jsx("option", { selected: true, children: "Standard" }), m.jsx("option", { children: "High" })] })] }), m.jsxs("div", { className: Q("flex items-center justify-between p-3 rounded-lg", "bg-gray-50 dark:bg-gray-800"), children: [m.jsx("span", { className: Q("font-medium", "text-gray-700 dark:text-gray-300"), children: "Clock Frequency" }), m.jsxs("select", { className: Q("px-3 py-1.5 border rounded outline-none", "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", "border-gray-300 dark:border-gray-600", "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"), children: [m.jsx("option", { children: "12 MHz" }), m.jsx("option", { selected: true, children: "16 MHz" }), m.jsx("option", { children: "20 MHz" }), m.jsx("option", { children: "48 MHz" })] })] })] })] }), m.jsxs("div", { children: [m.jsx("h3", { className: Q("text-lg font-semibold mb-3", "text-gray-900 dark:text-gray-100"), children: "Network Configuration" }), m.jsxs("div", { className: Q("space-y-2"), children: [m.jsxs("div", { className: Q("flex justify-between py-2 border-b", "border-gray-200 dark:border-gray-700"), children: [m.jsx("span", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "IP Address" }), m.jsx("span", { className: Q("font-mono text-sm", "text-gray-900 dark:text-gray-100"), children: "192.168.1.100" })] }), m.jsxs("div", { className: Q("flex justify-between py-2 border-b", "border-gray-200 dark:border-gray-700"), children: [m.jsx("span", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "Port" }), m.jsx("span", { className: Q("font-mono text-sm", "text-gray-900 dark:text-gray-100"), children: "5000" })] }), m.jsxs("div", { className: Q("flex justify-between py-2 border-b", "border-gray-200 dark:border-gray-700"), children: [m.jsx("span", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "Max Connections" }), m.jsx("span", { className: Q("font-mono text-sm", "text-gray-900 dark:text-gray-100"), children: "10" })] }), m.jsxs("div", { className: Q("flex justify-between py-2"), children: [m.jsx("span", { className: Q("text-sm", "text-gray-600 dark:text-gray-400"), children: "Active Connections" }), m.jsx("span", { className: Q("font-mono text-sm", "text-gray-900 dark:text-gray-100"), children: "2" })] })] })] })] }) })] }), t[12] = x) : x = t[12], x;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const l7 = () => {
  const t = F.c(40), [e, a] = Ee(Qo);
  let i;
  t[0] !== e || t[1] !== a ? (i = () => {
    a(!e);
  }, t[0] = e, t[1] = a, t[2] = i) : i = t[2];
  const o = i;
  let c;
  t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = m.jsx(Ia, { path: [["Settings", null]] }), t[3] = c) : c = t[3];
  let f;
  t[4] === Symbol.for("react.memo_cache_sentinel") ? (f = m.jsxs("div", { className: "flex items-center justify-between", children: [c, m.jsx(al, { href: "/settings", className: Q("p-2 rounded-lg transition-all", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "hover:bg-gray-100 dark:hover:bg-gray-800", "focus:outline-none focus:ring-2 focus:ring-blue-500/20", "opacity-50 cursor-not-allowed"), children: m.jsx(xa, { className: "w-5 h-5" }) })] }), t[4] = f) : f = t[4];
  let u, d, g, p, b, v;
  t[5] === Symbol.for("react.memo_cache_sentinel") ? (u = m.jsxs("div", { className: "text-2xl font-bold text-black dark:text-white flex items-center gap-2", children: [m.jsx(xa, { className: "w-6 h-6" }), "Settings"] }), d = Q("rounded-lg p-4 shadow-md border", "bg-white dark:bg-gray-900", "border-gray-200 dark:border-gray-700"), g = m.jsx("h2", { className: Q("text-xl font-semibold mb-4", "text-gray-900 dark:text-gray-100"), children: "Theme" }), p = Q("flex items-center gap-4"), b = m.jsx("div", { className: Q("min-w-[120px] font-medium", "text-gray-900 dark:text-gray-100"), children: "Dark Mode" }), v = Q("flex items-center cursor-pointer"), t[5] = u, t[6] = d, t[7] = g, t[8] = p, t[9] = b, t[10] = v) : (u = t[5], d = t[6], g = t[7], p = t[8], b = t[9], v = t[10]);
  let x;
  t[11] !== o ? (x = () => o(), t[11] = o, t[12] = x) : x = t[12];
  let S;
  t[13] === Symbol.for("react.memo_cache_sentinel") ? (S = Q("sr-only"), t[13] = S) : S = t[13];
  let j;
  t[14] !== e || t[15] !== x ? (j = m.jsx("input", { type: "checkbox", checked: e, onChange: x, className: S }), t[14] = e, t[15] = x, t[16] = j) : j = t[16];
  const w = e ? "bg-blue-600" : "bg-gray-300";
  let N;
  t[17] !== w ? (N = Q("relative w-12 h-6 rounded-full transition-colors", w), t[17] = w, t[18] = N) : N = t[18];
  const k = e ? "transform translate-x-6" : "";
  let M;
  t[19] !== k ? (M = Q("absolute top-1 left-1 w-4 h-4 rounded-full transition-transform", "bg-white", k), t[19] = k, t[20] = M) : M = t[20];
  let C;
  t[21] !== M ? (C = m.jsx("div", { className: M }), t[21] = M, t[22] = C) : C = t[22];
  let E;
  t[23] !== N || t[24] !== C ? (E = m.jsx("div", { className: N, children: C }), t[23] = N, t[24] = C, t[25] = E) : E = t[25];
  let L;
  t[26] === Symbol.for("react.memo_cache_sentinel") ? (L = Q("ml-3", "text-gray-600 dark:text-gray-400"), t[26] = L) : L = t[26];
  const A = e ? "Dark" : "Light";
  let z;
  t[27] !== A ? (z = m.jsx("span", { className: L, children: A }), t[27] = A, t[28] = z) : z = t[28];
  let q;
  t[29] !== j || t[30] !== E || t[31] !== z ? (q = m.jsxs("div", { className: d, children: [g, m.jsxs("div", { className: p, children: [b, m.jsxs("label", { className: v, children: [j, E, z] })] })] }), t[29] = j, t[30] = E, t[31] = z, t[32] = q) : q = t[32];
  let B, J, W, oe;
  t[33] === Symbol.for("react.memo_cache_sentinel") ? (B = Q("rounded-lg p-5 shadow-md border", "bg-white dark:bg-gray-900", "border-gray-200 dark:border-gray-700"), J = m.jsx("h2", { className: Q("text-xl font-semibold mb-4", "text-gray-900 dark:text-gray-100"), children: "Other" }), W = Q("flex items-center gap-4"), oe = m.jsx("div", { className: Q("min-w-[120px] font-medium", "text-gray-900 dark:text-gray-100"), children: "GitHub Token" }), t[33] = B, t[34] = J, t[35] = W, t[36] = oe) : (B = t[33], J = t[34], W = t[35], oe = t[36]);
  let ae;
  t[37] === Symbol.for("react.memo_cache_sentinel") ? (ae = m.jsxs("div", { className: B, children: [J, m.jsxs("div", { className: W, children: [oe, m.jsx("input", { type: "text", className: Q("flex-1 px-3 py-2 border rounded outline-none transition-all", "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", "border-gray-300 dark:border-gray-600", "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"), placeholder: "Enter your GitHub token" })] })] }), t[37] = ae) : ae = t[37];
  let K;
  return t[38] !== q ? (K = m.jsxs("div", { className: "max-w-3xl mx-auto flex flex-col gap-4 p-4", children: [f, u, q, ae] }), t[38] = q, t[39] = K) : K = t[39], K;
};
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
const a7 = () => {
  const t = F.c(1);
  LS();
  let e;
  return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = m.jsx("div", { className: "w-screen h-screen bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50", children: m.jsx(ug, { children: m.jsxs(Xb, { children: [m.jsx(Rl, { path: "/", component: W8 }), m.jsx(Rl, { path: "/settings", component: l7 }), m.jsx(Rl, { path: "/info", component: n7 }), m.jsx(Rl, { path: "/login", component: K8 }), m.jsx(Rl, { path: "/file", component: s7 }), m.jsx(Rl, { path: "/file/*", children: i7 }), m.jsx(Rl, { path: "/create", component: E6 }), m.jsx(Rl, { path: "/modules", component: I8 }), m.jsx(Rl, { path: "/project/:proj", children: r7 })] }) }) }), t[0] = e) : e = t[0], e;
};
function s7() {
  return m.jsx(oy, { path: null });
}
function i7(t) {
  const { "*": e } = t;
  return m.jsx(oy, { path: e || null });
}
function r7(t) {
  const { proj: e } = t;
  return m.jsx(Q8, { project: e });
}
var o7 = () => null;
globalThis.jotaiAtomCache = globalThis.jotaiAtomCache || { cache: /* @__PURE__ */ new Map(), get(t, e) {
  return this.cache.has(t) ? this.cache.get(t) : (this.cache.set(t, e), e);
} };
jb.createRoot(document.getElementById("root")).render(m.jsxs($.StrictMode, { children: [m.jsx(o7, {}), m.jsx(a7, {})] }));
