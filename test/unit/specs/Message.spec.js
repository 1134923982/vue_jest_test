import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message.vue'
import Vue from 'vue'

describe('Message', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Message, {
      propsData: { msg }
    })
    expect(wrapper.text()).toBe(msg)
  })

  it('renders default message if not passed a prop', () => {
    const defaultMessage = 'default message'
    const wrapper = shallowMount(Message)
    expect(wrapper.text()).toBe(defaultMessage)
  })

  it('add by Message Method add', () => {
    const defaultMessage = 'default message'
    const wrapper = shallowMount(Message)
    // console.log(wrapper.vm.add(1,2))
    expect(wrapper.vm.add(1,2)).toBe(3)
  })


})
