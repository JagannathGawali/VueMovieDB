import axios from 'axios';
import moxios from 'moxios';

let requestUrl = `https://api.themoviedb.org/3/list/1?api_key=59f463b1b416a6627e1ea6095f689dda&language=en-US`;
moxios.stubRequest(requestUrl, {
    status: 200,
    responseText: 'hello'
})

let onFulfilled = sinon.spy()
axios.get(requestUrl).then(onFulfilled)

moxios.wait(function () {
    console.log(onFulfilled);
    // equal(onFulfilled.getCall(0).args[0].data, 'hello')
    done()
})
