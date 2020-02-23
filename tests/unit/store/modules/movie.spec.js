import { expect } from 'chai'
import movie from '@/store/modules/movie';
describe('movie',()=>{
    let state = {
        movie:{
            title:"sairat",
            id:789
        }
    }
    it('Getters:getMovieById',()=>{
        expect(movie.getters.getMovieById(state)).to.deep.equal({
            title:"sairat",
            id:789
        })
    })
})