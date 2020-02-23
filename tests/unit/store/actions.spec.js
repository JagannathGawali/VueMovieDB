// import * as mutations from '@/store/actions';
import axios from 'axios';
// import moxios from 'moxios';
// import sinon from 'sinon';
import { expect } from 'chai'
import nock from 'nock'

describe('actions',function() {

    it('fetchMovies',async function(done) {
        // this.timeout(60000);
        let requestUrl = `https://api.themoviedb.org`;
       let path =`/3/list/1?api_key=59f463b1b416a6627e1ea6095f689dda&language=en-US`;
        nock(requestUrl).get(path).reply(200,{
            "status": 200,
            responseText: 'hello'
        })
        let res = await axios.get(`${requestUrl}${path}`)
            expect(res.body.status).to.equal(200);
            done()
    
       

    })
})