import { expect } from 'chai'
import * as getters from '@/store/getters';
describe('getters',()=>{
    let state = {
        movieList:{
            items:[
                {title:"2 states"},
                {title:"mumbai pune mumbai"}
            ]
        }
    }
    it('getPopularMovies',()=>{
        expect(getters.getPopularMovies(state)).to.deep.equal([
            {title:"2 states"},
            {title:"mumbai pune mumbai"}
        ])
    });
})