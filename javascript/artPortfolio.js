import { art } from '../arrays/artArray.js'
art = require('../../../arrays/artArray');

// import { parse } from 'node-html-parser';
// parse = require('node-html-parser');

const header = document.querySelector('header')
const main = document.querySelector('main')

const allPortfolioButton = document.createElement('button')
allPortfolioButton.textContent = 'All'
allPortfolioButton.addEventListener('click', function () {
    populateDOM(art)
})

//Declare Filters
const artisticPhotoshop = art.filter((piece) => piece.medium === 'artisticPhotoshop')
const digitalArt = art.filter((piece) => piece.medium === 'digital')
const traditional = art.filter((piece) => piece.medium === 'traditional')
const other = art.filter((piece) => piece.medium === 'other')

//Declare Buttons
const artisticPhotoshopButton = document.createElement('button')
artisticPhotoshopButton.textContent = 'Artistic Photoshop'
artisticPhotoshopButton.addEventListener('click', () => populateDOM(artisticPhotoshop))

const digitalArtButton = document.createElement('button')
digitalArtButton.textContent = 'Digital Art'
digitalArtButton.addEventListener('click', () => populateDOM(digitalArt))

const traditionalArtButton = document.createElement('button')
traditionalArtButton.textContent = 'Traditional Art'
traditionalArtButton.addEventListener('click', () => populateDOM(traditional))

const OtherArtButton = document.createElement('button')
OtherArtButton.textContent = 'Other'
OtherArtButton.addEventListener('click', () => populateDOM(other))

//header
header.appendChild(allArtButton)
header.appendChild(artisticPhotoshopButton)
header.appendChild(digitalArtButton)
header.appendChild(traditionalArtButton)
header.appendChild(OtherArtButton)

//populate
function populateDOM(portfolio) {
    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }
    portfolio.forEach((piece) => {
        let figure = document.createElement('figure')
        let figImage = document.createElement('img')
        let figCaption = document.createElement('figcaption')

        let portfolioNum = getLastNumber(piece.url)

        figImage.src = '../photos'
        figCaption.textContent = piece.name

        figure.appendChild(figImage)
        figure.appendChild(figCaption)
        main.appendChild(figure)
    })
}

function getLastNumber(url) {
  let end = url.lastIndexOf('/')
  let start = end - 2
  if (url.artAt(start) === '/'){
    start++
  }
  return url.slice(start,end)
}

populateDOM(art)