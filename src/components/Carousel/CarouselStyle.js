import styled from 'styled-components'

export const PrivateContainer = styled.div`
.our__slide{
    width: 100%;
    position: relative;
    z-index: 5;
}
/* .our__slide:hover .slick-next{
    background-color: #1E73BE;
}

.our__slide:hover .slick-next{
    background-color: #1E73BE;
} */

.slick-prev:hover, .slick-next:hover {
    color: #FFF;
    outline: none;
    background-color: #1E73BE;
}

.slider_container:hover .slick-prev, .slider_container:hover .slick-next{

    opacity: 1;
    transition: .3s all ease;
}

.slider_container:hover .slick-prev{
    left: 5px;
    transition: .3s all ease;
}

.slider_container:hover .slick-next{
    right: 5px;
    transition: .3s all ease;
}

.img__slider{
   width: 100%;
   height: 90vh;
    object-fit:cover;
    z-index: 1;
}

.overlay{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0,0,0,.3);
}
.info{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
   
}
.info h3{
    font-size: 35px;
}

.info p{
    font-size: 25px;
    text-align: center;
    line-height: 1.5;
    width: 70%;
}
.slick-prev::before, .slick-next::before{
    display: none;
}

.slick-prev, .slick-next{
    border: 1px solid #fff;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    z-index: 4;
    opacity: 0;
}

.slick-prev{
    left: 60px;
    transition: .3s all ease;
}

.slick-next{
    right: 60px;
    transition: .3s all ease;
}
`
