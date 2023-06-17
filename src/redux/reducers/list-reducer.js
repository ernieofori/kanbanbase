const initialState = [
  {
    title: 'Test List',
    id: 0,
    cards: [
      {
        id: 0,
        text: " This is a Test Card Description to take up some space and render some static data."
      },
      {
        id: 1,
        text: "This is a second Test card description and should be after the first.."
      }
    ]
  },
  {
    title: 'Test List - To Do',
    id: 1,
    cards: [
      {
        id: 0,
        text: 'connect store to component state'
      },
      {
        id: 1,
        text: 'render many more cards with static data.'
      },
      {
        id: 2,
        text: 'And fix some font and styling'
      }
    ]
  }
]

const listReducer = (state=initialState, action) => {
  switch(action.type){
    default: 
      return state
  }
}

export default listReducer