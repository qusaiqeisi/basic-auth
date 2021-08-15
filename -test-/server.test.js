'use strict';
const {app} = require('../src /server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(app);
const base64 = require('base-64');

describe('my API Server', ()=> {

    // add scenarios & test cases 
    // it('handles 404 on a bad route', async () => {
       
    //     const response = await request.get('/asd'); // async
    //     expect(response.status).toEqual(404);
    // });


    it('handles 404 on a bad method', async () => {
    
        const response = await request.post('/'); // async
        expect(response.status).toEqual(404);
    });

    it('200 get route /', async () => {
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
        
    });
    it('200 get route /', async () => {
        const response = await request.get('/'); // async
      
        expect(response.text).toEqual('hello from outside qusai');
        
    
    });

    let obj={
        username:'qusai',
        password:'test@123'
    }

    it('Create a record using POST signup ', async () => {
       
        const response = await request.post('/signup').send(obj); // async
        expect(response.status).toEqual(201);
      
    
    });

    it('SignUp , SignIn',async()=>{
        const reqObj=await request.post('/signup').send({
            username:'Qusi1qeisi',
            password:'test123@1'
        });
        const data=await request.post('/signin').send({
            username:'Qusi1qeisi',
            password:'test123@1'
        }).auth(reqObj.body.username,'test123@1');
        expect(data.status).toEqual(200);
    })



    
})

