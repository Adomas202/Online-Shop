const initState = {
    projects: [
        {id: '1', title: 'Labas, kaip sekasi', content: 'Normaliai cia jau parasyta'},
        {id: '2', title: 'Labas, kaip skasi', content: 'Normaliai cia jau parasyta'},
        {id: '3', title: 'Labas, kaip', content: 'Normaliai cia jau parasyta'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
        console.log('created project', action.project)
    }
    return state;
}

export default projectReducer;