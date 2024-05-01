import { getFetchApi } from './api.js'

export const appElement = document.getElementById('comments-container')
const ListElement = document.getElementById('comments')
const UserComment = document.getElementById('add-form-text')
const UserName = document.getElementById('add-form-name')
const likeButtons = document.querySelectorAll('.like-button')
const LoginLink = document.getElementById('login-link')

let Users = []
export const SetUsers = (newUser) => {
    Users = newUser
}

export const preLoaderText = document.getElementById('pre-loader')
preLoaderText.textContent = 'Загрузка комментариев ...'

getFetchApi()

export { ListElement, UserName, UserComment, likeButtons, Users }
