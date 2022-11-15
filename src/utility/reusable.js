// imageCarouselData images
import imageCarouselDataImage1 from '../assets/image_carousel_images/christian-buehner-DItYlc26zVI-unsplash.jpg'
import imageCarouselDataImage2 from '../assets/image_carousel_images/christina-wocintechchat-com-50TkCaP8M3A-unsplash.jpg'
import imageCarouselDataImage3 from '../assets/image_carousel_images/AdobeStock_534825688.jpeg'
import imageCarouselDataImage4 from '../assets/image_carousel_images/AdobeStock_86658618.jpeg'



export const imageCarouselData = [
    {
        image:imageCarouselDataImage1,
        topHeading:'New Arrivals',
        mainHeading:'Designer Collection',
        subHeading:'Up to 25% off on all designer glasses',
    },
    {
        image:imageCarouselDataImage2,
        topHeading:`Spring ${new Date().getFullYear()}`,
        mainHeading:'New Collection',
        subHeading:'Up to 50% off on Eyeglasses',
    },
    {
      image:imageCarouselDataImage3,
      topHeading:`Great Deals`,
      mainHeading:"Men's Collection",
      subHeading:'Affordable glasses for everybody',
    },
    {
      image:imageCarouselDataImage4,
      topHeading:`Best Deals`,
      mainHeading:"Women's Collection",
      subHeading:'Up to 75% off on Sunglasses',
    },
]



/*all items in navbar & sidebar so i don't have to re write it */
export const navItems = [
    {
        name:'Home',
        link:'/',
    },
    {
        name:'Products',
        link:'/products',
    },
    {
        name:'Checkout',
        link:'/checkout',
    },
]













