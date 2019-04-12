'use strict'

/**
 * Define class
 */

class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement

    this.leftButton = this.carouselElement.querySelector('.left-button')
    this.rightButton = this.carouselElement.querySelector('.right-button')
    this.images = this.carouselElement.querySelectorAll('img')
    this.currentIndex = 0

    this.leftButton.addEventListener('click', () => this.clickLeft())
    this.rightButton.addEventListener('click', () => this.clickRight())

    this.hideAllImages()
    this.showImage(this.currentIndex)
  }

  hideAllImages() {
    this.images.forEach(image => image.style.display = 'none')
    this.images.forEach(image => image.style.opacity = 0)
  }

  showImage(index) {
    this.images[index].style.display = 'block'
    this.images[index].style.opacity = 1
  }

  clickLeft() {
    this.currentIndex = (this.currentIndex <= 0) ? this.images.length - 1 : this.currentIndex - 1

    this.hideAllImages()
    this.showImage(this.currentIndex)
  }

  clickRight() {
    this.currentIndex = (this.currentIndex >= this.images.length - 1) ? 0 : this.currentIndex + 1

    this.hideAllImages()
    this.showImage(this.currentIndex)
  }
}

/**
 * Mount component
 */

let carousel = new Carousel(document.querySelector('.carousel'))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
