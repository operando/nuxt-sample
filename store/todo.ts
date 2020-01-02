export interface State {
  list: string[]
}

export const state = (): State => ({
  list: []
})

export const mutations = {
  add(state: State, s: string) {
    state.list.push(s)
  },
  remove(state: State, todo: string) {
    state.list.splice(state.list.indexOf(todo), 1)
  }
}
