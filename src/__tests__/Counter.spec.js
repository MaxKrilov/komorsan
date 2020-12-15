



import { mount }  from '@vue/test-utils'
import Counter from '@/__test_fake_vue_components/Counter.vue'


describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  // Вы можете получить доступ к экземпляру Vue через `wrapper.vm`
// const vm = wrapper.vm

// // Чтобы изучить wrapper подробнее, просто выведите его в консоль
// // и ваши приключения с `vue-test-utils` начнутся
// console.log(wrapper)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})

