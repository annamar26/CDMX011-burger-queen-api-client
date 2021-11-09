import React from 'react';
import { signInWithEmailAndPassword, auth } from '../lib/firebaseConfig';
import renderer from 'react-test-renderer';
import Login from '../components/Login'
import Menu from '../components/Menu'


test('Login should render', () => {
  const component = renderer.create(
    <Login />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
test('signInWithEmailAndPassword should throw error with wrong credential ', async() => {
    let error = '';
    try {
        await signInWithEmailAndPassword(auth, 'unit-test@gmail.com', '1')
    }catch (err){
        error = err.toString()
    }

    expect(error).toEqual("FirebaseError: Firebase: Error (auth/user-not-found).")
})


test('signInWithEmailAndPassword should return userCredential ', async () => {
const user = await signInWithEmailAndPassword(auth, 'correo@ejemplo.com', '123456');
const component = renderer.create(
    <Menu />,
  );
  let tree = component.toJSON();
expect(user.user).toBeTruthy();
expect(user.user.email).toEqual('correo@ejemplo.com')
expect(tree).toMatchSnapshot();
})


