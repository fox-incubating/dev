import { options as l$1 } from './preact.js'

var t,
	r,
	u,
	i,
	o = 0,
	f = [],
	c = l$1,
	e = c.__b,
	a = c.__r,
	v = c.diffed,
	l = c.__c,
	m = c.unmount,
	s = c.__
function p(n, t) {
	c.__h && c.__h(r, n, o || t), (o = 0)
	var u = r.__H || (r.__H = { __: [], __h: [] })
	return n >= u.__.length && u.__.push({}), u.__[n]
}
function d(n) {
	return (o = 1), h(D, n)
}
function h(n, u, i) {
	var o = p(t++, 2)
	if (
		((o.t = n),
		!o.__c &&
			((o.__ = [
				i ? i(u) : D(void 0, u),
				function (n) {
					var t = o.__N ? o.__N[0] : o.__[0],
						r = o.t(t, n)
					t !== r && ((o.__N = [r, o.__[1]]), o.__c.setState({}))
				},
			]),
			(o.__c = r),
			!r.__f))
	) {
		var f = function (n, t, r) {
			if (!o.__c.__H) return true
			var u = o.__c.__H.__.filter(function (n) {
				return !!n.__c
			})
			if (
				u.every(function (n) {
					return !n.__N
				})
			)
				return !c || c.call(this, n, t, r)
			var i = o.__c.props !== n
			return (
				u.forEach(function (n) {
					if (n.__N) {
						var t = n.__[0]
						;(n.__ = n.__N), (n.__N = void 0), t !== n.__[0] && (i = true)
					}
				}),
				(c && c.call(this, n, t, r)) || i
			)
		}
		r.__f = true
		var c = r.shouldComponentUpdate,
			e = r.componentWillUpdate
		;(r.componentWillUpdate = function (n, t, r) {
			if (this.__e) {
				var u = c
				;(c = void 0), f(n, t, r), (c = u)
			}
			e && e.call(this, n, t, r)
		}),
			(r.shouldComponentUpdate = f)
	}
	return o.__N || o.__
}
function y(n, u) {
	var i = p(t++, 3)
	!c.__s && C(i.__H, u) && ((i.__ = n), (i.u = u), r.__H.__h.push(i))
}
function _(n, u) {
	var i = p(t++, 4)
	!c.__s && C(i.__H, u) && ((i.__ = n), (i.u = u), r.__h.push(i))
}
function A(n) {
	return (
		(o = 5),
		T(function () {
			return { current: n }
		}, [])
	)
}
function F(n, t, r) {
	;(o = 6),
		_(
			function () {
				if ('function' == typeof n) {
					var r = n(t())
					return function () {
						n(null), r && 'function' == typeof r && r()
					}
				}
				if (n)
					return (
						(n.current = t()),
						function () {
							return (n.current = null)
						}
					)
			},
			null == r ? r : r.concat(n),
		)
}
function T(n, r) {
	var u = p(t++, 7)
	return C(u.__H, r) && ((u.__ = n()), (u.__H = r), (u.__h = n)), u.__
}
function q(n, t) {
	return (
		(o = 8),
		T(function () {
			return n
		}, t)
	)
}
function x(n) {
	var u = r.context[n.__c],
		i = p(t++, 9)
	return (i.c = n), u ? (null == i.__ && ((i.__ = true), u.sub(r)), u.props.value) : n.__
}
function P(n, t) {
	c.useDebugValue && c.useDebugValue(t ? t(n) : n)
}
function b(n) {
	var u = p(t++, 10),
		i = d()
	return (
		(u.__ = n),
		r.componentDidCatch ||
			(r.componentDidCatch = function (n, t) {
				u.__ && u.__(n, t), i[1](n)
			}),
		[
			i[0],
			function () {
				i[1](void 0)
			},
		]
	)
}
function g() {
	var n = p(t++, 11)
	if (!n.__) {
		for (var u = r.__v; null !== u && !u.__m && null !== u.__; ) u = u.__
		var i = u.__m || (u.__m = [0, 0])
		n.__ = 'P' + i[0] + '-' + i[1]++
	}
	return n.__
}
function j() {
	for (var n; (n = f.shift()); )
		if (n.__P && n.__H)
			try {
				n.__H.__h.forEach(z), n.__H.__h.forEach(B), (n.__H.__h = [])
			} catch (t) {
				;(n.__H.__h = []), c.__e(t, n.__v)
			}
}
;(c.__b = function (n) {
	;(r = null), e && e(n)
}),
	(c.__ = function (n, t) {
		n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s && s(n, t)
	}),
	(c.__r = function (n) {
		a && a(n), (t = 0)
		var i = (r = n.__c).__H
		i &&
			(u === r
				? ((i.__h = []),
					(r.__h = []),
					i.__.forEach(function (n) {
						n.__N && (n.__ = n.__N), (n.u = n.__N = void 0)
					}))
				: (i.__h.forEach(z), i.__h.forEach(B), (i.__h = []), (t = 0))),
			(u = r)
	}),
	(c.diffed = function (n) {
		v && v(n)
		var t = n.__c
		t &&
			t.__H &&
			(t.__H.__h.length &&
				((1 !== f.push(t) && i === c.requestAnimationFrame) ||
					((i = c.requestAnimationFrame) || w)(j)),
			t.__H.__.forEach(function (n) {
				n.u && (n.__H = n.u), (n.u = void 0)
			})),
			(u = r = null)
	}),
	(c.__c = function (n, t) {
		t.some(function (n) {
			try {
				n.__h.forEach(z),
					(n.__h = n.__h.filter(function (n) {
						return !n.__ || B(n)
					}))
			} catch (r) {
				t.some(function (n) {
					n.__h && (n.__h = [])
				}),
					(t = []),
					c.__e(r, n.__v)
			}
		}),
			l && l(n, t)
	}),
	(c.unmount = function (n) {
		m && m(n)
		var t,
			r = n.__c
		r &&
			r.__H &&
			(r.__H.__.forEach(function (n) {
				try {
					z(n)
				} catch (n) {
					t = n
				}
			}),
			(r.__H = void 0),
			t && c.__e(t, r.__v))
	})
var k = 'function' == typeof requestAnimationFrame
function w(n) {
	var t,
		r = function () {
			clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n)
		},
		u = setTimeout(r, 100)
	k && (t = requestAnimationFrame(r))
}
function z(n) {
	var t = r,
		u = n.__c
	'function' == typeof u && ((n.__c = void 0), u()), (r = t)
}
function B(n) {
	var t = r
	;(n.__c = n.__()), (r = t)
}
function C(n, t) {
	return (
		!n ||
		n.length !== t.length ||
		t.some(function (t, r) {
			return t !== n[r]
		})
	)
}
function D(n, t) {
	return 'function' == typeof t ? t(n) : t
}

export {
	q as useCallback,
	x as useContext,
	P as useDebugValue,
	y as useEffect,
	b as useErrorBoundary,
	g as useId,
	F as useImperativeHandle,
	_ as useLayoutEffect,
	T as useMemo,
	h as useReducer,
	A as useRef,
	d as useState,
}
