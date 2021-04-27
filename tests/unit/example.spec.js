import { nextTick } from '@vue/runtime-core'
import { mount } from '@vue/test-utils'

const App = {
  data() {
    return {
      countNum: 0
    }
  },
  methods: {
    increment() {
      this.countNum += 1
    }
  },
  props: {
    count: {
      type: Number
    }
  },

  template: `
    <button @click="increment" />
    <div v-if="countNum % 2 === 0">
      Count: {{ countNum }}. Count is even.
    </div>

    <div v-if="countNum % 2 !== 0">
      Count: {{ countNum }}. Count is odd.
    </div>
  `
}

function factory({ data } = { data: {} }) {
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

  it('render count when odd',async () => {
    const wrapper = factory()

    
    await wrapper.find('button').trigger('click')
    
    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
})
