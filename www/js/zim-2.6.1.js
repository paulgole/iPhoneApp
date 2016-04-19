// ZIM js Interactive Media modules by Dan Zen http://danzen.com (c) 2016
// zim.js includes all the basic zim coding modules http://zimjs.com
// free to use - donations welcome of course! http://zimjs.com/donate

function zid(e) {
  return document.getElementById(e)
}

function zss(e) {
  return document.getElementById(e) ? document.getElementById(e).style : void(zon && zog("zim wrap - zss(): id not found"))
}

function zgo(e, t, o) {
  zot(t) && "" != t || "_self" == t ? window.location.href = e : zot(o) ? window.open(e, t) : window.open(e, t, "modal=yes,alwaysRaised=yes")
}

function zum(e) {
  return zot(e) ? void 0 : Number(String(e).replace(/[^\d\.\-]/g, ""))
}

function zot(e) {
  return null == e
}

function zop(e) {
  zot(e) || (e.stopImmediatePropagation && e.stopImmediatePropagation(), window.event && (window.event.cancelBubble = !0))
}

function zil() {
  var e = function(e) {
      e || (e = event), e.keyCode && e.keyCode >= 32 && e.keyCode <= 40 && e.preventDefault()
    },
    t = function(e) {
      e || (e = event), e.preventDefault()
    },
    o = t;
  return window.addEventListener("keydown", e), window.addEventListener("mousewheel", t), window.addEventListener("DOMMouseScroll", o), [e, t, o]
}

function zob(e, t, o, n) {
  if (1 == t.length && t[0].constructor === {}.constructor) {
    var i, r, a = t[0],
      s = zot(o) ? e.toString().split(/\n/, 1)[0].match(/\((.*)\)/)[1].replace(/\s+/g, "").split(",") : o.replace(/\s+/g, "").split(","),
      d = [];
    for (i = 0; i < s.length; i++) r = s[i].split("=")[0], s[i] = r, d.push(a[r]);
    for (i in a) s.indexOf(i) < 0 && zon && zog(e, "bad argument " + i);
    var l;
    return (l = e.prototype.isPrototypeOf(n) ? new(e.bind.apply(e, [null].concat(d))) : e.apply(null, d)) ? l : !0
  }
}
"undefined" == typeof zon && (zon = !1);
var zog = console.log.bind(console);
zon && zog("ZIM WRAP zog zid zss zgo zum zot zop zil zob");
var zim = function(e) {
    return zon && zog("ZIM CODE Module"), e.shuffle = function(e) {
      if (!zot(e)) {
        var t, o, n = e.length;
        if (0 == n) return e;
        for (; --n;) t = Math.floor(Math.random() * (n + 1)), o = e[n], e[n] = e[t], e[t] = o;
        return e
      }
    }, e.rand = function(e, t, o) {
      zot(o) && (o = !0), zot(t) && (t = 0), zot(e) && (e = 0), o && (e > t ? e++ : t > e && t++);
      var n;
      return 0 == e && 0 == t ? Math.random() : (n = 0 == t ? Math.random() * e : Math.min(e, t) + Math.random() * (Math.max(e, t) - Math.min(e, t)), o ? Math.floor(n) : n)
    }, e.copy = function(t) {
      if (null == t || "object" != typeof t) return t;
      if (t instanceof Array) return t.slice(0);
      if (t instanceof Object) {
        copy = {};
        for (var o in t) t.hasOwnProperty(o) && (copy[o] = e.copy(t[o]));
        return copy
      }
    }, e.arraysEqual = function(t, o, n) {
      if (zot(t) || zot(o)) return !1;
      if (zot(n) && (n = !0), t.length != o.length) return !1;
      for (var i = 0; i < t.length; i++)
        if (t[i] instanceof Array && o[i] instanceof Array) {
          if (!e.arraysEqual(t[i], o[i], n)) return !1
        } else {
          if (n && t[i] != o[i]) return !1;
          if (!n) return e.arraysEqual(t.sort(), o.sort(), !0)
        }
      return !0
    }, e.merge = function() {
      var e, t, o = {};
      for (e = 0; e < arguments.length; e++)
        for (t in arguments[e]) arguments[e].hasOwnProperty(t) && (o[t] = arguments[e][t]);
      return o
    }, e.decimals = function(e, t) {
      return zot(e) || 0 == e ? 0 : (zot(t) && (t = 1), Math.round(e * Math.pow(10, t)) / Math.pow(10, t))
    }, e.Damp = function(t, o) {
      var n, i = "startValue, damp";
      return (n = zob(e.Damp, arguments, i, this)) ? n : (this.lastValue = zot(t) ? 0 : t, void(this.damp = zot(o) ? .1 : o))
    }, e.Damp.prototype.convert = function(e) {
      return this.lastValue = this.lastValue + (e - this.lastValue) * this.damp
    }, e.Damp.prototype.immediate = function(e) {
      this.lastValue = e
    }, e.Proportion = function(t, o, n, i, r, a) {
      var s, d = "baseMin, baseMax, targetMin, targetMax, factor, targetRound";
      if (s = zob(e.Proportion, arguments, d, this)) return s;
      zot(n) && (n = 0), zot(i) && (i = 1), zot(r) && (r = 1), zot(a) && (a = !1);
      var l, h, c;
      l = t, this.convert = function(e) {
        return isNaN(e) ? void 0 : (e = Math.max(e, t), e = Math.min(e, o), h = (e - t) / (o - t), c = r > 0 ? n + (i - n) * h : i - (i - n) * h, a && (c = Math.round(c)), c)
      }
    }, e.ProportionDamp = function(t, o, n, i, r, a, s) {
      function d() {
        isNaN(c) || (c = Math.max(c, t), c = Math.min(c, o), u = (c - t) / (o - t), g = i - n, p = a > 0 ? n + g * u : i - g * u, m = p, f = m - z, z += f * v.damp)
      }
      var l, h = "baseMin, baseMax, targetMin, targetMax, damp, factor, targetRound";
      if (l = zob(e.ProportionDamp, arguments, h, this)) return l;
      zot(n) && (n = 0), zot(i) && (i = 1), zot(r) && (r = .1), zot(a) && (a = 1), zot(s) && (s = !1), this.damp = r;
      var c, u, g, p, f, v = this,
        m = 0,
        z = 0;
      c = t, z = n;
      var w = setInterval(d, 20);
      this.immediate = function(e) {
        v.convert(e), d(), z = p, s && (z = Math.round(z))
      }, this.convert = function(e) {
        return c = e, s ? Math.round(z) : z
      }, this.dispose = function() {
        return clearInterval(w), !0
      }
    }, e.Dictionary = function() {
      this.length = 0;
      var e = [],
        t = [];
      this.add = function(o, n) {
        zot(o) || (e.push(o), t.push(n), this.length++)
      }, this.at = function(o) {
        if (!zot(o)) {
          var n = e.indexOf(o);
          return n > -1 ? t[n] : null
        }
      }, this.remove = function(o) {
        if (!zot(o)) {
          var n = e.indexOf(o);
          n > -1 && (e.splice(n, 1), t.splice(n, 1), this.length--)
        }
      }, this.dispose = function() {
        return e = null, t = null, this.length = null, !0
      }
    }, e.scrollX = function(t, o) {
      return e.abstractScroll("X", "Left", t, o)
    }, e.scrollY = function(t, o) {
      return e.abstractScroll("Y", "Top", t, o)
    }, e.abstractScroll = function(t, o, n, i) {
      var r = "X" == t ? "Y" : "X";
      if (zot(n)) {
        var a = 0,
          s = navigator.appName,
          d = navigator.userAgent.indexOf("Safari");
        if (-1 != d || "Safari" == s) var a = 1;
        return a || "CSS1Compat" != document.compatMode ? document.body["scroll" + o] : document.documentElement["scroll" + o]
      }
      if (zot(i)) window.scrollTo(e["scroll" + r](), n);
      else {
        var l = 50;
        l > i && (i = l);
        var h = i / l,
          c = e["scroll" + t](),
          u = n - c,
          g = u / h,
          p = 0,
          f = setInterval(function() {
            p++, c += g, window.scrollTo(e["scroll" + r](), c), p >= h && (window.scrollTo(e["scroll" + r](), n), clearInterval(f))
          }, l)
      }
    }, e.windowWidth = function() {
      return isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth
    }, e.windowHeight = function() {
      return isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight
    }, e.urlEncode = function(e) {
      var e = (e + "").toString();
      return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
    }, e.urlDecode = function(e) {
      return decodeURIComponent((e + "").replace(/\+/g, "%20"))
    }, e.setCookie = function(e, t, o) {
      if (o) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3);
        var i = "; expires=" + n.toGMTString()
      } else var i = "";
      document.cookie = e + "=" + escape(t) + i + "; path=/"
    }, e.getCookie = function(e) {
      var t, o = document.cookie.split(/;\s*/),
        n = new Array;
      for (i = 0; i < o.length; i++) t = o[i].split("="), n[t[0]] = t[1];
      return unescape(n[e])
    }, e.deleteCookie = function(t) {
      e.setCookie(t, "", -1)
    }, e.mobile = function(e) {
      return zot(e) && (e = !0), /ip(hone|od|ad)/i.test(navigator.userAgent) ? "ios" : /android|nexus/i.test(navigator.userAgent) ? "android" : /blackberry/i.test(navigator.userAgent) ? "blackberry" : /nokia|phone|mobile/i.test(navigator.userAgent) ? "windows" : /opera mini|webos/i.test(navigator.userAgent) ? "other" : e && void 0 !== window.orientation ? !0 : !1
    }, e
  }(zim || {}),
  zim = function(e) {
    return zon && zog("ZIM CREATE Module"), e.Ticker = {
      stage: null,
      myUpdate: null,
      myAlways: !1,
      list: [],
      setFPS: function(t, o) {
        zot(t) && (t = 30), zot(o) && (o = 60), createjs.Ticker.framerate = e.mobile() ? t : o
      },
      add: function(t, o) {
        var n = e.Ticker;
        return o && o.update && (n.stage = o), zot(t) || "function" != typeof t ? void zog("zim.Ticker - only add functions") : (n.ticker || (n.ticker = createjs.Ticker.on("tick", n.call)), n.list.push(t), t)
      },
      call: function() {
        for (var t = e.Ticker, o = 0; o < t.list.length; o++) t.list[o]();
        return t.myAlways && e.Ticker.stage ? void t.stage.update() : void(zot(t.update) && !e.OPTIMIZE && t.stage ? t.stage.update() : t.update && t.stage && t.stage.update())
      },
      always: function(t) {
        var o = e.Ticker;
        return zot(t) || !t.update ? void zog("zim.Ticker.always(stage) - needs stage parameter") : (o.myAlways = !0, o.stage = t, void(o.ticker || (o.ticker = createjs.Ticker.on("tick", o.call))))
      },
      remove: function(t) {
        var o = e.Ticker;
        if (zot(t) || "function" != typeof t) return void zog("zim.Ticker - only remove functions");
        var n = o.list.indexOf(t);
        n > -1 && o.list.splice(n, 1), o.myAlways || 0 != o.list.length || (createjs.Ticker.off("tick", o.ticker), o.ticker = null)
      },
      removeAll: function() {
        var t = e.Ticker;
        t.list = [], t.myAlways || 0 != t.list.length || (createjs.Ticker.off("tick", t.ticker), t.ticker = null)
      },
      dispose: function() {
        var t = e.Ticker;
        return t.removeAll(), createjs.Ticker.off("tick", t.ticker), t.update = null, !0
      }
    }, Object.defineProperty(e.Ticker, "update", {
      get: function() {
        return e.Ticker.myUpdate
      },
      set: function(t) {
        var o = e.Ticker;
        return "boolean" != typeof t && (t = null), o.myUpdate = t, o.myUpdate === !1 ? (createjs.Ticker.off("tick", o.ticker), void(o.myAlways = !1)) : void(o.myAlways || o.myUpdate || 0 != o.list.length || createjs.Ticker.off("tick", o.ticker))
      }
    }), e.drag = function(t, o, n, i, r, a, s, d, l, h, c, u, g) {
      function p() {
        y = 0, x = 0, s ? (S = e.boundsToGlobal(t.parent, t.zimDragRect), l && (T = t.zimDragRect)) : (S = t.zimDragRect, l && (T = e.boundsToGlobal(t.parent, t.zimDragRect, !0))), C = t.parent.localToGlobal(t.x, t.y), v(t, C.x, C.y), e.Ticker.stage = t.getStage(), h ? z() : t.zimDragTicker = e.Ticker.add(function() {})
      }

      function f() {
        e.Ticker.remove(t.zimDragTicker)
      }

      function v(o, n, i) {
        if (zot(o) && (o = N ? N : t), o.parent && o.getStage()) {
          if (zot(n) || zot(i)) {
            var r = o.parent.localToGlobal(o.x, o.y);
            y = x = 0, s ? (S = e.boundsToGlobal(o.parent, t.zimDragRect), l && (T = o.zimDragRect)) : (S = t.zimDragRect, l && (T = e.boundsToGlobal(o.parent, t.zimDragRect, !0))), n = r.x, i = r.y, h && (L = o.x, X = o.y, N = o, B.immediate(L), M.immediate(X))
          }
          var a = o.parent.globalToLocal(n, i);
          if (h && u) o.x = a.x - y, o.y = a.y - x;
          else {
            var d = m(o, a.x - y, a.y - x);
            o.x = d.x, o.y = d.y
          }
        }
      }

      function m(e, t, o) {
        if (S)
          if (l) {
            var n = e.getBounds().width,
              i = e.getBounds().height;
            n < T.width ? t = T.x + (T.width - n) / 2 + e.regX : (t - e.regX > T.x && (t = T.x + e.regX), t - e.regX + n < T.x + T.width && (t = T.x + T.width + e.regX - n)), e.height < T.height ? o = T.y + (T.height - i) / 2 + e.regY : (o - e.regY > T.y && (o = T.y + e.regY), o - e.regY + i < T.y + T.height && (o = T.y + T.height + e.regY - i))
          } else {
            var r = e.parent.localToGlobal(t, o);
            t = Math.max(S.x, Math.min(S.x + S.width, r.x)), o = Math.max(S.y, Math.min(S.y + S.height, r.y)), r = e.parent.globalToLocal(t, o), t = r.x, o = r.y
          }
        return {
          x: t,
          y: o
        }
      }

      function z() {
        function o(e, o, n, i, r) {
          Math.abs(e.x - D) < .1 && Math.abs(e.y - G) < .1 ? (t.zimDragMoving = !1, e.x = i, e.y = r, e.dispatchEvent("slidestop")) : (D = o, G = n)
        }
        var n = t.getStage();
        t.zimDragTicker = function() {
          if (N || (N = t), j) {
            var e = N.parent.globalToLocal(n.mouseX, n.mouseY);
            E++, P.push(e.x), I.push(e.y), E >= k ? (Y = P.shift(), R = I.shift()) : (Y = P[0], R = I[0])
          } else {
            if (!t.zimDragMoving) return;
            var i = L + O - Y,
              r = X + A - R;
            if (S) {
              var a = m(N, i, r);
              i = a.x, r = a.y
            }
            if (u) N.x = B.convert(i), N.y = M.convert(r), o(N, N.x, N.y, i, r);
            else {
              var a = m(N, B.convert(i), M.convert(r));
              N.x = a.x, N.y = a.y, o(N, N.x, N.y, N.x, N.y)
            }
          }
        }, e.Ticker.add(t.zimDragTicker)
      }
      var w, b = "obj, rect, overCursor, dragCursor, currentTarget, swipe, localBounds, onTop, surround, slide, slideDamp, slideSnap, reg";
      if (w = zob(e.drag, arguments, b)) return w;
      if (!zot(t) && t.on) {
        t.cursor = zot(n) ? "pointer" : n, zot(o) && (s = !1), zot(r) && (r = !1), zot(a) && (a = !1), zot(s) && (s = !1), zot(d) && (d = !0), zot(l) && (l = !1), zot(h) && (h = !1), zot(c) && (c = .3), zot(u) && (u = !0), zot(g) && (g = !1), e.setSwipe(t, a), t.zimDragRect = o;
        var y, x, C, S, T, j = !1;
        if (t.zimAdded = t.on("added", p, null, !0), t.zimRemoved = t.on("removed", f, null, !0), t.parent && p(), h) {
          var B = new e.Damp(t.x, c),
            M = new e.Damp(t.y, c),
            k = 3,
            E = 0,
            P = [],
            I = [],
            O = t.x,
            A = t.y,
            L = t.x,
            X = t.y,
            Y = t.x,
            R = t.y,
            D = -1e4,
            G = -1e4;
          t.zimDragMoving = !1
        }
        var N;
        return t.zimDown = t.on("mousedown", function(o) {
          if (N = r ? o.currentTarget : o.target, t.zimDragRect && !N.getBounds()) return void zog("zim.drag() - drag object needs bounds set");
          d && (N.parent.setChildIndex(N, N.parent.numChildren - 1), N.getStage().update()), j = !0;
          var n = N.parent.globalToLocal(o.stageX, o.stageY);
          g && (N.x = n.x, N.y = n.y, N.getStage().update()), y = n.x - N.x, x = n.y - N.y, s ? (S = e.boundsToGlobal(N.parent, t.zimDragRect), l && (T = t.zimDragRect)) : (S = t.zimDragRect, l && (T = e.boundsToGlobal(N.parent, t.zimDragRect, !0))), t.cursor = zot(i) ? "move" : i, h && (E = 0, P = [n.x], I = [n.y], D = -1e4, G = -1e4, t.zimDragMoving = !0)
        }, !0), t.zimMove = t.on("pressmove", function(e) {
          j && v(N, e.stageX, e.stageY)
        }, !0), t.zimPosition = v, t.zimUp = t.on("pressup", function(e) {
          if (j && (t.cursor = zot(n) ? "pointer" : n, h)) {
            var o = N.parent.globalToLocal(e.stageX, e.stageY);
            j = !1, O = o.x, A = o.y, L = N.x, X = N.y, B.immediate(N.x), M.immediate(N.y)
          }
        }, !0), t
      }
    }, e.noDrag = function(t) {
      return !zot(t) && t.on ? (t.cursor = "default", e.setSwipe(t, !0), t.off("added", t.zimAdded), t.off("removed", t.zimRemoved), t.off("mousedown", t.zimDown), t.off("pressmove", t.zimMove), t.off("pressup", t.zimUp), e.Ticker && t.zimDragSlide && e.Ticker.remove(t.zimDragSlide), t.zimDragMoving = t.zimAdded = t.zimRemoved = t.zimDown = t.zimMove = t.zimUp = t.zimDragRect = t.zimDragSlide = null, t) : void 0
    }, e.dragRect = function(e, t) {
      return zot(e) || !e.on || zot(t) ? void 0 : (e.zimDragRect = t, e.zimDragMoving = !0, e.zimPosition && e.zimPosition(), e)
    }, e.setSwipe = function(e, t) {
      function o(t) {
        for (var n, i = t.getNumChildren(), r = 0; i > r; r++) n = t.getChildAt(r), n.zimNoSwipe = e.zimNoSwipe, n instanceof createjs.Container && o(n)
      }!zot(e) && e.on && (e.zimNoSwipe = t ? null : !0, e instanceof createjs.Container && o(e))
    }, e.hitTestPoint = function(e, t, o) {
      if (!zot(e) && e.globalToLocal) {
        var n = e.globalToLocal(t, o);
        return e.hitTest(n.x, n.y)
      }
    }, e.hitTestReg = function(e, t) {
      if (!zot(e) && !zot(t) && e.localToLocal && t.localToLocal) {
        var o = t.localToLocal(t.regX, t.regY, e);
        return e.hitTest(o.x, o.y)
      }
    }, e.hitTestRect = function(e, t, o) {
      if (!zot(e) && !zot(t) && e.hitTest && t.getBounds) {
        zot(o) && (o = 0);
        var n = t.getBounds();
        if (!n) return void zog("zim create - hitTestRect():\n please setBounds() on param b object");
        for (var i, r, a, s = 0; o >= s; s++) {
          if (i = n.width * (s + 1) / (o + 1), r = n.height * (s + 1) / (o + 1), a = t.localToLocal(n.x + i, n.y, e), e.hitTest(a.x, a.y)) return !0;
          if (a = t.localToLocal(n.x + n.width, n.y + r, e), e.hitTest(a.x, a.y)) return !0;
          if (a = t.localToLocal(n.x + n.width - i, n.y + n.height, e), e.hitTest(a.x, a.y)) return !0;
          if (a = t.localToLocal(n.x, n.y + n.height - r, e), e.hitTest(a.x, a.y)) return !0
        }
      }
    }, e.hitTestCircle = function(e, t, o) {
      if (!zot(e) && !zot(t) && e.hitTest && t.getBounds) {
        zot(o) && (o = 8);
        var n = t.getBounds();
        if (!n) return void zog("zim create - hitTestCircle():\n please setBounds() on param b object");
        for (var i, r, a, s, d = n.x + n.width / 2, l = n.y + n.height / 2, h = (n.width + n.height) / 2 / 2, c = 0; o > c; c++)
          if (i = c / o * 2 * Math.PI, r = d + h * Math.cos(i), a = l + h * Math.sin(i), s = t.localToLocal(r, a, e), e.hitTest(s.x, s.y)) return !0
      }
    }, e.hitTestBounds = function(t, o, n) {
      function i(e, t) {
        return e.x >= t.x + t.width || e.x + e.width <= t.x || e.y >= t.y + t.height || e.y + e.height <= t.y ? !1 : !0
      }
      if (!zot(t) && !zot(o) && t.getBounds && o.getBounds) {
        var r = !1;
        n && n.graphics && (r = !0);
        var a = t.getBounds(),
          s = o.getBounds();
        if (!a || !s) return void zog("zim create - hitTestBounds():\n please setBounds() on both objects");
        var d = e.boundsToGlobal(t),
          l = e.boundsToGlobal(o);
        if (r) {
          var h = n.graphics;
          h.clear(), h.setStrokeStyle(1).beginStroke("blue"), h.drawRect(d.x, d.y, d.width, d.height), h.beginStroke("green"), h.drawRect(l.x, l.y, l.width, l.height), n.getStage().update()
        }
        return i(d, l)
      }
    }, e.boundsToGlobal = function(e, t, o) {
      if (!zot(e) && e.getBounds) {
        zot(o) && (o = !1);
        var n = e.getBounds();
        if (!n && zot(t)) return void zog("zim create - boundsToGlobal():\n please setBounds() on object (or a rectangle)");
        if (t && (n = t), o) var i = e.globalToLocal(n.x, n.y),
          r = e.globalToLocal(n.x + n.width, n.y),
          a = e.globalToLocal(n.x + n.width, n.y + n.height),
          s = e.globalToLocal(n.x, n.y + n.height);
        else var i = e.localToGlobal(n.x, n.y),
          r = e.localToGlobal(n.x + n.width, n.y),
          a = e.localToGlobal(n.x + n.width, n.y + n.height),
          s = e.localToGlobal(n.x, n.y + n.height);
        var d = Math.min(i.x, r.x, a.x, s.x),
          l = Math.min(i.y, r.y, a.y, s.y),
          h = Math.max(i.x, r.x, a.x, s.x),
          c = Math.max(i.y, r.y, a.y, s.y);
        return new createjs.Rectangle(d, l, h - d, c - l)
      }
    }, e.hitTestGrid = function(e, t, o, n, i, r, a, s, d, l, h, c, u) {
      if (!zot(e) && !c) {
        var g = e.globalToLocal(r, a);
        r = g.x, a = g.y
      }
      zot(s) && (s = 0), zot(d) && (d = 0), zot(l) && (l = 0), zot(h) && (h = 0);
      var p = t / n,
        f = o / i,
        v = Math.min(n - 1, Math.max(0, Math.floor((r - s) / p))),
        m = Math.min(i - 1, Math.max(0, Math.floor((a - d) / f)));
      if (!(r - s > p * (v + 1) - l || p * v > r - s || a - d > f * (m + 1) - h || f * m > a - d)) {
        var z = m * n + v;
        return zot(u) || "index" == u ? z : "col" == u ? v : "row" == u ? m : "array" == u ? [z, v, m] : void 0
      }
    }, e.scale = function(e, t) {
      return !zot(e) && e.scaleX ? (zot(t) && (t = 1), e.scaleX = e.scaleY = t, e) : void 0
    }, e.scaleTo = function(t, o, n, i, r) {
      var a, s = "obj, boundObj, percentX, percentY, type";
      if (a = zob(e.scaleTo, arguments, s)) return a;
      if (zot(t) || !t.getBounds || !t.getBounds()) return void zog("zim create - scaleTo(): please provide an object (with setBounds) to scale");
      if (zot(o) || !o.getBounds || !o.getBounds()) return void zog("zim create - scaleTo(): please provide a boundObject (with setBounds) to scale to");
      if (zot(n) && (n = -1), zot(i) && (i = -1), -1 == n && -1 == i) return t;
      zot(r) && (r = "smallest");
      var d = o.getBounds().width * n / 100,
        l = o.getBounds().height * i / 100;
      if ((-1 == n || -1 == i) && "both" != r && "stretch" != r) return -1 == n ? e.scale(t, l / t.getBounds().height) : e.scale(t, d / t.getBounds().width), t;
      if ("both" == r || "stretch" == r) return t.scaleX = -1 != n ? d / t.getBounds().width : t.scaleX, t.scaleY = -1 != i ? l / t.getBounds().height : t.scaleY, t;
      if ("biggest" == r || "largest" == r || "outside" == r) var h = Math.max(d / t.getBounds().width, l / t.getBounds().height);
      else var h = Math.min(d / t.getBounds().width, l / t.getBounds().height);
      return e.scale(t, h), t
    }, e.move = function(t, o, n, i, r, a, s, d, l, h, c) {
      var u, g = "target, x, y, time, ease, call, params, wait, props, fps, sequence";
      return (u = zob(e.move, arguments, g)) ? u : e.animate(t, {
        x: o,
        y: n
      }, i, r, a, s, d, l, h, c)
    }, e.animate = function(t, o, n, i, r, a, s, d, l, h) {
      function c() {
        if (r && "function" == typeof r && r(a), d.loop) {
          if (!(w > 0)) return;
          if (w > b) return void b++
        }
        z.setPaused(!0), e.Ticker.remove(B)
      }

      function u() {
        T && "function" == typeof T && T(j)
      }
      var g, p = "target, obj, time, ease, call, params, wait, props, fps, sequence";
      if (g = zob(e.animate, arguments, p)) return g;
      if (zot(h) && (h = 0), t instanceof Array)
        for (var f = 0, v = 0; v < t.length; v++) setTimeout(function() {
          var h = t[f];
          f++, e.animate(h, o, n, i, r, a, s, e.copy(d), l)
        }, h * v);
      else if (!zot(t) && t.on && !zot(o) && t.getStage()) {
        var m = n;
        zot(m) && (m = 1e3), zot(i) && (i = "quadInOut"), zot(s) && (s = 0), zot(d) && (d = {
          override: !0
        }), zot(a) && (a = t), zot(o.scale) || (o.scaleX = o.scaleY = o.scale, delete o.scale), e.Ticker.stage = t.getStage();
        var z;
        if (d.loop && !zot(d.count)) {
          var w = d.count;
          delete d.count;
          var b = 1
        }
        var y = 0;
        if (d.loopWait && (y = d.loopWait, delete d.loopWait), d.rewind) {
          if (i) {
            var x = i; - 1 == x.indexOf("InOut") && (-1 != x.indexOf("Out") ? x = x.replace("Out", "In") : -1 != x.indexOf("In") && (x = x.replace("In", "Out")))
          }
          var C = {},
            S = 0;
          for (var v in o) C[v] = t[v];
          if (delete d.rewind, d.rewindWait && (S = d.rewindWait, delete d.rewindWait), d.rewindCall) {
            var T = d.rewindCall,
              j = d.rewindParams;
            zot(j) && (j = t), delete d.rewindCall, delete d.rewindParams, z = createjs.Tween.get(t, d).wait(s).to(o, m, createjs.Ease[i]).call(u).wait(S).to(C, m, createjs.Ease[x]).call(c).wait(y)
          } else z = createjs.Tween.get(t, d).wait(s).to(o, m, createjs.Ease[i]).wait(S).to(C, m, createjs.Ease[x]).call(c).wait(y)
        } else z = createjs.Tween.get(t, d).wait(s).to(o, m, createjs.Ease[i]).call(c).wait(y);
        var B = e.Ticker.add(function() {});
        return zot(l) || createjs.Ticker.setFPS(l), t
      }
    }, e.fit = function(t, o, n, i, r, a) {
      var s, d = "obj, left, top, width, height, inside";
      if (s = zob(e.fit, arguments, d)) return s;
      if (!zot(t) && t.getBounds) {
        if (!t.getBounds()) return void zog("zim create - fit(): please setBounds() on object");
        if (zot(o)) {
          if (!t.getStage()) return void zog("zim create - fit(): please add boundary dimensions or add obj to stage first");
          if (!t.getStage().getBounds()) return void zog("zim create - fit(): please add boundary dimensions or add obj with bounds to stage first");
          var l = t.getStage().getBounds().width,
            h = t.getStage().getBounds().height;
          o = 0, n = 0, i = l, r = h
        }
        zot(a) && (a = !0), t.scaleX = t.scaleY = 1;
        var c, u = i,
          g = r,
          p = t.getBounds().width,
          f = t.getBounds().height;
        c = a ? u / g >= p / f ? g / f : u / p : u / g >= p / f ? u / p : g / f, t.scaleX = t.scaleY = c;
        var v = p * c,
          m = f * c;
        return t.x = t.regX * c + o + (u - v) / 2, t.y = t.regY * c + n + (g - m) / 2, {
          x: t.x,
          y: t.y,
          width: v,
          height: m,
          scale: c,
          bX: o,
          bY: n,
          bWidth: i,
          bHeight: r
        }
      }
    }, e.outline = function(t, o, n) {
      var i, r = "obj, color, size";
      if (i = zob(e.outline, arguments, r)) return i;
      if (zot(t) || !t.getBounds) return void zog("zim create - outline(): please provide object and shape");
      if (!t.getBounds()) return void zog("zim create - outline(): please setBounds() on object");
      if (!t.parent) return void zog("zim create - outline(): object should be on stage first");
      zot(o) && (o = "brown"), zot(n) && (n = 2);
      var a = t.getBounds(),
        s = new createjs.Shape,
        d = t.parent,
        l = t.localToLocal(a.x, a.y, d),
        h = t.localToLocal(a.x + a.width, a.y, d),
        c = t.localToLocal(a.x + a.width, a.y + a.height, d),
        u = (t.localToLocal(a.x, a.y + a.height, d), s.graphics);
      u.s(o).ss(n).r(l.x, l.y, h.x - l.x, c.y - h.y), zero = {
        x: l.x - a.x * t.scaleX,
        y: l.y - a.y * t.scaleY
      };
      var g = 10,
        p = g + 1;
      return u.s("white").ss(n + 2), u.mt(zero.x - p, zero.y + 0).lt(zero.x + p, zero.y + 0), u.mt(zero.x + 0, zero.y - p).lt(zero.x + 0, zero.y + p), u.s(o).ss(n), u.mt(zero.x - g, zero.y + 0).lt(zero.x + g, zero.y + 0), u.mt(zero.x + 0, zero.y - g).lt(zero.x + 0, zero.y + g), u.s("white").ss(n + 2).dc(t.x, t.y, g + 6), u.s(o).ss(n).dc(t.x, t.y, g + 6), t.parent.addChild(s), t.getStage() && t.getStage().update(), t
    }, e.centerReg = function(t, o, n) {
      var i, r = "obj, container";
      if (i = zob(e.centerReg, arguments, r)) return i;
      if (zot(t) || !t.getBounds) return void zog("zim create - centerReg(): please provide object with bounds set");
      if (!zot(o)) {
        if (!o.getBounds) return void zog("zim create - centerReg(): please provide container with bounds set");
        t.x = o.getBounds().width / 2, t.y = o.getBounds().height / 2
      }
      var a = t.getBounds();
      return t.regX = a.x + a.width / 2, t.regY = a.y + a.height / 2, zot(n) && (n = !0), n && o && o.addChild && o.addChild(t), t
    }, e.place = function(t, o) {
      function n() {
        zog(o + ".x = " + Math.round(t.x) + "; " + o + ".y = " + Math.round(t.y) + ";")
      }
      zot(t) || (zot(o) && (o = "obj"), e.drag({
        obj: t,
        currentTarget: !0,
        dragCursor: "crosshair"
      }), zog("place " + o + " - to get new position"), t.on("click", n))
    }, e.expand = function(e, t, o) {
      if (zot(e) || !e.getBounds) return void zog("zim create - expand(): please provide object with bounds set");
      zot(t) && (t = 20), zot(o) && (o = t);
      var n = e.getBounds(),
        i = new createjs.Shape;
      return i.graphics.f("0").r(n.x - t, n.y - o, n.width + 2 * t, n.height + 2 * o), e.hitArea = i, e
    }, e
  }(zim || {}),
  zim = function(e) {
    function t(e, t) {
      t ? (e.mouseChildren = !0, e.mouseEnabled = !0, e._enabled = !0) : (e.mouseChildren = !1, e.mouseEnabled = !1, e._enabled = !1)
    }
    return zon && zog("ZIM BUILD Module"), e.OPTIMIZE = !1, e.ACTIONEVENT = "mousedown", e.Circle = function(t, o, n, i) {
      function r() {
        zot(t) && (t = 50), zot(o) && (o = "black");
        var r = this;
        this.mouseChildren = !1;
        var a = this.shape = new createjs.Shape;
        this.addChild(a);
        var s = a.graphics,
          d = s.beginFill(o).command;
        if (!zot(n)) {
          var l = s.beginStroke(n).command;
          zot(i) && (i = 1);
          var h = s.setStrokeStyle(i).command
        }
        s.dc(0, 0, t), this.width = 2 * t, this.height = 2 * t, this.setBounds(-t, -t, this.width, this.height), this.setFill = function(e) {
          zot(e) || (o = e, d.style = o)
        }, Object.defineProperty(r, "color", {
          get: function() {
            return o
          },
          set: function(e) {
            r.setFill(e)
          }
        }), this.setStroke = function(e) {
          l && !zot(e) && (n = e, l.style = n)
        }, this.setStrokeSize = function(e) {
          h && !zot(e) && (i = e, h.width = i)
        }, this.clone = function() {
          return new e.Circle(t, o, n, i)
        }
      }
      var a, s = "radius, fill, stroke, strokeSize";
      return (a = zob(e.Circle, arguments, s)) ? a : (r.prototype = new createjs.Container, r.prototype.constructor = e.Circle, new r)
    }, e.Rectangle = function(t, o, n, i, r, a) {
      function s() {
        zot(t) && (t = 100), zot(o) && (o = 100), zot(n) && (n = "black"), zot(a) && (a = 0);
        var s = this;
        this.mouseChildren = !1;
        var d = this.shape = new createjs.Shape;
        this.addChild(d);
        var l = d.graphics,
          h = l.beginFill(n).command;
        if (!zot(i)) {
          var c = l.beginStroke(i).command;
          zot(r) && (r = 1);
          var u = l.setStrokeStyle(r).command
        }
        a > 0 ? l.rr(0, 0, t, o, a) : l.r(0, 0, t, o), this.width = t, this.height = o, this.setBounds(0, 0, this.width, this.height), this.setFill = function(e) {
          zot(e) || (n = e, h.style = n)
        }, Object.defineProperty(s, "color", {
          get: function() {
            return n
          },
          set: function(e) {
            s.setFill(e)
          }
        }), this.setStroke = function(e) {
          c && !zot(e) && (i = e, c.style = i)
        }, this.setStrokeSize = function(e) {
          u && !zot(e) && (r = e, u.width = r)
        }, this.clone = function() {
          return new e.Rectangle(t, o, n, i, r, a)
        }
      }
      var d, l = "width, height, fill, stroke, strokeSize, corner";
      return (d = zob(e.Rectangle, arguments, l)) ? d : (s.prototype = new createjs.Container, s.prototype.constructor = e.Rectangle, new s)
    }, e.Triangle = function(t, o, n, i, r, a, s, d) {
      function l() {
        zot(t) && (t = 100), zot(o) && (o = t), zot(n) && (n = t), -1 == n && (n = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2))), zot(i) && (i = "black"), zot(s) && (s = !0), zot(d) && (d = 0), this.mouseChildren = !1;
        var l = this,
          h = [t, o, n];
        if (h.sort(function(e, t) {
            return t - e
          }), aa = h[0], bb = h[1], cc = h[2], aa > bb + cc) return void zog("zim build - Triangle(): invalid triangle lengths");
        var c = this.shape = new createjs.Shape;
        this.addChild(c);
        var u = c.graphics,
          g = u.beginFill(i).command;
        if (!zot(r)) {
          var p = u.beginStroke(r).command;
          zot(a) && (a = 1);
          var f = u.setStrokeStyle(a).command
        }
        u.mt(0, 0), u.lt(t, 0);
        var v, m = 180 * Math.acos((Math.pow(bb, 2) + Math.pow(cc, 2) - Math.pow(aa, 2)) / (2 * bb * cc)) / Math.PI,
          z = 180 * Math.asin(bb * Math.sin(m * Math.PI / 180) / aa) / Math.PI,
          w = 180 - m - z;
        v = n == aa ? m : n == bb ? z : w;
        var b = Math.cos(v * Math.PI / 180) * o,
          y = Math.sin(v * Math.PI / 180) * o;
        this.width = Math.max(t, t - b), this.height = y, this.setBounds(0, 0, this.width, this.height), c.y = this.height, u.lt(t - b, 0 - y), u.cp(), s && (this.regX = this.width / 2, this.regY = this.height / 2 + d), this.setFill = function(e) {
          zot(e) || (i = e, g.style = i)
        }, Object.defineProperty(l, "color", {
          get: function() {
            return i
          },
          set: function(e) {
            l.setFill(e)
          }
        }), this.setStroke = function(e) {
          p && !zot(e) && (r = e, p.style = r)
        }, this.setStrokeSize = function(e) {
          f && !zot(e) && (a = e, f.width = a)
        }, this.clone = function() {
          return new e.Triangle(t, o, n, i, r, a, s, d)
        }
      }
      var h, c = "a, b, c, fill, stroke, strokeSize, center, adjust";
      return (h = zob(e.Triangle, arguments, c)) ? h : (l.prototype = new createjs.Container, l.prototype.constructor = e.Triangle, new l)
    }, e.Label = function(o, n, i, r, a, s, d, l) {
      function h() {
        zot(o) && (o = "LABEL"), "" === o && (o = " "), zot(n) && (n = 36), zot(i) && (i = "arial"), zot(r) && (r = "black"), zot(a) && (a = r), zot(s) && (s = -1), zot(d) && (d = 14), zot(l) && (l = "left");
        var h = this;
        this.mouseChildren = !1;
        var c = this.label = new createjs.Text(String(o), n + "px " + i, r);
        c.textBaseline = "alphabetic", c.textAlign = l, -1 != s && d > 0 && (c.shadow = new createjs.Shadow(s, 3, 3, d)), this.addChild(c);
        var u = new createjs.Shape;
        u.graphics.f("black").r(0, 0, this.getBounds().width, this.getBounds().height), this.hitArea = u, this.width = this.getBounds().width, this.height = this.getBounds().height, "center" == l ? this.setBounds(-this.width / 2, 0, this.width, this.height) : "right" == l ? this.setBounds(-this.width, 0, this.width, this.height) : this.setBounds(0, 0, this.width, this.height), c.y = n - n / 6, Object.defineProperty(h, "text", {
          get: function() {
            var e = " " == c.text ? "" : c.text;
            return e
          },
          set: function(e) {
            zot(e) && (e = " "), c.text = String(e), h.width = h.getBounds().width, h.height = h.getBounds().height, "center" == l ? h.setBounds(-h.width / 2, 0, h.width, h.height) : "right" == l ? h.setBounds(-h.width, 0, h.width, h.height) : h.setBounds(0, 0, h.width, h.height)
          }
        }), Object.defineProperty(h, "color", {
          get: function() {
            return r
          },
          set: function(t) {
            r = t, c.color = r, !e.OPTIMIZE && h.getStage() && h.getStage().update()
          }
        }), Object.defineProperty(h, "rollColor", {
          get: function() {
            return a
          },
          set: function(e) {
            a = e
          }
        }), this._enabled = !0, Object.defineProperty(h, "enabled", {
          get: function() {
            return h._enabled
          },
          set: function(o) {
            t(h, o), c.color = r, h.mouseChildren = !1, !e.OPTIMIZE && h.getStage() && h.getStage().update()
          }
        }), this.showRollColor = function(e) {
          zot(e) && (e = !0), e ? c.color = a : c.color = r, h.getStage() && h.getStage().update()
        }, this.on("mouseover", function(e) {
          h.showRollColor()
        }), this.on("mouseout", function(e) {
          h.showRollColor(!1)
        }), this.clone = function() {
          return new e.Label(h.text, n, i, r, a, s, d)
        }, this.dispose = function() {
          return h.removeAllEventListeners(), !0
        }
      }
      var c, u = "text, size, font, color, rollColor, shadowColor, shadowBlur, align";
      return (c = zob(e.Label, arguments, u)) ? c : (h.prototype = new createjs.Container, h.prototype.constructor = e.Label, new h)
    }, e.Button = function(o, n, i, r, a, s, d, l, h, c, u) {
      function g() {
        function g(e) {
          f.on("mouseout", p), v.color = a, f.label.showRollColor(), f.getStage() && f.getStage().update()
        }

        function p(e) {
          f.off("mouseout", p), v.color = r, f.label.showRollColor(!1), f.getStage() && f.getStage().update()
        }
        zot(o) && (o = 200), zot(n) && (n = 60), zot(r) && (r = "#C60"), zot(a) && (a = "#F93"), zot(s) && (s = null), zot(d) && (d = 1), zot(l) && (l = 20), zot(h) && (h = "rgba(0,0,0,.3)"), zot(c) && (c = 14), zot(u) && (u = 0), zot(i) && (i = "PRESS"), ("string" == typeof i || "number" == typeof i) && (i = new e.Label(i, 36, "arial", "white"));
        var f = this;
        this.mouseChildren = !1, this.cursor = "pointer";
        var v = new e.Rectangle(o, n, r, s, d, l);
        if (this.addChild(v), this.backing = v, u > 0) {
          var m = new createjs.Shape;
          m.graphics.f("#000").r(-u, -u, o + 2 * u, n + 2 * u), this.hitArea = m
        } - 1 != h && c > 0 && (v.shadow = new createjs.Shadow(h, 3, 3, c)), this.setBounds(0, 0, o, n), this.width = o, this.height = n, i.x = (o - i.getBounds().width) / 2 + 1, i.y = (n - i.getBounds().height) / 2 + 2, this.addChild(i), this.label = i, Object.defineProperty(f, "text", {
          get: function() {
            var e = " " == i.text ? "" : i.text;
            return e
          },
          set: function(e) {
            i.text = e, i.x = (o - i.getBounds().width) / 2 + 1, i.y = (n - i.getBounds().height) / 2 + 2
          }
        }), Object.defineProperty(f, "color", {
          get: function() {
            return r
          },
          set: function(t) {
            r = t, v.color = r, !e.OPTIMIZE && f.getStage() && f.getStage().update()
          }
        }), Object.defineProperty(f, "rollColor", {
          get: function() {
            return a
          },
          set: function(e) {
            a = e
          }
        }), this._enabled = !0, Object.defineProperty(f, "enabled", {
          get: function() {
            return f._enabled
          },
          set: function(o) {
            t(f, o), f.mouseChildren = !1, i.color = i.color, !e.OPTIMIZE && f.getStage() && f.getStage().update()
          }
        }), this.on("mouseover", g), this.dispose = function() {
          return f.removeAllEventListeners(), f.removeChild(v), f.removeChild(f.label), f.label.dispose(), v = null, f.label = null, !0
        }
      }
      var p, f = "width, height, label, color, rollColor, borderColor, borderThickness, corner, shadowColor, shadowBlur, hitPadding";
      return (p = zob(e.Button, arguments, f)) ? p : (g.prototype = new createjs.Container, g.prototype.constructor = e.Button, new g)
    }, e.CheckBox = function(o, n, i, r, a, s) {
      function d() {
        function d(e) {
          l = !l, h.setChecked(l), h.dispatchEvent("change")
        }
        zot(o) && (o = 60), zot(n) && (n = null), ("string" == typeof n || "number" == typeof n) && (n = new e.Label(n, 5 * o / 6, "arial", r));
        var l = zot(i) ? !1 : i;
        zot(r) && (r = "black"), zot(a) && (a = 10), "box" != s && "square" != s && "x" != s && (s = "check"), this.setBounds(-a, -a, o + 2 * a, o + 2 * a);
        var h = this;
        this.cursor = "pointer";
        var c = new createjs.Shape,
          u = c.graphics;
        u.f("rgba(255,255,255,.5)").r(0, 0, o, o), u.s(r).ss(o / 10).r(o / 7, o / 7, o - o / 7 * 2, o - o / 7 * 2), this.addChild(c);
        var g = o;
        n && (this.addChild(n), n.x = 1.3 * o + a, n.y = o / 8, this.label = n, this.setBounds(-a, -a, o + 3 * a + n.getBounds().width, Math.max(o + 2 * a, n.getBounds().height)), g = n.x + n.width);
        var p = new createjs.Shape;
        u = p.graphics, u.f("rgba(0,0,0,.01)").r(this.getBounds().x, this.getBounds().y, g + 2 * a, this.getBounds().height), this.hitArea = p;
        var f = new createjs.Shape,
          v = f.graphics,
          m = "#000";
        "check" == s ? v.f(m).p("AnQAdICBiaIEEDZIF8nfICfB4In/KPg") : "box" == s || "square" == s ? v.f(m).dr(-35, -35, 70, 70) : v.f(m).p("AmJEVIEUkTIkXkWIB4h5IEWEYIETkTIB4B3IkTESIEQERIh4B4IkRkRIkSEVg");
        var z = 95;
        f.setBounds(-z / 2, -z / 2, z, z);
        var w = o / (z + 66);
        f.scaleX = f.scaleY = w, f.alpha = .9, f.x = o / 2, f.y = o / 2, l && this.addChild(f), this.on("mousedown" == e.ACTIONEVENT ? "mousedown" : "click", d), Object.defineProperty(h, "checked", {
          get: function() {
            return l
          },
          set: function(e) {
            h.setChecked(e)
          }
        }), Object.defineProperty(h, "text", {
          get: function() {
            return n ? n.text : void 0
          },
          set: function(t) {
            n && (n.text = t, !e.OPTIMIZE && h.getStage() && h.getStage().update())
          }
        }), Object.defineProperty(f, "color", {
          get: function() {
            return m
          },
          set: function(t) {
            l && h.removeChild(f), f = new createjs.Shape, v = f.graphics, m = t, v.f(m).p("AnQAdICBiaIEEDZIF8nfICfB4In/KPg"), f.scaleX = f.scaleY = w, f.alpha = .9, f.x = o / 2, f.y = o / 2, l && h.addChild(f), !e.OPTIMIZE && h.getStage() && h.getStage().update()
          }
        }), Object.defineProperty(h, "check", {
          get: function() {
            return f
          },
          set: function(e) {
            zog("ZIM CheckBox - check is read only")
          }
        }), this._enabled = !0, Object.defineProperty(h, "enabled", {
          get: function() {
            return h._enabled
          },
          set: function(e) {
            t(h, e)
          }
        }), this.setChecked = function(t) {
          zot(t) && (t = !0), l = t, l ? h.addChild(f) : h.removeChild(f), !e.OPTIMIZE && h.getStage() && h.getStage().update()
        }, this.dispose = function() {
          return h.removeAllEventListeners(), !0
        }
      }
      var l, h = "size, label, startChecked, color, margin, type";
      return (l = zob(e.CheckBox, arguments, h)) ? l : (d.prototype = new createjs.Container, d.prototype.constructor = e.CheckBox, new d)
    }, e.RadioButtons = function(o, n, i, r, a, s, d) {
      function l() {
        function l(e) {
          var t = p.getChildIndex(e.target);
          d && u.selectedIndex == t || (u.setSelected(t), u.dispatchEvent("change"))
        }

        function h() {
          for (var t, s = !1, d = n.length - 1; d >= 0; d--) t = n[d], t.selected && t.selected === !0 && (s ? t.selected = "false" : (s = !0, u.id = t.id));
          p.removeAllChildren();
          for (var l, h = 0, d = 0; d < n.length; d++) {
            if (t = n[d], "string" == typeof t || "number" == typeof t) {
              var f = {
                selected: !1,
                label: new e.Label(t, 5 * o / 6, "arial", r)
              };
              t = f
            }(t.label && "string" == typeof t.label || "number" == typeof t.label) && (t.label = new e.Label(t.label, 5 * o / 6, "arial", r)), u.labels.push(t.label), t.index = d, l = c(t.selected, t.label), l.obj = t, t.selected && (g = l.obj), p.addChild(l), i ? (l.y = h, h += l.getBounds().height + a) : (l.x = h, h += l.getBounds().width + a)
          }
        }

        function c(t, n) {
          var i = new createjs.Container;
          i.mouseChildren = !1, i.setBounds(-s, -s, o + 2 * s, o + 2 * s);
          var a = new createjs.Shape,
            d = a.graphics;
          d.f("rgba(255,255,255,.5)").dc(o / 2, o / 2, o / 1.85), d.s(r).ss(o / 9).dc(o / 2, o / 2, o / 2 - o / 2 / 5), i.addChild(a);
          var l = i.check = new e.Circle(o / 5.2);
          u.dots.push(l), l.mouseEnabled = !1, l.alpha = .95, l.regX = l.regY = -o / 2;
          var h = o;
          n && (i.addChild(n), n.x = i.getBounds().width, n.y = o / 8, i.setBounds(-s, -s, o + 2 * s + n.getBounds().width, Math.max(o + 2 * s, n.getBounds().height)), h = n.x + n.width), t && (i.addChild(l), u.label = n, u.label && (u.text = n.text));
          var c = new createjs.Shape;
          return d = c.graphics, d.f("rgba(0,0,0,.01)").r(i.getBounds().x, i.getBounds().y, h + 2 * s, i.getBounds().height), i.hitArea = c, i
        }
        if (zot(o) && (o = 60), o = Math.max(5, o), !zot(n)) {
          zot(i) && (i = !0),
            zot(r) && (r = "#111"), zot(a) && (a = i ? .2 * o : o), zot(s) && (s = o / 5);
          var u = this;
          this.cursor = "pointer", this.labels = [], this.dots = [];
          var g, p = new createjs.Container;
          this.addChild(p), p.on("mousedown" == e.ACTIONEVENT ? "mousedown" : "click", l), h();
          this.getBounds() || this.setBounds(0, 0, o, o), this.setBounds(-s, -s, this.getBounds().width + s, this.getBounds().height + s), this.setSelected = function(t) {
            if (zot(t) && (t = -1), -1 == t || p.getChildAt(t)) {
              for (var o, n = 0; n < p.getNumChildren(); n++) o = p.getChildAt(n), o.removeChild(o.check);
              if (t >= 0) {
                o = p.getChildAt(t);
                var i = -2;
                g && (i = g.index), g = o.obj
              } - 1 == t || i == g.index ? (g = null, u.id = null, u.label = null, u.text = "") : (o.addChild(o.check), u.id = g.id, u.label = g.label, u.label && (u.text = u.label.text)), !e.OPTIMIZE && u.getStage() && u.getStage().update()
            }
          }, Object.defineProperty(u, "selected", {
            get: function() {
              return g
            },
            set: function(e) {
              zog("ZIM RadioButton - selected is read only")
            }
          }), Object.defineProperty(u, "selectedIndex", {
            get: function() {
              return g ? g.index : -1
            },
            set: function(e) {
              var t = e;
              d && u.selectedIndex == t || u.setSelected(t)
            }
          }), this._enabled = !0, Object.defineProperty(u, "enabled", {
            get: function() {
              return u._enabled
            },
            set: function(e) {
              t(u, e)
            }
          }), this.dispose = function() {
            return u.removeAllEventListeners(), !0
          }
        }
      }
      var h, c = "size, buttons, vertical, color, spacing, margin, always";
      return (h = zob(e.RadioButtons, arguments, c)) ? h : (l.prototype = new createjs.Container, l.prototype.constructor = e.RadioButtons, new l)
    }, e.Pane = function(t, o, n, i, r, a, s, d, l, h, c, u, g) {
      function p() {
        function p() {
          t.removeChild(z), s && (isNaN(z.resetX) || (z.x = z.resetX), isNaN(z.resetY) || (z.y = z.resetY))
        }

        function f(e, i) {
          return e = Math.max(o / 2, Math.min(t.getBounds().width - o / 2, e)), i = Math.max(n / 2, Math.min(t.getBounds().height - n / 2, i)), {
            x: e,
            y: i
          }
        }
        if (zot(t) || !t.getBounds) return void zog("zim build - Pane(): Please pass in a reference to a container with bounds set as first parameter");
        if (!t.getBounds()) return void zog("zim build - Pane(): Please give the container bounds using setBounds()");
        if (zot(t.getStage)) return void zog("zim build - Pane(): Please give the container that has a stage property");
        zot(o) && (o = 200), zot(n) && (n = 200), zot(i) && (i = null), ("string" == typeof i || "number" == typeof i) && (i = new e.Label(i, 40, "arial", "black")), zot(r) && (r = "white"), zot(a) && (a = !1), zot(s) && (s = !0), zot(d) && (d = !0), zot(l) && (l = 20), zot(h) && (h = .14), zot(c) && (c = "rgba(0,0,0,.3)"), zot(u) && (u = 20), zot(g) && (g = !0);
        var v = this.backing = new createjs.Shape,
          m = v.graphics;
        m.beginFill("black"), m.drawRect(-5e3, -5e3, 1e4, 1e4), this.setBounds(-o / 2, -n / 2, o, n), v.alpha = h;
        var z = this;
        v.on("mousedown" == e.ACTIONEVENT ? "mousedown" : "click", function(e) {
          p(), t.getStage().update(), z.dispatchEvent("close"), e.stopImmediatePropagation()
        }), v.on("mousedown", function(e) {
          e.stopImmediatePropagation()
        }), d && this.addChild(v);
        var w = this.display = new createjs.Shape;
        if (w.setBounds(0, 0, o, n), w.regX = o / 2, w.regY = n / 2, m = w.graphics, m.beginFill(r), m.drawRoundRect(0, 0, o, n, l), -1 != c && u > 0 && (w.shadow = new createjs.Shadow(c, 8, 8, u)), w.on("click", function(e) {
            e.stopImmediatePropagation()
          }), this.resetX, this.resetY, a) {
          w.cursor = "pointer";
          var b, y;
          w.on("mousedown", function(e) {
            isNaN(z.resetX) && (z.resetX = z.x), isNaN(z.resetY) && (z.resetY = z.y), b = e.stageX - z.x, y = e.stageY - z.y, w.cursor = "move"
          }), w.on("pressmove", function(e) {
            var o = f(e.stageX - b, e.stageY - y);
            z.x = o.x, z.y = o.y, t.getStage().update()
          }), this.on("pressup", function(e) {
            w.cursor = "pointer", t.getStage().update()
          })
        }
        this.addChild(w), i && (g && (i.x = -i.getBounds().width / 2 - i.getBounds().x, i.y = -i.getBounds().height / 2 - i.getBounds().y), this.addChild(i), this.label = i, this.text = i.text), Object.defineProperty(z, "text", {
          get: function() {
            var e = " " == i.text ? "" : i.text;
            return e
          },
          set: function(e) {
            i.text = e, g && (i.x = -i.getBounds().width / 2, i.y = -i.getBounds().height / 2)
          }
        }), this.hide = function() {
          p(), e.OPTIMIZE || t.getStage().update()
        }, this.show = function() {
          g && isNaN(z.resetX) && (z.x = t.getBounds().width / 2, z.y = t.getBounds().height / 2), t.addChild(z), t.getStage() && t.getStage().update()
        }, this.dispose = function() {
          return w.removeAllEventListeners(), z.removeChild(w), w = null, !0
        }
      }
      var f, v = "container, width, height, label, color, drag, resets, modal, corner, backingAlpha, shadowColor, shadowBlur, center";
      return (f = zob(e.Pane, arguments, v)) ? f : (p.prototype = new createjs.Container, p.prototype.constructor = e.Pane, new p)
    }, e.Waiter = function(t, o, n, i, r, a, s) {
      function d() {
        if (zot(t) || !t.getBounds) return void zog("zim build - Waiter(): Please pass in a reference to a container with bounds set as first parameter");
        if (!t.getBounds()) return void zog("zim build - Waiter(): Please give the container bounds using setBounds()");
        if (zot(t.getStage)) return void zog("zim build - Waiter(): Please give the container that has a stage property");
        zot(o) && (o = 600), zot(n) && (n = "orange"), zot(i) && (i = "white"), zot(r) && (r = 16), zot(a) && (a = "rgba(0,0,0,.3)"), zot(s) && (s = 14);
        var e = 40,
          d = 3,
          l = .6 * e / 2,
          h = (e - 2 * l) / 2,
          c = d * (2 * l + h) + h;
        this.setBounds(-c / 2, -e / 2, c, e);
        var u = this,
          g = this.display = new createjs.Shape;
        this.addChild(g), g.setBounds(0, 0, c, e), g.regX = c / 2, g.regY = e / 2;
        var p = g.graphics;
        p.f(n), p.rr(0, 0, c, e, r), -1 != a && s > 0 && (g.shadow = new createjs.Shadow(a, 3, 3, s)), g.on("click", function(e) {
          e.stopImmediatePropagation()
        });
        var f = new createjs.Container;
        this.addChild(f);
        for (var v, m = 0; d > m; m++) v = new createjs.Shape, v.graphics.f(i).dc(0, 0, l), v.x = (m - (d - 1) / 2) * (2 * l + h), f.addChild(v), v.cache(-l, -l, 2 * l, 2 * l), v.alpha = 0;
        t.getStage().update(), this.hide = function() {
          createjs.Tween.get(u, {
            override: !0
          }).to({
            alpha: 0
          }, 300).call(function() {
            createjs.Ticker.off("tick", u.ticker), t.removeChild(u), t.getStage().update()
          })
        }, this.show = function() {
          for (var e, n = 0, i = 0; i < f.getNumChildren(); i++) u.alpha = 0, createjs.Tween.get(u, {
            override: !0
          }).to({
            alpha: 1
          }, 300), setTimeout(function() {
            e = f.getChildAt(n), createjs.Tween.get(e, {
              loop: !0
            }).to({
              alpha: 1
            }, o / d / 2).wait(o / d).to({
              alpha: 0
            }, o / d).wait(o - o / d - o / d / 2), n++
          }, i * o / d);
          u.ticker = createjs.Ticker.on("tick", function() {
            t.getStage().update()
          }), u.x = t.getBounds().width / 2, u.y = t.getBounds().height / 2, t.addChild(u), t.getStage().update()
        }, this.dispose = function() {
          return g.removeAllEventListeners(), u.removeChild(g), u.removeChild(f), g = null, f = null, !0
        }
      }
      var l, h = "container, speed, color, circleColor, corner, shadowColor, shadowBlur";
      return (l = zob(e.Waiter, arguments, h)) ? l : (d.prototype = new createjs.Container, d.prototype.constructor = e.Waiter, new d)
    }, e.Indicator = function(t, o, n, i, r, a, s, d, l, h, c, u, g, p) {
      function f() {
        function f(t) {
          t >= n && (t = -1);
          for (var o, a = 0; n > a; a++) o = l && t > a ? i : r, a == t && (o = i), b.getChildAt(a).color = o;
          !e.OPTIMIZE && m.getStage() && m.getStage().update()
        }
        zot(t) && (t = 300), zot(o) && (o = 50), zot(n) && (n = 6), zot(i) && (i = "#f58e25"), zot(r) && (r = "#666"), 0 > r && (r = "rgba(0,0,0,.01)"), 0 > a && (a = null), zot(s) && (s = -1), zot(d) && (d = "dot"), zot(l) && (l = !1), zot(h) && (h = 1), zot(c) && (c = 1), zot(u) && (u = !1), zot(g) && (g = "rgba(0,0,0,.3)"), zot(p) && (p = 5);
        var v = "mousedown" == e.ACTIONEVENT ? "mousedown" : "click",
          m = this;
        this.width = t, this.height = o, this.lights = [];
        var z;
        new createjs.Container;
        if (-1 != s) {
          var w = new e.Rectangle(t, o, s);
          this.addChild(w), this.backing = w
        }
        var b = this.lightsContainer = new createjs.Container;
        this.addChild(b);
        var y = new createjs.Shape;
        y.graphics.f("black").dr(-o / 2, -o / 2, o, o);
        for (var x, C, S = t / (n + 1), T = 0; n > T; T++) {
          if ("square" == d || "box" == d) {
            var C = .5 * o;
            x = new e.Rectangle(C, C, r, a), x.regX = x.width / 2, x.regY = x.height / 2
          } else {
            var C = .5 * o;
            x = new e.Circle(C / 2, r, a)
          }
          this.lights.push(x), x.znum = T, x.hitArea = y, x.scaleX = x.scaleY = c, x.x = S + S * T, x.y = o / 2, b.addChild(x)
        }
        if (b.setBounds(0, 0, t, o), b.regX = b.x = t / 2, b.regY = b.y = o / 2, this.addChild(b), -1 != g && p > 0 && (b.shadow = new createjs.Shadow(g, 2, 2, p)), u) {
          b.cursor = "pointer";
          b.on(v, function(e) {
            z != e.target.znum && m.dispatchEvent("changed"), z = e.target.znum, f(z)
          })
        }
        b.scaleX = b.scaleY = h, Object.defineProperty(this, "selectedIndex", {
          get: function() {
            return z
          },
          set: function(e) {
            z = Math.floor(e), f(z)
          }
        }), Object.defineProperty(this, "num", {
          get: function() {
            return n
          },
          set: function(e) {
            zon && zog("num is read only")
          }
        }), this.dispose = function() {
          return m.removeAllEventListeners(), !0
        }
      }
      var v, m = "width, height, num, color, offColor, borderColor, backingColor, type, fill, scale, lightScale, press, shadowColor, shadowBlur";
      return (v = zob(e.Indicator, arguments, m)) ? v : (f.prototype = new createjs.Container, f.prototype.constructor = e.Indicator, new f)
    }, e.Stepper = function(o, n, i, r, a, s, d, l, h, c, u, g) {
      function p() {
        function p(e) {
          var t = v + e;
          if (u) t > o.length - 1 && (t = 0), 0 > t && (t = o.length - 1);
          else {
            if (t > o.length - 1) return void(g && (S.cursor = "default"));
            if (g && (S.cursor = "pointer"), 0 > t) return
          }
          f(t), z.dispatchEvent("change")
        }

        function f(t) {
          v = t, g && (a.text = o[v], a.x = S.x + S.getBounds().width / 2, a.y = S.y + (S.getBounds().height - a.getBounds().height) / 2), y.alpha = 1, C.setFill(i), y.cursor = "pointer", T.alpha = 1, B.setFill(i), T.cursor = "pointer", u || (0 == v && (y.alpha = .8, C.setFill("#aaa"), y.cursor = "default"), v == o.length - 1 && (T.alpha = .8, B.setFill("#aaa"), T.cursor = "default")), !e.OPTIMIZE && T.getStage() && T.getStage().update()
        }
        zot(o) && (o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), zot(n) && (n = 200), zot(i) && (i = "white"), zot(r) && (r = null), zot(a) && (a = ""), ("string" == typeof a || "number" == typeof a) && (a = new e.Label(a, 64, "arial", "#555", null, null, null, "center")), zot(s) && (s = !1), zot(d) && (d = !0), zot(l) && (l = 16), zot(h) && (h = "rgba(0,0,0,.3)"), zot(c) && (c = 14), zot(u) && (u = !1), zot(g) && (g = !0);
        var v, m = "mousedown" == e.ACTIONEVENT ? "mousedown" : "click",
          z = this,
          w = 100,
          b = w / 4;
        this.label = a, a.mouseChildren = !1, a.mouseEnabled = !1;
        var y = this.prev = new createjs.Container;
        this.addChild(y);
        var x = new createjs.Shape;
        x.graphics.f("rgba(255,255,255,.11)").r(0, 0, 1.5 * w, 1.5 * w), x.regX = 1.5 * w / 2, x.regY = 1.5 * w / 2 + b / 2, y.hitArea = x;
        var C = this.arrowPrev = new e.Triangle(w, .8 * w, .8 * w, i);
        if (-1 != h && c > 0 && (y.shadow = new createjs.Shadow(h, 3, 3, c)), y.addChild(C), y.cursor = "pointer", y.on(m, function(e) {
            p(-1)
          }), s ? (y.rotation = 180, y.x = n / 2, g ? y.y = y.getBounds().height + b + w + y.getBounds().height / 2 + b : y.y = 2 * y.getBounds().height) : (y.rotation = -90, y.x = y.getBounds().height / 2, y.y = y.getBounds().width / 2), g) {
          var S = this.textBox = new createjs.Shape;
          S.cursor = "pointer", this.addChild(S), S.setBounds(0, 0, n, w), null != r && S.graphics.s(r).ss(1.5), S.graphics.f(i).rr(0, 0, n, w, l), -1 != h && c > 0 && (S.shadow = new createjs.Shadow(h, 3, 3, c)), s ? S.y = C.height + b : S.x = C.height + b, this.addChild(a), o.length > 0 && (v = 0, a.text = o[v]), a.x = 50 + S.x + S.getBounds().width / 2, a.y = S.y + (S.getBounds().height - a.getBounds().height) / 2
        } else o.length > 0 && (v = 0);
        var T = this.next = new createjs.Container;
        this.addChild(T);
        var j = new createjs.Shape;
        j.graphics.f("rgba(255,255,255,.01)").r(0, 0, 1.5 * w, 1.5 * w), j.regX = 1.5 * w / 2, j.regY = 1.5 * w / 2 + b / 2, T.hitArea = j;
        var B = this.arrowNext = new e.Triangle(w, .8 * w, .8 * w, i); - 1 != h && c > 0 && (T.shadow = new createjs.Shadow(h, 3, 3, c)), T.addChild(B), T.cursor = "pointer", T.on(m, function(e) {
          p(1)
        }), g && S.on(m, function(e) {
          p(1)
        }), s ? (T.rotation = 0, T.x = n / 2, T.y = T.getBounds().height / 2) : (T.rotation = 90, g ? T.x = S.x + S.getBounds().width + T.getBounds().height / 2 + b : T.x = y.x + y.getBounds().width, T.y = T.getBounds().width / 2), this.width = this.getBounds().width, this.height = this.getBounds().height, f(v), Object.defineProperty(this, "currentIndex", {
          get: function() {
            return v
          },
          set: function(e) {
            e = Math.min(o.length - 1, Math.max(0, e)), e != z.currentIndex && f(v = e)
          }
        }), Object.defineProperty(this, "currentValue", {
          get: function() {
            return o[v]
          },
          set: function(e) {
            o.indexOf(e) > -1 && (e = o.indexOf(e)), e != z.currentIndex && f(v = e)
          }
        }), Object.defineProperty(this, "loop", {
          get: function() {
            return u
          },
          set: function(e) {
            u = e, f(v)
          }
        }), Object.defineProperty(this, "stepperArray", {
          get: function() {
            return o
          },
          set: function(e) {
            o = e
          }
        }), this._enabled = !0, Object.defineProperty(z, "enabled", {
          get: function() {
            return z._enabled
          },
          set: function(o) {
            t(z, o), o ? f(z.currentIndex) : (y.alpha = .8, C.setFill("#aaa"), y.cursor = "default", T.alpha = .8, B.setFill("#aaa"), T.cursor = "default", g && (a.mouseChildren = !1), g && (a.mouseEnabled = !1)), !e.OPTIMIZE && T.getStage() && T.getStage().update()
          }
        }), d && (this.keyDownEvent = function(e) {
          if (e || (e = event), e.keyCode >= 37 && e.keyCode <= 40) {
            38 == e.keyCode || 39 == e.keyCode ? p(1) : (37 == e.keyCode || 40 == e.keyCode) && p(-1)
          }
        }, window.addEventListener("keydown", this.keyDownEvent)), this.next = function() {
          p(1)
        }, this.prev = function() {
          p(-1)
        }, this.dispose = function() {
          return z.removeAllEventListeners(), !0
        }
      }
      var f, v = "list, width, color, strokeColor, label, vertical, arrows, corner, shadowColor, shadowBlur, loop, display";
      return (f = zob(e.Stepper, arguments, v)) ? f : (p.prototype = new createjs.Container, p.prototype.constructor = e.Stepper, new p)
    }, e.Slider = function(o, n, i, r, a, s, d, l, h, c) {
      function u() {
        function u(e) {
          return 0 == i ? e : Math.round(e / i) * i
        }

        function g(t) {
          var i = m.globalToLocal(t.stageX, t.stageY),
            a = p(i.x - E, i.y - P, y);
          l ? (r.x = a.x, z = u((a.y - y.y) / y.height * (n - o)), r.y = y.y + z * y.height / (n - o), z += o, r.y != w && m.dispatchEvent("change"), w = r.y) : (z = u((a.x - y.x) / y.width * (n - o)), r.x = y.x + z * y.width / (n - o), z += o, r.y = a.y, r.x != w && m.dispatchEvent("change"), w = r.x), !e.OPTIMIZE && m.getStage() && m.getStage().update()
        }

        function p(e, t, o) {
          return e = Math.max(o.x, Math.min(o.x + o.width, e)), t = Math.max(o.y, Math.min(o.y + o.height, t)), {
            x: e,
            y: t
          }
        }
        if (zot(o) && (o = 0), zot(n) && (n = 10), n - o == 0) return void zog("ZIM Slider range must not be 0");
        if (zot(i) && (i = 0), zot(a) && (a = 300), zot(s) && (s = 3), zot(d) && (d = "#666"), zot(l) && (l = !1), zot(h) && (h = !1), zot(c) && (c = !1), zot(r)) {
          var f = 30,
            v = 40;
          l && (f = 50, v = 40), r = new e.Button(f, v, "", "#fff", "#ddd", "#666", 1, 0, null, null, 30)
        }
        l ? (this.width = r.width, c ? (this.height = a, this.setBounds(0, 0, this.width, this.height)) : (this.height = a + r.height, this.setBounds(-r.width / 2, -r.height / 2, this.width, this.height))) : (this.height = r.height, c ? (this.width = a, this.setBounds(0, 0, this.width, this.height)) : (this.width = a + r.width, this.setBounds(-r.width / 2, -r.height / 2, this.width, this.height)));
        var m = this,
          z = o,
          w = 0;
        this.button = r, this.cursor = "pointer";
        var b, y, x, C, S;
        if (h && 0 != i) {
          C = this.ticks = new createjs.Shape, this.addChild(C), S = C.graphics, S.ss(1).s(d);
          var T = Math.round((n - o) / i),
            j = (n - o) / T;
          if (j != i && zon && zog("zim.Slider() : non-divisible step (" + i + ") adjusted"), i = j, c) var B = (a - (l ? r.height : r.width)) / T;
          else var B = a / T
        }
        if (l) {
          var M = c ? r.height / 2 : 0;
          if (h && 0 != i) {
            for (var k = 0; T >= k; k++) S.mt(0, M + B * k).lt(20, M + B * k);
            C.x = 10
          }
          b = this.bar = new e.Rectangle(s, a, d), this.addChild(b), e.centerReg(r), this.addChild(r), x = b.getBounds(), y = new createjs.Rectangle(x.width / 2, x.y + M, 0, x.height - 2 * M)
        } else {
          var M = c ? r.width / 2 : 0;
          if (h && 0 != i) {
            for (var k = 0; T >= k; k++) S.mt(M + B * k, 0).lt(M + B * k, -20);
            C.y = -10
          }
          b = this.bar = new e.Rectangle(a, s, d), this.addChild(b), e.centerReg(r), this.addChild(r), x = b.getBounds(), y = new createjs.Rectangle(x.x + M, x.height / 2, x.width - 2 * M, 0)
        }
        r.x = y.x, r.y = y.y;
        var E, P;
        r.on("mousedown", function(e) {
          var t = m.globalToLocal(e.stageX, e.stageY);
          E = t.x - r.x, P = t.y - r.y, m.getStage() && (m.getStage().mouseMoveOutside = !0)
        }), r.on("pressmove", function(e) {
          g(e)
        }), b.on("mousedown", function(e) {
          E = r.width / 2, P = r.height / 2, g(e)
        }), Object.defineProperty(this, "currentValue", {
          get: function() {
            return z
          },
          set: function(t) {
            n > o ? (o > t && (t = o), t > n && (t = n)) : (t > o && (t = o), n > t && (t = n)), z = t = u(t), l ? (r.y = (t - o) / (n - o) * y.height + M, w = r.y) : (r.x = (t - o) / (n - o) * y.width + M, w = r.x), !e.OPTIMIZE && m.getStage() && m.getStage().update()
          }
        }), Object.defineProperty(this, "min", {
          get: function() {
            return o
          },
          set: function(e) {
            zon && zog("min is read only")
          }
        }), Object.defineProperty(this, "max", {
          get: function() {
            return n
          },
          set: function(e) {
            zon && zog("max is read only")
          }
        }), Object.defineProperty(this, "step", {
          get: function() {
            return i
          },
          set: function(e) {
            zon && zog("step is read only")
          }
        }), this._enabled = !0, Object.defineProperty(m, "enabled", {
          get: function() {
            return m._enabled
          },
          set: function(e) {
            t(m, e)
          }
        }), this.dispose = function() {
          return r.removeAllEventListeners(), !0
        }
      }
      var g, p = "min, max, step, button, barLength, barWidth, barColor, vertical, useTicks, inside";
      return (g = zob(e.Slider, arguments, p)) ? g : (u.prototype = new createjs.Container, u.prototype.constructor = e.Slider, new u)
    }, e.Dial = function(o, n, i, r, a, s, d, l, h, c, u, g, p, f) {
      function v() {
        function v(e) {
          return 0 == i ? e : Math.round(e / i) * i
        }

        function m(t) {
          var r;
          0 > t && (t += 360), t %= 360, 0 != i ? (t = Math.min(t, 360 - 360 / (B + 1)), r = v(t / (360 - 360 / (B + 1)) * (n - o)), E.rotation = r * (360 - 360 / (B + 1)) / (n - o)) : (E.rotation = t, r = t / 360 * (n - o)), r != y && (y = r, b = r + o, z.dispatchEvent("change"), !e.OPTIMIZE && z.getStage() && z.getStage().update())
        }
        if (zot(o) && (o = 0), zot(n) && (n = 10), n - o == 0) return void zog("ZIM Dial range must not be 0");
        zot(i) && (i = 1), zot(r) && (r = 100), zot(a) && (a = "#666"), zot(s) && (s = "#222"), zot(d) && (d = 1), zot(l) && (l = "arrow"), zot(h) && (h = !0), zot(c) && (c = .5), zot(u) && (u = !0), zot(g) && (g = !1), zot(p) && (p = s), zot(f) && (f = !0);
        var z = this;
        this.cursor = "pointer";
        var w = r / 2;
        this.width = this.height = r;
        var b = o,
          y = 0,
          x = this.backing = new e.Circle(w, a);
        if (this.addChild(x), h) {
          var C = g ? "rgba(0,0,0,.2)" : "rgba(0,0,0,.1)";
          ("black" == a || "#000" == a || "#000000" == a || "#111" == a || "#111111" == a) && (C = "#222");
          var S = this.inner = new e.Circle(w * c, C);
          if (this.addChild(S), !g) {
            var T = "rgba(0,0,0,.1)",
              j = this.inner2 = new e.Circle(w * (c - .1), T);
            this.addChild(j)
          }
        }
        var B = (n - o) / i;
        if (u && 0 != i) {
          ticks = this.ticks = new createjs.Container, this.addChild(ticks);
          for (var M, k = 0; B + 1 > k; k++) {
            var M = new e.Rectangle(1, .2 * w, p);
            M.regY = w * (g ? c - .05 : 1.28), M.regX = .5, M.rotation = 360 / (B + 1) * k, ticks.addChild(M)
          }
        }
        if (this.setBounds(-w, -w, r, r), "dot" == l || "circle" == l) {
          var E = this.indicator = new createjs.Container,
            P = this.indicatorShape = new e.Circle(.19 * w, s);
          E.addChild(P), e.scale(E, d), E.regY = w - E.getBounds().width * d / 2 - .07 * w
        } else if ("line" == l || "rectangle" == l) {
          var E = this.indicator = new createjs.Container,
            P = this.indicatorShape = new e.Rectangle(.1 * w, .3 * w, s);
          E.addChild(P), e.scale(E, d), E.regY = w - E.getBounds().width * d / 2 - .07 * w, E.regX = .05 * w
        } else {
          var E = this.indicator = new createjs.Container,
            P = this.indicatorShape = new e.Triangle(.4 * w, .4 * w, .4 * w, s);
          E.addChild(P), e.scale(E, d), E.regY = w - E.getBounds().height * d * (g ? .85 : .75), g && (P.rotation = 180)
        }
        E.regY /= d, this.addChild(E);
        var I, O, A, L, X = 0;
        this.on("mousedown", function() {
          I = E.rotation;
          var e = z.parent.globalToLocal(z.getStage().mouseX, z.getStage().mouseY),
            t = e.x - z.x,
            o = z.y - e.y;
          O = 180 * Math.atan2(t, o) / Math.PI;
          var n = (new Date).getTime();
          A = z.on("pressmove", function() {
            e = z.parent.globalToLocal(z.getStage().mouseX, z.getStage().mouseY), t = e.x - z.x, o = z.y - e.y;
            var n = I + 180 * Math.atan2(t, o) / Math.PI - O;
            f && (0 > n && (n += 360), n %= 360, Math.abs(n - X) > 180) || (X = n, m(n))
          }), L = this.on("pressup", function() {
            var i = (new Date).getTime() - n;
            if (200 > i) {
              e = z.parent.globalToLocal(z.getStage().mouseX, z.getStage().mouseY), t = e.x - z.x, o = z.y - e.y;
              var r = 180 * Math.atan2(t, o) / Math.PI;
              m(r)
            }
            I = E.rotation, z.off("pressmove", A), z.off("pressup", L)
          })
        }), Object.defineProperty(this, "currentValue", {
          get: function() {
            return b
          },
          set: function(t) {
            o > t && (t = o), t > n && (t = n), b = t, t = v(t), 0 != i ? E.rotation = (t - o) * (360 - 360 / (B + 1)) / (n - o) : E.rotation = 360 * (t - o) / (n - o), y = t - o, !e.OPTIMIZE && z.getStage() && z.getStage().update()
          }
        }), Object.defineProperty(this, "min", {
          get: function() {
            return o
          },
          set: function(e) {
            zon && zog("min is read only")
          }
        }), Object.defineProperty(this, "max", {
          get: function() {
            return n
          },
          set: function(e) {
            zon && zog("max is read only")
          }
        }), Object.defineProperty(this, "step", {
          get: function() {
            return i
          },
          set: function(e) {
            zon && zog("step is read only")
          }
        }), this._enabled = !0, Object.defineProperty(z, "enabled", {
          get: function() {
            return z._enabled
          },
          set: function(e) {
            t(z, e)
          }
        }), this.dispose = function() {
          return z.removeAllEventListeners(), !0
        }
      }
      var m, z = "min, max, step, width, color, indicatorColor, indicatorScale, type, innerCircle, innerScale, useTicks, innerTicks, tickColor, limit";
      return (m = zob(e.Dial, arguments, z)) ? m : (v.prototype = new createjs.Container, v.prototype.constructor = e.Dial, new v)
    }, e.Tabs = function(o, n, i, r, a, s, d, l, h, c, u, g) {
      function p() {
        function p(e) {
          var t = i[z];
          t && (b[z].color = zot(t.offColor) ? s : t.offColor, l || (b[z].enabled = !0)), z = e, t = i[z], t && (b[z].color = zot(t.color) ? r : t.color, l || (b[z].enabled = !1))
        }
        zot(o) && (o = 240), zot(n) && (n = 60), (zot(i) || i.length <= 0) && (i = [{
          label: 1
        }, {
          label: 2
        }, {
          label: 3
        }, {
          label: 4
        }]), zot(r) && (r = "#333"), zot(a) && (a = "#555"), zot(s) && (s = "#777"), zot(l) && (l = !1), zot(d) && (d = 1), zot(h) && (h = 0), zot(c) && (c = "white"), zot(u) && (u = 0), zot(g) && (g = !0);
        var f = this;
        this.width = o, this.height = n, this.keyEnabled = g;
        var v, m, z = 0,
          w = [],
          b = [],
          y = i.length,
          x = (o - d * (y - 1)) / y;
        if ("number" == typeof i[0] || "string" == typeof i[0])
          for (var C = 0; C < i.length; C++) i[C] = {
            label: String(null != i[C]) ? i[C] : "1"
          };
        for (var m, S, T = 0, j = 0, C = 0; C < i.length; C++) m = i[C], zot(m.width) && j++, T += zot(m.width) ? x : m.width;
        if (T > o - d * (y - 1))
          for (C = 0; C < i.length; C++) m = i[C], m.width = (o - d * (y - 1)) / T * (zot(m.width) ? x : m.width);
        else if (Math.round(T) < Math.round(o - d * (y - 1)))
          if (j > 0)
            for (S = (T - j * x) / j, zog(x), C = 0; C < i.length; C++) m = i[C], m.width = zot(m.width) ? S : m.width;
          else zon && zog("ZIM Tabs - total less than width"), this.width = T + d * (y - 1);
        var B, M = 0;
        for (C = 0; C < i.length; C++) m = i[C], zot(m.label) && (m.label = " "), B = 0 == C ? zot(m.color) ? r : m.color : zot(m.offColor) ? s : m.offColor, ("string" == typeof m.label || "number" == typeof m.label) && (m.label = new e.Label(m.label, n / 2, "arial", c)), v = new e.Button(zot(m.width) ? x : m.width, n, m.label, B, zot(m.rollColor) ? a : m.rollColor, null, null, h, -1), v.znum = C, m.label.znum = C, m.label.y += u, w.push(m.label), b.push(v), this.addChild(v), v.x = M, M = v.x + v.width + d, 0 != C || l || (v.enabled = !1);
        this.on("mousedown" == e.ACTIONEVENT ? "mousedown" : "click", function(t) {
          p(t.target.znum), f.dispatchEvent("change"), !e.OPTIMIZE && f.getStage() && f.getStage().update()
        }), window.addEventListener("keydown", function(t) {
          if (f.keyEnabled && 9 == t.keyCode) {
            var o = z;
            p(t.shiftKey ? --o < 0 ? i.length - 1 : o : ++o > i.length - 1 ? 0 : o), f.dispatchEvent("change"), !e.OPTIMIZE && f.getStage() && f.getStage().update(), t.preventDefault()
          }
        }), Object.defineProperty(this, "selected", {
          get: function() {
            return b[z]
          },
          set: function(e) {
            zon && zog("selected is read only - try selectedIndex")
          }
        }), Object.defineProperty(this, "selectedIndex", {
          get: function() {
            return z
          },
          set: function(t) {
            p(t), !e.OPTIMIZE && f.getStage() && f.getStage().update()
          }
        }), Object.defineProperty(this, "tabs", {
          get: function() {
            return z
          },
          set: function(t) {
            p(Math.min(Math.max(t, 0), i.length - 1)), !e.OPTIMIZE && f.getStage() && f.getStage().update()
          }
        }), Object.defineProperty(this, "color", {
          get: function() {
            return r
          },
          set: function(t) {
            r = t, zot(i[z].color) && (b[z].color = r, !e.OPTIMIZE && f.getStage() && f.getStage().update())
          }
        }), Object.defineProperty(this, "rollColor", {
          get: function() {
            return a
          },
          set: function(e) {
            a = e;
            for (var t = 0; t < i.length; t++) zot(i[z].rollColor) && (b[t].rollColor = a)
          }
        }), Object.defineProperty(this, "offColor", {
          get: function() {
            return s
          },
          set: function(t) {
            s = t;
            for (var o = 0; o < i.length; o++) zot(i[z].offColor) && (b[o].color = s);
            !e.OPTIMIZE && f.getStage() && f.getStage().update()
          }
        }), Object.defineProperty(this, "label", {
          get: function() {
            return w[z]
          },
          set: function(e) {
            zon && zog("selected is read only - try selectedIndex")
          }
        }), Object.defineProperty(this, "text", {
          get: function() {
            return null != w[z] ? w[z].text : void 0
          },
          set: function(e) {
            zon && zog("selected is read only - try selectedIndex")
          }
        }), Object.defineProperty(this, "buttons", {
          get: function() {
            return b
          },
          set: function(e) {
            zon && zog("buttons is read only")
          }
        }), Object.defineProperty(this, "labels", {
          get: function() {
            return w
          },
          set: function(e) {
            zon && zog("labels is read only")
          }
        }), this._enabled = !0, Object.defineProperty(f, "enabled", {
          get: function() {
            return f._enabled
          },
          set: function(e) {
            t(f, e)
          }
        }), this.dispose = function() {
          for (var e = 0; e < f.buttons.length; e++) f.buttons[e].dispose(), f.labels[e].dispose();
          return f.removeAllEventListeners(), !0
        }
      }
      var f, v = "width, height, tabs, color, rollColor, offColor, spacing, currentEnabled, corner, labelColor, labelAdjust, keyEnabled";
      return (f = zob(e.Tabs, arguments, v)) ? f : (p.prototype = new createjs.Container, p.prototype.constructor = e.Tabs, new p)
    }, e.Pad = function(o, n, i, r, a, s, d, l, h, c, u, g) {
      function p() {
        function p(t) {
          var o = t.target;
          v.selected = o.selected, v.text = o.text, v.label = o.label;
          for (var i = o.selectedIndex, r = 0; r < w.length; r++) w[r].selectedIndex = -1;
          o.selectedIndex = i, f = o.znum * n + i, v.dispatchEvent("change"), !e.OPTIMIZE && v.getStage() && v.getStage().update()
        }
        zot(o) && (o = 150), zot(n) && (n = 3), zot(i) && (i = n), zot(r) && (r = [1, 2, 3, 4, 5, 6, 7, 8, 9]), zot(h) && (h = !0), zot(l) && (l = 1);
        var f, v = this;
        this.cols = n, this.rows = i;
        var m, z = o / n - l,
          w = [],
          b = 0;
        this.labels = [], this.buttons = [];
        for (var y = 0; i > y; y++) {
          for (var x = [], C = 0; n > C; C++) x.push(null != r[b] ? r[b] : ""), b++;
          m = w[y] = new e.Tabs(o, z, x, a, s, d, l, h, c, u, g, !1), this.labels = this.labels.concat(m.labels), this.buttons = this.buttons.concat(m.buttons), this.addChild(m), m.selectedIndex = -1, m.y = (z + l) * y, m.znum = y, m.on("change", p)
        }
        this.tabs = w, this.width = this.getBounds().width, this.height = this.getBounds().height, Object.defineProperty(this, "selectedIndex", {
          get: function() {
            return f
          },
          set: function(e) {
            f = e;
            for (var t = 0; t < w.length; t++) w[t].selectedIndex = -1;
            var o = Math.floor(f / n);
            o >= 0 && o < v.tabs.length && (v.tabs[o].selectedIndex = f % n)
          }
        }), this._enabled = !0, Object.defineProperty(v, "enabled", {
          get: function() {
            return v._enabled
          },
          set: function(e) {
            t(v, e)
          }
        }), this.dispose = function() {
          for (var e = 0; e < v.tabs.length; e++) v.tabs[e].dispose();
          return v.removeAllEventListeners(), !0
        }
      }
      var f, v = "width, cols, rows, keys, color, rollColor, offColor, spacing, currentEnabled, corner, labelColor, labelAdjust";
      return (f = zob(e.Pad, arguments, v)) ? f : (p.prototype = new createjs.Container, p.prototype.constructor = e.Pad, new p)
    }, e.ColorPicker = function(t, o, n, i, r, a, s, d, l, h) {
      function c() {
        function c(e) {
          return e = Math.floor(e).toString(16), e + "" + e
        }

        function u() {
          if (L != R || z != m) {
            if (x && r) {
              v = f, f = R;
              var t = [v, f];
              for (B = 0; 2 > B; B++) {
                var o = w.graphics;
                E = Math.floor(B / n), P = B % n, X = P * (y + i), Y = E * (y + i) + N, C[B] = t[B], o.f(ne.color).r(X - 1, Y - 1, y + 2, y + 2).f(t[B]).r(X, Y, y, y)
              }!e.OPTIMIZE && p.getStage() && p.getStage().update()
            }
            R = L, m = z, p.dispatchEvent("change")
          } else p.dispatchEvent("close")
        }

        function g(e) {
          return Math.round(e * Math.pow(10, 2)) / Math.pow(10, 2)
        }
        zot(t) && (t = 500), zot(o) && (x = !0), zot(n) && (n = 10), zot(i) && (i = 2), zot(a) && (a = !0), zot(r) && (r = !0), zot(d) && (d = !0), zot(l) && (l = "rgba(0,0,0,.3)"), zot(h) && (h = 14);
        var p = this,
          f = "#e472c4",
          v = "#50c4b7",
          m = 1,
          z = 1,
          w = new createjs.Shape;
        this.addChild(w), w.x += i, w.y += i;
        var b, y, x = !1,
          C = [];
        if (zot(o)) {
          x = !0;
          var S = 6,
            T = S * S * S;
          S = Math.ceil(Math.pow(T, .5)), y = (t - i) / 18 - i;
          var j = Math.floor(Math.pow(S * S, 1 / 3));
          b = [];
          for (var B = 0; 6 > B; B++)
            for (var M = 0; 6 > M; M++)
              for (var k = 0; 6 > k; k++) b.push("#" + c(3 * B) + c(3 * M) + c(3 * k));
          o = [];
          var E, P, I, O;
          for (B = 0; B < b.length; B++) E = Math.floor(B / 6), P = B % 6, j = E >= 18 ? 1 : 0, I = E - 6 * j * 3, O = P + 6 * j, o[18 * O + I] = b[B];
          n = 18, C = [v, f]
        } else y = (t - i) / n - i;
        var A = Math.ceil(o.length / n),
          L = String(o[o.length - 1]);
        zot(s) || (L = String(s));
        var P, E, X, Y, R = v,
          D = w.graphics,
          j = 0;
        for (B = 0; B < o.length; B++) E = B % n, P = Math.floor(B / n), X = E * (y + i), Y = P * (y + i), D.f(o[B]).r(X, Y, y, y);
        var G = Y + y + i,
          N = G;
        if (r) {
          for (B = 0; 16 > B; B++) C.push("#" + c(B) + c(B) + c(B));
          for (B = 0; B < C.length; B++) E = Math.floor(B / n), P = B % n, X = P * (y + i), Y = E * (y + i) + G, D.f(C[B]).r(X, Y, y, y);
          G = Y + y + i;
          var F = n,
            H = Math.ceil(C.length / n)
        }
        var Z = 10;
        if (a) {
          var _ = new createjs.Container;
          _.setBounds(0, 0, 600, 70), _.width = 600, _.height = 70, this.addChild(_), _.x = 0, _.y = G;
          var V = this.alphaBacking = new e.Rectangle(600 - 2 * Z, 50, "#222", null, null, 0);
          _.addChild(V), e.centerReg(V, _);
          var W = this.alphaBut = new e.Button({
              width: 20,
              height: 30,
              label: "",
              corner: 0,
              hitPadding: 20
            }),
            U = this.alphaSlider = new e.Slider(0, 1, .05, W, 330);
          U.currentValue = 1, _.addChild(U), U.x = 40, U.y = _.height / 2;
          var q = this.alphaText = new e.Label("Alpha: 1", 30, null, "orange");
          _.addChild(q), q.x = U.x + U.bar.width + 40, q.y = _.height / 2 - q.height / 2, _.scaleX = _.scaleY = t / 600, U.on("change", function() {
            q.text = "Alpha: " + g(U.currentValue), oe.alpha = z = U.currentValue, p.getStage() && p.getStage().update()
          }), G += (_.height - Z) * _.scaleX
        }
        var K = new createjs.Container;
        K.setBounds(0, 0, 600, 100), K.width = 600, K.height = 100, this.addChild(K), K.x = 0, K.y = G + Z;
        var Q = this.swatchText = new e.Label(L.toUpperCase().substr(0, 7), 30, null, "orange");
        if (K.addChild(Q), e.centerReg(Q), Q.x = 90, Q.y = 48, d) {
          var J = this.grip = new createjs.Shape;
          K.addChild(J), J.graphics.f("rgba(256,256,256,.25)").r(0, 0, 5, 20).r(10, 0, 5, 20).r(20, 0, 5, 20).r(30, 0, 5, 20), J.x = 70, J.y = 65, Q.y = 40
        }
        var $ = this.closeBut = new e.Button(90, 90, "X", "#222", "#444", null, null, 0);
        K.addChild($), $.x = 600 - $.width - Z, $.y = 0, $.on("mousedown" == e.ACTIONEVENT ? "mousedown" : "click", function() {
          p.dispatchEvent("close")
        });
        var ee = this.okBut = new e.Button(150, 90, "OK", "#222", "#444", null, null, 0);
        K.addChild(ee), ee.x = $.x - ee.width - Z, ee.y = 0, ee.on("mousedown" == e.ACTIONEVENT ? "mousedown" : "click", u);
        var te = this.swatchBacking = new createjs.Shape;
        K.addChild(te);
        var D = te.graphics;
        D.f("black").r(.5, .5, 50, 89).f("#666").r(50, .5, 50, 89).f("white").r(100, .5, 49.5, 89), te.x = ee.x - 150 - Z, te.y = 0;
        var oe = this.swatch = new e.Rectangle(150, 90, L);
        K.addChild(oe), oe.x = te.x, oe.y = 0, oe.on("mousedown" == e.ACTIONEVENT ? "mousedown" : "click", u), oe.cursor = "pointer", K.scaleX = K.scaleY = t / 600, G += K.height * K.scaleX, this.width = t, this.height = G + Z, this.setBounds(0, 0, this.width, this.height);
        var ne = this.backing = new e.Rectangle(this.width, this.height, "black");
        if (this.addChildAt(ne, 0), -1 != l && h > 0 && (ne.shadow = new createjs.Shadow(l, 8, 8, h)), d) {
          var ie, re;
          ne.on("mousedown", function(e) {
            ie = e.stageX - p.x, re = e.stageY - p.y, ne.cursor = "move"
          }), ne.on("pressmove", function(e) {
            p.x = e.stageX - ie, p.y = e.stageY - re, p.getStage() && p.getStage().update()
          }), ne.on("pressup", function(e) {
            ne.cursor = "default", p.getStage() && p.getStage().update()
          })
        }
        var ae = n * (y + i),
          se = A * (y + i);
        if (r) var de = F * (y + i),
          le = H * (y + i);
        w.on("mousedown" == e.ACTIONEVENT ? "mousedown" : "click", function() {
          var t = e.hitTestGrid(w, ae, se, n, A, p.getStage().mouseX, p.getStage().mouseY, 0, 0, i, i);
          zot(t) || (oe.color = L = o[t], Q.text = String(o[t]).toUpperCase().substr(0, 7), e.centerReg(Q), p.getStage() && p.getStage().update()), r && (t = null, t = e.hitTestGrid(w, de, le, F, H, p.getStage().mouseX, p.getStage().mouseY, 0, se, i, i), zot(t) || (oe.color = L = C[t], Q.text = C[t].toUpperCase(), e.centerReg(Q), p.getStage() && p.getStage().update()))
        }), Object.defineProperty(this, "selectedColor", {
          get: function() {
            return L
          },
          set: function(t) {
            oe.color = L = t, Q.text = o[index], e.centerReg(Q), p.getStage() && p.getStage().update()
          }
        }), Object.defineProperty(this, "selectedAlpha", {
          get: function() {
            return a ? g(U.currentValue) : 1
          },
          set: function(e) {
            a && (oe.alpha = U.currentValue = e, q.text = "Alpha: " + g(U.currentValue), p.getStage() && p.getStage().update())
          }
        }), this.dispose = function() {
          return U.dispose(), w.removeAllEventListeners(), ne.removeAllEventListeners(), $.removeAllEventListeners(), oe.removeAllEventListeners(), ee.removeAllEventListeners(), !0
        }
      }
      var u, g = "width, colors, cols, spacing, greyPicker, alphaPicker, startColor, drag, shadowColor, shadowBlur";
      return (u = zob(e.ColorPicker, arguments, g)) ? u : (c.prototype = new createjs.Container, c.prototype.constructor = e.ColorPicker, new c)
    }, e.Parallax = function(t, o, n, i, r) {
      function a(e) {
        h.step()
      }
      var s, d = "stage, damp, layers, auto, fps";
      if (s = zob(e.Parallax, arguments, d, this)) return s;
      if (zot(t) || !t.getBounds) return void zog("zim build - Parallax(): please pass in the stage with bounds as first parameter");
      if (!t.getBounds()) return void zog("zim build - Parallax(): Please give the stage bounds using setBounds()");
      zot(i) && (i = !0);
      var l = t.getBounds().width,
        h = (t.getBounds().height, this);
      this.damp = zot(o) ? .1 : o, this.addLayer = function(t) {
        if (!(zot(t.obj) || zot(t.prop) || zot(t.propChange))) {
          var o = {
            obj: t.obj,
            prop: t.prop
          };
          o[o.prop] = t.propChange, zot(t.input) && (t.input = "mouseX"), o.input = t.input;
          var n = zot(t.inMin) ? 0 : t.inMin,
            i = zot(t.inMax) ? l : t.inMax,
            r = zot(t.factor) ? 1 : t.factor,
            a = zot(t.integer) ? !1 : t.integer;
          return o["p_" + o.prop] = new e.ProportionDamp(n, i, 0, o[o.prop], h.damp, r, a), "scale" == o.prop ? o["s_" + o.prop] = o.obj.scaleX : "frame" == o.prop ? o["s_" + o.prop] = o.obj.currentFrame : o["s_" + o.prop] = o.obj[o.prop], c.push(o), c.length - 1
        }
      }, this.removeLayer = function(e) {
        if (!zot(e)) {
          var t = c[e];
          t["p_" + t.prop].dispose(), c.splice(e, 1)
        }
      }, this.immediate = function(e) {
        for (var t, o = 0; o < c.length; o++) t = c[o], t["p_" + t.prop].immediate(e[o])
      }, this.dispose = function() {
        return c = null, i && e.Ticker.remove(g), !0
      }, n = zot(n) ? [] : n;
      for (var c = [], u = 0; u < n.length; u++) this.addLayer(n[u]);
      if (i) {
        e.Ticker.stage = t;
        var g = e.Ticker.add(a);
        zot(r) || createjs.Ticker.setFPS(r)
      }
      this.step = function(o) {
        for (var n, r, a = 0; a < c.length; a++) n = c[a], zot(o) ? "mouseX" == n.input ? r = t.mouseX : "mouseY" == n.input ? r = t.mouseY : "scrollX" == n.input ? r = e.scrollX() : "scrollY" == n.input && (r = e.scrollY()) : r = o, "scale" == n.prop ? n.obj.scaleX = n.obj.scaleY = n["s_" + n.prop] + n["p_" + n.prop].convert(r) : "frame" == n.prop ? n.obj.gotoAndStop(n["s_" + n.prop] + n["p_" + n.prop].convert(r)) : (n.obj[n.prop] = n["s_" + n.prop] + n["p_" + n.prop].convert(r), "mouseX" == n.input && i && (n.obj[n.prop] -= n[n.prop] / 2))
      }
    }, e.Scroller = function(t, o, n, i, r, a, s) {
      function d(e) {
        if (c.getStage()) {
          if (!c.getStage().getBounds()) return void zog("zim build - Scroller(): please setBounds() on stage");
          p || (p = c.getStage().getBounds().width, f = c.getStage().getBounds().height), 0 != g.speed && 0 != g.direction && (r ? (c.x -= g.speed * g.direction, u.x -= g.speed * g.direction, g.direction * g.speed > 0 ? u.x < 0 && c.x < u.x ? c.x = u.getBounds().width - g.gapFix : c.x < 0 && u.x < c.x && (u.x = c.getBounds().width - g.gapFix) : u.x > p && u.x > c.x ? u.x = c.x - c.getBounds().width + g.gapFix : c.x > p && c.x > u.x && (c.x = u.x - u.getBounds().width + g.gapFix)) : (c.y -= g.speed * g.direction, u.y -= g.speed * g.direction, g.direction * g.speed > 0 ? u.y < 0 && c.y < u.y ? c.y = u.getBounds().height - g.gapFix : c.y < 0 && u.y < c.y && (u.y = c.getBounds().height - g.gapFix) : u.y > f && u.y > c.y ? u.y = c.y - c.getBounds().height + g.gapFix : c.y > f && c.y > u.y && (c.y = u.y - u.getBounds().height + g.gapFix)),
            c.getStage().update())
        }
      }
      var l, h = "backing1, backing2, speed, direction, horizontal, gapFix, fps";
      if (l = zob(e.Scroller, arguments, h, this)) return l;
      var c = t,
        u = o;
      if (!zot(c) && c.getBounds && !zot(u) && u.getBounds) {
        zot(r) && (r = !0);
        var g = this;
        if (zot(s) && (s = 30), this.speed = zot(n) ? 1 : n, this.direction = zot(i) ? 1 : i, this.gapFix = zot(a) ? 0 : a, !c.getBounds() || !u.getBounds()) return void zog("zim build - Scroller(): please setBounds() on backing objects");
        if (!c.getStage()) return void zog("zim build - Scroller(): please add backing objects to stage to start");
        var p, f;
        r ? u.x = c.getBounds().width : u.y = c.getBounds().height, e.Ticker.stage = c.getStage();
        var v = e.Ticker.add(d);
        zot(s) || createjs.Ticker.setFPS(s), this.dispose = function() {
          return zon && zog("bye from Scroller"), e.Ticker.remove(v), !0
        }
      }
    }, e
  }(zim || {}),
  zim = function(e) {
    return zon && zog("ZIM PAGES Module"), e.Swipe = function(t, o, n) {
      function i() {
        if (zot(t) || !t.on) return void zog("zim pages - Swipe():\nPlease pass in object");
        zot(o) && (o = 30), zot(n) && (n = 80), this.distance = o, this.duration = n, this.active = !0;
        var e, i, r, a, s, d, l = this;
        t.on("mousedown", function(o) {
          function n() {
            var t = new createjs.Event("swipe");
            t.obj = l.obj, t.swipeX = t.swipeY = 0, l.direction = "none", Math.abs(r - e) > Math.abs(a - i) ? (r - e > l.distance && (t.swipeX = 1, l.direction = "right"), e - r > l.distance && (t.swipeX = -1, l.direction = "left")) : (a - i > l.distance && (t.swipeY = 1, l.direction = "down"), i - a > l.distance && (t.swipeY = -1, l.direction = "up")), l.dispatchEvent(t)
          }
          l.active && !o.target.zimNoSwipe && (l.obj = o.target, r = e = o.stageX, a = i = o.stageY, s = !0, l.dispatchEvent("swipedown"), clearTimeout(d), d = setTimeout(function() {
            s && (n(), s = !1)
          }, l.duration), t.on("pressmove", function(e) {
            r = e.stageX, a = e.stageY
          }), t.on("pressup", function(e) {
            s && (n(), s = !1, clearTimeout(d))
          }))
        }), this.disable = function() {
          l.active = !1
        }, this.enable = function() {
          l.active = !0
        }
      }
      var r, a = "obj, distance, duration";
      return (r = zob(e.Swipe, arguments, a)) ? r : (i.prototype = new createjs.EventDispatcher, i.prototype.constructor = e.Swipe, new i)
    }, e.Pages = function(t, o, n, i, r) {
      function a() {
        function a() {
          s = new createjs.Shape, s.graphics.f("black").r(0, 0, h, c + 1), d = new createjs.Shape, d.graphics.f("white").r(0, 0, h, c + 1)
        }
        if (zot(t) || !t.getBounds || !t.getBounds()) return void zog("zim pages - Pages():\nobject must have bounds set");
        zot(o) && (o = []), zot(n) && (n = "none"), zot(i) && (i = 200), zot(r) && (r = []), this.transitionTable = r, this.speed = i, this.active = !0;
        var s, d, l = this,
          h = t.getBounds().width,
          c = t.getBounds().height,
          u = this.page = o[0] ? o[0].page : null;
        ("none" != n || r != []) && a();
        for (var g, p, f = ["left", "right", "up", "down"], v = 0; v < o.length; v++) g = o[v], g.page.zimSwipeArray = g.swipe ? g.swipe : [];
        this.addChild(u), this.swipe = new e.Swipe(t);
        var m, z = !1,
          w = this.swipe.on("swipe", function(e) {
            if (l.active) {
              var t = e.currentTarget.direction;
              if ("none" != t) {
                var o = "";
                "left" == t ? o = "right" : "right" == t ? o = "left" : "up" == t ? o = "down" : "down" == t && (o = "up"), t = o;
                var n = f.indexOf(t);
                p = u.zimSwipeArray[n], m = [p, t, null, null, !0], l.page = u, l.nextPage = p, l.direction = t, l.dispatchEvent("swipe"), setTimeout(function() {
                  z || l.go(p, t, null, null, !0)
                }, 50)
              }
            }
          });
        this.addPage = function(e, t) {
          zot(t) && (t = []);
          var o = {
            page: e,
            swipe: t
          };
          o.page.zimSwipeArray = o.swipe ? o.swipe : [], u || (u = l.page = o.page, l.addChild(u))
        }, this.removePage = function(e) {
          l.currentPage == e && (l.removeChild(e), t.getStage() && t.getStage().update()), e.zimSwipeArray = null
        }, this.setSwipe = function(e, t) {
          zot(t) && (t = []);
          var o = {
            page: e,
            swipe: t
          };
          o.page.zimSwipeArray = o.swipe ? o.swipe : []
        }, this.pause = function() {
          z = !0
        }, this.unpause = function() {
          z && l.go(m[0], m[1], m[2], m[3], m[4])
        }, this.go = function(o, r, a, g, p) {
          function v(e) {
            e[0].uncache(), e[1].uncache(), l.dispatchEvent("pageTransitioned"), l.removeChild(l.lastPage), l.removeChild(s), l.removeChild(d)
          }

          function m(t) {
            l.removeChild(l.lastPage), e.animate(t.shift(), {
              alpha: 0
            }, l.speed / 2, null, v, t)
          }
          setTimeout(function() {
            z = !1
          }, 200);
          for (var w = [{
              x: h
            }, {
              x: -h
            }, {
              y: c
            }, {
              y: -c
            }], b = [{
              x: 0
            }, {
              x: 0
            }, {
              y: 0
            }, {
              y: 0
            }], y = [{
              x: h / 2,
              alpha: 0
            }, {
              x: -h / 2,
              alpha: 0
            }, {
              y: c / 2,
              alpha: 0
            }, {
              y: -c / 2,
              alpha: 0
            }], x = n, C = i, S = 0; S < l.transitionTable.length; S++)
            if (l.transitionTable[S][0] == u && l.transitionTable[S][1] == o) {
              x = l.transitionTable[S][2], C = l.transitionTable[S][3];
              break
            }
          if (zot(a) && (a = x), zot(g) && (g = C), l.speed = g, l.direction = r, "" == o || null == o) l.page = u, l.dispatchEvent("nothing");
          else if ("string" == typeof o) l.page = u, l.dispatchEvent(o);
          else {
            if (o == u) return;
            zot(r) && (r = "right");
            var T = f.indexOf(r);
            o.x = 0, o.y = 0, o.alpha = 1, "slide" == a ? (o.x = -(0 | w[T].x), o.y = -(0 | w[T].y), o.cache(0, 0, (h + 1) / o.scaleX, (c + 1) / o.scaleY), u.cache(0, 0, (h + 1) / u.scaleX, (c + 1) / u.scaleY), l.addChild(o), l.addChild(u), e.animate(u, w[T], l.speed, null, v, [u, o]), e.animate(o, b[T], l.speed)) : "reveal" == a ? (o.cache(0, 0, (h + 1) / o.scaleX, (c + 1) / o.scaleY), u.cache(0, 0, (h + 1) / u.scaleX, (c + 1) / u.scaleY), l.addChild(o), l.addChild(u), e.animate(u, y[T], l.speed, null, v, [u, o])) : "fade" == a ? (o.cache(0, 0, (h + 1) / o.scaleX, (c + 1) / o.scaleY), u.cache(0, 0, (h + 1) / u.scaleX, (c + 1) / u.scaleY), o.alpha = 1, l.addChild(o), l.addChild(u), e.animate(u, {
              alpha: 0
            }, l.speed, null, v, [u, o])) : "black" == a ? (o.cache(0, 0, (h + 1) / o.scaleX, (c + 1) / o.scaleY), u.cache(0, 0, (h + 1) / u.scaleX, (c + 1) / u.scaleY), o.alpha = 1, l.addChild(o), l.addChild(u), s.alpha = 0, l.addChild(s), e.animate(s, {
              alpha: 1
            }, l.speed / 2, null, m, [s, u, o])) : "white" == a ? (o.cache(0, 0, (h + 1) / o.scaleX, (c + 1) / o.scaleY), u.cache(0, 0, (h + 1) / u.scaleX, (c + 1) / u.scaleY), o.alpha = 1, l.addChild(o), l.addChild(u), d.alpha = 0, l.addChild(d), e.animate(d, {
              alpha: 1
            }, l.speed / 2, null, m, [d, u, o])) : (l.addChild(o), l.removeChild(u)), l.lastPage = u, l.page = o, zot(p) && (p = !1), l.fromSwipe = p, l.dispatchEvent("page"), u = o, t.getStage() && t.getStage().update()
          }
        }, this.resize = function() {
          h = t.getBounds().width, c = t.getBounds().height, ("none" != n || r != []) && a()
        }, this.puff = function(e) {
          for (var t = 0; t < o.length; t++) l.addChild(o[t].page);
          l.addChild(u), e > 0 && setTimeout(function() {
            l.settle()
          }, e)
        }, this.settle = function() {
          l.removeAllChildren(), l.addChild(u), l.dispatchEvent("puffed")
        }, this.disable = function() {
          l.active = !1
        }, this.enable = function() {
          l.active = !0
        }, this.dispose = function() {
          return l.swipe.off("swipe", w), l.removeAllChildren(), o = null, !0
        }
      }
      var s, d = "holder, pages, transition, speed, transitionTable";
      return (s = zob(e.Pages, arguments, d)) ? s : (a.prototype = new createjs.Container, a.prototype.constructor = e.Pages, new a)
    }, zot(e.ACTIONEVENT) && (e.ACTIONEVENT = "mousedown"), e.HotSpots = function(t, o, n) {
      function i() {
        function i(t) {
          var i = null;
          if (!Array.isArray(t.rect)) {
            if (i = t.rect, !i) return void zog("zim pages - HotSpots(): HotSpot " + t.page + " " + t.rect + " button does not exist");
            t.rect = [i.x, i.y, 1, 1]
          }
          s = new e.HotSpot(t.page, t.rect[0], t.rect[1], t.rect[2], t.rect[3], t.call, o), s.zimHSpage = t.page, s.button = i, l.push(s), s.on(d, r), i && (s.spot.mouseEnabled = !1, s.spot.mouseChildren = !1, i.zimHScall = t.call, i.zimHSEvent = i.on(d, r, !0), n || (i.zimHSMDEvent = i.on("mousedown", function(e) {
            e.stopImmediatePropagation()
          })), i.cursor = "pointer")
        }

        function r(e) {
          e.stopImmediatePropagation && e.stopImmediatePropagation(), window.event && (window.event.cancelBubble = !0), "function" == typeof e.currentTarget.zimHScall && e.currentTarget.zimHScall(e)
        }
        if (zot(t) || !Array.isArray(t)) return void zog("zim pages - HotSpots():\nplease provide an array of HotSpot data");
        zot(o) && (o = !0), zot(n) && (n = !1);
        for (var a, s, d = "mousedown" == e.ACTIONEVENT ? "mousedown" : "click", l = [], h = 0; h < t.length; h++) i(t[h]);
        this.addHotSpot = function(e, o, n) {
          a = {
            page: e,
            rect: o,
            call: n
          }, t.push(a), i(a)
        }, this.show = function() {
          for (var e = 0; e < l.length; e++) s = l[e], s.button || s.show()
        }, this.hide = function() {
          for (var e = 0; e < l.length; e++) s = l[e], s.hide()
        }, this.removeHotSpots = function(o, i) {
          for (var h = t.length - 1; h >= 0; h--) a = t[h], s = l[h], i && !Array.isArray(i) && (i = [i.x, i.y, i.getBounds().width, i.getBounds().height]), (zot(o) && zot(i) || zot(i) && o == a.page || zot(o) && e.arraysEqual(i, a.rect) || o == a.page && e.arraysEqual(i, a.rect)) && (t.splice(h, 1), s.button && (s.button.off(d, s.button.zimHSEvent), s.button.zimHSEvent = null, n || (s.button.off("mousedown", s.button.zimHSMDEvent), s.button.zimHSMDEvent = null)), s.off(d, r), s.dispose(), l.splice(h, 1))
        }, this.dispose = function() {
          for (var e = 0; e < l.length; e++) s = l[e], s.button && (s.button.off(d, s.button.zimHSEvent), s.button.zimHSCall = null, s.button.zimHSEvent = null, n || (s.button.off("mousedown", s.button.zimHSMDEvent), s.button.zimHSMDEvent = null)), s.off(d, r), s.dispose();
          return !0
        }
      }
      var r, a = "spots, local, mouseDowns";
      return (r = zob(e.HotSpots, arguments, a)) ? r : (i.prototype = new createjs.Container, i.prototype.constructor = e.HotSpots, new i)
    }, e.HotSpot = function(t, o, n, i, r, a, s) {
      function d() {
        if (zot(t) || !t.addChild) return void zog("zim pages - HotSpot():\nPlease pass in container object for obj");
        t instanceof createjs.Container == 0 && zog("zim build - HotSpot():\nObjects passed in should be Containers"), zot(s) && (s = !0), eventType = "mousedown" == e.ACTIONEVENT ? "mousedown" : "click";
        var d = i,
          l = r,
          h = new createjs.Shape,
          c = new createjs.Shape;
        if (s) h.graphics.f("#999999").dr(o, n, d, l), c.graphics.f("#999999").dr(o, n, 1, 1);
        else {
          var u = t.globalToLocal(o, n),
            g = t.globalToLocal(o + d, n + l),
            p = g.x - u.x,
            f = g.y - u.y;
          h.graphics.f("#999999").dr(u.x, u.y, p, f), c.graphics.f("#999999").dr(u.x, u.y, 1, 1)
        }
        h.alpha = .4, h.mouseEnabled = !1, c.alpha = .01, c.cursor = "pointer", this.spot = c;
        var v = c.on(eventType, function(e) {
          "function" == typeof a && a()
        });
        t.addChild(c), c.hitArea = h, this.show = function() {
          t.addChild(h)
        }, this.hide = function() {
          t.removeChild(h)
        }, this.dispose = function() {
          return c.off(eventType, v), t.removeChild(c), delete c, !0
        }
      }
      var l, h = "obj, x, y, width, height, call, local";
      return (l = zob(e.HotSpot, arguments, h)) ? l : (d.prototype = new createjs.Container, d.prototype.constructor = e.HotSpot, new d)
    }, e.dashedLinesOn = function() {
      e.dashed || (e.dashed = !0, createjs.Graphics.prototype.dashedLineTo = function(e, t, o, n, i) {
        this.moveTo(e, t);
        for (var r = o - e, a = n - t, s = Math.floor(Math.sqrt(r * r + a * a) / i), d = r / s, l = a / s, h = 0; h++ < s;) e += d, t += l, this[h % 2 == 0 ? "moveTo" : "lineTo"](e, t);
        return this[h % 2 == 0 ? "moveTo" : "lineTo"](o, n), this
      }, createjs.Graphics.prototype.drawDashedRect = function(e, t, o, n, i) {
        this.moveTo(e, t);
        var r = e + o,
          a = t + n;
        return this.dashedLineTo(e, t, r, t, i), this.dashedLineTo(r, t, r, a, i), this.dashedLineTo(r, a, e, a, i), this.dashedLineTo(e, a, e, t, i), this
      })
    }, e.Manager = function(e) {
      zon && e && zog("zim pages - " + e);
      var t = this;
      this.items = [], this.add = function(e) {
        t.items.push(e)
      }, this.resize = function() {
        if (t)
          for (var e = 0; e < t.items.length; e++) t.items[e].resize() || t.items.splice(e)
      }, this.dispose = function() {
        for (var o = 0; o < t.items.length; o++) t.items[o].dispose();
        return t.items = [], zon && zog("zim pages - " + e + " - all disposed"), t = null, !0
      }
    }, e.Guide = function(t, o, n, i, r) {
      function a() {
        function a(e, t, o) {
          var n = new createjs.Container;
          return n.shape = new createjs.Shape, n.shape.graphics.s(t).ss(1).f(e).r(0, 0, m, z), n.shape.alpha = .9, n.addChild(n.shape), n.label = new createjs.Text("10", "16px verdana", o), n.label.textAlign = "center", n.label.textBaseline = "middle", n.addChild(n.label), n.mouseChildren = !1, n.mouseEnabled = !1, n
        }

        function s() {
          clearInterval(T), "stage" == t ? (c = g.getStage(), t = c) : c = t.getStage(), y = t.getBounds().width, x = t.getBounds().height, o ? (v.y = x / 2, v.label.text = "y:" + (g.pixels ? Math.round(70 * y / 100) : "70%")) : (v.x = y / 2, v.label.text = "x:" + (g.pixels ? Math.round(70 * x / 100) : "70%")), C = new createjs.Shape, g.addChild(C), o ? C.x = .7 * y : C.y = .7 * x, j || (t.addChild(g), l()), c.off("stagemousemove", u), u = c.on("stagemousemove", d), c.update()
        }

        function d(e) {
          var i, r;
          e ? (i = t.globalToLocal(e.rawX, e.rawY), B = i) : i = {
            x: B.x,
            y: B.y
          }, n ? o ? (r = Math.round(Math.abs(i.x - C.x) / y * 100), v.label.text = "x:" + Math.max(0, Math.min(r, 100)) + "%", v.y = Math.max(b, Math.min(i.y, f))) : (r = Math.round(Math.abs(i.y - C.y) / x * 100), v.label.text = "y:" + Math.max(0, Math.min(r, 100)) + "%", v.x = Math.max(w, Math.min(i.x, p))) : o ? (r = Math.round(Math.abs(i.x - C.x)), v.label.text = "x:" + Math.max(0, Math.min(r, Math.round(y))), v.y = Math.max(b, Math.min(i.y, f))) : (r = Math.round(Math.abs(i.y - C.y)), v.label.text = "y:" + Math.max(0, Math.min(r, Math.round(x))), v.x = Math.max(w, Math.min(i.x, p))), c && c.update()
        }

        function l() {
          j = !0, y = t.getBounds().width, x = t.getBounds().height;
          var n;
          o ? (n = "ew-resize", S = new createjs.Rectangle(0, 0, y, 0)) : (n = "ns-resize", S = new createjs.Rectangle(0, 0, 0, x)), e.noDrag(C), setTimeout(function() {
            e.drag(C, S, n, n, null, null, !0)
          }, 500), c.mouseMoveOutside = !0, c.enableMouseOver(10), p = y - 2 * m / 3, f = x - z - z, C.uncache();
          var i = C.graphics;
          o ? (i.c().s("rgba(0,255,255,.1)").ss(20).mt(0, 0).lt(0, x), i.f().s("white").ss(2).mt(0, 0).lt(0, x), i.s("#00c5af").ss(2).dashedLineTo(0, 0, 0, x, 20), C.cache(-10, 0, 20, x)) : (i.c().s("rgba(255,0,255,.1)").ss(20).mt(0, 0).lt(y, 0), i.f().s("white").ss(2).mt(0, 0).lt(y, 0), i.s("#d61fa0").ss(2).dashedLineTo(0, 0, y, 0, 20), C.cache(0, -10, y, 20)), o ? v.x = y : v.y = x, g.addChild(v)
        }

        function h(e) {
          e || (e = event), c && (String.fromCharCode(e.keyCode) == i.toUpperCase() && (g.visible = !g.visible, c.off("stagemousemove", u), g.visible && (u = c.on("stagemousemove", d, g)), c.update()), String.fromCharCode(e.keyCode) == r.toUpperCase() && (g.pixels = !g.pixels))
        }
        if (zot(t) && (t = "stage"), zot(o) && (o = !0), !("stage" == t || t.getBounds && t.getBounds())) return void zog("zim pages - Guide(): Please provide bounds for the obj (setBounds())");
        zot(n) && (n = !0), zot(i) && (i = "G"), zot(r) && (r = "P");
        var c, u, g = this;
        e.dashedLinesOn();
        var p, f, v, m = 80,
          z = 26,
          w = m / 6 + m / 2,
          b = 2 * z;
        o ? (v = a("#00c5af", "white", "white"), v.shape.regX = m + m / 6, v.shape.regY = z / 2, v.label.x = -m / 2 - m / 6) : (v = a("#d61fa0", "white", "white"), v.shape.regX = m / 2, v.shape.regY = z + z / 4, v.label.y = 3 * -z / 4);
        var y, x, C, S, T = setInterval(function() {
            "stage" == t ? g && g.getStage() && s() : t && t.getStage() && s()
          }, 100),
          j = !1,
          B = {
            x: 0,
            y: 0
          };
        Object.defineProperty(this, "pixels", {
          get: function() {
            return !n
          },
          set: function(e) {
            n = !e, g.resize()
          }
        }), window.addEventListener("keydown", h), this.resize = function() {
          return g ? (c && (l(), d()), !0) : !1
        }, this.dispose = function() {
          return g ? (e.noDrag(C), clearInterval(T), g.removeAllChildren(), window.removeEventListener("keydown", h), g.parent && g.parent.removeChild(g), g = null, !0) : !1
        }
      }
      var s, d = "obj, vertical, percent, hideKey, pixelKey";
      return (s = zob(e.Guide, arguments, d)) ? s : (a.prototype = new createjs.Container, a.prototype.constructor = e.Guide, new a)
    }, e.GuideManager = function() {
      e.Manager.call(this, "GuideManager")
    }, e.GuideManager.prototype = new e.Manager, e.GuideManager.prototype.constructor = e.GuideManager, e.Grid = function(t, o, n, i, r) {
      function a() {
        function e(e, t, o) {
          var n = new createjs.Container;
          return n.shape = new createjs.Shape, n.shape.graphics.s(t).ss(1).f(e).r(0, 0, p, f), n.shape.alpha = .9, n.addChild(n.shape), n.label = new createjs.Text("10", "16px verdana", o), n.label.textAlign = "center", n.label.textBaseline = "middle", n.addChild(n.label), n.mouseChildren = !1, n.mouseEnabled = !1, n
        }

        function a() {
          clearInterval(T), "stage" == t ? (h = u.getStage(), t = h) : h = t.getStage(), j || (d(), t.addChild(u)), h.off("stagemousemove", c), c = h.on("stagemousemove", s), h.update()
        }

        function s(e) {
          var o;
          e ? (o = t.globalToLocal(e.rawX, e.rawY), B = o) : o = {
            x: B.x,
            y: B.y
          }, n ? (v.label.text = "x:" + Math.max(0, Math.min(Math.round(o.x / x * 100), 100)) + "%", v.x = Math.max(b, Math.min(o.x, z)), m.label.text = "y:" + Math.max(0, Math.min(Math.round(o.y / C * 100), 100)) + "%", m.y = Math.max(y, Math.min(o.y, w))) : (v.label.text = "x:" + Math.max(0, Math.min(Math.round(o.x), Math.round(x))), v.x = Math.max(b, Math.min(o.x, z)), m.label.text = "y:" + Math.max(0, Math.min(Math.round(o.y), Math.round(C))), m.y = Math.max(y, Math.min(o.y, w))), h && h.update()
        }

        function d() {
          j = !0, x = t.getBounds().width, C = t.getBounds().height, h.mouseMoveOutside = !0, h.enableMouseOver(10), z = x - 2 * p / 3, w = C - f - f, S = new createjs.Container, u.addChild(S);
          var e = new createjs.Shape;
          S.addChild(e);
          var i = e.graphics;
          i.s(o).ss(1);
          var r = new createjs.Shape;
          if (S.addChild(r), n) {
            for (var a = 1; 22 > a; a++) i.mt(a * x / 20, 0).lt(a * x / 20, C);
            for (var a = 1; 20 > a; a++) i.mt(0, a * C / 20).lt(x, a * C / 20);
            e.alpha = .3, i = r.graphics, i.s(o).ss(1);
            for (var a = 1; 10 > a; a++) i.mt(a * x / 10, 0).lt(a * x / 10, C);
            for (var a = 1; 10 > a; a++) i.mt(0, a * C / 10).lt(x, a * C / 10)
          } else {
            for (var a = 0; x / g > a; a++) i.mt(a * g, 0).lt(a * g, C);
            for (var a = 0; C / g > a; a++) i.mt(0, a * g).lt(x, a * g);
            e.alpha = .3, i = r.graphics, i.s(o).ss(1);
            for (var a = 0; x / (10 * g) > a; a++) i.mt(a * (10 * g), 0).lt(a * (10 * g), C);
            for (var a = 0; C / (10 * g) > a; a++) i.mt(0, a * (10 * g)).lt(x, a * (10 * g))
          }
          var s = 80;
          i.s("#FFFFFF").ss(8), i.mt(x / 2, C / 2 - s / 2).lt(x / 2, C / 2 + s / 2), i.mt(x / 2 - s / 2, C / 2).lt(x / 2 + s / 2, C / 2), i.s("#000000").ss(4), i.mt(x / 2, C / 2 - s / 2).lt(x / 2, C / 2 + s / 2), i.mt(x / 2 - s / 2, C / 2).lt(x / 2 + s / 2, C / 2), i.s(o).ss(3), i.dr(0, 0, x, C), r.alpha = .5, S.cache(0, 0, x, C), u.addChild(v), u.addChild(m), h.update()
        }

        function l(e) {
          e || (e = event), h && (String.fromCharCode(e.keyCode) == i.toUpperCase() && (u.visible = !u.visible, h.off("stagemousemove", c), u.visible && (c = h.on("stagemousemove", s, u)), h.update()), String.fromCharCode(e.keyCode) == r.toUpperCase() && (u.removeChild(S), S = null, u.pixels = !u.pixels))
        }
        if (zot(t) && (t = "stage"), zot(o) && (o = "black"), !("stage" == t || t.getBounds && t.getBounds())) return void zog("zim pages - Grid(): Please provide bounds for the obj (setBounds())");
        zot(n) && (n = !0), zot(i) && (i = "G"), zot(r) && (r = "P");
        var h, c, u = this,
          g = 10;
        this.mouseChildren = !1, this.mouseEnabled = !1;
        var p = 80,
          f = 26,
          v = e("#dddddd", o, "#333333");
        v.shape.regX = p / 2, v.shape.regY = -f / 4, v.label.y = 3 * f / 4;
        var m = e("#dddddd", o, "#333333");
        m.shape.regX = -p / 6, m.shape.regY = f / 2, m.label.x = p / 2 + p / 6;
        var z, w, b = p / 6 + p / 2,
          y = 2 * f;
        v.x = b, m.y = y, v.label.text = "x:0", m.label.text = "y:0";
        var x, C, S, T = setInterval(function() {
            "stage" == t ? u && u.getStage() && a() : t && t.getStage() && a()
          }, 100),
          j = !1,
          B = {
            x: 0,
            y: 0
          };
        Object.defineProperty(this, "pixels", {
          get: function() {
            return !n
          },
          set: function(e) {
            n = !e, u.resize()
          }
        }), window.addEventListener("keydown", l), this.resize = function() {
          return u ? (u.removeChild(S), S = null, h && (d(), s(), setTimeout(function() {
            u.removeChild(S), S = null, d()
          }, 200)), !0) : !1
        }, this.dispose = function() {
          return clearInterval(T), u.removeAllChildren(), window.removeEventListener("keydown", l), u.parent && u.parent.removeChild(u), u = null, !0
        }
      }
      var s, d = "obj, color, percent, hideKey, pixelKey";
      return (s = zob(e.Grid, arguments, d)) ? s : (a.prototype = new createjs.Container, a.prototype.constructor = e.Grid, new a)
    }, e.GridManager = function() {
      e.Manager.call(this, "GridManager")
    }, e.GridManager.prototype = new e.Manager, e.GridManager.prototype.constructor = e.GridManager, e.Layout = function(t, o, n, i, r, a, s, d) {
      function l() {
        function l() {
          for (var e = 0, t = 0; t < o.length; t++) p = o[t], p.given = 0, 0 == p[m] && (e += p.object.getBounds()[m]);
          for (var t = 0; t < o.length; t++) p = o[t], 0 == p[m] && (p.given = p.object.getBounds()[m] / e * S)
        }

        function h(e) {
          e || (e = event), a && String.fromCharCode(e.keyCode) == d.toUpperCase() && (a.visible = !a.visible, a.getStage() && a.getStage().update())
        }
        if (zot(t) || !t.getBounds) return void zog("zim pages - Layout(): please provide an object with bounds set that holds the objects being laid out");
        if (s = zot(s) ? t : s, !s.getBounds || !s.getBounds()) return void zog("zim pages - Layout(): holder must have bounds set or provide a scalingObject with bounds");
        var c = s.getBounds();
        t.setBounds(0, 0, c.width, c.height), zot(n) && (n = 0), zot(r) && (r = !0), zot(i) && (i = ""), zot(d) && (d = "B"), e.dashedLinesOn();
        var u = new createjs.Shape,
          g = this;
        this.active = !0, this.regions = o;
        var p, f = 0,
          v = "minWidth",
          m = "width",
          z = "height",
          w = "marginLeft",
          b = "maxHeight",
          y = "x",
          x = "y";
        r && (v = "minHeight", m = "height", z = "width", w = "marginTop", b = "maxWidth", y = "y", x = "x");
        for (var C = 0; C < o.length; C++) {
          if (p = o[C], !p.object || !p.object.getBounds()) return void zog("zim pages - Layout(): each region object must have an object with setBounds() set");
          p[v] || (p[v] = 0), p[m] || (p[m] = 0), p.backgroundColor || (p.backgroundColor = ""), p.given = 0, p.maxGiven = 0, p[w] || (p[w] = 0), p[b] || (p[b] = 100), r ? (p.align || (p.align = "middle"), p.valign || (0 == C ? p.valign = "top" : C == o.length - 1 ? p.valign = "bottom" : p.valign = "middle", 1 == o.length && (p.valign = "middle"))) : (p.valign || (p.valign = "top"), p.align || (0 == C ? p.align = "left" : C == o.length - 1 ? p.align = "right" : p.align = "middle", 1 == o.length && (p.align = "middle"))), p[m] && (p[v] = 0), f += p[m] + p[w]
        }
        if (f += n, f > 100) return void zog("zim pages - Layout(): cannot fit regions into 100% bounds");
        var S = 100 - f;
        l(), this.resize = function() {
          if (g.active) {
            c = s.getBounds(), t.setBounds(0, 0, c.width, c.height), u.graphics.clear(), "" != i && u.graphics.f(i).r(0, 0, c.width, c.height);
            for (var d = 0; d < o.length; d++) p = o[d], p.maxGiven = 0, p.marginGiven = 0;
            for (var h, y, x, C, T, j, B, M = !0, k = S; M;) {
              y = 0, M = !1, h = !0;
              for (var d = 0; d < o.length; d++) p = o[d], p.given > 0 && 0 == p.maxGiven && (x = p.object.getBounds()[m], C = p.object.getBounds()[z], T = p.given * c[m] / 100, j = p[b] * c[z] / 100, B = C / x * T, B > j ? (M = !0, p.maxGiven = x / C * j * 100 / c[m], y += p.given - p.maxGiven, k -= p.maxGiven) : h = !1);
              if (!M) break;
              if (h) break;
              totalPrimaries = 0;
              for (var d = 0; d < o.length; d++) p = o[d], 0 == p[m] && 0 == p.maxGiven && (totalPrimaries += p.object.getBounds()[m]);
              for (var d = 0; d < o.length; d++) p = o[d], 0 == p[m] && 0 == p.maxGiven && (p.given = p.object.getBounds()[m] / totalPrimaries * k)
            }
            var E = !0;
            if (p = o[0], p.maxGiven > 0 ? p.maxGiven < p[v] && (p[m] = p[v], E = !1) : p.given > 0 && p.given < p[v] && (p[m] = p[v], E = !1), p = o[o.length - 1], p.maxGiven > 0 ? p.maxGiven < p[v] && (p[m] = p[v], E = !1) : p.given > 0 && p.given < p[v] && (p[m] = p[v], E = !1), !E) {
              f = 0;
              for (var d = 0; d < o.length; d++) p = o[d], f += p[m] + p[w];
              return f += n, f > 100 ? void zog("zim build - Layout(): cannot fit regions into 100% bounds") : (S = 100 - f, l(), void g.resize())
            }
            for (var P = !0, I = 0, O = 0, d = 0; d < o.length; d++) p = o[d], I += p[w], p[m] > 0 ? O += p[m] : p.maxGiven > 0 ? O += p.maxGiven : p.given > 0 && (O += p.given), 0 == p[m] && (P = !1);
            if (P || h) {
              I += n;
              var A = 100 - O - I;
              if (I -= n + o[0][w], 0 != A && 0 != I)
                for (var d = 0; d < o.length; d++) 0 != d && (p = o[d], p.marginGiven = p[w] / I * (I + A))
            }
            var x, C, L, X, Y, R = 0,
              D = 0;
            if (a && a.graphics) {
              var G = a.graphics;
              G.c()
            }
            for (var d = 0; d < o.length; d++) p = o[d], R += p.marginGiven > 0 ? p.marginGiven * c[m] / 100 : p[w] * c[m] / 100, x = p[m] > 0 ? p[m] : p.maxGiven > 0 ? p.maxGiven : p.given > 0 ? p.given : 0, x = x * c[m] / 100, C = p[b] * c[z] / 100, D = (c[z] - C) / 2, L = r ? e.fit(p.object, D, R, C, x) : e.fit(p.object, R, D, x, C), "top" == p.valign ? p.object.y = L.bY : "bottom" == p.valign && (p.object.y = L.bY + L.bHeight - L.height), "left" == p.align ? p.object.x = L.bX : "right" == p.align && (p.object.x = L.bX + L.bWidth - L.width), a && a.graphics && (G.s("white").ss(2).r(L.bX, L.bY, L.bWidth, L.bHeight), G.s("#ff8203").ss(2).drawDashedRect(L.bX, L.bY, L.bWidth, L.bHeight, 20)), Y = X = 0, (0 == R || R + x == c[m]) && (r ? Y = 1 : X = 1), C == c[z] && (r ? X = 1 : Y = 1), "" != p.backgroundColor && u.graphics.f(p.backgroundColor).r(L.bX, L.bY, L.bWidth + X, L.bHeight + Y), R += x
          }
        }, this.resize(), a && t.addChild(a), t.addChildAt(u, 0), window.addEventListener("keydown", h), this.disable = function() {
          g.active = !1, window.removeEventListener("keydown", h), a && (a.alpha = 0)
        }, this.enable = function() {
          g.active = !0, window.addEventListener("keydown", h), g.resize(), a && (a.alpha = 1)
        }, this.removeShape = function() {
          a && (a.graphics.clear(), t.removeChild(a), a = null, a = !1), window.removeEventListener("keydown", h)
        }, this.addShape = function(e, o) {
          g.removeShape(), a = e, window.addEventListener("keydown", h), t.addChild(a), g.resize()
        }, this.dispose = function() {
          return g.removeShape(), !0
        }
      }
      var h, c = "holder, regions, lastMargin, backgroundColor, vertical, regionShape, scalingObject, hideKey";
      return (h = zob(e.Layout, arguments, c)) ? h : (l.prototype = new createjs.EventDispatcher, l.prototype.constructor = e.Layout, new l)
    }, e.LayoutManager = function() {
      zon && zog("zim pages - LayoutManager");
      var e = this;
      this.items = [], this.add = function(t) {
        e.items.push(t)
      }, this.resize = function() {
        for (var t = 0; t < e.items.length; t++) e.items[t].resize()
      }, this.disable = function() {
        for (var t = 0; t < e.items.length; t++) e.items[t].disable()
      }, this.enable = function() {
        for (var t = 0; t < e.items.length; t++) e.items[t].enable()
      }, this.dispose = function() {
        for (var t = 0; t < e.items.length; t++) e.items[t].removeShape();
        return !0
      }
    }, e
  }(zim || {}),
  zim = function(e) {
    return zon && zog("ZIM FRAME Module"), e.Frame = function(t, o, n, i, r, a) {
      function s() {
        function s() {
          c(), d(), a && setTimeout(function() {
            window.scrollTo(0, 0)
          }, 100), m.dispatchEvent("ready"), "full" == t && (b = !0, l(), u && setTimeout(function() {
            h()
          }, 250), u && setTimeout(function() {
            h()
          }, 500))
        }

        function d() {
          "none" != t && h(), "full" == t && (m.zil = zil()), v = new createjs.Stage("myCanvas"), v.setBounds(0, 0, z, w), i && v.enableMouseOver(10), r && createjs.Touch.enable(v, !0)
        }

        function l() {
          b && m.dispatchEvent("resize")
        }

        function h() {
          var o, n, i = zid("myCanvas"),
            r = e.windowWidth(),
            a = e.windowHeight();
          if (p = m.orientation = r > a ? "horizontal" : "vertical", p != f && (f = p, m.dispatchEvent("orientation")), i) {
            if ("fit" == t) r / a >= z / w ? (n = a, o = n * z / w) : (o = r, n = o * w / z);
            else if ("outside" == t) document.body.style.overflow = "hidden", r / a >= z / w ? (o = r, n = o * w / z) : (n = a, o = n * z / w);
            else if ("full" == t) return document.body.style.overflow = "hidden", i.style.left = i.style.top = "0px", z = r, w = a, v && v.setBounds(0, 0, z, w), void l();
            i.style.width = o + "px", i.style.height = n + "px", i.style.left = (r - o) / 2 + "px", i.style.top = (a - n) / 2 + "px"
          }
        }

        function c() {
          var e = document.createElement("canvas");
          e.setAttribute("id", "myCanvas"), g = Math.max(window.innerWidth, screen.width, window.innerHeight, screen.height), "ios" != u && (g *= 3), "full" == t ? (e.setAttribute("width", g), e.setAttribute("height", g)) : (e.setAttribute("width", z), e.setAttribute("height", w)), document.body.appendChild(e)
        }
        var u = e.mobile();
        zot(t) && (t = "full"), zot(o) && (o = 500), zot(n) && (n = 500), zot(i) && (i = !u), zot(r) && (r = !0), zot(a) && (a = !0);
        var g, p, f, v, m = this,
          z = o,
          w = n,
          b = !1;
        window.addEventListener("load", function() {
          "android" == u ? setTimeout(function() {
            s()
          }, 500) : s()
        }), "none" != t && window.addEventListener("resize", function() {
          h(), u && setTimeout(function() {
            h()
          }, 250), u && setTimeout(function() {
            h()
          }, 500)
        }), this.assets = {}, this.loadAssets = function(e, t, o) {
          if (!zot(e)) {
            zot(o) && (o = !1), Array.isArray(e) || (e = [e]);
            var n, i, r, a = !1,
              s = [],
              d = /\.([^.]+)$/i;
            for (r = 0; r < e.length; r++) n = e[r], i = n.match(d), createjs.Sound.SUPPORTED_EXTENSIONS.indexOf(i[1]) >= 0 && (a = !0), s.push({
              src: n
            });
            m.preload = new createjs.LoadQueue(o, t), a && m.preload.installPlugin(createjs.Sound), m.preload.on("progress", function(e) {
              m.dispatchEvent(e)
            }), m.preload.on("error", function(e) {
              m.dispatchEvent(e)
            }), m.preload.on("fileload", function(e) {
              var t, o = e.item,
                n = o.id.match(d);
              createjs.Sound.SUPPORTED_EXTENSIONS.indexOf(n[1]) >= 0 ? t = m.assets[o.id] = {
                type: "sound",
                play: function() {
                  return createjs.Sound.play(o.id)
                }
              } : (t = m.assets[o.id] = new createjs.Bitmap(e.result), t.type = "image");
              var i = new createjs.Event("assetload");
              i.item = o, i.asset = t, m.dispatchEvent(i)
            }), m.preloadEvent = m.preload.on("complete", function(e) {
              m.dispatchEvent(e)
            }), m.preload.loadManifest(s)
          }
        }, this.asset = function(e) {
          return zot(e) ? void 0 : m.assets[e] || {
            play: function() {
              return zon ? (zog("zim.Frame - asset(sound) not found"), {}) : void 0
            }
          }
        }, Object.defineProperty(m, "stage", {
          get: function() {
            return v
          },
          set: function(e) {
            zog("zim.Frame(): stage is read only - see remakeCanvas(), perhaps")
          }
        }), Object.defineProperty(m, "stageW", {
          get: function() {
            return z
          },
          set: function(e) {
            zog("zim.Frame(): stageW is read only - see remakeCanvas(), perhaps")
          }
        }), Object.defineProperty(m, "stageH", {
          get: function() {
            return w
          },
          set: function(e) {
            zog("zim.Frame(): stageH is read only - see remakeCanvas(), perhaps")
          }
        }), Object.defineProperty(m, "width", {
          get: function() {
            return z
          },
          set: function(e) {
            zog("zim.Frame(): width is read only - see remakeCanvas(), perhaps")
          }
        }), Object.defineProperty(m, "height", {
          get: function() {
            return w
          },
          set: function(e) {
            zog("zim.Frame(): height is read only - see remakeCanvas(), perhaps")
          }
        }), this.remakeCanvas = function(e, o) {
          "full" != t && (zot(e) && (e = z), zot(o) && (o = w), zid("myCanvas") && zid("myCanvas").parentNode.removeChild(zid("myCanvas")), z = e, w = o, c(), d())
        }, this.dispose = function() {
          return window.removeEventListener("resize", h), v.removeAllChildren(), v.removeAllEventListeners(), zid("myCanvas") && zid("myCanvas").parentNode.removeChild(zid("myCanvas")), v = null, m = null, !0
        }, this.orange = this.wrap = "#f58e25", this.green = this.code = "#acd241", this.pink = this.create = "#e472c4", this.blue = this.build = "#50c4b7", this.brown = this.pages = "#d1a170", this.silver = this.frame = "#999999", this.tin = this.examples = "#777777", this.grey = this.cdn = "#555555", this.lighter = this.template = "#eeeeee", this.light = this.docs = "#cccccc", this.dark = this.bits = "#333333", this.darker = this.zim = "#111111", this.purple = this.github = "#993399", this.makeCircles = function(e) {
          zot(e) && (e = 100);
          var t = [m.wrap, m.code, m.create, m.build, m.pages, m.bits],
            o = new createjs.Shape,
            n = o.graphics;
          o.radius = e;
          for (var i = 0; i < t.length; i++) n.f(t[i]).dc(0, 0, o.radius / t.length * (t.length - i));
          return o.setBounds(-o.radius, -o.radius, 2 * o.radius, 2 * o.radius), o.width = o.height = 2 * e, o
        }
      }
      var d, l = "scaling, width, height, rollover, touch, scrollTop";
      return (d = zob(e.Frame, arguments, l)) ? d : (s.prototype = new createjs.EventDispatcher, s.prototype.constructor = e.Frame, new s)
    }, e
  }(zim || {});
