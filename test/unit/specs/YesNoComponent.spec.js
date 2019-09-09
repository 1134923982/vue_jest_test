import YesNoComponent from '@/components/YesNoComponent'
import { mount } from '@vue/test-utils'
import sinon, {assert} from 'sinon'

describe('Click event', () => {
  it('Click on yes button calls our method with argument "yes"', () => {
    const spy = sinon.spy()
    const wrapper = mount(YesNoComponent, {
      propsData: {
        callMe: spy
      }
    })
    wrapper.find('button.yes').trigger('click')
    expect(spy.called).toBe(true)
    expect(spy.args[0][0]).toBe('yes')
  })
})
