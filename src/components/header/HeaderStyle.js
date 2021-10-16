import styled from 'styled-components'

export const HeaderContainer = styled.header`
    margin-top: 20px;
    margin-bottom: 20px;
`
export const DeadLineProduct = styled.div`
    width: 100%;
    height: 57.5vh;
    position: relative;
    overflow: hidden;
    &:hover img{
        transform: scale(1.3);
        transition: .3s all ease;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
        transition: .3s all ease;
    }
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
        z-index: 2;

    }
`

export const Info = styled.div`
    width: 100%;
    height: 100%;
    z-index: 2;
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 15px;
    z-index: 3;
`
export const SummerOffer = styled(DeadLineProduct)`
 height: 30vh;
`