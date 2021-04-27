import { mount } from '@vue/test-utils'

const App = {
  data() {
    return {
      countNum: 0
    }
  },
  props: {
    count: {
      type: Number
    }
  },

  template: `
    <div v-if="countNum % 2 === 0">
      Count: {{ countNum }}. Count is even.
    </div>

    <div v-if="countNum % 2 !== 0">
      Count: {{ countNum }}. Count is odd.
    </div>
  `
}

function factory({ data }) {
  return mount(App, {
    data() {
      return data
    }
  })
}

describe('App', () => {
  it('render count when even', () => {
    const wrapper = factory({
      data: {
        countNum: 2
      }
    })
    expect(wrapper.html()).toContain('Count: 2. Count is even.')
  })

  it('render count when odd', () => {
    const wrapper = factory({
      data: {
        countNum: 1
      }
    })

    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
})
