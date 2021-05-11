'use strict'

import createElement from '../utils/createElement.js'

export const Button = button => createElement('button', { class: 'button' }, [button])
