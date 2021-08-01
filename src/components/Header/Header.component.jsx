import React from 'react';
import styled from 'styled-components';
import { SEARCH_TERM_KEY, DATA_VIDEOS_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
//import useYouTubeApi from '../../utils/hooks/useYouTube2';
//import { Link, useHistory } from 'react-router-dom';
//import { useAuth } from '../../providers/Auth';

const HeaderBody = styled.div`
  background-color: white;
  border-bottom: solid 1px #f1f1f1;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 0.5rem;
  }
`;
const HeaderItems = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Logo = styled.div`
  width: 14rem;
  height: 2rem;
  background-image: url('https://static.comunicae.com.mx/photos/notas/121673/1522087691_PRESS.wizeline_logo.png');
  background-position: center;
  background-size: 160px 70px;
  background-repeat: no-repeat;
`;

const Search = styled.input`
  padding: 16px 16px 16px 60px;
  border: 1px solid;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -8px 1px rgba(248, 10, 10, 0.03);
  font-weight: 300;
  font-size: 15px;
  width: 400px;
  height: 30px;
  :hover {
    background-color: #f8f7f7;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #dbd8d8;
    font-weight: 300;
    font-size: 1.1rem;
  }
`;

const Button = styled.button`
  font-size: 1em;
  font-weight: 600;
  padding: 0.1rem 1rem;
  text-align: center;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  :hover {
    background-color: #f8f7f7;
  }
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  top: 10px;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  left: 0;
  width: 42px;
  border-radius: 15px;
  background: #bebebe;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: red;
    &::after {
      content: '';
      display: flex;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

function Header() {
  // const history = useHistory();
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  //const { data, loading, error, fetchVideos } = useYouTubeApi();
  function handleChange(event) {
    storage.set(SEARCH_TERM_KEY, event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(
      "I can't re-render the info in the cards because I did not how share the new info to the component CARDS xD but the searchTerm is: " +
        storage.get(SEARCH_TERM_KEY)
    );
    //fetchVideos(storage.get(SEARCH_TERM_KEY));
  }
  return (
    <HeaderBody>
      <Logo />
      <form onSubmit={handleSubmit}>
        <Search onChange={handleChange} placeholder="Search..." />
      </form>
      <HeaderItems>
        Dark mode
        <CheckBoxWrapper>
          <CheckBox id="checkbox" type="checkbox" />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
        <Button>
          Login
          {/* {authenticated ? (
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )} */}
        </Button>
      </HeaderItems>
    </HeaderBody>
  );
}

export default Header;
