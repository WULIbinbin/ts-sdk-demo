import { defineComponent, ref, reactive, readonly, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const input = ref('')
    const handleChangeRef = (event) => {
      console.log(event)
      input.value = event.target.value
    }
    const state = reactive({
      input: ''
    })
    const handleChangeRec = (event) => {
      state.input = event.target.value
    }
    const readonlyData = readonly(reactive({
      input: '输入也没用'
    }))
    const handleChangeReadonly = (event) => {
      readonlyData.input = event.target.value
    }
    onMounted(() => {

    })
    return () => (
      <div>
        <h2 class='b-main-title'>响应式示例</h2>
      </div>
    )
  }
})