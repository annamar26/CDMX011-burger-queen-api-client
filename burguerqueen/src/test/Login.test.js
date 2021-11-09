import React, { useState } from "react";
import Login from "../components/Login";
import Form from "../components/Form";
import Menu from "../components/Menu";
import { render, fireEvent, screen} from '@testing-library/react'



test('<Renders the menu page with the correct data', () => {
 

  const component = render(
    <Form  />
  )

  const email = component.container.querySelector('#email')
  fireEvent.change(email, { 
    target: { value: 'correo@ejemplo.com' } 
  })
  const password = component.container.querySelector('#password')
  fireEvent.change(password, { 
    target: { value: '123456' } 
  })
  const button = component.container.querySelector('#Login')
  fireEvent.click(button)
  expect(email.value).toBe('correo@ejemplo.com')
  expect(password.value).toBe('123456')
  expect(render(<Menu />)).toMatchSnapshot()
  expect(render(<Menu />).container.textContent).toBe("Menu");
 



})
test('<Renders the same page with the incorrect data', () => {
 

  const component = render(
    <Form />
  )

  const email = component.container.querySelector('#email')
  fireEvent.change(email, { 
    target: { value: 'correo1@ejemplo.com' } 
  })
  const password = component.container.querySelector('#password')
  fireEvent.change(password, { 
    target: { value: '1234567' } 
  })
  const button = component.container.querySelector('#Login')
  fireEvent.click(button)
  expect(email.value).toBe('correo1@ejemplo.com')
  expect(password.value).toBe('1234567')
  expect(render(<Login />)).toMatchSnapshot()


})

 test('<Icon Should show on should password', () => {
 

  const component = render(
    <Form  />
  )
const password = component.container.querySelector('#password')
  const show = component.container.querySelector('#show')

  const unshow = component.container.querySelector('#unShow')

 
  fireEvent.click(show)
  expect(password.type).toBe('password')
  fireEvent.click(unshow)
  expect(password.type).toBe('text')
  
 



}) 

