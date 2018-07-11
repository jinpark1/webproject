module.exports = {
    test: (a, b) => {
        return a + b;
    },

    componentDidMount: (category) => {
        if(category === 'All'){
            return 'Here is all the data from all the categories.'
        } else {
            return 'Here is all the data from specific category'
        }
    },
}

