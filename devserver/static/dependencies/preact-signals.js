import { Component as x$1, options as l$1, isValidElement as t$1 } from './preact.js'
import { useRef as A$1, useMemo as T, useEffect as y$2 } from './preact-hooks.js'

const i = Symbol.for('preact-signals')
function t() {
	if (r > 1) {
		r--
		return
	}
	let i,
		t = false
	while (void 0 !== s) {
		let o = s
		s = void 0
		f++
		while (void 0 !== o) {
			const n = o.o
			o.o = void 0
			o.f &= -3
			if (!(8 & o.f) && v$1(o))
				try {
					o.c()
				} catch (o) {
					if (!t) {
						i = o
						t = true
					}
				}
			o = n
		}
	}
	f = 0
	r--
	if (t) throw i
}
function o(i) {
	if (r > 0) return i()
	r++
	try {
		return i()
	} finally {
		t()
	}
}
let n, s
function h$1(i) {
	const t = n
	n = void 0
	try {
		return i()
	} finally {
		n = t
	}
}
let r = 0,
	f = 0,
	e = 0
function c(i) {
	if (void 0 === n) return
	let t = i.n
	if (void 0 === t || t.t !== n) {
		t = { i: 0, S: i, p: n.s, n: void 0, t: n, e: void 0, x: void 0, r: t }
		if (void 0 !== n.s) n.s.n = t
		n.s = t
		i.n = t
		if (32 & n.f) i.S(t)
		return t
	} else if (-1 === t.i) {
		t.i = 0
		if (void 0 !== t.n) {
			t.n.p = t.p
			if (void 0 !== t.p) t.p.n = t.n
			t.p = n.s
			t.n = void 0
			n.s.n = t
			n.s = t
		}
		return t
	}
}
function u(i) {
	this.v = i
	this.i = 0
	this.n = void 0
	this.t = void 0
}
u.prototype.brand = i
u.prototype.h = function () {
	return true
}
u.prototype.S = function (i) {
	if (this.t !== i && void 0 === i.e) {
		i.x = this.t
		if (void 0 !== this.t) this.t.e = i
		this.t = i
	}
}
u.prototype.U = function (i) {
	if (void 0 !== this.t) {
		const t = i.e,
			o = i.x
		if (void 0 !== t) {
			t.x = o
			i.e = void 0
		}
		if (void 0 !== o) {
			o.e = t
			i.x = void 0
		}
		if (i === this.t) this.t = o
	}
}
u.prototype.subscribe = function (i) {
	return E(() => {
		const t = this.value,
			o = n
		n = void 0
		try {
			i(t)
		} finally {
			n = o
		}
	})
}
u.prototype.valueOf = function () {
	return this.value
}
u.prototype.toString = function () {
	return this.value + ''
}
u.prototype.toJSON = function () {
	return this.value
}
u.prototype.peek = function () {
	const i = n
	n = void 0
	try {
		return this.value
	} finally {
		n = i
	}
}
Object.defineProperty(u.prototype, 'value', {
	get() {
		const i = c(this)
		if (void 0 !== i) i.i = this.i
		return this.v
	},
	set(i) {
		if (i !== this.v) {
			if (f > 100) throw new Error('Cycle detected')
			this.v = i
			this.i++
			e++
			r++
			try {
				for (let i = this.t; void 0 !== i; i = i.x) i.t.N()
			} finally {
				t()
			}
		}
	},
})
function d$1(i) {
	return new u(i)
}
function v$1(i) {
	for (let t = i.s; void 0 !== t; t = t.n)
		if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return true
	return false
}
function l(i) {
	for (let t = i.s; void 0 !== t; t = t.n) {
		const o = t.S.n
		if (void 0 !== o) t.r = o
		t.S.n = t
		t.i = -1
		if (void 0 === t.n) {
			i.s = t
			break
		}
	}
}
function y$1(i) {
	let t,
		o = i.s
	while (void 0 !== o) {
		const i = o.p
		if (-1 === o.i) {
			o.S.U(o)
			if (void 0 !== i) i.n = o.n
			if (void 0 !== o.n) o.n.p = i
		} else t = o
		o.S.n = o.r
		if (void 0 !== o.r) o.r = void 0
		o = i
	}
	i.s = t
}
function a$1(i) {
	u.call(this, void 0)
	this.x = i
	this.s = void 0
	this.g = e - 1
	this.f = 4
}
;(a$1.prototype = new u()).h = function () {
	this.f &= -3
	if (1 & this.f) return false
	if (32 == (36 & this.f)) return true
	this.f &= -5
	if (this.g === e) return true
	this.g = e
	this.f |= 1
	if (this.i > 0 && !v$1(this)) {
		this.f &= -2
		return true
	}
	const i = n
	try {
		l(this)
		n = this
		const i = this.x()
		if (16 & this.f || this.v !== i || 0 === this.i) {
			this.v = i
			this.f &= -17
			this.i++
		}
	} catch (i) {
		this.v = i
		this.f |= 16
		this.i++
	}
	n = i
	y$1(this)
	this.f &= -2
	return true
}
a$1.prototype.S = function (i) {
	if (void 0 === this.t) {
		this.f |= 36
		for (let i = this.s; void 0 !== i; i = i.n) i.S.S(i)
	}
	u.prototype.S.call(this, i)
}
a$1.prototype.U = function (i) {
	if (void 0 !== this.t) {
		u.prototype.U.call(this, i)
		if (void 0 === this.t) {
			this.f &= -33
			for (let i = this.s; void 0 !== i; i = i.n) i.S.U(i)
		}
	}
}
a$1.prototype.N = function () {
	if (!(2 & this.f)) {
		this.f |= 6
		for (let i = this.t; void 0 !== i; i = i.x) i.t.N()
	}
}
Object.defineProperty(a$1.prototype, 'value', {
	get() {
		if (1 & this.f) throw new Error('Cycle detected')
		const i = c(this)
		this.h()
		if (void 0 !== i) i.i = this.i
		if (16 & this.f) throw this.v
		return this.v
	},
})
function w$1(i) {
	return new a$1(i)
}
function _$1(i) {
	const o = i.u
	i.u = void 0
	if ('function' == typeof o) {
		r++
		const s = n
		n = void 0
		try {
			o()
		} catch (t) {
			i.f &= -2
			i.f |= 8
			g$1(i)
			throw t
		} finally {
			n = s
			t()
		}
	}
}
function g$1(i) {
	for (let t = i.s; void 0 !== t; t = t.n) t.S.U(t)
	i.x = void 0
	i.s = void 0
	_$1(i)
}
function p$1(i) {
	if (n !== this) throw new Error('Out-of-order effect')
	y$1(this)
	n = i
	this.f &= -2
	if (8 & this.f) g$1(this)
	t()
}
function b$1(i) {
	this.x = i
	this.u = void 0
	this.s = void 0
	this.o = void 0
	this.f = 32
}
b$1.prototype.c = function () {
	const i = this.S()
	try {
		if (8 & this.f) return
		if (void 0 === this.x) return
		const t = this.x()
		if ('function' == typeof t) this.u = t
	} finally {
		i()
	}
}
b$1.prototype.S = function () {
	if (1 & this.f) throw new Error('Cycle detected')
	this.f |= 1
	this.f &= -9
	_$1(this)
	l(this)
	r++
	const i = n
	n = this
	return p$1.bind(this, i)
}
b$1.prototype.N = function () {
	if (!(2 & this.f)) {
		this.f |= 2
		this.o = s
		s = this
	}
}
b$1.prototype.d = function () {
	this.f |= 8
	if (!(1 & this.f)) g$1(this)
}
function E(i) {
	const t = new b$1(i)
	try {
		t.c()
	} catch (i) {
		t.d()
		throw i
	}
	return t.d.bind(t)
}

let a,
	h,
	d,
	p = [],
	_ = []
E(function () {
	a = this.N
})()
function m(t, e) {
	l$1[t] = e.bind(null, l$1[t] || (() => {}))
}
function v(t) {
	if (d) d()
	d = t && t.S()
}
function g({ data: t }) {
	const i = useSignal(t)
	i.value = t
	const [o, f] = T(() => {
		let t = this,
			n = this.__v
		while ((n = n.__))
			if (n.__c) {
				n.__c.__$f |= 4
				break
			}
		const o = w$1(() => {
				let t = i.value.value
				return 0 === t ? 0 : true === t ? '' : t || ''
			}),
			f = w$1(() => !t$1(o.value)),
			s = E(function () {
				this.N = A
				if (f.value) {
					const i = o.value
					if (t.base && 3 === t.base.nodeType) t.base.data = i
				}
			}),
			c = this.__$u.d
		this.__$u.d = function () {
			s()
			c.call(this)
		}
		return [f, o]
	}, [])
	return o.value ? f.peek() : f.value
}
g.displayName = '_st'
Object.defineProperties(u.prototype, {
	constructor: { configurable: true, value: void 0 },
	type: { configurable: true, value: g },
	props: {
		configurable: true,
		get() {
			return { data: this }
		},
	},
	__b: { configurable: true, value: 1 },
})
m('__b', (t, i) => {
	if ('string' == typeof i.type) {
		let t,
			e = i.props
		for (let n in e) {
			if ('children' === n) continue
			let o = e[n]
			if (o instanceof u) {
				if (!t) i.__np = t = {}
				t[n] = o
				e[n] = o.peek()
			}
		}
	}
	t(i)
})
m('__r', (t, i) => {
	v()
	let e,
		n = i.__c
	if (n) {
		n.__$f &= -2
		e = n.__$u
		if (void 0 === e)
			n.__$u = e = (function (t) {
				let i
				E(function () {
					i = this
				})
				i.c = () => {
					n.__$f |= 1
					n.setState({})
				}
				return i
			})()
	}
	h = n
	v(e)
	t(i)
})
m('__e', (t, i, e, n) => {
	v()
	h = void 0
	t(i, e, n)
})
m('diffed', (t, i) => {
	v()
	h = void 0
	let e
	if ('string' == typeof i.type && (e = i.__e)) {
		let t = i.__np,
			n = i.props
		if (t) {
			let i = e.U
			if (i)
				for (let e in i) {
					let n = i[e]
					if (void 0 !== n && !(e in t)) {
						n.d()
						i[e] = void 0
					}
				}
			else {
				i = {}
				e.U = i
			}
			for (let o in t) {
				let f = i[o],
					r = t[o]
				if (void 0 === f) {
					f = b(e, o, r, n)
					i[o] = f
				} else f.o(r, n)
			}
		}
	}
	t(i)
})
function b(t, i, e, n) {
	const o = i in t && void 0 === t.ownerSVGElement,
		f = d$1(e)
	return {
		o: (t, i) => {
			f.value = t
			n = i
		},
		d: E(function () {
			this.N = A
			const e = f.value.value
			if (n[i] !== e) {
				n[i] = e
				if (o) t[i] = e
				else if (e) t.setAttribute(i, e)
				else t.removeAttribute(i)
			}
		}),
	}
}
m('unmount', (t, i) => {
	if ('string' == typeof i.type) {
		let t = i.__e
		if (t) {
			const i = t.U
			if (i) {
				t.U = void 0
				for (let t in i) {
					let e = i[t]
					if (e) e.d()
				}
			}
		}
	} else {
		let t = i.__c
		if (t) {
			const i = t.__$u
			if (i) {
				t.__$u = void 0
				i.d()
			}
		}
	}
	t(i)
})
m('__h', (t, i, e, n) => {
	if (n < 3 || 9 === n) i.__$f |= 2
	t(i, e, n)
})
x$1.prototype.shouldComponentUpdate = function (t, i) {
	const e = this.__$u,
		n = e && void 0 !== e.s
	for (let t in i) return true
	if (this.__f || ('boolean' == typeof this.u && true === this.u)) {
		const t = 2 & this.__$f
		if (!(n || t || 4 & this.__$f)) return true
		if (1 & this.__$f) return true
	} else {
		if (!(n || 4 & this.__$f)) return true
		if (3 & this.__$f) return true
	}
	for (let i in t) if ('__source' !== i && t[i] !== this.props[i]) return true
	for (let i in this.props) if (!(i in t)) return true
	return false
}
function useSignal(t) {
	return T(() => d$1(t), [])
}
function useComputed(t) {
	const i = A$1(t)
	i.current = t
	h.__$f |= 4
	return T(() => w$1(() => i.current()), [])
}
const y =
		'undefined' == typeof requestAnimationFrame ? setTimeout : requestAnimationFrame,
	k = (t) => {
		queueMicrotask(() => {
			queueMicrotask(t)
		})
	}
function q() {
	o(() => {
		let t
		while ((t = p.shift())) a.call(t)
	})
}
function w() {
	if (1 === p.push(this)) (l$1.requestAnimationFrame || y)(q)
}
function x() {
	o(() => {
		let t
		while ((t = _.shift())) a.call(t)
	})
}
function A() {
	if (1 === _.push(this)) (l$1.requestAnimationFrame || k)(x)
}
function useSignalEffect(t) {
	const i = A$1(t)
	i.current = t
	y$2(
		() =>
			E(function () {
				this.N = w
				return i.current()
			}),
		[],
	)
}

export {
	u as Signal,
	o as batch,
	w$1 as computed,
	E as effect,
	d$1 as signal,
	h$1 as untracked,
	useComputed,
	useSignal,
	useSignalEffect,
}
