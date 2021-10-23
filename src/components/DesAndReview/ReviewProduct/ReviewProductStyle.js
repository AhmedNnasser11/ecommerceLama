import styled from "styled-components";

export const ReviewProductContainer = styled.section`
  width: 100%;
  h4 {
    color: #555555;
    font-weight: 700;
    font-size: 1.25em;
    margin-bottom: 20px;
  }
  form {
    width: 100%;
  }
  .rating {
    display: flex;
    align-items: center;
    color: #222;
    font-weight: bold;
    font-size: 0.9em;
    margin-bottom: 0.4em;
  }
  .comment {
    width: 100%;
    margin-bottom: 30px;
    label {
      color: #222;
      font-weight: bold;
      font-size: 0.9em;
      margin-bottom: 0.4em;
    }
    textarea {
      border: 1px solid #ddd;
      color: #333;
      height: 130px;
      width: 100%;
      padding-top: 0.7em;
      resize: none;
      font-size: 15px;
      &:focus {
        box-shadow: 0 0 5px #ccc;
        outline: 0;
        transition: 0.3s all ease;
      }
    }
  }
  .username {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;
    @media (max-width: 555px) {
    flex-direction: column;
    .text:first-of-type{
      margin-bottom: 30px;
    }
    .text input{
        width: 100% !important;
      }
  }
    .text {
      display: flex;
      flex-direction: column;
      width: 100%;
      label {
        color: #222;
        font-weight: bold;
        font-size: 0.9em;
        margin-bottom: 0.4em;
      }
      input {
        width: 90%;
        height: 40px;
        border: 1px solid #ddd;
        color: #333;
        &:focus {
          box-shadow: 0 0 5px #ccc;
          outline: 0;
          transition: 0.3s all ease;
        }
      }
    }
  }
  .submit {
    display: flex;
    flex-direction: column;
  }
  .button__submit {
    width: 100px;
    height: 40px;
    background-color: #0e417c;
    font-weight: bold;
    border-radius: 0;
  }
`;
