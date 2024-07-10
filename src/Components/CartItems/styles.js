// import styled from 'styled-components'

// export const Container = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   padding: 10px;
//   width: max-content;
// `

// export const Body = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   width: max-content;
//   gap: 10px;
//   padding: 10px;
//   img {
//     width: 150px;
//   }
//   p {
//     font-weight: 600;
//     letter-spacing: 0.5px;
//     opacity: 0.8;
//     text-transform: capitalize;
//   }

//   .quantityContainer {
//     display: flex;

//     gap: 10px;
//     font-size: 20px;

//     button {
//       height: 30px;
//       background: transparent;
//       border: none;
//       cursor: pointer;
//       font-weight: 900;
//       font-size: 20px;
//     }

//     p {
//       margin-top: 3px;
//     }
//   }
// `
// export const Header = styled.div`
//   display: grid;
//   gap: 20px;
//   grid-template-columns: repeat(5, 1fr);
//   padding: 10px;
//   border-bottom: 1px solid #ffa387;
//   p {
//     font-size: 16px;
//     color: #b5b5b5;
//   }

//   .tot {
//     padding-left: 30px;
//   }
// `
// export const EmptyCart = styled.p`
//   margin: 50px;
//   color: #b5b5b5;
// `
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 5%;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr 2fr;
  padding: 10px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
  font-weight: bold;

  p {
    text-align: center;
  }

  .tot {
    text-align: right;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr 2fr;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  p {
    text-align: center;
  }

  .quantityContainer {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background-color: #ddd;
      border: none;
      padding: 5px;
      cursor: pointer;

      &:hover {
        background-color: #ccc;
      }
    }

    p {
      margin: 0 10px;
    }
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.2em;
  color: #777;
`
